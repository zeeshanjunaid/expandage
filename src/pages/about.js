import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/About/Hero"
import Content from "../components/About/Content"

const About = () => (
  <Layout>
    <SEO title="About Us" />
    <Hero />
    <Content />
  </Layout>
)

export default About
