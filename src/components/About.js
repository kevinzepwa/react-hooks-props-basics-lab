import React from "react";
import Links from "./Links";
import user from "../data/user";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Lorem Ipsum</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links user={user} />
    </div>
  );
}

export default About;
