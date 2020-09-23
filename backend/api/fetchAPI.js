var userdb = require("../db/user_schema");

module.exports = {
  fullInfo: (user) => {
    return new Promise((resolve, reject) => {
      userdb.findOne({ username: user }, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },
};
