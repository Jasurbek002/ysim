import { fetch, fetchAll } from "../../lib/database";
import { GET_ALL_TARIFF_TYPEING } from "./query";


async function GET_ALL_TARIFF_TYPE(){
    try {
        const data = await fetchAll(GET_ALL_TARIFF_TYPEING)
    } catch (error) {
        throw error
    }
}

export default {
    GET_ALL_TARIFF_TYPE
}