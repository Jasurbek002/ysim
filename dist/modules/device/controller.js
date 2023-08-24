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
const constants_1 = require("../../utils/constants");
const model_1 = __importDefault(require("./model"));
const REGISTER = (req, rep) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { model, device_info, unique_id, device_type } = req.body;
        const option = {
            model: model,
            deviceInfo: device_info,
            uniqueId: unique_id,
            deviceType: device_type,
        };
        let data = yield model_1.default.DEVICE_REGISTER(option);
        if (data && data.success === true) {
            data.data.url = constants_1.WEB_URL;
            return data;
        }
        else if (data.code === -3600) {
            rep.code(403).send({
                message: data.message,
            });
        }
        else {
            return data;
        }
    }
    catch (error) {
        return error;
    }
});
exports.default = {
    REGISTER,
};
