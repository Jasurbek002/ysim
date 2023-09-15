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
function CREATE_COUNTER(counter) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const jsonData = JSON.stringify(counter);
            const data = yield (0, database_1.fetch)(query_1.CREATE_USSD_COUNTER, jsonData, {});
            return data;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.default = {
    CREATE_COUNTER
};
