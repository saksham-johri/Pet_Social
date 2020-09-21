import React, { useState } from "react";

export default function Categories() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="rght_cate">
        <div
          className="rght_cate_hd"
          id="rght_cat_bg"
          onClick={() => {
            show ? setShow(false) : setShow(true);
          }}
        >
          Categories
        </div>
        <div className="rght_list" style={{ display: show ? "" : "none" }}>
          <ul>
            <li>
              <a href="#">
                <span className="list_icon">
                  <img src="images/icon_01.png" alt="up" />
                </span>
                CATS
              </a>
            </li>
            <li>
              <a href="#">
                <span className="list_icon">
                  <img src="images/icon_02.png" alt="up" />
                </span>
                Dogs
              </a>
            </li>
            <li>
              <a href="#">
                <span className="list_icon">
                  <img src="images/icon_03.png" alt="up" />
                </span>
                Birds
              </a>
            </li>
            <li>
              <a href="#">
                <span className="list_icon">
                  <img src="images/icon_04.png" alt="up" />
                </span>
                Rabbit
              </a>
            </li>
            <li>
              <a href="#">
                <span className="list_icon">
                  <img src="images/icon_05.png" alt="up" />
                </span>
                Others
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
