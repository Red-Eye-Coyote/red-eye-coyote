/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import "./layout.css"

const Layout = ({ children, page }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let layoutClass = '';
  if (page === 'about') {
    layoutClass = 'layout--dark'
  }

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} page={page}/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `106px 1.0875rem 1.45rem`
        }}
        className={layoutClass}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
