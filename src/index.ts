import fastify, { FastifyInstance } from "fastify";
import fastifyStatic from "@fastify/static";
import path from "path";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { swaggerOption } from "./lib/swagger";
import cors from "@fastify/cors";
import { multer } from "./lib/multer";
import startRouter from "./modules/start/router";
import tariffRouter from "./modules/tariff/router";
import packageRouter from "./modules/package/router";
import pushRouter from "./modules/push/router";
import couterRouter from "./modules/counter/router";

const app: FastifyInstance = fastify({ logger: true });
const port = process.env.PORT || 5050;
const host = "RENDER" in process.env ? `0.0.0.0` : `localhost`;

!(async () => {
  await app.register(cors, {
    origin: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET, POST, PUT, DELETE, PATCH"],
  });
})();

app.register(fastifyStatic, {
  root: path.join(process.cwd(), "uploads"),
});

app.register(multer.contentParser);

app.register(fastifySwagger);
app.register(fastifySwaggerUi, swaggerOption);

app.register(startRouter);
app.register(tariffRouter, { prefix: "/v1" });
app.register(packageRouter, { prefix: "/v1" });
app.register(pushRouter, { prefix: "/v1" });
app.register(couterRouter, { prefix: "/v1" });

app.listen(
  { host: host, port: Number(port) },
  async (err: any, address: any) => {
    if (err) {
      app.log.error(JSON.parse(err));
      process.exit(1);
    }
    console.log(`Server is running at ${address}`);
  }
);
