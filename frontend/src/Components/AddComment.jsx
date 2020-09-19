import React from "react";

export default function AddComment() {
  return (
    <>
      <div className="cmnt_div1">
        <input
          type="text"
          placeholder="Enter your Comment"
          className="cmnt_bx1"
        />
        <input
          type="submit"
          className="sub_bttn1"
          defaultValue="Submit Comment"
        />
      </div>
    </>
  );
}
