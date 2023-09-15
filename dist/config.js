"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = exports.API_REGISTER = exports.API_NOTIFY = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_BASE,
    port: 8090,
};
exports.dbConfig = dbConfig;
const API_NOTIFY = process.env.API_NOTFIY;
exports.API_NOTIFY = API_NOTIFY;
const API_REGISTER = process.env.API_REGISTER;
exports.API_REGISTER = API_REGISTER;
