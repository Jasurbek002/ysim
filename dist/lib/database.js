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
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAll = exports.fetch = void 0;
const pg_1 = require("pg");
const config_1 = require("../config");
const pool = new pg_1.Pool(config_1.dbConfig);
function fetch(Sql, ...params) {
    return __awaiter(this, void 0, void 0, function* () {
        const cilent = yield pool.connect();
        try {
            const { rows: [row], } = yield cilent.query(Sql, params.length ? params : null);
            return row;
        }
        catch (error) {
            console.log(error);
        }
        finally {
            yield cilent.release();
        }
    });
}
exports.fetch = fetch;
function fetchAll(Sql, ...params) {
    return __awaiter(this, void 0, void 0, function* () {
        const cilent = yield pool.connect();
        try {
            const { rows } = yield cilent.query(Sql, params.length ? params : null);
            return rows;
        }
        catch (error) {
            console.log(error);
        }
        finally {
            yield cilent.release();
        }
    });
}
exports.fetchAll = fetchAll;
