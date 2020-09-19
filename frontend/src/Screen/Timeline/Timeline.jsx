import React, { Component } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import TimeLineDiv from "../../Components/TimeLineDiv";
import Post from "../../Components/Post";
import Categories from "../../Components/Categories";
import Featured from "../../Components/Featured";
import UploadPostBtn from "../../Components/UploadPostBtn";
import InviteFriendsBtn from "../../Components/InviteFriendsBtn";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>Home</title>

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
              <div className="contnt_1">
                <div className="list_1">
                  <ul>
                    <li>
                      <input type="checkbox" className="chk_bx" />
                      Friends
                    </li>
                    <li>
                      <input type="checkbox" className="chk_bx" />
                      Flaged
                    </li>
                  </ul>
                </div>
                <TimeLineDiv />
              </div>
              <Post />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}