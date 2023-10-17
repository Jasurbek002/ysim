"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../utils/constants");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const multer_1 = __importDefault(require("../../lib/multer"));
const api_1 = require("../../lib/api");
const endipoints_1 = require("../../utils/endipoints");
const uploadZip = multer_1.default.single("dist");
function START() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return {
                success: true,
                message: "wellcome to device!",
                url: constants_1.WEB_URL,
            };
        }
        catch (error) {
            return error;
        }
    });
}
function OFFLINE(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ussd = path_1.default.join(process.cwd(), "uploads", "dist.zip");
            const stats = fs_1.default.statSync(ussd);
            console.log(stats);
            if (stats.size > 0) {
                rep.download(stats);
            }
            else {
                return {
                    status: 404,
                    message: "file not found",
                };
            }
        }
        catch (error) {
            return error;
        }
    });
}
function ADD_ZIP_FILE(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield api_1.apiRegister.put(endipoints_1.REST.DEVICE_UPDATE_ALL_ON);
            if (data.success) {
                return {
                    status: 201,
                    message: "file upload end new updated",
                    isUpdated: data.data.updated,
                    last_update_file: data.data.dateTime
                };
            }
        }
        catch (error) {
            return error;
        }
    });
}
function FILE_TEST() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ussd = path_1.default.join(process.cwd(), "uploads", "dist.zip");
            const stats = fs_1.default.statSync(ussd);
            if (stats) {
                return {
                    isActive: true,
                    file_size: stats.size,
                    createdAt: stats.birthtime,
                };
            }
            else {
                return {
                    isActive: false,
                };
            }
        }
        catch (error) {
            return error;
        }
    });
}
function GET_STATUS(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { deviceId } = req.params;
            const { data } = yield api_1.apiRegister.post(`${endipoints_1.REST.DEVICE_GET_ME}/${deviceId}`);
            if (data)
                return data;
        }
        catch (error) {
            return error;
        }
    });
}
function DELETE_ZIP() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ussd = path_1.default.join(process.cwd(), "uploads", "dist.zip");
            const stats = fs_1.default.statSync(ussd);
            if (stats) {
                fs_1.default.unlinkSync(ussd);
                return {
                    status: 200,
                    message: "file delete",
                };
            }
            else {
                return {
                    status: 404,
                    message: "file not found",
                };
            }
        }
        catch (error) {
            return error;
        }
    });
}
function UPDATED_DISEBLED(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { deviceId } = req.params;
            const { data } = yield api_1.apiRegister.put(`${endipoints_1.REST.DEVICE_UPDATE_OFF}/${deviceId}`);
            if (data)
                return data;
        }
        catch (error) {
            return error;
        }
    });
}
function UPDATED_ENABLE(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { deviceId } = req.params;
            const { data } = yield api_1.apiRegister.put(`${endipoints_1.REST.DEVICE_UPDATE_ON}/${deviceId}`);
            if (data)
                return data;
        }
        catch (error) {
            return error;
        }
    });
}
function UPDATED_ENABLE_ALL(req, rep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield api_1.apiRegister.put(endipoints_1.REST.DEVICE_UPDATE_ALL_ON);
            if (data)
                return data;
        }
        catch (error) {
            return error;
        }
    });
}
exports.default = {
    START,
    OFFLINE,
    uploadZip,
    ADD_ZIP_FILE,
    FILE_TEST,
    DELETE_ZIP,
    UPDATED_DISEBLED,
    GET_STATUS,
    UPDATED_ENABLE,
    UPDATED_ENABLE_ALL
};
