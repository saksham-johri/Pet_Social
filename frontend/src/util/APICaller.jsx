import axios from "axios";
import Baseurl from "../config/index.js";

const APICaller = (method, url, data) => {
  const option = {
    method,
    url: Baseurl + url,
    data,
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
    },
  };

  // console.log('options ', option)

  return new Promise((resolve, reject) => {
    // console.log("hi");

    axios({ ...option })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default APICaller;
