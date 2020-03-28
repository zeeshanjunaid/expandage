import React from "react"
import { Container, Row, Col } from "reactstrap"
import { FaQuoteRight, FaStar } from "react-icons/fa"

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonial-area pt-120">
      <Container>
        <Row className="justify-content-center">
          <Col lg={5}>
            <div className="section-title text-center pb-40">
              <div className="line m-auto"></div>
              <h3 className="title">
                Users sharing<span> their experience</span>
              </h3>
            </div>
          </Col>
        </Row>
        <Row
          className="testimonial-active wow fadeInUpBig"
          data-wow-duration="1s"
          data-wow-delay="0.8s"
        >
          <Col lg={4}>
            <div className="single-testimonial">
              <div className="testimonial-review d-flex align-items-center justify-content-between">
                <div className="quota">
                  <FaQuoteRight />
                </div>
                <div className="star">
                  <ul>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="testimonial-text">
                <p className="text">
                  Without Expandage, we would have no product. It's as simple as
                  that.
                </p>
              </div>
              <div className="testimonial-author d-flex align-items-center mb-30">
                <div className="author-content media-body">
                  <h6 className="holder-name">BaaS</h6>
                  <p className="text">
                    <strong>Andrew</strong> - 17-01-2020
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="single-testimonial">
              <div className="testimonial-review d-flex align-items-center justify-content-between">
                <div className="quota">
                  <FaQuoteRight />
                </div>
                <div className="star">
                  <ul>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="testimonial-text">
                <p className="text">
                  Expandage provided comprehensive consultation before beginning
                  development, kept us updated throughout and provided a sleek
                  and well functioning piece of core integration software for
                  our business.
                </p>
              </div>
              <div className="testimonial-author d-flex align-items-center mb-30">
                <div className="author-content media-body">
                  <h6 className="holder-name">Sage Partners</h6>
                  <p className="text">
                    <strong>Francois</strong> - 17-03-2019
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="single-testimonial">
              <div className="testimonial-review d-flex align-items-center justify-content-between">
                <div className="quota">
                  <FaQuoteRight />
                </div>
                <div className="star">
                  <ul>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="testimonial-text">
                <p className="text">
                  We partnered with Expandage more than a year ago and haven't
                  looked back.
                </p>
              </div>
              <div className="testimonial-author d-flex align-items-center mb-30">
                <div className="author-content media-body">
                  <h6 className="holder-name">Magna</h6>
                  <p className="text">
                    <strong>Nicholas</strong> - 10-09-2019
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials
