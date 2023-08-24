import { FastifyInstance } from "fastify/types/instance";
import controller from "./controller";
import { REST } from "../../utils/endipoints";

const startRouter = (router: FastifyInstance, option: any, done: any) => {
  router.get(REST.START, controller.START);
  done();
};

export default startRouter;
