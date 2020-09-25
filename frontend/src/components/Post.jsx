import React from "react";
import { withRouter } from "react-router-dom";

function Post(props) {
  const title = props.content.description;
  const user = props.content.username;
  const numOfLikes = 0;
  const numOfComments = 4;
  const categ = props.content.category;
  const img = require(`../../../backend/uploads/${props.content.filename}`);
  const date = props.content.date;

  // console.log(props.content._id);

  const openPost = () => {
    props.history.push(`/post/${props.content._id}`, {
      id: `${props.content._id}`,
    });
    //${props.content._id}
    // console.log("Hi");
  };

  return (
    <>
      <div className="contnt_2">
        <div className="div_a">
          <div className="div_title">{title}</div>
          <div className="btm_rgt">
            <div className="btm_arc">{categ}</div>
          </div>
          <div className="div_top">
            <div className="div_top_lft">
              <img src="/images/img_6.png" />
              {user}
            </div>
            <div className="div_top_rgt">
              {/* <span className="span_date">02 Jan 2014</span>
              <span className="span_time">11:15am</span> */}
              <span>{date}</span>
            </div>
          </div>
          <div className="div_image">
            <img src={img} alt="pet" onClick={openPost} />
          </div>
          <div className="div_btm">
            <div className="btm_list">
              <ul>
                <li onClick={openPost}>
                  <a href="javascript:void(0)">
                    <span className="btn_icon">
                      <img src="/images/icon_001.png" alt="share" />
                    </span>
                    Share
                  </a>
                </li>
                <li onClick={openPost}>
                  <a href="javascript:void(0)">
                    <span className="btn_icon">
                      <img src="/images/icon_002.png" alt="share" />
                    </span>
                    Flag
                  </a>
                </li>
                <li onClick={openPost}>
                  <a href="javascript:void(0)">
                    <span className="btn_icon">
                      <img src="/images/icon_003.png" alt="share" />
                    </span>
                    {numOfLikes} Likes
                  </a>
                </li>
                <li onClick={openPost}>
                  <a href="javascript:void(0)">
                    <span className="btn_icon">
                      <img src="/images/icon_004.png" alt="share" />
                    </span>
                    {numOfComments} Comments
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Post);
