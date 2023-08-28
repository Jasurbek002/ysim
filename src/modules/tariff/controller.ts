import {
  FastifyReplyType,
  FastifyRequestType,
} from "fastify/types/type-provider";
import model from "./model";
import { Tariffs } from "./types";

interface TariffType {
  tariff_typing_id: number;
  name: string;
  category_id: number;
  status: number;
}

interface TariffParam {
  typingId: number;
}



// tab category
async function GET_ALL_TARIFF_TYPE_UCELL(
  req: FastifyRequestType,
  rep: FastifyReplyType
) {
  try {
    const { get_all_tariff_typing } =
      await model.GET_ALL_TARIFF_TYPE_CATEGORY();
    const companyTariff = get_all_tariff_typing?.filter(
      (el: TariffType) => el.category_id === 1
    );
    return companyTariff;
  } catch (error) {
    return error;
  }
}

async function GET_ALL_TARIFF_TYPE_BELEENE(
  req: FastifyRequestType,
  rep: FastifyReplyType
) {
  try {
    const { get_all_tariff_typing } =
      await model.GET_ALL_TARIFF_TYPE_CATEGORY();
    const companyTariff = get_all_tariff_typing?.filter(
      (el: TariffType) => el.category_id === 2
    );
    return companyTariff;
  } catch (error) {
    return error;
  }
}

async function GET_ALL_TARIFF_TYPE_UZTELECOM(
  req: FastifyRequestType,
  rep: FastifyReplyType
) {
  try {
    const { get_all_tariff_typing } =
      await model.GET_ALL_TARIFF_TYPE_CATEGORY();
    const companyTariff = get_all_tariff_typing?.filter(
      (el: TariffType) => el.category_id === 3
    );
    return companyTariff;
  } catch (error) {
    return error;
  }
}

async function GET_ALL_TARIFF_TYPE_MOBIUZ(
  req: FastifyRequestType,
  rep: FastifyReplyType
) {
  try {
    const { get_all_tariff_typing } =
      await model.GET_ALL_TARIFF_TYPE_CATEGORY();
    const companyTariff = get_all_tariff_typing?.filter(
      (el: TariffType) => el.category_id === 4
    );
    return companyTariff;
  } catch (error) {
    return error;
  }
}

// tariffs
async function GET_ALL_TARIFFS_UCELL(req: FastifyRequestType, rep: FastifyReplyType) {
  try {
    const { typingId } = req.params as TariffParam;
    const tariffTyping: Tariffs[] = await model.GET_ALL_TARIFFS(Number(typingId), "ucell");
    if(tariffTyping){
      return {
        status:200,
        message:"Success!",
        data:{
          daily:tariffTyping?.filter((el:Tariffs) => el.deadline === 0),
          weekly:tariffTyping?.filter((el:Tariffs) => el.deadline === 1),
          moonthly:tariffTyping?.filter((el:Tariffs) => el.deadline === 2)
        }
      }
    }
  } catch (error) {
    return error;
  }
}

async function GET_ALL_TARIFFS_BELEENE(req: FastifyRequestType, rep: FastifyReplyType) {
  try {
    const { typingId } = req.params as TariffParam;
    console.log(typingId)
    const tariffTyping: Tariffs[] = await model.GET_ALL_TARIFFS(Number(typingId), "beleene");
   if(tariffTyping){
      return {
        status:200,
        message:"Success!",
        data:{
          daily:tariffTyping?.filter((el:Tariffs) => el.deadline === 0),
          weekly:tariffTyping?.filter((el:Tariffs) => el.deadline === 1),
          moonthly:tariffTyping?.filter((el:Tariffs) => el.deadline === 2)
        }
      }
    }
  } catch (error) {
    return error;
  }
}

async function GET_ALL_TARIFFS_UZTELECOM(req: FastifyRequestType, rep: FastifyReplyType) {
  try {
    const { typingId } = req.params as TariffParam;
    console.log(typingId)
    const tariffTyping: Tariffs[] = await model.GET_ALL_TARIFFS(Number(typingId), "uztelecom");
   if(tariffTyping){
      return {
        status:200,
        message:"Success!",
        data:{
          daily:tariffTyping?.filter((el:Tariffs) => el.deadline === 0),
          weekly:tariffTyping?.filter((el:Tariffs) => el.deadline === 1),
          moonthly:tariffTyping?.filter((el:Tariffs) => el.deadline === 2)
        }
      }
    }
  } catch (error) {
    return error;
  }
}

async function GET_ALL_TARIFFS_MOBIUZ(req: FastifyRequestType, rep: FastifyReplyType) {
  try {
    const { typingId } = req.params as TariffParam;
    console.log(typingId)
    const tariffTyping: Tariffs[] = await model.GET_ALL_TARIFFS(Number(typingId), "mobiuz");
   if(tariffTyping){
      return {
        status:200,
        message:"Success!",
        data:{
          daily:tariffTyping?.filter((el:Tariffs) => el.deadline === 0),
          weekly:tariffTyping?.filter((el:Tariffs) => el.deadline === 1),
          moonthly:tariffTyping?.filter((el:Tariffs) => el.deadline === 2)
        }
      }
    }
  } catch (error) {
    return error;
  }
}

// get one
async function GET_ONE_TARIFF(req: FastifyRequestType, rep: FastifyReplyType) {
  try {
    const { tariffId }: any = req.params;
    const oneTarif = await model.GET_ONE_TARIFF(Number(tariffId));
    return oneTarif;
  } catch (error) {
    return error;
  }
}

export default {
  GET_ALL_TARIFF_TYPE_UCELL,
  GET_ALL_TARIFF_TYPE_BELEENE,
  GET_ALL_TARIFF_TYPE_UZTELECOM,
  GET_ALL_TARIFF_TYPE_MOBIUZ,
  GET_ALL_TARIFFS_UCELL,
  GET_ALL_TARIFFS_BELEENE,
  GET_ALL_TARIFFS_UZTELECOM,
  GET_ALL_TARIFFS_MOBIUZ,
  GET_ONE_TARIFF,
};
