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
                        return [4 /*yield*/, this.pool.query("SELECT sg.id, sg.\"groupName\" FROM public.shitai_wish as sw INNER JOIN public.shitai_group as sg ON sw.\"groupId\" = sg.id INNER JOIN public.shitai_group_join as sjg ON sjg.\"groupId\" = sg.id AND sjg.\"userId\" = $1 WHERE sw.id = $2;", [id, wishId])];
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
    NeonApi.prototype.getComments = function (wishId, id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, groupRows, commentRows, e_16;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = [];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.pool.query("SELECT sg.id FROM public.shitai_wish as sw INNER JOIN public.shitai_group as sg ON sw.\"groupId\" = sg.id INNER JOIN public.shitai_group_join as sjg ON sjg.\"groupId\" = sg.id AND sjg.\"userId\" = $1 WHERE sw.id = $2;", [id, wishId])];
                    case 2:
                        groupRows = (_a.sent()).rows;
                        if (groupRows.length !== 1) {
                            throw {
                                message: "権限がありません。グループ外のユーザーです。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("SELECT id, \"wishId\", \"userId\", \"userName\", text, quote, \"createdAt\", \"quoteAbsoluteStart\", \"quoteAbsoluteEnd\" FROM public.shitai_comment WHERE \"wishId\" = $1 ORDER BY id DESC;", [wishId])];
                    case 3:
                        commentRows = (_a.sent()).rows;
                        if (commentRows.length === 0)
                            return [2 /*return*/, response];
                        response = commentRows.map(function (row) { return ({
                            id: String(row.id),
                            wishId: row.wishId ? String(row.wishId) : undefined,
                            userId: String(row.userId),
                            userName: row.userName || "",
                            text: row.text,
                            quote: row.quote || undefined,
                            createdAt: row.createdAt,
                            quoteAbsoluteStart: row.quoteAbsoluteStart || undefined,
                            quoteAbsoluteEnd: row.quoteAbsoluteEnd || undefined,
                        }); });
                        return [2 /*return*/, response];
                    case 4:
                        e_16 = _a.sent();
                        throw e_16;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    NeonApi.prototype.postComment = function (comment, id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, wishId, text, quote, quoteAbsoluteStart, quoteAbsoluteEnd, groupRows, posterRows, postUserName, postUserMail_1, insertRows, row, participantRows, creatorUserRows, creatorName, creatorMail, title, to, html, e_17;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = null;
                        return [4 /*yield*/, this.pool.query("BEGIN")];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 11, , 13]);
                        wishId = comment.wishId, text = comment.text, quote = comment.quote, quoteAbsoluteStart = comment.quoteAbsoluteStart, quoteAbsoluteEnd = comment.quoteAbsoluteEnd;
                        return [4 /*yield*/, this.pool.query("SELECT sg.id FROM public.shitai_wish as sw INNER JOIN public.shitai_group as sg ON sw.\"groupId\" = sg.id INNER JOIN public.shitai_group_join as sjg ON sjg.\"groupId\" = sg.id AND sjg.\"userId\" = $1 WHERE sw.id = $2;", [id, wishId])];
                    case 3:
                        groupRows = (_a.sent()).rows;
                        if (groupRows.length !== 1) {
                            throw {
                                message: "権限がありません。グループ外のユーザーです。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("SELECT sui.user_name As name, sui.user_id As mail FROM shitai_user_info as sui WHERE sui.id = $1;", [id])];
                    case 4:
                        posterRows = (_a.sent()).rows;
                        if (posterRows.length === 0) {
                            throw { message: "投稿者情報の取得に失敗しました。" };
                        }
                        postUserName = posterRows[0]["name"];
                        postUserMail_1 = posterRows[0]["mail"];
                        return [4 /*yield*/, this.pool.query("INSERT INTO public.shitai_comment (\"wishId\", \"userId\", \"userName\", text, quote, \"quoteAbsoluteStart\", \"quoteAbsoluteEnd\", \"createdAt\") VALUES ($1, $2, $3, $4, $5, $6, $7, NOW()) RETURNING id, \"wishId\", \"userId\", \"userName\", text, quote, \"quoteAbsoluteStart\", \"quoteAbsoluteEnd\", \"createdAt\";", [
                                wishId,
                                id,
                                postUserName,
                                text,
                                quote || null,
                                quoteAbsoluteStart || null,
                                quoteAbsoluteEnd || null,
                            ])];
                    case 5:
                        insertRows = (_a.sent()).rows;
                        if (insertRows.length !== 1) {
                            throw { message: "コメントの登録に失敗しました。" };
                        }
                        row = insertRows[0];
                        response = {
                            id: String(row.id),
                            wishId: row.wishId ? String(row.wishId) : undefined,
                            userId: String(row.userId),
                            userName: row.userName || "",
                            text: row.text,
                            quote: row.quote || undefined,
                            createdAt: row.createdAt,
                            quoteAbsoluteStart: row.quoteAbsoluteStart || undefined,
                            quoteAbsoluteEnd: row.quoteAbsoluteEnd || undefined,
                        };
                        return [4 /*yield*/, this.pool.query("COMMIT")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.pool.query("SELECT sui.user_id As mail\n        FROM shitai_join as sj INNER JOIN shitai_user_info as sui ON sui.id = sj.\"userId\" WHERE sj.\"wishId\" = $1;", [wishId])];
                    case 7:
                        participantRows = (_a.sent()).rows;
                        return [4 /*yield*/, this.pool.query("SELECT sui.user_name As name, sui.user_id As mail, sw.title\n        FROM shitai_wish as sw INNER JOIN shitai_user_info as sui ON sw.\"creatorId\" = sui.\"id\" WHERE sw.id = $1;", [wishId])];
                    case 8:
                        creatorUserRows = (_a.sent()).rows;
                        if (creatorUserRows.length === 0) {
                            throw {
                                message: "作成者情報の取得に失敗しました。",
                            };
                        }
                        creatorName = creatorUserRows[0]["name"];
                        creatorMail = creatorUserRows[0]["mail"];
                        title = creatorUserRows[0]["title"];
                        to = participantRows
                            .map(function (row) { return row["mail"]; })
                            .concat(creatorMail)
                            .filter(function (mail) { return mail && mail !== postUserMail_1; });
                        html = "\n<!doctype html>\n<html lang=\"ja\">\n<head>\n  <meta charset=\"utf-8\" />\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\n  <title>\u30B3\u30E1\u30F3\u30C8\u306E\u901A\u77E5</title>\n  <style>\n    body { font-family: -apple-system, BlinkMacSystemFont, \"Hiragino Kaku Gothic ProN\", \"Yu Gothic\", \"Noto Sans JP\", Arial, sans-serif; margin:0; padding:0; background:#f6f8fb; color:#111; }\n    .container { max-width:600px; margin:28px auto; background:#fff; border-radius:8px; overflow:hidden; box-shadow:0 6px 24px rgba(20,30,60,0.08); }\n    .header { padding:20px; background:#1f6feb; color:#fff; }\n    .content { padding:20px; }\n    .title { font-size:18px; margin:0 0 8px 0; }\n    .meta { font-size:13px; color:#6b7280; margin-bottom:12px; }\n    .card { background:#f7f9fc; padding:14px; border-radius:6px; margin-bottom:16px; }\n    .btn { display:inline-block; padding:12px 18px; border-radius:8px; text-decoration:none; font-weight:600; }\n    .btn-primary { background:#1f6feb; color:#fff; }\n    .footer { font-size:12px; color:#9aa0ab; padding:18px; text-align:center; }\n    pre { white-space:pre-wrap; word-wrap:break-word; }\n  </style>\n</head>\n<body>\n  <div class=\"container\" role=\"article\">\n    <div class=\"header\">\n      <h1 style=\"font-size:20px;margin:0\">SHITAI</h1>\n      <p style=\"margin:6px 0 0 0;font-size:13px;opacity:0.95\">\u30B3\u30E1\u30F3\u30C8\u304C\u6295\u7A3F\u3055\u308C\u307E\u3057\u305F</p>\n    </div>\n\n    <div class=\"content\">\n      <p class=\"title\">\uD83D\uDCAC ".concat(postUserName, " \u3055\u3093\u304C\u30B3\u30E1\u30F3\u30C8\u3057\u307E\u3057\u305F \u2014 ").concat(title, "</p>\n      <p class=\"meta\"><span class=\"kv\">\u30B0\u30EB\u30FC\u30D7\uFF1A</span> ").concat(groupRows[0]["groupName"], " </p>\n\n      <div class=\"card\">\n        <p style=\"margin:0 0 8px 0;\"><strong>\u30B3\u30E1\u30F3\u30C8</strong></p>\n        <pre style=\"margin:0;\">").concat(text, "</pre>\n      </div>\n      ").concat(quote ? "<div class=\"card\"><p style=\"margin:0 0 8px 0;\"><strong>\u5F15\u7528</strong></p><pre style=\"margin:0;\">".concat(quote, "</pre></div>") : "", "\n\n      <p style=\"margin:0 0 18px 0;\">\u8A73\u7D30\u306F\u4E0B\u306E\u30EA\u30F3\u30AF\u304B\u3089\u78BA\u8A8D\u3057\u3066\u304F\u3060\u3055\u3044\u3002</p>\n\n      <a class=\"btn btn-primary\" href=\"").concat(process.env.REACT_APP_FRONTEND_URL + "/" + "wish" + "/" + wishId, "\" target=\"_blank\" rel=\"noopener\">\u30B3\u30E1\u30F3\u30C8\u3092\u78BA\u8A8D\u3059\u308B</a>\n\n      <hr style=\"border:none;border-top:1px solid #eef2f7;margin:18px 0;\" />\n      <p style=\"margin:0;font-size:13px;color:#556070;\">\u5FC5\u8981\u3067\u3042\u308C\u3070\u6295\u7A3F\u8005\u3078\u8FD4\u4FE1\u3084\u30EA\u30A2\u30AF\u30B7\u30E7\u30F3\u3092\u3057\u3066\u307F\u3066\u304F\u3060\u3055\u3044\u3002</p>\n    </div>\n    <div class=\"footer\">\u3053\u306E\u30E1\u30FC\u30EB\u306F\u81EA\u52D5\u914D\u4FE1\u3067\u3059\u3002</div>\n  </div>\n</body>\n</html>\n");
                        if (!(to.length != 0)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.sendEmail(to, "\u3010SHITAI\u3011\u30B3\u30E1\u30F3\u30C8\u304C\u6295\u7A3F\u3055\u308C\u307E\u3057\u305F \u2014 ".concat(title, "\uFF08").concat(postUserName, "\uFF09"), html)];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10: return [2 /*return*/, response];
                    case 11:
                        e_17 = _a.sent();
                        return [4 /*yield*/, this.pool.query("ROLLBACK")];
                    case 12:
                        _a.sent();
                        throw e_17;
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    NeonApi.prototype.getGroups = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, joinGroupRows, joinGroupRows_1, joinGroupRows_1_1, group, groupObj, joinMemberRows, e_18_1, e_19;
            var e_18, _a;
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
                        e_18_1 = _b.sent();
                        e_18 = { error: e_18_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (joinGroupRows_1_1 && !joinGroupRows_1_1.done && (_a = joinGroupRows_1.return)) _a.call(joinGroupRows_1);
                        }
                        finally { if (e_18) throw e_18.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/, response];
                    case 11:
                        e_19 = _b.sent();
                        throw e_19;
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    NeonApi.prototype.insertGroup = function (id, group) {
        return __awaiter(this, void 0, void 0, function () {
            var response, insertRows, insertJoinRows, e_20;
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
                        e_20 = _a.sent();
                        return [4 /*yield*/, this.pool.query("ROLLBACK")];
                    case 7:
                        _a.sent();
                        throw e_20;
                    case 8: return [2 /*return*/, response];
                }
            });
        });
    };
    NeonApi.prototype.invitationGroup = function (id_1, _a) {
        return __awaiter(this, arguments, void 0, function (id, _b) {
            var response, groupRows, userRows, newGroupRows, insertRows, e_21;
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
                        e_21 = _c.sent();
                        return [4 /*yield*/, this.pool.query("ROLLBACK")];
                    case 9:
                        _c.sent();
                        throw e_21;
                    case 10: return [2 /*return*/, response];
                }
            });
        });
    };
    NeonApi.prototype.joinWish = function (id_1, _a) {
        return __awaiter(this, arguments, void 0, function (id, _b) {
            var response, groupRows, wishRows, joinWishRows, userRows, groupName, joinUserRows, creatorUserRows, creatorName, creatorMail, title, joinUserName, joinUserMail_2, to, html, e_22;
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
                        e_22 = _c.sent();
                        return [4 /*yield*/, this.pool.query("ROLLBACK")];
                    case 13:
                        _c.sent();
                        throw e_22;
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
app.post("/api/v1/get/comments", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userInfo, wishId, userId, result, error_14;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, userInfo = _a.userInfo, wishId = _a.wishId;
                return [4 /*yield*/, initAccessTokenAuth(userInfo)];
            case 1:
                userId = (_b.sent()).id;
                return [4 /*yield*/, neonApi.getComments(Number(wishId), Number(userId))];
            case 2:
                result = _b.sent();
                res.status(200).json({
                    status: 200,
                    result: { comments: result },
                });
                return [2 /*return*/];
            case 3:
                error_14 = _b.sent();
                res.status(500).json({
                    error: error_14.message,
                    status: 500,
                });
                return [2 /*return*/];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.post("/api/v1/post/comment", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userInfo, left, userId, result, error_15;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, userInfo = _a.userInfo, left = __rest(_a, ["userInfo"]);
                return [4 /*yield*/, initAccessTokenAuth(userInfo)];
            case 1:
                userId = (_b.sent()).id;
                return [4 /*yield*/, neonApi.postComment(left, Number(userId))];
            case 2:
                result = _b.sent();
                res.status(200).json({
                    status: 200,
                    result: { comment: result },
                });
                return [2 /*return*/];
            case 3:
                error_15 = _b.sent();
                res.status(500).json({
                    error: error_15.message,
                    status: 500,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0I7QUFDaEQsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyxJQUFJO0FBQ0wsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUJBQWlCO0FBQy9DLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSUFBSTtBQUNMO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvLi9zcmMvYmFja2VuZC9OZW9uQXBpLnRzIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkLy4vdXRpbHMvZGF0ZS50cyIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC9leHRlcm5hbCBjb21tb25qcyBcIkBnb29nbGUtY2xvdWQvc3RvcmFnZVwiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwiY29yc1wiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwiY3J5cHRvXCIiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvZXh0ZXJuYWwgY29tbW9uanMgXCJkYXlqc1wiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwiZGF5anMvcGx1Z2luL3RpbWV6b25lXCIiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvZXh0ZXJuYWwgY29tbW9uanMgXCJkYXlqcy9wbHVnaW4vdXRjXCIiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC9leHRlcm5hbCBjb21tb25qcyBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwicGdcIiIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC9leHRlcm5hbCBjb21tb25qcyBcInJlc2VuZFwiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvLi9zcmMvYmFja2VuZC9zZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnID0gT2JqZWN0LmNyZWF0ZSgodHlwZW9mIEl0ZXJhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBJdGVyYXRvciA6IE9iamVjdCkucHJvdG90eXBlKTtcbiAgICByZXR1cm4gZy5uZXh0ID0gdmVyYigwKSwgZ1tcInRocm93XCJdID0gdmVyYigxKSwgZ1tcInJldHVyblwiXSA9IHZlcmIoMiksIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG52YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG5pbXBvcnQgeyBQb29sIH0gZnJvbSBcInBnXCI7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIkBnb29nbGUtY2xvdWQvc3RvcmFnZVwiO1xudmFyIHJhbmRvbVVVSUQgPSByZXF1aXJlKFwiY3J5cHRvXCIpLnJhbmRvbVVVSUQ7XG5pbXBvcnQgeyBSZXNlbmQgfSBmcm9tIFwicmVzZW5kXCI7XG5pbXBvcnQgeyBjcmVhdGVIYXNoLCByYW5kb21CeXRlcyB9IGZyb20gXCJjcnlwdG9cIjtcbmltcG9ydCAqIGFzIGp3dCBmcm9tIFwianNvbndlYnRva2VuXCI7XG5pbXBvcnQgeyBmb3JtYXREaXNwbGF5RGF0ZSB9IGZyb20gXCIuLi8uLi91dGlscy9kYXRlXCI7XG5yZXF1aXJlKFwiZG90ZW52XCIpLmNvbmZpZygpO1xudmFyIE5lb25BcGkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTmVvbkFwaSgpIHtcbiAgICAgICAgdGhpcy5wb29sID0gbmV3IFBvb2woe1xuICAgICAgICAgICAgaG9zdDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0RCX0hPU1QsXG4gICAgICAgICAgICB1c2VyOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfREJfVVNFUixcbiAgICAgICAgICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfREJfTkFNRSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfREJfUEFTU1dPUkQsXG4gICAgICAgICAgICBwb3J0OiBwYXJzZUludChwcm9jZXNzLmVudi5SRUFDVF9BUFBfREJfUE9SVCB8fCBcIjU0MzJcIiksXG4gICAgICAgICAgICBzc2w6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNhbHQgPSBwcm9jZXNzLmVudi5SRUFDVF9BUFBfREJfU0FMVDtcbiAgICAgICAgdGhpcy5jb25maWcgPSB7XG4gICAgICAgICAgICBleHBpcmVzSW46IFwiMUhcIixcbiAgICAgICAgICAgIGFsZ29yaXRobTogXCJIUzI1NlwiLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXG4gICAgICAgICAgICAnXCJncm91cElkXCInLFxuICAgICAgICAgICAgJ1wiY3JlYXRvcklkXCInLFxuICAgICAgICAgICAgJ1wiY2F0ZWdvcnlcIicsXG4gICAgICAgICAgICAnXCJpbWFnZURhdGFcIicsXG4gICAgICAgICAgICAnXCJ0aXRsZVwiJyxcbiAgICAgICAgICAgICdcImRpc3BsYXlEYXRlXCInLFxuICAgICAgICAgICAgJ1wiZGlzcGxheVRleHRcIicsXG4gICAgICAgICAgICAnXCJub3Rlc1wiJyxcbiAgICAgICAgICAgICdcImRlYWRsaW5lXCInLFxuICAgICAgICAgICAgJ1wibWluUGFydGljaXBhbnRzXCInLFxuICAgICAgICAgICAgJ1wibWF4UGFydGljaXBhbnRzXCInLFxuICAgICAgICAgICAgJ1wiYWN0aW9uTGFiZWxcIicsXG4gICAgICAgICAgICAnXCJ3aXRoZHJhd25cIicsXG4gICAgICAgICAgICAnXCJjcmVhdGVkQXRcIicsXG4gICAgICAgICAgICAnXCJwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYVR5cGVcIicsXG4gICAgICAgICAgICAnXCJwb3N0Q29uZmlybVNjaGVtYVR5cGVcIicsXG4gICAgICAgICAgICAnXCJpbXBsZW1lbnRhdGlvbkRhdGV0aW1lXCInLFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmNvbHVtbk5hbWVzID0gW1xuICAgICAgICAgICAgeyBjb2x1bW46IFwiY2F0ZWdvcnlcIiwgbmFtZTogXCLjgqvjg4bjgrTjg6pcIiB9LFxuICAgICAgICAgICAgeyBjb2x1bW46IFwidGl0bGVcIiwgbmFtZTogXCLjgr/jgqTjg4jjg6tcIiB9LFxuICAgICAgICAgICAgeyBjb2x1bW46IFwiZGlzcGxheURhdGVcIiwgbmFtZTogXCLooajnpLrnlKjml6XmmYJcIiB9LFxuICAgICAgICAgICAgeyBjb2x1bW46IFwiZGlzcGxheVRleHRcIiwgbmFtZTogXCLooajnpLrnlKjmloflrZdcIiB9LFxuICAgICAgICAgICAgeyBjb2x1bW46IFwibm90ZXNcIiwgbmFtZTogXCLlgpnogINcIiB9LFxuICAgICAgICAgICAgeyBjb2x1bW46IFwiZGVhZGxpbmVcIiwgbmFtZTogXCLmnJ/pmZDml6VcIiB9LFxuICAgICAgICAgICAgeyBjb2x1bW46IFwibWluUGFydGljaXBhbnRzXCIsIG5hbWU6IFwi5pyA5L2O56K65a6a5Lq65pWwXCIgfSxcbiAgICAgICAgICAgIHsgY29sdW1uOiBcIm1heFBhcnRpY2lwYW50c1wiLCBuYW1lOiBcIuacgOWkp+eiuuWumuS6uuaVsFwiIH0sXG4gICAgICAgICAgICB7IGNvbHVtbjogXCJpbXBsZW1lbnRhdGlvbkRhdGV0aW1lXCIsIG5hbWU6IFwi5a6f5pa95pelXCIgfSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5kYXRlQ29sdW1ucyA9IFtcImRlYWRsaW5lXCIsIFwiaW1wbGVtZW50YXRpb25EYXRldGltZVwiXTtcbiAgICB9XG4gICAgTmVvbkFwaS5wcm90b3R5cGUuY3JlYXRlVG9rZW5zID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHZhciByZXNwb25zZSA9IHsgYWNjZXNzVG9rZW46IFwiXCIsIHJlZnJlc2hUb2tlbjogXCJcIiB9O1xuICAgICAgICAvLyDjgqLjgq/jgrvjgrnjg4jjg7zjgq/jg7PkvZzmiJBcbiAgICAgICAgdmFyIHJhbmRvbVN0ciA9IHJhbmRvbUJ5dGVzKDE2KS50b1N0cmluZyhcImhleFwiKTtcbiAgICAgICAgLy8g44CM44Op44Oz44OA44Og5paH5a2X5YiXKDE244OQ44Kk44OIKSArIOODquOCr+OCqOOCueODiC7jg6bjg7zjgrbjg7xJRCjjgr3jg6vjg4jlgKQp44CN44Gn44OP44OD44K344Ol5YCk44KS5L2c5oiQXG4gICAgICAgIHZhciBzYWx0ZWRSYW5kb21TdHIgPSByYW5kb21TdHIgKyB0aGlzLnNhbHQ7XG4gICAgICAgIHZhciBhY2Nlc3NUb2tlbiA9IGNyZWF0ZUhhc2goXCJzaGEyNTZcIilcbiAgICAgICAgICAgIC51cGRhdGUoc2FsdGVkUmFuZG9tU3RyKVxuICAgICAgICAgICAgLmRpZ2VzdChcImhleFwiKTtcbiAgICAgICAgLy8g44Oq44OV44Os44OD44K344Ol44OI44O844Kv44Oz5L2c5oiQXG4gICAgICAgIHJhbmRvbVN0ciA9IHJhbmRvbUJ5dGVzKDE2KS50b1N0cmluZyhcImhleFwiKTtcbiAgICAgICAgLy8g44CM44Op44Oz44OA44Og5paH5a2X5YiXKDE244OQ44Kk44OIKSArIOODquOCr+OCqOOCueODiC7jg6bjg7zjgrbjg7xJRCjjgr3jg6vjg4jlgKQp44CN44Gn44OP44OD44K344Ol5YCk44KS5L2c5oiQXG4gICAgICAgIHNhbHRlZFJhbmRvbVN0ciA9IHJhbmRvbVN0ciArIHRoaXMuc2FsdDtcbiAgICAgICAgdmFyIHJlZnJlc2hUb2tlbiA9IGNyZWF0ZUhhc2goXCJzaGEyNTZcIilcbiAgICAgICAgICAgIC51cGRhdGUoc2FsdGVkUmFuZG9tU3RyKVxuICAgICAgICAgICAgLmRpZ2VzdChcImhleFwiKTtcbiAgICAgICAgdmFyIGRlZmF1bHRQZXlsb2FkID0ge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuLFxuICAgICAgICB9O1xuICAgICAgICB2YXIgcmVmcmVzaFBleWxvYWQgPSB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICByZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlbixcbiAgICAgICAgfTtcbiAgICAgICAgcmVzcG9uc2UuYWNjZXNzVG9rZW4gPSBqd3Quc2lnbihkZWZhdWx0UGV5bG9hZCwgdGhpcy5zYWx0IHx8IFwiXCIsIHRoaXMuY29uZmlnKTtcbiAgICAgICAgcmVzcG9uc2UucmVmcmVzaFRva2VuID0gand0LnNpZ24ocmVmcmVzaFBleWxvYWQsIHRoaXMuc2FsdCB8fCBcIlwiLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgdGhpcy5jb25maWcpLCB7IGV4cGlyZXNJbjogXCI3MkhcIiB9KSk7XG4gICAgICAgIHJldHVybiB7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuOiByZWZyZXNoVG9rZW4sIHJlc3BvbnNlOiByZXNwb25zZSB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyYW0wIGxvZ2luQXV0aFJlcXVlc3Qg44Om44O844K244O8SUTjgajjg5Hjgrnjg6/jg7zjg4njgYzmoLzntI3jgZXjgozjgabjgYTjgotcbiAgICAgKiBAcmV0dXJucyBhY2Nlc3NUb2tlbiDjgqLjgq/jgrvjgrnjg4jjg7zjgq/jg7PjgpLov5TljbTjgZnjgotcbiAgICAgKi9cbiAgICBOZW9uQXBpLnByb3RvdHlwZS5sb2dpbkF1dGggPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGhhc2hQYXNzd29yZCwgcXVlcnksIHJvd3MsIGlkLCBuYW1lLCBlbWFpbCwgX2MsIGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIG5ld1Jlc3BvbnNlLCB1cGRhdGVSb3dzO1xuICAgICAgICAgICAgdmFyIHVzZXJJZCA9IF9iLnVzZXJJZCwgcGFzc3dvcmQgPSBfYi5wYXNzd29yZDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2QpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9kLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hUb2tlbjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc2hQYXNzd29yZCA9IGNyZWF0ZUhhc2goXCJzaGEyNTZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudXBkYXRlKHBhc3N3b3JkICsgdGhpcy5zYWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaWdlc3QoXCJoZXhcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSA9IFwiXFxuICAgICAgICAgICAgU0VMRUNUIHNoaXRhaV91c2VyX2luZm8uaWQgICAgICBBUyBpZFxcbiAgICAgICAgICAgICxzaGl0YWlfdXNlcl9pbmZvLnVzZXJfaWQgICAgICBBUyBlbWFpbFxcbiAgICAgICAgICAgICwgc2hpdGFpX3VzZXJfaW5mby51c2VyX25hbWUgICAgICBBUyBuYW1lXFxuICAgICAgICAgICAgRlJPTSBzaGl0YWlfdXNlcl9pbmZvXFxuICAgICAgICAgICAgV0hFUkUgcGFzc3dvcmQgPSAkMVxcbiAgICAgICAgICAgICAgQU5EIHVzZXJfaWQgPSAkMjtcXG4gICAgICAgIFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KHF1ZXJ5LCBbaGFzaFBhc3N3b3JkLCB1c2VySWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3MgPSAoX2Quc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44GM5a2Y5Zyo44GZ44KL5aC05ZCI44CB44Ki44Kv44K744K544OI44O844Kv44Oz44KS6L+U5Y2044GZ44KLXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlrZjlnKjjgZfjgarjgYTloLTlkIjjgIHjgqjjg6njg7zjg6Hjg4Pjgrvjg7zjgrjjgpLov5TljbTjgZnjgovjgIJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3dzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6IFwi44Om44O844K244O8SUTjgoLjgZfjgY/jga/jg5Hjgrnjg6/jg7zjg4njgYzplpPpgZXjgaPjgabjgYTjgb7jgZnjgIJcIiB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSByb3dzWzBdW1wiaWRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gcm93c1swXVtcIm5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbCA9IHJvd3NbMF1bXCJlbWFpbFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBcIuODreOCsOOCpOODs+iqjeiovOOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYyA9IHRoaXMuY3JlYXRlVG9rZW5zKGlkKSwgYWNjZXNzVG9rZW4gPSBfYy5hY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuID0gX2MucmVmcmVzaFRva2VuLCBuZXdSZXNwb25zZSA9IF9jLnJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiVVBEQVRFIHNoaXRhaV91c2VyX2luZm8gU0VUIGFjY2Vzc190b2tlbiA9IChBUlJBWVskMV0gfHwgYWNjZXNzX3Rva2VuKVsxOjNdLCByZWZyZXNoX3Rva2VuID0gJDIgV0hFUkUgdXNlcl9pZCA9ICQzIFJFVFVSTklORyBpZFwiLCBbYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiwgdXNlcklkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVSb3dzID0gKF9kLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVSb3dzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6IFwi44Ot44Kw44Kk44Oz6KqN6Ki844Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gdXBkYXRlUm93c1swXVtcImlkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6IFwi44Ot44Kw44Kk44Oz6KqN6Ki844Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX19hc3NpZ24oX19hc3NpZ24oe30sIG5ld1Jlc3BvbnNlKSwgeyBpZDogaWQsIG5hbWU6IG5hbWUsIGVtYWlsOiBlbWFpbCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyYW0wIGFjY2Vzc1Rva2VuQXV0aFJlcXVlc3RbXCJ1c2VySW5mb1wiXSBBUEnjgpLlrp/ooYzjgZnjgovjg6bjg7zjgrbjg7zmg4XloLEo44Om44O844K244O8SUTjgIHjgqLjgq/jgrvjgrnjg4jjg7zjgq/jg7MpXG4gICAgICogQHJldHVybnPjgIBcInN1Y2Nlc3NcIiBvciBcImVycm9yXCJcbiAgICAgKi9cbiAgICBOZW9uQXBpLnByb3RvdHlwZS5hY2Nlc3NUb2tlbkF1dGggPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGlkLCBuYW1lXzEsIGVtYWlsLCBkZWNvZGVkQWNjZXNzVG9rZW4sIG9iaiwgcm93cywgZV8xO1xuICAgICAgICAgICAgdmFyIGFjY2Vzc1Rva2VuID0gX2IuYWNjZXNzVG9rZW47XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwiZXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2MudHJ5cy5wdXNoKFsxLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZEFjY2Vzc1Rva2VuID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmogPSBqd3QudmVyaWZ5KGFjY2Vzc1Rva2VuLCB0aGlzLnNhbHQgfHwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSBvYmouaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjb2RlZEFjY2Vzc1Rva2VuID0gb2JqLmFjY2Vzc1Rva2VuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coaWQsIGRlY29kZWRBY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIm1lc3NhZ2VcIiBpbiBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLm1lc3NhZ2UgPT09IFwiand0IGV4cGlyZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcImV4cGlyZWQgYWNjZXNzIHRva2VuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUICpcXG4gICAgICAgICAgICAgRlJPTSBzaGl0YWlfdXNlcl9pbmZvXFxuICAgICAgICAgICAgIFdIRVJFIGlkID0gJDFcXG4gICAgICAgICAgICAgICBBTkQgJDIgPSBBTlkoYWNjZXNzX3Rva2VuKTtcIiwgW2lkLCBkZWNvZGVkQWNjZXNzVG9rZW5dKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3MgPSAoX2Muc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcImVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVfMSA9IHJvd3NbMF1bXCJ1c2VyX25hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbCA9IHJvd3NbMF1bXCJ1c2VyX2lkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB7IGlkOiBpZCwgbmFtZTogbmFtZV8xLCBlbWFpbDogZW1haWwgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJlcnJvclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyYW0wIGFjY2Vzc1Rva2VuQXV0aFJlcXVlc3RbXCJ1c2VySW5mb1wiXSBBUEnjgpLlrp/ooYzjgZnjgovjg6bjg7zjgrbjg7zmg4XloLEo44Om44O844K244O8SUTjgIHjgqLjgq/jgrvjgrnjg4jjg7zjgq/jg7MpXG4gICAgICogQHJldHVybnPjgIBcInN1Y2Nlc3NcIiBvciBcImVycm9yXCJcbiAgICAgKi9cbiAgICBOZW9uQXBpLnByb3RvdHlwZS5yZWZyZXNoVG9rZW5BdXRoID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBfYywgaWQsIGRlY29kZWRSZWZyZXNoVG9rZW4sIHJvd3MsIHVzZXJJZCwgX2QsIG5ld0FjY2Vzc1Rva2VuLCBuZXdSZWZyZXNoVG9rZW4sIG5ld1Jlc3BvbnNlLCB1cGRhdGVSb3dzO1xuICAgICAgICAgICAgdmFyIHJlZnJlc2hUb2tlbiA9IF9iLnJlZnJlc2hUb2tlbjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2UpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9lLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJlcnJvclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MgPSBqd3QudmVyaWZ5KHJlZnJlc2hUb2tlbiwgdGhpcy5zYWx0IHx8IFwiXCIpLCBpZCA9IF9jLmlkLCBkZWNvZGVkUmVmcmVzaFRva2VuID0gX2MucmVmcmVzaFRva2VuO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIGlkXFxuICAgICAgICAgICAgIEZST00gc2hpdGFpX3VzZXJfaW5mb1xcbiAgICAgICAgICAgICBXSEVSRSBpZCA9ICQxXFxuICAgICAgICAgICAgICAgQU5EIHJlZnJlc2hfdG9rZW4gPSAkMjtcIiwgW2lkLCBkZWNvZGVkUmVmcmVzaFRva2VuXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzID0gKF9lLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJlcnJvclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQgPSByb3dzWzBdW1wiaWRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBfZCA9IHRoaXMuY3JlYXRlVG9rZW5zKHVzZXJJZCksIG5ld0FjY2Vzc1Rva2VuID0gX2QuYWNjZXNzVG9rZW4sIG5ld1JlZnJlc2hUb2tlbiA9IF9kLnJlZnJlc2hUb2tlbiwgbmV3UmVzcG9uc2UgPSBfZC5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlVQREFURSBzaGl0YWlfdXNlcl9pbmZvIFNFVCBhY2Nlc3NfdG9rZW4gPSAoQVJSQVlbJDFdIHx8IGFjY2Vzc190b2tlbilbMTozXSwgcmVmcmVzaF90b2tlbiA9ICQyIFdIRVJFIGlkID0gJDMgUkVUVVJOSU5HIGlkXCIsIFtuZXdBY2Nlc3NUb2tlbiwgbmV3UmVmcmVzaFRva2VuLCB1c2VySWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJvd3MgPSAoX2Uuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZVJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcImVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gdXBkYXRlUm93c1swXVtcImlkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJlcnJvclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9fYXNzaWduKHsgaWQ6IGlkIH0sIG5ld1Jlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUudXBsb2FkSW1hZ2VEYXRhID0gZnVuY3Rpb24gKGltYWdlRGF0YSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY3JlZGVudGlhbHMsIHN0b3JhZ2UsIGJ1Y2tldCwgcGFyc2VCYXNlNjRJbWFnZSwgdXBsb2FkQmFzZTY0SW1hZ2UsIF9hO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9DUkVERU5USUFMU19UWVBFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudF9lbWFpbDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NSRURFTlRJQUxTX0NMSUVOVF9FTUFJTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlX2tleTogKHByb2Nlc3MuZW52LlJFQUNUX0FQUF9DUkVERU5USUFMU19QUklWQVRFX0tFWSB8fCBcIlwiKS5yZXBsYWNlKC9cXFxcbi9nLCBcIlxcblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlX2tleV9pZDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NSRURFTlRJQUxTX1BSSVZBVEVfS0VZX0lELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RfaWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9QUk9KRUNUX0lELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudF9pZDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NSRURFTlRJQUxTX0NMSUVOVF9JRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoX3VyaTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NSRURFTlRJQUxTX0FVVEhfVVJJLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuX3VyaTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NSRURFTlRJQUxTX1RPS0VOX1VSSSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoX3Byb3ZpZGVyX3g1MDlfY2VydF91cmw6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9DUkVERU5USUFMU19BVVRIX1BST1ZJREVSX1g1MDlfQ0VSVF9VUkwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50X3g1MDlfY2VydF91cmw6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9DUkVERU5USUFMU19DTElFTlRfWDUwOV9DRVJUX1VSTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml2ZXJzZV9kb21haW46IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9DUkVERU5USUFMU19VTklWRVJTRV9ET01BSU4sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9QUk9KRUNUX05BTUUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IGNyZWRlbnRpYWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWNrZXQgPSBzdG9yYWdlLmJ1Y2tldChwcm9jZXNzLmVudi5SRUFDVF9BUFBfQlVDS0VUX05BTUUgfHwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUJhc2U2NEltYWdlID0gZnVuY3Rpb24gKGJhc2U2NCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzID0gYmFzZTY0Lm1hdGNoKC9eZGF0YTooLispO2Jhc2U2NCwoLispJC8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2hlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBCYXNlNjQgc3RyaW5nXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGNvbnRlbnRUeXBlOiBtYXRjaGVzWzFdLCBiYXNlNjREYXRhOiBtYXRjaGVzWzJdIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBsb2FkQmFzZTY0SW1hZ2UgPSBmdW5jdGlvbiAoYmFzZTY0LCB1cGxvYWRQYXRoKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBjb250ZW50VHlwZSwgYmFzZTY0RGF0YSwgYnVmZmVyLCBmaWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gcGFyc2VCYXNlNjRJbWFnZShiYXNlNjQpLCBjb250ZW50VHlwZSA9IF9hLmNvbnRlbnRUeXBlLCBiYXNlNjREYXRhID0gX2EuYmFzZTY0RGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSBCdWZmZXIuZnJvbShiYXNlNjREYXRhLCBcImJhc2U2NFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlID0gYnVja2V0LmZpbGUodXBsb2FkUGF0aCArIFwiLlwiICsgY29udGVudFR5cGUucmVwbGFjZShcImltYWdlL1wiLCBcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmlsZS5zYXZlKGJ1ZmZlciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogY29udGVudFR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVDb250cm9sOiBcInB1YmxpYywgbWF4LWFnZT0zMTUzNjAwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlv4XopoHjgarjgonlhazplotcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmaWxlLm1ha2VQdWJsaWMoKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5b+F6KaB44Gq44KJ5YWs6ZaLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBcImh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9cIi5jb25jYXQoZmlsZS5jbG91ZFN0b3JhZ2VVUkkuaHJlZi5yZXBsYWNlKFwiZ3M6Ly9cIiwgXCJcIikpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7IH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWltYWdlRGF0YSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB1cGxvYWRCYXNlNjRJbWFnZShpbWFnZURhdGEsIHJhbmRvbVVVSUQoKSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIF9hXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXJhbTAgdXNlcklkLOS9nOaIkOOBq+W/heimgeOBquaDheWgsShwcmljZSwgZGVzY3JpcHRpb24sIGNyZWF0ZWRfYXQpXG4gICAgICogQHJldHVybnPjgIBcInN1Y2Nlc3NcIiBvciBcImVycm9yXCJcbiAgICAgKi9cbiAgICBOZW9uQXBpLnByb3RvdHlwZS5pbnNlcnRVc2VySW5mbyA9IGZ1bmN0aW9uICh1cGRhdGVPYmopIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBoYXNoUGFzc3dvcmQsIGluc2VydFJvd3MsIGVfMjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJzdWNjZXNzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJCRUdJTlwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsyLCA1LCAsIDddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc2hQYXNzd29yZCA9IGNyZWF0ZUhhc2goXCJzaGEyNTZcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudXBkYXRlKHVwZGF0ZU9iai5wYXNzd29yZCArIHRoaXMuc2FsdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGlnZXN0KFwiaGV4XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiSU5TRVJUIElOVE8gXFxcInB1YmxpY1xcXCIuXFxcInNoaXRhaV91c2VyX2luZm9cXFwiIChcXFwidXNlcl9pZFxcXCIsIFxcXCJwYXNzd29yZFxcXCIsIFxcXCJ1c2VyX25hbWVcXFwiKVxcbiAgICAgICAgICBWQUxVRVMoJDEsICQyLCAkMykgUkVUVVJOSU5HIGlkO1wiLCBbdXBkYXRlT2JqLmVtYWlsLCBoYXNoUGFzc3dvcmQsIHVwZGF0ZU9iai5uYW1lXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRSb3dzID0gKF9hLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnNlcnRSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjg6bjg7zjgrbjg7znmbvpjLLjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQ09NTUlUXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlJPTExCQUNLXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZV8yO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6IHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUuc2VuZEVtYWlsID0gZnVuY3Rpb24gKHRvLCBzdWJqZWN0LCBodG1sKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNlbmQsIF9hLCBkYXRhLCBlcnJvcjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2VuZCA9IG5ldyBSZXNlbmQocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1JFU0VORF9BUElfVE9LRU4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgcmVzZW5kLmVtYWlscy5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZST01fRU1BSUwgfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiBzdWJqZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sOiBodG1sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBfYi5zZW50KCksIGRhdGEgPSBfYS5kYXRhLCBlcnJvciA9IF9hLmVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dOyAvL2NvbnNvbGUuZXJyb3IoeyBlcnJvciB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS5pbnNlcnRXaXNoID0gZnVuY3Rpb24gKHdpc2gsIGlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWEsIHBvc3RDb25maXJtU2NoZW1hLCBsZWZ0V2lzaF8xLCBncm91cFJvd3MsIHVybFBhdHRlcm4sIGlzVXJsLCBpbWFnZURhdGEsIF9hLCBpbnNlcnRXaXNoUm93cywgY3JlYXRlSW5zZXJ0U2NoZW1hLCBfYiwgX2MsIHNjaGVtYSwgaW5zZXJ0Um93cywgZV8zXzEsIG1haWxSb3dzLCBncm91cE5hbWUsIHVzZXJSb3dzLCBjcmVhdG9yTmFtZSwgY3JlYXRvck1haWxfMSwgdG8sIGRlc2NyaXB0aW9uLCBodG1sLCBlXzQ7XG4gICAgICAgICAgICB2YXIgZV8zLCBfZDtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9lKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfZS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHsgaWQ6IFwiXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkJFR0lOXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Uuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2UubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZS50cnlzLnB1c2goWzIsIDIxLCAsIDIzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYSA9IHdpc2gucGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWEsIHBvc3RDb25maXJtU2NoZW1hID0gd2lzaC5wb3N0Q29uZmlybVNjaGVtYSwgbGVmdFdpc2hfMSA9IF9fcmVzdCh3aXNoLCBbXCJwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYVwiLCBcInBvc3RDb25maXJtU2NoZW1hXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzZy5pZCwgc2cuXFxcImdyb3VwTmFtZVxcXCIgRlJPTSBwdWJsaWMuc2hpdGFpX2dyb3VwIGFzIHNnIElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cF9qb2luIGFzIHNqZyBPTiBzamcuXFxcImdyb3VwSWRcXFwiID0gc2cuaWQgQU5EIHNqZy5cXFwidXNlcklkXFxcIiA9ICQxIFdIRVJFIHNnLmlkID0gJDI7XCIsIFtpZCwgbGVmdFdpc2hfMS5ncm91cElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFJvd3MgPSAoX2Uuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLmqKnpmZDjgYzjgYLjgorjgb7jgZvjgpPjgILjgrDjg6vjg7zjg5flpJbjga7jg6bjg7zjgrbjg7zjgafjgZnjgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsUGF0dGVybiA9IC9eKGh0dHBzP3xmdHApKDpcXC9cXC9bXFx3XFwvOiUjXFwkJlxcP1xcKFxcKX5cXC49XFwrXFwtXSspLztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVXJsID0gdXJsUGF0dGVybi50ZXN0KGxlZnRXaXNoXzEuaW1hZ2VEYXRhIHx8IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1VybCkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IGxlZnRXaXNoXzEuaW1hZ2VEYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy51cGxvYWRJbWFnZURhdGEobGVmdFdpc2hfMS5pbWFnZURhdGEgfHwgXCJcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IF9lLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lLmxhYmVsID0gNjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhID0gX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJJTlNFUlQgSU5UTyBwdWJsaWMuc2hpdGFpX3dpc2ggKFwiLmNvbmNhdCh0aGlzLmNvbHVtbnMuam9pbihcIixcIiksIFwiKSBcXG4gICAgICAgIFZBTFVFUyAoJDEsICQyLCAkMywgJDQsICQ1LCAkNiwgJDcsICQ4LCAkOSwgJDEwLCAkMTEsICQxMiwgJDEzLCBOT1coKSwgJDE0LCAkMTUsICQxNikgUkVUVVJOSU5HIGlkO1wiKSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaF8xLmdyb3VwSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoXzEuY3JlYXRvcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaF8xLmNhdGVnb3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoXzEudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoXzEuZGlzcGxheURhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoXzEuZGlzcGxheVRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoXzEubm90ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoXzEuZGVhZGxpbmUgPT0gXCJcIiA/IG51bGwgOiBsZWZ0V2lzaF8xLmRlYWRsaW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaF8xLm1pblBhcnRpY2lwYW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2hfMS5tYXhQYXJ0aWNpcGFudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoXzEuYWN0aW9uTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0Q29uZmlybVNjaGVtYS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaF8xLmltcGxlbWVudGF0aW9uRGF0ZXRpbWUgPT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxlZnRXaXNoXzEuaW1wbGVtZW50YXRpb25EYXRldGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFdpc2hSb3dzID0gKF9lLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnNlcnRXaXNoUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44GX44Gf44GE44GT44Go44Gu55m76Yyy44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZUluc2VydFNjaGVtYSA9IGZ1bmN0aW9uIChzY2hlbWEsIHNjaGVtYVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJyID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzY2hlbWEudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibWl4ZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFUeXBlOiBzY2hlbWFUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogc2NoZW1hLmRhdGV0aW1lTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHNjaGVtYS5kYXRldGltZVJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hVHlwZTogc2NoZW1hVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm5vdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogc2NoZW1hLm5vdGVMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogc2NoZW1hLm5vdGVSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkYXRldGltZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVR5cGU6IHNjaGVtYVR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRldGltZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzY2hlbWEuZGF0ZXRpbWVMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogc2NoZW1hLmRhdGV0aW1lUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwibm90ZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVR5cGU6IHNjaGVtYVR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJub3RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHNjaGVtYS5ub3RlTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHNjaGVtYS5ub3RlUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVR5cGU6IHNjaGVtYVR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHNjaGVtYS5ub3RlTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHNjaGVtYS5ub3RlUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lLmxhYmVsID0gODtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2UudHJ5cy5wdXNoKFs4LCAxMywgMTQsIDE1XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IF9fdmFsdWVzKF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgX19yZWFkKGNyZWF0ZUluc2VydFNjaGVtYShwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYSwgXCJwYXJ0aWNpcGF0aW9uXCIpKSwgZmFsc2UpLCBfX3JlYWQoY3JlYXRlSW5zZXJ0U2NoZW1hKHBvc3RDb25maXJtU2NoZW1hLCBcInBvc3RcIikpLCBmYWxzZSkpLCBfYyA9IF9iLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lLmxhYmVsID0gOTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhX2MuZG9uZSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMTJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJJTlNFUlQgSU5UTyBcXFwicHVibGljXFxcIi5cXFwic2hpdGFpX3NjaGVtYVxcXCIgKFxcXCJ3aXNoSWRcXFwiLCBcXFwic2NoZW1hVHlwZVxcXCIsIFxcXCJ0eXBlXFxcIiwgXFxcInJlcXVpcmVkXFxcIiwgXFxcImxhYmVsXFxcIilcXG4gICAgICAgICAgVkFMVUVTKCQxLCAkMiwgJDMsICQ0LCAkNSkgUkVUVVJOSU5HIGlkO1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFdpc2hSb3dzWzBdW1wiaWRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS5zY2hlbWFUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0Um93cyA9IChfZS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0Um93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi56K66KqN6aCF55uu44Gu55m76Yyy44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9lLmxhYmVsID0gMTE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYyA9IF9iLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOiByZXR1cm4gWzMgLypicmVhayovLCAxNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzNfMSA9IF9lLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMyA9IHsgZXJyb3I6IGVfM18xIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2QgPSBfYi5yZXR1cm4pKSBfZC5jYWxsKF9iKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8zKSB0aHJvdyBlXzMuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5pZCA9IGluc2VydFdpc2hSb3dzWzBdW1wiaWRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc3VpLnVzZXJfaWQgQXMgbWFpbFxcbiAgICAgICAgRlJPTSBwdWJsaWMuc2hpdGFpX2dyb3VwX2pvaW4gYXMgc2dqIElOTkVSIEpPSU4gc2hpdGFpX3VzZXJfaW5mbyBhcyBzdWkgT04gc3VpLmlkID0gc2dqLlxcXCJ1c2VySWRcXFwiIFdIRVJFIHNnai5cXFwiZ3JvdXBJZFxcXCIgPSAkMTtcIiwgW2xlZnRXaXNoXzEuZ3JvdXBJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIG1haWxSb3dzID0gKF9lLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYWlsUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44Kw44Or44O844OX44Oh44Oz44OQ5oOF5aCx44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwTmFtZSA9IGdyb3VwUm93c1swXVtcImdyb3VwTmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzdWkudXNlcl9uYW1lIEFzIG5hbWUsIHN1aS51c2VyX2lkIEFzIG1haWxcXG4gICAgICAgIEZST00gc2hpdGFpX3VzZXJfaW5mbyBhcyBzdWkgV0hFUkUgc3VpLlxcXCJpZFxcXCIgPSAkMTtcIiwgW2xlZnRXaXNoXzEuY3JlYXRvcklkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE3OlxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclJvd3MgPSAoX2Uuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLkvZzmiJDogIXmg4XloLHjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvck5hbWUgPSB1c2VyUm93c1swXVtcIm5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9yTWFpbF8xID0gdXNlclJvd3NbMF1bXCJtYWlsXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG8gPSBtYWlsUm93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJvdykgeyByZXR1cm4gcm93W1wibWFpbFwiXTsgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChtYWlsKSB7IHJldHVybiBtYWlsICE9IGNyZWF0b3JNYWlsXzE7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBPYmplY3Qua2V5cyhsZWZ0V2lzaF8xKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0gX3RoaXMuY29sdW1uTmFtZXMuZmluZChmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmouY29sdW1uID09IGN1cnJlbnQ7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc0RhdGUgPSBfdGhpcy5kYXRlQ29sdW1ucy5zb21lKGZ1bmN0aW9uIChkdENvbCkgeyByZXR1cm4gZHRDb2wgPT0gY3VycmVudDsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbHVtbiA9IGN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHByZXYgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8dHI+PHRkPlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIuY29uY2F0KG9iai5uYW1lLCBcIjwvdGQ+PHRkPlwiKS5jb25jYXQoaXNEYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmb3JtYXREaXNwbGF5RGF0ZShsZWZ0V2lzaF8xW2NvbHVtbl0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBsZWZ0V2lzaF8xW2NvbHVtbl0sIFwiPC90ZD48L3RyPlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sID0gXCJcXG48IWRvY3R5cGUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJqYVxcXCI+XFxuPGhlYWQ+XFxuICA8bWV0YSBjaGFyc2V0PVxcXCJ1dGYtOFxcXCIgLz5cXG4gIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXFxcIiAvPlxcbiAgPHRpdGxlPlxcdTY1QjBcXHUzMDU3XFx1MzA0NFxcdTMwMENcXHUzMDU3XFx1MzA1RlxcdTMwNDRcXHUzMDBEXFx1OTAxQVxcdTc3RTU8L3RpdGxlPlxcbiAgPHN0eWxlPlxcbiAgICBib2R5IHsgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIkhpcmFnaW5vIEtha3UgR290aGljIFByb05cXFwiLCBcXFwiWXUgR290aGljXFxcIiwgXFxcIk5vdG8gU2FucyBKUFxcXCIsIEFyaWFsLCBzYW5zLXNlcmlmOyBtYXJnaW46MDsgcGFkZGluZzowOyBiYWNrZ3JvdW5kOiNmNmY4ZmI7IGNvbG9yOiMxMTE7IH1cXG4gICAgLmNvbnRhaW5lciB7IG1heC13aWR0aDo2MDBweDsgbWFyZ2luOjI4cHggYXV0bzsgYmFja2dyb3VuZDojZmZmOyBib3JkZXItcmFkaXVzOjhweDsgb3ZlcmZsb3c6aGlkZGVuOyBib3gtc2hhZG93OjAgNnB4IDI0cHggcmdiYSgyMCwzMCw2MCwwLjA4KTsgfVxcbiAgICAuaGVhZGVyIHsgcGFkZGluZzoyMHB4OyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg5MGRlZywjMWY2ZmViLCM2YjljZmYpOyBjb2xvcjojZmZmOyB9XFxuICAgIC5jb250ZW50IHsgcGFkZGluZzoyMHB4OyB9XFxuICAgIC50aXRsZSB7IGZvbnQtc2l6ZToxOHB4OyBtYXJnaW46MCAwIDhweCAwOyB9XFxuICAgIC5tZXRhIHsgZm9udC1zaXplOjEzcHg7IGNvbG9yOiM2YjcyODA7IG1hcmdpbi1ib3R0b206MTZweDsgfVxcbiAgICAuY2FyZCB7IGJhY2tncm91bmQ6I2Y3ZjlmYzsgcGFkZGluZzoxNHB4OyBib3JkZXItcmFkaXVzOjZweDsgbWFyZ2luLWJvdHRvbToxNnB4OyB9XFxuICAgIC5idG4geyBkaXNwbGF5OmlubGluZS1ibG9jazsgcGFkZGluZzoxMnB4IDE4cHg7IGJvcmRlci1yYWRpdXM6OHB4OyB0ZXh0LWRlY29yYXRpb246bm9uZTsgZm9udC13ZWlnaHQ6NjAwOyB9XFxuICAgIC5idG4tcHJpbWFyeSB7IGJhY2tncm91bmQ6IzFmNmZlYjsgY29sb3I6I2ZmZjsgfVxcbiAgICAuZm9vdGVyIHsgZm9udC1zaXplOjEycHg7IGNvbG9yOiM5YWEwYWI7IHBhZGRpbmc6MThweDsgdGV4dC1hbGlnbjpjZW50ZXI7IH1cXG4gICAgLmt2IHsgZm9udC13ZWlnaHQ6NzAwOyBjb2xvcjojMTExOyB9XFxuICAgIHByZSB7IHdoaXRlLXNwYWNlOnByZS13cmFwOyB3b3JkLXdyYXA6YnJlYWstd29yZDsgfVxcbiAgPC9zdHlsZT5cXG48L2hlYWQ+XFxuPGJvZHk+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiIHJvbGU9XFxcImFydGljbGVcXFwiIGFyaWEtbGFiZWw9XFxcIlNISVRBSSBcXHU2NUIwXFx1MzA1N1xcdTMwNDRcXHUzMDU3XFx1MzA1RlxcdTMwNDRcXHU5MDFBXFx1NzdFNVxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcImhlYWRlclxcXCI+XFxuICAgICAgPGgxIHN0eWxlPVxcXCJmb250LXNpemU6MjBweDttYXJnaW46MFxcXCI+U0hJVEFJPC9oMT5cXG4gICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjZweCAwIDAgMDtmb250LXNpemU6MTNweDtvcGFjaXR5OjAuOTVcXFwiPlxcdTMwQjBcXHUzMEVCXFx1MzBGQ1xcdTMwRDdcXHU1MTg1XFx1MzA2QlxcdTY1QjBcXHUzMDU3XFx1MzA0NFxcdTMwMENcXHUzMDU3XFx1MzA1RlxcdTMwNDRcXHUzMDBEXFx1MzA0Q1xcdTYyOTVcXHU3QTNGXFx1MzA1NVxcdTMwOENcXHUzMDdFXFx1MzA1N1xcdTMwNUY8L3A+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICA8cCBjbGFzcz1cXFwidGl0bGVcXFwiPlxcdUQ4M0RcXHVERDE0IFxcdTY1QjBcXHU3NzQwXFx1RkYxQVwiLmNvbmNhdChsZWZ0V2lzaF8xLnRpdGxlLCBcIjwvcD5cXG4gICAgICA8cCBjbGFzcz1cXFwibWV0YVxcXCI+PHNwYW4gY2xhc3M9XFxcImt2XFxcIj5cXHU0RjVDXFx1NjIxMFxcdTgwMDVcXHVGRjFBPC9zcGFuPiBcIikuY29uY2F0KGNyZWF0b3JOYW1lLCBcIiAmbmJzcDt8Jm5ic3A7IDxzcGFuIGNsYXNzPVxcXCJrdlxcXCI+XFx1MzBCMFxcdTMwRUJcXHUzMEZDXFx1MzBEN1xcdUZGMUE8L3NwYW4+IFwiKS5jb25jYXQoZ3JvdXBOYW1lLCBcIjwvcD5cXG5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46MCAwIDhweCAwO1xcXCI+PHNwYW4gY2xhc3M9XFxcImt2XFxcIj5cXHU1MTg1XFx1NUJCOTwvc3Bhbj48L3A+XFxuICAgICAgICA8cHJlIHN0eWxlPVxcXCJtYXJnaW46MDtcXFwiPjx0YWJsZT5cIikuY29uY2F0KGRlc2NyaXB0aW9uLCBcIjwvdGFibGU+PC9wcmU+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPHAgc3R5bGU9XFxcIm1hcmdpbjowIDAgMThweCAwO1xcXCI+XFx1OEE3M1xcdTdEMzBcXHUzMDg0XFx1NTNDMlxcdTUyQTBcXHUzMDZGXFx1NEUwQlxcdTMwNkVcXHUzMERDXFx1MzBCRlxcdTMwRjNcXHUzMDRCXFx1MzA4OVxcdTc4QkFcXHU4QThEXFx1MzA1N1xcdTMwNjZcXHUzMDRGXFx1MzA2MFxcdTMwNTVcXHUzMDQ0XFx1MzAwMjwvcD5cXG5cXG4gICAgICA8YSBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBocmVmPVxcXCJcIikuY29uY2F0KHByb2Nlc3MuZW52LlJFQUNUX0FQUF9GUk9OVEVORF9VUkwgKyBcIi9cIiArIFwid2lzaFwiICsgXCIvXCIgKyByZXNwb25zZS5pZCwgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiByZWw9XFxcIm5vb3BlbmVyXFxcIj5cXHU4QTczXFx1N0QzMFxcdTMwOTJcXHU3OEJBXFx1OEE4RFxcdTMwNTlcXHUzMDhCPC9hPlxcblxcbiAgICAgIDxociBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VlZjJmNzttYXJnaW46MThweCAwO1xcXCIgLz5cXG5cXG4gICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjA7Zm9udC1zaXplOjEzcHg7Y29sb3I6IzU1NjA3MDtcXFwiPlxcbiAgICAgICAgXFx1NkMxN1xcdTMwNkJcXHUzMDZBXFx1MzA4QlxcdTMwMENcXHUzMDU3XFx1MzA1RlxcdTMwNDRcXHUzMDBEXFx1MzA0Q1xcdTMwNDJcXHUzMDhDXFx1MzA3MFxcdTMwMDFcXHU1M0MyXFx1NTJBMFxcdTMwODRcXHUzMEVBXFx1MzBBMlxcdTMwQUZcXHUzMEI3XFx1MzBFN1xcdTMwRjNcXHUzMDY3XFx1MzBCMFxcdTMwRUJcXHUzMEZDXFx1MzBEN1xcdTMwOTJcXHU2RDNCXFx1NjAyN1xcdTUzMTZcXHUzMDU3XFx1MzA3RVxcdTMwNTdcXHUzMDg3XFx1MzA0NlxcdUZGMDFcXG4gICAgICA8L3A+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcbiAgICAgIFxcdTMwNTNcXHUzMDZFXFx1MzBFMVxcdTMwRkNcXHUzMEVCXFx1MzA2RlxcdTgxRUFcXHU1MkQ1XFx1OTE0RFxcdTRGRTFcXHUzMDY3XFx1MzA1OVxcdTMwMDJcXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2JvZHk+XFxuPC9odG1sPlxcblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRvLmxlbmd0aCAhPSAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMTldO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zZW5kRW1haWwodG8sIFwiXFx1MzAxMFNISVRBSVxcdTMwMTFcXHU2NUIwXFx1MzA1N1xcdTMwNDRcXHUzMDBDXFx1MzA1N1xcdTMwNUZcXHUzMDQ0XFx1MzAwRFxcdTMwNENcXHU2Mjk1XFx1N0EzRlxcdTMwNTVcXHUzMDhDXFx1MzA3RVxcdTMwNTdcXHUzMDVGIFxcdTIwMTQgXCIuY29uY2F0KGxlZnRXaXNoXzEudGl0bGUpLCBodG1sKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZS5sYWJlbCA9IDE5O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE5OiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJDT01NSVRcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Uuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMjNdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIxOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV80ID0gX2Uuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiUk9MTEJBQ0tcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Uuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZV80O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIzOiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5lb25BcGkucHJvdG90eXBlLmNyZWF0ZVJlc3BvbnNlRGF0YSA9IGZ1bmN0aW9uICh3aXNoSWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNjaGVtYVJvd3MsIHNjaGVtYU1hcCwgc2NoZW1hUm93c18xLCBzY2hlbWFSb3dzXzFfMSwgc2NoZW1hLCBwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYVR5cGUsIHBvc3RDb25maXJtU2NoZW1hVHlwZSwgc2NoZW1hVHlwZSwgdHlwZSwgcmVxdWlyZWQsIGxhYmVsLCBhbnN3ZXJSb3dzLCBhbnN3ZXJNYXAsIHBhcnRpY2lwYW50cywgYW5zd2VyUm93c18xLCBhbnN3ZXJSb3dzXzFfMSwgYW5zd2VyLCBqb2luZWRBdCwgdXNlcklkLCBzY2hlbWFUeXBlLCB0eXBlLCB2YWx1ZSwgZV81O1xuICAgICAgICAgICAgdmFyIGVfNiwgX2EsIF9iLCBlXzcsIF9jLCBfZCwgX2U7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9mKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfZi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHN3LlxcXCJwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYVR5cGVcXFwiLCBzdy5cXFwicG9zdENvbmZpcm1TY2hlbWFUeXBlXFxcIiwgc3MuXFxcInNjaGVtYVR5cGVcXFwiLCBzcy5cXFwidHlwZVxcXCIsIHNzLlxcXCJyZXF1aXJlZFxcXCIsIHNzLlxcXCJsYWJlbFxcXCJcXG4gICAgICAgIEZST00gcHVibGljLnNoaXRhaV93aXNoIGFzIHN3IElOTkVSIEpPSU4gc2hpdGFpX3NjaGVtYSBhcyBzcyBPTiBzcy5cXFwid2lzaElkXFxcIiA9IHN3LmlkIFdIRVJFIHN3LmlkID0gJDE7XCIsIFt3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVJvd3MgPSAoX2Yuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjaGVtYVJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOCueOCreODvOODnuOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoc2NoZW1hUm93c18xID0gX192YWx1ZXMoc2NoZW1hUm93cyksIHNjaGVtYVJvd3NfMV8xID0gc2NoZW1hUm93c18xLm5leHQoKTsgIXNjaGVtYVJvd3NfMV8xLmRvbmU7IHNjaGVtYVJvd3NfMV8xID0gc2NoZW1hUm93c18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEgPSBzY2hlbWFSb3dzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFUeXBlID0gc2NoZW1hLnBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hVHlwZSwgcG9zdENvbmZpcm1TY2hlbWFUeXBlID0gc2NoZW1hLnBvc3RDb25maXJtU2NoZW1hVHlwZSwgc2NoZW1hVHlwZSA9IHNjaGVtYS5zY2hlbWFUeXBlLCB0eXBlID0gc2NoZW1hLnR5cGUsIHJlcXVpcmVkID0gc2NoZW1hLnJlcXVpcmVkLCBsYWJlbCA9IHNjaGVtYS5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hTWFwLnNldChzY2hlbWFUeXBlLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc2NoZW1hTWFwLmdldChzY2hlbWFUeXBlKSksIChfYiA9IHsgdHlwZTogc2NoZW1hVHlwZSA9PT0gXCJwYXJ0aWNpcGF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYVR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwb3N0Q29uZmlybVNjaGVtYVR5cGUgfSwgX2JbdHlwZSArIFwiTGFiZWxcIl0gPSBsYWJlbCwgX2JbdHlwZSArIFwiUmVxdWlyZWRcIl0gPSByZXF1aXJlZCwgX2IpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVfNl8xKSB7IGVfNiA9IHsgZXJyb3I6IGVfNl8xIH07IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY2hlbWFSb3dzXzFfMSAmJiAhc2NoZW1hUm93c18xXzEuZG9uZSAmJiAoX2EgPSBzY2hlbWFSb3dzXzEucmV0dXJuKSkgX2EuY2FsbChzY2hlbWFSb3dzXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfNikgdGhyb3cgZV82LmVycm9yOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc2ouXFxcImpvaW5lZEF0XFxcIiwgc2ouXFxcInVzZXJJZFxcXCIsIHNzLlxcXCJzY2hlbWFUeXBlXFxcIiwgc3MudHlwZSwgc2EudmFsdWVcXG4gICAgICAgIEZST00gc2hpdGFpX2pvaW4gYXMgc2ogTEVGVCBKT0lOIHNoaXRhaV9zY2hlbWEgYXMgc3MgT04gc3MuXFxcIndpc2hJZFxcXCIgPSAkMSBMRUZUIEpPSU4gcHVibGljLnNoaXRhaV9hbnN3ZXIgYXMgc2EgT04gc2EuXFxcInNjaGVtYUlkXFxcIiA9IHNzLmlkIEFORCBzcy5cXFwid2lzaElkXFxcIiA9ICQxIEFORCBzYS5cXFwidXNlcklkXFxcIiA9IHNqLlxcXCJ1c2VySWRcXFwiIFdIRVJFIHNqLlxcXCJ3aXNoSWRcXFwiID0gJDEgT1JERVIgQlkgc2ouXFxcImpvaW5lZEF0XFxcIiBBU0M7XCIsIFt3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlclJvd3MgPSAoX2Yuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnRzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoYW5zd2VyUm93c18xID0gX192YWx1ZXMoYW5zd2VyUm93cyksIGFuc3dlclJvd3NfMV8xID0gYW5zd2VyUm93c18xLm5leHQoKTsgIWFuc3dlclJvd3NfMV8xLmRvbmU7IGFuc3dlclJvd3NfMV8xID0gYW5zd2VyUm93c18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSBhbnN3ZXJSb3dzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam9pbmVkQXQgPSBhbnN3ZXIuam9pbmVkQXQsIHVzZXJJZCA9IGFuc3dlci51c2VySWQsIHNjaGVtYVR5cGUgPSBhbnN3ZXIuc2NoZW1hVHlwZSwgdHlwZSA9IGFuc3dlci50eXBlLCB2YWx1ZSA9IGFuc3dlci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF1c2VySWQgfHwgIXR5cGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyTWFwLnNldCh1c2VySWQsIF9fYXNzaWduKF9fYXNzaWduKHt9LCAoYW5zd2VyTWFwLmdldCh1c2VySWQpID8gYW5zd2VyTWFwLmdldCh1c2VySWQpIDoge30pKSwgKF9kID0geyB1c2VySWQ6IHVzZXJJZCwgam9pbmVkQXQ6IGpvaW5lZEF0IH0sIF9kW3NjaGVtYVR5cGUgKyBcIkFuc3dlcnNcIl0gPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgKGFuc3dlck1hcC5nZXQodXNlcklkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBzY2hlbWFUeXBlICsgXCJBbnN3ZXJzXCIgaW4gYW5zd2VyTWFwLmdldCh1c2VySWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhbnN3ZXJNYXAuZ2V0KHVzZXJJZClbKHNjaGVtYVR5cGUgKyBcIkFuc3dlcnNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7fSkpLCAoX2UgPSB7fSwgX2VbdHlwZV0gPSB2YWx1ZSwgX2UpKSwgX2QpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50cyA9IF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChhbnN3ZXJNYXAudmFsdWVzKCkpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVfN18xKSB7IGVfNyA9IHsgZXJyb3I6IGVfN18xIH07IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbnN3ZXJSb3dzXzFfMSAmJiAhYW5zd2VyUm93c18xXzEuZG9uZSAmJiAoX2MgPSBhbnN3ZXJSb3dzXzEucmV0dXJuKSkgX2MuY2FsbChhbnN3ZXJSb3dzXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfNykgdGhyb3cgZV83LmVycm9yOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYTogc2NoZW1hTWFwLmdldChcInBhcnRpY2lwYXRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RDb25maXJtU2NoZW1hOiBzY2hlbWFNYXAuZ2V0KFwicG9zdFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnRzOiBwYXJ0aWNpcGFudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfNSA9IF9mLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzU7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5lb25BcGkucHJvdG90eXBlLmdldFdpc2hCeUlkID0gZnVuY3Rpb24gKHdpc2hJZCwgaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBncm91cFJvd3MsIHdpc2hSb3dzXzEsIHJlc18xLCBleHRDb2x1bW5zLCBlXzg7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogd2lzaElkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9ySWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUGFydGljaXBhbnRzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkxhYmVsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hOiB7IHR5cGU6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdENvbmZpcm1TY2hlbWE6IHsgdHlwZTogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhkcmF3bjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCA1LCAsIDZdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzZy5pZCwgc2cuXFxcImdyb3VwTmFtZVxcXCIgRlJPTSBwdWJsaWMuc2hpdGFpX3dpc2ggYXMgc3cgSU5ORVIgSk9JTiBwdWJsaWMuc2hpdGFpX2dyb3VwIGFzIHNnIE9OIHN3LlxcXCJncm91cElkXFxcIiA9IHNnLmlkIElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cF9qb2luIGFzIHNqZyBPTiBzamcuXFxcImdyb3VwSWRcXFwiID0gc2cuaWQgQU5EIHNqZy5cXFwidXNlcklkXFxcIiA9ICQxIFdIRVJFIHN3LmlkID0gJDI7XCIsIFtpZCwgd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFJvd3MgPSAoX2Euc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5qip6ZmQ44GM44GC44KK44G+44Gb44KT44CC44Kw44Or44O844OX5aSW44Gu44Om44O844K244O844Gn44GZ44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBcIi5jb25jYXQodGhpcy5jb2x1bW5zLmpvaW4oXCIsXCIpLCBcIlxcbiAgICAgICAgRlJPTSBwdWJsaWMuc2hpdGFpX3dpc2ggV0hFUkUgaWQgPSAkMTtcIiksIFt3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpc2hSb3dzXzEgPSAoX2Euc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpc2hSb3dzXzEubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOBl+OBn+OBhOOBk+OBqOOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmNyZWF0ZVJlc3BvbnNlRGF0YSh3aXNoSWQudG9TdHJpbmcoKSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dENvbHVtbnMgPSB0aGlzLmNvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29sICE9PSAnXCJwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYVR5cGVcIicgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sICE9PSAnXCJwb3N0Q29uZmlybVNjaGVtYVR5cGVcIic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dENvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXBDb2x1bW4gPSBjb2x1bW4ucmVwbGFjZUFsbCgnXCInLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlcENvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gd2lzaFJvd3NfMVswXVtyZXBDb2x1bW5dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXNwb25zZSksIChfYSA9IHt9LCBfYVtyZXBDb2x1bW5dID0gdmFsdWUsIF9hKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicG9zdENvbmZpcm1TY2hlbWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhcnRpY2lwYW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXS5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc18xICYmIGNvbHVtbiBpbiByZXNfMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXNwb25zZSksIChfYSA9IHt9LCBfYVtjb2x1bW5dID0gcmVzXzFbY29sdW1uXSwgX2EpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfOCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfODtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUuaW5zZXJ0QW5zd2VyID0gZnVuY3Rpb24gKGFuc3dlciwgaWQsIHdpc2hJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGdyb3VwUm93cywgYW5zd2VycywgX2EsIF9iLCBrZXksIF9jLCBfZCwgc2NoZW1hLCByZXBLZXksIHZhbHVlLCBpbnNlcnRBbnN3ZXJSb3dzLCBlXzlfMSwgZV8xMF8xLCB1c2VyUm93cywgZ3JvdXBOYW1lLCBqb2luVXNlclJvd3MsIGNyZWF0b3JVc2VyUm93cywgY3JlYXRvck5hbWUsIGNyZWF0b3JNYWlsLCB0aXRsZSwgam9pblVzZXJOYW1lLCBqb2luVXNlck1haWxfMSwgdG8sIGRlc2NyaXB0aW9uLCBhbnN3ZXJzXzEsIGFuc3dlcnNfMV8xLCBhbnN3ZXJfMSwgc2NoZW1hUm93cywgaXNEYXRlLCBlXzExXzEsIGh0bWwsIGVfMTI7XG4gICAgICAgICAgICB2YXIgZV8xMCwgX2UsIGVfOSwgX2YsIGVfMTEsIF9nO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfaCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2gubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcInN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkJFR0lOXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2guc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2gubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC50cnlzLnB1c2goWzIsIDMyLCAsIDM0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc2cuaWQsIHNnLlxcXCJncm91cE5hbWVcXFwiIEZST00gcHVibGljLnNoaXRhaV93aXNoIGFzIHN3IElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cCBhcyBzZyBPTiBzdy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBJTk5FUiBKT0lOIHB1YmxpYy5zaGl0YWlfZ3JvdXBfam9pbiBhcyBzamcgT04gc2pnLlxcXCJncm91cElkXFxcIiA9IHNnLmlkIEFORCBzamcuXFxcInVzZXJJZFxcXCIgPSAkMSBXSEVSRSBzdy5pZCA9ICQyO1wiLCBbaWQsIHdpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBSb3dzID0gKF9oLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncm91cFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuaoqemZkOOBjOOBguOCiuOBvuOBm+OCk+OAguOCsOODq+ODvOODl+WkluOBruODpuODvOOCtuODvOOBp+OBmeOAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLnRyeXMucHVzaChbNCwgMTUsIDE2LCAxN10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBfX3ZhbHVlcyhPYmplY3Qua2V5cyhhbnN3ZXIpKSwgX2IgPSBfYS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC5sYWJlbCA9IDU7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIV9iLmRvbmUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDE0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IF9iLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2gubGFiZWwgPSA2O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC50cnlzLnB1c2goWzYsIDExLCAxMiwgMTNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jID0gKGVfOSA9IHZvaWQgMCwgX192YWx1ZXMoT2JqZWN0LmtleXMoYW5zd2VyW2tleV0pKSksIF9kID0gX2MubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2gubGFiZWwgPSA3O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFfZC5kb25lKSByZXR1cm4gWzMgLypicmVhayovLCAxMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEgPSBfZC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcEtleSA9IGtleS5yZXBsYWNlKFwiQW5zd2Vyc1wiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYW5zd2VyW2tleV1bc2NoZW1hXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmFsdWUgfHwgdmFsdWUgPT0gXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIklOU0VSVCBJTlRPIHB1YmxpYy5zaGl0YWlfYW5zd2VyIChcXFwidXNlcklkXFxcIiwgXFxcInNjaGVtYUlkXFxcIiwgXFxcInZhbHVlXFxcIikgU0VMRUNUICQxLCBzcy5pZCwgJDIgRlJPTSBwdWJsaWMuc2hpdGFpX3NjaGVtYSBhcyBzcyBXSEVSRSBzcy5cXFwic2NoZW1hVHlwZVxcXCIgPSAkMyBBTkQgc3MuXFxcInR5cGVcXFwiID0gJDQgQU5EIHNzLlxcXCJ3aXNoSWRcXFwiID0gJDUgTElNSVQgMSBSRVRVUk5JTkcgaWQsIFxcXCJzY2hlbWFJZFxcXCIsIFxcXCJ2YWx1ZVxcXCJcIiwgW2lkLCB2YWx1ZSwgcmVwS2V5LCBzY2hlbWEsIHdpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0QW5zd2VyUm93cyA9IChfaC5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0QW5zd2VyUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44Ki44Oz44K144O844Gu55m76Yyy44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hSWQ6IGluc2VydEFuc3dlclJvd3NbMF1bXCJzY2hlbWFJZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaW5zZXJ0QW5zd2VyUm93c1swXVtcInZhbHVlXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC5sYWJlbCA9IDk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kID0gX2MubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6IHJldHVybiBbMyAvKmJyZWFrKi8sIDEzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfOV8xID0gX2guc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZV85ID0geyBlcnJvcjogZV85XzEgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDEzXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9kICYmICFfZC5kb25lICYmIChfZiA9IF9jLnJldHVybikpIF9mLmNhbGwoX2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzkpIHRocm93IGVfOS5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iID0gX2EubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTQ6IHJldHVybiBbMyAvKmJyZWFrKi8sIDE3XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTBfMSA9IF9oLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTAgPSB7IGVycm9yOiBlXzEwXzEgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDE3XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9iICYmICFfYi5kb25lICYmIChfZSA9IF9hLnJldHVybikpIF9lLmNhbGwoX2EpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEwKSB0aHJvdyBlXzEwLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE3OiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc3VpLnVzZXJfaWQgQXMgbWFpbFxcbiAgICAgICAgRlJPTSBzaGl0YWlfam9pbiBhcyBzaiBJTk5FUiBKT0lOIHNoaXRhaV91c2VyX2luZm8gYXMgc3VpIE9OIHN1aS5pZCA9IHNqLlxcXCJ1c2VySWRcXFwiIFdIRVJFIHNqLlxcXCJ3aXNoSWRcXFwiID0gJDE7XCIsIFt3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTg6XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyUm93cyA9IChfaC5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlclJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuaXouWtmOWPguWKoOiAheaDheWgseOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cE5hbWUgPSBncm91cFJvd3NbMF1bXCJncm91cE5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc3VpLnVzZXJfbmFtZSBBcyBuYW1lLCBzdWkudXNlcl9pZCBBcyBtYWlsXFxuICAgICAgICBGUk9NIHNoaXRhaV91c2VyX2luZm8gYXMgc3VpIFdIRVJFIHN1aS5cXFwiaWRcXFwiID0gJDE7XCIsIFtpZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5Vc2VyUm93cyA9IChfaC5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlclJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuWPguWKoOiAheaDheWgseOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc3VpLnVzZXJfbmFtZSBBcyBuYW1lLCBzdWkudXNlcl9pZCBBcyBtYWlsLCBzdy50aXRsZVxcbiAgICAgICAgRlJPTSBzaGl0YWlfd2lzaCBhcyBzdyBJTk5FUiBKT0lOIHNoaXRhaV91c2VyX2luZm8gYXMgc3VpIE9OIHN3LlxcXCJjcmVhdG9ySWRcXFwiID0gc3VpLlxcXCJpZFxcXCIgV0hFUkUgc3cuaWQgPSAkMTtcIiwgW3dpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JVc2VyUm93cyA9IChfaC5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3JlYXRvclVzZXJSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLkvZzmiJDogIXmg4XloLHjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvck5hbWUgPSBjcmVhdG9yVXNlclJvd3NbMF1bXCJuYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvck1haWwgPSBjcmVhdG9yVXNlclJvd3NbMF1bXCJtYWlsXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSBjcmVhdG9yVXNlclJvd3NbMF1bXCJ0aXRsZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJSb3dzLnB1c2goeyBtYWlsOiBjcmVhdG9yTWFpbCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5Vc2VyTmFtZSA9IGpvaW5Vc2VyUm93c1swXVtcIm5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luVXNlck1haWxfMSA9IGpvaW5Vc2VyUm93c1swXVtcIm1haWxcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICB0byA9IHVzZXJSb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocm93KSB7IHJldHVybiByb3dbXCJtYWlsXCJdOyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKG1haWwpIHsgcmV0dXJuIG1haWwgIT0gam9pblVzZXJNYWlsXzE7IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2gubGFiZWwgPSAyMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLnRyeXMucHVzaChbMjEsIDI2LCAyNywgMjhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcnNfMSA9IF9fdmFsdWVzKGFuc3dlcnMpLCBhbnN3ZXJzXzFfMSA9IGFuc3dlcnNfMS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC5sYWJlbCA9IDIyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhYW5zd2Vyc18xXzEuZG9uZSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMjVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyXzEgPSBhbnN3ZXJzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzcy5cXFwic2NoZW1hVHlwZVxcXCIsIHNzLlxcXCJ0eXBlXFxcIiwgc3MuXFxcInJlcXVpcmVkXFxcIiwgc3MuXFxcImxhYmVsXFxcIlxcbiAgICAgICAgRlJPTSBzaGl0YWlfc2NoZW1hIGFzIHNzIFdIRVJFIHNzLmlkID0gJDE7XCIsIFthbnN3ZXJfMS5zY2hlbWFJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVJvd3MgPSAoX2guc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjaGVtYVJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOCueOCreODvOODnuOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0RhdGUgPSBzY2hlbWFSb3dzWzBdW1widHlwZVwiXSA9PSBcImRhdGV0aW1lXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjx0cj48dGQ+XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiLmNvbmNhdChzY2hlbWFSb3dzWzBdW1wibGFiZWxcIl0sIFwiPC90ZD48dGQ+XCIpLmNvbmNhdChpc0RhdGUgPyBmb3JtYXREaXNwbGF5RGF0ZShhbnN3ZXJfMS52YWx1ZSkgOiBhbnN3ZXJfMS52YWx1ZSwgXCI8L3RkPjwvdGQ+XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2gubGFiZWwgPSAyNDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcnNfMV8xID0gYW5zd2Vyc18xLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDIyXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyNTogcmV0dXJuIFszIC8qYnJlYWsqLywgMjhdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI2OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xMV8xID0gX2guc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZV8xMSA9IHsgZXJyb3I6IGVfMTFfMSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMjhdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI3OlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5zd2Vyc18xXzEgJiYgIWFuc3dlcnNfMV8xLmRvbmUgJiYgKF9nID0gYW5zd2Vyc18xLnJldHVybikpIF9nLmNhbGwoYW5zd2Vyc18xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xMSkgdGhyb3cgZV8xMS5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyODpcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgPSBcIlxcbjwhZG9jdHlwZSBodG1sPlxcbjxodG1sIGxhbmc9XFxcImphXFxcIj5cXG48aGVhZD5cXG4gIDxtZXRhIGNoYXJzZXQ9XFxcInV0Zi04XFxcIiAvPlxcbiAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcXFwiIC8+XFxuICA8dGl0bGU+XFx1NTNDMlxcdTUyQTBcXHU4MDA1XFx1MzA2RVxcdTUxNjVcXHU1MjlCXFx1OTAxQVxcdTc3RTU8L3RpdGxlPlxcbiAgPHN0eWxlPlxcbiAgICBib2R5IHsgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIkhpcmFnaW5vIEtha3UgR290aGljIFByb05cXFwiLCBcXFwiWXUgR290aGljXFxcIiwgXFxcIk5vdG8gU2FucyBKUFxcXCIsIEFyaWFsLCBzYW5zLXNlcmlmOyBtYXJnaW46MDsgcGFkZGluZzowOyBiYWNrZ3JvdW5kOiNmNmY4ZmI7IGNvbG9yOiMxMTE7IH1cXG4gICAgLmNvbnRhaW5lciB7IG1heC13aWR0aDo2MDBweDsgbWFyZ2luOjI4cHggYXV0bzsgYmFja2dyb3VuZDojZmZmOyBib3JkZXItcmFkaXVzOjhweDsgb3ZlcmZsb3c6aGlkZGVuOyBib3gtc2hhZG93OjAgNnB4IDI0cHggcmdiYSgyMCwzMCw2MCwwLjA4KTsgfVxcbiAgICAuaGVhZGVyIHsgcGFkZGluZzoyMHB4OyBiYWNrZ3JvdW5kOiM3YzNhZWQ7IGNvbG9yOiNmZmY7IH1cXG4gICAgLmNvbnRlbnQgeyBwYWRkaW5nOjIwcHg7IH1cXG4gICAgLnRpdGxlIHsgZm9udC1zaXplOjE4cHg7IG1hcmdpbjowIDAgOHB4IDA7IH1cXG4gICAgLm1ldGEgeyBmb250LXNpemU6MTNweDsgY29sb3I6IzZiNzI4MDsgbWFyZ2luLWJvdHRvbToxMnB4OyB9XFxuICAgIC5mb3JtIHsgYmFja2dyb3VuZDojZjdmOWZjOyBwYWRkaW5nOjE0cHg7IGJvcmRlci1yYWRpdXM6NnB4OyBtYXJnaW4tYm90dG9tOjE2cHg7IH1cXG4gICAgLmJ0biB7IGRpc3BsYXk6aW5saW5lLWJsb2NrOyBwYWRkaW5nOjEycHggMThweDsgYm9yZGVyLXJhZGl1czo4cHg7IHRleHQtZGVjb3JhdGlvbjpub25lOyBmb250LXdlaWdodDo2MDA7IH1cXG4gICAgLmJ0bi1wcmltYXJ5IHsgYmFja2dyb3VuZDojN2MzYWVkOyBjb2xvcjojZmZmOyB9XFxuICAgIC5mb290ZXIgeyBmb250LXNpemU6MTJweDsgY29sb3I6IzlhYTBhYjsgcGFkZGluZzoxOHB4OyB0ZXh0LWFsaWduOmNlbnRlcjsgfVxcbiAgICB0YWJsZSB7IHdpZHRoOjEwMCU7IGJvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTsgfVxcbiAgICB0ZCB7IHBhZGRpbmc6OHB4IDA7IHZlcnRpY2FsLWFsaWduOnRvcDsgfVxcbiAgICAua2V5IHsgZm9udC13ZWlnaHQ6NzAwOyBjb2xvcjojMTExOyB3aWR0aDozNiU7IH1cXG4gICAgLnZhbCB7IGNvbG9yOiMyMjI7IH1cXG4gIDwvc3R5bGU+XFxuPC9oZWFkPlxcbjxib2R5PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIiByb2xlPVxcXCJhcnRpY2xlXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICA8aDEgc3R5bGU9XFxcImZvbnQtc2l6ZToyMHB4O21hcmdpbjowXFxcIj5TSElUQUk8L2gxPlxcbiAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46NnB4IDAgMCAwO2ZvbnQtc2l6ZToxM3B4O29wYWNpdHk6MC45NVxcXCI+XFx1NTNDMlxcdTUyQTBcXHU4MDA1XFx1MzA0Q1xcdTc4QkFcXHU4QThEXFx1OTgwNVxcdTc2RUVcXHUzMDkyXFx1NTE2NVxcdTUyOUJcXHUzMDU3XFx1MzA3RVxcdTMwNTdcXHUzMDVGPC9wPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcInRpdGxlXFxcIj5cXHVEODNEXFx1REM2NSBcIi5jb25jYXQoam9pblVzZXJOYW1lLCBcIiBcXHUzMDU1XFx1MzA5M1xcdTMwNENcXHU1M0MyXFx1NTJBMFxcdTMwRkJcXHU3OEJBXFx1OEE4RFxcdTMwNTdcXHUzMDdFXFx1MzA1N1xcdTMwNUYgXFx1MjAxNCBcIikuY29uY2F0KHRpdGxlLCBcIjwvcD5cXG4gICAgICA8cCBjbGFzcz1cXFwibWV0YVxcXCI+PHNwYW4gc3R5bGU9XFxcImZvbnQtd2VpZ2h0OjcwMFxcXCI+XFx1MzBCMFxcdTMwRUJcXHUzMEZDXFx1MzBEN1xcdUZGMUE8L3NwYW4+IFwiKS5jb25jYXQoZ3JvdXBOYW1lLCBcIiA8L3A+XFxuXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybVxcXCI+XFxuICAgICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjAgMCAxMnB4IDA7XFxcIj48c3Ryb25nPlxcdTUxNjVcXHU1MjlCXFx1MzA1NVxcdTMwOENcXHUzMDVGXFx1NzhCQVxcdThBOERcXHU5ODA1XFx1NzZFRTwvc3Ryb25nPjwvcD5cXG4gICAgICAgIDx0YWJsZT5cXG4gICAgICBcIikuY29uY2F0KGRlc2NyaXB0aW9uLCBcIlxcbiAgICAgIDwvdGFibGU+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPHAgc3R5bGU9XFxcIm1hcmdpbjowIDAgMThweCAwO1xcXCI+XFx1NTNDMlxcdTUyQTBcXHU4MDA1XFx1NjBDNVxcdTU4MzFcXHUzMDZFXFx1NjcwMFxcdTY1QjBcXHU3MkI2XFx1NkNDMVxcdTMwNkZcXHU0RTBCXFx1MzA2RVxcdTMwRUFcXHUzMEYzXFx1MzBBRlxcdTMwNjdcXHU3OEJBXFx1OEE4RFxcdTMwNjdcXHUzMDREXFx1MzA3RVxcdTMwNTlcXHUzMDAyPC9wPlxcbiAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGhyZWY9XFxcIlwiKS5jb25jYXQocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZST05URU5EX1VSTCArIFwiL1wiICsgXCJ3aXNoXCIgKyBcIi9cIiArIHdpc2hJZCwgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiByZWw9XFxcIm5vb3BlbmVyXFxcIj5cXHU1M0MyXFx1NTJBMFxcdTgwMDVcXHU2MEM1XFx1NTgzMVxcdTMwOTJcXHU3OEJBXFx1OEE4RFxcdTMwNTlcXHUzMDhCPC9hPlxcblxcbiAgICAgIDxociBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VlZjJmNzttYXJnaW46MThweCAwO1xcXCIgLz5cXG4gICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjA7Zm9udC1zaXplOjEzcHg7Y29sb3I6IzU1NjA3MDtcXFwiPlxcbiAgICAgICAgXFx1NUZDNVxcdTg5ODFcXHUzMDY3XFx1MzA0MlxcdTMwOENcXHUzMDcwXFx1NEUzQlxcdTUwQUNcXHU4MDA1XFx1MzA4NFxcdTRFRDZcXHUzMDZFXFx1NTNDMlxcdTUyQTBcXHU4MDA1XFx1MzA3OFxcdTkwMjNcXHU3RDYxXFx1MzA5MlxcdTUzRDZcXHUzMDhBXFx1MzA3RVxcdTMwNTdcXHUzMDg3XFx1MzA0NlxcdTMwMDJcXG4gICAgICA8L3A+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcbiAgICAgIFxcdTMwNTNcXHUzMDZFXFx1MzBFMVxcdTMwRkNcXHUzMEVCXFx1MzA2RlxcdTgxRUFcXHU1MkQ1XFx1OTE0RFxcdTRGRTFcXHUzMDY3XFx1MzA1OVxcdTMwMDJcXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2JvZHk+XFxuPC9odG1sPlxcblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRvLmxlbmd0aCAhPSAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zZW5kRW1haWwodG8sIFwiXFx1MzAxMFNISVRBSVxcdTMwMTFcXHU1M0MyXFx1NTJBMFxcdTgwMDVcXHUzMDRDXFx1NTE2NVxcdTUyOUJcXHUzMDU3XFx1MzA3RVxcdTMwNTdcXHUzMDVGIFxcdTIwMTQgXCIuY29uY2F0KHRpdGxlLCBcIlxcdUZGMDhcIikuY29uY2F0KGpvaW5Vc2VyTmFtZSwgXCJcXHVGRjA5XCIpLCBodG1sKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjk6XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaC5sYWJlbCA9IDMwO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDMwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJDT01NSVRcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDMxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2guc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMzRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xMiA9IF9oLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlJPTExCQUNLXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9oLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfMTI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzQ6IHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUudXBkYXRlV2lzaCA9IGZ1bmN0aW9uICh3aXNoLCBpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGdyb3VwUm93cywgd2lzaElkLCB1cGRhdGVXaXNoXzEsIHVybFBhdHRlcm4sIGlzVXJsLCBpbWFnZURhdGFfMSwgX2EsIHVwZGF0ZVJvd3MsIHVzZXJSb3dzLCBncm91cE5hbWUsIGNyZWF0b3JVc2VyUm93cywgY3JlYXRvck5hbWUsIGNyZWF0b3JNYWlsXzIsIHRpdGxlLCB0bywgZGVzY3JpcHRpb24sIGh0bWwsIGVfMTM7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcInN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkJFR0lOXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzIsIDEzLCAsIDE1XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc2cuaWQsIHNnLlxcXCJncm91cE5hbWVcXFwiIEZST00gcHVibGljLnNoaXRhaV93aXNoIGFzIHN3IElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cCBhcyBzZyBPTiBzdy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBJTk5FUiBKT0lOIHB1YmxpYy5zaGl0YWlfZ3JvdXBfam9pbiBhcyBzamcgT04gc2pnLlxcXCJncm91cElkXFxcIiA9IHNnLmlkIEFORCBzamcuXFxcInVzZXJJZFxcXCIgPSAkMSBXSEVSRSBzdy5pZCA9ICQyO1wiLCBbaWQsIHdpc2guaWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwUm93cyA9IChfYi5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLmqKnpmZDjgYzjgYLjgorjgb7jgZvjgpPjgILjgrDjg6vjg7zjg5flpJbjga7jg6bjg7zjgrbjg7zjgafjgZnjgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lzaElkID0gd2lzaC5pZCwgdXBkYXRlV2lzaF8xID0gX19yZXN0KHdpc2gsIFtcImlkXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybFBhdHRlcm4gPSAvXihodHRwcz98ZnRwKSg6XFwvXFwvW1xcd1xcLzolI1xcJCZcXD9cXChcXCl+XFwuPVxcK1xcLV0rKS87XG4gICAgICAgICAgICAgICAgICAgICAgICBpc1VybCA9IHVybFBhdHRlcm4udGVzdCh1cGRhdGVXaXNoXzEuaW1hZ2VEYXRhIHx8IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1VybCkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IHVwZGF0ZVdpc2hfMS5pbWFnZURhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnVwbG9hZEltYWdlRGF0YSh1cGRhdGVXaXNoXzEuaW1hZ2VEYXRhIHx8IFwiXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YV8xID0gX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJVUERBVEUgcHVibGljLnNoaXRhaV93aXNoIFNFVCBcIi5jb25jYXQoT2JqZWN0LmtleXModXBkYXRlV2lzaF8xKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgaXNVcmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB1cGRhdGVXaXNoXzFbY3VycmVudF0gPT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIk5VTExcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjdXJyZW50ID09IFwiaW1hZ2VEYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGltYWdlRGF0YV8xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCInXCIgKyBpbWFnZURhdGFfMSArIFwiJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJOVUxMXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiJ1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlV2lzaF8xW2N1cnJlbnRdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCInXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHIgPSBcIlxcXCJcIi5jb25jYXQoY3VycmVudCwgXCJcXFwiXCIpICsgXCIgPSBcIiArIFwiXCIuY29uY2F0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIsIHN0cik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2ICE9PSBcIlwiID8gcHJldiArIFwiLCBcIiArIHN0ciA6IHN0cjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBcIlwiKSwgXCIgV0hFUkUgaWQgPSAkMSBSRVRVUk5JTkcgaWQ7XCIpLCBbd2lzaC5pZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUm93cyA9IChfYi5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44GX44Gf44GE44GT44Go44Gu5pu05paw44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkNPTU1JVFwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzdWkudXNlcl9pZCBBcyBtYWlsXFxuICAgICAgICBGUk9NIHNoaXRhaV9qb2luIGFzIHNqIElOTkVSIEpPSU4gc2hpdGFpX3VzZXJfaW5mbyBhcyBzdWkgT04gc3VpLmlkID0gc2ouXFxcInVzZXJJZFxcXCIgV0hFUkUgc2ouXFxcIndpc2hJZFxcXCIgPSAkMTtcIiwgW3dpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclJvd3MgPSAoX2Iuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cE5hbWUgPSBncm91cFJvd3NbMF1bXCJncm91cE5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc3VpLnVzZXJfbmFtZSBBcyBuYW1lLCBzdWkudXNlcl9pZCBBcyBtYWlsLCBzdy50aXRsZVxcbiAgICAgICAgRlJPTSBzaGl0YWlfd2lzaCBhcyBzdyBJTk5FUiBKT0lOIHNoaXRhaV91c2VyX2luZm8gYXMgc3VpIE9OIHN3LlxcXCJjcmVhdG9ySWRcXFwiID0gc3VpLlxcXCJpZFxcXCIgV0hFUkUgc3cuaWQgPSAkMTtcIiwgW3dpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JVc2VyUm93cyA9IChfYi5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3JlYXRvclVzZXJSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLkvZzmiJDogIXmg4XloLHjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvck5hbWUgPSBjcmVhdG9yVXNlclJvd3NbMF1bXCJuYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvck1haWxfMiA9IGNyZWF0b3JVc2VyUm93c1swXVtcIm1haWxcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IGNyZWF0b3JVc2VyUm93c1swXVtcInRpdGxlXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclJvd3MucHVzaCh7IG1haWw6IGNyZWF0b3JNYWlsXzIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0byA9IHVzZXJSb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocm93KSB7IHJldHVybiByb3dbXCJtYWlsXCJdOyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKG1haWwpIHsgcmV0dXJuIG1haWwgIT0gY3JlYXRvck1haWxfMjsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IE9iamVjdC5rZXlzKHdpc2gpLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvYmogPSBfdGhpcy5jb2x1bW5OYW1lcy5maW5kKGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iai5jb2x1bW4gPT0gY3VycmVudDsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzRGF0ZSA9IF90aGlzLmRhdGVDb2x1bW5zLnNvbWUoZnVuY3Rpb24gKGR0Q29sKSB7IHJldHVybiBkdENvbCA9PSBjdXJyZW50OyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uID0gY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocHJldiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjx0cj48dGQ+XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIi5jb25jYXQob2JqLm5hbWUsIFwiPC90ZD48dGQ+XCIpLmNvbmNhdChpc0RhdGUgPyBmb3JtYXREaXNwbGF5RGF0ZSh3aXNoW2NvbHVtbl0pIDogd2lzaFtjb2x1bW5dLCBcIjwvdGQ+PC90cj5cIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCA9IFwiXFxuPCFkb2N0eXBlIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiamFcXFwiPlxcbjxoZWFkPlxcbiAgPG1ldGEgY2hhcnNldD1cXFwidXRmLThcXFwiIC8+XFxuICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVxcXCIgLz5cXG4gIDx0aXRsZT5cXHUzMDU3XFx1MzA1RlxcdTMwNDRcXHU2NkY0XFx1NjVCMFxcdTkwMUFcXHU3N0U1PC90aXRsZT5cXG4gIDxzdHlsZT5cXG4gICAgYm9keSB7IGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJIaXJhZ2lubyBLYWt1IEdvdGhpYyBQcm9OXFxcIiwgXFxcIll1IEdvdGhpY1xcXCIsIFxcXCJOb3RvIFNhbnMgSlBcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjsgbWFyZ2luOjA7IHBhZGRpbmc6MDsgYmFja2dyb3VuZDojZjZmOGZiOyBjb2xvcjojMTExOyB9XFxuICAgIC5jb250YWluZXIgeyBtYXgtd2lkdGg6NjAwcHg7IG1hcmdpbjoyOHB4IGF1dG87IGJhY2tncm91bmQ6I2ZmZjsgYm9yZGVyLXJhZGl1czo4cHg7IG92ZXJmbG93OmhpZGRlbjsgYm94LXNoYWRvdzowIDZweCAyNHB4IHJnYmEoMjAsMzAsNjAsMC4wOCk7IH1cXG4gICAgLmhlYWRlciB7IHBhZGRpbmc6MjBweDsgYmFja2dyb3VuZDojMGY3NjZlOyBjb2xvcjojZmZmOyB9XFxuICAgIC5jb250ZW50IHsgcGFkZGluZzoyMHB4OyB9XFxuICAgIC50aXRsZSB7IGZvbnQtc2l6ZToxOHB4OyBtYXJnaW46MCAwIDhweCAwOyB9XFxuICAgIC5tZXRhIHsgZm9udC1zaXplOjEzcHg7IGNvbG9yOiM2YjcyODA7IG1hcmdpbi1ib3R0b206MTJweDsgfVxcbiAgICAuY2hhbmdlcyB7IGJhY2tncm91bmQ6I2ZmZjhlNjsgcGFkZGluZzoxMnB4OyBib3JkZXItcmFkaXVzOjZweDsgYm9yZGVyOjFweCBzb2xpZCAjZjFlNmM4OyBtYXJnaW4tYm90dG9tOjE2cHg7IH1cXG4gICAgLmJ0biB7IGRpc3BsYXk6aW5saW5lLWJsb2NrOyBwYWRkaW5nOjEycHggMThweDsgYm9yZGVyLXJhZGl1czo4cHg7IHRleHQtZGVjb3JhdGlvbjpub25lOyBmb250LXdlaWdodDo2MDA7IH1cXG4gICAgLmJ0bi1wcmltYXJ5IHsgYmFja2dyb3VuZDojMGY3NjZlOyBjb2xvcjojZmZmOyB9XFxuICAgIC5mb290ZXIgeyBmb250LXNpemU6MTJweDsgY29sb3I6IzlhYTBhYjsgcGFkZGluZzoxOHB4OyB0ZXh0LWFsaWduOmNlbnRlcjsgfVxcbiAgPC9zdHlsZT5cXG48L2hlYWQ+XFxuPGJvZHk+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiIHJvbGU9XFxcImFydGljbGVcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgIDxoMSBzdHlsZT1cXFwiZm9udC1zaXplOjIwcHg7bWFyZ2luOjBcXFwiPlNISVRBSTwvaDE+XFxuICAgICAgPHAgc3R5bGU9XFxcIm1hcmdpbjo2cHggMCAwIDA7Zm9udC1zaXplOjEzcHg7b3BhY2l0eTowLjk1XFxcIj5cXHUzMDBDXFx1MzA1N1xcdTMwNUZcXHUzMDQ0XFx1MzAwRFxcdTMwNkVcXHU2NkY0XFx1NjVCMFxcdTMwNENcXHUzMDQyXFx1MzA4QVxcdTMwN0VcXHUzMDU3XFx1MzA1RjwvcD5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJ0aXRsZVxcXCI+XFx1MjcwRlxcdUZFMEYgXFx1NjZGNFxcdTY1QjBcXHVGRjFBXCIuY29uY2F0KHRpdGxlLCBcIjwvcD5cXG4gICAgICA8cCBjbGFzcz1cXFwibWV0YVxcXCI+PHNwYW4gc3R5bGU9XFxcImZvbnQtd2VpZ2h0OjcwMFxcXCI+XFx1NjZGNFxcdTY1QjBcXHU4MDA1XFx1RkYxQTwvc3Bhbj4gXCIpLmNvbmNhdChjcmVhdG9yTmFtZSwgXCIgPC9wPlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNoYW5nZXNcXFwiPlxcbiAgICAgICAgPHAgc3R5bGU9XFxcIm1hcmdpbjowIDAgOHB4IDA7XFxcIj48c3Ryb25nPlxcdTU5MDlcXHU2NkY0XFx1MzA1NVxcdTMwOENcXHUzMDVGXFx1OTgwNVxcdTc2RUU8L3N0cm9uZz48L3A+XFxuICAgICAgICA8cHJlIHN0eWxlPVxcXCJtYXJnaW46MDtcXFwiPjx0YWJsZT5cIikuY29uY2F0KGRlc2NyaXB0aW9uLCBcIjwvdGFibGU+PC9wcmU+XFxuICAgICAgPC9kaXY+XFxuXFxuICAgICAgPHAgc3R5bGU9XFxcIm1hcmdpbjowIDAgMThweCAwO1xcXCI+XFx1NTkwOVxcdTY2RjRcXHUzMDZFXFx1OEE3M1xcdTdEMzBcXHUzMDZGXFx1NEUwQlxcdTMwNkVcXHUzMEVBXFx1MzBGM1xcdTMwQUZcXHUzMDRCXFx1MzA4OVxcdTMwNTRcXHU3OEJBXFx1OEE4RFxcdTMwNEZcXHUzMDYwXFx1MzA1NVxcdTMwNDRcXHUzMDAyPC9wPlxcbiAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGhyZWY9XFxcIlwiKS5jb25jYXQocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZST05URU5EX1VSTCArIFwiL1wiICsgXCJ3aXNoXCIgKyBcIi9cIiArIHdpc2hJZCwgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiByZWw9XFxcIm5vb3BlbmVyXFxcIj5cXHU2NkY0XFx1NjVCMFxcdTUxODVcXHU1QkI5XFx1MzA5MlxcdTc4QkFcXHU4QThEXFx1MzA1OVxcdTMwOEI8L2E+XFxuXFxuICAgICAgPGhyIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtib3JkZXItdG9wOjFweCBzb2xpZCAjZWVmMmY3O21hcmdpbjoxOHB4IDA7XFxcIiAvPlxcbiAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46MDtmb250LXNpemU6MTNweDtjb2xvcjojNTU2MDcwO1xcXCI+XFxuICAgICAgICBcXHU1M0MyXFx1NTJBMFxcdTRFODhcXHU1QjlBXFx1MzA2RVxcdTY1QjlcXHUzMDZGXFx1NEU4OFxcdTVCOUFcXHUzMDg0XFx1NTE2NVxcdTUyOUJcXHU1MTg1XFx1NUJCOVxcdTMwNkJcXHU1RjcxXFx1OTdGRlxcdTMwNENcXHUzMDZBXFx1MzA0NFxcdTMwNEJcXHUzMDU0XFx1NzhCQVxcdThBOERcXHUzMDRGXFx1MzA2MFxcdTMwNTVcXHUzMDQ0XFx1MzAwMlxcbiAgICAgIDwvcD5cXG4gICAgPC9kaXY+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImZvb3RlclxcXCI+XFxuICAgICAgXFx1MzA1M1xcdTMwNkVcXHUzMEUxXFx1MzBGQ1xcdTMwRUJcXHUzMDZGIFNISVRBSSBcXHUzMDRCXFx1MzA4OVxcdTMwNkVcXHU4MUVBXFx1NTJENVxcdTkwMUFcXHU3N0U1XFx1MzA2N1xcdTMwNTlcXHUzMDAyXFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9ib2R5PlxcbjwvaHRtbD5cXG5cXG5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh0by5sZW5ndGggIT0gMCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDEyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuc2VuZEVtYWlsKHRvLCBcIlxcdTMwMTBTSElUQUlcXHUzMDExXFx1MzAwQ1xcdTMwNTdcXHUzMDVGXFx1MzA0NFxcdTMwMERcXHUzMDRDXFx1NjZGNFxcdTY1QjBcXHUzMDU1XFx1MzA4Q1xcdTMwN0VcXHUzMDU3XFx1MzA1RiBcXHUyMDE0IFwiLmNvbmNhdCh0aXRsZSksIGh0bWwpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMTI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6IHJldHVybiBbMyAvKmJyZWFrKi8sIDE1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTMgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJST0xMQkFDS1wiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzEzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE1OiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5lb25BcGkucHJvdG90eXBlLmdldFdpc2hlcyA9IGZ1bmN0aW9uIChncm91cElkLCBpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGdyb3VwUm93cywgd2lzaFJvd3MsIF9sb29wXzEsIHRoaXNfMSwgd2lzaFJvd3NfMiwgd2lzaFJvd3NfMl8xLCB3aXNoLCBlXzE0O1xuICAgICAgICAgICAgdmFyIGVfMTUsIF9hO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFsxLCA0LCAsIDVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzZy5pZCBGUk9NIHB1YmxpYy5zaGl0YWlfZ3JvdXAgYXMgc2cgSU5ORVIgSk9JTiBwdWJsaWMuc2hpdGFpX2dyb3VwX2pvaW4gYXMgc2pnIE9OIHNqZy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBBTkQgc2pnLlxcXCJ1c2VySWRcXFwiID0gJDEgV0hFUkUgc2cuXFxcImlkXFxcIiA9ICQyO1wiLCBbaWQsIGdyb3VwSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwUm93cyA9IChfYi5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLmqKnpmZDjgYzjgYLjgorjgb7jgZvjgpPjgILjgrDjg6vjg7zjg5flpJbjga7jg6bjg7zjgrbjg7zjgafjgZnjgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiV0lUSCB3aXNoIEFTXFxuICAgICAgICAgIChTRUxFQ1QgaWQsIFwiLmNvbmNhdCh0aGlzLmNvbHVtbnMuam9pbihcIixcIiksIFwiXFxuICAgICAgICAgIEZST00gcHVibGljLnNoaXRhaV93aXNoXFxuICAgICAgICAgIFdIRVJFIFxcXCJncm91cElkXFxcIiA9ICQxXFxuICAgICAgICAgIE9SREVSIEJZIGlkIEFTQyksXFxuICAgICAgICBhbnN3ZXJzIEFTXFxuICAgICAgICAgIChTRUxFQ1QgXFxcIndpc2hJZFxcXCIsXFxuICAgICAgICAgICAgICAgICAganNvbl9hZ2codG9fanNvbmIoanNvbl9idWlsZF9vYmplY3QoJ2pvaW5lZEF0JywgXFxcImpvaW5lZEF0XFxcIiwgJ3VzZXJJZCcsIFxcXCJ1c2VySWRcXFwiKSkgfHwgdG9fanNvbmIoYW5zd2VyKVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgT1JERVIgQlkgXFxcImpvaW5lZEF0XFxcIiBBU0MpIEFTIHBhcnRpY2lwYW50c1xcbiAgICAgICAgICBGUk9NXFxuICAgICAgICAgICAgKFNFTEVDVCBcXFwid2lzaElkXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIFxcXCJqb2luZWRBdFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICBcXFwidXNlcklkXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIGpzb25fb2JqZWN0X2FnZyhcXFwic2NoZW1hVHlwZVxcXCIgfHwgJ0Fuc3dlcnMnLCBhbnN3ZXIpIEFTIGFuc3dlclxcbiAgICAgICAgICAgICAgRlJPTVxcbiAgICAgICAgICAgICAgICAoU0VMRUNUIHNqLlxcXCJ3aXNoSWRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNqLlxcXCJqb2luZWRBdFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc2ouXFxcInVzZXJJZFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc3MuXFxcInNjaGVtYVR5cGVcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGpzb25fb2JqZWN0X2FnZyhzcy50eXBlLCBzYS52YWx1ZSkgQVMgYW5zd2VyXFxuICAgICAgICAgICAgICAgIEZST00gc2hpdGFpX2pvaW4gQVMgc2pcXG4gICAgICAgICAgICAgICAgTEVGVCBKT0lOIHNoaXRhaV9zY2hlbWEgQVMgc3MgT04gc3MuXFxcIndpc2hJZFxcXCIgPSBzai5cXFwid2lzaElkXFxcIlxcbiAgICAgICAgICAgICAgICBMRUZUIEpPSU4gcHVibGljLnNoaXRhaV9hbnN3ZXIgQVMgc2EgT04gc2EuXFxcInNjaGVtYUlkXFxcIiA9IHNzLmlkXFxuICAgICAgICAgICAgICAgIEFORCBzcy5cXFwid2lzaElkXFxcIiA9IHNqLlxcXCJ3aXNoSWRcXFwiXFxuICAgICAgICAgICAgICAgIEFORCBzYS5cXFwidXNlcklkXFxcIiA9IHNqLlxcXCJ1c2VySWRcXFwiXFxuICAgICAgICAgICAgICAgIFdIRVJFIEVYSVNUU1xcbiAgICAgICAgICAgICAgICAgICAgKFNFTEVDVCBpZFxcbiAgICAgICAgICAgICAgICAgICAgICBGUk9NIHdpc2hcXG4gICAgICAgICAgICAgICAgICAgICAgV0hFUkUgaWQgPSBzai5cXFwid2lzaElkXFxcIilcXG4gICAgICAgICAgICAgICAgR1JPVVAgQlkgc2ouXFxcIndpc2hJZFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzai5cXFwiam9pbmVkQXRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2ouXFxcInVzZXJJZFxcXCIsXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcy5cXFwic2NoZW1hVHlwZVxcXCIpXFxuICAgICAgICAgICAgICBHUk9VUCBCWSBcXFwid2lzaElkXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgXFxcImpvaW5lZEF0XFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgXFxcInVzZXJJZFxcXCIpXFxuICAgICAgICAgIEdST1VQIEJZIFxcXCJ3aXNoSWRcXFwiKSxcXG4gICAgICAgIFNDSEVNQSBBU1xcbiAgICAgICAgICAoU0VMRUNUIFxcXCJ3aXNoSWRcXFwiLFxcbiAgICAgICAgICAgICAgICAgIHQuc2NoZW1hLT4ncGFydGljaXBhdGlvbicgQVMgcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWEsXFxuICAgICAgICAgICAgICAgICAgdC5zY2hlbWEtPidwb3N0JyBBUyBwb3N0Q29uZmlybVNjaGVtYVxcbiAgICAgICAgICBGUk9NXFxuICAgICAgICAgICAgKFNFTEVDVCBcXFwid2lzaElkXFxcIixcXG4gICAgICAgICAgICAgICAgICAgIGpzb25iX29iamVjdF9hZ2coXFxcInNjaGVtYVR5cGVcXFwiLCBTQ0hFTUEpIEFTIFNDSEVNQVxcbiAgICAgICAgICAgICAgRlJPTVxcbiAgICAgICAgICAgICAgICAoU0VMRUNUIHNzLlxcXCJ3aXNoSWRcXFwiLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNzLlxcXCJzY2hlbWFUeXBlXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICBqc29uX2FnZyhqc29uX2J1aWxkX29iamVjdCgndHlwZScsIENBU0VcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdIRU4gc3MuXFxcInNjaGVtYVR5cGVcXFwiID0gJ3BhcnRpY2lwYXRpb24nIFRIRU4gc3cuXFxcInBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hVHlwZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVMU0Ugc3cuXFxcInBvc3RDb25maXJtU2NoZW1hVHlwZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRU5ELCBzcy5cXFwidHlwZVxcXCIgfHwgJ0xhYmVsJywgc3MuXFxcImxhYmVsXFxcIiwgc3MuXFxcInR5cGVcXFwiIHx8ICdSZXF1aXJlZCcsIHNzLlxcXCJyZXF1aXJlZFxcXCIpKSBBUyBTQ0hFTUFcXG4gICAgICAgICAgICAgICAgRlJPTSBwdWJsaWMuc2hpdGFpX3dpc2ggQVMgc3dcXG4gICAgICAgICAgICAgICAgSU5ORVIgSk9JTiBzaGl0YWlfc2NoZW1hIEFTIHNzIE9OIHNzLlxcXCJ3aXNoSWRcXFwiID0gc3cuaWRcXG4gICAgICAgICAgICAgICAgV0hFUkUgRVhJU1RTXFxuICAgICAgICAgICAgICAgICAgICAoU0VMRUNUIGlkXFxuICAgICAgICAgICAgICAgICAgICAgIEZST00gd2lzaFxcbiAgICAgICAgICAgICAgICAgICAgICBXSEVSRSBpZCA9IHN3LmlkKVxcbiAgICAgICAgICAgICAgICBHUk9VUCBCWSBzcy5cXFwid2lzaElkXFxcIixcXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNzLlxcXCJzY2hlbWFUeXBlXFxcIilcXG4gICAgICAgICAgICAgIEdST1VQIEJZIFxcXCJ3aXNoSWRcXFwiKSB0KVxcbiAgICAgICAgU0VMRUNUIHdpc2guKixcXG4gICAgICAgICAgICAgIHNjaGVtYS5wYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYSBBUyBcXFwicGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFcXFwiLFxcbiAgICAgICAgICAgICAgc2NoZW1hLnBvc3RDb25maXJtU2NoZW1hIEFTIFxcXCJwb3N0Q29uZmlybVNjaGVtYVxcXCIsXFxuICAgICAgICAgICAgICBhbnN3ZXJzLnBhcnRpY2lwYW50c1xcbiAgICAgICAgRlJPTSB3aXNoXFxuICAgICAgICBJTk5FUiBKT0lOIFNDSEVNQSBPTiBzY2hlbWEuXFxcIndpc2hJZFxcXCIgPSB3aXNoLmlkXFxuICAgICAgICBMRUZUIEpPSU4gYW5zd2VycyBPTiBzY2hlbWEuXFxcIndpc2hJZFxcXCIgPSBhbnN3ZXJzLlxcXCJ3aXNoSWRcXFwiXFxuICAgICAgICBPUkRFUiBCWSBpZCBBU0M7XCIpLCBbZ3JvdXBJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lzaFJvd3MgPSAoX2Iuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpc2hSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgZfjgZ/jgYTjgZPjgajjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2xvb3BfMSA9IGZ1bmN0aW9uICh3aXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc1dpc2ggPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB3aXNoLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cElkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9ySWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUGFydGljaXBhbnRzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25MYWJlbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWE6IHsgdHlwZTogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdENvbmZpcm1TY2hlbWE6IHsgdHlwZTogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXduOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh3aXNoW1wiaWRcIl0sIHdpc2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuY3JlYXRlUmVzcG9uc2VEYXRhKHdpc2guaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleHRDb2x1bW5zID0gdGhpc18xLmNvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbCAhPT0gJ1wicGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFUeXBlXCInICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgIT09ICdcInBvc3RDb25maXJtU2NoZW1hVHlwZVwiJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXBDb2x1bW4gPSBjb2x1bW4ucmVwbGFjZUFsbCgnXCInLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXBDb2x1bW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB3aXNoW3JlcENvbHVtbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzV2lzaCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXNXaXNoKSwgKF9hID0ge30sIF9hW3JlcENvbHVtbl0gPSB2YWx1ZSwgX2EpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBvc3RDb25maXJtU2NoZW1hXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFydGljaXBhbnRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2lzaCAmJiBjb2x1bW4gaW4gd2lzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpc2hbY29sdW1uXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc1dpc2ggPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVzV2lzaCksIChfYSA9IHt9LCBfYVtjb2x1bW5dID0gd2lzaFtjb2x1bW5dLCBfYSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucHVzaChyZXNXaXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzXzEgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHdpc2hSb3dzXzIgPSBfX3ZhbHVlcyh3aXNoUm93cyksIHdpc2hSb3dzXzJfMSA9IHdpc2hSb3dzXzIubmV4dCgpOyAhd2lzaFJvd3NfMl8xLmRvbmU7IHdpc2hSb3dzXzJfMSA9IHdpc2hSb3dzXzIubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpc2ggPSB3aXNoUm93c18yXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9sb29wXzEod2lzaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVfMTVfMSkgeyBlXzE1ID0geyBlcnJvcjogZV8xNV8xIH07IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aXNoUm93c18yXzEgJiYgIXdpc2hSb3dzXzJfMS5kb25lICYmIChfYSA9IHdpc2hSb3dzXzIucmV0dXJuKSkgX2EuY2FsbCh3aXNoUm93c18yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzE1KSB0aHJvdyBlXzE1LmVycm9yOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzE0ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZV8xNDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUuZ2V0Q29tbWVudHMgPSBmdW5jdGlvbiAod2lzaElkLCBpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGdyb3VwUm93cywgY29tbWVudFJvd3MsIGVfMTY7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDQsICwgNV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHNnLmlkIEZST00gcHVibGljLnNoaXRhaV93aXNoIGFzIHN3IElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cCBhcyBzZyBPTiBzdy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBJTk5FUiBKT0lOIHB1YmxpYy5zaGl0YWlfZ3JvdXBfam9pbiBhcyBzamcgT04gc2pnLlxcXCJncm91cElkXFxcIiA9IHNnLmlkIEFORCBzamcuXFxcInVzZXJJZFxcXCIgPSAkMSBXSEVSRSBzdy5pZCA9ICQyO1wiLCBbaWQsIHdpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBSb3dzID0gKF9hLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncm91cFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuaoqemZkOOBjOOBguOCiuOBvuOBm+OCk+OAguOCsOODq+ODvOODl+WkluOBruODpuODvOOCtuODvOOBp+OBmeOAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1QgaWQsIFxcXCJ3aXNoSWRcXFwiLCBcXFwidXNlcklkXFxcIiwgXFxcInVzZXJOYW1lXFxcIiwgdGV4dCwgcXVvdGUsIFxcXCJjcmVhdGVkQXRcXFwiLCBcXFwicXVvdGVBYnNvbHV0ZVN0YXJ0XFxcIiwgXFxcInF1b3RlQWJzb2x1dGVFbmRcXFwiIEZST00gcHVibGljLnNoaXRhaV9jb21tZW50IFdIRVJFIFxcXCJ3aXNoSWRcXFwiID0gJDEgT1JERVIgQlkgaWQgREVTQztcIiwgW3dpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudFJvd3MgPSAoX2Euc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbW1lbnRSb3dzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBjb21tZW50Um93cy5tYXAoZnVuY3Rpb24gKHJvdykgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogU3RyaW5nKHJvdy5pZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lzaElkOiByb3cud2lzaElkID8gU3RyaW5nKHJvdy53aXNoSWQpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogU3RyaW5nKHJvdy51c2VySWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lOiByb3cudXNlck5hbWUgfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiByb3cudGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogcm93LnF1b3RlIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IHJvdy5jcmVhdGVkQXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVBYnNvbHV0ZVN0YXJ0OiByb3cucXVvdGVBYnNvbHV0ZVN0YXJ0IHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZUFic29sdXRlRW5kOiByb3cucXVvdGVBYnNvbHV0ZUVuZCB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzE2ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZV8xNjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUucG9zdENvbW1lbnQgPSBmdW5jdGlvbiAoY29tbWVudCwgaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCB3aXNoSWQsIHRleHQsIHF1b3RlLCBxdW90ZUFic29sdXRlU3RhcnQsIHF1b3RlQWJzb2x1dGVFbmQsIGdyb3VwUm93cywgcG9zdGVyUm93cywgcG9zdFVzZXJOYW1lLCBwb3N0VXNlck1haWxfMSwgaW5zZXJ0Um93cywgcm93LCBwYXJ0aWNpcGFudFJvd3MsIGNyZWF0b3JVc2VyUm93cywgY3JlYXRvck5hbWUsIGNyZWF0b3JNYWlsLCB0aXRsZSwgdG8sIGh0bWwsIGVfMTc7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJCRUdJTlwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsyLCAxMSwgLCAxM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lzaElkID0gY29tbWVudC53aXNoSWQsIHRleHQgPSBjb21tZW50LnRleHQsIHF1b3RlID0gY29tbWVudC5xdW90ZSwgcXVvdGVBYnNvbHV0ZVN0YXJ0ID0gY29tbWVudC5xdW90ZUFic29sdXRlU3RhcnQsIHF1b3RlQWJzb2x1dGVFbmQgPSBjb21tZW50LnF1b3RlQWJzb2x1dGVFbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc2cuaWQgRlJPTSBwdWJsaWMuc2hpdGFpX3dpc2ggYXMgc3cgSU5ORVIgSk9JTiBwdWJsaWMuc2hpdGFpX2dyb3VwIGFzIHNnIE9OIHN3LlxcXCJncm91cElkXFxcIiA9IHNnLmlkIElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cF9qb2luIGFzIHNqZyBPTiBzamcuXFxcImdyb3VwSWRcXFwiID0gc2cuaWQgQU5EIHNqZy5cXFwidXNlcklkXFxcIiA9ICQxIFdIRVJFIHN3LmlkID0gJDI7XCIsIFtpZCwgd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFJvd3MgPSAoX2Euc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5qip6ZmQ44GM44GC44KK44G+44Gb44KT44CC44Kw44Or44O844OX5aSW44Gu44Om44O844K244O844Gn44GZ44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzdWkudXNlcl9uYW1lIEFzIG5hbWUsIHN1aS51c2VyX2lkIEFzIG1haWwgRlJPTSBzaGl0YWlfdXNlcl9pbmZvIGFzIHN1aSBXSEVSRSBzdWkuaWQgPSAkMTtcIiwgW2lkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0ZXJSb3dzID0gKF9hLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3N0ZXJSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHsgbWVzc2FnZTogXCLmipXnqL/ogIXmg4XloLHjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIiB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdFVzZXJOYW1lID0gcG9zdGVyUm93c1swXVtcIm5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0VXNlck1haWxfMSA9IHBvc3RlclJvd3NbMF1bXCJtYWlsXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiSU5TRVJUIElOVE8gcHVibGljLnNoaXRhaV9jb21tZW50IChcXFwid2lzaElkXFxcIiwgXFxcInVzZXJJZFxcXCIsIFxcXCJ1c2VyTmFtZVxcXCIsIHRleHQsIHF1b3RlLCBcXFwicXVvdGVBYnNvbHV0ZVN0YXJ0XFxcIiwgXFxcInF1b3RlQWJzb2x1dGVFbmRcXFwiLCBcXFwiY3JlYXRlZEF0XFxcIikgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUsICQ2LCAkNywgTk9XKCkpIFJFVFVSTklORyBpZCwgXFxcIndpc2hJZFxcXCIsIFxcXCJ1c2VySWRcXFwiLCBcXFwidXNlck5hbWVcXFwiLCB0ZXh0LCBxdW90ZSwgXFxcInF1b3RlQWJzb2x1dGVTdGFydFxcXCIsIFxcXCJxdW90ZUFic29sdXRlRW5kXFxcIiwgXFxcImNyZWF0ZWRBdFxcXCI7XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lzaElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdFVzZXJOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZSB8fCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZUFic29sdXRlU3RhcnQgfHwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVBYnNvbHV0ZUVuZCB8fCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0Um93cyA9IChfYS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0Um93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6IFwi44Kz44Oh44Oz44OI44Gu55m76Yyy44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdyA9IGluc2VydFJvd3NbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogU3RyaW5nKHJvdy5pZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lzaElkOiByb3cud2lzaElkID8gU3RyaW5nKHJvdy53aXNoSWQpIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZDogU3RyaW5nKHJvdy51c2VySWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lOiByb3cudXNlck5hbWUgfHwgXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiByb3cudGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZTogcm93LnF1b3RlIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IHJvdy5jcmVhdGVkQXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVvdGVBYnNvbHV0ZVN0YXJ0OiByb3cucXVvdGVBYnNvbHV0ZVN0YXJ0IHx8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90ZUFic29sdXRlRW5kOiByb3cucXVvdGVBYnNvbHV0ZUVuZCB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQ09NTUlUXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHN1aS51c2VyX2lkIEFzIG1haWxcXG4gICAgICAgIEZST00gc2hpdGFpX2pvaW4gYXMgc2ogSU5ORVIgSk9JTiBzaGl0YWlfdXNlcl9pbmZvIGFzIHN1aSBPTiBzdWkuaWQgPSBzai5cXFwidXNlcklkXFxcIiBXSEVSRSBzai5cXFwid2lzaElkXFxcIiA9ICQxO1wiLCBbd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudFJvd3MgPSAoX2Euc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHN1aS51c2VyX25hbWUgQXMgbmFtZSwgc3VpLnVzZXJfaWQgQXMgbWFpbCwgc3cudGl0bGVcXG4gICAgICAgIEZST00gc2hpdGFpX3dpc2ggYXMgc3cgSU5ORVIgSk9JTiBzaGl0YWlfdXNlcl9pbmZvIGFzIHN1aSBPTiBzdy5cXFwiY3JlYXRvcklkXFxcIiA9IHN1aS5cXFwiaWRcXFwiIFdIRVJFIHN3LmlkID0gJDE7XCIsIFt3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JVc2VyUm93cyA9IChfYS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3JlYXRvclVzZXJSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLkvZzmiJDogIXmg4XloLHjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvck5hbWUgPSBjcmVhdG9yVXNlclJvd3NbMF1bXCJuYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvck1haWwgPSBjcmVhdG9yVXNlclJvd3NbMF1bXCJtYWlsXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSBjcmVhdG9yVXNlclJvd3NbMF1bXCJ0aXRsZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvID0gcGFydGljaXBhbnRSb3dzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocm93KSB7IHJldHVybiByb3dbXCJtYWlsXCJdOyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoY3JlYXRvck1haWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobWFpbCkgeyByZXR1cm4gbWFpbCAmJiBtYWlsICE9PSBwb3N0VXNlck1haWxfMTsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sID0gXCJcXG48IWRvY3R5cGUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJqYVxcXCI+XFxuPGhlYWQ+XFxuICA8bWV0YSBjaGFyc2V0PVxcXCJ1dGYtOFxcXCIgLz5cXG4gIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXFxcIiAvPlxcbiAgPHRpdGxlPlxcdTMwQjNcXHUzMEUxXFx1MzBGM1xcdTMwQzhcXHUzMDZFXFx1OTAxQVxcdTc3RTU8L3RpdGxlPlxcbiAgPHN0eWxlPlxcbiAgICBib2R5IHsgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIkhpcmFnaW5vIEtha3UgR290aGljIFByb05cXFwiLCBcXFwiWXUgR290aGljXFxcIiwgXFxcIk5vdG8gU2FucyBKUFxcXCIsIEFyaWFsLCBzYW5zLXNlcmlmOyBtYXJnaW46MDsgcGFkZGluZzowOyBiYWNrZ3JvdW5kOiNmNmY4ZmI7IGNvbG9yOiMxMTE7IH1cXG4gICAgLmNvbnRhaW5lciB7IG1heC13aWR0aDo2MDBweDsgbWFyZ2luOjI4cHggYXV0bzsgYmFja2dyb3VuZDojZmZmOyBib3JkZXItcmFkaXVzOjhweDsgb3ZlcmZsb3c6aGlkZGVuOyBib3gtc2hhZG93OjAgNnB4IDI0cHggcmdiYSgyMCwzMCw2MCwwLjA4KTsgfVxcbiAgICAuaGVhZGVyIHsgcGFkZGluZzoyMHB4OyBiYWNrZ3JvdW5kOiMxZjZmZWI7IGNvbG9yOiNmZmY7IH1cXG4gICAgLmNvbnRlbnQgeyBwYWRkaW5nOjIwcHg7IH1cXG4gICAgLnRpdGxlIHsgZm9udC1zaXplOjE4cHg7IG1hcmdpbjowIDAgOHB4IDA7IH1cXG4gICAgLm1ldGEgeyBmb250LXNpemU6MTNweDsgY29sb3I6IzZiNzI4MDsgbWFyZ2luLWJvdHRvbToxMnB4OyB9XFxuICAgIC5jYXJkIHsgYmFja2dyb3VuZDojZjdmOWZjOyBwYWRkaW5nOjE0cHg7IGJvcmRlci1yYWRpdXM6NnB4OyBtYXJnaW4tYm90dG9tOjE2cHg7IH1cXG4gICAgLmJ0biB7IGRpc3BsYXk6aW5saW5lLWJsb2NrOyBwYWRkaW5nOjEycHggMThweDsgYm9yZGVyLXJhZGl1czo4cHg7IHRleHQtZGVjb3JhdGlvbjpub25lOyBmb250LXdlaWdodDo2MDA7IH1cXG4gICAgLmJ0bi1wcmltYXJ5IHsgYmFja2dyb3VuZDojMWY2ZmViOyBjb2xvcjojZmZmOyB9XFxuICAgIC5mb290ZXIgeyBmb250LXNpemU6MTJweDsgY29sb3I6IzlhYTBhYjsgcGFkZGluZzoxOHB4OyB0ZXh0LWFsaWduOmNlbnRlcjsgfVxcbiAgICBwcmUgeyB3aGl0ZS1zcGFjZTpwcmUtd3JhcDsgd29yZC13cmFwOmJyZWFrLXdvcmQ7IH1cXG4gIDwvc3R5bGU+XFxuPC9oZWFkPlxcbjxib2R5PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIiByb2xlPVxcXCJhcnRpY2xlXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICA8aDEgc3R5bGU9XFxcImZvbnQtc2l6ZToyMHB4O21hcmdpbjowXFxcIj5TSElUQUk8L2gxPlxcbiAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46NnB4IDAgMCAwO2ZvbnQtc2l6ZToxM3B4O29wYWNpdHk6MC45NVxcXCI+XFx1MzBCM1xcdTMwRTFcXHUzMEYzXFx1MzBDOFxcdTMwNENcXHU2Mjk1XFx1N0EzRlxcdTMwNTVcXHUzMDhDXFx1MzA3RVxcdTMwNTdcXHUzMDVGPC9wPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcInRpdGxlXFxcIj5cXHVEODNEXFx1RENBQyBcIi5jb25jYXQocG9zdFVzZXJOYW1lLCBcIiBcXHUzMDU1XFx1MzA5M1xcdTMwNENcXHUzMEIzXFx1MzBFMVxcdTMwRjNcXHUzMEM4XFx1MzA1N1xcdTMwN0VcXHUzMDU3XFx1MzA1RiBcXHUyMDE0IFwiKS5jb25jYXQodGl0bGUsIFwiPC9wPlxcbiAgICAgIDxwIGNsYXNzPVxcXCJtZXRhXFxcIj48c3BhbiBjbGFzcz1cXFwia3ZcXFwiPlxcdTMwQjBcXHUzMEVCXFx1MzBGQ1xcdTMwRDdcXHVGRjFBPC9zcGFuPiBcIikuY29uY2F0KGdyb3VwUm93c1swXVtcImdyb3VwTmFtZVwiXSwgXCIgPC9wPlxcblxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgPHAgc3R5bGU9XFxcIm1hcmdpbjowIDAgOHB4IDA7XFxcIj48c3Ryb25nPlxcdTMwQjNcXHUzMEUxXFx1MzBGM1xcdTMwQzg8L3N0cm9uZz48L3A+XFxuICAgICAgICA8cHJlIHN0eWxlPVxcXCJtYXJnaW46MDtcXFwiPlwiKS5jb25jYXQodGV4dCwgXCI8L3ByZT5cXG4gICAgICA8L2Rpdj5cXG4gICAgICBcIikuY29uY2F0KHF1b3RlID8gXCI8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj48cCBzdHlsZT1cXFwibWFyZ2luOjAgMCA4cHggMDtcXFwiPjxzdHJvbmc+XFx1NUYxNVxcdTc1Mjg8L3N0cm9uZz48L3A+PHByZSBzdHlsZT1cXFwibWFyZ2luOjA7XFxcIj5cIi5jb25jYXQocXVvdGUsIFwiPC9wcmU+PC9kaXY+XCIpIDogXCJcIiwgXCJcXG5cXG4gICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjAgMCAxOHB4IDA7XFxcIj5cXHU4QTczXFx1N0QzMFxcdTMwNkZcXHU0RTBCXFx1MzA2RVxcdTMwRUFcXHUzMEYzXFx1MzBBRlxcdTMwNEJcXHUzMDg5XFx1NzhCQVxcdThBOERcXHUzMDU3XFx1MzA2NlxcdTMwNEZcXHUzMDYwXFx1MzA1NVxcdTMwNDRcXHUzMDAyPC9wPlxcblxcbiAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGhyZWY9XFxcIlwiKS5jb25jYXQocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZST05URU5EX1VSTCArIFwiL1wiICsgXCJ3aXNoXCIgKyBcIi9cIiArIHdpc2hJZCwgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiByZWw9XFxcIm5vb3BlbmVyXFxcIj5cXHUzMEIzXFx1MzBFMVxcdTMwRjNcXHUzMEM4XFx1MzA5MlxcdTc4QkFcXHU4QThEXFx1MzA1OVxcdTMwOEI8L2E+XFxuXFxuICAgICAgPGhyIHN0eWxlPVxcXCJib3JkZXI6bm9uZTtib3JkZXItdG9wOjFweCBzb2xpZCAjZWVmMmY3O21hcmdpbjoxOHB4IDA7XFxcIiAvPlxcbiAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46MDtmb250LXNpemU6MTNweDtjb2xvcjojNTU2MDcwO1xcXCI+XFx1NUZDNVxcdTg5ODFcXHUzMDY3XFx1MzA0MlxcdTMwOENcXHUzMDcwXFx1NjI5NVxcdTdBM0ZcXHU4MDA1XFx1MzA3OFxcdThGRDRcXHU0RkUxXFx1MzA4NFxcdTMwRUFcXHUzMEEyXFx1MzBBRlxcdTMwQjdcXHUzMEU3XFx1MzBGM1xcdTMwOTJcXHUzMDU3XFx1MzA2NlxcdTMwN0ZcXHUzMDY2XFx1MzA0RlxcdTMwNjBcXHUzMDU1XFx1MzA0NFxcdTMwMDI8L3A+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcdTMwNTNcXHUzMDZFXFx1MzBFMVxcdTMwRkNcXHUzMEVCXFx1MzA2RlxcdTgxRUFcXHU1MkQ1XFx1OTE0RFxcdTRGRTFcXHUzMDY3XFx1MzA1OVxcdTMwMDI8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvYm9keT5cXG48L2h0bWw+XFxuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodG8ubGVuZ3RoICE9IDApKSByZXR1cm4gWzMgLypicmVhayovLCAxMF07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnNlbmRFbWFpbCh0bywgXCJcXHUzMDEwU0hJVEFJXFx1MzAxMVxcdTMwQjNcXHUzMEUxXFx1MzBGM1xcdTMwQzhcXHUzMDRDXFx1NjI5NVxcdTdBM0ZcXHUzMDU1XFx1MzA4Q1xcdTMwN0VcXHUzMDU3XFx1MzA1RiBcXHUyMDE0IFwiLmNvbmNhdCh0aXRsZSwgXCJcXHVGRjA4XCIpLmNvbmNhdChwb3N0VXNlck5hbWUsIFwiXFx1RkYwOVwiKSwgaHRtbCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDEwO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xNyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlJPTExCQUNLXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfMTc7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS5nZXRHcm91cHMgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBqb2luR3JvdXBSb3dzLCBqb2luR3JvdXBSb3dzXzEsIGpvaW5Hcm91cFJvd3NfMV8xLCBncm91cCwgZ3JvdXBPYmosIGpvaW5NZW1iZXJSb3dzLCBlXzE4XzEsIGVfMTk7XG4gICAgICAgICAgICB2YXIgZV8xOCwgX2E7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzEsIDExLCAsIDEyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc2cuaWQsIHNnLlxcXCJncm91cE5hbWVcXFwiXFxuICAgICAgICBGUk9NIHB1YmxpYy5zaGl0YWlfZ3JvdXBfam9pbiBhcyBzZ2ogSU5ORVIgSk9JTiBzaGl0YWlfZ3JvdXAgYXMgc2cgT04gc2cuaWQgPSBzZ2ouXFxcImdyb3VwSWRcXFwiIFdIRVJFIHNnai5cXFwidXNlcklkXFxcIiA9ICQxIE9SREVSIEJZIHNnLmlkIEFTQztcIiwgW2lkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luR3JvdXBSb3dzID0gKF9iLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqb2luR3JvdXBSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLlj4LliqDjgrDjg6vjg7zjg5fjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAzO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzMsIDgsIDksIDEwXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luR3JvdXBSb3dzXzEgPSBfX3ZhbHVlcyhqb2luR3JvdXBSb3dzKSwgam9pbkdyb3VwUm93c18xXzEgPSBqb2luR3JvdXBSb3dzXzEubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA0O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFqb2luR3JvdXBSb3dzXzFfMS5kb25lKSByZXR1cm4gWzMgLypicmVhayovLCA3XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwID0gam9pbkdyb3VwUm93c18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cE9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZ3JvdXBbXCJpZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBncm91cFtcImdyb3VwTmFtZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW1iZXJzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1QgRElTVElOQ1Qgc3VpLmlkLCBzdWkudXNlcl9uYW1lLCBzdWkudXNlcl9pZFxcbiAgICAgICAgRlJPTSBwdWJsaWMuc2hpdGFpX2dyb3VwX2pvaW4gYXMgc2dqIElOTkVSIEpPSU4gc2hpdGFpX3VzZXJfaW5mbyBhcyBzdWkgT04gc3VpLmlkID0gc2dqLlxcXCJ1c2VySWRcXFwiIFdIRVJFIHNnai5cXFwiZ3JvdXBJZFxcXCIgPSAkMTtcIiwgW2dyb3VwW1wiaWRcIl1dKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5NZW1iZXJSb3dzID0gKF9iLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqb2luTWVtYmVyUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44Oh44Oz44OQ44O85oOF5aCx44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwT2JqLm1lbWJlcnMgPSBqb2luTWVtYmVyUm93cy5tYXAoZnVuY3Rpb24gKG1lbWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtZW1iZXJbXCJpZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbWVtYmVyW1widXNlcl9uYW1lXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDogbWVtYmVyW1widXNlcl9pZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5wdXNoKGdyb3VwT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgam9pbkdyb3VwUm93c18xXzEgPSBqb2luR3JvdXBSb3dzXzEubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzogcmV0dXJuIFszIC8qYnJlYWsqLywgMTBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzE4XzEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzE4ID0geyBlcnJvcjogZV8xOF8xIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxMF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpvaW5Hcm91cFJvd3NfMV8xICYmICFqb2luR3JvdXBSb3dzXzFfMS5kb25lICYmIChfYSA9IGpvaW5Hcm91cFJvd3NfMS5yZXR1cm4pKSBfYS5jYWxsKGpvaW5Hcm91cFJvd3NfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMTgpIHRocm93IGVfMTguZXJyb3I7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6IHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzE5ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZV8xOTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5lb25BcGkucHJvdG90eXBlLmluc2VydEdyb3VwID0gZnVuY3Rpb24gKGlkLCBncm91cCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGluc2VydFJvd3MsIGluc2VydEpvaW5Sb3dzLCBlXzIwO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB7IGlkOiBcIlwiIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJCRUdJTlwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsyLCA2LCAsIDhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIklOU0VSVCBJTlRPIHNoaXRhaV9ncm91cCAoXFxcImdyb3VwTmFtZVxcXCIpXFxuICAgICAgICAgIFZBTFVFUygkMSkgUkVUVVJOSU5HIGlkO1wiLCBbZ3JvdXAubmFtZV0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0Um93cyA9IChfYS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0Um93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44Kw44Or44O844OX55m76Yyy44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIklOU0VSVCBJTlRPIHNoaXRhaV9ncm91cF9qb2luIChcXFwiZ3JvdXBJZFxcXCIsIFxcXCJ1c2VySWRcXFwiKVxcbiAgICAgICAgICBWQUxVRVMoJDEsICQyKSBSRVRVUk5JTkcgaWQ7XCIsIFtpbnNlcnRSb3dzWzBdW1wiaWRcIl0sIGlkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRKb2luUm93cyA9IChfYS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0Sm9pblJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOCsOODq+ODvOODl+WPguWKoOeZu+mMsuOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJDT01NSVRcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5pZCA9IGluc2VydFJvd3NbMF1bXCJpZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDhdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzIwID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiUk9MTEJBQ0tcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzIwO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6IHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUuaW52aXRhdGlvbkdyb3VwID0gZnVuY3Rpb24gKGlkXzEsIF9hKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uIChpZCwgX2IpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgZ3JvdXBSb3dzLCB1c2VyUm93cywgbmV3R3JvdXBSb3dzLCBpbnNlcnRSb3dzLCBlXzIxO1xuICAgICAgICAgICAgdmFyIGludml0YXRpb25Vc2VySWQgPSBfYi5pbnZpdGF0aW9uVXNlcklkLCBncm91cElkID0gX2IuZ3JvdXBJZDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJzdWNjZXNzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJCRUdJTlwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2MudHJ5cy5wdXNoKFsyLCA4LCAsIDEwXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc2pnLmlkIEZST00gcHVibGljLnNoaXRhaV9ncm91cF9qb2luIGFzIHNqZyBXSEVSRSBzamcuXFxcImdyb3VwSWRcXFwiID0gJDIgQU5EIHNqZy5cXFwidXNlcklkXFxcIiA9ICQxO1wiLCBbaWQsIGdyb3VwSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwUm93cyA9IChfYy5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLmqKnpmZDjgYzjgYLjgorjgb7jgZvjgpPjgILjgrDjg6vjg7zjg5flpJbjga7jg6bjg7zjgrbjg7zjgafjgZnjgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIGlkIEZST00gc2hpdGFpX3VzZXJfaW5mbyBXSEVSRSB1c2VyX2lkID0gJDFcIiwgW2ludml0YXRpb25Vc2VySWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJSb3dzID0gKF9jLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44Om44O844K244O85oOF5aCx5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBpZCBGUk9NIHNoaXRhaV9ncm91cF9qb2luIFdIRVJFIFxcXCJ1c2VySWRcXFwiID0gJDEgQU5EIFxcXCJncm91cElkXFxcIiA9ICQyXCIsIFt1c2VyUm93c1swXVtcImlkXCJdLCBncm91cElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdHcm91cFJvd3MgPSAoX2Muc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0dyb3VwUm93cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44GZ44Gn44Gr5Y+C5Yqg44GX44Gm44GE44KL44Kw44Or44O844OX44Gn44GZ44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIklOU0VSVCBJTlRPIHNoaXRhaV9ncm91cF9qb2luIChcXFwiZ3JvdXBJZFxcXCIsIFxcXCJ1c2VySWRcXFwiKSBWQUxVRVMgKCQxLCAkMikgUkVUVVJOSU5HIGlkO1wiLCBbZ3JvdXBJZCwgdXNlclJvd3NbMF1bXCJpZFwiXV0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0Um93cyA9IChfYy5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0Um93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44Kw44Or44O844OX44K444On44Kk44Oz55m76Yyy44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkNPTU1JVFwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8yMSA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlJPTExCQUNLXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZV8yMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS5qb2luV2lzaCA9IGZ1bmN0aW9uIChpZF8xLCBfYSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiAoaWQsIF9iKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGdyb3VwUm93cywgd2lzaFJvd3MsIGpvaW5XaXNoUm93cywgdXNlclJvd3MsIGdyb3VwTmFtZSwgam9pblVzZXJSb3dzLCBjcmVhdG9yVXNlclJvd3MsIGNyZWF0b3JOYW1lLCBjcmVhdG9yTWFpbCwgdGl0bGUsIGpvaW5Vc2VyTmFtZSwgam9pblVzZXJNYWlsXzIsIHRvLCBodG1sLCBlXzIyO1xuICAgICAgICAgICAgdmFyIHdpc2hJZCA9IF9iLndpc2hJZDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJzdWNjZXNzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJCRUdJTlwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2MudHJ5cy5wdXNoKFsyLCAxMiwgLCAxNF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHNnLmlkLCBzZy5cXFwiZ3JvdXBOYW1lXFxcIiBGUk9NIHB1YmxpYy5zaGl0YWlfd2lzaCBhcyBzdyBJTk5FUiBKT0lOIHB1YmxpYy5zaGl0YWlfZ3JvdXAgYXMgc2cgT04gc3cuXFxcImdyb3VwSWRcXFwiID0gc2cuaWQgSU5ORVIgSk9JTiBwdWJsaWMuc2hpdGFpX2dyb3VwX2pvaW4gYXMgc2pnIE9OIHNqZy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBBTkQgc2pnLlxcXCJ1c2VySWRcXFwiID0gJDEgV0hFUkUgc3cuaWQgPSAkMjtcIiwgW2lkLCB3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwUm93cyA9IChfYy5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLmqKnpmZDjgYzjgYLjgorjgb7jgZvjgpPjgILjgrDjg6vjg7zjg5flpJbjga7jg6bjg7zjgrbjg7zjgafjgZnjgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIGlkIEZST00gc2hpdGFpX2pvaW4gV0hFUkUgXFxcInVzZXJJZFxcXCIgPSAkMSBBTkQgXFxcIndpc2hJZFxcXCIgPSAkMjtcIiwgW2lkLCB3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpc2hSb3dzID0gKF9jLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aXNoUm93cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44GZ44Gn44Gr44GX44Gf44GE44GT44Go44Gr5Y+C5Yqg5riI44G/44Gn44GZ44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIklOU0VSVCBJTlRPIHNoaXRhaV9qb2luIChcXFwidXNlcklkXFxcIiwgXFxcImpvaW5lZEF0XFxcIiwgXFxcIndpc2hJZFxcXCIpIFZBTFVFUyAoJDEsIE5PVygpLCAkMikgUkVUVVJOSU5HIGlkXCIsIFtpZCwgd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luV2lzaFJvd3MgPSAoX2Muc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpvaW5XaXNoUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44GX44Gf44GE44GT44Go5Y+C5Yqg55m76Yyy44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzdWkudXNlcl9pZCBBcyBtYWlsXFxuICAgICAgICBGUk9NIHNoaXRhaV9qb2luIGFzIHNqIElOTkVSIEpPSU4gc2hpdGFpX3VzZXJfaW5mbyBhcyBzdWkgT04gc3VpLmlkID0gc2ouXFxcInVzZXJJZFxcXCIgV0hFUkUgc2ouXFxcIndpc2hJZFxcXCIgPSAkMTtcIiwgW3dpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclJvd3MgPSAoX2Muc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLml6LlrZjlj4LliqDogIXmg4XloLHjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBOYW1lID0gZ3JvdXBSb3dzWzBdW1wiZ3JvdXBOYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHN1aS51c2VyX25hbWUgQXMgbmFtZSwgc3VpLnVzZXJfaWQgQXMgbWFpbFxcbiAgICAgICAgRlJPTSBzaGl0YWlfdXNlcl9pbmZvIGFzIHN1aSBXSEVSRSBzdWkuXFxcImlkXFxcIiA9ICQxO1wiLCBbaWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5Vc2VyUm93cyA9IChfYy5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlclJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuWPguWKoOiAheaDheWgseOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc3VpLnVzZXJfbmFtZSBBcyBuYW1lLCBzdWkudXNlcl9pZCBBcyBtYWlsLCBzdy50aXRsZVxcbiAgICAgICAgRlJPTSBzaGl0YWlfd2lzaCBhcyBzdyBJTk5FUiBKT0lOIHNoaXRhaV91c2VyX2luZm8gYXMgc3VpIE9OIHN3LlxcXCJjcmVhdG9ySWRcXFwiID0gc3VpLlxcXCJpZFxcXCIgV0hFUkUgc3cuaWQgPSAkMTtcIiwgW3dpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvclVzZXJSb3dzID0gKF9jLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjcmVhdG9yVXNlclJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuS9nOaIkOiAheaDheWgseOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9yTmFtZSA9IGNyZWF0b3JVc2VyUm93c1swXVtcIm5hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9yTWFpbCA9IGNyZWF0b3JVc2VyUm93c1swXVtcIm1haWxcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IGNyZWF0b3JVc2VyUm93c1swXVtcInRpdGxlXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclJvd3MucHVzaCh7IG1haWw6IGNyZWF0b3JNYWlsIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgam9pblVzZXJOYW1lID0gam9pblVzZXJSb3dzWzBdW1wibmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5Vc2VyTWFpbF8yID0gam9pblVzZXJSb3dzWzBdW1wibWFpbFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvID0gdXNlclJvd3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChyb3cpIHsgcmV0dXJuIHJvd1tcIm1haWxcIl07IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAobWFpbCkgeyByZXR1cm4gbWFpbCAhPSBqb2luVXNlck1haWxfMjsgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sID0gXCJcXG48IWRvY3R5cGUgaHRtbD5cXG48aHRtbCBsYW5nPVxcXCJqYVxcXCI+XFxuPGhlYWQ+XFxuICA8bWV0YSBjaGFyc2V0PVxcXCJ1dGYtOFxcXCIgLz5cXG4gIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXFxcIiAvPlxcbiAgPHRpdGxlPlxcdTY1QjBcXHUzMDVGXFx1MzA2QVxcdTUzQzJcXHU1MkEwXFx1ODAwNVxcdTMwRTZcXHUzMEZDXFx1MzBCNlxcdTMwRkNcXHUzMDZFXFx1OTAxQVxcdTc3RTU8L3RpdGxlPlxcbiAgPHN0eWxlPlxcbiAgICBib2R5IHsgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIkhpcmFnaW5vIEtha3UgR290aGljIFByb05cXFwiLCBcXFwiWXUgR290aGljXFxcIiwgXFxcIk5vdG8gU2FucyBKUFxcXCIsIEFyaWFsLCBzYW5zLXNlcmlmOyBtYXJnaW46MDsgcGFkZGluZzowOyBiYWNrZ3JvdW5kOiNmNmY4ZmI7IGNvbG9yOiMxMTE7IH1cXG4gICAgLmNvbnRhaW5lciB7IG1heC13aWR0aDo2MDBweDsgbWFyZ2luOjI4cHggYXV0bzsgYmFja2dyb3VuZDojZmZmOyBib3JkZXItcmFkaXVzOjhweDsgb3ZlcmZsb3c6aGlkZGVuOyBib3gtc2hhZG93OjAgNnB4IDI0cHggcmdiYSgyMCwzMCw2MCwwLjA4KTsgfVxcbiAgICAuaGVhZGVyIHsgcGFkZGluZzoyMHB4OyBiYWNrZ3JvdW5kOiM3YzNhZWQ7IGNvbG9yOiNmZmY7IH1cXG4gICAgLmNvbnRlbnQgeyBwYWRkaW5nOjIwcHg7IH1cXG4gICAgLnRpdGxlIHsgZm9udC1zaXplOjE4cHg7IG1hcmdpbjowIDAgOHB4IDA7IH1cXG4gICAgLm1ldGEgeyBmb250LXNpemU6MTNweDsgY29sb3I6IzZiNzI4MDsgbWFyZ2luLWJvdHRvbToxMnB4OyB9XFxuICAgIC5mb3JtIHsgYmFja2dyb3VuZDojZjdmOWZjOyBwYWRkaW5nOjE0cHg7IGJvcmRlci1yYWRpdXM6NnB4OyBtYXJnaW4tYm90dG9tOjE2cHg7IH1cXG4gICAgLmJ0biB7IGRpc3BsYXk6aW5saW5lLWJsb2NrOyBwYWRkaW5nOjEycHggMThweDsgYm9yZGVyLXJhZGl1czo4cHg7IHRleHQtZGVjb3JhdGlvbjpub25lOyBmb250LXdlaWdodDo2MDA7IH1cXG4gICAgLmJ0bi1wcmltYXJ5IHsgYmFja2dyb3VuZDojN2MzYWVkOyBjb2xvcjojZmZmOyB9XFxuICAgIC5mb290ZXIgeyBmb250LXNpemU6MTJweDsgY29sb3I6IzlhYTBhYjsgcGFkZGluZzoxOHB4OyB0ZXh0LWFsaWduOmNlbnRlcjsgfVxcbiAgICB0YWJsZSB7IHdpZHRoOjEwMCU7IGJvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTsgfVxcbiAgICB0ZCB7IHBhZGRpbmc6OHB4IDA7IHZlcnRpY2FsLWFsaWduOnRvcDsgfVxcbiAgICAua2V5IHsgZm9udC13ZWlnaHQ6NzAwOyBjb2xvcjojMTExOyB3aWR0aDozNiU7IH1cXG4gICAgLnZhbCB7IGNvbG9yOiMyMjI7IH1cXG4gIDwvc3R5bGU+XFxuPC9oZWFkPlxcbjxib2R5PlxcbiAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIiByb2xlPVxcXCJhcnRpY2xlXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICA8aDEgc3R5bGU9XFxcImZvbnQtc2l6ZToyMHB4O21hcmdpbjowXFxcIj5TSElUQUk8L2gxPlxcbiAgICAgIDxwIHN0eWxlPVxcXCJtYXJnaW46NnB4IDAgMCAwO2ZvbnQtc2l6ZToxM3B4O29wYWNpdHk6MC45NVxcXCI+XFx1MzBFNlxcdTMwRkNcXHUzMEI2XFx1MzBGQ1xcdTMwNENcXHU1M0MyXFx1NTJBMFxcdTMwNTdcXHUzMDdFXFx1MzA1N1xcdTMwNUZcXHUzMDAyPC9wPlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGVudFxcXCI+XFxuICAgICAgPHAgY2xhc3M9XFxcInRpdGxlXFxcIj5cXHVEODNEXFx1REM2NSBcIi5jb25jYXQoam9pblVzZXJOYW1lLCBcIiBcXHUzMDU1XFx1MzA5M1xcdTMwNENcXHU1M0MyXFx1NTJBMFxcdTMwNTdcXHUzMDdFXFx1MzA1N1xcdTMwNUYgXFx1MjAxNCBcIikuY29uY2F0KHRpdGxlLCBcIjwvcD5cXG4gICAgICA8cCBjbGFzcz1cXFwibWV0YVxcXCI+PHNwYW4gc3R5bGU9XFxcImZvbnQtd2VpZ2h0OjcwMFxcXCI+XFx1MzBCMFxcdTMwRUJcXHUzMEZDXFx1MzBEN1xcdUZGMUE8L3NwYW4+IFwiKS5jb25jYXQoZ3JvdXBOYW1lLCBcIiA8L3A+XFxuXFxuICAgICAgPHAgc3R5bGU9XFxcIm1hcmdpbjowIDAgMThweCAwO1xcXCI+XFx1NTNDMlxcdTUyQTBcXHU4MDA1XFx1NjBDNVxcdTU4MzFcXHUzMDZFXFx1NjcwMFxcdTY1QjBcXHU3MkI2XFx1NkNDMVxcdTMwNkZcXHU0RTBCXFx1MzA2RVxcdTMwRUFcXHUzMEYzXFx1MzBBRlxcdTMwNjdcXHU3OEJBXFx1OEE4RFxcdTMwNjdcXHUzMDREXFx1MzA3RVxcdTMwNTlcXHUzMDAyPC9wPlxcbiAgICAgIDxhIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGhyZWY9XFxcIlwiKS5jb25jYXQocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZST05URU5EX1VSTCArIFwiL1wiICsgXCJ3aXNoXCIgKyBcIi9cIiArIHdpc2hJZCwgXCJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiByZWw9XFxcIm5vb3BlbmVyXFxcIj5cXHU1M0MyXFx1NTJBMFxcdTgwMDVcXHU2MEM1XFx1NTgzMVxcdTMwOTJcXHU3OEJBXFx1OEE4RFxcdTMwNTlcXHUzMDhCPC9hPlxcblxcbiAgICAgIDxociBzdHlsZT1cXFwiYm9yZGVyOm5vbmU7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VlZjJmNzttYXJnaW46MThweCAwO1xcXCIgLz5cXG4gICAgICA8cCBzdHlsZT1cXFwibWFyZ2luOjA7Zm9udC1zaXplOjEzcHg7Y29sb3I6IzU1NjA3MDtcXFwiPlxcbiAgICAgICAgXFx1NUZDNVxcdTg5ODFcXHUzMDY3XFx1MzA0MlxcdTMwOENcXHUzMDcwXFx1NEUzQlxcdTUwQUNcXHU4MDA1XFx1MzA4NFxcdTRFRDZcXHUzMDZFXFx1NTNDMlxcdTUyQTBcXHU4MDA1XFx1MzA3OFxcdTkwMjNcXHU3RDYxXFx1MzA5MlxcdTUzRDZcXHUzMDhBXFx1MzA3RVxcdTMwNTdcXHUzMDg3XFx1MzA0NlxcdTMwMDJcXG4gICAgICA8L3A+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb290ZXJcXFwiPlxcbiAgICAgIFxcdTMwNTNcXHUzMDZFXFx1MzBFMVxcdTMwRkNcXHUzMEVCXFx1MzA2RlxcdTgxRUFcXHU1MkQ1XFx1OTE0RFxcdTRGRTFcXHUzMDY3XFx1MzA1OVxcdTMwMDJcXG4gICAgPC9kaXY+XFxuICA8L2Rpdj5cXG48L2JvZHk+XFxuPC9odG1sPlxcblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHRvLmxlbmd0aCAhPSAwKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMTBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5zZW5kRW1haWwodG8sIFwiXFx1MzAxMFNISVRBSVxcdTMwMTFcXHUzMEU2XFx1MzBGQ1xcdTMwQjZcXHUzMEZDXFx1MzA0Q1xcdTUzQzJcXHU1MkEwXFx1MzA1N1xcdTMwN0VcXHUzMDU3XFx1MzA1RiBcXHUyMDE0IFwiLmNvbmNhdCh0aXRsZSwgXCJcXHVGRjA4XCIpLmNvbmNhdChqb2luVXNlck5hbWUsIFwiXFx1RkYwOVwiKSwgaHRtbCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDEwO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJDT01NSVRcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8yMiA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlJPTExCQUNLXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfMjI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTQ6IHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIE5lb25BcGk7XG59KCkpO1xuZXhwb3J0IHsgTmVvbkFwaSB9O1xuIiwiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuaW1wb3J0IHV0YyBmcm9tIFwiZGF5anMvcGx1Z2luL3V0Y1wiO1xuaW1wb3J0IHRpbWV6b25lIGZyb20gXCJkYXlqcy9wbHVnaW4vdGltZXpvbmVcIjtcbmRheWpzLmV4dGVuZCh1dGMpO1xuZGF5anMuZXh0ZW5kKHRpbWV6b25lKTtcbmRheWpzLnR6LnNldERlZmF1bHQoXCJBc2lhL1Rva3lvXCIpO1xuZXhwb3J0IHZhciBmb3JtYXREYXRlID0gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkgeyBmb3JtYXQgPSBcIllZWVkvTU0vRERcIjsgfVxuICAgIHJldHVybiBkYXlqcyhkYXRlKS51dGMoKS5mb3JtYXQoZm9ybWF0KTtcbn07XG5leHBvcnQgdmFyIGZvcm1hdERpc3BsYXlEYXRlID0gZnVuY3Rpb24gKGRhdGUsIGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkgeyBmb3JtYXQgPSBcIllZWVkvTU0vREQgSEg6bW1cIjsgfVxuICAgIHJldHVybiBkYXlqcyhkYXRlKS51dGMoKS5mb3JtYXQoZm9ybWF0KTtcbn07XG5leHBvcnQgdmFyIGZvcm1hdERhdGVUaW1lID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF5anMoZGF0ZSkudXRjKCkuZm9ybWF0KFwiWVlZWS1NTS1ERFRISDptbVwiKTtcbn07XG5leHBvcnQgdmFyIGdldFRpbWVSZW1haW5pbmcgPSBmdW5jdGlvbiAoZGVhZGxpbmUpIHtcbiAgICB2YXIgbm93ID0gZGF5anMoKTtcbiAgICB2YXIgdGFyZ2V0ID0gZGF5anMoZGVhZGxpbmUpO1xuICAgIHZhciBkaWZmID0gdGFyZ2V0LmRpZmYobm93KTtcbiAgICBpZiAoZGlmZiA8IDApIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRheXM6IDAsXG4gICAgICAgICAgICBob3VyczogMCxcbiAgICAgICAgICAgIG1pbnV0ZXM6IDAsXG4gICAgICAgICAgICBzZWNvbmRzOiAwLFxuICAgICAgICAgICAgZXhwaXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIHRleHQ6IFwi5pyf6ZmQ5YiH44KMXCIsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcihkaWZmIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKChkaWZmICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlmZiAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlmZiAlICgxMDAwICogNjApKSAvIDEwMDApO1xuICAgIHZhciB0ZXh0ID0gXCJcIjtcbiAgICBpZiAoZGF5cyA+IDApIHtcbiAgICAgICAgdGV4dCA9IFwiXFx1NkI4QlxcdTMwOEEgXCIuY29uY2F0KGRheXMsIFwiXFx1NjVFNSBcIikuY29uY2F0KGhvdXJzLCBcIlxcdTY2NDJcXHU5NTkzXCIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChob3VycyA+IDApIHtcbiAgICAgICAgdGV4dCA9IFwiXFx1NkI4QlxcdTMwOEEgXCIuY29uY2F0KGhvdXJzLCBcIlxcdTY2NDJcXHU5NTkzIFwiKS5jb25jYXQobWludXRlcywgXCJcXHU1MjA2XCIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtaW51dGVzID4gMCkge1xuICAgICAgICB0ZXh0ID0gXCJcXHU2QjhCXFx1MzA4QSBcIi5jb25jYXQobWludXRlcywgXCJcXHU1MjA2XCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGV4dCA9IFwiXFx1NkI4QlxcdTMwOEEgXCIuY29uY2F0KHNlY29uZHMsIFwiXFx1NzlEMlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGF5czogZGF5cyxcbiAgICAgICAgaG91cnM6IGhvdXJzLFxuICAgICAgICBtaW51dGVzOiBtaW51dGVzLFxuICAgICAgICBzZWNvbmRzOiBzZWNvbmRzLFxuICAgICAgICBleHBpcmVkOiBmYWxzZSxcbiAgICAgICAgdGV4dDogdGV4dCxcbiAgICB9O1xufTtcbmV4cG9ydCB2YXIgaXNEYXRlSW5QYXN0ID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF5anMoZGF0ZSkudHooKS5pc0JlZm9yZShkYXlqcygpKTtcbn07XG5leHBvcnQgdmFyIGFkZERheXMgPSBmdW5jdGlvbiAoZGF0ZSwgZGF5cykge1xuICAgIHJldHVybiBkYXlqcyhkYXRlKS50eigpLmFkZChkYXlzLCBcImRheVwiKS50b0lTT1N0cmluZygpO1xufTtcbmV4cG9ydCB2YXIgYWRkSG91cnMgPSBmdW5jdGlvbiAoZGF0ZSwgaG91cnMpIHtcbiAgICByZXR1cm4gZGF5anMoZGF0ZSkudHooKS5hZGQoaG91cnMsIFwiaG91clwiKS50b0lTT1N0cmluZygpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBnb29nbGUtY2xvdWQvc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXlqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXlqcy9wbHVnaW4vdGltZXpvbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF5anMvcGx1Z2luL3V0Y1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVzZW5kXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGcgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2YgSXRlcmF0b3IgPT09IFwiZnVuY3Rpb25cIiA/IEl0ZXJhdG9yIDogT2JqZWN0KS5wcm90b3R5cGUpO1xuICAgIHJldHVybiBnLm5leHQgPSB2ZXJiKDApLCBnW1widGhyb3dcIl0gPSB2ZXJiKDEpLCBnW1wicmV0dXJuXCJdID0gdmVyYigyKSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiO1xuaW1wb3J0IHsgTmVvbkFwaSB9IGZyb20gXCIuL05lb25BcGlcIjtcbnJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7XG52YXIgYXBwID0gZXhwcmVzcygpO1xudmFyIG5lb25BcGkgPSBuZXcgTmVvbkFwaSgpO1xuLy8gQ09SU+OBruioreWumlxudmFyIGNvcnNPcHRpb25zID0ge1xuICAgIG9yaWdpbjogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZST05URU5EX1VSTCwgLy8g44OV44Ot44Oz44OI44Ko44Oz44OJ44GuVVJM44KS55Kw5aKD5aSJ5pWw44GL44KJ5Y+W5b6XXG4gICAgbWV0aG9kOiBbXSxcbn07XG4vLyDjgqLjgq/jgrvjgrnjg4jjg7zjgq/jg7Poqo3oqLwo44Op44OD44OR44O86Zai5pWwKVxudmFyIGluaXRBY2Nlc3NUb2tlbkF1dGggPSBmdW5jdGlvbiAodXNlckluZm8pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCwgaXNFeHBpcmVkLCBpc1N1Y2Nlc3M7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIG5lb25BcGkuYWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgaXNFeHBpcmVkID0gdHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIiAmJiByZXN1bHQgPT09IFwiZXhwaXJlZCBhY2Nlc3MgdG9rZW5cIjtcbiAgICAgICAgICAgICAgICBpc1N1Y2Nlc3MgPSB0eXBlb2YgcmVzdWx0ICE9PSBcInN0cmluZ1wiICYmIE51bWJlcihyZXN1bHQuaWQpID4gMCAmJiAhaXNFeHBpcmVkO1xuICAgICAgICAgICAgICAgIGlmIChpc0V4cGlyZWQpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IHsgbWVzc2FnZTogXCLjgqLjgq/jgrvjgrnjg4jjg7zjgq/jg7PjgYzmnInlirnmnJ/pmZDliIfjgozjgafjgZnjgIJcIiB9O1xuICAgICAgICAgICAgICAgIGlmICghaXNTdWNjZXNzKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6IFwi44Ki44Kv44K744K544OI44O844Kv44Oz44Gu6KqN6Ki844Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzdWx0XTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG4vLyBDT1JT6Kit5a6a44GoSlNPTuODkeODvOOCteODvOOCkuODn+ODieODq+OCpuOCp+OCouOBqOOBl+OBpumBqeeUqFxuYXBwLnVzZShjb3JzKGNvcnNPcHRpb25zKSk7XG5hcHAudXNlKGV4cHJlc3MuanNvbih7IGxpbWl0OiBcIjEwbWJcIiB9KSk7XG4vLyDjg63jgrDjgqTjg7Poqo3oqLzjgpLooYzjgYYo5oiQ5Yqf5pmC44Ki44Kv44K744K544OI44O844Kv44Oz44KS6L+U5Y2044GZ44KLKVxuYXBwLnBvc3QoXCIvYXBpL3YxL2F1dGgvbG9naW5cIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQsIGVycm9yXzE7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLmxvZ2luQXV0aChyZXEuYm9keSldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfMS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmFwcC5wb3N0KFwiL2FwaS92MS9hdXRoL2FjY2Vzc1Rva2VuXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdXNlckluZm8sIF9hLCBpZCwgbmFtZV8xLCBlbWFpbCwgZXJyb3JfMjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgIHVzZXJJbmZvID0gcmVxLmJvZHkudXNlckluZm87XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW5pdEFjY2Vzc1Rva2VuQXV0aCh1c2VySW5mbyldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hID0gX2Iuc2VudCgpLCBpZCA9IF9hLmlkLCBuYW1lXzEgPSBfYS5uYW1lLCBlbWFpbCA9IF9hLmVtYWlsO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHsgaWQ6IE51bWJlcihpZCksIG5hbWU6IG5hbWVfMSwgZW1haWw6IGVtYWlsIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGVycm9yXzIgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfMi5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmFwcC5wb3N0KFwiL2FwaS92MS9hdXRoL3JlZnJlc2hUb2tlblwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVzZXJJbmZvLCByZXNwb25zZV8xLCBlcnJvcl8zO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgdXNlckluZm8gPSByZXEuYm9keS51c2VySW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLnJlZnJlc2hUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXNwb25zZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZV8xICE9PSBcImVycm9yXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBfX2Fzc2lnbih7fSwgcmVzcG9uc2VfMSksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBlcnJvcl8zID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzMubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvcG9zdC9pbnNlcnRVc2VySW5mb1wiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVwZGF0ZU9iaiwgcmVzdWx0LCBlcnJvcl80O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlT2JqID0gcmVxLmJvZHk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5pbnNlcnRVc2VySW5mbyh1cGRhdGVPYmopXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBlcnJvcl80ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzQubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvcG9zdC9pbnNlcnRXaXNoXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIHVzZXJJbmZvLCBsZWZ0LCB1c2VySWQsIHJlc3VsdCwgZXJyb3JfNTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIF9hID0gcmVxLmJvZHksIHVzZXJJbmZvID0gX2EudXNlckluZm8sIGxlZnQgPSBfX3Jlc3QoX2EsIFtcInVzZXJJbmZvXCJdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9iLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5pbnNlcnRXaXNoKGxlZnQsIE51bWJlcih1c2VySWQpKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfNSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl81Lm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL2dldC93aXNoQnlJZFwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCB1c2VySW5mbywgaWQsIHVzZXJJZCwgcmVzdWx0LCBlcnJvcl82O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgX2EgPSByZXEuYm9keSwgdXNlckluZm8gPSBfYS51c2VySW5mbywgaWQgPSBfYS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9iLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5nZXRXaXNoQnlJZChOdW1iZXIoaWQpLCBOdW1iZXIodXNlcklkKSldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiB7IHdpc2g6IHJlc3VsdCB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlcnJvcl82ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzYubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvcG9zdC9pbnNlcnRBbnN3ZXJcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSwgdXNlckluZm8sIGlkLCBsZWZ0LCB1c2VySWQsIHJlc3VsdCwgZXJyb3JfNztcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIF9hID0gcmVxLmJvZHksIHVzZXJJbmZvID0gX2EudXNlckluZm8sIGlkID0gX2EuaWQsIGxlZnQgPSBfX3Jlc3QoX2EsIFtcInVzZXJJbmZvXCIsIFwiaWRcIl0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRBY2Nlc3NUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB1c2VySWQgPSAoX2Iuc2VudCgpKS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLmluc2VydEFuc3dlcihsZWZ0LCBOdW1iZXIodXNlcklkKSwgTnVtYmVyKGlkKSldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVycm9yXzcgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfNy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmFwcC5wb3N0KFwiL2FwaS92MS9wb3N0L3VwZGF0ZVdpc2hcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSwgdXNlckluZm8sIGxlZnQsIHVzZXJJZCwgcmVzdWx0LCBlcnJvcl84O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgX2EgPSByZXEuYm9keSwgdXNlckluZm8gPSBfYS51c2VySW5mbywgbGVmdCA9IF9fcmVzdChfYSwgW1widXNlckluZm9cIl0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRBY2Nlc3NUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB1c2VySWQgPSAoX2Iuc2VudCgpKS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLnVwZGF0ZVdpc2gobGVmdCwgTnVtYmVyKHVzZXJJZCkpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlcnJvcl84ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzgubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvZ2V0L3dpc2hlc1wiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCB1c2VySW5mbywgaWQsIHVzZXJJZCwgcmVzdWx0LCBlcnJvcl85O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgX2EgPSByZXEuYm9keSwgdXNlckluZm8gPSBfYS51c2VySW5mbywgaWQgPSBfYS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9iLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5nZXRXaXNoZXMoTnVtYmVyKGlkKSwgTnVtYmVyKHVzZXJJZCkpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogeyB3aXNoZXM6IHJlc3VsdCB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlcnJvcl85ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzkubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvZ2V0L2dyb3Vwc1wiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVzZXJJbmZvLCB1c2VySWQsIHJlc3VsdCwgZXJyb3JfMTA7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICB1c2VySW5mbyA9IHJlcS5ib2R5LnVzZXJJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRBY2Nlc3NUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB1c2VySWQgPSAoX2Euc2VudCgpKS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLmdldEdyb3VwcyhOdW1iZXIodXNlcklkKSldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiB7IGdyb3VwczogcmVzdWx0IH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVycm9yXzEwID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzEwLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL3Bvc3QvaW5zZXJ0R3JvdXBcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSwgdXNlckluZm8sIGxlZnQsIHVzZXJJZCwgcmVzdWx0LCBlcnJvcl8xMTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIF9hID0gcmVxLmJvZHksIHVzZXJJbmZvID0gX2EudXNlckluZm8sIGxlZnQgPSBfX3Jlc3QoX2EsIFtcInVzZXJJbmZvXCJdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9iLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5pbnNlcnRHcm91cChOdW1iZXIodXNlcklkKSwgbGVmdCldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVycm9yXzExID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzExLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL3Bvc3QvaW52aXRhdGlvbkdyb3VwXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIHVzZXJJbmZvLCBsZWZ0LCB1c2VySWQsIHJlc3VsdCwgZXJyb3JfMTI7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICBfYSA9IHJlcS5ib2R5LCB1c2VySW5mbyA9IF9hLnVzZXJJbmZvLCBsZWZ0ID0gX19yZXN0KF9hLCBbXCJ1c2VySW5mb1wiXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW5pdEFjY2Vzc1Rva2VuQXV0aCh1c2VySW5mbyldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHVzZXJJZCA9IChfYi5zZW50KCkpLmlkO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5lb25BcGkuaW52aXRhdGlvbkdyb3VwKE51bWJlcih1c2VySWQpLCBsZWZ0KV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfMTIgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfMTIubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvcG9zdC9qb2luV2lzaFwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCB1c2VySW5mbywgbGVmdCwgdXNlcklkLCByZXN1bHQsIGVycm9yXzEzO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgX2EgPSByZXEuYm9keSwgdXNlckluZm8gPSBfYS51c2VySW5mbywgbGVmdCA9IF9fcmVzdChfYSwgW1widXNlckluZm9cIl0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRBY2Nlc3NUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB1c2VySWQgPSAoX2Iuc2VudCgpKS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLmpvaW5XaXNoKE51bWJlcih1c2VySWQpLCBsZWZ0KV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfMTMgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfMTMubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvZ2V0L2NvbW1lbnRzXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIHVzZXJJbmZvLCB3aXNoSWQsIHVzZXJJZCwgcmVzdWx0LCBlcnJvcl8xNDtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIF9hID0gcmVxLmJvZHksIHVzZXJJbmZvID0gX2EudXNlckluZm8sIHdpc2hJZCA9IF9hLndpc2hJZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9iLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5nZXRDb21tZW50cyhOdW1iZXIod2lzaElkKSwgTnVtYmVyKHVzZXJJZCkpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiB7IGNvbW1lbnRzOiByZXN1bHQgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfMTQgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfMTQubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmFwcC5wb3N0KFwiL2FwaS92MS9wb3N0L2NvbW1lbnRcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSwgdXNlckluZm8sIGxlZnQsIHVzZXJJZCwgcmVzdWx0LCBlcnJvcl8xNTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIF9hID0gcmVxLmJvZHksIHVzZXJJbmZvID0gX2EudXNlckluZm8sIGxlZnQgPSBfX3Jlc3QoX2EsIFtcInVzZXJJbmZvXCJdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9iLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5wb3N0Q29tbWVudChsZWZ0LCBOdW1iZXIodXNlcklkKSldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHsgY29tbWVudDogcmVzdWx0IH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVycm9yXzE1ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzE1Lm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAubGlzdGVuKDQyMDAsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcInBvcnQgXCIuY29uY2F0KDQyMDAsIFwiIFxcdTMwNjdcXHUzMEI1XFx1MzBGQ1xcdTMwRDBcXHUzMEZDXFx1OEQ3N1xcdTUyRDVcXHU0RTJEXCIpKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9