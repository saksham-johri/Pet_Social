import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import MyUploads from "../screen/MyUploads/MyUploads";

function TimeLineDiv({ username, fname, lname, email, ...props }) {
  const [edit, setEdit] = useState("none");
  const [showname, setShowname] = useState("");

  function editProfile() {
    if (edit === "none") {
      setEdit("");
      setShowname("none");
    } else {
      setEdit("none");
      setShowname("");
    }
  }

  const myuploads = () => {
    props.history.push("/myuploads");
  };

  return (
    <>
      <div className="timeline_div">
        <div className="timeline_div1">
          <div className="profile_pic">
            <img src="/images/timeline_img1.png" />
            <div className="profile_text">
              <a href="#">Change Profile Pic</a>
            </div>
          </div>
          <div className="profile_info">
            <div className="edit_div" onClick={editProfile}>
              <a href="javascript:void(0)">
                Edit <img src="/images/timeline_img.png" />
              </a>
            </div>
            <div className="profile_form">
              <ul>
                <li>
                  <div className="div_name1">Name :</div>
                  <div className="div_name2" style={{ display: showname }}>
                    {fname} {lname}
                  </div>
                  <form
                    style={{ display: edit }}
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input type="text" Value={fname} name="fname" />
                    <input type="text" Value={lname} name="lname" />
                    <input type="submit" value="Save" onClick={editProfile} />
                  </form>
                </li>
                <li>
                  <div className="div_name1">Email :</div>
                  <div className="div_name2">{email}</div>
                </li>
                <li>
                  <div className="div_name1">UserName :</div>
                  <div className="div_name3">{username}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="timeline_div2">
          <ul>
            <li>
              <a href="#" className="active">
                Timeline
              </a>
            </li>
            <li>
              <a href="#">About </a>
            </li>
            <li>
              <a href="#">Album</a>
            </li>
            <li>
              <a href="#"> Pets</a>
            </li>
            <li>
              <a onClick={myuploads} href="javascript:void(0)">
                My Uploads
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default withRouter(TimeLineDiv);
