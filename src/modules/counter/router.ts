import { FastifyInstance } from "fastify/types/instance";
import controller from "./controller";
import { REST } from "../../utils/endipoints";
import { CounterData, CounterSchema } from "./schema";


const couterRouter = (router: FastifyInstance, option: any, done: any) => {
  router.post<{ Body: CounterData }>(
    REST.CREATE_COUNTER,
    { schema: { body: CounterSchema } },
    controller.CREATE_COUNTER
  );
  done();
};

export default couterRouter;
