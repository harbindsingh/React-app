import React, { Component } from "react";
import axios from "axios";

class IdeaSubmission extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  formSubmitHandler = (e) => {
    e.preventDefault();
    const name = e.target.elements.username.value;
    const email_id = e.target.elements.emailid.value;
    const contact_no = e.target.elements.contact.value;
    const idea_content = e.target.elements.ideaContent.value;
    axios
      .post("http://127.0.0.1:8000/api-blog/ideas/", {
        name: name,
        email_id: email_id,
        contact_no: contact_no,
        idea_content: idea_content,
      })
      .then((res) => {
        alert(
          res.statusText === "Created"
            ? "Your Idea is Submitted. Please return to home page"
            : "Please, Try again later!!"
        );
        console.log(res);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  render() {
    return (
      <form
        onSubmit={this.formSubmitHandler}
        name="ideaForm"
        id="ideaSubmission"
        className="d-md-flex flex-column align-items-center my-5 container"
      >
        <label className="p-2">
          Name: <input type="text" name="username" className="px-2" />
        </label>
        <label className="p-2">
          Email Id: <input type="email" name="emailid" className="px-2" />
        </label>
        <label className="p-2">
          Contact: <input type="text" name="contact" className="px-2" />
        </label>
        <label className="p-2">
          <div className="text-center">Idea:</div>
          <textarea
            name="ideaContent"
            cols={50}
            rows={4}
            className="px-2"
          ></textarea>
        </label>
        <button className="btn btn-primary my-2" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default IdeaSubmission;
