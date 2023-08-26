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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("./model"));
function GET_ALL_TARIFF_TYPE(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const tariffTyping = yield model_1.default.GET_ALL_TARIFF_TYPE_CATEGORY();
            return tariffTyping;
        }
        catch (error) {
            return error;
        }
    });
}
function GET_ALL_TARIFFS(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const tariffTyping = yield model_1.default.GET_ALL_TARIFFS();
            console.log(tariffTyping);
            return JSON.parse(tariffTyping[0].get_all_category_tariff);
        }
        catch (error) {
            return error;
        }
    });
}
function GET_ONE_TARIFF(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { tariffId } = req.params;
            const oneTarif = yield model_1.default.GET_ONE_TARIFF(tariffId);
            return oneTarif;
        }
        catch (error) {
            return error;
        }
    });
}
exports.default = {
    GET_ALL_TARIFF_TYPE,
    GET_ALL_TARIFFS,
    GET_ONE_TARIFF,
};
