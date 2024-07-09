import axios from "axios";
import CryptoJS from "crypto-js";

import { setLocal, getLocal } from "./local";

export const USER_DATA = "userdata";

function createSignature(method, url, data, secret) {
  const signStr = method + url + JSON.stringify(data) + secret;
  return CryptoJS.MD5(signStr).toString();
}

const axiosInstance = axios.create({
  baseURL: "https://no23.lavina.tech",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { method, url, data } = config;
    if (url === "/signup") {
      return config;
    } else {
      const secret = getLocal(USER_DATA)?.secret;
      const key = getLocal(USER_DATA)?.key;

      const sign = createSignature(method.toUpperCase(), url, data, secret);
      config.headers["sign"] = sign;
      config.headers["key"] = key;

      return config;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    const { config, data } = response;
    if (config.url === "/signup") setLocal(USER_DATA, data.data);
    return response;
  },
  async (error) => Promise.reject(error)
);

export default axiosInstance;
