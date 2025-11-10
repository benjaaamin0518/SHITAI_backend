import { Pool } from "pg";
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
        `SELECT sg.id FROM public.shitai_group as sg INNER JOIN public.shitai_group_join as sjg ON sjg."groupId" = sg.id AND sjg."userId" = $1 WHERE sg.id = $2;`,
        [id, leftWish.groupId]
      );
      console.log(id);
      if (groupRows.length !== 1) {
        throw {
          message: "権限がありません。グループ外のユーザーです。",
        };
      }
      const { rows: insertWishRows } = await this.pool.query(
        `INSERT INTO public.shitai_wish (${this.columns.join(",")}) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, NOW(), $14, $15, $16) RETURNING id;`,
        [
          leftWish.groupId,
          leftWish.creatorId,
          leftWish.category,
          leftWish.imageData,
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
  public async getWishById(
    wish: Omit<getWishByIdRequest, "userInfo">,
    id: number
  ) {
    // レスポンス内容(初期値)
    let response: Wish = {
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
    try {
      const { rows: groupRows } = await this.pool.query(
        `SELECT sg.id FROM public.shitai_wish as sw INNER JOIN public.shitai_group as sg ON sw."groupId" = sg.id INNER JOIN public.shitai_group_join as sjg ON sjg."groupId" = sg.id AND sjg."userId" = $1 WHERE sw.id = $2;`,
        [id, wish.id]
      );
      console.log(id, wish.id, wish);
      if (groupRows.length !== 1) {
        throw {
          message: "権限がありません。グループ外のユーザーです。",
        };
      }

      const { rows: wishRows } = await this.pool.query(
        `SELECT ${this.columns.join(",")}
        FROM public.shitai_wish WHERE id = $1;`,
        [wish.id]
      );
      if (wishRows.length !== 1) {
        throw {
          message: "したいことの取得に失敗しました。",
        };
      }
      console.log(wishRows[0]);
      const res = await this.createResponseData(wish.id);
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
        `SELECT sg.id FROM public.shitai_wish as sw INNER JOIN public.shitai_group as sg ON sw."groupId" = sg.id INNER JOIN public.shitai_group_join as sjg ON sjg."groupId" = sg.id AND sjg."userId" = $1 WHERE sw.id = $2;`,
        [id, wishId]
      );
      if (groupRows.length !== 1) {
        throw {
          message: "権限がありません。グループ外のユーザーです。",
        };
      }
      // いんんさーとを行う
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
            `INSERT INTO public.shitai_answer ("userId", "schemaId", "value") SELECT $1, ss.id, $2 FROM public.shitai_schema as ss WHERE ss."schemaType" = $3 AND ss."type" = $4 AND ss."wishId" = $5 LIMIT 1 RETURNING id`,
            [id, value, repKey, schema, wishId]
          );
          if (insertAnswerRows.length !== 1) {
            throw {
              message: "アンサーの登録に失敗しました。",
            };
          }
        }
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
        `SELECT sg.id FROM public.shitai_wish as sw INNER JOIN public.shitai_group as sg ON sw."groupId" = sg.id INNER JOIN public.shitai_group_join as sjg ON sjg."groupId" = sg.id AND sjg."userId" = $1 WHERE sw.id = $2;`,
        [id, wish.id]
      );
      if (groupRows.length !== 1) {
        throw {
          message: "権限がありません。グループ外のユーザーです。",
        };
      }
      const { id: wishId, ...updateWish } = wish;

      const { rows: updateRows } = await this.pool.query(
        `UPDATE public.shitai_wish SET ${Object.keys(updateWish).reduce(
          (prev, current) => {
            const value =
              updateWish[
                current as keyof Omit<updateWishRequest, "userInfo" | "id">
              ] == ""
                ? "NULL"
                : "'" +
                  updateWish[
                    current as keyof Omit<updateWishRequest, "userInfo" | "id">
                  ] +
                  "'";
            const str = `"${current}"` + " = " + `${value}`;
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
        `SELECT sg.id FROM public.shitai_wish as sw INNER JOIN public.shitai_group as sg ON sw."groupId" = sg.id INNER JOIN public.shitai_group_join as sjg ON sjg."groupId" = sg.id AND sjg."userId" = $1 WHERE sw.id = $2;`,
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
      await this.pool.query("COMMIT");
    } catch (e) {
      await this.pool.query("ROLLBACK");
      throw e;
    }
    return response;
  }
}
