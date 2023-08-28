import { FastifyInstance } from "fastify/types/instance";
import controller from "./controller";
import { REST } from "../../utils/endipoints";

const tariffRouter = (router: FastifyInstance, option: any, done: any) => {
  // tabs
  router.get(REST.TARIFF_CATEGORY_BELEENE, controller.GET_ALL_TARIFF_TYPE_BELEENE);
  router.get(REST.TARIFF_CATEGORY_UCELL, controller.GET_ALL_TARIFF_TYPE_UCELL);
  router.get(REST.TARIFF_CATEGORY_UZTELECOM, controller.GET_ALL_TARIFF_TYPE_UZTELECOM);
  router.get(REST.TARIFF_CATEGORY_MOBIUZ, controller.GET_ALL_TARIFF_TYPE_MOBIUZ);

  // tariffs
  router.get(REST.GET_TARIFFS_UCELL, controller.GET_ALL_TARIFFS_UCELL);
  router.get(REST.GET_TARIFFS_BELEENE, controller.GET_ALL_TARIFFS_BELEENE)
  router.get(REST.GET_TARIFFS_UZTELECOM, controller.GET_ALL_TARIFFS_UZTELECOM)
  router.get(REST.GET_TARIFFS_MOBIUZ, controller.GET_ALL_TARIFFS_MOBIUZ)

  // get one
  router.get(REST.GET_ONE_TARIFF, controller.GET_ONE_TARIFF)
  done();
};

export default tariffRouter;
