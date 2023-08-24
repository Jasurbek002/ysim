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
const api_1 = require("../../lib/api");
const endipoints_1 = require("../../utils/endipoints");
function POST_TOKEN({ token, message, title, topic }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const option = {
                title,
                token,
                message,
                topic,
            };
            const { data } = yield api_1.api.post(endipoints_1.REST.SET_NOTFIY_TOKEN, option);
            return data;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.default = {
    POST_TOKEN,
};
