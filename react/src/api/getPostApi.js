import axiosConfig from "../axiosConfig";

export const callApiHomepagePost = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: "https://findhome-eg5m.onrender.com/list-homepage-post",
      });
      console.log(response);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const callApiCreatePost = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "https://findhome-eg5m.onrender.com/create-post",
        data: payload,
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const callApiUpdatePost = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: "https://findhome-eg5m.onrender.com/update-post",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const callApiDeletePost = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: `https://findhome-eg5m.onrender.com/post-delete/${id}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const callApiDetailPost = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `https://findhome-eg5m.onrender.com/post-detail/${payload}`,
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

// export const callApiRecommendSystem = (postId, userId) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       const response = await axiosConfig({
//         method: "get",
//         url: `https://findhome-python-server.onrender.com/recommend?id=${postId},${userId}`,
//       });
//       resolve(response);
//     } catch (error) {
//       reject(error);
//     }
//   });

export const callApiRecommendSystem = (postId, userId) =>
  new Promise(async (resolve, reject) => {
    try {
      if (postId && userId) {
        const response = await axiosConfig({
          method: "get",
          url: `https://findhome-python-server.onrender.com/recommend?id=${postId},${userId}`,
        });
        resolve(response);
      } else if (postId) {
        const response = await axiosConfig({
          method: "get",
          url: `https://findhome-python-server.onrender.com/recommend?id=${postId}`,
        });
        resolve(response);
      }
    } catch (error) {
      reject(error);
    }
  });

export const callApihandleLikePost = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "post",
        url: `https://findhome-eg5m.onrender.com/handle-like-post`,
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const callApiCheckLikePost = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "put",
        url: `https://findhome-eg5m.onrender.com/check-like-post`,
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const callApiListLikePost = (userId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "get",
        url: `https://findhome-eg5m.onrender.com/list-liked-post/${userId}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
