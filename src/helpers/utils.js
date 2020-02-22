import axios from "axios";
export function isMobile() {
  if (!process.browser) {
    return false;
  }

  return global.innerWidth <= 840;
}

export const axiosGet = (url, data = null) => {
  const options = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8"
    }
  };

  return axios.get(url, options);
};

export const axiosPost = (url, data = null) => {
  const options = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    }
  };

  return axios.post(url, JSON.stringify(data), options);
};
