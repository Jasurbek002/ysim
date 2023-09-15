import { fetch } from "../../lib/database"
import { CREATE_USSD_COUNTER } from "./query"
import { CounterData } from "./schema"


async function CREATE_COUNTER(counter:CounterData):Promise<object> {
    try {
        const jsonData = JSON.stringify(counter)
        const data = await fetch(CREATE_USSD_COUNTER,jsonData,{})
        return data
    } catch (error) {
        throw error
    }
}


export default {
    CREATE_COUNTER
}