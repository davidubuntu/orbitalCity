import React from "react"
import { TextContainer, Title, Text1, Text2, Text3 } from "./style.js"
const About = () => {
  return (
    <h1>
      <div className="content">
        <div className="content--inner">
          <TextContainer>
            <Title> Developed by David Díez</Title>
            <Text1 className="yellow">
              The Webb app is created with Javascript and ReactJS
            </Text1>
            <Text2>
              The are three main views and the city view is the one containing
              the logic to render both lists required
            </Text2>
            <Text3 className="yellow">
              Web is styled with react componentes
            </Text3>
          </TextContainer>
        </div>
      </div>
    </h1>
  )
}

export default About
