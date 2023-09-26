import {
  FastifyReplyType,
  FastifyRequestType,
} from "fastify/types/type-provider";
import model from "./model";
import { Counter, CounterData } from "./schema";

async function CREATE_COUNTER(
  req: FastifyRequestType,
  res: FastifyReplyType
): Promise<object | any> {
  try {
    const { counter } = req.body as any;
    const { data } = await model.CREATE_COUNTER(counter);
    if (data) return data;
  } catch (error) {
    return error;
  }
}

export default {
  CREATE_COUNTER,
};
