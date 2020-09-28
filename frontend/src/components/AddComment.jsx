import React, { useState } from "react";
import APICaller from "../util/APICaller";

export default function AddComment({ id }) {
  const [comment, setComment] = useState("");

  const addComment = (e) => {
    e.preventDefault();

    APICaller("post", "/dashboard/addcomment", {
      id: id,
      comment: comment,
      username: localStorage.userName,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("ERROR in comment", err);
      });
  };

  return (
    <>
      <div className="cmnt_div1">
        <form onSubmit={addComment}>
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            type="text"
            placeholder="Enter your Comment"
            className="cmnt_bx1"
            required
          />
          <input
            type="submit"
            className="sub_bttn1"
            defaultValue="Submit Comment"
          />
        </form>
      </div>
    </>
  );
}
