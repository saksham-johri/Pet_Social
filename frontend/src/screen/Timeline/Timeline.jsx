import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TimeLineDiv from "../../components/TimeLineDiv";
import Post from "../../components/Post";
import Categories from "../../components/Categories";
import Featured from "../../components/Featured";
import UploadPostBtn from "../../components/UploadPostBtn/UploadPostBtn";
import InviteFriendsBtn from "../../components/InviteFriendsBtn";
import APICaller from "../../util/GetData";

export default function Timeline(props) {

  const [data, setData] = useState({});
  useEffect(async () => {
    // console.log(props.setTemp);
    const temp = await APICaller();
    setData({ ...temp });
  }, []);

  const logout = () => {
    localStorage.clear();
    setData({});
    props.history.push("/");
    window.location.reload()
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
    </div>
  );
}
