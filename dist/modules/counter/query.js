"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CREATE_USSD_COUNTER = void 0;
exports.CREATE_USSD_COUNTER = `
call service_procedure.create_package_counter($1,$2);
`;
