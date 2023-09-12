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
// tab category
function GET_ALL_TARIFF_TYPE_UCELL(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { get_all_tariff_typing } = yield model_1.default.GET_ALL_TARIFF_TYPE_CATEGORY();
            const companyTariff = get_all_tariff_typing === null || get_all_tariff_typing === void 0 ? void 0 : get_all_tariff_typing.filter((el) => el.category_id === 1);
            if (companyTariff) {
                return companyTariff;
            }
        }
        catch (error) {
            return error;
        }
    });
}
function GET_ALL_TARIFF_TYPE_BELEENE(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { get_all_tariff_typing } = yield model_1.default.GET_ALL_TARIFF_TYPE_CATEGORY();
            const companyTariff = get_all_tariff_typing === null || get_all_tariff_typing === void 0 ? void 0 : get_all_tariff_typing.filter((el) => el.category_id === 2);
            return companyTariff;
        }
        catch (error) {
            return error;
        }
    });
}
function GET_ALL_TARIFF_TYPE_UZTELECOM(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { get_all_tariff_typing } = yield model_1.default.GET_ALL_TARIFF_TYPE_CATEGORY();
            const companyTariff = get_all_tariff_typing === null || get_all_tariff_typing === void 0 ? void 0 : get_all_tariff_typing.filter((el) => el.category_id === 3);
            return companyTariff;
        }
        catch (error) {
            return error;
        }
    });
}
function GET_ALL_TARIFF_TYPE_MOBIUZ(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { get_all_tariff_typing } = yield model_1.default.GET_ALL_TARIFF_TYPE_CATEGORY();
            const companyTariff = get_all_tariff_typing === null || get_all_tariff_typing === void 0 ? void 0 : get_all_tariff_typing.filter((el) => el.category_id === 4);
            return companyTariff;
        }
        catch (error) {
            return error;
        }
    });
}
// tariffs
function GET_ALL_TARIFFS_UCELL(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { typingId } = req.params;
            const tariffTyping = yield model_1.default.GET_ALL_TARIFFS(Number(typingId), "ucell");
            if (tariffTyping) {
                return {
                    status: 200,
                    message: "Success!",
                    data: {
                        daily: tariffTyping === null || tariffTyping === void 0 ? void 0 : tariffTyping.filter((el) => el.deadline === 0),
                        weekly: tariffTyping === null || tariffTyping === void 0 ? void 0 : tariffTyping.filter((el) => el.deadline === 1),
                        moonthly: tariffTyping === null || tariffTyping === void 0 ? void 0 : tariffTyping.filter((el) => el.deadline === 2)
                    }
                };
            }
        }
        catch (error) {
            return error;
        }
    });
}
function GET_ALL_TARIFFS_BELEENE(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { typingId } = req.params;
            console.log(typingId);
            const tariffTyping = yield model_1.default.GET_ALL_TARIFFS(Number(typingId), "beleene");
            if (tariffTyping) {
                return {
                    status: 200,
                    message: "Success!",
                    data: {
                        daily: tariffTyping === null || tariffTyping === void 0 ? void 0 : tariffTyping.filter((el) => el.deadline === 0),
                        weekly: tariffTyping === null || tariffTyping === void 0 ? void 0 : tariffTyping.filter((el) => el.deadline === 1),
                        moonthly: tariffTyping === null || tariffTyping === void 0 ? void 0 : tariffTyping.filter((el) => el.deadline === 2)
                    }
                };
            }
        }
        catch (error) {
            return error;
        }
    });
}
function GET_ALL_TARIFFS_UZTELECOM(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { typingId } = req.params;
            console.log(typingId);
            const tariffTyping = yield model_1.default.GET_ALL_TARIFFS(Number(typingId), "uztelecom");
            if (tariffTyping) {
                return {
                    status: 200,
                    message: "Success!",
                    data: {
                        daily: tariffTyping === null || tariffTyping === void 0 ? void 0 : tariffTyping.filter((el) => el.deadline === 0),
                        weekly: tariffTyping === null || tariffTyping === void 0 ? void 0 : tariffTyping.filter((el) => el.deadline === 1),
                        moonthly: tariffTyping === null || tariffTyping === void 0 ? void 0 : tariffTyping.filter((el) => el.deadline === 2)
                    }
                };
            }
        }
        catch (error) {
            return error;
        }
    });
}
function GET_ALL_TARIFFS_MOBIUZ(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { typingId } = req.params;
            console.log(typingId);
            const tariffTyping = yield model_1.default.GET_ALL_TARIFFS(Number(typingId), "mobiuz");
            if (tariffTyping) {
                return {
                    status: 200,
                    message: "Success!",
                    data: {
                        daily: tariffTyping === null || tariffTyping === void 0 ? void 0 : tariffTyping.filter((el) => el.deadline === 0),
                        weekly: tariffTyping === null || tariffTyping === void 0 ? void 0 : tariffTyping.filter((el) => el.deadline === 1),
                        moonthly: tariffTyping === null || tariffTyping === void 0 ? void 0 : tariffTyping.filter((el) => el.deadline === 2)
                    }
                };
            }
        }
        catch (error) {
            return error;
        }
    });
}
// get one
function GET_ONE_TARIFF(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { tariffId } = req.params;
            const oneTarif = yield model_1.default.GET_ONE_TARIFF(Number(tariffId));
            return oneTarif;
        }
        catch (error) {
            return error;
        }
    });
}
exports.default = {
    GET_ALL_TARIFF_TYPE_UCELL,
    GET_ALL_TARIFF_TYPE_BELEENE,
    GET_ALL_TARIFF_TYPE_UZTELECOM,
    GET_ALL_TARIFF_TYPE_MOBIUZ,
    GET_ALL_TARIFFS_UCELL,
    GET_ALL_TARIFFS_BELEENE,
    GET_ALL_TARIFFS_UZTELECOM,
    GET_ALL_TARIFFS_MOBIUZ,
    GET_ONE_TARIFF,
};
