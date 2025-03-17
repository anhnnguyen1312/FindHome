import axiosConfig from "../axiosConfig";

export const callApiUserNotification = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "https://findhome-eg5m.onrender.com/user-notification",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const callApiUserMarkAsRead = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const url = id
        ? `https://findhome-eg5m.onrender.com/user-mark-read/${id}`
        : `https://findhome-eg5m.onrender.com/user-mark-read`;
      const response = await axiosConfig({
        method: "put",
        url: url,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
