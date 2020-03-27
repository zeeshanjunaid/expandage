/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
// import WOW from "wow.js"
import Footer from "./Footer"
import Header from "./Header"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/default.css"
import "../styles/animate.css"
import "../styles/style.css"

class Layout extends Component {
  // componentDidMount() {
  //   new WOW().init()
  // }
  render() {
    const { children } = this.props
    return (
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
