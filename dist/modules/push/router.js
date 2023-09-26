"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("./controller"));
const endipoints_1 = require("../../utils/endipoints");
const scheam_1 = require("./scheam");
const pushRouter = (router, option, done) => {
    router.post(endipoints_1.REST.DEVICE_REG, { schema: { body: scheam_1.DeviceSchema } }, controller_1.default.DEVICE_REG);
    router.post(endipoints_1.REST.ADD_FCM_TOKEN, { schema: { body: scheam_1.TokenSchema } }, controller_1.default.ADD_FCM_TOKEN);
    router.post(endipoints_1.REST.ENEBLE_PUSH, { schema: { body: scheam_1.PushSchema } }, controller_1.default.ENEBLE_PUSH);
    done();
};
exports.default = pushRouter;
