"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REST = void 0;
// route
exports.REST = {
    // global api
    START: "/",
    OFFLINE: "/offline",
    GET_ONE_TARIFF: "/tariff/:tariffId",
    GET_TARIFF_TYPEING_ID: "/tariff/:id",
    GET_ONE: "/package/:packageId",
    // category tab tarifs
    TARIFF_CATEGORY_BELEENE: "/tariff/category/beleene",
    TARIFF_CATEGORY_UZTELECOM: "/tariff/category/uztelecom",
    TARIFF_CATEGORY_UCELL: "/tariff/category/ucell",
    TARIFF_CATEGORY_MOBIUZ: "/tariff/category/mobiuz",
    // tariff typing 
    GET_TARIFFS_BELEENE: "/tariffs/beleene/:typingId",
    GET_TARIFFS_UZTELECOM: "/tariffs/uztelecom/:typingId",
    GET_TARIFFS_UCELL: "/tariffs/ucell/:typingId",
    GET_TARIFFS_MOBIUZ: "/tariffs/mobiuz/:typingId",
    // net simple
    NET_SMPLE_BELINNE: "/net/simple/beleene",
    NET_SMPLE_UZTELECOM: "/net/simple/uztelecom",
    NET_SMPLE_UCELL: "/net/simple/ucell",
    NET_SMPLE_MOBIUZ: "/net/simple/mobiuz",
    // net rouming
    NET_ROUMING_BELINNE: "/net/rouming/beleene",
    NET_ROUMING_UZTELECOM: "/net/rouming/uztelecom",
    NET_ROUMING_UCELL: "/net/rouming/ucell",
    NET_ROUMING_MOBIUZ: "/net/rouming/mobiuz",
    // net non-speack
    NET_NON_BELINNE: "/net/non/beleene",
    NET_NON_UZTELECOM: "/net/non/uztelecom",
    NET_NON_UCELL: "/net/non/ucell",
    NET_NON_MOBIUZ: "/net/non/mobiuz",
    // sms
    SMS_BELEENE: "/sms/beleene",
    SMS_UZTELECOM: "/sms/uztelecom",
    SMS_UCELL: "/sms/ucell",
    SMS_MOBIUZ: "/sms/mobiuz",
    // min
    MIN_BELEENE: "/min/beleene",
    MIN_UZTELECOM: "/min/uztelecom",
    MIN_UCELL: "/min/ucell",
    MIN_MOBIUZ: "/min/mobiuz",
    // fcm token
    ADD_FCM_TOKEN: "/fcm/add",
    // device register
    DEVICE_REG: "/device/register",
    // counter
    CREATE_COUNTER: "/counter/add",
    ENEBLE_PUSH: "/eneble/push",
    UPDATED_DISABLED: "/update/off"
};
