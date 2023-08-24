"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotfiySchema = void 0;
const typebox_1 = require("@sinclair/typebox");
const NotfiySchema = typebox_1.Type.Object({
    title: typebox_1.Type.String(),
    message: typebox_1.Type.String(),
    topic: typebox_1.Type.String(),
    token: typebox_1.Type.String(),
});
exports.NotfiySchema = NotfiySchema;
