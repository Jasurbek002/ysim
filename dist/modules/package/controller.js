"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("./model"));
// net
function NET_SIMPLE_UZTELECOM() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const simpleNet = yield model_1.default.GET_NET_SIMPLE();
            const sorterdCompany = simpleNet.filter((el) => el.name === "uztelecom");
            if (sorterdCompany) {
                return {
                    daily: sorterdCompany.filter((el) => el.deadline === 0),
                    weekly: sorterdCompany.filter((el) => el.deadline === 1),
                    moonthly: sorterdCompany.filter((el) => el.deadline === 2),
                };
            }
            return [];
        }
        catch (error) {
            return error;
        }
    });
}
function NET_SIMPLE_BELENE() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const simpleNet = yield model_1.default.GET_NET_SIMPLE();
            const sorterdCompany = simpleNet.filter((el) => el.name === "belene");
            if (sorterdCompany) {
                return {
                    daily: sorterdCompany.filter((el) => el.deadline === 0),
                    weekly: sorterdCompany.filter((el) => el.deadline === 1),
                    moonthly: sorterdCompany.filter((el) => el.deadline === 2),
                };
            }
            return [];
        }
        catch (error) {
            return error;
        }
    });
}
function NET_SIMPLE_UCELL() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const simpleNet = yield model_1.default.GET_NET_SIMPLE();
            const sorterdCompany = simpleNet.filter((el) => el.name === "ucell");
            if (sorterdCompany) {
                return {
                    daily: sorterdCompany.filter((el) => el.deadline === 0),
                    weekly: sorterdCompany.filter((el) => el.deadline === 1),
                    moonthly: sorterdCompany.filter((el) => el.deadline === 2),
                };
            }
            return [];
        }
        catch (error) {
            return error;
        }
    });
}
function NET_SIMPLE_MOBIUZ() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const simpleNet = yield model_1.default.GET_NET_SIMPLE();
            const sorterdCompany = simpleNet.filter((el) => el.name === "mobiuz");
            if (sorterdCompany) {
                return {
                    daily: sorterdCompany.filter((el) => el.deadline === 0),
                    weekly: sorterdCompany.filter((el) => el.deadline === 1),
                    moonthly: sorterdCompany.filter((el) => el.deadline === 2),
                };
            }
            return [];
        }
        catch (error) {
            return error;
        }
    });
}
function NET_ROUMING_UZTELECOM() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const simpleNet = yield model_1.default.GET_NET_ROUMING();
            const sorterdCompany = simpleNet.filter((el) => el.name === "uztelecom");
            if (sorterdCompany) {
                return {
                    daily: sorterdCompany.filter((el) => el.deadline === 0),
                    weekly: sorterdCompany.filter((el) => el.deadline === 1),
                    moonthly: sorterdCompany.filter((el) => el.deadline === 2),
                };
            }
            return [];
        }
        catch (error) {
            return error;
        }
    });
}
function NET_ROUMING_BELEENE() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const simpleNet = yield model_1.default.GET_NET_ROUMING();
            const sorterdCompany = simpleNet.filter((el) => el.name === "beleene");
            if (sorterdCompany) {
                return {
                    daily: sorterdCompany.filter((el) => el.deadline === 0),
                    weekly: sorterdCompany.filter((el) => el.deadline === 1),
                    moonthly: sorterdCompany.filter((el) => el.deadline === 2),
                };
            }
            return [];
        }
        catch (error) {
            return error;
        }
    });
}
function NET_ROUMING_UCELL() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const simpleNet = yield model_1.default.GET_NET_ROUMING();
            const sorterdCompany = simpleNet.filter((el) => el.name === "ucel");
            if (sorterdCompany) {
                return {
                    daily: sorterdCompany.filter((el) => el.deadline === 0),
                    weekly: sorterdCompany.filter((el) => el.deadline === 1),
                    moonthly: sorterdCompany.filter((el) => el.deadline === 2),
                };
            }
            return [];
        }
        catch (error) {
            return error;
        }
    });
}
function NET_ROUMING_MOBIUZ() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const simpleNet = yield model_1.default.GET_NET_ROUMING();
            const sorterdCompany = simpleNet.filter((el) => el.name === "mobiuz");
            if (sorterdCompany) {
                return {
                    daily: sorterdCompany.filter((el) => el.deadline === 0),
                    weekly: sorterdCompany.filter((el) => el.deadline === 1),
                    moonthly: sorterdCompany.filter((el) => el.deadline === 2),
                };
            }
            return [];
        }
        catch (error) {
            return error;
        }
    });
}
function NET_NON_UZTELECOM() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const simpleNet = yield model_1.default.GET_NET_NON();
            const sorterdCompany = simpleNet.filter((el) => el.name === "uztelecom");
            if (sorterdCompany) {
                return {
                    daily: sorterdCompany.filter((el) => el.deadline === 0),
                    weekly: sorterdCompany.filter((el) => el.deadline === 1),
                    moonthly: sorterdCompany.filter((el) => el.deadline === 2),
                };
            }
            return [];
        }
        catch (error) {
            return error;
        }
    });
}
function NET_NON_BELEENE() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const simpleNet = yield model_1.default.GET_NET_NON();
            const sorterdCompany = simpleNet.filter((el) => el.name === "beleene");
            if (sorterdCompany) {
                return {
                    daily: sorterdCompany.filter((el) => el.deadline === 0),
                    weekly: sorterdCompany.filter((el) => el.deadline === 1),
                    moonthly: sorterdCompany.filter((el) => el.deadline === 2),
                };
            }
            return [];
        }
        catch (error) {
            return error;
        }
    });
}
function NET_NON_UCELL() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const simpleNet = yield model_1.default.GET_NET_NON();
            const sorterdCompany = simpleNet.filter((el) => el.name === "ucell");
            if (sorterdCompany) {
                return {
                    daily: sorterdCompany.filter((el) => el.deadline === 0),
                    weekly: sorterdCompany.filter((el) => el.deadline === 1),
                    moonthly: sorterdCompany.filter((el) => el.deadline === 2),
                };
            }
            return [];
        }
        catch (error) {
            return error;
        }
    });
}
function NET_NON_MOBIUZ() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const simpleNet = yield model_1.default.GET_NET_NON();
            const sorterdCompany = simpleNet.filter((el) => el.name === "mobiuz");
            if (sorterdCompany) {
                return {
                    daily: sorterdCompany.filter((el) => el.deadline === 0),
                    weekly: sorterdCompany.filter((el) => el.deadline === 1),
                    moonthly: sorterdCompany.filter((el) => el.deadline === 2),
                };
            }
            return [];
        }
        catch (error) {
            return error;
        }
    });
}
// sms
function SMS_BELEENE() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sms = yield model_1.default.GET_ALL_SMS("beleene");
            if (sms) {
                return {
                    status: 200,
                    message: "success",
                    daily: sms.filter((el) => el.deadline === 0),
                    weekly: sms.filter((el) => el.deadline === 1),
                    moonthly: sms.filter((el) => el.deadline === 2),
                };
            }
            return sms;
        }
        catch (error) {
            return error;
        }
    });
}
function SMS_UCELL() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sms = yield model_1.default.GET_ALL_SMS("ucell");
            if (sms) {
                return {
                    status: 200,
                    message: "success",
                    daily: sms.filter((el) => el.deadline === 0),
                    weekly: sms.filter((el) => el.deadline === 1),
                    moonthly: sms.filter((el) => el.deadline === 2),
                };
            }
            return sms;
        }
        catch (error) {
            return error;
        }
    });
}
function SMS_UZTELECOM() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sms = yield model_1.default.GET_ALL_SMS("uztelecom");
            if (sms) {
                return {
                    status: 200,
                    message: "success",
                    daily: sms.filter((el) => el.deadline === 0),
                    weekly: sms.filter((el) => el.deadline === 1),
                    moonthly: sms.filter((el) => el.deadline === 2),
                };
            }
            return sms;
        }
        catch (error) {
            return error;
        }
    });
}
function SMS_MOBIUZ() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const sms = yield model_1.default.GET_ALL_SMS("mobiuz");
            if (sms) {
                return {
                    status: 200,
                    message: "success",
                    daily: sms.filter((el) => el.deadline === 0),
                    weekly: sms.filter((el) => el.deadline === 1),
                    moonthly: sms.filter((el) => el.deadline === 2),
                };
            }
            return sms;
        }
        catch (error) {
            return error;
        }
    });
}
// sms
function MIN_BELEENE() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const min = yield model_1.default.GET_ALL_MIN("beleene");
            if (min) {
                return {
                    status: 200,
                    message: "success",
                    daily: min.filter((el) => el.deadline === 0),
                    weekly: min.filter((el) => el.deadline === 1),
                    moonthly: min.filter((el) => el.deadline === 2),
                };
            }
            return min;
        }
        catch (error) {
            return error;
        }
    });
}
function MIN_UCELL() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const min = yield model_1.default.GET_ALL_MIN("ucell");
            if (min) {
                return {
                    status: 200,
                    message: "success",
                    daily: min.filter((el) => el.deadline === 0),
                    weekly: min.filter((el) => el.deadline === 1),
                    moonthly: min.filter((el) => el.deadline === 2),
                };
            }
            return min;
        }
        catch (error) {
            return error;
        }
    });
}
function MIN_UZTELECOM() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const min = yield model_1.default.GET_ALL_MIN("uztelecom");
            if (min) {
                return {
                    status: 200,
                    message: "success",
                    daily: min.filter((el) => el.deadline === 0),
                    weekly: min.filter((el) => el.deadline === 1),
                    moonthly: min.filter((el) => el.deadline === 2),
                };
            }
            return min;
        }
        catch (error) {
            return error;
        }
    });
}
function MIN_MOBIUZ() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const min = yield model_1.default.GET_ALL_MIN("mobiuz");
            if (min) {
                return {
                    status: 200,
                    message: "success",
                    daily: min.filter((el) => el.deadline === 0),
                    weekly: min.filter((el) => el.deadline === 1),
                    moonthly: min.filter((el) => el.deadline === 2),
                };
            }
            return min;
        }
        catch (error) {
            return error;
        }
    });
}
// get one
function GET_ONE(req) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const net = yield model_1.default.GET_ONE(req.params);
            return net;
        }
        catch (error) { }
    });
}
exports.default = {
    NET_SIMPLE_BELENE,
    NET_SIMPLE_UZTELECOM,
    NET_SIMPLE_MOBIUZ,
    NET_SIMPLE_UCELL,
    NET_ROUMING_BELEENE,
    NET_ROUMING_UZTELECOM,
    NET_ROUMING_UCELL,
    NET_ROUMING_MOBIUZ,
    NET_NON_BELEENE,
    NET_NON_UZTELECOM,
    NET_NON_UCELL,
    NET_NON_MOBIUZ,
    SMS_BELEENE,
    SMS_MOBIUZ,
    SMS_UCELL,
    SMS_UZTELECOM,
    MIN_BELEENE,
    MIN_UZTELECOM,
    MIN_MOBIUZ,
    MIN_UCELL,
    GET_ONE,
};
