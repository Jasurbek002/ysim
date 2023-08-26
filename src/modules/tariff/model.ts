import { fetch, fetchAll } from "../../lib/database";
import { GET_ALL_TARIFF_TYPEING,GET_ALL_TARIFFS as GET_ALLTARIFFS } from "./query";


async function GET_ALL_TARIFF_TYPE(){
    try {
        const data = await fetchAll(GET_ALL_TARIFF_TYPEING)
        return data
    } catch (error) {
        throw error
    }
}


async function GET_ALL_TARIFFS(){
    try {
        const data = await fetchAll(GET_ALLTARIFFS)
        return data
    } catch (error) {
        throw error
    }
}

export default {
    GET_ALL_TARIFF_TYPE,
    GET_ALL_TARIFFS
}