import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import './index.sass';

import { Header } from "../components"
import Sections from "../Sections"

const IndexPage = () => (
  <div className="root">
    <Header />
    <Sections />
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Tune4race" />

export default IndexPage
