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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);
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
                        return [4 /*yield*/, uploadBase64Image(imageData, (0,uuid__WEBPACK_IMPORTED_MODULE_2__.v4)())];
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
    NeonApi.prototype.insertWish = function (wish, id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, participationConfirmSchema, postConfirmSchema, leftWish, groupRows, imageData, insertWishRows, createInsertSchema, _a, _b, schema, insertRows, e_3_1, e_4;
            var e_3, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        response = { id: "" };
                        return [4 /*yield*/, this.pool.query("BEGIN")];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 15, , 17]);
                        participationConfirmSchema = wish.participationConfirmSchema, postConfirmSchema = wish.postConfirmSchema, leftWish = __rest(wish, ["participationConfirmSchema", "postConfirmSchema"]);
                        console.log(leftWish.groupId);
                        return [4 /*yield*/, this.pool.query("SELECT sg.id FROM public.shitai_group as sg INNER JOIN public.shitai_group_join as sjg ON sjg.\"groupId\" = sg.id AND sjg.\"userId\" = $1 WHERE sg.id = $2;", [id, leftWish.groupId])];
                    case 3:
                        groupRows = (_d.sent()).rows;
                        console.log(id);
                        if (groupRows.length !== 1) {
                            throw {
                                message: "権限がありません。グループ外のユーザーです。",
                            };
                        }
                        return [4 /*yield*/, this.uploadImageData(leftWish.imageData || "")];
                    case 4:
                        imageData = _d.sent();
                        return [4 /*yield*/, this.pool.query("INSERT INTO public.shitai_wish (".concat(this.columns.join(","), ") \n        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, NOW(), $14, $15, $16) RETURNING id;"), [
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
                            ])];
                    case 5:
                        insertWishRows = (_d.sent()).rows;
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
                        _d.label = 6;
                    case 6:
                        _d.trys.push([6, 11, 12, 13]);
                        _a = __values(__spreadArray(__spreadArray([], __read(createInsertSchema(participationConfirmSchema, "participation")), false), __read(createInsertSchema(postConfirmSchema, "post")), false)), _b = _a.next();
                        _d.label = 7;
                    case 7:
                        if (!!_b.done) return [3 /*break*/, 10];
                        schema = _b.value;
                        return [4 /*yield*/, this.pool.query("INSERT INTO \"public\".\"shitai_schema\" (\"wishId\", \"schemaType\", \"type\", \"required\", \"label\")\n          VALUES($1, $2, $3, $4, $5) RETURNING id;", [
                                insertWishRows[0]["id"],
                                schema.schemaType,
                                schema.type,
                                schema.required,
                                schema.label,
                            ])];
                    case 8:
                        insertRows = (_d.sent()).rows;
                        if (insertRows.length === 0) {
                            throw {
                                message: "確認項目の登録に失敗しました。",
                            };
                        }
                        _d.label = 9;
                    case 9:
                        _b = _a.next();
                        return [3 /*break*/, 7];
                    case 10: return [3 /*break*/, 13];
                    case 11:
                        e_3_1 = _d.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 13];
                    case 12:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 13:
                        response.id = insertWishRows[0]["id"];
                        return [4 /*yield*/, this.pool.query("COMMIT")];
                    case 14:
                        _d.sent();
                        return [3 /*break*/, 17];
                    case 15:
                        e_4 = _d.sent();
                        return [4 /*yield*/, this.pool.query("ROLLBACK")];
                    case 16:
                        _d.sent();
                        throw e_4;
                    case 17: return [2 /*return*/, response];
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
            var response, groupRows, _a, _b, key, _c, _d, schema, repKey, value, insertAnswerRows, e_9_1, e_10_1, e_11;
            var e_10, _e, e_9, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        response = "success";
                        return [4 /*yield*/, this.pool.query("BEGIN")];
                    case 1:
                        _g.sent();
                        _g.label = 2;
                    case 2:
                        _g.trys.push([2, 19, , 21]);
                        return [4 /*yield*/, this.pool.query("SELECT sg.id FROM public.shitai_wish as sw INNER JOIN public.shitai_group as sg ON sw.\"groupId\" = sg.id INNER JOIN public.shitai_group_join as sjg ON sjg.\"groupId\" = sg.id AND sjg.\"userId\" = $1 WHERE sw.id = $2;", [id, wishId])];
                    case 3:
                        groupRows = (_g.sent()).rows;
                        if (groupRows.length !== 1) {
                            throw {
                                message: "権限がありません。グループ外のユーザーです。",
                            };
                        }
                        _g.label = 4;
                    case 4:
                        _g.trys.push([4, 15, 16, 17]);
                        _a = __values(Object.keys(answer)), _b = _a.next();
                        _g.label = 5;
                    case 5:
                        if (!!_b.done) return [3 /*break*/, 14];
                        key = _b.value;
                        _g.label = 6;
                    case 6:
                        _g.trys.push([6, 11, 12, 13]);
                        _c = (e_9 = void 0, __values(Object.keys(answer[key]))), _d = _c.next();
                        _g.label = 7;
                    case 7:
                        if (!!_d.done) return [3 /*break*/, 10];
                        schema = _d.value;
                        repKey = key.replace("Answers", "");
                        value = answer[key][schema];
                        if (!value || value == "")
                            return [3 /*break*/, 9];
                        return [4 /*yield*/, this.pool.query("INSERT INTO public.shitai_answer (\"userId\", \"schemaId\", \"value\") SELECT $1, ss.id, $2 FROM public.shitai_schema as ss WHERE ss.\"schemaType\" = $3 AND ss.\"type\" = $4 AND ss.\"wishId\" = $5 LIMIT 1 RETURNING id", [id, value, repKey, schema, wishId])];
                    case 8:
                        insertAnswerRows = (_g.sent()).rows;
                        if (insertAnswerRows.length !== 1) {
                            throw {
                                message: "アンサーの登録に失敗しました。",
                            };
                        }
                        _g.label = 9;
                    case 9:
                        _d = _c.next();
                        return [3 /*break*/, 7];
                    case 10: return [3 /*break*/, 13];
                    case 11:
                        e_9_1 = _g.sent();
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
                        e_10_1 = _g.sent();
                        e_10 = { error: e_10_1 };
                        return [3 /*break*/, 17];
                    case 16:
                        try {
                            if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                        }
                        finally { if (e_10) throw e_10.error; }
                        return [7 /*endfinally*/];
                    case 17: return [4 /*yield*/, this.pool.query("COMMIT")];
                    case 18:
                        _g.sent();
                        return [3 /*break*/, 21];
                    case 19:
                        e_11 = _g.sent();
                        return [4 /*yield*/, this.pool.query("ROLLBACK")];
                    case 20:
                        _g.sent();
                        throw e_11;
                    case 21: return [2 /*return*/, response];
                }
            });
        });
    };
    NeonApi.prototype.updateWish = function (wish, id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, groupRows, wishId, updateWish_1, imageData_1, updateRows, e_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = "success";
                        return [4 /*yield*/, this.pool.query("BEGIN")];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 7, , 9]);
                        return [4 /*yield*/, this.pool.query("SELECT sg.id FROM public.shitai_wish as sw INNER JOIN public.shitai_group as sg ON sw.\"groupId\" = sg.id INNER JOIN public.shitai_group_join as sjg ON sjg.\"groupId\" = sg.id AND sjg.\"userId\" = $1 WHERE sw.id = $2;", [id, wish.id])];
                    case 3:
                        groupRows = (_a.sent()).rows;
                        if (groupRows.length !== 1) {
                            throw {
                                message: "権限がありません。グループ外のユーザーです。",
                            };
                        }
                        wishId = wish.id, updateWish_1 = __rest(wish, ["id"]);
                        return [4 /*yield*/, this.uploadImageData(updateWish_1.imageData || "")];
                    case 4:
                        imageData_1 = _a.sent();
                        console.log("-----------------------", imageData_1);
                        return [4 /*yield*/, this.pool.query("UPDATE public.shitai_wish SET ".concat(Object.keys(updateWish_1).reduce(function (prev, current) {
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
                    case 5:
                        updateRows = (_a.sent()).rows;
                        if (updateRows.length === 0) {
                            throw {
                                message: "したいことの更新に失敗しました。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("COMMIT")];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 7:
                        e_12 = _a.sent();
                        return [4 /*yield*/, this.pool.query("ROLLBACK")];
                    case 8:
                        _a.sent();
                        throw e_12;
                    case 9: return [2 /*return*/, response];
                }
            });
        });
    };
    NeonApi.prototype.getWishes = function (groupId, id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, groupRows, wishRows, _loop_1, this_1, wishRows_2, wishRows_2_1, wish, e_13_1, e_14;
            var e_13, _a;
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
                        e_13_1 = _b.sent();
                        e_13 = { error: e_13_1 };
                        return [3 /*break*/, 11];
                    case 10:
                        try {
                            if (wishRows_2_1 && !wishRows_2_1.done && (_a = wishRows_2.return)) _a.call(wishRows_2);
                        }
                        finally { if (e_13) throw e_13.error; }
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/, response];
                    case 12:
                        e_14 = _b.sent();
                        throw e_14;
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
    NeonApi.prototype.getGroups = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, joinGroupRows, joinGroupRows_1, joinGroupRows_1_1, group, groupObj, joinMemberRows, e_15_1, e_16;
            var e_15, _a;
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
                        e_15_1 = _b.sent();
                        e_15 = { error: e_15_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (joinGroupRows_1_1 && !joinGroupRows_1_1.done && (_a = joinGroupRows_1.return)) _a.call(joinGroupRows_1);
                        }
                        finally { if (e_15) throw e_15.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/, response];
                    case 11:
                        e_16 = _b.sent();
                        throw e_16;
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    NeonApi.prototype.insertGroup = function (id, group) {
        return __awaiter(this, void 0, void 0, function () {
            var response, insertRows, insertJoinRows, e_17;
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
                        e_17 = _a.sent();
                        return [4 /*yield*/, this.pool.query("ROLLBACK")];
                    case 7:
                        _a.sent();
                        throw e_17;
                    case 8: return [2 /*return*/, response];
                }
            });
        });
    };
    NeonApi.prototype.invitationGroup = function (id_1, _a) {
        return __awaiter(this, arguments, void 0, function (id, _b) {
            var response, userRows, groupRows, insertRows, e_18;
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
                        e_18 = _c.sent();
                        return [4 /*yield*/, this.pool.query("ROLLBACK")];
                    case 8:
                        _c.sent();
                        throw e_18;
                    case 9: return [2 /*return*/, response];
                }
            });
        });
    };
    NeonApi.prototype.joinWish = function (id_1, _a) {
        return __awaiter(this, arguments, void 0, function (id, _b) {
            var response, groupRows, wishRows, joinWishRows, e_19;
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
                        _c.trys.push([2, 7, , 9]);
                        return [4 /*yield*/, this.pool.query("SELECT sg.id FROM public.shitai_wish as sw INNER JOIN public.shitai_group as sg ON sw.\"groupId\" = sg.id INNER JOIN public.shitai_group_join as sjg ON sjg.\"groupId\" = sg.id AND sjg.\"userId\" = $1 WHERE sw.id = $2;", [id, wishId])];
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
    return NeonApi;
}());



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

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsZ0JBQWdCO0FBQzlDLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSUFBSTtBQUNMLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsZ0JBQWdCO0FBQzlDLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSUFBSTtBQUNMLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSUFBSTtBQUNMLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSUFBSTtBQUNMLHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSUFBSTtBQUNMO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvLi9zcmMvYmFja2VuZC9OZW9uQXBpLnRzIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwiQGdvb2dsZS1jbG91ZC9zdG9yYWdlXCIiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvZXh0ZXJuYWwgY29tbW9uanMgXCJjb3JzXCIiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvZXh0ZXJuYWwgY29tbW9uanMgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC9leHRlcm5hbCBjb21tb25qcyBcImRvdGVudlwiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvZXh0ZXJuYWwgY29tbW9uanMgXCJwZ1wiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwidXVpZFwiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvLi9zcmMvYmFja2VuZC9zZXJ2ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnID0gT2JqZWN0LmNyZWF0ZSgodHlwZW9mIEl0ZXJhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBJdGVyYXRvciA6IE9iamVjdCkucHJvdG90eXBlKTtcbiAgICByZXR1cm4gZy5uZXh0ID0gdmVyYigwKSwgZ1tcInRocm93XCJdID0gdmVyYigxKSwgZ1tcInJldHVyblwiXSA9IHZlcmIoMiksIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG52YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tLCBwYWNrKSB7XG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xuICAgICAgICAgICAgaWYgKCFhcikgYXIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tLCAwLCBpKTtcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcbn07XG52YXIgX192YWx1ZXMgPSAodGhpcyAmJiB0aGlzLl9fdmFsdWVzKSB8fCBmdW5jdGlvbihvKSB7XG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcbn07XG5pbXBvcnQgeyBQb29sIH0gZnJvbSBcInBnXCI7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIkBnb29nbGUtY2xvdWQvc3RvcmFnZVwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7IGNyZWF0ZUhhc2gsIHJhbmRvbUJ5dGVzIH0gZnJvbSBcImNyeXB0b1wiO1xuaW1wb3J0ICogYXMgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbnJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7XG52YXIgTmVvbkFwaSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOZW9uQXBpKCkge1xuICAgICAgICB0aGlzLnBvb2wgPSBuZXcgUG9vbCh7XG4gICAgICAgICAgICBob3N0OiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfREJfSE9TVCxcbiAgICAgICAgICAgIHVzZXI6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9EQl9VU0VSLFxuICAgICAgICAgICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9EQl9OQU1FLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9EQl9QQVNTV09SRCxcbiAgICAgICAgICAgIHBvcnQ6IHBhcnNlSW50KHByb2Nlc3MuZW52LlJFQUNUX0FQUF9EQl9QT1JUIHx8IFwiNTQzMlwiKSxcbiAgICAgICAgICAgIHNzbDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2FsdCA9IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9EQl9TQUxUO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgICAgIGV4cGlyZXNJbjogXCIxSFwiLFxuICAgICAgICAgICAgYWxnb3JpdGhtOiBcIkhTMjU2XCIsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sdW1ucyA9IFtcbiAgICAgICAgICAgICdcImdyb3VwSWRcIicsXG4gICAgICAgICAgICAnXCJjcmVhdG9ySWRcIicsXG4gICAgICAgICAgICAnXCJjYXRlZ29yeVwiJyxcbiAgICAgICAgICAgICdcImltYWdlRGF0YVwiJyxcbiAgICAgICAgICAgICdcInRpdGxlXCInLFxuICAgICAgICAgICAgJ1wiZGlzcGxheURhdGVcIicsXG4gICAgICAgICAgICAnXCJkaXNwbGF5VGV4dFwiJyxcbiAgICAgICAgICAgICdcIm5vdGVzXCInLFxuICAgICAgICAgICAgJ1wiZGVhZGxpbmVcIicsXG4gICAgICAgICAgICAnXCJtaW5QYXJ0aWNpcGFudHNcIicsXG4gICAgICAgICAgICAnXCJtYXhQYXJ0aWNpcGFudHNcIicsXG4gICAgICAgICAgICAnXCJhY3Rpb25MYWJlbFwiJyxcbiAgICAgICAgICAgICdcIndpdGhkcmF3blwiJyxcbiAgICAgICAgICAgICdcImNyZWF0ZWRBdFwiJyxcbiAgICAgICAgICAgICdcInBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hVHlwZVwiJyxcbiAgICAgICAgICAgICdcInBvc3RDb25maXJtU2NoZW1hVHlwZVwiJyxcbiAgICAgICAgICAgICdcImltcGxlbWVudGF0aW9uRGF0ZXRpbWVcIicsXG4gICAgICAgIF07XG4gICAgfVxuICAgIE5lb25BcGkucHJvdG90eXBlLmNyZWF0ZVRva2VucyA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICB2YXIgcmVzcG9uc2UgPSB7IGFjY2Vzc1Rva2VuOiBcIlwiLCByZWZyZXNoVG9rZW46IFwiXCIgfTtcbiAgICAgICAgLy8g44Ki44Kv44K744K544OI44O844Kv44Oz5L2c5oiQXG4gICAgICAgIHZhciByYW5kb21TdHIgPSByYW5kb21CeXRlcygxNikudG9TdHJpbmcoXCJoZXhcIik7XG4gICAgICAgIC8vIOOAjOODqeODs+ODgOODoOaWh+Wtl+WIlygxNuODkOOCpOODiCkgKyDjg6rjgq/jgqjjgrnjg4gu44Om44O844K244O8SUQo44K944Or44OI5YCkKeOAjeOBp+ODj+ODg+OCt+ODpeWApOOCkuS9nOaIkFxuICAgICAgICB2YXIgc2FsdGVkUmFuZG9tU3RyID0gcmFuZG9tU3RyICsgdGhpcy5zYWx0O1xuICAgICAgICB2YXIgYWNjZXNzVG9rZW4gPSBjcmVhdGVIYXNoKFwic2hhMjU2XCIpXG4gICAgICAgICAgICAudXBkYXRlKHNhbHRlZFJhbmRvbVN0cilcbiAgICAgICAgICAgIC5kaWdlc3QoXCJoZXhcIik7XG4gICAgICAgIC8vIOODquODleODrOODg+OCt+ODpeODiOODvOOCr+ODs+S9nOaIkFxuICAgICAgICByYW5kb21TdHIgPSByYW5kb21CeXRlcygxNikudG9TdHJpbmcoXCJoZXhcIik7XG4gICAgICAgIC8vIOOAjOODqeODs+ODgOODoOaWh+Wtl+WIlygxNuODkOOCpOODiCkgKyDjg6rjgq/jgqjjgrnjg4gu44Om44O844K244O8SUQo44K944Or44OI5YCkKeOAjeOBp+ODj+ODg+OCt+ODpeWApOOCkuS9nOaIkFxuICAgICAgICBzYWx0ZWRSYW5kb21TdHIgPSByYW5kb21TdHIgKyB0aGlzLnNhbHQ7XG4gICAgICAgIHZhciByZWZyZXNoVG9rZW4gPSBjcmVhdGVIYXNoKFwic2hhMjU2XCIpXG4gICAgICAgICAgICAudXBkYXRlKHNhbHRlZFJhbmRvbVN0cilcbiAgICAgICAgICAgIC5kaWdlc3QoXCJoZXhcIik7XG4gICAgICAgIHZhciBkZWZhdWx0UGV5bG9hZCA9IHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbixcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHJlZnJlc2hQZXlsb2FkID0ge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgcmVmcmVzaFRva2VuOiByZWZyZXNoVG9rZW4sXG4gICAgICAgIH07XG4gICAgICAgIHJlc3BvbnNlLmFjY2Vzc1Rva2VuID0gand0LnNpZ24oZGVmYXVsdFBleWxvYWQsIHRoaXMuc2FsdCB8fCBcIlwiLCB0aGlzLmNvbmZpZyk7XG4gICAgICAgIHJlc3BvbnNlLnJlZnJlc2hUb2tlbiA9IGp3dC5zaWduKHJlZnJlc2hQZXlsb2FkLCB0aGlzLnNhbHQgfHwgXCJcIiwgX19hc3NpZ24oX19hc3NpZ24oe30sIHRoaXMuY29uZmlnKSwgeyBleHBpcmVzSW46IFwiNzJIXCIgfSkpO1xuICAgICAgICByZXR1cm4geyBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbjogcmVmcmVzaFRva2VuLCByZXNwb25zZTogcmVzcG9uc2UgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcmFtMCBsb2dpbkF1dGhSZXF1ZXN0IOODpuODvOOCtuODvElE44Go44OR44K544Ov44O844OJ44GM5qC857SN44GV44KM44Gm44GE44KLXG4gICAgICogQHJldHVybnMgYWNjZXNzVG9rZW4g44Ki44Kv44K744K544OI44O844Kv44Oz44KS6L+U5Y2044GZ44KLXG4gICAgICovXG4gICAgTmVvbkFwaS5wcm90b3R5cGUubG9naW5BdXRoID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBoYXNoUGFzc3dvcmQsIHF1ZXJ5LCByb3dzLCBpZCwgbmFtZSwgZW1haWwsIF9jLCBhY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuLCBuZXdSZXNwb25zZSwgdXBkYXRlUm93cztcbiAgICAgICAgICAgIHZhciB1c2VySWQgPSBfYi51c2VySWQsIHBhc3N3b3JkID0gX2IucGFzc3dvcmQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9kKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfZC5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoVG9rZW46IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNoUGFzc3dvcmQgPSBjcmVhdGVIYXNoKFwic2hhMjU2XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVwZGF0ZShwYXNzd29yZCArIHRoaXMuc2FsdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGlnZXN0KFwiaGV4XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnkgPSBcIlxcbiAgICAgICAgICAgIFNFTEVDVCBzaGl0YWlfdXNlcl9pbmZvLmlkICAgICAgQVMgaWRcXG4gICAgICAgICAgICAsc2hpdGFpX3VzZXJfaW5mby51c2VyX2lkICAgICAgQVMgZW1haWxcXG4gICAgICAgICAgICAsIHNoaXRhaV91c2VyX2luZm8udXNlcl9uYW1lICAgICAgQVMgbmFtZVxcbiAgICAgICAgICAgIEZST00gc2hpdGFpX3VzZXJfaW5mb1xcbiAgICAgICAgICAgIFdIRVJFIHBhc3N3b3JkID0gJDFcXG4gICAgICAgICAgICAgIEFORCB1c2VyX2lkID0gJDI7XFxuICAgICAgICBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShxdWVyeSwgW2hhc2hQYXNzd29yZCwgdXNlcklkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzID0gKF9kLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBjOWtmOWcqOOBmeOCi+WgtOWQiOOAgeOCouOCr+OCu+OCueODiOODvOOCr+ODs+OCkui/lOWNtOOBmeOCi1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5a2Y5Zyo44GX44Gq44GE5aC05ZCI44CB44Ko44Op44O844Oh44OD44K744O844K444KS6L+U5Y2044GZ44KL44CCXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93cy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBcIuODpuODvOOCtuODvElE44KC44GX44GP44Gv44OR44K544Ov44O844OJ44GM6ZaT6YGV44Gj44Gm44GE44G+44GZ44CCXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gcm93c1swXVtcImlkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IHJvd3NbMF1bXCJuYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWwgPSByb3dzWzBdW1wiZW1haWxcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHsgbWVzc2FnZTogXCLjg63jgrDjgqTjg7Poqo3oqLzjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIiB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MgPSB0aGlzLmNyZWF0ZVRva2VucyhpZCksIGFjY2Vzc1Rva2VuID0gX2MuYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiA9IF9jLnJlZnJlc2hUb2tlbiwgbmV3UmVzcG9uc2UgPSBfYy5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlVQREFURSBzaGl0YWlfdXNlcl9pbmZvIFNFVCBhY2Nlc3NfdG9rZW4gPSAkMSwgcmVmcmVzaF90b2tlbiA9ICQyIFdIRVJFIHVzZXJfaWQgPSAkMyBSRVRVUk5JTkcgaWRcIiwgW2FjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4sIHVzZXJJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUm93cyA9IChfZC5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlUm93cy5sZW5ndGggPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBcIuODreOCsOOCpOODs+iqjeiovOOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA9IHVwZGF0ZVJvd3NbMF1bXCJpZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBcIuODreOCsOOCpOODs+iqjeiovOOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCBuZXdSZXNwb25zZSksIHsgaWQ6IGlkLCBuYW1lOiBuYW1lLCBlbWFpbDogZW1haWwgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcmFtMCBhY2Nlc3NUb2tlbkF1dGhSZXF1ZXN0W1widXNlckluZm9cIl0gQVBJ44KS5a6f6KGM44GZ44KL44Om44O844K244O85oOF5aCxKOODpuODvOOCtuODvElE44CB44Ki44Kv44K744K544OI44O844Kv44OzKVxuICAgICAqIEByZXR1cm5z44CAXCJzdWNjZXNzXCIgb3IgXCJlcnJvclwiXG4gICAgICovXG4gICAgTmVvbkFwaS5wcm90b3R5cGUuYWNjZXNzVG9rZW5BdXRoID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBpZCwgbmFtZV8xLCBlbWFpbCwgZGVjb2RlZEFjY2Vzc1Rva2VuLCBvYmosIHJvd3MsIGVfMTtcbiAgICAgICAgICAgIHZhciBhY2Nlc3NUb2tlbiA9IF9iLmFjY2Vzc1Rva2VuO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcImVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRBY2Nlc3NUb2tlbiA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0gand0LnZlcmlmeShhY2Nlc3NUb2tlbiwgdGhpcy5zYWx0IHx8IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gb2JqLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY29kZWRBY2Nlc3NUb2tlbiA9IG9iai5hY2Nlc3NUb2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZCwgZGVjb2RlZEFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFwibWVzc2FnZVwiIGluIGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUubWVzc2FnZSA9PT0gXCJqd3QgZXhwaXJlZFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwiZXhwaXJlZCBhY2Nlc3MgdG9rZW5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1QgKlxcbiAgICAgICAgICAgICBGUk9NIHNoaXRhaV91c2VyX2luZm9cXG4gICAgICAgICAgICAgV0hFUkUgaWQgPSAkMVxcbiAgICAgICAgICAgICAgIEFORCBhY2Nlc3NfdG9rZW4gPSAkMjtcIiwgW2lkLCBkZWNvZGVkQWNjZXNzVG9rZW5dKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd3MgPSAoX2Muc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcImVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVfMSA9IHJvd3NbMF1bXCJ1c2VyX25hbWVcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbCA9IHJvd3NbMF1bXCJ1c2VyX2lkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB7IGlkOiBpZCwgbmFtZTogbmFtZV8xLCBlbWFpbDogZW1haWwgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMSA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJlcnJvclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFyYW0wIGFjY2Vzc1Rva2VuQXV0aFJlcXVlc3RbXCJ1c2VySW5mb1wiXSBBUEnjgpLlrp/ooYzjgZnjgovjg6bjg7zjgrbjg7zmg4XloLEo44Om44O844K244O8SUTjgIHjgqLjgq/jgrvjgrnjg4jjg7zjgq/jg7MpXG4gICAgICogQHJldHVybnPjgIBcInN1Y2Nlc3NcIiBvciBcImVycm9yXCJcbiAgICAgKi9cbiAgICBOZW9uQXBpLnByb3RvdHlwZS5yZWZyZXNoVG9rZW5BdXRoID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBfYywgaWQsIGRlY29kZWRSZWZyZXNoVG9rZW4sIHJvd3MsIHVzZXJJZCwgX2QsIG5ld0FjY2Vzc1Rva2VuLCBuZXdSZWZyZXNoVG9rZW4sIG5ld1Jlc3BvbnNlLCB1cGRhdGVSb3dzO1xuICAgICAgICAgICAgdmFyIHJlZnJlc2hUb2tlbiA9IF9iLnJlZnJlc2hUb2tlbjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2UpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9lLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJlcnJvclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MgPSBqd3QudmVyaWZ5KHJlZnJlc2hUb2tlbiwgdGhpcy5zYWx0IHx8IFwiXCIpLCBpZCA9IF9jLmlkLCBkZWNvZGVkUmVmcmVzaFRva2VuID0gX2MucmVmcmVzaFRva2VuO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIGlkXFxuICAgICAgICAgICAgIEZST00gc2hpdGFpX3VzZXJfaW5mb1xcbiAgICAgICAgICAgICBXSEVSRSBpZCA9ICQxXFxuICAgICAgICAgICAgICAgQU5EIHJlZnJlc2hfdG9rZW4gPSAkMjtcIiwgW2lkLCBkZWNvZGVkUmVmcmVzaFRva2VuXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzID0gKF9lLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJlcnJvclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VySWQgPSByb3dzWzBdW1wiaWRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBfZCA9IHRoaXMuY3JlYXRlVG9rZW5zKHVzZXJJZCksIG5ld0FjY2Vzc1Rva2VuID0gX2QuYWNjZXNzVG9rZW4sIG5ld1JlZnJlc2hUb2tlbiA9IF9kLnJlZnJlc2hUb2tlbiwgbmV3UmVzcG9uc2UgPSBfZC5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlVQREFURSBzaGl0YWlfdXNlcl9pbmZvIFNFVCBhY2Nlc3NfdG9rZW4gPSAkMSwgcmVmcmVzaF90b2tlbiA9ICQyIFdIRVJFIGlkID0gJDMgUkVUVVJOSU5HIGlkXCIsIFtuZXdBY2Nlc3NUb2tlbiwgbmV3UmVmcmVzaFRva2VuLCB1c2VySWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJvd3MgPSAoX2Uuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZVJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcImVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gdXBkYXRlUm93c1swXVtcImlkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJlcnJvclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9fYXNzaWduKHsgaWQ6IGlkIH0sIG5ld1Jlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUudXBsb2FkSW1hZ2VEYXRhID0gZnVuY3Rpb24gKGltYWdlRGF0YSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY3JlZGVudGlhbHMsIHN0b3JhZ2UsIGJ1Y2tldCwgcGFyc2VCYXNlNjRJbWFnZSwgdXBsb2FkQmFzZTY0SW1hZ2UsIF9hO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9DUkVERU5USUFMU19UWVBFLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudF9lbWFpbDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NSRURFTlRJQUxTX0NMSUVOVF9FTUFJTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlX2tleTogKHByb2Nlc3MuZW52LlJFQUNUX0FQUF9DUkVERU5USUFMU19QUklWQVRFX0tFWSB8fCBcIlwiKS5yZXBsYWNlKC9cXFxcbi9nLCBcIlxcblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlX2tleV9pZDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NSRURFTlRJQUxTX1BSSVZBVEVfS0VZX0lELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RfaWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9QUk9KRUNUX0lELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudF9pZDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NSRURFTlRJQUxTX0NMSUVOVF9JRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoX3VyaTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NSRURFTlRJQUxTX0FVVEhfVVJJLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuX3VyaTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0NSRURFTlRJQUxTX1RPS0VOX1VSSSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRoX3Byb3ZpZGVyX3g1MDlfY2VydF91cmw6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9DUkVERU5USUFMU19BVVRIX1BST1ZJREVSX1g1MDlfQ0VSVF9VUkwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50X3g1MDlfY2VydF91cmw6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9DUkVERU5USUFMU19DTElFTlRfWDUwOV9DRVJUX1VSTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bml2ZXJzZV9kb21haW46IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9DUkVERU5USUFMU19VTklWRVJTRV9ET01BSU4sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9QUk9KRUNUX05BTUUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IGNyZWRlbnRpYWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWNrZXQgPSBzdG9yYWdlLmJ1Y2tldChwcm9jZXNzLmVudi5SRUFDVF9BUFBfQlVDS0VUX05BTUUgfHwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUJhc2U2NEltYWdlID0gZnVuY3Rpb24gKGJhc2U2NCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzID0gYmFzZTY0Lm1hdGNoKC9eZGF0YTooLispO2Jhc2U2NCwoLispJC8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2hlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBCYXNlNjQgc3RyaW5nXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGNvbnRlbnRUeXBlOiBtYXRjaGVzWzFdLCBiYXNlNjREYXRhOiBtYXRjaGVzWzJdIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBsb2FkQmFzZTY0SW1hZ2UgPSBmdW5jdGlvbiAoYmFzZTY0LCB1cGxvYWRQYXRoKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hLCBjb250ZW50VHlwZSwgYmFzZTY0RGF0YSwgYnVmZmVyLCBmaWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gcGFyc2VCYXNlNjRJbWFnZShiYXNlNjQpLCBjb250ZW50VHlwZSA9IF9hLmNvbnRlbnRUeXBlLCBiYXNlNjREYXRhID0gX2EuYmFzZTY0RGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSBCdWZmZXIuZnJvbShiYXNlNjREYXRhLCBcImJhc2U2NFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlID0gYnVja2V0LmZpbGUodXBsb2FkUGF0aCArIFwiLlwiICsgY29udGVudFR5cGUucmVwbGFjZShcImltYWdlL1wiLCBcIlwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZmlsZS5zYXZlKGJ1ZmZlciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogY29udGVudFR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGVDb250cm9sOiBcInB1YmxpYywgbWF4LWFnZT0zMTUzNjAwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlv4XopoHjgarjgonlhazplotcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmaWxlLm1ha2VQdWJsaWMoKV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5b+F6KaB44Gq44KJ5YWs6ZaLXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBcImh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9cIi5jb25jYXQoZmlsZS5jbG91ZFN0b3JhZ2VVUkkuaHJlZi5yZXBsYWNlKFwiZ3M6Ly9cIiwgXCJcIikpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7IH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWltYWdlRGF0YSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB1cGxvYWRCYXNlNjRJbWFnZShpbWFnZURhdGEsIHV1aWR2NCgpKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qLywgX2FdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcmFtMCB1c2VySWQs5L2c5oiQ44Gr5b+F6KaB44Gq5oOF5aCxKHByaWNlLCBkZXNjcmlwdGlvbiwgY3JlYXRlZF9hdClcbiAgICAgKiBAcmV0dXJuc+OAgFwic3VjY2Vzc1wiIG9yIFwiZXJyb3JcIlxuICAgICAqL1xuICAgIE5lb25BcGkucHJvdG90eXBlLmluc2VydFVzZXJJbmZvID0gZnVuY3Rpb24gKHVwZGF0ZU9iaikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGhhc2hQYXNzd29yZCwgaW5zZXJ0Um93cywgZV8yO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcInN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkJFR0lOXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzIsIDUsICwgN10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzaFBhc3N3b3JkID0gY3JlYXRlSGFzaChcInNoYTI1NlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51cGRhdGUodXBkYXRlT2JqLnBhc3N3b3JkICsgdGhpcy5zYWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaWdlc3QoXCJoZXhcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJJTlNFUlQgSU5UTyBcXFwicHVibGljXFxcIi5cXFwic2hpdGFpX3VzZXJfaW5mb1xcXCIgKFxcXCJ1c2VyX2lkXFxcIiwgXFxcInBhc3N3b3JkXFxcIiwgXFxcInVzZXJfbmFtZVxcXCIpXFxuICAgICAgICAgIFZBTFVFUygkMSwgJDIsICQzKSBSRVRVUk5JTkcgaWQ7XCIsIFt1cGRhdGVPYmouZW1haWwsIGhhc2hQYXNzd29yZCwgdXBkYXRlT2JqLm5hbWVdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFJvd3MgPSAoX2Euc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc2VydFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuODpuODvOOCtuODvOeZu+mMsuOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJDT01NSVRcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA3XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiUk9MTEJBQ0tcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS5pbnNlcnRXaXNoID0gZnVuY3Rpb24gKHdpc2gsIGlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWEsIHBvc3RDb25maXJtU2NoZW1hLCBsZWZ0V2lzaCwgZ3JvdXBSb3dzLCBpbWFnZURhdGEsIGluc2VydFdpc2hSb3dzLCBjcmVhdGVJbnNlcnRTY2hlbWEsIF9hLCBfYiwgc2NoZW1hLCBpbnNlcnRSb3dzLCBlXzNfMSwgZV80O1xuICAgICAgICAgICAgdmFyIGVfMywgX2M7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9kKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfZC5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHsgaWQ6IFwiXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkJFR0lOXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Quc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2QubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZC50cnlzLnB1c2goWzIsIDE1LCAsIDE3XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYSA9IHdpc2gucGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWEsIHBvc3RDb25maXJtU2NoZW1hID0gd2lzaC5wb3N0Q29uZmlybVNjaGVtYSwgbGVmdFdpc2ggPSBfX3Jlc3Qod2lzaCwgW1wicGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFcIiwgXCJwb3N0Q29uZmlybVNjaGVtYVwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhsZWZ0V2lzaC5ncm91cElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzZy5pZCBGUk9NIHB1YmxpYy5zaGl0YWlfZ3JvdXAgYXMgc2cgSU5ORVIgSk9JTiBwdWJsaWMuc2hpdGFpX2dyb3VwX2pvaW4gYXMgc2pnIE9OIHNqZy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBBTkQgc2pnLlxcXCJ1c2VySWRcXFwiID0gJDEgV0hFUkUgc2cuaWQgPSAkMjtcIiwgW2lkLCBsZWZ0V2lzaC5ncm91cElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFJvd3MgPSAoX2Quc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5qip6ZmQ44GM44GC44KK44G+44Gb44KT44CC44Kw44Or44O844OX5aSW44Gu44Om44O844K244O844Gn44GZ44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMudXBsb2FkSW1hZ2VEYXRhKGxlZnRXaXNoLmltYWdlRGF0YSB8fCBcIlwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YSA9IF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIklOU0VSVCBJTlRPIHB1YmxpYy5zaGl0YWlfd2lzaCAoXCIuY29uY2F0KHRoaXMuY29sdW1ucy5qb2luKFwiLFwiKSwgXCIpIFxcbiAgICAgICAgVkFMVUVTICgkMSwgJDIsICQzLCAkNCwgJDUsICQ2LCAkNywgJDgsICQ5LCAkMTAsICQxMSwgJDEyLCAkMTMsIE5PVygpLCAkMTQsICQxNSwgJDE2KSBSRVRVUk5JTkcgaWQ7XCIpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoLmdyb3VwSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoLmNyZWF0b3JJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2guY2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2gudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoLmRpc3BsYXlEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaC5kaXNwbGF5VGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2gubm90ZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoLmRlYWRsaW5lID09IFwiXCIgPyBudWxsIDogbGVmdFdpc2guZGVhZGxpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoLm1pblBhcnRpY2lwYW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2gubWF4UGFydGljaXBhbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaC5hY3Rpb25MYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RDb25maXJtU2NoZW1hLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoLmltcGxlbWVudGF0aW9uRGF0ZXRpbWUgPT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxlZnRXaXNoLmltcGxlbWVudGF0aW9uRGF0ZXRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRXaXNoUm93cyA9IChfZC5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0V2lzaFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOBl+OBn+OBhOOBk+OBqOOBrueZu+mMsuOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVJbnNlcnRTY2hlbWEgPSBmdW5jdGlvbiAoc2NoZW1hLCBzY2hlbWFUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1peGVkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hVHlwZTogc2NoZW1hVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHNjaGVtYS5kYXRldGltZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBzY2hlbWEuZGF0ZXRpbWVSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVR5cGU6IHNjaGVtYVR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJub3RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHNjaGVtYS5ub3RlTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHNjaGVtYS5ub3RlUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGF0ZXRpbWVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFUeXBlOiBzY2hlbWFUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogc2NoZW1hLmRhdGV0aW1lTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHNjaGVtYS5kYXRldGltZVJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vdGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFUeXBlOiBzY2hlbWFUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibm90ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzY2hlbWEubm90ZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBzY2hlbWEubm90ZVJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFUeXBlOiBzY2hlbWFUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzY2hlbWEubm90ZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBzY2hlbWEubm90ZVJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBfZC5sYWJlbCA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kLnRyeXMucHVzaChbNiwgMTEsIDEyLCAxM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBfX3ZhbHVlcyhfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChjcmVhdGVJbnNlcnRTY2hlbWEocGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWEsIFwicGFydGljaXBhdGlvblwiKSksIGZhbHNlKSwgX19yZWFkKGNyZWF0ZUluc2VydFNjaGVtYShwb3N0Q29uZmlybVNjaGVtYSwgXCJwb3N0XCIpKSwgZmFsc2UpKSwgX2IgPSBfYS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZC5sYWJlbCA9IDc7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIV9iLmRvbmUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYSA9IF9iLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiSU5TRVJUIElOVE8gXFxcInB1YmxpY1xcXCIuXFxcInNoaXRhaV9zY2hlbWFcXFwiIChcXFwid2lzaElkXFxcIiwgXFxcInNjaGVtYVR5cGVcXFwiLCBcXFwidHlwZVxcXCIsIFxcXCJyZXF1aXJlZFxcXCIsIFxcXCJsYWJlbFxcXCIpXFxuICAgICAgICAgIFZBTFVFUygkMSwgJDIsICQzLCAkNCwgJDUpIFJFVFVSTklORyBpZDtcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRXaXNoUm93c1swXVtcImlkXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEuc2NoZW1hVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLmxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0Um93cyA9IChfZC5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0Um93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi56K66KqN6aCF55uu44Gu55m76Yyy44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9kLmxhYmVsID0gOTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IgPSBfYS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA3XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDogcmV0dXJuIFszIC8qYnJlYWsqLywgMTNdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8zXzEgPSBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzMgPSB7IGVycm9yOiBlXzNfMSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTNdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2IgJiYgIV9iLmRvbmUgJiYgKF9jID0gX2EucmV0dXJuKSkgX2MuY2FsbChfYSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMykgdGhyb3cgZV8zLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuaWQgPSBpbnNlcnRXaXNoUm93c1swXVtcImlkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQ09NTUlUXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDE3XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfNCA9IF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlJPTExCQUNLXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfNDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS5jcmVhdGVSZXNwb25zZURhdGEgPSBmdW5jdGlvbiAod2lzaElkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzY2hlbWFSb3dzLCBzY2hlbWFNYXAsIHNjaGVtYVJvd3NfMSwgc2NoZW1hUm93c18xXzEsIHNjaGVtYSwgcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFUeXBlLCBwb3N0Q29uZmlybVNjaGVtYVR5cGUsIHNjaGVtYVR5cGUsIHR5cGUsIHJlcXVpcmVkLCBsYWJlbCwgYW5zd2VyUm93cywgYW5zd2VyTWFwLCBwYXJ0aWNpcGFudHMsIGFuc3dlclJvd3NfMSwgYW5zd2VyUm93c18xXzEsIGFuc3dlciwgam9pbmVkQXQsIHVzZXJJZCwgc2NoZW1hVHlwZSwgdHlwZSwgdmFsdWUsIGVfNTtcbiAgICAgICAgICAgIHZhciBlXzYsIF9hLCBfYiwgZV83LCBfYywgX2QsIF9lO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2YubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2YudHJ5cy5wdXNoKFswLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzdy5cXFwicGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFUeXBlXFxcIiwgc3cuXFxcInBvc3RDb25maXJtU2NoZW1hVHlwZVxcXCIsIHNzLlxcXCJzY2hlbWFUeXBlXFxcIiwgc3MuXFxcInR5cGVcXFwiLCBzcy5cXFwicmVxdWlyZWRcXFwiLCBzcy5cXFwibGFiZWxcXFwiXFxuICAgICAgICBGUk9NIHB1YmxpYy5zaGl0YWlfd2lzaCBhcyBzdyBJTk5FUiBKT0lOIHNoaXRhaV9zY2hlbWEgYXMgc3MgT04gc3MuXFxcIndpc2hJZFxcXCIgPSBzdy5pZCBXSEVSRSBzdy5pZCA9ICQxO1wiLCBbd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFSb3dzID0gKF9mLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY2hlbWFSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgrnjgq3jg7zjg57jga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHNjaGVtYVJvd3NfMSA9IF9fdmFsdWVzKHNjaGVtYVJvd3MpLCBzY2hlbWFSb3dzXzFfMSA9IHNjaGVtYVJvd3NfMS5uZXh0KCk7ICFzY2hlbWFSb3dzXzFfMS5kb25lOyBzY2hlbWFSb3dzXzFfMSA9IHNjaGVtYVJvd3NfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hID0gc2NoZW1hUm93c18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hVHlwZSA9IHNjaGVtYS5wYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYVR5cGUsIHBvc3RDb25maXJtU2NoZW1hVHlwZSA9IHNjaGVtYS5wb3N0Q29uZmlybVNjaGVtYVR5cGUsIHNjaGVtYVR5cGUgPSBzY2hlbWEuc2NoZW1hVHlwZSwgdHlwZSA9IHNjaGVtYS50eXBlLCByZXF1aXJlZCA9IHNjaGVtYS5yZXF1aXJlZCwgbGFiZWwgPSBzY2hlbWEubGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYU1hcC5zZXQoc2NoZW1hVHlwZSwgX19hc3NpZ24oX19hc3NpZ24oe30sIHNjaGVtYU1hcC5nZXQoc2NoZW1hVHlwZSkpLCAoX2IgPSB7IHR5cGU6IHNjaGVtYVR5cGUgPT09IFwicGFydGljaXBhdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFUeXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcG9zdENvbmZpcm1TY2hlbWFUeXBlIH0sIF9iW3R5cGUgKyBcIkxhYmVsXCJdID0gbGFiZWwsIF9iW3R5cGUgKyBcIlJlcXVpcmVkXCJdID0gcmVxdWlyZWQsIF9iKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlXzZfMSkgeyBlXzYgPSB7IGVycm9yOiBlXzZfMSB9OyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NoZW1hUm93c18xXzEgJiYgIXNjaGVtYVJvd3NfMV8xLmRvbmUgJiYgKF9hID0gc2NoZW1hUm93c18xLnJldHVybikpIF9hLmNhbGwoc2NoZW1hUm93c18xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzYpIHRocm93IGVfNi5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHNqLlxcXCJqb2luZWRBdFxcXCIsIHNqLlxcXCJ1c2VySWRcXFwiLCBzcy5cXFwic2NoZW1hVHlwZVxcXCIsIHNzLnR5cGUsIHNhLnZhbHVlXFxuICAgICAgICBGUk9NIHNoaXRhaV9qb2luIGFzIHNqIExFRlQgSk9JTiBzaGl0YWlfc2NoZW1hIGFzIHNzIE9OIHNzLlxcXCJ3aXNoSWRcXFwiID0gJDEgTEVGVCBKT0lOIHB1YmxpYy5zaGl0YWlfYW5zd2VyIGFzIHNhIE9OIHNhLlxcXCJzY2hlbWFJZFxcXCIgPSBzcy5pZCBBTkQgc3MuXFxcIndpc2hJZFxcXCIgPSAkMSBBTkQgc2EuXFxcInVzZXJJZFxcXCIgPSBzai5cXFwidXNlcklkXFxcIiBXSEVSRSBzai5cXFwid2lzaElkXFxcIiA9ICQxIE9SREVSIEJZIHNqLlxcXCJqb2luZWRBdFxcXCIgQVNDO1wiLCBbd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJSb3dzID0gKF9mLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlck1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGFuc3dlclJvd3NfMSA9IF9fdmFsdWVzKGFuc3dlclJvd3MpLCBhbnN3ZXJSb3dzXzFfMSA9IGFuc3dlclJvd3NfMS5uZXh0KCk7ICFhbnN3ZXJSb3dzXzFfMS5kb25lOyBhbnN3ZXJSb3dzXzFfMSA9IGFuc3dlclJvd3NfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyID0gYW5zd2VyUm93c18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5lZEF0ID0gYW5zd2VyLmpvaW5lZEF0LCB1c2VySWQgPSBhbnN3ZXIudXNlcklkLCBzY2hlbWFUeXBlID0gYW5zd2VyLnNjaGVtYVR5cGUsIHR5cGUgPSBhbnN3ZXIudHlwZSwgdmFsdWUgPSBhbnN3ZXIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdXNlcklkIHx8ICF0eXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlck1hcC5zZXQodXNlcklkLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgKGFuc3dlck1hcC5nZXQodXNlcklkKSA/IGFuc3dlck1hcC5nZXQodXNlcklkKSA6IHt9KSksIChfZCA9IHsgdXNlcklkOiB1c2VySWQsIGpvaW5lZEF0OiBqb2luZWRBdCB9LCBfZFtzY2hlbWFUeXBlICsgXCJBbnN3ZXJzXCJdID0gX19hc3NpZ24oX19hc3NpZ24oe30sIChhbnN3ZXJNYXAuZ2V0KHVzZXJJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gc2NoZW1hVHlwZSArIFwiQW5zd2Vyc1wiIGluIGFuc3dlck1hcC5nZXQodXNlcklkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYW5zd2VyTWFwLmdldCh1c2VySWQpWyhzY2hlbWFUeXBlICsgXCJBbnN3ZXJzXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDoge30pKSwgKF9lID0ge30sIF9lW3R5cGVdID0gdmFsdWUsIF9lKSksIF9kKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudHMgPSBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoYW5zd2VyTWFwLnZhbHVlcygpKSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlXzdfMSkgeyBlXzcgPSB7IGVycm9yOiBlXzdfMSB9OyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5zd2VyUm93c18xXzEgJiYgIWFuc3dlclJvd3NfMV8xLmRvbmUgJiYgKF9jID0gYW5zd2VyUm93c18xLnJldHVybikpIF9jLmNhbGwoYW5zd2VyUm93c18xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzcpIHRocm93IGVfNy5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWE6IHNjaGVtYU1hcC5nZXQoXCJwYXJ0aWNpcGF0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0Q29uZmlybVNjaGVtYTogc2NoZW1hTWFwLmdldChcInBvc3RcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50czogcGFydGljaXBhbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzUgPSBfZi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlXzUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZV81O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS5nZXRXaXNoQnlJZCA9IGZ1bmN0aW9uICh3aXNoSWQsIGlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgZ3JvdXBSb3dzLCB3aXNoUm93c18xLCByZXNfMSwgZXh0Q29sdW1ucywgZV84O1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHdpc2hJZC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwSWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRvcklkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblBhcnRpY2lwYW50czogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25MYWJlbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYTogeyB0eXBlOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RDb25maXJtU2NoZW1hOiB7IHR5cGU6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd246IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgNSwgLCA2XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc2cuaWQgRlJPTSBwdWJsaWMuc2hpdGFpX3dpc2ggYXMgc3cgSU5ORVIgSk9JTiBwdWJsaWMuc2hpdGFpX2dyb3VwIGFzIHNnIE9OIHN3LlxcXCJncm91cElkXFxcIiA9IHNnLmlkIElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cF9qb2luIGFzIHNqZyBPTiBzamcuXFxcImdyb3VwSWRcXFwiID0gc2cuaWQgQU5EIHNqZy5cXFwidXNlcklkXFxcIiA9ICQxIFdIRVJFIHN3LmlkID0gJDI7XCIsIFtpZCwgd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFJvd3MgPSAoX2Euc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5qip6ZmQ44GM44GC44KK44G+44Gb44KT44CC44Kw44Or44O844OX5aSW44Gu44Om44O844K244O844Gn44GZ44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBcIi5jb25jYXQodGhpcy5jb2x1bW5zLmpvaW4oXCIsXCIpLCBcIlxcbiAgICAgICAgRlJPTSBwdWJsaWMuc2hpdGFpX3dpc2ggV0hFUkUgaWQgPSAkMTtcIiksIFt3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpc2hSb3dzXzEgPSAoX2Euc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpc2hSb3dzXzEubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOBl+OBn+OBhOOBk+OBqOOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aXNoUm93c18xWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY3JlYXRlUmVzcG9uc2VEYXRhKHdpc2hJZC50b1N0cmluZygpKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc18xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0Q29sdW1ucyA9IHRoaXMuY29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2wgIT09ICdcInBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hVHlwZVwiJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgIT09ICdcInBvc3RDb25maXJtU2NoZW1hVHlwZVwiJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXh0Q29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlcENvbHVtbiA9IGNvbHVtbi5yZXBsYWNlQWxsKCdcIicsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcENvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gd2lzaFJvd3NfMVswXVtyZXBDb2x1bW5dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXNwb25zZSksIChfYSA9IHt9LCBfYVtyZXBDb2x1bW5dID0gdmFsdWUsIF9hKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicG9zdENvbmZpcm1TY2hlbWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhcnRpY2lwYW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXS5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc18xICYmIGNvbHVtbiBpbiByZXNfMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXNwb25zZSksIChfYSA9IHt9LCBfYVtjb2x1bW5dID0gcmVzXzFbY29sdW1uXSwgX2EpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfOCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfODtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUuaW5zZXJ0QW5zd2VyID0gZnVuY3Rpb24gKGFuc3dlciwgaWQsIHdpc2hJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGdyb3VwUm93cywgX2EsIF9iLCBrZXksIF9jLCBfZCwgc2NoZW1hLCByZXBLZXksIHZhbHVlLCBpbnNlcnRBbnN3ZXJSb3dzLCBlXzlfMSwgZV8xMF8xLCBlXzExO1xuICAgICAgICAgICAgdmFyIGVfMTAsIF9lLCBlXzksIF9mO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2cubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcInN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkJFR0lOXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2cuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2cubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZy50cnlzLnB1c2goWzIsIDE5LCAsIDIxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc2cuaWQgRlJPTSBwdWJsaWMuc2hpdGFpX3dpc2ggYXMgc3cgSU5ORVIgSk9JTiBwdWJsaWMuc2hpdGFpX2dyb3VwIGFzIHNnIE9OIHN3LlxcXCJncm91cElkXFxcIiA9IHNnLmlkIElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cF9qb2luIGFzIHNqZyBPTiBzamcuXFxcImdyb3VwSWRcXFwiID0gc2cuaWQgQU5EIHNqZy5cXFwidXNlcklkXFxcIiA9ICQxIFdIRVJFIHN3LmlkID0gJDI7XCIsIFtpZCwgd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFJvd3MgPSAoX2cuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5qip6ZmQ44GM44GC44KK44G+44Gb44KT44CC44Kw44Or44O844OX5aSW44Gu44Om44O844K244O844Gn44GZ44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9nLmxhYmVsID0gNDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2cudHJ5cy5wdXNoKFs0LCAxNSwgMTYsIDE3XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYSA9IF9fdmFsdWVzKE9iamVjdC5rZXlzKGFuc3dlcikpLCBfYiA9IF9hLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9nLmxhYmVsID0gNTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhX2IuZG9uZSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMTRdO1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gX2IudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZy5sYWJlbCA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9nLnRyeXMucHVzaChbNiwgMTEsIDEyLCAxM10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MgPSAoZV85ID0gdm9pZCAwLCBfX3ZhbHVlcyhPYmplY3Qua2V5cyhhbnN3ZXJba2V5XSkpKSwgX2QgPSBfYy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZy5sYWJlbCA9IDc7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIV9kLmRvbmUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYSA9IF9kLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVwS2V5ID0ga2V5LnJlcGxhY2UoXCJBbnN3ZXJzXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBhbnN3ZXJba2V5XVtzY2hlbWFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZSA9PSBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiSU5TRVJUIElOVE8gcHVibGljLnNoaXRhaV9hbnN3ZXIgKFxcXCJ1c2VySWRcXFwiLCBcXFwic2NoZW1hSWRcXFwiLCBcXFwidmFsdWVcXFwiKSBTRUxFQ1QgJDEsIHNzLmlkLCAkMiBGUk9NIHB1YmxpYy5zaGl0YWlfc2NoZW1hIGFzIHNzIFdIRVJFIHNzLlxcXCJzY2hlbWFUeXBlXFxcIiA9ICQzIEFORCBzcy5cXFwidHlwZVxcXCIgPSAkNCBBTkQgc3MuXFxcIndpc2hJZFxcXCIgPSAkNSBMSU1JVCAxIFJFVFVSTklORyBpZFwiLCBbaWQsIHZhbHVlLCByZXBLZXksIHNjaGVtYSwgd2lzaElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRBbnN3ZXJSb3dzID0gKF9nLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnNlcnRBbnN3ZXJSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgqLjg7PjgrXjg7zjga7nmbvpjLLjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2cubGFiZWwgPSA5O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZCA9IF9jLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOiByZXR1cm4gWzMgLypicmVhayovLCAxM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzlfMSA9IF9nLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfOSA9IHsgZXJyb3I6IGVfOV8xIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfZCAmJiAhX2QuZG9uZSAmJiAoX2YgPSBfYy5yZXR1cm4pKSBfZi5jYWxsKF9jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV85KSB0aHJvdyBlXzkuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IF9hLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE0OiByZXR1cm4gWzMgLypicmVhayovLCAxN107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEwXzEgPSBfZy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEwID0geyBlcnJvcjogZV8xMF8xIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxN107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfYiAmJiAhX2IuZG9uZSAmJiAoX2UgPSBfYS5yZXR1cm4pKSBfZS5jYWxsKF9hKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xMCkgdGhyb3cgZV8xMC5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNzogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQ09NTUlUXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9nLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDIxXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTEgPSBfZy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJST0xMQkFDS1wiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzExO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5lb25BcGkucHJvdG90eXBlLnVwZGF0ZVdpc2ggPSBmdW5jdGlvbiAod2lzaCwgaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBncm91cFJvd3MsIHdpc2hJZCwgdXBkYXRlV2lzaF8xLCBpbWFnZURhdGFfMSwgdXBkYXRlUm93cywgZV8xMjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJzdWNjZXNzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJCRUdJTlwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsyLCA3LCAsIDldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzZy5pZCBGUk9NIHB1YmxpYy5zaGl0YWlfd2lzaCBhcyBzdyBJTk5FUiBKT0lOIHB1YmxpYy5zaGl0YWlfZ3JvdXAgYXMgc2cgT04gc3cuXFxcImdyb3VwSWRcXFwiID0gc2cuaWQgSU5ORVIgSk9JTiBwdWJsaWMuc2hpdGFpX2dyb3VwX2pvaW4gYXMgc2pnIE9OIHNqZy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBBTkQgc2pnLlxcXCJ1c2VySWRcXFwiID0gJDEgV0hFUkUgc3cuaWQgPSAkMjtcIiwgW2lkLCB3aXNoLmlkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFJvd3MgPSAoX2Euc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5qip6ZmQ44GM44GC44KK44G+44Gb44KT44CC44Kw44Or44O844OX5aSW44Gu44Om44O844K244O844Gn44GZ44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpc2hJZCA9IHdpc2guaWQsIHVwZGF0ZVdpc2hfMSA9IF9fcmVzdCh3aXNoLCBbXCJpZFwiXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnVwbG9hZEltYWdlRGF0YSh1cGRhdGVXaXNoXzEuaW1hZ2VEYXRhIHx8IFwiXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCIsIGltYWdlRGF0YV8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlVQREFURSBwdWJsaWMuc2hpdGFpX3dpc2ggU0VUIFwiLmNvbmNhdChPYmplY3Qua2V5cyh1cGRhdGVXaXNoXzEpLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB1cGRhdGVXaXNoXzFbY3VycmVudF0gPT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIk5VTExcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjdXJyZW50ID09IFwiaW1hZ2VEYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGltYWdlRGF0YV8xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCInXCIgKyBpbWFnZURhdGFfMSArIFwiJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJOVUxMXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiJ1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlV2lzaF8xW2N1cnJlbnRdICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCInXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHIgPSBcIlxcXCJcIi5jb25jYXQoY3VycmVudCwgXCJcXFwiXCIpICsgXCIgPSBcIiArIFwiXCIuY29uY2F0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBzdHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldiAhPT0gXCJcIiA/IHByZXYgKyBcIiwgXCIgKyBzdHIgOiBzdHI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgXCJcIiksIFwiIFdIRVJFIGlkID0gJDEgUkVUVVJOSU5HIGlkO1wiKSwgW3dpc2guaWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJvd3MgPSAoX2Euc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZVJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOBl+OBn+OBhOOBk+OBqOOBruabtOaWsOOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJDT01NSVRcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA5XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xMiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlJPTExCQUNLXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZV8xMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5lb25BcGkucHJvdG90eXBlLmdldFdpc2hlcyA9IGZ1bmN0aW9uIChncm91cElkLCBpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGdyb3VwUm93cywgd2lzaFJvd3MsIF9sb29wXzEsIHRoaXNfMSwgd2lzaFJvd3NfMiwgd2lzaFJvd3NfMl8xLCB3aXNoLCBlXzEzXzEsIGVfMTQ7XG4gICAgICAgICAgICB2YXIgZV8xMywgX2E7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzEsIDEyLCAsIDEzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc2cuaWQgRlJPTSBwdWJsaWMuc2hpdGFpX2dyb3VwIGFzIHNnIElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cF9qb2luIGFzIHNqZyBPTiBzamcuXFxcImdyb3VwSWRcXFwiID0gc2cuaWQgQU5EIHNqZy5cXFwidXNlcklkXFxcIiA9ICQxIFdIRVJFIHNnLlxcXCJpZFxcXCIgPSAkMjtcIiwgW2lkLCBncm91cElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFJvd3MgPSAoX2Iuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5qip6ZmQ44GM44GC44KK44G+44Gb44KT44CC44Kw44Or44O844OX5aSW44Gu44Om44O844K244O844Gn44GZ44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBpZCwgXCIuY29uY2F0KHRoaXMuY29sdW1ucy5qb2luKFwiLFwiKSwgXCJcXG4gICAgICAgIEZST00gcHVibGljLnNoaXRhaV93aXNoIFdIRVJFIFxcXCJncm91cElkXFxcIiA9ICQxIE9SREVSIEJZIGlkIEFTQztcIiksIFtncm91cElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICB3aXNoUm93cyA9IChfYi5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2lzaFJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOBl+OBn+OBhOOBk+OBqOOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfbG9vcF8xID0gZnVuY3Rpb24gKHdpc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzV2lzaCwgcmVzLCBleHRDb2x1bW5zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfYy5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc1dpc2ggPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB3aXNoLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cElkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdG9ySWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluUGFydGljaXBhbnRzOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25MYWJlbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWE6IHsgdHlwZTogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdENvbmZpcm1TY2hlbWE6IHsgdHlwZTogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXduOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2lzaFtcImlkXCJdLCB3aXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzXzEuY3JlYXRlUmVzcG9uc2VEYXRhKHdpc2guaWQpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0Q29sdW1ucyA9IHRoaXNfMS5jb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2wgIT09ICdcInBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hVHlwZVwiJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sICE9PSAnXCJwb3N0Q29uZmlybVNjaGVtYVR5cGVcIic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0Q29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVwQ29sdW1uID0gY29sdW1uLnJlcGxhY2VBbGwoJ1wiJywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcENvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHdpc2hbcmVwQ29sdW1uXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNXaXNoID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlc1dpc2gpLCAoX2EgPSB7fSwgX2FbcmVwQ29sdW1uXSA9IHZhbHVlLCBfYSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicG9zdENvbmZpcm1TY2hlbWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXJ0aWNpcGFudHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgY29sdW1uIGluIHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzV2lzaCA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXNXaXNoKSwgKF9hID0ge30sIF9hW2NvbHVtbl0gPSByZXNbY29sdW1uXSwgX2EpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnB1c2gocmVzV2lzaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc18xID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFs0LCA5LCAxMCwgMTFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpc2hSb3dzXzIgPSBfX3ZhbHVlcyh3aXNoUm93cyksIHdpc2hSb3dzXzJfMSA9IHdpc2hSb3dzXzIubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA1O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISF3aXNoUm93c18yXzEuZG9uZSkgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XG4gICAgICAgICAgICAgICAgICAgICAgICB3aXNoID0gd2lzaFJvd3NfMl8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs1IC8qeWllbGQqKi8sIF9sb29wXzEod2lzaCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDc7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpc2hSb3dzXzJfMSA9IHdpc2hSb3dzXzIubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODogcmV0dXJuIFszIC8qYnJlYWsqLywgMTFdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEzXzEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEzID0geyBlcnJvcjogZV8xM18xIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxMV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aXNoUm93c18yXzEgJiYgIXdpc2hSb3dzXzJfMS5kb25lICYmIChfYSA9IHdpc2hSb3dzXzIucmV0dXJuKSkgX2EuY2FsbCh3aXNoUm93c18yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xMykgdGhyb3cgZV8xMy5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTQgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzE0O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUuZ2V0R3JvdXBzID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgam9pbkdyb3VwUm93cywgam9pbkdyb3VwUm93c18xLCBqb2luR3JvdXBSb3dzXzFfMSwgZ3JvdXAsIGdyb3VwT2JqLCBqb2luTWVtYmVyUm93cywgZV8xNV8xLCBlXzE2O1xuICAgICAgICAgICAgdmFyIGVfMTUsIF9hO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFsxLCAxMSwgLCAxMl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHNnLmlkLCBzZy5cXFwiZ3JvdXBOYW1lXFxcIlxcbiAgICAgICAgRlJPTSBwdWJsaWMuc2hpdGFpX2dyb3VwX2pvaW4gYXMgc2dqIElOTkVSIEpPSU4gc2hpdGFpX2dyb3VwIGFzIHNnIE9OIHNnLmlkID0gc2dqLlxcXCJncm91cElkXFxcIiBXSEVSRSBzZ2ouXFxcInVzZXJJZFxcXCIgPSAkMSBPUkRFUiBCWSBzZy5pZCBBU0M7XCIsIFtpZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgam9pbkdyb3VwUm93cyA9IChfYi5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoam9pbkdyb3VwUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5Y+C5Yqg44Kw44Or44O844OX44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFszLCA4LCA5LCAxMF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgam9pbkdyb3VwUm93c18xID0gX192YWx1ZXMoam9pbkdyb3VwUm93cyksIGpvaW5Hcm91cFJvd3NfMV8xID0gam9pbkdyb3VwUm93c18xLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNDtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEham9pbkdyb3VwUm93c18xXzEuZG9uZSkgcmV0dXJuIFszIC8qYnJlYWsqLywgN107XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cCA9IGpvaW5Hcm91cFJvd3NfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBPYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGdyb3VwW1wiaWRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZ3JvdXBbXCJncm91cE5hbWVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVtYmVyczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIERJU1RJTkNUIHN1aS5pZCwgc3VpLnVzZXJfbmFtZSwgc3VpLnVzZXJfaWRcXG4gICAgICAgIEZST00gcHVibGljLnNoaXRhaV9ncm91cF9qb2luIGFzIHNnaiBJTk5FUiBKT0lOIHNoaXRhaV91c2VyX2luZm8gYXMgc3VpIE9OIHN1aS5pZCA9IHNnai5cXFwidXNlcklkXFxcIiBXSEVSRSBzZ2ouXFxcImdyb3VwSWRcXFwiID0gJDE7XCIsIFtncm91cFtcImlkXCJdXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luTWVtYmVyUm93cyA9IChfYi5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoam9pbk1lbWJlclJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuODoeODs+ODkOODvOaDheWgseOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cE9iai5tZW1iZXJzID0gam9pbk1lbWJlclJvd3MubWFwKGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbWVtYmVyW1wiaWRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG1lbWJlcltcInVzZXJfbmFtZVwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IG1lbWJlcltcInVzZXJfaWRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucHVzaChncm91cE9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5Hcm91cFJvd3NfMV8xID0gam9pbkdyb3VwUm93c18xLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6IHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xNV8xID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZV8xNSA9IHsgZXJyb3I6IGVfMTVfMSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgMTBdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqb2luR3JvdXBSb3dzXzFfMSAmJiAham9pbkdyb3VwUm93c18xXzEuZG9uZSAmJiAoX2EgPSBqb2luR3JvdXBSb3dzXzEucmV0dXJuKSkgX2EuY2FsbChqb2luR3JvdXBSb3dzXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzE1KSB0aHJvdyBlXzE1LmVycm9yOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xNiA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfMTY7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS5pbnNlcnRHcm91cCA9IGZ1bmN0aW9uIChpZCwgZ3JvdXApIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBpbnNlcnRSb3dzLCBpbnNlcnRKb2luUm93cywgZV8xNztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0geyBpZDogXCJcIiB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQkVHSU5cIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMiwgNiwgLCA4XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJJTlNFUlQgSU5UTyBzaGl0YWlfZ3JvdXAgKFxcXCJncm91cE5hbWVcXFwiKVxcbiAgICAgICAgICBWQUxVRVMoJDEpIFJFVFVSTklORyBpZDtcIiwgW2dyb3VwLm5hbWVdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFJvd3MgPSAoX2Euc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc2VydFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOCsOODq+ODvOODl+eZu+mMsuOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJJTlNFUlQgSU5UTyBzaGl0YWlfZ3JvdXBfam9pbiAoXFxcImdyb3VwSWRcXFwiLCBcXFwidXNlcklkXFxcIilcXG4gICAgICAgICAgVkFMVUVTKCQxLCAkMikgUkVUVVJOSU5HIGlkO1wiLCBbaW5zZXJ0Um93c1swXVtcImlkXCJdLCBpZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0Sm9pblJvd3MgPSAoX2Euc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc2VydEpvaW5Sb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgrDjg6vjg7zjg5flj4LliqDnmbvpjLLjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQ09NTUlUXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuaWQgPSBpbnNlcnRSb3dzWzBdW1wiaWRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xNyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlJPTExCQUNLXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZV8xNztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5lb25BcGkucHJvdG90eXBlLmludml0YXRpb25Hcm91cCA9IGZ1bmN0aW9uIChpZF8xLCBfYSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiAoaWQsIF9iKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIHVzZXJSb3dzLCBncm91cFJvd3MsIGluc2VydFJvd3MsIGVfMTg7XG4gICAgICAgICAgICB2YXIgaW52aXRhdGlvblVzZXJJZCA9IF9iLmludml0YXRpb25Vc2VySWQsIGdyb3VwSWQgPSBfYi5ncm91cElkO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcInN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkJFR0lOXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy50cnlzLnB1c2goWzIsIDcsICwgOV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIGlkIEZST00gc2hpdGFpX3VzZXJfaW5mbyBXSEVSRSB1c2VyX2lkID0gJDFcIiwgW2ludml0YXRpb25Vc2VySWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJSb3dzID0gKF9jLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VyUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44Om44O844K244O85oOF5aCx5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBpZCBGUk9NIHNoaXRhaV9ncm91cF9qb2luIFdIRVJFIFxcXCJ1c2VySWRcXFwiID0gJDEgQU5EIFxcXCJncm91cElkXFxcIiA9ICQyXCIsIFt1c2VyUm93c1swXVtcImlkXCJdLCBncm91cElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFJvd3MgPSAoX2Muc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwUm93cy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44GZ44Gn44Gr5Y+C5Yqg44GX44Gm44GE44KL44Kw44Or44O844OX44Gn44GZ44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIklOU0VSVCBJTlRPIHNoaXRhaV9ncm91cF9qb2luIChcXFwiZ3JvdXBJZFxcXCIsIFxcXCJ1c2VySWRcXFwiKSBWQUxVRVMgKCQxLCAkMikgUkVUVVJOSU5HIGlkO1wiLCBbZ3JvdXBJZCwgdXNlclJvd3NbMF1bXCJpZFwiXV0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0Um93cyA9IChfYy5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0Um93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44Kw44Or44O844OX44K444On44Kk44Oz55m76Yyy44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkNPTU1JVFwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzE4ID0gX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiUk9MTEJBQ0tcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzE4O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6IHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUuam9pbldpc2ggPSBmdW5jdGlvbiAoaWRfMSwgX2EpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24gKGlkLCBfYikge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBncm91cFJvd3MsIHdpc2hSb3dzLCBqb2luV2lzaFJvd3MsIGVfMTk7XG4gICAgICAgICAgICB2YXIgd2lzaElkID0gX2Iud2lzaElkO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2MubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcInN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkJFR0lOXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy50cnlzLnB1c2goWzIsIDcsICwgOV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHNnLmlkIEZST00gcHVibGljLnNoaXRhaV93aXNoIGFzIHN3IElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cCBhcyBzZyBPTiBzdy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBJTk5FUiBKT0lOIHB1YmxpYy5zaGl0YWlfZ3JvdXBfam9pbiBhcyBzamcgT04gc2pnLlxcXCJncm91cElkXFxcIiA9IHNnLmlkIEFORCBzamcuXFxcInVzZXJJZFxcXCIgPSAkMSBXSEVSRSBzdy5pZCA9ICQyO1wiLCBbaWQsIHdpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBSb3dzID0gKF9jLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncm91cFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuaoqemZkOOBjOOBguOCiuOBvuOBm+OCk+OAguOCsOODq+ODvOODl+WkluOBruODpuODvOOCtuODvOOBp+OBmeOAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1QgaWQgRlJPTSBzaGl0YWlfam9pbiBXSEVSRSBcXFwidXNlcklkXFxcIiA9ICQxIEFORCBcXFwid2lzaElkXFxcIiA9ICQyO1wiLCBbaWQsIHdpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lzaFJvd3MgPSAoX2Muc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpc2hSb3dzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgZnjgafjgavjgZfjgZ/jgYTjgZPjgajjgavlj4LliqDmuIjjgb/jgafjgZnjgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiSU5TRVJUIElOVE8gc2hpdGFpX2pvaW4gKFxcXCJ1c2VySWRcXFwiLCBcXFwiam9pbmVkQXRcXFwiLCBcXFwid2lzaElkXFxcIikgVkFMVUVTICgkMSwgTk9XKCksICQyKSBSRVRVUk5JTkcgaWRcIiwgW2lkLCB3aXNoSWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5XaXNoUm93cyA9IChfYy5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoam9pbldpc2hSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgZfjgZ/jgYTjgZPjgajlj4LliqDnmbvpjLLjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQ09NTUlUXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Muc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTkgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJST0xMQkFDS1wiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfMTk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTmVvbkFwaTtcbn0oKSk7XG5leHBvcnQgeyBOZW9uQXBpIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZ29vZ2xlLWNsb3VkL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZyA9IE9iamVjdC5jcmVhdGUoKHR5cGVvZiBJdGVyYXRvciA9PT0gXCJmdW5jdGlvblwiID8gSXRlcmF0b3IgOiBPYmplY3QpLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIGcubmV4dCA9IHZlcmIoMCksIGdbXCJ0aHJvd1wiXSA9IHZlcmIoMSksIGdbXCJyZXR1cm5cIl0gPSB2ZXJiKDIpLCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb3JzIGZyb20gXCJjb3JzXCI7XG5pbXBvcnQgeyBOZW9uQXBpIH0gZnJvbSBcIi4vTmVvbkFwaVwiO1xucmVxdWlyZShcImRvdGVudlwiKS5jb25maWcoKTtcbnZhciBhcHAgPSBleHByZXNzKCk7XG52YXIgbmVvbkFwaSA9IG5ldyBOZW9uQXBpKCk7XG4vLyBDT1JT44Gu6Kit5a6aXG52YXIgY29yc09wdGlvbnMgPSB7XG4gICAgb3JpZ2luOiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfRlJPTlRFTkRfVVJMLCAvLyDjg5Xjg63jg7Pjg4jjgqjjg7Pjg4njga5VUkzjgpLnkrDlooPlpInmlbDjgYvjgonlj5blvpdcbiAgICBtZXRob2Q6IFtdLFxufTtcbi8vIOOCouOCr+OCu+OCueODiOODvOOCr+ODs+iqjeiovCjjg6njg4Pjg5Hjg7zplqLmlbApXG52YXIgaW5pdEFjY2Vzc1Rva2VuQXV0aCA9IGZ1bmN0aW9uICh1c2VySW5mbykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzdWx0LCBpc0V4cGlyZWQsIGlzU3VjY2VzcztcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5hY2Nlc3NUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICBpc0V4cGlyZWQgPSB0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiICYmIHJlc3VsdCA9PT0gXCJleHBpcmVkIGFjY2VzcyB0b2tlblwiO1xuICAgICAgICAgICAgICAgIGlzU3VjY2VzcyA9IHR5cGVvZiByZXN1bHQgIT09IFwic3RyaW5nXCIgJiYgTnVtYmVyKHJlc3VsdC5pZCkgPiAwICYmICFpc0V4cGlyZWQ7XG4gICAgICAgICAgICAgICAgaWYgKGlzRXhwaXJlZClcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgeyBtZXNzYWdlOiBcIuOCouOCr+OCu+OCueODiOODvOOCr+ODs+OBjOacieWKueacn+mZkOWIh+OCjOOBp+OBmeOAglwiIH07XG4gICAgICAgICAgICAgICAgaWYgKCFpc1N1Y2Nlc3MpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IHsgbWVzc2FnZTogXCLjgqLjgq/jgrvjgrnjg4jjg7zjgq/jg7Pjga7oqo3oqLzjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIiB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXN1bHRdO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfTtcbi8vIENPUlPoqK3lrprjgahKU09O44OR44O844K144O844KS44Of44OJ44Or44Km44Kn44Ki44Go44GX44Gm6YGp55SoXG5hcHAudXNlKGNvcnMoY29yc09wdGlvbnMpKTtcbmFwcC51c2UoZXhwcmVzcy5qc29uKHsgbGltaXQ6IFwiMTBtYlwiIH0pKTtcbi8vIOODreOCsOOCpOODs+iqjeiovOOCkuihjOOBhijmiJDlip/mmYLjgqLjgq/jgrvjgrnjg4jjg7zjgq/jg7PjgpLov5TljbTjgZnjgospXG5hcHAucG9zdChcIi9hcGkvdjEvYXV0aC9sb2dpblwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCwgZXJyb3JfMTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5lb25BcGkubG9naW5BdXRoKHJlcS5ib2R5KV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl8xLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL2F1dGgvYWNjZXNzVG9rZW5cIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB1c2VySW5mbywgX2EsIGlkLCBuYW1lXzEsIGVtYWlsLCBlcnJvcl8yO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgdXNlckluZm8gPSByZXEuYm9keS51c2VySW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgX2EgPSBfYi5zZW50KCksIGlkID0gX2EuaWQsIG5hbWVfMSA9IF9hLm5hbWUsIGVtYWlsID0gX2EuZW1haWw7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogeyBpZDogTnVtYmVyKGlkKSwgbmFtZTogbmFtZV8xLCBlbWFpbDogZW1haWwgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgZXJyb3JfMiA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl8yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL2F1dGgvcmVmcmVzaFRva2VuXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdXNlckluZm8sIHJlc3BvbnNlXzEsIGVycm9yXzM7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcbiAgICAgICAgICAgICAgICB1c2VySW5mbyA9IHJlcS5ib2R5LnVzZXJJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5lb25BcGkucmVmcmVzaFRva2VuQXV0aCh1c2VySW5mbyldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlXzEgIT09IFwiZXJyb3JcIikge1xuICAgICAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IF9fYXNzaWduKHt9LCByZXNwb25zZV8xKSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBlcnJvcl8zID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzMubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvcG9zdC9pbnNlcnRVc2VySW5mb1wiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVwZGF0ZU9iaiwgcmVzdWx0LCBlcnJvcl80O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlT2JqID0gcmVxLmJvZHk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5pbnNlcnRVc2VySW5mbyh1cGRhdGVPYmopXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBlcnJvcl80ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzQubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvcG9zdC9pbnNlcnRXaXNoXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIHVzZXJJbmZvLCBsZWZ0LCB1c2VySWQsIHJlc3VsdCwgZXJyb3JfNTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIF9hID0gcmVxLmJvZHksIHVzZXJJbmZvID0gX2EudXNlckluZm8sIGxlZnQgPSBfX3Jlc3QoX2EsIFtcInVzZXJJbmZvXCJdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9iLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5pbnNlcnRXaXNoKGxlZnQsIE51bWJlcih1c2VySWQpKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfNSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl81Lm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL2dldC93aXNoQnlJZFwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCB1c2VySW5mbywgaWQsIHVzZXJJZCwgcmVzdWx0LCBlcnJvcl82O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgX2EgPSByZXEuYm9keSwgdXNlckluZm8gPSBfYS51c2VySW5mbywgaWQgPSBfYS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9iLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5nZXRXaXNoQnlJZChOdW1iZXIoaWQpLCBOdW1iZXIodXNlcklkKSldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiB7IHdpc2g6IHJlc3VsdCB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlcnJvcl82ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzYubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvcG9zdC9pbnNlcnRBbnN3ZXJcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSwgdXNlckluZm8sIGlkLCBsZWZ0LCB1c2VySWQsIHJlc3VsdCwgZXJyb3JfNztcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIF9hID0gcmVxLmJvZHksIHVzZXJJbmZvID0gX2EudXNlckluZm8sIGlkID0gX2EuaWQsIGxlZnQgPSBfX3Jlc3QoX2EsIFtcInVzZXJJbmZvXCIsIFwiaWRcIl0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRBY2Nlc3NUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB1c2VySWQgPSAoX2Iuc2VudCgpKS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLmluc2VydEFuc3dlcihsZWZ0LCBOdW1iZXIodXNlcklkKSwgTnVtYmVyKGlkKSldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVycm9yXzcgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfNy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmFwcC5wb3N0KFwiL2FwaS92MS9wb3N0L3VwZGF0ZVdpc2hcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSwgdXNlckluZm8sIGxlZnQsIHVzZXJJZCwgcmVzdWx0LCBlcnJvcl84O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgX2EgPSByZXEuYm9keSwgdXNlckluZm8gPSBfYS51c2VySW5mbywgbGVmdCA9IF9fcmVzdChfYSwgW1widXNlckluZm9cIl0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRBY2Nlc3NUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB1c2VySWQgPSAoX2Iuc2VudCgpKS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLnVwZGF0ZVdpc2gobGVmdCwgTnVtYmVyKHVzZXJJZCkpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlcnJvcl84ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzgubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvZ2V0L3dpc2hlc1wiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCB1c2VySW5mbywgaWQsIHVzZXJJZCwgcmVzdWx0LCBlcnJvcl85O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgX2EgPSByZXEuYm9keSwgdXNlckluZm8gPSBfYS51c2VySW5mbywgaWQgPSBfYS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9iLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5nZXRXaXNoZXMoTnVtYmVyKGlkKSwgTnVtYmVyKHVzZXJJZCkpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogeyB3aXNoZXM6IHJlc3VsdCB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlcnJvcl85ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzkubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvZ2V0L2dyb3Vwc1wiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVzZXJJbmZvLCB1c2VySWQsIHJlc3VsdCwgZXJyb3JfMTA7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICB1c2VySW5mbyA9IHJlcS5ib2R5LnVzZXJJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRBY2Nlc3NUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB1c2VySWQgPSAoX2Euc2VudCgpKS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLmdldEdyb3VwcyhOdW1iZXIodXNlcklkKSldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiB7IGdyb3VwczogcmVzdWx0IH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVycm9yXzEwID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzEwLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL3Bvc3QvaW5zZXJ0R3JvdXBcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSwgdXNlckluZm8sIGxlZnQsIHVzZXJJZCwgcmVzdWx0LCBlcnJvcl8xMTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIF9hID0gcmVxLmJvZHksIHVzZXJJbmZvID0gX2EudXNlckluZm8sIGxlZnQgPSBfX3Jlc3QoX2EsIFtcInVzZXJJbmZvXCJdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9iLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5pbnNlcnRHcm91cChOdW1iZXIodXNlcklkKSwgbGVmdCldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGVycm9yXzExID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzExLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL3Bvc3QvaW52aXRhdGlvbkdyb3VwXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIHVzZXJJbmZvLCBsZWZ0LCB1c2VySWQsIHJlc3VsdCwgZXJyb3JfMTI7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICBfYSA9IHJlcS5ib2R5LCB1c2VySW5mbyA9IF9hLnVzZXJJbmZvLCBsZWZ0ID0gX19yZXN0KF9hLCBbXCJ1c2VySW5mb1wiXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW5pdEFjY2Vzc1Rva2VuQXV0aCh1c2VySW5mbyldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHVzZXJJZCA9IChfYi5zZW50KCkpLmlkO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5lb25BcGkuaW52aXRhdGlvbkdyb3VwKE51bWJlcih1c2VySWQpLCBsZWZ0KV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfMTIgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfMTIubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvcG9zdC9qb2luV2lzaFwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCB1c2VySW5mbywgbGVmdCwgdXNlcklkLCByZXN1bHQsIGVycm9yXzEzO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgX2EgPSByZXEuYm9keSwgdXNlckluZm8gPSBfYS51c2VySW5mbywgbGVmdCA9IF9fcmVzdChfYSwgW1widXNlckluZm9cIl0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRBY2Nlc3NUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB1c2VySWQgPSAoX2Iuc2VudCgpKS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLmpvaW5XaXNoKE51bWJlcih1c2VySWQpLCBsZWZ0KV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfMTMgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfMTMubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAubGlzdGVuKDQyMDAsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcInBvcnQgXCIuY29uY2F0KDQyMDAsIFwiIFxcdTMwNjdcXHUzMEI1XFx1MzBGQ1xcdTMwRDBcXHUzMEZDXFx1OEQ3N1xcdTUyRDVcXHU0RTJEXCIpKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9