import axiosConfig from "../axiosConfig";

export const callApiRegister = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "https://findhome-eg5m.onrender.com//register",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const callApiLogin = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "https://findhome-eg5m.onrender.com//login",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const checkEmailUser = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "https://findhome-eg5m.onrender.com//check-email-user",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const resetPassword = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "https://findhome-eg5m.onrender.com//reset-password",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const callApiDeleteUser = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "https://findhome-eg5m.onrender.com//delete-user",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
