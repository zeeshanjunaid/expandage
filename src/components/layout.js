/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"
import WOW from "wow.js/dist/wow.js"
import Footer from "./Footer"
// import Header from "./Header"


class Layout extends Component {
  componentDidMount() {
    new WOW().init()
  }
  render() {
    const { children } = this.props
    return (
      <main>
        {/* <Header /> */}
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
