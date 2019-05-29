import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const whiteLogo = get(this, "props.data.whiteLogo")
    return (
      <Layout logo={whiteLogo}>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const NotFoundQuery = graphql`
  {
    whiteLogo: contentfulLogo(name: { eq: "white_text" }) {
      id
      name
      image {
        file {
          url
        }
      }
    }
  }
`
