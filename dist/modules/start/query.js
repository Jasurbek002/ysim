"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_UPDATE_STATUS = exports.UPDATED_OFF = exports.UPDATED_ON = void 0;
exports.UPDATED_ON = `
select service_procedure.create_zip_offline_online_true();
`;
exports.UPDATED_OFF = `
select service_procedure.create_zip_offline_online_false();
`;
exports.GET_UPDATE_STATUS = `
select service_procedure.get_zip_offline_online();
`;
