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
            expiresIn: "30s",
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
                        return [4 /*yield*/, this.pool.query("UPDATE shitai_user_info SET access_token = (ARRAY[$1] || access_token)[1:3], refresh_token = $2 WHERE user_id = $3 RETURNING id", [accessToken, refreshToken, userId])];
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
                            //console.log(id, decodedAccessToken);
                        }
                        catch (e) {
                            if ("message" in e) {
                                if (e.message === "jwt expired") {
                                    response = "expired access token";
                                    return [2 /*return*/, response];
                                }
                            }
                        }
                        return [4 /*yield*/, this.pool.query("SELECT *\n             FROM shitai_user_info\n             WHERE id = $1\n               AND $2 = ANY(access_token);", [id, decodedAccessToken])];
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
                        return [4 /*yield*/, this.pool.query("SELECT id\n             FROM shitai_user_info\n             WHERE id = $1\n               AND refresh_token = $2;", [id, decodedRefreshToken])];
                    case 1:
                        rows = (_e.sent()).rows;
                        if (rows.length === 0) {
                            response = "error";
                            return [2 /*return*/, response];
                        }
                        userId = rows[0]["id"];
                        _d = this.createTokens(userId), newAccessToken = _d.accessToken, newRefreshToken = _d.refreshToken, newResponse = _d.response;
                        return [4 /*yield*/, this.pool.query("UPDATE shitai_user_info SET access_token = (ARRAY[$1] || access_token)[1:3], refresh_token = $2 WHERE id = $3 RETURNING id", [newAccessToken, newRefreshToken, userId])];
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
                            return [2 /*return*/]; //console.error({ error });
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
                        return [4 /*yield*/, this.pool.query("SELECT sg.id, sg.\"groupName\" FROM public.shitai_group as sg INNER JOIN public.shitai_group_join as sjg ON sjg.\"groupId\" = sg.id AND sjg.\"userId\" = $1 WHERE sg.id = $2;", [id, leftWish_1.groupId])];
                    case 3:
                        groupRows = (_e.sent()).rows;
                        //console.log(id);
                        if (groupRows.length !== 1) {
                            throw {
                                message: "権限がありません。グループ外のユーザーです。",
                            };
                        }
                        urlPattern = /^(https?|ftp)(:\/\/[\w\/:%#\$&\?\(\)~\.=\+\-]+)/;
                        isUrl = urlPattern.test(leftWish_1.imageData || "");
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
                        //console.log(e);
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
                            //console.log(repColumn);
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
            var response, groupRows, wishId, updateWish_1, urlPattern, isUrl, imageData_1, _a, updateRows, userRows, groupName, joinUserRows, creatorUserRows, creatorName, creatorMail_2, title, to, description, html, e_13;
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
                        isUrl = urlPattern.test(updateWish_1.imageData || "");
                        if (!isUrl) return [3 /*break*/, 4];
                        _a = updateWish_1.imageData;
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.uploadImageData(updateWish_1.imageData || "")];
                    case 5:
                        _a = _b.sent();
                        _b.label = 6;
                    case 6:
                        imageData_1 = _a;
                        return [4 /*yield*/, this.pool.query("UPDATE public.shitai_wish SET ".concat(Object.keys(updateWish_1).reduce(function (prev, current) {
                                //console.log("----------------------", isUrl);
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
                                //console.log("-----------------------", str);
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
            var response, groupRows, wishRows, _loop_1, this_1, wishRows_2, wishRows_2_1, wish, e_14;
            var e_15, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        response = [];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.pool.query("SELECT sg.id FROM public.shitai_group as sg INNER JOIN public.shitai_group_join as sjg ON sjg.\"groupId\" = sg.id AND sjg.\"userId\" = $1 WHERE sg.\"id\" = $2;", [id, groupId])];
                    case 2:
                        groupRows = (_b.sent()).rows;
                        if (groupRows.length !== 1) {
                            throw {
                                message: "権限がありません。グループ外のユーザーです。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("WITH wish AS\n          (SELECT id, ".concat(this.columns.join(","), "\n          FROM public.shitai_wish\n          WHERE \"groupId\" = $1\n          ORDER BY id ASC),\n        answers AS\n          (SELECT \"wishId\",\n                  json_agg(to_jsonb(json_build_object('joinedAt', \"joinedAt\", 'userId', \"userId\")) || to_jsonb(answer)\n                          ORDER BY \"joinedAt\" ASC) AS participants\n          FROM\n            (SELECT \"wishId\",\n                    \"joinedAt\",\n                    \"userId\",\n                    json_object_agg(\"schemaType\" || 'Answers', answer) AS answer\n              FROM\n                (SELECT sj.\"wishId\",\n                        sj.\"joinedAt\",\n                        sj.\"userId\",\n                        ss.\"schemaType\",\n                        json_object_agg(ss.type, sa.value) AS answer\n                FROM shitai_join AS sj\n                LEFT JOIN shitai_schema AS ss ON ss.\"wishId\" = sj.\"wishId\"\n                LEFT JOIN public.shitai_answer AS sa ON sa.\"schemaId\" = ss.id\n                AND ss.\"wishId\" = sj.\"wishId\"\n                AND sa.\"userId\" = sj.\"userId\"\n                WHERE EXISTS\n                    (SELECT id\n                      FROM wish\n                      WHERE id = sj.\"wishId\")\n                GROUP BY sj.\"wishId\",\n                          sj.\"joinedAt\",\n                          sj.\"userId\",\n                          ss.\"schemaType\")\n              GROUP BY \"wishId\",\n                      \"joinedAt\",\n                      \"userId\")\n          GROUP BY \"wishId\"),\n        SCHEMA AS\n          (SELECT \"wishId\",\n                  t.schema->'participation' AS participationConfirmSchema,\n                  t.schema->'post' AS postConfirmSchema\n          FROM\n            (SELECT \"wishId\",\n                    jsonb_object_agg(\"schemaType\", SCHEMA) AS SCHEMA\n              FROM\n                (SELECT ss.\"wishId\",\n                        ss.\"schemaType\",\n                        json_agg(json_build_object('type', CASE\n                                                              WHEN ss.\"schemaType\" = 'participation' THEN sw.\"participationConfirmSchemaType\"\n                                                              ELSE sw.\"postConfirmSchemaType\"\n                                                          END, ss.\"type\" || 'Label', ss.\"label\", ss.\"type\" || 'Required', ss.\"required\")) AS SCHEMA\n                FROM public.shitai_wish AS sw\n                INNER JOIN shitai_schema AS ss ON ss.\"wishId\" = sw.id\n                WHERE EXISTS\n                    (SELECT id\n                      FROM wish\n                      WHERE id = sw.id)\n                GROUP BY ss.\"wishId\",\n                          ss.\"schemaType\")\n              GROUP BY \"wishId\") t)\n        SELECT wish.*,\n              schema.participationConfirmSchema AS \"participationConfirmSchema\",\n              schema.postConfirmSchema AS \"postConfirmSchema\",\n              answers.participants\n        FROM wish\n        INNER JOIN SCHEMA ON schema.\"wishId\" = wish.id\n        LEFT JOIN answers ON schema.\"wishId\" = answers.\"wishId\"\n        ORDER BY id ASC;"), [groupId])];
                    case 3:
                        wishRows = (_b.sent()).rows;
                        if (wishRows.length === 0) {
                            throw {
                                message: "したいことの取得に失敗しました。",
                            };
                        }
                        _loop_1 = function (wish) {
                            var resWish = {
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
                            //console.log(wish["id"], wish);
                            // const res = await this.createResponseData(wish.id);
                            var extColumns = this_1.columns.filter(function (col) {
                                return col !== '"participationConfirmSchemaType"' &&
                                    col !== '"postConfirmSchemaType"';
                            });
                            extColumns.forEach(function (column) {
                                var _a;
                                var repColumn = column.replaceAll('"', "");
                                //console.log(repColumn);
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
                                if (wish && column in wish) {
                                    if (wish[column]) {
                                        resWish = __assign(__assign({}, resWish), (_a = {}, _a[column] = wish[column], _a));
                                    }
                                }
                            });
                            response.push(resWish);
                        };
                        this_1 = this;
                        try {
                            for (wishRows_2 = __values(wishRows), wishRows_2_1 = wishRows_2.next(); !wishRows_2_1.done; wishRows_2_1 = wishRows_2.next()) {
                                wish = wishRows_2_1.value;
                                _loop_1(wish);
                            }
                        }
                        catch (e_15_1) { e_15 = { error: e_15_1 }; }
                        finally {
                            try {
                                if (wishRows_2_1 && !wishRows_2_1.done && (_a = wishRows_2.return)) _a.call(wishRows_2);
                            }
                            finally { if (e_15) throw e_15.error; }
                        }
                        return [2 /*return*/, response];
                    case 4:
                        e_14 = _b.sent();
                        throw e_14;
                    case 5: return [2 /*return*/];
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
            var response, groupRows, userRows, newGroupRows, insertRows, e_19;
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
                        _c.trys.push([2, 8, , 10]);
                        return [4 /*yield*/, this.pool.query("SELECT sjg.id FROM public.shitai_group_join as sjg WHERE sjg.\"groupId\" = $2 AND sjg.\"userId\" = $1;", [id, groupId])];
                    case 3:
                        groupRows = (_c.sent()).rows;
                        if (groupRows.length !== 1) {
                            throw {
                                message: "権限がありません。グループ外のユーザーです。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("SELECT id FROM shitai_user_info WHERE user_id = $1", [invitationUserId])];
                    case 4:
                        userRows = (_c.sent()).rows;
                        if (userRows.length !== 1) {
                            throw {
                                message: "ユーザー情報取得に失敗しました。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("SELECT id FROM shitai_group_join WHERE \"userId\" = $1 AND \"groupId\" = $2", [userRows[0]["id"], groupId])];
                    case 5:
                        newGroupRows = (_c.sent()).rows;
                        if (newGroupRows.length !== 0) {
                            throw {
                                message: "すでに参加しているグループです。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("INSERT INTO shitai_group_join (\"groupId\", \"userId\") VALUES ($1, $2) RETURNING id;", [groupId, userRows[0]["id"]])];
                    case 6:
                        insertRows = (_c.sent()).rows;
                        if (insertRows.length !== 1) {
                            throw {
                                message: "グループジョイン登録に失敗しました。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("COMMIT")];
                    case 7:
                        _c.sent();
                        return [3 /*break*/, 10];
                    case 8:
                        e_19 = _c.sent();
                        return [4 /*yield*/, this.pool.query("ROLLBACK")];
                    case 9:
                        _c.sent();
                        throw e_19;
                    case 10: return [2 /*return*/, response];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNMLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSUFBSTtBQUNMLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSUFBSTtBQUNMLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSUFBSTtBQUNMO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvLi9zcmMvYmFja2VuZC9OZW9uQXBpLnRzIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkLy4vdXRpbHMvZGF0ZS50cyIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC9leHRlcm5hbCBjb21tb25qcyBcIkBnb29nbGUtY2xvdWQvc3RvcmFnZVwiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwiY29yc1wiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwiY3J5cHRvXCIiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvZXh0ZXJuYWwgY29tbW9uanMgXCJkYXlqc1wiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwiZGF5anMvcGx1Z2luL3RpbWV6b25lXCIiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvZXh0ZXJuYWwgY29tbW9uanMgXCJkYXlqcy9wbHVnaW4vdXRjXCIiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC9leHRlcm5hbCBjb21tb25qcyBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwicGdcIiIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC9leHRlcm5hbCBjb21tb25qcyBcInJlc2VuZFwiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvLi9zcmMvYmFja2VuZC9zZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnID0gT2JqZWN0LmNyZWF0ZSgodHlwZW9mIEl0ZXJhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBJdGVyYXRvciA6IE9iamVjdCkucHJvdG90eXBlKTtcbiAgICByZXR1cm4gZy5uZXh0ID0gdmVyYigwKSwgZ1tcInRocm93XCJdID0gdmVyYigxKSwgZ1tcInJldHVyblwiXSA9IHZlcmIoMiksIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG52YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG5pbXBvcnQgeyBQb29sIH0gZnJvbSBcInBnXCI7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIkBnb29nbGUtY2xvdWQvc3RvcmFnZVwiO1xudmFyIHJhbmRvbVVVSUQgPSByZXF1aXJlKFwiY3J5cHRvXCIpLnJhbmRvbVVVSUQ7XG5pbXBvcnQgeyBSZXNlbmQgfSBmcm9tIFwicmVzZW5kXCI7XG5pbXBvcnQgeyBjcmVhdGVIYXNoLCByYW5kb21CeXRlcyB9IGZyb20gXCJjcnlwdG9cIjtcbmltcG9ydCAqIGFzIGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgeyBmb3JtYXREaXNwbGF5RGF0ZSB9IGZyb20gXCIuLi8uLi91dGlscy9kYXRlXCI7XG5yZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZygpO1xudmFyIE5lb25BcGkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTmVvbkFwaSgpIHtcbiAgICAgICAgdGhpcy5wb29sID0gbmV3IFBvb2woe1xuICAgICAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0RCX0hPU1QsXG4gICAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfREJfVVNFUixcbiAgICAgICAgICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfREJfTkFNRSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfREJfUEFTU1dPUkQsXG4gICAgICAgICAgICBwb3J0OiBwYXJzZUludChwcm9jZXNzLmVudi5SRUFDVF9BUFBfREJfUE9SVCB8fCBcIjU0MzJcIiksXG4gICAgICAgICAgICBzc2w6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNhbHQgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfREJfU0FMVDtcbiAgICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgICAgICBleHBpcmVzSW46IFwiMzBzXCIsXG4gICAgICAgICAgICBhbGdvcml0aG06IFwiSFMyNTZcIixcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gW1xuICAgICAgICAgICAgJ1wiZ3JvdXBJZFwiJyxcbiAgICAgICAgICAgICdcImNyZWF0b3JJZFwiJyxcbiAgICAgICAgICAgICdcImNhdGVnb3J5XCInLFxuICAgICAgICAgICAgJ1wiaW1hZ2VEYXRhXCInLFxuICAgICAgICAgICAgJ1widGl0bGVcIicsXG4gICAgICAgICAgICAnXCJkaXNwbGF5RGF0ZVwiJyxcbiAgICAgICAgICAgICdcImRpc3BsYXlUZXh0XCInLFxuICAgICAgICAgICAgJ1wibm90ZXNcIicsXG4gICAgICAgICAgICAnXCJkZWFkbGluZVwiJyxcbiAgICAgICAgICAgICdcIm1pblBhcnRpY2lwYW50c1wiJyxcbiAgICAgICAgICAgICdcIm1heFBhcnRpY2lwYW50c1wiJyxcbiAgICAgICAgICAgICdcImFjdGlvbkxhYmVsXCInLFxuICAgICAgICAgICAgJ1wid2l0aGRyYXduXCInLFxuICAgICAgICAgICAgJ1wiY3JlYXRlZEF0XCInLFxuICAgICAgICAgICAgJ1wicGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFUeXBlXCInLFxuICAgICAgICAgICAgJ1wicG9zdENvbmZpcm1TY2hlbWFUeXBlXCInLFxuICAgICAgICAgICAgJ1wiaW1wbGVtZW50YXRpb25EYXRldGltZVwiJyxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5jb2x1bW5OYW1lcyA9IFtcbiAgICAgICAgICAgIHsgY29sdW1uOiBcImNhdGVnb3J5XCIsIG5hbWU6IFwi44Kr44OG44K044OqXCIgfSxcbiAgICAgICAgICAgIHsgY29sdW1uOiBcInRpdGxlXCIsIG5hbWU6IFwi44K/44Kk44OI44OrXCIgfSxcbiAgICAgICAgICAgIHsgY29sdW1uOiBcImRpc3BsYXlEYXRlXCIsIG5hbWU6IFwi6KGo56S655So5pel5pmCXCIgfSxcbiAgICAgICAgICAgIHsgY29sdW1uOiBcImRpc3BsYXlUZXh0XCIsIG5hbWU6IFwi6KGo56S655So5paH5a2XXCIgfSxcbiAgICAgICAgICAgIHsgY29sdW1uOiBcIm5vdGVzXCIsIG5hbWU6IFwi5YKZ6ICDXCIgfSxcbiAgICAgICAgICAgIHsgY29sdW1uOiBcImRlYWRsaW5lXCIsIG5hbWU6IFwi5pyf6ZmQ5pelXCIgfSxcbiAgICAgICAgICAgIHsgY29sdW1uOiBcIm1pblBhcnRpY2lwYW50c1wiLCBuYW1lOiBcIuacgOS9jueiuuWumuS6uuaVsFwiIH0sXG4gICAgICAgICAgICB7IGNvbHVtbjogXCJtYXhQYXJ0aWNpcGFudHNcIiwgbmFtZTogXCLmnIDlpKfnorrlrprkurrmlbBcIiB9LFxuICAgICAgICAgICAgeyBjb2x1bW46IFwiaW1wbGVtZW50YXRpb25EYXRldGltZVwiLCBuYW1lOiBcIuWun+aWveaXpVwiIH0sXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuZGF0ZUNvbHVtbnMgPSBbXCJkZWFkbGluZVwiLCBcImltcGxlbWVudGF0aW9uRGF0ZXRpbWVcIl07XG4gICAgfVxuICAgIE5lb25BcGkucHJvdG90eXBlLmNyZWF0ZVRva2VucyA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgcmVzcG9uc2UgPSB7IGFjY2Vzc1Rva2VuOiBcIlwiLCByZWZyZXNoVG9rZW46IFwiXCIgfTtcbiAgICAgICAgLy8g44Ki44Kv44K744K544OI44O844Kv44Oz5L2c5oiQXG4gICAgICAgIHZhciByYW5kb21TdHIgPSByYW5kb21CeXRlcygxNikudG9TdHJpbmcoXCJoZXhcIik7XG4gICAgICAgIC8vIOOAjOODqeODs+ODgOODoOaWh+Wtl+WIlygxNuODkOOCpOODiCkgKyDjg6rjgq/jgqjjgrnjg4gu44Om44O844K244O8SUQo44K944Or44OI5YCkKeOAjeOBp+ODj+ODg+OCt+ODpeWApOOCkuS9nOaIkFxuICAgICAgICB2YXIgc2FsdGVkUmFuZG9tU3RyID0gcmFuZG9tU3RyICsgdGhpcy5zYWx0O1xuICAgICAgICB2YXIgYWNjZXNzVG9rZW4gPSBjcmVhdGVIYXNoKFwic2hhMjU2XCIpXG4gICAgICAgICAgICAudXBkYXRlKHNhbHRlZFJhbmRvbVN0cilcbiAgICAgICAgICAgIC5kaWdlc3QoXCJoZXhcIik7XG4gICAgICAgIC8vIOODquODleODrOODg+OCt+ODpeODiOODvOOCr+ODs+S9nOaIkFxuICAgICAgICByYW5kb21TdHIgPSByYW5kb21CeXRlcygxNikudG9TdHJpbmcoXCJoZXhcIik7XG4gICAgICAgIC8vIOOAjOODqeODs+ODgOODoOaWh+Wtl+WIlygxNuODkOOCpOODiCkgKyDjg6rjgq/jgqjjgrnjg4gu44Om44O844K244O8SUQo44K944Or44OI5YCkKeOAjeOBp+ODj+ODg+OCt+ODpeWApOOCkuS9nOaIkFxuICAgICAgICBzYWx0ZWRSYW5kb21TdHIgPSByYW5kb21TdHIgKyB0aGlzLnNhbHQ7XG4gICAgICAgIHZhciByZWZyZXNoVG9rZW4gPSBjcmVhdGVIYXNoKFwic2hhMjU2XCIpXG4gICAgICAgICAgICAudXBkYXRlKHNhbHRlZFJhbmRvbVN0cilcbiAgICAgICAgICAgIC5kaWdlc3QoXCJoZXhcIik7XG4gICAgICAgIHZhciBkZWZhdWx0UGV5bG9hZCA9IHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbixcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJlZnJlc2hQZXlsb2FkID0ge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgcmVmcmVzaFRva2VuOiByZWZyZXNoVG9rZW4sXG4gICAgICAgIH07XG4gICAgICAgIHJlc3BvbnNlLmFjY2Vzc1Rva2VuID0gand0LnNpZ24oZGVmYXVsdFBleWxvYWQsIHRoaXMuc2FsdCB8fCBcIlwiLCB0aGlzLmNvbmZpZyk7XG4gICAgICAgIHJlc3BvbnNlLnJlZnJlc2hUb2tlbiA9IGp3dC5zaWduKHJlZnJlc2hQZXlsb2FkLCB0aGlzLnNhbHQgfHwgXCJcIiwgX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMuY29uZmlnKSwgeyBleHBpcmVzSW46IFwiNzJIXCIgfSkpO1xuICAgICAgICByZXR1cm4geyBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbjogcmVmcmVzaFRva2VuLCByZXNwb25zZTogcmVzcG9uc2UgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcmFtMCBsb2dpbkF1dGhSZXF1ZXN0IOODpuODvOOCtuODvElE44Go44OR44K544Ov44O844OJ44GM5qC857SN44GV44KM44Gm44GE44KLXG4gICAgICogQHJldHVybnMgYWNjZXNzVG9rZW4g44Ki44Kv44K744K544OI44O844Kv44Oz44KS6L+U5Y2044GZ44KLXG4gICAgICovXG4gICAgTmVvbkFwaS5wcm90b3R5cGUubG9naW5BdXRoID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBoYXNoUGFzc3dvcmQsIHF1ZXJ5LCByb3dzLCBpZCwgbmFtZSwgZW1haWwsIF9jLCBhY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuLCBuZXdSZXNwb25zZSwgdXBkYXRlUm93cztcbiAgICAgICAgICAgIHZhciB1c2VySWQgPSBfYi51c2VySWQsIHBhc3N3b3JkID0gX2IucGFzc3dvcmQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9kKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfZC5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW46IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNoUGFzc3dvcmQgPSBjcmVhdGVIYXNoKFwic2hhMjU2XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZShwYXNzd29yZCArIHRoaXMuc2FsdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGlnZXN0KFwiaGV4XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgPSBcIlxcbiAgICAgICAgICAgIFNFTEVDVCBzaGl0YWlfdXNlcl9pbmZvLmlkICAgICAgQVMgaWRcXG4gICAgICAgICAgICAsc2hpdGFpX3VzZXJfaW5mby51c2VyX2lkICAgICAgQVMgZW1haWxcXG4gICAgICAgICAgICAsIHNoaXRhaV91c2VyX2luZm8udXNlcl9uYW1lICAgICAgQVMgbmFtZVxcbiAgICAgICAgICAgIEZST00gc2hpdGFpX3VzZXJfaW5mb1xcbiAgICAgICAgICAgIFdIRVJFIHBhc3N3b3JkID0gJDFcXG4gICAgICAgICAgICAgIEFORCB1c2VyX2lkID0gJDI7XFxuICAgICAgICBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShxdWVyeSwgW2hhc2hQYXNzd29yZCwgdXNlcklkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzID0gKF9kLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBjOWtmOWcqOOBmeOCi+WgtOWQiOOAgeOCouOCr+OCu+OCueODiOODvOOCr+ODs+OCkui/lOWNtOOBmeOCi1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5a2Y5Zyo44GX44Gq44GE5aC05ZCI44CB44Ko44Op44O844Oh44OD44K744O844K444KS6L+U5Y2044GZ44KL44CCXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93cy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBcIuODpuODvOOCtuODvElE44KC44GX44GP44Gv44OR44K544Ov44O844OJ44GM6ZaT6YGV44Gj44Gm44GE44G+44GZ44CCXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gcm93c1swXVtcImlkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IHJvd3NbMF1bXCJuYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWwgPSByb3dzWzBdW1wiZW1haWxcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHsgbWVzc2FnZTogXCLjg63jgrDjgqTjg7Poqo3oqLzjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIiB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MgPSB0aGlzLmNyZWF0ZVRva2VucyhpZCksIGFjY2Vzc1Rva2VuID0gX2MuYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiA9IF9jLnJlZnJlc2hUb2tlbiwgbmV3UmVzcG9uc2UgPSBfYy5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlVQREFURSBzaGl0YWlfdXNlcl9pbmZvIFNFVCBhY2Nlc3NfdG9rZW4gPSAoQVJSQVlbJDFdIHx8IGFjY2Vzc190b2tlbilbMTozXSwgcmVmcmVzaF90b2tlbiA9ICQyIFdIRVJFIHVzZXJfaWQgPSAkMyBSRVRVUk5JTkcgaWRcIiwgW2FjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIHVzZXJJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUm93cyA9IChfZC5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlUm93cy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBcIuODreOCsOOCpOODs+iqjeiovOOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA9IHVwZGF0ZVJvd3NbMF1bXCJpZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBcIuODreOCsOOCpOODs+iqjeiovOOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBuZXdSZXNwb25zZSksIHsgaWQ6IGlkLCBuYW1lOiBuYW1lLCBlbWFpbDogZW1haWwgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcmFtMCBhY2Nlc3NUb2tlbkF1dGhSZXF1ZXN0W1widXNlckluZm9cIl0gQVBJ44KS5a6f6KGM44GZ44KL44Om44O844K244O85oOF5aCxKOODpuODvOOCtuODvElE44CB44Ki44Kv44K744K544OI44O844Kv44OzKVxuICAgICAqIEByZXR1cm5z44CAXCJzdWNjZXNzXCIgb3IgXCJlcnJvclwiXG4gICAgICovXG4gICAgTmVvbkFwaS5wcm90b3R5cGUuYWNjZXNzVG9rZW5BdXRoID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBpZCwgbmFtZV8xLCBlbWFpbCwgZGVjb2RlZEFjY2Vzc1Rva2VuLCBvYmosIHJvd3MsIGVfMTtcbiAgICAgICAgICAgIHZhciBhY2Nlc3NUb2tlbiA9IF9iLmFjY2Vzc1Rva2VuO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcImVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRBY2Nlc3NUb2tlbiA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0gand0LnZlcmlmeShhY2Nlc3NUb2tlbiwgdGhpcy5zYWx0IHx8IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gb2JqLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRBY2Nlc3NUb2tlbiA9IG9iai5hY2Nlc3NUb2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGlkLCBkZWNvZGVkQWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJtZXNzYWdlXCIgaW4gZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5tZXNzYWdlID09PSBcImp3dCBleHBpcmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJleHBpcmVkIGFjY2VzcyB0b2tlblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCAqXFxuICAgICAgICAgICAgIEZST00gc2hpdGFpX3VzZXJfaW5mb1xcbiAgICAgICAgICAgICBXSEVSRSBpZCA9ICQxXFxuICAgICAgICAgICAgICAgQU5EICQyID0gQU5ZKGFjY2Vzc190b2tlbik7XCIsIFtpZCwgZGVjb2RlZEFjY2Vzc1Rva2VuXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzID0gKF9jLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJlcnJvclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXzEgPSByb3dzWzBdW1widXNlcl9uYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWwgPSByb3dzWzBdW1widXNlcl9pZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0geyBpZDogaWQsIG5hbWU6IG5hbWVfMSwgZW1haWw6IGVtYWlsIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwiZXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcmFtMCBhY2Nlc3NUb2tlbkF1dGhSZXF1ZXN0W1widXNlckluZm9cIl0gQVBJ44KS5a6f6KGM44GZ44KL44Om44O844K244O85oOF5aCxKOODpuODvOOCtuODvElE44CB44Ki44Kv44K744K544OI44O844Kv44OzKVxuICAgICAqIEByZXR1cm5z44CAXCJzdWNjZXNzXCIgb3IgXCJlcnJvclwiXG4gICAgICovXG4gICAgTmVvbkFwaS5wcm90b3R5cGUucmVmcmVzaFRva2VuQXV0aCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgX2MsIGlkLCBkZWNvZGVkUmVmcmVzaFRva2VuLCByb3dzLCB1c2VySWQsIF9kLCBuZXdBY2Nlc3NUb2tlbiwgbmV3UmVmcmVzaFRva2VuLCBuZXdSZXNwb25zZSwgdXBkYXRlUm93cztcbiAgICAgICAgICAgIHZhciByZWZyZXNoVG9rZW4gPSBfYi5yZWZyZXNoVG9rZW47XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9lKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfZS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwiZXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jID0gand0LnZlcmlmeShyZWZyZXNoVG9rZW4sIHRoaXMuc2FsdCB8fCBcIlwiKSwgaWQgPSBfYy5pZCwgZGVjb2RlZFJlZnJlc2hUb2tlbiA9IF9jLnJlZnJlc2hUb2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBpZFxcbiAgICAgICAgICAgICBGUk9NIHNoaXRhaV91c2VyX2luZm9cXG4gICAgICAgICAgICAgV0hFUkUgaWQgPSAkMVxcbiAgICAgICAgICAgICAgIEFORCByZWZyZXNoX3Rva2VuID0gJDI7XCIsIFtpZCwgZGVjb2RlZFJlZnJlc2hUb2tlbl0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cyA9IChfZS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwiZXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkID0gcm93c1swXVtcImlkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2QgPSB0aGlzLmNyZWF0ZVRva2Vucyh1c2VySWQpLCBuZXdBY2Nlc3NUb2tlbiA9IF9kLmFjY2Vzc1Rva2VuLCBuZXdSZWZyZXNoVG9rZW4gPSBfZC5yZWZyZXNoVG9rZW4sIG5ld1Jlc3BvbnNlID0gX2QucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJVUERBVEUgc2hpdGFpX3VzZXJfaW5mbyBTRVQgYWNjZXNzX3Rva2VuID0gKEFSUkFZWyQxXSB8fCBhY2Nlc3NfdG9rZW4pWzE6M10sIHJlZnJlc2hfdG9rZW4gPSAkMiBXSEVSRSBpZCA9ICQzIFJFVFVSTklORyBpZFwiLCBbbmV3QWNjZXNzVG9rZW4sIG5ld1JlZnJlc2hUb2tlbiwgdXNlcklkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVSb3dzID0gKF9lLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJlcnJvclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA9IHVwZGF0ZVJvd3NbMF1bXCJpZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwiZXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfX2Fzc2lnbih7IGlkOiBpZCB9LCBuZXdSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5lb25BcGkucHJvdG90eXBlLnVwbG9hZEltYWdlRGF0YSA9IGZ1bmN0aW9uIChpbWFnZURhdGEpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNyZWRlbnRpYWxzLCBzdG9yYWdlLCBidWNrZXQsIHBhcnNlQmFzZTY0SW1hZ2UsIHVwbG9hZEJhc2U2NEltYWdlLCBfYTtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFscyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQ1JFREVOVElBTFNfVFlQRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRfZW1haWw6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9DUkVERU5USUFMU19DTElFTlRfRU1BSUwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZV9rZXk6IChwcm9jZXNzLmVudi5SRUFDVF9BUFBfQ1JFREVOVElBTFNfUFJJVkFURV9LRVkgfHwgXCJcIikucmVwbGFjZSgvXFxcXG4vZywgXCJcXG5cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZV9rZXlfaWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9DUkVERU5USUFMU19QUklWQVRFX0tFWV9JRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0X2lkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfUFJPSkVDVF9JRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRfaWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9DUkVERU5USUFMU19DTElFTlRfSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aF91cmk6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9DUkVERU5USUFMU19BVVRIX1VSSSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbl91cmk6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9DUkVERU5USUFMU19UT0tFTl9VUkksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aF9wcm92aWRlcl94NTA5X2NlcnRfdXJsOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQ1JFREVOVElBTFNfQVVUSF9QUk9WSURFUl9YNTA5X0NFUlRfVVJMLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudF94NTA5X2NlcnRfdXJsOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQ1JFREVOVElBTFNfQ0xJRU5UX1g1MDlfQ0VSVF9VUkwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pdmVyc2VfZG9tYWluOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQ1JFREVOVElBTFNfVU5JVkVSU0VfRE9NQUlOLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfUFJPSkVDVF9OQU1FLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBjcmVkZW50aWFscyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVja2V0ID0gc3RvcmFnZS5idWNrZXQocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0JVQ0tFVF9OQU1FIHx8IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VCYXNlNjRJbWFnZSA9IGZ1bmN0aW9uIChiYXNlNjQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IGJhc2U2NC5tYXRjaCgvXmRhdGE6KC4rKTtiYXNlNjQsKC4rKSQvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGNoZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgQmFzZTY0IHN0cmluZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBjb250ZW50VHlwZTogbWF0Y2hlc1sxXSwgYmFzZTY0RGF0YTogbWF0Y2hlc1syXSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwbG9hZEJhc2U2NEltYWdlID0gZnVuY3Rpb24gKGJhc2U2NCwgdXBsb2FkUGF0aCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYSwgY29udGVudFR5cGUsIGJhc2U2NERhdGEsIGJ1ZmZlciwgZmlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHBhcnNlQmFzZTY0SW1hZ2UoYmFzZTY0KSwgY29udGVudFR5cGUgPSBfYS5jb250ZW50VHlwZSwgYmFzZTY0RGF0YSA9IF9hLmJhc2U2NERhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gQnVmZmVyLmZyb20oYmFzZTY0RGF0YSwgXCJiYXNlNjRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZSA9IGJ1Y2tldC5maWxlKHVwbG9hZFBhdGggKyBcIi5cIiArIGNvbnRlbnRUeXBlLnJlcGxhY2UoXCJpbWFnZS9cIiwgXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZpbGUuc2F2ZShidWZmZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGNvbnRlbnRUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlQ29udHJvbDogXCJwdWJsaWMsIG1heC1hZ2U9MzE1MzYwMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5b+F6KaB44Gq44KJ5YWs6ZaLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmlsZS5tYWtlUHVibGljKCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOW/heimgeOBquOCieWFrOmWi1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgXCJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vXCIuY29uY2F0KGZpbGUuY2xvdWRTdG9yYWdlVVJJLmhyZWYucmVwbGFjZShcImdzOi8vXCIsIFwiXCIpKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pOyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpbWFnZURhdGEpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdXBsb2FkQmFzZTY0SW1hZ2UoaW1hZ2VEYXRhLCByYW5kb21VVUlEKCkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovLCBfYV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyYW0wIHVzZXJJZCzkvZzmiJDjgavlv4XopoHjgarmg4XloLEocHJpY2UsIGRlc2NyaXB0aW9uLCBjcmVhdGVkX2F0KVxuICAgICAqIEByZXR1cm5z44CAXCJzdWNjZXNzXCIgb3IgXCJlcnJvclwiXG4gICAgICovXG4gICAgTmVvbkFwaS5wcm90b3R5cGUuaW5zZXJ0VXNlckluZm8gPSBmdW5jdGlvbiAodXBkYXRlT2JqKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgaGFzaFBhc3N3b3JkLCBpbnNlcnRSb3dzLCBlXzI7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwic3VjY2Vzc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQkVHSU5cIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMiwgNSwgLCA3XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNoUGFzc3dvcmQgPSBjcmVhdGVIYXNoKFwic2hhMjU2XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZSh1cGRhdGVPYmoucGFzc3dvcmQgKyB0aGlzLnNhbHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpZ2VzdChcImhleFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIklOU0VSVCBJTlRPIFxcXCJwdWJsaWNcXFwiLlxcXCJzaGl0YWlfdXNlcl9pbmZvXFxcIiAoXFxcInVzZXJfaWRcXFwiLCBcXFwicGFzc3dvcmRcXFwiLCBcXFwidXNlcl9uYW1lXFxcIilcXG4gICAgICAgICAgVkFMVUVTKCQxLCAkMiwgJDMpIFJFVFVSTklORyBpZDtcIiwgW3VwZGF0ZU9iai5lbWFpbCwgaGFzaFBhc3N3b3JkLCB1cGRhdGVPYmoubmFtZV0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0Um93cyA9IChfYS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0Um93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44Om44O844K244O855m76Yyy44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkNPTU1JVFwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJST0xMQkFDS1wiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5lb25BcGkucHJvdG90eXBlLnNlbmRFbWFpbCA9IGZ1bmN0aW9uICh0bywgc3ViamVjdCwgaHRtbCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzZW5kLCBfYSwgZGF0YSwgZXJyb3I7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNlbmQgPSBuZXcgUmVzZW5kKHByb2Nlc3MuZW52LlJFQUNUX0FQUF9SRVNFTkRfQVBJX1RPS0VOKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJlc2VuZC5lbWFpbHMuc2VuZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GUk9NX0VNQUlMIHx8IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB0byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogc3ViamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogaHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gX2Iuc2VudCgpLCBkYXRhID0gX2EuZGF0YSwgZXJyb3IgPSBfYS5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTsgLy9jb25zb2xlLmVycm9yKHsgZXJyb3IgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUuaW5zZXJ0V2lzaCA9IGZ1bmN0aW9uICh3aXNoLCBpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIHBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hLCBwb3N0Q29uZmlybVNjaGVtYSwgbGVmdFdpc2hfMSwgZ3JvdXBSb3dzLCB1cmxQYXR0ZXJuLCBpc1VybCwgaW1hZ2VEYXRhLCBfYSwgaW5zZXJ0V2lzaFJvd3MsIGNyZWF0ZUluc2VydFNjaGVtYSwgX2IsIF9jLCBzY2hlbWEsIGluc2VydFJvd3MsIGVfM18xLCBtYWlsUm93cywgZ3JvdXBOYW1lLCB1c2VyUm93cywgY3JlYXRvck5hbWUsIGNyZWF0b3JNYWlsXzEsIHRvLCBkZXNjcmlwdGlvbiwgaHRtbCwgZV80O1xuICAgICAgICAgICAgdmFyIGVfMywgX2Q7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2UubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB7IGlkOiBcIlwiIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJCRUdJTlwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2UudHJ5cy5wdXNoKFsyLCAyMSwgLCAyM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWEgPSB3aXNoLnBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hLCBwb3N0Q29uZmlybVNjaGVtYSA9IHdpc2gucG9zdENvbmZpcm1TY2hlbWEsIGxlZnRXaXNoXzEgPSBfX3Jlc3Qod2lzaCwgW1wicGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFcIiwgXCJwb3N0Q29uZmlybVNjaGVtYVwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc2cuaWQsIHNnLlxcXCJncm91cE5hbWVcXFwiIEZST00gcHVibGljLnNoaXRhaV9ncm91cCBhcyBzZyBJTk5FUiBKT0lOIHB1YmxpYy5zaGl0YWlfZ3JvdXBfam9pbiBhcyBzamcgT04gc2pnLlxcXCJncm91cElkXFxcIiA9IHNnLmlkIEFORCBzamcuXFxcInVzZXJJZFxcXCIgPSAkMSBXSEVSRSBzZy5pZCA9ICQyO1wiLCBbaWQsIGxlZnRXaXNoXzEuZ3JvdXBJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBSb3dzID0gKF9lLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5qip6ZmQ44GM44GC44KK44G+44Gb44KT44CC44Kw44Or44O844OX5aSW44Gu44Om44O844K244O844Gn44GZ44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVybFBhdHRlcm4gPSAvXihodHRwcz98ZnRwKSg6XFwvXFwvW1xcd1xcLzolI1xcJCZcXD9cXChcXCl+XFwuPVxcK1xcLV0rKS87XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1VybCA9IHVybFBhdHRlcm4udGVzdChsZWZ0V2lzaF8xLmltYWdlRGF0YSB8fCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNVcmwpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBsZWZ0V2lzaF8xLmltYWdlRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMudXBsb2FkSW1hZ2VEYXRhKGxlZnRXaXNoXzEuaW1hZ2VEYXRhIHx8IFwiXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBfZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZS5sYWJlbCA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YSA9IF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiSU5TRVJUIElOVE8gcHVibGljLnNoaXRhaV93aXNoIChcIi5jb25jYXQodGhpcy5jb2x1bW5zLmpvaW4oXCIsXCIpLCBcIikgXFxuICAgICAgICBWQUxVRVMgKCQxLCAkMiwgJDMsICQ0LCAkNSwgJDYsICQ3LCAkOCwgJDksICQxMCwgJDExLCAkMTIsICQxMywgTk9XKCksICQxNCwgJDE1LCAkMTYpIFJFVFVSTklORyBpZDtcIiksIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2hfMS5ncm91cElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaF8xLmNyZWF0b3JJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2hfMS5jYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaF8xLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaF8xLmRpc3BsYXlEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaF8xLmRpc3BsYXlUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaF8xLm5vdGVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaF8xLmRlYWRsaW5lID09IFwiXCIgPyBudWxsIDogbGVmdFdpc2hfMS5kZWFkbGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2hfMS5taW5QYXJ0aWNpcGFudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoXzEubWF4UGFydGljaXBhbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaF8xLmFjdGlvbkxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWEudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdENvbmZpcm1TY2hlbWEudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2hfMS5pbXBsZW1lbnRhdGlvbkRhdGV0aW1lID09IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsZWZ0V2lzaF8xLmltcGxlbWVudGF0aW9uRGF0ZXRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRXaXNoUm93cyA9IChfZS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0V2lzaFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOBl+OBn+OBhOOBk+OBqOOBrueZu+mMsuOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVJbnNlcnRTY2hlbWEgPSBmdW5jdGlvbiAoc2NoZW1hLCBzY2hlbWFUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1peGVkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hVHlwZTogc2NoZW1hVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHNjaGVtYS5kYXRldGltZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBzY2hlbWEuZGF0ZXRpbWVSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVR5cGU6IHNjaGVtYVR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJub3RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHNjaGVtYS5ub3RlTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHNjaGVtYS5ub3RlUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGF0ZXRpbWVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFUeXBlOiBzY2hlbWFUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogc2NoZW1hLmRhdGV0aW1lTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHNjaGVtYS5kYXRldGltZVJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vdGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFUeXBlOiBzY2hlbWFUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibm90ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzY2hlbWEubm90ZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBzY2hlbWEubm90ZVJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFUeXBlOiBzY2hlbWFUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzY2hlbWEubm90ZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBzY2hlbWEubm90ZVJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBfZS5sYWJlbCA9IDg7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lLnRyeXMucHVzaChbOCwgMTMsIDE0LCAxNV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IgPSBfX3ZhbHVlcyhfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChjcmVhdGVJbnNlcnRTY2hlbWEocGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWEsIFwicGFydGljaXBhdGlvblwiKSksIGZhbHNlKSwgX19yZWFkKGNyZWF0ZUluc2VydFNjaGVtYShwb3N0Q29uZmlybVNjaGVtYSwgXCJwb3N0XCIpKSwgZmFsc2UpKSwgX2MgPSBfYi5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZS5sYWJlbCA9IDk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIV9jLmRvbmUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDEyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYSA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiSU5TRVJUIElOVE8gXFxcInB1YmxpY1xcXCIuXFxcInNoaXRhaV9zY2hlbWFcXFwiIChcXFwid2lzaElkXFxcIiwgXFxcInNjaGVtYVR5cGVcXFwiLCBcXFwidHlwZVxcXCIsIFxcXCJyZXF1aXJlZFxcXCIsIFxcXCJsYWJlbFxcXCIpXFxuICAgICAgICAgIFZBTFVFUygkMSwgJDIsICQzLCAkNCwgJDUpIFJFVFVSTklORyBpZDtcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRXaXNoUm93c1swXVtcImlkXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEuc2NoZW1hVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFJvd3MgPSAoX2Uuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc2VydFJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIueiuuiqjemgheebruOBrueZu+mMsuOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfZS5sYWJlbCA9IDExO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2MgPSBfYi5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA5XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjogcmV0dXJuIFszIC8qYnJlYWsqLywgMTVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8zXzEgPSBfZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzMgPSB7IGVycm9yOiBlXzNfMSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9kID0gX2IucmV0dXJuKSkgX2QuY2FsbChfYik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMykgdGhyb3cgZV8zLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE1OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuaWQgPSBpbnNlcnRXaXNoUm93c1swXVtcImlkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHN1aS51c2VyX2lkIEFzIG1haWxcXG4gICAgICAgIEZST00gcHVibGljLnNoaXRhaV9ncm91cF9qb2luIGFzIHNnaiBJTk5FUiBKT0lOIHNoaXRhaV91c2VyX2luZm8gYXMgc3VpIE9OIHN1aS5pZCA9IHNnai5cXFwidXNlcklkXFxcIiBXSEVSRSBzZ2ouXFxcImdyb3VwSWRcXFwiID0gJDE7XCIsIFtsZWZ0V2lzaF8xLmdyb3VwSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgICAgICAgICBtYWlsUm93cyA9IChfZS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWFpbFJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOCsOODq+ODvOODl+ODoeODs+ODkOaDheWgseOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cE5hbWUgPSBncm91cFJvd3NbMF1bXCJncm91cE5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc3VpLnVzZXJfbmFtZSBBcyBuYW1lLCBzdWkudXNlcl9pZCBBcyBtYWlsXFxuICAgICAgICBGUk9NIHNoaXRhaV91c2VyX2luZm8gYXMgc3VpIFdIRVJFIHN1aS5cXFwiaWRcXFwiID0gJDE7XCIsIFtsZWZ0V2lzaF8xLmNyZWF0b3JJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJSb3dzID0gKF9lLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5L2c5oiQ6ICF5oOF5aCx44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JOYW1lID0gdXNlclJvd3NbMF1bXCJuYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvck1haWxfMSA9IHVzZXJSb3dzWzBdW1wibWFpbFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvID0gbWFpbFJvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyb3cpIHsgcmV0dXJuIHJvd1tcIm1haWxcIl07IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobWFpbCkgeyByZXR1cm4gbWFpbCAhPSBjcmVhdG9yTWFpbF8xOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gT2JqZWN0LmtleXMobGVmdFdpc2hfMSkucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IF90aGlzLmNvbHVtbk5hbWVzLmZpbmQoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqLmNvbHVtbiA9PSBjdXJyZW50OyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNEYXRlID0gX3RoaXMuZGF0ZUNvbHVtbnMuc29tZShmdW5jdGlvbiAoZHRDb2wpIHsgcmV0dXJuIGR0Q29sID09IGN1cnJlbnQ7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW4gPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwcmV2ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPHRyPjx0ZD5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiLmNvbmNhdChvYmoubmFtZSwgXCI8L3RkPjx0ZD5cIikuY29uY2F0KGlzRGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZm9ybWF0RGlzcGxheURhdGUobGVmdFdpc2hfMVtjb2x1bW5dKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbGVmdFdpc2hfMVtjb2x1bW5dLCBcIjwvdGQ+PC90cj5cIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCA9IFwiXFxuPCFkb2N0eXBlIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiamFcXFwiPlxcbjxoZWFkPlxcbiAgPG1ldGEgY2hhcnNldD1cXFwidXRmLThcXFwiIC8+XFxuICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVxcXCIgLz5cXG4gIDx0aXRsZT5cXHU2NUIwXFx1MzA1N1xcdTMwNDRcXHUzMDBDXFx1MzA1N1xcdTMwNUZcXHUzMDQ0XFx1MzAwRFxcdTkwMUFcXHU3N0U1PC90aXRsZT5cXG4gIDxzdHlsZT5cXG4gICAgYm9keSB7IGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJIaXJhZ2lubyBLYWt1IEdvdGhpYyBQcm9OXFxcIiwgXFxcIll1IEdvdGhpY1xcXCIsIFxcXCJOb3RvIFNhbnMgSlBcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjsgbWFyZ2luOjA7IHBhZGRpbmc6MDsgYmFja2dyb3VuZDojZjZmOGZiOyBjb2xvcjojMTExOyB9XFxuICAgIC5jb250YWluZXIgeyBtYXgtd2lkdGg6NjAwcHg7IG1hcmdpbjoyOHB4IGF1dG87IGJhY2tncm91bmQ6I2ZmZjsgYm9yZGVyLXJhZGl1czo4cHg7IG92ZXJmbG93OmhpZGRlbjsgYm94LXNoYWRvdzowIDZweCAyNHB4IHJnYmEoMjAsMzAsNjAsMC4wOCk7IH1cXG4gICAgLmhlYWRlciB7IHBhZGRpbmc6MjBweDsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoOTBkZWcsIzFmNmZlYiwjNmI5Y2ZmKTsgY29sb3I6I2ZmZjsgfVxcbiAgICAuY29udGVudCB7IHBhZGRpbmc6MjBweDsgfVxcbiAgICAudGl0bGUgeyBmb250LXNpemU6MThweDsgbWFyZ2luOjAgMCA4cHggMDsgfVxcbiAgICAubWV0YSB7IGZvbnQtc2l6ZToxM3B4OyBjb2xvcjojNmI3MjgwOyBtYXJnaW4tYm90dG9tOjE2cHg7IH1cXG4gICAgLmNhcmQgeyBiYWNrZ3JvdW5kOiNmN2Y5ZmM7IHBhZGRpbmc6MTRweDsgYm9yZGVyLXJhZGl1czo2cHg7IG1hcmdpbi1ib3R0b206MTZweDsgfVxcbiAgICAuYnRuIHsgZGlzcGxheTppbmxpbmUtYmxvY2s7IHBhZGRpbmc6MTJweCAxOHB4OyBib3JkZXItcmFkaXVzOjhweDsgdGV4dC1kZWNvcmF0aW9uOm5vbmU7IGZvbnQtd2VpZ2h0OjYwMDsgfVxcbiAgICAuYnRuLXByaW1hcnkgeyBiYWNrZ3JvdW5kOiMxZjZmZWI7IGNvbG9yOiNmZmY7IH1cXG4gICAgLmZvb3RlciB7IGZvbnQtc2l6ZToxMnB4OyBjb2xvcjojOWFhMGFiOyBwYWRkaW5nOjE4cHg7IHRleHQtYWxpZ246Y2VudGVyOyB9XFxuICAgIC5rdiB7IGZvbnQtd2VpZ2h0OjcwMDsgY29sb3I6IzExMTsgfVxcbiAgICBwcmUgeyB3aGl0ZS1zcGFjZTpwcmUtd3JhcDsgd29yZC13cmFwOmJyZWFrLXdvcmQ7IH1cXG4gIDwvc3R5bGU+XFxuPC9oZWFkPlxcbjxib2R5PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIiByb2xlPVxcXCJhcnRpY2xlXFxcIiBhcmlhLWxhYmVsPVxcXCJTSElUQUkgXFx1NjVCMFxcdTMwNTdcXHUzMDQ0XFx1MzA1N1xcdTMwNUZcXHUzMDQ0XFx1OTAxQVxcdTc3RTVcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgIDxoMSBzdHlsZT1cXFwiZm9udC1zaXplOjIwcHg7bWFyZ2luOjBcXFwiPlNISVRBSTwvaDE+XFxuICAgICAgPHAgc3R5bGU9XFxcIm1hcmdpbjo2cHggMCAwIDA7Zm9udC1zaXplOjEzcHg7b3BhY2l0eTowLjk1XFxcIj5cXHUzMEIwXFx1MzBFQlxcdTMwRkNcXHUzMEQ3XFx1NTE4NVxcdTMwNkJcXHU2NUIwXFx1MzA1N1xcdTMwNDRcXHUzMDBDXFx1MzA1N1xcdTMwNUZcXHUzMDQ0XFx1MzAwRFxcdTMwNENcXHU2Mjk1XFx1N0EzRlxcdTMwNTVcXHUzMDhDXFx1MzA3RVxcdTMwNTdcXHUzMDVGPC9wPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcInRpdGxlXFxcIj5cXHVEODNEXFx1REQxNCBcXHU2NUIwXFx1Nzc0MFxcdUZGMUFcIi5jb25jYXQobGVmdFdpc2hfMS50aXRsZSwgXCI8L3A+XFxuICAgICAgPHAgY2xhc3M9XFxcIm1ldGFcXFwiPjxzcGFuIGNsYXNzPVxcXCJrdlxcXCI+XFx1NEY1Q1xcdTYyMTBcXHU4MDA1XFx1RkYxQTwvc3Bhbj4gXCIpLmNvbmNhdChjcmVhdG9yTmFtZSwgXCIgJm5ic3A7fCZuYnNwOyA8c3BhbiBjbGFzcz1cXFwia3ZcXFwiPlxcdTMwQjBcXHUzMEVCXFx1MzBGQ1xcdTMwRDdcXHVGRjFBPC9zcGFuPiBcIikuY29uY2F0KGdyb3VwTmFtZSwgXCI8L3A+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjAgMCA4cHggMDtcXFwiPjxzcGFuIGNsYXNzPVxcXCJrdlxcXCI+XFx1NTE4NVxcdTVCQjk8L3NwYW4+PC9wPlxcbiAgICAgICAgPHByZSBzdHlsZT1cXFwibWFyZ2luOjA7XFxcIj48dGFibGU+XCIpLmNvbmNhdChkZXNjcmlwdGlvbiwgXCI8L3RhYmxlPjwvcHJlPlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46MCAwIDE4cHggMDtcXFwiPlxcdThBNzNcXHU3RDMwXFx1MzA4NFxcdTUzQzJcXHU1MkEwXFx1MzA2RlxcdTRFMEJcXHUzMDZFXFx1MzBEQ1xcdTMwQkZcXHUzMEYzXFx1MzA0QlxcdTMwODlcXHU3OEJBXFx1OEE4RFxcdTMwNTdcXHUzMDY2XFx1MzA0RlxcdTMwNjBcXHUzMDU1XFx1MzA0NFxcdTMwMDI8L3A+XFxuXFxuICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgaHJlZj1cXFwiXCIpLmNvbmNhdChwcm9jZXNzLmVudi5SRUFDVF9BUFBfRlJPTlRFTkRfVVJMICsgXCIvXCIgKyBcIndpc2hcIiArIFwiL1wiICsgcmVzcG9uc2UuaWQsIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub29wZW5lclxcXCI+XFx1OEE3M1xcdTdEMzBcXHUzMDkyXFx1NzhCQVxcdThBOERcXHUzMDU5XFx1MzA4QjwvYT5cXG5cXG4gICAgICA8aHIgc3R5bGU9XFxcImJvcmRlcjpub25lO2JvcmRlci10b3A6MXB4IHNvbGlkICNlZWYyZjc7bWFyZ2luOjE4cHggMDtcXFwiIC8+XFxuXFxuICAgICAgPHAgc3R5bGU9XFxcIm1hcmdpbjowO2ZvbnQtc2l6ZToxM3B4O2NvbG9yOiM1NTYwNzA7XFxcIj5cXG4gICAgICAgIFxcdTZDMTdcXHUzMDZCXFx1MzA2QVxcdTMwOEJcXHUzMDBDXFx1MzA1N1xcdTMwNUZcXHUzMDQ0XFx1MzAwRFxcdTMwNENcXHUzMDQyXFx1MzA4Q1xcdTMwNzBcXHUzMDAxXFx1NTNDMlxcdTUyQTBcXHUzMDg0XFx1MzBFQVxcdTMwQTJcXHUzMEFGXFx1MzBCN1xcdTMwRTdcXHUzMEYzXFx1MzA2N1xcdTMwQjBcXHUzMEVCXFx1MzBGQ1xcdTMwRDdcXHUzMDkyXFx1NkQzQlxcdTYwMjdcXHU1MzE2XFx1MzA1N1xcdTMwN0VcXHUzMDU3XFx1MzA4N1xcdTMwNDZcXHVGRjAxXFxuICAgICAgPC9wPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXG4gICAgICBcXHUzMDUzXFx1MzA2RVxcdTMwRTFcXHUzMEZDXFx1MzBFQlxcdTMwNkZcXHU4MUVBXFx1NTJENVxcdTkxNERcXHU0RkUxXFx1MzA2N1xcdTMwNTlcXHUzMDAyXFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9ib2R5PlxcbjwvaHRtbD5cXG5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0by5sZW5ndGggIT0gMCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDE5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc2VuZEVtYWlsKHRvLCBcIlxcdTMwMTBTSElUQUlcXHUzMDExXFx1NjVCMFxcdTMwNTdcXHUzMDQ0XFx1MzAwQ1xcdTMwNTdcXHUzMDVGXFx1MzA0NFxcdTMwMERcXHUzMDRDXFx1NjI5NVxcdTdBM0ZcXHUzMDU1XFx1MzA4Q1xcdTMwN0VcXHUzMDU3XFx1MzA1RiBcXHUyMDE0IFwiLmNvbmNhdChsZWZ0V2lzaF8xLnRpdGxlKSwgaHRtbCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Uuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2UubGFiZWwgPSAxOTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOTogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQ09NTUlUXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDIzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfNCA9IF9lLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlJPTExCQUNLXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfNDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS5jcmVhdGVSZXNwb25zZURhdGEgPSBmdW5jdGlvbiAod2lzaElkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzY2hlbWFSb3dzLCBzY2hlbWFNYXAsIHNjaGVtYVJvd3NfMSwgc2NoZW1hUm93c18xXzEsIHNjaGVtYSwgcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFUeXBlLCBwb3N0Q29uZmlybVNjaGVtYVR5cGUsIHNjaGVtYVR5cGUsIHR5cGUsIHJlcXVpcmVkLCBsYWJlbCwgYW5zd2VyUm93cywgYW5zd2VyTWFwLCBwYXJ0aWNpcGFudHMsIGFuc3dlclJvd3NfMSwgYW5zd2VyUm93c18xXzEsIGFuc3dlciwgam9pbmVkQXQsIHVzZXJJZCwgc2NoZW1hVHlwZSwgdHlwZSwgdmFsdWUsIGVfNTtcbiAgICAgICAgICAgIHZhciBlXzYsIF9hLCBfYiwgZV83LCBfYywgX2QsIF9lO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2YubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2YudHJ5cy5wdXNoKFswLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzdy5cXFwicGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFUeXBlXFxcIiwgc3cuXFxcInBvc3RDb25maXJtU2NoZW1hVHlwZVxcXCIsIHNzLlxcXCJzY2hlbWFUeXBlXFxcIiwgc3MuXFxcInR5cGVcXFwiLCBzcy5cXFwicmVxdWlyZWRcXFwiLCBzcy5cXFwibGFiZWxcXFwiXFxuICAgICAgICBGUk9NIHB1YmxpYy5zaGl0YWlfd2lzaCBhcyBzdyBJTk5FUiBKT0lOIHNoaXRhaV9zY2hlbWEgYXMgc3MgT04gc3MuXFxcIndpc2hJZFxcXCIgPSBzdy5pZCBXSEVSRSBzdy5pZCA9ICQxO1wiLCBbd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFSb3dzID0gKF9mLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY2hlbWFSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgrnjgq3jg7zjg57jga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHNjaGVtYVJvd3NfMSA9IF9fdmFsdWVzKHNjaGVtYVJvd3MpLCBzY2hlbWFSb3dzXzFfMSA9IHNjaGVtYVJvd3NfMS5uZXh0KCk7ICFzY2hlbWFSb3dzXzFfMS5kb25lOyBzY2hlbWFSb3dzXzFfMSA9IHNjaGVtYVJvd3NfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hID0gc2NoZW1hUm93c18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hVHlwZSA9IHNjaGVtYS5wYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYVR5cGUsIHBvc3RDb25maXJtU2NoZW1hVHlwZSA9IHNjaGVtYS5wb3N0Q29uZmlybVNjaGVtYVR5cGUsIHNjaGVtYVR5cGUgPSBzY2hlbWEuc2NoZW1hVHlwZSwgdHlwZSA9IHNjaGVtYS50eXBlLCByZXF1aXJlZCA9IHNjaGVtYS5yZXF1aXJlZCwgbGFiZWwgPSBzY2hlbWEubGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYU1hcC5zZXQoc2NoZW1hVHlwZSwgX19hc3NpZ24oX19hc3NpZ24oe30sIHNjaGVtYU1hcC5nZXQoc2NoZW1hVHlwZSkpLCAoX2IgPSB7IHR5cGU6IHNjaGVtYVR5cGUgPT09IFwicGFydGljaXBhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFUeXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcG9zdENvbmZpcm1TY2hlbWFUeXBlIH0sIF9iW3R5cGUgKyBcIkxhYmVsXCJdID0gbGFiZWwsIF9iW3R5cGUgKyBcIlJlcXVpcmVkXCJdID0gcmVxdWlyZWQsIF9iKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlXzZfMSkgeyBlXzYgPSB7IGVycm9yOiBlXzZfMSB9OyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NoZW1hUm93c18xXzEgJiYgIXNjaGVtYVJvd3NfMV8xLmRvbmUgJiYgKF9hID0gc2NoZW1hUm93c18xLnJldHVybikpIF9hLmNhbGwoc2NoZW1hUm93c18xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzYpIHRocm93IGVfNi5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHNqLlxcXCJqb2luZWRBdFxcXCIsIHNqLlxcXCJ1c2VySWRcXFwiLCBzcy5cXFwic2NoZW1hVHlwZVxcXCIsIHNzLnR5cGUsIHNhLnZhbHVlXFxuICAgICAgICBGUk9NIHNoaXRhaV9qb2luIGFzIHNqIExFRlQgSk9JTiBzaGl0YWlfc2NoZW1hIGFzIHNzIE9OIHNzLlxcXCJ3aXNoSWRcXFwiID0gJDEgTEVGVCBKT0lOIHB1YmxpYy5zaGl0YWlfYW5zd2VyIGFzIHNhIE9OIHNhLlxcXCJzY2hlbWFJZFxcXCIgPSBzcy5pZCBBTkQgc3MuXFxcIndpc2hJZFxcXCIgPSAkMSBBTkQgc2EuXFxcInVzZXJJZFxcXCIgPSBzai5cXFwidXNlcklkXFxcIiBXSEVSRSBzai5cXFwid2lzaElkXFxcIiA9ICQxIE9SREVSIEJZIHNqLlxcXCJqb2luZWRBdFxcXCIgQVNDO1wiLCBbd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJSb3dzID0gKF9mLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlck1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGFuc3dlclJvd3NfMSA9IF9fdmFsdWVzKGFuc3dlclJvd3MpLCBhbnN3ZXJSb3dzXzFfMSA9IGFuc3dlclJvd3NfMS5uZXh0KCk7ICFhbnN3ZXJSb3dzXzFfMS5kb25lOyBhbnN3ZXJSb3dzXzFfMSA9IGFuc3dlclJvd3NfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyID0gYW5zd2VyUm93c18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5lZEF0ID0gYW5zd2VyLmpvaW5lZEF0LCB1c2VySWQgPSBhbnN3ZXIudXNlcklkLCBzY2hlbWFUeXBlID0gYW5zd2VyLnNjaGVtYVR5cGUsIHR5cGUgPSBhbnN3ZXIudHlwZSwgdmFsdWUgPSBhbnN3ZXIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdXNlcklkIHx8ICF0eXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlck1hcC5zZXQodXNlcklkLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgKGFuc3dlck1hcC5nZXQodXNlcklkKSA/IGFuc3dlck1hcC5nZXQodXNlcklkKSA6IHt9KSksIChfZCA9IHsgdXNlcklkOiB1c2VySWQsIGpvaW5lZEF0OiBqb2luZWRBdCB9LCBfZFtzY2hlbWFUeXBlICsgXCJBbnN3ZXJzXCJdID0gX19hc3NpZ24oX19hc3NpZ24oe30sIChhbnN3ZXJNYXAuZ2V0KHVzZXJJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2NoZW1hVHlwZSArIFwiQW5zd2Vyc1wiIGluIGFuc3dlck1hcC5nZXQodXNlcklkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYW5zd2VyTWFwLmdldCh1c2VySWQpWyhzY2hlbWFUeXBlICsgXCJBbnN3ZXJzXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge30pKSwgKF9lID0ge30sIF9lW3R5cGVdID0gdmFsdWUsIF9lKSksIF9kKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudHMgPSBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoYW5zd2VyTWFwLnZhbHVlcygpKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlXzdfMSkgeyBlXzcgPSB7IGVycm9yOiBlXzdfMSB9OyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5zd2VyUm93c18xXzEgJiYgIWFuc3dlclJvd3NfMV8xLmRvbmUgJiYgKF9jID0gYW5zd2VyUm93c18xLnJldHVybikpIF9jLmNhbGwoYW5zd2VyUm93c18xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzcpIHRocm93IGVfNy5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWE6IHNjaGVtYU1hcC5nZXQoXCJwYXJ0aWNpcGF0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0Q29uZmlybVNjaGVtYTogc2NoZW1hTWFwLmdldChcInBvc3RcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50czogcGFydGljaXBhbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzUgPSBfZi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZV81O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS5nZXRXaXNoQnlJZCA9IGZ1bmN0aW9uICh3aXNoSWQsIGlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgZ3JvdXBSb3dzLCB3aXNoUm93c18xLCByZXNfMSwgZXh0Q29sdW1ucywgZV84O1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHdpc2hJZC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwSWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvcklkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblBhcnRpY2lwYW50czogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25MYWJlbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYTogeyB0eXBlOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RDb25maXJtU2NoZW1hOiB7IHR5cGU6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd246IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgNSwgLCA2XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc2cuaWQgRlJPTSBwdWJsaWMuc2hpdGFpX3dpc2ggYXMgc3cgSU5ORVIgSk9JTiBwdWJsaWMuc2hpdGFpX2dyb3VwIGFzIHNnIE9OIHN3LlxcXCJncm91cElkXFxcIiA9IHNnLmlkIElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cF9qb2luIGFzIHNqZyBPTiBzamcuXFxcImdyb3VwSWRcXFwiID0gc2cuaWQgQU5EIHNqZy5cXFwidXNlcklkXFxcIiA9ICQxIFdIRVJFIHN3LmlkID0gJDI7XCIsIFtpZCwgd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFJvd3MgPSAoX2Euc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5qip6ZmQ44GM44GC44KK44G+44Gb44KT44CC44Kw44Or44O844OX5aSW44Gu44Om44O844K244O844Gn44GZ44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBcIi5jb25jYXQodGhpcy5jb2x1bW5zLmpvaW4oXCIsXCIpLCBcIlxcbiAgICAgICAgRlJPTSBwdWJsaWMuc2hpdGFpX3dpc2ggV0hFUkUgaWQgPSAkMTtcIiksIFt3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpc2hSb3dzXzEgPSAoX2Euc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpc2hSb3dzXzEubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOBl+OBn+OBhOOBk+OBqOOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmNyZWF0ZVJlc3BvbnNlRGF0YSh3aXNoSWQudG9TdHJpbmcoKSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dENvbHVtbnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29sICE9PSAnXCJwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYVR5cGVcIicgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sICE9PSAnXCJwb3N0Q29uZmlybVNjaGVtYVR5cGVcIic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXBDb2x1bW4gPSBjb2x1bW4ucmVwbGFjZUFsbCgnXCInLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlcENvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gd2lzaFJvd3NfMVswXVtyZXBDb2x1bW5dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXNwb25zZSksIChfYSA9IHt9LCBfYVtyZXBDb2x1bW5dID0gdmFsdWUsIF9hKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicG9zdENvbmZpcm1TY2hlbWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhcnRpY2lwYW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXS5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc18xICYmIGNvbHVtbiBpbiByZXNfMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXNwb25zZSksIChfYSA9IHt9LCBfYVtjb2x1bW5dID0gcmVzXzFbY29sdW1uXSwgX2EpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfOCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfODtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUuaW5zZXJ0QW5zd2VyID0gZnVuY3Rpb24gKGFuc3dlciwgaWQsIHdpc2hJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGdyb3VwUm93cywgYW5zd2VycywgX2EsIF9iLCBrZXksIF9jLCBfZCwgc2NoZW1hLCByZXBLZXksIHZhbHVlLCBpbnNlcnRBbnN3ZXJSb3dzLCBlXzlfMSwgZV8xMF8xLCB1c2VyUm93cywgZ3JvdXBOYW1lLCBqb2luVXNlclJvd3MsIGNyZWF0b3JVc2VyUm93cywgY3JlYXRvck5hbWUsIGNyZWF0b3JNYWlsLCB0aXRsZSwgam9pblVzZXJOYW1lLCBqb2luVXNlck1haWxfMSwgdG8sIGRlc2NyaXB0aW9uLCBhbnN3ZXJzXzEsIGFuc3dlcnNfMV8xLCBhbnN3ZXJfMSwgc2NoZW1hUm93cywgaXNEYXRlLCBlXzExXzEsIGh0bWwsIGVfMTI7XG4gICAgICAgICAgICB2YXIgZV8xMCwgX2UsIGVfOSwgX2YsIGVfMTEsIF9nO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfaCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2gubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcInN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkJFR0lOXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2guc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2gubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC50cnlzLnB1c2goWzIsIDMyLCAsIDM0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc2cuaWQsIHNnLlxcXCJncm91cE5hbWVcXFwiIEZST00gcHVibGljLnNoaXRhaV93aXNoIGFzIHN3IElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cCBhcyBzZyBPTiBzdy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBJTk5FUiBKT0lOIHB1YmxpYy5zaGl0YWlfZ3JvdXBfam9pbiBhcyBzamcgT04gc2pnLlxcXCJncm91cElkXFxcIiA9IHNnLmlkIEFORCBzamcuXFxcInVzZXJJZFxcXCIgPSAkMSBXSEVSRSBzdy5pZCA9ICQyO1wiLCBbaWQsIHdpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBSb3dzID0gKF9oLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncm91cFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuaoqemZkOOBjOOBguOCiuOBvuOBm+OCk+OAguOCsOODq+ODvOODl+WkluOBruODpuODvOOCtuODvOOBp+OBmeOAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLnRyeXMucHVzaChbNCwgMTUsIDE2LCAxN10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBfX3ZhbHVlcyhPYmplY3Qua2V5cyhhbnN3ZXIpKSwgX2IgPSBfYS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC5sYWJlbCA9IDU7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIV9iLmRvbmUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDE0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IF9iLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2gubGFiZWwgPSA2O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC50cnlzLnB1c2goWzYsIDExLCAxMiwgMTNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jID0gKGVfOSA9IHZvaWQgMCwgX192YWx1ZXMoT2JqZWN0LmtleXMoYW5zd2VyW2tleV0pKSksIF9kID0gX2MubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2gubGFiZWwgPSA3O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFfZC5kb25lKSByZXR1cm4gWzMgLypicmVhayovLCAxMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEgPSBfZC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcEtleSA9IGtleS5yZXBsYWNlKFwiQW5zd2Vyc1wiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYW5zd2VyW2tleV1bc2NoZW1hXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUgfHwgdmFsdWUgPT0gXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIklOU0VSVCBJTlRPIHB1YmxpYy5zaGl0YWlfYW5zd2VyIChcXFwidXNlcklkXFxcIiwgXFxcInNjaGVtYUlkXFxcIiwgXFxcInZhbHVlXFxcIikgU0VMRUNUICQxLCBzcy5pZCwgJDIgRlJPTSBwdWJsaWMuc2hpdGFpX3NjaGVtYSBhcyBzcyBXSEVSRSBzcy5cXFwic2NoZW1hVHlwZVxcXCIgPSAkMyBBTkQgc3MuXFxcInR5cGVcXFwiID0gJDQgQU5EIHNzLlxcXCJ3aXNoSWRcXFwiID0gJDUgTElNSVQgMSBSRVRVUk5JTkcgaWQsIFxcXCJzY2hlbWFJZFxcXCIsIFxcXCJ2YWx1ZVxcXCJcIiwgW2lkLCB2YWx1ZSwgcmVwS2V5LCBzY2hlbWEsIHdpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0QW5zd2VyUm93cyA9IChfaC5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0QW5zd2VyUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44Ki44Oz44K144O844Gu55m76Yyy44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hSWQ6IGluc2VydEFuc3dlclJvd3NbMF1bXCJzY2hlbWFJZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaW5zZXJ0QW5zd2VyUm93c1swXVtcInZhbHVlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC5sYWJlbCA9IDk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kID0gX2MubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6IHJldHVybiBbMyAvKmJyZWFrKi8sIDEzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfOV8xID0gX2guc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZV85ID0geyBlcnJvcjogZV85XzEgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDEzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9kICYmICFfZC5kb25lICYmIChfZiA9IF9jLnJldHVybikpIF9mLmNhbGwoX2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzkpIHRocm93IGVfOS5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gX2EubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTQ6IHJldHVybiBbMyAvKmJyZWFrKi8sIDE3XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTBfMSA9IF9oLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTAgPSB7IGVycm9yOiBlXzEwXzEgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDE3XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9iICYmICFfYi5kb25lICYmIChfZSA9IF9hLnJldHVybikpIF9lLmNhbGwoX2EpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEwKSB0aHJvdyBlXzEwLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE3OiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc3VpLnVzZXJfaWQgQXMgbWFpbFxcbiAgICAgICAgRlJPTSBzaGl0YWlfam9pbiBhcyBzaiBJTk5FUiBKT0lOIHNoaXRhaV91c2VyX2luZm8gYXMgc3VpIE9OIHN1aS5pZCA9IHNqLlxcXCJ1c2VySWRcXFwiIFdIRVJFIHNqLlxcXCJ3aXNoSWRcXFwiID0gJDE7XCIsIFt3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyUm93cyA9IChfaC5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlclJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuaXouWtmOWPguWKoOiAheaDheWgseOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cE5hbWUgPSBncm91cFJvd3NbMF1bXCJncm91cE5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc3VpLnVzZXJfbmFtZSBBcyBuYW1lLCBzdWkudXNlcl9pZCBBcyBtYWlsXFxuICAgICAgICBGUk9NIHNoaXRhaV91c2VyX2luZm8gYXMgc3VpIFdIRVJFIHN1aS5cXFwiaWRcXFwiID0gJDE7XCIsIFtpZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5Vc2VyUm93cyA9IChfaC5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlclJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuWPguWKoOiAheaDheWgseOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc3VpLnVzZXJfbmFtZSBBcyBuYW1lLCBzdWkudXNlcl9pZCBBcyBtYWlsLCBzdy50aXRsZVxcbiAgICAgICAgRlJPTSBzaGl0YWlfd2lzaCBhcyBzdyBJTk5FUiBKT0lOIHNoaXRhaV91c2VyX2luZm8gYXMgc3VpIE9OIHN3LlxcXCJjcmVhdG9ySWRcXFwiID0gc3VpLlxcXCJpZFxcXCIgV0hFUkUgc3cuaWQgPSAkMTtcIiwgW3dpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JVc2VyUm93cyA9IChfaC5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3JlYXRvclVzZXJSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLkvZzmiJDogIXmg4XloLHjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvck5hbWUgPSBjcmVhdG9yVXNlclJvd3NbMF1bXCJuYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvck1haWwgPSBjcmVhdG9yVXNlclJvd3NbMF1bXCJtYWlsXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSBjcmVhdG9yVXNlclJvd3NbMF1bXCJ0aXRsZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJSb3dzLnB1c2goeyBtYWlsOiBjcmVhdG9yTWFpbCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5Vc2VyTmFtZSA9IGpvaW5Vc2VyUm93c1swXVtcIm5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luVXNlck1haWxfMSA9IGpvaW5Vc2VyUm93c1swXVtcIm1haWxcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICB0byA9IHVzZXJSb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocm93KSB7IHJldHVybiByb3dbXCJtYWlsXCJdOyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKG1haWwpIHsgcmV0dXJuIG1haWwgIT0gam9pblVzZXJNYWlsXzE7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2gubGFiZWwgPSAyMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLnRyeXMucHVzaChbMjEsIDI2LCAyNywgMjhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcnNfMSA9IF9fdmFsdWVzKGFuc3dlcnMpLCBhbnN3ZXJzXzFfMSA9IGFuc3dlcnNfMS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC5sYWJlbCA9IDIyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhYW5zd2Vyc18xXzEuZG9uZSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMjVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyXzEgPSBhbnN3ZXJzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzcy5cXFwic2NoZW1hVHlwZVxcXCIsIHNzLlxcXCJ0eXBlXFxcIiwgc3MuXFxcInJlcXVpcmVkXFxcIiwgc3MuXFxcImxhYmVsXFxcIlxcbiAgICAgICAgRlJPTSBzaGl0YWlfc2NoZW1hIGFzIHNzIFdIRVJFIHNzLmlkID0gJDE7XCIsIFthbnN3ZXJfMS5zY2hlbWFJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVJvd3MgPSAoX2guc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjaGVtYVJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOCueOCreODvOODnuOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0RhdGUgPSBzY2hlbWFSb3dzWzBdW1widHlwZVwiXSA9PSBcImRhdGV0aW1lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjx0cj48dGQ+XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiLmNvbmNhdChzY2hlbWFSb3dzWzBdW1wibGFiZWxcIl0sIFwiPC90ZD48dGQ+XCIpLmNvbmNhdChpc0RhdGUgPyBmb3JtYXREaXNwbGF5RGF0ZShhbnN3ZXJfMS52YWx1ZSkgOiBhbnN3ZXJfMS52YWx1ZSwgXCI8L3RkPjwvdGQ+XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2gubGFiZWwgPSAyNDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcnNfMV8xID0gYW5zd2Vyc18xLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDIyXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyNTogcmV0dXJuIFszIC8qYnJlYWsqLywgMjhdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI2OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xMV8xID0gX2guc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZV8xMSA9IHsgZXJyb3I6IGVfMTFfMSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMjhdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5zd2Vyc18xXzEgJiYgIWFuc3dlcnNfMV8xLmRvbmUgJiYgKF9nID0gYW5zd2Vyc18xLnJldHVybikpIF9nLmNhbGwoYW5zd2Vyc18xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xMSkgdGhyb3cgZV8xMS5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgPSBcIlxcbjwhZG9jdHlwZSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImphXFxcIj5cXG48aGVhZD5cXG4gIDxtZXRhIGNoYXJzZXQ9XFxcInV0Zi04XFxcIiAvPlxcbiAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcXFwiIC8+XFxuICA8dGl0bGU+XFx1NTNDMlxcdTUyQTBcXHU4MDA1XFx1MzA2RVxcdTUxNjVcXHU1MjlCXFx1OTAxQVxcdTc3RTU8L3RpdGxlPlxcbiAgPHN0eWxlPlxcbiAgICBib2R5IHsgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIkhpcmFnaW5vIEtha3UgR290aGljIFByb05cXFwiLCBcXFwiWXUgR290aGljXFxcIiwgXFxcIk5vdG8gU2FucyBKUFxcXCIsIEFyaWFsLCBzYW5zLXNlcmlmOyBtYXJnaW46MDsgcGFkZGluZzowOyBiYWNrZ3JvdW5kOiNmNmY4ZmI7IGNvbG9yOiMxMTE7IH1cXG4gICAgLmNvbnRhaW5lciB7IG1heC13aWR0aDo2MDBweDsgbWFyZ2luOjI4cHggYXV0bzsgYmFja2dyb3VuZDojZmZmOyBib3JkZXItcmFkaXVzOjhweDsgb3ZlcmZsb3c6aGlkZGVuOyBib3gtc2hhZG93OjAgNnB4IDI0cHggcmdiYSgyMCwzMCw2MCwwLjA4KTsgfVxcbiAgICAuaGVhZGVyIHsgcGFkZGluZzoyMHB4OyBiYWNrZ3JvdW5kOiM3YzNhZWQ7IGNvbG9yOiNmZmY7IH1cXG4gICAgLmNvbnRlbnQgeyBwYWRkaW5nOjIwcHg7IH1cXG4gICAgLnRpdGxlIHsgZm9udC1zaXplOjE4cHg7IG1hcmdpbjowIDAgOHB4IDA7IH1cXG4gICAgLm1ldGEgeyBmb250LXNpemU6MTNweDsgY29sb3I6IzZiNzI4MDsgbWFyZ2luLWJvdHRvbToxMnB4OyB9XFxuICAgIC5mb3JtIHsgYmFja2dyb3VuZDojZjdmOWZjOyBwYWRkaW5nOjE0cHg7IGJvcmRlci1yYWRpdXM6NnB4OyBtYXJnaW4tYm90dG9tOjE2cHg7IH1cXG4gICAgLmJ0biB7IGRpc3BsYXk6aW5saW5lLWJsb2NrOyBwYWRkaW5nOjEycHggMThweDsgYm9yZGVyLXJhZGl1czo4cHg7IHRleHQtZGVjb3JhdGlvbjpub25lOyBmb250LXdlaWdodDo2MDA7IH1cXG4gICAgLmJ0bi1wcmltYXJ5IHsgYmFja2dyb3VuZDojN2MzYWVkOyBjb2xvcjojZmZmOyB9XFxuICAgIC5mb290ZXIgeyBmb250LXNpemU6MTJweDsgY29sb3I6IzlhYTBhYjsgcGFkZGluZzoxOHB4OyB0ZXh0LWFsaWduOmNlbnRlcjsgfVxcbiAgICB0YWJsZSB7IHdpZHRoOjEwMCU7IGJvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTsgfVxcbiAgICB0ZCB7IHBhZGRpbmc6OHB4IDA7IHZlcnRpY2FsLWFsaWduOnRvcDsgfVxcbiAgICAua2V5IHsgZm9udC13ZWlnaHQ6NzAwOyBjb2xvcjojMTExOyB3aWR0aDozNiU7IH1cXG4gICAgLnZhbCB7IGNvbG9yOiMyMjI7IH1cXG4gIDwvc3R5bGU+XFxuPC9oZWFkPlxcbjxib2R5PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIiByb2xlPVxcXCJhcnRpY2xlXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICA8aDEgc3R5bGU9XFxcImZvbnQtc2l6ZToyMHB4O21hcmdpbjowXFxcIj5TSElUQUk8L2gxPlxcbiAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46NnB4IDAgMCAwO2ZvbnQtc2l6ZToxM3B4O29wYWNpdHk6MC45NVxcXCI+XFx1NTNDMlxcdTUyQTBcXHU4MDA1XFx1MzA0Q1xcdTc4QkFcXHU4QThEXFx1OTgwNVxcdTc2RUVcXHUzMDkyXFx1NTE2NVxcdTUyOUJcXHUzMDU3XFx1MzA3RVxcdTMwNTdcXHUzMDVGPC9wPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcInRpdGxlXFxcIj5cXHVEODNEXFx1REM2NSBcIi5jb25jYXQoam9pblVzZXJOYW1lLCBcIiBcXHUzMDU1XFx1MzA5M1xcdTMwNENcXHU1M0MyXFx1NTJBMFxcdTMwRkJcXHU3OEJBXFx1OEE4RFxcdTMwNTdcXHUzMDdFXFx1MzA1N1xcdTMwNUYgXFx1MjAxNCBcIikuY29uY2F0KHRpdGxlLCBcIjwvcD5cXG4gICAgICA8cCBjbGFzcz1cXFwibWV0YVxcXCI+PHNwYW4gc3R5bGU9XFxcImZvbnQtd2VpZ2h0OjcwMFxcXCI+XFx1MzBCMFxcdTMwRUJcXHUzMEZDXFx1MzBEN1xcdUZGMUE8L3NwYW4+IFwiKS5jb25jYXQoZ3JvdXBOYW1lLCBcIiA8L3A+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybVxcXCI+XFxuICAgICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjAgMCAxMnB4IDA7XFxcIj48c3Ryb25nPlxcdTUxNjVcXHU1MjlCXFx1MzA1NVxcdTMwOENcXHUzMDVGXFx1NzhCQVxcdThBOERcXHU5ODA1XFx1NzZFRTwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDx0YWJsZT5cXG4gICAgICBcIikuY29uY2F0KGRlc2NyaXB0aW9uLCBcIlxcbiAgICAgIDwvdGFibGU+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPHAgc3R5bGU9XFxcIm1hcmdpbjowIDAgMThweCAwO1xcXCI+XFx1NTNDMlxcdTUyQTBcXHU4MDA1XFx1NjBDNVxcdTU4MzFcXHUzMDZFXFx1NjcwMFxcdTY1QjBcXHU3MkI2XFx1NkNDMVxcdTMwNkZcXHU0RTBCXFx1MzA2RVxcdTMwRUFcXHUzMEYzXFx1MzBBRlxcdTMwNjdcXHU3OEJBXFx1OEE4RFxcdTMwNjdcXHUzMDREXFx1MzA3RVxcdTMwNTlcXHUzMDAyPC9wPlxcbiAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGhyZWY9XFxcIlwiKS5jb25jYXQocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZST05URU5EX1VSTCArIFwiL1wiICsgXCJ3aXNoXCIgKyBcIi9cIiArIHdpc2hJZCwgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiByZWw9XFxcIm5vb3BlbmVyXFxcIj5cXHU1M0MyXFx1NTJBMFxcdTgwMDVcXHU2MEM1XFx1NTgzMVxcdTMwOTJcXHU3OEJBXFx1OEE4RFxcdTMwNTlcXHUzMDhCPC9hPlxcblxcbiAgICAgIDxociBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VlZjJmNzttYXJnaW46MThweCAwO1xcXCIgLz5cXG4gICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjA7Zm9udC1zaXplOjEzcHg7Y29sb3I6IzU1NjA3MDtcXFwiPlxcbiAgICAgICAgXFx1NUZDNVxcdTg5ODFcXHUzMDY3XFx1MzA0MlxcdTMwOENcXHUzMDcwXFx1NEUzQlxcdTUwQUNcXHU4MDA1XFx1MzA4NFxcdTRFRDZcXHUzMDZFXFx1NTNDMlxcdTUyQTBcXHU4MDA1XFx1MzA3OFxcdTkwMjNcXHU3RDYxXFx1MzA5MlxcdTUzRDZcXHUzMDhBXFx1MzA3RVxcdTMwNTdcXHUzMDg3XFx1MzA0NlxcdTMwMDJcXG4gICAgICA8L3A+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcbiAgICAgIFxcdTMwNTNcXHUzMDZFXFx1MzBFMVxcdTMwRkNcXHUzMEVCXFx1MzA2RlxcdTgxRUFcXHU1MkQ1XFx1OTE0RFxcdTRGRTFcXHUzMDY3XFx1MzA1OVxcdTMwMDJcXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2JvZHk+XFxuPC9odG1sPlxcblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRvLmxlbmd0aCAhPSAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zZW5kRW1haWwodG8sIFwiXFx1MzAxMFNISVRBSVxcdTMwMTFcXHU1M0MyXFx1NTJBMFxcdTgwMDVcXHUzMDRDXFx1NTE2NVxcdTUyOUJcXHUzMDU3XFx1MzA3RVxcdTMwNTdcXHUzMDVGIFxcdTIwMTQgXCIuY29uY2F0KHRpdGxlLCBcIlxcdUZGMDhcIikuY29uY2F0KGpvaW5Vc2VyTmFtZSwgXCJcXHVGRjA5XCIpLCBodG1sKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC5sYWJlbCA9IDMwO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDMwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJDT01NSVRcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDMxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2guc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMzRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xMiA9IF9oLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlJPTExCQUNLXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfMTI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzQ6IHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUudXBkYXRlV2lzaCA9IGZ1bmN0aW9uICh3aXNoLCBpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGdyb3VwUm93cywgd2lzaElkLCB1cGRhdGVXaXNoXzEsIHVybFBhdHRlcm4sIGlzVXJsLCBpbWFnZURhdGFfMSwgX2EsIHVwZGF0ZVJvd3MsIHVzZXJSb3dzLCBncm91cE5hbWUsIGpvaW5Vc2VyUm93cywgY3JlYXRvclVzZXJSb3dzLCBjcmVhdG9yTmFtZSwgY3JlYXRvck1haWxfMiwgdGl0bGUsIHRvLCBkZXNjcmlwdGlvbiwgaHRtbCwgZV8xMztcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwic3VjY2Vzc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQkVHSU5cIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMiwgMTQsICwgMTZdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzZy5pZCwgc2cuXFxcImdyb3VwTmFtZVxcXCIgRlJPTSBwdWJsaWMuc2hpdGFpX3dpc2ggYXMgc3cgSU5ORVIgSk9JTiBwdWJsaWMuc2hpdGFpX2dyb3VwIGFzIHNnIE9OIHN3LlxcXCJncm91cElkXFxcIiA9IHNnLmlkIElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cF9qb2luIGFzIHNqZyBPTiBzamcuXFxcImdyb3VwSWRcXFwiID0gc2cuaWQgQU5EIHNqZy5cXFwidXNlcklkXFxcIiA9ICQxIFdIRVJFIHN3LmlkID0gJDI7XCIsIFtpZCwgd2lzaC5pZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBSb3dzID0gKF9iLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncm91cFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuaoqemZkOOBjOOBguOCiuOBvuOBm+OCk+OAguOCsOODq+ODvOODl+WkluOBruODpuODvOOCtuODvOOBp+OBmeOAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB3aXNoSWQgPSB3aXNoLmlkLCB1cGRhdGVXaXNoXzEgPSBfX3Jlc3Qod2lzaCwgW1wiaWRcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsUGF0dGVybiA9IC9eKGh0dHBzP3xmdHApKDpcXC9cXC9bXFx3XFwvOiUjXFwkJlxcP1xcKFxcKX5cXC49XFwrXFwtXSspLztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVXJsID0gdXJsUGF0dGVybi50ZXN0KHVwZGF0ZVdpc2hfMS5pbWFnZURhdGEgfHwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVXJsKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gdXBkYXRlV2lzaF8xLmltYWdlRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMudXBsb2FkSW1hZ2VEYXRhKHVwZGF0ZVdpc2hfMS5pbWFnZURhdGEgfHwgXCJcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhXzEgPSBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlVQREFURSBwdWJsaWMuc2hpdGFpX3dpc2ggU0VUIFwiLmNvbmNhdChPYmplY3Qua2V5cyh1cGRhdGVXaXNoXzEpLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBpc1VybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHVwZGF0ZVdpc2hfMVtjdXJyZW50XSA9PSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiTlVMTFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGN1cnJlbnQgPT0gXCJpbWFnZURhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaW1hZ2VEYXRhXzFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIidcIiArIGltYWdlRGF0YV8xICsgXCInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIk5VTExcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCInXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVXaXNoXzFbY3VycmVudF0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIidcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0ciA9IFwiXFxcIlwiLmNvbmNhdChjdXJyZW50LCBcIlxcXCJcIikgKyBcIiA9IFwiICsgXCJcIi5jb25jYXQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgc3RyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXYgIT09IFwiXCIgPyBwcmV2ICsgXCIsIFwiICsgc3RyIDogc3RyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIFwiXCIpLCBcIiBXSEVSRSBpZCA9ICQxIFJFVFVSTklORyBpZDtcIiksIFt3aXNoLmlkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVSb3dzID0gKF9iLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgZfjgZ/jgYTjgZPjgajjga7mm7TmlrDjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHN1aS51c2VyX2lkIEFzIG1haWxcXG4gICAgICAgIEZST00gc2hpdGFpX2pvaW4gYXMgc2ogSU5ORVIgSk9JTiBzaGl0YWlfdXNlcl9pbmZvIGFzIHN1aSBPTiBzdWkuaWQgPSBzai5cXFwidXNlcklkXFxcIiBXSEVSRSBzai5cXFwid2lzaElkXFxcIiA9ICQxO1wiLCBbd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyUm93cyA9IChfYi5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlclJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuaXouWtmOWPguWKoOiAheaDheWgseOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cE5hbWUgPSBncm91cFJvd3NbMF1bXCJncm91cE5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc3VpLnVzZXJfbmFtZSBBcyBuYW1lLCBzdWkudXNlcl9pZCBBcyBtYWlsXFxuICAgICAgICBGUk9NIHNoaXRhaV91c2VyX2luZm8gYXMgc3VpIFdIRVJFIHN1aS5cXFwiaWRcXFwiID0gJDE7XCIsIFtpZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgam9pblVzZXJSb3dzID0gKF9iLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5Y+C5Yqg6ICF5oOF5aCx44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzdWkudXNlcl9uYW1lIEFzIG5hbWUsIHN1aS51c2VyX2lkIEFzIG1haWwsIHN3LnRpdGxlXFxuICAgICAgICBGUk9NIHNoaXRhaV93aXNoIGFzIHN3IElOTkVSIEpPSU4gc2hpdGFpX3VzZXJfaW5mbyBhcyBzdWkgT04gc3cuXFxcImNyZWF0b3JJZFxcXCIgPSBzdWkuXFxcImlkXFxcIiBXSEVSRSBzdy5pZCA9ICQxO1wiLCBbd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvclVzZXJSb3dzID0gKF9iLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjcmVhdG9yVXNlclJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuS9nOaIkOiAheaDheWgseOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9yTmFtZSA9IGNyZWF0b3JVc2VyUm93c1swXVtcIm5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9yTWFpbF8yID0gY3JlYXRvclVzZXJSb3dzWzBdW1wibWFpbFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlID0gY3JlYXRvclVzZXJSb3dzWzBdW1widGl0bGVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyUm93cy5wdXNoKHsgbWFpbDogY3JlYXRvck1haWxfMiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvID0gdXNlclJvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyb3cpIHsgcmV0dXJuIHJvd1tcIm1haWxcIl07IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobWFpbCkgeyByZXR1cm4gbWFpbCAhPSBjcmVhdG9yTWFpbF8yOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gT2JqZWN0LmtleXMod2lzaCkucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9iaiA9IF90aGlzLmNvbHVtbk5hbWVzLmZpbmQoZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqLmNvbHVtbiA9PSBjdXJyZW50OyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNEYXRlID0gX3RoaXMuZGF0ZUNvbHVtbnMuc29tZShmdW5jdGlvbiAoZHRDb2wpIHsgcmV0dXJuIGR0Q29sID09IGN1cnJlbnQ7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2x1bW4gPSBjdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwcmV2ICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPHRyPjx0ZD5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiLmNvbmNhdChvYmoubmFtZSwgXCI8L3RkPjx0ZD5cIikuY29uY2F0KGlzRGF0ZSA/IGZvcm1hdERpc3BsYXlEYXRlKHdpc2hbY29sdW1uXSkgOiB3aXNoW2NvbHVtbl0sIFwiPC90ZD48L3RyPlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sID0gXCJcXG48IWRvY3R5cGUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJqYVxcXCI+XFxuPGhlYWQ+XFxuICA8bWV0YSBjaGFyc2V0PVxcXCJ1dGYtOFxcXCIgLz5cXG4gIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXFxcIiAvPlxcbiAgPHRpdGxlPlxcdTMwNTdcXHUzMDVGXFx1MzA0NFxcdTY2RjRcXHU2NUIwXFx1OTAxQVxcdTc3RTU8L3RpdGxlPlxcbiAgPHN0eWxlPlxcbiAgICBib2R5IHsgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIkhpcmFnaW5vIEtha3UgR290aGljIFByb05cXFwiLCBcXFwiWXUgR290aGljXFxcIiwgXFxcIk5vdG8gU2FucyBKUFxcXCIsIEFyaWFsLCBzYW5zLXNlcmlmOyBtYXJnaW46MDsgcGFkZGluZzowOyBiYWNrZ3JvdW5kOiNmNmY4ZmI7IGNvbG9yOiMxMTE7IH1cXG4gICAgLmNvbnRhaW5lciB7IG1heC13aWR0aDo2MDBweDsgbWFyZ2luOjI4cHggYXV0bzsgYmFja2dyb3VuZDojZmZmOyBib3JkZXItcmFkaXVzOjhweDsgb3ZlcmZsb3c6aGlkZGVuOyBib3gtc2hhZG93OjAgNnB4IDI0cHggcmdiYSgyMCwzMCw2MCwwLjA4KTsgfVxcbiAgICAuaGVhZGVyIHsgcGFkZGluZzoyMHB4OyBiYWNrZ3JvdW5kOiMwZjc2NmU7IGNvbG9yOiNmZmY7IH1cXG4gICAgLmNvbnRlbnQgeyBwYWRkaW5nOjIwcHg7IH1cXG4gICAgLnRpdGxlIHsgZm9udC1zaXplOjE4cHg7IG1hcmdpbjowIDAgOHB4IDA7IH1cXG4gICAgLm1ldGEgeyBmb250LXNpemU6MTNweDsgY29sb3I6IzZiNzI4MDsgbWFyZ2luLWJvdHRvbToxMnB4OyB9XFxuICAgIC5jaGFuZ2VzIHsgYmFja2dyb3VuZDojZmZmOGU2OyBwYWRkaW5nOjEycHg7IGJvcmRlci1yYWRpdXM6NnB4OyBib3JkZXI6MXB4IHNvbGlkICNmMWU2Yzg7IG1hcmdpbi1ib3R0b206MTZweDsgfVxcbiAgICAuYnRuIHsgZGlzcGxheTppbmxpbmUtYmxvY2s7IHBhZGRpbmc6MTJweCAxOHB4OyBib3JkZXItcmFkaXVzOjhweDsgdGV4dC1kZWNvcmF0aW9uOm5vbmU7IGZvbnQtd2VpZ2h0OjYwMDsgfVxcbiAgICAuYnRuLXByaW1hcnkgeyBiYWNrZ3JvdW5kOiMwZjc2NmU7IGNvbG9yOiNmZmY7IH1cXG4gICAgLmZvb3RlciB7IGZvbnQtc2l6ZToxMnB4OyBjb2xvcjojOWFhMGFiOyBwYWRkaW5nOjE4cHg7IHRleHQtYWxpZ246Y2VudGVyOyB9XFxuICA8L3N0eWxlPlxcbjwvaGVhZD5cXG48Ym9keT5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCIgcm9sZT1cXFwiYXJ0aWNsZVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgICAgPGgxIHN0eWxlPVxcXCJmb250LXNpemU6MjBweDttYXJnaW46MFxcXCI+U0hJVEFJPC9oMT5cXG4gICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjZweCAwIDAgMDtmb250LXNpemU6MTNweDtvcGFjaXR5OjAuOTVcXFwiPlxcdTMwMENcXHUzMDU3XFx1MzA1RlxcdTMwNDRcXHUzMDBEXFx1MzA2RVxcdTY2RjRcXHU2NUIwXFx1MzA0Q1xcdTMwNDJcXHUzMDhBXFx1MzA3RVxcdTMwNTdcXHUzMDVGPC9wPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcInRpdGxlXFxcIj5cXHUyNzBGXFx1RkUwRiBcXHU2NkY0XFx1NjVCMFxcdUZGMUFcIi5jb25jYXQodGl0bGUsIFwiPC9wPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJtZXRhXFxcIj48c3BhbiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6NzAwXFxcIj5cXHU2NkY0XFx1NjVCMFxcdTgwMDVcXHVGRjFBPC9zcGFuPiBcIikuY29uY2F0KGNyZWF0b3JOYW1lLCBcIiA8L3A+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2hhbmdlc1xcXCI+XFxuICAgICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjAgMCA4cHggMDtcXFwiPjxzdHJvbmc+XFx1NTkwOVxcdTY2RjRcXHUzMDU1XFx1MzA4Q1xcdTMwNUZcXHU5ODA1XFx1NzZFRTwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDxwcmUgc3R5bGU9XFxcIm1hcmdpbjowO1xcXCI+PHRhYmxlPlwiKS5jb25jYXQoZGVzY3JpcHRpb24sIFwiPC90YWJsZT48L3ByZT5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjAgMCAxOHB4IDA7XFxcIj5cXHU1OTA5XFx1NjZGNFxcdTMwNkVcXHU4QTczXFx1N0QzMFxcdTMwNkZcXHU0RTBCXFx1MzA2RVxcdTMwRUFcXHUzMEYzXFx1MzBBRlxcdTMwNEJcXHUzMDg5XFx1MzA1NFxcdTc4QkFcXHU4QThEXFx1MzA0RlxcdTMwNjBcXHUzMDU1XFx1MzA0NFxcdTMwMDI8L3A+XFxuICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgaHJlZj1cXFwiXCIpLmNvbmNhdChwcm9jZXNzLmVudi5SRUFDVF9BUFBfRlJPTlRFTkRfVVJMICsgXCIvXCIgKyBcIndpc2hcIiArIFwiL1wiICsgd2lzaElkLCBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHJlbD1cXFwibm9vcGVuZXJcXFwiPlxcdTY2RjRcXHU2NUIwXFx1NTE4NVxcdTVCQjlcXHUzMDkyXFx1NzhCQVxcdThBOERcXHUzMDU5XFx1MzA4QjwvYT5cXG5cXG4gICAgICA8aHIgc3R5bGU9XFxcImJvcmRlcjpub25lO2JvcmRlci10b3A6MXB4IHNvbGlkICNlZWYyZjc7bWFyZ2luOjE4cHggMDtcXFwiIC8+XFxuICAgICAgPHAgc3R5bGU9XFxcIm1hcmdpbjowO2ZvbnQtc2l6ZToxM3B4O2NvbG9yOiM1NTYwNzA7XFxcIj5cXG4gICAgICAgIFxcdTUzQzJcXHU1MkEwXFx1NEU4OFxcdTVCOUFcXHUzMDZFXFx1NjVCOVxcdTMwNkZcXHU0RTg4XFx1NUI5QVxcdTMwODRcXHU1MTY1XFx1NTI5QlxcdTUxODVcXHU1QkI5XFx1MzA2QlxcdTVGNzFcXHU5N0ZGXFx1MzA0Q1xcdTMwNkFcXHUzMDQ0XFx1MzA0QlxcdTMwNTRcXHU3OEJBXFx1OEE4RFxcdTMwNEZcXHUzMDYwXFx1MzA1NVxcdTMwNDRcXHUzMDAyXFxuICAgICAgPC9wPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXG4gICAgICBcXHUzMDUzXFx1MzA2RVxcdTMwRTFcXHUzMEZDXFx1MzBFQlxcdTMwNkYgU0hJVEFJIFxcdTMwNEJcXHUzMDg5XFx1MzA2RVxcdTgxRUFcXHU1MkQ1XFx1OTAxQVxcdTc3RTVcXHUzMDY3XFx1MzA1OVxcdTMwMDJcXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2JvZHk+XFxuPC9odG1sPlxcblxcblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRvLmxlbmd0aCAhPSAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMTJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zZW5kRW1haWwodG8sIFwiXFx1MzAxMFNISVRBSVxcdTMwMTFcXHUzMDBDXFx1MzA1N1xcdTMwNUZcXHUzMDQ0XFx1MzAwRFxcdTMwNENcXHU2NkY0XFx1NjVCMFxcdTMwNTVcXHUzMDhDXFx1MzA3RVxcdTMwNTdcXHUzMDVGIFxcdTIwMTQgXCIuY29uY2F0KHRpdGxlKSwgaHRtbCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQ09NTUlUXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDE2XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTMgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJST0xMQkFDS1wiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzEzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE2OiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5lb25BcGkucHJvdG90eXBlLmdldFdpc2hlcyA9IGZ1bmN0aW9uIChncm91cElkLCBpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGdyb3VwUm93cywgd2lzaFJvd3MsIF9sb29wXzEsIHRoaXNfMSwgd2lzaFJvd3NfMiwgd2lzaFJvd3NfMl8xLCB3aXNoLCBlXzE0O1xuICAgICAgICAgICAgdmFyIGVfMTUsIF9hO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFsxLCA0LCAsIDVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzZy5pZCBGUk9NIHB1YmxpYy5zaGl0YWlfZ3JvdXAgYXMgc2cgSU5ORVIgSk9JTiBwdWJsaWMuc2hpdGFpX2dyb3VwX2pvaW4gYXMgc2pnIE9OIHNqZy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBBTkQgc2pnLlxcXCJ1c2VySWRcXFwiID0gJDEgV0hFUkUgc2cuXFxcImlkXFxcIiA9ICQyO1wiLCBbaWQsIGdyb3VwSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwUm93cyA9IChfYi5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLmqKnpmZDjgYzjgYLjgorjgb7jgZvjgpPjgILjgrDjg6vjg7zjg5flpJbjga7jg6bjg7zjgrbjg7zjgafjgZnjgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiV0lUSCB3aXNoIEFTXFxuICAgICAgICAgIChTRUxFQ1QgaWQsIFwiLmNvbmNhdCh0aGlzLmNvbHVtbnMuam9pbihcIixcIiksIFwiXFxuICAgICAgICAgIEZST00gcHVibGljLnNoaXRhaV93aXNoXFxuICAgICAgICAgIFdIRVJFIFxcXCJncm91cElkXFxcIiA9ICQxXFxuICAgICAgICAgIE9SREVSIEJZIGlkIEFTQyksXFxuICAgICAgICBhbnN3ZXJzIEFTXFxuICAgICAgICAgIChTRUxFQ1QgXFxcIndpc2hJZFxcXCIsXFxuICAgICAgICAgICAgICAgICAganNvbl9hZ2codG9fanNvbmIoanNvbl9idWlsZF9vYmplY3QoJ2pvaW5lZEF0JywgXFxcImpvaW5lZEF0XFxcIiwgJ3VzZXJJZCcsIFxcXCJ1c2VySWRcXFwiKSkgfHwgdG9fanNvbmIoYW5zd2VyKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgXFxcImpvaW5lZEF0XFxcIiBBU0MpIEFTIHBhcnRpY2lwYW50c1xcbiAgICAgICAgICBGUk9NXFxuICAgICAgICAgICAgKFNFTEVDVCBcXFwid2lzaElkXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJqb2luZWRBdFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidXNlcklkXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIGpzb25fb2JqZWN0X2FnZyhcXFwic2NoZW1hVHlwZVxcXCIgfHwgJ0Fuc3dlcnMnLCBhbnN3ZXIpIEFTIGFuc3dlclxcbiAgICAgICAgICAgICAgRlJPTVxcbiAgICAgICAgICAgICAgICAoU0VMRUNUIHNqLlxcXCJ3aXNoSWRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNqLlxcXCJqb2luZWRBdFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc2ouXFxcInVzZXJJZFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3MuXFxcInNjaGVtYVR5cGVcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGpzb25fb2JqZWN0X2FnZyhzcy50eXBlLCBzYS52YWx1ZSkgQVMgYW5zd2VyXFxuICAgICAgICAgICAgICAgIEZST00gc2hpdGFpX2pvaW4gQVMgc2pcXG4gICAgICAgICAgICAgICAgTEVGVCBKT0lOIHNoaXRhaV9zY2hlbWEgQVMgc3MgT04gc3MuXFxcIndpc2hJZFxcXCIgPSBzai5cXFwid2lzaElkXFxcIlxcbiAgICAgICAgICAgICAgICBMRUZUIEpPSU4gcHVibGljLnNoaXRhaV9hbnN3ZXIgQVMgc2EgT04gc2EuXFxcInNjaGVtYUlkXFxcIiA9IHNzLmlkXFxuICAgICAgICAgICAgICAgIEFORCBzcy5cXFwid2lzaElkXFxcIiA9IHNqLlxcXCJ3aXNoSWRcXFwiXFxuICAgICAgICAgICAgICAgIEFORCBzYS5cXFwidXNlcklkXFxcIiA9IHNqLlxcXCJ1c2VySWRcXFwiXFxuICAgICAgICAgICAgICAgIFdIRVJFIEVYSVNUU1xcbiAgICAgICAgICAgICAgICAgICAgKFNFTEVDVCBpZFxcbiAgICAgICAgICAgICAgICAgICAgICBGUk9NIHdpc2hcXG4gICAgICAgICAgICAgICAgICAgICAgV0hFUkUgaWQgPSBzai5cXFwid2lzaElkXFxcIilcXG4gICAgICAgICAgICAgICAgR1JPVVAgQlkgc2ouXFxcIndpc2hJZFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzai5cXFwiam9pbmVkQXRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2ouXFxcInVzZXJJZFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcy5cXFwic2NoZW1hVHlwZVxcXCIpXFxuICAgICAgICAgICAgICBHUk9VUCBCWSBcXFwid2lzaElkXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgXFxcImpvaW5lZEF0XFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgXFxcInVzZXJJZFxcXCIpXFxuICAgICAgICAgIEdST1VQIEJZIFxcXCJ3aXNoSWRcXFwiKSxcXG4gICAgICAgIFNDSEVNQSBBU1xcbiAgICAgICAgICAoU0VMRUNUIFxcXCJ3aXNoSWRcXFwiLFxcbiAgICAgICAgICAgICAgICAgIHQuc2NoZW1hLT4ncGFydGljaXBhdGlvbicgQVMgcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWEsXFxuICAgICAgICAgICAgICAgICAgdC5zY2hlbWEtPidwb3N0JyBBUyBwb3N0Q29uZmlybVNjaGVtYVxcbiAgICAgICAgICBGUk9NXFxuICAgICAgICAgICAgKFNFTEVDVCBcXFwid2lzaElkXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIGpzb25iX29iamVjdF9hZ2coXFxcInNjaGVtYVR5cGVcXFwiLCBTQ0hFTUEpIEFTIFNDSEVNQVxcbiAgICAgICAgICAgICAgRlJPTVxcbiAgICAgICAgICAgICAgICAoU0VMRUNUIHNzLlxcXCJ3aXNoSWRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzLlxcXCJzY2hlbWFUeXBlXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBqc29uX2FnZyhqc29uX2J1aWxkX29iamVjdCgndHlwZScsIENBU0VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdIRU4gc3MuXFxcInNjaGVtYVR5cGVcXFwiID0gJ3BhcnRpY2lwYXRpb24nIFRIRU4gc3cuXFxcInBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hVHlwZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVMU0Ugc3cuXFxcInBvc3RDb25maXJtU2NoZW1hVHlwZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU5ELCBzcy5cXFwidHlwZVxcXCIgfHwgJ0xhYmVsJywgc3MuXFxcImxhYmVsXFxcIiwgc3MuXFxcInR5cGVcXFwiIHx8ICdSZXF1aXJlZCcsIHNzLlxcXCJyZXF1aXJlZFxcXCIpKSBBUyBTQ0hFTUFcXG4gICAgICAgICAgICAgICAgRlJPTSBwdWJsaWMuc2hpdGFpX3dpc2ggQVMgc3dcXG4gICAgICAgICAgICAgICAgSU5ORVIgSk9JTiBzaGl0YWlfc2NoZW1hIEFTIHNzIE9OIHNzLlxcXCJ3aXNoSWRcXFwiID0gc3cuaWRcXG4gICAgICAgICAgICAgICAgV0hFUkUgRVhJU1RTXFxuICAgICAgICAgICAgICAgICAgICAoU0VMRUNUIGlkXFxuICAgICAgICAgICAgICAgICAgICAgIEZST00gd2lzaFxcbiAgICAgICAgICAgICAgICAgICAgICBXSEVSRSBpZCA9IHN3LmlkKVxcbiAgICAgICAgICAgICAgICBHUk9VUCBCWSBzcy5cXFwid2lzaElkXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNzLlxcXCJzY2hlbWFUeXBlXFxcIilcXG4gICAgICAgICAgICAgIEdST1VQIEJZIFxcXCJ3aXNoSWRcXFwiKSB0KVxcbiAgICAgICAgU0VMRUNUIHdpc2guKixcXG4gICAgICAgICAgICAgIHNjaGVtYS5wYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYSBBUyBcXFwicGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFcXFwiLFxcbiAgICAgICAgICAgICAgc2NoZW1hLnBvc3RDb25maXJtU2NoZW1hIEFTIFxcXCJwb3N0Q29uZmlybVNjaGVtYVxcXCIsXFxuICAgICAgICAgICAgICBhbnN3ZXJzLnBhcnRpY2lwYW50c1xcbiAgICAgICAgRlJPTSB3aXNoXFxuICAgICAgICBJTk5FUiBKT0lOIFNDSEVNQSBPTiBzY2hlbWEuXFxcIndpc2hJZFxcXCIgPSB3aXNoLmlkXFxuICAgICAgICBMRUZUIEpPSU4gYW5zd2VycyBPTiBzY2hlbWEuXFxcIndpc2hJZFxcXCIgPSBhbnN3ZXJzLlxcXCJ3aXNoSWRcXFwiXFxuICAgICAgICBPUkRFUiBCWSBpZCBBU0M7XCIpLCBbZ3JvdXBJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lzaFJvd3MgPSAoX2Iuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpc2hSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgZfjgZ/jgYTjgZPjgajjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2xvb3BfMSA9IGZ1bmN0aW9uICh3aXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc1dpc2ggPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB3aXNoLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cElkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9ySWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUGFydGljaXBhbnRzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25MYWJlbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWE6IHsgdHlwZTogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdENvbmZpcm1TY2hlbWE6IHsgdHlwZTogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXduOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh3aXNoW1wiaWRcIl0sIHdpc2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuY3JlYXRlUmVzcG9uc2VEYXRhKHdpc2guaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHRDb2x1bW5zID0gdGhpc18xLmNvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbCAhPT0gJ1wicGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFUeXBlXCInICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgIT09ICdcInBvc3RDb25maXJtU2NoZW1hVHlwZVwiJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXBDb2x1bW4gPSBjb2x1bW4ucmVwbGFjZUFsbCgnXCInLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXBDb2x1bW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB3aXNoW3JlcENvbHVtbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzV2lzaCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXNXaXNoKSwgKF9hID0ge30sIF9hW3JlcENvbHVtbl0gPSB2YWx1ZSwgX2EpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBvc3RDb25maXJtU2NoZW1hXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFydGljaXBhbnRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2lzaCAmJiBjb2x1bW4gaW4gd2lzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpc2hbY29sdW1uXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc1dpc2ggPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVzV2lzaCksIChfYSA9IHt9LCBfYVtjb2x1bW5dID0gd2lzaFtjb2x1bW5dLCBfYSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucHVzaChyZXNXaXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzXzEgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHdpc2hSb3dzXzIgPSBfX3ZhbHVlcyh3aXNoUm93cyksIHdpc2hSb3dzXzJfMSA9IHdpc2hSb3dzXzIubmV4dCgpOyAhd2lzaFJvd3NfMl8xLmRvbmU7IHdpc2hSb3dzXzJfMSA9IHdpc2hSb3dzXzIubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpc2ggPSB3aXNoUm93c18yXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9sb29wXzEod2lzaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVfMTVfMSkgeyBlXzE1ID0geyBlcnJvcjogZV8xNV8xIH07IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aXNoUm93c18yXzEgJiYgIXdpc2hSb3dzXzJfMS5kb25lICYmIChfYSA9IHdpc2hSb3dzXzIucmV0dXJuKSkgX2EuY2FsbCh3aXNoUm93c18yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzE1KSB0aHJvdyBlXzE1LmVycm9yOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzE0ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZV8xNDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUuZ2V0R3JvdXBzID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgam9pbkdyb3VwUm93cywgam9pbkdyb3VwUm93c18xLCBqb2luR3JvdXBSb3dzXzFfMSwgZ3JvdXAsIGdyb3VwT2JqLCBqb2luTWVtYmVyUm93cywgZV8xNl8xLCBlXzE3O1xuICAgICAgICAgICAgdmFyIGVfMTYsIF9hO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFsxLCAxMSwgLCAxMl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHNnLmlkLCBzZy5cXFwiZ3JvdXBOYW1lXFxcIlxcbiAgICAgICAgRlJPTSBwdWJsaWMuc2hpdGFpX2dyb3VwX2pvaW4gYXMgc2dqIElOTkVSIEpPSU4gc2hpdGFpX2dyb3VwIGFzIHNnIE9OIHNnLmlkID0gc2dqLlxcXCJncm91cElkXFxcIiBXSEVSRSBzZ2ouXFxcInVzZXJJZFxcXCIgPSAkMSBPUkRFUiBCWSBzZy5pZCBBU0M7XCIsIFtpZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgam9pbkdyb3VwUm93cyA9IChfYi5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoam9pbkdyb3VwUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5Y+C5Yqg44Kw44Or44O844OX44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFszLCA4LCA5LCAxMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgam9pbkdyb3VwUm93c18xID0gX192YWx1ZXMoam9pbkdyb3VwUm93cyksIGpvaW5Hcm91cFJvd3NfMV8xID0gam9pbkdyb3VwUm93c18xLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEham9pbkdyb3VwUm93c18xXzEuZG9uZSkgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cCA9IGpvaW5Hcm91cFJvd3NfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBPYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGdyb3VwW1wiaWRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZ3JvdXBbXCJncm91cE5hbWVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVyczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIERJU1RJTkNUIHN1aS5pZCwgc3VpLnVzZXJfbmFtZSwgc3VpLnVzZXJfaWRcXG4gICAgICAgIEZST00gcHVibGljLnNoaXRhaV9ncm91cF9qb2luIGFzIHNnaiBJTk5FUiBKT0lOIHNoaXRhaV91c2VyX2luZm8gYXMgc3VpIE9OIHN1aS5pZCA9IHNnai5cXFwidXNlcklkXFxcIiBXSEVSRSBzZ2ouXFxcImdyb3VwSWRcXFwiID0gJDE7XCIsIFtncm91cFtcImlkXCJdXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luTWVtYmVyUm93cyA9IChfYi5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoam9pbk1lbWJlclJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuODoeODs+ODkOODvOaDheWgseOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cE9iai5tZW1iZXJzID0gam9pbk1lbWJlclJvd3MubWFwKGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbWVtYmVyW1wiaWRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG1lbWJlcltcInVzZXJfbmFtZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IG1lbWJlcltcInVzZXJfaWRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucHVzaChncm91cE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5Hcm91cFJvd3NfMV8xID0gam9pbkdyb3VwUm93c18xLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6IHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xNl8xID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZV8xNiA9IHsgZXJyb3I6IGVfMTZfMSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqb2luR3JvdXBSb3dzXzFfMSAmJiAham9pbkdyb3VwUm93c18xXzEuZG9uZSAmJiAoX2EgPSBqb2luR3JvdXBSb3dzXzEucmV0dXJuKSkgX2EuY2FsbChqb2luR3JvdXBSb3dzXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzE2KSB0aHJvdyBlXzE2LmVycm9yOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xNyA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfMTc7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS5pbnNlcnRHcm91cCA9IGZ1bmN0aW9uIChpZCwgZ3JvdXApIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBpbnNlcnRSb3dzLCBpbnNlcnRKb2luUm93cywgZV8xODtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0geyBpZDogXCJcIiB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQkVHSU5cIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMiwgNiwgLCA4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJJTlNFUlQgSU5UTyBzaGl0YWlfZ3JvdXAgKFxcXCJncm91cE5hbWVcXFwiKVxcbiAgICAgICAgICBWQUxVRVMoJDEpIFJFVFVSTklORyBpZDtcIiwgW2dyb3VwLm5hbWVdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFJvd3MgPSAoX2Euc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc2VydFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOCsOODq+ODvOODl+eZu+mMsuOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJJTlNFUlQgSU5UTyBzaGl0YWlfZ3JvdXBfam9pbiAoXFxcImdyb3VwSWRcXFwiLCBcXFwidXNlcklkXFxcIilcXG4gICAgICAgICAgVkFMVUVTKCQxLCAkMikgUkVUVVJOSU5HIGlkO1wiLCBbaW5zZXJ0Um93c1swXVtcImlkXCJdLCBpZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0Sm9pblJvd3MgPSAoX2Euc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc2VydEpvaW5Sb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgrDjg6vjg7zjg5flj4LliqDnmbvpjLLjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQ09NTUlUXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuaWQgPSBpbnNlcnRSb3dzWzBdW1wiaWRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xOCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlJPTExCQUNLXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZV8xODtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5lb25BcGkucHJvdG90eXBlLmludml0YXRpb25Hcm91cCA9IGZ1bmN0aW9uIChpZF8xLCBfYSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiAoaWQsIF9iKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGdyb3VwUm93cywgdXNlclJvd3MsIG5ld0dyb3VwUm93cywgaW5zZXJ0Um93cywgZV8xOTtcbiAgICAgICAgICAgIHZhciBpbnZpdGF0aW9uVXNlcklkID0gX2IuaW52aXRhdGlvblVzZXJJZCwgZ3JvdXBJZCA9IF9iLmdyb3VwSWQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwic3VjY2Vzc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQkVHSU5cIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbMiwgOCwgLCAxMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHNqZy5pZCBGUk9NIHB1YmxpYy5zaGl0YWlfZ3JvdXBfam9pbiBhcyBzamcgV0hFUkUgc2pnLlxcXCJncm91cElkXFxcIiA9ICQyIEFORCBzamcuXFxcInVzZXJJZFxcXCIgPSAkMTtcIiwgW2lkLCBncm91cElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFJvd3MgPSAoX2Muc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5qip6ZmQ44GM44GC44KK44G+44Gb44KT44CC44Kw44Or44O844OX5aSW44Gu44Om44O844K244O844Gn44GZ44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBpZCBGUk9NIHNoaXRhaV91c2VyX2luZm8gV0hFUkUgdXNlcl9pZCA9ICQxXCIsIFtpbnZpdGF0aW9uVXNlcklkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyUm93cyA9IChfYy5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlclJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuODpuODvOOCtuODvOaDheWgseWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1QgaWQgRlJPTSBzaGl0YWlfZ3JvdXBfam9pbiBXSEVSRSBcXFwidXNlcklkXFxcIiA9ICQxIEFORCBcXFwiZ3JvdXBJZFxcXCIgPSAkMlwiLCBbdXNlclJvd3NbMF1bXCJpZFwiXSwgZ3JvdXBJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3R3JvdXBSb3dzID0gKF9jLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdHcm91cFJvd3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOBmeOBp+OBq+WPguWKoOOBl+OBpuOBhOOCi+OCsOODq+ODvOODl+OBp+OBmeOAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJJTlNFUlQgSU5UTyBzaGl0YWlfZ3JvdXBfam9pbiAoXFxcImdyb3VwSWRcXFwiLCBcXFwidXNlcklkXFxcIikgVkFMVUVTICgkMSwgJDIpIFJFVFVSTklORyBpZDtcIiwgW2dyb3VwSWQsIHVzZXJSb3dzWzBdW1wiaWRcIl1dKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFJvd3MgPSAoX2Muc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc2VydFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOCsOODq+ODvOODl+OCuOODp+OCpOODs+eZu+mMsuOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJDT01NSVRcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxMF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTkgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJST0xMQkFDS1wiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfMTk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6IHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUuam9pbldpc2ggPSBmdW5jdGlvbiAoaWRfMSwgX2EpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24gKGlkLCBfYikge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBncm91cFJvd3MsIHdpc2hSb3dzLCBqb2luV2lzaFJvd3MsIHVzZXJSb3dzLCBncm91cE5hbWUsIGpvaW5Vc2VyUm93cywgY3JlYXRvclVzZXJSb3dzLCBjcmVhdG9yTmFtZSwgY3JlYXRvck1haWwsIHRpdGxlLCBqb2luVXNlck5hbWUsIGpvaW5Vc2VyTWFpbF8yLCB0bywgaHRtbCwgZV8yMDtcbiAgICAgICAgICAgIHZhciB3aXNoSWQgPSBfYi53aXNoSWQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwic3VjY2Vzc1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQkVHSU5cIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbMiwgMTIsICwgMTRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzZy5pZCwgc2cuXFxcImdyb3VwTmFtZVxcXCIgRlJPTSBwdWJsaWMuc2hpdGFpX3dpc2ggYXMgc3cgSU5ORVIgSk9JTiBwdWJsaWMuc2hpdGFpX2dyb3VwIGFzIHNnIE9OIHN3LlxcXCJncm91cElkXFxcIiA9IHNnLmlkIElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cF9qb2luIGFzIHNqZyBPTiBzamcuXFxcImdyb3VwSWRcXFwiID0gc2cuaWQgQU5EIHNqZy5cXFwidXNlcklkXFxcIiA9ICQxIFdIRVJFIHN3LmlkID0gJDI7XCIsIFtpZCwgd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFJvd3MgPSAoX2Muc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5qip6ZmQ44GM44GC44KK44G+44Gb44KT44CC44Kw44Or44O844OX5aSW44Gu44Om44O844K244O844Gn44GZ44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBpZCBGUk9NIHNoaXRhaV9qb2luIFdIRVJFIFxcXCJ1c2VySWRcXFwiID0gJDEgQU5EIFxcXCJ3aXNoSWRcXFwiID0gJDI7XCIsIFtpZCwgd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB3aXNoUm93cyA9IChfYy5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2lzaFJvd3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOBmeOBp+OBq+OBl+OBn+OBhOOBk+OBqOOBq+WPguWKoOa4iOOBv+OBp+OBmeOAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJJTlNFUlQgSU5UTyBzaGl0YWlfam9pbiAoXFxcInVzZXJJZFxcXCIsIFxcXCJqb2luZWRBdFxcXCIsIFxcXCJ3aXNoSWRcXFwiKSBWQUxVRVMgKCQxLCBOT1coKSwgJDIpIFJFVFVSTklORyBpZFwiLCBbaWQsIHdpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgam9pbldpc2hSb3dzID0gKF9jLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqb2luV2lzaFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOBl+OBn+OBhOOBk+OBqOWPguWKoOeZu+mMsuOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc3VpLnVzZXJfaWQgQXMgbWFpbFxcbiAgICAgICAgRlJPTSBzaGl0YWlfam9pbiBhcyBzaiBJTk5FUiBKT0lOIHNoaXRhaV91c2VyX2luZm8gYXMgc3VpIE9OIHN1aS5pZCA9IHNqLlxcXCJ1c2VySWRcXFwiIFdIRVJFIHNqLlxcXCJ3aXNoSWRcXFwiID0gJDE7XCIsIFt3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJSb3dzID0gKF9jLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5pei5a2Y5Y+C5Yqg6ICF5oOF5aCx44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwTmFtZSA9IGdyb3VwUm93c1swXVtcImdyb3VwTmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzdWkudXNlcl9uYW1lIEFzIG5hbWUsIHN1aS51c2VyX2lkIEFzIG1haWxcXG4gICAgICAgIEZST00gc2hpdGFpX3VzZXJfaW5mbyBhcyBzdWkgV0hFUkUgc3VpLlxcXCJpZFxcXCIgPSAkMTtcIiwgW2lkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luVXNlclJvd3MgPSAoX2Muc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLlj4LliqDogIXmg4XloLHjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHN1aS51c2VyX25hbWUgQXMgbmFtZSwgc3VpLnVzZXJfaWQgQXMgbWFpbCwgc3cudGl0bGVcXG4gICAgICAgIEZST00gc2hpdGFpX3dpc2ggYXMgc3cgSU5ORVIgSk9JTiBzaGl0YWlfdXNlcl9pbmZvIGFzIHN1aSBPTiBzdy5cXFwiY3JlYXRvcklkXFxcIiA9IHN1aS5cXFwiaWRcXFwiIFdIRVJFIHN3LmlkID0gJDE7XCIsIFt3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JVc2VyUm93cyA9IChfYy5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3JlYXRvclVzZXJSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLkvZzmiJDogIXmg4XloLHjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvck5hbWUgPSBjcmVhdG9yVXNlclJvd3NbMF1bXCJuYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvck1haWwgPSBjcmVhdG9yVXNlclJvd3NbMF1bXCJtYWlsXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSBjcmVhdG9yVXNlclJvd3NbMF1bXCJ0aXRsZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJSb3dzLnB1c2goeyBtYWlsOiBjcmVhdG9yTWFpbCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5Vc2VyTmFtZSA9IGpvaW5Vc2VyUm93c1swXVtcIm5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luVXNlck1haWxfMiA9IGpvaW5Vc2VyUm93c1swXVtcIm1haWxcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICB0byA9IHVzZXJSb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocm93KSB7IHJldHVybiByb3dbXCJtYWlsXCJdOyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKG1haWwpIHsgcmV0dXJuIG1haWwgIT0gam9pblVzZXJNYWlsXzI7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCA9IFwiXFxuPCFkb2N0eXBlIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiamFcXFwiPlxcbjxoZWFkPlxcbiAgPG1ldGEgY2hhcnNldD1cXFwidXRmLThcXFwiIC8+XFxuICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVxcXCIgLz5cXG4gIDx0aXRsZT5cXHU2NUIwXFx1MzA1RlxcdTMwNkFcXHU1M0MyXFx1NTJBMFxcdTgwMDVcXHUzMEU2XFx1MzBGQ1xcdTMwQjZcXHUzMEZDXFx1MzA2RVxcdTkwMUFcXHU3N0U1PC90aXRsZT5cXG4gIDxzdHlsZT5cXG4gICAgYm9keSB7IGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJIaXJhZ2lubyBLYWt1IEdvdGhpYyBQcm9OXFxcIiwgXFxcIll1IEdvdGhpY1xcXCIsIFxcXCJOb3RvIFNhbnMgSlBcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjsgbWFyZ2luOjA7IHBhZGRpbmc6MDsgYmFja2dyb3VuZDojZjZmOGZiOyBjb2xvcjojMTExOyB9XFxuICAgIC5jb250YWluZXIgeyBtYXgtd2lkdGg6NjAwcHg7IG1hcmdpbjoyOHB4IGF1dG87IGJhY2tncm91bmQ6I2ZmZjsgYm9yZGVyLXJhZGl1czo4cHg7IG92ZXJmbG93OmhpZGRlbjsgYm94LXNoYWRvdzowIDZweCAyNHB4IHJnYmEoMjAsMzAsNjAsMC4wOCk7IH1cXG4gICAgLmhlYWRlciB7IHBhZGRpbmc6MjBweDsgYmFja2dyb3VuZDojN2MzYWVkOyBjb2xvcjojZmZmOyB9XFxuICAgIC5jb250ZW50IHsgcGFkZGluZzoyMHB4OyB9XFxuICAgIC50aXRsZSB7IGZvbnQtc2l6ZToxOHB4OyBtYXJnaW46MCAwIDhweCAwOyB9XFxuICAgIC5tZXRhIHsgZm9udC1zaXplOjEzcHg7IGNvbG9yOiM2YjcyODA7IG1hcmdpbi1ib3R0b206MTJweDsgfVxcbiAgICAuZm9ybSB7IGJhY2tncm91bmQ6I2Y3ZjlmYzsgcGFkZGluZzoxNHB4OyBib3JkZXItcmFkaXVzOjZweDsgbWFyZ2luLWJvdHRvbToxNnB4OyB9XFxuICAgIC5idG4geyBkaXNwbGF5OmlubGluZS1ibG9jazsgcGFkZGluZzoxMnB4IDE4cHg7IGJvcmRlci1yYWRpdXM6OHB4OyB0ZXh0LWRlY29yYXRpb246bm9uZTsgZm9udC13ZWlnaHQ6NjAwOyB9XFxuICAgIC5idG4tcHJpbWFyeSB7IGJhY2tncm91bmQ6IzdjM2FlZDsgY29sb3I6I2ZmZjsgfVxcbiAgICAuZm9vdGVyIHsgZm9udC1zaXplOjEycHg7IGNvbG9yOiM5YWEwYWI7IHBhZGRpbmc6MThweDsgdGV4dC1hbGlnbjpjZW50ZXI7IH1cXG4gICAgdGFibGUgeyB3aWR0aDoxMDAlOyBib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7IH1cXG4gICAgdGQgeyBwYWRkaW5nOjhweCAwOyB2ZXJ0aWNhbC1hbGlnbjp0b3A7IH1cXG4gICAgLmtleSB7IGZvbnQtd2VpZ2h0OjcwMDsgY29sb3I6IzExMTsgd2lkdGg6MzYlOyB9XFxuICAgIC52YWwgeyBjb2xvcjojMjIyOyB9XFxuICA8L3N0eWxlPlxcbjwvaGVhZD5cXG48Ym9keT5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCIgcm9sZT1cXFwiYXJ0aWNsZVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgICAgPGgxIHN0eWxlPVxcXCJmb250LXNpemU6MjBweDttYXJnaW46MFxcXCI+U0hJVEFJPC9oMT5cXG4gICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjZweCAwIDAgMDtmb250LXNpemU6MTNweDtvcGFjaXR5OjAuOTVcXFwiPlxcdTMwRTZcXHUzMEZDXFx1MzBCNlxcdTMwRkNcXHUzMDRDXFx1NTNDMlxcdTUyQTBcXHUzMDU3XFx1MzA3RVxcdTMwNTdcXHUzMDVGXFx1MzAwMjwvcD5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFx1RDgzRFxcdURDNjUgXCIuY29uY2F0KGpvaW5Vc2VyTmFtZSwgXCIgXFx1MzA1NVxcdTMwOTNcXHUzMDRDXFx1NTNDMlxcdTUyQTBcXHUzMDU3XFx1MzA3RVxcdTMwNTdcXHUzMDVGIFxcdTIwMTQgXCIpLmNvbmNhdCh0aXRsZSwgXCI8L3A+XFxuICAgICAgPHAgY2xhc3M9XFxcIm1ldGFcXFwiPjxzcGFuIHN0eWxlPVxcXCJmb250LXdlaWdodDo3MDBcXFwiPlxcdTMwQjBcXHUzMEVCXFx1MzBGQ1xcdTMwRDdcXHVGRjFBPC9zcGFuPiBcIikuY29uY2F0KGdyb3VwTmFtZSwgXCIgPC9wPlxcblxcbiAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46MCAwIDE4cHggMDtcXFwiPlxcdTUzQzJcXHU1MkEwXFx1ODAwNVxcdTYwQzVcXHU1ODMxXFx1MzA2RVxcdTY3MDBcXHU2NUIwXFx1NzJCNlxcdTZDQzFcXHUzMDZGXFx1NEUwQlxcdTMwNkVcXHUzMEVBXFx1MzBGM1xcdTMwQUZcXHUzMDY3XFx1NzhCQVxcdThBOERcXHUzMDY3XFx1MzA0RFxcdTMwN0VcXHUzMDU5XFx1MzAwMjwvcD5cXG4gICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBocmVmPVxcXCJcIikuY29uY2F0KHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GUk9OVEVORF9VUkwgKyBcIi9cIiArIFwid2lzaFwiICsgXCIvXCIgKyB3aXNoSWQsIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub29wZW5lclxcXCI+XFx1NTNDMlxcdTUyQTBcXHU4MDA1XFx1NjBDNVxcdTU4MzFcXHUzMDkyXFx1NzhCQVxcdThBOERcXHUzMDU5XFx1MzA4QjwvYT5cXG5cXG4gICAgICA8aHIgc3R5bGU9XFxcImJvcmRlcjpub25lO2JvcmRlci10b3A6MXB4IHNvbGlkICNlZWYyZjc7bWFyZ2luOjE4cHggMDtcXFwiIC8+XFxuICAgICAgPHAgc3R5bGU9XFxcIm1hcmdpbjowO2ZvbnQtc2l6ZToxM3B4O2NvbG9yOiM1NTYwNzA7XFxcIj5cXG4gICAgICAgIFxcdTVGQzVcXHU4OTgxXFx1MzA2N1xcdTMwNDJcXHUzMDhDXFx1MzA3MFxcdTRFM0JcXHU1MEFDXFx1ODAwNVxcdTMwODRcXHU0RUQ2XFx1MzA2RVxcdTUzQzJcXHU1MkEwXFx1ODAwNVxcdTMwNzhcXHU5MDIzXFx1N0Q2MVxcdTMwOTJcXHU1M0Q2XFx1MzA4QVxcdTMwN0VcXHUzMDU3XFx1MzA4N1xcdTMwNDZcXHUzMDAyXFxuICAgICAgPC9wPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXG4gICAgICBcXHUzMDUzXFx1MzA2RVxcdTMwRTFcXHUzMEZDXFx1MzBFQlxcdTMwNkZcXHU4MUVBXFx1NTJENVxcdTkxNERcXHU0RkUxXFx1MzA2N1xcdTMwNTlcXHUzMDAyXFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9ib2R5PlxcbjwvaHRtbD5cXG5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0by5sZW5ndGggIT0gMCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc2VuZEVtYWlsKHRvLCBcIlxcdTMwMTBTSElUQUlcXHUzMDExXFx1MzBFNlxcdTMwRkNcXHUzMEI2XFx1MzBGQ1xcdTMwNENcXHU1M0MyXFx1NTJBMFxcdTMwNTdcXHUzMDdFXFx1MzA1N1xcdTMwNUYgXFx1MjAxNCBcIi5jb25jYXQodGl0bGUsIFwiXFx1RkYwOFwiKS5jb25jYXQoam9pblVzZXJOYW1lLCBcIlxcdUZGMDlcIiksIGh0bWwpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAxMDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQ09NTUlUXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDE0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMjAgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJST0xMQkFDS1wiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzIwO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE0OiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBOZW9uQXBpO1xufSgpKTtcbmV4cG9ydCB7IE5lb25BcGkgfTtcbiIsImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB1dGMgZnJvbSBcImRheWpzL3BsdWdpbi91dGNcIjtcbmltcG9ydCB0aW1lem9uZSBmcm9tIFwiZGF5anMvcGx1Z2luL3RpbWV6b25lXCI7XG5kYXlqcy5leHRlbmQodXRjKTtcbmRheWpzLmV4dGVuZCh0aW1lem9uZSk7XG5kYXlqcy50ei5zZXREZWZhdWx0KFwiQXNpYS9Ub2t5b1wiKTtcbmV4cG9ydCB2YXIgZm9ybWF0RGF0ZSA9IGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB2b2lkIDApIHsgZm9ybWF0ID0gXCJZWVlZL01NL0REXCI7IH1cbiAgICByZXR1cm4gZGF5anMoZGF0ZSkudXRjKCkuZm9ybWF0KGZvcm1hdCk7XG59O1xuZXhwb3J0IHZhciBmb3JtYXREaXNwbGF5RGF0ZSA9IGZ1bmN0aW9uIChkYXRlLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB2b2lkIDApIHsgZm9ybWF0ID0gXCJZWVlZL01NL0REIEhIOm1tXCI7IH1cbiAgICByZXR1cm4gZGF5anMoZGF0ZSkudXRjKCkuZm9ybWF0KGZvcm1hdCk7XG59O1xuZXhwb3J0IHZhciBmb3JtYXREYXRlVGltZSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGRheWpzKGRhdGUpLnV0YygpLmZvcm1hdChcIllZWVktTU0tRERUSEg6bW1cIik7XG59O1xuZXhwb3J0IHZhciBnZXRUaW1lUmVtYWluaW5nID0gZnVuY3Rpb24gKGRlYWRsaW5lKSB7XG4gICAgdmFyIG5vdyA9IGRheWpzKCk7XG4gICAgdmFyIHRhcmdldCA9IGRheWpzKGRlYWRsaW5lKTtcbiAgICB2YXIgZGlmZiA9IHRhcmdldC5kaWZmKG5vdyk7XG4gICAgaWYgKGRpZmYgPCAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXlzOiAwLFxuICAgICAgICAgICAgaG91cnM6IDAsXG4gICAgICAgICAgICBtaW51dGVzOiAwLFxuICAgICAgICAgICAgc2Vjb25kczogMCxcbiAgICAgICAgICAgIGV4cGlyZWQ6IHRydWUsXG4gICAgICAgICAgICB0ZXh0OiBcIuacn+mZkOWIh+OCjFwiLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB2YXIgZGF5cyA9IE1hdGguZmxvb3IoZGlmZiAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcigoZGlmZiAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICB2YXIgbWludXRlcyA9IE1hdGguZmxvb3IoKGRpZmYgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKGRpZmYgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcbiAgICB2YXIgdGV4dCA9IFwiXCI7XG4gICAgaWYgKGRheXMgPiAwKSB7XG4gICAgICAgIHRleHQgPSBcIlxcdTZCOEJcXHUzMDhBIFwiLmNvbmNhdChkYXlzLCBcIlxcdTY1RTUgXCIpLmNvbmNhdChob3VycywgXCJcXHU2NjQyXFx1OTU5M1wiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaG91cnMgPiAwKSB7XG4gICAgICAgIHRleHQgPSBcIlxcdTZCOEJcXHUzMDhBIFwiLmNvbmNhdChob3VycywgXCJcXHU2NjQyXFx1OTU5MyBcIikuY29uY2F0KG1pbnV0ZXMsIFwiXFx1NTIwNlwiKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobWludXRlcyA+IDApIHtcbiAgICAgICAgdGV4dCA9IFwiXFx1NkI4QlxcdTMwOEEgXCIuY29uY2F0KG1pbnV0ZXMsIFwiXFx1NTIwNlwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRleHQgPSBcIlxcdTZCOEJcXHUzMDhBIFwiLmNvbmNhdChzZWNvbmRzLCBcIlxcdTc5RDJcIik7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGRheXM6IGRheXMsXG4gICAgICAgIGhvdXJzOiBob3VycyxcbiAgICAgICAgbWludXRlczogbWludXRlcyxcbiAgICAgICAgc2Vjb25kczogc2Vjb25kcyxcbiAgICAgICAgZXhwaXJlZDogZmFsc2UsXG4gICAgICAgIHRleHQ6IHRleHQsXG4gICAgfTtcbn07XG5leHBvcnQgdmFyIGlzRGF0ZUluUGFzdCA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGRheWpzKGRhdGUpLnR6KCkuaXNCZWZvcmUoZGF5anMoKSk7XG59O1xuZXhwb3J0IHZhciBhZGREYXlzID0gZnVuY3Rpb24gKGRhdGUsIGRheXMpIHtcbiAgICByZXR1cm4gZGF5anMoZGF0ZSkudHooKS5hZGQoZGF5cywgXCJkYXlcIikudG9JU09TdHJpbmcoKTtcbn07XG5leHBvcnQgdmFyIGFkZEhvdXJzID0gZnVuY3Rpb24gKGRhdGUsIGhvdXJzKSB7XG4gICAgcmV0dXJuIGRheWpzKGRhdGUpLnR6KCkuYWRkKGhvdXJzLCBcImhvdXJcIikudG9JU09TdHJpbmcoKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZ29vZ2xlLWNsb3VkL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF5anNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3RpbWV6b25lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi91dGNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlc2VuZFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnID0gT2JqZWN0LmNyZWF0ZSgodHlwZW9mIEl0ZXJhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBJdGVyYXRvciA6IE9iamVjdCkucHJvdG90eXBlKTtcbiAgICByZXR1cm4gZy5uZXh0ID0gdmVyYigwKSwgZ1tcInRocm93XCJdID0gdmVyYigxKSwgZ1tcInJldHVyblwiXSA9IHZlcmIoMiksIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGNvcnMgZnJvbSBcImNvcnNcIjtcbmltcG9ydCB7IE5lb25BcGkgfSBmcm9tIFwiLi9OZW9uQXBpXCI7XG5yZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZygpO1xudmFyIGFwcCA9IGV4cHJlc3MoKTtcbnZhciBuZW9uQXBpID0gbmV3IE5lb25BcGkoKTtcbi8vIENPUlPjga7oqK3lrppcbnZhciBjb3JzT3B0aW9ucyA9IHtcbiAgICBvcmlnaW46IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GUk9OVEVORF9VUkwsIC8vIOODleODreODs+ODiOOCqOODs+ODieOBrlVSTOOCkueSsOWig+WkieaVsOOBi+OCieWPluW+l1xuICAgIG1ldGhvZDogW10sXG59O1xuLy8g44Ki44Kv44K744K544OI44O844Kv44Oz6KqN6Ki8KOODqeODg+ODkeODvOmWouaVsClcbnZhciBpbml0QWNjZXNzVG9rZW5BdXRoID0gZnVuY3Rpb24gKHVzZXJJbmZvKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQsIGlzRXhwaXJlZCwgaXNTdWNjZXNzO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLmFjY2Vzc1Rva2VuQXV0aCh1c2VySW5mbyldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIGlzRXhwaXJlZCA9IHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIgJiYgcmVzdWx0ID09PSBcImV4cGlyZWQgYWNjZXNzIHRva2VuXCI7XG4gICAgICAgICAgICAgICAgaXNTdWNjZXNzID0gdHlwZW9mIHJlc3VsdCAhPT0gXCJzdHJpbmdcIiAmJiBOdW1iZXIocmVzdWx0LmlkKSA+IDAgJiYgIWlzRXhwaXJlZDtcbiAgICAgICAgICAgICAgICBpZiAoaXNFeHBpcmVkKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6IFwi44Ki44Kv44K744K544OI44O844Kv44Oz44GM5pyJ5Yq55pyf6ZmQ5YiH44KM44Gn44GZ44CCXCIgfTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzU3VjY2VzcylcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBcIuOCouOCr+OCu+OCueODiOODvOOCr+ODs+OBruiqjeiovOOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3VsdF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9O1xuLy8gQ09SU+ioreWumuOBqEpTT07jg5Hjg7zjgrXjg7zjgpLjg5/jg4njg6vjgqbjgqfjgqLjgajjgZfjgabpgannlKhcbmFwcC51c2UoY29ycyhjb3JzT3B0aW9ucykpO1xuYXBwLnVzZShleHByZXNzLmpzb24oeyBsaW1pdDogXCIxMG1iXCIgfSkpO1xuLy8g44Ot44Kw44Kk44Oz6KqN6Ki844KS6KGM44GGKOaIkOWKn+aZguOCouOCr+OCu+OCueODiOODvOOCr+ODs+OCkui/lOWNtOOBmeOCiylcbmFwcC5wb3N0KFwiL2FwaS92MS9hdXRoL2xvZ2luXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0LCBlcnJvcl8xO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5sb2dpbkF1dGgocmVxLmJvZHkpXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBlcnJvcl8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzEubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvYXV0aC9hY2Nlc3NUb2tlblwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVzZXJJbmZvLCBfYSwgaWQsIG5hbWVfMSwgZW1haWwsIGVycm9yXzI7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcbiAgICAgICAgICAgICAgICB1c2VySW5mbyA9IHJlcS5ib2R5LnVzZXJJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRBY2Nlc3NUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBfYSA9IF9iLnNlbnQoKSwgaWQgPSBfYS5pZCwgbmFtZV8xID0gX2EubmFtZSwgZW1haWwgPSBfYS5lbWFpbDtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiB7IGlkOiBOdW1iZXIoaWQpLCBuYW1lOiBuYW1lXzEsIGVtYWlsOiBlbWFpbCB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBlcnJvcl8yID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzIubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvYXV0aC9yZWZyZXNoVG9rZW5cIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB1c2VySW5mbywgcmVzcG9uc2VfMSwgZXJyb3JfMztcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgIHVzZXJJbmZvID0gcmVxLmJvZHkudXNlckluZm87XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5yZWZyZXNoVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VfMSAhPT0gXCJlcnJvclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogX19hc3NpZ24oe30sIHJlc3BvbnNlXzEpLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgZXJyb3JfMyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl8zLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL3Bvc3QvaW5zZXJ0VXNlckluZm9cIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB1cGRhdGVPYmosIHJlc3VsdCwgZXJyb3JfNDtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgIHVwZGF0ZU9iaiA9IHJlcS5ib2R5O1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5lb25BcGkuaW5zZXJ0VXNlckluZm8odXBkYXRlT2JqKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgZXJyb3JfNCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl80Lm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL3Bvc3QvaW5zZXJ0V2lzaFwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCB1c2VySW5mbywgbGVmdCwgdXNlcklkLCByZXN1bHQsIGVycm9yXzU7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICBfYSA9IHJlcS5ib2R5LCB1c2VySW5mbyA9IF9hLnVzZXJJbmZvLCBsZWZ0ID0gX19yZXN0KF9hLCBbXCJ1c2VySW5mb1wiXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW5pdEFjY2Vzc1Rva2VuQXV0aCh1c2VySW5mbyldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHVzZXJJZCA9IChfYi5zZW50KCkpLmlkO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5lb25BcGkuaW5zZXJ0V2lzaChsZWZ0LCBOdW1iZXIodXNlcklkKSldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVycm9yXzUgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfNS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmFwcC5wb3N0KFwiL2FwaS92MS9nZXQvd2lzaEJ5SWRcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSwgdXNlckluZm8sIGlkLCB1c2VySWQsIHJlc3VsdCwgZXJyb3JfNjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIF9hID0gcmVxLmJvZHksIHVzZXJJbmZvID0gX2EudXNlckluZm8sIGlkID0gX2EuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW5pdEFjY2Vzc1Rva2VuQXV0aCh1c2VySW5mbyldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHVzZXJJZCA9IChfYi5zZW50KCkpLmlkO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5lb25BcGkuZ2V0V2lzaEJ5SWQoTnVtYmVyKGlkKSwgTnVtYmVyKHVzZXJJZCkpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogeyB3aXNoOiByZXN1bHQgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfNiA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl82Lm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL3Bvc3QvaW5zZXJ0QW5zd2VyXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIHVzZXJJbmZvLCBpZCwgbGVmdCwgdXNlcklkLCByZXN1bHQsIGVycm9yXzc7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICBfYSA9IHJlcS5ib2R5LCB1c2VySW5mbyA9IF9hLnVzZXJJbmZvLCBpZCA9IF9hLmlkLCBsZWZ0ID0gX19yZXN0KF9hLCBbXCJ1c2VySW5mb1wiLCBcImlkXCJdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9iLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5pbnNlcnRBbnN3ZXIobGVmdCwgTnVtYmVyKHVzZXJJZCksIE51bWJlcihpZCkpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlcnJvcl83ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzcubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvcG9zdC91cGRhdGVXaXNoXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIHVzZXJJbmZvLCBsZWZ0LCB1c2VySWQsIHJlc3VsdCwgZXJyb3JfODtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIF9hID0gcmVxLmJvZHksIHVzZXJJbmZvID0gX2EudXNlckluZm8sIGxlZnQgPSBfX3Jlc3QoX2EsIFtcInVzZXJJbmZvXCJdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9iLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS51cGRhdGVXaXNoKGxlZnQsIE51bWJlcih1c2VySWQpKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfOCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl84Lm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL2dldC93aXNoZXNcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSwgdXNlckluZm8sIGlkLCB1c2VySWQsIHJlc3VsdCwgZXJyb3JfOTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIF9hID0gcmVxLmJvZHksIHVzZXJJbmZvID0gX2EudXNlckluZm8sIGlkID0gX2EuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW5pdEFjY2Vzc1Rva2VuQXV0aCh1c2VySW5mbyldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHVzZXJJZCA9IChfYi5zZW50KCkpLmlkO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5lb25BcGkuZ2V0V2lzaGVzKE51bWJlcihpZCksIE51bWJlcih1c2VySWQpKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHsgd2lzaGVzOiByZXN1bHQgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfOSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl85Lm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL2dldC9ncm91cHNcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB1c2VySW5mbywgdXNlcklkLCByZXN1bHQsIGVycm9yXzEwO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgdXNlckluZm8gPSByZXEuYm9keS51c2VySW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9hLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5nZXRHcm91cHMoTnVtYmVyKHVzZXJJZCkpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogeyBncm91cHM6IHJlc3VsdCB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlcnJvcl8xMCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl8xMC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmFwcC5wb3N0KFwiL2FwaS92MS9wb3N0L2luc2VydEdyb3VwXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIHVzZXJJbmZvLCBsZWZ0LCB1c2VySWQsIHJlc3VsdCwgZXJyb3JfMTE7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICBfYSA9IHJlcS5ib2R5LCB1c2VySW5mbyA9IF9hLnVzZXJJbmZvLCBsZWZ0ID0gX19yZXN0KF9hLCBbXCJ1c2VySW5mb1wiXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW5pdEFjY2Vzc1Rva2VuQXV0aCh1c2VySW5mbyldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHVzZXJJZCA9IChfYi5zZW50KCkpLmlkO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5lb25BcGkuaW5zZXJ0R3JvdXAoTnVtYmVyKHVzZXJJZCksIGxlZnQpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlcnJvcl8xMSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl8xMS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmFwcC5wb3N0KFwiL2FwaS92MS9wb3N0L2ludml0YXRpb25Hcm91cFwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCB1c2VySW5mbywgbGVmdCwgdXNlcklkLCByZXN1bHQsIGVycm9yXzEyO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgX2EgPSByZXEuYm9keSwgdXNlckluZm8gPSBfYS51c2VySW5mbywgbGVmdCA9IF9fcmVzdChfYSwgW1widXNlckluZm9cIl0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRBY2Nlc3NUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB1c2VySWQgPSAoX2Iuc2VudCgpKS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLmludml0YXRpb25Hcm91cChOdW1iZXIodXNlcklkKSwgbGVmdCldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVycm9yXzEyID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzEyLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL3Bvc3Qvam9pbldpc2hcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSwgdXNlckluZm8sIGxlZnQsIHVzZXJJZCwgcmVzdWx0LCBlcnJvcl8xMztcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIF9hID0gcmVxLmJvZHksIHVzZXJJbmZvID0gX2EudXNlckluZm8sIGxlZnQgPSBfX3Jlc3QoX2EsIFtcInVzZXJJbmZvXCJdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9iLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5qb2luV2lzaChOdW1iZXIodXNlcklkKSwgbGVmdCldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVycm9yXzEzID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzEzLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLmxpc3Rlbig0MjAwLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coXCJwb3J0IFwiLmNvbmNhdCg0MjAwLCBcIiBcXHUzMDY3XFx1MzBCNVxcdTMwRkNcXHUzMEQwXFx1MzBGQ1xcdThENzdcXHU1MkQ1XFx1NEUyRFwiKSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==