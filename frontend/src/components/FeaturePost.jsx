import React from "react";

export default function FeaturePost({ value }) {
  let temp = value ? "" : "none";
  return (
    <>
      <div className="sub_dwn" style={{ display: temp }}>
        <div className="feat_sec">
          <div className="feat_sec_img">
            <img src="/images/feat_img2.png" alt="image" />
          </div>
          <div className="feat_txt">Lorem Ipusum Text</div>
          <div className="btm_rgt">
            <div className="btm_arc">Dogs</div>
          </div>
        </div>
      </div>
    </>
  );
}
