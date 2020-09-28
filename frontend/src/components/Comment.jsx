import React, { useState } from "react";

export default function Comment(props) {
  const [replyState, changeReplyState] = useState("");
  var da = new Date(props.content.commentedOn);
  var date = `${da.getDate()} / ${da.getMonth() + 1} / ${da.getFullYear()} `;
  var time = `${da.getHours()}:${da.getMinutes()}`;
  return (
    <>
      <li>
        <div>{date}</div>
        <div style={{ float: "right" , marginRight: '2em'}}>{time}</div>
        <div className="list_image">
          <div className="image_sec">
            <img src="/images/post_img.png" />
          </div>
          <div className="image_name">{props.content.username}</div>
        </div>
        <div className="list_info">{props.content.comment}</div>
        <input
          onClick={() =>
            changeReplyState(() => {
              return replyState === "" ? (
                <div className="cmnt_div">
                  <input
                    type="text"
                    placeholder="Add a Comment"
                    className="cmnt_bx"
                  />
                  <input
                    type="submit"
                    className="sub_bttn"
                    defaultValue="Submit Comment"
                  />
                </div>
              ) : (
                ""
              );
            })
          }
          type="button"
          defaultValue="Reply"
          className="black_btn"
        />
        {replyState}
      </li>
    </>
  );
}
