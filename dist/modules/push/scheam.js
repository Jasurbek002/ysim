"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenSchema = exports.DeviceSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const DeviceSchema = typebox_1.Type.Object({
    model: typebox_1.Type.String(),
    device_info: typebox_1.Type.String(),
    unique_id: typebox_1.Type.String(),
    device_type: typebox_1.Type.String(),
});
exports.DeviceSchema = DeviceSchema;
const TokenSchema = typebox_1.Type.Object({
    fcmToken: typebox_1.Type.String(),
    deviceId: typebox_1.Type.String(),
    userId: typebox_1.Type.Number(),
});
exports.TokenSchema = TokenSchema;
