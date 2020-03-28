import React, { Component } from "react"
import { Form, Input, Button } from "reactstrap"

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
    }
  }
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "subscribers", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { email } = this.state
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
            placeholder="Enter email"
          ></Input>
          <Button type="submit" className="main-btn">
            Subscribe
          </Button>
        </Form>
      </div>
    )
  }
}

export default Subscribers
