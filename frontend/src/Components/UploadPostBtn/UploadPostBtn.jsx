import React from "react";
import Base from "./UploadPostBtnBase";

export default class UploadPostBtn extends Base {
  render() {
    var temp = this.state.uploadForm ? (
      <div
        style={{
          backgroundColor: "#ffa31e",
          border: "solid #ffa31e",
          textAlign: "center",
        }}
      >
        <form
          onSubmit={this.onFileUpload}
          // action='http://localhost:8081/uploadfile'
          method="POST"
          encType="multipart/form-data"
        >
          <input
            type="file"
            name="file"
            onChange={this.onFileChange}
            required
            className="btn"
          />
          <button
            type="submit"
            // onClick={this.onFileUpload}
            className="btn"
            style={{ margin: "15px" }}
          >
            Submit
          </button>
          <button
            onClick={this.changeUploadForm}
            className="btn"
            style={{ margin: "15px" }}
          >
            Close
          </button>
        </form>
      </div>
    ) : (
      ""
    );

    return (
      <>
        <div className="rght_btn" onClick={this.changeUploadForm}>
          <span className="rght_btn_icon">
            <img src="images/btn_iconb.png" alt="up" />
          </span>
          <span className="btn_sep">
            <img src="images/btn_sep.png" alt="sep" />
          </span>
          <a>Upload Post</a>
        </div>
        {temp}
      </>
    );
  }
}
