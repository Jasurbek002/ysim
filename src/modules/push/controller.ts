import {
  FastifyReplyType,
  FastifyRequestType,
} from "fastify/types/type-provider";
import modul from "./model";
import { DeviceData, TokenData } from "./scheam";

async function DEVICE_REG(req: FastifyRequestType, res: FastifyReplyType) {
  const { model, device_info, unique_id, device_type } = req.body as DeviceData;
  const opt = {
    model: model,
    deviceInfo: device_info,
    uniqueId: unique_id,
    deviceType: device_type,
  };
  const data = await modul.DEVICE_REG(opt);
  if (data) return data;
}

async function ADD_FCM_TOKEN(req: FastifyRequestType, res: FastifyReplyType) {
  try {
    const { fcmToken, deviceId, userId }: TokenData = req.body as TokenData;

    const opt = {
      fcm_token: fcmToken,
      device_id: deviceId,
      user_id: userId,
    };

    const data = await modul.ADD_FCM_TOKEN(opt);
    if (data && data.success === true) {
      return {
        status: 201,
        message: "token successfuly seved",
        success: true,
      };
    }
    return data;
  } catch (error) {
    return error;
  }
}

export default {
  DEVICE_REG,
  ADD_FCM_TOKEN,
};
