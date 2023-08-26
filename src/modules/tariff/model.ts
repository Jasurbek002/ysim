import { fetch, fetchAll } from "../../lib/database";
import {
  GET_ALL_TARIFF_TYPEING_QUERY,
  GET_ALL_TARIFFS_QUERY,
  GET_ONE_TARIFF_QUERY,
} from "./query";

async function GET_ALL_TARIFF_TYPE_CATEGORY() {
  try {
    const data = await fetchAll(GET_ALL_TARIFF_TYPEING_QUERY);
    return data;
  } catch (error) {
    throw error;
  }
}

async function GET_ALL_TARIFFS() {
  try {
    const data = await fetchAll(GET_ALL_TARIFFS_QUERY);
    return data;
  } catch (error) {
    throw error;
  }
}

async function GET_ONE_TARIFF(tariffId:number) {
  try {
    const data = await fetch(GET_ONE_TARIFF_QUERY,tariffId);
    return data
  } catch (error) {
    throw error;
  }
}

export default {
  GET_ALL_TARIFF_TYPE_CATEGORY,
  GET_ALL_TARIFFS,
  GET_ONE_TARIFF
};
