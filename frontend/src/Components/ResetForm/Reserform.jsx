import React from "react";

export default function Reserform() {
  return (
    <>
      <div className="content_rgt">
        <div className="register_sec">
          <h1>Reset Password</h1>
          <ul>
            <li>
              <span>Enter New Password</span>
              <input type="text" placeholder="Enter your new password" />
            </li>
            <li>
              <span>Confirm Password</span>
              <input type="text" placeholder="Enter your password again" />
            </li>
            <li>
              <input type="submit" defaultValue="Submit" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
