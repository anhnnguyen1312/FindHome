import axiosConfig from "../axiosConfig";

export const callApiUserList = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "https://findhome-eg5m.onrender.com/list-user",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
