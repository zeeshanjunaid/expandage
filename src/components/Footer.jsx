import React from "react"
import { Container, Row, Col } from "reactstrap"
import ParticlesFooter from "../components/particles/ParticlesFooter"
import { Link } from "gatsby"
import logoLight from "../images/logo-light.svg"

import Subscribers from "./Subscribers"

const Footer = () => {
  return (
    <footer id="footer" className="footer-area pt-120">
      <Container>
        <div
          className="subscribe-area wow fadeIn"
          data-wow-duration="1s"
          data-wow-delay=".5s"
        >
          <Row>
            <Col lg={6}>
              <div className="subscribe-content mt-45">
                <h2 className="subscribe-title">
                  Subscribe Our Newsletter <span>get reguler updates</span>
                </h2>
              </div>
            </Col>
            <Col lg={6}>
              <Subscribers />
            </Col>
          </Row>
        </div>
        <div className="footer-widget pb-100">
          <Row>
            <Col lg={4} md={6} sm={8}>
              <div
                className="footer-about mt-50 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay=".2s"
              >
                <Link to="/" className="logo">
                  <img src={logoLight} alt="Logo Footer" />
                </Link>
                <p className="text">
                  Lorem ipsum dolor sit amet consetetur sadipscing elitr,
                  sederfs diam nonumy eirmod tempor invidunt ut labore et dolore
                  magna aliquyam.
                </p>
              </div>
            </Col>
            <Col lg={5} md={7} sm={7}>
              <div className="footer-link d-flex mt-50 justify-content-md-between">
                <div
                  className="link-wrapper wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay=".4s"
                >
                  <div className="footer-title">
                    <h4 className="title">Quick Link</h4>
                  </div>
                  <ul className="link">
                    <li>
                      <Link to="/">Road Map</Link>
                    </li>
                    <li>
                      <Link to="/">Terms of Services</Link>
                    </li>
                  </ul>
                </div>

                <div
                  className="link-wrapper wow fadeIn"
                  data-wow-duration="1s"
                  data-wow-delay=".6s"
                >
                  <div className="footer-title">
                    <h4 className="title">Resources</h4>
                  </div>
                  <ul className="link">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/">About</Link>
                    </li>
                    <li>
                      <Link to="/">Integrations</Link>
                    </li>
                    <li>
                      <Link to="/">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={3} md={5} sm={5}>
              <div
                className="footer-contact mt-50 wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay=".8s"
              >
                <div className="footer-title">
                  <h4 className="title">Contact Us</h4>
                </div>
                <ul className="contact">
                  <li>+809272561823</li>
                  <li>info@gmail.com</li>
                  <li>
                    123 Stree New York City , United <br /> States Of America
                    750.
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <div className="footer-copyright">
          <Row>
            <Col lg={12}>
              <div className="copyright d-sm-flex justify-content-between">
                <div className="copyright-content">
                  <p className="text">
                    Copyright © 2020 <Link to="/">expandage.com</Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <ParticlesFooter />
    </footer>
  )
}

export default Footer
