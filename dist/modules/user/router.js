"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("./controller"));
const endipoints_1 = require("../../utils/endipoints");
const schema_1 = require("./schema");
const userRouter = (router, option, done) => {
    router.post(endipoints_1.INSERT.USER_REGISTER, { schema: { body: schema_1.UserSchema } }, controller_1.default.POST);
    router.put(endipoints_1.INSERT.USER_UPGRATE, controller_1.default.PUT);
    done();
};
exports.default = userRouter;
