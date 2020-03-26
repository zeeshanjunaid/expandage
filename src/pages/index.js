import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Services from "../components/Homepage/Services"
import About from "../components/Homepage/About"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Services />
    <About />
  </Layout>
)

export default IndexPage
