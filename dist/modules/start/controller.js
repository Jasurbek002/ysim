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
const database_1 = require("../../lib/database");
const query_1 = require("./query");
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
                rep.download(ussd);
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
            const data = yield (0, database_1.fetch)(query_1.UPDATED_ON);
            if (data)
                return {
                    status: 201,
                    message: "File succesfuliy upload",
                    offline: data === null || data === void 0 ? void 0 : data.create_zip_offline_online_true,
                };
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
function GET_STATUS() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield (0, database_1.fetch)(query_1.GET_UPDATE_STATUS);
            if (data)
                return data === null || data === void 0 ? void 0 : data.get_zip_offline_online;
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
function UPDATED_DISEBLED() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield (0, database_1.fetch)(query_1.UPDATED_OFF);
            if (data)
                return data === null || data === void 0 ? void 0 : data.create_zip_offline_online_false;
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
};
