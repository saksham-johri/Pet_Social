import React from "react";
import FeaturePost from "./FeaturePost";
import { useState } from "react";

export default function Featured() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="rght_cate">
        <div
          className="rght_cate_hd"
          id="opn_cat_bg"
          onClick={() => {
            show ? setShow(false) : setShow(true);
          }}
        >
          Featured
        </div>
        <FeaturePost value = {show}/>
      </div>
    </>
  );
}
