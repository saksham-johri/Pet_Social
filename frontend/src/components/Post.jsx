import React from "react";
import { Link } from "react-router-dom";

export default function Post() {
  const title = "User Interface PSD Source files Web Designing for web";
  const user = "Steave Waugh";
  const numOfLikes = 0;
  const numOfComments = 4;
  const category = "Cats";
  const img = "images/lft_img.png";

  const test = () => {
    console.log("OPEN!!");
  };

  return (
    <>
      <div className="contnt_2">
        <div className="div_a">
          <div className="div_title">{title}</div>
          <div className="btm_rgt">
            <div className="btm_arc">{category}</div>
          </div>
          <div className="div_top">
            <div className="div_top_lft">
              <img src="images/img_6.png" />
              {user}
            </div>
            <div className="div_top_rgt">
              <span className="span_date">02 Jan 2014</span>
              <span className="span_time">11:15am</span>
            </div>
          </div>
          <div className="div_image">
            <img src={img} alt="pet" onClick={test} />
          </div>
          <div className="div_btm">
            <div className="btm_list">
              <ul>
                <li onClick={test}>
                  <Link to="/">
                    <span className="btn_icon">
                      <img src="images/icon_001.png" alt="share" />
                    </span>
                    Share
                  </Link>
                </li>
                <li onClick={test}>
                  <a>
                    <span className="btn_icon">
                      <img src="images/icon_002.png" alt="share" />
                    </span>
                    Flag
                  </a>
                </li>
                <li onClick={test}>
                  <a>
                    <span className="btn_icon">
                      <img src="images/icon_003.png" alt="share" />
                    </span>
                    {numOfLikes} Likes
                  </a>
                </li>
                <li onClick={test}>
                  <a>
                    <span className="btn_icon">
                      <img src="images/icon_004.png" alt="share" />
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
