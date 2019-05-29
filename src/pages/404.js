import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const whiteLogo = get(this, "props.data.whiteLogo")
    const heroImage = get(this, "props.data.heroImage")
    const pointBottom = get(this, "props.data.pointBottom")
    return (
      <Layout logo={whiteLogo}>
        <SEO title="404: Not found" />
        <BackgroundImage
          fluid={heroImage.imageTitle.fluid}
          backgroundColor={`#040e18`}
          style={{
            width: `100%`,
            backgroundPosition: `bottom center`,
            backgroundRepeat: `repeat-y`,
            backgroundSize: `cover`,
            height: 700,
          }}
        >
          <BackgroundImage
            fluid={pointBottom.imageTitle.fluid}
            style={{
              width: `100%`,
              backgroundPosition: `bottom center`,
              backgroundRepeat: `repeat-x`,
              backgroundSize: `cover`,
            }}
          >
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </BackgroundImage>
        </BackgroundImage>
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
    heroImage: contentfulHeros(title: { eq: "Staircase" }) {
      id
      title
      imageTitle {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
    pointBottom: contentfulHeros(title: { eq: "Point Bottom" }) {
      id
      title
      imageTitle {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
