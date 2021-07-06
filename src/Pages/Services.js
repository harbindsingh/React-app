import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Accordian from "../Components/accordians";
import CardText from "../Components/cardWithText";
import img1 from "../Images/indAuto.png";
import img2 from "../Images/cloud.png";
import img3 from "../Images/pcb.png";
import "./services.css";

// import service1Img from "../Images/service pae iot without background.png";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <title>Services</title>
      </Helmet>
      <div id="service-main-div">
        <div className="d-md-flex container-md pt-5">
          <div className="">
            <h2>HEllooo...</h2>
          </div>
          <div className="mx-md-5 d-md-flex" style={{ width: "100%" }}>
            <div className="d-md-flex-column" style={{ width: "100%" }}>
              <Accordian count="01" />
              <Accordian count="02" />
            </div>
            <div className="d-md-flex-column" style={{ width: "100%" }}>
              <Accordian count="03" />
              <Accordian count="04" />
            </div>
          </div>
        </div>
        <div className="container-md">
          <div
            className="d-md-flex justify-content-center mt-3"
            style={{ width: "100%" }}
          >
            <CardText
              heading="project1"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

"
              imgUrl={img1}
            />
            <CardText
              heading="project1"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

"
              imgUrl={img2}
            />
          </div>
          <div className="d-md-flex justify-content-center">
            <CardText
              heading="project1"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

"
              imgUrl={img3}
            />
            <CardText
              heading="project1"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

"
              imgUrl={img3}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Services;
