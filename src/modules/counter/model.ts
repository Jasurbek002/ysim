import { fetch, fetchAll } from "../../lib/database";
import { CREATE_USSD_COUNTER } from "./query";
import { Counter, CounterData } from "./schema";

async function CREATE_COUNTER(counter: Counter[]): Promise<object | any> {
  try {
    if (counter) {
      let data: any[] = [];
      let message: string[] = [];
      for (let i = 0; i < counter.length; i++) {
        const jsonData = JSON.stringify(counter[i]);
        const res = await fetch(CREATE_USSD_COUNTER, jsonData);
        if (res) {
          data.push(res?.create_package_counter);
        } else {
          message.push(`${counter[i].package_id} -- Bunday id da paket  yo'q`);
        }
      }
      return { data, message };
    }
  } catch (error) {
    console.log(error)
    throw error;
  }
}

export default {
  CREATE_COUNTER,
};
