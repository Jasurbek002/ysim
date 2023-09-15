import { Type, Static } from "@sinclair/typebox";

const CounterSchema = Type.Object({
    category_id:Type.Number(),
    device_id:Type.String(),
    device_name:Type.String()
});
type CounterData = Static<typeof CounterSchema>;

export { CounterSchema, CounterData };