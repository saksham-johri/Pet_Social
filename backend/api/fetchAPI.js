var userdb = require("../db/user_schema");
var postdb = require("../db/post_schema");

module.exports = {
  fullInfo: (user) => {
    return new Promise((resolve, reject) => {
      userdb.findOne({ username: user }, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  uploadpost: (data) => {
    return new Promise((resolve, reject) => {
      postdb.create(data, (err, result) => {
        if (err) reject(err);
        resolve("File Uploaded Successfully!!");
      });
    });
  },
};
