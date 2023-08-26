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
    const tariffTyping = await model.GET_ALL_TARIFF_TYPE_CATEGORY();
    return tariffTyping;
  } catch (error) {
    return error;
  }
}

async function GET_ALL_TARIFFS(req: FastifyRequestType, rep: FastifyReplyType) {
  try {
    const tariffTyping: any = await model.GET_ALL_TARIFFS();
    console.log(tariffTyping);
    return JSON.parse(tariffTyping[0].get_all_category_tariff);
  } catch (error) {
    return error;
  }
}

async function GET_ONE_TARIFF(req: FastifyRequestType, rep: FastifyReplyType) {
  try {
    const { tariffId }: any = req.params;
    const oneTarif = await model.GET_ONE_TARIFF(tariffId);
    return oneTarif;
  } catch (error) {
    return error;
  }
}

export default {
  GET_ALL_TARIFF_TYPE,
  GET_ALL_TARIFFS,
  GET_ONE_TARIFF,
};
