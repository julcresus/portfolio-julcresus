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
        projectname="Sleen"
        projectpicture1="./img/sleen/picture1.jpg"
        projectpicture2="./img/sleen/picture2.jpg"
        projectpicture3="./img/sleen/picture3.jpg"
        projectpicture4="./img/sleen/picture4.jpg"
        projectdescription="During my degree in Sup'Internet, back in France, I was involved in the Sleen project which was my final project to graduate. It lasted one year and a half. Our team was composed of three business major students (<a href='https://www.linkedin.com/in/mfund/'>Marie Fundaro</a> <a href='https://www.linkedin.com/in/manon-guetta-13284888/'>Manon Guetta</a> &amp; <a href='https://www.linkedin.com/in/dorianenard/'>Dorian Énard</a>), two front and back-end development students (<a href='https://julien-madiot.fr'>Julien Madiot</a> &amp; <a href='linkedin.com/in/simon-stefani-b8193792'> Simon Stefani</a>) and finally, two design major students (<a href='http://martinruiz.fr'>Martin Ruiz</a> &amp; myself). I worked mainly with Julien Madiot, one of the developer, to work on the front development, using both of our skills to make the development and design process more elaborate and efficient. <br><br>Sleen is a concept of an application used as a second screen for your presentations. It had three main features : segmentation, sharing in real-time using social networks with polls, social login... and stats reports. <br><br>To create this interface, I used Sketch for the version 2, and Sublime Text for the first one, to develop it using HTML5, CSS3, Bootstrap and JavaScript. Nevertheless, Julien Madiot & myself worked with some front-dev frameworks, such as AngularJS. The interface is mainly inspired by Material Design by Google, using the Materialize.css framework."
        projectmore=""
        projectprocess="To create this interface, I used Sketch for the version 2, and Sublime Text for the first one, to develop it using HTML5, CSS3, Bootstrap and JavaScript. Nevertheless, Julien Madiot & myself worked with some front-dev frameworks, such as AngularJS. The interface is mainly inspired by Material Design by Google, using the Materialize.css framework."
      />
    );
    return <div>{projectrender}</div>;
  }
}
export default Sleen;
