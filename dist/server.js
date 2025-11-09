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
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
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
        ];
    }
    NeonApi.prototype.createTokens = function (id) {
        var response = { accessToken: "", refreshToken: "" };
        // アクセストークン作成
        var randomStr = (0,crypto__WEBPACK_IMPORTED_MODULE_1__.randomBytes)(16).toString("hex");
        // 「ランダム文字列(16バイト) + リクエスト.ユーザーID(ソルト値)」でハッシュ値を作成
        var saltedRandomStr = randomStr + this.salt;
        var accessToken = (0,crypto__WEBPACK_IMPORTED_MODULE_1__.createHash)("sha256")
            .update(saltedRandomStr)
            .digest("hex");
        // リフレッシュトークン作成
        randomStr = (0,crypto__WEBPACK_IMPORTED_MODULE_1__.randomBytes)(16).toString("hex");
        // 「ランダム文字列(16バイト) + リクエスト.ユーザーID(ソルト値)」でハッシュ値を作成
        saltedRandomStr = randomStr + this.salt;
        var refreshToken = (0,crypto__WEBPACK_IMPORTED_MODULE_1__.createHash)("sha256")
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
        response.accessToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__.sign(defaultPeyload, this.salt || "", this.config);
        response.refreshToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__.sign(refreshPeyload, this.salt || "", __assign(__assign({}, this.config), { expiresIn: "72H" }));
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
                        hashPassword = (0,crypto__WEBPACK_IMPORTED_MODULE_1__.createHash)("sha256")
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
                            obj = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__.verify(accessToken, this.salt || "");
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
                        _c = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__.verify(refreshToken, this.salt || ""), id = _c.id, decodedRefreshToken = _c.refreshToken;
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
                        hashPassword = (0,crypto__WEBPACK_IMPORTED_MODULE_1__.createHash)("sha256")
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
            var response, participationConfirmSchema, postConfirmSchema, leftWish, groupRows, insertWishRows, createInsertSchema, _a, _b, schema, insertRows, e_3_1, e_4;
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
                        _d.trys.push([2, 14, , 16]);
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
                        return [4 /*yield*/, this.pool.query("INSERT INTO public.shitai_wish (".concat(this.columns.join(","), ") \n        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, NOW(), $14, $15) RETURNING id;"), [
                                leftWish.groupId,
                                leftWish.creatorId,
                                leftWish.category,
                                leftWish.imageData,
                                leftWish.title,
                                leftWish.displayDate,
                                leftWish.displayText,
                                leftWish.notes,
                                leftWish.deadline,
                                leftWish.minParticipants,
                                leftWish.maxParticipants,
                                leftWish.actionLabel,
                                false,
                                participationConfirmSchema.type,
                                postConfirmSchema.type,
                            ])];
                    case 4:
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
                        _d.label = 5;
                    case 5:
                        _d.trys.push([5, 10, 11, 12]);
                        _a = __values(__spreadArray(__spreadArray([], __read(createInsertSchema(participationConfirmSchema, "participation")), false), __read(createInsertSchema(postConfirmSchema, "post")), false)), _b = _a.next();
                        _d.label = 6;
                    case 6:
                        if (!!_b.done) return [3 /*break*/, 9];
                        schema = _b.value;
                        return [4 /*yield*/, this.pool.query("INSERT INTO \"public\".\"shitai_schema\" (\"wishId\", \"schemaType\", \"type\", \"required\", \"label\")\n          VALUES($1, $2, $3, $4, $5) RETURNING id;", [
                                insertWishRows[0]["id"],
                                schema.schemaType,
                                schema.type,
                                schema.required,
                                schema.label,
                            ])];
                    case 7:
                        insertRows = (_d.sent()).rows;
                        if (insertRows.length === 0) {
                            throw {
                                message: "確認項目の登録に失敗しました。",
                            };
                        }
                        _d.label = 8;
                    case 8:
                        _b = _a.next();
                        return [3 /*break*/, 6];
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        e_3_1 = _d.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 12];
                    case 11:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 12:
                        response.id = insertWishRows[0]["id"];
                        return [4 /*yield*/, this.pool.query("COMMIT")];
                    case 13:
                        _d.sent();
                        return [3 /*break*/, 16];
                    case 14:
                        e_4 = _d.sent();
                        return [4 /*yield*/, this.pool.query("ROLLBACK")];
                    case 15:
                        _d.sent();
                        throw e_4;
                    case 16: return [2 /*return*/, response];
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
                        return [4 /*yield*/, this.pool.query("SELECT sj.\"joinedAt\", sa.\"userId\", ss.\"schemaType\", ss.type, sa.value\n        FROM shitai_join as sj LEFT JOIN shitai_schema as ss ON ss.\"wishId\" = $1 LEFT JOIN public.shitai_answer as sa ON sa.\"schemaId\" = ss.id AND ss.\"wishId\" = $1 WHERE sj.\"wishId\" = $1 ORDER BY sj.\"joinedAt\" ASC;", [wishId])];
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
    NeonApi.prototype.getWishById = function (wish, id) {
        return __awaiter(this, void 0, void 0, function () {
            var response, groupRows, wishRows_1, res_1, extColumns, e_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = {
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
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.pool.query("SELECT sg.id FROM public.shitai_wish as sw INNER JOIN public.shitai_group as sg ON sw.\"groupId\" = sg.id INNER JOIN public.shitai_group_join as sjg ON sjg.\"groupId\" = sg.id AND sjg.\"userId\" = $1 WHERE sw.id = $2;", [id, wish.id])];
                    case 2:
                        groupRows = (_a.sent()).rows;
                        console.log(id, wish.id, wish);
                        if (groupRows.length !== 1) {
                            throw {
                                message: "権限がありません。グループ外のユーザーです。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("SELECT ".concat(this.columns.join(","), "\n        FROM public.shitai_wish WHERE id = $1;"), [wish.id])];
                    case 3:
                        wishRows_1 = (_a.sent()).rows;
                        if (wishRows_1.length !== 1) {
                            throw {
                                message: "したいことの取得に失敗しました。",
                            };
                        }
                        console.log(wishRows_1[0]);
                        return [4 /*yield*/, this.createResponseData(wish.id)];
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
            var response, groupRows, _a, _b, key, _c, _d, schema, repKey, insertAnswerRows, e_9_1, e_10_1, e_11;
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
                        console.log([
                            id,
                            answer[key][schema],
                            repKey,
                            schema,
                            wishId,
                        ]);
                        return [4 /*yield*/, this.pool.query("INSERT INTO public.shitai_answer (\"userId\", \"schemaId\", \"value\") SELECT $1, ss.id, $2 FROM public.shitai_schema as ss WHERE ss.\"schemaType\" = $3 AND ss.\"type\" = $4 AND ss.\"wishId\" = $5 LIMIT 1 RETURNING id", [
                                id,
                                answer[key][schema],
                                repKey,
                                schema,
                                wishId,
                            ])];
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
            var response, groupRows, wishId, updateWish_1, updateRows, e_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        response = "success";
                        return [4 /*yield*/, this.pool.query("BEGIN")];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 6, , 8]);
                        return [4 /*yield*/, this.pool.query("SELECT sg.id FROM public.shitai_wish as sw INNER JOIN public.shitai_group as sg ON sw.\"groupId\" = sg.id INNER JOIN public.shitai_group_join as sjg ON sjg.\"groupId\" = sg.id AND sjg.\"userId\" = $1 WHERE sw.id = $2;", [id, wish.id])];
                    case 3:
                        groupRows = (_a.sent()).rows;
                        if (groupRows.length !== 1) {
                            throw {
                                message: "権限がありません。グループ外のユーザーです。",
                            };
                        }
                        wishId = wish.id, updateWish_1 = __rest(wish, ["id"]);
                        console.log("UPDATE public.shitai_wish SET ".concat(Object.keys(updateWish_1).reduce(function (prev, current) {
                            var str = "\"".concat(current, "\"") +
                                " = " +
                                "'".concat(updateWish_1[current], "'");
                            return prev !== "" ? prev + ", " + str : str;
                        }, ""), " WHERE id = $1 RETURNING id;"));
                        return [4 /*yield*/, this.pool.query("UPDATE public.shitai_wish SET ".concat(Object.keys(updateWish_1).reduce(function (prev, current) {
                                var str = "\"".concat(current, "\"") +
                                    " = " +
                                    "'".concat(updateWish_1[current], "'");
                                return prev !== "" ? prev + ", " + str : str;
                            }, ""), " WHERE id = $1 RETURNING id;"), [wish.id])];
                    case 4:
                        updateRows = (_a.sent()).rows;
                        if (updateRows.length === 0) {
                            throw {
                                message: "したいことの更新に失敗しました。",
                            };
                        }
                        return [4 /*yield*/, this.pool.query("COMMIT")];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 6:
                        e_12 = _a.sent();
                        return [4 /*yield*/, this.pool.query("ROLLBACK")];
                    case 7:
                        _a.sent();
                        throw e_12;
                    case 8: return [2 /*return*/, response];
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
                        return [4 /*yield*/, this.pool.query("SELECT id, ".concat(this.columns.join(","), "\n        FROM public.shitai_wish ORDER BY id ASC;"), [])];
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
                        return [4 /*yield*/, this.pool.query("SELECT sg.id, sg.\"groupName\"\n        FROM public.shitai_group_join as sgj INNER JOIN shitai_group as sg ON sg.id = sgj.\"groupId\" WHERE sgj.\"userId\" = $1;", [id])];
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
    return NeonApi;
}());



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
app.post("/api/v1/post/insertUser", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
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
    var _a, userInfo, wish, userId, result, error_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, userInfo = _a.userInfo, wish = _a.wish;
                return [4 /*yield*/, initAccessTokenAuth(userInfo)];
            case 1:
                userId = (_b.sent()).id;
                return [4 /*yield*/, neonApi.getWishById(wish, Number(userId))];
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
    var _a, userInfo, left, userId, result, error_7;
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
app.listen(4200, function () {
    console.log("port ".concat(4200, " \u3067\u30B5\u30FC\u30D0\u30FC\u8D77\u52D5\u4E2D"));
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQzVDLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSUFBSTtBQUNMLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSUFBSTtBQUNMLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSUFBSTtBQUNMLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsZ0JBQWdCO0FBQzlDLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSUFBSTtBQUNMLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsZ0JBQWdCO0FBQzlDLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsSUFBSTtBQUNMO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvLi9zcmMvYmFja2VuZC9OZW9uQXBpLnRzIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwiY29yc1wiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwiY3J5cHRvXCIiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvZXh0ZXJuYWwgY29tbW9uanMgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC9leHRlcm5hbCBjb21tb25qcyBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC9leHRlcm5hbCBjb21tb25qcyBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkL2V4dGVybmFsIGNvbW1vbmpzIFwicGdcIiIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVidC1kYXNoYm9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZWJ0LWRhc2hib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RlYnQtZGFzaGJvYXJkLy4vc3JjL2JhY2tlbmQvc2VydmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZyA9IE9iamVjdC5jcmVhdGUoKHR5cGVvZiBJdGVyYXRvciA9PT0gXCJmdW5jdGlvblwiID8gSXRlcmF0b3IgOiBPYmplY3QpLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIGcubmV4dCA9IHZlcmIoMCksIGdbXCJ0aHJvd1wiXSA9IHZlcmIoMSksIGdbXCJyZXR1cm5cIl0gPSB2ZXJiKDIpLCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xudmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgICBpZiAoIW0pIHJldHVybiBvO1xuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICAgIHRyeSB7XG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gYXI7XG59O1xudmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSwgcGFjaykge1xuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59O1xudmFyIF9fdmFsdWVzID0gKHRoaXMgJiYgdGhpcy5fX3ZhbHVlcykgfHwgZnVuY3Rpb24obykge1xuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XG59O1xuaW1wb3J0IHsgUG9vbCB9IGZyb20gXCJwZ1wiO1xuaW1wb3J0IHsgY3JlYXRlSGFzaCwgcmFuZG9tQnl0ZXMgfSBmcm9tIFwiY3J5cHRvXCI7XG5pbXBvcnQgKiBhcyBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xucmVxdWlyZShcImRvdGVudlwiKS5jb25maWcoKTtcbnZhciBOZW9uQXBpID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5lb25BcGkoKSB7XG4gICAgICAgIHRoaXMucG9vbCA9IG5ldyBQb29sKHtcbiAgICAgICAgICAgIGhvc3Q6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9EQl9IT1NULFxuICAgICAgICAgICAgdXNlcjogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0RCX1VTRVIsXG4gICAgICAgICAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0RCX05BTUUsXG4gICAgICAgICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0RCX1BBU1NXT1JELFxuICAgICAgICAgICAgcG9ydDogcGFyc2VJbnQocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0RCX1BPUlQgfHwgXCI1NDMyXCIpLFxuICAgICAgICAgICAgc3NsOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zYWx0ID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0RCX1NBTFQ7XG4gICAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAgICAgZXhwaXJlc0luOiBcIjFIXCIsXG4gICAgICAgICAgICBhbGdvcml0aG06IFwiSFMyNTZcIixcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gW1xuICAgICAgICAgICAgJ1wiZ3JvdXBJZFwiJyxcbiAgICAgICAgICAgICdcImNyZWF0b3JJZFwiJyxcbiAgICAgICAgICAgICdcImNhdGVnb3J5XCInLFxuICAgICAgICAgICAgJ1wiaW1hZ2VEYXRhXCInLFxuICAgICAgICAgICAgJ1widGl0bGVcIicsXG4gICAgICAgICAgICAnXCJkaXNwbGF5RGF0ZVwiJyxcbiAgICAgICAgICAgICdcImRpc3BsYXlUZXh0XCInLFxuICAgICAgICAgICAgJ1wibm90ZXNcIicsXG4gICAgICAgICAgICAnXCJkZWFkbGluZVwiJyxcbiAgICAgICAgICAgICdcIm1pblBhcnRpY2lwYW50c1wiJyxcbiAgICAgICAgICAgICdcIm1heFBhcnRpY2lwYW50c1wiJyxcbiAgICAgICAgICAgICdcImFjdGlvbkxhYmVsXCInLFxuICAgICAgICAgICAgJ1wid2l0aGRyYXduXCInLFxuICAgICAgICAgICAgJ1wiY3JlYXRlZEF0XCInLFxuICAgICAgICAgICAgJ1wicGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFUeXBlXCInLFxuICAgICAgICAgICAgJ1wicG9zdENvbmZpcm1TY2hlbWFUeXBlXCInLFxuICAgICAgICBdO1xuICAgIH1cbiAgICBOZW9uQXBpLnByb3RvdHlwZS5jcmVhdGVUb2tlbnMgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlID0geyBhY2Nlc3NUb2tlbjogXCJcIiwgcmVmcmVzaFRva2VuOiBcIlwiIH07XG4gICAgICAgIC8vIOOCouOCr+OCu+OCueODiOODvOOCr+ODs+S9nOaIkFxuICAgICAgICB2YXIgcmFuZG9tU3RyID0gcmFuZG9tQnl0ZXMoMTYpLnRvU3RyaW5nKFwiaGV4XCIpO1xuICAgICAgICAvLyDjgIzjg6njg7Pjg4Djg6DmloflrZfliJcoMTbjg5DjgqTjg4gpICsg44Oq44Kv44Ko44K544OILuODpuODvOOCtuODvElEKOOCveODq+ODiOWApCnjgI3jgafjg4/jg4Pjgrfjg6XlgKTjgpLkvZzmiJBcbiAgICAgICAgdmFyIHNhbHRlZFJhbmRvbVN0ciA9IHJhbmRvbVN0ciArIHRoaXMuc2FsdDtcbiAgICAgICAgdmFyIGFjY2Vzc1Rva2VuID0gY3JlYXRlSGFzaChcInNoYTI1NlwiKVxuICAgICAgICAgICAgLnVwZGF0ZShzYWx0ZWRSYW5kb21TdHIpXG4gICAgICAgICAgICAuZGlnZXN0KFwiaGV4XCIpO1xuICAgICAgICAvLyDjg6rjg5Xjg6zjg4Pjgrfjg6Xjg4jjg7zjgq/jg7PkvZzmiJBcbiAgICAgICAgcmFuZG9tU3RyID0gcmFuZG9tQnl0ZXMoMTYpLnRvU3RyaW5nKFwiaGV4XCIpO1xuICAgICAgICAvLyDjgIzjg6njg7Pjg4Djg6DmloflrZfliJcoMTbjg5DjgqTjg4gpICsg44Oq44Kv44Ko44K544OILuODpuODvOOCtuODvElEKOOCveODq+ODiOWApCnjgI3jgafjg4/jg4Pjgrfjg6XlgKTjgpLkvZzmiJBcbiAgICAgICAgc2FsdGVkUmFuZG9tU3RyID0gcmFuZG9tU3RyICsgdGhpcy5zYWx0O1xuICAgICAgICB2YXIgcmVmcmVzaFRva2VuID0gY3JlYXRlSGFzaChcInNoYTI1NlwiKVxuICAgICAgICAgICAgLnVwZGF0ZShzYWx0ZWRSYW5kb21TdHIpXG4gICAgICAgICAgICAuZGlnZXN0KFwiaGV4XCIpO1xuICAgICAgICB2YXIgZGVmYXVsdFBleWxvYWQgPSB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4sXG4gICAgICAgIH07XG4gICAgICAgIHZhciByZWZyZXNoUGV5bG9hZCA9IHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIHJlZnJlc2hUb2tlbjogcmVmcmVzaFRva2VuLFxuICAgICAgICB9O1xuICAgICAgICByZXNwb25zZS5hY2Nlc3NUb2tlbiA9IGp3dC5zaWduKGRlZmF1bHRQZXlsb2FkLCB0aGlzLnNhbHQgfHwgXCJcIiwgdGhpcy5jb25maWcpO1xuICAgICAgICByZXNwb25zZS5yZWZyZXNoVG9rZW4gPSBqd3Quc2lnbihyZWZyZXNoUGV5bG9hZCwgdGhpcy5zYWx0IHx8IFwiXCIsIF9fYXNzaWduKF9fYXNzaWduKHt9LCB0aGlzLmNvbmZpZyksIHsgZXhwaXJlc0luOiBcIjcySFwiIH0pKTtcbiAgICAgICAgcmV0dXJuIHsgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW46IHJlZnJlc2hUb2tlbiwgcmVzcG9uc2U6IHJlc3BvbnNlIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXJhbTAgbG9naW5BdXRoUmVxdWVzdCDjg6bjg7zjgrbjg7xJROOBqOODkeOCueODr+ODvOODieOBjOagvOe0jeOBleOCjOOBpuOBhOOCi1xuICAgICAqIEByZXR1cm5zIGFjY2Vzc1Rva2VuIOOCouOCr+OCu+OCueODiOODvOOCr+ODs+OCkui/lOWNtOOBmeOCi1xuICAgICAqL1xuICAgIE5lb25BcGkucHJvdG90eXBlLmxvZ2luQXV0aCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgaGFzaFBhc3N3b3JkLCBxdWVyeSwgcm93cywgaWQsIG5hbWUsIGVtYWlsLCBfYywgYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiwgbmV3UmVzcG9uc2UsIHVwZGF0ZVJvd3M7XG4gICAgICAgICAgICB2YXIgdXNlcklkID0gX2IudXNlcklkLCBwYXNzd29yZCA9IF9iLnBhc3N3b3JkO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2QubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzVG9rZW46IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaFRva2VuOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzaFBhc3N3b3JkID0gY3JlYXRlSGFzaChcInNoYTI1NlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51cGRhdGUocGFzc3dvcmQgKyB0aGlzLnNhbHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpZ2VzdChcImhleFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5ID0gXCJcXG4gICAgICAgICAgICBTRUxFQ1Qgc2hpdGFpX3VzZXJfaW5mby5pZCAgICAgIEFTIGlkXFxuICAgICAgICAgICAgLHNoaXRhaV91c2VyX2luZm8udXNlcl9pZCAgICAgIEFTIGVtYWlsXFxuICAgICAgICAgICAgLCBzaGl0YWlfdXNlcl9pbmZvLnVzZXJfbmFtZSAgICAgIEFTIG5hbWVcXG4gICAgICAgICAgICBGUk9NIHNoaXRhaV91c2VyX2luZm9cXG4gICAgICAgICAgICBXSEVSRSBwYXNzd29yZCA9ICQxXFxuICAgICAgICAgICAgICBBTkQgdXNlcl9pZCA9ICQyO1xcbiAgICAgICAgXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkocXVlcnksIFtoYXNoUGFzc3dvcmQsIHVzZXJJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cyA9IChfZC5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgYzlrZjlnKjjgZnjgovloLTlkIjjgIHjgqLjgq/jgrvjgrnjg4jjg7zjgq/jg7PjgpLov5TljbTjgZnjgotcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWtmOWcqOOBl+OBquOBhOWgtOWQiOOAgeOCqOODqeODvOODoeODg+OCu+ODvOOCuOOCkui/lOWNtOOBmeOCi+OAglxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvd3MubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHsgbWVzc2FnZTogXCLjg6bjg7zjgrbjg7xJROOCguOBl+OBj+OBr+ODkeOCueODr+ODvOODieOBjOmWk+mBleOBo+OBpuOBhOOBvuOBmeOAglwiIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA9IHJvd3NbMF1bXCJpZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSByb3dzWzBdW1wibmFtZVwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsID0gcm93c1swXVtcImVtYWlsXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6IFwi44Ot44Kw44Kk44Oz6KqN6Ki844Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jID0gdGhpcy5jcmVhdGVUb2tlbnMoaWQpLCBhY2Nlc3NUb2tlbiA9IF9jLmFjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW4gPSBfYy5yZWZyZXNoVG9rZW4sIG5ld1Jlc3BvbnNlID0gX2MucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJVUERBVEUgc2hpdGFpX3VzZXJfaW5mbyBTRVQgYWNjZXNzX3Rva2VuID0gJDEsIHJlZnJlc2hfdG9rZW4gPSAkMiBXSEVSRSB1c2VyX2lkID0gJDMgUkVUVVJOSU5HIGlkXCIsIFthY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuLCB1c2VySWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJvd3MgPSAoX2Quc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZVJvd3MubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHsgbWVzc2FnZTogXCLjg63jgrDjgqTjg7Poqo3oqLzjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIiB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSB1cGRhdGVSb3dzWzBdW1wiaWRcIl07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHsgbWVzc2FnZTogXCLjg63jgrDjgqTjg7Poqo3oqLzjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIiB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgbmV3UmVzcG9uc2UpLCB7IGlkOiBpZCwgbmFtZTogbmFtZSwgZW1haWw6IGVtYWlsIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXJhbTAgYWNjZXNzVG9rZW5BdXRoUmVxdWVzdFtcInVzZXJJbmZvXCJdIEFQSeOCkuWun+ihjOOBmeOCi+ODpuODvOOCtuODvOaDheWgsSjjg6bjg7zjgrbjg7xJROOAgeOCouOCr+OCu+OCueODiOODvOOCr+ODsylcbiAgICAgKiBAcmV0dXJuc+OAgFwic3VjY2Vzc1wiIG9yIFwiZXJyb3JcIlxuICAgICAqL1xuICAgIE5lb25BcGkucHJvdG90eXBlLmFjY2Vzc1Rva2VuQXV0aCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgaWQsIG5hbWVfMSwgZW1haWwsIGRlY29kZWRBY2Nlc3NUb2tlbiwgb2JqLCByb3dzLCBlXzE7XG4gICAgICAgICAgICB2YXIgYWNjZXNzVG9rZW4gPSBfYi5hY2Nlc3NUb2tlbjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2MpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJlcnJvclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYy50cnlzLnB1c2goWzEsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWwgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQWNjZXNzVG9rZW4gPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IGp3dC52ZXJpZnkoYWNjZXNzVG9rZW4sIHRoaXMuc2FsdCB8fCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCA9IG9iai5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNvZGVkQWNjZXNzVG9rZW4gPSBvYmouYWNjZXNzVG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQsIGRlY29kZWRBY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcIm1lc3NhZ2VcIiBpbiBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLm1lc3NhZ2UgPT09IFwiand0IGV4cGlyZWRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcImV4cGlyZWQgYWNjZXNzIHRva2VuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUICpcXG4gICAgICAgICAgICAgRlJPTSBzaGl0YWlfdXNlcl9pbmZvXFxuICAgICAgICAgICAgIFdIRVJFIGlkID0gJDFcXG4gICAgICAgICAgICAgICBBTkQgYWNjZXNzX3Rva2VuID0gJDI7XCIsIFtpZCwgZGVjb2RlZEFjY2Vzc1Rva2VuXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzID0gKF9jLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJlcnJvclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lXzEgPSByb3dzWzBdW1widXNlcl9uYW1lXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWwgPSByb3dzWzBdW1widXNlcl9pZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0geyBpZDogaWQsIG5hbWU6IG5hbWVfMSwgZW1haWw6IGVtYWlsIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEgPSBfYy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwiZXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcmFtMCBhY2Nlc3NUb2tlbkF1dGhSZXF1ZXN0W1widXNlckluZm9cIl0gQVBJ44KS5a6f6KGM44GZ44KL44Om44O844K244O85oOF5aCxKOODpuODvOOCtuODvElE44CB44Ki44Kv44K744K544OI44O844Kv44OzKVxuICAgICAqIEByZXR1cm5z44CAXCJzdWNjZXNzXCIgb3IgXCJlcnJvclwiXG4gICAgICovXG4gICAgTmVvbkFwaS5wcm90b3R5cGUucmVmcmVzaFRva2VuQXV0aCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIGFyZ3VtZW50cywgdm9pZCAwLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgX2MsIGlkLCBkZWNvZGVkUmVmcmVzaFRva2VuLCByb3dzLCB1c2VySWQsIF9kLCBuZXdBY2Nlc3NUb2tlbiwgbmV3UmVmcmVzaFRva2VuLCBuZXdSZXNwb25zZSwgdXBkYXRlUm93cztcbiAgICAgICAgICAgIHZhciByZWZyZXNoVG9rZW4gPSBfYi5yZWZyZXNoVG9rZW47XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9lKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfZS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwiZXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jID0gand0LnZlcmlmeShyZWZyZXNoVG9rZW4sIHRoaXMuc2FsdCB8fCBcIlwiKSwgaWQgPSBfYy5pZCwgZGVjb2RlZFJlZnJlc2hUb2tlbiA9IF9jLnJlZnJlc2hUb2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBpZFxcbiAgICAgICAgICAgICBGUk9NIHNoaXRhaV91c2VyX2luZm9cXG4gICAgICAgICAgICAgV0hFUkUgaWQgPSAkMVxcbiAgICAgICAgICAgICAgIEFORCByZWZyZXNoX3Rva2VuID0gJDI7XCIsIFtpZCwgZGVjb2RlZFJlZnJlc2hUb2tlbl0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cyA9IChfZS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwiZXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcklkID0gcm93c1swXVtcImlkXCJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2QgPSB0aGlzLmNyZWF0ZVRva2Vucyh1c2VySWQpLCBuZXdBY2Nlc3NUb2tlbiA9IF9kLmFjY2Vzc1Rva2VuLCBuZXdSZWZyZXNoVG9rZW4gPSBfZC5yZWZyZXNoVG9rZW4sIG5ld1Jlc3BvbnNlID0gX2QucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJVUERBVEUgc2hpdGFpX3VzZXJfaW5mbyBTRVQgYWNjZXNzX3Rva2VuID0gJDEsIHJlZnJlc2hfdG9rZW4gPSAkMiBXSEVSRSBpZCA9ICQzIFJFVFVSTklORyBpZFwiLCBbbmV3QWNjZXNzVG9rZW4sIG5ld1JlZnJlc2hUb2tlbiwgdXNlcklkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVSb3dzID0gKF9lLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJlcnJvclwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA9IHVwZGF0ZVJvd3NbMF1bXCJpZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFwiZXJyb3JcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBfX2Fzc2lnbih7IGlkOiBpZCB9LCBuZXdSZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhcmFtMCB1c2VySWQs5L2c5oiQ44Gr5b+F6KaB44Gq5oOF5aCxKHByaWNlLCBkZXNjcmlwdGlvbiwgY3JlYXRlZF9hdClcbiAgICAgKiBAcmV0dXJuc+OAgFwic3VjY2Vzc1wiIG9yIFwiZXJyb3JcIlxuICAgICAqL1xuICAgIE5lb25BcGkucHJvdG90eXBlLmluc2VydFVzZXJJbmZvID0gZnVuY3Rpb24gKHVwZGF0ZU9iaikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGhhc2hQYXNzd29yZCwgaW5zZXJ0Um93cywgZV8yO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcInN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkJFR0lOXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzIsIDUsICwgN10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzaFBhc3N3b3JkID0gY3JlYXRlSGFzaChcInNoYTI1NlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51cGRhdGUodXBkYXRlT2JqLnBhc3N3b3JkICsgdGhpcy5zYWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaWdlc3QoXCJoZXhcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJJTlNFUlQgSU5UTyBcXFwicHVibGljXFxcIi5cXFwic2hpdGFpX3VzZXJfaW5mb1xcXCIgKFxcXCJ1c2VyX2lkXFxcIiwgXFxcInBhc3N3b3JkXFxcIiwgXFxcInVzZXJfbmFtZVxcXCIpXFxuICAgICAgICAgIFZBTFVFUygkMSwgJDIsICQzKSBSRVRVUk5JTkcgaWQ7XCIsIFt1cGRhdGVPYmouZW1haWwsIGhhc2hQYXNzd29yZCwgdXBkYXRlT2JqLm5hbWVdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFJvd3MgPSAoX2Euc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc2VydFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuODpuODvOOCtuODvOeZu+mMsuOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJDT01NSVRcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA3XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8yID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiUk9MTEJBQ0tcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNzogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS5pbnNlcnRXaXNoID0gZnVuY3Rpb24gKHdpc2gsIGlkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWEsIHBvc3RDb25maXJtU2NoZW1hLCBsZWZ0V2lzaCwgZ3JvdXBSb3dzLCBpbnNlcnRXaXNoUm93cywgY3JlYXRlSW5zZXJ0U2NoZW1hLCBfYSwgX2IsIHNjaGVtYSwgaW5zZXJ0Um93cywgZV8zXzEsIGVfNDtcbiAgICAgICAgICAgIHZhciBlXzMsIF9jO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfZCkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2QubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSB7IGlkOiBcIlwiIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJCRUdJTlwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2QudHJ5cy5wdXNoKFsyLCAxNCwgLCAxNl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWEgPSB3aXNoLnBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hLCBwb3N0Q29uZmlybVNjaGVtYSA9IHdpc2gucG9zdENvbmZpcm1TY2hlbWEsIGxlZnRXaXNoID0gX19yZXN0KHdpc2gsIFtcInBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hXCIsIFwicG9zdENvbmZpcm1TY2hlbWFcIl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGVmdFdpc2guZ3JvdXBJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc2cuaWQgRlJPTSBwdWJsaWMuc2hpdGFpX2dyb3VwIGFzIHNnIElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cF9qb2luIGFzIHNqZyBPTiBzamcuXFxcImdyb3VwSWRcXFwiID0gc2cuaWQgQU5EIHNqZy5cXFwidXNlcklkXFxcIiA9ICQxIFdIRVJFIHNnLmlkID0gJDI7XCIsIFtpZCwgbGVmdFdpc2guZ3JvdXBJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBSb3dzID0gKF9kLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncm91cFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuaoqemZkOOBjOOBguOCiuOBvuOBm+OCk+OAguOCsOODq+ODvOODl+WkluOBruODpuODvOOCtuODvOOBp+OBmeOAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJJTlNFUlQgSU5UTyBwdWJsaWMuc2hpdGFpX3dpc2ggKFwiLmNvbmNhdCh0aGlzLmNvbHVtbnMuam9pbihcIixcIiksIFwiKSBcXG4gICAgICAgIFZBTFVFUyAoJDEsICQyLCAkMywgJDQsICQ1LCAkNiwgJDcsICQ4LCAkOSwgJDEwLCAkMTEsICQxMiwgJDEzLCBOT1coKSwgJDE0LCAkMTUpIFJFVFVSTklORyBpZDtcIiksIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2guZ3JvdXBJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2guY3JlYXRvcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaC5jYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2guaW1hZ2VEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaC50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2guZGlzcGxheURhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoLmRpc3BsYXlUZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaC5ub3RlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2guZGVhZGxpbmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnRXaXNoLm1pblBhcnRpY2lwYW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdFdpc2gubWF4UGFydGljaXBhbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0V2lzaC5hY3Rpb25MYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RDb25maXJtU2NoZW1hLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRXaXNoUm93cyA9IChfZC5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zZXJ0V2lzaFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOBl+OBn+OBhOOBk+OBqOOBrueZu+mMsuOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVJbnNlcnRTY2hlbWEgPSBmdW5jdGlvbiAoc2NoZW1hLCBzY2hlbWFUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm1peGVkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hVHlwZTogc2NoZW1hVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGV0aW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHNjaGVtYS5kYXRldGltZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBzY2hlbWEuZGF0ZXRpbWVSZXF1aXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVR5cGU6IHNjaGVtYVR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJub3RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHNjaGVtYS5ub3RlTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHNjaGVtYS5ub3RlUmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZGF0ZXRpbWVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFUeXBlOiBzY2hlbWFUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZXRpbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogc2NoZW1hLmRhdGV0aW1lTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHNjaGVtYS5kYXRldGltZVJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm5vdGVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFUeXBlOiBzY2hlbWFUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibm90ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzY2hlbWEubm90ZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBzY2hlbWEubm90ZVJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFUeXBlOiBzY2hlbWFUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzY2hlbWEubm90ZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBzY2hlbWEubm90ZVJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBfZC5sYWJlbCA9IDU7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9kLnRyeXMucHVzaChbNSwgMTAsIDExLCAxMl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBfX3ZhbHVlcyhfX3NwcmVhZEFycmF5KF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChjcmVhdGVJbnNlcnRTY2hlbWEocGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWEsIFwicGFydGljaXBhdGlvblwiKSksIGZhbHNlKSwgX19yZWFkKGNyZWF0ZUluc2VydFNjaGVtYShwb3N0Q29uZmlybVNjaGVtYSwgXCJwb3N0XCIpKSwgZmFsc2UpKSwgX2IgPSBfYS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZC5sYWJlbCA9IDY7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIV9iLmRvbmUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDldO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hID0gX2IudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJJTlNFUlQgSU5UTyBcXFwicHVibGljXFxcIi5cXFwic2hpdGFpX3NjaGVtYVxcXCIgKFxcXCJ3aXNoSWRcXFwiLCBcXFwic2NoZW1hVHlwZVxcXCIsIFxcXCJ0eXBlXFxcIiwgXFxcInJlcXVpcmVkXFxcIiwgXFxcImxhYmVsXFxcIilcXG4gICAgICAgICAgVkFMVUVTKCQxLCAkMiwgJDMsICQ0LCAkNSkgUkVUVVJOSU5HIGlkO1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFdpc2hSb3dzWzBdW1wiaWRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYS5zY2hlbWFUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRSb3dzID0gKF9kLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnNlcnRSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLnorroqo3poIXnm67jga7nmbvpjLLjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2QubGFiZWwgPSA4O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IF9hLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6IHJldHVybiBbMyAvKmJyZWFrKi8sIDEyXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfM18xID0gX2Quc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZV8zID0geyBlcnJvcjogZV8zXzEgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDEyXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9iICYmICFfYi5kb25lICYmIChfYyA9IF9hLnJldHVybikpIF9jLmNhbGwoX2EpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzMpIHRocm93IGVfMy5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmlkID0gaW5zZXJ0V2lzaFJvd3NbMF1bXCJpZFwiXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkNPTU1JVFwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxNl07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzQgPSBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJST0xMQkFDS1wiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZC5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTY6IHJldHVybiBbMiAvKnJldHVybiovLCByZXNwb25zZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUuY3JlYXRlUmVzcG9uc2VEYXRhID0gZnVuY3Rpb24gKHdpc2hJZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2NoZW1hUm93cywgc2NoZW1hTWFwLCBzY2hlbWFSb3dzXzEsIHNjaGVtYVJvd3NfMV8xLCBzY2hlbWEsIHBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hVHlwZSwgcG9zdENvbmZpcm1TY2hlbWFUeXBlLCBzY2hlbWFUeXBlLCB0eXBlLCByZXF1aXJlZCwgbGFiZWwsIGFuc3dlclJvd3MsIGFuc3dlck1hcCwgcGFydGljaXBhbnRzLCBhbnN3ZXJSb3dzXzEsIGFuc3dlclJvd3NfMV8xLCBhbnN3ZXIsIGpvaW5lZEF0LCB1c2VySWQsIHNjaGVtYVR5cGUsIHR5cGUsIHZhbHVlLCBlXzU7XG4gICAgICAgICAgICB2YXIgZV82LCBfYSwgX2IsIGVfNywgX2MsIF9kLCBfZTtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2YpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9mLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9mLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc3cuXFxcInBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hVHlwZVxcXCIsIHN3LlxcXCJwb3N0Q29uZmlybVNjaGVtYVR5cGVcXFwiLCBzcy5cXFwic2NoZW1hVHlwZVxcXCIsIHNzLlxcXCJ0eXBlXFxcIiwgc3MuXFxcInJlcXVpcmVkXFxcIiwgc3MuXFxcImxhYmVsXFxcIlxcbiAgICAgICAgRlJPTSBwdWJsaWMuc2hpdGFpX3dpc2ggYXMgc3cgSU5ORVIgSk9JTiBzaGl0YWlfc2NoZW1hIGFzIHNzIE9OIHNzLlxcXCJ3aXNoSWRcXFwiID0gc3cuaWQgV0hFUkUgc3cuaWQgPSAkMTtcIiwgW3dpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUm93cyA9IChfZi5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2NoZW1hUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44K544Kt44O844Oe44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChzY2hlbWFSb3dzXzEgPSBfX3ZhbHVlcyhzY2hlbWFSb3dzKSwgc2NoZW1hUm93c18xXzEgPSBzY2hlbWFSb3dzXzEubmV4dCgpOyAhc2NoZW1hUm93c18xXzEuZG9uZTsgc2NoZW1hUm93c18xXzEgPSBzY2hlbWFSb3dzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYSA9IHNjaGVtYVJvd3NfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYVR5cGUgPSBzY2hlbWEucGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFUeXBlLCBwb3N0Q29uZmlybVNjaGVtYVR5cGUgPSBzY2hlbWEucG9zdENvbmZpcm1TY2hlbWFUeXBlLCBzY2hlbWFUeXBlID0gc2NoZW1hLnNjaGVtYVR5cGUsIHR5cGUgPSBzY2hlbWEudHlwZSwgcmVxdWlyZWQgPSBzY2hlbWEucmVxdWlyZWQsIGxhYmVsID0gc2NoZW1hLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFNYXAuc2V0KHNjaGVtYVR5cGUsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBzY2hlbWFNYXAuZ2V0KHNjaGVtYVR5cGUpKSwgKF9iID0geyB0eXBlOiBzY2hlbWFUeXBlID09PSBcInBhcnRpY2lwYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hVHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHBvc3RDb25maXJtU2NoZW1hVHlwZSB9LCBfYlt0eXBlICsgXCJMYWJlbFwiXSA9IGxhYmVsLCBfYlt0eXBlICsgXCJSZXF1aXJlZFwiXSA9IHJlcXVpcmVkLCBfYikpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZV82XzEpIHsgZV82ID0geyBlcnJvcjogZV82XzEgfTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjaGVtYVJvd3NfMV8xICYmICFzY2hlbWFSb3dzXzFfMS5kb25lICYmIChfYSA9IHNjaGVtYVJvd3NfMS5yZXR1cm4pKSBfYS5jYWxsKHNjaGVtYVJvd3NfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV82KSB0aHJvdyBlXzYuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBzai5cXFwiam9pbmVkQXRcXFwiLCBzYS5cXFwidXNlcklkXFxcIiwgc3MuXFxcInNjaGVtYVR5cGVcXFwiLCBzcy50eXBlLCBzYS52YWx1ZVxcbiAgICAgICAgRlJPTSBzaGl0YWlfam9pbiBhcyBzaiBMRUZUIEpPSU4gc2hpdGFpX3NjaGVtYSBhcyBzcyBPTiBzcy5cXFwid2lzaElkXFxcIiA9ICQxIExFRlQgSk9JTiBwdWJsaWMuc2hpdGFpX2Fuc3dlciBhcyBzYSBPTiBzYS5cXFwic2NoZW1hSWRcXFwiID0gc3MuaWQgQU5EIHNzLlxcXCJ3aXNoSWRcXFwiID0gJDEgV0hFUkUgc2ouXFxcIndpc2hJZFxcXCIgPSAkMSBPUkRFUiBCWSBzai5cXFwiam9pbmVkQXRcXFwiIEFTQztcIiwgW3dpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyUm93cyA9IChfZi5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChhbnN3ZXJSb3dzXzEgPSBfX3ZhbHVlcyhhbnN3ZXJSb3dzKSwgYW5zd2VyUm93c18xXzEgPSBhbnN3ZXJSb3dzXzEubmV4dCgpOyAhYW5zd2VyUm93c18xXzEuZG9uZTsgYW5zd2VyUm93c18xXzEgPSBhbnN3ZXJSb3dzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlciA9IGFuc3dlclJvd3NfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2luZWRBdCA9IGFuc3dlci5qb2luZWRBdCwgdXNlcklkID0gYW5zd2VyLnVzZXJJZCwgc2NoZW1hVHlwZSA9IGFuc3dlci5zY2hlbWFUeXBlLCB0eXBlID0gYW5zd2VyLnR5cGUsIHZhbHVlID0gYW5zd2VyLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXVzZXJJZCB8fCAhdHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJNYXAuc2V0KHVzZXJJZCwgX19hc3NpZ24oX19hc3NpZ24oe30sIChhbnN3ZXJNYXAuZ2V0KHVzZXJJZCkgPyBhbnN3ZXJNYXAuZ2V0KHVzZXJJZCkgOiB7fSkpLCAoX2QgPSB7IHVzZXJJZDogdXNlcklkLCBqb2luZWRBdDogam9pbmVkQXQgfSwgX2Rbc2NoZW1hVHlwZSArIFwiQW5zd2Vyc1wiXSA9IF9fYXNzaWduKF9fYXNzaWduKHt9LCAoYW5zd2VyTWFwLmdldCh1c2VySWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHNjaGVtYVR5cGUgKyBcIkFuc3dlcnNcIiBpbiBhbnN3ZXJNYXAuZ2V0KHVzZXJJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFuc3dlck1hcC5nZXQodXNlcklkKVsoc2NoZW1hVHlwZSArIFwiQW5zd2Vyc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHt9KSksIChfZSA9IHt9LCBfZVt0eXBlXSA9IHZhbHVlLCBfZSkpLCBfZCkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhbnRzID0gX19zcHJlYWRBcnJheShbXSwgX19yZWFkKGFuc3dlck1hcC52YWx1ZXMoKSksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZV83XzEpIHsgZV83ID0geyBlcnJvcjogZV83XzEgfTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFuc3dlclJvd3NfMV8xICYmICFhbnN3ZXJSb3dzXzFfMS5kb25lICYmIChfYyA9IGFuc3dlclJvd3NfMS5yZXR1cm4pKSBfYy5jYWxsKGFuc3dlclJvd3NfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV83KSB0aHJvdyBlXzcuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hOiBzY2hlbWFNYXAuZ2V0KFwicGFydGljaXBhdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdENvbmZpcm1TY2hlbWE6IHNjaGVtYU1hcC5nZXQoXCJwb3N0XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudHM6IHBhcnRpY2lwYW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV81ID0gX2Yuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZV81KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfNTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTmVvbkFwaS5wcm90b3R5cGUuZ2V0V2lzaEJ5SWQgPSBmdW5jdGlvbiAod2lzaCwgaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBncm91cFJvd3MsIHdpc2hSb3dzXzEsIHJlc18xLCBleHRDb2x1bW5zLCBlXzg7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogd2lzaC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cElkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JJZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5QYXJ0aWNpcGFudHM6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uTGFiZWw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWE6IHsgdHlwZTogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0Q29uZmlybVNjaGVtYTogeyB0eXBlOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aGRyYXduOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDUsICwgNl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHNnLmlkIEZST00gcHVibGljLnNoaXRhaV93aXNoIGFzIHN3IElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cCBhcyBzZyBPTiBzdy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBJTk5FUiBKT0lOIHB1YmxpYy5zaGl0YWlfZ3JvdXBfam9pbiBhcyBzamcgT04gc2pnLlxcXCJncm91cElkXFxcIiA9IHNnLmlkIEFORCBzamcuXFxcInVzZXJJZFxcXCIgPSAkMSBXSEVSRSBzdy5pZCA9ICQyO1wiLCBbaWQsIHdpc2guaWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwUm93cyA9IChfYS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZCwgd2lzaC5pZCwgd2lzaCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLmqKnpmZDjgYzjgYLjgorjgb7jgZvjgpPjgILjgrDjg6vjg7zjg5flpJbjga7jg6bjg7zjgrbjg7zjgafjgZnjgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIFwiLmNvbmNhdCh0aGlzLmNvbHVtbnMuam9pbihcIixcIiksIFwiXFxuICAgICAgICBGUk9NIHB1YmxpYy5zaGl0YWlfd2lzaCBXSEVSRSBpZCA9ICQxO1wiKSwgW3dpc2guaWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpc2hSb3dzXzEgPSAoX2Euc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpc2hSb3dzXzEubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOBl+OBn+OBhOOBk+OBqOOBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aXNoUm93c18xWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuY3JlYXRlUmVzcG9uc2VEYXRhKHdpc2guaWQpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRDb2x1bW5zID0gdGhpcy5jb2x1bW5zLmZpbHRlcihmdW5jdGlvbiAoY29sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbCAhPT0gJ1wicGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFUeXBlXCInICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCAhPT0gJ1wicG9zdENvbmZpcm1TY2hlbWFUeXBlXCInO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVwQ29sdW1uID0gY29sdW1uLnJlcGxhY2VBbGwoJ1wiJywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVwQ29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB3aXNoUm93c18xWzBdW3JlcENvbHVtbl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlc3BvbnNlKSwgKF9hID0ge30sIF9hW3JlcENvbHVtbl0gPSB2YWx1ZSwgX2EpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhcnRpY2lwYXRpb25Db25maXJtU2NoZW1hXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwb3N0Q29uZmlybVNjaGVtYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFydGljaXBhbnRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBdLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzXzEgJiYgY29sdW1uIGluIHJlc18xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlc3BvbnNlKSwgKF9hID0ge30sIF9hW2NvbHVtbl0gPSByZXNfMVtjb2x1bW5dLCBfYSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV84ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZV84O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS5pbnNlcnRBbnN3ZXIgPSBmdW5jdGlvbiAoYW5zd2VyLCBpZCwgd2lzaElkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSwgZ3JvdXBSb3dzLCBfYSwgX2IsIGtleSwgX2MsIF9kLCBzY2hlbWEsIHJlcEtleSwgaW5zZXJ0QW5zd2VyUm93cywgZV85XzEsIGVfMTBfMSwgZV8xMTtcbiAgICAgICAgICAgIHZhciBlXzEwLCBfZSwgZV85LCBfZjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2cpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9nLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gXCJzdWNjZXNzXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJCRUdJTlwiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9nLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9nLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2cudHJ5cy5wdXNoKFsyLCAxOSwgLCAyMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHNnLmlkIEZST00gcHVibGljLnNoaXRhaV93aXNoIGFzIHN3IElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cCBhcyBzZyBPTiBzdy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBJTk5FUiBKT0lOIHB1YmxpYy5zaGl0YWlfZ3JvdXBfam9pbiBhcyBzamcgT04gc2pnLlxcXCJncm91cElkXFxcIiA9IHNnLmlkIEFORCBzamcuXFxcInVzZXJJZFxcXCIgPSAkMSBXSEVSRSBzdy5pZCA9ICQyO1wiLCBbaWQsIHdpc2hJZF0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBSb3dzID0gKF9nLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncm91cFJvd3MubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuaoqemZkOOBjOOBguOCiuOBvuOBm+OCk+OAguOCsOODq+ODvOODl+WkluOBruODpuODvOOCtuODvOOBp+OBmeOAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfZy5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9nLnRyeXMucHVzaChbNCwgMTUsIDE2LCAxN10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EgPSBfX3ZhbHVlcyhPYmplY3Qua2V5cyhhbnN3ZXIpKSwgX2IgPSBfYS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZy5sYWJlbCA9IDU7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIV9iLmRvbmUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDE0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IF9iLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2cubGFiZWwgPSA2O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZy50cnlzLnB1c2goWzYsIDExLCAxMiwgMTNdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jID0gKGVfOSA9IHZvaWQgMCwgX192YWx1ZXMoT2JqZWN0LmtleXMoYW5zd2VyW2tleV0pKSksIF9kID0gX2MubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2cubGFiZWwgPSA3O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFfZC5kb25lKSByZXR1cm4gWzMgLypicmVhayovLCAxMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEgPSBfZC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcEtleSA9IGtleS5yZXBsYWNlKFwiQW5zd2Vyc1wiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJba2V5XVtzY2hlbWFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcEtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lzaElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJJTlNFUlQgSU5UTyBwdWJsaWMuc2hpdGFpX2Fuc3dlciAoXFxcInVzZXJJZFxcXCIsIFxcXCJzY2hlbWFJZFxcXCIsIFxcXCJ2YWx1ZVxcXCIpIFNFTEVDVCAkMSwgc3MuaWQsICQyIEZST00gcHVibGljLnNoaXRhaV9zY2hlbWEgYXMgc3MgV0hFUkUgc3MuXFxcInNjaGVtYVR5cGVcXFwiID0gJDMgQU5EIHNzLlxcXCJ0eXBlXFxcIiA9ICQ0IEFORCBzcy5cXFwid2lzaElkXFxcIiA9ICQ1IExJTUlUIDEgUkVUVVJOSU5HIGlkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcltrZXldW3NjaGVtYV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcEtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXNoSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRBbnN3ZXJSb3dzID0gKF9nLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnNlcnRBbnN3ZXJSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjgqLjg7PjgrXjg7zjga7nmbvpjLLjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2cubGFiZWwgPSA5O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZCA9IF9jLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEwOiByZXR1cm4gWzMgLypicmVhayovLCAxM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzlfMSA9IF9nLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfOSA9IHsgZXJyb3I6IGVfOV8xIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxM107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfZCAmJiAhX2QuZG9uZSAmJiAoX2YgPSBfYy5yZXR1cm4pKSBfZi5jYWxsKF9jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV85KSB0aHJvdyBlXzkuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNyAvKmVuZGZpbmFsbHkqL107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYiA9IF9hLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE0OiByZXR1cm4gWzMgLypicmVhayovLCAxN107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTU6XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEwXzEgPSBfZy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlXzEwID0geyBlcnJvcjogZV8xMF8xIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAxN107XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfYiAmJiAhX2IuZG9uZSAmJiAoX2UgPSBfYS5yZXR1cm4pKSBfZS5jYWxsKF9hKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xMCkgdGhyb3cgZV8xMC5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxNzogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiQ09NTUlUXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxODpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9nLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDIxXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTEgPSBfZy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJST0xMQkFDS1wiKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICAgICAgICAgICAgICBfZy5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzExO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIxOiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5lb25BcGkucHJvdG90eXBlLnVwZGF0ZVdpc2ggPSBmdW5jdGlvbiAod2lzaCwgaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBncm91cFJvd3MsIHdpc2hJZCwgdXBkYXRlV2lzaF8xLCB1cGRhdGVSb3dzLCBlXzEyO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBcInN1Y2Nlc3NcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIkJFR0lOXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzIsIDYsICwgOF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiU0VMRUNUIHNnLmlkIEZST00gcHVibGljLnNoaXRhaV93aXNoIGFzIHN3IElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cCBhcyBzZyBPTiBzdy5cXFwiZ3JvdXBJZFxcXCIgPSBzZy5pZCBJTk5FUiBKT0lOIHB1YmxpYy5zaGl0YWlfZ3JvdXBfam9pbiBhcyBzamcgT04gc2pnLlxcXCJncm91cElkXFxcIiA9IHNnLmlkIEFORCBzamcuXFxcInVzZXJJZFxcXCIgPSAkMSBXSEVSRSBzdy5pZCA9ICQyO1wiLCBbaWQsIHdpc2guaWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwUm93cyA9IChfYS5zZW50KCkpLnJvd3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ3JvdXBSb3dzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLmqKnpmZDjgYzjgYLjgorjgb7jgZvjgpPjgILjgrDjg6vjg7zjg5flpJbjga7jg6bjg7zjgrbjg7zjgafjgZnjgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lzaElkID0gd2lzaC5pZCwgdXBkYXRlV2lzaF8xID0gX19yZXN0KHdpc2gsIFtcImlkXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVBEQVRFIHB1YmxpYy5zaGl0YWlfd2lzaCBTRVQgXCIuY29uY2F0KE9iamVjdC5rZXlzKHVwZGF0ZVdpc2hfMSkucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0ciA9IFwiXFxcIlwiLmNvbmNhdChjdXJyZW50LCBcIlxcXCJcIikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiA9IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCInXCIuY29uY2F0KHVwZGF0ZVdpc2hfMVtjdXJyZW50XSwgXCInXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2ICE9PSBcIlwiID8gcHJldiArIFwiLCBcIiArIHN0ciA6IHN0cjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIFwiXCIpLCBcIiBXSEVSRSBpZCA9ICQxIFJFVFVSTklORyBpZDtcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5wb29sLnF1ZXJ5KFwiVVBEQVRFIHB1YmxpYy5zaGl0YWlfd2lzaCBTRVQgXCIuY29uY2F0KE9iamVjdC5rZXlzKHVwZGF0ZVdpc2hfMSkucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHIgPSBcIlxcXCJcIi5jb25jYXQoY3VycmVudCwgXCJcXFwiXCIpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiID0gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCInXCIuY29uY2F0KHVwZGF0ZVdpc2hfMVtjdXJyZW50XSwgXCInXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldiAhPT0gXCJcIiA/IHByZXYgKyBcIiwgXCIgKyBzdHIgOiBzdHI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgXCJcIiksIFwiIFdIRVJFIGlkID0gJDEgUkVUVVJOSU5HIGlkO1wiKSwgW3dpc2guaWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVJvd3MgPSAoX2Euc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZVJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuOBl+OBn+OBhOOBk+OBqOOBruabtOaWsOOBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJDT01NSVRcIildO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xMiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlJPTExCQUNLXCIpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZV8xMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE5lb25BcGkucHJvdG90eXBlLmdldFdpc2hlcyA9IGZ1bmN0aW9uIChncm91cElkLCBpZCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UsIGdyb3VwUm93cywgd2lzaFJvd3MsIF9sb29wXzEsIHRoaXNfMSwgd2lzaFJvd3NfMiwgd2lzaFJvd3NfMl8xLCB3aXNoLCBlXzEzXzEsIGVfMTQ7XG4gICAgICAgICAgICB2YXIgZV8xMywgX2E7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzEsIDEyLCAsIDEzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc2cuaWQgRlJPTSBwdWJsaWMuc2hpdGFpX2dyb3VwIGFzIHNnIElOTkVSIEpPSU4gcHVibGljLnNoaXRhaV9ncm91cF9qb2luIGFzIHNqZyBPTiBzamcuXFxcImdyb3VwSWRcXFwiID0gc2cuaWQgQU5EIHNqZy5cXFwidXNlcklkXFxcIiA9ICQxIFdIRVJFIHNnLlxcXCJpZFxcXCIgPSAkMjtcIiwgW2lkLCBncm91cElkXSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cFJvd3MgPSAoX2Iuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwUm93cy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi5qip6ZmQ44GM44GC44KK44G+44Gb44KT44CC44Kw44Or44O844OX5aSW44Gu44Om44O844K244O844Gn44GZ44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBpZCwgXCIuY29uY2F0KHRoaXMuY29sdW1ucy5qb2luKFwiLFwiKSwgXCJcXG4gICAgICAgIEZST00gcHVibGljLnNoaXRhaV93aXNoIE9SREVSIEJZIGlkIEFTQztcIiksIFtdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpc2hSb3dzID0gKF9iLnNlbnQoKSkucm93cztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aXNoUm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi44GX44Gf44GE44GT44Go44Gu5Y+W5b6X44Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9sb29wXzEgPSBmdW5jdGlvbiAod2lzaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXNXaXNoLCByZXMsIGV4dENvbHVtbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzV2lzaCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHdpc2guaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwSWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0b3JJZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5QYXJ0aWNpcGFudHM6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbkxhYmVsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGF0aW9uQ29uZmlybVNjaGVtYTogeyB0eXBlOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0Q29uZmlybVNjaGVtYTogeyB0eXBlOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJ0aWNpcGFudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoZHJhd246IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aXNoW1wiaWRcIl0sIHdpc2gpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXNfMS5jcmVhdGVSZXNwb25zZURhdGEod2lzaC5pZCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRDb2x1bW5zID0gdGhpc18xLmNvbHVtbnMuZmlsdGVyKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbCAhPT0gJ1wicGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFUeXBlXCInICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgIT09ICdcInBvc3RDb25maXJtU2NoZW1hVHlwZVwiJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRDb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXBDb2x1bW4gPSBjb2x1bW4ucmVwbGFjZUFsbCgnXCInLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVwQ29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gd2lzaFtyZXBDb2x1bW5dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc1dpc2ggPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcmVzV2lzaCksIChfYSA9IHt9LCBfYVtyZXBDb2x1bW5dID0gdmFsdWUsIF9hKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFydGljaXBhdGlvbkNvbmZpcm1TY2hlbWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwb3N0Q29uZmlybVNjaGVtYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhcnRpY2lwYW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0uZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyAmJiBjb2x1bW4gaW4gcmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNXaXNoID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHJlc1dpc2gpLCAoX2EgPSB7fSwgX2FbY29sdW1uXSA9IHJlc1tjb2x1bW5dLCBfYSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UucHVzaChyZXNXaXNoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzXzEgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA0O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzQsIDksIDEwLCAxMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lzaFJvd3NfMiA9IF9fdmFsdWVzKHdpc2hSb3dzKSwgd2lzaFJvd3NfMl8xID0gd2lzaFJvd3NfMi5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDU7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIXdpc2hSb3dzXzJfMS5kb25lKSByZXR1cm4gWzMgLypicmVhayovLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpc2ggPSB3aXNoUm93c18yXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzUgLyp5aWVsZCoqLywgX2xvb3BfMSh3aXNoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gNztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lzaFJvd3NfMl8xID0gd2lzaFJvd3NfMi5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OiByZXR1cm4gWzMgLypicmVhayovLCAxMV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTNfMSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTMgPSB7IGVycm9yOiBlXzEzXzEgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDExXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpc2hSb3dzXzJfMSAmJiAhd2lzaFJvd3NfMl8xLmRvbmUgJiYgKF9hID0gd2lzaFJvd3NfMi5yZXR1cm4pKSBfYS5jYWxsKHdpc2hSb3dzXzIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEzKSB0aHJvdyBlXzEzLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzcgLyplbmRmaW5hbGx5Ki9dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDExOiByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzcG9uc2VdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICAgICAgZV8xNCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVfMTQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBOZW9uQXBpLnByb3RvdHlwZS5nZXRHcm91cHMgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlLCBqb2luR3JvdXBSb3dzLCBqb2luR3JvdXBSb3dzXzEsIGpvaW5Hcm91cFJvd3NfMV8xLCBncm91cCwgZ3JvdXBPYmosIGpvaW5NZW1iZXJSb3dzLCBlXzE1XzEsIGVfMTY7XG4gICAgICAgICAgICB2YXIgZV8xNSwgX2E7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzEsIDExLCAsIDEyXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnBvb2wucXVlcnkoXCJTRUxFQ1Qgc2cuaWQsIHNnLlxcXCJncm91cE5hbWVcXFwiXFxuICAgICAgICBGUk9NIHB1YmxpYy5zaGl0YWlfZ3JvdXBfam9pbiBhcyBzZ2ogSU5ORVIgSk9JTiBzaGl0YWlfZ3JvdXAgYXMgc2cgT04gc2cuaWQgPSBzZ2ouXFxcImdyb3VwSWRcXFwiIFdIRVJFIHNnai5cXFwidXNlcklkXFxcIiA9ICQxO1wiLCBbaWRdKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5Hcm91cFJvd3MgPSAoX2Iuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpvaW5Hcm91cFJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuWPguWKoOOCsOODq+ODvOODl+OBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAglwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMywgOCwgOSwgMTBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5Hcm91cFJvd3NfMSA9IF9fdmFsdWVzKGpvaW5Hcm91cFJvd3MpLCBqb2luR3JvdXBSb3dzXzFfMSA9IGpvaW5Hcm91cFJvd3NfMS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWpvaW5Hcm91cFJvd3NfMV8xLmRvbmUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXAgPSBqb2luR3JvdXBSb3dzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwT2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBncm91cFtcImlkXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGdyb3VwW1wiZ3JvdXBOYW1lXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMucG9vbC5xdWVyeShcIlNFTEVDVCBESVNUSU5DVCBzdWkuaWQsIHN1aS51c2VyX25hbWUsIHN1aS51c2VyX2lkXFxuICAgICAgICBGUk9NIHB1YmxpYy5zaGl0YWlfZ3JvdXBfam9pbiBhcyBzZ2ogSU5ORVIgSk9JTiBzaGl0YWlfdXNlcl9pbmZvIGFzIHN1aSBPTiBzdWkuaWQgPSBzZ2ouXFxcInVzZXJJZFxcXCIgV0hFUkUgc2dqLlxcXCJncm91cElkXFxcIiA9ICQxO1wiLCBbZ3JvdXBbXCJpZFwiXV0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgam9pbk1lbWJlclJvd3MgPSAoX2Iuc2VudCgpKS5yb3dzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpvaW5NZW1iZXJSb3dzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLjg6Hjg7Pjg5Djg7zmg4XloLHjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBPYmoubWVtYmVycyA9IGpvaW5NZW1iZXJSb3dzLm1hcChmdW5jdGlvbiAobWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG1lbWJlcltcImlkXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBtZW1iZXJbXCJ1c2VyX25hbWVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBtZW1iZXJbXCJ1c2VyX2lkXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnB1c2goZ3JvdXBPYmopO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA2O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luR3JvdXBSb3dzXzFfMSA9IGpvaW5Hcm91cFJvd3NfMS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA3OiByZXR1cm4gWzMgLypicmVhayovLCAxMF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTVfMSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTUgPSB7IGVycm9yOiBlXzE1XzEgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDEwXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoam9pbkdyb3VwUm93c18xXzEgJiYgIWpvaW5Hcm91cFJvd3NfMV8xLmRvbmUgJiYgKF9hID0gam9pbkdyb3VwUm93c18xLnJldHVybikpIF9hLmNhbGwoam9pbkdyb3VwUm93c18xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xNSkgdGhyb3cgZV8xNS5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3IC8qZW5kZmluYWxseSovXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDogcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHJlc3BvbnNlXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGVfMTYgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlXzE2O1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIE5lb25BcGk7XG59KCkpO1xuZXhwb3J0IHsgTmVvbkFwaSB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBnXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGcgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2YgSXRlcmF0b3IgPT09IFwiZnVuY3Rpb25cIiA/IEl0ZXJhdG9yIDogT2JqZWN0KS5wcm90b3R5cGUpO1xuICAgIHJldHVybiBnLm5leHQgPSB2ZXJiKDApLCBnW1widGhyb3dcIl0gPSB2ZXJiKDEpLCBnW1wicmV0dXJuXCJdID0gdmVyYigyKSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgY29ycyBmcm9tIFwiY29yc1wiO1xuaW1wb3J0IHsgTmVvbkFwaSB9IGZyb20gXCIuL05lb25BcGlcIjtcbnJlcXVpcmUoXCJkb3RlbnZcIikuY29uZmlnKCk7XG52YXIgYXBwID0gZXhwcmVzcygpO1xudmFyIG5lb25BcGkgPSBuZXcgTmVvbkFwaSgpO1xuLy8gQ09SU+OBruioreWumlxudmFyIGNvcnNPcHRpb25zID0ge1xuICAgIG9yaWdpbjogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0ZST05URU5EX1VSTCwgLy8g44OV44Ot44Oz44OI44Ko44Oz44OJ44GuVVJM44KS55Kw5aKD5aSJ5pWw44GL44KJ5Y+W5b6XXG4gICAgbWV0aG9kOiBbXSxcbn07XG4vLyDjgqLjgq/jgrvjgrnjg4jjg7zjgq/jg7Poqo3oqLwo44Op44OD44OR44O86Zai5pWwKVxudmFyIGluaXRBY2Nlc3NUb2tlbkF1dGggPSBmdW5jdGlvbiAodXNlckluZm8pIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3VsdCwgaXNFeHBpcmVkLCBpc1N1Y2Nlc3M7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIG5lb25BcGkuYWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgaXNFeHBpcmVkID0gdHlwZW9mIHJlc3VsdCA9PT0gXCJzdHJpbmdcIiAmJiByZXN1bHQgPT09IFwiZXhwaXJlZCBhY2Nlc3MgdG9rZW5cIjtcbiAgICAgICAgICAgICAgICBpc1N1Y2Nlc3MgPSB0eXBlb2YgcmVzdWx0ICE9PSBcInN0cmluZ1wiICYmIE51bWJlcihyZXN1bHQuaWQpID4gMCAmJiAhaXNFeHBpcmVkO1xuICAgICAgICAgICAgICAgIGlmIChpc0V4cGlyZWQpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IHsgbWVzc2FnZTogXCLjgqLjgq/jgrvjgrnjg4jjg7zjgq/jg7PjgYzmnInlirnmnJ/pmZDliIfjgozjgafjgZnjgIJcIiB9O1xuICAgICAgICAgICAgICAgIGlmICghaXNTdWNjZXNzKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyB7IG1lc3NhZ2U6IFwi44Ki44Kv44K744K544OI44O844Kv44Oz44Gu6KqN6Ki844Gr5aSx5pWX44GX44G+44GX44Gf44CCXCIgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcmVzdWx0XTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH07XG4vLyBDT1JT6Kit5a6a44GoSlNPTuODkeODvOOCteODvOOCkuODn+ODieODq+OCpuOCp+OCouOBqOOBl+OBpumBqeeUqFxuYXBwLnVzZShjb3JzKGNvcnNPcHRpb25zKSk7XG5hcHAudXNlKGV4cHJlc3MuanNvbih7IGxpbWl0OiBcIjEwbWJcIiB9KSk7XG4vLyDjg63jgrDjgqTjg7Poqo3oqLzjgpLooYzjgYYo5oiQ5Yqf5pmC44Ki44Kv44K744K544OI44O844Kv44Oz44KS6L+U5Y2044GZ44KLKVxuYXBwLnBvc3QoXCIvYXBpL3YxL2F1dGgvbG9naW5cIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQsIGVycm9yXzE7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLmxvZ2luQXV0aChyZXEuYm9keSldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfMS5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmFwcC5wb3N0KFwiL2FwaS92MS9hdXRoL2FjY2Vzc1Rva2VuXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdXNlckluZm8sIF9hLCBpZCwgbmFtZV8xLCBlbWFpbCwgZXJyb3JfMjtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDIsICwgM10pO1xuICAgICAgICAgICAgICAgIHVzZXJJbmZvID0gcmVxLmJvZHkudXNlckluZm87XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW5pdEFjY2Vzc1Rva2VuQXV0aCh1c2VySW5mbyldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIF9hID0gX2Iuc2VudCgpLCBpZCA9IF9hLmlkLCBuYW1lXzEgPSBfYS5uYW1lLCBlbWFpbCA9IF9hLmVtYWlsO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHsgaWQ6IE51bWJlcihpZCksIG5hbWU6IG5hbWVfMSwgZW1haWw6IGVtYWlsIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGVycm9yXzIgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JfMi5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmFwcC5wb3N0KFwiL2FwaS92MS9hdXRoL3JlZnJlc2hUb2tlblwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVzZXJJbmZvLCByZXNwb25zZV8xLCBlcnJvcl8zO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgdXNlckluZm8gPSByZXEuYm9keS51c2VySW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLnJlZnJlc2hUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXNwb25zZV8xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZV8xICE9PSBcImVycm9yXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBfX2Fzc2lnbih7fSwgcmVzcG9uc2VfMSksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgZXJyb3JfMyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl8zLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL3Bvc3QvaW5zZXJ0VXNlclwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHVwZGF0ZU9iaiwgcmVzdWx0LCBlcnJvcl80O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlT2JqID0gcmVxLmJvZHk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5pbnNlcnRVc2VySW5mbyh1cGRhdGVPYmopXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBlcnJvcl80ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzQubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvcG9zdC9pbnNlcnRXaXNoXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIHVzZXJJbmZvLCBsZWZ0LCB1c2VySWQsIHJlc3VsdCwgZXJyb3JfNTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIF9hID0gcmVxLmJvZHksIHVzZXJJbmZvID0gX2EudXNlckluZm8sIGxlZnQgPSBfX3Jlc3QoX2EsIFtcInVzZXJJbmZvXCJdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9iLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5pbnNlcnRXaXNoKGxlZnQsIE51bWJlcih1c2VySWQpKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfNSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl81Lm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL2dldC93aXNoQnlJZFwiLCBmdW5jdGlvbiAocmVxLCByZXMpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hLCB1c2VySW5mbywgd2lzaCwgdXNlcklkLCByZXN1bHQsIGVycm9yXzY7XG4gICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICBfYSA9IHJlcS5ib2R5LCB1c2VySW5mbyA9IF9hLnVzZXJJbmZvLCB3aXNoID0gX2Eud2lzaDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9iLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5nZXRXaXNoQnlJZCh3aXNoLCBOdW1iZXIodXNlcklkKSldO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAvLyDjg6bjg7zjgrbjg7zmg4XloLHjgajjg4jjg7zjgq/jg7PjgpLjgq/jg6njgqTjgqLjg7Pjg4jjgavov5TjgZlcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiB7IHdpc2g6IHJlc3VsdCB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlcnJvcl82ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzYubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvcG9zdC9pbnNlcnRBbnN3ZXJcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSwgdXNlckluZm8sIGxlZnQsIHVzZXJJZCwgcmVzdWx0LCBlcnJvcl83O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgX2EgPSByZXEuYm9keSwgdXNlckluZm8gPSBfYS51c2VySW5mbywgbGVmdCA9IF9fcmVzdChfYSwgW1widXNlckluZm9cIl0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGluaXRBY2Nlc3NUb2tlbkF1dGgodXNlckluZm8pXTtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB1c2VySWQgPSAoX2Iuc2VudCgpKS5pZDtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuZW9uQXBpLnVwZGF0ZVdpc2gobGVmdCwgTnVtYmVyKHVzZXJJZCkpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogcmVzdWx0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlcnJvcl83ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yXzcubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiA1MDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsgfSk7XG5hcHAucG9zdChcIi9hcGkvdjEvcG9zdC91cGRhdGVXaXNoXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykgeyByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIHVzZXJJbmZvLCBsZWZ0LCB1c2VySWQsIHJlc3VsdCwgZXJyb3JfODtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIF9hID0gcmVxLmJvZHksIHVzZXJJbmZvID0gX2EudXNlckluZm8sIGxlZnQgPSBfX3Jlc3QoX2EsIFtcInVzZXJJbmZvXCJdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9iLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS51cGRhdGVXaXNoKGxlZnQsIE51bWJlcih1c2VySWQpKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfOCA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl84Lm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL2dldC93aXNoZXNcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfYSwgdXNlckluZm8sIGlkLCB1c2VySWQsIHJlc3VsdCwgZXJyb3JfOTtcbiAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzAsIDMsICwgNF0pO1xuICAgICAgICAgICAgICAgIF9hID0gcmVxLmJvZHksIHVzZXJJbmZvID0gX2EudXNlckluZm8sIGlkID0gX2EuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgaW5pdEFjY2Vzc1Rva2VuQXV0aCh1c2VySW5mbyldO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHVzZXJJZCA9IChfYi5zZW50KCkpLmlkO1xuICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5lb25BcGkuZ2V0V2lzaGVzKE51bWJlcihpZCksIE51bWJlcih1c2VySWQpKV07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgIC8vIOODpuODvOOCtuODvOaDheWgseOBqOODiOODvOOCr+ODs+OCkuOCr+ODqeOCpOOCouODs+ODiOOBq+i/lOOBmVxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAyMDAsIC8vIOOCueODhuODvOOCv+OCueOCs+ODvOODiVxuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHsgd2lzaGVzOiByZXN1bHQgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgZXJyb3JfOSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl85Lm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogNTAwLCAvLyDjgrnjg4bjg7zjgr/jgrnjgrPjg7zjg4lcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IH0pO1xuYXBwLnBvc3QoXCIvYXBpL3YxL2dldC9ncm91cHNcIiwgZnVuY3Rpb24gKHJlcSwgcmVzKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB1c2VySW5mbywgdXNlcklkLCByZXN1bHQsIGVycm9yXzEwO1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgdXNlckluZm8gPSByZXEuYm9keS51c2VySW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBpbml0QWNjZXNzVG9rZW5BdXRoKHVzZXJJbmZvKV07XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdXNlcklkID0gKF9hLnNlbnQoKSkuaWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmVvbkFwaS5nZXRHcm91cHMoTnVtYmVyKHVzZXJJZCkpXTtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgLy8g44Om44O844K244O85oOF5aCx44Go44OI44O844Kv44Oz44KS44Kv44Op44Kk44Ki44Oz44OI44Gr6L+U44GZXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDIwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogeyBncm91cHM6IHJlc3VsdCB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBlcnJvcl8xMCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcl8xMC5tZXNzYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCwgLy8g44K544OG44O844K/44K544Kz44O844OJXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyB9KTtcbmFwcC5saXN0ZW4oNDIwMCwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwicG9ydCBcIi5jb25jYXQoNDIwMCwgXCIgXFx1MzA2N1xcdTMwQjVcXHUzMEZDXFx1MzBEMFxcdTMwRkNcXHU4RDc3XFx1NTJENVxcdTRFMkRcIikpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=