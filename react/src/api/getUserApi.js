import axiosConfig from "../axiosConfig";

export const callApiUpdateProfile = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",

        url: `https://findhome-eg5m.onrender.com/handle-profile`,
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
