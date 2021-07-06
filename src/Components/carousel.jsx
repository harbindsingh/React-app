import React from "react";
import "./css/carousel.css";

function Carousel(props) {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div
          className="carousel-item active "
          data-bs-interval={props.time ? props.time : 3000}
        >
          <img src={props.img1} className="d-block w-100" alt="CarouselImg01" />
          <div
            className="carousel-caption d-none d-md-block text-start"
            style={{ top: 0 }}
          >
            {props.noText ? null : (
              <div className="carousel-text p-5">
                <h3>First slide label</h3>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            )}
          </div>
        </div>
        <div
          className="carousel-item"
          data-bs-interval={props.time ? props.time : 3000}
        >
          <img src={props.img2} className="d-block w-100" alt="CarouselImg02" />
          <div
            className="carousel-caption d-none d-md-block text-start "
            style={{ top: 0 }}
          >
            {props.noText ? null : (
              <div className="carousel-text p-5">
                <h3>Second slide label</h3>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            )}
          </div>
        </div>
        <div
          className="carousel-item"
          data-bs-interval={props.time ? props.time : 3000}
        >
          <img src={props.img3} className="d-block w-100" alt="CarouselImg03" />
          <div
            className="carousel-caption d-none d-md-block text-start"
            style={{ top: 0 }}
          >
            {props.noText ? null : (
              <div className="carousel-text p-5">
                <h3>Third slide label</h3>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {props.nobtn ? null : (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  );
}

export default Carousel;
