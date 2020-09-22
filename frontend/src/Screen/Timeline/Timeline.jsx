import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import TimeLineDiv from "../../Components/TimeLineDiv";
import Post from "../../Components/Post";
import Categories from "../../Components/Categories";
import Featured from "../../Components/Featured";
import UploadPostBtn from "../../Components/UploadPostBtn/UploadPostBtn";
import InviteFriendsBtn from "../../Components/InviteFriendsBtn";
import APICaller from "../../util/GetData";

export default function Timeline(props) {
  const [data, setData] = useState({});

  useEffect(async () => {
    if (!localStorage.userName) props.history.replace("/");
    const temp = await APICaller();
    // console.log(temp, "In timeline");
    setData({ ...temp });
  }, []);

  const logout = () => {
    localStorage.clear();
    setData({})
    props.history.replace("/");
  };

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
                  <li style={{ float: "right" }}>
                    <a
                      style={{ color: "red", fontWeight: "700" }}
                      onClick={logout}
                      href="javascript:void(0)"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
              <TimeLineDiv
                username={data.username}
                fname={data.fname}
                lname={data.lname}
                email={data.email}
              />
            </div>
            <Post />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
