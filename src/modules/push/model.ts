import { apiRegister, apiNotfiy } from "../../lib/api";

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

export default {
  DEVICE_REG,
  ADD_FCM_TOKEN,
};
