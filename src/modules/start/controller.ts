import { WEB_URL } from "../../utils/constants";

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

export default { START };
