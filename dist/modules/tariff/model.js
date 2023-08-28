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
function GET_ALL_TARIFF_TYPE_CATEGORY() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield (0, database_1.fetchAll)(query_1.GET_ALL_TARIFF_TYPEING_QUERY);
            return data[0];
        }
        catch (error) {
            throw error;
        }
    });
}
function GET_ALL_TARIFFS(typingId, company) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield (0, database_1.fetchAll)(query_1.GET_ALL_TARIFFS_QUERY);
            const parserData = JSON.parse(data[0].get_all_category_tariff);
            const sorted = parserData.filter((el) => el.tariff_typing_id === typingId &&
                el.company_name.toLowerCase() === company);
            return sorted;
        }
        catch (error) {
            throw error;
        }
    });
}
function GET_ONE_TARIFF(tariffId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield (0, database_1.fetch)(query_1.GET_ONE_TARIFF_QUERY, tariffId);
            return data;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.default = {
    GET_ALL_TARIFF_TYPE_CATEGORY,
    GET_ALL_TARIFFS,
    GET_ONE_TARIFF,
};
