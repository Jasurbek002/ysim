"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const UserSchema = typebox_1.Type.Object({
    user_id: typebox_1.Type.Number(),
    profile_id: typebox_1.Type.Number(),
    device_id: typebox_1.Type.String(),
    auth_type: typebox_1.Type.Number(),
    login: typebox_1.Type.String(),
    password: typebox_1.Type.String(),
});
exports.UserSchema = UserSchema;
