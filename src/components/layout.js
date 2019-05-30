import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import withRoot from "../utils/withRoot"
import Footer from "./footer"
import "./layout.css"
import "typeface-roboto"

const Layout = ({ children, logo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div style={{ margin: `0 auto`, padding: 0 }}>
          <main>{children}</main>
        </div>
        <Footer logo={logo} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default withRoot(Layout)
