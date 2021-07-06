import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SectionWithImg from "../Components/sectionWithImage.jsx";
import SectionWithBgImg from "../Components/sectionBgImage.jsx";
import Carousel from "../Components/carousel.jsx";
import CImg1 from "../Images/carouselImg01.png";
import CImg2 from "../Images/carouselImg02.png";
import CImg3 from "../Images/carouselImg03.png";
import whoWeAreImg from "../Images/whoWeAre.png";
import services1 from "../Images/services01.png";
import services4 from "../Images/services02.png";
import services3 from "../Images/services03.png";
import services2 from "../Images/services04.png";
import ideaBgImg from "../Images/Idea.png";
import "./Home.css";
import Slider from "../Components/slider.jsx";
import demoImg from "../Images/demo1.png";
import msgImg from "../Images/msg.png";
import msg2Img from "../Images/msg2.png";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <title>OxYmora Technology Pvt. Ltd.</title>
      </Helmet>
      <Carousel img1={CImg1} img2={CImg2} img3={CImg3} />

      <SectionWithBgImg
        imgUrl={whoWeAreImg}
        heading="Who We Are?"
        text={
          <div>
            <p>
              “Ideas and Technological discoveries are the driving engines of
              economy.”
            </p>
            <p>
              OxYmora Technology Pvt. Ltd. is a leading MCA (Ministry
              Corporation of Affairs) approved, Electronics Product and service
              Provider Company.
            </p>
            <p>
              We create a better world full of richer digital experience through
              innovative technology and product. We are the patrons who enable
              our youth to bring innovative ideas and strategies for their
              digital transformation and automation.
            </p>
            <p>
              We are responsible for providing sales and marketing, trading,
              technical support and consumer services on electronic components
              and accessories. We are able to source material and components
              used in manufacturing of electronics including PCB Designing.
            </p>
            From Engineering to application development, we help our clients to
            find the right problems to solve them effectively.
            <div className="text-end">
              <p>
                <Link to="/aboutUs">
                  <button className="btn btn-primary">Know More --</button>
                </Link>
              </p>
            </div>
          </div>
        }
      />
      <section className="pb-3">
        <SectionWithImg
          heading="Our Services"
          text={
            <div>
              <p>
                “Ideas and Technological discoveries are the driving engines of
                economy.”
              </p>
              <p>
                OxYmora Technology Pvt. Ltd. is a leading MCA (Ministry
                Corporation of Affairs) approved, Electronics Product and
                service Provider Company.
              </p>
              <p>
                We create a better world full of richer digital experience
                through innovative technology and product. We are the patrons
                who enable our youth to bring innovative ideas and strategies
                for their digital transformation and automation.
              </p>
              <p>
                We are responsible for providing sales and marketing, trading,
                technical support and consumer services on electronic components
                and accessories. We are able to source material and components
                used in manufacturing of electronics including PCB Designing.
              </p>
              From Engineering to application development, we help our clients
              to find the right problems to solve them effectively.
              <div className="text-end">
                <p>
                  <Link to="/ourServices">
                    <button className="btn btn-primary">
                      See Our Services
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          }
        />
        <div className="d-md-flex justify-content-around">
          <div
            className="m-3  shadow"
            style={{
              position: "relative",
            }}
          >
            <Link to="">
              <img src={services1} className="service-img rounded" />
              <h3
                className="textONimg text-white"
                style={{ position: "absolute", bottom: 50, left: 130 }}
              >
                Hello
              </h3>
            </Link>
          </div>

          <div
            className="m-3  shadow"
            style={{
              position: "relative",
            }}
          >
            <Link to="">
              <img src={services2} className="service-img rounded" />
              <h3
                className="textONimg text-white"
                style={{ position: "absolute", bottom: 50, left: 130 }}
              >
                Hello
              </h3>
            </Link>
          </div>
          <div
            className="m-3  shadow"
            style={{
              position: "relative",
            }}
          >
            <Link to="">
              <img src={services3} className="service-img rounded" />
              <h3
                className="textONimg text-white"
                style={{ position: "absolute", bottom: 50, left: 130 }}
              >
                Hello
              </h3>
            </Link>
          </div>
          <div
            className="m-3  shadow"
            style={{
              position: "relative",
            }}
          >
            <Link to="">
              <img src={services4} className="service-img rounded" />
              <h3
                className="textONimg text-white"
                style={{ position: "absolute", bottom: 50, left: 130 }}
              >
                Hello
              </h3>
            </Link>
          </div>
        </div>
      </section>
      <SectionWithBgImg
        imgUrl={ideaBgImg}
        heading="Be a part of us..."
        text={
          <div>
            <p>
              “Ideas and Technological discoveries are the driving engines of
              economy.”
            </p>
            <p>
              OxYmora Technology Pvt. Ltd. is a leading MCA (Ministry
              Corporation of Affairs) approved, Electronics Product and service
              Provider Company.
            </p>
            <p>
              We create a better world full of richer digital experience through
              innovative technology and product. We are the patrons who enable
              our youth to bring innovative ideas and strategies for their
              digital transformation and automation.
            </p>
            <p>
              We are responsible for providing sales and marketing, trading,
              technical support and consumer services on electronic components
              and accessories. We are able to source material and components
              used in manufacturing of electronics including PCB Designing.
            </p>
            From Engineering to application development, we help our clients to
            find the right problems to solve them effectively.
            <div className="text-end">
              <p>
                <Link to="/ideaSubmission">
                  <button className="btn btn-primary">Share Your Ideas</button>
                </Link>
              </p>
            </div>
          </div>
        }
        img=""
      />
      {/* BLOG SECTION */}
      <div className="my-5">
        <h2 className="container">Portfolio</h2>
        <hr className="container" />
        <Slider
          imgUrl={[
            demoImg,
            demoImg,
            demoImg,
            demoImg,
            demoImg,
            demoImg,
            demoImg,
            demoImg,
            demoImg,
            demoImg,
          ]}
          link={[]}
        />
        <div
          className="container-sm my-3"
          id="msgFounder"
          // style={{ maxWidth: "70%" }}
        >
          <h4>Message from our Founders:</h4>
          <Carousel
            img1={msgImg}
            img2={msg2Img}
            img3={msgImg}
            noText={true}
            nobtn={true}
            time={2000}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
