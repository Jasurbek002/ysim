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
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
function START() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return {
                success: true,
                message: "wellcome to device!",
                url: constants_1.WEB_URL,
            };
        }
        catch (error) {
            return error;
        }
    });
}
function OFFLINE(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ussd = path_1.default.join(process.cwd(), 'uploads', 'dist.zip');
            const stats = fs_1.default.statSync(ussd);
            if (stats.size > 0) {
                rep.sendFile(ussd);
            }
            else {
                return {
                    status: 404,
                    message: "file not found"
                };
            }
        }
        catch (error) {
            return error;
        }
    });
}
exports.default = { START, OFFLINE };
