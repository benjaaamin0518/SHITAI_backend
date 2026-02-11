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
            var response, groupRows, wishId, updateWish_1, urlPattern, isUrl, imageData_1, _a, updateRows, userRows, groupName, creatorUserRows, creatorName, creatorMail_2, title, to, description, html, e_13;
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
                        _b.trys.push([2, 13, , 15]);
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
                        return [4 /*yield*/, this.pool.query("COMMIT")];
                    case 8:
                        _b.sent();
                        return [4 /*yield*/, this.pool.query("SELECT sui.user_id As mail\n        FROM shitai_join as sj INNER JOIN shitai_user_info as sui ON sui.id = sj.\"userId\" WHERE sj.\"wishId\" = $1;", [wishId])];
                    case 9:
                        userRows = (_b.sent()).rows;
                        if (userRows.length === 0) {
                            return [2 /*return*/, response];
                        }
                        groupName = groupRows[0]["groupName"];
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
                    case 12: return [3 /*break*/, 15];
                    case 13:
                        e_13 = _b.sent();
                        return [4 /*yield*/, this.pool.query("ROLLBACK")];
                    case 14:
                        _b.sent();
                        throw e_13;
                    case 15: return [2 /*return*/, response];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxJQUFJO0FBQ0wsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxJQUFJO0FBQ0wsd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxJQUFJO0FBQ0w7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC8uL3NyYy9iYWNrZW5kL05lb25BcGkudHMiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvLi91dGlscy9kYXRlLnRzIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwiQGdvb2dsZS1jbG91ZC9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvZXh0ZXJuYWwgY29tbW9uanMgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC9leHRlcm5hbCBjb21tb25qcyBcImRheWpzXCIiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvZXh0ZXJuYWwgY29tbW9uanMgXCJkYXlqcy9wbHVnaW4vdGltZXpvbmVcIiIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC9leHRlcm5hbCBjb21tb25qcyBcImRheWpzL3BsdWdpbi91dGNcIiIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudlwiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvZXh0ZXJuYWwgY29tbW9uanMgXCJwZ1wiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwicmVzZW5kXCIiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC8uL3NyYy9iYWNrZW5kL3NlcnZlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGcgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2YgSXRlcmF0b3IgPT09IFwiZnVuY3Rpb25cIiA/IEl0ZXJhdG9yIDogT2JqZWN0KS5wcm90b3R5cGUpO1xuICAgIHJldHVybiBnLm5leHQgPSB2ZXJiKDApLCBnW1widGhyb3dcIl0gPSB2ZXJiKDEpLCBnW1wicmV0dXJuXCJdID0gdmVyYigyKSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgaWYgKCFtKSByZXR1cm4gbztcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgICB0cnkge1xuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbnZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20sIHBhY2spIHtcbiAgICBpZiAocGFjayB8fCBhcmd1bWVudHMubGVuZ3RoID09PSAyKSBmb3IgKHZhciBpID0gMCwgbCA9IGZyb20ubGVuZ3RoLCBhcjsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xuICAgICAgICAgICAgYXJbaV0gPSBmcm9tW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0by5jb25jYXQoYXIgfHwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSkpO1xufTtcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbmltcG9ydCB7IFBvb2wgfSBmcm9tIFwicGdcIjtcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tIFwiQGdvb2dsZS1jbG91ZC9zdG9yYWdlXCI7XG52YXIgcmFuZG9tVVVJRCA9IHJlcXVpcmUoXCJjcnlwdG9cIikucmFuZG9tVVVJRDtcbmltcG9ydCB7IFJlc2VuZCB9IGZyb20gXCJyZXNlbmRcIjtcbmltcG9ydCB7IGNyZWF0ZUhhc2gsIHJhbmRvbUJ5dGVzIH0gZnJvbSBcImNyeXB0b1wiO1xuaW1wb3J0ICogYXMgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCB7IGZvcm1hdERpc3BsYXlEYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2RhdGVcIjtcbnJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7XG52YXIgTmVvbkFwaSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOZW9uQXBpKCkge1xuICAgICAgICB0aGlzLnBvb2wgPSBuZXcgUG9vbCh7XG4gICAgICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfREJfSE9TVCxcbiAgICAgICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9EQl9VU0VSLFxuICAgICAgICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9EQl9OQU1FLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9EQl9QQVNTV09SRCxcbiAgICAgICAgICAgIHBvcnQ6IHBhcnNlSW50KHByb2Nlc3MuZW52LlJFQUNUX0FQUF9EQl9QT1JUIHx8IFwiNTQzMlwiKSxcbiAgICAgICAgICAgIHNzbDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2FsdCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9EQl9TQUxUO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgICAgIGV4cGlyZXNJbjogXCIxSFwiLFxuICAgICAgICAgICAgYWxnb3JpdGhtOiBcIkhTMjU2XCIsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtcbiAgICAgICAgICAgICdcImdyb3VwSWRcIicsXG4gICAgICAgICAgICAnXCJjcmVhdG9ySWRcIicsXG4gICAgICAgICAgICAnXCJjYXRlZ29yeVwiJyxcbiAgICAgICAgICAgICdcImltYWdlRGF0YVwiJyxcbiAgICAgICAgICAgICdcInRpdGxlXCInLFxuICAgICAgICAgICAgJ1wiZGlzcGxheURhdGVcIicsXG4gICAgICAgICAgICAnXCJkaXNwbGF5VGV4dFwiJyxcbiAgICAgICAgICAgICdcIm5vdGVzXCInLFxuICAgICAgICAgICAgJ1wiZGVhZGxpbmVcIicsXG4gICAgICAgICAgICAnXCJtaW5QYXJ0aWNpcGFudHNcIicsXG4gICAgICAgICAgICAnXCJtYXhQYXJ0aWNpcGFudHNcIicsXG4gICAgICAgICAgICAnXCJhY3Rpb25MYWJlbFwiJyxcbiAgICAgICAgICAgICdcIndpdGhkcmF3blwiJyxcbiAgICAgICAgICAgICdcImNyZWF0ZWRBdFwiJyxcbiAgICAgICAgICAgICdcInBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hVHlwZVwiJyxcbiAgICAgICAgICAgICdcInBvc3RDb25maXJtU2NoZW1hVHlwZVwiJyxcbiAgICAgICAgICAgICdcImltcGxlbWVudGF0aW9uRGF0ZXRpbWVcIicsXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuY29sdW1uTmFtZXMgPSBbXG4gICAgICAgICAgICB7IGNvbHVtbjogXCJjYXRlZ29yeVwiLCBuYW1lOiBcIuOCq+ODhuOCtOODqlwiIH0sXG4gICAgICAgICAgICB7IGNvbHVtbjogXCJ0aXRsZVwiLCBuYW1lOiBcIuOCv+OCpOODiOODq1wiIH0sXG4gICAgICAgICAgICB7IGNvbHVtbjogXCJkaXNwbGF5RGF0ZVwiLCBuYW1lOiBcIuihqOekuueUqOaXpeaZglwiIH0sXG4gICAgICAgICAgICB7IGNvbHVtbjogXCJkaXNwbGF5VGV4dFwiLCBuYW1lOiBcIuihqOekuueUqOaWh+Wtl1wiIH0sXG4gICAgICAgICAgICB7IGNvbHVtbjogXCJub3Rlc1wiLCBuYW1lOiBcIuWCmeiAg1wiIH0sXG4gICAgICAgICAgICB7IGNvbHVtbjogXCJkZWFkbGluZVwiLCBuYW1lOiBcIuacn+mZkOaXpVwiIH0sXG4gICAgICAgICAgICB7IGNvbHVtbjogXCJtaW5QYXJ0aWNpcGFudHNcIiwgbmFtZTogXCLmnIDkvY7norrlrprkurrmlbBcIiB9LFxuICAgICAgICAgICAgeyBjb2x1bW46IFwibWF4UGFydGljaXBhbnRzXCIsIG5hbWU6IFwi5pyA5aSn56K65a6a5Lq65pWwXCIgfSxcbiAgICAgICAgICAgIHsgY29sdW1uOiBcImltcGxlbWVudGF0aW9uRGF0ZXRpbWVcIiwgbmFtZTogXCLlrp/mlr3ml6VcIiB9LFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmRhdGVDb2x1bW5zID0gW1wiZGVhZGxpbmVcIiwgXCJpbXBsZW1lbnRhdGlvbkRhdGV0aW1lXCJdO1xuICAgIH1cbiAgICBOZW9uQXBpLnByb3RvdHlwZS5jcmVhdGVUb2tlbnMgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0geyBhY2Nlc3NUb2tlbjogXCJcIiwgcmVmcmVzaFRva2VuOiBcIlwiIH07XG4gICAgICAgIC8vIOOCouOCr+OCu+OCueODiOODvOOCr+ODs+S9nOaIkFxuICAgICAgICB2YXIgcmFuZG9tU3RyID0gcmFuZG9tQnl0ZXMoMTYpLnRvU3RyaW5nKFwiaGV4XCIpO1xuICAgICAgICAvLyDjgIzjg6njg7Pjg4Djg6DmloflrZfliJcoMTbjg5DjgqTjg4gpICsg44Oq44Kv44Ko44K544OILuODpuODvOOCtuODvElEKOOCveODq+ODiOWApCnjgI3jgafjg4/jg4Pjgrfjg6XlgKTjgpLkvZzmiJBcbiAgICAgICAgdmFyIHNhbHRlZFJhbmRvbVN0ciA9IHJhbmRvbVN0ciArIHRoaXMuc2FsdDtcbiAgICAgICAgdmFyIGFjY2Vzc1Rva2VuID0gY3JlYXRlSGFzaChcInNoYTI1NlwiKVxuICAgICAgICAgICAgLnVwZGF0ZShzYWx0ZWRSYW5kb21TdHIpXG4gICAgICAgICAgICAuZGlnZXN0KFwiaGV4XCIpO1xuICAgICAgICAvLyDjg6rjg5Xjg6zjg4Pjgrfjg6Xjg4jjg7zjgq/jg7PkvZzmiJBcbiAgICAgICAgcmFuZG9tU3RyID0gcmFuZG9tQnl0ZXMoMTYpLnRvU3RyaW5nKFwiaGV4XCIpO1xuICAgICAgICAvLyDjgIzjg6njg7Pjg4Djg6DmloflrZfliJcoMTbjg5DjgqTjg4gpICsg44Oq44Kv44Ko44K544OILuODpuODvOOCtuODvElEKOOCveODq+ODiOWApCnjgI3jgafjg4/jg4Pjgrfjg6XlgKTjgpLkvZzmiJBcbiAgICAgICAgc2FsdGVkUmFuZG9tU3RyID0gcmFuZG9tU3RyICsgdGhpcy5zYWx0O1xuICAgICAgICB2YXIgcmVmcmVzaFRva2VuID0gY3JlYXRlSGFzaChcInNoYTI1NlwiKVxuICAgICAgICAgICAgLnVwZGF0ZShzYWx0ZWRSYW5kb21TdHIpXG4gICAgICAgICAgICAuZGlnZXN0KFwiaGV4XCIpO1xuICAgICAgICB2YXIgZGVmYXVsdFBleWxvYWQgPSB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4sXG4gICAgICAgIH07XG4gICAgICAgIHZhciByZWZyZXNoUGV5bG9hZCA9IHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIHJlZnJlc2hUb2tlbjogcmVmcmVzaFRva2VuLFxuICAgICAgICB9O1xuICAgICAgICByZXNwb25zZS5hY2Nlc3NUb2tlbiA9IGp3dC5zaWduKGRlZmF1bHRQZXlsb2FkLCB0aGlzLnNhbHQgfHwgXCJcIiwgdGhpcy5jb25maWcpO1xuICAgICAgICByZXNwb25zZS5yZWZyZXNoVG9rZW4gPSBqd3Quc2lnbihyZWZyZXNoUGV5bG9hZCwgdGhpcy5zYWx0IHx8IFwiXCIsIF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLmNvbmZpZyksIHsgZXhwaXJlc0luOiBcIjcySFwiIH0pKTtcbiAgICAgICAgcmV0dXJuIHsgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlbiwgcmVzcG9uc2U6IHJlc3BvbnNlIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXJhbTAgbG9naW5BdXRoUmVxdWVzdCDjg6bjg7zjgrbjg7xJROOBqOODkeOCueODr+ODvOODieOBjOagvOe0jeOBleOCjOOBpuOBhOOCi1xuICAgICAqIEByZXR1cm5zIGFjY2Vzc1Rva2VuIOOCouOCr+OCu+OCueODiOODvOOCr+ODs+OCkui/lOWNtOOBmeOCi1xuICAgICAqL1xuICAgIE5lb25BcGkucHJvdG90eXBlLmxvZ2luQXV0aCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgaGFzaFBhc3N3b3JkLCBxdWVyeSwgcm93cywgaWQsIG5hbWUsIGVtYWlsLCBfYywgYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiwgbmV3UmVzcG9uc2UsIHVwZGF0ZVJvd3M7XG4gICAgICAgICAgICB2YXIgdXNlcklkID0gX2IudXNlcklkLCBwYXNzd29yZCA9IF9iLnBhc3N3b3JkO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2QubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzVG9rZW46IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzaFBhc3N3b3JkID0gY3JlYXRlSGFzaChcInNoYTI1NlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51cGRhdGUocGFzc3dvcmQgKyB0aGlzLnNhbHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpZ2VzdChcImhleFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5ID0gXCJcXG4gICAgICAgICAgICBTRUxFQ1Qgc2hpdGFpX3VzZXJfaW5mby5pZCAgICAgIEFTIGlkXFxuICAgICAgICAgICAgLHNoaXRhaV91c2VyX2luZm8udXNlcl9pZCAgICAgIEFTIGVtYWlsXFxuICAgICAgICAgICAgLCBzaGl0YWlfdXNlcl9pbmZvLnVzZXJfbmFtZSAgICAgIEFTIG5hbWVcXG4gICAgICAgICAgICBGUk9NIHNoaXRhaV91c2VyX2luZm9cXG4gICAgICAgICAgICBXSEVSRSBwYXNzd29yZCA9ICQxXFxuICAgICAgICAgICAgICBBTkQgdXNlcl9pZCA9ICQyO1xcbiAgICAgICAgXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkocXVlcnksIFtoYXNoUGFzc3dvcmQsIHVzZXJJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cyA9IChfZC5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgYzlrZjlnKjjgZnjgovloLTlkIjjgIHjgqLjgq/jgrvjgrnjg4jjg7zjgq/jg7PjgpLov5TljbTjgZnjgotcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWtmOWcqOOBl+OBquOBhOWgtOWQiOOAgeOCqOODqeODvOODoeODg+OCu+ODvOOCuOOCkui/lOWNtOOBmeOCi+OAglxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvd3MubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHsgbWVzc2FnZTogXCLjg6bjg7zjgrbjg7xJROOCguOBl+OBj+OBr+ODkeOCueODr+ODvOODieOBjOmWk+mBleOBo+OBpuOBhOOBvuOBmeOAglwiIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA9IHJvd3NbMF1bXCJpZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSByb3dzWzBdW1wibmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsID0gcm93c1swXVtcImVtYWlsXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6IFwi44Ot44Kw44Kk44Oz6KqN6Ki844Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jID0gdGhpcy5jcmVhdGVUb2tlbnMoaWQpLCBhY2Nlc3NUb2tlbiA9IF9jLmFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4gPSBfYy5yZWZyZXNoVG9rZW4sIG5ld1Jlc3BvbnNlID0gX2MucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJVUERBVEUgc2hpdGFpX3VzZXJfaW5mbyBTRVQgYWNjZXNzX3Rva2VuID0gKEFSUkFZWyQxXSB8fCBhY2Nlc3NfdG9rZW4pWzE6M10sIHJlZnJlc2hfdG9rZW4gPSAkMiBXSEVSRSB1c2VyX2lkID0gJDMgUkVUVVJOSU5HIGlkXCIsIFthY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuLCB1c2VySWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJvd3MgPSAoX2Quc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZVJvd3MubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHsgbWVzc2FnZTogXCLjg63jgrDjgqTjg7Poqo3oqLzjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIiB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSB1cGRhdGVSb3dzWzBdW1wiaWRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHsgbWVzc2FnZTogXCLjg63jgrDjgqTjg7Poqo3oqLzjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIiB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbmV3UmVzcG9uc2UpLCB7IGlkOiBpZCwgbmFtZTogbmFtZSwgZW1haWw6IGVtYWlsIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXJhbTAgYWNjZXNzVG9rZW5BdXRoUmVxdWVzdFtcInVzZXJJbmZvXCJdIEFQSeOCkuWun+ihjOOBmeOCi+ODpuODvOOCtuODvOaDheWgsSjjg6bjg7zjgrbjg7xJROOAgeOCouOCr+OCu+OCueODiOODvOOCr+ODsylcbiAgICAgKiBAcmV0dXJuc+OAgFwic3VjY2Vzc1wiIG9yIFwiZXJyb3JcIlxuICAgICAqL1xuICAgIE5lb25BcGkucHJvdG90eXBlLmFjY2Vzc1Rva2VuQXV0aCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgaWQsIG5hbWVfMSwgZW1haWwsIGRlY29kZWRBY2Nlc3NUb2tlbiwgb2JqLCByb3dzLCBlXzE7XG4gICAgICAgICAgICB2YXIgYWNjZXNzVG9rZW4gPSBfYi5hY2Nlc3NUb2tlbjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJlcnJvclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWwgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQWNjZXNzVG9rZW4gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IGp3dC52ZXJpZnkoYWNjZXNzVG9rZW4sIHRoaXMuc2FsdCB8fCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA9IG9iai5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQWNjZXNzVG9rZW4gPSBvYmouYWNjZXNzVG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpZCwgZGVjb2RlZEFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwibWVzc2FnZVwiIGluIGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUubWVzc2FnZSA9PT0gXCJqd3QgZXhwaXJlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwiZXhwaXJlZCBhY2Nlc3MgdG9rZW5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1QgKlxcbiAgICAgICAgICAgICBGUk9NIHNoaXRhaV91c2VyX2luZm9cXG4gICAgICAgICAgICAgV0hFUkUgaWQgPSAkMVxcbiAgICAgICAgICAgICAgIEFORCAkMiA9IEFOWShhY2Nlc3NfdG9rZW4pO1wiLCBbaWQsIGRlY29kZWRBY2Nlc3NUb2tlbl0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cyA9IChfYy5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwiZXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZV8xID0gcm93c1swXVtcInVzZXJfbmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsID0gcm93c1swXVtcInVzZXJfaWRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHsgaWQ6IGlkLCBuYW1lOiBuYW1lXzEsIGVtYWlsOiBlbWFpbCB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcImVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXJhbTAgYWNjZXNzVG9rZW5BdXRoUmVxdWVzdFtcInVzZXJJbmZvXCJdIEFQSeOCkuWun+ihjOOBmeOCi+ODpuODvOOCtuODvOaDheWgsSjjg6bjg7zjgrbjg7xJROOAgeOCouOCr+OCu+OCueODiOODvOOCr+ODsylcbiAgICAgKiBAcmV0dXJuc+OAgFwic3VjY2Vzc1wiIG9yIFwiZXJyb3JcIlxuICAgICAqL1xuICAgIE5lb25BcGkucHJvdG90eXBlLnJlZnJlc2hUb2tlbkF1dGggPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIF9jLCBpZCwgZGVjb2RlZFJlZnJlc2hUb2tlbiwgcm93cywgdXNlcklkLCBfZCwgbmV3QWNjZXNzVG9rZW4sIG5ld1JlZnJlc2hUb2tlbiwgbmV3UmVzcG9uc2UsIHVwZGF0ZVJvd3M7XG4gICAgICAgICAgICB2YXIgcmVmcmVzaFRva2VuID0gX2IucmVmcmVzaFRva2VuO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2UubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcImVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYyA9IGp3dC52ZXJpZnkocmVmcmVzaFRva2VuLCB0aGlzLnNhbHQgfHwgXCJcIiksIGlkID0gX2MuaWQsIGRlY29kZWRSZWZyZXNoVG9rZW4gPSBfYy5yZWZyZXNoVG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1QgaWRcXG4gICAgICAgICAgICAgRlJPTSBzaGl0YWlfdXNlcl9pbmZvXFxuICAgICAgICAgICAgIFdIRVJFIGlkID0gJDFcXG4gICAgICAgICAgICAgICBBTkQgcmVmcmVzaF90b2tlbiA9ICQyO1wiLCBbaWQsIGRlY29kZWRSZWZyZXNoVG9rZW5dKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3MgPSAoX2Uuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcImVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZCA9IHJvd3NbMF1bXCJpZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kID0gdGhpcy5jcmVhdGVUb2tlbnModXNlcklkKSwgbmV3QWNjZXNzVG9rZW4gPSBfZC5hY2Nlc3NUb2tlbiwgbmV3UmVmcmVzaFRva2VuID0gX2QucmVmcmVzaFRva2VuLCBuZXdSZXNwb25zZSA9IF9kLnJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiVVBEQVRFIHNoaXRhaV91c2VyX2luZm8gU0VUIGFjY2Vzc190b2tlbiA9IChBUlJBWVskMV0gfHwgYWNjZXNzX3Rva2VuKVsxOjNdLCByZWZyZXNoX3Rva2VuID0gJDIgV0hFUkUgaWQgPSAkMyBSRVRVUk5JTkcgaWRcIiwgW25ld0FjY2Vzc1Rva2VuLCBuZXdSZWZyZXNoVG9rZW4sIHVzZXJJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUm93cyA9IChfZS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwiZXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSB1cGRhdGVSb3dzWzBdW1wiaWRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcImVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX19hc3NpZ24oeyBpZDogaWQgfSwgbmV3UmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS51cGxvYWRJbWFnZURhdGEgPSBmdW5jdGlvbiAoaW1hZ2VEYXRhKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjcmVkZW50aWFscywgc3RvcmFnZSwgYnVja2V0LCBwYXJzZUJhc2U2NEltYWdlLCB1cGxvYWRCYXNlNjRJbWFnZSwgX2E7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NSRURFTlRJQUxTX1RZUEUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50X2VtYWlsOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQ1JFREVOVElBTFNfQ0xJRU5UX0VNQUlMLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGVfa2V5OiAocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NSRURFTlRJQUxTX1BSSVZBVEVfS0VZIHx8IFwiXCIpLnJlcGxhY2UoL1xcXFxuL2csIFwiXFxuXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGVfa2V5X2lkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQ1JFREVOVElBTFNfUFJJVkFURV9LRVlfSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdF9pZDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1BST0pFQ1RfSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50X2lkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQ1JFREVOVElBTFNfQ0xJRU5UX0lELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhfdXJpOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQ1JFREVOVElBTFNfQVVUSF9VUkksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5fdXJpOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfQ1JFREVOVElBTFNfVE9LRU5fVVJJLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhfcHJvdmlkZXJfeDUwOV9jZXJ0X3VybDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NSRURFTlRJQUxTX0FVVEhfUFJPVklERVJfWDUwOV9DRVJUX1VSTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRfeDUwOV9jZXJ0X3VybDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NSRURFTlRJQUxTX0NMSUVOVF9YNTA5X0NFUlRfVVJMLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXZlcnNlX2RvbWFpbjogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NSRURFTlRJQUxTX1VOSVZFUlNFX0RPTUFJTixcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlID0gbmV3IFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1BST0pFQ1RfTkFNRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogY3JlZGVudGlhbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1Y2tldCA9IHN0b3JhZ2UuYnVja2V0KHByb2Nlc3MuZW52LlJFQUNUX0FQUF9CVUNLRVRfTkFNRSB8fCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlQmFzZTY0SW1hZ2UgPSBmdW5jdGlvbiAoYmFzZTY0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBiYXNlNjQubWF0Y2goL15kYXRhOiguKyk7YmFzZTY0LCguKykkLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtYXRjaGVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIEJhc2U2NCBzdHJpbmdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgY29udGVudFR5cGU6IG1hdGNoZXNbMV0sIGJhc2U2NERhdGE6IG1hdGNoZXNbMl0gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGxvYWRCYXNlNjRJbWFnZSA9IGZ1bmN0aW9uIChiYXNlNjQsIHVwbG9hZFBhdGgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIGNvbnRlbnRUeXBlLCBiYXNlNjREYXRhLCBidWZmZXIsIGZpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBwYXJzZUJhc2U2NEltYWdlKGJhc2U2NCksIGNvbnRlbnRUeXBlID0gX2EuY29udGVudFR5cGUsIGJhc2U2NERhdGEgPSBfYS5iYXNlNjREYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGJhc2U2NERhdGEsIFwiYmFzZTY0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUgPSBidWNrZXQuZmlsZSh1cGxvYWRQYXRoICsgXCIuXCIgKyBjb250ZW50VHlwZS5yZXBsYWNlKFwiaW1hZ2UvXCIsIFwiXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmaWxlLnNhdmUoYnVmZmVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBjb250ZW50VHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZUNvbnRyb2w6IFwicHVibGljLCBtYXgtYWdlPTMxNTM2MDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOW/heimgeOBquOCieWFrOmWi1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGZpbGUubWFrZVB1YmxpYygpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlv4XopoHjgarjgonlhazplotcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFwiaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL1wiLmNvbmNhdChmaWxlLmNsb3VkU3RvcmFnZVVSSS5ocmVmLnJlcGxhY2UoXCJnczovL1wiLCBcIlwiKSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaW1hZ2VEYXRhKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHVwbG9hZEJhc2U2NEltYWdlKGltYWdlRGF0YSwgcmFuZG9tVVVJRCgpKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2FdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcmFtMCB1c2VySWQs5L2c5oiQ44Gr5b+F6KaB44Gq5oOF5aCxKHByaWNlLCBkZXNjcmlwdGlvbiwgY3JlYXRlZF9hdClcbiAgICAgKiBAcmV0dXJuc+OAgFwic3VjY2Vzc1wiIG9yIFwiZXJyb3JcIlxuICAgICAqL1xuICAgIE5lb25BcGkucHJvdG90eXBlLmluc2VydFVzZXJJbmZvID0gZnVuY3Rpb24gKHVwZGF0ZU9iaikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGhhc2hQYXNzd29yZCwgaW5zZXJ0Um93cywgZV8yO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcInN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkJFR0lOXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzIsIDUsICwgN10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzaFBhc3N3b3JkID0gY3JlYXRlSGFzaChcInNoYTI1NlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51cGRhdGUodXBkYXRlT2JqLnBhc3N3b3JkICsgdGhpcy5zYWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaWdlc3QoXCJoZXhcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJJTlNFUlQgSU5UTyBcXFwicHVibGljXFxcIi5cXFwic2hpdGFpX3VzZXJfaW5mb1xcXCIgKFxcXCJ1c2VyX2lkXFxcIiwgXFxcInBhc3N3b3JkXFxcIiwgXFxcInVzZXJfbmFtZVxcXCIpXFxuICAgICAgICAgIFZBTFVFUygkMSwgJDIsICQzKSBSRVRVUk5JTkcgaWQ7XCIsIFt1cGRhdGVPYmouZW1haWwsIGhhc2hQYXNzd29yZCwgdXBkYXRlT2JqLm5hbWVdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFJvd3MgPSAoX2Euc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc2VydFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuODpuODvOOCtuODvOeZu+mMsuOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJDT01NSVRcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA3XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiUk9MTEJBQ0tcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS5zZW5kRW1haWwgPSBmdW5jdGlvbiAodG8sIHN1YmplY3QsIGh0bWwpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc2VuZCwgX2EsIGRhdGEsIGVycm9yO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZW5kID0gbmV3IFJlc2VuZChwcm9jZXNzLmVudi5SRUFDVF9BUFBfUkVTRU5EX0FQSV9UT0tFTik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCByZXNlbmQuZW1haWxzLnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRlJPTV9FTUFJTCB8fCBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogdG8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6IHN1YmplY3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IGh0bWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IF9iLnNlbnQoKSwgZGF0YSA9IF9hLmRhdGEsIGVycm9yID0gX2EuZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107IC8vY29uc29sZS5lcnJvcih7IGVycm9yIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5lb25BcGkucHJvdG90eXBlLmluc2VydFdpc2ggPSBmdW5jdGlvbiAod2lzaCwgaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYSwgcG9zdENvbmZpcm1TY2hlbWEsIGxlZnRXaXNoXzEsIGdyb3VwUm93cywgdXJsUGF0dGVybiwgaXNVcmwsIGltYWdlRGF0YSwgX2EsIGluc2VydFdpc2hSb3dzLCBjcmVhdGVJbnNlcnRTY2hlbWEsIF9iLCBfYywgc2NoZW1hLCBpbnNlcnRSb3dzLCBlXzNfMSwgbWFpbFJvd3MsIGdyb3VwTmFtZSwgdXNlclJvd3MsIGNyZWF0b3JOYW1lLCBjcmVhdG9yTWFpbF8xLCB0bywgZGVzY3JpcHRpb24sIGh0bWwsIGVfNDtcbiAgICAgICAgICAgIHZhciBlXzMsIF9kO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2UpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9lLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0geyBpZDogXCJcIiB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQkVHSU5cIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZS5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lLnRyeXMucHVzaChbMiwgMjEsICwgMjNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hID0gd2lzaC5wYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYSwgcG9zdENvbmZpcm1TY2hlbWEgPSB3aXNoLnBvc3RDb25maXJtU2NoZW1hLCBsZWZ0V2lzaF8xID0gX19yZXN0KHdpc2gsIFtcInBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hXCIsIFwicG9zdENvbmZpcm1TY2hlbWFcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHNnLmlkLCBzZy5cXFwiZ3JvdXBOYW1lXFxcIiBGUk9NIHB1YmxpYy5zaGl0YWlfZ3JvdXAgYXMgc2cgSU5ORVIgSk9JTiBwdWJsaWMuc2hpdGFpX2dyb3VwX2pvaW4gYXMgc2pnIE9OIHNqZy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBBTkQgc2pnLlxcXCJ1c2VySWRcXFwiID0gJDEgV0hFUkUgc2cuaWQgPSAkMjtcIiwgW2lkLCBsZWZ0V2lzaF8xLmdyb3VwSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwUm93cyA9IChfZS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncm91cFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuaoqemZkOOBjOOBguOCiuOBvuOBm+OCk+OAguOCsOODq+ODvOODl+WkluOBruODpuODvOOCtuODvOOBp+OBmeOAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxQYXR0ZXJuID0gL14oaHR0cHM/fGZ0cCkoOlxcL1xcL1tcXHdcXC86JSNcXCQmXFw/XFwoXFwpflxcLj1cXCtcXC1dKykvO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNVcmwgPSB1cmxQYXR0ZXJuLnRlc3QobGVmdFdpc2hfMS5pbWFnZURhdGEgfHwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVXJsKSByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gbGVmdFdpc2hfMS5pbWFnZURhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnVwbG9hZEltYWdlRGF0YShsZWZ0V2lzaF8xLmltYWdlRGF0YSB8fCBcIlwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gX2Uuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2UubGFiZWwgPSA2O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEgPSBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIklOU0VSVCBJTlRPIHB1YmxpYy5zaGl0YWlfd2lzaCAoXCIuY29uY2F0KHRoaXMuY29sdW1ucy5qb2luKFwiLFwiKSwgXCIpIFxcbiAgICAgICAgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUsICQ2LCAkNywgJDgsICQ5LCAkMTAsICQxMSwgJDEyLCAkMTMsIE5PVygpLCAkMTQsICQxNSwgJDE2KSBSRVRVUk5JTkcgaWQ7XCIpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoXzEuZ3JvdXBJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2hfMS5jcmVhdG9ySWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoXzEuY2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2hfMS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2hfMS5kaXNwbGF5RGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2hfMS5kaXNwbGF5VGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2hfMS5ub3RlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2hfMS5kZWFkbGluZSA9PSBcIlwiID8gbnVsbCA6IGxlZnRXaXNoXzEuZGVhZGxpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoXzEubWluUGFydGljaXBhbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaF8xLm1heFBhcnRpY2lwYW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2hfMS5hY3Rpb25MYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RDb25maXJtU2NoZW1hLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoXzEuaW1wbGVtZW50YXRpb25EYXRldGltZSA9PSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbGVmdFdpc2hfMS5pbXBsZW1lbnRhdGlvbkRhdGV0aW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0V2lzaFJvd3MgPSAoX2Uuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc2VydFdpc2hSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgZfjgZ/jgYTjgZPjgajjga7nmbvpjLLjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlSW5zZXJ0U2NoZW1hID0gZnVuY3Rpb24gKHNjaGVtYSwgc2NoZW1hVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtaXhlZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVR5cGU6IHNjaGVtYVR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzY2hlbWEuZGF0ZXRpbWVMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogc2NoZW1hLmRhdGV0aW1lUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFUeXBlOiBzY2hlbWFUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibm90ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzY2hlbWEubm90ZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBzY2hlbWEubm90ZVJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRhdGV0aW1lXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hVHlwZTogc2NoZW1hVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHNjaGVtYS5kYXRldGltZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBzY2hlbWEuZGF0ZXRpbWVSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJub3RlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hVHlwZTogc2NoZW1hVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm5vdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogc2NoZW1hLm5vdGVMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogc2NoZW1hLm5vdGVSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hVHlwZTogc2NoZW1hVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogc2NoZW1hLm5vdGVMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogc2NoZW1hLm5vdGVSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgX2UubGFiZWwgPSA4O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZS50cnlzLnB1c2goWzgsIDEzLCAxNCwgMTVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gX192YWx1ZXMoX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoY3JlYXRlSW5zZXJ0U2NoZW1hKHBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hLCBcInBhcnRpY2lwYXRpb25cIikpLCBmYWxzZSksIF9fcmVhZChjcmVhdGVJbnNlcnRTY2hlbWEocG9zdENvbmZpcm1TY2hlbWEsIFwicG9zdFwiKSksIGZhbHNlKSksIF9jID0gX2IubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2UubGFiZWwgPSA5O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFfYy5kb25lKSByZXR1cm4gWzMgLypicmVhayovLCAxMl07XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEgPSBfYy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIklOU0VSVCBJTlRPIFxcXCJwdWJsaWNcXFwiLlxcXCJzaGl0YWlfc2NoZW1hXFxcIiAoXFxcIndpc2hJZFxcXCIsIFxcXCJzY2hlbWFUeXBlXFxcIiwgXFxcInR5cGVcXFwiLCBcXFwicmVxdWlyZWRcXFwiLCBcXFwibGFiZWxcXFwiKVxcbiAgICAgICAgICBWQUxVRVMoJDEsICQyLCAkMywgJDQsICQ1KSBSRVRVUk5JTkcgaWQ7XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0V2lzaFJvd3NbMF1bXCJpZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLnNjaGVtYVR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEucmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRSb3dzID0gKF9lLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnNlcnRSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLnorroqo3poIXnm67jga7nmbvpjLLjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2UubGFiZWwgPSAxMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jID0gX2IubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6IHJldHVybiBbMyAvKmJyZWFrKi8sIDE1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfM18xID0gX2Uuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZV8zID0geyBlcnJvcjogZV8zXzEgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDE1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfZCA9IF9iLnJldHVybikpIF9kLmNhbGwoX2IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzMpIHRocm93IGVfMy5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmlkID0gaW5zZXJ0V2lzaFJvd3NbMF1bXCJpZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzdWkudXNlcl9pZCBBcyBtYWlsXFxuICAgICAgICBGUk9NIHB1YmxpYy5zaGl0YWlfZ3JvdXBfam9pbiBhcyBzZ2ogSU5ORVIgSk9JTiBzaGl0YWlfdXNlcl9pbmZvIGFzIHN1aSBPTiBzdWkuaWQgPSBzZ2ouXFxcInVzZXJJZFxcXCIgV0hFUkUgc2dqLlxcXCJncm91cElkXFxcIiA9ICQxO1wiLCBbbGVmdFdpc2hfMS5ncm91cElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE2OlxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbFJvd3MgPSAoX2Uuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1haWxSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgrDjg6vjg7zjg5fjg6Hjg7Pjg5Dmg4XloLHjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBOYW1lID0gZ3JvdXBSb3dzWzBdW1wiZ3JvdXBOYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHN1aS51c2VyX25hbWUgQXMgbmFtZSwgc3VpLnVzZXJfaWQgQXMgbWFpbFxcbiAgICAgICAgRlJPTSBzaGl0YWlfdXNlcl9pbmZvIGFzIHN1aSBXSEVSRSBzdWkuXFxcImlkXFxcIiA9ICQxO1wiLCBbbGVmdFdpc2hfMS5jcmVhdG9ySWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTc6XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyUm93cyA9IChfZS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlclJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuS9nOaIkOiAheaDheWgseOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9yTmFtZSA9IHVzZXJSb3dzWzBdW1wibmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JNYWlsXzEgPSB1c2VyUm93c1swXVtcIm1haWxcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICB0byA9IG1haWxSb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocm93KSB7IHJldHVybiByb3dbXCJtYWlsXCJdOyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKG1haWwpIHsgcmV0dXJuIG1haWwgIT0gY3JlYXRvck1haWxfMTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IE9iamVjdC5rZXlzKGxlZnRXaXNoXzEpLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSBfdGhpcy5jb2x1bW5OYW1lcy5maW5kKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iai5jb2x1bW4gPT0gY3VycmVudDsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzRGF0ZSA9IF90aGlzLmRhdGVDb2x1bW5zLnNvbWUoZnVuY3Rpb24gKGR0Q29sKSB7IHJldHVybiBkdENvbCA9PSBjdXJyZW50OyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocHJldiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjx0cj48dGQ+XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIi5jb25jYXQob2JqLm5hbWUsIFwiPC90ZD48dGQ+XCIpLmNvbmNhdChpc0RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZvcm1hdERpc3BsYXlEYXRlKGxlZnRXaXNoXzFbY29sdW1uXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxlZnRXaXNoXzFbY29sdW1uXSwgXCI8L3RkPjwvdHI+XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgPSBcIlxcbjwhZG9jdHlwZSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImphXFxcIj5cXG48aGVhZD5cXG4gIDxtZXRhIGNoYXJzZXQ9XFxcInV0Zi04XFxcIiAvPlxcbiAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcXFwiIC8+XFxuICA8dGl0bGU+XFx1NjVCMFxcdTMwNTdcXHUzMDQ0XFx1MzAwQ1xcdTMwNTdcXHUzMDVGXFx1MzA0NFxcdTMwMERcXHU5MDFBXFx1NzdFNTwvdGl0bGU+XFxuICA8c3R5bGU+XFxuICAgIGJvZHkgeyBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiSGlyYWdpbm8gS2FrdSBHb3RoaWMgUHJvTlxcXCIsIFxcXCJZdSBHb3RoaWNcXFwiLCBcXFwiTm90byBTYW5zIEpQXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7IG1hcmdpbjowOyBwYWRkaW5nOjA7IGJhY2tncm91bmQ6I2Y2ZjhmYjsgY29sb3I6IzExMTsgfVxcbiAgICAuY29udGFpbmVyIHsgbWF4LXdpZHRoOjYwMHB4OyBtYXJnaW46MjhweCBhdXRvOyBiYWNrZ3JvdW5kOiNmZmY7IGJvcmRlci1yYWRpdXM6OHB4OyBvdmVyZmxvdzpoaWRkZW47IGJveC1zaGFkb3c6MCA2cHggMjRweCByZ2JhKDIwLDMwLDYwLDAuMDgpOyB9XFxuICAgIC5oZWFkZXIgeyBwYWRkaW5nOjIwcHg7IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLCMxZjZmZWIsIzZiOWNmZik7IGNvbG9yOiNmZmY7IH1cXG4gICAgLmNvbnRlbnQgeyBwYWRkaW5nOjIwcHg7IH1cXG4gICAgLnRpdGxlIHsgZm9udC1zaXplOjE4cHg7IG1hcmdpbjowIDAgOHB4IDA7IH1cXG4gICAgLm1ldGEgeyBmb250LXNpemU6MTNweDsgY29sb3I6IzZiNzI4MDsgbWFyZ2luLWJvdHRvbToxNnB4OyB9XFxuICAgIC5jYXJkIHsgYmFja2dyb3VuZDojZjdmOWZjOyBwYWRkaW5nOjE0cHg7IGJvcmRlci1yYWRpdXM6NnB4OyBtYXJnaW4tYm90dG9tOjE2cHg7IH1cXG4gICAgLmJ0biB7IGRpc3BsYXk6aW5saW5lLWJsb2NrOyBwYWRkaW5nOjEycHggMThweDsgYm9yZGVyLXJhZGl1czo4cHg7IHRleHQtZGVjb3JhdGlvbjpub25lOyBmb250LXdlaWdodDo2MDA7IH1cXG4gICAgLmJ0bi1wcmltYXJ5IHsgYmFja2dyb3VuZDojMWY2ZmViOyBjb2xvcjojZmZmOyB9XFxuICAgIC5mb290ZXIgeyBmb250LXNpemU6MTJweDsgY29sb3I6IzlhYTBhYjsgcGFkZGluZzoxOHB4OyB0ZXh0LWFsaWduOmNlbnRlcjsgfVxcbiAgICAua3YgeyBmb250LXdlaWdodDo3MDA7IGNvbG9yOiMxMTE7IH1cXG4gICAgcHJlIHsgd2hpdGUtc3BhY2U6cHJlLXdyYXA7IHdvcmQtd3JhcDpicmVhay13b3JkOyB9XFxuICA8L3N0eWxlPlxcbjwvaGVhZD5cXG48Ym9keT5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCIgcm9sZT1cXFwiYXJ0aWNsZVxcXCIgYXJpYS1sYWJlbD1cXFwiU0hJVEFJIFxcdTY1QjBcXHUzMDU3XFx1MzA0NFxcdTMwNTdcXHUzMDVGXFx1MzA0NFxcdTkwMUFcXHU3N0U1XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICA8aDEgc3R5bGU9XFxcImZvbnQtc2l6ZToyMHB4O21hcmdpbjowXFxcIj5TSElUQUk8L2gxPlxcbiAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46NnB4IDAgMCAwO2ZvbnQtc2l6ZToxM3B4O29wYWNpdHk6MC45NVxcXCI+XFx1MzBCMFxcdTMwRUJcXHUzMEZDXFx1MzBEN1xcdTUxODVcXHUzMDZCXFx1NjVCMFxcdTMwNTdcXHUzMDQ0XFx1MzAwQ1xcdTMwNTdcXHUzMDVGXFx1MzA0NFxcdTMwMERcXHUzMDRDXFx1NjI5NVxcdTdBM0ZcXHUzMDU1XFx1MzA4Q1xcdTMwN0VcXHUzMDU3XFx1MzA1RjwvcD5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFx1RDgzRFxcdUREMTQgXFx1NjVCMFxcdTc3NDBcXHVGRjFBXCIuY29uY2F0KGxlZnRXaXNoXzEudGl0bGUsIFwiPC9wPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJtZXRhXFxcIj48c3BhbiBjbGFzcz1cXFwia3ZcXFwiPlxcdTRGNUNcXHU2MjEwXFx1ODAwNVxcdUZGMUE8L3NwYW4+IFwiKS5jb25jYXQoY3JlYXRvck5hbWUsIFwiICZuYnNwO3wmbmJzcDsgPHNwYW4gY2xhc3M9XFxcImt2XFxcIj5cXHUzMEIwXFx1MzBFQlxcdTMwRkNcXHUzMEQ3XFx1RkYxQTwvc3Bhbj4gXCIpLmNvbmNhdChncm91cE5hbWUsIFwiPC9wPlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgPHAgc3R5bGU9XFxcIm1hcmdpbjowIDAgOHB4IDA7XFxcIj48c3BhbiBjbGFzcz1cXFwia3ZcXFwiPlxcdTUxODVcXHU1QkI5PC9zcGFuPjwvcD5cXG4gICAgICAgIDxwcmUgc3R5bGU9XFxcIm1hcmdpbjowO1xcXCI+PHRhYmxlPlwiKS5jb25jYXQoZGVzY3JpcHRpb24sIFwiPC90YWJsZT48L3ByZT5cXG4gICAgICA8L2Rpdj5cXG5cXG4gICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjAgMCAxOHB4IDA7XFxcIj5cXHU4QTczXFx1N0QzMFxcdTMwODRcXHU1M0MyXFx1NTJBMFxcdTMwNkZcXHU0RTBCXFx1MzA2RVxcdTMwRENcXHUzMEJGXFx1MzBGM1xcdTMwNEJcXHUzMDg5XFx1NzhCQVxcdThBOERcXHUzMDU3XFx1MzA2NlxcdTMwNEZcXHUzMDYwXFx1MzA1NVxcdTMwNDRcXHUzMDAyPC9wPlxcblxcbiAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGhyZWY9XFxcIlwiKS5jb25jYXQocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZST05URU5EX1VSTCArIFwiL1wiICsgXCJ3aXNoXCIgKyBcIi9cIiArIHJlc3BvbnNlLmlkLCBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHJlbD1cXFwibm9vcGVuZXJcXFwiPlxcdThBNzNcXHU3RDMwXFx1MzA5MlxcdTc4QkFcXHU4QThEXFx1MzA1OVxcdTMwOEI8L2E+XFxuXFxuICAgICAgPGhyIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtib3JkZXItdG9wOjFweCBzb2xpZCAjZWVmMmY3O21hcmdpbjoxOHB4IDA7XFxcIiAvPlxcblxcbiAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46MDtmb250LXNpemU6MTNweDtjb2xvcjojNTU2MDcwO1xcXCI+XFxuICAgICAgICBcXHU2QzE3XFx1MzA2QlxcdTMwNkFcXHUzMDhCXFx1MzAwQ1xcdTMwNTdcXHUzMDVGXFx1MzA0NFxcdTMwMERcXHUzMDRDXFx1MzA0MlxcdTMwOENcXHUzMDcwXFx1MzAwMVxcdTUzQzJcXHU1MkEwXFx1MzA4NFxcdTMwRUFcXHUzMEEyXFx1MzBBRlxcdTMwQjdcXHUzMEU3XFx1MzBGM1xcdTMwNjdcXHUzMEIwXFx1MzBFQlxcdTMwRkNcXHUzMEQ3XFx1MzA5MlxcdTZEM0JcXHU2MDI3XFx1NTMxNlxcdTMwNTdcXHUzMDdFXFx1MzA1N1xcdTMwODdcXHUzMDQ2XFx1RkYwMVxcbiAgICAgIDwvcD5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxuICAgICAgXFx1MzA1M1xcdTMwNkVcXHUzMEUxXFx1MzBGQ1xcdTMwRUJcXHUzMDZGXFx1ODFFQVxcdTUyRDVcXHU5MTREXFx1NEZFMVxcdTMwNjdcXHUzMDU5XFx1MzAwMlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvYm9keT5cXG48L2h0bWw+XFxuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodG8ubGVuZ3RoICE9IDApKSByZXR1cm4gWzMgLypicmVhayovLCAxOV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnNlbmRFbWFpbCh0bywgXCJcXHUzMDEwU0hJVEFJXFx1MzAxMVxcdTY1QjBcXHUzMDU3XFx1MzA0NFxcdTMwMENcXHUzMDU3XFx1MzA1RlxcdTMwNDRcXHUzMDBEXFx1MzA0Q1xcdTYyOTVcXHU3QTNGXFx1MzA1NVxcdTMwOENcXHUzMDdFXFx1MzA1N1xcdTMwNUYgXFx1MjAxNCBcIi5jb25jYXQobGVmdFdpc2hfMS50aXRsZSksIGh0bWwpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lLmxhYmVsID0gMTk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTk6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkNPTU1JVFwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzQgPSBfZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJST0xMQkFDS1wiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjM6IHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUuY3JlYXRlUmVzcG9uc2VEYXRhID0gZnVuY3Rpb24gKHdpc2hJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2NoZW1hUm93cywgc2NoZW1hTWFwLCBzY2hlbWFSb3dzXzEsIHNjaGVtYVJvd3NfMV8xLCBzY2hlbWEsIHBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hVHlwZSwgcG9zdENvbmZpcm1TY2hlbWFUeXBlLCBzY2hlbWFUeXBlLCB0eXBlLCByZXF1aXJlZCwgbGFiZWwsIGFuc3dlclJvd3MsIGFuc3dlck1hcCwgcGFydGljaXBhbnRzLCBhbnN3ZXJSb3dzXzEsIGFuc3dlclJvd3NfMV8xLCBhbnN3ZXIsIGpvaW5lZEF0LCB1c2VySWQsIHNjaGVtYVR5cGUsIHR5cGUsIHZhbHVlLCBlXzU7XG4gICAgICAgICAgICB2YXIgZV82LCBfYSwgX2IsIGVfNywgX2MsIF9kLCBfZTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2YpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9mLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc3cuXFxcInBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hVHlwZVxcXCIsIHN3LlxcXCJwb3N0Q29uZmlybVNjaGVtYVR5cGVcXFwiLCBzcy5cXFwic2NoZW1hVHlwZVxcXCIsIHNzLlxcXCJ0eXBlXFxcIiwgc3MuXFxcInJlcXVpcmVkXFxcIiwgc3MuXFxcImxhYmVsXFxcIlxcbiAgICAgICAgRlJPTSBwdWJsaWMuc2hpdGFpX3dpc2ggYXMgc3cgSU5ORVIgSk9JTiBzaGl0YWlfc2NoZW1hIGFzIHNzIE9OIHNzLlxcXCJ3aXNoSWRcXFwiID0gc3cuaWQgV0hFUkUgc3cuaWQgPSAkMTtcIiwgW3dpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUm93cyA9IChfZi5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NoZW1hUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44K544Kt44O844Oe44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChzY2hlbWFSb3dzXzEgPSBfX3ZhbHVlcyhzY2hlbWFSb3dzKSwgc2NoZW1hUm93c18xXzEgPSBzY2hlbWFSb3dzXzEubmV4dCgpOyAhc2NoZW1hUm93c18xXzEuZG9uZTsgc2NoZW1hUm93c18xXzEgPSBzY2hlbWFSb3dzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYSA9IHNjaGVtYVJvd3NfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYVR5cGUgPSBzY2hlbWEucGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFUeXBlLCBwb3N0Q29uZmlybVNjaGVtYVR5cGUgPSBzY2hlbWEucG9zdENvbmZpcm1TY2hlbWFUeXBlLCBzY2hlbWFUeXBlID0gc2NoZW1hLnNjaGVtYVR5cGUsIHR5cGUgPSBzY2hlbWEudHlwZSwgcmVxdWlyZWQgPSBzY2hlbWEucmVxdWlyZWQsIGxhYmVsID0gc2NoZW1hLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFNYXAuc2V0KHNjaGVtYVR5cGUsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBzY2hlbWFNYXAuZ2V0KHNjaGVtYVR5cGUpKSwgKF9iID0geyB0eXBlOiBzY2hlbWFUeXBlID09PSBcInBhcnRpY2lwYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hVHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBvc3RDb25maXJtU2NoZW1hVHlwZSB9LCBfYlt0eXBlICsgXCJMYWJlbFwiXSA9IGxhYmVsLCBfYlt0eXBlICsgXCJSZXF1aXJlZFwiXSA9IHJlcXVpcmVkLCBfYikpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZV82XzEpIHsgZV82ID0geyBlcnJvcjogZV82XzEgfTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjaGVtYVJvd3NfMV8xICYmICFzY2hlbWFSb3dzXzFfMS5kb25lICYmIChfYSA9IHNjaGVtYVJvd3NfMS5yZXR1cm4pKSBfYS5jYWxsKHNjaGVtYVJvd3NfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV82KSB0aHJvdyBlXzYuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzai5cXFwiam9pbmVkQXRcXFwiLCBzai5cXFwidXNlcklkXFxcIiwgc3MuXFxcInNjaGVtYVR5cGVcXFwiLCBzcy50eXBlLCBzYS52YWx1ZVxcbiAgICAgICAgRlJPTSBzaGl0YWlfam9pbiBhcyBzaiBMRUZUIEpPSU4gc2hpdGFpX3NjaGVtYSBhcyBzcyBPTiBzcy5cXFwid2lzaElkXFxcIiA9ICQxIExFRlQgSk9JTiBwdWJsaWMuc2hpdGFpX2Fuc3dlciBhcyBzYSBPTiBzYS5cXFwic2NoZW1hSWRcXFwiID0gc3MuaWQgQU5EIHNzLlxcXCJ3aXNoSWRcXFwiID0gJDEgQU5EIHNhLlxcXCJ1c2VySWRcXFwiID0gc2ouXFxcInVzZXJJZFxcXCIgV0hFUkUgc2ouXFxcIndpc2hJZFxcXCIgPSAkMSBPUkRFUiBCWSBzai5cXFwiam9pbmVkQXRcXFwiIEFTQztcIiwgW3dpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyUm93cyA9IChfZi5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChhbnN3ZXJSb3dzXzEgPSBfX3ZhbHVlcyhhbnN3ZXJSb3dzKSwgYW5zd2VyUm93c18xXzEgPSBhbnN3ZXJSb3dzXzEubmV4dCgpOyAhYW5zd2VyUm93c18xXzEuZG9uZTsgYW5zd2VyUm93c18xXzEgPSBhbnN3ZXJSb3dzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlciA9IGFuc3dlclJvd3NfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2luZWRBdCA9IGFuc3dlci5qb2luZWRBdCwgdXNlcklkID0gYW5zd2VyLnVzZXJJZCwgc2NoZW1hVHlwZSA9IGFuc3dlci5zY2hlbWFUeXBlLCB0eXBlID0gYW5zd2VyLnR5cGUsIHZhbHVlID0gYW5zd2VyLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXVzZXJJZCB8fCAhdHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJNYXAuc2V0KHVzZXJJZCwgX19hc3NpZ24oX19hc3NpZ24oe30sIChhbnN3ZXJNYXAuZ2V0KHVzZXJJZCkgPyBhbnN3ZXJNYXAuZ2V0KHVzZXJJZCkgOiB7fSkpLCAoX2QgPSB7IHVzZXJJZDogdXNlcklkLCBqb2luZWRBdDogam9pbmVkQXQgfSwgX2Rbc2NoZW1hVHlwZSArIFwiQW5zd2Vyc1wiXSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCAoYW5zd2VyTWFwLmdldCh1c2VySWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNjaGVtYVR5cGUgKyBcIkFuc3dlcnNcIiBpbiBhbnN3ZXJNYXAuZ2V0KHVzZXJJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFuc3dlck1hcC5nZXQodXNlcklkKVsoc2NoZW1hVHlwZSArIFwiQW5zd2Vyc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9KSksIChfZSA9IHt9LCBfZVt0eXBlXSA9IHZhbHVlLCBfZSkpLCBfZCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnRzID0gX19zcHJlYWRBcnJheShbXSwgX19yZWFkKGFuc3dlck1hcC52YWx1ZXMoKSksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZV83XzEpIHsgZV83ID0geyBlcnJvcjogZV83XzEgfTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuc3dlclJvd3NfMV8xICYmICFhbnN3ZXJSb3dzXzFfMS5kb25lICYmIChfYyA9IGFuc3dlclJvd3NfMS5yZXR1cm4pKSBfYy5jYWxsKGFuc3dlclJvd3NfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV83KSB0aHJvdyBlXzcuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hOiBzY2hlbWFNYXAuZ2V0KFwicGFydGljaXBhdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdENvbmZpcm1TY2hlbWE6IHNjaGVtYU1hcC5nZXQoXCJwb3N0XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudHM6IHBhcnRpY2lwYW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV81ID0gX2Yuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfNTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUuZ2V0V2lzaEJ5SWQgPSBmdW5jdGlvbiAod2lzaElkLCBpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGdyb3VwUm93cywgd2lzaFJvd3NfMSwgcmVzXzEsIGV4dENvbHVtbnMsIGVfODtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB3aXNoSWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cElkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JJZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5QYXJ0aWNpcGFudHM6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uTGFiZWw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWE6IHsgdHlwZTogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0Q29uZmlybVNjaGVtYTogeyB0eXBlOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXduOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDUsICwgNl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHNnLmlkIEZST00gcHVibGljLnNoaXRhaV93aXNoIGFzIHN3IElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cCBhcyBzZyBPTiBzdy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBJTk5FUiBKT0lOIHB1YmxpYy5zaGl0YWlfZ3JvdXBfam9pbiBhcyBzamcgT04gc2pnLlxcXCJncm91cElkXFxcIiA9IHNnLmlkIEFORCBzamcuXFxcInVzZXJJZFxcXCIgPSAkMSBXSEVSRSBzdy5pZCA9ICQyO1wiLCBbaWQsIHdpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBSb3dzID0gKF9hLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncm91cFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuaoqemZkOOBjOOBguOCiuOBvuOBm+OCk+OAguOCsOODq+ODvOODl+WkluOBruODpuODvOOCtuODvOOBp+OBmeOAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1QgXCIuY29uY2F0KHRoaXMuY29sdW1ucy5qb2luKFwiLFwiKSwgXCJcXG4gICAgICAgIEZST00gcHVibGljLnNoaXRhaV93aXNoIFdIRVJFIGlkID0gJDE7XCIpLCBbd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICB3aXNoUm93c18xID0gKF9hLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aXNoUm93c18xLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgZfjgZ/jgYTjgZPjgajjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jcmVhdGVSZXNwb25zZURhdGEod2lzaElkLnRvU3RyaW5nKCkpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRDb2x1bW5zID0gdGhpcy5jb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbCAhPT0gJ1wicGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFUeXBlXCInICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCAhPT0gJ1wicG9zdENvbmZpcm1TY2hlbWFUeXBlXCInO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVwQ29sdW1uID0gY29sdW1uLnJlcGxhY2VBbGwoJ1wiJywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXBDb2x1bW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHdpc2hSb3dzXzFbMF1bcmVwQ29sdW1uXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVzcG9uc2UpLCAoX2EgPSB7fSwgX2FbcmVwQ29sdW1uXSA9IHZhbHVlLCBfYSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBvc3RDb25maXJtU2NoZW1hXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJ0aWNpcGFudHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIF0uZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNfMSAmJiBjb2x1bW4gaW4gcmVzXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVzcG9uc2UpLCAoX2EgPSB7fSwgX2FbY29sdW1uXSA9IHJlc18xW2NvbHVtbl0sIF9hKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzggPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzg7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5lb25BcGkucHJvdG90eXBlLmluc2VydEFuc3dlciA9IGZ1bmN0aW9uIChhbnN3ZXIsIGlkLCB3aXNoSWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBncm91cFJvd3MsIGFuc3dlcnMsIF9hLCBfYiwga2V5LCBfYywgX2QsIHNjaGVtYSwgcmVwS2V5LCB2YWx1ZSwgaW5zZXJ0QW5zd2VyUm93cywgZV85XzEsIGVfMTBfMSwgdXNlclJvd3MsIGdyb3VwTmFtZSwgam9pblVzZXJSb3dzLCBjcmVhdG9yVXNlclJvd3MsIGNyZWF0b3JOYW1lLCBjcmVhdG9yTWFpbCwgdGl0bGUsIGpvaW5Vc2VyTmFtZSwgam9pblVzZXJNYWlsXzEsIHRvLCBkZXNjcmlwdGlvbiwgYW5zd2Vyc18xLCBhbnN3ZXJzXzFfMSwgYW5zd2VyXzEsIHNjaGVtYVJvd3MsIGlzRGF0ZSwgZV8xMV8xLCBodG1sLCBlXzEyO1xuICAgICAgICAgICAgdmFyIGVfMTAsIF9lLCBlXzksIF9mLCBlXzExLCBfZztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2gpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9oLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJzdWNjZXNzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJCRUdJTlwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2gudHJ5cy5wdXNoKFsyLCAzMiwgLCAzNF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHNnLmlkLCBzZy5cXFwiZ3JvdXBOYW1lXFxcIiBGUk9NIHB1YmxpYy5zaGl0YWlfd2lzaCBhcyBzdyBJTk5FUiBKT0lOIHB1YmxpYy5zaGl0YWlfZ3JvdXAgYXMgc2cgT04gc3cuXFxcImdyb3VwSWRcXFwiID0gc2cuaWQgSU5ORVIgSk9JTiBwdWJsaWMuc2hpdGFpX2dyb3VwX2pvaW4gYXMgc2pnIE9OIHNqZy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBBTkQgc2pnLlxcXCJ1c2VySWRcXFwiID0gJDEgV0hFUkUgc3cuaWQgPSAkMjtcIiwgW2lkLCB3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwUm93cyA9IChfaC5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLmqKnpmZDjgYzjgYLjgorjgb7jgZvjgpPjgILjgrDjg6vjg7zjg5flpJbjga7jg6bjg7zjgrbjg7zjgafjgZnjgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VycyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2gubGFiZWwgPSA0O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC50cnlzLnB1c2goWzQsIDE1LCAxNiwgMTddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gX192YWx1ZXMoT2JqZWN0LmtleXMoYW5zd2VyKSksIF9iID0gX2EubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2gubGFiZWwgPSA1O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFfYi5kb25lKSByZXR1cm4gWzMgLypicmVhayovLCAxNF07XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBfYi52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLmxhYmVsID0gNjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2gudHJ5cy5wdXNoKFs2LCAxMSwgMTIsIDEzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYyA9IChlXzkgPSB2b2lkIDAsIF9fdmFsdWVzKE9iamVjdC5rZXlzKGFuc3dlcltrZXldKSkpLCBfZCA9IF9jLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLmxhYmVsID0gNztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhX2QuZG9uZSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMTBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hID0gX2QudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBLZXkgPSBrZXkucmVwbGFjZShcIkFuc3dlcnNcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGFuc3dlcltrZXldW3NjaGVtYV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlIHx8IHZhbHVlID09IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJJTlNFUlQgSU5UTyBwdWJsaWMuc2hpdGFpX2Fuc3dlciAoXFxcInVzZXJJZFxcXCIsIFxcXCJzY2hlbWFJZFxcXCIsIFxcXCJ2YWx1ZVxcXCIpIFNFTEVDVCAkMSwgc3MuaWQsICQyIEZST00gcHVibGljLnNoaXRhaV9zY2hlbWEgYXMgc3MgV0hFUkUgc3MuXFxcInNjaGVtYVR5cGVcXFwiID0gJDMgQU5EIHNzLlxcXCJ0eXBlXFxcIiA9ICQ0IEFORCBzcy5cXFwid2lzaElkXFxcIiA9ICQ1IExJTUlUIDEgUkVUVVJOSU5HIGlkLCBcXFwic2NoZW1hSWRcXFwiLCBcXFwidmFsdWVcXFwiXCIsIFtpZCwgdmFsdWUsIHJlcEtleSwgc2NoZW1hLCB3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydEFuc3dlclJvd3MgPSAoX2guc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc2VydEFuc3dlclJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOCouODs+OCteODvOOBrueZu+mMsuOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYUlkOiBpbnNlcnRBbnN3ZXJSb3dzWzBdW1wic2NoZW1hSWRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGluc2VydEFuc3dlclJvd3NbMF1bXCJ2YWx1ZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2gubGFiZWwgPSA5O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZCA9IF9jLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOiByZXR1cm4gWzMgLypicmVhayovLCAxM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzlfMSA9IF9oLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfOSA9IHsgZXJyb3I6IGVfOV8xIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfZCAmJiAhX2QuZG9uZSAmJiAoX2YgPSBfYy5yZXR1cm4pKSBfZi5jYWxsKF9jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV85KSB0aHJvdyBlXzkuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IF9hLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE0OiByZXR1cm4gWzMgLypicmVhayovLCAxN107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEwXzEgPSBfaC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEwID0geyBlcnJvcjogZV8xMF8xIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxN107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfYiAmJiAhX2IuZG9uZSAmJiAoX2UgPSBfYS5yZXR1cm4pKSBfZS5jYWxsKF9hKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xMCkgdGhyb3cgZV8xMC5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNzogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHN1aS51c2VyX2lkIEFzIG1haWxcXG4gICAgICAgIEZST00gc2hpdGFpX2pvaW4gYXMgc2ogSU5ORVIgSk9JTiBzaGl0YWlfdXNlcl9pbmZvIGFzIHN1aSBPTiBzdWkuaWQgPSBzai5cXFwidXNlcklkXFxcIiBXSEVSRSBzai5cXFwid2lzaElkXFxcIiA9ICQxO1wiLCBbd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE4OlxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclJvd3MgPSAoX2guc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLml6LlrZjlj4LliqDogIXmg4XloLHjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBOYW1lID0gZ3JvdXBSb3dzWzBdW1wiZ3JvdXBOYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHN1aS51c2VyX25hbWUgQXMgbmFtZSwgc3VpLnVzZXJfaWQgQXMgbWFpbFxcbiAgICAgICAgRlJPTSBzaGl0YWlfdXNlcl9pbmZvIGFzIHN1aSBXSEVSRSBzdWkuXFxcImlkXFxcIiA9ICQxO1wiLCBbaWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTk6XG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luVXNlclJvd3MgPSAoX2guc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLlj4LliqDogIXmg4XloLHjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHN1aS51c2VyX25hbWUgQXMgbmFtZSwgc3VpLnVzZXJfaWQgQXMgbWFpbCwgc3cudGl0bGVcXG4gICAgICAgIEZST00gc2hpdGFpX3dpc2ggYXMgc3cgSU5ORVIgSk9JTiBzaGl0YWlfdXNlcl9pbmZvIGFzIHN1aSBPTiBzdy5cXFwiY3JlYXRvcklkXFxcIiA9IHN1aS5cXFwiaWRcXFwiIFdIRVJFIHN3LmlkID0gJDE7XCIsIFt3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9yVXNlclJvd3MgPSAoX2guc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNyZWF0b3JVc2VyUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5L2c5oiQ6ICF5oOF5aCx44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JOYW1lID0gY3JlYXRvclVzZXJSb3dzWzBdW1wibmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JNYWlsID0gY3JlYXRvclVzZXJSb3dzWzBdW1wibWFpbFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlID0gY3JlYXRvclVzZXJSb3dzWzBdW1widGl0bGVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyUm93cy5wdXNoKHsgbWFpbDogY3JlYXRvck1haWwgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luVXNlck5hbWUgPSBqb2luVXNlclJvd3NbMF1bXCJuYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgam9pblVzZXJNYWlsXzEgPSBqb2luVXNlclJvd3NbMF1bXCJtYWlsXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8gPSB1c2VyUm93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJvdykgeyByZXR1cm4gcm93W1wibWFpbFwiXTsgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChtYWlsKSB7IHJldHVybiBtYWlsICE9IGpvaW5Vc2VyTWFpbF8xOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLmxhYmVsID0gMjE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC50cnlzLnB1c2goWzIxLCAyNiwgMjcsIDI4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJzXzEgPSBfX3ZhbHVlcyhhbnN3ZXJzKSwgYW5zd2Vyc18xXzEgPSBhbnN3ZXJzXzEubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2gubGFiZWwgPSAyMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWFuc3dlcnNfMV8xLmRvbmUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDI1XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcl8xID0gYW5zd2Vyc18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc3MuXFxcInNjaGVtYVR5cGVcXFwiLCBzcy5cXFwidHlwZVxcXCIsIHNzLlxcXCJyZXF1aXJlZFxcXCIsIHNzLlxcXCJsYWJlbFxcXCJcXG4gICAgICAgIEZST00gc2hpdGFpX3NjaGVtYSBhcyBzcyBXSEVSRSBzcy5pZCA9ICQxO1wiLCBbYW5zd2VyXzEuc2NoZW1hSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjM6XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFSb3dzID0gKF9oLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY2hlbWFSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgrnjgq3jg7zjg57jga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEYXRlID0gc2NoZW1hUm93c1swXVtcInR5cGVcIl0gPT0gXCJkYXRldGltZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8dHI+PHRkPlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIi5jb25jYXQoc2NoZW1hUm93c1swXVtcImxhYmVsXCJdLCBcIjwvdGQ+PHRkPlwiKS5jb25jYXQoaXNEYXRlID8gZm9ybWF0RGlzcGxheURhdGUoYW5zd2VyXzEudmFsdWUpIDogYW5zd2VyXzEudmFsdWUsIFwiPC90ZD48L3RkPlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLmxhYmVsID0gMjQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJzXzFfMSA9IGFuc3dlcnNfMS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAyMl07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjU6IHJldHVybiBbMyAvKmJyZWFrKi8sIDI4XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTFfMSA9IF9oLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTEgPSB7IGVycm9yOiBlXzExXzEgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDI4XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuc3dlcnNfMV8xICYmICFhbnN3ZXJzXzFfMS5kb25lICYmIChfZyA9IGFuc3dlcnNfMS5yZXR1cm4pKSBfZy5jYWxsKGFuc3dlcnNfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMTEpIHRocm93IGVfMTEuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjg6XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sID0gXCJcXG48IWRvY3R5cGUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJqYVxcXCI+XFxuPGhlYWQ+XFxuICA8bWV0YSBjaGFyc2V0PVxcXCJ1dGYtOFxcXCIgLz5cXG4gIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXFxcIiAvPlxcbiAgPHRpdGxlPlxcdTUzQzJcXHU1MkEwXFx1ODAwNVxcdTMwNkVcXHU1MTY1XFx1NTI5QlxcdTkwMUFcXHU3N0U1PC90aXRsZT5cXG4gIDxzdHlsZT5cXG4gICAgYm9keSB7IGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJIaXJhZ2lubyBLYWt1IEdvdGhpYyBQcm9OXFxcIiwgXFxcIll1IEdvdGhpY1xcXCIsIFxcXCJOb3RvIFNhbnMgSlBcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjsgbWFyZ2luOjA7IHBhZGRpbmc6MDsgYmFja2dyb3VuZDojZjZmOGZiOyBjb2xvcjojMTExOyB9XFxuICAgIC5jb250YWluZXIgeyBtYXgtd2lkdGg6NjAwcHg7IG1hcmdpbjoyOHB4IGF1dG87IGJhY2tncm91bmQ6I2ZmZjsgYm9yZGVyLXJhZGl1czo4cHg7IG92ZXJmbG93OmhpZGRlbjsgYm94LXNoYWRvdzowIDZweCAyNHB4IHJnYmEoMjAsMzAsNjAsMC4wOCk7IH1cXG4gICAgLmhlYWRlciB7IHBhZGRpbmc6MjBweDsgYmFja2dyb3VuZDojN2MzYWVkOyBjb2xvcjojZmZmOyB9XFxuICAgIC5jb250ZW50IHsgcGFkZGluZzoyMHB4OyB9XFxuICAgIC50aXRsZSB7IGZvbnQtc2l6ZToxOHB4OyBtYXJnaW46MCAwIDhweCAwOyB9XFxuICAgIC5tZXRhIHsgZm9udC1zaXplOjEzcHg7IGNvbG9yOiM2YjcyODA7IG1hcmdpbi1ib3R0b206MTJweDsgfVxcbiAgICAuZm9ybSB7IGJhY2tncm91bmQ6I2Y3ZjlmYzsgcGFkZGluZzoxNHB4OyBib3JkZXItcmFkaXVzOjZweDsgbWFyZ2luLWJvdHRvbToxNnB4OyB9XFxuICAgIC5idG4geyBkaXNwbGF5OmlubGluZS1ibG9jazsgcGFkZGluZzoxMnB4IDE4cHg7IGJvcmRlci1yYWRpdXM6OHB4OyB0ZXh0LWRlY29yYXRpb246bm9uZTsgZm9udC13ZWlnaHQ6NjAwOyB9XFxuICAgIC5idG4tcHJpbWFyeSB7IGJhY2tncm91bmQ6IzdjM2FlZDsgY29sb3I6I2ZmZjsgfVxcbiAgICAuZm9vdGVyIHsgZm9udC1zaXplOjEycHg7IGNvbG9yOiM5YWEwYWI7IHBhZGRpbmc6MThweDsgdGV4dC1hbGlnbjpjZW50ZXI7IH1cXG4gICAgdGFibGUgeyB3aWR0aDoxMDAlOyBib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7IH1cXG4gICAgdGQgeyBwYWRkaW5nOjhweCAwOyB2ZXJ0aWNhbC1hbGlnbjp0b3A7IH1cXG4gICAgLmtleSB7IGZvbnQtd2VpZ2h0OjcwMDsgY29sb3I6IzExMTsgd2lkdGg6MzYlOyB9XFxuICAgIC52YWwgeyBjb2xvcjojMjIyOyB9XFxuICA8L3N0eWxlPlxcbjwvaGVhZD5cXG48Ym9keT5cXG4gIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCIgcm9sZT1cXFwiYXJ0aWNsZVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgICAgPGgxIHN0eWxlPVxcXCJmb250LXNpemU6MjBweDttYXJnaW46MFxcXCI+U0hJVEFJPC9oMT5cXG4gICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjZweCAwIDAgMDtmb250LXNpemU6MTNweDtvcGFjaXR5OjAuOTVcXFwiPlxcdTUzQzJcXHU1MkEwXFx1ODAwNVxcdTMwNENcXHU3OEJBXFx1OEE4RFxcdTk4MDVcXHU3NkVFXFx1MzA5MlxcdTUxNjVcXHU1MjlCXFx1MzA1N1xcdTMwN0VcXHUzMDU3XFx1MzA1RjwvcD5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFx1RDgzRFxcdURDNjUgXCIuY29uY2F0KGpvaW5Vc2VyTmFtZSwgXCIgXFx1MzA1NVxcdTMwOTNcXHUzMDRDXFx1NTNDMlxcdTUyQTBcXHUzMEZCXFx1NzhCQVxcdThBOERcXHUzMDU3XFx1MzA3RVxcdTMwNTdcXHUzMDVGIFxcdTIwMTQgXCIpLmNvbmNhdCh0aXRsZSwgXCI8L3A+XFxuICAgICAgPHAgY2xhc3M9XFxcIm1ldGFcXFwiPjxzcGFuIHN0eWxlPVxcXCJmb250LXdlaWdodDo3MDBcXFwiPlxcdTMwQjBcXHUzMEVCXFx1MzBGQ1xcdTMwRDdcXHVGRjFBPC9zcGFuPiBcIikuY29uY2F0KGdyb3VwTmFtZSwgXCIgPC9wPlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm1cXFwiPlxcbiAgICAgICAgPHAgc3R5bGU9XFxcIm1hcmdpbjowIDAgMTJweCAwO1xcXCI+PHN0cm9uZz5cXHU1MTY1XFx1NTI5QlxcdTMwNTVcXHUzMDhDXFx1MzA1RlxcdTc4QkFcXHU4QThEXFx1OTgwNVxcdTc2RUU8L3N0cm9uZz48L3A+XFxuICAgICAgICA8dGFibGU+XFxuICAgICAgXCIpLmNvbmNhdChkZXNjcmlwdGlvbiwgXCJcXG4gICAgICA8L3RhYmxlPlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46MCAwIDE4cHggMDtcXFwiPlxcdTUzQzJcXHU1MkEwXFx1ODAwNVxcdTYwQzVcXHU1ODMxXFx1MzA2RVxcdTY3MDBcXHU2NUIwXFx1NzJCNlxcdTZDQzFcXHUzMDZGXFx1NEUwQlxcdTMwNkVcXHUzMEVBXFx1MzBGM1xcdTMwQUZcXHUzMDY3XFx1NzhCQVxcdThBOERcXHUzMDY3XFx1MzA0RFxcdTMwN0VcXHUzMDU5XFx1MzAwMjwvcD5cXG4gICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBocmVmPVxcXCJcIikuY29uY2F0KHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GUk9OVEVORF9VUkwgKyBcIi9cIiArIFwid2lzaFwiICsgXCIvXCIgKyB3aXNoSWQsIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub29wZW5lclxcXCI+XFx1NTNDMlxcdTUyQTBcXHU4MDA1XFx1NjBDNVxcdTU4MzFcXHUzMDkyXFx1NzhCQVxcdThBOERcXHUzMDU5XFx1MzA4QjwvYT5cXG5cXG4gICAgICA8aHIgc3R5bGU9XFxcImJvcmRlcjpub25lO2JvcmRlci10b3A6MXB4IHNvbGlkICNlZWYyZjc7bWFyZ2luOjE4cHggMDtcXFwiIC8+XFxuICAgICAgPHAgc3R5bGU9XFxcIm1hcmdpbjowO2ZvbnQtc2l6ZToxM3B4O2NvbG9yOiM1NTYwNzA7XFxcIj5cXG4gICAgICAgIFxcdTVGQzVcXHU4OTgxXFx1MzA2N1xcdTMwNDJcXHUzMDhDXFx1MzA3MFxcdTRFM0JcXHU1MEFDXFx1ODAwNVxcdTMwODRcXHU0RUQ2XFx1MzA2RVxcdTUzQzJcXHU1MkEwXFx1ODAwNVxcdTMwNzhcXHU5MDIzXFx1N0Q2MVxcdTMwOTJcXHU1M0Q2XFx1MzA4QVxcdTMwN0VcXHUzMDU3XFx1MzA4N1xcdTMwNDZcXHUzMDAyXFxuICAgICAgPC9wPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9vdGVyXFxcIj5cXG4gICAgICBcXHUzMDUzXFx1MzA2RVxcdTMwRTFcXHUzMEZDXFx1MzBFQlxcdTMwNkZcXHU4MUVBXFx1NTJENVxcdTkxNERcXHU0RkUxXFx1MzA2N1xcdTMwNTlcXHUzMDAyXFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9ib2R5PlxcbjwvaHRtbD5cXG5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0by5sZW5ndGggIT0gMCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDMwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc2VuZEVtYWlsKHRvLCBcIlxcdTMwMTBTSElUQUlcXHUzMDExXFx1NTNDMlxcdTUyQTBcXHU4MDA1XFx1MzA0Q1xcdTUxNjVcXHU1MjlCXFx1MzA1N1xcdTMwN0VcXHUzMDU3XFx1MzA1RiBcXHUyMDE0IFwiLmNvbmNhdCh0aXRsZSwgXCJcXHVGRjA4XCIpLmNvbmNhdChqb2luVXNlck5hbWUsIFwiXFx1RkYwOVwiKSwgaHRtbCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI5OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2guc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2gubGFiZWwgPSAzMDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQ09NTUlUXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDM0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTIgPSBfaC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJST0xMQkFDS1wiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzEyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM0OiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5lb25BcGkucHJvdG90eXBlLnVwZGF0ZVdpc2ggPSBmdW5jdGlvbiAod2lzaCwgaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBncm91cFJvd3MsIHdpc2hJZCwgdXBkYXRlV2lzaF8xLCB1cmxQYXR0ZXJuLCBpc1VybCwgaW1hZ2VEYXRhXzEsIF9hLCB1cGRhdGVSb3dzLCB1c2VyUm93cywgZ3JvdXBOYW1lLCBjcmVhdG9yVXNlclJvd3MsIGNyZWF0b3JOYW1lLCBjcmVhdG9yTWFpbF8yLCB0aXRsZSwgdG8sIGRlc2NyaXB0aW9uLCBodG1sLCBlXzEzO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJzdWNjZXNzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJCRUdJTlwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFsyLCAxMywgLCAxNV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHNnLmlkLCBzZy5cXFwiZ3JvdXBOYW1lXFxcIiBGUk9NIHB1YmxpYy5zaGl0YWlfd2lzaCBhcyBzdyBJTk5FUiBKT0lOIHB1YmxpYy5zaGl0YWlfZ3JvdXAgYXMgc2cgT04gc3cuXFxcImdyb3VwSWRcXFwiID0gc2cuaWQgSU5ORVIgSk9JTiBwdWJsaWMuc2hpdGFpX2dyb3VwX2pvaW4gYXMgc2pnIE9OIHNqZy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBBTkQgc2pnLlxcXCJ1c2VySWRcXFwiID0gJDEgV0hFUkUgc3cuaWQgPSAkMjtcIiwgW2lkLCB3aXNoLmlkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFJvd3MgPSAoX2Iuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5qip6ZmQ44GM44GC44KK44G+44Gb44KT44CC44Kw44Or44O844OX5aSW44Gu44Om44O844K244O844Gn44GZ44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpc2hJZCA9IHdpc2guaWQsIHVwZGF0ZVdpc2hfMSA9IF9fcmVzdCh3aXNoLCBbXCJpZFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxQYXR0ZXJuID0gL14oaHR0cHM/fGZ0cCkoOlxcL1xcL1tcXHdcXC86JSNcXCQmXFw/XFwoXFwpflxcLj1cXCtcXC1dKykvO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNVcmwgPSB1cmxQYXR0ZXJuLnRlc3QodXBkYXRlV2lzaF8xLmltYWdlRGF0YSB8fCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNVcmwpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSB1cGRhdGVXaXNoXzEuaW1hZ2VEYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy51cGxvYWRJbWFnZURhdGEodXBkYXRlV2lzaF8xLmltYWdlRGF0YSB8fCBcIlwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA2O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGFfMSA9IF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiVVBEQVRFIHB1YmxpYy5zaGl0YWlfd2lzaCBTRVQgXCIuY29uY2F0KE9iamVjdC5rZXlzKHVwZGF0ZVdpc2hfMSkucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIsIGlzVXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdXBkYXRlV2lzaF8xW2N1cnJlbnRdID09IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJOVUxMXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY3VycmVudCA9PSBcImltYWdlRGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpbWFnZURhdGFfMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiJ1wiICsgaW1hZ2VEYXRhXzEgKyBcIidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiTlVMTFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIidcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVdpc2hfMVtjdXJyZW50XSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJ1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RyID0gXCJcXFwiXCIuY29uY2F0KGN1cnJlbnQsIFwiXFxcIlwiKSArIFwiID0gXCIgKyBcIlwiLmNvbmNhdCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBzdHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldiAhPT0gXCJcIiA/IHByZXYgKyBcIiwgXCIgKyBzdHIgOiBzdHI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgXCJcIiksIFwiIFdIRVJFIGlkID0gJDEgUkVUVVJOSU5HIGlkO1wiKSwgW3dpc2guaWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJvd3MgPSAoX2Iuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZVJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOBl+OBn+OBhOOBk+OBqOOBruabtOaWsOOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJDT01NSVRcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc3VpLnVzZXJfaWQgQXMgbWFpbFxcbiAgICAgICAgRlJPTSBzaGl0YWlfam9pbiBhcyBzaiBJTk5FUiBKT0lOIHNoaXRhaV91c2VyX2luZm8gYXMgc3VpIE9OIHN1aS5pZCA9IHNqLlxcXCJ1c2VySWRcXFwiIFdIRVJFIHNqLlxcXCJ3aXNoSWRcXFwiID0gJDE7XCIsIFt3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJSb3dzID0gKF9iLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBOYW1lID0gZ3JvdXBSb3dzWzBdW1wiZ3JvdXBOYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHN1aS51c2VyX25hbWUgQXMgbmFtZSwgc3VpLnVzZXJfaWQgQXMgbWFpbCwgc3cudGl0bGVcXG4gICAgICAgIEZST00gc2hpdGFpX3dpc2ggYXMgc3cgSU5ORVIgSk9JTiBzaGl0YWlfdXNlcl9pbmZvIGFzIHN1aSBPTiBzdy5cXFwiY3JlYXRvcklkXFxcIiA9IHN1aS5cXFwiaWRcXFwiIFdIRVJFIHN3LmlkID0gJDE7XCIsIFt3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9yVXNlclJvd3MgPSAoX2Iuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNyZWF0b3JVc2VyUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5L2c5oiQ6ICF5oOF5aCx44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JOYW1lID0gY3JlYXRvclVzZXJSb3dzWzBdW1wibmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JNYWlsXzIgPSBjcmVhdG9yVXNlclJvd3NbMF1bXCJtYWlsXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSBjcmVhdG9yVXNlclJvd3NbMF1bXCJ0aXRsZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJSb3dzLnB1c2goeyBtYWlsOiBjcmVhdG9yTWFpbF8yIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8gPSB1c2VyUm93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJvdykgeyByZXR1cm4gcm93W1wibWFpbFwiXTsgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChtYWlsKSB7IHJldHVybiBtYWlsICE9IGNyZWF0b3JNYWlsXzI7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBPYmplY3Qua2V5cyh3aXNoKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0gX3RoaXMuY29sdW1uTmFtZXMuZmluZChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmouY29sdW1uID09IGN1cnJlbnQ7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0RhdGUgPSBfdGhpcy5kYXRlQ29sdW1ucy5zb21lKGZ1bmN0aW9uIChkdENvbCkgeyByZXR1cm4gZHRDb2wgPT0gY3VycmVudDsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHByZXYgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8dHI+PHRkPlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIuY29uY2F0KG9iai5uYW1lLCBcIjwvdGQ+PHRkPlwiKS5jb25jYXQoaXNEYXRlID8gZm9ybWF0RGlzcGxheURhdGUod2lzaFtjb2x1bW5dKSA6IHdpc2hbY29sdW1uXSwgXCI8L3RkPjwvdHI+XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgPSBcIlxcbjwhZG9jdHlwZSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImphXFxcIj5cXG48aGVhZD5cXG4gIDxtZXRhIGNoYXJzZXQ9XFxcInV0Zi04XFxcIiAvPlxcbiAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcXFwiIC8+XFxuICA8dGl0bGU+XFx1MzA1N1xcdTMwNUZcXHUzMDQ0XFx1NjZGNFxcdTY1QjBcXHU5MDFBXFx1NzdFNTwvdGl0bGU+XFxuICA8c3R5bGU+XFxuICAgIGJvZHkgeyBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiSGlyYWdpbm8gS2FrdSBHb3RoaWMgUHJvTlxcXCIsIFxcXCJZdSBHb3RoaWNcXFwiLCBcXFwiTm90byBTYW5zIEpQXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7IG1hcmdpbjowOyBwYWRkaW5nOjA7IGJhY2tncm91bmQ6I2Y2ZjhmYjsgY29sb3I6IzExMTsgfVxcbiAgICAuY29udGFpbmVyIHsgbWF4LXdpZHRoOjYwMHB4OyBtYXJnaW46MjhweCBhdXRvOyBiYWNrZ3JvdW5kOiNmZmY7IGJvcmRlci1yYWRpdXM6OHB4OyBvdmVyZmxvdzpoaWRkZW47IGJveC1zaGFkb3c6MCA2cHggMjRweCByZ2JhKDIwLDMwLDYwLDAuMDgpOyB9XFxuICAgIC5oZWFkZXIgeyBwYWRkaW5nOjIwcHg7IGJhY2tncm91bmQ6IzBmNzY2ZTsgY29sb3I6I2ZmZjsgfVxcbiAgICAuY29udGVudCB7IHBhZGRpbmc6MjBweDsgfVxcbiAgICAudGl0bGUgeyBmb250LXNpemU6MThweDsgbWFyZ2luOjAgMCA4cHggMDsgfVxcbiAgICAubWV0YSB7IGZvbnQtc2l6ZToxM3B4OyBjb2xvcjojNmI3MjgwOyBtYXJnaW4tYm90dG9tOjEycHg7IH1cXG4gICAgLmNoYW5nZXMgeyBiYWNrZ3JvdW5kOiNmZmY4ZTY7IHBhZGRpbmc6MTJweDsgYm9yZGVyLXJhZGl1czo2cHg7IGJvcmRlcjoxcHggc29saWQgI2YxZTZjODsgbWFyZ2luLWJvdHRvbToxNnB4OyB9XFxuICAgIC5idG4geyBkaXNwbGF5OmlubGluZS1ibG9jazsgcGFkZGluZzoxMnB4IDE4cHg7IGJvcmRlci1yYWRpdXM6OHB4OyB0ZXh0LWRlY29yYXRpb246bm9uZTsgZm9udC13ZWlnaHQ6NjAwOyB9XFxuICAgIC5idG4tcHJpbWFyeSB7IGJhY2tncm91bmQ6IzBmNzY2ZTsgY29sb3I6I2ZmZjsgfVxcbiAgICAuZm9vdGVyIHsgZm9udC1zaXplOjEycHg7IGNvbG9yOiM5YWEwYWI7IHBhZGRpbmc6MThweDsgdGV4dC1hbGlnbjpjZW50ZXI7IH1cXG4gIDwvc3R5bGU+XFxuPC9oZWFkPlxcbjxib2R5PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIiByb2xlPVxcXCJhcnRpY2xlXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICA8aDEgc3R5bGU9XFxcImZvbnQtc2l6ZToyMHB4O21hcmdpbjowXFxcIj5TSElUQUk8L2gxPlxcbiAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46NnB4IDAgMCAwO2ZvbnQtc2l6ZToxM3B4O29wYWNpdHk6MC45NVxcXCI+XFx1MzAwQ1xcdTMwNTdcXHUzMDVGXFx1MzA0NFxcdTMwMERcXHUzMDZFXFx1NjZGNFxcdTY1QjBcXHUzMDRDXFx1MzA0MlxcdTMwOEFcXHUzMDdFXFx1MzA1N1xcdTMwNUY8L3A+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwidGl0bGVcXFwiPlxcdTI3MEZcXHVGRTBGIFxcdTY2RjRcXHU2NUIwXFx1RkYxQVwiLmNvbmNhdCh0aXRsZSwgXCI8L3A+XFxuICAgICAgPHAgY2xhc3M9XFxcIm1ldGFcXFwiPjxzcGFuIHN0eWxlPVxcXCJmb250LXdlaWdodDo3MDBcXFwiPlxcdTY2RjRcXHU2NUIwXFx1ODAwNVxcdUZGMUE8L3NwYW4+IFwiKS5jb25jYXQoY3JlYXRvck5hbWUsIFwiIDwvcD5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjaGFuZ2VzXFxcIj5cXG4gICAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46MCAwIDhweCAwO1xcXCI+PHN0cm9uZz5cXHU1OTA5XFx1NjZGNFxcdTMwNTVcXHUzMDhDXFx1MzA1RlxcdTk4MDVcXHU3NkVFPC9zdHJvbmc+PC9wPlxcbiAgICAgICAgPHByZSBzdHlsZT1cXFwibWFyZ2luOjA7XFxcIj48dGFibGU+XCIpLmNvbmNhdChkZXNjcmlwdGlvbiwgXCI8L3RhYmxlPjwvcHJlPlxcbiAgICAgIDwvZGl2PlxcblxcbiAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46MCAwIDE4cHggMDtcXFwiPlxcdTU5MDlcXHU2NkY0XFx1MzA2RVxcdThBNzNcXHU3RDMwXFx1MzA2RlxcdTRFMEJcXHUzMDZFXFx1MzBFQVxcdTMwRjNcXHUzMEFGXFx1MzA0QlxcdTMwODlcXHUzMDU0XFx1NzhCQVxcdThBOERcXHUzMDRGXFx1MzA2MFxcdTMwNTVcXHUzMDQ0XFx1MzAwMjwvcD5cXG4gICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBocmVmPVxcXCJcIikuY29uY2F0KHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GUk9OVEVORF9VUkwgKyBcIi9cIiArIFwid2lzaFwiICsgXCIvXCIgKyB3aXNoSWQsIFwiXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgcmVsPVxcXCJub29wZW5lclxcXCI+XFx1NjZGNFxcdTY1QjBcXHU1MTg1XFx1NUJCOVxcdTMwOTJcXHU3OEJBXFx1OEE4RFxcdTMwNTlcXHUzMDhCPC9hPlxcblxcbiAgICAgIDxociBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VlZjJmNzttYXJnaW46MThweCAwO1xcXCIgLz5cXG4gICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjA7Zm9udC1zaXplOjEzcHg7Y29sb3I6IzU1NjA3MDtcXFwiPlxcbiAgICAgICAgXFx1NTNDMlxcdTUyQTBcXHU0RTg4XFx1NUI5QVxcdTMwNkVcXHU2NUI5XFx1MzA2RlxcdTRFODhcXHU1QjlBXFx1MzA4NFxcdTUxNjVcXHU1MjlCXFx1NTE4NVxcdTVCQjlcXHUzMDZCXFx1NUY3MVxcdTk3RkZcXHUzMDRDXFx1MzA2QVxcdTMwNDRcXHUzMDRCXFx1MzA1NFxcdTc4QkFcXHU4QThEXFx1MzA0RlxcdTMwNjBcXHUzMDU1XFx1MzA0NFxcdTMwMDJcXG4gICAgICA8L3A+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcbiAgICAgIFxcdTMwNTNcXHUzMDZFXFx1MzBFMVxcdTMwRkNcXHUzMEVCXFx1MzA2RiBTSElUQUkgXFx1MzA0QlxcdTMwODlcXHUzMDZFXFx1ODFFQVxcdTUyRDVcXHU5MDFBXFx1NzdFNVxcdTMwNjdcXHUzMDU5XFx1MzAwMlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvYm9keT5cXG48L2h0bWw+XFxuXFxuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodG8ubGVuZ3RoICE9IDApKSByZXR1cm4gWzMgLypicmVhayovLCAxMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnNlbmRFbWFpbCh0bywgXCJcXHUzMDEwU0hJVEFJXFx1MzAxMVxcdTMwMENcXHUzMDU3XFx1MzA1RlxcdTMwNDRcXHUzMDBEXFx1MzA0Q1xcdTY2RjRcXHU2NUIwXFx1MzA1NVxcdTMwOENcXHUzMDdFXFx1MzA1N1xcdTMwNUYgXFx1MjAxNCBcIi5jb25jYXQodGl0bGUpLCBodG1sKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDEyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOiByZXR1cm4gWzMgLypicmVhayovLCAxNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEzID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiUk9MTEJBQ0tcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZV8xMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS5nZXRXaXNoZXMgPSBmdW5jdGlvbiAoZ3JvdXBJZCwgaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBncm91cFJvd3MsIHdpc2hSb3dzLCBfbG9vcF8xLCB0aGlzXzEsIHdpc2hSb3dzXzIsIHdpc2hSb3dzXzJfMSwgd2lzaCwgZV8xNDtcbiAgICAgICAgICAgIHZhciBlXzE1LCBfYTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMSwgNCwgLCA1XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc2cuaWQgRlJPTSBwdWJsaWMuc2hpdGFpX2dyb3VwIGFzIHNnIElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cF9qb2luIGFzIHNqZyBPTiBzamcuXFxcImdyb3VwSWRcXFwiID0gc2cuaWQgQU5EIHNqZy5cXFwidXNlcklkXFxcIiA9ICQxIFdIRVJFIHNnLlxcXCJpZFxcXCIgPSAkMjtcIiwgW2lkLCBncm91cElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFJvd3MgPSAoX2Iuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5qip6ZmQ44GM44GC44KK44G+44Gb44KT44CC44Kw44Or44O844OX5aSW44Gu44Om44O844K244O844Gn44GZ44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIldJVEggd2lzaCBBU1xcbiAgICAgICAgICAoU0VMRUNUIGlkLCBcIi5jb25jYXQodGhpcy5jb2x1bW5zLmpvaW4oXCIsXCIpLCBcIlxcbiAgICAgICAgICBGUk9NIHB1YmxpYy5zaGl0YWlfd2lzaFxcbiAgICAgICAgICBXSEVSRSBcXFwiZ3JvdXBJZFxcXCIgPSAkMVxcbiAgICAgICAgICBPUkRFUiBCWSBpZCBBU0MpLFxcbiAgICAgICAgYW5zd2VycyBBU1xcbiAgICAgICAgICAoU0VMRUNUIFxcXCJ3aXNoSWRcXFwiLFxcbiAgICAgICAgICAgICAgICAgIGpzb25fYWdnKHRvX2pzb25iKGpzb25fYnVpbGRfb2JqZWN0KCdqb2luZWRBdCcsIFxcXCJqb2luZWRBdFxcXCIsICd1c2VySWQnLCBcXFwidXNlcklkXFxcIikpIHx8IHRvX2pzb25iKGFuc3dlcilcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIE9SREVSIEJZIFxcXCJqb2luZWRBdFxcXCIgQVNDKSBBUyBwYXJ0aWNpcGFudHNcXG4gICAgICAgICAgRlJPTVxcbiAgICAgICAgICAgIChTRUxFQ1QgXFxcIndpc2hJZFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwiam9pbmVkQXRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgXFxcInVzZXJJZFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBqc29uX29iamVjdF9hZ2coXFxcInNjaGVtYVR5cGVcXFwiIHx8ICdBbnN3ZXJzJywgYW5zd2VyKSBBUyBhbnN3ZXJcXG4gICAgICAgICAgICAgIEZST01cXG4gICAgICAgICAgICAgICAgKFNFTEVDVCBzai5cXFwid2lzaElkXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBzai5cXFwiam9pbmVkQXRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNqLlxcXCJ1c2VySWRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzLlxcXCJzY2hlbWFUeXBlXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBqc29uX29iamVjdF9hZ2coc3MudHlwZSwgc2EudmFsdWUpIEFTIGFuc3dlclxcbiAgICAgICAgICAgICAgICBGUk9NIHNoaXRhaV9qb2luIEFTIHNqXFxuICAgICAgICAgICAgICAgIExFRlQgSk9JTiBzaGl0YWlfc2NoZW1hIEFTIHNzIE9OIHNzLlxcXCJ3aXNoSWRcXFwiID0gc2ouXFxcIndpc2hJZFxcXCJcXG4gICAgICAgICAgICAgICAgTEVGVCBKT0lOIHB1YmxpYy5zaGl0YWlfYW5zd2VyIEFTIHNhIE9OIHNhLlxcXCJzY2hlbWFJZFxcXCIgPSBzcy5pZFxcbiAgICAgICAgICAgICAgICBBTkQgc3MuXFxcIndpc2hJZFxcXCIgPSBzai5cXFwid2lzaElkXFxcIlxcbiAgICAgICAgICAgICAgICBBTkQgc2EuXFxcInVzZXJJZFxcXCIgPSBzai5cXFwidXNlcklkXFxcIlxcbiAgICAgICAgICAgICAgICBXSEVSRSBFWElTVFNcXG4gICAgICAgICAgICAgICAgICAgIChTRUxFQ1QgaWRcXG4gICAgICAgICAgICAgICAgICAgICAgRlJPTSB3aXNoXFxuICAgICAgICAgICAgICAgICAgICAgIFdIRVJFIGlkID0gc2ouXFxcIndpc2hJZFxcXCIpXFxuICAgICAgICAgICAgICAgIEdST1VQIEJZIHNqLlxcXCJ3aXNoSWRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2ouXFxcImpvaW5lZEF0XFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNqLlxcXCJ1c2VySWRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3MuXFxcInNjaGVtYVR5cGVcXFwiKVxcbiAgICAgICAgICAgICAgR1JPVVAgQlkgXFxcIndpc2hJZFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgIFxcXCJqb2luZWRBdFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgIFxcXCJ1c2VySWRcXFwiKVxcbiAgICAgICAgICBHUk9VUCBCWSBcXFwid2lzaElkXFxcIiksXFxuICAgICAgICBTQ0hFTUEgQVNcXG4gICAgICAgICAgKFNFTEVDVCBcXFwid2lzaElkXFxcIixcXG4gICAgICAgICAgICAgICAgICB0LnNjaGVtYS0+J3BhcnRpY2lwYXRpb24nIEFTIHBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hLFxcbiAgICAgICAgICAgICAgICAgIHQuc2NoZW1hLT4ncG9zdCcgQVMgcG9zdENvbmZpcm1TY2hlbWFcXG4gICAgICAgICAgRlJPTVxcbiAgICAgICAgICAgIChTRUxFQ1QgXFxcIndpc2hJZFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBqc29uYl9vYmplY3RfYWdnKFxcXCJzY2hlbWFUeXBlXFxcIiwgU0NIRU1BKSBBUyBTQ0hFTUFcXG4gICAgICAgICAgICAgIEZST01cXG4gICAgICAgICAgICAgICAgKFNFTEVDVCBzcy5cXFwid2lzaElkXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBzcy5cXFwic2NoZW1hVHlwZVxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAganNvbl9hZ2coanNvbl9idWlsZF9vYmplY3QoJ3R5cGUnLCBDQVNFXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXSEVOIHNzLlxcXCJzY2hlbWFUeXBlXFxcIiA9ICdwYXJ0aWNpcGF0aW9uJyBUSEVOIHN3LlxcXCJwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYVR5cGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFTFNFIHN3LlxcXCJwb3N0Q29uZmlybVNjaGVtYVR5cGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVORCwgc3MuXFxcInR5cGVcXFwiIHx8ICdMYWJlbCcsIHNzLlxcXCJsYWJlbFxcXCIsIHNzLlxcXCJ0eXBlXFxcIiB8fCAnUmVxdWlyZWQnLCBzcy5cXFwicmVxdWlyZWRcXFwiKSkgQVMgU0NIRU1BXFxuICAgICAgICAgICAgICAgIEZST00gcHVibGljLnNoaXRhaV93aXNoIEFTIHN3XFxuICAgICAgICAgICAgICAgIElOTkVSIEpPSU4gc2hpdGFpX3NjaGVtYSBBUyBzcyBPTiBzcy5cXFwid2lzaElkXFxcIiA9IHN3LmlkXFxuICAgICAgICAgICAgICAgIFdIRVJFIEVYSVNUU1xcbiAgICAgICAgICAgICAgICAgICAgKFNFTEVDVCBpZFxcbiAgICAgICAgICAgICAgICAgICAgICBGUk9NIHdpc2hcXG4gICAgICAgICAgICAgICAgICAgICAgV0hFUkUgaWQgPSBzdy5pZClcXG4gICAgICAgICAgICAgICAgR1JPVVAgQlkgc3MuXFxcIndpc2hJZFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcy5cXFwic2NoZW1hVHlwZVxcXCIpXFxuICAgICAgICAgICAgICBHUk9VUCBCWSBcXFwid2lzaElkXFxcIikgdClcXG4gICAgICAgIFNFTEVDVCB3aXNoLiosXFxuICAgICAgICAgICAgICBzY2hlbWEucGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWEgQVMgXFxcInBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hXFxcIixcXG4gICAgICAgICAgICAgIHNjaGVtYS5wb3N0Q29uZmlybVNjaGVtYSBBUyBcXFwicG9zdENvbmZpcm1TY2hlbWFcXFwiLFxcbiAgICAgICAgICAgICAgYW5zd2Vycy5wYXJ0aWNpcGFudHNcXG4gICAgICAgIEZST00gd2lzaFxcbiAgICAgICAgSU5ORVIgSk9JTiBTQ0hFTUEgT04gc2NoZW1hLlxcXCJ3aXNoSWRcXFwiID0gd2lzaC5pZFxcbiAgICAgICAgTEVGVCBKT0lOIGFuc3dlcnMgT04gc2NoZW1hLlxcXCJ3aXNoSWRcXFwiID0gYW5zd2Vycy5cXFwid2lzaElkXFxcIlxcbiAgICAgICAgT1JERVIgQlkgaWQgQVNDO1wiKSwgW2dyb3VwSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpc2hSb3dzID0gKF9iLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aXNoUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44GX44Gf44GE44GT44Go44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9sb29wXzEgPSBmdW5jdGlvbiAod2lzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXNXaXNoID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogd2lzaC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvcklkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblBhcnRpY2lwYW50czogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uTGFiZWw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hOiB7IHR5cGU6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RDb25maXJtU2NoZW1hOiB7IHR5cGU6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3bjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cod2lzaFtcImlkXCJdLCB3aXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmNyZWF0ZVJlc3BvbnNlRGF0YSh3aXNoLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXh0Q29sdW1ucyA9IHRoaXNfMS5jb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2wgIT09ICdcInBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hVHlwZVwiJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sICE9PSAnXCJwb3N0Q29uZmlybVNjaGVtYVR5cGVcIic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0Q29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVwQ29sdW1uID0gY29sdW1uLnJlcGxhY2VBbGwoJ1wiJywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVwQ29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gd2lzaFtyZXBDb2x1bW5dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc1dpc2ggPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVzV2lzaCksIChfYSA9IHt9LCBfYVtyZXBDb2x1bW5dID0gdmFsdWUsIF9hKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwb3N0Q29uZmlybVNjaGVtYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhcnRpY2lwYW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpc2ggJiYgY29sdW1uIGluIHdpc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aXNoW2NvbHVtbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNXaXNoID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlc1dpc2gpLCAoX2EgPSB7fSwgX2FbY29sdW1uXSA9IHdpc2hbY29sdW1uXSwgX2EpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnB1c2gocmVzV2lzaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc18xID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh3aXNoUm93c18yID0gX192YWx1ZXMod2lzaFJvd3MpLCB3aXNoUm93c18yXzEgPSB3aXNoUm93c18yLm5leHQoKTsgIXdpc2hSb3dzXzJfMS5kb25lOyB3aXNoUm93c18yXzEgPSB3aXNoUm93c18yLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXNoID0gd2lzaFJvd3NfMl8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbG9vcF8xKHdpc2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlXzE1XzEpIHsgZV8xNSA9IHsgZXJyb3I6IGVfMTVfMSB9OyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2lzaFJvd3NfMl8xICYmICF3aXNoUm93c18yXzEuZG9uZSAmJiAoX2EgPSB3aXNoUm93c18yLnJldHVybikpIF9hLmNhbGwod2lzaFJvd3NfMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xNSkgdGhyb3cgZV8xNS5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xNCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfMTQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5lb25BcGkucHJvdG90eXBlLmdldEdyb3VwcyA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGpvaW5Hcm91cFJvd3MsIGpvaW5Hcm91cFJvd3NfMSwgam9pbkdyb3VwUm93c18xXzEsIGdyb3VwLCBncm91cE9iaiwgam9pbk1lbWJlclJvd3MsIGVfMTZfMSwgZV8xNztcbiAgICAgICAgICAgIHZhciBlXzE2LCBfYTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMSwgMTEsICwgMTJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzZy5pZCwgc2cuXFxcImdyb3VwTmFtZVxcXCJcXG4gICAgICAgIEZST00gcHVibGljLnNoaXRhaV9ncm91cF9qb2luIGFzIHNnaiBJTk5FUiBKT0lOIHNoaXRhaV9ncm91cCBhcyBzZyBPTiBzZy5pZCA9IHNnai5cXFwiZ3JvdXBJZFxcXCIgV0hFUkUgc2dqLlxcXCJ1c2VySWRcXFwiID0gJDEgT1JERVIgQlkgc2cuaWQgQVNDO1wiLCBbaWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5Hcm91cFJvd3MgPSAoX2Iuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpvaW5Hcm91cFJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuWPguWKoOOCsOODq+ODvOODl+OBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMywgOCwgOSwgMTBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5Hcm91cFJvd3NfMSA9IF9fdmFsdWVzKGpvaW5Hcm91cFJvd3MpLCBqb2luR3JvdXBSb3dzXzFfMSA9IGpvaW5Hcm91cFJvd3NfMS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWpvaW5Hcm91cFJvd3NfMV8xLmRvbmUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXAgPSBqb2luR3JvdXBSb3dzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwT2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBncm91cFtcImlkXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGdyb3VwW1wiZ3JvdXBOYW1lXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBESVNUSU5DVCBzdWkuaWQsIHN1aS51c2VyX25hbWUsIHN1aS51c2VyX2lkXFxuICAgICAgICBGUk9NIHB1YmxpYy5zaGl0YWlfZ3JvdXBfam9pbiBhcyBzZ2ogSU5ORVIgSk9JTiBzaGl0YWlfdXNlcl9pbmZvIGFzIHN1aSBPTiBzdWkuaWQgPSBzZ2ouXFxcInVzZXJJZFxcXCIgV0hFUkUgc2dqLlxcXCJncm91cElkXFxcIiA9ICQxO1wiLCBbZ3JvdXBbXCJpZFwiXV0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgam9pbk1lbWJlclJvd3MgPSAoX2Iuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpvaW5NZW1iZXJSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjg6Hjg7Pjg5Djg7zmg4XloLHjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBPYmoubWVtYmVycyA9IGpvaW5NZW1iZXJSb3dzLm1hcChmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG1lbWJlcltcImlkXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBtZW1iZXJbXCJ1c2VyX25hbWVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBtZW1iZXJbXCJ1c2VyX2lkXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnB1c2goZ3JvdXBPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA2O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luR3JvdXBSb3dzXzFfMSA9IGpvaW5Hcm91cFJvd3NfMS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OiByZXR1cm4gWzMgLypicmVhayovLCAxMF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTZfMSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTYgPSB7IGVycm9yOiBlXzE2XzEgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoam9pbkdyb3VwUm93c18xXzEgJiYgIWpvaW5Hcm91cFJvd3NfMV8xLmRvbmUgJiYgKF9hID0gam9pbkdyb3VwUm93c18xLnJldHVybikpIF9hLmNhbGwoam9pbkdyb3VwUm93c18xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xNikgdGhyb3cgZV8xNi5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTcgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzE3O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUuaW5zZXJ0R3JvdXAgPSBmdW5jdGlvbiAoaWQsIGdyb3VwKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgaW5zZXJ0Um93cywgaW5zZXJ0Sm9pblJvd3MsIGVfMTg7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHsgaWQ6IFwiXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkJFR0lOXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzIsIDYsICwgOF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiSU5TRVJUIElOVE8gc2hpdGFpX2dyb3VwIChcXFwiZ3JvdXBOYW1lXFxcIilcXG4gICAgICAgICAgVkFMVUVTKCQxKSBSRVRVUk5JTkcgaWQ7XCIsIFtncm91cC5uYW1lXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRSb3dzID0gKF9hLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnNlcnRSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgrDjg6vjg7zjg5fnmbvpjLLjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiSU5TRVJUIElOVE8gc2hpdGFpX2dyb3VwX2pvaW4gKFxcXCJncm91cElkXFxcIiwgXFxcInVzZXJJZFxcXCIpXFxuICAgICAgICAgIFZBTFVFUygkMSwgJDIpIFJFVFVSTklORyBpZDtcIiwgW2luc2VydFJvd3NbMF1bXCJpZFwiXSwgaWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydEpvaW5Sb3dzID0gKF9hLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnNlcnRKb2luUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44Kw44Or44O844OX5Y+C5Yqg55m76Yyy44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkNPTU1JVFwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmlkID0gaW5zZXJ0Um93c1swXVtcImlkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTggPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJST0xMQkFDS1wiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfMTg7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS5pbnZpdGF0aW9uR3JvdXAgPSBmdW5jdGlvbiAoaWRfMSwgX2EpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24gKGlkLCBfYikge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBncm91cFJvd3MsIHVzZXJSb3dzLCBuZXdHcm91cFJvd3MsIGluc2VydFJvd3MsIGVfMTk7XG4gICAgICAgICAgICB2YXIgaW52aXRhdGlvblVzZXJJZCA9IF9iLmludml0YXRpb25Vc2VySWQsIGdyb3VwSWQgPSBfYi5ncm91cElkO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcInN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkJFR0lOXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy50cnlzLnB1c2goWzIsIDgsICwgMTBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzamcuaWQgRlJPTSBwdWJsaWMuc2hpdGFpX2dyb3VwX2pvaW4gYXMgc2pnIFdIRVJFIHNqZy5cXFwiZ3JvdXBJZFxcXCIgPSAkMiBBTkQgc2pnLlxcXCJ1c2VySWRcXFwiID0gJDE7XCIsIFtpZCwgZ3JvdXBJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBSb3dzID0gKF9jLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncm91cFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuaoqemZkOOBjOOBguOCiuOBvuOBm+OCk+OAguOCsOODq+ODvOODl+WkluOBruODpuODvOOCtuODvOOBp+OBmeOAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1QgaWQgRlJPTSBzaGl0YWlfdXNlcl9pbmZvIFdIRVJFIHVzZXJfaWQgPSAkMVwiLCBbaW52aXRhdGlvblVzZXJJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclJvd3MgPSAoX2Muc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjg6bjg7zjgrbjg7zmg4XloLHlj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIGlkIEZST00gc2hpdGFpX2dyb3VwX2pvaW4gV0hFUkUgXFxcInVzZXJJZFxcXCIgPSAkMSBBTkQgXFxcImdyb3VwSWRcXFwiID0gJDJcIiwgW3VzZXJSb3dzWzBdW1wiaWRcIl0sIGdyb3VwSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0dyb3VwUm93cyA9IChfYy5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3R3JvdXBSb3dzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgZnjgafjgavlj4LliqDjgZfjgabjgYTjgovjgrDjg6vjg7zjg5fjgafjgZnjgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiSU5TRVJUIElOVE8gc2hpdGFpX2dyb3VwX2pvaW4gKFxcXCJncm91cElkXFxcIiwgXFxcInVzZXJJZFxcXCIpIFZBTFVFUyAoJDEsICQyKSBSRVRVUk5JTkcgaWQ7XCIsIFtncm91cElkLCB1c2VyUm93c1swXVtcImlkXCJdXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRSb3dzID0gKF9jLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnNlcnRSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgrDjg6vjg7zjg5fjgrjjg6fjgqTjg7PnmbvpjLLjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQ09NTUlUXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzE5ID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiUk9MTEJBQ0tcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzE5O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5lb25BcGkucHJvdG90eXBlLmpvaW5XaXNoID0gZnVuY3Rpb24gKGlkXzEsIF9hKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uIChpZCwgX2IpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgZ3JvdXBSb3dzLCB3aXNoUm93cywgam9pbldpc2hSb3dzLCB1c2VyUm93cywgZ3JvdXBOYW1lLCBqb2luVXNlclJvd3MsIGNyZWF0b3JVc2VyUm93cywgY3JlYXRvck5hbWUsIGNyZWF0b3JNYWlsLCB0aXRsZSwgam9pblVzZXJOYW1lLCBqb2luVXNlck1haWxfMiwgdG8sIGh0bWwsIGVfMjA7XG4gICAgICAgICAgICB2YXIgd2lzaElkID0gX2Iud2lzaElkO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcInN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkJFR0lOXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy50cnlzLnB1c2goWzIsIDEyLCAsIDE0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc2cuaWQsIHNnLlxcXCJncm91cE5hbWVcXFwiIEZST00gcHVibGljLnNoaXRhaV93aXNoIGFzIHN3IElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cCBhcyBzZyBPTiBzdy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBJTk5FUiBKT0lOIHB1YmxpYy5zaGl0YWlfZ3JvdXBfam9pbiBhcyBzamcgT04gc2pnLlxcXCJncm91cElkXFxcIiA9IHNnLmlkIEFORCBzamcuXFxcInVzZXJJZFxcXCIgPSAkMSBXSEVSRSBzdy5pZCA9ICQyO1wiLCBbaWQsIHdpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBSb3dzID0gKF9jLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncm91cFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuaoqemZkOOBjOOBguOCiuOBvuOBm+OCk+OAguOCsOODq+ODvOODl+WkluOBruODpuODvOOCtuODvOOBp+OBmeOAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1QgaWQgRlJPTSBzaGl0YWlfam9pbiBXSEVSRSBcXFwidXNlcklkXFxcIiA9ICQxIEFORCBcXFwid2lzaElkXFxcIiA9ICQyO1wiLCBbaWQsIHdpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lzaFJvd3MgPSAoX2Muc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpc2hSb3dzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgZnjgafjgavjgZfjgZ/jgYTjgZPjgajjgavlj4LliqDmuIjjgb/jgafjgZnjgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiSU5TRVJUIElOVE8gc2hpdGFpX2pvaW4gKFxcXCJ1c2VySWRcXFwiLCBcXFwiam9pbmVkQXRcXFwiLCBcXFwid2lzaElkXFxcIikgVkFMVUVTICgkMSwgTk9XKCksICQyKSBSRVRVUk5JTkcgaWRcIiwgW2lkLCB3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5XaXNoUm93cyA9IChfYy5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoam9pbldpc2hSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgZfjgZ/jgYTjgZPjgajlj4LliqDnmbvpjLLjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHN1aS51c2VyX2lkIEFzIG1haWxcXG4gICAgICAgIEZST00gc2hpdGFpX2pvaW4gYXMgc2ogSU5ORVIgSk9JTiBzaGl0YWlfdXNlcl9pbmZvIGFzIHN1aSBPTiBzdWkuaWQgPSBzai5cXFwidXNlcklkXFxcIiBXSEVSRSBzai5cXFwid2lzaElkXFxcIiA9ICQxO1wiLCBbd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyUm93cyA9IChfYy5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlclJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuaXouWtmOWPguWKoOiAheaDheWgseOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cE5hbWUgPSBncm91cFJvd3NbMF1bXCJncm91cE5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc3VpLnVzZXJfbmFtZSBBcyBuYW1lLCBzdWkudXNlcl9pZCBBcyBtYWlsXFxuICAgICAgICBGUk9NIHNoaXRhaV91c2VyX2luZm8gYXMgc3VpIFdIRVJFIHN1aS5cXFwiaWRcXFwiID0gJDE7XCIsIFtpZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgam9pblVzZXJSb3dzID0gKF9jLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5Y+C5Yqg6ICF5oOF5aCx44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzdWkudXNlcl9uYW1lIEFzIG5hbWUsIHN1aS51c2VyX2lkIEFzIG1haWwsIHN3LnRpdGxlXFxuICAgICAgICBGUk9NIHNoaXRhaV93aXNoIGFzIHN3IElOTkVSIEpPSU4gc2hpdGFpX3VzZXJfaW5mbyBhcyBzdWkgT04gc3cuXFxcImNyZWF0b3JJZFxcXCIgPSBzdWkuXFxcImlkXFxcIiBXSEVSRSBzdy5pZCA9ICQxO1wiLCBbd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9yVXNlclJvd3MgPSAoX2Muc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNyZWF0b3JVc2VyUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5L2c5oiQ6ICF5oOF5aCx44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JOYW1lID0gY3JlYXRvclVzZXJSb3dzWzBdW1wibmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JNYWlsID0gY3JlYXRvclVzZXJSb3dzWzBdW1wibWFpbFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlID0gY3JlYXRvclVzZXJSb3dzWzBdW1widGl0bGVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyUm93cy5wdXNoKHsgbWFpbDogY3JlYXRvck1haWwgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luVXNlck5hbWUgPSBqb2luVXNlclJvd3NbMF1bXCJuYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgam9pblVzZXJNYWlsXzIgPSBqb2luVXNlclJvd3NbMF1bXCJtYWlsXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8gPSB1c2VyUm93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJvdykgeyByZXR1cm4gcm93W1wibWFpbFwiXTsgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChtYWlsKSB7IHJldHVybiBtYWlsICE9IGpvaW5Vc2VyTWFpbF8yOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgPSBcIlxcbjwhZG9jdHlwZSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImphXFxcIj5cXG48aGVhZD5cXG4gIDxtZXRhIGNoYXJzZXQ9XFxcInV0Zi04XFxcIiAvPlxcbiAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcXFwiIC8+XFxuICA8dGl0bGU+XFx1NjVCMFxcdTMwNUZcXHUzMDZBXFx1NTNDMlxcdTUyQTBcXHU4MDA1XFx1MzBFNlxcdTMwRkNcXHUzMEI2XFx1MzBGQ1xcdTMwNkVcXHU5MDFBXFx1NzdFNTwvdGl0bGU+XFxuICA8c3R5bGU+XFxuICAgIGJvZHkgeyBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiSGlyYWdpbm8gS2FrdSBHb3RoaWMgUHJvTlxcXCIsIFxcXCJZdSBHb3RoaWNcXFwiLCBcXFwiTm90byBTYW5zIEpQXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7IG1hcmdpbjowOyBwYWRkaW5nOjA7IGJhY2tncm91bmQ6I2Y2ZjhmYjsgY29sb3I6IzExMTsgfVxcbiAgICAuY29udGFpbmVyIHsgbWF4LXdpZHRoOjYwMHB4OyBtYXJnaW46MjhweCBhdXRvOyBiYWNrZ3JvdW5kOiNmZmY7IGJvcmRlci1yYWRpdXM6OHB4OyBvdmVyZmxvdzpoaWRkZW47IGJveC1zaGFkb3c6MCA2cHggMjRweCByZ2JhKDIwLDMwLDYwLDAuMDgpOyB9XFxuICAgIC5oZWFkZXIgeyBwYWRkaW5nOjIwcHg7IGJhY2tncm91bmQ6IzdjM2FlZDsgY29sb3I6I2ZmZjsgfVxcbiAgICAuY29udGVudCB7IHBhZGRpbmc6MjBweDsgfVxcbiAgICAudGl0bGUgeyBmb250LXNpemU6MThweDsgbWFyZ2luOjAgMCA4cHggMDsgfVxcbiAgICAubWV0YSB7IGZvbnQtc2l6ZToxM3B4OyBjb2xvcjojNmI3MjgwOyBtYXJnaW4tYm90dG9tOjEycHg7IH1cXG4gICAgLmZvcm0geyBiYWNrZ3JvdW5kOiNmN2Y5ZmM7IHBhZGRpbmc6MTRweDsgYm9yZGVyLXJhZGl1czo2cHg7IG1hcmdpbi1ib3R0b206MTZweDsgfVxcbiAgICAuYnRuIHsgZGlzcGxheTppbmxpbmUtYmxvY2s7IHBhZGRpbmc6MTJweCAxOHB4OyBib3JkZXItcmFkaXVzOjhweDsgdGV4dC1kZWNvcmF0aW9uOm5vbmU7IGZvbnQtd2VpZ2h0OjYwMDsgfVxcbiAgICAuYnRuLXByaW1hcnkgeyBiYWNrZ3JvdW5kOiM3YzNhZWQ7IGNvbG9yOiNmZmY7IH1cXG4gICAgLmZvb3RlciB7IGZvbnQtc2l6ZToxMnB4OyBjb2xvcjojOWFhMGFiOyBwYWRkaW5nOjE4cHg7IHRleHQtYWxpZ246Y2VudGVyOyB9XFxuICAgIHRhYmxlIHsgd2lkdGg6MTAwJTsgYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlOyB9XFxuICAgIHRkIHsgcGFkZGluZzo4cHggMDsgdmVydGljYWwtYWxpZ246dG9wOyB9XFxuICAgIC5rZXkgeyBmb250LXdlaWdodDo3MDA7IGNvbG9yOiMxMTE7IHdpZHRoOjM2JTsgfVxcbiAgICAudmFsIHsgY29sb3I6IzIyMjsgfVxcbiAgPC9zdHlsZT5cXG48L2hlYWQ+XFxuPGJvZHk+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiIHJvbGU9XFxcImFydGljbGVcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgIDxoMSBzdHlsZT1cXFwiZm9udC1zaXplOjIwcHg7bWFyZ2luOjBcXFwiPlNISVRBSTwvaDE+XFxuICAgICAgPHAgc3R5bGU9XFxcIm1hcmdpbjo2cHggMCAwIDA7Zm9udC1zaXplOjEzcHg7b3BhY2l0eTowLjk1XFxcIj5cXHUzMEU2XFx1MzBGQ1xcdTMwQjZcXHUzMEZDXFx1MzA0Q1xcdTUzQzJcXHU1MkEwXFx1MzA1N1xcdTMwN0VcXHUzMDU3XFx1MzA1RlxcdTMwMDI8L3A+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwidGl0bGVcXFwiPlxcdUQ4M0RcXHVEQzY1IFwiLmNvbmNhdChqb2luVXNlck5hbWUsIFwiIFxcdTMwNTVcXHUzMDkzXFx1MzA0Q1xcdTUzQzJcXHU1MkEwXFx1MzA1N1xcdTMwN0VcXHUzMDU3XFx1MzA1RiBcXHUyMDE0IFwiKS5jb25jYXQodGl0bGUsIFwiPC9wPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJtZXRhXFxcIj48c3BhbiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6NzAwXFxcIj5cXHUzMEIwXFx1MzBFQlxcdTMwRkNcXHUzMEQ3XFx1RkYxQTwvc3Bhbj4gXCIpLmNvbmNhdChncm91cE5hbWUsIFwiIDwvcD5cXG5cXG4gICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjAgMCAxOHB4IDA7XFxcIj5cXHU1M0MyXFx1NTJBMFxcdTgwMDVcXHU2MEM1XFx1NTgzMVxcdTMwNkVcXHU2NzAwXFx1NjVCMFxcdTcyQjZcXHU2Q0MxXFx1MzA2RlxcdTRFMEJcXHUzMDZFXFx1MzBFQVxcdTMwRjNcXHUzMEFGXFx1MzA2N1xcdTc4QkFcXHU4QThEXFx1MzA2N1xcdTMwNERcXHUzMDdFXFx1MzA1OVxcdTMwMDI8L3A+XFxuICAgICAgPGEgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgaHJlZj1cXFwiXCIpLmNvbmNhdChwcm9jZXNzLmVudi5SRUFDVF9BUFBfRlJPTlRFTkRfVVJMICsgXCIvXCIgKyBcIndpc2hcIiArIFwiL1wiICsgd2lzaElkLCBcIlxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHJlbD1cXFwibm9vcGVuZXJcXFwiPlxcdTUzQzJcXHU1MkEwXFx1ODAwNVxcdTYwQzVcXHU1ODMxXFx1MzA5MlxcdTc4QkFcXHU4QThEXFx1MzA1OVxcdTMwOEI8L2E+XFxuXFxuICAgICAgPGhyIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtib3JkZXItdG9wOjFweCBzb2xpZCAjZWVmMmY3O21hcmdpbjoxOHB4IDA7XFxcIiAvPlxcbiAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46MDtmb250LXNpemU6MTNweDtjb2xvcjojNTU2MDcwO1xcXCI+XFxuICAgICAgICBcXHU1RkM1XFx1ODk4MVxcdTMwNjdcXHUzMDQyXFx1MzA4Q1xcdTMwNzBcXHU0RTNCXFx1NTBBQ1xcdTgwMDVcXHUzMDg0XFx1NEVENlxcdTMwNkVcXHU1M0MyXFx1NTJBMFxcdTgwMDVcXHUzMDc4XFx1OTAyM1xcdTdENjFcXHUzMDkyXFx1NTNENlxcdTMwOEFcXHUzMDdFXFx1MzA1N1xcdTMwODdcXHUzMDQ2XFx1MzAwMlxcbiAgICAgIDwvcD5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxuICAgICAgXFx1MzA1M1xcdTMwNkVcXHUzMEUxXFx1MzBGQ1xcdTMwRUJcXHUzMDZGXFx1ODFFQVxcdTUyRDVcXHU5MTREXFx1NEZFMVxcdTMwNjdcXHUzMDU5XFx1MzAwMlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvYm9keT5cXG48L2h0bWw+XFxuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodG8ubGVuZ3RoICE9IDApKSByZXR1cm4gWzMgLypicmVhayovLCAxMF07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnNlbmRFbWFpbCh0bywgXCJcXHUzMDEwU0hJVEFJXFx1MzAxMVxcdTMwRTZcXHUzMEZDXFx1MzBCNlxcdTMwRkNcXHUzMDRDXFx1NTNDMlxcdTUyQTBcXHUzMDU3XFx1MzA3RVxcdTMwNTdcXHUzMDVGIFxcdTIwMTQgXCIuY29uY2F0KHRpdGxlLCBcIlxcdUZGMDhcIikuY29uY2F0KGpvaW5Vc2VyTmFtZSwgXCJcXHVGRjA5XCIpLCBodG1sKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMTA7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkNPTU1JVFwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxNF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzIwID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiUk9MTEJBQ0tcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZV8yMDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTmVvbkFwaTtcbn0oKSk7XG5leHBvcnQgeyBOZW9uQXBpIH07XG4iLCJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgdXRjIGZyb20gXCJkYXlqcy9wbHVnaW4vdXRjXCI7XG5pbXBvcnQgdGltZXpvbmUgZnJvbSBcImRheWpzL3BsdWdpbi90aW1lem9uZVwiO1xuZGF5anMuZXh0ZW5kKHV0Yyk7XG5kYXlqcy5leHRlbmQodGltZXpvbmUpO1xuZGF5anMudHouc2V0RGVmYXVsdChcIkFzaWEvVG9reW9cIik7XG5leHBvcnQgdmFyIGZvcm1hdERhdGUgPSBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdm9pZCAwKSB7IGZvcm1hdCA9IFwiWVlZWS9NTS9ERFwiOyB9XG4gICAgcmV0dXJuIGRheWpzKGRhdGUpLnV0YygpLmZvcm1hdChmb3JtYXQpO1xufTtcbmV4cG9ydCB2YXIgZm9ybWF0RGlzcGxheURhdGUgPSBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdm9pZCAwKSB7IGZvcm1hdCA9IFwiWVlZWS9NTS9ERCBISDptbVwiOyB9XG4gICAgcmV0dXJuIGRheWpzKGRhdGUpLnV0YygpLmZvcm1hdChmb3JtYXQpO1xufTtcbmV4cG9ydCB2YXIgZm9ybWF0RGF0ZVRpbWUgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBkYXlqcyhkYXRlKS51dGMoKS5mb3JtYXQoXCJZWVlZLU1NLUREVEhIOm1tXCIpO1xufTtcbmV4cG9ydCB2YXIgZ2V0VGltZVJlbWFpbmluZyA9IGZ1bmN0aW9uIChkZWFkbGluZSkge1xuICAgIHZhciBub3cgPSBkYXlqcygpO1xuICAgIHZhciB0YXJnZXQgPSBkYXlqcyhkZWFkbGluZSk7XG4gICAgdmFyIGRpZmYgPSB0YXJnZXQuZGlmZihub3cpO1xuICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF5czogMCxcbiAgICAgICAgICAgIGhvdXJzOiAwLFxuICAgICAgICAgICAgbWludXRlczogMCxcbiAgICAgICAgICAgIHNlY29uZHM6IDAsXG4gICAgICAgICAgICBleHBpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdGV4dDogXCLmnJ/pmZDliIfjgoxcIixcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGRheXMgPSBNYXRoLmZsb29yKGRpZmYgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgIHZhciBob3VycyA9IE1hdGguZmxvb3IoKGRpZmYgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gICAgdmFyIG1pbnV0ZXMgPSBNYXRoLmZsb29yKChkaWZmICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG4gICAgdmFyIHNlY29uZHMgPSBNYXRoLmZsb29yKChkaWZmICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG4gICAgdmFyIHRleHQgPSBcIlwiO1xuICAgIGlmIChkYXlzID4gMCkge1xuICAgICAgICB0ZXh0ID0gXCJcXHU2QjhCXFx1MzA4QSBcIi5jb25jYXQoZGF5cywgXCJcXHU2NUU1IFwiKS5jb25jYXQoaG91cnMsIFwiXFx1NjY0MlxcdTk1OTNcIik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGhvdXJzID4gMCkge1xuICAgICAgICB0ZXh0ID0gXCJcXHU2QjhCXFx1MzA4QSBcIi5jb25jYXQoaG91cnMsIFwiXFx1NjY0MlxcdTk1OTMgXCIpLmNvbmNhdChtaW51dGVzLCBcIlxcdTUyMDZcIik7XG4gICAgfVxuICAgIGVsc2UgaWYgKG1pbnV0ZXMgPiAwKSB7XG4gICAgICAgIHRleHQgPSBcIlxcdTZCOEJcXHUzMDhBIFwiLmNvbmNhdChtaW51dGVzLCBcIlxcdTUyMDZcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0ZXh0ID0gXCJcXHU2QjhCXFx1MzA4QSBcIi5jb25jYXQoc2Vjb25kcywgXCJcXHU3OUQyXCIpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBkYXlzOiBkYXlzLFxuICAgICAgICBob3VyczogaG91cnMsXG4gICAgICAgIG1pbnV0ZXM6IG1pbnV0ZXMsXG4gICAgICAgIHNlY29uZHM6IHNlY29uZHMsXG4gICAgICAgIGV4cGlyZWQ6IGZhbHNlLFxuICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgIH07XG59O1xuZXhwb3J0IHZhciBpc0RhdGVJblBhc3QgPSBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBkYXlqcyhkYXRlKS50eigpLmlzQmVmb3JlKGRheWpzKCkpO1xufTtcbmV4cG9ydCB2YXIgYWRkRGF5cyA9IGZ1bmN0aW9uIChkYXRlLCBkYXlzKSB7XG4gICAgcmV0dXJuIGRheWpzKGRhdGUpLnR6KCkuYWRkKGRheXMsIFwiZGF5XCIpLnRvSVNPU3RyaW5nKCk7XG59O1xuZXhwb3J0IHZhciBhZGRIb3VycyA9IGZ1bmN0aW9uIChkYXRlLCBob3Vycykge1xuICAgIHJldHVybiBkYXlqcyhkYXRlKS50eigpLmFkZChob3VycywgXCJob3VyXCIpLnRvSVNPU3RyaW5nKCk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGdvb2dsZS1jbG91ZC9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRheWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRheWpzL3BsdWdpbi90aW1lem9uZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vdXRjXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZXNlbmRcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZyA9IE9iamVjdC5jcmVhdGUoKHR5cGVvZiBJdGVyYXRvciA9PT0gXCJmdW5jdGlvblwiID8gSXRlcmF0b3IgOiBPYmplY3QpLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIGcubmV4dCA9IHZlcmIoMCksIGdbXCJ0aHJvd1wiXSA9IHZlcmIoMSksIGdbXCJyZXR1cm5cIl0gPSB2ZXJiKDIpLCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgeyBOZW9uQXBpIH0gZnJvbSBcIi4vTmVvbkFwaVwiO1xucmVxdWlyZShcImRvdGVudlwiKS5jb25maWcoKTtcbnZhciBhcHAgPSBleHByZXNzKCk7XG52YXIgbmVvbkFwaSA9IG5ldyBOZW9uQXBpKCk7XG4vLyBDT1JT44Gu6Kit5a6aXG52YXIgY29yc09wdGlvbnMgPSB7XG4gICAgb3JpZ2luOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRlJPTlRFTkRfVVJMLCAvLyDjg5Xjg63jg7Pjg4jjgqjjg7Pjg4njga5VUkzjgpLnkrDlooPlpInmlbDjgYvjgonlj5blvpdcbiAgICBtZXRob2Q6IFtdLFxufTtcbi8vIOOCouOCr+OCu+OCueODiOODvOOCr+ODs+iqjeiovCjjg6njg4Pjg5Hjg7zplqLmlbApXG52YXIgaW5pdEFjY2Vzc1Rva2VuQXV0aCA9IGZ1bmN0aW9uICh1c2VySW5mbykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0LCBpc0V4cGlyZWQsIGlzU3VjY2VzcztcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5hY2Nlc3NUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICBpc0V4cGlyZWQgPSB0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiICYmIHJlc3VsdCA9PT0gXCJleHBpcmVkIGFjY2VzcyB0b2tlblwiO1xuICAgICAgICAgICAgICAgIGlzU3VjY2VzcyA9IHR5cGVvZiByZXN1bHQgIT09IFwic3RyaW5nXCIgJiYgTnVtYmVyKHJlc3VsdC5pZCkgPiAwICYmICFpc0V4cGlyZWQ7XG4gICAgICAgICAgICAgICAgaWYgKGlzRXhwaXJlZClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBcIuOCouOCr+OCu+OCueODiOODvOOCr+ODs+OBjOacieWKueacn+mZkOWIh+OCjOOBp+OBmeOAglwiIH07XG4gICAgICAgICAgICAgICAgaWYgKCFpc1N1Y2Nlc3MpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IHsgbWVzc2FnZTogXCLjgqLjgq/jgrvjgrnjg4jjg7zjgq/jg7Pjga7oqo3oqLzjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIiB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXN1bHRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbi8vIENPUlPoqK3lrprjgahKU09O44OR44O844K144O844KS44Of44OJ44Or44Km44Kn44Ki44Go44GX44Gm6YGp55SoXG5hcHAudXNlKGNvcnMoY29yc09wdGlvbnMpKTtcbmFwcC51c2UoZXhwcmVzcy5qc29uKHsgbGltaXQ6IFwiMTBtYlwiIH0pKTtcbi8vIOODreOCsOOCpOODs+iqjeiovOOCkuihjOOBhijmiJDlip/mmYLjgqLjgq/jgrvjgrnjg4jjg7zjgq/jg7PjgpLov5TljbTjgZnjgospXG5hcHAucG9zdChcIi9hcGkvdjEvYXV0aC9sb2dpblwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCwgZXJyb3JfMTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5lb25BcGkubG9naW5BdXRoKHJlcS5ib2R5KV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl8xLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL2F1dGgvYWNjZXNzVG9rZW5cIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB1c2VySW5mbywgX2EsIGlkLCBuYW1lXzEsIGVtYWlsLCBlcnJvcl8yO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgdXNlckluZm8gPSByZXEuYm9keS51c2VySW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgX2EgPSBfYi5zZW50KCksIGlkID0gX2EuaWQsIG5hbWVfMSA9IF9hLm5hbWUsIGVtYWlsID0gX2EuZW1haWw7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogeyBpZDogTnVtYmVyKGlkKSwgbmFtZTogbmFtZV8xLCBlbWFpbDogZW1haWwgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgZXJyb3JfMiA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl8yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL2F1dGgvcmVmcmVzaFRva2VuXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdXNlckluZm8sIHJlc3BvbnNlXzEsIGVycm9yXzM7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcbiAgICAgICAgICAgICAgICB1c2VySW5mbyA9IHJlcS5ib2R5LnVzZXJJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5lb25BcGkucmVmcmVzaFRva2VuQXV0aCh1c2VySW5mbyldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlXzEgIT09IFwiZXJyb3JcIikge1xuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IF9fYXNzaWduKHt9LCByZXNwb25zZV8xKSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGVycm9yXzMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfMy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmFwcC5wb3N0KFwiL2FwaS92MS9wb3N0L2luc2VydFVzZXJJbmZvXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdXBkYXRlT2JqLCByZXN1bHQsIGVycm9yXzQ7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVPYmogPSByZXEuYm9keTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLmluc2VydFVzZXJJbmZvKHVwZGF0ZU9iaildO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGVycm9yXzQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfNC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmFwcC5wb3N0KFwiL2FwaS92MS9wb3N0L2luc2VydFdpc2hcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSwgdXNlckluZm8sIGxlZnQsIHVzZXJJZCwgcmVzdWx0LCBlcnJvcl81O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgX2EgPSByZXEuYm9keSwgdXNlckluZm8gPSBfYS51c2VySW5mbywgbGVmdCA9IF9fcmVzdChfYSwgW1widXNlckluZm9cIl0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRBY2Nlc3NUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB1c2VySWQgPSAoX2Iuc2VudCgpKS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLmluc2VydFdpc2gobGVmdCwgTnVtYmVyKHVzZXJJZCkpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlcnJvcl81ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzUubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvZ2V0L3dpc2hCeUlkXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIHVzZXJJbmZvLCBpZCwgdXNlcklkLCByZXN1bHQsIGVycm9yXzY7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICBfYSA9IHJlcS5ib2R5LCB1c2VySW5mbyA9IF9hLnVzZXJJbmZvLCBpZCA9IF9hLmlkO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRBY2Nlc3NUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB1c2VySWQgPSAoX2Iuc2VudCgpKS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLmdldFdpc2hCeUlkKE51bWJlcihpZCksIE51bWJlcih1c2VySWQpKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHsgd2lzaDogcmVzdWx0IH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVycm9yXzYgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfNi5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmFwcC5wb3N0KFwiL2FwaS92MS9wb3N0L2luc2VydEFuc3dlclwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCB1c2VySW5mbywgaWQsIGxlZnQsIHVzZXJJZCwgcmVzdWx0LCBlcnJvcl83O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgX2EgPSByZXEuYm9keSwgdXNlckluZm8gPSBfYS51c2VySW5mbywgaWQgPSBfYS5pZCwgbGVmdCA9IF9fcmVzdChfYSwgW1widXNlckluZm9cIiwgXCJpZFwiXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW5pdEFjY2Vzc1Rva2VuQXV0aCh1c2VySW5mbyldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHVzZXJJZCA9IChfYi5zZW50KCkpLmlkO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5lb25BcGkuaW5zZXJ0QW5zd2VyKGxlZnQsIE51bWJlcih1c2VySWQpLCBOdW1iZXIoaWQpKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfNyA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl83Lm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL3Bvc3QvdXBkYXRlV2lzaFwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCB1c2VySW5mbywgbGVmdCwgdXNlcklkLCByZXN1bHQsIGVycm9yXzg7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICBfYSA9IHJlcS5ib2R5LCB1c2VySW5mbyA9IF9hLnVzZXJJbmZvLCBsZWZ0ID0gX19yZXN0KF9hLCBbXCJ1c2VySW5mb1wiXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW5pdEFjY2Vzc1Rva2VuQXV0aCh1c2VySW5mbyldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHVzZXJJZCA9IChfYi5zZW50KCkpLmlkO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5lb25BcGkudXBkYXRlV2lzaChsZWZ0LCBOdW1iZXIodXNlcklkKSldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVycm9yXzggPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfOC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmFwcC5wb3N0KFwiL2FwaS92MS9nZXQvd2lzaGVzXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIHVzZXJJbmZvLCBpZCwgdXNlcklkLCByZXN1bHQsIGVycm9yXzk7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICBfYSA9IHJlcS5ib2R5LCB1c2VySW5mbyA9IF9hLnVzZXJJbmZvLCBpZCA9IF9hLmlkO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRBY2Nlc3NUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB1c2VySWQgPSAoX2Iuc2VudCgpKS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLmdldFdpc2hlcyhOdW1iZXIoaWQpLCBOdW1iZXIodXNlcklkKSldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiB7IHdpc2hlczogcmVzdWx0IH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVycm9yXzkgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfOS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmFwcC5wb3N0KFwiL2FwaS92MS9nZXQvZ3JvdXBzXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdXNlckluZm8sIHVzZXJJZCwgcmVzdWx0LCBlcnJvcl8xMDtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIHVzZXJJbmZvID0gcmVxLmJvZHkudXNlckluZm87XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW5pdEFjY2Vzc1Rva2VuQXV0aCh1c2VySW5mbyldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHVzZXJJZCA9IChfYS5zZW50KCkpLmlkO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5lb25BcGkuZ2V0R3JvdXBzKE51bWJlcih1c2VySWQpKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHsgZ3JvdXBzOiByZXN1bHQgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfMTAgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfMTAubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvcG9zdC9pbnNlcnRHcm91cFwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCB1c2VySW5mbywgbGVmdCwgdXNlcklkLCByZXN1bHQsIGVycm9yXzExO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgX2EgPSByZXEuYm9keSwgdXNlckluZm8gPSBfYS51c2VySW5mbywgbGVmdCA9IF9fcmVzdChfYSwgW1widXNlckluZm9cIl0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRBY2Nlc3NUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB1c2VySWQgPSAoX2Iuc2VudCgpKS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLmluc2VydEdyb3VwKE51bWJlcih1c2VySWQpLCBsZWZ0KV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfMTEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfMTEubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvcG9zdC9pbnZpdGF0aW9uR3JvdXBcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSwgdXNlckluZm8sIGxlZnQsIHVzZXJJZCwgcmVzdWx0LCBlcnJvcl8xMjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIF9hID0gcmVxLmJvZHksIHVzZXJJbmZvID0gX2EudXNlckluZm8sIGxlZnQgPSBfX3Jlc3QoX2EsIFtcInVzZXJJbmZvXCJdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9iLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5pbnZpdGF0aW9uR3JvdXAoTnVtYmVyKHVzZXJJZCksIGxlZnQpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlcnJvcl8xMiA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl8xMi5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmFwcC5wb3N0KFwiL2FwaS92MS9wb3N0L2pvaW5XaXNoXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIHVzZXJJbmZvLCBsZWZ0LCB1c2VySWQsIHJlc3VsdCwgZXJyb3JfMTM7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICBfYSA9IHJlcS5ib2R5LCB1c2VySW5mbyA9IF9hLnVzZXJJbmZvLCBsZWZ0ID0gX19yZXN0KF9hLCBbXCJ1c2VySW5mb1wiXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW5pdEFjY2Vzc1Rva2VuQXV0aCh1c2VySW5mbyldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHVzZXJJZCA9IChfYi5zZW50KCkpLmlkO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5lb25BcGkuam9pbldpc2goTnVtYmVyKHVzZXJJZCksIGxlZnQpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlcnJvcl8xMyA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl8xMy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmFwcC5saXN0ZW4oNDIwMCwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwicG9ydCBcIi5jb25jYXQoNDIwMCwgXCIgXFx1MzA2N1xcdTMwQjVcXHUzMEZDXFx1MzBEMFxcdTMwRkNcXHU4RDc3XFx1NTJENVxcdTRFMkRcIikpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=