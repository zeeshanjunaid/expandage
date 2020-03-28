import React, { Component } from "react"
import { Form, Input, Button, Alert } from "reactstrap"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Subscribers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      success: false,
      error: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "subscribers", ...this.state }),
    })
      .then(() => this.setState({ success: true, email: "", error: false }))
      .catch(error => this.setState({ error: true, email: "", success: false }))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { email, error, success } = this.state
    return (
      <div className="subscribe-form mt-50">
        <Form
          name="subscribers"
          method="POST"
          onSubmit={this.handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="subscribers" />
          <Input
            value={email}
            onChange={this.handleChange}
            name="email"
            type="email"
            required
            placeholder="Enter email"
          ></Input>
          <Button type="submit" className="main-btn">
            Subscribe
          </Button>
        </Form>
        {success && (
          <Alert color="success" className="mt-10">
            You have successfully subscribed to our newsletter
          </Alert>
        )}
        {error && (
          <Alert color="danger" className="mt-10">
            Something went wrong, please refresh the page and try again.
          </Alert>
        )}
      </div>
    )
  }
}

export default Subscribers
