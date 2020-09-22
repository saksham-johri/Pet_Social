import React, { useState } from "react";

export default function TimeLineDiv({ username, fname, lname, email }) {
  // console.log(props);

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

  return (
    <>
      <div className="timeline_div">
        <div className="timeline_div1">
          <div className="profile_pic">
            <img src="images/timeline_img1.png" />
            <div className="profile_text">
              <a href="#">Change Profile Pic</a>
            </div>
          </div>
          <div className="profile_info">
            <div className="edit_div" onClick={editProfile}>
              <a href="javascript:void(0)">
                Edit <img src="images/timeline_img.png" />
              </a>
            </div>
            <div className="profile_form">
              <ul>
                <li>
                  <div className="div_name1">Name :</div>
                  <div className="div_name2" style={{display: showname}}>
                    {fname} {lname}
                  </div>
                  <form style={{display: edit}}>
                    <input type="text" defaultValue={fname} />
                    <input type="text" defaultValue={lname} />
                    <input type="button" defaultValue="Submit" />
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
              <a href="#">My Uploads </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
