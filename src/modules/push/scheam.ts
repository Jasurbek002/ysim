import { Type, Static } from "@sinclair/typebox";

const DeviceSchema = Type.Object({
  model: Type.String(),
  device_info: Type.String(),
  unique_id: Type.String(),
  device_type: Type.String(),
});

const TokenSchema = Type.Object({
  fcmToken: Type.String(),
  deviceId: Type.String(),
  userId: Type.Number(),
});

const PushSchema = Type.Object({
  package_counter_id: Type.Number(),
  device_id: Type.String(),
});

type TokenData = Static<typeof TokenSchema>;
type PushData = Static<typeof PushSchema>;
type DeviceData = Static<typeof DeviceSchema>;

export {
  DeviceSchema,
  DeviceData,
  TokenSchema,
  TokenData,
  PushData,
  PushSchema,
};
