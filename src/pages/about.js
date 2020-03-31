import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/About/Hero"
import Content from "../components/About/Content"
import Testimonials from "../components/Homepage/Testimonials"
import Signup from "../components/Signup"

const About = () => (
  <Layout>
    <SEO title="About Us" />
    <Hero />
    <Content />
    <Testimonials />
    <Signup />
  </Layout>
)

export default About
