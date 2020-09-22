import axios from "axios";
import url from "../config";

function APICaller() {
  let data = {
    username: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
  };
  return new Promise((resolve, reject) => {
    if (localStorage.userName) {
      axios
        .post(`${url}/getData`, localStorage)
        .then((res) => {
          // console.log(res.data,"In GetData");
          data.username = res.data.username;
          data.fname = res.data.fname;
          data.lname = res.data.lname;
          data.email = res.data.email;
          data.password = res.data.password;
          resolve(data);
        })
        .catch((err) => {
          reject(err);
          console.log("ERROR!!", err);
        });
    }
  });

  // return data;
}
export default APICaller;
