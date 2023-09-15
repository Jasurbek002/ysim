"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterSchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const CounterSchema = typebox_1.Type.Object({
    category_id: typebox_1.Type.Number(),
    device_id: typebox_1.Type.String(),
    device_name: typebox_1.Type.String()
});
exports.CounterSchema = CounterSchema;
