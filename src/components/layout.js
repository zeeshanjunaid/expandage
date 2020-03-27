/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import Footer from "./Footer"

const isServer = typeof window === "undefined"
const WOW = !isServer ? require("wow.js") : null

const Layout = ({ children }) => {
  useEffect(() => {
    new WOW().init()
  }, [])
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
