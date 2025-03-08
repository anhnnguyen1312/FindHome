import axiosConfig from "../../axiosConfig";

export const callApiAdminNotification = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "https://findhome-eg5m.onrender.com//admin-notification",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const callApiAdminMarkAsRead = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const url = id
        ? `https://findhome-eg5m.onrender.com//admin-mark-read/${id}`
        : `https://findhome-eg5m.onrender.com//admin-mark-read`;
      const response = await axiosConfig({
        method: "put",
        url: url,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
