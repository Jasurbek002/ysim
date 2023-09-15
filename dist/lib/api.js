"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRegister = exports.apiNotfiy = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
const apiRegister = axios_1.default.create({
    baseURL: config_1.API_REGISTER,
});
exports.apiRegister = apiRegister;
const apiNotfiy = axios_1.default.create({
    baseURL: config_1.API_NOTIFY,
});
exports.apiNotfiy = apiNotfiy;
