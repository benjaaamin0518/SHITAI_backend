/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/backend/NeonApi.ts":
/*!********************************!*\
  !*** ./src/backend/NeonApi.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NeonApi: () => (/* binding */ NeonApi)
/* harmony export */ });
/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ "pg");
/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _google_cloud_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @google-cloud/storage */ "@google-cloud/storage");
/* harmony import */ var _google_cloud_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_google_cloud_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! resend */ "resend");
/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(resend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/date */ "./utils/date.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};


var randomUUID = (__webpack_require__(/*! crypto */ "crypto").randomUUID);




(__webpack_require__(/*! dotenv */ "dotenv").config)();
var NeonApi = /** @class */ (function () {
    function NeonApi() {
        this.pool = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({
            host: process.env.REACT_APP_DB_HOST,
            user: process.env.REACT_APP_DB_USER,
            database: process.env.REACT_APP_DB_NAME,
            password: process.env.REACT_APP_DB_PASSWORD,
            port: parseInt(process.env.REACT_APP_DB_PORT || "5432"),
            ssl: true,
        });
        this.salt = process.env.REACT_APP_DB_SALT;
        this.config = {
            expiresIn: "1H",
            algorithm: "HS256",
        };
        this.columns = [
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
        ];
        this.columnNames = [
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
        this.dateColumns = ["deadline", "implementationDatetime"];
    }
    NeonApi.prototype.createTokens = function (id) {
        var response = { accessToken: "", refreshToken: "" };
        // アクセストークン作成
        var randomStr = (0,crypto__WEBPACK_IMPORTED_MODULE_3__.randomBytes)(16).toString("hex");
        // 「ランダム文字列(16バイト) + リクエスト.ユーザーID(ソルト値)」でハッシュ値を作成
        var saltedRandomStr = randomStr + this.salt;
        var accessToken = (0,crypto__WEBPACK_IMPORTED_MODULE_3__.createHash)("sha256")
            .update(saltedRandomStr)
            .digest("hex");
        // リフレッシュトークン作成
        randomStr = (0,crypto__WEBPACK_IMPORTED_MODULE_3__.randomBytes)(16).toString("hex");
        // 「ランダム文字列(16バイト) + リクエスト.ユーザーID(ソルト値)」でハッシュ値を作成
        saltedRandomStr = randomStr + this.salt;
        var refreshToken = (0,crypto__WEBPACK_IMPORTED_MODULE_3__.createHash)("sha256")
            .update(saltedRandomStr)
            .digest("hex");
        var defaultPeyload = {
            id: id,
            accessToken: accessToken,
        };
        var refreshPeyload = {
            id: id,
            refreshToken: refreshToken,
        };
        response.accessToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__.sign(defaultPeyload, this.salt || "", this.config);
        response.refreshToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__.sign(refreshPeyload, this.salt || "", __assign(__assign({}, this.config), { expiresIn: "72H" }));
        return { accessToken: accessToken, refreshToken: refreshToken, response: response };
    };
    /**
     *
     * @param param0 loginAuthRequest ユーザーIDとパスワードが格納されている
     * @returns accessToken アクセストークンを返却する
     */
    NeonApi.prototype.loginAuth = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var response, hashPassword, query, rows, id, name, email, _c, accessToken, refreshToken, newResponse, updateRows;
            var userId = _b.userId, password = _b.password;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        response = {
                            accessToken: "",
                            refreshToken: "",
                            id: null,
                            email: "",
                            name: "",
                        };
                        hashPassword = (0,crypto__WEBPACK_IMPORTED_MODULE_3__.createHash)("sha256")
                            .update(password + this.salt)
                            .digest("hex");
                        query = "\n            SELECT shitai_user_info.id      AS id\n            ,shitai_user_info.user_id      AS email\n            , shitai_user_info.user_name      AS name\n            FROM shitai_user_info\n            WHERE password = $1\n              AND user_id = $2;\n        ";
                        return [4 /*yield*/, this.pool.query(query, [hashPassword, userId])];
                    case 1:
                        rows = (_d.sent()).rows;
                        // ユーザー情報が存在する場合、アクセストークンを返却する
                        // 存在しない場合、エラーメッセージを返却する。
                        if (rows.length === 0)
                            throw { message: "ユーザーIDもしくはパスワードが間違っています。" };
                        id = rows[0]["id"];
                        name = rows[0]["name"];
                        email = rows[0]["email"];
                        if (!id)
                            throw { message: "ログイン認証に失敗しました。" };
                        _c = this.createTokens(id), accessToken = _c.accessToken, refreshToken = _c.refreshToken, newResponse = _c.response;
                        return [4 /*yield*/, this.pool.query("UPDATE shitai_user_info SET access_token = $1, refresh_token = $2 WHERE user_id = $3 RETURNING id", [accessToken, refreshToken, userId])];
                    case 2:
                        updateRows = (_d.sent()).rows;
                        if (updateRows.length === 0)
                            throw { message: "ログイン認証に失敗しました。" };
                        id = updateRows[0]["id"];
                        if (!id)
                            throw { message: "ログイン認証に失敗しました。" };
                        response = __assign(__assign({}, newResponse), { id: id, name: name, email: email });
                        return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     *
     * @param param0 accessTokenAuthRequest["userInfo"] APIを実行するユーザー情報(ユーザーID、アクセストークン)
     * @returns　"success" or "error"
     */
    NeonApi.prototype.accessTokenAuth = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var response, id, name_1, email, decodedAccessToken, obj, rows, e_1;
            var accessToken = _b.accessToken;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        response = "error";
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        id = "";
                        email = void 0;
                        decodedAccessToken = void 0;
                        try {
                            obj = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__.verify(accessToken, this.salt || "");
                            id = obj.id;
                            decodedAccessToken = obj.accessToken;
                            console.log(id, decodedAccessToken);
                        }
                        catch (e) {
                            if ("message" in e) {
                                if (e.message === "jwt expired") {
                                    response = "expired access token";
                                    return [2 /*return*/, response];
                                }
                            }
                        }
                        return [4 /*yield*/, this.pool.query("SELECT *\n             FROM shitai_user_info\n             WHERE id = $1\n               AND access_token = $2;", [id, decodedAccessToken])];
                    case 2:
                        rows = (_c.sent()).rows;
                        if (rows.length === 0) {
                            response = "error";
                            return [2 /*return*/, response];
                        }
                        name_1 = rows[0]["user_name"];
                        email = rows[0]["user_id"];
                        response = { id: id, name: name_1, email: email };
                        return [2 /*return*/, response];
                    case 3:
                        e_1 = _c.sent();
                        response = "error";
                        return [2 /*return*/, response];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param param0 accessTokenAuthRequest["userInfo"] APIを実行するユーザー情報(ユーザーID、アクセストークン)
     * @returns　"success" or "error"
     */
    NeonApi.prototype.refreshTokenAuth = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var response, _c, id, decodedRefreshToken, rows, userId, _d, newAccessToken, newRefreshToken, newResponse, updateRows;
            var refreshToken = _b.refreshToken;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        response = "error";
                        _c = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__.verify(refreshToken, this.salt || ""), id = _c.id, decodedRefreshToken = _c.refreshToken;
                        console.log(id, decodedRefreshToken);
                        return [4 /*yield*/, this.pool.query("SELECT id\n             FROM shitai_user_info\n             WHERE id = $1\n               AND refresh_token = $2;", [id, decodedRefreshToken])];
                    case 1:
                        rows = (_e.sent()).rows;
                        if (rows.length === 0) {
                            response = "error";
                            return [2 /*return*/, response];
                        }
                        userId = rows[0]["id"];
                        _d = this.createTokens(userId), newAccessToken = _d.accessToken, newRefreshToken = _d.refreshToken, newResponse = _d.response;
                        return [4 /*yield*/, this.pool.query("UPDATE shitai_user_info SET access_token = $1, refresh_token = $2 WHERE id = $3 RETURNING id", [newAccessToken, newRefreshToken, userId])];
                    case 2:
                        updateRows = (_e.sent()).rows;
                        if (updateRows.length === 0) {
                            response = "error";
                            return [2 /*return*/, response];
                        }
                        id = updateRows[0]["id"];
                        if (!id) {
                            response = "error";
                            return [2 /*return*/, response];
                        }
                        response = __assign({ id: id }, newResponse);
                        return [2 /*return*/, response];
                }
            });
        });
    };
    NeonApi.prototype.uploadImageData = function (imageData) {
        return __awaiter(this, void 0, void 0, function () {
            var credentials, storage, bucket, parseBase64Image, uploadBase64Image, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        credentials = {
                            type: process.env.REACT_APP_CREDENTIALS_TYPE,
                            client_email: process.env.REACT_APP_CREDENTIALS_CLIENT_EMAIL,
                            private_key: (process.env.REACT_APP_CREDENTIALS_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
                            private_key_id: process.env.REACT_APP_CREDENTIALS_PRIVATE_KEY_ID,
                            project_id: process.env.REACT_APP_PROJECT_ID,
                            client_id: process.env.REACT_APP_CREDENTIALS_CLIENT_ID,
                            auth_uri: process.env.REACT_APP_CREDENTIALS_AUTH_URI,
                            token_uri: process.env.REACT_APP_CREDENTIALS_TOKEN_URI,
                            auth_provider_x509_cert_url: process.env.REACT_APP_CREDENTIALS_AUTH_PROVIDER_X509_CERT_URL,
                            client_x509_cert_url: process.env.REACT_APP_CREDENTIALS_CLIENT_X509_CERT_URL,
                            universe_domain: process.env.REACT_APP_CREDENTIALS_UNIVERSE_DOMAIN,
                        };
                        storage = new _google_cloud_storage__WEBPACK_IMPORTED_MODULE_1__.Storage({
                            projectId: process.env.REACT_APP_PROJECT_NAME,
                            credentials: credentials,
                        });
                        bucket = storage.bucket(process.env.REACT_APP_BUCKET_NAME || "");
                        parseBase64Image = function (base64) {
                            var matches = base64.match(/^data:(.+);base64,(.+)$/);
                            if (!matches)
                                throw new Error("Invalid Base64 string");
                            return { contentType: matches[1], base64Data: matches[2] };
                        };
                        uploadBase64Image = function (base64, uploadPath) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, contentType, base64Data, buffer, file;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = parseBase64Image(base64), contentType = _a.contentType, base64Data = _a.base64Data;
                                        buffer = Buffer.from(base64Data, "base64");
                                        file = bucket.file(uploadPath + "." + contentType.replace("image/", ""));
                                        return [4 /*yield*/, file.save(buffer, {
                                                metadata: {
                                                    contentType: contentType,
                                                    cacheControl: "public, max-age=31536000",
                                                },
                                            })];
                                    case 1:
                                        _b.sent();
                                        // 必要なら公開
                                        return [4 /*yield*/, file.makePublic()];
                                    case 2:
                                        // 必要なら公開
                                        _b.sent();
                                        return [2 /*return*/, "https://storage.googleapis.com/".concat(file.cloudStorageURI.href.replace("gs://", ""))];
                                }
                            });
                        }); };
                        if (!imageData) return [3 /*break*/, 2];
                        return [4 /*yield*/, uploadBase64Image(imageData, randomUUID())];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = null;
                        _b.label = 3;
                    case 3: return [2 /*return*/, _a];
                }
            });
        });
    };
    /**
     *
     * @param param0 userId,作成に必要な情報(price, description, created_at)
     * @returns　"success" or "error"
     */
    NeonApi.prototype.insertUserInfo = function (updateObj) {
        return __awaiter(this, void 0, void 0, function () {
            var response, hashPassword, insertRows, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = "success";
                        return [4 /*yield*/, this.pool.query("BEGIN")];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 7]);
                        hashPassword = (0,crypto__WEBPACK_IMPORTED_MODULE_3__.createHash)("sha256")
                            .update(updateObj.password + this.salt)
                            .digest("hex");
                        return [4 /*yield*/, this.pool.query("INSERT INTO \"public\".\"shitai_user_info\" (\"user_id\", \"password\", \"user_name\")\n          VALUES($1, $2, $3) RETURNING id;", [updateObj.email, hashPassword, updateObj.name])];
                    case 3:
                        insertRows = (_a.sent()).rows;
                        if (insertRows.length !== 1) {
                            throw {
                                message: "ユーザー登録に失敗しました。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("COMMIT")];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 5:
                        e_2 = _a.sent();
                        return [4 /*yield*/, this.pool.query("ROLLBACK")];
                    case 6:
                        _a.sent();
                        throw e_2;
                    case 7: return [2 /*return*/, response];
                }
            });
        });
    };
    NeonApi.prototype.sendEmail = function (to, subject, html) {
        return __awaiter(this, void 0, void 0, function () {
            var resend, _a, data, error;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        resend = new resend__WEBPACK_IMPORTED_MODULE_2__.Resend(process.env.REACT_APP_RESEND_API_TOKEN);
                        return [4 /*yield*/, resend.emails.send({
                                from: process.env.REACT_APP_FROM_EMAIL || "",
                                to: to,
                                subject: subject,
                                html: html,
                            })];
                    case 1:
                        _a = _b.sent(), data = _a.data, error = _a.error;
                        if (error) {
                            return [2 /*return*/, console.error({ error: error })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NeonApi.prototype.insertWish = function (wish, id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, participationConfirmSchema, postConfirmSchema, leftWish_1, groupRows, urlPattern, isUrl, imageData, _a, insertWishRows, createInsertSchema, _b, _c, schema, insertRows, e_3_1, mailRows, groupName, userRows, creatorName, creatorMail_1, to, description, html, e_4;
            var e_3, _d;
            var _this = this;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        response = { id: "" };
                        return [4 /*yield*/, this.pool.query("BEGIN")];
                    case 1:
                        _e.sent();
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 21, , 23]);
                        participationConfirmSchema = wish.participationConfirmSchema, postConfirmSchema = wish.postConfirmSchema, leftWish_1 = __rest(wish, ["participationConfirmSchema", "postConfirmSchema"]);
                        console.log(leftWish_1.groupId);
                        return [4 /*yield*/, this.pool.query("SELECT sg.id, sg.\"groupName\" FROM public.shitai_group as sg INNER JOIN public.shitai_group_join as sjg ON sjg.\"groupId\" = sg.id AND sjg.\"userId\" = $1 WHERE sg.id = $2;", [id, leftWish_1.groupId])];
                    case 3:
                        groupRows = (_e.sent()).rows;
                        console.log(id);
                        if (groupRows.length !== 1) {
                            throw {
                                message: "権限がありません。グループ外のユーザーです。",
                            };
                        }
                        urlPattern = /^(https?|ftp)(:\/\/[\w\/:%#\$&\?\(\)~\.=\+\-]+)/;
                        isUrl = urlPattern.test(leftWish_1.imageData || "");
                        console.log(leftWish_1.imageData);
                        if (!isUrl) return [3 /*break*/, 4];
                        _a = leftWish_1.imageData;
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.uploadImageData(leftWish_1.imageData || "")];
                    case 5:
                        _a = _e.sent();
                        _e.label = 6;
                    case 6:
                        imageData = _a;
                        return [4 /*yield*/, this.pool.query("INSERT INTO public.shitai_wish (".concat(this.columns.join(","), ") \n        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, NOW(), $14, $15, $16) RETURNING id;"), [
                                leftWish_1.groupId,
                                leftWish_1.creatorId,
                                leftWish_1.category,
                                imageData,
                                leftWish_1.title,
                                leftWish_1.displayDate,
                                leftWish_1.displayText,
                                leftWish_1.notes,
                                leftWish_1.deadline == "" ? null : leftWish_1.deadline,
                                leftWish_1.minParticipants,
                                leftWish_1.maxParticipants,
                                leftWish_1.actionLabel,
                                false,
                                participationConfirmSchema.type,
                                postConfirmSchema.type,
                                leftWish_1.implementationDatetime == ""
                                    ? null
                                    : leftWish_1.implementationDatetime,
                            ])];
                    case 7:
                        insertWishRows = (_e.sent()).rows;
                        if (insertWishRows.length !== 1) {
                            throw {
                                message: "したいことの登録に失敗しました。",
                            };
                        }
                        createInsertSchema = function (schema, schemaType) {
                            var arr = [];
                            switch (schema.type) {
                                case "mixed":
                                    arr.push({
                                        schemaType: schemaType,
                                        type: "datetime",
                                        label: schema.datetimeLabel,
                                        required: schema.datetimeRequired,
                                    });
                                    arr.push({
                                        schemaType: schemaType,
                                        type: "note",
                                        label: schema.noteLabel,
                                        required: schema.noteRequired,
                                    });
                                    break;
                                case "datetime":
                                    arr.push({
                                        schemaType: schemaType,
                                        type: "datetime",
                                        label: schema.datetimeLabel,
                                        required: schema.datetimeRequired,
                                    });
                                    break;
                                case "note":
                                    arr.push({
                                        schemaType: schemaType,
                                        type: "note",
                                        label: schema.noteLabel,
                                        required: schema.noteRequired,
                                    });
                                    break;
                                default:
                                    arr.push({
                                        schemaType: schemaType,
                                        type: "none",
                                        label: schema.noteLabel,
                                        required: schema.noteRequired,
                                    });
                                    break;
                            }
                            return arr;
                        };
                        _e.label = 8;
                    case 8:
                        _e.trys.push([8, 13, 14, 15]);
                        _b = __values(__spreadArray(__spreadArray([], __read(createInsertSchema(participationConfirmSchema, "participation")), false), __read(createInsertSchema(postConfirmSchema, "post")), false)), _c = _b.next();
                        _e.label = 9;
                    case 9:
                        if (!!_c.done) return [3 /*break*/, 12];
                        schema = _c.value;
                        return [4 /*yield*/, this.pool.query("INSERT INTO \"public\".\"shitai_schema\" (\"wishId\", \"schemaType\", \"type\", \"required\", \"label\")\n          VALUES($1, $2, $3, $4, $5) RETURNING id;", [
                                insertWishRows[0]["id"],
                                schema.schemaType,
                                schema.type,
                                schema.required,
                                schema.label,
                            ])];
                    case 10:
                        insertRows = (_e.sent()).rows;
                        if (insertRows.length === 0) {
                            throw {
                                message: "確認項目の登録に失敗しました。",
                            };
                        }
                        _e.label = 11;
                    case 11:
                        _c = _b.next();
                        return [3 /*break*/, 9];
                    case 12: return [3 /*break*/, 15];
                    case 13:
                        e_3_1 = _e.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 15];
                    case 14:
                        try {
                            if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 15:
                        response.id = insertWishRows[0]["id"];
                        return [4 /*yield*/, this.pool.query("SELECT sui.user_id As mail\n        FROM public.shitai_group_join as sgj INNER JOIN shitai_user_info as sui ON sui.id = sgj.\"userId\" WHERE sgj.\"groupId\" = $1;", [leftWish_1.groupId])];
                    case 16:
                        mailRows = (_e.sent()).rows;
                        if (mailRows.length === 0) {
                            throw {
                                message: "グループメンバ情報の取得に失敗しました。",
                            };
                        }
                        groupName = groupRows[0]["groupName"];
                        return [4 /*yield*/, this.pool.query("SELECT sui.user_name As name, sui.user_id As mail\n        FROM shitai_user_info as sui WHERE sui.\"id\" = $1;", [leftWish_1.creatorId])];
                    case 17:
                        userRows = (_e.sent()).rows;
                        if (userRows.length === 0) {
                            throw {
                                message: "作成者情報の取得に失敗しました。",
                            };
                        }
                        creatorName = userRows[0]["name"];
                        creatorMail_1 = userRows[0]["mail"];
                        to = mailRows
                            .map(function (row) { return row["mail"]; })
                            .filter(function (mail) { return mail != creatorMail_1; });
                        console.log(to);
                        description = Object.keys(leftWish_1).reduce(function (prev, current) {
                            var obj = _this.columnNames.find(function (obj) { return obj.column == current; });
                            var isDate = _this.dateColumns.some(function (dtCol) { return dtCol == current; });
                            var column = current;
                            if (obj) {
                                return (prev +
                                    "<tr><td>" +
                                    "".concat(obj.name, "</td><td>").concat(isDate
                                        ? (0,_utils_date__WEBPACK_IMPORTED_MODULE_5__.formatDisplayDate)(leftWish_1[column])
                                        : leftWish_1[column], "</td></tr>"));
                            }
                            return prev;
                        }, "");
                        html = "\n<!doctype html>\n<html lang=\"ja\">\n<head>\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\n  <title>\u65B0\u3057\u3044\u300C\u3057\u305F\u3044\u300D\u901A\u77E5</title>\n  <style>\n    body { font-family: -apple-system, BlinkMacSystemFont, \"Hiragino Kaku Gothic ProN\", \"Yu Gothic\", \"Noto Sans JP\", Arial, sans-serif; margin:0; padding:0; background:#f6f8fb; color:#111; }\n    .container { max-width:600px; margin:28px auto; background:#fff; border-radius:8px; overflow:hidden; box-shadow:0 6px 24px rgba(20,30,60,0.08); }\n    .header { padding:20px; background:linear-gradient(90deg,#1f6feb,#6b9cff); color:#fff; }\n    .content { padding:20px; }\n    .title { font-size:18px; margin:0 0 8px 0; }\n    .meta { font-size:13px; color:#6b7280; margin-bottom:16px; }\n    .card { background:#f7f9fc; padding:14px; border-radius:6px; margin-bottom:16px; }\n    .btn { display:inline-block; padding:12px 18px; border-radius:8px; text-decoration:none; font-weight:600; }\n    .btn-primary { background:#1f6feb; color:#fff; }\n    .footer { font-size:12px; color:#9aa0ab; padding:18px; text-align:center; }\n    .kv { font-weight:700; color:#111; }\n    pre { white-space:pre-wrap; word-wrap:break-word; }\n  </style>\n</head>\n<body>\n  <div class=\"container\" role=\"article\" aria-label=\"SHITAI \u65B0\u3057\u3044\u3057\u305F\u3044\u901A\u77E5\">\n    <div class=\"header\">\n      <h1 style=\"font-size:20px;margin:0\">SHITAI</h1>\n      <p style=\"margin:6px 0 0 0;font-size:13px;opacity:0.95\">\u30B0\u30EB\u30FC\u30D7\u5185\u306B\u65B0\u3057\u3044\u300C\u3057\u305F\u3044\u300D\u304C\u6295\u7A3F\u3055\u308C\u307E\u3057\u305F</p>\n    </div>\n\n    <div class=\"content\">\n      <p class=\"title\">\uD83D\uDD14 \u65B0\u7740\uFF1A".concat(leftWish_1.title, "</p>\n      <p class=\"meta\"><span class=\"kv\">\u4F5C\u6210\u8005\uFF1A</span> ").concat(creatorName, " &nbsp;|&nbsp; <span class=\"kv\">\u30B0\u30EB\u30FC\u30D7\uFF1A</span> ").concat(groupName, "</p>\n\n      <div class=\"card\">\n        <p style=\"margin:0 0 8px 0;\"><span class=\"kv\">\u5185\u5BB9</span></p>\n        <pre style=\"margin:0;\"><table>").concat(description, "</table></pre>\n      </div>\n\n      <p style=\"margin:0 0 18px 0;\">\u8A73\u7D30\u3084\u53C2\u52A0\u306F\u4E0B\u306E\u30DC\u30BF\u30F3\u304B\u3089\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p>\n\n      <a class=\"btn btn-primary\" href=\"").concat(process.env.REACT_APP_FRONTEND_URL + "/" + "wish" + "/" + response.id, "\" target=\"_blank\" rel=\"noopener\">\u8A73\u7D30\u3092\u78BA\u8A8D\u3059\u308B</a>\n\n      <hr style=\"border:none;border-top:1px solid #eef2f7;margin:18px 0;\" />\n\n      <p style=\"margin:0;font-size:13px;color:#556070;\">\n        \u6C17\u306B\u306A\u308B\u300C\u3057\u305F\u3044\u300D\u304C\u3042\u308C\u3070\u3001\u53C2\u52A0\u3084\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3\u3067\u30B0\u30EB\u30FC\u30D7\u3092\u6D3B\u6027\u5316\u3057\u307E\u3057\u3087\u3046\uFF01\n      </p>\n    </div>\n    <div class=\"footer\">\n      \u3053\u306E\u30E1\u30FC\u30EB\u306F\u81EA\u52D5\u914D\u4FE1\u3067\u3059\u3002\n    </div>\n  </div>\n</body>\n</html>\n");
                        if (!(to.length != 0)) return [3 /*break*/, 19];
                        return [4 /*yield*/, this.sendEmail(to, "\u3010SHITAI\u3011\u65B0\u3057\u3044\u300C\u3057\u305F\u3044\u300D\u304C\u6295\u7A3F\u3055\u308C\u307E\u3057\u305F \u2014 ".concat(leftWish_1.title), html)];
                    case 18:
                        _e.sent();
                        _e.label = 19;
                    case 19: return [4 /*yield*/, this.pool.query("COMMIT")];
                    case 20:
                        _e.sent();
                        return [3 /*break*/, 23];
                    case 21:
                        e_4 = _e.sent();
                        return [4 /*yield*/, this.pool.query("ROLLBACK")];
                    case 22:
                        _e.sent();
                        throw e_4;
                    case 23: return [2 /*return*/, response];
                }
            });
        });
    };
    NeonApi.prototype.createResponseData = function (wishId) {
        return __awaiter(this, void 0, void 0, function () {
            var schemaRows, schemaMap, schemaRows_1, schemaRows_1_1, schema, participationConfirmSchemaType, postConfirmSchemaType, schemaType, type, required, label, answerRows, answerMap, participants, answerRows_1, answerRows_1_1, answer, joinedAt, userId, schemaType, type, value, e_5;
            var e_6, _a, _b, e_7, _c, _d, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _f.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.pool.query("SELECT sw.\"participationConfirmSchemaType\", sw.\"postConfirmSchemaType\", ss.\"schemaType\", ss.\"type\", ss.\"required\", ss.\"label\"\n        FROM public.shitai_wish as sw INNER JOIN shitai_schema as ss ON ss.\"wishId\" = sw.id WHERE sw.id = $1;", [wishId])];
                    case 1:
                        schemaRows = (_f.sent()).rows;
                        if (schemaRows.length === 0) {
                            throw {
                                message: "スキーマの取得に失敗しました。",
                            };
                        }
                        schemaMap = new Map();
                        try {
                            for (schemaRows_1 = __values(schemaRows), schemaRows_1_1 = schemaRows_1.next(); !schemaRows_1_1.done; schemaRows_1_1 = schemaRows_1.next()) {
                                schema = schemaRows_1_1.value;
                                participationConfirmSchemaType = schema.participationConfirmSchemaType, postConfirmSchemaType = schema.postConfirmSchemaType, schemaType = schema.schemaType, type = schema.type, required = schema.required, label = schema.label;
                                schemaMap.set(schemaType, __assign(__assign({}, schemaMap.get(schemaType)), (_b = { type: schemaType === "participation"
                                            ? participationConfirmSchemaType
                                            : postConfirmSchemaType }, _b[type + "Label"] = label, _b[type + "Required"] = required, _b)));
                            }
                        }
                        catch (e_6_1) { e_6 = { error: e_6_1 }; }
                        finally {
                            try {
                                if (schemaRows_1_1 && !schemaRows_1_1.done && (_a = schemaRows_1.return)) _a.call(schemaRows_1);
                            }
                            finally { if (e_6) throw e_6.error; }
                        }
                        return [4 /*yield*/, this.pool.query("SELECT sj.\"joinedAt\", sj.\"userId\", ss.\"schemaType\", ss.type, sa.value\n        FROM shitai_join as sj LEFT JOIN shitai_schema as ss ON ss.\"wishId\" = $1 LEFT JOIN public.shitai_answer as sa ON sa.\"schemaId\" = ss.id AND ss.\"wishId\" = $1 AND sa.\"userId\" = sj.\"userId\" WHERE sj.\"wishId\" = $1 ORDER BY sj.\"joinedAt\" ASC;", [wishId])];
                    case 2:
                        answerRows = (_f.sent()).rows;
                        answerMap = new Map();
                        participants = [];
                        try {
                            for (answerRows_1 = __values(answerRows), answerRows_1_1 = answerRows_1.next(); !answerRows_1_1.done; answerRows_1_1 = answerRows_1.next()) {
                                answer = answerRows_1_1.value;
                                joinedAt = answer.joinedAt, userId = answer.userId, schemaType = answer.schemaType, type = answer.type, value = answer.value;
                                if (!userId || !type)
                                    continue;
                                answerMap.set(userId, __assign(__assign({}, (answerMap.get(userId) ? answerMap.get(userId) : {})), (_d = { userId: userId, joinedAt: joinedAt }, _d[schemaType + "Answers"] = __assign(__assign({}, (answerMap.get(userId)
                                    ? schemaType + "Answers" in answerMap.get(userId)
                                        ? answerMap.get(userId)[(schemaType + "Answers")]
                                        : {}
                                    : {})), (_e = {}, _e[type] = value, _e)), _d)));
                                participants = __spreadArray([], __read(answerMap.values()), false);
                            }
                        }
                        catch (e_7_1) { e_7 = { error: e_7_1 }; }
                        finally {
                            try {
                                if (answerRows_1_1 && !answerRows_1_1.done && (_c = answerRows_1.return)) _c.call(answerRows_1);
                            }
                            finally { if (e_7) throw e_7.error; }
                        }
                        return [2 /*return*/, {
                                participationConfirmSchema: schemaMap.get("participation"),
                                postConfirmSchema: schemaMap.get("post"),
                                participants: participants,
                            }];
                    case 3:
                        e_5 = _f.sent();
                        console.log(e_5);
                        throw e_5;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    NeonApi.prototype.getWishById = function (wishId, id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, groupRows, wishRows_1, res_1, extColumns, e_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = {
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
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.pool.query("SELECT sg.id FROM public.shitai_wish as sw INNER JOIN public.shitai_group as sg ON sw.\"groupId\" = sg.id INNER JOIN public.shitai_group_join as sjg ON sjg.\"groupId\" = sg.id AND sjg.\"userId\" = $1 WHERE sw.id = $2;", [id, wishId])];
                    case 2:
                        groupRows = (_a.sent()).rows;
                        if (groupRows.length !== 1) {
                            throw {
                                message: "権限がありません。グループ外のユーザーです。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("SELECT ".concat(this.columns.join(","), "\n        FROM public.shitai_wish WHERE id = $1;"), [wishId])];
                    case 3:
                        wishRows_1 = (_a.sent()).rows;
                        if (wishRows_1.length !== 1) {
                            throw {
                                message: "したいことの取得に失敗しました。",
                            };
                        }
                        console.log(wishRows_1[0]);
                        return [4 /*yield*/, this.createResponseData(wishId.toString())];
                    case 4:
                        res_1 = _a.sent();
                        extColumns = this.columns.filter(function (col) {
                            return col !== '"participationConfirmSchemaType"' &&
                                col !== '"postConfirmSchemaType"';
                        });
                        extColumns.forEach(function (column) {
                            var _a;
                            var repColumn = column.replaceAll('"', "");
                            console.log(repColumn);
                            var value = wishRows_1[0][repColumn];
                            if (value) {
                                response = __assign(__assign({}, response), (_a = {}, _a[repColumn] = value, _a));
                            }
                        });
                        [
                            "participationConfirmSchema",
                            "postConfirmSchema",
                            "participants",
                        ].forEach(function (column) {
                            var _a;
                            if (res_1 && column in res_1) {
                                response = __assign(__assign({}, response), (_a = {}, _a[column] = res_1[column], _a));
                            }
                        });
                        return [2 /*return*/, response];
                    case 5:
                        e_8 = _a.sent();
                        throw e_8;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    NeonApi.prototype.insertAnswer = function (answer, id, wishId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, groupRows, answers, _a, _b, key, _c, _d, schema, repKey, value, insertAnswerRows, e_9_1, e_10_1, userRows, groupName, joinUserRows, creatorUserRows, creatorName, creatorMail, title, joinUserName, joinUserMail_1, to, description, answers_1, answers_1_1, answer_1, schemaRows, isDate, e_11_1, html, e_12;
            var e_10, _e, e_9, _f, e_11, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        response = "success";
                        return [4 /*yield*/, this.pool.query("BEGIN")];
                    case 1:
                        _h.sent();
                        _h.label = 2;
                    case 2:
                        _h.trys.push([2, 32, , 34]);
                        return [4 /*yield*/, this.pool.query("SELECT sg.id, sg.\"groupName\" FROM public.shitai_wish as sw INNER JOIN public.shitai_group as sg ON sw.\"groupId\" = sg.id INNER JOIN public.shitai_group_join as sjg ON sjg.\"groupId\" = sg.id AND sjg.\"userId\" = $1 WHERE sw.id = $2;", [id, wishId])];
                    case 3:
                        groupRows = (_h.sent()).rows;
                        if (groupRows.length !== 1) {
                            throw {
                                message: "権限がありません。グループ外のユーザーです。",
                            };
                        }
                        answers = [];
                        _h.label = 4;
                    case 4:
                        _h.trys.push([4, 15, 16, 17]);
                        _a = __values(Object.keys(answer)), _b = _a.next();
                        _h.label = 5;
                    case 5:
                        if (!!_b.done) return [3 /*break*/, 14];
                        key = _b.value;
                        _h.label = 6;
                    case 6:
                        _h.trys.push([6, 11, 12, 13]);
                        _c = (e_9 = void 0, __values(Object.keys(answer[key]))), _d = _c.next();
                        _h.label = 7;
                    case 7:
                        if (!!_d.done) return [3 /*break*/, 10];
                        schema = _d.value;
                        repKey = key.replace("Answers", "");
                        value = answer[key][schema];
                        if (!value || value == "")
                            return [3 /*break*/, 9];
                        return [4 /*yield*/, this.pool.query("INSERT INTO public.shitai_answer (\"userId\", \"schemaId\", \"value\") SELECT $1, ss.id, $2 FROM public.shitai_schema as ss WHERE ss.\"schemaType\" = $3 AND ss.\"type\" = $4 AND ss.\"wishId\" = $5 LIMIT 1 RETURNING id, \"schemaId\", \"value\"", [id, value, repKey, schema, wishId])];
                    case 8:
                        insertAnswerRows = (_h.sent()).rows;
                        if (insertAnswerRows.length !== 1) {
                            throw {
                                message: "アンサーの登録に失敗しました。",
                            };
                        }
                        answers.push({
                            schemaId: insertAnswerRows[0]["schemaId"],
                            value: insertAnswerRows[0]["value"],
                        });
                        _h.label = 9;
                    case 9:
                        _d = _c.next();
                        return [3 /*break*/, 7];
                    case 10: return [3 /*break*/, 13];
                    case 11:
                        e_9_1 = _h.sent();
                        e_9 = { error: e_9_1 };
                        return [3 /*break*/, 13];
                    case 12:
                        try {
                            if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                        }
                        finally { if (e_9) throw e_9.error; }
                        return [7 /*endfinally*/];
                    case 13:
                        _b = _a.next();
                        return [3 /*break*/, 5];
                    case 14: return [3 /*break*/, 17];
                    case 15:
                        e_10_1 = _h.sent();
                        e_10 = { error: e_10_1 };
                        return [3 /*break*/, 17];
                    case 16:
                        try {
                            if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                        }
                        finally { if (e_10) throw e_10.error; }
                        return [7 /*endfinally*/];
                    case 17: return [4 /*yield*/, this.pool.query("SELECT sui.user_id As mail\n        FROM shitai_join as sj INNER JOIN shitai_user_info as sui ON sui.id = sj.\"userId\" WHERE sj.\"wishId\" = $1;", [wishId])];
                    case 18:
                        userRows = (_h.sent()).rows;
                        if (userRows.length === 0) {
                            throw {
                                message: "既存参加者情報の取得に失敗しました。",
                            };
                        }
                        groupName = groupRows[0]["groupName"];
                        return [4 /*yield*/, this.pool.query("SELECT sui.user_name As name, sui.user_id As mail\n        FROM shitai_user_info as sui WHERE sui.\"id\" = $1;", [id])];
                    case 19:
                        joinUserRows = (_h.sent()).rows;
                        if (userRows.length === 0) {
                            throw {
                                message: "参加者情報の取得に失敗しました。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("SELECT sui.user_name As name, sui.user_id As mail, sw.title\n        FROM shitai_wish as sw INNER JOIN shitai_user_info as sui ON sw.\"creatorId\" = sui.\"id\" WHERE sw.id = $1;", [wishId])];
                    case 20:
                        creatorUserRows = (_h.sent()).rows;
                        if (creatorUserRows.length === 0) {
                            throw {
                                message: "作成者情報の取得に失敗しました。",
                            };
                        }
                        creatorName = creatorUserRows[0]["name"];
                        creatorMail = creatorUserRows[0]["mail"];
                        title = creatorUserRows[0]["title"];
                        userRows.push({ mail: creatorMail });
                        joinUserName = joinUserRows[0]["name"];
                        joinUserMail_1 = joinUserRows[0]["mail"];
                        to = userRows
                            .map(function (row) { return row["mail"]; })
                            .filter(function (mail) { return mail != joinUserMail_1; });
                        console.log(to);
                        description = "";
                        _h.label = 21;
                    case 21:
                        _h.trys.push([21, 26, 27, 28]);
                        answers_1 = __values(answers), answers_1_1 = answers_1.next();
                        _h.label = 22;
                    case 22:
                        if (!!answers_1_1.done) return [3 /*break*/, 25];
                        answer_1 = answers_1_1.value;
                        return [4 /*yield*/, this.pool.query("SELECT ss.\"schemaType\", ss.\"type\", ss.\"required\", ss.\"label\"\n        FROM shitai_schema as ss WHERE ss.id = $1;", [answer_1.schemaId])];
                    case 23:
                        schemaRows = (_h.sent()).rows;
                        if (schemaRows.length !== 1) {
                            throw {
                                message: "スキーマの取得に失敗しました。",
                            };
                        }
                        isDate = schemaRows[0]["type"] == "datetime";
                        description =
                            description +
                                "<tr><td>" +
                                "".concat(schemaRows[0]["label"], "</td><td>").concat(isDate ? (0,_utils_date__WEBPACK_IMPORTED_MODULE_5__.formatDisplayDate)(answer_1.value) : answer_1.value, "</td></td>");
                        _h.label = 24;
                    case 24:
                        answers_1_1 = answers_1.next();
                        return [3 /*break*/, 22];
                    case 25: return [3 /*break*/, 28];
                    case 26:
                        e_11_1 = _h.sent();
                        e_11 = { error: e_11_1 };
                        return [3 /*break*/, 28];
                    case 27:
                        try {
                            if (answers_1_1 && !answers_1_1.done && (_g = answers_1.return)) _g.call(answers_1);
                        }
                        finally { if (e_11) throw e_11.error; }
                        return [7 /*endfinally*/];
                    case 28:
                        html = "\n<!doctype html>\n<html lang=\"ja\">\n<head>\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\n  <title>\u53C2\u52A0\u8005\u306E\u5165\u529B\u901A\u77E5</title>\n  <style>\n    body { font-family: -apple-system, BlinkMacSystemFont, \"Hiragino Kaku Gothic ProN\", \"Yu Gothic\", \"Noto Sans JP\", Arial, sans-serif; margin:0; padding:0; background:#f6f8fb; color:#111; }\n    .container { max-width:600px; margin:28px auto; background:#fff; border-radius:8px; overflow:hidden; box-shadow:0 6px 24px rgba(20,30,60,0.08); }\n    .header { padding:20px; background:#7c3aed; color:#fff; }\n    .content { padding:20px; }\n    .title { font-size:18px; margin:0 0 8px 0; }\n    .meta { font-size:13px; color:#6b7280; margin-bottom:12px; }\n    .form { background:#f7f9fc; padding:14px; border-radius:6px; margin-bottom:16px; }\n    .btn { display:inline-block; padding:12px 18px; border-radius:8px; text-decoration:none; font-weight:600; }\n    .btn-primary { background:#7c3aed; color:#fff; }\n    .footer { font-size:12px; color:#9aa0ab; padding:18px; text-align:center; }\n    table { width:100%; border-collapse:collapse; }\n    td { padding:8px 0; vertical-align:top; }\n    .key { font-weight:700; color:#111; width:36%; }\n    .val { color:#222; }\n  </style>\n</head>\n<body>\n  <div class=\"container\" role=\"article\">\n    <div class=\"header\">\n      <h1 style=\"font-size:20px;margin:0\">SHITAI</h1>\n      <p style=\"margin:6px 0 0 0;font-size:13px;opacity:0.95\">\u53C2\u52A0\u8005\u304C\u78BA\u8A8D\u9805\u76EE\u3092\u5165\u529B\u3057\u307E\u3057\u305F</p>\n    </div>\n\n    <div class=\"content\">\n      <p class=\"title\">\uD83D\uDC65 ".concat(joinUserName, " \u3055\u3093\u304C\u53C2\u52A0\u30FB\u78BA\u8A8D\u3057\u307E\u3057\u305F \u2014 ").concat(title, "</p>\n      <p class=\"meta\"><span style=\"font-weight:700\">\u30B0\u30EB\u30FC\u30D7\uFF1A</span> ").concat(groupName, " </p>\n\n      <div class=\"form\">\n        <p style=\"margin:0 0 12px 0;\"><strong>\u5165\u529B\u3055\u308C\u305F\u78BA\u8A8D\u9805\u76EE</strong></p>\n        <table>\n      ").concat(description, "\n      </table>\n      </div>\n\n      <p style=\"margin:0 0 18px 0;\">\u53C2\u52A0\u8005\u60C5\u5831\u306E\u6700\u65B0\u72B6\u6CC1\u306F\u4E0B\u306E\u30EA\u30F3\u30AF\u3067\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002</p>\n      <a class=\"btn btn-primary\" href=\"").concat(process.env.REACT_APP_FRONTEND_URL + "/" + "wish" + "/" + wishId, "\" target=\"_blank\" rel=\"noopener\">\u53C2\u52A0\u8005\u60C5\u5831\u3092\u78BA\u8A8D\u3059\u308B</a>\n\n      <hr style=\"border:none;border-top:1px solid #eef2f7;margin:18px 0;\" />\n      <p style=\"margin:0;font-size:13px;color:#556070;\">\n        \u5FC5\u8981\u3067\u3042\u308C\u3070\u4E3B\u50AC\u8005\u3084\u4ED6\u306E\u53C2\u52A0\u8005\u3078\u9023\u7D61\u3092\u53D6\u308A\u307E\u3057\u3087\u3046\u3002\n      </p>\n    </div>\n    <div class=\"footer\">\n      \u3053\u306E\u30E1\u30FC\u30EB\u306F\u81EA\u52D5\u914D\u4FE1\u3067\u3059\u3002\n    </div>\n  </div>\n</body>\n</html>\n");
                        if (!(to.length != 0)) return [3 /*break*/, 30];
                        return [4 /*yield*/, this.sendEmail(to, "\u3010SHITAI\u3011\u53C2\u52A0\u8005\u304C\u5165\u529B\u3057\u307E\u3057\u305F \u2014 ".concat(title, "\uFF08").concat(joinUserName, "\uFF09"), html)];
                    case 29:
                        _h.sent();
                        _h.label = 30;
                    case 30: return [4 /*yield*/, this.pool.query("COMMIT")];
                    case 31:
                        _h.sent();
                        return [3 /*break*/, 34];
                    case 32:
                        e_12 = _h.sent();
                        return [4 /*yield*/, this.pool.query("ROLLBACK")];
                    case 33:
                        _h.sent();
                        throw e_12;
                    case 34: return [2 /*return*/, response];
                }
            });
        });
    };
    NeonApi.prototype.updateWish = function (wish, id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, groupRows, wishId, updateWish_1, urlPattern, isUrl_1, imageData_1, _a, updateRows, userRows, groupName, joinUserRows, creatorUserRows, creatorName, creatorMail_2, title, to, description, html, e_13;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        response = "success";
                        return [4 /*yield*/, this.pool.query("BEGIN")];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 14, , 16]);
                        return [4 /*yield*/, this.pool.query("SELECT sg.id, sg.\"groupName\" FROM public.shitai_wish as sw INNER JOIN public.shitai_group as sg ON sw.\"groupId\" = sg.id INNER JOIN public.shitai_group_join as sjg ON sjg.\"groupId\" = sg.id AND sjg.\"userId\" = $1 WHERE sw.id = $2;", [id, wish.id])];
                    case 3:
                        groupRows = (_b.sent()).rows;
                        if (groupRows.length !== 1) {
                            throw {
                                message: "権限がありません。グループ外のユーザーです。",
                            };
                        }
                        wishId = wish.id, updateWish_1 = __rest(wish, ["id"]);
                        urlPattern = /^(https?|ftp)(:\/\/[\w\/:%#\$&\?\(\)~\.=\+\-]+)/;
                        isUrl_1 = urlPattern.test(updateWish_1.imageData || "");
                        if (!isUrl_1) return [3 /*break*/, 4];
                        _a = updateWish_1.imageData;
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.uploadImageData(updateWish_1.imageData || "")];
                    case 5:
                        _a = _b.sent();
                        _b.label = 6;
                    case 6:
                        imageData_1 = _a;
                        console.log("-----------------------", imageData_1);
                        return [4 /*yield*/, this.pool.query("UPDATE public.shitai_wish SET ".concat(Object.keys(updateWish_1).reduce(function (prev, current) {
                                console.log("----------------------", isUrl_1);
                                var value = updateWish_1[current] == ""
                                    ? "NULL"
                                    : current == "imageData"
                                        ? imageData_1
                                            ? "'" + imageData_1 + "'"
                                            : "NULL"
                                        : "'" +
                                            updateWish_1[current] +
                                            "'";
                                var str = "\"".concat(current, "\"") + " = " + "".concat(value);
                                console.log("-----------------------", str);
                                return prev !== "" ? prev + ", " + str : str;
                            }, ""), " WHERE id = $1 RETURNING id;"), [wish.id])];
                    case 7:
                        updateRows = (_b.sent()).rows;
                        if (updateRows.length === 0) {
                            throw {
                                message: "したいことの更新に失敗しました。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("SELECT sui.user_id As mail\n        FROM shitai_join as sj INNER JOIN shitai_user_info as sui ON sui.id = sj.\"userId\" WHERE sj.\"wishId\" = $1;", [wishId])];
                    case 8:
                        userRows = (_b.sent()).rows;
                        if (userRows.length === 0) {
                            throw {
                                message: "既存参加者情報の取得に失敗しました。",
                            };
                        }
                        groupName = groupRows[0]["groupName"];
                        return [4 /*yield*/, this.pool.query("SELECT sui.user_name As name, sui.user_id As mail\n        FROM shitai_user_info as sui WHERE sui.\"id\" = $1;", [id])];
                    case 9:
                        joinUserRows = (_b.sent()).rows;
                        if (userRows.length === 0) {
                            throw {
                                message: "参加者情報の取得に失敗しました。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("SELECT sui.user_name As name, sui.user_id As mail, sw.title\n        FROM shitai_wish as sw INNER JOIN shitai_user_info as sui ON sw.\"creatorId\" = sui.\"id\" WHERE sw.id = $1;", [wishId])];
                    case 10:
                        creatorUserRows = (_b.sent()).rows;
                        if (creatorUserRows.length === 0) {
                            throw {
                                message: "作成者情報の取得に失敗しました。",
                            };
                        }
                        creatorName = creatorUserRows[0]["name"];
                        creatorMail_2 = creatorUserRows[0]["mail"];
                        title = creatorUserRows[0]["title"];
                        userRows.push({ mail: creatorMail_2 });
                        to = userRows
                            .map(function (row) { return row["mail"]; })
                            .filter(function (mail) { return mail != creatorMail_2; });
                        console.log(to);
                        description = Object.keys(wish).reduce(function (prev, current) {
                            var obj = _this.columnNames.find(function (obj) { return obj.column == current; });
                            var isDate = _this.dateColumns.some(function (dtCol) { return dtCol == current; });
                            var column = current;
                            if (obj) {
                                return (prev +
                                    "<tr><td>" +
                                    "".concat(obj.name, "</td><td>").concat(isDate ? (0,_utils_date__WEBPACK_IMPORTED_MODULE_5__.formatDisplayDate)(wish[column]) : wish[column], "</td></tr>"));
                            }
                            return prev;
                        }, "");
                        html = "\n<!doctype html>\n<html lang=\"ja\">\n<head>\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\n  <title>\u3057\u305F\u3044\u66F4\u65B0\u901A\u77E5</title>\n  <style>\n    body { font-family: -apple-system, BlinkMacSystemFont, \"Hiragino Kaku Gothic ProN\", \"Yu Gothic\", \"Noto Sans JP\", Arial, sans-serif; margin:0; padding:0; background:#f6f8fb; color:#111; }\n    .container { max-width:600px; margin:28px auto; background:#fff; border-radius:8px; overflow:hidden; box-shadow:0 6px 24px rgba(20,30,60,0.08); }\n    .header { padding:20px; background:#0f766e; color:#fff; }\n    .content { padding:20px; }\n    .title { font-size:18px; margin:0 0 8px 0; }\n    .meta { font-size:13px; color:#6b7280; margin-bottom:12px; }\n    .changes { background:#fff8e6; padding:12px; border-radius:6px; border:1px solid #f1e6c8; margin-bottom:16px; }\n    .btn { display:inline-block; padding:12px 18px; border-radius:8px; text-decoration:none; font-weight:600; }\n    .btn-primary { background:#0f766e; color:#fff; }\n    .footer { font-size:12px; color:#9aa0ab; padding:18px; text-align:center; }\n  </style>\n</head>\n<body>\n  <div class=\"container\" role=\"article\">\n    <div class=\"header\">\n      <h1 style=\"font-size:20px;margin:0\">SHITAI</h1>\n      <p style=\"margin:6px 0 0 0;font-size:13px;opacity:0.95\">\u300C\u3057\u305F\u3044\u300D\u306E\u66F4\u65B0\u304C\u3042\u308A\u307E\u3057\u305F</p>\n    </div>\n\n    <div class=\"content\">\n      <p class=\"title\">\u270F\uFE0F \u66F4\u65B0\uFF1A".concat(title, "</p>\n      <p class=\"meta\"><span style=\"font-weight:700\">\u66F4\u65B0\u8005\uFF1A</span> ").concat(creatorName, " </p>\n\n      <div class=\"changes\">\n        <p style=\"margin:0 0 8px 0;\"><strong>\u5909\u66F4\u3055\u308C\u305F\u9805\u76EE</strong></p>\n        <pre style=\"margin:0;\"><table>").concat(description, "</table></pre>\n      </div>\n\n      <p style=\"margin:0 0 18px 0;\">\u5909\u66F4\u306E\u8A73\u7D30\u306F\u4E0B\u306E\u30EA\u30F3\u30AF\u304B\u3089\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002</p>\n      <a class=\"btn btn-primary\" href=\"").concat(process.env.REACT_APP_FRONTEND_URL + "/" + "wish" + "/" + wishId, "\" target=\"_blank\" rel=\"noopener\">\u66F4\u65B0\u5185\u5BB9\u3092\u78BA\u8A8D\u3059\u308B</a>\n\n      <hr style=\"border:none;border-top:1px solid #eef2f7;margin:18px 0;\" />\n      <p style=\"margin:0;font-size:13px;color:#556070;\">\n        \u53C2\u52A0\u4E88\u5B9A\u306E\u65B9\u306F\u4E88\u5B9A\u3084\u5165\u529B\u5185\u5BB9\u306B\u5F71\u97FF\u304C\u306A\u3044\u304B\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044\u3002\n      </p>\n    </div>\n\n    <div class=\"footer\">\n      \u3053\u306E\u30E1\u30FC\u30EB\u306F SHITAI \u304B\u3089\u306E\u81EA\u52D5\u901A\u77E5\u3067\u3059\u3002\n    </div>\n  </div>\n</body>\n</html>\n\n");
                        if (!(to.length != 0)) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.sendEmail(to, "\u3010SHITAI\u3011\u300C\u3057\u305F\u3044\u300D\u304C\u66F4\u65B0\u3055\u308C\u307E\u3057\u305F \u2014 ".concat(title), html)];
                    case 11:
                        _b.sent();
                        _b.label = 12;
                    case 12: return [4 /*yield*/, this.pool.query("COMMIT")];
                    case 13:
                        _b.sent();
                        return [3 /*break*/, 16];
                    case 14:
                        e_13 = _b.sent();
                        return [4 /*yield*/, this.pool.query("ROLLBACK")];
                    case 15:
                        _b.sent();
                        throw e_13;
                    case 16: return [2 /*return*/, response];
                }
            });
        });
    };
    NeonApi.prototype.getWishes = function (groupId, id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, groupRows, wishRows, _loop_1, this_1, wishRows_2, wishRows_2_1, wish, e_14_1, e_15;
            var e_14, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        response = [];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 12, , 13]);
                        return [4 /*yield*/, this.pool.query("SELECT sg.id FROM public.shitai_group as sg INNER JOIN public.shitai_group_join as sjg ON sjg.\"groupId\" = sg.id AND sjg.\"userId\" = $1 WHERE sg.\"id\" = $2;", [id, groupId])];
                    case 2:
                        groupRows = (_b.sent()).rows;
                        if (groupRows.length !== 1) {
                            throw {
                                message: "権限がありません。グループ外のユーザーです。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("SELECT id, ".concat(this.columns.join(","), "\n        FROM public.shitai_wish WHERE \"groupId\" = $1 ORDER BY id ASC;"), [groupId])];
                    case 3:
                        wishRows = (_b.sent()).rows;
                        if (wishRows.length === 0) {
                            throw {
                                message: "したいことの取得に失敗しました。",
                            };
                        }
                        _loop_1 = function (wish) {
                            var resWish, res, extColumns;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        resWish = {
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
                                        return [4 /*yield*/, this_1.createResponseData(wish.id)];
                                    case 1:
                                        res = _c.sent();
                                        extColumns = this_1.columns.filter(function (col) {
                                            return col !== '"participationConfirmSchemaType"' &&
                                                col !== '"postConfirmSchemaType"';
                                        });
                                        extColumns.forEach(function (column) {
                                            var _a;
                                            var repColumn = column.replaceAll('"', "");
                                            console.log(repColumn);
                                            var value = wish[repColumn];
                                            if (value) {
                                                resWish = __assign(__assign({}, resWish), (_a = {}, _a[repColumn] = value, _a));
                                            }
                                        });
                                        [
                                            "participationConfirmSchema",
                                            "postConfirmSchema",
                                            "participants",
                                        ].forEach(function (column) {
                                            var _a;
                                            if (res && column in res) {
                                                resWish = __assign(__assign({}, resWish), (_a = {}, _a[column] = res[column], _a));
                                            }
                                        });
                                        response.push(resWish);
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 9, 10, 11]);
                        wishRows_2 = __values(wishRows), wishRows_2_1 = wishRows_2.next();
                        _b.label = 5;
                    case 5:
                        if (!!wishRows_2_1.done) return [3 /*break*/, 8];
                        wish = wishRows_2_1.value;
                        return [5 /*yield**/, _loop_1(wish)];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7:
                        wishRows_2_1 = wishRows_2.next();
                        return [3 /*break*/, 5];
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        e_14_1 = _b.sent();
                        e_14 = { error: e_14_1 };
                        return [3 /*break*/, 11];
                    case 10:
                        try {
                            if (wishRows_2_1 && !wishRows_2_1.done && (_a = wishRows_2.return)) _a.call(wishRows_2);
                        }
                        finally { if (e_14) throw e_14.error; }
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/, response];
                    case 12:
                        e_15 = _b.sent();
                        throw e_15;
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    NeonApi.prototype.getGroups = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, joinGroupRows, joinGroupRows_1, joinGroupRows_1_1, group, groupObj, joinMemberRows, e_16_1, e_17;
            var e_16, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        response = [];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 11, , 12]);
                        return [4 /*yield*/, this.pool.query("SELECT sg.id, sg.\"groupName\"\n        FROM public.shitai_group_join as sgj INNER JOIN shitai_group as sg ON sg.id = sgj.\"groupId\" WHERE sgj.\"userId\" = $1 ORDER BY sg.id ASC;", [id])];
                    case 2:
                        joinGroupRows = (_b.sent()).rows;
                        if (joinGroupRows.length === 0) {
                            throw {
                                message: "参加グループの取得に失敗しました。",
                            };
                        }
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 8, 9, 10]);
                        joinGroupRows_1 = __values(joinGroupRows), joinGroupRows_1_1 = joinGroupRows_1.next();
                        _b.label = 4;
                    case 4:
                        if (!!joinGroupRows_1_1.done) return [3 /*break*/, 7];
                        group = joinGroupRows_1_1.value;
                        groupObj = {
                            id: group["id"],
                            name: group["groupName"],
                            members: [],
                        };
                        return [4 /*yield*/, this.pool.query("SELECT DISTINCT sui.id, sui.user_name, sui.user_id\n        FROM public.shitai_group_join as sgj INNER JOIN shitai_user_info as sui ON sui.id = sgj.\"userId\" WHERE sgj.\"groupId\" = $1;", [group["id"]])];
                    case 5:
                        joinMemberRows = (_b.sent()).rows;
                        if (joinMemberRows.length === 0) {
                            throw {
                                message: "メンバー情報の取得に失敗しました。",
                            };
                        }
                        groupObj.members = joinMemberRows.map(function (member) {
                            return {
                                id: member["id"],
                                name: member["user_name"],
                                email: member["user_id"],
                            };
                        });
                        response.push(groupObj);
                        _b.label = 6;
                    case 6:
                        joinGroupRows_1_1 = joinGroupRows_1.next();
                        return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_16_1 = _b.sent();
                        e_16 = { error: e_16_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (joinGroupRows_1_1 && !joinGroupRows_1_1.done && (_a = joinGroupRows_1.return)) _a.call(joinGroupRows_1);
                        }
                        finally { if (e_16) throw e_16.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/, response];
                    case 11:
                        e_17 = _b.sent();
                        throw e_17;
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    NeonApi.prototype.insertGroup = function (id, group) {
        return __awaiter(this, void 0, void 0, function () {
            var response, insertRows, insertJoinRows, e_18;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = { id: "" };
                        return [4 /*yield*/, this.pool.query("BEGIN")];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 6, , 8]);
                        return [4 /*yield*/, this.pool.query("INSERT INTO shitai_group (\"groupName\")\n          VALUES($1) RETURNING id;", [group.name])];
                    case 3:
                        insertRows = (_a.sent()).rows;
                        if (insertRows.length !== 1) {
                            throw {
                                message: "グループ登録に失敗しました。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("INSERT INTO shitai_group_join (\"groupId\", \"userId\")\n          VALUES($1, $2) RETURNING id;", [insertRows[0]["id"], id])];
                    case 4:
                        insertJoinRows = (_a.sent()).rows;
                        if (insertJoinRows.length !== 1) {
                            throw {
                                message: "グループ参加登録に失敗しました。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("COMMIT")];
                    case 5:
                        _a.sent();
                        response.id = insertRows[0]["id"];
                        return [3 /*break*/, 8];
                    case 6:
                        e_18 = _a.sent();
                        return [4 /*yield*/, this.pool.query("ROLLBACK")];
                    case 7:
                        _a.sent();
                        throw e_18;
                    case 8: return [2 /*return*/, response];
                }
            });
        });
    };
    NeonApi.prototype.invitationGroup = function (id_1, _a) {
        return __awaiter(this, arguments, void 0, function (id, _b) {
            var response, userRows, groupRows, insertRows, e_19;
            var invitationUserId = _b.invitationUserId, groupId = _b.groupId;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        response = "success";
                        return [4 /*yield*/, this.pool.query("BEGIN")];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 7, , 9]);
                        return [4 /*yield*/, this.pool.query("SELECT id FROM shitai_user_info WHERE user_id = $1", [invitationUserId])];
                    case 3:
                        userRows = (_c.sent()).rows;
                        if (userRows.length !== 1) {
                            throw {
                                message: "ユーザー情報取得に失敗しました。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("SELECT id FROM shitai_group_join WHERE \"userId\" = $1 AND \"groupId\" = $2", [userRows[0]["id"], groupId])];
                    case 4:
                        groupRows = (_c.sent()).rows;
                        if (groupRows.length !== 0) {
                            throw {
                                message: "すでに参加しているグループです。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("INSERT INTO shitai_group_join (\"groupId\", \"userId\") VALUES ($1, $2) RETURNING id;", [groupId, userRows[0]["id"]])];
                    case 5:
                        insertRows = (_c.sent()).rows;
                        if (insertRows.length !== 1) {
                            throw {
                                message: "グループジョイン登録に失敗しました。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("COMMIT")];
                    case 6:
                        _c.sent();
                        return [3 /*break*/, 9];
                    case 7:
                        e_19 = _c.sent();
                        return [4 /*yield*/, this.pool.query("ROLLBACK")];
                    case 8:
                        _c.sent();
                        throw e_19;
                    case 9: return [2 /*return*/, response];
                }
            });
        });
    };
    NeonApi.prototype.joinWish = function (id_1, _a) {
        return __awaiter(this, arguments, void 0, function (id, _b) {
            var response, groupRows, wishRows, joinWishRows, userRows, groupName, joinUserRows, creatorUserRows, creatorName, creatorMail, title, joinUserName, joinUserMail_2, to, html, e_20;
            var wishId = _b.wishId;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        response = "success";
                        return [4 /*yield*/, this.pool.query("BEGIN")];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 12, , 14]);
                        return [4 /*yield*/, this.pool.query("SELECT sg.id, sg.\"groupName\" FROM public.shitai_wish as sw INNER JOIN public.shitai_group as sg ON sw.\"groupId\" = sg.id INNER JOIN public.shitai_group_join as sjg ON sjg.\"groupId\" = sg.id AND sjg.\"userId\" = $1 WHERE sw.id = $2;", [id, wishId])];
                    case 3:
                        groupRows = (_c.sent()).rows;
                        if (groupRows.length !== 1) {
                            throw {
                                message: "権限がありません。グループ外のユーザーです。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("SELECT id FROM shitai_join WHERE \"userId\" = $1 AND \"wishId\" = $2;", [id, wishId])];
                    case 4:
                        wishRows = (_c.sent()).rows;
                        if (wishRows.length !== 0) {
                            throw {
                                message: "すでにしたいことに参加済みです。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("INSERT INTO shitai_join (\"userId\", \"joinedAt\", \"wishId\") VALUES ($1, NOW(), $2) RETURNING id", [id, wishId])];
                    case 5:
                        joinWishRows = (_c.sent()).rows;
                        if (joinWishRows.length !== 1) {
                            throw {
                                message: "したいこと参加登録に失敗しました。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("SELECT sui.user_id As mail\n        FROM shitai_join as sj INNER JOIN shitai_user_info as sui ON sui.id = sj.\"userId\" WHERE sj.\"wishId\" = $1;", [wishId])];
                    case 6:
                        userRows = (_c.sent()).rows;
                        if (userRows.length === 0) {
                            throw {
                                message: "既存参加者情報の取得に失敗しました。",
                            };
                        }
                        groupName = groupRows[0]["groupName"];
                        return [4 /*yield*/, this.pool.query("SELECT sui.user_name As name, sui.user_id As mail\n        FROM shitai_user_info as sui WHERE sui.\"id\" = $1;", [id])];
                    case 7:
                        joinUserRows = (_c.sent()).rows;
                        if (userRows.length === 0) {
                            throw {
                                message: "参加者情報の取得に失敗しました。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("SELECT sui.user_name As name, sui.user_id As mail, sw.title\n        FROM shitai_wish as sw INNER JOIN shitai_user_info as sui ON sw.\"creatorId\" = sui.\"id\" WHERE sw.id = $1;", [wishId])];
                    case 8:
                        creatorUserRows = (_c.sent()).rows;
                        if (creatorUserRows.length === 0) {
                            throw {
                                message: "作成者情報の取得に失敗しました。",
                            };
                        }
                        creatorName = creatorUserRows[0]["name"];
                        creatorMail = creatorUserRows[0]["mail"];
                        title = creatorUserRows[0]["title"];
                        userRows.push({ mail: creatorMail });
                        joinUserName = joinUserRows[0]["name"];
                        joinUserMail_2 = joinUserRows[0]["mail"];
                        to = userRows
                            .map(function (row) { return row["mail"]; })
                            .filter(function (mail) { return mail != joinUserMail_2; });
                        console.log(to);
                        html = "\n<!doctype html>\n<html lang=\"ja\">\n<head>\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\n  <title>\u65B0\u305F\u306A\u53C2\u52A0\u8005\u30E6\u30FC\u30B6\u30FC\u306E\u901A\u77E5</title>\n  <style>\n    body { font-family: -apple-system, BlinkMacSystemFont, \"Hiragino Kaku Gothic ProN\", \"Yu Gothic\", \"Noto Sans JP\", Arial, sans-serif; margin:0; padding:0; background:#f6f8fb; color:#111; }\n    .container { max-width:600px; margin:28px auto; background:#fff; border-radius:8px; overflow:hidden; box-shadow:0 6px 24px rgba(20,30,60,0.08); }\n    .header { padding:20px; background:#7c3aed; color:#fff; }\n    .content { padding:20px; }\n    .title { font-size:18px; margin:0 0 8px 0; }\n    .meta { font-size:13px; color:#6b7280; margin-bottom:12px; }\n    .form { background:#f7f9fc; padding:14px; border-radius:6px; margin-bottom:16px; }\n    .btn { display:inline-block; padding:12px 18px; border-radius:8px; text-decoration:none; font-weight:600; }\n    .btn-primary { background:#7c3aed; color:#fff; }\n    .footer { font-size:12px; color:#9aa0ab; padding:18px; text-align:center; }\n    table { width:100%; border-collapse:collapse; }\n    td { padding:8px 0; vertical-align:top; }\n    .key { font-weight:700; color:#111; width:36%; }\n    .val { color:#222; }\n  </style>\n</head>\n<body>\n  <div class=\"container\" role=\"article\">\n    <div class=\"header\">\n      <h1 style=\"font-size:20px;margin:0\">SHITAI</h1>\n      <p style=\"margin:6px 0 0 0;font-size:13px;opacity:0.95\">\u30E6\u30FC\u30B6\u30FC\u304C\u53C2\u52A0\u3057\u307E\u3057\u305F\u3002</p>\n    </div>\n\n    <div class=\"content\">\n      <p class=\"title\">\uD83D\uDC65 ".concat(joinUserName, " \u3055\u3093\u304C\u53C2\u52A0\u3057\u307E\u3057\u305F \u2014 ").concat(title, "</p>\n      <p class=\"meta\"><span style=\"font-weight:700\">\u30B0\u30EB\u30FC\u30D7\uFF1A</span> ").concat(groupName, " </p>\n\n      <p style=\"margin:0 0 18px 0;\">\u53C2\u52A0\u8005\u60C5\u5831\u306E\u6700\u65B0\u72B6\u6CC1\u306F\u4E0B\u306E\u30EA\u30F3\u30AF\u3067\u78BA\u8A8D\u3067\u304D\u307E\u3059\u3002</p>\n      <a class=\"btn btn-primary\" href=\"").concat(process.env.REACT_APP_FRONTEND_URL + "/" + "wish" + "/" + wishId, "\" target=\"_blank\" rel=\"noopener\">\u53C2\u52A0\u8005\u60C5\u5831\u3092\u78BA\u8A8D\u3059\u308B</a>\n\n      <hr style=\"border:none;border-top:1px solid #eef2f7;margin:18px 0;\" />\n      <p style=\"margin:0;font-size:13px;color:#556070;\">\n        \u5FC5\u8981\u3067\u3042\u308C\u3070\u4E3B\u50AC\u8005\u3084\u4ED6\u306E\u53C2\u52A0\u8005\u3078\u9023\u7D61\u3092\u53D6\u308A\u307E\u3057\u3087\u3046\u3002\n      </p>\n    </div>\n    <div class=\"footer\">\n      \u3053\u306E\u30E1\u30FC\u30EB\u306F\u81EA\u52D5\u914D\u4FE1\u3067\u3059\u3002\n    </div>\n  </div>\n</body>\n</html>\n");
                        if (!(to.length != 0)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.sendEmail(to, "\u3010SHITAI\u3011\u30E6\u30FC\u30B6\u30FC\u304C\u53C2\u52A0\u3057\u307E\u3057\u305F \u2014 ".concat(title, "\uFF08").concat(joinUserName, "\uFF09"), html)];
                    case 9:
                        _c.sent();
                        _c.label = 10;
                    case 10: return [4 /*yield*/, this.pool.query("COMMIT")];
                    case 11:
                        _c.sent();
                        return [3 /*break*/, 14];
                    case 12:
                        e_20 = _c.sent();
                        return [4 /*yield*/, this.pool.query("ROLLBACK")];
                    case 13:
                        _c.sent();
                        throw e_20;
                    case 14: return [2 /*return*/, response];
                }
            });
        });
    };
    return NeonApi;
}());



/***/ }),

/***/ "./utils/date.ts":
/*!***********************!*\
  !*** ./utils/date.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDays: () => (/* binding */ addDays),
/* harmony export */   addHours: () => (/* binding */ addHours),
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   formatDateTime: () => (/* binding */ formatDateTime),
/* harmony export */   formatDisplayDate: () => (/* binding */ formatDisplayDate),
/* harmony export */   getTimeRemaining: () => (/* binding */ getTimeRemaining),
/* harmony export */   isDateInPast: () => (/* binding */ isDateInPast)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "dayjs");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/utc */ "dayjs/plugin/utc");
/* harmony import */ var dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs/plugin/timezone */ "dayjs/plugin/timezone");
/* harmony import */ var dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2__);



dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_utc__WEBPACK_IMPORTED_MODULE_1___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_timezone__WEBPACK_IMPORTED_MODULE_2___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().tz.setDefault("Asia/Tokyo");
var formatDate = function (date, format) {
    if (format === void 0) { format = "YYYY/MM/DD"; }
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).utc().format(format);
};
var formatDisplayDate = function (date, format) {
    if (format === void 0) { format = "YYYY/MM/DD HH:mm"; }
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).utc().format(format);
};
var formatDateTime = function (date) {
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).utc().format("YYYY-MM-DDTHH:mm");
};
var getTimeRemaining = function (deadline) {
    var now = dayjs__WEBPACK_IMPORTED_MODULE_0___default()();
    var target = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(deadline);
    var diff = target.diff(now);
    if (diff < 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            expired: true,
            text: "期限切れ",
        };
    }
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    var text = "";
    if (days > 0) {
        text = "\u6B8B\u308A ".concat(days, "\u65E5 ").concat(hours, "\u6642\u9593");
    }
    else if (hours > 0) {
        text = "\u6B8B\u308A ".concat(hours, "\u6642\u9593 ").concat(minutes, "\u5206");
    }
    else if (minutes > 0) {
        text = "\u6B8B\u308A ".concat(minutes, "\u5206");
    }
    else {
        text = "\u6B8B\u308A ".concat(seconds, "\u79D2");
    }
    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        expired: false,
        text: text,
    };
};
var isDateInPast = function (date) {
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).tz().isBefore(dayjs__WEBPACK_IMPORTED_MODULE_0___default()());
};
var addDays = function (date, days) {
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).tz().add(days, "day").toISOString();
};
var addHours = function (date, hours) {
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).tz().add(hours, "hour").toISOString();
};


/***/ }),

/***/ "@google-cloud/storage":
/*!****************************************!*\
  !*** external "@google-cloud/storage" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@google-cloud/storage");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ "dayjs/plugin/timezone":
/*!****************************************!*\
  !*** external "dayjs/plugin/timezone" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("dayjs/plugin/timezone");

/***/ }),

/***/ "dayjs/plugin/utc":
/*!***********************************!*\
  !*** external "dayjs/plugin/utc" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("dayjs/plugin/utc");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "resend":
/*!*************************!*\
  !*** external "resend" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("resend");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/backend/server.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NeonApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NeonApi */ "./src/backend/NeonApi.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



(__webpack_require__(/*! dotenv */ "dotenv").config)();
var app = express__WEBPACK_IMPORTED_MODULE_0___default()();
var neonApi = new _NeonApi__WEBPACK_IMPORTED_MODULE_2__.NeonApi();
// CORSの設定
var corsOptions = {
    origin: process.env.REACT_APP_FRONTEND_URL, // フロントエンドのURLを環境変数から取得
    method: [],
};
// アクセストークン認証(ラッパー関数)
var initAccessTokenAuth = function (userInfo) { return __awaiter(void 0, void 0, void 0, function () {
    var result, isExpired, isSuccess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, neonApi.accessTokenAuth(userInfo)];
            case 1:
                result = _a.sent();
                console.log(result);
                isExpired = typeof result === "string" && result === "expired access token";
                isSuccess = typeof result !== "string" && Number(result.id) > 0 && !isExpired;
                if (isExpired)
                    throw { message: "アクセストークンが有効期限切れです。" };
                if (!isSuccess)
                    throw { message: "アクセストークンの認証に失敗しました。" };
                return [2 /*return*/, result];
        }
    });
}); };
// CORS設定とJSONパーサーをミドルウェアとして適用
app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()(corsOptions));
app.use(express__WEBPACK_IMPORTED_MODULE_0___default().json({ limit: "10mb" }));
// ログイン認証を行う(成功時アクセストークンを返却する)
app.post("/api/v1/auth/login", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, neonApi.loginAuth(req.body)];
            case 1:
                result = _a.sent();
                // ユーザー情報とトークンをクライアントに返す
                res.status(200).json({
                    status: 200, // ステータスコード
                    result: result,
                });
                return [2 /*return*/];
            case 2:
                error_1 = _a.sent();
                res.status(500).json({
                    error: error_1.message,
                    status: 500, // ステータスコード
                });
                return [2 /*return*/];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.post("/api/v1/auth/accessToken", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userInfo, _a, id, name_1, email, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                userInfo = req.body.userInfo;
                return [4 /*yield*/, initAccessTokenAuth(userInfo)];
            case 1:
                _a = _b.sent(), id = _a.id, name_1 = _a.name, email = _a.email;
                // ユーザー情報とトークンをクライアントに返す
                res.status(200).json({
                    status: 200, // ステータスコード
                    result: { id: Number(id), name: name_1, email: email },
                });
                return [2 /*return*/];
            case 2:
                error_2 = _b.sent();
                res.status(500).json({
                    error: error_2.message,
                    status: 500, // ステータスコード
                });
                return [2 /*return*/];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.post("/api/v1/auth/refreshToken", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userInfo, response_1, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userInfo = req.body.userInfo;
                return [4 /*yield*/, neonApi.refreshTokenAuth(userInfo)];
            case 1:
                response_1 = _a.sent();
                // ユーザー情報とトークンをクライアントに返す
                if (response_1 !== "error") {
                    res.status(200).json({
                        status: 200, // ステータスコード
                        result: __assign({}, response_1),
                    });
                }
                else {
                    res.status(500).json({
                        error: "error",
                        status: 500, // ステータスコード
                    });
                }
                return [2 /*return*/];
            case 2:
                error_3 = _a.sent();
                res.status(500).json({
                    error: error_3.message,
                    status: 500, // ステータスコード
                });
                return [2 /*return*/];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.post("/api/v1/post/insertUserInfo", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var updateObj, result, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                updateObj = req.body;
                return [4 /*yield*/, neonApi.insertUserInfo(updateObj)];
            case 1:
                result = _a.sent();
                // ユーザー情報とトークンをクライアントに返す
                res.status(200).json({
                    status: 200, // ステータスコード
                    result: result,
                });
                return [2 /*return*/];
            case 2:
                error_4 = _a.sent();
                res.status(500).json({
                    error: error_4.message,
                    status: 500, // ステータスコード
                });
                return [2 /*return*/];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.post("/api/v1/post/insertWish", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userInfo, left, userId, result, error_5;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, userInfo = _a.userInfo, left = __rest(_a, ["userInfo"]);
                return [4 /*yield*/, initAccessTokenAuth(userInfo)];
            case 1:
                userId = (_b.sent()).id;
                return [4 /*yield*/, neonApi.insertWish(left, Number(userId))];
            case 2:
                result = _b.sent();
                // ユーザー情報とトークンをクライアントに返す
                res.status(200).json({
                    status: 200, // ステータスコード
                    result: result,
                });
                return [2 /*return*/];
            case 3:
                error_5 = _b.sent();
                res.status(500).json({
                    error: error_5.message,
                    status: 500, // ステータスコード
                });
                return [2 /*return*/];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post("/api/v1/get/wishById", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userInfo, id, userId, result, error_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, userInfo = _a.userInfo, id = _a.id;
                return [4 /*yield*/, initAccessTokenAuth(userInfo)];
            case 1:
                userId = (_b.sent()).id;
                return [4 /*yield*/, neonApi.getWishById(Number(id), Number(userId))];
            case 2:
                result = _b.sent();
                // ユーザー情報とトークンをクライアントに返す
                res.status(200).json({
                    status: 200, // ステータスコード
                    result: { wish: result },
                });
                return [2 /*return*/];
            case 3:
                error_6 = _b.sent();
                res.status(500).json({
                    error: error_6.message,
                    status: 500, // ステータスコード
                });
                return [2 /*return*/];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post("/api/v1/post/insertAnswer", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userInfo, id, left, userId, result, error_7;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, userInfo = _a.userInfo, id = _a.id, left = __rest(_a, ["userInfo", "id"]);
                return [4 /*yield*/, initAccessTokenAuth(userInfo)];
            case 1:
                userId = (_b.sent()).id;
                return [4 /*yield*/, neonApi.insertAnswer(left, Number(userId), Number(id))];
            case 2:
                result = _b.sent();
                // ユーザー情報とトークンをクライアントに返す
                res.status(200).json({
                    status: 200, // ステータスコード
                    result: result,
                });
                return [2 /*return*/];
            case 3:
                error_7 = _b.sent();
                res.status(500).json({
                    error: error_7.message,
                    status: 500, // ステータスコード
                });
                return [2 /*return*/];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post("/api/v1/post/updateWish", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userInfo, left, userId, result, error_8;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, userInfo = _a.userInfo, left = __rest(_a, ["userInfo"]);
                return [4 /*yield*/, initAccessTokenAuth(userInfo)];
            case 1:
                userId = (_b.sent()).id;
                return [4 /*yield*/, neonApi.updateWish(left, Number(userId))];
            case 2:
                result = _b.sent();
                // ユーザー情報とトークンをクライアントに返す
                res.status(200).json({
                    status: 200, // ステータスコード
                    result: result,
                });
                return [2 /*return*/];
            case 3:
                error_8 = _b.sent();
                res.status(500).json({
                    error: error_8.message,
                    status: 500, // ステータスコード
                });
                return [2 /*return*/];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post("/api/v1/get/wishes", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userInfo, id, userId, result, error_9;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, userInfo = _a.userInfo, id = _a.id;
                return [4 /*yield*/, initAccessTokenAuth(userInfo)];
            case 1:
                userId = (_b.sent()).id;
                return [4 /*yield*/, neonApi.getWishes(Number(id), Number(userId))];
            case 2:
                result = _b.sent();
                // ユーザー情報とトークンをクライアントに返す
                res.status(200).json({
                    status: 200, // ステータスコード
                    result: { wishes: result },
                });
                return [2 /*return*/];
            case 3:
                error_9 = _b.sent();
                res.status(500).json({
                    error: error_9.message,
                    status: 500, // ステータスコード
                });
                return [2 /*return*/];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post("/api/v1/get/groups", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userInfo, userId, result, error_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                userInfo = req.body.userInfo;
                return [4 /*yield*/, initAccessTokenAuth(userInfo)];
            case 1:
                userId = (_a.sent()).id;
                return [4 /*yield*/, neonApi.getGroups(Number(userId))];
            case 2:
                result = _a.sent();
                // ユーザー情報とトークンをクライアントに返す
                res.status(200).json({
                    status: 200, // ステータスコード
                    result: { groups: result },
                });
                return [2 /*return*/];
            case 3:
                error_10 = _a.sent();
                res.status(500).json({
                    error: error_10.message,
                    status: 500, // ステータスコード
                });
                return [2 /*return*/];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post("/api/v1/post/insertGroup", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userInfo, left, userId, result, error_11;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, userInfo = _a.userInfo, left = __rest(_a, ["userInfo"]);
                return [4 /*yield*/, initAccessTokenAuth(userInfo)];
            case 1:
                userId = (_b.sent()).id;
                return [4 /*yield*/, neonApi.insertGroup(Number(userId), left)];
            case 2:
                result = _b.sent();
                // ユーザー情報とトークンをクライアントに返す
                res.status(200).json({
                    status: 200, // ステータスコード
                    result: result,
                });
                return [2 /*return*/];
            case 3:
                error_11 = _b.sent();
                res.status(500).json({
                    error: error_11.message,
                    status: 500, // ステータスコード
                });
                return [2 /*return*/];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post("/api/v1/post/invitationGroup", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userInfo, left, userId, result, error_12;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, userInfo = _a.userInfo, left = __rest(_a, ["userInfo"]);
                return [4 /*yield*/, initAccessTokenAuth(userInfo)];
            case 1:
                userId = (_b.sent()).id;
                return [4 /*yield*/, neonApi.invitationGroup(Number(userId), left)];
            case 2:
                result = _b.sent();
                // ユーザー情報とトークンをクライアントに返す
                res.status(200).json({
                    status: 200, // ステータスコード
                    result: result,
                });
                return [2 /*return*/];
            case 3:
                error_12 = _b.sent();
                res.status(500).json({
                    error: error_12.message,
                    status: 500, // ステータスコード
                });
                return [2 /*return*/];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post("/api/v1/post/joinWish", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userInfo, left, userId, result, error_13;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, userInfo = _a.userInfo, left = __rest(_a, ["userInfo"]);
                return [4 /*yield*/, initAccessTokenAuth(userInfo)];
            case 1:
                userId = (_b.sent()).id;
                return [4 /*yield*/, neonApi.joinWish(Number(userId), left)];
            case 2:
                result = _b.sent();
                // ユーザー情報とトークンをクライアントに返す
                res.status(200).json({
                    status: 200, // ステータスコード
                    result: result,
                });
                return [2 /*return*/];
            case 3:
                error_13 = _b.sent();
                res.status(500).json({
                    error: error_13.message,
                    status: 500, // ステータスコード
                });
                return [2 /*return*/];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.listen(4200, function () {
    console.log("port ".concat(4200, " \u3067\u30B5\u30FC\u30D0\u30FC\u8D77\u52D5\u4E2D"));
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSwyT0FBMk87QUFDM087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtPQUErTztBQUMvTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsME5BQTBOO0FBQzFOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQSxnT0FBZ087QUFDaE87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRLQUE0SztBQUM1SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxxQkFBcUI7QUFDdkUsc0RBQXNELCtCQUEr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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSUFBSTtBQUNMLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSUFBSTtBQUNMLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSUFBSTtBQUNMLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSUFBSTtBQUNMO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvLi9zcmMvYmFja2VuZC9OZW9uQXBpLnRzIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkLy4vdXRpbHMvZGF0ZS50cyIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC9leHRlcm5hbCBjb21tb25qcyBcIkBnb29nbGUtY2xvdWQvc3RvcmFnZVwiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwiY29yc1wiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwiY3J5cHRvXCIiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvZXh0ZXJuYWwgY29tbW9uanMgXCJkYXlqc1wiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwiZGF5anMvcGx1Z2luL3RpbWV6b25lXCIiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvZXh0ZXJuYWwgY29tbW9uanMgXCJkYXlqcy9wbHVnaW4vdXRjXCIiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC9leHRlcm5hbCBjb21tb25qcyBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwicGdcIiIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC9leHRlcm5hbCBjb21tb25qcyBcInJlc2VuZFwiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvLi9zcmMvYmFja2VuZC9zZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnID0gT2JqZWN0LmNyZWF0ZSgodHlwZW9mIEl0ZXJhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBJdGVyYXRvciA6IE9iamVjdCkucHJvdG90eXBlKTtcbiAgICByZXR1cm4gZy5uZXh0ID0gdmVyYigwKSwgZ1tcInRocm93XCJdID0gdmVyYigxKSwgZ1tcInJldHVyblwiXSA9IHZlcmIoMiksIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG52YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG5pbXBvcnQgeyBQb29sIH0gZnJvbSBcInBnXCI7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIkBnb29nbGUtY2xvdWQvc3RvcmFnZVwiO1xudmFyIHJhbmRvbVVVSUQgPSByZXF1aXJlKFwiY3J5cHRvXCIpLnJhbmRvbVVVSUQ7XG5pbXBvcnQgeyBSZXNlbmQgfSBmcm9tIFwicmVzZW5kXCI7XG5pbXBvcnQgeyBjcmVhdGVIYXNoLCByYW5kb21CeXRlcyB9IGZyb20gXCJjcnlwdG9cIjtcbmltcG9ydCAqIGFzIGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgeyBmb3JtYXREaXNwbGF5RGF0ZSB9IGZyb20gXCIuLi8uLi91dGlscy9kYXRlXCI7XG5yZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZygpO1xudmFyIE5lb25BcGkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTmVvbkFwaSgpIHtcbiAgICAgICAgdGhpcy5wb29sID0gbmV3IFBvb2woe1xuICAgICAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0RCX0hPU1QsXG4gICAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfREJfVVNFUixcbiAgICAgICAgICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfREJfTkFNRSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfREJfUEFTU1dPUkQsXG4gICAgICAgICAgICBwb3J0OiBwYXJzZUludChwcm9jZXNzLmVudi5SRUFDVF9BUFBfREJfUE9SVCB8fCBcIjU0MzJcIiksXG4gICAgICAgICAgICBzc2w6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNhbHQgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfREJfU0FMVDtcbiAgICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgICAgICBleHBpcmVzSW46IFwiMUhcIixcbiAgICAgICAgICAgIGFsZ29yaXRobTogXCJIUzI1NlwiLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXG4gICAgICAgICAgICAnXCJncm91cElkXCInLFxuICAgICAgICAgICAgJ1wiY3JlYXRvcklkXCInLFxuICAgICAgICAgICAgJ1wiY2F0ZWdvcnlcIicsXG4gICAgICAgICAgICAnXCJpbWFnZURhdGFcIicsXG4gICAgICAgICAgICAnXCJ0aXRsZVwiJyxcbiAgICAgICAgICAgICdcImRpc3BsYXlEYXRlXCInLFxuICAgICAgICAgICAgJ1wiZGlzcGxheVRleHRcIicsXG4gICAgICAgICAgICAnXCJub3Rlc1wiJyxcbiAgICAgICAgICAgICdcImRlYWRsaW5lXCInLFxuICAgICAgICAgICAgJ1wibWluUGFydGljaXBhbnRzXCInLFxuICAgICAgICAgICAgJ1wibWF4UGFydGljaXBhbnRzXCInLFxuICAgICAgICAgICAgJ1wiYWN0aW9uTGFiZWxcIicsXG4gICAgICAgICAgICAnXCJ3aXRoZHJhd25cIicsXG4gICAgICAgICAgICAnXCJjcmVhdGVkQXRcIicsXG4gICAgICAgICAgICAnXCJwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYVR5cGVcIicsXG4gICAgICAgICAgICAnXCJwb3N0Q29uZmlybVNjaGVtYVR5cGVcIicsXG4gICAgICAgICAgICAnXCJpbXBsZW1lbnRhdGlvbkRhdGV0aW1lXCInLFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmNvbHVtbk5hbWVzID0gW1xuICAgICAgICAgICAgeyBjb2x1bW46IFwiY2F0ZWdvcnlcIiwgbmFtZTogXCLjgqvjg4bjgrTjg6pcIiB9LFxuICAgICAgICAgICAgeyBjb2x1bW46IFwidGl0bGVcIiwgbmFtZTogXCLjgr/jgqTjg4jjg6tcIiB9LFxuICAgICAgICAgICAgeyBjb2x1bW46IFwiZGlzcGxheURhdGVcIiwgbmFtZTogXCLooajnpLrnlKjml6XmmYJcIiB9LFxuICAgICAgICAgICAgeyBjb2x1bW46IFwiZGlzcGxheVRleHRcIiwgbmFtZTogXCLooajnpLrnlKjmloflrZdcIiB9LFxuICAgICAgICAgICAgeyBjb2x1bW46IFwibm90ZXNcIiwgbmFtZTogXCLlgpnogINcIiB9LFxuICAgICAgICAgICAgeyBjb2x1bW46IFwiZGVhZGxpbmVcIiwgbmFtZTogXCLmnJ/pmZDml6VcIiB9LFxuICAgICAgICAgICAgeyBjb2x1bW46IFwibWluUGFydGljaXBhbnRzXCIsIG5hbWU6IFwi5pyA5L2O56K65a6a5Lq65pWwXCIgfSxcbiAgICAgICAgICAgIHsgY29sdW1uOiBcIm1heFBhcnRpY2lwYW50c1wiLCBuYW1lOiBcIuacgOWkp+eiuuWumuS6uuaVsFwiIH0sXG4gICAgICAgICAgICB7IGNvbHVtbjogXCJpbXBsZW1lbnRhdGlvbkRhdGV0aW1lXCIsIG5hbWU6IFwi5a6f5pa95pelXCIgfSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5kYXRlQ29sdW1ucyA9IFtcImRlYWRsaW5lXCIsIFwiaW1wbGVtZW50YXRpb25EYXRldGltZVwiXTtcbiAgICB9XG4gICAgTmVvbkFwaS5wcm90b3R5cGUuY3JlYXRlVG9rZW5zID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByZXNwb25zZSA9IHsgYWNjZXNzVG9rZW46IFwiXCIsIHJlZnJlc2hUb2tlbjogXCJcIiB9O1xuICAgICAgICAvLyDjgqLjgq/jgrvjgrnjg4jjg7zjgq/jg7PkvZzmiJBcbiAgICAgICAgdmFyIHJhbmRvbVN0ciA9IHJhbmRvbUJ5dGVzKDE2KS50b1N0cmluZyhcImhleFwiKTtcbiAgICAgICAgLy8g44CM44Op44Oz44OA44Og5paH5a2X5YiXKDE244OQ44Kk44OIKSArIOODquOCr+OCqOOCueODiC7jg6bjg7zjgrbjg7xJRCjjgr3jg6vjg4jlgKQp44CN44Gn44OP44OD44K344Ol5YCk44KS5L2c5oiQXG4gICAgICAgIHZhciBzYWx0ZWRSYW5kb21TdHIgPSByYW5kb21TdHIgKyB0aGlzLnNhbHQ7XG4gICAgICAgIHZhciBhY2Nlc3NUb2tlbiA9IGNyZWF0ZUhhc2goXCJzaGEyNTZcIilcbiAgICAgICAgICAgIC51cGRhdGUoc2FsdGVkUmFuZG9tU3RyKVxuICAgICAgICAgICAgLmRpZ2VzdChcImhleFwiKTtcbiAgICAgICAgLy8g44Oq44OV44Os44OD44K344Ol44OI44O844Kv44Oz5L2c5oiQXG4gICAgICAgIHJhbmRvbVN0ciA9IHJhbmRvbUJ5dGVzKDE2KS50b1N0cmluZyhcImhleFwiKTtcbiAgICAgICAgLy8g44CM44Op44Oz44OA44Og5paH5a2X5YiXKDE244OQ44Kk44OIKSArIOODquOCr+OCqOOCueODiC7jg6bjg7zjgrbjg7xJRCjjgr3jg6vjg4jlgKQp44CN44Gn44OP44OD44K344Ol5YCk44KS5L2c5oiQXG4gICAgICAgIHNhbHRlZFJhbmRvbVN0ciA9IHJhbmRvbVN0ciArIHRoaXMuc2FsdDtcbiAgICAgICAgdmFyIHJlZnJlc2hUb2tlbiA9IGNyZWF0ZUhhc2goXCJzaGEyNTZcIilcbiAgICAgICAgICAgIC51cGRhdGUoc2FsdGVkUmFuZG9tU3RyKVxuICAgICAgICAgICAgLmRpZ2VzdChcImhleFwiKTtcbiAgICAgICAgdmFyIGRlZmF1bHRQZXlsb2FkID0ge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgcmVmcmVzaFBleWxvYWQgPSB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICByZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlbixcbiAgICAgICAgfTtcbiAgICAgICAgcmVzcG9uc2UuYWNjZXNzVG9rZW4gPSBqd3Quc2lnbihkZWZhdWx0UGV5bG9hZCwgdGhpcy5zYWx0IHx8IFwiXCIsIHRoaXMuY29uZmlnKTtcbiAgICAgICAgcmVzcG9uc2UucmVmcmVzaFRva2VuID0gand0LnNpZ24ocmVmcmVzaFBleWxvYWQsIHRoaXMuc2FsdCB8fCBcIlwiLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5jb25maWcpLCB7IGV4cGlyZXNJbjogXCI3MkhcIiB9KSk7XG4gICAgICAgIHJldHVybiB7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuOiByZWZyZXNoVG9rZW4sIHJlc3BvbnNlOiByZXNwb25zZSB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyYW0wIGxvZ2luQXV0aFJlcXVlc3Qg44Om44O844K244O8SUTjgajjg5Hjgrnjg6/jg7zjg4njgYzmoLzntI3jgZXjgozjgabjgYTjgotcbiAgICAgKiBAcmV0dXJucyBhY2Nlc3NUb2tlbiDjgqLjgq/jgrvjgrnjg4jjg7zjgq/jg7PjgpLov5TljbTjgZnjgotcbiAgICAgKi9cbiAgICBOZW9uQXBpLnByb3RvdHlwZS5sb2dpbkF1dGggPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGhhc2hQYXNzd29yZCwgcXVlcnksIHJvd3MsIGlkLCBuYW1lLCBlbWFpbCwgX2MsIGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIG5ld1Jlc3BvbnNlLCB1cGRhdGVSb3dzO1xuICAgICAgICAgICAgdmFyIHVzZXJJZCA9IF9iLnVzZXJJZCwgcGFzc3dvcmQgPSBfYi5wYXNzd29yZDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2QpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9kLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hUb2tlbjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc2hQYXNzd29yZCA9IGNyZWF0ZUhhc2goXCJzaGEyNTZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudXBkYXRlKHBhc3N3b3JkICsgdGhpcy5zYWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaWdlc3QoXCJoZXhcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSA9IFwiXFxuICAgICAgICAgICAgU0VMRUNUIHNoaXRhaV91c2VyX2luZm8uaWQgICAgICBBUyBpZFxcbiAgICAgICAgICAgICxzaGl0YWlfdXNlcl9pbmZvLnVzZXJfaWQgICAgICBBUyBlbWFpbFxcbiAgICAgICAgICAgICwgc2hpdGFpX3VzZXJfaW5mby51c2VyX25hbWUgICAgICBBUyBuYW1lXFxuICAgICAgICAgICAgRlJPTSBzaGl0YWlfdXNlcl9pbmZvXFxuICAgICAgICAgICAgV0hFUkUgcGFzc3dvcmQgPSAkMVxcbiAgICAgICAgICAgICAgQU5EIHVzZXJfaWQgPSAkMjtcXG4gICAgICAgIFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KHF1ZXJ5LCBbaGFzaFBhc3N3b3JkLCB1c2VySWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3MgPSAoX2Quc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44GM5a2Y5Zyo44GZ44KL5aC05ZCI44CB44Ki44Kv44K744K544OI44O844Kv44Oz44KS6L+U5Y2044GZ44KLXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlrZjlnKjjgZfjgarjgYTloLTlkIjjgIHjgqjjg6njg7zjg6Hjg4Pjgrvjg7zjgrjjgpLov5TljbTjgZnjgovjgIJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3dzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6IFwi44Om44O844K244O8SUTjgoLjgZfjgY/jga/jg5Hjgrnjg6/jg7zjg4njgYzplpPpgZXjgaPjgabjgYTjgb7jgZnjgIJcIiB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSByb3dzWzBdW1wiaWRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gcm93c1swXVtcIm5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbCA9IHJvd3NbMF1bXCJlbWFpbFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBcIuODreOCsOOCpOODs+iqjeiovOOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYyA9IHRoaXMuY3JlYXRlVG9rZW5zKGlkKSwgYWNjZXNzVG9rZW4gPSBfYy5hY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuID0gX2MucmVmcmVzaFRva2VuLCBuZXdSZXNwb25zZSA9IF9jLnJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiVVBEQVRFIHNoaXRhaV91c2VyX2luZm8gU0VUIGFjY2Vzc190b2tlbiA9ICQxLCByZWZyZXNoX3Rva2VuID0gJDIgV0hFUkUgdXNlcl9pZCA9ICQzIFJFVFVSTklORyBpZFwiLCBbYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiwgdXNlcklkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVSb3dzID0gKF9kLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVSb3dzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6IFwi44Ot44Kw44Kk44Oz6KqN6Ki844Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gdXBkYXRlUm93c1swXVtcImlkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6IFwi44Ot44Kw44Kk44Oz6KqN6Ki844Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG5ld1Jlc3BvbnNlKSwgeyBpZDogaWQsIG5hbWU6IG5hbWUsIGVtYWlsOiBlbWFpbCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyYW0wIGFjY2Vzc1Rva2VuQXV0aFJlcXVlc3RbXCJ1c2VySW5mb1wiXSBBUEnjgpLlrp/ooYzjgZnjgovjg6bjg7zjgrbjg7zmg4XloLEo44Om44O844K244O8SUTjgIHjgqLjgq/jgrvjgrnjg4jjg7zjgq/jg7MpXG4gICAgICogQHJldHVybnPjgIBcInN1Y2Nlc3NcIiBvciBcImVycm9yXCJcbiAgICAgKi9cbiAgICBOZW9uQXBpLnByb3RvdHlwZS5hY2Nlc3NUb2tlbkF1dGggPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGlkLCBuYW1lXzEsIGVtYWlsLCBkZWNvZGVkQWNjZXNzVG9rZW4sIG9iaiwgcm93cywgZV8xO1xuICAgICAgICAgICAgdmFyIGFjY2Vzc1Rva2VuID0gX2IuYWNjZXNzVG9rZW47XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwiZXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2MudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZEFjY2Vzc1Rva2VuID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmogPSBqd3QudmVyaWZ5KGFjY2Vzc1Rva2VuLCB0aGlzLnNhbHQgfHwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSBvYmouaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZEFjY2Vzc1Rva2VuID0gb2JqLmFjY2Vzc1Rva2VuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkLCBkZWNvZGVkQWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJtZXNzYWdlXCIgaW4gZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5tZXNzYWdlID09PSBcImp3dCBleHBpcmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJleHBpcmVkIGFjY2VzcyB0b2tlblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCAqXFxuICAgICAgICAgICAgIEZST00gc2hpdGFpX3VzZXJfaW5mb1xcbiAgICAgICAgICAgICBXSEVSRSBpZCA9ICQxXFxuICAgICAgICAgICAgICAgQU5EIGFjY2Vzc190b2tlbiA9ICQyO1wiLCBbaWQsIGRlY29kZWRBY2Nlc3NUb2tlbl0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cyA9IChfYy5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwiZXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZV8xID0gcm93c1swXVtcInVzZXJfbmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsID0gcm93c1swXVtcInVzZXJfaWRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHsgaWQ6IGlkLCBuYW1lOiBuYW1lXzEsIGVtYWlsOiBlbWFpbCB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcImVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXJhbTAgYWNjZXNzVG9rZW5BdXRoUmVxdWVzdFtcInVzZXJJbmZvXCJdIEFQSeOCkuWun+ihjOOBmeOCi+ODpuODvOOCtuODvOaDheWgsSjjg6bjg7zjgrbjg7xJROOAgeOCouOCr+OCu+OCueODiOODvOOCr+ODsylcbiAgICAgKiBAcmV0dXJuc+OAgFwic3VjY2Vzc1wiIG9yIFwiZXJyb3JcIlxuICAgICAqL1xuICAgIE5lb25BcGkucHJvdG90eXBlLnJlZnJlc2hUb2tlbkF1dGggPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIF9jLCBpZCwgZGVjb2RlZFJlZnJlc2hUb2tlbiwgcm93cywgdXNlcklkLCBfZCwgbmV3QWNjZXNzVG9rZW4sIG5ld1JlZnJlc2hUb2tlbiwgbmV3UmVzcG9uc2UsIHVwZGF0ZVJvd3M7XG4gICAgICAgICAgICB2YXIgcmVmcmVzaFRva2VuID0gX2IucmVmcmVzaFRva2VuO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2UubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcImVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYyA9IGp3dC52ZXJpZnkocmVmcmVzaFRva2VuLCB0aGlzLnNhbHQgfHwgXCJcIiksIGlkID0gX2MuaWQsIGRlY29kZWRSZWZyZXNoVG9rZW4gPSBfYy5yZWZyZXNoVG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZCwgZGVjb2RlZFJlZnJlc2hUb2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1QgaWRcXG4gICAgICAgICAgICAgRlJPTSBzaGl0YWlfdXNlcl9pbmZvXFxuICAgICAgICAgICAgIFdIRVJFIGlkID0gJDFcXG4gICAgICAgICAgICAgICBBTkQgcmVmcmVzaF90b2tlbiA9ICQyO1wiLCBbaWQsIGRlY29kZWRSZWZyZXNoVG9rZW5dKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3MgPSAoX2Uuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcImVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCA9IHJvd3NbMF1bXCJpZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kID0gdGhpcy5jcmVhdGVUb2tlbnModXNlcklkKSwgbmV3QWNjZXNzVG9rZW4gPSBfZC5hY2Nlc3NUb2tlbiwgbmV3UmVmcmVzaFRva2VuID0gX2QucmVmcmVzaFRva2VuLCBuZXdSZXNwb25zZSA9IF9kLnJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiVVBEQVRFIHNoaXRhaV91c2VyX2luZm8gU0VUIGFjY2Vzc190b2tlbiA9ICQxLCByZWZyZXNoX3Rva2VuID0gJDIgV0hFUkUgaWQgPSAkMyBSRVRVUk5JTkcgaWRcIiwgW25ld0FjY2Vzc1Rva2VuLCBuZXdSZWZyZXNoVG9rZW4sIHVzZXJJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUm93cyA9IChfZS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwiZXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSB1cGRhdGVSb3dzWzBdW1wiaWRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcImVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX19hc3NpZ24oeyBpZDogaWQgfSwgbmV3UmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS51cGxvYWRJbWFnZURhdGEgPSBmdW5jdGlvbiAoaW1hZ2VEYXRhKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjcmVkZW50aWFscywgc3RvcmFnZSwgYnVja2V0LCBwYXJzZUJhc2U2NEltYWdlLCB1cGxvYWRCYXNlNjRJbWFnZSwgX2E7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NSRURFTlRJQUxTX1RZUEUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50X2VtYWlsOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQ1JFREVOVElBTFNfQ0xJRU5UX0VNQUlMLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGVfa2V5OiAocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NSRURFTlRJQUxTX1BSSVZBVEVfS0VZIHx8IFwiXCIpLnJlcGxhY2UoL1xcXFxuL2csIFwiXFxuXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGVfa2V5X2lkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQ1JFREVOVElBTFNfUFJJVkFURV9LRVlfSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdF9pZDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1BST0pFQ1RfSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50X2lkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQ1JFREVOVElBTFNfQ0xJRU5UX0lELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhfdXJpOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQ1JFREVOVElBTFNfQVVUSF9VUkksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5fdXJpOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQ1JFREVOVElBTFNfVE9LRU5fVVJJLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NSRURFTlRJQUxTX0FVVEhfUFJPVklERVJfWDUwOV9DRVJUX1VSTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRfeDUwOV9jZXJ0X3VybDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NSRURFTlRJQUxTX0NMSUVOVF9YNTA5X0NFUlRfVVJMLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXZlcnNlX2RvbWFpbjogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NSRURFTlRJQUxTX1VOSVZFUlNFX0RPTUFJTixcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlID0gbmV3IFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1BST0pFQ1RfTkFNRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogY3JlZGVudGlhbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1Y2tldCA9IHN0b3JhZ2UuYnVja2V0KHByb2Nlc3MuZW52LlJFQUNUX0FQUF9CVUNLRVRfTkFNRSB8fCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlQmFzZTY0SW1hZ2UgPSBmdW5jdGlvbiAoYmFzZTY0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBiYXNlNjQubWF0Y2goL15kYXRhOiguKyk7YmFzZTY0LCguKykkLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaGVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIEJhc2U2NCBzdHJpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgY29udGVudFR5cGU6IG1hdGNoZXNbMV0sIGJhc2U2NERhdGE6IG1hdGNoZXNbMl0gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGxvYWRCYXNlNjRJbWFnZSA9IGZ1bmN0aW9uIChiYXNlNjQsIHVwbG9hZFBhdGgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIGNvbnRlbnRUeXBlLCBiYXNlNjREYXRhLCBidWZmZXIsIGZpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBwYXJzZUJhc2U2NEltYWdlKGJhc2U2NCksIGNvbnRlbnRUeXBlID0gX2EuY29udGVudFR5cGUsIGJhc2U2NERhdGEgPSBfYS5iYXNlNjREYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJhc2U2NERhdGEsIFwiYmFzZTY0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUgPSBidWNrZXQuZmlsZSh1cGxvYWRQYXRoICsgXCIuXCIgKyBjb250ZW50VHlwZS5yZXBsYWNlKFwiaW1hZ2UvXCIsIFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmaWxlLnNhdmUoYnVmZmVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBjb250ZW50VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZUNvbnRyb2w6IFwicHVibGljLCBtYXgtYWdlPTMxNTM2MDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOW/heimgeOBquOCieWFrOmWi1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZpbGUubWFrZVB1YmxpYygpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlv4XopoHjgarjgonlhazplotcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFwiaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL1wiLmNvbmNhdChmaWxlLmNsb3VkU3RvcmFnZVVSSS5ocmVmLnJlcGxhY2UoXCJnczovL1wiLCBcIlwiKSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW1hZ2VEYXRhKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHVwbG9hZEJhc2U2NEltYWdlKGltYWdlRGF0YSwgcmFuZG9tVVVJRCgpKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2FdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcmFtMCB1c2VySWQs5L2c5oiQ44Gr5b+F6KaB44Gq5oOF5aCxKHByaWNlLCBkZXNjcmlwdGlvbiwgY3JlYXRlZF9hdClcbiAgICAgKiBAcmV0dXJuc+OAgFwic3VjY2Vzc1wiIG9yIFwiZXJyb3JcIlxuICAgICAqL1xuICAgIE5lb25BcGkucHJvdG90eXBlLmluc2VydFVzZXJJbmZvID0gZnVuY3Rpb24gKHVwZGF0ZU9iaikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGhhc2hQYXNzd29yZCwgaW5zZXJ0Um93cywgZV8yO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcInN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkJFR0lOXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzIsIDUsICwgN10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzaFBhc3N3b3JkID0gY3JlYXRlSGFzaChcInNoYTI1NlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51cGRhdGUodXBkYXRlT2JqLnBhc3N3b3JkICsgdGhpcy5zYWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaWdlc3QoXCJoZXhcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJJTlNFUlQgSU5UTyBcXFwicHVibGljXFxcIi5cXFwic2hpdGFpX3VzZXJfaW5mb1xcXCIgKFxcXCJ1c2VyX2lkXFxcIiwgXFxcInBhc3N3b3JkXFxcIiwgXFxcInVzZXJfbmFtZVxcXCIpXFxuICAgICAgICAgIFZBTFVFUygkMSwgJDIsICQzKSBSRVRVUk5JTkcgaWQ7XCIsIFt1cGRhdGVPYmouZW1haWwsIGhhc2hQYXNzd29yZCwgdXBkYXRlT2JqLm5hbWVdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFJvd3MgPSAoX2Euc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc2VydFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuODpuODvOOCtuODvOeZu+mMsuOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJDT01NSVRcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA3XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiUk9MTEJBQ0tcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS5zZW5kRW1haWwgPSBmdW5jdGlvbiAodG8sIHN1YmplY3QsIGh0bWwpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc2VuZCwgX2EsIGRhdGEsIGVycm9yO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZW5kID0gbmV3IFJlc2VuZChwcm9jZXNzLmVudi5SRUFDVF9BUFBfUkVTRU5EX0FQSV9UT0tFTik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXNlbmQuZW1haWxzLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRlJPTV9FTUFJTCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogdG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IGh0bWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IF9iLnNlbnQoKSwgZGF0YSA9IF9hLmRhdGEsIGVycm9yID0gX2EuZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgY29uc29sZS5lcnJvcih7IGVycm9yOiBlcnJvciB9KV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUuaW5zZXJ0V2lzaCA9IGZ1bmN0aW9uICh3aXNoLCBpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIHBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hLCBwb3N0Q29uZmlybVNjaGVtYSwgbGVmdFdpc2hfMSwgZ3JvdXBSb3dzLCB1cmxQYXR0ZXJuLCBpc1VybCwgaW1hZ2VEYXRhLCBfYSwgaW5zZXJ0V2lzaFJvd3MsIGNyZWF0ZUluc2VydFNjaGVtYSwgX2IsIF9jLCBzY2hlbWEsIGluc2VydFJvd3MsIGVfM18xLCBtYWlsUm93cywgZ3JvdXBOYW1lLCB1c2VyUm93cywgY3JlYXRvck5hbWUsIGNyZWF0b3JNYWlsXzEsIHRvLCBkZXNjcmlwdGlvbiwgaHRtbCwgZV80O1xuICAgICAgICAgICAgdmFyIGVfMywgX2Q7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2UubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB7IGlkOiBcIlwiIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJCRUdJTlwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2UudHJ5cy5wdXNoKFsyLCAyMSwgLCAyM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWEgPSB3aXNoLnBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hLCBwb3N0Q29uZmlybVNjaGVtYSA9IHdpc2gucG9zdENvbmZpcm1TY2hlbWEsIGxlZnRXaXNoXzEgPSBfX3Jlc3Qod2lzaCwgW1wicGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFcIiwgXCJwb3N0Q29uZmlybVNjaGVtYVwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsZWZ0V2lzaF8xLmdyb3VwSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHNnLmlkLCBzZy5cXFwiZ3JvdXBOYW1lXFxcIiBGUk9NIHB1YmxpYy5zaGl0YWlfZ3JvdXAgYXMgc2cgSU5ORVIgSk9JTiBwdWJsaWMuc2hpdGFpX2dyb3VwX2pvaW4gYXMgc2pnIE9OIHNqZy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBBTkQgc2pnLlxcXCJ1c2VySWRcXFwiID0gJDEgV0hFUkUgc2cuaWQgPSAkMjtcIiwgW2lkLCBsZWZ0V2lzaF8xLmdyb3VwSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwUm93cyA9IChfZS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLmqKnpmZDjgYzjgYLjgorjgb7jgZvjgpPjgILjgrDjg6vjg7zjg5flpJbjga7jg6bjg7zjgrbjg7zjgafjgZnjgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsUGF0dGVybiA9IC9eKGh0dHBzP3xmdHApKDpcXC9cXC9bXFx3XFwvOiUjXFwkJlxcP1xcKFxcKX5cXC49XFwrXFwtXSspLztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVXJsID0gdXJsUGF0dGVybi50ZXN0KGxlZnRXaXNoXzEuaW1hZ2VEYXRhIHx8IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGVmdFdpc2hfMS5pbWFnZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1VybCkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IGxlZnRXaXNoXzEuaW1hZ2VEYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy51cGxvYWRJbWFnZURhdGEobGVmdFdpc2hfMS5pbWFnZURhdGEgfHwgXCJcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IF9lLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lLmxhYmVsID0gNjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhID0gX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJJTlNFUlQgSU5UTyBwdWJsaWMuc2hpdGFpX3dpc2ggKFwiLmNvbmNhdCh0aGlzLmNvbHVtbnMuam9pbihcIixcIiksIFwiKSBcXG4gICAgICAgIFZBTFVFUyAoJDEsICQyLCAkMywgJDQsICQ1LCAkNiwgJDcsICQ4LCAkOSwgJDEwLCAkMTEsICQxMiwgJDEzLCBOT1coKSwgJDE0LCAkMTUsICQxNikgUkVUVVJOSU5HIGlkO1wiKSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaF8xLmdyb3VwSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoXzEuY3JlYXRvcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaF8xLmNhdGVnb3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoXzEudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoXzEuZGlzcGxheURhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoXzEuZGlzcGxheVRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoXzEubm90ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoXzEuZGVhZGxpbmUgPT0gXCJcIiA/IG51bGwgOiBsZWZ0V2lzaF8xLmRlYWRsaW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaF8xLm1pblBhcnRpY2lwYW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2hfMS5tYXhQYXJ0aWNpcGFudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoXzEuYWN0aW9uTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0Q29uZmlybVNjaGVtYS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaF8xLmltcGxlbWVudGF0aW9uRGF0ZXRpbWUgPT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxlZnRXaXNoXzEuaW1wbGVtZW50YXRpb25EYXRldGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFdpc2hSb3dzID0gKF9lLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnNlcnRXaXNoUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44GX44Gf44GE44GT44Go44Gu55m76Yyy44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUluc2VydFNjaGVtYSA9IGZ1bmN0aW9uIChzY2hlbWEsIHNjaGVtYVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzY2hlbWEudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWl4ZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFUeXBlOiBzY2hlbWFUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogc2NoZW1hLmRhdGV0aW1lTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHNjaGVtYS5kYXRldGltZVJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hVHlwZTogc2NoZW1hVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm5vdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogc2NoZW1hLm5vdGVMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogc2NoZW1hLm5vdGVSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkYXRldGltZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVR5cGU6IHNjaGVtYVR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzY2hlbWEuZGF0ZXRpbWVMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogc2NoZW1hLmRhdGV0aW1lUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm90ZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVR5cGU6IHNjaGVtYVR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJub3RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHNjaGVtYS5ub3RlTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHNjaGVtYS5ub3RlUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVR5cGU6IHNjaGVtYVR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHNjaGVtYS5ub3RlTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHNjaGVtYS5ub3RlUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lLmxhYmVsID0gODtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2UudHJ5cy5wdXNoKFs4LCAxMywgMTQsIDE1XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IF9fdmFsdWVzKF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgX19yZWFkKGNyZWF0ZUluc2VydFNjaGVtYShwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYSwgXCJwYXJ0aWNpcGF0aW9uXCIpKSwgZmFsc2UpLCBfX3JlYWQoY3JlYXRlSW5zZXJ0U2NoZW1hKHBvc3RDb25maXJtU2NoZW1hLCBcInBvc3RcIikpLCBmYWxzZSkpLCBfYyA9IF9iLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lLmxhYmVsID0gOTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhX2MuZG9uZSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMTJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJJTlNFUlQgSU5UTyBcXFwicHVibGljXFxcIi5cXFwic2hpdGFpX3NjaGVtYVxcXCIgKFxcXCJ3aXNoSWRcXFwiLCBcXFwic2NoZW1hVHlwZVxcXCIsIFxcXCJ0eXBlXFxcIiwgXFxcInJlcXVpcmVkXFxcIiwgXFxcImxhYmVsXFxcIilcXG4gICAgICAgICAgVkFMVUVTKCQxLCAkMiwgJDMsICQ0LCAkNSkgUkVUVVJOSU5HIGlkO1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFdpc2hSb3dzWzBdW1wiaWRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS5zY2hlbWFUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0Um93cyA9IChfZS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0Um93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi56K66KqN6aCF55uu44Gu55m76Yyy44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9lLmxhYmVsID0gMTE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYyA9IF9iLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOiByZXR1cm4gWzMgLypicmVhayovLCAxNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzNfMSA9IF9lLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMyA9IHsgZXJyb3I6IGVfM18xIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2QgPSBfYi5yZXR1cm4pKSBfZC5jYWxsKF9iKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8zKSB0aHJvdyBlXzMuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5pZCA9IGluc2VydFdpc2hSb3dzWzBdW1wiaWRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc3VpLnVzZXJfaWQgQXMgbWFpbFxcbiAgICAgICAgRlJPTSBwdWJsaWMuc2hpdGFpX2dyb3VwX2pvaW4gYXMgc2dqIElOTkVSIEpPSU4gc2hpdGFpX3VzZXJfaW5mbyBhcyBzdWkgT04gc3VpLmlkID0gc2dqLlxcXCJ1c2VySWRcXFwiIFdIRVJFIHNnai5cXFwiZ3JvdXBJZFxcXCIgPSAkMTtcIiwgW2xlZnRXaXNoXzEuZ3JvdXBJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haWxSb3dzID0gKF9lLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWlsUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44Kw44Or44O844OX44Oh44Oz44OQ5oOF5aCx44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwTmFtZSA9IGdyb3VwUm93c1swXVtcImdyb3VwTmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzdWkudXNlcl9uYW1lIEFzIG5hbWUsIHN1aS51c2VyX2lkIEFzIG1haWxcXG4gICAgICAgIEZST00gc2hpdGFpX3VzZXJfaW5mbyBhcyBzdWkgV0hFUkUgc3VpLlxcXCJpZFxcXCIgPSAkMTtcIiwgW2xlZnRXaXNoXzEuY3JlYXRvcklkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclJvd3MgPSAoX2Uuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLkvZzmiJDogIXmg4XloLHjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvck5hbWUgPSB1c2VyUm93c1swXVtcIm5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9yTWFpbF8xID0gdXNlclJvd3NbMF1bXCJtYWlsXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8gPSBtYWlsUm93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJvdykgeyByZXR1cm4gcm93W1wibWFpbFwiXTsgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChtYWlsKSB7IHJldHVybiBtYWlsICE9IGNyZWF0b3JNYWlsXzE7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBPYmplY3Qua2V5cyhsZWZ0V2lzaF8xKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0gX3RoaXMuY29sdW1uTmFtZXMuZmluZChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmouY29sdW1uID09IGN1cnJlbnQ7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0RhdGUgPSBfdGhpcy5kYXRlQ29sdW1ucy5zb21lKGZ1bmN0aW9uIChkdENvbCkgeyByZXR1cm4gZHRDb2wgPT0gY3VycmVudDsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHByZXYgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8dHI+PHRkPlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIuY29uY2F0KG9iai5uYW1lLCBcIjwvdGQ+PHRkPlwiKS5jb25jYXQoaXNEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmb3JtYXREaXNwbGF5RGF0ZShsZWZ0V2lzaF8xW2NvbHVtbl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsZWZ0V2lzaF8xW2NvbHVtbl0sIFwiPC90ZD48L3RyPlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sID0gXCJcXG48IWRvY3R5cGUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJqYVxcXCI+XFxuPGhlYWQ+XFxuICA8bWV0YSBjaGFyc2V0PVxcXCJ1dGYtOFxcXCIgLz5cXG4gIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXFxcIiAvPlxcbiAgPHRpdGxlPlxcdTY1QjBcXHUzMDU3XFx1MzA0NFxcdTMwMENcXHUzMDU3XFx1MzA1RlxcdTMwNDRcXHUzMDBEXFx1OTAxQVxcdTc3RTU8L3RpdGxlPlxcbiAgPHN0eWxlPlxcbiAgICBib2R5IHsgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIkhpcmFnaW5vIEtha3UgR290aGljIFByb05cXFwiLCBcXFwiWXUgR290aGljXFxcIiwgXFxcIk5vdG8gU2FucyBKUFxcXCIsIEFyaWFsLCBzYW5zLXNlcmlmOyBtYXJnaW46MDsgcGFkZGluZzowOyBiYWNrZ3JvdW5kOiNmNmY4ZmI7IGNvbG9yOiMxMTE7IH1cXG4gICAgLmNvbnRhaW5lciB7IG1heC13aWR0aDo2MDBweDsgbWFyZ2luOjI4cHggYXV0bzsgYmFja2dyb3VuZDojZmZmOyBib3JkZXItcmFkaXVzOjhweDsgb3ZlcmZsb3c6aGlkZGVuOyBib3gtc2hhZG93OjAgNnB4IDI0cHggcmdiYSgyMCwzMCw2MCwwLjA4KTsgfVxcbiAgICAuaGVhZGVyIHsgcGFkZGluZzoyMHB4OyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg5MGRlZywjMWY2ZmViLCM2YjljZmYpOyBjb2xvcjojZmZmOyB9XFxuICAgIC5jb250ZW50IHsgcGFkZGluZzoyMHB4OyB9XFxuICAgIC50aXRsZSB7IGZvbnQtc2l6ZToxOHB4OyBtYXJnaW46MCAwIDhweCAwOyB9XFxuICAgIC5tZXRhIHsgZm9udC1zaXplOjEzcHg7IGNvbG9yOiM2YjcyODA7IG1hcmdpbi1ib3R0b206MTZweDsgfVxcbiAgICAuY2FyZCB7IGJhY2tncm91bmQ6I2Y3ZjlmYzsgcGFkZGluZzoxNHB4OyBib3JkZXItcmFkaXVzOjZweDsgbWFyZ2luLWJvdHRvbToxNnB4OyB9XFxuICAgIC5idG4geyBkaXNwbGF5OmlubGluZS1ibG9jazsgcGFkZGluZzoxMnB4IDE4cHg7IGJvcmRlci1yYWRpdXM6OHB4OyB0ZXh0LWRlY29yYXRpb246bm9uZTsgZm9udC13ZWlnaHQ6NjAwOyB9XFxuICAgIC5idG4tcHJpbWFyeSB7IGJhY2tncm91bmQ6IzFmNmZlYjsgY29sb3I6I2ZmZjsgfVxcbiAgICAuZm9vdGVyIHsgZm9udC1zaXplOjEycHg7IGNvbG9yOiM5YWEwYWI7IHBhZGRpbmc6MThweDsgdGV4dC1hbGlnbjpjZW50ZXI7IH1cXG4gICAgLmt2IHsgZm9udC13ZWlnaHQ6NzAwOyBjb2xvcjojMTExOyB9XFxuICAgIHByZSB7IHdoaXRlLXNwYWNlOnByZS13cmFwOyB3b3JkLXdyYXA6YnJlYWstd29yZDsgfVxcbiAgPC9zdHlsZT5cXG48L2hlYWQ+XFxuPGJvZHk+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiIHJvbGU9XFxcImFydGljbGVcXFwiIGFyaWEtbGFiZWw9XFxcIlNISVRBSSBcXHU2NUIwXFx1MzA1N1xcdTMwNDRcXHUzMDU3XFx1MzA1RlxcdTMwNDRcXHU5MDFBXFx1NzdFNVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgICAgPGgxIHN0eWxlPVxcXCJmb250LXNpemU6MjBweDttYXJnaW46MFxcXCI+U0hJVEFJPC9oMT5cXG4gICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjZweCAwIDAgMDtmb250LXNpemU6MTNweDtvcGFjaXR5OjAuOTVcXFwiPlxcdTMwQjBcXHUzMEVCXFx1MzBGQ1xcdTMwRDdcXHU1MTg1XFx1MzA2QlxcdTY1QjBcXHUzMDU3XFx1MzA0NFxcdTMwMENcXHUzMDU3XFx1MzA1RlxcdTMwNDRcXHUzMDBEXFx1MzA0Q1xcdTYyOTVcXHU3QTNGXFx1MzA1NVxcdTMwOENcXHUzMDdFXFx1MzA1N1xcdTMwNUY8L3A+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwidGl0bGVcXFwiPlxcdUQ4M0RcXHVERDE0IFxcdTY1QjBcXHU3NzQwXFx1RkYxQVwiLmNvbmNhdChsZWZ0V2lzaF8xLnRpdGxlLCBcIjwvcD5cXG4gICAgICA8cCBjbGFzcz1cXFwibWV0YVxcXCI+PHNwYW4gY2xhc3M9XFxcImt2XFxcIj5cXHU0RjVDXFx1NjIxMFxcdTgwMDVcXHVGRjFBPC9zcGFuPiBcIikuY29uY2F0KGNyZWF0b3JOYW1lLCBcIiAmbmJzcDt8Jm5ic3A7IDxzcGFuIGNsYXNzPVxcXCJrdlxcXCI+XFx1MzBCMFxcdTMwRUJcXHUzMEZDXFx1MzBEN1xcdUZGMUE8L3NwYW4+IFwiKS5jb25jYXQoZ3JvdXBOYW1lLCBcIjwvcD5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46MCAwIDhweCAwO1xcXCI+PHNwYW4gY2xhc3M9XFxcImt2XFxcIj5cXHU1MTg1XFx1NUJCOTwvc3Bhbj48L3A+XFxuICAgICAgICA8cHJlIHN0eWxlPVxcXCJtYXJnaW46MDtcXFwiPjx0YWJsZT5cIikuY29uY2F0KGRlc2NyaXB0aW9uLCBcIjwvdGFibGU+PC9wcmU+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPHAgc3R5bGU9XFxcIm1hcmdpbjowIDAgMThweCAwO1xcXCI+XFx1OEE3M1xcdTdEMzBcXHUzMDg0XFx1NTNDMlxcdTUyQTBcXHUzMDZGXFx1NEUwQlxcdTMwNkVcXHUzMERDXFx1MzBCRlxcdTMwRjNcXHUzMDRCXFx1MzA4OVxcdTc4QkFcXHU4QThEXFx1MzA1N1xcdTMwNjZcXHUzMDRGXFx1MzA2MFxcdTMwNTVcXHUzMDQ0XFx1MzAwMjwvcD5cXG5cXG4gICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBocmVmPVxcXCJcIikuY29uY2F0KHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GUk9OVEVORF9VUkwgKyBcIi9cIiArIFwid2lzaFwiICsgXCIvXCIgKyByZXNwb25zZS5pZCwgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiByZWw9XFxcIm5vb3BlbmVyXFxcIj5cXHU4QTczXFx1N0QzMFxcdTMwOTJcXHU3OEJBXFx1OEE4RFxcdTMwNTlcXHUzMDhCPC9hPlxcblxcbiAgICAgIDxociBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VlZjJmNzttYXJnaW46MThweCAwO1xcXCIgLz5cXG5cXG4gICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjA7Zm9udC1zaXplOjEzcHg7Y29sb3I6IzU1NjA3MDtcXFwiPlxcbiAgICAgICAgXFx1NkMxN1xcdTMwNkJcXHUzMDZBXFx1MzA4QlxcdTMwMENcXHUzMDU3XFx1MzA1RlxcdTMwNDRcXHUzMDBEXFx1MzA0Q1xcdTMwNDJcXHUzMDhDXFx1MzA3MFxcdTMwMDFcXHU1M0MyXFx1NTJBMFxcdTMwODRcXHUzMEVBXFx1MzBBMlxcdTMwQUZcXHUzMEI3XFx1MzBFN1xcdTMwRjNcXHUzMDY3XFx1MzBCMFxcdTMwRUJcXHUzMEZDXFx1MzBEN1xcdTMwOTJcXHU2RDNCXFx1NjAyN1xcdTUzMTZcXHUzMDU3XFx1MzA3RVxcdTMwNTdcXHUzMDg3XFx1MzA0NlxcdUZGMDFcXG4gICAgICA8L3A+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcbiAgICAgIFxcdTMwNTNcXHUzMDZFXFx1MzBFMVxcdTMwRkNcXHUzMEVCXFx1MzA2RlxcdTgxRUFcXHU1MkQ1XFx1OTE0RFxcdTRGRTFcXHUzMDY3XFx1MzA1OVxcdTMwMDJcXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2JvZHk+XFxuPC9odG1sPlxcblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRvLmxlbmd0aCAhPSAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMTldO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zZW5kRW1haWwodG8sIFwiXFx1MzAxMFNISVRBSVxcdTMwMTFcXHU2NUIwXFx1MzA1N1xcdTMwNDRcXHUzMDBDXFx1MzA1N1xcdTMwNUZcXHUzMDQ0XFx1MzAwRFxcdTMwNENcXHU2Mjk1XFx1N0EzRlxcdTMwNTVcXHUzMDhDXFx1MzA3RVxcdTMwNTdcXHUzMDVGIFxcdTIwMTQgXCIuY29uY2F0KGxlZnRXaXNoXzEudGl0bGUpLCBodG1sKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZS5sYWJlbCA9IDE5O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE5OiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJDT01NSVRcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Uuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMjNdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV80ID0gX2Uuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiUk9MTEJBQ0tcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Uuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZV80O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIzOiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5lb25BcGkucHJvdG90eXBlLmNyZWF0ZVJlc3BvbnNlRGF0YSA9IGZ1bmN0aW9uICh3aXNoSWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNjaGVtYVJvd3MsIHNjaGVtYU1hcCwgc2NoZW1hUm93c18xLCBzY2hlbWFSb3dzXzFfMSwgc2NoZW1hLCBwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYVR5cGUsIHBvc3RDb25maXJtU2NoZW1hVHlwZSwgc2NoZW1hVHlwZSwgdHlwZSwgcmVxdWlyZWQsIGxhYmVsLCBhbnN3ZXJSb3dzLCBhbnN3ZXJNYXAsIHBhcnRpY2lwYW50cywgYW5zd2VyUm93c18xLCBhbnN3ZXJSb3dzXzFfMSwgYW5zd2VyLCBqb2luZWRBdCwgdXNlcklkLCBzY2hlbWFUeXBlLCB0eXBlLCB2YWx1ZSwgZV81O1xuICAgICAgICAgICAgdmFyIGVfNiwgX2EsIF9iLCBlXzcsIF9jLCBfZCwgX2U7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9mKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfZi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHN3LlxcXCJwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYVR5cGVcXFwiLCBzdy5cXFwicG9zdENvbmZpcm1TY2hlbWFUeXBlXFxcIiwgc3MuXFxcInNjaGVtYVR5cGVcXFwiLCBzcy5cXFwidHlwZVxcXCIsIHNzLlxcXCJyZXF1aXJlZFxcXCIsIHNzLlxcXCJsYWJlbFxcXCJcXG4gICAgICAgIEZST00gcHVibGljLnNoaXRhaV93aXNoIGFzIHN3IElOTkVSIEpPSU4gc2hpdGFpX3NjaGVtYSBhcyBzcyBPTiBzcy5cXFwid2lzaElkXFxcIiA9IHN3LmlkIFdIRVJFIHN3LmlkID0gJDE7XCIsIFt3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVJvd3MgPSAoX2Yuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjaGVtYVJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOCueOCreODvOODnuOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoc2NoZW1hUm93c18xID0gX192YWx1ZXMoc2NoZW1hUm93cyksIHNjaGVtYVJvd3NfMV8xID0gc2NoZW1hUm93c18xLm5leHQoKTsgIXNjaGVtYVJvd3NfMV8xLmRvbmU7IHNjaGVtYVJvd3NfMV8xID0gc2NoZW1hUm93c18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEgPSBzY2hlbWFSb3dzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFUeXBlID0gc2NoZW1hLnBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hVHlwZSwgcG9zdENvbmZpcm1TY2hlbWFUeXBlID0gc2NoZW1hLnBvc3RDb25maXJtU2NoZW1hVHlwZSwgc2NoZW1hVHlwZSA9IHNjaGVtYS5zY2hlbWFUeXBlLCB0eXBlID0gc2NoZW1hLnR5cGUsIHJlcXVpcmVkID0gc2NoZW1hLnJlcXVpcmVkLCBsYWJlbCA9IHNjaGVtYS5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hTWFwLnNldChzY2hlbWFUeXBlLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc2NoZW1hTWFwLmdldChzY2hlbWFUeXBlKSksIChfYiA9IHsgdHlwZTogc2NoZW1hVHlwZSA9PT0gXCJwYXJ0aWNpcGF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYVR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwb3N0Q29uZmlybVNjaGVtYVR5cGUgfSwgX2JbdHlwZSArIFwiTGFiZWxcIl0gPSBsYWJlbCwgX2JbdHlwZSArIFwiUmVxdWlyZWRcIl0gPSByZXF1aXJlZCwgX2IpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVfNl8xKSB7IGVfNiA9IHsgZXJyb3I6IGVfNl8xIH07IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY2hlbWFSb3dzXzFfMSAmJiAhc2NoZW1hUm93c18xXzEuZG9uZSAmJiAoX2EgPSBzY2hlbWFSb3dzXzEucmV0dXJuKSkgX2EuY2FsbChzY2hlbWFSb3dzXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfNikgdGhyb3cgZV82LmVycm9yOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc2ouXFxcImpvaW5lZEF0XFxcIiwgc2ouXFxcInVzZXJJZFxcXCIsIHNzLlxcXCJzY2hlbWFUeXBlXFxcIiwgc3MudHlwZSwgc2EudmFsdWVcXG4gICAgICAgIEZST00gc2hpdGFpX2pvaW4gYXMgc2ogTEVGVCBKT0lOIHNoaXRhaV9zY2hlbWEgYXMgc3MgT04gc3MuXFxcIndpc2hJZFxcXCIgPSAkMSBMRUZUIEpPSU4gcHVibGljLnNoaXRhaV9hbnN3ZXIgYXMgc2EgT04gc2EuXFxcInNjaGVtYUlkXFxcIiA9IHNzLmlkIEFORCBzcy5cXFwid2lzaElkXFxcIiA9ICQxIEFORCBzYS5cXFwidXNlcklkXFxcIiA9IHNqLlxcXCJ1c2VySWRcXFwiIFdIRVJFIHNqLlxcXCJ3aXNoSWRcXFwiID0gJDEgT1JERVIgQlkgc2ouXFxcImpvaW5lZEF0XFxcIiBBU0M7XCIsIFt3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlclJvd3MgPSAoX2Yuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnRzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoYW5zd2VyUm93c18xID0gX192YWx1ZXMoYW5zd2VyUm93cyksIGFuc3dlclJvd3NfMV8xID0gYW5zd2VyUm93c18xLm5leHQoKTsgIWFuc3dlclJvd3NfMV8xLmRvbmU7IGFuc3dlclJvd3NfMV8xID0gYW5zd2VyUm93c18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSBhbnN3ZXJSb3dzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam9pbmVkQXQgPSBhbnN3ZXIuam9pbmVkQXQsIHVzZXJJZCA9IGFuc3dlci51c2VySWQsIHNjaGVtYVR5cGUgPSBhbnN3ZXIuc2NoZW1hVHlwZSwgdHlwZSA9IGFuc3dlci50eXBlLCB2YWx1ZSA9IGFuc3dlci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF1c2VySWQgfHwgIXR5cGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyTWFwLnNldCh1c2VySWQsIF9fYXNzaWduKF9fYXNzaWduKHt9LCAoYW5zd2VyTWFwLmdldCh1c2VySWQpID8gYW5zd2VyTWFwLmdldCh1c2VySWQpIDoge30pKSwgKF9kID0geyB1c2VySWQ6IHVzZXJJZCwgam9pbmVkQXQ6IGpvaW5lZEF0IH0sIF9kW3NjaGVtYVR5cGUgKyBcIkFuc3dlcnNcIl0gPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgKGFuc3dlck1hcC5nZXQodXNlcklkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzY2hlbWFUeXBlICsgXCJBbnN3ZXJzXCIgaW4gYW5zd2VyTWFwLmdldCh1c2VySWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhbnN3ZXJNYXAuZ2V0KHVzZXJJZClbKHNjaGVtYVR5cGUgKyBcIkFuc3dlcnNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fSkpLCAoX2UgPSB7fSwgX2VbdHlwZV0gPSB2YWx1ZSwgX2UpKSwgX2QpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50cyA9IF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChhbnN3ZXJNYXAudmFsdWVzKCkpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVfN18xKSB7IGVfNyA9IHsgZXJyb3I6IGVfN18xIH07IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnN3ZXJSb3dzXzFfMSAmJiAhYW5zd2VyUm93c18xXzEuZG9uZSAmJiAoX2MgPSBhbnN3ZXJSb3dzXzEucmV0dXJuKSkgX2MuY2FsbChhbnN3ZXJSb3dzXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfNykgdGhyb3cgZV83LmVycm9yOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYTogc2NoZW1hTWFwLmdldChcInBhcnRpY2lwYXRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RDb25maXJtU2NoZW1hOiBzY2hlbWFNYXAuZ2V0KFwicG9zdFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnRzOiBwYXJ0aWNpcGFudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfNSA9IF9mLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVfNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzU7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5lb25BcGkucHJvdG90eXBlLmdldFdpc2hCeUlkID0gZnVuY3Rpb24gKHdpc2hJZCwgaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBncm91cFJvd3MsIHdpc2hSb3dzXzEsIHJlc18xLCBleHRDb2x1bW5zLCBlXzg7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogd2lzaElkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9ySWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUGFydGljaXBhbnRzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkxhYmVsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hOiB7IHR5cGU6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdENvbmZpcm1TY2hlbWE6IHsgdHlwZTogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3bjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCA1LCAsIDZdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzZy5pZCBGUk9NIHB1YmxpYy5zaGl0YWlfd2lzaCBhcyBzdyBJTk5FUiBKT0lOIHB1YmxpYy5zaGl0YWlfZ3JvdXAgYXMgc2cgT04gc3cuXFxcImdyb3VwSWRcXFwiID0gc2cuaWQgSU5ORVIgSk9JTiBwdWJsaWMuc2hpdGFpX2dyb3VwX2pvaW4gYXMgc2pnIE9OIHNqZy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBBTkQgc2pnLlxcXCJ1c2VySWRcXFwiID0gJDEgV0hFUkUgc3cuaWQgPSAkMjtcIiwgW2lkLCB3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwUm93cyA9IChfYS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLmqKnpmZDjgYzjgYLjgorjgb7jgZvjgpPjgILjgrDjg6vjg7zjg5flpJbjga7jg6bjg7zjgrbjg7zjgafjgZnjgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIFwiLmNvbmNhdCh0aGlzLmNvbHVtbnMuam9pbihcIixcIiksIFwiXFxuICAgICAgICBGUk9NIHB1YmxpYy5zaGl0YWlfd2lzaCBXSEVSRSBpZCA9ICQxO1wiKSwgW3dpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lzaFJvd3NfMSA9IChfYS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2lzaFJvd3NfMS5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44GX44Gf44GE44GT44Go44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpc2hSb3dzXzFbMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jcmVhdGVSZXNwb25zZURhdGEod2lzaElkLnRvU3RyaW5nKCkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRDb2x1bW5zID0gdGhpcy5jb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbCAhPT0gJ1wicGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFUeXBlXCInICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCAhPT0gJ1wicG9zdENvbmZpcm1TY2hlbWFUeXBlXCInO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVwQ29sdW1uID0gY29sdW1uLnJlcGxhY2VBbGwoJ1wiJywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVwQ29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB3aXNoUm93c18xWzBdW3JlcENvbHVtbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlc3BvbnNlKSwgKF9hID0ge30sIF9hW3JlcENvbHVtbl0gPSB2YWx1ZSwgX2EpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwb3N0Q29uZmlybVNjaGVtYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFydGljaXBhbnRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBdLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzXzEgJiYgY29sdW1uIGluIHJlc18xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlc3BvbnNlKSwgKF9hID0ge30sIF9hW2NvbHVtbl0gPSByZXNfMVtjb2x1bW5dLCBfYSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV84ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZV84O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS5pbnNlcnRBbnN3ZXIgPSBmdW5jdGlvbiAoYW5zd2VyLCBpZCwgd2lzaElkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgZ3JvdXBSb3dzLCBhbnN3ZXJzLCBfYSwgX2IsIGtleSwgX2MsIF9kLCBzY2hlbWEsIHJlcEtleSwgdmFsdWUsIGluc2VydEFuc3dlclJvd3MsIGVfOV8xLCBlXzEwXzEsIHVzZXJSb3dzLCBncm91cE5hbWUsIGpvaW5Vc2VyUm93cywgY3JlYXRvclVzZXJSb3dzLCBjcmVhdG9yTmFtZSwgY3JlYXRvck1haWwsIHRpdGxlLCBqb2luVXNlck5hbWUsIGpvaW5Vc2VyTWFpbF8xLCB0bywgZGVzY3JpcHRpb24sIGFuc3dlcnNfMSwgYW5zd2Vyc18xXzEsIGFuc3dlcl8xLCBzY2hlbWFSb3dzLCBpc0RhdGUsIGVfMTFfMSwgaHRtbCwgZV8xMjtcbiAgICAgICAgICAgIHZhciBlXzEwLCBfZSwgZV85LCBfZiwgZV8xMSwgX2c7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9oKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfaC5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwic3VjY2Vzc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQkVHSU5cIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLnRyeXMucHVzaChbMiwgMzIsICwgMzRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzZy5pZCwgc2cuXFxcImdyb3VwTmFtZVxcXCIgRlJPTSBwdWJsaWMuc2hpdGFpX3dpc2ggYXMgc3cgSU5ORVIgSk9JTiBwdWJsaWMuc2hpdGFpX2dyb3VwIGFzIHNnIE9OIHN3LlxcXCJncm91cElkXFxcIiA9IHNnLmlkIElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cF9qb2luIGFzIHNqZyBPTiBzamcuXFxcImdyb3VwSWRcXFwiID0gc2cuaWQgQU5EIHNqZy5cXFwidXNlcklkXFxcIiA9ICQxIFdIRVJFIHN3LmlkID0gJDI7XCIsIFtpZCwgd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFJvd3MgPSAoX2guc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5qip6ZmQ44GM44GC44KK44G+44Gb44KT44CC44Kw44Or44O844OX5aSW44Gu44Om44O844K244O844Gn44GZ44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLmxhYmVsID0gNDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2gudHJ5cy5wdXNoKFs0LCAxNSwgMTYsIDE3XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IF9fdmFsdWVzKE9iamVjdC5rZXlzKGFuc3dlcikpLCBfYiA9IF9hLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLmxhYmVsID0gNTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhX2IuZG9uZSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMTRdO1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gX2IudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC5sYWJlbCA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLnRyeXMucHVzaChbNiwgMTEsIDEyLCAxM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MgPSAoZV85ID0gdm9pZCAwLCBfX3ZhbHVlcyhPYmplY3Qua2V5cyhhbnN3ZXJba2V5XSkpKSwgX2QgPSBfYy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC5sYWJlbCA9IDc7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIV9kLmRvbmUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYSA9IF9kLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVwS2V5ID0ga2V5LnJlcGxhY2UoXCJBbnN3ZXJzXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBhbnN3ZXJba2V5XVtzY2hlbWFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZSA9PSBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiSU5TRVJUIElOVE8gcHVibGljLnNoaXRhaV9hbnN3ZXIgKFxcXCJ1c2VySWRcXFwiLCBcXFwic2NoZW1hSWRcXFwiLCBcXFwidmFsdWVcXFwiKSBTRUxFQ1QgJDEsIHNzLmlkLCAkMiBGUk9NIHB1YmxpYy5zaGl0YWlfc2NoZW1hIGFzIHNzIFdIRVJFIHNzLlxcXCJzY2hlbWFUeXBlXFxcIiA9ICQzIEFORCBzcy5cXFwidHlwZVxcXCIgPSAkNCBBTkQgc3MuXFxcIndpc2hJZFxcXCIgPSAkNSBMSU1JVCAxIFJFVFVSTklORyBpZCwgXFxcInNjaGVtYUlkXFxcIiwgXFxcInZhbHVlXFxcIlwiLCBbaWQsIHZhbHVlLCByZXBLZXksIHNjaGVtYSwgd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRBbnN3ZXJSb3dzID0gKF9oLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnNlcnRBbnN3ZXJSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgqLjg7PjgrXjg7zjga7nmbvpjLLjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2Vycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFJZDogaW5zZXJ0QW5zd2VyUm93c1swXVtcInNjaGVtYUlkXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpbnNlcnRBbnN3ZXJSb3dzWzBdW1widmFsdWVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLmxhYmVsID0gOTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2QgPSBfYy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA3XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDogcmV0dXJuIFszIC8qYnJlYWsqLywgMTNdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV85XzEgPSBfaC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzkgPSB7IGVycm9yOiBlXzlfMSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTNdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2QgJiYgIV9kLmRvbmUgJiYgKF9mID0gX2MucmV0dXJuKSkgX2YuY2FsbChfYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfOSkgdGhyb3cgZV85LmVycm9yOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IgPSBfYS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDogcmV0dXJuIFszIC8qYnJlYWsqLywgMTddO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xMF8xID0gX2guc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZV8xMCA9IHsgZXJyb3I6IGVfMTBfMSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTddO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2IgJiYgIV9iLmRvbmUgJiYgKF9lID0gX2EucmV0dXJuKSkgX2UuY2FsbChfYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMTApIHRocm93IGVfMTAuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTc6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzdWkudXNlcl9pZCBBcyBtYWlsXFxuICAgICAgICBGUk9NIHNoaXRhaV9qb2luIGFzIHNqIElOTkVSIEpPSU4gc2hpdGFpX3VzZXJfaW5mbyBhcyBzdWkgT04gc3VpLmlkID0gc2ouXFxcInVzZXJJZFxcXCIgV0hFUkUgc2ouXFxcIndpc2hJZFxcXCIgPSAkMTtcIiwgW3dpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJSb3dzID0gKF9oLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5pei5a2Y5Y+C5Yqg6ICF5oOF5aCx44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwTmFtZSA9IGdyb3VwUm93c1swXVtcImdyb3VwTmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzdWkudXNlcl9uYW1lIEFzIG5hbWUsIHN1aS51c2VyX2lkIEFzIG1haWxcXG4gICAgICAgIEZST00gc2hpdGFpX3VzZXJfaW5mbyBhcyBzdWkgV0hFUkUgc3VpLlxcXCJpZFxcXCIgPSAkMTtcIiwgW2lkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE5OlxuICAgICAgICAgICAgICAgICAgICAgICAgam9pblVzZXJSb3dzID0gKF9oLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5Y+C5Yqg6ICF5oOF5aCx44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzdWkudXNlcl9uYW1lIEFzIG5hbWUsIHN1aS51c2VyX2lkIEFzIG1haWwsIHN3LnRpdGxlXFxuICAgICAgICBGUk9NIHNoaXRhaV93aXNoIGFzIHN3IElOTkVSIEpPSU4gc2hpdGFpX3VzZXJfaW5mbyBhcyBzdWkgT04gc3cuXFxcImNyZWF0b3JJZFxcXCIgPSBzdWkuXFxcImlkXFxcIiBXSEVSRSBzdy5pZCA9ICQxO1wiLCBbd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvclVzZXJSb3dzID0gKF9oLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjcmVhdG9yVXNlclJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuS9nOaIkOiAheaDheWgseOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9yTmFtZSA9IGNyZWF0b3JVc2VyUm93c1swXVtcIm5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9yTWFpbCA9IGNyZWF0b3JVc2VyUm93c1swXVtcIm1haWxcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IGNyZWF0b3JVc2VyUm93c1swXVtcInRpdGxlXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclJvd3MucHVzaCh7IG1haWw6IGNyZWF0b3JNYWlsIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgam9pblVzZXJOYW1lID0gam9pblVzZXJSb3dzWzBdW1wibmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5Vc2VyTWFpbF8xID0gam9pblVzZXJSb3dzWzBdW1wibWFpbFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvID0gdXNlclJvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyb3cpIHsgcmV0dXJuIHJvd1tcIm1haWxcIl07IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobWFpbCkgeyByZXR1cm4gbWFpbCAhPSBqb2luVXNlck1haWxfMTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0byk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC5sYWJlbCA9IDIxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2gudHJ5cy5wdXNoKFsyMSwgMjYsIDI3LCAyOF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2Vyc18xID0gX192YWx1ZXMoYW5zd2VycyksIGFuc3dlcnNfMV8xID0gYW5zd2Vyc18xLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLmxhYmVsID0gMjI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFhbnN3ZXJzXzFfMS5kb25lKSByZXR1cm4gWzMgLypicmVhayovLCAyNV07XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJfMSA9IGFuc3dlcnNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHNzLlxcXCJzY2hlbWFUeXBlXFxcIiwgc3MuXFxcInR5cGVcXFwiLCBzcy5cXFwicmVxdWlyZWRcXFwiLCBzcy5cXFwibGFiZWxcXFwiXFxuICAgICAgICBGUk9NIHNoaXRhaV9zY2hlbWEgYXMgc3MgV0hFUkUgc3MuaWQgPSAkMTtcIiwgW2Fuc3dlcl8xLnNjaGVtYUlkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIzOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUm93cyA9IChfaC5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NoZW1hUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44K544Kt44O844Oe44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGF0ZSA9IHNjaGVtYVJvd3NbMF1bXCJ0eXBlXCJdID09IFwiZGF0ZXRpbWVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPHRyPjx0ZD5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIuY29uY2F0KHNjaGVtYVJvd3NbMF1bXCJsYWJlbFwiXSwgXCI8L3RkPjx0ZD5cIikuY29uY2F0KGlzRGF0ZSA/IGZvcm1hdERpc3BsYXlEYXRlKGFuc3dlcl8xLnZhbHVlKSA6IGFuc3dlcl8xLnZhbHVlLCBcIjwvdGQ+PC90ZD5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC5sYWJlbCA9IDI0O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2Vyc18xXzEgPSBhbnN3ZXJzXzEubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMjJdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI1OiByZXR1cm4gWzMgLypicmVhayovLCAyOF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjY6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzExXzEgPSBfaC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzExID0geyBlcnJvcjogZV8xMV8xIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyOF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnN3ZXJzXzFfMSAmJiAhYW5zd2Vyc18xXzEuZG9uZSAmJiAoX2cgPSBhbnN3ZXJzXzEucmV0dXJuKSkgX2cuY2FsbChhbnN3ZXJzXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzExKSB0aHJvdyBlXzExLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI4OlxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCA9IFwiXFxuPCFkb2N0eXBlIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiamFcXFwiPlxcbjxoZWFkPlxcbiAgPG1ldGEgY2hhcnNldD1cXFwidXRmLThcXFwiIC8+XFxuICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVxcXCIgLz5cXG4gIDx0aXRsZT5cXHU1M0MyXFx1NTJBMFxcdTgwMDVcXHUzMDZFXFx1NTE2NVxcdTUyOUJcXHU5MDFBXFx1NzdFNTwvdGl0bGU+XFxuICA8c3R5bGU+XFxuICAgIGJvZHkgeyBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiSGlyYWdpbm8gS2FrdSBHb3RoaWMgUHJvTlxcXCIsIFxcXCJZdSBHb3RoaWNcXFwiLCBcXFwiTm90byBTYW5zIEpQXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7IG1hcmdpbjowOyBwYWRkaW5nOjA7IGJhY2tncm91bmQ6I2Y2ZjhmYjsgY29sb3I6IzExMTsgfVxcbiAgICAuY29udGFpbmVyIHsgbWF4LXdpZHRoOjYwMHB4OyBtYXJnaW46MjhweCBhdXRvOyBiYWNrZ3JvdW5kOiNmZmY7IGJvcmRlci1yYWRpdXM6OHB4OyBvdmVyZmxvdzpoaWRkZW47IGJveC1zaGFkb3c6MCA2cHggMjRweCByZ2JhKDIwLDMwLDYwLDAuMDgpOyB9XFxuICAgIC5oZWFkZXIgeyBwYWRkaW5nOjIwcHg7IGJhY2tncm91bmQ6IzdjM2FlZDsgY29sb3I6I2ZmZjsgfVxcbiAgICAuY29udGVudCB7IHBhZGRpbmc6MjBweDsgfVxcbiAgICAudGl0bGUgeyBmb250LXNpemU6MThweDsgbWFyZ2luOjAgMCA4cHggMDsgfVxcbiAgICAubWV0YSB7IGZvbnQtc2l6ZToxM3B4OyBjb2xvcjojNmI3MjgwOyBtYXJnaW4tYm90dG9tOjEycHg7IH1cXG4gICAgLmZvcm0geyBiYWNrZ3JvdW5kOiNmN2Y5ZmM7IHBhZGRpbmc6MTRweDsgYm9yZGVyLXJhZGl1czo2cHg7IG1hcmdpbi1ib3R0b206MTZweDsgfVxcbiAgICAuYnRuIHsgZGlzcGxheTppbmxpbmUtYmxvY2s7IHBhZGRpbmc6MTJweCAxOHB4OyBib3JkZXItcmFkaXVzOjhweDsgdGV4dC1kZWNvcmF0aW9uOm5vbmU7IGZvbnQtd2VpZ2h0OjYwMDsgfVxcbiAgICAuYnRuLXByaW1hcnkgeyBiYWNrZ3JvdW5kOiM3YzNhZWQ7IGNvbG9yOiNmZmY7IH1cXG4gICAgLmZvb3RlciB7IGZvbnQtc2l6ZToxMnB4OyBjb2xvcjojOWFhMGFiOyBwYWRkaW5nOjE4cHg7IHRleHQtYWxpZ246Y2VudGVyOyB9XFxuICAgIHRhYmxlIHsgd2lkdGg6MTAwJTsgYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlOyB9XFxuICAgIHRkIHsgcGFkZGluZzo4cHggMDsgdmVydGljYWwtYWxpZ246dG9wOyB9XFxuICAgIC5rZXkgeyBmb250LXdlaWdodDo3MDA7IGNvbG9yOiMxMTE7IHdpZHRoOjM2JTsgfVxcbiAgICAudmFsIHsgY29sb3I6IzIyMjsgfVxcbiAgPC9zdHlsZT5cXG48L2hlYWQ+XFxuPGJvZHk+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiIHJvbGU9XFxcImFydGljbGVcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgIDxoMSBzdHlsZT1cXFwiZm9udC1zaXplOjIwcHg7bWFyZ2luOjBcXFwiPlNISVRBSTwvaDE+XFxuICAgICAgPHAgc3R5bGU9XFxcIm1hcmdpbjo2cHggMCAwIDA7Zm9udC1zaXplOjEzcHg7b3BhY2l0eTowLjk1XFxcIj5cXHU1M0MyXFx1NTJBMFxcdTgwMDVcXHUzMDRDXFx1NzhCQVxcdThBOERcXHU5ODA1XFx1NzZFRVxcdTMwOTJcXHU1MTY1XFx1NTI5QlxcdTMwNTdcXHUzMDdFXFx1MzA1N1xcdTMwNUY8L3A+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwidGl0bGVcXFwiPlxcdUQ4M0RcXHVEQzY1IFwiLmNvbmNhdChqb2luVXNlck5hbWUsIFwiIFxcdTMwNTVcXHUzMDkzXFx1MzA0Q1xcdTUzQzJcXHU1MkEwXFx1MzBGQlxcdTc4QkFcXHU4QThEXFx1MzA1N1xcdTMwN0VcXHUzMDU3XFx1MzA1RiBcXHUyMDE0IFwiKS5jb25jYXQodGl0bGUsIFwiPC9wPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJtZXRhXFxcIj48c3BhbiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6NzAwXFxcIj5cXHUzMEIwXFx1MzBFQlxcdTMwRkNcXHUzMEQ3XFx1RkYxQTwvc3Bhbj4gXCIpLmNvbmNhdChncm91cE5hbWUsIFwiIDwvcD5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtXFxcIj5cXG4gICAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46MCAwIDEycHggMDtcXFwiPjxzdHJvbmc+XFx1NTE2NVxcdTUyOUJcXHUzMDU1XFx1MzA4Q1xcdTMwNUZcXHU3OEJBXFx1OEE4RFxcdTk4MDVcXHU3NkVFPC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPHRhYmxlPlxcbiAgICAgIFwiKS5jb25jYXQoZGVzY3JpcHRpb24sIFwiXFxuICAgICAgPC90YWJsZT5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjAgMCAxOHB4IDA7XFxcIj5cXHU1M0MyXFx1NTJBMFxcdTgwMDVcXHU2MEM1XFx1NTgzMVxcdTMwNkVcXHU2NzAwXFx1NjVCMFxcdTcyQjZcXHU2Q0MxXFx1MzA2RlxcdTRFMEJcXHUzMDZFXFx1MzBFQVxcdTMwRjNcXHUzMEFGXFx1MzA2N1xcdTc4QkFcXHU4QThEXFx1MzA2N1xcdTMwNERcXHUzMDdFXFx1MzA1OVxcdTMwMDI8L3A+XFxuICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgaHJlZj1cXFwiXCIpLmNvbmNhdChwcm9jZXNzLmVudi5SRUFDVF9BUFBfRlJPTlRFTkRfVVJMICsgXCIvXCIgKyBcIndpc2hcIiArIFwiL1wiICsgd2lzaElkLCBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHJlbD1cXFwibm9vcGVuZXJcXFwiPlxcdTUzQzJcXHU1MkEwXFx1ODAwNVxcdTYwQzVcXHU1ODMxXFx1MzA5MlxcdTc4QkFcXHU4QThEXFx1MzA1OVxcdTMwOEI8L2E+XFxuXFxuICAgICAgPGhyIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtib3JkZXItdG9wOjFweCBzb2xpZCAjZWVmMmY3O21hcmdpbjoxOHB4IDA7XFxcIiAvPlxcbiAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46MDtmb250LXNpemU6MTNweDtjb2xvcjojNTU2MDcwO1xcXCI+XFxuICAgICAgICBcXHU1RkM1XFx1ODk4MVxcdTMwNjdcXHUzMDQyXFx1MzA4Q1xcdTMwNzBcXHU0RTNCXFx1NTBBQ1xcdTgwMDVcXHUzMDg0XFx1NEVENlxcdTMwNkVcXHU1M0MyXFx1NTJBMFxcdTgwMDVcXHUzMDc4XFx1OTAyM1xcdTdENjFcXHUzMDkyXFx1NTNENlxcdTMwOEFcXHUzMDdFXFx1MzA1N1xcdTMwODdcXHUzMDQ2XFx1MzAwMlxcbiAgICAgIDwvcD5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxuICAgICAgXFx1MzA1M1xcdTMwNkVcXHUzMEUxXFx1MzBGQ1xcdTMwRUJcXHUzMDZGXFx1ODFFQVxcdTUyRDVcXHU5MTREXFx1NEZFMVxcdTMwNjdcXHUzMDU5XFx1MzAwMlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvYm9keT5cXG48L2h0bWw+XFxuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodG8ubGVuZ3RoICE9IDApKSByZXR1cm4gWzMgLypicmVhayovLCAzMF07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnNlbmRFbWFpbCh0bywgXCJcXHUzMDEwU0hJVEFJXFx1MzAxMVxcdTUzQzJcXHU1MkEwXFx1ODAwNVxcdTMwNENcXHU1MTY1XFx1NTI5QlxcdTMwNTdcXHUzMDdFXFx1MzA1N1xcdTMwNUYgXFx1MjAxNCBcIi5jb25jYXQodGl0bGUsIFwiXFx1RkYwOFwiKS5jb25jYXQoam9pblVzZXJOYW1lLCBcIlxcdUZGMDlcIiksIGh0bWwpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLmxhYmVsID0gMzA7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkNPTU1JVFwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzNF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEyID0gX2guc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiUk9MTEJBQ0tcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDMzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2guc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZV8xMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzNDogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS51cGRhdGVXaXNoID0gZnVuY3Rpb24gKHdpc2gsIGlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgZ3JvdXBSb3dzLCB3aXNoSWQsIHVwZGF0ZVdpc2hfMSwgdXJsUGF0dGVybiwgaXNVcmxfMSwgaW1hZ2VEYXRhXzEsIF9hLCB1cGRhdGVSb3dzLCB1c2VyUm93cywgZ3JvdXBOYW1lLCBqb2luVXNlclJvd3MsIGNyZWF0b3JVc2VyUm93cywgY3JlYXRvck5hbWUsIGNyZWF0b3JNYWlsXzIsIHRpdGxlLCB0bywgZGVzY3JpcHRpb24sIGh0bWwsIGVfMTM7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcInN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkJFR0lOXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzIsIDE0LCAsIDE2XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc2cuaWQsIHNnLlxcXCJncm91cE5hbWVcXFwiIEZST00gcHVibGljLnNoaXRhaV93aXNoIGFzIHN3IElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cCBhcyBzZyBPTiBzdy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBJTk5FUiBKT0lOIHB1YmxpYy5zaGl0YWlfZ3JvdXBfam9pbiBhcyBzamcgT04gc2pnLlxcXCJncm91cElkXFxcIiA9IHNnLmlkIEFORCBzamcuXFxcInVzZXJJZFxcXCIgPSAkMSBXSEVSRSBzdy5pZCA9ICQyO1wiLCBbaWQsIHdpc2guaWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwUm93cyA9IChfYi5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLmqKnpmZDjgYzjgYLjgorjgb7jgZvjgpPjgILjgrDjg6vjg7zjg5flpJbjga7jg6bjg7zjgrbjg7zjgafjgZnjgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lzaElkID0gd2lzaC5pZCwgdXBkYXRlV2lzaF8xID0gX19yZXN0KHdpc2gsIFtcImlkXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybFBhdHRlcm4gPSAvXihodHRwcz98ZnRwKSg6XFwvXFwvW1xcd1xcLzolI1xcJCZcXD9cXChcXCl+XFwuPVxcK1xcLV0rKS87XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1VybF8xID0gdXJsUGF0dGVybi50ZXN0KHVwZGF0ZVdpc2hfMS5pbWFnZURhdGEgfHwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVXJsXzEpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB1cGRhdGVXaXNoXzEuaW1hZ2VEYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy51cGxvYWRJbWFnZURhdGEodXBkYXRlV2lzaF8xLmltYWdlRGF0YSB8fCBcIlwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA2O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGFfMSA9IF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBpbWFnZURhdGFfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJVUERBVEUgcHVibGljLnNoaXRhaV93aXNoIFNFVCBcIi5jb25jYXQoT2JqZWN0LmtleXModXBkYXRlV2lzaF8xKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIsIGlzVXJsXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB1cGRhdGVXaXNoXzFbY3VycmVudF0gPT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIk5VTExcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjdXJyZW50ID09IFwiaW1hZ2VEYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGltYWdlRGF0YV8xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCInXCIgKyBpbWFnZURhdGFfMSArIFwiJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJOVUxMXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiJ1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlV2lzaF8xW2N1cnJlbnRdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCInXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHIgPSBcIlxcXCJcIi5jb25jYXQoY3VycmVudCwgXCJcXFwiXCIpICsgXCIgPSBcIiArIFwiXCIuY29uY2F0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBzdHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldiAhPT0gXCJcIiA/IHByZXYgKyBcIiwgXCIgKyBzdHIgOiBzdHI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgXCJcIiksIFwiIFdIRVJFIGlkID0gJDEgUkVUVVJOSU5HIGlkO1wiKSwgW3dpc2guaWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJvd3MgPSAoX2Iuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZVJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOBl+OBn+OBhOOBk+OBqOOBruabtOaWsOOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc3VpLnVzZXJfaWQgQXMgbWFpbFxcbiAgICAgICAgRlJPTSBzaGl0YWlfam9pbiBhcyBzaiBJTk5FUiBKT0lOIHNoaXRhaV91c2VyX2luZm8gYXMgc3VpIE9OIHN1aS5pZCA9IHNqLlxcXCJ1c2VySWRcXFwiIFdIRVJFIHNqLlxcXCJ3aXNoSWRcXFwiID0gJDE7XCIsIFt3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJSb3dzID0gKF9iLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5pei5a2Y5Y+C5Yqg6ICF5oOF5aCx44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwTmFtZSA9IGdyb3VwUm93c1swXVtcImdyb3VwTmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzdWkudXNlcl9uYW1lIEFzIG5hbWUsIHN1aS51c2VyX2lkIEFzIG1haWxcXG4gICAgICAgIEZST00gc2hpdGFpX3VzZXJfaW5mbyBhcyBzdWkgV0hFUkUgc3VpLlxcXCJpZFxcXCIgPSAkMTtcIiwgW2lkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luVXNlclJvd3MgPSAoX2Iuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLlj4LliqDogIXmg4XloLHjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHN1aS51c2VyX25hbWUgQXMgbmFtZSwgc3VpLnVzZXJfaWQgQXMgbWFpbCwgc3cudGl0bGVcXG4gICAgICAgIEZST00gc2hpdGFpX3dpc2ggYXMgc3cgSU5ORVIgSk9JTiBzaGl0YWlfdXNlcl9pbmZvIGFzIHN1aSBPTiBzdy5cXFwiY3JlYXRvcklkXFxcIiA9IHN1aS5cXFwiaWRcXFwiIFdIRVJFIHN3LmlkID0gJDE7XCIsIFt3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9yVXNlclJvd3MgPSAoX2Iuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNyZWF0b3JVc2VyUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5L2c5oiQ6ICF5oOF5aCx44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JOYW1lID0gY3JlYXRvclVzZXJSb3dzWzBdW1wibmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JNYWlsXzIgPSBjcmVhdG9yVXNlclJvd3NbMF1bXCJtYWlsXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSBjcmVhdG9yVXNlclJvd3NbMF1bXCJ0aXRsZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJSb3dzLnB1c2goeyBtYWlsOiBjcmVhdG9yTWFpbF8yIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8gPSB1c2VyUm93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJvdykgeyByZXR1cm4gcm93W1wibWFpbFwiXTsgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChtYWlsKSB7IHJldHVybiBtYWlsICE9IGNyZWF0b3JNYWlsXzI7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codG8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBPYmplY3Qua2V5cyh3aXNoKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0gX3RoaXMuY29sdW1uTmFtZXMuZmluZChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmouY29sdW1uID09IGN1cnJlbnQ7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0RhdGUgPSBfdGhpcy5kYXRlQ29sdW1ucy5zb21lKGZ1bmN0aW9uIChkdENvbCkgeyByZXR1cm4gZHRDb2wgPT0gY3VycmVudDsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHByZXYgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8dHI+PHRkPlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIuY29uY2F0KG9iai5uYW1lLCBcIjwvdGQ+PHRkPlwiKS5jb25jYXQoaXNEYXRlID8gZm9ybWF0RGlzcGxheURhdGUod2lzaFtjb2x1bW5dKSA6IHdpc2hbY29sdW1uXSwgXCI8L3RkPjwvdHI+XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgPSBcIlxcbjwhZG9jdHlwZSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImphXFxcIj5cXG48aGVhZD5cXG4gIDxtZXRhIGNoYXJzZXQ9XFxcInV0Zi04XFxcIiAvPlxcbiAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcXFwiIC8+XFxuICA8dGl0bGU+XFx1MzA1N1xcdTMwNUZcXHUzMDQ0XFx1NjZGNFxcdTY1QjBcXHU5MDFBXFx1NzdFNTwvdGl0bGU+XFxuICA8c3R5bGU+XFxuICAgIGJvZHkgeyBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiSGlyYWdpbm8gS2FrdSBHb3RoaWMgUHJvTlxcXCIsIFxcXCJZdSBHb3RoaWNcXFwiLCBcXFwiTm90byBTYW5zIEpQXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7IG1hcmdpbjowOyBwYWRkaW5nOjA7IGJhY2tncm91bmQ6I2Y2ZjhmYjsgY29sb3I6IzExMTsgfVxcbiAgICAuY29udGFpbmVyIHsgbWF4LXdpZHRoOjYwMHB4OyBtYXJnaW46MjhweCBhdXRvOyBiYWNrZ3JvdW5kOiNmZmY7IGJvcmRlci1yYWRpdXM6OHB4OyBvdmVyZmxvdzpoaWRkZW47IGJveC1zaGFkb3c6MCA2cHggMjRweCByZ2JhKDIwLDMwLDYwLDAuMDgpOyB9XFxuICAgIC5oZWFkZXIgeyBwYWRkaW5nOjIwcHg7IGJhY2tncm91bmQ6IzBmNzY2ZTsgY29sb3I6I2ZmZjsgfVxcbiAgICAuY29udGVudCB7IHBhZGRpbmc6MjBweDsgfVxcbiAgICAudGl0bGUgeyBmb250LXNpemU6MThweDsgbWFyZ2luOjAgMCA4cHggMDsgfVxcbiAgICAubWV0YSB7IGZvbnQtc2l6ZToxM3B4OyBjb2xvcjojNmI3MjgwOyBtYXJnaW4tYm90dG9tOjEycHg7IH1cXG4gICAgLmNoYW5nZXMgeyBiYWNrZ3JvdW5kOiNmZmY4ZTY7IHBhZGRpbmc6MTJweDsgYm9yZGVyLXJhZGl1czo2cHg7IGJvcmRlcjoxcHggc29saWQgI2YxZTZjODsgbWFyZ2luLWJvdHRvbToxNnB4OyB9XFxuICAgIC5idG4geyBkaXNwbGF5OmlubGluZS1ibG9jazsgcGFkZGluZzoxMnB4IDE4cHg7IGJvcmRlci1yYWRpdXM6OHB4OyB0ZXh0LWRlY29yYXRpb246bm9uZTsgZm9udC13ZWlnaHQ6NjAwOyB9XFxuICAgIC5idG4tcHJpbWFyeSB7IGJhY2tncm91bmQ6IzBmNzY2ZTsgY29sb3I6I2ZmZjsgfVxcbiAgICAuZm9vdGVyIHsgZm9udC1zaXplOjEycHg7IGNvbG9yOiM5YWEwYWI7IHBhZGRpbmc6MThweDsgdGV4dC1hbGlnbjpjZW50ZXI7IH1cXG4gIDwvc3R5bGU+XFxuPC9oZWFkPlxcbjxib2R5PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIiByb2xlPVxcXCJhcnRpY2xlXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICA8aDEgc3R5bGU9XFxcImZvbnQtc2l6ZToyMHB4O21hcmdpbjowXFxcIj5TSElUQUk8L2gxPlxcbiAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46NnB4IDAgMCAwO2ZvbnQtc2l6ZToxM3B4O29wYWNpdHk6MC45NVxcXCI+XFx1MzAwQ1xcdTMwNTdcXHUzMDVGXFx1MzA0NFxcdTMwMERcXHUzMDZFXFx1NjZGNFxcdTY1QjBcXHUzMDRDXFx1MzA0MlxcdTMwOEFcXHUzMDdFXFx1MzA1N1xcdTMwNUY8L3A+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwidGl0bGVcXFwiPlxcdTI3MEZcXHVGRTBGIFxcdTY2RjRcXHU2NUIwXFx1RkYxQVwiLmNvbmNhdCh0aXRsZSwgXCI8L3A+XFxuICAgICAgPHAgY2xhc3M9XFxcIm1ldGFcXFwiPjxzcGFuIHN0eWxlPVxcXCJmb250LXdlaWdodDo3MDBcXFwiPlxcdTY2RjRcXHU2NUIwXFx1ODAwNVxcdUZGMUE8L3NwYW4+IFwiKS5jb25jYXQoY3JlYXRvck5hbWUsIFwiIDwvcD5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjaGFuZ2VzXFxcIj5cXG4gICAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46MCAwIDhweCAwO1xcXCI+PHN0cm9uZz5cXHU1OTA5XFx1NjZGNFxcdTMwNTVcXHUzMDhDXFx1MzA1RlxcdTk4MDVcXHU3NkVFPC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPHByZSBzdHlsZT1cXFwibWFyZ2luOjA7XFxcIj48dGFibGU+XCIpLmNvbmNhdChkZXNjcmlwdGlvbiwgXCI8L3RhYmxlPjwvcHJlPlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46MCAwIDE4cHggMDtcXFwiPlxcdTU5MDlcXHU2NkY0XFx1MzA2RVxcdThBNzNcXHU3RDMwXFx1MzA2RlxcdTRFMEJcXHUzMDZFXFx1MzBFQVxcdTMwRjNcXHUzMEFGXFx1MzA0QlxcdTMwODlcXHUzMDU0XFx1NzhCQVxcdThBOERcXHUzMDRGXFx1MzA2MFxcdTMwNTVcXHUzMDQ0XFx1MzAwMjwvcD5cXG4gICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBocmVmPVxcXCJcIikuY29uY2F0KHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GUk9OVEVORF9VUkwgKyBcIi9cIiArIFwid2lzaFwiICsgXCIvXCIgKyB3aXNoSWQsIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub29wZW5lclxcXCI+XFx1NjZGNFxcdTY1QjBcXHU1MTg1XFx1NUJCOVxcdTMwOTJcXHU3OEJBXFx1OEE4RFxcdTMwNTlcXHUzMDhCPC9hPlxcblxcbiAgICAgIDxociBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VlZjJmNzttYXJnaW46MThweCAwO1xcXCIgLz5cXG4gICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjA7Zm9udC1zaXplOjEzcHg7Y29sb3I6IzU1NjA3MDtcXFwiPlxcbiAgICAgICAgXFx1NTNDMlxcdTUyQTBcXHU0RTg4XFx1NUI5QVxcdTMwNkVcXHU2NUI5XFx1MzA2RlxcdTRFODhcXHU1QjlBXFx1MzA4NFxcdTUxNjVcXHU1MjlCXFx1NTE4NVxcdTVCQjlcXHUzMDZCXFx1NUY3MVxcdTk3RkZcXHUzMDRDXFx1MzA2QVxcdTMwNDRcXHUzMDRCXFx1MzA1NFxcdTc4QkFcXHU4QThEXFx1MzA0RlxcdTMwNjBcXHUzMDU1XFx1MzA0NFxcdTMwMDJcXG4gICAgICA8L3A+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcbiAgICAgIFxcdTMwNTNcXHUzMDZFXFx1MzBFMVxcdTMwRkNcXHUzMEVCXFx1MzA2RiBTSElUQUkgXFx1MzA0QlxcdTMwODlcXHUzMDZFXFx1ODFFQVxcdTUyRDVcXHU5MDFBXFx1NzdFNVxcdTMwNjdcXHUzMDU5XFx1MzAwMlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvYm9keT5cXG48L2h0bWw+XFxuXFxuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodG8ubGVuZ3RoICE9IDApKSByZXR1cm4gWzMgLypicmVhayovLCAxMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnNlbmRFbWFpbCh0bywgXCJcXHUzMDEwU0hJVEFJXFx1MzAxMVxcdTMwMENcXHUzMDU3XFx1MzA1RlxcdTMwNDRcXHUzMDBEXFx1MzA0Q1xcdTY2RjRcXHU2NUIwXFx1MzA1NVxcdTMwOENcXHUzMDdFXFx1MzA1N1xcdTMwNUYgXFx1MjAxNCBcIi5jb25jYXQodGl0bGUpLCBodG1sKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDEyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJDT01NSVRcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTZdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xMyA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlJPTExCQUNLXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfMTM7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTY6IHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUuZ2V0V2lzaGVzID0gZnVuY3Rpb24gKGdyb3VwSWQsIGlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgZ3JvdXBSb3dzLCB3aXNoUm93cywgX2xvb3BfMSwgdGhpc18xLCB3aXNoUm93c18yLCB3aXNoUm93c18yXzEsIHdpc2gsIGVfMTRfMSwgZV8xNTtcbiAgICAgICAgICAgIHZhciBlXzE0LCBfYTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMSwgMTIsICwgMTNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzZy5pZCBGUk9NIHB1YmxpYy5zaGl0YWlfZ3JvdXAgYXMgc2cgSU5ORVIgSk9JTiBwdWJsaWMuc2hpdGFpX2dyb3VwX2pvaW4gYXMgc2pnIE9OIHNqZy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBBTkQgc2pnLlxcXCJ1c2VySWRcXFwiID0gJDEgV0hFUkUgc2cuXFxcImlkXFxcIiA9ICQyO1wiLCBbaWQsIGdyb3VwSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwUm93cyA9IChfYi5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLmqKnpmZDjgYzjgYLjgorjgb7jgZvjgpPjgILjgrDjg6vjg7zjg5flpJbjga7jg6bjg7zjgrbjg7zjgafjgZnjgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIGlkLCBcIi5jb25jYXQodGhpcy5jb2x1bW5zLmpvaW4oXCIsXCIpLCBcIlxcbiAgICAgICAgRlJPTSBwdWJsaWMuc2hpdGFpX3dpc2ggV0hFUkUgXFxcImdyb3VwSWRcXFwiID0gJDEgT1JERVIgQlkgaWQgQVNDO1wiKSwgW2dyb3VwSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpc2hSb3dzID0gKF9iLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aXNoUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44GX44Gf44GE44GT44Go44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9sb29wXzEgPSBmdW5jdGlvbiAod2lzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXNXaXNoLCByZXMsIGV4dENvbHVtbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzV2lzaCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHdpc2guaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwSWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JJZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5QYXJ0aWNpcGFudHM6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkxhYmVsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYTogeyB0eXBlOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0Q29uZmlybVNjaGVtYTogeyB0eXBlOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd246IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aXNoW1wiaWRcIl0sIHdpc2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXNfMS5jcmVhdGVSZXNwb25zZURhdGEod2lzaC5pZCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRDb2x1bW5zID0gdGhpc18xLmNvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbCAhPT0gJ1wicGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFUeXBlXCInICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgIT09ICdcInBvc3RDb25maXJtU2NoZW1hVHlwZVwiJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXBDb2x1bW4gPSBjb2x1bW4ucmVwbGFjZUFsbCgnXCInLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVwQ29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gd2lzaFtyZXBDb2x1bW5dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc1dpc2ggPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVzV2lzaCksIChfYSA9IHt9LCBfYVtyZXBDb2x1bW5dID0gdmFsdWUsIF9hKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwb3N0Q29uZmlybVNjaGVtYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhcnRpY2lwYW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyAmJiBjb2x1bW4gaW4gcmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNXaXNoID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlc1dpc2gpLCAoX2EgPSB7fSwgX2FbY29sdW1uXSA9IHJlc1tjb2x1bW5dLCBfYSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucHVzaChyZXNXaXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzXzEgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA0O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzQsIDksIDEwLCAxMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lzaFJvd3NfMiA9IF9fdmFsdWVzKHdpc2hSb3dzKSwgd2lzaFJvd3NfMl8xID0gd2lzaFJvd3NfMi5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDU7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIXdpc2hSb3dzXzJfMS5kb25lKSByZXR1cm4gWzMgLypicmVhayovLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpc2ggPSB3aXNoUm93c18yXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzUgLyp5aWVsZCoqLywgX2xvb3BfMSh3aXNoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lzaFJvd3NfMl8xID0gd2lzaFJvd3NfMi5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzMgLypicmVhayovLCAxMV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTRfMSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTQgPSB7IGVycm9yOiBlXzE0XzEgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDExXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpc2hSb3dzXzJfMSAmJiAhd2lzaFJvd3NfMl8xLmRvbmUgJiYgKF9hID0gd2lzaFJvd3NfMi5yZXR1cm4pKSBfYS5jYWxsKHdpc2hSb3dzXzIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzE0KSB0aHJvdyBlXzE0LmVycm9yOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xNSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfMTU7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS5nZXRHcm91cHMgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBqb2luR3JvdXBSb3dzLCBqb2luR3JvdXBSb3dzXzEsIGpvaW5Hcm91cFJvd3NfMV8xLCBncm91cCwgZ3JvdXBPYmosIGpvaW5NZW1iZXJSb3dzLCBlXzE2XzEsIGVfMTc7XG4gICAgICAgICAgICB2YXIgZV8xNiwgX2E7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzEsIDExLCAsIDEyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc2cuaWQsIHNnLlxcXCJncm91cE5hbWVcXFwiXFxuICAgICAgICBGUk9NIHB1YmxpYy5zaGl0YWlfZ3JvdXBfam9pbiBhcyBzZ2ogSU5ORVIgSk9JTiBzaGl0YWlfZ3JvdXAgYXMgc2cgT04gc2cuaWQgPSBzZ2ouXFxcImdyb3VwSWRcXFwiIFdIRVJFIHNnai5cXFwidXNlcklkXFxcIiA9ICQxIE9SREVSIEJZIHNnLmlkIEFTQztcIiwgW2lkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luR3JvdXBSb3dzID0gKF9iLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqb2luR3JvdXBSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLlj4LliqDjgrDjg6vjg7zjg5fjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzMsIDgsIDksIDEwXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luR3JvdXBSb3dzXzEgPSBfX3ZhbHVlcyhqb2luR3JvdXBSb3dzKSwgam9pbkdyb3VwUm93c18xXzEgPSBqb2luR3JvdXBSb3dzXzEubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA0O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFqb2luR3JvdXBSb3dzXzFfMS5kb25lKSByZXR1cm4gWzMgLypicmVhayovLCA3XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwID0gam9pbkdyb3VwUm93c18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cE9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZ3JvdXBbXCJpZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBncm91cFtcImdyb3VwTmFtZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1QgRElTVElOQ1Qgc3VpLmlkLCBzdWkudXNlcl9uYW1lLCBzdWkudXNlcl9pZFxcbiAgICAgICAgRlJPTSBwdWJsaWMuc2hpdGFpX2dyb3VwX2pvaW4gYXMgc2dqIElOTkVSIEpPSU4gc2hpdGFpX3VzZXJfaW5mbyBhcyBzdWkgT04gc3VpLmlkID0gc2dqLlxcXCJ1c2VySWRcXFwiIFdIRVJFIHNnai5cXFwiZ3JvdXBJZFxcXCIgPSAkMTtcIiwgW2dyb3VwW1wiaWRcIl1dKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5NZW1iZXJSb3dzID0gKF9iLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqb2luTWVtYmVyUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44Oh44Oz44OQ44O85oOF5aCx44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwT2JqLm1lbWJlcnMgPSBqb2luTWVtYmVyUm93cy5tYXAoZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtZW1iZXJbXCJpZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbWVtYmVyW1widXNlcl9uYW1lXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogbWVtYmVyW1widXNlcl9pZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5wdXNoKGdyb3VwT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgam9pbkdyb3VwUm93c18xXzEgPSBqb2luR3JvdXBSb3dzXzEubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzogcmV0dXJuIFszIC8qYnJlYWsqLywgMTBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzE2XzEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzE2ID0geyBlcnJvcjogZV8xNl8xIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxMF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpvaW5Hcm91cFJvd3NfMV8xICYmICFqb2luR3JvdXBSb3dzXzFfMS5kb25lICYmIChfYSA9IGpvaW5Hcm91cFJvd3NfMS5yZXR1cm4pKSBfYS5jYWxsKGpvaW5Hcm91cFJvd3NfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMTYpIHRocm93IGVfMTYuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6IHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzE3ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZV8xNztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5lb25BcGkucHJvdG90eXBlLmluc2VydEdyb3VwID0gZnVuY3Rpb24gKGlkLCBncm91cCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGluc2VydFJvd3MsIGluc2VydEpvaW5Sb3dzLCBlXzE4O1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB7IGlkOiBcIlwiIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJCRUdJTlwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsyLCA2LCAsIDhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIklOU0VSVCBJTlRPIHNoaXRhaV9ncm91cCAoXFxcImdyb3VwTmFtZVxcXCIpXFxuICAgICAgICAgIFZBTFVFUygkMSkgUkVUVVJOSU5HIGlkO1wiLCBbZ3JvdXAubmFtZV0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0Um93cyA9IChfYS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0Um93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44Kw44Or44O844OX55m76Yyy44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIklOU0VSVCBJTlRPIHNoaXRhaV9ncm91cF9qb2luIChcXFwiZ3JvdXBJZFxcXCIsIFxcXCJ1c2VySWRcXFwiKVxcbiAgICAgICAgICBWQUxVRVMoJDEsICQyKSBSRVRVUk5JTkcgaWQ7XCIsIFtpbnNlcnRSb3dzWzBdW1wiaWRcIl0sIGlkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRKb2luUm93cyA9IChfYS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0Sm9pblJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOCsOODq+ODvOODl+WPguWKoOeZu+mMsuOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJDT01NSVRcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5pZCA9IGluc2VydFJvd3NbMF1bXCJpZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzE4ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiUk9MTEJBQ0tcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzE4O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6IHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUuaW52aXRhdGlvbkdyb3VwID0gZnVuY3Rpb24gKGlkXzEsIF9hKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uIChpZCwgX2IpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgdXNlclJvd3MsIGdyb3VwUm93cywgaW5zZXJ0Um93cywgZV8xOTtcbiAgICAgICAgICAgIHZhciBpbnZpdGF0aW9uVXNlcklkID0gX2IuaW52aXRhdGlvblVzZXJJZCwgZ3JvdXBJZCA9IF9iLmdyb3VwSWQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwic3VjY2Vzc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQkVHSU5cIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbMiwgNywgLCA5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1QgaWQgRlJPTSBzaGl0YWlfdXNlcl9pbmZvIFdIRVJFIHVzZXJfaWQgPSAkMVwiLCBbaW52aXRhdGlvblVzZXJJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclJvd3MgPSAoX2Muc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjg6bjg7zjgrbjg7zmg4XloLHlj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIGlkIEZST00gc2hpdGFpX2dyb3VwX2pvaW4gV0hFUkUgXFxcInVzZXJJZFxcXCIgPSAkMSBBTkQgXFxcImdyb3VwSWRcXFwiID0gJDJcIiwgW3VzZXJSb3dzWzBdW1wiaWRcIl0sIGdyb3VwSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwUm93cyA9IChfYy5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBSb3dzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgZnjgafjgavlj4LliqDjgZfjgabjgYTjgovjgrDjg6vjg7zjg5fjgafjgZnjgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiSU5TRVJUIElOVE8gc2hpdGFpX2dyb3VwX2pvaW4gKFxcXCJncm91cElkXFxcIiwgXFxcInVzZXJJZFxcXCIpIFZBTFVFUyAoJDEsICQyKSBSRVRVUk5JTkcgaWQ7XCIsIFtncm91cElkLCB1c2VyUm93c1swXVtcImlkXCJdXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRSb3dzID0gKF9jLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnNlcnRSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgrDjg6vjg7zjg5fjgrjjg6fjgqTjg7PnmbvpjLLjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQ09NTUlUXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTkgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJST0xMQkFDS1wiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfMTk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS5qb2luV2lzaCA9IGZ1bmN0aW9uIChpZF8xLCBfYSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiAoaWQsIF9iKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGdyb3VwUm93cywgd2lzaFJvd3MsIGpvaW5XaXNoUm93cywgdXNlclJvd3MsIGdyb3VwTmFtZSwgam9pblVzZXJSb3dzLCBjcmVhdG9yVXNlclJvd3MsIGNyZWF0b3JOYW1lLCBjcmVhdG9yTWFpbCwgdGl0bGUsIGpvaW5Vc2VyTmFtZSwgam9pblVzZXJNYWlsXzIsIHRvLCBodG1sLCBlXzIwO1xuICAgICAgICAgICAgdmFyIHdpc2hJZCA9IF9iLndpc2hJZDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJzdWNjZXNzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJCRUdJTlwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2MudHJ5cy5wdXNoKFsyLCAxMiwgLCAxNF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHNnLmlkLCBzZy5cXFwiZ3JvdXBOYW1lXFxcIiBGUk9NIHB1YmxpYy5zaGl0YWlfd2lzaCBhcyBzdyBJTk5FUiBKT0lOIHB1YmxpYy5zaGl0YWlfZ3JvdXAgYXMgc2cgT04gc3cuXFxcImdyb3VwSWRcXFwiID0gc2cuaWQgSU5ORVIgSk9JTiBwdWJsaWMuc2hpdGFpX2dyb3VwX2pvaW4gYXMgc2pnIE9OIHNqZy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBBTkQgc2pnLlxcXCJ1c2VySWRcXFwiID0gJDEgV0hFUkUgc3cuaWQgPSAkMjtcIiwgW2lkLCB3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwUm93cyA9IChfYy5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLmqKnpmZDjgYzjgYLjgorjgb7jgZvjgpPjgILjgrDjg6vjg7zjg5flpJbjga7jg6bjg7zjgrbjg7zjgafjgZnjgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIGlkIEZST00gc2hpdGFpX2pvaW4gV0hFUkUgXFxcInVzZXJJZFxcXCIgPSAkMSBBTkQgXFxcIndpc2hJZFxcXCIgPSAkMjtcIiwgW2lkLCB3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpc2hSb3dzID0gKF9jLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aXNoUm93cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44GZ44Gn44Gr44GX44Gf44GE44GT44Go44Gr5Y+C5Yqg5riI44G/44Gn44GZ44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIklOU0VSVCBJTlRPIHNoaXRhaV9qb2luIChcXFwidXNlcklkXFxcIiwgXFxcImpvaW5lZEF0XFxcIiwgXFxcIndpc2hJZFxcXCIpIFZBTFVFUyAoJDEsIE5PVygpLCAkMikgUkVUVVJOSU5HIGlkXCIsIFtpZCwgd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luV2lzaFJvd3MgPSAoX2Muc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpvaW5XaXNoUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44GX44Gf44GE44GT44Go5Y+C5Yqg55m76Yyy44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzdWkudXNlcl9pZCBBcyBtYWlsXFxuICAgICAgICBGUk9NIHNoaXRhaV9qb2luIGFzIHNqIElOTkVSIEpPSU4gc2hpdGFpX3VzZXJfaW5mbyBhcyBzdWkgT04gc3VpLmlkID0gc2ouXFxcInVzZXJJZFxcXCIgV0hFUkUgc2ouXFxcIndpc2hJZFxcXCIgPSAkMTtcIiwgW3dpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclJvd3MgPSAoX2Muc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLml6LlrZjlj4LliqDogIXmg4XloLHjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBOYW1lID0gZ3JvdXBSb3dzWzBdW1wiZ3JvdXBOYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHN1aS51c2VyX25hbWUgQXMgbmFtZSwgc3VpLnVzZXJfaWQgQXMgbWFpbFxcbiAgICAgICAgRlJPTSBzaGl0YWlfdXNlcl9pbmZvIGFzIHN1aSBXSEVSRSBzdWkuXFxcImlkXFxcIiA9ICQxO1wiLCBbaWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5Vc2VyUm93cyA9IChfYy5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlclJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuWPguWKoOiAheaDheWgseOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc3VpLnVzZXJfbmFtZSBBcyBuYW1lLCBzdWkudXNlcl9pZCBBcyBtYWlsLCBzdy50aXRsZVxcbiAgICAgICAgRlJPTSBzaGl0YWlfd2lzaCBhcyBzdyBJTk5FUiBKT0lOIHNoaXRhaV91c2VyX2luZm8gYXMgc3VpIE9OIHN3LlxcXCJjcmVhdG9ySWRcXFwiID0gc3VpLlxcXCJpZFxcXCIgV0hFUkUgc3cuaWQgPSAkMTtcIiwgW3dpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvclVzZXJSb3dzID0gKF9jLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjcmVhdG9yVXNlclJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuS9nOaIkOiAheaDheWgseOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9yTmFtZSA9IGNyZWF0b3JVc2VyUm93c1swXVtcIm5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9yTWFpbCA9IGNyZWF0b3JVc2VyUm93c1swXVtcIm1haWxcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IGNyZWF0b3JVc2VyUm93c1swXVtcInRpdGxlXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclJvd3MucHVzaCh7IG1haWw6IGNyZWF0b3JNYWlsIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgam9pblVzZXJOYW1lID0gam9pblVzZXJSb3dzWzBdW1wibmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5Vc2VyTWFpbF8yID0gam9pblVzZXJSb3dzWzBdW1wibWFpbFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvID0gdXNlclJvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyb3cpIHsgcmV0dXJuIHJvd1tcIm1haWxcIl07IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobWFpbCkgeyByZXR1cm4gbWFpbCAhPSBqb2luVXNlck1haWxfMjsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0byk7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sID0gXCJcXG48IWRvY3R5cGUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJqYVxcXCI+XFxuPGhlYWQ+XFxuICA8bWV0YSBjaGFyc2V0PVxcXCJ1dGYtOFxcXCIgLz5cXG4gIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXFxcIiAvPlxcbiAgPHRpdGxlPlxcdTY1QjBcXHUzMDVGXFx1MzA2QVxcdTUzQzJcXHU1MkEwXFx1ODAwNVxcdTMwRTZcXHUzMEZDXFx1MzBCNlxcdTMwRkNcXHUzMDZFXFx1OTAxQVxcdTc3RTU8L3RpdGxlPlxcbiAgPHN0eWxlPlxcbiAgICBib2R5IHsgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIkhpcmFnaW5vIEtha3UgR290aGljIFByb05cXFwiLCBcXFwiWXUgR290aGljXFxcIiwgXFxcIk5vdG8gU2FucyBKUFxcXCIsIEFyaWFsLCBzYW5zLXNlcmlmOyBtYXJnaW46MDsgcGFkZGluZzowOyBiYWNrZ3JvdW5kOiNmNmY4ZmI7IGNvbG9yOiMxMTE7IH1cXG4gICAgLmNvbnRhaW5lciB7IG1heC13aWR0aDo2MDBweDsgbWFyZ2luOjI4cHggYXV0bzsgYmFja2dyb3VuZDojZmZmOyBib3JkZXItcmFkaXVzOjhweDsgb3ZlcmZsb3c6aGlkZGVuOyBib3gtc2hhZG93OjAgNnB4IDI0cHggcmdiYSgyMCwzMCw2MCwwLjA4KTsgfVxcbiAgICAuaGVhZGVyIHsgcGFkZGluZzoyMHB4OyBiYWNrZ3JvdW5kOiM3YzNhZWQ7IGNvbG9yOiNmZmY7IH1cXG4gICAgLmNvbnRlbnQgeyBwYWRkaW5nOjIwcHg7IH1cXG4gICAgLnRpdGxlIHsgZm9udC1zaXplOjE4cHg7IG1hcmdpbjowIDAgOHB4IDA7IH1cXG4gICAgLm1ldGEgeyBmb250LXNpemU6MTNweDsgY29sb3I6IzZiNzI4MDsgbWFyZ2luLWJvdHRvbToxMnB4OyB9XFxuICAgIC5mb3JtIHsgYmFja2dyb3VuZDojZjdmOWZjOyBwYWRkaW5nOjE0cHg7IGJvcmRlci1yYWRpdXM6NnB4OyBtYXJnaW4tYm90dG9tOjE2cHg7IH1cXG4gICAgLmJ0biB7IGRpc3BsYXk6aW5saW5lLWJsb2NrOyBwYWRkaW5nOjEycHggMThweDsgYm9yZGVyLXJhZGl1czo4cHg7IHRleHQtZGVjb3JhdGlvbjpub25lOyBmb250LXdlaWdodDo2MDA7IH1cXG4gICAgLmJ0bi1wcmltYXJ5IHsgYmFja2dyb3VuZDojN2MzYWVkOyBjb2xvcjojZmZmOyB9XFxuICAgIC5mb290ZXIgeyBmb250LXNpemU6MTJweDsgY29sb3I6IzlhYTBhYjsgcGFkZGluZzoxOHB4OyB0ZXh0LWFsaWduOmNlbnRlcjsgfVxcbiAgICB0YWJsZSB7IHdpZHRoOjEwMCU7IGJvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTsgfVxcbiAgICB0ZCB7IHBhZGRpbmc6OHB4IDA7IHZlcnRpY2FsLWFsaWduOnRvcDsgfVxcbiAgICAua2V5IHsgZm9udC13ZWlnaHQ6NzAwOyBjb2xvcjojMTExOyB3aWR0aDozNiU7IH1cXG4gICAgLnZhbCB7IGNvbG9yOiMyMjI7IH1cXG4gIDwvc3R5bGU+XFxuPC9oZWFkPlxcbjxib2R5PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIiByb2xlPVxcXCJhcnRpY2xlXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICA8aDEgc3R5bGU9XFxcImZvbnQtc2l6ZToyMHB4O21hcmdpbjowXFxcIj5TSElUQUk8L2gxPlxcbiAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46NnB4IDAgMCAwO2ZvbnQtc2l6ZToxM3B4O29wYWNpdHk6MC45NVxcXCI+XFx1MzBFNlxcdTMwRkNcXHUzMEI2XFx1MzBGQ1xcdTMwNENcXHU1M0MyXFx1NTJBMFxcdTMwNTdcXHUzMDdFXFx1MzA1N1xcdTMwNUZcXHUzMDAyPC9wPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcInRpdGxlXFxcIj5cXHVEODNEXFx1REM2NSBcIi5jb25jYXQoam9pblVzZXJOYW1lLCBcIiBcXHUzMDU1XFx1MzA5M1xcdTMwNENcXHU1M0MyXFx1NTJBMFxcdTMwNTdcXHUzMDdFXFx1MzA1N1xcdTMwNUYgXFx1MjAxNCBcIikuY29uY2F0KHRpdGxlLCBcIjwvcD5cXG4gICAgICA8cCBjbGFzcz1cXFwibWV0YVxcXCI+PHNwYW4gc3R5bGU9XFxcImZvbnQtd2VpZ2h0OjcwMFxcXCI+XFx1MzBCMFxcdTMwRUJcXHUzMEZDXFx1MzBEN1xcdUZGMUE8L3NwYW4+IFwiKS5jb25jYXQoZ3JvdXBOYW1lLCBcIiA8L3A+XFxuXFxuICAgICAgPHAgc3R5bGU9XFxcIm1hcmdpbjowIDAgMThweCAwO1xcXCI+XFx1NTNDMlxcdTUyQTBcXHU4MDA1XFx1NjBDNVxcdTU4MzFcXHUzMDZFXFx1NjcwMFxcdTY1QjBcXHU3MkI2XFx1NkNDMVxcdTMwNkZcXHU0RTBCXFx1MzA2RVxcdTMwRUFcXHUzMEYzXFx1MzBBRlxcdTMwNjdcXHU3OEJBXFx1OEE4RFxcdTMwNjdcXHUzMDREXFx1MzA3RVxcdTMwNTlcXHUzMDAyPC9wPlxcbiAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGhyZWY9XFxcIlwiKS5jb25jYXQocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZST05URU5EX1VSTCArIFwiL1wiICsgXCJ3aXNoXCIgKyBcIi9cIiArIHdpc2hJZCwgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiByZWw9XFxcIm5vb3BlbmVyXFxcIj5cXHU1M0MyXFx1NTJBMFxcdTgwMDVcXHU2MEM1XFx1NTgzMVxcdTMwOTJcXHU3OEJBXFx1OEE4RFxcdTMwNTlcXHUzMDhCPC9hPlxcblxcbiAgICAgIDxociBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VlZjJmNzttYXJnaW46MThweCAwO1xcXCIgLz5cXG4gICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjA7Zm9udC1zaXplOjEzcHg7Y29sb3I6IzU1NjA3MDtcXFwiPlxcbiAgICAgICAgXFx1NUZDNVxcdTg5ODFcXHUzMDY3XFx1MzA0MlxcdTMwOENcXHUzMDcwXFx1NEUzQlxcdTUwQUNcXHU4MDA1XFx1MzA4NFxcdTRFRDZcXHUzMDZFXFx1NTNDMlxcdTUyQTBcXHU4MDA1XFx1MzA3OFxcdTkwMjNcXHU3RDYxXFx1MzA5MlxcdTUzRDZcXHUzMDhBXFx1MzA3RVxcdTMwNTdcXHUzMDg3XFx1MzA0NlxcdTMwMDJcXG4gICAgICA8L3A+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcbiAgICAgIFxcdTMwNTNcXHUzMDZFXFx1MzBFMVxcdTMwRkNcXHUzMEVCXFx1MzA2RlxcdTgxRUFcXHU1MkQ1XFx1OTE0RFxcdTRGRTFcXHUzMDY3XFx1MzA1OVxcdTMwMDJcXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2JvZHk+XFxuPC9odG1sPlxcblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRvLmxlbmd0aCAhPSAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMTBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zZW5kRW1haWwodG8sIFwiXFx1MzAxMFNISVRBSVxcdTMwMTFcXHUzMEU2XFx1MzBGQ1xcdTMwQjZcXHUzMEZDXFx1MzA0Q1xcdTUzQzJcXHU1MkEwXFx1MzA1N1xcdTMwN0VcXHUzMDU3XFx1MzA1RiBcXHUyMDE0IFwiLmNvbmNhdCh0aXRsZSwgXCJcXHVGRjA4XCIpLmNvbmNhdChqb2luVXNlck5hbWUsIFwiXFx1RkYwOVwiKSwgaHRtbCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDEwO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJDT01NSVRcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8yMCA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlJPTExCQUNLXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfMjA7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTQ6IHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIE5lb25BcGk7XG59KCkpO1xuZXhwb3J0IHsgTmVvbkFwaSB9O1xuIiwiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHV0YyBmcm9tIFwiZGF5anMvcGx1Z2luL3V0Y1wiO1xuaW1wb3J0IHRpbWV6b25lIGZyb20gXCJkYXlqcy9wbHVnaW4vdGltZXpvbmVcIjtcbmRheWpzLmV4dGVuZCh1dGMpO1xuZGF5anMuZXh0ZW5kKHRpbWV6b25lKTtcbmRheWpzLnR6LnNldERlZmF1bHQoXCJBc2lhL1Rva3lvXCIpO1xuZXhwb3J0IHZhciBmb3JtYXREYXRlID0gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkgeyBmb3JtYXQgPSBcIllZWVkvTU0vRERcIjsgfVxuICAgIHJldHVybiBkYXlqcyhkYXRlKS51dGMoKS5mb3JtYXQoZm9ybWF0KTtcbn07XG5leHBvcnQgdmFyIGZvcm1hdERpc3BsYXlEYXRlID0gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkgeyBmb3JtYXQgPSBcIllZWVkvTU0vREQgSEg6bW1cIjsgfVxuICAgIHJldHVybiBkYXlqcyhkYXRlKS51dGMoKS5mb3JtYXQoZm9ybWF0KTtcbn07XG5leHBvcnQgdmFyIGZvcm1hdERhdGVUaW1lID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF5anMoZGF0ZSkudXRjKCkuZm9ybWF0KFwiWVlZWS1NTS1ERFRISDptbVwiKTtcbn07XG5leHBvcnQgdmFyIGdldFRpbWVSZW1haW5pbmcgPSBmdW5jdGlvbiAoZGVhZGxpbmUpIHtcbiAgICB2YXIgbm93ID0gZGF5anMoKTtcbiAgICB2YXIgdGFyZ2V0ID0gZGF5anMoZGVhZGxpbmUpO1xuICAgIHZhciBkaWZmID0gdGFyZ2V0LmRpZmYobm93KTtcbiAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRheXM6IDAsXG4gICAgICAgICAgICBob3VyczogMCxcbiAgICAgICAgICAgIG1pbnV0ZXM6IDAsXG4gICAgICAgICAgICBzZWNvbmRzOiAwLFxuICAgICAgICAgICAgZXhwaXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHRleHQ6IFwi5pyf6ZmQ5YiH44KMXCIsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcihkaWZmIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKChkaWZmICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlmZiAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlmZiAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgIHZhciB0ZXh0ID0gXCJcIjtcbiAgICBpZiAoZGF5cyA+IDApIHtcbiAgICAgICAgdGV4dCA9IFwiXFx1NkI4QlxcdTMwOEEgXCIuY29uY2F0KGRheXMsIFwiXFx1NjVFNSBcIikuY29uY2F0KGhvdXJzLCBcIlxcdTY2NDJcXHU5NTkzXCIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChob3VycyA+IDApIHtcbiAgICAgICAgdGV4dCA9IFwiXFx1NkI4QlxcdTMwOEEgXCIuY29uY2F0KGhvdXJzLCBcIlxcdTY2NDJcXHU5NTkzIFwiKS5jb25jYXQobWludXRlcywgXCJcXHU1MjA2XCIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtaW51dGVzID4gMCkge1xuICAgICAgICB0ZXh0ID0gXCJcXHU2QjhCXFx1MzA4QSBcIi5jb25jYXQobWludXRlcywgXCJcXHU1MjA2XCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGV4dCA9IFwiXFx1NkI4QlxcdTMwOEEgXCIuY29uY2F0KHNlY29uZHMsIFwiXFx1NzlEMlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGF5czogZGF5cyxcbiAgICAgICAgaG91cnM6IGhvdXJzLFxuICAgICAgICBtaW51dGVzOiBtaW51dGVzLFxuICAgICAgICBzZWNvbmRzOiBzZWNvbmRzLFxuICAgICAgICBleHBpcmVkOiBmYWxzZSxcbiAgICAgICAgdGV4dDogdGV4dCxcbiAgICB9O1xufTtcbmV4cG9ydCB2YXIgaXNEYXRlSW5QYXN0ID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF5anMoZGF0ZSkudHooKS5pc0JlZm9yZShkYXlqcygpKTtcbn07XG5leHBvcnQgdmFyIGFkZERheXMgPSBmdW5jdGlvbiAoZGF0ZSwgZGF5cykge1xuICAgIHJldHVybiBkYXlqcyhkYXRlKS50eigpLmFkZChkYXlzLCBcImRheVwiKS50b0lTT1N0cmluZygpO1xufTtcbmV4cG9ydCB2YXIgYWRkSG91cnMgPSBmdW5jdGlvbiAoZGF0ZSwgaG91cnMpIHtcbiAgICByZXR1cm4gZGF5anMoZGF0ZSkudHooKS5hZGQoaG91cnMsIFwiaG91clwiKS50b0lTT1N0cmluZygpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBnb29nbGUtY2xvdWQvc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXlqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vdGltZXpvbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3V0Y1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVzZW5kXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGcgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2YgSXRlcmF0b3IgPT09IFwiZnVuY3Rpb25cIiA/IEl0ZXJhdG9yIDogT2JqZWN0KS5wcm90b3R5cGUpO1xuICAgIHJldHVybiBnLm5leHQgPSB2ZXJiKDApLCBnW1widGhyb3dcIl0gPSB2ZXJiKDEpLCBnW1wicmV0dXJuXCJdID0gdmVyYigyKSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiO1xuaW1wb3J0IHsgTmVvbkFwaSB9IGZyb20gXCIuL05lb25BcGlcIjtcbnJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7XG52YXIgYXBwID0gZXhwcmVzcygpO1xudmFyIG5lb25BcGkgPSBuZXcgTmVvbkFwaSgpO1xuLy8gQ09SU+OBruioreWumlxudmFyIGNvcnNPcHRpb25zID0ge1xuICAgIG9yaWdpbjogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZST05URU5EX1VSTCwgLy8g44OV44Ot44Oz44OI44Ko44Oz44OJ44GuVVJM44KS55Kw5aKD5aSJ5pWw44GL44KJ5Y+W5b6XXG4gICAgbWV0aG9kOiBbXSxcbn07XG4vLyDjgqLjgq/jgrvjgrnjg4jjg7zjgq/jg7Poqo3oqLwo44Op44OD44OR44O86Zai5pWwKVxudmFyIGluaXRBY2Nlc3NUb2tlbkF1dGggPSBmdW5jdGlvbiAodXNlckluZm8pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCwgaXNFeHBpcmVkLCBpc1N1Y2Nlc3M7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIG5lb25BcGkuYWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgaXNFeHBpcmVkID0gdHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIiAmJiByZXN1bHQgPT09IFwiZXhwaXJlZCBhY2Nlc3MgdG9rZW5cIjtcbiAgICAgICAgICAgICAgICBpc1N1Y2Nlc3MgPSB0eXBlb2YgcmVzdWx0ICE9PSBcInN0cmluZ1wiICYmIE51bWJlcihyZXN1bHQuaWQpID4gMCAmJiAhaXNFeHBpcmVkO1xuICAgICAgICAgICAgICAgIGlmIChpc0V4cGlyZWQpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IHsgbWVzc2FnZTogXCLjgqLjgq/jgrvjgrnjg4jjg7zjgq/jg7PjgYzmnInlirnmnJ/pmZDliIfjgozjgafjgZnjgIJcIiB9O1xuICAgICAgICAgICAgICAgIGlmICghaXNTdWNjZXNzKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6IFwi44Ki44Kv44K744K544OI44O844Kv44Oz44Gu6KqN6Ki844Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzdWx0XTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG4vLyBDT1JT6Kit5a6a44GoSlNPTuODkeODvOOCteODvOOCkuODn+ODieODq+OCpuOCp+OCouOBqOOBl+OBpumBqeeUqFxuYXBwLnVzZShjb3JzKGNvcnNPcHRpb25zKSk7XG5hcHAudXNlKGV4cHJlc3MuanNvbih7IGxpbWl0OiBcIjEwbWJcIiB9KSk7XG4vLyDjg63jgrDjgqTjg7Poqo3oqLzjgpLooYzjgYYo5oiQ5Yqf5pmC44Ki44Kv44K744K544OI44O844Kv44Oz44KS6L+U5Y2044GZ44KLKVxuYXBwLnBvc3QoXCIvYXBpL3YxL2F1dGgvbG9naW5cIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQsIGVycm9yXzE7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLmxvZ2luQXV0aChyZXEuYm9keSldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfMS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmFwcC5wb3N0KFwiL2FwaS92MS9hdXRoL2FjY2Vzc1Rva2VuXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdXNlckluZm8sIF9hLCBpZCwgbmFtZV8xLCBlbWFpbCwgZXJyb3JfMjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgIHVzZXJJbmZvID0gcmVxLmJvZHkudXNlckluZm87XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW5pdEFjY2Vzc1Rva2VuQXV0aCh1c2VySW5mbyldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hID0gX2Iuc2VudCgpLCBpZCA9IF9hLmlkLCBuYW1lXzEgPSBfYS5uYW1lLCBlbWFpbCA9IF9hLmVtYWlsO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHsgaWQ6IE51bWJlcihpZCksIG5hbWU6IG5hbWVfMSwgZW1haWw6IGVtYWlsIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGVycm9yXzIgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfMi5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmFwcC5wb3N0KFwiL2FwaS92MS9hdXRoL3JlZnJlc2hUb2tlblwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVzZXJJbmZvLCByZXNwb25zZV8xLCBlcnJvcl8zO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgdXNlckluZm8gPSByZXEuYm9keS51c2VySW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLnJlZnJlc2hUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXNwb25zZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZV8xICE9PSBcImVycm9yXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBfX2Fzc2lnbih7fSwgcmVzcG9uc2VfMSksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBlcnJvcl8zID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzMubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvcG9zdC9pbnNlcnRVc2VySW5mb1wiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVwZGF0ZU9iaiwgcmVzdWx0LCBlcnJvcl80O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlT2JqID0gcmVxLmJvZHk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5pbnNlcnRVc2VySW5mbyh1cGRhdGVPYmopXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBlcnJvcl80ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzQubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvcG9zdC9pbnNlcnRXaXNoXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIHVzZXJJbmZvLCBsZWZ0LCB1c2VySWQsIHJlc3VsdCwgZXJyb3JfNTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIF9hID0gcmVxLmJvZHksIHVzZXJJbmZvID0gX2EudXNlckluZm8sIGxlZnQgPSBfX3Jlc3QoX2EsIFtcInVzZXJJbmZvXCJdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9iLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5pbnNlcnRXaXNoKGxlZnQsIE51bWJlcih1c2VySWQpKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfNSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl81Lm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL2dldC93aXNoQnlJZFwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCB1c2VySW5mbywgaWQsIHVzZXJJZCwgcmVzdWx0LCBlcnJvcl82O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgX2EgPSByZXEuYm9keSwgdXNlckluZm8gPSBfYS51c2VySW5mbywgaWQgPSBfYS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9iLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5nZXRXaXNoQnlJZChOdW1iZXIoaWQpLCBOdW1iZXIodXNlcklkKSldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiB7IHdpc2g6IHJlc3VsdCB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlcnJvcl82ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzYubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvcG9zdC9pbnNlcnRBbnN3ZXJcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSwgdXNlckluZm8sIGlkLCBsZWZ0LCB1c2VySWQsIHJlc3VsdCwgZXJyb3JfNztcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIF9hID0gcmVxLmJvZHksIHVzZXJJbmZvID0gX2EudXNlckluZm8sIGlkID0gX2EuaWQsIGxlZnQgPSBfX3Jlc3QoX2EsIFtcInVzZXJJbmZvXCIsIFwiaWRcIl0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRBY2Nlc3NUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB1c2VySWQgPSAoX2Iuc2VudCgpKS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLmluc2VydEFuc3dlcihsZWZ0LCBOdW1iZXIodXNlcklkKSwgTnVtYmVyKGlkKSldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVycm9yXzcgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfNy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmFwcC5wb3N0KFwiL2FwaS92MS9wb3N0L3VwZGF0ZVdpc2hcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSwgdXNlckluZm8sIGxlZnQsIHVzZXJJZCwgcmVzdWx0LCBlcnJvcl84O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgX2EgPSByZXEuYm9keSwgdXNlckluZm8gPSBfYS51c2VySW5mbywgbGVmdCA9IF9fcmVzdChfYSwgW1widXNlckluZm9cIl0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRBY2Nlc3NUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB1c2VySWQgPSAoX2Iuc2VudCgpKS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLnVwZGF0ZVdpc2gobGVmdCwgTnVtYmVyKHVzZXJJZCkpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlcnJvcl84ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzgubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvZ2V0L3dpc2hlc1wiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCB1c2VySW5mbywgaWQsIHVzZXJJZCwgcmVzdWx0LCBlcnJvcl85O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgX2EgPSByZXEuYm9keSwgdXNlckluZm8gPSBfYS51c2VySW5mbywgaWQgPSBfYS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9iLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5nZXRXaXNoZXMoTnVtYmVyKGlkKSwgTnVtYmVyKHVzZXJJZCkpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogeyB3aXNoZXM6IHJlc3VsdCB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlcnJvcl85ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzkubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvZ2V0L2dyb3Vwc1wiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVzZXJJbmZvLCB1c2VySWQsIHJlc3VsdCwgZXJyb3JfMTA7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICB1c2VySW5mbyA9IHJlcS5ib2R5LnVzZXJJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRBY2Nlc3NUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB1c2VySWQgPSAoX2Euc2VudCgpKS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLmdldEdyb3VwcyhOdW1iZXIodXNlcklkKSldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiB7IGdyb3VwczogcmVzdWx0IH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVycm9yXzEwID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzEwLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL3Bvc3QvaW5zZXJ0R3JvdXBcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSwgdXNlckluZm8sIGxlZnQsIHVzZXJJZCwgcmVzdWx0LCBlcnJvcl8xMTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIF9hID0gcmVxLmJvZHksIHVzZXJJbmZvID0gX2EudXNlckluZm8sIGxlZnQgPSBfX3Jlc3QoX2EsIFtcInVzZXJJbmZvXCJdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9iLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5pbnNlcnRHcm91cChOdW1iZXIodXNlcklkKSwgbGVmdCldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVycm9yXzExID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzExLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL3Bvc3QvaW52aXRhdGlvbkdyb3VwXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIHVzZXJJbmZvLCBsZWZ0LCB1c2VySWQsIHJlc3VsdCwgZXJyb3JfMTI7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICBfYSA9IHJlcS5ib2R5LCB1c2VySW5mbyA9IF9hLnVzZXJJbmZvLCBsZWZ0ID0gX19yZXN0KF9hLCBbXCJ1c2VySW5mb1wiXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW5pdEFjY2Vzc1Rva2VuQXV0aCh1c2VySW5mbyldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHVzZXJJZCA9IChfYi5zZW50KCkpLmlkO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5lb25BcGkuaW52aXRhdGlvbkdyb3VwKE51bWJlcih1c2VySWQpLCBsZWZ0KV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfMTIgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfMTIubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvcG9zdC9qb2luV2lzaFwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCB1c2VySW5mbywgbGVmdCwgdXNlcklkLCByZXN1bHQsIGVycm9yXzEzO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgX2EgPSByZXEuYm9keSwgdXNlckluZm8gPSBfYS51c2VySW5mbywgbGVmdCA9IF9fcmVzdChfYSwgW1widXNlckluZm9cIl0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRBY2Nlc3NUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB1c2VySWQgPSAoX2Iuc2VudCgpKS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLmpvaW5XaXNoKE51bWJlcih1c2VySWQpLCBsZWZ0KV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfMTMgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfMTMubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAubGlzdGVuKDQyMDAsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcInBvcnQgXCIuY29uY2F0KDQyMDAsIFwiIFxcdTMwNjdcXHUzMEI1XFx1MzBGQ1xcdTMwRDBcXHUzMEZDXFx1OEQ3N1xcdTUyRDVcXHU0RTJEXCIpKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9