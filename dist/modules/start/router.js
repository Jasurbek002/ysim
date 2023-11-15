"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = __importDefault(require("./controller"));
const endipoints_1 = require("../../utils/endipoints");
const startRouter = (router, option, done) => {
    router.get(endipoints_1.REST.START, controller_1.default.START);
    router.get(endipoints_1.REST.OFFLINE, controller_1.default.OFFLINE);
    router.put(endipoints_1.REST.UPDATED_DISABLED, controller_1.default.UPDATED_DISEBLED);
    router.get("/update/status/:deviceId", controller_1.default.GET_STATUS);
    router.put('/update/on/:deviceId', controller_1.default.UPDATED_ENABLE);
    router.put('/update/all/on', controller_1.default.UPDATED_ENABLE_ALL);
    router.get("/zip/test", controller_1.default.FILE_TEST);
    router.post("/zip/add", { preHandler: controller_1.default.uploadZip }, controller_1.default.ADD_ZIP_FILE);
    router.delete("/zip/delete", controller_1.default.DELETE_ZIP);
    router.put(`/test/${endipoints_1.REST.UPDATED_DISABLED}`, controller_1.default.UPDATED_DISEBLED);
    router.get("/test/update/status/:deviceId", controller_1.default.TEST_GET_STATUS);
    router.put('/test/update/on/:deviceId', controller_1.default.TEST_UPDATED_ENABLE);
    router.put('/test/update/all/on', controller_1.default.TEST_UPDATED_ENABLE_ALL);
    router.post("/test/zip/add", { preHandler: controller_1.default.uploadTestZip }, controller_1.default.ADD_ZIP_FILE_TEST);
    done();
};
exports.default = startRouter;
