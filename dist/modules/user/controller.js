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
const api_1 = require("../../lib/api");
const endipoints_1 = require("../../utils/endipoints");
function GET(req, rep) {
    return __awaiter(this, void 0, void 0, function* () { });
}
function POST(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { user_id, profile_id, device_id, auth_type, login, password, } = req.body;
            const option = {
                userId: user_id,
                profileId: profile_id,
                deviceId: device_id,
                authType: auth_type,
                login: login,
                password: password,
            };
            const data = yield model_1.default.USER_REGISTER(option);
            return data;
        }
        catch (error) {
            return error;
        }
    });
}
// user upgrate
function PUT(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { authId, profileId, userId, login, password } = req.body;
            const option = {
                auth_id: authId,
                profile_id: profileId,
                user_id: userId,
                login: login,
                password: password,
            };
            const { data } = api_1.api.post(endipoints_1.REST.USER_UPGRATE, option);
            return data;
        }
        catch (error) {
            return error;
        }
    });
}
function DELETE(req, rep) {
    return __awaiter(this, void 0, void 0, function* () { });
}
exports.default = { GET, POST, PUT, DELETE };
