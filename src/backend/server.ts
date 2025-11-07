import express, { response } from "express";
import cors from "cors";
import { NeonApi } from "./NeonApi";
require("dotenv").config();
import {
  accessTokenAuthApiRequest,
  accessTokenAuthApiResponse,
  accessTokenAuthRequest,
  getWishByIdApiRequest,
  getWishByIdApiResponse,
  insertUserInfoApiRequest,
  insertUserInfoApiResponse,
  insertUserInfoRequest,
  insertUserInfoResponse,
  insertWishApiRequest,
  insertWishApiResponse,
  loginAuthApiRequest,
  loginAuthApiResponse,
  refreshTokenAuthApiRequest,
  refreshTokenAuthApiResponse,
} from "../type/NeonApiInterface";
const app = express();
const neonApi = new NeonApi();
// CORSの設定
const corsOptions = {
  origin: process.env.REACT_APP_FRONTEND_URL, // フロントエンドのURLを環境変数から取得
  method: [],
};
// アクセストークン認証(ラッパー関数)
const initAccessTokenAuth = async (
  userInfo: accessTokenAuthRequest["userInfo"]
) => {
  const result = await neonApi.accessTokenAuth(userInfo);
  console.log(result);
  const isExpired =
    typeof result === "string" && result === "expired access token";
  const isSuccess =
    typeof result !== "string" && Number(result.id) > 0 && !isExpired;
  if (isExpired) throw { message: "アクセストークンが有効期限切れです。" };
  if (!isSuccess) throw { message: "アクセストークンの認証に失敗しました。" };
  return result;
};
// CORS設定とJSONパーサーをミドルウェアとして適用
app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));

// ログイン認証を行う(成功時アクセストークンを返却する)
app.post(
  "/api/v1/auth/login",
  async (req: loginAuthApiRequest, res: loginAuthApiResponse) => {
    try {
      const result = await neonApi.loginAuth(req.body);
      // ユーザー情報とトークンをクライアントに返す
      res.status(200).json({
        status: 200, // ステータスコード
        result,
      });
      return;
    } catch (error: any) {
      res.status(500).json({
        error: error.message,
        status: 500, // ステータスコード
      });
      return;
    }
  }
);
app.post(
  "/api/v1/auth/accessToken",
  async (req: accessTokenAuthApiRequest, res: accessTokenAuthApiResponse) => {
    try {
      const { userInfo } = req.body;
      const { id, name, email } = await initAccessTokenAuth(userInfo);
      // ユーザー情報とトークンをクライアントに返す
      res.status(200).json({
        status: 200, // ステータスコード
        result: { id: Number(id), name, email },
      });
      return;
    } catch (error: any) {
      res.status(500).json({
        error: error.message,
        status: 500, // ステータスコード
      });
      return;
    }
  }
);
app.post(
  "/api/v1/auth/refreshToken",
  async (req: refreshTokenAuthApiRequest, res: refreshTokenAuthApiResponse) => {
    try {
      const { userInfo } = req.body;
      const response = await neonApi.refreshTokenAuth(userInfo);
      // ユーザー情報とトークンをクライアントに返す
      if (response !== "error") {
        res.status(200).json({
          status: 200, // ステータスコード
          result: { ...response },
        });
      }
      return;
    } catch (error: any) {
      res.status(500).json({
        error: error.message,
        status: 500, // ステータスコード
      });
      return;
    }
  }
);
app.post(
  "/api/v1/post/insertUser",
  async (req: insertUserInfoApiRequest, res: insertUserInfoApiResponse) => {
    try {
      const updateObj = req.body;
      const result = await neonApi.insertUserInfo(updateObj);
      // ユーザー情報とトークンをクライアントに返す
      res.status(200).json({
        status: 200, // ステータスコード
        result,
      });
      return;
    } catch (error: any) {
      res.status(500).json({
        error: error.message,
        status: 500, // ステータスコード
      });
      return;
    }
  }
);

app.post(
  "/api/v1/post/insertWish",
  async (req: insertWishApiRequest, res: insertWishApiResponse) => {
    try {
      const { userInfo, ...left } = req.body;
      const { id: userId } = await initAccessTokenAuth(userInfo);
      const result = await neonApi.insertWish(left, Number(userId));
      // ユーザー情報とトークンをクライアントに返す
      res.status(200).json({
        status: 200, // ステータスコード
        result,
      });
      return;
    } catch (error: any) {
      res.status(500).json({
        error: error.message,
        status: 500, // ステータスコード
      });
      return;
    }
  }
);
app.post(
  "/api/v1/get/wishById",
  async (req: getWishByIdApiRequest, res: getWishByIdApiResponse) => {
    try {
      const { userInfo, wish } = req.body;
      const { id: userId } = await initAccessTokenAuth(userInfo);
      const result = await neonApi.getWishById(wish, Number(userId));
      // ユーザー情報とトークンをクライアントに返す
      res.status(200).json({
        status: 200, // ステータスコード
        result: { wish: result },
      });
      return;
    } catch (error: any) {
      res.status(500).json({
        error: error.message,
        status: 500, // ステータスコード
      });
      return;
    }
  }
);
app.listen(4200, () => {
  console.log(`port ${4200} でサーバー起動中`);
});
