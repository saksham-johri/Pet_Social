var userdb = require("../db/user_schema");
var postdb = require("../db/post_schema");
const { resolve } = require("path");

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

  getAllPost: () => {
    return new Promise((resolve, reject) => {
      postdb.find((err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  getUserPost: (user) => {
    return new Promise((resolve, reject) => {
      postdb.find({ username: user }, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  getPost: (id) => {
    return new Promise((resolve, reject) => {
      postdb.find({ _id: id }, (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  like_unlike: ({ id, username, like_unlike }) => {
    return new Promise((resolve, reject) => {
      if (like_unlike === "like") {
        postdb.updateOne(
          { _id: id },
          { $push: { like: username } },
          (err, result) => {
            if (err) reject(err);
            resolve(result);
          }
        );
      } else {
        postdb.updateOne(
          { _id: id },
          { $pull: { like: username } },
          (err, result) => {
            if (err) reject(err);
            resolve(result);
          }
        );
      }
    });
  },
};
