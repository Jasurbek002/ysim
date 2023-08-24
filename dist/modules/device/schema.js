"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
// register static schema
const DeviceSchema = typebox_1.Type.Object({
    model: typebox_1.Type.String(),
    device_info: typebox_1.Type.String(),
    unique_id: typebox_1.Type.String(),
    device_type: typebox_1.Type.String(),
});
exports.DeviceSchema = DeviceSchema;
