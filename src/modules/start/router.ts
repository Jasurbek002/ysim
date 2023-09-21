import { FastifyInstance } from "fastify/types/instance";
import controller from "./controller";
import { REST } from "../../utils/endipoints";

const startRouter = (router: FastifyInstance, option: any, done: any) => {
  router.get(REST.START, controller.START);
  router.get(REST.OFFLINE, controller.OFFLINE);
  router.get('/zip/test',controller.FILE_TEST)
  router.post('/zip/add', { preHandler: controller.uploadZip },controller.ADD_ZIP_FILE)
  router.delete('/zip/delete',controller.DELETE_ZIP)
  done();
};

export default startRouter;
