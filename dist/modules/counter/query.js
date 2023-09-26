"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CREATE_USSD_COUNTER = void 0;
exports.CREATE_USSD_COUNTER = `
select service_procedure.create_package_counter($1);
`;
