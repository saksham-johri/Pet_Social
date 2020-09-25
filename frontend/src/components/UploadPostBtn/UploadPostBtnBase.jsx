import React, { Component } from "react";
import axios from "axios";
import url from "../../config";
import APICaller from "../../util/APICaller";

export default class UploadPostBtnBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadForm: false,
      selectedFile: null,
      description: "",
      category: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  changeUploadForm = (event) => {
    this.state.uploadForm
      ? this.setState({
          uploadForm: false,
          description: "",
          category: "",
          selectedFile: null,
        })
      : this.setState({ uploadForm: true });
  };

  onFileChange = (event) => {
    // console.log(event.target.files[0]);
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = (event) => {
    event.preventDefault();
    var formData = new FormData();

    // Update the formData object
    formData.append("file", this.state.selectedFile);
    formData.append("description", this.state.description);
    formData.append("category", this.state.category);
    formData.append("username", localStorage.userName);
    // Details of the uploaded file
    APICaller("post", "/dashboard/uploadfile", formData)
      .then((res) => {
        console.log("Response from Backend", res);
      })
      .catch((err) => {
        console.log("ERROR!!", err);
      });

    // axios
    //   .post(`${url}/uploadfile`, formData)
    //   .then((res) => {
    //     console.log("Response From Backend: ", res.data);
    //   })
    //   .catch((err) => {
    //     console.log("Error!! ", err);
    //   });
  };
}
