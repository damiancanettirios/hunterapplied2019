import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { withStyles } from "@material-ui/core/styles"

import withRoot from "../withRoot"
import Footer from "./footer"
import "./layout.css"
import "typeface-roboto"

const styles = theme => ({
  divStyle: {
    margin: `0 auto`,
    padding: 0,
  },
  [theme.breakpoints.down("sm")]: {
    divStyle: {
      margin: `0 auto`,
      padding: 5,
    },
  },
})

const Layout = ({ children, classes, logo }) => (
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
        <div className={classes.divStyle}>
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

export default withRoot(withStyles(styles)(Layout))
