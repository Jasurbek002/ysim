"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("./controller"));
const tariffRouter = (router, option, done) => {
    // router.get(REST.TARIFF_TYPEING_TAB, controller.GET_ALL_TARIFF_TYPE);
    router.get("/tariffs", controller_1.default.GET_ALL_TARIFFS);
    done();
};
exports.default = tariffRouter;
