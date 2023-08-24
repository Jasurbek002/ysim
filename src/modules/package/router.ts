import { FastifyInstance } from "fastify/types/instance";
import controller from "./controller";
import { REST } from "../../utils/endipoints";

const tariffRouter = (router: FastifyInstance, option: any, done: any) => {
  router.get(REST.TARIFF_TYPEING_TAB, controller.GET_ALL_TARIFF_TYPE);
  done();
};

export default tariffRouter;