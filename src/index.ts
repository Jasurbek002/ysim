import fastify, { FastifyInstance } from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { swaggerOption } from "./lib/swagger";

const app: FastifyInstance = fastify({ logger: true });
const port = process.env.PORT || 3000;
const host = "RENDER" in process.env ? `0.0.0.0` : `localhost`;

import startRouter from "./modules/start/router";
import tariffRouter from "./modules/tariff/router";

app.register(fastifySwagger);
app.register(fastifySwaggerUi, swaggerOption);

app.register(startRouter)
app.register(tariffRouter)



app.listen(
  { host: host, port: Number(port) },
  async (err: any, address: any) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
    console.log(`Server is running at ${address}`);
  }
);
