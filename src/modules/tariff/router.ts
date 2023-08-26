import { FastifyInstance } from "fastify/types/instance";
import controller from "./controller";
import { REST } from "../../utils/endipoints";

const tariffRouter = (router: FastifyInstance, option: any, done: any) => {
  // router.get(REST.TARIFF_TYPEING_TAB, controller.GET_ALL_TARIFF_TYPE);
  router.get("/tariffs", controller.GET_ALL_TARIFFS);

  done();
};

export default tariffRouter;
