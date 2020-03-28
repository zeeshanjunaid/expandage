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
      <div className={`navbar-area ${scrolling && "sticky"}`}>
        <Container>
          <Row>
            <Col lg={12}>
              <Navbar expand="lg">
                <NavbarBrand className="logo" tag={Link} to={"/"}>
                  <img alt="logo" src={scrolling ? logoDark : logoLight} className={`${scrolling ? "logo-dark" : "logo-light"}`} />
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
                      <NavLink
                        tag={Link}
                        className="page-scroll"
                        to={"/page-2"}
                      >
                        About
                      </NavLink>
                    </NavItem>
                    <NavItem className="active">
                      <NavLink className="page-scroll" href="#">
                        Integrations
                      </NavLink>
                    </NavItem>
                    <NavItem className="active">
                      <NavLink className="page-scroll" href="#">
                        Contact
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
                <div className="navbar-btn d-none d-sm-inline-block">
                  <Link className="main-btn" to="/">
                    Sign Up
                  </Link>
                </div>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>

      {scrolling && (
        <a href="#" className="back-to-top">
          <FaAngleUp />
        </a>
      )}
    </>
  )
}

export default Menu
