import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CardText from "./cardWithText";
import SectionWithBgImg from "./sectionBgImage";
import "./css/blogList.css";

class BlogList extends Component {
  state = {
    blogsList: [],
    category: "",
  };

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api-blog/")
      .then((res) => {
        this.setState({
          blogsList: res.data,
        });
      })
      .catch((err) => {
        <div>Something Went Wrong. Please Re-Try </div>;
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Blogs</title>
        </Helmet>
        <div>
          <SectionWithBgImg />
        </div>
        <div className="d-lg-flex flex-wrap container">
          {this.state.blogsList.map((blog) => {
            return (
              <div className="blogCard">
                <Link
                  to={`/blogs/${blog.id}`}
                  key={blog.id}
                  className="blogLink"
                >
                  <CardText
                    superHead={blog.title}
                    heading={<small>{blog.date_added.slice(0, 10)}</small>}
                    text={blog.description}
                    // dark={true}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default BlogList;
