import { WEB_URL } from "../../utils/constants";
import path from "path";
import fs from "fs";
import { FastifyRequestType } from "fastify/types/type-provider";
import { FastifyReply } from "fastify/types/reply";
import upload from "../../lib/multer";
import { fetch } from "../../lib/database";
import { GET_UPDATE_STATUS, UPDATED_OFF, UPDATED_ON } from "./query";
import { apiRegister } from "../../lib/api";
import { REST } from "../../utils/endipoints";
import { FastifyRequest } from "fastify";

const uploadZip = upload.single("dist");
const uploadTestZip = upload.single("test");
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
    const stats: any = fs.statSync(ussd);
    console.log(stats);
    if (stats.size > 0) {
      rep.download(stats);
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
    const { data } = await apiRegister.put(REST.DEVICE_UPDATE_ALL_ON);
    if (data.success) {
      return {
        status: 201,
        message: "file upload end new updated",
        isUpdated: data.data.updated,
        last_update_file: data.data.dateTime,
      };
    }
  } catch (error) {
    return error;
  }
}

async function ADD_ZIP_FILE_TEST(req: any, rep: FastifyReply) {
  try {
    const { data } = await apiRegister.put(REST.TEST_DEVICE_UPDATE_ALL_ON);
    if (data.success) {
      return {
        status: 201,
        message: "file upload end new updated",
        isUpdated: data.data.updated,
        last_update_file: data.data.dateTime,
      };
    }
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

async function GET_STATUS(req: FastifyRequest, rep: FastifyReply) {
  try {
    const { deviceId } = req.params as any;
    const { data } = await apiRegister.post(
      `${REST.DEVICE_GET_ME}/${deviceId}`
    );
    if (data) return data;
  } catch (error) {
    return error;
  }
}

async function TEST_GET_STATUS(req: FastifyRequest, rep: FastifyReply) {
  try {
    const { deviceId } = req.params as any;
    const { data } = await apiRegister.get(
      `${REST.TEST_DEVICE_GET_ME}/${deviceId}`
    );
    if (data) return data;
  } catch (error) {
    return error;
  }
}

async function DELETE_ZIP() {
  try {
    const ussd = path.join(process.cwd(), "uploads", "dist.zip");
    const stats = fs.statSync(ussd);
    console.log(stats);
    if (stats) {
      fs.unlinkSync(ussd);
      return {
        status: 200,
        message: "file delete",
      };
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

async function TEST_DELETE_ZIP() {
  try {
    const ussd = path.join(process.cwd(), "uploads", "test.zip");
    const stats = fs.statSync(ussd);
    if (stats) {
      fs.unlinkSync(ussd);
      return {
        status: 200,
        message: "file delete",
      };
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

async function UPDATED_DISEBLED(req: FastifyRequest, rep: FastifyReply) {
  try {
    const { deviceId }: any = req.params;
    const { data } = await apiRegister.put(
      `${REST.DEVICE_UPDATE_OFF}/${deviceId}`
    );
    if (data) return data;
  } catch (error) {
    return error;
  }
}

async function TEST_UPDATED_DISEBLED(req: FastifyRequest, rep: FastifyReply) {
  try {
    const { deviceId }: any = req.params;
    const { data } = await apiRegister.put(
      `${REST.TEST_DEVICE_UPDATE_OFF}/${deviceId}`
    );
    if (data) return data;
  } catch (error) {
    return error;
  }
}

async function UPDATED_ENABLE(req: FastifyRequest, rep: FastifyReply) {
  try {
    const { deviceId }: any = req.params;
    const { data } = await apiRegister.put(
      `${REST.DEVICE_UPDATE_ON}/${deviceId}`
    );
    if (data) {
      delete data?.data?.message;
      return data;
    }
  } catch (error) {
    return error;
  }
}

async function TEST_UPDATED_ENABLE(req: FastifyRequest, rep: FastifyReply) {
  try {
    const { deviceId }: any = req.params;
    const { data } = await apiRegister.put(
      `${REST.TEST_DEVICE_UPDATE_ON}/${deviceId}`
    );
    if (data) return data;
  } catch (error) {
    return error;
  }
}

async function UPDATED_ENABLE_ALL(req: FastifyRequest, rep: FastifyReply) {
  try {
    const { data } = await apiRegister.put(REST.DEVICE_UPDATE_ALL_ON);
    if (data) {
      delete data?.data?.message;
      return data;
    }
  } catch (error) {
    return error;
  }
}

async function TEST_UPDATED_ENABLE_ALL(req: FastifyRequest, rep: FastifyReply) {
  try {
    const { data } = await apiRegister.put(REST.TEST_DEVICE_UPDATE_ALL_ON);
    if (data) return data;
  } catch (error) {
    return error;
  }
}

export default {
  START,
  OFFLINE,
  uploadZip,
  uploadTestZip,
  ADD_ZIP_FILE,
  FILE_TEST,
  DELETE_ZIP,
  UPDATED_DISEBLED,
  GET_STATUS,
  UPDATED_ENABLE,
  UPDATED_ENABLE_ALL,
  TEST_GET_STATUS,
  ADD_ZIP_FILE_TEST,
  TEST_UPDATED_DISEBLED,
  TEST_UPDATED_ENABLE,
  TEST_UPDATED_ENABLE_ALL,
  TEST_DELETE_ZIP,
};
