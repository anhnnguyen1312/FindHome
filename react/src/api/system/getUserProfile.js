import axiosConfig from "../../axiosConfig";

export const callApiGetUserProfile = (userId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `https://findhome-eg5m.onrender.com/user-profile/${userId}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
