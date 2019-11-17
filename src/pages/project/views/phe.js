import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Project_View from "../project.js";

class Sleen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var projectrender = (
      <Project_View
      />
    );
    return <div>{projectrender}</div>;
  }
}
export default phe;
