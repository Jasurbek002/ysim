"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_TARIFFS = exports.GET_ALL_TARIFF_TYPEING = void 0;
exports.GET_ALL_TARIFF_TYPEING = `
select service_procedure.get_all_tariff_typing()
`;
exports.GET_ALL_TARIFFS = `
select service_procedure.get_all_category_tariff()
`;
