"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("./controller"));
const endipoints_1 = require("../../utils/endipoints");
const schema_1 = require("./schema");
const deviceRouter = (router, option, done) => {
    router.post(endipoints_1.INSERT.DEVICE_REGISTER, { schema: { body: schema_1.DeviceSchema } }, controller_1.default.REGISTER);
    done();
};
exports.default = deviceRouter;
