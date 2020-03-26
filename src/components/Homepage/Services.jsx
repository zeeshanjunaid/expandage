import React from "react"
import { Link } from "gatsby"
import { FaWallet } from "react-icons/fa"
import { Container, Row, Col } from "reactstrap"
import ReactWOW from "react-wow"

import ServicesShapeBg from "../../images/services-shape.svg"
import ServicesShape1 from "../../images/services-shape-1.svg"

const Services = () => {
  return (
    <section id="features" className="services-area pt-120">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="section-title text-center pb-40">
              <div className="line m-auto"></div>
              <h3 className="title">
                Expandage EU{" "}
                <span>
                  offers any business dealing with technology integration and
                  automation with 3 major competitive advantages
                </span>
              </h3>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={4} md={7} sm={8}>
            <ReactWOW animation="fadeIn" duration="1s" delay=".2s">
              <div className="single-services text-center mt-30">
                <div className="services-icon">
                  <img className="shape" src={ServicesShapeBg} alt="shape" />
                  <img className="shape-1" src={ServicesShape1} alt="shape" />
                  <FaWallet />
                </div>
                <div className="services-content mt-30">
                  <h4 className="services-title">
                    <Link to="/">Cost Effectiveness</Link>
                  </h4>
                  <p className="text">
                    Entering any country / corridor with very low operating
                    capital (no pre-funding)
                  </p>
                </div>
              </div>
            </ReactWOW>
          </Col>
          <Col lg={4} md={7} sm={8}>
            <ReactWOW animation="fadeIn" duration="1s" delay=".2s">
              <div className="single-services text-center mt-30">
                <div className="services-icon">
                  <img className="shape" src={ServicesShapeBg} alt="shape" />
                  <img className="shape-1" src={ServicesShape1} alt="shape" />
                  <FaWallet />
                </div>
                <div className="services-content mt-30">
                  <h4 className="services-title">
                    <Link to="/">Cost Effectiveness</Link>
                  </h4>
                  <p className="text">
                    Entering any country / corridor with very low operating
                    capital (no pre-funding)
                  </p>
                </div>
              </div>
            </ReactWOW>
          </Col>
          <Col lg={4} md={7} sm={8}>
            <ReactWOW animation="fadeIn" duration="1s" delay=".2s">
              <div className="single-services text-center mt-30">
                <div className="services-icon">
                  <img className="shape" src={ServicesShapeBg} alt="shape" />
                  <img className="shape-1" src={ServicesShape1} alt="shape" />
                  <FaWallet />
                </div>
                <div className="services-content mt-30">
                  <h4 className="services-title">
                    <Link to="/">Cost Effectiveness</Link>
                  </h4>
                  <p className="text">
                    Entering any country / corridor with very low operating
                    capital (no pre-funding)
                  </p>
                </div>
              </div>
            </ReactWOW>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={10}>
            <p className="services-expan text-center mt-60 mb-60">
              We serve financial institutions and payments companies including
              but not limited to licensed money transfer operators, banks,
              neobanks, prepaid card issuers, telcos with e-money license and
              mass payout companies serving to clients such as Airbnb, Booking,
              Upwork, Uber, etc.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services
