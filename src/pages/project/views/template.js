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
        projectname="NOM_PROJECT"
        projectpicture1="./img/NOM_PROJECT/picture1.jpg"
        projectpicture2="./img/NOM_PROJECT/picture2.jpg"
        projectpicture3="./img/NOM_PROJECT/picture3.jpg"
        projectpicture4="./img/NOM_PROJECT/picture4.jpg"
        projectdescription="Project description"
        projectmore="link or additional information (italic)"
        projectprocess="Describe process "
      />
    );
    return <div>{projectrender}</div>;
  }
}
export default NOM_PROJECT;
