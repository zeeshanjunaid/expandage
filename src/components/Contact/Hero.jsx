import React from "react"
import { Container, Row, Col } from "reactstrap"
import HeaderBg from "../../images/header-bg.png"

const Hero = () => {
  return (
    <div
      id="heroArea"
      className="header-hero bg_cover curve-bg"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(43,152,208, .8), rgba(43,152,208, .8)), url(${HeaderBg})`,
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
                GET IN TOUCH
              </h2>

              <h3
                className="header-sub-title wow fadeInUp"
                data-wow-duration="1.3s"
                data-wow-delay=".2s"
              >
                We are passionate about helping people build businesses, protect
                assets and stay in compliance
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
