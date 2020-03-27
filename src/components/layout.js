/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import WOW from "wow.js"


import Footer from "./Footer"

class Layout extends React.Component {
  componentDidMount() {
    new WOW().init()
  }
  render() {
    const { children } = this.props
    return (
      <>
 
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
