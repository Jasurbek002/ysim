"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REST = void 0;
// route
exports.REST = {
    // global api
    START: "/start",
    GET_ONE_TARIFF: "/tariff/:tariffId",
    GET_ONE: "/package/:packageId",
    TARIFF_TYPEING_TAB: "/tariffs",
    TARIFF_TYPEING_ID: "/tariff/:id",
    NET_SMPLE_BELINNE: "/net/simple/beleene",
    NET_SMPLE_UZTELECOM: "/net/simple/uztelecom",
    NET_SMPLE_UCELL: "/net/simple/ucell",
    NET_SMPLE_MOBIUZ: "/net/simple/mobiuz",
    NET_ROUMING_BELINNE: "/net/rouming/beleene",
    NET_ROUMING_UZTELECOM: "/net/rouming/uztelecom",
    NET_ROUMING_UCELL: "/net/rouming/ucell",
    NET_ROUMING_MOBIUZ: "/net/rouming/mobiuz",
    NET_NON_BELINNE: "/net/non/beleene",
    NET_NON_UZTELECOM: "/net/non/uztelecom",
    NET_NON_UCELL: "/net/non/ucell",
    NET_NON_MOBIUZ: "/net/non/mobiuz",
    SMS_BELEENE: "/sms/beleene",
    SMS_UZTELECOM: "/sms/uztelecom",
    SMS_UCELL: "/sms/ucell",
    SMS_MOBIUZ: "/sms/mobiuz",
    MIN_BELEENE: "/min/beleene",
    MIN_UZTELECOM: "/min/uztelecom",
    MIN_UCELL: "/min/ucell",
    MIN_MOBIUZ: "/min/mobiuz",
    // beleene
    //   BELEENE_TARIFF_TYPEING_TAB: "/beleene/tariffs",
    //   BELEENE_TARIFF_TYPEING_ID: "/beleene/tariff/:id",
    // ucell
    //   UCELL_TARIFF_TYPEING_TAB: "/ucell/tariffs",
    //   UCELL_TARIFF_TYPEING_ID: "/ucell/tariff/:id",
};
