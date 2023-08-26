"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../lib/database");
const query_1 = require("./query");
// net
function GET_NET_SIMPLE() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield (0, database_1.fetchAll)(query_1.GET_ALL_PACKAGES);
            const dataJson = JSON.parse((_a = data[0]) === null || _a === void 0 ? void 0 : _a.get_all_category_paket);
            let net = dataJson === null || dataJson === void 0 ? void 0 : dataJson.filter((el) => el.type === "net" && el.internet_type === "simple");
            return net;
        }
        catch (error) {
            throw error;
        }
    });
}
function GET_NET_ROUMING() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield (0, database_1.fetchAll)(query_1.GET_ALL_PACKAGES);
            const dataJson = JSON.parse((_a = data[0]) === null || _a === void 0 ? void 0 : _a.get_all_category_paket);
            let net = dataJson === null || dataJson === void 0 ? void 0 : dataJson.filter((el) => el.type === "net" && el.internet_type === "rouming");
            return net;
        }
        catch (error) {
            throw error;
        }
    });
}
function GET_NET_NON() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield (0, database_1.fetchAll)(query_1.GET_ALL_PACKAGES);
            const dataJson = JSON.parse((_a = data[0]) === null || _a === void 0 ? void 0 : _a.get_all_category_paket);
            let net = dataJson === null || dataJson === void 0 ? void 0 : dataJson.filter((el) => el.type === "net" && el.internet_type === "non");
            return net;
        }
        catch (error) {
            throw error;
        }
    });
}
// sms
function GET_ALL_SMS(company) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield (0, database_1.fetchAll)(query_1.GET_ALL_PACKAGES);
            const dataJson = JSON.parse((_a = data[0]) === null || _a === void 0 ? void 0 : _a.get_all_category_paket);
            let net = dataJson === null || dataJson === void 0 ? void 0 : dataJson.filter((el) => el.type === "sms" && el.name === company);
            return net;
        }
        catch (error) {
            throw error;
        }
    });
}
// min
function GET_ALL_MIN(company) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield (0, database_1.fetchAll)(query_1.GET_ALL_PACKAGES);
            const dataJson = JSON.parse((_a = data[0]) === null || _a === void 0 ? void 0 : _a.get_all_category_paket);
            let net = dataJson === null || dataJson === void 0 ? void 0 : dataJson.filter((el) => el.type === "min" && el.name === company);
            return net;
        }
        catch (error) {
            throw error;
        }
    });
}
// get one
function GET_ONE({ packageId }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield (0, database_1.fetch)(query_1.GET_ONE_NET_QUERY, packageId);
            return data;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.default = {
    GET_NET_SIMPLE,
    GET_NET_ROUMING,
    GET_NET_NON,
    GET_ONE,
    GET_ALL_SMS,
    GET_ALL_MIN
};
