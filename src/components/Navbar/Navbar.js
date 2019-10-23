import React from "react"
import { NavDiv } from "./style"
import { NavLink } from "react-router-dom"

const routes = [
  { to: "/", label: "Home" },
  { to: "/cities", label: "Cities" },
  { to: "/about", label: "About" }
]

const Navbar = () => {
  const links = routes.map(({ to, label }) => {
    return (
      <NavLink strict exact to={to} key={to}>
        {label}
      </NavLink>
    )
  })

  return (
    <NavDiv>
      <nav>{links}</nav>
    </NavDiv>
  )
}

export default Navbar
