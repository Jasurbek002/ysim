import { fetch, fetchAll } from "../../lib/database";
import { apiRegister, apiNotfiy } from "../../lib/api";
import { ENEBLE_PUSH, GET_ALL_ORDERS_QUERY } from "./query";
import { PushData } from "./scheam";

async function DEVICE_REG(device: any) {
  const { data } = await apiRegister.post("/register/device", device);
  return data;
}

async function ADD_FCM_TOKEN(push: object) {
  try {
    const { data } = await apiNotfiy.post("/notification/create/push", push);
    return data;
  } catch (error) {
    throw error;
  }
}

async function PUSH_ENEBLE(push: PushData) {
  try {
    if (push) {
      const data = await fetch(ENEBLE_PUSH, JSON.stringify(push), {});
      return data;
    }
  } catch (error) {
    throw error;
  }
}

async function GET_ALL_ORDERS() {
  try {
    const data: any = await fetchAll(GET_ALL_ORDERS_QUERY);
    return data[0].get_all_package_counter_month;
  } catch (error) {
    throw error;
  }
}

async function SEND_NOTIFY(device_id: string) {
  try {
    const option = {
      title: "Ussd quick",
      message:
        "Xurmatli mijoz sizni xarid qilgan paketingiz ertaga o'chadi yangi paket sotib oling",
    };
    const { data } = await apiNotfiy.post(
      `/notification/send/by/deviceId/${device_id}`,
      option
    );
    return data;
  } catch (error) {
   console.log(error)
  }
}

export default {
  DEVICE_REG,
  ADD_FCM_TOKEN,
  GET_ALL_ORDERS,
  SEND_NOTIFY,
  PUSH_ENEBLE,
};
