"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("./controller"));
const endipoints_1 = require("../../utils/endipoints");
const packageRouter = (router, option, done) => {
    // net
    router.get(endipoints_1.REST.NET_SMPLE_BELINNE, controller_1.default.NET_SIMPLE_BELENE);
    router.get(endipoints_1.REST.NET_SMPLE_UZTELECOM, controller_1.default.NET_SIMPLE_UZTELECOM);
    router.get(endipoints_1.REST.NET_SMPLE_UCELL, controller_1.default.NET_SIMPLE_UCELL);
    router.get(endipoints_1.REST.NET_SMPLE_MOBIUZ, controller_1.default.NET_SIMPLE_MOBIUZ);
    router.get(endipoints_1.REST.NET_ROUMING_BELINNE, controller_1.default.NET_ROUMING_BELEENE);
    router.get(endipoints_1.REST.NET_ROUMING_UZTELECOM, controller_1.default.NET_ROUMING_UZTELECOM);
    router.get(endipoints_1.REST.NET_ROUMING_UCELL, controller_1.default.NET_ROUMING_UCELL);
    router.get(endipoints_1.REST.NET_ROUMING_MOBIUZ, controller_1.default.NET_ROUMING_MOBIUZ);
    router.get(endipoints_1.REST.NET_NON_BELINNE, controller_1.default.NET_NON_BELEENE);
    router.get(endipoints_1.REST.NET_NON_UZTELECOM, controller_1.default.NET_NON_UZTELECOM);
    router.get(endipoints_1.REST.NET_NON_UCELL, controller_1.default.NET_NON_UCELL);
    router.get(endipoints_1.REST.NET_NON_MOBIUZ, controller_1.default.NET_NON_MOBIUZ);
    // sms
    router.get(endipoints_1.REST.SMS_BELEENE, controller_1.default.SMS_BELEENE);
    router.get(endipoints_1.REST.SMS_UZTELECOM, controller_1.default.SMS_UZTELECOM);
    router.get(endipoints_1.REST.SMS_UCELL, controller_1.default.SMS_UCELL);
    router.get(endipoints_1.REST.SMS_MOBIUZ, controller_1.default.SMS_MOBIUZ);
    // min
    router.get(endipoints_1.REST.MIN_BELEENE, controller_1.default.MIN_BELEENE);
    router.get(endipoints_1.REST.MIN_UZTELECOM, controller_1.default.MIN_UZTELECOM);
    router.get(endipoints_1.REST.MIN_UCELL, controller_1.default.MIN_UCELL);
    router.get(endipoints_1.REST.MIN_MOBIUZ, controller_1.default.MIN_MOBIUZ);
    // get one
    router.get(endipoints_1.REST.GET_ONE, controller_1.default.GET_ONE);
    done();
};
exports.default = packageRouter;
