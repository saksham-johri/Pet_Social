import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import TimeLineDiv from "../../components/TimeLineDiv";
import Post from "../../components/Post";
import Categories from "../../components/Categories";
import Featured from "../../components/Featured";
import UploadPostBtn from "../../components/UploadPostBtn/UploadPostBtn";
import InviteFriendsBtn from "../../components/InviteFriendsBtn";
import APICaller from "../../util/APICaller";

export default function Timeline(props) {
  const [data, setData] = useState({});

  const [posts, setposts] = useState([]);

  useEffect(() => {
    APICaller("post", "/dashboard/getData", { username: localStorage.userName })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log("ERROR!!", err);
      });
  }, []);

  useEffect(() => {
    APICaller("get", "/dashboard/getAllPost")
      .then((res) => {
        setposts(res);
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  }, []);

  const logout = () => {
    localStorage.clear();
    setData({});
    props.history.push("/");
    window.location.reload();
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

            {posts.length &&
              posts.map((postItem) => <Post content={postItem} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
