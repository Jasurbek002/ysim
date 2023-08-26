import {
  FastifyReplyType,
  FastifyRequestType,
} from "fastify/types/type-provider";
import model from "./model";

async function GET_ALL_TARIFF_TYPE(
  req: FastifyRequestType,
  rep: FastifyReplyType
) {
  try {
    const tariffTyping = await model.GET_ALL_TARIFF_TYPE();
  } catch (error) {
    return error;
  }
}


async function GET_ALL_TARIFFS(
  req: FastifyRequestType,
  rep: FastifyReplyType
) {
  try {
    const tariffTyping = await model.GET_ALL_TARIFFS();
    return tariffTyping
  } catch (error) {
    return error;
  }
}


export default {
  GET_ALL_TARIFF_TYPE,
  GET_ALL_TARIFFS
};
