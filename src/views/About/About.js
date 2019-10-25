import React from "react"
import { Title, AboutContainer } from "./style.js"
const About = () => {
  return (
    <div className="view">
      <div className="content">
        <h1 className="content--inner">
          <p className="content--excerpt"> Developed by David Díez</p>
          <h3 className="with--accent">
            The Webb app is created with Javascript and ReactJS
          </h3>
          <h4>
            The are three main views and the city view is the one containing the
            logic to render both lists required
          </h4>
          <h5 className="with--accent">
            The are three main views and the city view is the one containing the
            logic to render both lists required
          </h5>
        </h1>
      </div>
    </div>
  )
}

export default About
