import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./about.css";

const hobbies = [
  "instagramming food, people, buildings or selfies",
  "playing rugby, or at least trying, for the King's Cross Steelers",
  "watching movies or TV shows",
  "travelling, visiting new cities, new museums"
];

const hobbies_list = hobbies.map(hobby => {
  return <li>{hobby}</li>;
});

const About = () => (
  <div class="row justify-content-center">
    <div class="col-xl-4 col-md-6 col-sm-12">
      <img
        src="img/profilepic.png"
        alt="profilepic"
        class="img-responsive profilepic"
      />
    </div>
    <div class="col-xl-5 col-md-6 col-sm-12">
      <h2>Hello there!</h2>
      <p>
      I am Julien and I'm a UX Designer from London.
        <br />
      </p>
      <p>
      Originally from Paris, I emigrated to London in 2016, in order to do my studies in UX Design and discover some new horizons. I graduated in 2018 from Kingston University, London with a MsC in User Experience Design. Currently, I'm working for Methods as a UX Designer.
      </p>
      <p>
      I use everyday skills and incorporate them in UX, because, in my opinion, UX is an everyday issue with for example, "How can the user enjoy the commute or the lift better ?" or "How can the queue at the canteen be shortened with technology ?", everyone is doing a bit of UX everyday, they just don't know how to apply it and maybe make it better. And that's what we're here to do as UX Designers, help the users have the best experience they can, and find every way possible of doing it, with the latest trends and technology while respecting their privacy and understanding their needs.
      </p>
      <p>When I'm not designing, I'm:</p>
      {hobbies_list}
      <br />
      <p>
        Don't hesitate to say hello here: {""}
        <a href="mailto:cresusjulien@gmail.com">hello@juliencresus.com</a>!
      </p>
    </div>
  </div>
);

export default About;
