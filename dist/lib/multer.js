"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multer = void 0;
const fastify_multer_1 = __importDefault(require("fastify-multer"));
exports.multer = fastify_multer_1.default;
const storage = fastify_multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = (0, fastify_multer_1.default)({ storage: storage });
exports.default = upload;
