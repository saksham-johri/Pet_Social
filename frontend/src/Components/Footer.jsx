import React from "react";

export default function Footer() {
  return (
    <>
      <div className="clear" />
      <div className="footr">
        <div className="footr_lft">
          <div className="footer_div1">
            Copyright © Pet-Socail 2014 All Rights Reserved
          </div>
          <div className="footer_div2">
            <a href="javascript:void(0)">Privacy Policy </a>|
            <a href="javascript:void(0)"> Terms &amp; Conditions</a>
          </div>
        </div>
        <div className="footr_rgt">
          <ul>
            <li>
              <a href="javascript:void(0)">
                <img src="images/social_1.png" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img src="images/social_2.png" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img src="images/social_3.png" />
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img src="images/social_4.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
