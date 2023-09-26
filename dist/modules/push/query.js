"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENEBLE_PUSH = exports.GET_ALL_ORDERS_QUERY = void 0;
exports.GET_ALL_ORDERS_QUERY = `
select service_procedure.get_all_package_counter_month();
`;
exports.ENEBLE_PUSH = `
call service_procedure.added_have_notification_to_package_counter($1,$2);
`;
