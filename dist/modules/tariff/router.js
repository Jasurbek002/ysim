"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("./controller"));
const endipoints_1 = require("../../utils/endipoints");
const tariffRouter = (router, option, done) => {
    // tabs
    router.get(endipoints_1.REST.TARIFF_CATEGORY_BELEENE, controller_1.default.GET_ALL_TARIFF_TYPE_BELEENE);
    router.get(endipoints_1.REST.TARIFF_CATEGORY_UCELL, controller_1.default.GET_ALL_TARIFF_TYPE_UCELL);
    router.get(endipoints_1.REST.TARIFF_CATEGORY_UZTELECOM, controller_1.default.GET_ALL_TARIFF_TYPE_UZTELECOM);
    router.get(endipoints_1.REST.TARIFF_CATEGORY_MOBIUZ, controller_1.default.GET_ALL_TARIFF_TYPE_MOBIUZ);
    // tariffs
    router.get(endipoints_1.REST.GET_TARIFFS_UCELL, controller_1.default.GET_ALL_TARIFFS_UCELL);
    router.get(endipoints_1.REST.GET_TARIFFS_BELEENE, controller_1.default.GET_ALL_TARIFFS_BELEENE);
    router.get(endipoints_1.REST.GET_TARIFFS_UZTELECOM, controller_1.default.GET_ALL_TARIFFS_UZTELECOM);
    router.get(endipoints_1.REST.GET_TARIFFS_MOBIUZ, controller_1.default.GET_ALL_TARIFFS_MOBIUZ);
    // get one
    router.get(endipoints_1.REST.GET_ONE_TARIFF, controller_1.default.GET_ONE_TARIFF);
    done();
};
exports.default = tariffRouter;
