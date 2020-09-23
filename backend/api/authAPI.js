var userdb = require("../db/user_schema");

module.exports = {
  sing_In: (username, password) => {
    return new Promise((resolve, reject) => {
      userdb.find({ username: username, password: password }, (err, result) => {
        if (err) reject(err);
        if (result.length > 0) {
          resolve("Logged In Successfully!");
        } else {
          resolve("Username / Password Incorrect!");
        }
      });
    });
  },

  sign_up: (username, data) => {
    return new Promise((resolve, reject) => {
      userdb.find({ username: username }, (err, result) => {
        if (result.length > 0) {
          resolve("Username Already Exist");
        } else {
          userdb.create(data, function (err, result) {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        }
      });
    });
  },
};
