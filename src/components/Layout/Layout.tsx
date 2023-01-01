/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import Footer from "../Footer"

import "./Layout.sass"

// import "../layout.css"

const Layout = ({ children }) => {
  const classPrefix = "_component_layout_"

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={`${classPrefix}wrapper`}>
      <Header />
        <main className={`${classPrefix}contentWrapper`}>
          {children}
        </main>
      <Footer />
    </div>
  )
}

export default Layout
