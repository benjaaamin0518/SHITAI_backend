import { Pool } from "pg";
import { Storage, StorageOptions } from "@google-cloud/storage";
const { randomUUID } = require("crypto");
import { Resend } from "resend";
import {
  accessTokenAuthApiResponse,
  accessTokenAuthRequest,
  accessTokenAuthResponse,
  answer,
  insertGroupRequest,
  getWishByIdRequest,
  getWishesApiRequest,
  getWishesRequest,
  Group,
  insertAnswerRequest,
  insertUserInfoRequest,
  insertWishRequest,
  loginAuthRequest,
  Participant,
  ParticipationSchema,
  ParticipationSchemaType,
  refreshTokenAuthRequest,
  schemaType,
  updateWishRequest,
  Wish,
  invitationGroupRequest,
  joinWishRequest,
} from "../type/NeonApiInterface";
import { createHash, randomBytes } from "crypto";
import * as jwt from "jsonwebtoken";
import { ExternalAccountClientOptions, JWTInput } from "google-auth-library";
import { formatDisplayDate } from "../../utils/date";

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
  private columns = [
    '"groupId"',
    '"creatorId"',
    '"category"',
    '"imageData"',
    '"title"',
    '"displayDate"',
    '"displayText"',
    '"notes"',
    '"deadline"',
    '"minParticipants"',
    '"maxParticipants"',
    '"actionLabel"',
    '"withdrawn"',
    '"createdAt"',
    '"participationConfirmSchemaType"',
    '"postConfirmSchemaType"',
    '"implementationDatetime"',
  ] as const;
  private columnNames = [
    { column: "category", name: "カテゴリ" },
    { column: "title", name: "タイトル" },
    { column: "displayDate", name: "表示用日時" },
    { column: "displayText", name: "表示用文字" },
    { column: "notes", name: "備考" },
    { column: "deadline", name: "期限日" },
    { column: "minParticipants", name: "最低確定人数" },
    { column: "maxParticipants", name: "最大確定人数" },
    { column: "implementationDatetime", name: "実施日" },
  ];
  private dateColumns = ["deadline", "implementationDatetime"];
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
    console.log(id, decodedRefreshToken);
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
  private async uploadImageData(imageData: string) {
    const credentials = {
      type: process.env.REACT_APP_CREDENTIALS_TYPE,
      client_email: process.env.REACT_APP_CREDENTIALS_CLIENT_EMAIL,
      private_key: (
        process.env.REACT_APP_CREDENTIALS_PRIVATE_KEY || ""
      ).replace(/\\n/g, "\n"),
      private_key_id: process.env.REACT_APP_CREDENTIALS_PRIVATE_KEY_ID,
      project_id: process.env.REACT_APP_PROJECT_ID,
      client_id: process.env.REACT_APP_CREDENTIALS_CLIENT_ID,
      auth_uri: process.env.REACT_APP_CREDENTIALS_AUTH_URI,
      token_uri: process.env.REACT_APP_CREDENTIALS_TOKEN_URI,
      auth_provider_x509_cert_url:
        process.env.REACT_APP_CREDENTIALS_AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url:
        process.env.REACT_APP_CREDENTIALS_CLIENT_X509_CERT_URL,
      universe_domain: process.env.REACT_APP_CREDENTIALS_UNIVERSE_DOMAIN,
    };
    const storage = new Storage({
      projectId: process.env.REACT_APP_PROJECT_NAME,
      credentials,
    });
    const bucket = storage.bucket(process.env.REACT_APP_BUCKET_NAME || "");

    const parseBase64Image = (base64: string) => {
      const matches = base64.match(/^data:(.+);base64,(.+)$/);
      if (!matches) throw new Error("Invalid Base64 string");
      return { contentType: matches[1], base64Data: matches[2] };
    };

    const uploadBase64Image = async (base64: string, uploadPath: string) => {
      const { contentType, base64Data } = parseBase64Image(base64);
      const buffer = Buffer.from(base64Data, "base64");

      const file = bucket.file(
        uploadPath + "." + contentType.replace("image/", "")
      );

      await file.save(buffer, {
        metadata: {
          contentType,
          cacheControl: "public, max-age=31536000",
        },
      });

      // 必要なら公開
      await file.makePublic();

      return `https://storage.googleapis.com/${file.cloudStorageURI.href.replace(
        "gs://",
        ""
      )}`;
    };
    return imageData ? await uploadBase64Image(imageData, randomUUID()) : null;
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
  private async sendEmail(to: string[], subject: string, html: string) {
    const resend = new Resend(process.env.REACT_APP_RESEND_API_TOKEN);
    const { data, error } = await resend.emails.send({
      from: process.env.REACT_APP_FROM_EMAIL || "",
      to: to,
      subject: subject,
      html: html,
    });

    if (error) {
      return console.error({ error });
    }
  }
  public async insertWish(
    wish: Omit<insertWishRequest, "userInfo">,
    id: number
  ) {
    // レスポンス内容(初期値)
    let response = { id: "" };
    await this.pool.query("BEGIN");
    try {
      // いんんさーとを行う
      const { participationConfirmSchema, postConfirmSchema, ...leftWish } =
        wish;
      console.log(leftWish.groupId);
      const { rows: groupRows } = await this.pool.query(
        `SELECT sg.id, sg."groupName" FROM public.shitai_group as sg INNER JOIN public.shitai_group_join as sjg ON sjg."groupId" = sg.id AND sjg."userId" = $1 WHERE sg.id = $2;`,
        [id, leftWish.groupId]
      );
      console.log(id);
      if (groupRows.length !== 1) {
        throw {
          message: "権限がありません。グループ外のユーザーです。",
        };
      }
      let urlPattern = /^(https?|ftp)(:\/\/[\w\/:%#\$&\?\(\)~\.=\+\-]+)/;

      const isUrl = urlPattern.test(leftWish.imageData || "");
      console.log(leftWish.imageData);
      const imageData = isUrl
        ? leftWish.imageData
        : await this.uploadImageData(leftWish.imageData || "");
      const { rows: insertWishRows } = await this.pool.query(
        `INSERT INTO public.shitai_wish (${this.columns.join(",")}) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, NOW(), $14, $15, $16) RETURNING id;`,
        [
          leftWish.groupId,
          leftWish.creatorId,
          leftWish.category,
          imageData,
          leftWish.title,
          leftWish.displayDate,
          leftWish.displayText,
          leftWish.notes,
          leftWish.deadline == "" ? null : leftWish.deadline,
          leftWish.minParticipants,
          leftWish.maxParticipants,
          leftWish.actionLabel,
          false,
          participationConfirmSchema.type,
          postConfirmSchema.type,
          leftWish.implementationDatetime == ""
            ? null
            : leftWish.implementationDatetime,
        ]
      );
      if (insertWishRows.length !== 1) {
        throw {
          message: "したいことの登録に失敗しました。",
        };
      }

      const createInsertSchema = (
        schema: ParticipationSchema,
        schemaType: schemaType
      ) => {
        let arr: {
          schemaType: schemaType;
          type: Omit<ParticipationSchemaType, "mixed">;
          label?: string;
          required?: boolean;
        }[] = [];
        switch (schema.type) {
          case "mixed":
            arr.push({
              schemaType,
              type: "datetime",
              label: schema.datetimeLabel,
              required: schema.datetimeRequired,
            });
            arr.push({
              schemaType,
              type: "note",
              label: schema.noteLabel,
              required: schema.noteRequired,
            });
            break;
          case "datetime":
            arr.push({
              schemaType,
              type: "datetime",
              label: schema.datetimeLabel,
              required: schema.datetimeRequired,
            });
            break;
          case "note":
            arr.push({
              schemaType,
              type: "note",
              label: schema.noteLabel,
              required: schema.noteRequired,
            });
            break;
          default:
            arr.push({
              schemaType,
              type: "none",
              label: schema.noteLabel,
              required: schema.noteRequired,
            });
            break;
        }
        return arr;
      };
      for (const schema of [
        ...createInsertSchema(participationConfirmSchema, "participation"),
        ...createInsertSchema(postConfirmSchema, "post"),
      ]) {
        const { rows: insertRows } = await this.pool.query(
          `INSERT INTO "public"."shitai_schema" ("wishId", "schemaType", "type", "required", "label")
          VALUES($1, $2, $3, $4, $5) RETURNING id;`,
          [
            insertWishRows[0]["id"],
            schema.schemaType,
            schema.type,
            schema.required,
            schema.label,
          ]
        );
        if (insertRows.length === 0) {
          throw {
            message: "確認項目の登録に失敗しました。",
          };
        }
      }
      response.id = insertWishRows[0]["id"];
      // グループメンバ情報取得
      const { rows: mailRows } = await this.pool.query(
        `SELECT sui.user_id As mail
        FROM public.shitai_group_join as sgj INNER JOIN shitai_user_info as sui ON sui.id = sgj."userId" WHERE sgj."groupId" = $1;`,
        [leftWish.groupId]
      );
      if (mailRows.length === 0) {
        throw {
          message: "グループメンバ情報の取得に失敗しました。",
        };
      }
      const groupName = groupRows[0]["groupName"];

      // 作成者情報取得
      const { rows: userRows } = await this.pool.query(
        `SELECT sui.user_name As name, sui.user_id As mail
        FROM shitai_user_info as sui WHERE sui."id" = $1;`,
        [leftWish.creatorId]
      );
      if (userRows.length === 0) {
        throw {
          message: "作成者情報の取得に失敗しました。",
        };
      }
      const creatorName = userRows[0]["name"];
      const creatorMail = userRows[0]["mail"];
      const to = mailRows
        .map((row) => row["mail"])
        .filter((mail) => mail != creatorMail);
      console.log(to);

      // メール内容作成
      const description = Object.keys(leftWish).reduce((prev, current) => {
        const obj = this.columnNames.find((obj) => obj.column == current);
        const isDate = this.dateColumns.some((dtCol) => dtCol == current);
        const column = current as keyof Omit<
          insertWishRequest,
          "userInfo" | "id" | "participationConfirmSchema" | "postConfirmSchema"
        >;
        if (obj) {
          return (
            prev +
            "<tr><td>" +
            `${obj.name}</td><td>${
              isDate
                ? formatDisplayDate(leftWish[column] as string)
                : leftWish[column]
            }</td></tr>`
          );
        }
        return prev;
      }, "");

      const html = `
<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>新しい「したい」通知</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", Arial, sans-serif; margin:0; padding:0; background:#f6f8fb; color:#111; }
    .container { max-width:600px; margin:28px auto; background:#fff; border-radius:8px; overflow:hidden; box-shadow:0 6px 24px rgba(20,30,60,0.08); }
    .header { padding:20px; background:linear-gradient(90deg,#1f6feb,#6b9cff); color:#fff; }
    .content { padding:20px; }
    .title { font-size:18px; margin:0 0 8px 0; }
    .meta { font-size:13px; color:#6b7280; margin-bottom:16px; }
    .card { background:#f7f9fc; padding:14px; border-radius:6px; margin-bottom:16px; }
    .btn { display:inline-block; padding:12px 18px; border-radius:8px; text-decoration:none; font-weight:600; }
    .btn-primary { background:#1f6feb; color:#fff; }
    .footer { font-size:12px; color:#9aa0ab; padding:18px; text-align:center; }
    .kv { font-weight:700; color:#111; }
    pre { white-space:pre-wrap; word-wrap:break-word; }
  </style>
</head>
<body>
  <div class="container" role="article" aria-label="SHITAI 新しいしたい通知">
    <div class="header">
      <h1 style="font-size:20px;margin:0">SHITAI</h1>
      <p style="margin:6px 0 0 0;font-size:13px;opacity:0.95">グループ内に新しい「したい」が投稿されました</p>
    </div>

    <div class="content">
      <p class="title">🔔 新着：${leftWish.title}</p>
      <p class="meta"><span class="kv">作成者：</span> ${creatorName} &nbsp;|&nbsp; <span class="kv">グループ：</span> ${groupName}</p>

      <div class="card">
        <p style="margin:0 0 8px 0;"><span class="kv">内容</span></p>
        <pre style="margin:0;"><table>${description}</table></pre>
      </div>

      <p style="margin:0 0 18px 0;">詳細や参加は下のボタンから確認してください。</p>

      <a class="btn btn-primary" href="${
        process.env.REACT_APP_FRONTEND_URL + "/" + "wish" + "/" + response.id
      }" target="_blank" rel="noopener">詳細を確認する</a>

      <hr style="border:none;border-top:1px solid #eef2f7;margin:18px 0;" />

      <p style="margin:0;font-size:13px;color:#556070;">
        気になる「したい」があれば、参加やリアクションでグループを活性化しましょう！
      </p>
    </div>
    <div class="footer">
      このメールは自動配信です。
    </div>
  </div>
</body>
</html>
`;
      if (to.length != 0) {
        await this.sendEmail(
          to,
          `【SHITAI】新しい「したい」が投稿されました — ${leftWish.title}`,
          html
        );
      }
      await this.pool.query("COMMIT");
    } catch (e) {
      await this.pool.query("ROLLBACK");
      throw e;
    }
    return response;
  }
  private async createResponseData(wishId: string) {
    try {
      const { rows: schemaRows } = await this.pool.query(
        `SELECT sw."participationConfirmSchemaType", sw."postConfirmSchemaType", ss."schemaType", ss."type", ss."required", ss."label"
        FROM public.shitai_wish as sw INNER JOIN shitai_schema as ss ON ss."wishId" = sw.id WHERE sw.id = $1;`,
        [wishId]
      );
      if (schemaRows.length === 0) {
        throw {
          message: "スキーマの取得に失敗しました。",
        };
      }
      const schemaMap = new Map<schemaType, ParticipationSchema>();
      for (const schema of schemaRows) {
        const {
          participationConfirmSchemaType,
          postConfirmSchemaType,
          schemaType,
          type,
          required,
          label,
        } = schema;
        schemaMap.set(schemaType, {
          ...schemaMap.get(schemaType),
          type:
            (schemaType as schemaType) === "participation"
              ? participationConfirmSchemaType
              : postConfirmSchemaType,
          [type + "Label"]: label,
          [type + "Required"]: required,
        });
      }

      const { rows: answerRows } = await this.pool.query(
        `SELECT sj."joinedAt", sj."userId", ss."schemaType", ss.type, sa.value
        FROM shitai_join as sj LEFT JOIN shitai_schema as ss ON ss."wishId" = $1 LEFT JOIN public.shitai_answer as sa ON sa."schemaId" = ss.id AND ss."wishId" = $1 AND sa."userId" = sj."userId" WHERE sj."wishId" = $1 ORDER BY sj."joinedAt" ASC;`,
        [wishId]
      );
      // if (answerRows.length === 0) {
      //   throw {
      //     message: "アンサーの取得に失敗しました。",
      //   };
      // }
      const answerMap = new Map<string, Participant>();
      let participants: Participant[] = [];
      for (const answer of answerRows) {
        const { joinedAt, userId, schemaType, type, value } = answer;
        if (!userId || !type) continue;
        answerMap.set(userId, {
          ...(answerMap.get(userId) ? answerMap.get(userId) : {}),
          userId,
          joinedAt,
          [schemaType + "Answers"]: {
            ...(answerMap.get(userId)
              ? schemaType + "Answers" in (answerMap.get(userId) as Participant)
                ? ((answerMap.get(userId) as Participant)[
                    (schemaType + "Answers") as
                      | "participationAnswers"
                      | "postAnswers"
                  ] as { datetime: string; note: string })
                : {}
              : {}),
            [type]: value,
          },
        });
        participants = [...answerMap.values()];
      }
      return {
        participationConfirmSchema: schemaMap.get("participation"),
        postConfirmSchema: schemaMap.get("post"),
        participants,
      };
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
  public async getWishById(wishId: number, id: number) {
    // レスポンス内容(初期値)
    let response: Wish = {
      id: wishId.toString(),
      groupId: "",
      creatorId: "",
      category: "",
      title: "",
      minParticipants: 0,
      actionLabel: "",
      participationConfirmSchema: { type: "none" },
      postConfirmSchema: { type: "none" },
      participants: [],
      withdrawn: false,
      createdAt: "",
    };
    try {
      const { rows: groupRows } = await this.pool.query(
        `SELECT sg.id FROM public.shitai_wish as sw INNER JOIN public.shitai_group as sg ON sw."groupId" = sg.id INNER JOIN public.shitai_group_join as sjg ON sjg."groupId" = sg.id AND sjg."userId" = $1 WHERE sw.id = $2;`,
        [id, wishId]
      );
      if (groupRows.length !== 1) {
        throw {
          message: "権限がありません。グループ外のユーザーです。",
        };
      }

      const { rows: wishRows } = await this.pool.query(
        `SELECT ${this.columns.join(",")}
        FROM public.shitai_wish WHERE id = $1;`,
        [wishId]
      );
      if (wishRows.length !== 1) {
        throw {
          message: "したいことの取得に失敗しました。",
        };
      }
      console.log(wishRows[0]);
      const res = await this.createResponseData(wishId.toString());
      let extColumns = this.columns.filter(
        (col) =>
          col !== '"participationConfirmSchemaType"' &&
          col !== '"postConfirmSchemaType"'
      );
      extColumns.forEach((column) => {
        const repColumn = column.replaceAll('"', "");
        console.log(repColumn);
        const value = wishRows[0][repColumn];
        if (value) {
          response = { ...response, [repColumn]: value };
        }
      });
      (
        [
          "participationConfirmSchema",
          "postConfirmSchema",
          "participants",
        ] as const
      ).forEach((column) => {
        if (res && column in res) {
          response = {
            ...response,
            [column]: res[column],
          };
        }
      });
      return response;
    } catch (e) {
      throw e;
    }
  }
  public async insertAnswer(
    answer: Omit<insertAnswerRequest, "userInfo">,
    id: number,
    wishId: number
  ) {
    // レスポンス内容(初期値)
    let response: "success" | "error" = "success";
    await this.pool.query("BEGIN");
    try {
      const { rows: groupRows } = await this.pool.query(
        `SELECT sg.id, sg."groupName" FROM public.shitai_wish as sw INNER JOIN public.shitai_group as sg ON sw."groupId" = sg.id INNER JOIN public.shitai_group_join as sjg ON sjg."groupId" = sg.id AND sjg."userId" = $1 WHERE sw.id = $2;`,
        [id, wishId]
      );
      if (groupRows.length !== 1) {
        throw {
          message: "権限がありません。グループ外のユーザーです。",
        };
      }
      // いんんさーとを行う
      const answers: { schemaId: string; value: string }[] = [];
      for (const key of Object.keys(answer)) {
        for (const schema of Object.keys(
          answer[key as keyof Omit<insertAnswerRequest, "userInfo">] as answer
        )) {
          const repKey = key.replace("Answers", "");
          const value = (
            answer[key as keyof Omit<insertAnswerRequest, "userInfo">] as answer
          )[schema as keyof answer];
          if (!value || value == "") continue;
          const { rows: insertAnswerRows } = await this.pool.query(
            `INSERT INTO public.shitai_answer ("userId", "schemaId", "value") SELECT $1, ss.id, $2 FROM public.shitai_schema as ss WHERE ss."schemaType" = $3 AND ss."type" = $4 AND ss."wishId" = $5 LIMIT 1 RETURNING id, "schemaId", "value"`,
            [id, value, repKey, schema, wishId]
          );
          if (insertAnswerRows.length !== 1) {
            throw {
              message: "アンサーの登録に失敗しました。",
            };
          }
          answers.push({
            schemaId: insertAnswerRows[0]["schemaId"],
            value: insertAnswerRows[0]["value"],
          });
        }
      }
      // 既存参加者情報取得
      const { rows: userRows } = await this.pool.query(
        `SELECT sui.user_id As mail
        FROM shitai_join as sj INNER JOIN shitai_user_info as sui ON sui.id = sj."userId" WHERE sj."wishId" = $1;`,
        [wishId]
      );
      if (userRows.length === 0) {
        throw {
          message: "既存参加者情報の取得に失敗しました。",
        };
      }

      const groupName = groupRows[0]["groupName"];

      // 参加者情報取得
      const { rows: joinUserRows } = await this.pool.query(
        `SELECT sui.user_name As name, sui.user_id As mail
        FROM shitai_user_info as sui WHERE sui."id" = $1;`,
        [id]
      );
      if (userRows.length === 0) {
        throw {
          message: "参加者情報の取得に失敗しました。",
        };
      }
      // 作成者情報取得
      const { rows: creatorUserRows } = await this.pool.query(
        `SELECT sui.user_name As name, sui.user_id As mail, sw.title
        FROM shitai_wish as sw INNER JOIN shitai_user_info as sui ON sw."creatorId" = sui."id" WHERE sw.id = $1;`,
        [wishId]
      );
      if (creatorUserRows.length === 0) {
        throw {
          message: "作成者情報の取得に失敗しました。",
        };
      }
      const creatorName = creatorUserRows[0]["name"];
      const creatorMail = creatorUserRows[0]["mail"];
      const title = creatorUserRows[0]["title"];
      userRows.push({ mail: creatorMail });

      const joinUserName = joinUserRows[0]["name"];
      const joinUserMail = joinUserRows[0]["mail"];
      const to = userRows
        .map((row) => row["mail"])
        .filter((mail) => mail != joinUserMail);
      console.log(to);

      // メール内容作成
      let description = "";
      for (const answer of answers) {
        const { rows: schemaRows } = await this.pool.query(
          `SELECT ss."schemaType", ss."type", ss."required", ss."label"
        FROM shitai_schema as ss WHERE ss.id = $1;`,
          [answer.schemaId]
        );
        if (schemaRows.length !== 1) {
          throw {
            message: "スキーマの取得に失敗しました。",
          };
        }
        const isDate = schemaRows[0]["type"] == "datetime";
        description =
          description +
          "<tr><td>" +
          `${schemaRows[0]["label"]}</td><td>${
            isDate ? formatDisplayDate(answer.value) : answer.value
          }</td></td>`;
      }

      const html = `
<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>参加者の入力通知</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", Arial, sans-serif; margin:0; padding:0; background:#f6f8fb; color:#111; }
    .container { max-width:600px; margin:28px auto; background:#fff; border-radius:8px; overflow:hidden; box-shadow:0 6px 24px rgba(20,30,60,0.08); }
    .header { padding:20px; background:#7c3aed; color:#fff; }
    .content { padding:20px; }
    .title { font-size:18px; margin:0 0 8px 0; }
    .meta { font-size:13px; color:#6b7280; margin-bottom:12px; }
    .form { background:#f7f9fc; padding:14px; border-radius:6px; margin-bottom:16px; }
    .btn { display:inline-block; padding:12px 18px; border-radius:8px; text-decoration:none; font-weight:600; }
    .btn-primary { background:#7c3aed; color:#fff; }
    .footer { font-size:12px; color:#9aa0ab; padding:18px; text-align:center; }
    table { width:100%; border-collapse:collapse; }
    td { padding:8px 0; vertical-align:top; }
    .key { font-weight:700; color:#111; width:36%; }
    .val { color:#222; }
  </style>
</head>
<body>
  <div class="container" role="article">
    <div class="header">
      <h1 style="font-size:20px;margin:0">SHITAI</h1>
      <p style="margin:6px 0 0 0;font-size:13px;opacity:0.95">参加者が確認項目を入力しました</p>
    </div>

    <div class="content">
      <p class="title">👥 ${joinUserName} さんが参加・確認しました — ${title}</p>
      <p class="meta"><span style="font-weight:700">グループ：</span> ${groupName} </p>

      <div class="form">
        <p style="margin:0 0 12px 0;"><strong>入力された確認項目</strong></p>
        <table>
      ${description}
      </table>
      </div>

      <p style="margin:0 0 18px 0;">参加者情報の最新状況は下のリンクで確認できます。</p>
      <a class="btn btn-primary" href="${
        process.env.REACT_APP_FRONTEND_URL + "/" + "wish" + "/" + wishId
      }" target="_blank" rel="noopener">参加者情報を確認する</a>

      <hr style="border:none;border-top:1px solid #eef2f7;margin:18px 0;" />
      <p style="margin:0;font-size:13px;color:#556070;">
        必要であれば主催者や他の参加者へ連絡を取りましょう。
      </p>
    </div>
    <div class="footer">
      このメールは自動配信です。
    </div>
  </div>
</body>
</html>
`;
      if (to.length != 0) {
        await this.sendEmail(
          to,
          `【SHITAI】参加者が入力しました — ${title}（${joinUserName}）`,
          html
        );
      }
      await this.pool.query("COMMIT");
    } catch (e) {
      await this.pool.query("ROLLBACK");
      throw e;
    }
    return response;
  }
  public async updateWish(
    wish: Omit<updateWishRequest, "userInfo">,
    id: number
  ) {
    // レスポンス内容(初期値)
    let response: "success" | "error" = "success";
    await this.pool.query("BEGIN");
    try {
      const { rows: groupRows } = await this.pool.query(
        `SELECT sg.id, sg."groupName" FROM public.shitai_wish as sw INNER JOIN public.shitai_group as sg ON sw."groupId" = sg.id INNER JOIN public.shitai_group_join as sjg ON sjg."groupId" = sg.id AND sjg."userId" = $1 WHERE sw.id = $2;`,
        [id, wish.id]
      );
      if (groupRows.length !== 1) {
        throw {
          message: "権限がありません。グループ外のユーザーです。",
        };
      }
      const { id: wishId, ...updateWish } = wish;
      let urlPattern = /^(https?|ftp)(:\/\/[\w\/:%#\$&\?\(\)~\.=\+\-]+)/;

      const isUrl = urlPattern.test(updateWish.imageData || "");
      const imageData = isUrl
        ? updateWish.imageData
        : await this.uploadImageData(updateWish.imageData || "");
      console.log("-----------------------", imageData);

      const { rows: updateRows } = await this.pool.query(
        `UPDATE public.shitai_wish SET ${Object.keys(updateWish).reduce(
          (prev, current) => {
            console.log("----------------------", isUrl);
            const value =
              updateWish[
                current as keyof Omit<updateWishRequest, "userInfo" | "id">
              ] == ""
                ? "NULL"
                : current == "imageData"
                ? imageData
                  ? "'" + imageData + "'"
                  : "NULL"
                : "'" +
                  updateWish[
                    current as keyof Omit<updateWishRequest, "userInfo" | "id">
                  ] +
                  "'";
            const str = `"${current}"` + " = " + `${value}`;
            console.log("-----------------------", str);

            return prev !== "" ? prev + ", " + str : str;
          },
          ""
        )} WHERE id = $1 RETURNING id;`,
        [wish.id]
      );
      if (updateRows.length === 0) {
        throw {
          message: "したいことの更新に失敗しました。",
        };
      }
      // 既存参加者情報取得
      const { rows: userRows } = await this.pool.query(
        `SELECT sui.user_id As mail
        FROM shitai_join as sj INNER JOIN shitai_user_info as sui ON sui.id = sj."userId" WHERE sj."wishId" = $1;`,
        [wishId]
      );
      if (userRows.length === 0) {
        throw {
          message: "既存参加者情報の取得に失敗しました。",
        };
      }

      const groupName = groupRows[0]["groupName"];

      // 参加者情報取得
      const { rows: joinUserRows } = await this.pool.query(
        `SELECT sui.user_name As name, sui.user_id As mail
        FROM shitai_user_info as sui WHERE sui."id" = $1;`,
        [id]
      );
      if (userRows.length === 0) {
        throw {
          message: "参加者情報の取得に失敗しました。",
        };
      }
      // 作成者情報取得
      const { rows: creatorUserRows } = await this.pool.query(
        `SELECT sui.user_name As name, sui.user_id As mail, sw.title
        FROM shitai_wish as sw INNER JOIN shitai_user_info as sui ON sw."creatorId" = sui."id" WHERE sw.id = $1;`,
        [wishId]
      );
      if (creatorUserRows.length === 0) {
        throw {
          message: "作成者情報の取得に失敗しました。",
        };
      }
      const creatorName = creatorUserRows[0]["name"];
      const creatorMail = creatorUserRows[0]["mail"];
      const title = creatorUserRows[0]["title"];
      userRows.push({ mail: creatorMail });
      const to = userRows
        .map((row) => row["mail"])
        .filter((mail) => mail != creatorMail);
      console.log(to);
      // メール内容作成
      const description = Object.keys(wish).reduce((prev, current) => {
        const obj = this.columnNames.find((obj) => obj.column == current);
        const isDate = this.dateColumns.some((dtCol) => dtCol == current);
        const column = current as keyof Omit<
          insertWishRequest,
          "userInfo" | "id" | "participationConfirmSchema" | "postConfirmSchema"
        >;
        if (obj) {
          return (
            prev +
            "<tr><td>" +
            `${obj.name}</td><td>${
              isDate ? formatDisplayDate(wish[column] as string) : wish[column]
            }</td></tr>`
          );
        }
        return prev;
      }, "");

      const html = `
<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>したい更新通知</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", Arial, sans-serif; margin:0; padding:0; background:#f6f8fb; color:#111; }
    .container { max-width:600px; margin:28px auto; background:#fff; border-radius:8px; overflow:hidden; box-shadow:0 6px 24px rgba(20,30,60,0.08); }
    .header { padding:20px; background:#0f766e; color:#fff; }
    .content { padding:20px; }
    .title { font-size:18px; margin:0 0 8px 0; }
    .meta { font-size:13px; color:#6b7280; margin-bottom:12px; }
    .changes { background:#fff8e6; padding:12px; border-radius:6px; border:1px solid #f1e6c8; margin-bottom:16px; }
    .btn { display:inline-block; padding:12px 18px; border-radius:8px; text-decoration:none; font-weight:600; }
    .btn-primary { background:#0f766e; color:#fff; }
    .footer { font-size:12px; color:#9aa0ab; padding:18px; text-align:center; }
  </style>
</head>
<body>
  <div class="container" role="article">
    <div class="header">
      <h1 style="font-size:20px;margin:0">SHITAI</h1>
      <p style="margin:6px 0 0 0;font-size:13px;opacity:0.95">「したい」の更新がありました</p>
    </div>

    <div class="content">
      <p class="title">✏️ 更新：${title}</p>
      <p class="meta"><span style="font-weight:700">更新者：</span> ${creatorName} </p>

      <div class="changes">
        <p style="margin:0 0 8px 0;"><strong>変更された項目</strong></p>
        <pre style="margin:0;"><table>${description}</table></pre>
      </div>

      <p style="margin:0 0 18px 0;">変更の詳細は下のリンクからご確認ください。</p>
      <a class="btn btn-primary" href="${
        process.env.REACT_APP_FRONTEND_URL + "/" + "wish" + "/" + wishId
      }" target="_blank" rel="noopener">更新内容を確認する</a>

      <hr style="border:none;border-top:1px solid #eef2f7;margin:18px 0;" />
      <p style="margin:0;font-size:13px;color:#556070;">
        参加予定の方は予定や入力内容に影響がないかご確認ください。
      </p>
    </div>

    <div class="footer">
      このメールは SHITAI からの自動通知です。
    </div>
  </div>
</body>
</html>

`;
      if (to.length != 0) {
        await this.sendEmail(
          to,
          `【SHITAI】「したい」が更新されました — ${title}`,
          html
        );
      }
      await this.pool.query("COMMIT");
    } catch (e) {
      await this.pool.query("ROLLBACK");
      throw e;
    }
    return response;
  }
  public async getWishes(groupId: number, id: number) {
    // レスポンス内容(初期値)
    let response: Wish[] = [];
    try {
      const { rows: groupRows } = await this.pool.query(
        `SELECT sg.id FROM public.shitai_group as sg INNER JOIN public.shitai_group_join as sjg ON sjg."groupId" = sg.id AND sjg."userId" = $1 WHERE sg."id" = $2;`,
        [id, groupId]
      );
      if (groupRows.length !== 1) {
        throw {
          message: "権限がありません。グループ外のユーザーです。",
        };
      }

      const { rows: wishRows } = await this.pool.query(
        `SELECT id, ${this.columns.join(",")}
        FROM public.shitai_wish WHERE "groupId" = $1 ORDER BY id ASC;`,
        [groupId]
      );
      if (wishRows.length === 0) {
        throw {
          message: "したいことの取得に失敗しました。",
        };
      }
      for (const wish of wishRows) {
        let resWish: Wish = {
          id: wish.id,
          groupId: "",
          creatorId: "",
          category: "",
          title: "",
          minParticipants: 0,
          actionLabel: "",
          participationConfirmSchema: { type: "none" },
          postConfirmSchema: { type: "none" },
          participants: [],
          withdrawn: false,
          createdAt: "",
        };
        console.log(wish["id"], wish);
        const res = await this.createResponseData(wish.id);
        let extColumns = this.columns.filter(
          (col) =>
            col !== '"participationConfirmSchemaType"' &&
            col !== '"postConfirmSchemaType"'
        );
        extColumns.forEach((column) => {
          const repColumn = column.replaceAll('"', "");
          console.log(repColumn);
          const value = wish[repColumn];
          if (value) {
            resWish = { ...resWish, [repColumn]: value };
          }
        });
        (
          [
            "participationConfirmSchema",
            "postConfirmSchema",
            "participants",
          ] as const
        ).forEach((column) => {
          if (res && column in res) {
            resWish = {
              ...resWish,
              [column]: res[column],
            };
          }
        });
        response.push(resWish);
      }
      return response;
    } catch (e) {
      throw e;
    }
  }
  public async getGroups(id: number) {
    // レスポンス内容(初期値)
    let response: Group[] = [];
    try {
      const { rows: joinGroupRows } = await this.pool.query(
        `SELECT sg.id, sg."groupName"
        FROM public.shitai_group_join as sgj INNER JOIN shitai_group as sg ON sg.id = sgj."groupId" WHERE sgj."userId" = $1 ORDER BY sg.id ASC;`,
        [id]
      );
      if (joinGroupRows.length === 0) {
        throw {
          message: "参加グループの取得に失敗しました。",
        };
      }
      for (const group of joinGroupRows) {
        const groupObj: Group = {
          id: group["id"],
          name: group["groupName"],
          members: [],
        };
        //メンバー情報を取得する。
        const { rows: joinMemberRows } = await this.pool.query(
          `SELECT DISTINCT sui.id, sui.user_name, sui.user_id
        FROM public.shitai_group_join as sgj INNER JOIN shitai_user_info as sui ON sui.id = sgj."userId" WHERE sgj."groupId" = $1;`,
          [group["id"]]
        );
        if (joinMemberRows.length === 0) {
          throw {
            message: "メンバー情報の取得に失敗しました。",
          };
        }
        groupObj.members = joinMemberRows.map((member) => {
          return {
            id: member["id"],
            name: member["user_name"],
            email: member["user_id"],
          };
        });
        response.push(groupObj);
      }
      return response;
    } catch (e) {
      throw e;
    }
  }
  public async insertGroup(
    id: number,
    group: Omit<insertGroupRequest, "userInfo">
  ) {
    // レスポンス内容(初期値)
    let response = { id: "" };
    await this.pool.query("BEGIN");
    try {
      // いんんさーとを行う
      const { rows: insertRows } = await this.pool.query(
        `INSERT INTO shitai_group ("groupName")
          VALUES($1) RETURNING id;`,
        [group.name]
      );
      if (insertRows.length !== 1) {
        throw {
          message: "グループ登録に失敗しました。",
        };
      }
      const { rows: insertJoinRows } = await this.pool.query(
        `INSERT INTO shitai_group_join ("groupId", "userId")
          VALUES($1, $2) RETURNING id;`,
        [insertRows[0]["id"], id]
      );
      if (insertJoinRows.length !== 1) {
        throw {
          message: "グループ参加登録に失敗しました。",
        };
      }
      await this.pool.query("COMMIT");
      response.id = insertRows[0]["id"];
    } catch (e) {
      await this.pool.query("ROLLBACK");
      throw e;
    }
    return response;
  }
  public async invitationGroup(
    id: number,
    { invitationUserId, groupId }: Omit<invitationGroupRequest, "userInfo">
  ) {
    // レスポンス内容(初期値)
    let response: "success" | "error" = "success";
    await this.pool.query("BEGIN");
    try {
      // いんんさーとを行う
      const { rows: userRows } = await this.pool.query(
        `SELECT id FROM shitai_user_info WHERE user_id = $1`,
        [invitationUserId]
      );
      if (userRows.length !== 1) {
        throw {
          message: "ユーザー情報取得に失敗しました。",
        };
      }
      const { rows: groupRows } = await this.pool.query(
        `SELECT id FROM shitai_group_join WHERE "userId" = $1 AND "groupId" = $2`,
        [userRows[0]["id"], groupId]
      );
      if (groupRows.length !== 0) {
        throw {
          message: "すでに参加しているグループです。",
        };
      }
      const { rows: insertRows } = await this.pool.query(
        `INSERT INTO shitai_group_join ("groupId", "userId") VALUES ($1, $2) RETURNING id;`,
        [groupId, userRows[0]["id"]]
      );
      if (insertRows.length !== 1) {
        throw {
          message: "グループジョイン登録に失敗しました。",
        };
      }
      await this.pool.query("COMMIT");
    } catch (e) {
      await this.pool.query("ROLLBACK");
      throw e;
    }
    return response;
  }
  public async joinWish(
    id: number,
    { wishId }: Omit<joinWishRequest, "userInfo">
  ) {
    // レスポンス内容(初期値)
    let response: "success" | "error" = "success";
    await this.pool.query("BEGIN");
    try {
      const { rows: groupRows } = await this.pool.query(
        `SELECT sg.id, sg."groupName" FROM public.shitai_wish as sw INNER JOIN public.shitai_group as sg ON sw."groupId" = sg.id INNER JOIN public.shitai_group_join as sjg ON sjg."groupId" = sg.id AND sjg."userId" = $1 WHERE sw.id = $2;`,
        [id, wishId]
      );
      if (groupRows.length !== 1) {
        throw {
          message: "権限がありません。グループ外のユーザーです。",
        };
      }
      const { rows: wishRows } = await this.pool.query(
        `SELECT id FROM shitai_join WHERE "userId" = $1 AND "wishId" = $2;`,
        [id, wishId]
      );
      if (wishRows.length !== 0) {
        throw {
          message: "すでにしたいことに参加済みです。",
        };
      }
      // いんんさーとを行う
      const { rows: joinWishRows } = await this.pool.query(
        `INSERT INTO shitai_join ("userId", "joinedAt", "wishId") VALUES ($1, NOW(), $2) RETURNING id`,
        [id, wishId]
      );
      if (joinWishRows.length !== 1) {
        throw {
          message: "したいこと参加登録に失敗しました。",
        };
      }

      // 既存参加者情報取得
      const { rows: userRows } = await this.pool.query(
        `SELECT sui.user_id As mail
        FROM shitai_join as sj INNER JOIN shitai_user_info as sui ON sui.id = sj."userId" WHERE sj."wishId" = $1;`,
        [wishId]
      );
      if (userRows.length === 0) {
        throw {
          message: "既存参加者情報の取得に失敗しました。",
        };
      }

      const groupName = groupRows[0]["groupName"];

      // 参加者情報取得
      const { rows: joinUserRows } = await this.pool.query(
        `SELECT sui.user_name As name, sui.user_id As mail
        FROM shitai_user_info as sui WHERE sui."id" = $1;`,
        [id]
      );
      if (userRows.length === 0) {
        throw {
          message: "参加者情報の取得に失敗しました。",
        };
      }
      // 作成者情報取得
      const { rows: creatorUserRows } = await this.pool.query(
        `SELECT sui.user_name As name, sui.user_id As mail, sw.title
        FROM shitai_wish as sw INNER JOIN shitai_user_info as sui ON sw."creatorId" = sui."id" WHERE sw.id = $1;`,
        [wishId]
      );
      if (creatorUserRows.length === 0) {
        throw {
          message: "作成者情報の取得に失敗しました。",
        };
      }
      const creatorName = creatorUserRows[0]["name"];
      const creatorMail = creatorUserRows[0]["mail"];
      const title = creatorUserRows[0]["title"];
      userRows.push({ mail: creatorMail });

      const joinUserName = joinUserRows[0]["name"];
      const joinUserMail = joinUserRows[0]["mail"];
      const to = userRows
        .map((row) => row["mail"])
        .filter((mail) => mail != joinUserMail);
      console.log(to);

      const html = `
<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>新たな参加者ユーザーの通知</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", Arial, sans-serif; margin:0; padding:0; background:#f6f8fb; color:#111; }
    .container { max-width:600px; margin:28px auto; background:#fff; border-radius:8px; overflow:hidden; box-shadow:0 6px 24px rgba(20,30,60,0.08); }
    .header { padding:20px; background:#7c3aed; color:#fff; }
    .content { padding:20px; }
    .title { font-size:18px; margin:0 0 8px 0; }
    .meta { font-size:13px; color:#6b7280; margin-bottom:12px; }
    .form { background:#f7f9fc; padding:14px; border-radius:6px; margin-bottom:16px; }
    .btn { display:inline-block; padding:12px 18px; border-radius:8px; text-decoration:none; font-weight:600; }
    .btn-primary { background:#7c3aed; color:#fff; }
    .footer { font-size:12px; color:#9aa0ab; padding:18px; text-align:center; }
    table { width:100%; border-collapse:collapse; }
    td { padding:8px 0; vertical-align:top; }
    .key { font-weight:700; color:#111; width:36%; }
    .val { color:#222; }
  </style>
</head>
<body>
  <div class="container" role="article">
    <div class="header">
      <h1 style="font-size:20px;margin:0">SHITAI</h1>
      <p style="margin:6px 0 0 0;font-size:13px;opacity:0.95">ユーザーが参加しました。</p>
    </div>

    <div class="content">
      <p class="title">👥 ${joinUserName} さんが参加しました — ${title}</p>
      <p class="meta"><span style="font-weight:700">グループ：</span> ${groupName} </p>

      <p style="margin:0 0 18px 0;">参加者情報の最新状況は下のリンクで確認できます。</p>
      <a class="btn btn-primary" href="${
        process.env.REACT_APP_FRONTEND_URL + "/" + "wish" + "/" + wishId
      }" target="_blank" rel="noopener">参加者情報を確認する</a>

      <hr style="border:none;border-top:1px solid #eef2f7;margin:18px 0;" />
      <p style="margin:0;font-size:13px;color:#556070;">
        必要であれば主催者や他の参加者へ連絡を取りましょう。
      </p>
    </div>
    <div class="footer">
      このメールは自動配信です。
    </div>
  </div>
</body>
</html>
`;
      if (to.length != 0) {
        await this.sendEmail(
          to,
          `【SHITAI】ユーザーが参加しました — ${title}（${joinUserName}）`,
          html
        );
      }

      await this.pool.query("COMMIT");
    } catch (e) {
      await this.pool.query("ROLLBACK");
      throw e;
    }
    return response;
  }
}
