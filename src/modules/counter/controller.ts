import {
  FastifyReplyType,
  FastifyRequestType,
} from "fastify/types/type-provider";
import model from "./model";
import { CounterData } from "./schema";

async function CREATE_COUNTER(
  req: FastifyRequestType,
  res: FastifyReplyType
): Promise<object | any> {
  try {
    const counter = req.body as CounterData;
    const data = await model.CREATE_COUNTER(counter);
    return data;
  } catch (error) {
    return error;
  }
}

export default {
  CREATE_COUNTER,
};