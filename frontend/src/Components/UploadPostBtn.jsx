import React, { Component } from "react";
import axios from "axios";

export default class UploadPostBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadForm: false,
      selectedFile: null,
    };
  }

  changeUploadForm = (event) => {
    this.state.uploadForm
      ? this.setState({ uploadForm: false })
      : this.setState({ uploadForm: true });
  };

  onFileChange = (event) => {
    console.log(event.target.files[0]);
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = (event) => {
    event.preventDefault();
    var formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    // Details of the uploaded file
    console.log(this.state.selectedFile);
    // console.log(formData.getAll);
    axios
      .post("http://localhost:8081/uploadfile", formData)
      .then((res) => {
        console.log("Response From Backend", res);
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  };

  render() {
    var temp = this.state.uploadForm ? (
      <div
        style={{
          zIndex: 9,
          position: "fixed",
          height: "16.5em",
          width: "26.82em",
          backgroundColor: "white",
          border: "groove 2px",
          textAlign: "center",
        }}
      >
        <form
          onSubmit={this.onFileUpload}
          // action='http://localhost:8081/uploadfile'
          method="POST"
          encType="multipart/form-data"
        >
          <h3>Upload File</h3>
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
