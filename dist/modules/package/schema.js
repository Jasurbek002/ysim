"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const NetSchema = typebox_1.Type.Object({
    companyName: typebox_1.Type.String()
});
exports.NetSchema = NetSchema;
