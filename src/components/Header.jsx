import React from "react"
import Menu from "./Menu"
import Hero from "./Homepage/Hero"
import HeroContact from "./Contact/Hero"

const Header = ({ location }) => {
  return (
    <header className="header-area">
      <Menu />
    </header>
  )
}

export default Header
