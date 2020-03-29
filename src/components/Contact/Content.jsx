import React from "react"
import { Container, Row, Col } from "reactstrap"

const Content = () => {
  return (
    <section id="content" className="content-area pt-120">
      <Container>
        <Row className="justify-content-center">
          <Col lg={4} sm={6}>
            <div className="contact-box">
              <h3 className="contact-box-title">support emails</h3>
              <ul className="contact-box-list">
                <li>
                  <p>Customer Service</p>
                  <span>support@expandage.com</span>
                </li>
                <li>
                  <p>Sales Inquiry</p>
                  <span>info@expandage.com</span>
                </li>
                <li>
                  <p>Billing Inquiry</p>
                  <span>billing@expandage.com</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="contact-box">
              <h3 className="contact-box-title">CORPORATE CONTACT</h3>
              <ul className="contact-box-list">
                <li>
                  <p>
                    Tallinn, Tornimae, Tornimäe 5-2nd Floor, 10145 Tallinn,
                    Estonia
                  </p>
                </li>
                <li>
                  <span>info@expandage.com</span>
                </li>
                <li>
                  <p>Summerlin, NV 89145</p>
                  <span></span>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="contact-box">
              <h3 className="contact-box-title">HAVE A QUESTION?</h3>
              <ul className="contact-box-list">
                <li>
                  <p>
                    Interested in joining one of the fastest growing
                    technology-driven financial institutions?
                  </p>
                </li>
                <li>
                  <span>702.840.4000</span>
                </li>
                <li>
                  <p>email us for any help</p>
                  <span>info@expandage.com</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Content
