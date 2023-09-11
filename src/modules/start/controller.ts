import { WEB_URL } from "../../utils/constants";
import path from 'path';
import fs from 'fs';
import { FastifyRequestType } from "fastify/types/type-provider";
import { FastifyReply } from "fastify/types/reply";


async function START() {
  try {
    return {
      success: true,
      message: "wellcome to device!",
      url: WEB_URL,
    };
  } catch (error) {
    return error;
  }
}

async function OFFLINE(req:FastifyRequestType,rep:FastifyReply) {
  try {
  const ussd = path.join(process.cwd(),'uploads','dist.zip')
  const stats = fs.statSync(ussd)
  if(stats.size > 0){
     rep.sendFile(ussd)
  }else{
    return {
      status:404,
      message:"file not found"
    }
  }
  } catch (error) {
    return error
  }
}


export default { START,OFFLINE };
