import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Integrations/Hero"
import Content from "../components/Integrations/Content"
import Signup from "../components/Signup"

const Integrations = () => (
  <Layout>
    <SEO title="Integrations" />
    <Hero />
    <Content />
    <Signup />
  </Layout>
)

export default Integrations
