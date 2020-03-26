/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import Footer from "./Footer"
import WOW from "wow.js"

class Layout extends Component {
  constructor(props) {
    super()
  }
  componentDidMount() {
    new WOW().init()
  }
  render() {
    const { children } = this.props
    return (
      <>
        <Header />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout