import React from "react";
import "./css/cardWithText.css";

function CardText(props) {
  return (
    <div
      className={`card bg-transparent mx-auto m-md-3 my-3  ${
        props.dark ? "border-primary" : "border-white"
      }  border-5 ${
        props.heading || props.superHead ? "" : "d-none d-md-block"
      }`}
      style={
        props.bgimg
          ? { backgroundImage: `url("${props.bgimg}")`, borderRadius: "2em" }
          : null
      }
    >
      {props.imgUrl ? (
        <img src={props.imgUrl} className="card-img-top" alt="img" />
      ) : null}
      <div
        className={`card-body ${props.dark ? "text-dark" : "text-white"}`}
        style={{
          backgroundColor: `${props.heading ? "rgba(0, 0, 0, 0.5)" : ""}`,
        }}
      >
        {props.superHead ? <h3>{props.superHead}</h3> : null}
        <h5 className="card-title">{props.heading}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}

export default CardText;
