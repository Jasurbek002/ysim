import { fetch, fetchAll } from "../../lib/database";

import { GET_ALL_PACKAGES, GET_ONE_NET_QUERY } from "./query";

// net
async function GET_NET_SIMPLE() {
  try {
    const data: any = await fetchAll(GET_ALL_PACKAGES);
    const dataJson = JSON.parse(data[0]?.get_all_category_paket);
    let net = dataJson?.filter(
      (el: any) => el.type === "net" && el.internet_type === "simple"
    );
    return net;
  } catch (error) {
    throw error;
  }
}

async function GET_NET_ROUMING() {
  try {
    const data: any = await fetchAll(GET_ALL_PACKAGES);
    const dataJson = JSON.parse(data[0]?.get_all_category_paket);
    let net = dataJson?.filter(
      (el: any) => el.type === "net" && el.internet_type === "rouming"
    );
    return net;
  } catch (error) {
    throw error;
  }
}

async function GET_NET_NON() {
  try {
    const data: any = await fetchAll(GET_ALL_PACKAGES);
    const dataJson = JSON.parse(data[0]?.get_all_category_paket);
    let net = dataJson?.filter(
      (el: any) => el.type === "net" && el.internet_type === "non"
    );
    return net;
  } catch (error) {
    throw error;
  }
}

// sms
async function GET_ALL_SMS(company: string) {
  try {
    const data: any = await fetchAll(GET_ALL_PACKAGES);
    const dataJson = JSON.parse(data[0]?.get_all_category_paket);
    let net = dataJson?.filter(
      (el: any) => el.type === "sms" && el.name === company
    );
    return net;
  } catch (error) {
    throw error;
  }
}


// min
async function GET_ALL_MIN(company: string) {
    try {
      const data: any = await fetchAll(GET_ALL_PACKAGES);
      const dataJson = JSON.parse(data[0]?.get_all_category_paket);
      let net = dataJson?.filter(
        (el: any) => el.type === "min" && el.name === company
      );
      return net;
    } catch (error) {
      throw error;
    }
  }

// get one
async function GET_ONE({ packageId }: any) {
  try {
    const data = await fetch(GET_ONE_NET_QUERY, packageId);
    return data;
  } catch (error) {
    throw error;
  }
}

export default {
  GET_NET_SIMPLE,
  GET_NET_ROUMING,
  GET_NET_NON,
  GET_ONE,
  GET_ALL_SMS,
  GET_ALL_MIN
};
