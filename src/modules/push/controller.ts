import {
  FastifyReplyType,
  FastifyRequestType,
} from "fastify/types/type-provider";
import modul from "./model";
import { DeviceData, PushData, TokenData } from "./scheam";

import cron from "node-cron";

cron.schedule("0 0 * * *", async () => {
  try {
    const orders = await modul.GET_ALL_ORDERS();
    const currentDate: any = new Date();
    orders.forEach(async (el: any) => {
      const paketPurchaseDate: any = new Date(el.order_date);
      const daysSincePurchase = Math.floor(
        (currentDate - paketPurchaseDate) / (1000 * 60 * 60 * 24)
      );
      console.log(daysSincePurchase);
      if (daysSincePurchase >= 27) {
        const data = await modul.SEND_NOTIFY(
          "626b9558-d036-4552-b9db-053936280f62"
        );
        console.log(data);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

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

async function ENEBLE_PUSH(req: FastifyRequestType, res: FastifyReplyType) {
  try {
    const {package_counter_id,device_id} = req.body as PushData
    const data = await modul.PUSH_ENEBLE({
      package_counter_id,device_id
    })
    return data
  } catch (error) {
    throw error
  }
}

export default {
  DEVICE_REG,
  ADD_FCM_TOKEN,
  ENEBLE_PUSH
};
