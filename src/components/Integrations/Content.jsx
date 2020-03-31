import React from "react"
import { Container, Row, Col } from "reactstrap"
import { Link } from "gatsby"

import Automate from "../../images/automate.png"
import SericeIcon1 from "../../images/service-icon-1.png"
import SericeIcon2 from "../../images/service-icon-2.png"
import { FaCheck } from "react-icons/fa"

const keyFeatures = [
  {
    id: 1,
    title: "Global Scale",
    desc:
      "We can run checks on US & International customers, and manage country- specific rules, laws, and regulations to efficiently onboard and maintain multi-jurisdictional clients for you.",
  },
  {
    id: 2,
    title: "Automated Compliance",
    desc:
      "With our easy-to-integrate APIs, our built-in compliance service allows you to automate your AML and KYC checks in a snap.",
  },
  {
    id: 3,
    title: "Compliance-As-A-Service",
    desc:
      "Looking for something more tailored to your business? We are here to help.",
  },
  {
    id: 4,
    title: "Reduce Your Risk of Fraud",
    desc:
      "We help ensure that your customers are who they say they are and provide source of funds checks to extend the reach of your due diligence, and lower your overall risk.",
  },
  {
    id: 5,
    title: "Improve Customer Experience",
    desc:
      "Run your obligatory checks with the industry's premium compliance service. Designed with the user in mind, onboarding is an easy and painless process.",
  },
]

const Content = () => {
  return (
    <>
      <section id="integrations" className="about-area pt-70">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div
                className="about-image text-center mt-50 wow fadeInRightBig"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <img src={Automate} alt="about" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-content mt-50 wow fadeInLeftBig">
                <div className="section-title">
                  <div className="line"></div>
                  <h3 className="title">
                    A simple onboarding process? Now{" "}
                    <span style={{ color: "#fe8464" }}>that's</span> refreshing.
                  </h3>
                </div>
                <p className="text">
                  Automate your onboarding with our BSA-compliant service,
                  available in conjunction with our custody, escrow, exchange,
                  stablecoin, and tokenized assets APIs. Our AML (Anti-Money
                  Laundering), KYC (Know-Your-Customer), and bad actor checks
                  bring together hundreds of data sources to meet your
                  regulatory and risk management obligations while removing the
                  need for physical storage
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-120">
            <Col lg={12} className="text-center">
              <h3
                className="service-title wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                The tools you need to manage your day-to-day operations.
              </h3>
            </Col>
          </Row>
          <Row className="mb-120">
            <Col lg={6} className="mt-40">
              <div
                className="service-box d-flex wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.6s"
              >
                <div className="service-box-left">
                  <img src={SericeIcon1} alt="icon" />
                </div>
                <div className="service-box-right">
                  <h2>Regulation Ready</h2>
                  <p>
                    Meet the needs for offering stock, debt and digital assets
                    conducted pursuant to US Securities regulations, including
                    initial public offerings (Forms S-1, S-11, etc.) and private
                    offerings (Regulations A, D, CF and S).
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} className="mt-40">
              <div
                className="service-box d-flex wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay=".7s"
              >
                <div className="service-box-left">
                  <img src={SericeIcon2} alt="icon" />
                </div>
                <div className="service-box-right">
                  <h2>Technology-Driven</h2>
                  <p>
                    We provide a suite of services delivered with technology for
                    back office support and compliance.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-kf">
        <Container>
          <Row className="pt-160 pb-160">
            <Col lg={12}>
              <div className="grid-boxes">
                <div
                  className="grid-box wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay=".6s"
                >
                  <h2>Key Compliance Features</h2>
                </div>
                {keyFeatures.map(kf => (
                  <div
                    key={kf.id}
                    className="grid-box wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay=".6s"
                  >
                    <h3>{kf.title}</h3>
                    <p>{kf.desc}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Content
