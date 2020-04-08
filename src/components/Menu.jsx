import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"
import { FaAngleUp } from "react-icons/fa"
import scrollTo from "gatsby-plugin-smoothscroll"

import logoDark from "../images/logo-dark.svg"
import logoLight from "../images/logo-light.svg"

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrolling(false)
      } else if (window.scrollY !== 0) {
        setScrolling(true)
      }
    }
    window.addEventListener("scroll", handleScroll)
  }, [])

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <div id="header" className={`navbar-area ${scrolling && "sticky"}`}>
        <Container>
          <Row>
            <Col lg={12}>
              <Navbar expand="lg">
                <NavbarBrand className="logo" tag={Link} to={"/"}>
                  <img
                    alt="logo"
                    src={scrolling ? logoDark : logoLight}
                    className={`${scrolling ? "logo-dark" : "logo-light"}`}
                  />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse className="sub-menu-bar" isOpen={isOpen} navbar>
                  <Nav id="nav" className="ml-auto" navbar>
                    <NavItem className="active">
                      <NavLink tag={Link} className="page-scroll" to="/">
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem className="active">
                      <NavLink tag={Link} className="page-scroll" to={"/about"}>
                        About
                      </NavLink>
                    </NavItem>
                    <NavItem className="active">
                      <NavLink
                        tag={Link}
                        className="page-scroll"
                        to="/integrations"
                      >
                        Integrations
                      </NavLink>
                    </NavItem>
                    <NavItem className="active">
                      <NavLink
                        tag={Link}
                        className="page-scroll"
                        to={"/contact"}
                      >
                        Contact
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
                <div className="navbar-btn d-none d-sm-inline-block">
                  <button
                    className="main-btn"
                    to="/"
                    onClick={() => scrollTo("#signupSection")}
                  >
                    Sign Up
                  </button>
                </div>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>

      {scrolling && (
        <button onClick={() => scrollTo("#heroArea")} className="back-to-top">
          <FaAngleUp />
        </button>
      )}
    </>
  )
}

export default Menu
