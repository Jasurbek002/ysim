import { FastifyInstance } from "fastify/types/instance";
import controller from "./controller";
import { REST } from "../../utils/endipoints";
import { DeviceData, DeviceSchema, TokenSchema } from "./scheam";

const pushRouter = (router: FastifyInstance, option: any, done: any) => {
  router.post<{ Body: DeviceData }>(
    REST.DEVICE_REG,
    { schema: { body: DeviceSchema } },
    controller.DEVICE_REG
  );

  router.post<{ Body: DeviceData }>(
    REST.ADD_FCM_TOKEN,
    { schema: { body: TokenSchema } },
    controller.ADD_FCM_TOKEN
  );

  done();
};

export default pushRouter;
