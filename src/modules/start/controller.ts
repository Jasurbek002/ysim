import { WEB_URL } from "../../utils/constants";
import path from "path";
import fs from "fs";
import { FastifyRequestType } from "fastify/types/type-provider";
import { FastifyReply } from "fastify/types/reply";
import upload from "../../lib/multer";

const uploadZip = upload.single("dist");

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

async function OFFLINE(req: FastifyRequestType, rep: FastifyReply) {
  try {
    const ussd = path.join(process.cwd(), "uploads", "dist.zip");
    const stats = fs.statSync(ussd);
    if (stats.size > 0) {
      rep.sendFile(ussd);
    } else {
      return {
        status: 404,
        message: "file not found",
      };
    }
  } catch (error) {
    return error;
  }
}

async function ADD_ZIP_FILE(req: any, rep: FastifyReply) {
  try {
    return {
      status: 201,
      message: "File succesfuliy upload",
    };
  } catch (error) {
    return error;
  }
}

async function FILE_TEST() {
  try {
    const ussd = path.join(process.cwd(), "uploads", "dist.zip");
    const stats = fs.statSync(ussd);
    if (stats) {
      return {
        isActive: true,
        file_size: stats.size,
        createdAt: stats.birthtime,
      };
    } else {
      return {
        isActive: false,
      };
    }
  } catch (error) {
    return error;
  }
}

async function DELETE_ZIP() {
  try {
    const ussd = path.join(process.cwd(), "uploads", "dist.zip");
    const stats = fs.statSync(ussd);
    if (stats) {
      fs.unlinkSync(ussd);

      return {
        status: 200,
        message: "file delete",
      };
    }else{
      return {
        status: 404,
        message: "file not found",
      }
    }
  } catch (error) {
    return error;
  }
}

export default {
  START,
  OFFLINE,
  uploadZip,
  ADD_ZIP_FILE,
  FILE_TEST,
  DELETE_ZIP,
};
