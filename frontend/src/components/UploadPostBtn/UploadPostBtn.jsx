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
            type="text"
            name="description"
            required
            value={this.state.title}
            onChange={this.handleChange}
            placeholder='Description'
          />

          <br />
          <br />

          <select
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            required
          >
            <option value="" selected disabled hidden>Category</option>
            <option value="CATS">CATS</option>
            <option value="DOGS">DOGS</option>
            <option value="BIRDS">BIRDS</option>
            <option value="RABBIT">RABBIT</option>
            <option value="OTHERS">OTHERS</option>
          </select>

          <br />
          <br />

          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={this.onFileChange}
            required
            // className="btn"
          />
          <br />
          <br />
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
