import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./project.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowLeft);

function Project_View(props) {
  console.info(props.data.date);
  return (
    <div className="row justify-content-center">
      <div className="col-xl-4 col-md-6 col-sm-12 project_description">
        <h2>
          <a href="./">
            <FontAwesomeIcon icon="arrow-left" className="backicon" size="xs" />
          </a>
          {props.data.name}
        </h2>
        <br />
        <h5>The brief</h5>
        <div
          dangerouslySetInnerHTML={{
            __html: props.data.description
          }}
        />
        <br />
        <div
          dangerouslySetInnerHTML={{
            __html: props.data.more
          }}
        />
        <br />
        <h5>The process</h5>
        <div
          dangerouslySetInnerHTML={{
            __html: props.data.process
          }}
        />
      </div>

      <div className="col-xl-5 col-md-6 col-sm-12">
        <Carousel showStatus={false} showIndicators={false}>
          {props.data.picture.map(i => (
            <div>
              <img src={i} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
export default Project_View;
