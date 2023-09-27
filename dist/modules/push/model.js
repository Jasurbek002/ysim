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
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../../lib/database");
const api_1 = require("../../lib/api");
const query_1 = require("./query");
function DEVICE_REG(device) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data } = yield api_1.apiRegister.post("/register/device", device);
        return data;
    });
}
function ADD_FCM_TOKEN(push) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield api_1.apiNotfiy.post("/notification/create/push", push);
            return data;
        }
        catch (error) {
            throw error;
        }
    });
}
function PUSH_ENEBLE(push) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (push) {
                const data = yield (0, database_1.fetch)(query_1.ENEBLE_PUSH, JSON.stringify(push), {});
                return data;
            }
        }
        catch (error) {
            throw error;
        }
    });
}
function GET_ALL_ORDERS() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield (0, database_1.fetchAll)(query_1.GET_ALL_ORDERS_QUERY);
            return data[0].get_all_package_counter_month;
        }
        catch (error) {
            throw error;
        }
    });
}
function SEND_NOTIFY(device_id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const option = {
                title: "Ussd quick",
                message: "Xurmatli mijoz sizni xarid qilgan paketingiz ertaga o'chadi yangi paket sotib oling",
            };
            const { data } = yield api_1.apiNotfiy.post(`/notification/send/by/deviceId/${device_id}`, option);
            return data;
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.default = {
    DEVICE_REG,
    ADD_FCM_TOKEN,
    GET_ALL_ORDERS,
    SEND_NOTIFY,
    PUSH_ENEBLE,
};
