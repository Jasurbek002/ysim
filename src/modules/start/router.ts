import { FastifyInstance } from "fastify/types/instance";
import controller from "./controller";
import { REST } from "../../utils/endipoints";

const startRouter = (router: FastifyInstance, option: any, done: any) => {
  router.get(REST.START, controller.START);
  router.get(REST.OFFLINE, controller.OFFLINE);
  router.put(REST.UPDATED_DISABLED, controller.UPDATED_DISEBLED);
  router.get("/update/status/:deviceId", controller.GET_STATUS);
  router.put('/update/on/:deviceId',controller.UPDATED_ENABLE)
  router.put('/update/all/on',controller.UPDATED_ENABLE_ALL)
  router.get("/zip/test", controller.FILE_TEST);
  router.post(
    "/zip/add",
    { preHandler: controller.uploadZip },
    controller.ADD_ZIP_FILE
  );
  router.delete("/zip/delete", controller.DELETE_ZIP);
  done();
};    

export default startRouter;
