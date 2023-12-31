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
const fastify_1 = __importDefault(require("fastify"));
const static_1 = __importDefault(require("@fastify/static"));
const path_1 = __importDefault(require("path"));
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const swagger_2 = require("./lib/swagger");
const cors_1 = __importDefault(require("@fastify/cors"));
const multer_1 = require("./lib/multer");
const router_1 = __importDefault(require("./modules/start/router"));
const router_2 = __importDefault(require("./modules/tariff/router"));
const router_3 = __importDefault(require("./modules/package/router"));
const router_4 = __importDefault(require("./modules/push/router"));
const router_5 = __importDefault(require("./modules/counter/router"));
const app = (0, fastify_1.default)({ logger: true });
const port = process.env.PORT || 5050;
const host = "RENDER" in process.env ? `0.0.0.0` : `localhost`;
!(() => __awaiter(void 0, void 0, void 0, function* () {
    yield app.register(cors_1.default, {
        origin: true,
        allowedHeaders: ["Content-Type", "Authorization"],
        methods: ["GET, POST, PUT, DELETE, PATCH"],
    });
}))();
app.register(static_1.default, {
    root: path_1.default.join(process.cwd(), "uploads"),
});
app.register(multer_1.multer.contentParser);
app.register(swagger_1.default);
app.register(swagger_ui_1.default, swagger_2.swaggerOption);
app.register(router_1.default);
app.register(router_2.default, { prefix: "/v1" });
app.register(router_3.default, { prefix: "/v1" });
app.register(router_4.default, { prefix: "/v1" });
app.register(router_5.default, { prefix: "/v1" });
app.listen({ host: host, port: Number(port) }, (err, address) => __awaiter(void 0, void 0, void 0, function* () {
    if (err) {
        app.log.error(JSON.parse(err));
        process.exit(1);
    }
    console.log(`Server is running at ${address}`);
}));
