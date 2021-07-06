import React, { Component } from "react";
import axios from "axios";

class BlogDetail extends Component {
  state = {
    blog: {},
  };

  createMarkup = () => {
    return { __html: this.state.blog.content };
  };

  componentDidMount() {
    const blogId = this.props.match.params.blogId;
    axios
      .get(`http://127.0.0.1:8000/api-blog/${blogId}`)
      .then((res) => {
        this.setState({
          blog: res.data,
        });
      })
      .catch((err) => {
        <div>Something Went Wrong. Please Re-Try </div>;
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.blog.title}</h1>
        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
      </div>
    );
  }
}

export default BlogDetail;
