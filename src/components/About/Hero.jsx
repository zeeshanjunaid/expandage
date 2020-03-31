import React from "react"
import { Container, Row, Col } from "reactstrap"
import HeaderBg from "../../images/header-bg.png"

const Hero = () => {
  return (
    <div
      id="about"
      className="header-hero bg_cover curve-bg"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(92,39,162, .8), rgba(55, 41, 125, .8)), url(${HeaderBg})`,
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="header-hero-contact-content header-hero-content text-center">
              <h2
                className="header-title wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay=".5s"
              >
                ABOUT US
              </h2>

              <h3
                className="header-sub-title wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay=".2s"
              >
                Expandage is the technology-driven financial institution that
                provides open banking solutions for FinTech innovators..
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
