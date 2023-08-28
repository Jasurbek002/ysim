import { fetch, fetchAll } from "../../lib/database";
import {
  GET_ALL_TARIFF_TYPEING_QUERY,
  GET_ALL_TARIFFS_QUERY,
  GET_ONE_TARIFF_QUERY,
} from "./query";
import { Tariffs } from "./types";
async function GET_ALL_TARIFF_TYPE_CATEGORY() {
  try {
    const data: any = await fetchAll(GET_ALL_TARIFF_TYPEING_QUERY);
    return data[0];
  } catch (error) {
    throw error;
  }
}

async function GET_ALL_TARIFFS(typingId: number, company: string) {
  try {
    const data: any = await fetchAll(GET_ALL_TARIFFS_QUERY);
    const parserData = JSON.parse(data[0].get_all_category_tariff);
    const sorted = parserData.filter(
      (el: Tariffs) =>
        el.tariff_typing_id === typingId &&
        el.company_name.toLowerCase() === company
    );
    return sorted;
  } catch (error) {
    throw error;
  }
}

async function GET_ONE_TARIFF(tariffId: number) {
  try {
    
    const data = await fetch(GET_ONE_TARIFF_QUERY, tariffId);
    return data;
  } catch (error) {
    throw error;
  }
}

export default {
  GET_ALL_TARIFF_TYPE_CATEGORY,
  GET_ALL_TARIFFS,
  GET_ONE_TARIFF,
};
