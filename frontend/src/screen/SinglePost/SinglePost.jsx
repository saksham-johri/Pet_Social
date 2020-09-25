import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import UploadPostBtn from "../../components/UploadPostBtn/UploadPostBtn";
import InviteFriendsBtn from "../../components/InviteFriendsBtn";
import Categories from "../../components/Categories";
import Featured from "../../components/Featured";
import Comment from "../../components/Comment";
import AddComment from "../../components/AddComment";
import APICaller from "../../util/APICaller";

export default function SinglePost(props) {
  const [post, setPost] = useState({});
  useEffect(() => {
    APICaller("get", `/dashboard/post/${props.location.state.id}`)
      .then((res) => {
        setPost(res[0]);
      })
      .catch((err) => {
        console.log("ERROR!!", err);
      });
  }, []);
  if (post && Object.keys(post).length) {
    return (
      <>
        <div>
          <title>{post.description}</title>

          <Header />

          <div className="container">
            <div className="content">
              <div className="content_rgt">
                <UploadPostBtn />
                <InviteFriendsBtn />
                <Categories />
                <Featured />
              </div>
              <div className="content_lft">
                <div className="contnt_2">
                  <div className="div_a">
                    <div className="div_title">{post.description}</div>
                    <div className="btm_rgt">
                      <div className="btm_arc">{post.category}</div>
                    </div>
                    <div className="div_top">
                      <div className="div_top_lft">
                        <img src="/images/img_6.png" />
                        {post.username}
                      </div>
                      <div className="div_top_rgt">
                        <span>{post.date}</span>
                        {/* <span className="span_date">02 Jan 2014</span>
                        <span className="span_time">11:15am</span> */}
                      </div>
                    </div>
                    <div className="div_image">
                      <img
                        src={require(`../../../../backend/uploads/${post.filename}`)}
                        alt="pet"
                      />
                    </div>
                    <div className="div_btm">
                      <div className="btm_list">
                        <ul>
                          <li>
                            <a href="#">
                              <span className="btn_icon">
                                <img src="/images/icon_001.png" alt="share" />
                              </span>
                              Share
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="btn_icon">
                                <img src="/images/icon_002.png" alt="share" />
                              </span>
                              Flag
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="btn_icon">
                                <img src="/images/icon_003.png" alt="share" />
                              </span>
                              0 Likes
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="btn_icon">
                                <img src="/images/icon_004.png" alt="share" />
                              </span>
                              4 Comments
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contnt_3">
                  <ul>
                    <Comment />

                    <AddComment />
                  </ul>
                  <div className="view_div">
                    <a href="#">View more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else return <div />;
}
