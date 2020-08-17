import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Project_Thumbnail from "./components/thumbnail/thumbnail.js";
import Project_View from "../project/project_.js";
import "./home.css";

const projects = [
  {
    name: "Every Mind Matters",
    tags: "ux design, research, user testing",
    date: "2019",
    mainimg: "./img/phe/main.jpg",
    link: "phe"
  },
  {
    name: "societe generale design",
    tags: "ux design, ui design",
    date: "2017/2018",
    mainimg: "./img/sgdesign/main.jpg",
    link: "sgdesign"
  },
  {
    name: "pride in london",
    tags: "ui design",
    date: "2018",
    mainimg: "./img/pride/main.jpg",
    link: "pride"
  },
  {
    name: "playstation store redesign study",
    tags: "ui design, redesign, ux design",
    date: "2017",
    mainimg: "./img/psstore/main.jpg",
    link: "psstore"
  },
  {
    name: "sleen: a presentation assistant",
    tags: "ui design, front-end dev",
    date: "2017",
    mainimg: "./img/sleen/main.jpg",
    link: "sleen"
  },
  {
    name: "familyplace",
    tags: "ux design, research",
    date: "2016",
    mainimg: "./img/familyplace/main.jpg",
    link: "familyplace"
  }
];

class HomeView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var ProjectsElements = projects.map((projects, index) => (
      <Project_Thumbnail key={index} data={projects} />
    ));
    return <div className="App row mt-4">{ProjectsElements}</div>;
  }
}
export default HomeView;
