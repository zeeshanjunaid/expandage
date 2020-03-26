import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"
import ReactWOW from "react-wow"
import AboutShape1 from "../../images/about-shape-1.svg"
import AboutImg1 from "../../images/about1.svg"

const About = () => {
  return (
    <>
    <section id="about" className="about-area pt-70">
      <Container>
        <Row>
          <Col lg={6}>
            <ReactWOW animation="fadeInLeftBig" duration="1s" delay=".5s">
              <div className="about-content mt-50">
                <div className="section-title">
                  <div className="line"></div>
                  <h3 className="title">Technology Integration</h3>
                </div>
                <p className="text">
                  Our experience in delivering manufacturing solutions includes
                  integration of many types of technology and their developments
                  over time.
                </p>

                <Link to="/" className="main-btn">
                  Try it
                </Link>
              </div>
            </ReactWOW>
          </Col>
          <Col lg={6}>
            <ReactWOW animation="fadeInRightBig" duration="1s" delay=".5s">
              <div className="about-image text-center mt-50">
                <img src={AboutImg1} alt="shape" />
              </div>
            </ReactWOW>
          </Col>
        </Row>
      </Container>
      <div className="about-shape-1">
        <img src={AboutShape1} alt="shape" />
      </div>
    </section>
    
    </>
  )
}

export default About
