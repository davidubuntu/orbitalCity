import React from "react"
import { HomeContainer, Title } from "./style.js"
const Home = () => {
  return (
    <div>
      <HomeContainer>
        <Title>OrbitalCity</Title>
        <div className="yellow">Powerfull </div>
        <div>algorithms</div>
        <div>
          that help <span className="yellow"> you to discover</span>
          <div> cities</div>
        </div>
      </HomeContainer>
    </div>
  )
}

export default Home
