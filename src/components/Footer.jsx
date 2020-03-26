import React from "react"
import { Container, Row, Col, Button, Form, Input } from "reactstrap"
import ReactWOW from "react-wow"
import ParticlesFooter from "../components/particles/ParticlesFooter"
import { Link } from "gatsby"

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer id="footer" className="footer-area pt-120">
      <Container>
        <ReactWOW animation="fadeIn" duration="1s" delay=".5s">
          <div className="subscribe-area">
            <Row>
              <Col lg={6}>
                <div className="subscribe-content mt-45">
                  <h2 className="subscribe-title">
                    Subscribe Our Newsletter <span>get reguler updates</span>
                  </h2>
                </div>
              </Col>
              <Col lg={6}>
                <div className="subscribe-form mt-50">
                  <Form>
                    <Input type="text" placeholder="Enter email"></Input>
                    <Button className="main-btn">Subscribe</Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </ReactWOW>
        <div className="footer-widget pb-100">
          <Row>
            <Col lg={4} md={6} sm={8}>
              <ReactWOW animation="fadeIn" duration="1s" delay=".2s">
                <div className="footer-about mt-50">
                  <Link to="/" className="logo">
                    Expandage
                  </Link>
                  <p className="text">
                    Lorem ipsum dolor sit amet consetetur sadipscing elitr,
                    sederfs diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam.
                  </p>
                  <ul className="social">
                    <li>
                      <a rel="nofollow" target="_blank" href="facebook.com">
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a rel="nofollow" target="_blank" href="twitter.com">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a rel="nofollow" target="_blank" href="instagram.com">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a rel="nofollow" target="_blank" href="linkedin.com">
                        <FaLinkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </ReactWOW>
            </Col>
            <Col lg={5} md={7} sm={7}>
              <div className="footer-link d-flex mt-50 justify-content-md-between">
                <ReactWOW animation="fadeIn" duration="1s" delay=".4s">
                  <div className="link-wrapper">
                    <div className="footer-title">
                      <h4 className="title">Quick Link</h4>
                    </div>
                    <ul className="link">
                      <li>
                        <Link to="/">Road Map</Link>
                      </li>
                      <li>
                        <Link to="/">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="/">Refund Policy</Link>
                      </li>
                      <li>
                        <Link to="/">Terms of Services</Link>
                      </li>
                      <li>
                        <Link to="/">Pricing</Link>
                      </li>
                    </ul>
                  </div>
                </ReactWOW>
                <ReactWOW animation="fadeIn" duration="1s" delay=".6s">
                  <div className="link-wrapper">
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
                </ReactWOW>
              </div>
            </Col>
            <Col lg={3} md={5} sm={5}>
              <ReactWOW animation="fadeIn" duration="1s" delay=".8s">
                <div className="footer-contact mt-50">
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
              </ReactWOW>
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
