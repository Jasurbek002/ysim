"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("./controller"));
const endipoints_1 = require("../../utils/endipoints");
const startRouter = (router, option, done) => {
    router.get(endipoints_1.REST.START, controller_1.default.START);
    done();
};
exports.default = startRouter;
