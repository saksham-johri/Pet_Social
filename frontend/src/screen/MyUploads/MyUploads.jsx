import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Post from "../../components/Post";
import APICaller from "../../util/APICaller";

export default function MyUploads(props) {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    APICaller("post", "/dashboard/getUserPost", {
      username: localStorage.userName,
    })
      .then((res) => {
        setposts(res);
      })
      .catch((err) => {
        console.log("ERROR: ", err);
      });
  }, []);

  const logout = () => {
    localStorage.clear();
    props.history.push("/");
    window.location.reload();
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <title>My Uploads</title>

      <Header />
      <div className="container">
        <div className="content">
          <div className="content_rgt"></div>
          <ul>
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

          {posts.length && posts.map((postItem) => <Post content={postItem} />)}
        </div>
      </div>
    </div>
  );
}
