import React from 'react';
import './App.css';
import TextLoop from "react-text-loop";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Playstation from "./playstation"

function Home() {
  return (
    <div className="App">
      <div class="container">
        <p class="intro">
           I design interfaces and experiences for every type of user.
          <br></br>
          <br></br>
          Currently, <TextLoop interval={1300}>
                      <div>
                          <span>designing </span>
                      </div>
                      <div>creating </div>
                      <div>coding </div>
                      <div>testing </div>
                      <div>working </div>
                      <div>researching </div>
                  </TextLoop> @ Methods, London, UK.
        </p>

      </div>
      <div class='bottom_button'>
        <a>Scroll down for my projects</a>
      </div>
      <div class="projects">
          <div class='project'>
              <img src='./img/emm.png' width="100%"></img>
              <div class='imgcaption'>
                <p>Every Mind Matters</p>
                <p class='tags'>ux design, research, user testing</p>
              </div>
              <a href="/everymindmatters" class='button'>
                  See the project
              </a>
          </div>
          <div class='project'>
              <img src='./img/sg.jpg' width="100%"></img>
              <div class='imgcaption'>
                <p>Societe Generale Design</p>
                <p class='tags'>UX design, UI Design</p>
              </div>
              <a href="/sgdesign" class='button'>
                  See the project
              </a>
          </div>
          <div class='project'>
              <img src='./img/pride.jpg' width="100%"></img>
              <div class='imgcaption'>
                <p>Pride in London</p>
                <p class='tags'>UI Design</p>
              </div>
              <a href="/prideinlondon" class='button'>
                  See the project
              </a>
          </div>
          <div class='project'>
              <img src='./img/ps.jpg' width="100%"></img>
              <div class='imgcaption'>
                <p>University Case Study: Playstation Store</p>
                <p class='tags'>UX design, UI Design, Redesign</p>
              </div>
              <a href="/playstation" class='button'>
                  See the project
              </a>
          </div>
      </div>
      <div class="footer">
        <p class="outro">
           You can also check my CV <a href='./pdf/cv.pdf' target='_blank'>here</a>
          
        </p>

      </div>
      
    </div>
  );
}

export default Home;
