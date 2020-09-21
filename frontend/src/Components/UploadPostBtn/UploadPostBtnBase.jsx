import React, { Component } from "react";
import axios from "axios";

export default class UploadPostBtnBase extends Component {
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
}
