import React from "react";
import AddComment from "../../Components/AddComment";
import Categories from "../../Components/Categories";
import Featured from "../../Components/Featured";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import InviteFriendsBtn from "../../Components/InviteFriendsBtn";
import Post from "../../Components/Post";
import UploadPostBtn from "../../Components/UploadPostBtn";
import Comment from "../../Components/Comment";

export default function SinglePost() {
  return (
    <>
      <meta charSet="utf-8" />
      <title>Singal Post</title>
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
            <Post />
            <div className="contnt_3">
              <ul>
                <Comment />

                <li>
                  <AddComment />
                </li>
              </ul>
              <div className="view_div">
                <a>View more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
