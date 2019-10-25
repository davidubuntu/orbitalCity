import React from "react"
import { Text } from "./style.js"
const About = () => {
  return (
    <h1>
      <div className="content">
        <div className="content--inner">
          <Text>
            <div className="content--excerpt"> Developed by David Díez</div>
            <div className="with--accent">
              The Webb app is created with Javascript and ReactJS
            </div>
            <div>
              The are three main views and the city view is the one containing
              the logic to render both lists required
            </div>
            <div className="with--accent">
              The are three main views and the city view is the one containing
              the logic to render both lists required
            </div>
          </Text>
        </div>
      </div>
    </h1>
  )
}

export default About
