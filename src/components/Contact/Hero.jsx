import React from "react"
import { Container, Row, Col } from "reactstrap"

const HeroContact = () => {
  return (
    <div
      id="contact"
      className="header-hero bg_cover"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(92,39,162, 1), rgba(55, 41, 125, 1))`,
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

export default HeroContact
