"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ONE_TARIFF_QUERY = exports.GET_ALL_TARIFFS_QUERY = exports.GET_ALL_TARIFF_TYPEING_QUERY = void 0;
exports.GET_ALL_TARIFF_TYPEING_QUERY = `
select service_procedure.get_all_tariff_typing()
`;
exports.GET_ALL_TARIFFS_QUERY = `
select service_procedure.get_all_category_tariff()
`;
exports.GET_ONE_TARIFF_QUERY = `
select service_procedure.get_one_tariff($1)
`;
