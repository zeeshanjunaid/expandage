import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/Contact/Content"
import Hero from "../components/Contact/Hero"
import Signup from "../components/Signup"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Hero />
    <Content />
    <Signup />
  </Layout>
)

export default Contact
