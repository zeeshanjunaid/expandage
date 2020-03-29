import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../components/Homepage/Services"
import About from "../components/Homepage/About"
import Testimonials from "../components/Homepage/Testimonials"
import Hero from "../components/Homepage/Hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Services />
    <About />
    <Testimonials />
  </Layout>
)

export default IndexPage
