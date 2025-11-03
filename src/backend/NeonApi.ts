import { Pool } from "pg";
import {
  accessTokenAuthApiResponse,
  accessTokenAuthRequest,
  accessTokenAuthResponse,
  insertUserInfoRequest,
  loginAuthRequest,
  refreshTokenAuthRequest,
} from "../type/NeonApiInterface";
import { createHash, randomBytes } from "crypto";
import * as jwt from "jsonwebtoken";

require("dotenv").config();

export class NeonApi {
  private pool = new Pool({
    host: process.env.REACT_APP_DB_HOST,
    user: process.env.REACT_APP_DB_USER,
    database: process.env.REACT_APP_DB_NAME,
    password: process.env.REACT_APP_DB_PASSWORD,
    port: parseInt(process.env.REACT_APP_DB_PORT || "5432"),
    ssl: true,
  });
  private salt = process.env.REACT_APP_DB_SALT;
  private config = {
    expiresIn: "1H",
    algorithm: "HS256",
  } as const;

  private createTokens(id: number) {
    const response = { accessToken: "", refreshToken: "" };
    // アクセストークン作成
    let randomStr = randomBytes(16).toString("hex");
    // 「ランダム文字列(16バイト) + リクエスト.ユーザーID(ソルト値)」でハッシュ値を作成
    let saltedRandomStr = randomStr + this.salt;
    const accessToken = createHash("sha256")
      .update(saltedRandomStr)
      .digest("hex");

    // リフレッシュトークン作成
    randomStr = randomBytes(16).toString("hex");
    // 「ランダム文字列(16バイト) + リクエスト.ユーザーID(ソルト値)」でハッシュ値を作成
    saltedRandomStr = randomStr + this.salt;
    const refreshToken = createHash("sha256")
      .update(saltedRandomStr)
      .digest("hex");

    const defaultPeyload = {
      id: id,
      accessToken: accessToken,
    };
    const refreshPeyload = {
      id: id,
      refreshToken,
    };
    response.accessToken = jwt.sign(
      defaultPeyload,
      this.salt || "",
      this.config
    );
    response.refreshToken = jwt.sign(refreshPeyload, this.salt || "", {
      ...this.config,
      expiresIn: "72H",
    });

    return { accessToken, refreshToken, response };
  }
  /**
   *
   * @param param0 loginAuthRequest ユーザーIDとパスワードが格納されている
   * @returns accessToken アクセストークンを返却する
   */
  public async loginAuth({ userId, password }: loginAuthRequest) {
    // レスポンス内容(初期値)
    let response = {
      accessToken: "",
      refreshToken: "",
      id: null,
      email: "",
      name: "",
    };
    // リクエスト.パスワード + リクエスト.パスワード(ソルト値)」でハッシュ値を作成
    const hashPassword = createHash("sha256")
      .update(password + this.salt)
      .digest("hex");
    // リクエスト.ユーザーIDとハッシュ値(user_info.password)と一致するユーザー情報を返却する。
    const query = `
            SELECT shitai_user_info.id      AS id
            ,shitai_user_info.user_id      AS email
            , shitai_user_info.user_name      AS name
            FROM shitai_user_info
            WHERE password = $1
              AND user_id = $2;
        `;
    const { rows } = await this.pool.query(query, [hashPassword, userId]);
    // ユーザー情報が存在する場合、アクセストークンを返却する
    // 存在しない場合、エラーメッセージを返却する。
    if (rows.length === 0)
      throw { message: "ユーザーIDもしくはパスワードが間違っています。" };
    let id = rows[0]["id"];
    let name = rows[0]["name"];
    let email = rows[0]["email"];
    if (!id) throw { message: "ログイン認証に失敗しました。" };
    const {
      accessToken,
      refreshToken,
      response: newResponse,
    } = this.createTokens(id);

    // 作成したハッシュ値をアクセストークンとしてsupabaseの任意のレコードに格納する。
    const { rows: updateRows } = await this.pool.query(
      "UPDATE shitai_user_info SET access_token = $1, refresh_token = $2 WHERE user_id = $3 RETURNING id",
      [accessToken, refreshToken, userId]
    );
    if (updateRows.length === 0)
      throw { message: "ログイン認証に失敗しました。" };
    id = updateRows[0]["id"];
    if (!id) throw { message: "ログイン認証に失敗しました。" };

    response = { ...newResponse, id, name, email };
    return response;
  }

  /**
   *
   * @param param0 accessTokenAuthRequest["userInfo"] APIを実行するユーザー情報(ユーザーID、アクセストークン)
   * @returns　"success" or "error"
   */
  public async accessTokenAuth({
    accessToken,
  }: accessTokenAuthRequest["userInfo"]): Promise<
    | "error"
    | "expired access token"
    | { id: string; name: string; email: string }
  > {
    // レスポンス内容(初期値)
    let response:
      | "error"
      | "expired access token"
      | { id: string; name: string; email: string } = "error";
    try {
      let id = "";
      let name;
      let email;
      let decodedAccessToken;
      try {
        let obj = jwt.verify(accessToken, this.salt || "") as {
          id: string;
          accessToken: string;
        };
        id = obj.id;
        decodedAccessToken = obj.accessToken;
        console.log(id, decodedAccessToken);
      } catch (e: any) {
        if ("message" in e) {
          if (e.message === "jwt expired") {
            response = "expired access token";
            return response;
          }
        }
      }
      // ユーザーID、アクセストークンが一致するユーザー情報を取得する。
      const { rows } = await this.pool.query(
        `SELECT *
             FROM shitai_user_info
             WHERE id = $1
               AND access_token = $2;`,
        [id, decodedAccessToken]
      );
      if (rows.length === 0) {
        response = "error";
        return response;
      }
      name = rows[0]["user_name"];
      email = rows[0]["user_id"];
      response = { id, name, email };
      return response;
    } catch (e) {
      response = "error";
      return response;
    }
  }

  /**
   *
   * @param param0 accessTokenAuthRequest["userInfo"] APIを実行するユーザー情報(ユーザーID、アクセストークン)
   * @returns　"success" or "error"
   */
  public async refreshTokenAuth({
    refreshToken,
  }: refreshTokenAuthRequest["userInfo"]) {
    // レスポンス内容(初期値)
    let response:
      | "success"
      | "error"
      | { id: string; accessToken: string; refreshToken: string } = "error";
    let { id, refreshToken: decodedRefreshToken } = jwt.verify(
      refreshToken,
      this.salt || ""
    ) as {
      id: string;
      refreshToken: string;
    };
    // ユーザーID、アクセストークンが一致するユーザー情報を取得する。
    const { rows } = await this.pool.query(
      `SELECT id
             FROM shitai_user_info
             WHERE id = $1
               AND refresh_token = $2;`,
      [id, decodedRefreshToken]
    );
    if (rows.length === 0) {
      response = "error";
      return response;
    }
    const userId = rows[0]["id"];
    const {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
      response: newResponse,
    } = this.createTokens(userId);
    // 作成したハッシュ値をアクセストークンとしてsupabaseの任意のレコードに格納する。
    const { rows: updateRows } = await this.pool.query(
      "UPDATE shitai_user_info SET access_token = $1, refresh_token = $2 WHERE id = $3 RETURNING id",
      [newAccessToken, newRefreshToken, userId]
    );
    if (updateRows.length === 0) {
      response = "error";
      return response;
    }
    id = updateRows[0]["id"];
    if (!id) {
      response = "error";
      return response;
    }
    response = { id, ...newResponse };
    return response;
  }
  /**
   *
   * @param param0 userId,作成に必要な情報(price, description, created_at)
   * @returns　"success" or "error"
   */
  public async insertUserInfo(updateObj: insertUserInfoRequest) {
    // レスポンス内容(初期値)
    let response: "success" | "error" = "success";
    await this.pool.query("BEGIN");
    try {
      // いんんさーとを行う
      const hashPassword = createHash("sha256")
        .update(updateObj.password + this.salt)
        .digest("hex");
      const { rows: insertRows } = await this.pool.query(
        `INSERT INTO "public"."shitai_user_info" ("user_id", "password", "user_name")
          VALUES($1, $2, $3) RETURNING id;`,
        [updateObj.email, hashPassword, updateObj.name]
      );
      if (insertRows.length !== 1) {
        throw {
          message: "ユーザー登録に失敗しました。",
        };
      }
      await this.pool.query("COMMIT");
    } catch (e) {
      await this.pool.query("ROLLBACK");
      throw e;
    }
    return response;
  }
}
