import React, { Component } from "react";
import HomeView from "./pages/home/home.js";
import About from "./pages/about/about.js";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as HashRouter, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBehance,
  faLinkedin,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import Project_View from "./pages/project/project.js";
import ReactGA from "react-ga";

library.add(faBehance);
library.add(faLinkedin);
library.add(faInstagram);

function initializeReactGA() {
  ReactGA.initialize("UA-135016325-1");
  ReactGA.pageview("/portfolio");
}

const phe = {
  name: "Every Mind Matters",
  tags: "ux design, research, user testing",
  date: "2019",
  mainimg: "../img/phe/main.jpg",
  link: "phe",
  description:
    "TBC",
  more:
    "TBC",
  process:
    "TBC",
  picture: [
    "../img/phe/1.png",
    "../img/phe/2.png",
    "../img/phe/3.png",
    "../img/phe/4.png",
    "../img/phe/5.png",
    "../img/phe/6.png",
    "../img/phe/7.png",
    "../img/phe/8.png",
  ]
};
const psstore = {
  name: "Playstation Store App study",
  tags: "ui design, redesign, ux design",
  date: "2017",
  mainimg: "../img/psstore/main.jpg",
  link: "psstore",
  description:
    "Within the scope of my studies in Kingston University, the goal was to analyse a desktop system such as a website or an application and redesign it for mobile devices, using UX principles and the CIF (Common Industry Format) for Usability Test Report. I decided to focus on the PlayStation Store, which, in my opinion, has a lack of consistency between all current platforms. I decided to merge the PlayStation Store and the current PlayStation Messages app and make an application of its time.",
  more:
    "You can try it using this link: <a href='https://projects.invisionapp.com/share/UHA1EOIVZ#/screens' target='_blank'>https://projects.invisionapp.com/share/UHA1EOIVZ#/screens</a>",
  process:
    "Within the scope of my studies in Kingston University, the goal was to analyse a desktop system such as a website or an application and redesign it for mobile devices, using UX principles and the CIF (Common Industry Format) for Usability Test Report. I decided to focus on the PlayStation Store, which, in my opinion, has a lack of consistency between all current platforms. I decided to merge the PlayStation Store and the current PlayStation Messages app and make an application of its time.<br><br><ul><li>Benchmark about the different game platforms (Xbox Store, PlayStation Store Desktop, PS Store Console...)</li><li>Testing on those platforms by making the user try different easy tasks and interview them on their behaviour and opinion</li><li>Surveying a bigger audience made of gamers and non gamers about their use of the gaming platform</li><li>Understanding of all the data gathered and defining the deliverables</li><li>Building user journeys and personas based on the research done before</li><li>Content creation such as messages and games</li><li>Wireframing the app using Axure</li><li>UI Design using Sketch and InVision</li><li>App testing on same users as before</li></ul>",
  picture: [
    "../img/psstore/picture1.jpg",
    "../img/psstore/picture2.jpg",
    "../img/psstore/picture3.jpg",
    "../img/psstore/picture4.jpg",
    "../img/psstore/picture5.jpg"
  ]
};
const sgdesign = {
  name: "Societe Generale Design",
  tags: "ux design, ui design",
  date: "2017/2018",
  mainimg: "../img/sgdesign/main.jpg",
  link: "sgdesign",
  description:
    "SG Markets Foreign Exchange is a fast, secure and reliable way to electronically access Societe Generale’s deep FX liquidity. FX has many products such as Options, Target Accumulator and Bulk Trading.",
  more:
    "You can read more about the design process here: <a href='https://design.sgmarkets.com/en/' target='_blank'> https://design.sgmarkets.com/en/</a>",
  process:
    "I was brought on board around 35% of the project. Each product had its own process, although there was a common base on every process.<ul><li>Meeting with the stakeholders, P.O and developers aka. the pizza team</li><li> Defining use cases, as a follow-up of the stakeholders meeting</li><li>Building user journeys and personas</li><li>Validating all the research with the pizza team</li><li>Wireframing based on the research</li><li>UI/UX prototyping using Adobe Photoshop/XD</li><li>Developer handout using InVision</li></ul><h5>The transition</h5>Moreover, the design system was being switched from Bootstrap 3 to Bootstrap 4, which provided a new design system and style, which brought some changes to the actual process. Indeed, the processes were taking more time and needed more supervision from the transition team, and also more discussion with developers.",
  picture: [
    "../img/sgdesign/picture1.png",
    "../img/sgdesign/picture2.png",
    "../img/sgdesign/picture3.png"
  ]
};
const pride = {
  name: "Pride In London",
  tags: "ui design",
  date: "2018",
  mainimg: ".../img/pride/main.jpg",
  link: "pride",
  description:
    "I got to work on the Pride in London website, as a volunteer. It was a small experience because of time schedule, although, I got to see most of the process that was made, and got to work with really nice people. I mainly worked on the UI of 'Places to Eat & Drink', based on wireframes, desktop and mobile version. It's an experience I'd love to try again next year, much more earlier to give myself more time on it.",
  more: " ",
  process:
    "To create this interface, I used Sketch, my personal favorite, combined with InVision for the interaction and the sharing.",

  picture: ["../img/pride/picture1.png", "../img/pride/picture2.jpg"]
};
const sleen = {
  name: "Sleen",
  tags: "ui design, front-end dev",
  date: "2016/2017",
  mainimg: ".../img/sleen/main.jpg",
  link: "sleen",
  description:
    "During my degree in Sup'Internet, back in France, I was involved in the Sleen project which was my final project to graduate. It lasted one year and a half. Our team was composed of three business major students (<a href='https://www.linkedin.com/in/mfund/'>Marie Fundaro</a> <a href='https://www.linkedin.com/in/manon-guetta-13284888/'>Manon Guetta</a> &amp; <a href='https://www.linkedin.com/in/dorianenard/'>Dorian Énard</a>), two front and back-end development students (<a href='https://julien-madiot.fr'>Julien Madiot</a> &amp; <a href='linkedin.com/in/simon-stefani-b8193792'> Simon Stefani</a>) and finally, two design major students (<a href='http://martinruiz.fr'>Martin Ruiz</a> &amp; myself). I worked mainly with Julien Madiot, one of the developer, to work on the front development, using both of our skills to make the development and design process more elaborate and efficient. <br><br>Sleen is a concept of an application used as a second screen for your presentations. It had three main features : segmentation, sharing in real-time using social networks with polls, social login... and stats reports. <br><br>To create this interface, I used Sketch for the version 2, and Sublime Text for the first one, to develop it using HTML5, CSS3, Bootstrap and JavaScript. Nevertheless, Julien Madiot & myself worked with some front-dev frameworks, such as AngularJS. The interface is mainly inspired by Material Design by Google, using the Materialize.css framework.",
  more: " ",
  process:
    "To create this interface, I used Sketch for the version 2, and Sublime Text for the first one, to develop it using HTML5, CSS3, Bootstrap and JavaScript. Nevertheless, Julien Madiot & myself worked with some front-dev frameworks, such as AngularJS. The interface is mainly inspired by Material Design by Google, using the Materialize.css framework.",
  picture: [
    "../img/sleen/picture1.jpg",
    "../img/sleen/picture2.jpg",
    "../img/sleen/picture3.jpg",
    "../img/sleen/picture4.jpg"
  ]
};
const familyplace = {
  name: "FamilyPlace",
  tags: "ux design, research",
  date: "2016",
  mainimg: "../img/familyplace/main.jpg",
  link: "familyplace",
  description:
    "During my master year in Kingston University, one of my projects was to create a completely new product, on the UX side. Therefore, as a brother of 4 sisters living in another country from them, I've immedietaly thought about a Workspace for Facebook-like, made for family.",
  more:
    "As it was a university project, you can access the report about it <a href='./pdf/K1632457_DESIGNREPORT_UX(CONTENTS).pdf' target='_blank'> there.</a>",
  process:
    "To create this interface, I used Sketch for the version 2, and Sublime Text for the first one, to develop it using HTML5, CSS3, Bootstrap and JavaScript. Nevertheless, Julien Madiot & myself worked with some front-dev frameworks, such as AngularJS. The interface is mainly inspired by Material Design by Google, using the Materialize.css framework.",
  picture: [
    "../img/familyplace/picture1.png",
    "../img/familyplace/picture2.png",
    "../img/familyplace/picture3.jpg"
  ]
};

class MainView extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <div className="row justify-content-center">
            <ul className="nav nav-left">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link bg-dark text-white font-weight-bold logo"
                >
                  Julien CRÉSUS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  about
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./pdf/cv.pdf" target="_blank">
                  cv
                </a>
              </li>
            </ul>
            <div className="col-xl-3" />
            <div className="col-xl-3 socials">
              <a
                className="socialnetwork"
                href="https://www.behance.net/cresusj"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "behance"]} />
              </a>
              <a
                className="socialnetwork"
                href="http://www.linkedin.com/in/juliencresus"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
              <a
                className="socialnetwork"
                href="http://instagram.com/julcresaurus"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </div>
          </div>
          <Route exact path="/" component={HomeView} />
          <Route path="/about" component={About} />
          <Route
            path={"/project/psstore"}
            render={() => <Project_View data={psstore} />}
          />
          <Route
            path={"/project/pride"}
            render={() => <Project_View data={pride} />}
          />
          <Route
            path={"/project/familyplace"}
            render={() => <Project_View data={familyplace} />}
          />
          <Route
            path={"/project/sleen"}
            render={() => <Project_View data={sleen} />}
          />
          <Route
            path={"/project/sgdesign"}
            render={() => <Project_View data={sgdesign} />}
          />
          <Route
            path={"/project/phe"}
            render={() => <Project_View data={phe} />}
          />
        </div>
      </HashRouter>
    );
  }
}

export default MainView;
