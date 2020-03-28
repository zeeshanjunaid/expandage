import React from "react"
import { Link } from "gatsby"
import { FaWallet, FaRecycle, FaHandsHelping } from "react-icons/fa"
import { Container, Row, Col } from "reactstrap"

import ServicesShapeBg from "../../images/services-shape.svg"
import ServicesShape1 from "../../images/services-shape-1.svg"
import ServicesShape2 from "../../images/services-shape-2.svg"
import ServicesShape3 from "../../images/services-shape-3.svg"

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
            <div
              className="single-services text-center mt-30 wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay=".2s"
            >
              <div className="services-icon">
                <img className="shape" src={ServicesShapeBg} alt="shape" />
                <img className="shape-1" src={ServicesShape1} alt="shape" />
                <FaRecycle />
              </div>
              <div className="services-content mt-30">
                <h4 className="services-title">
                  <Link to="/">Automated Systems Communications</Link>
                </h4>
                <p className="text">
                  Automate your onboarding with our BSA-compliant service
                  available.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={7} sm={8}>
            <div
              className="single-services wow fadeIn text-center mt-30"
              data-wow-duration="1s"
              data-wow-delay=".2s"
            >
              <div className="services-icon">
                <img className="shape" src={ServicesShapeBg} alt="shape" />
                <img className="shape-1" src={ServicesShape2} alt="shape" />
                <FaHandsHelping />
              </div>
              <div className="services-content mt-30">
                <h4 className="services-title">
                  <Link to="/">Sign ups {"&"} KYC</Link>
                </h4>
                <p className="text">
                  We are the industry’s leading provider of escrow services for
                  technology-driven securities offerings.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} md={7} sm={8}>
            <div
              className="single-services wow fadeIn text-center mt-30"
              data-wow-duration="1s"
              data-wow-delay=".2s"
            >
              <div className="services-icon">
                <img className="shape" src={ServicesShapeBg} alt="shape" />
                <img className="shape-1" src={ServicesShape3} alt="shape" />
                <FaWallet />
              </div>
              <div className="services-content mt-30">
                <h4 className="services-title">
                  <Link to="/">Settlement {"&"} Exchanges</Link>
                </h4>
                <p className="text">
                  Entering any country / corridor with very low operating
                  capital (no pre-funding)
                </p>
              </div>
            </div>
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
