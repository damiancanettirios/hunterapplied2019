import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Logo = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "logoWhite.png" }) {
          publicURL
          name
        }
      }
    `}
    render={data => (
      <img
        src={data.logo.publicURL}
        alt={data.logo.name}
        style={{ margin: 0, width: 150 }}
      />
    )}
  />
)
export default Logo
