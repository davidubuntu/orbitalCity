import React from "react"
import { HomeContainer, Title } from "./style.js"
const Home = () => {
  return (
    <>
      <HomeContainer>
        <Title>OrbitalCity</Title>
        <div className="with--accent">Powerfull </div>
        <div>algorithms</div>
        <div>
          that help <span className="with--accent"> you to discover</span>
          <div> cities</div>
        </div>
      </HomeContainer>
    </>
  )
}

export default Home
