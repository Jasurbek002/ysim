import { FastifyInstance } from "fastify/types/instance";
import controller from "./controller";
import { REST } from "../../utils/endipoints";

const packageRouter = (router: FastifyInstance, option: any, done: any) => {
  // net
  router.get(REST.NET_SMPLE_BELINNE, controller.NET_SIMPLE_BELENE);
  router.get(REST.NET_SMPLE_UZTELECOM, controller.NET_SIMPLE_UZTELECOM);
  router.get(REST.NET_SMPLE_UCELL, controller.NET_SIMPLE_UCELL);
  router.get(REST.NET_SMPLE_MOBIUZ, controller.NET_SIMPLE_MOBIUZ);
  router.get(REST.NET_ROUMING_BELINNE, controller.NET_ROUMING_BELEENE);
  router.get(REST.NET_ROUMING_UZTELECOM, controller.NET_ROUMING_UZTELECOM);
  router.get(REST.NET_ROUMING_UCELL, controller.NET_ROUMING_UCELL);
  router.get(REST.NET_ROUMING_MOBIUZ, controller.NET_ROUMING_MOBIUZ);
  router.get(REST.NET_NON_BELINNE, controller.NET_NON_BELEENE);
  router.get(REST.NET_NON_UZTELECOM, controller.NET_NON_UZTELECOM);
  router.get(REST.NET_NON_UCELL, controller.NET_NON_UCELL);
  router.get(REST.NET_NON_MOBIUZ, controller.NET_NON_MOBIUZ);
  
  // sms
  router.get(REST.SMS_BELEENE, controller.SMS_BELEENE);
  router.get(REST.SMS_UZTELECOM, controller.SMS_UZTELECOM);
  router.get(REST.SMS_UCELL, controller.SMS_UCELL);
  router.get(REST.SMS_MOBIUZ, controller.SMS_MOBIUZ);

  // min
  router.get(REST.MIN_BELEENE, controller.MIN_BELEENE);
  router.get(REST.MIN_UZTELECOM, controller.MIN_UZTELECOM);
  router.get(REST.MIN_UCELL, controller.MIN_UCELL);
  router.get(REST.MIN_MOBIUZ, controller.MIN_MOBIUZ);

  // get one
  router.get(REST.GET_ONE, controller.GET_ONE);
  done();
};

export default packageRouter;
