"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("./controller"));
const endipoints_1 = require("../../utils/endipoints");
const tariffRouter = (router, option, done) => {
    router.get(endipoints_1.REST.TARIFF_TYPEING_TAB, controller_1.default.GET_ALL_TARIFF_TYPE);
    done();
};
exports.default = tariffRouter;
