import React, { Component } from "react"
import {
  Form,
  Input,
  Button,
  Alert,
  FormGroup,
  Label,
  Container,
  Col,
  Row,
} from "reactstrap"
import Icon from "../images/icon-expandage.svg"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      phone: "",
      company: "",
      advert: "",
      message: "",
      services: "",
      success: false,
      error: false,
      // services: [
      //   {
      //     id: 1,
      //     value: "Automated Systems Communications",
      //     isChecked: false,
      //   },
      //   { id: 2, value: "Sign ups & KYC S", isChecked: false },
      //   {
      //     id: 3,
      //     value: "Settlement & Exchanges",
      //     isChecked: false,
      //   },
      // ],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "signup", ...this.state }),
    })
      .then(() =>
        this.setState({
          success: true,
          name: "",
          email: "",
          phone: "",
          company: "",
          advert: "",
          message: "",
          error: false,
        })
      )
      .catch(error =>
        this.setState({
          error: true,
          name: "",
          email: "",
          phone: "",
          company: "",
          advert: "",
          message: "",
          success: false,
        })
      )

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  // handleCheckBox = event => {
  //   let services = this.state.services
  //   services.forEach(service => {
  //     if (service.value === event.target.value)
  //       service.isChecked = event.target.checked
  //   })
  //   this.setState({ services: services })
  // }
  render() {
    const {
      name,
      email,
      phone,
      company,
      advert,
      message,
      error,
      success,
    } = this.state
    return (
      <section
        id="signupSection"
        className="mt-120 wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay="0.8s"
      >
        <Container>
          <div className="signupForm">
            <img className="signup_img" src={Icon} alt="Expandage" />
            <Form
              name="signup"
              method="POST"
              className="signup"
              onSubmit={this.handleSubmit}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="signup" />
              <Row>
                <Col lg={6}>
                  <FormGroup>
                    <Input
                      required
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      onChange={this.handleChange}
                      value={name}
                    />
                  </FormGroup>
                </Col>
                <Col lg={6}>
                  <FormGroup>
                    <Input
                      required
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Email"
                      onChange={this.handleChange}
                      value={email}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg={4}>
                  <FormGroup>
                    <Input
                      required
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Phone Number"
                      onChange={this.handleChange}
                      value={phone}
                    />
                  </FormGroup>
                </Col>
                <Col lg={4}>
                  <FormGroup>
                    <Input
                      required
                      type="text"
                      name="company"
                      id="company"
                      placeholder="Company Name"
                      onChange={this.handleChange}
                      value={company}
                    />
                  </FormGroup>
                </Col>
                <Col lg={4}>
                  <FormGroup>
                    <Input
                      required
                      type="text"
                      name="advert"
                      id="advert"
                      placeholder="Google, Conference, Social Media..."
                      onChange={this.handleChange}
                      value={advert}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="mt-10">
                {/* <Col lg={4} className="signup-services">
                  <h3>Interested Services</h3>
                  <FormGroup check className="signup-services-checkbox">
                    {services.map(service => (
                      <Label check key={service.id}>
                        <input
                          onClick={this.handleCheckBox}
                          type="checkbox"
                          checked={service.isChecked}
                          value={service.value}
                          name={service.value}
                        />
                        {service.value}
                      </Label>
                    ))}
                  </FormGroup>
                </Col> */}
                <Col lg={12}>
                  <FormGroup>
                    <Label for="message">Write a Message</Label>
                    <Input
                      type="textarea"
                      name="message"
                      id="message"
                      onChange={this.handleChange}
                      value={message}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="justify-content-center mt-40"></Row>

              <Row className="justify-content-center">
                <Col lg={3} style={{ textAlign: "center" }}>
                  <Button type="submit" className="main-btn signup-btn">
                    Sign Up
                  </Button>
                </Col>
              </Row>
              <Row className="justify-content-center mt-40">
                {success && (
                  <Alert color="success" className="mt-10">
                    You have successfully signed up.
                  </Alert>
                )}
                {error && (
                  <Alert color="danger" className="mt-10">
                    Something went wrong, please refresh the page and try again.
                  </Alert>
                )}
              </Row>
            </Form>
          </div>
        </Container>
      </section>
    )
  }
}

export default Signup
