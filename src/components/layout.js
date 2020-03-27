/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import PropTypes from "prop-types"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return <>testing again</>
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
