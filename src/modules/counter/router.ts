import { FastifyInstance } from "fastify/types/instance";
import controller from "./controller";
import { REST } from "../../utils/endipoints";
import { CounterData, CounterSchema } from "./schema";

const couterRouter = (router: FastifyInstance, option: any, done: any) => {
  router.post(REST.CREATE_COUNTER, controller.CREATE_COUNTER);
  done();
};

export default couterRouter;
