import React, { Component } from "react";
import axios from "axios";

class JobApplicationForm extends Component {
  state = {};

  formSubmitHandler = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const contact = e.target.elements.contact.value;
    const emailId = e.target.elements.emailId.value;
    const position = e.target.elements.position.value;
    const experience = e.target.elements.experience.value;
    const resume_cv = e.target[5].files[0];
    console.log(e.target[5].files[0]);
    let form_data = new FormData();
    form_data.append("name", name);
    form_data.append("contact", contact);
    form_data.append("emailId", emailId);
    form_data.append("position", position);
    form_data.append("experience", experience);
    form_data.append("resume_cv", resume_cv);

    axios
      .post("http://127.0.0.1:8000/api-blog/jobApply/", form_data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        alert(
          res.statusText === "Created"
            ? "Your Application is submitted successfully. Please wait for our response"
            : "Please, Try again later!!"
        );
        console.log(res);
      })
      .catch((err) => {
        alert("Your application not Submitted. Please Try again!!" + err);
        console.log(err);
      });
  };
  render() {
    return (
      <form
        className="d-flex flex-column align-items-center m-5"
        onSubmit={this.formSubmitHandler}
      >
        <label>
          Name:
          <input
            className="mx-2"
            type="text"
            name="name"
            placeholder="your Name"
          />
        </label>
        <label>
          Email Id:
          <input
            className="mx-2"
            type="email"
            name="emailId"
            placeholder="Your Email address"
          />
        </label>
        <label>
          Contact:
          <input
            className="mx-2"
            type="text"
            name="contact"
            placeholder="Your active mobile number"
          />
        </label>
        <label>
          Position:
          <input
            className="mx-2"
            type="text"
            name="position"
            value={this.props.location.state}
          />
        </label>
        <label>
          Experience:
          <input type="number" name="experience" className="mx-2" step="0.1" />
        </label>
        <label>
          Attach your Resume/Cv :
          <input type="file" name="resume_cv" className="mx-2" />
        </label>
        <button type="submit" className="btn btn-primary">
          Apply
        </button>
      </form>
    );
  }
}

export default JobApplicationForm;
