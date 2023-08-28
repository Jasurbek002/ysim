import {
  FastifyReplyType,
  FastifyRequestType,
} from "fastify/types/type-provider";
import model from "./model";

// net
async function NET_SIMPLE_UZTELECOM() {
  try {
    const simpleNet = await model.GET_NET_SIMPLE();
    const sorterdCompany = simpleNet.filter(
      (el: any) => el.name === "uztelecom"
    );
    if (sorterdCompany) {
      return {
        daily: sorterdCompany.filter((el: any) => el.deadline === 0),
        weekly: sorterdCompany.filter((el: any) => el.deadline === 1),
        moonthly: sorterdCompany.filter((el: any) => el.deadline === 2),
      };
    }
    return [];
  } catch (error) {
    return error;
  }
}

async function NET_SIMPLE_BELENE() {
  try {
    const simpleNet = await model.GET_NET_SIMPLE();
    const sorterdCompany = simpleNet.filter((el: any) => el.name === "belene");
    if (sorterdCompany) {
      return {
        daily: sorterdCompany.filter((el: any) => el.deadline === 0),
        weekly: sorterdCompany.filter((el: any) => el.deadline === 1),
        moonthly: sorterdCompany.filter((el: any) => el.deadline === 2),
      };
    }
    return [];
  } catch (error) {
    return error;
  }
}

async function NET_SIMPLE_UCELL() {
  try {
    const simpleNet = await model.GET_NET_SIMPLE();
    const sorterdCompany = simpleNet.filter((el: any) => el.name === "ucell");
    if (sorterdCompany) {
      return {
        daily: sorterdCompany.filter((el: any) => el.deadline === 0),
        weekly: sorterdCompany.filter((el: any) => el.deadline === 1),
        moonthly: sorterdCompany.filter((el: any) => el.deadline === 2),
      };
    }
    return [];
  } catch (error) {
    return error;
  }
}

async function NET_SIMPLE_MOBIUZ() {
  try {
    const simpleNet = await model.GET_NET_SIMPLE();
    const sorterdCompany = simpleNet.filter((el: any) => el.name === "mobiuz");
    if (sorterdCompany) {
      return {
        daily: sorterdCompany.filter((el: any) => el.deadline === 0),
        weekly: sorterdCompany.filter((el: any) => el.deadline === 1),
        moonthly: sorterdCompany.filter((el: any) => el.deadline === 2),
      };
    }
    return [];
  } catch (error) {
    return error;
  }
}

async function NET_ROUMING_UZTELECOM() {
  try {
    const simpleNet = await model.GET_NET_ROUMING();
    const sorterdCompany = simpleNet.filter(
      (el: any) => el.name === "uztelecom"
    );
    if (sorterdCompany) {
      return {
        daily: sorterdCompany.filter((el: any) => el.deadline === 0),
        weekly: sorterdCompany.filter((el: any) => el.deadline === 1),
        moonthly: sorterdCompany.filter((el: any) => el.deadline === 2),
      };
    }
    return [];
  } catch (error) {
    return error;
  }
}

async function NET_ROUMING_BELEENE() {
  try {
    const simpleNet = await model.GET_NET_ROUMING();
    const sorterdCompany = simpleNet.filter((el: any) => el.name === "beleene");
    if (sorterdCompany) {
      return {
        daily: sorterdCompany.filter((el: any) => el.deadline === 0),
        weekly: sorterdCompany.filter((el: any) => el.deadline === 1),
        moonthly: sorterdCompany.filter((el: any) => el.deadline === 2),
      };
    }
    return [];
  } catch (error) {
    return error;
  }
}

async function NET_ROUMING_UCELL() {
  try {
    const simpleNet = await model.GET_NET_ROUMING();
    const sorterdCompany = simpleNet.filter((el: any) => el.name === "ucel");
    if (sorterdCompany) {
      return {
        daily: sorterdCompany.filter((el: any) => el.deadline === 0),
        weekly: sorterdCompany.filter((el: any) => el.deadline === 1),
        moonthly: sorterdCompany.filter((el: any) => el.deadline === 2),
      };
    }
    return [];
  } catch (error) {
    return error;
  }
}

async function NET_ROUMING_MOBIUZ() {
  try {
    const simpleNet = await model.GET_NET_ROUMING();
    const sorterdCompany = simpleNet.filter((el: any) => el.name === "mobiuz");
    if (sorterdCompany) {
      return {
        daily: sorterdCompany.filter((el: any) => el.deadline === 0),
        weekly: sorterdCompany.filter((el: any) => el.deadline === 1),
        moonthly: sorterdCompany.filter((el: any) => el.deadline === 2),
      };
    }
    return [];
  } catch (error) {
    return error;
  }
}

async function NET_NON_UZTELECOM() {
  try {
    const simpleNet = await model.GET_NET_NON();
    const sorterdCompany = simpleNet.filter(
      (el: any) => el.name === "uztelecom"
    );
    if (sorterdCompany) {
      return {
        daily: sorterdCompany.filter((el: any) => el.deadline === 0),
        weekly: sorterdCompany.filter((el: any) => el.deadline === 1),
        moonthly: sorterdCompany.filter((el: any) => el.deadline === 2),
      };
    }
    return [];
  } catch (error) {
    return error;
  }
}

async function NET_NON_BELEENE() {
  try {
    const simpleNet = await model.GET_NET_NON();
    const sorterdCompany = simpleNet.filter((el: any) => el.name === "beleene");
    if (sorterdCompany) {
      return {
        daily: sorterdCompany.filter((el: any) => el.deadline === 0),
        weekly: sorterdCompany.filter((el: any) => el.deadline === 1),
        moonthly: sorterdCompany.filter((el: any) => el.deadline === 2),
      };
    }
    return [];
  } catch (error) {
    return error;
  }
}

async function NET_NON_UCELL() {
  try {
    const simpleNet = await model.GET_NET_NON();
    const sorterdCompany = simpleNet.filter((el: any) => el.name === "ucell");
    if (sorterdCompany) {
      return {
        daily: sorterdCompany.filter((el: any) => el.deadline === 0),
        weekly: sorterdCompany.filter((el: any) => el.deadline === 1),
        moonthly: sorterdCompany.filter((el: any) => el.deadline === 2),
      };
    }
    return [];
  } catch (error) {
    return error;
  }
}

async function NET_NON_MOBIUZ() {
  try {
    const simpleNet = await model.GET_NET_NON();
    const sorterdCompany = simpleNet.filter((el: any) => el.name === "mobiuz");
    if (sorterdCompany) {
      return {
        daily: sorterdCompany.filter((el: any) => el.deadline === 0),
        weekly: sorterdCompany.filter((el: any) => el.deadline === 1),
        moonthly: sorterdCompany.filter((el: any) => el.deadline === 2),
      };
    }
    return [];
  } catch (error) {
    return error;
  }
}

// sms
async function SMS_BELEENE() {
  try {
    const sms = await model.GET_ALL_SMS("beleene");
    if (sms) {
      return {
        status: 200,
        message: "success",
        daily: sms.filter((el: any) => el.deadline === 0),
        weekly: sms.filter((el: any) => el.deadline === 1),
        moonthly: sms.filter((el: any) => el.deadline === 2),
      };
    }
    return sms;
  } catch (error) {
    return error;
  }
}

async function SMS_UCELL() {
  try {
    const sms = await model.GET_ALL_SMS("ucell");
    if (sms) {
      return {
        status: 200,
        message: "success",
        daily: sms.filter((el: any) => el.deadline === 0),
        weekly: sms.filter((el: any) => el.deadline === 1),
        moonthly: sms.filter((el: any) => el.deadline === 2),
      };
    }
    return sms;
  } catch (error) {
    return error;
  }
}

async function SMS_UZTELECOM() {
  try {
    const sms = await model.GET_ALL_SMS("uztelecom");
    if (sms) {
      return {
        status: 200,
        message: "success",
        daily: sms.filter((el: any) => el.deadline === 0),
        weekly: sms.filter((el: any) => el.deadline === 1),
        moonthly: sms.filter((el: any) => el.deadline === 2),
      };
    }
    return sms;
  } catch (error) {
    return error;
  }
}

async function SMS_MOBIUZ() {
  try {
    const sms = await model.GET_ALL_SMS("mobiuz");
    if (sms) {
      return {
        status: 200,
        message: "success",
        daily: sms.filter((el: any) => el.deadline === 0),
        weekly: sms.filter((el: any) => el.deadline === 1),
        moonthly: sms.filter((el: any) => el.deadline === 2),
      };
    }
    return sms;
  } catch (error) {
    return error;
  }
}

// sms
async function MIN_BELEENE() {
  try {
    const min = await model.GET_ALL_MIN("beleene");
    if (min) {
      return {
        status: 200,
        message: "success",
        daily: min.filter((el: any) => el.deadline === 0),
        weekly: min.filter((el: any) => el.deadline === 1),
        moonthly: min.filter((el: any) => el.deadline === 2),
      };
    }
    return min;
  } catch (error) {
    return error;
  }
}

async function MIN_UCELL() {
  try {
    const min = await model.GET_ALL_MIN("ucell");
    if (min) {
      return {
        status: 200,
        message: "success",
        daily: min.filter((el: any) => el.deadline === 0),
        weekly: min.filter((el: any) => el.deadline === 1),
        moonthly: min.filter((el: any) => el.deadline === 2),
      };
    }
    return min;
  } catch (error) {
    return error;
  }
}

async function MIN_UZTELECOM() {
  try {
    const min = await model.GET_ALL_MIN("uztelecom");
    if (min) {
      return {
        status: 200,
        message: "success",
        daily: min.filter((el: any) => el.deadline === 0),
        weekly: min.filter((el: any) => el.deadline === 1),
        moonthly: min.filter((el: any) => el.deadline === 2),
      };
    }
    return min;
  } catch (error) {
    return error;
  }
}

async function MIN_MOBIUZ() {
  try {
    const min = await model.GET_ALL_MIN("mobiuz");
    if (min) {
      return {
        status: 200,
        message: "success",
        daily: min.filter((el: any) => el.deadline === 0),
        weekly: min.filter((el: any) => el.deadline === 1),
        moonthly: min.filter((el: any) => el.deadline === 2),
      };
    }
    return min;
  } catch (error) {
    return error;
  }
}

// get one
async function GET_ONE(req: FastifyRequestType) {
  try {
    const net = await model.GET_ONE(req.params);
    return net;
  } catch (error) {}
}

export default {
  NET_SIMPLE_BELENE,
  NET_SIMPLE_UZTELECOM,
  NET_SIMPLE_MOBIUZ,
  NET_SIMPLE_UCELL,
  NET_ROUMING_BELEENE,
  NET_ROUMING_UZTELECOM,
  NET_ROUMING_UCELL,
  NET_ROUMING_MOBIUZ,
  NET_NON_BELEENE,
  NET_NON_UZTELECOM,
  NET_NON_UCELL,
  NET_NON_MOBIUZ,

  SMS_BELEENE,
  SMS_MOBIUZ,
  SMS_UCELL,
  SMS_UZTELECOM,

  MIN_BELEENE,
  MIN_UZTELECOM,
  MIN_MOBIUZ,
  MIN_UCELL,

  GET_ONE,
};
