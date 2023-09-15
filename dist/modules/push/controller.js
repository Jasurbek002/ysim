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
function DEVICE_REG(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { model, device_info, unique_id, device_type } = req.body;
        const opt = {
            model: model,
            deviceInfo: device_info,
            uniqueId: unique_id,
            deviceType: device_type,
        };
        const data = yield model_1.default.DEVICE_REG(opt);
        if (data)
            return data;
    });
}
function ADD_FCM_TOKEN(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { fcmToken, deviceId, userId } = req.body;
            const opt = {
                fcm_token: fcmToken,
                device_id: deviceId,
                user_id: userId,
            };
            const data = yield model_1.default.ADD_FCM_TOKEN(opt);
            if (data && data.success === true) {
                return {
                    status: 201,
                    message: "token successfuly seved",
                    success: true,
                };
            }
            return data;
        }
        catch (error) {
            return error;
        }
    });
}
exports.default = {
    DEVICE_REG,
    ADD_FCM_TOKEN,
};
