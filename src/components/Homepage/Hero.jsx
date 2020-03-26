import React from "react"
import { Container, Row, Col } from "reactstrap"
import ReactWOW from "react-wow"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeroImg = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "header-hero.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const Hero = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={8}>
          <div className="header-hero-content text-center">
            <ReactWOW duration="1.3s" delay="0.5s" animation="fadeInUp">
              <h2 className="header-title">INTEGRATE. STREAMLINE.</h2>
            </ReactWOW>
            <ReactWOW animation="fadeInUp" duration="1.3s" delay="0.2s">
              <h3 className="header-sub-title">
                We take care of technology so you can take care of your
                business.
              </h3>
            </ReactWOW>
            <ReactWOW animation="fadeInUp" duration="1.3s" delay="1.1s">
              <Link to="/" className="header-btn">
                Start building
              </Link>
            </ReactWOW>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <ReactWOW duration="1.3s" delay=".4s" animation="fadeIn">
            <div className="header-hero-image text-center">
              <HeroImg />
            </div>
          </ReactWOW>
        </Col>
      </Row>
    </Container>
  )
}

export default Hero
