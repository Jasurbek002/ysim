"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ONE_NET_QUERY = exports.GET_ALL_PACKAGES = void 0;
exports.GET_ALL_PACKAGES = `
select service_procedure.get_all_category_paket()
`;
exports.GET_ONE_NET_QUERY = `
select service_procedure.get_one_paket($1)
`;
