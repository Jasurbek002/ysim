import { Type, Static } from "@sinclair/typebox";

const CounterSchema = Type.Object({
  //   counter: Type.Array(),
});
type CounterData = Static<typeof CounterSchema>;

interface Counter {
  category_id: number;
  device_id: string;
  device_name: string;
  package_id: number;
  order_date: string;
}

export { CounterSchema, CounterData, Counter };
