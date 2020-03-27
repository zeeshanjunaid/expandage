import React from "react"
import ParticlesHeader from "./particles/ParticlesHeader"
import Menu from "./Menu"
import Hero from "./Homepage/Hero"
import bannerBG from "../images/banner-bg.svg"

const Header = () => {
  return (
    <div className="header-area">
      <Menu />
      <div
        id="home"
        className="header-hero bg_cover"
        style={{ backgroundImage: `url(${bannerBG})` }}
      >
        <Hero />
        <ParticlesHeader />
      </div>
    </div>
  )
}

export default Header
