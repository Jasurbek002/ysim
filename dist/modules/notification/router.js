"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("./controller"));
const endipoints_1 = require("../../utils/endipoints");
const schema_1 = require("./schema");
const notfiyRouter = (router, option, done) => {
    router.post(endipoints_1.INSERT.SET_NOTFIY_TOKEN, { schema: { body: schema_1.NotfiySchema } }, controller_1.default.POST_TOKEN);
    done();
};
exports.default = notfiyRouter;
