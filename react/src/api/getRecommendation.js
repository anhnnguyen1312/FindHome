import axiosConfig from "../axiosConfig";

export const callUserAction = (payload) =>
  new Promise(async (resolve, reject) => {
    console.log("payloadp", payload);
    try {
      const response = await axiosConfig({
        method: "post",
        url: "https://findhome-eg5m.onrender.com/user-action",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const callApiRecommend = (userId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `https://findhome-python-server1.onrender.com/get-recommendation?id=${userId}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
