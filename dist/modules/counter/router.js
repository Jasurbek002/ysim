"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("./controller"));
const endipoints_1 = require("../../utils/endipoints");
const couterRouter = (router, option, done) => {
    router.post(endipoints_1.REST.CREATE_COUNTER, controller_1.default.CREATE_COUNTER);
    done();
};
exports.default = couterRouter;
