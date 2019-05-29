import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"

import Hero from "../components/hero-div"
import ServicesEntry from "../components/services-entry"
import Layout from "../components/layout"

class ProgramsPage extends React.Component {
  render() {
    const heroImage = get(this, "props.data.heroImage")
    const heroOverlay = get(this, "props.data.heroOverlay")
    const pointBottom = get(this, "props.data.pointBottom")
    const whiteLogo = get(this, "props.data.whiteLogo")
    const heroContent = get(this, "props.data.heroContent")
    const grants = get(this, "props.data.grants.edges")

    return (
      <Layout logo={whiteLogo}>
        <Hero
          heroImage={heroImage}
          heroOverlay={heroOverlay}
          heroDesign={pointBottom}
          logo={whiteLogo}
          heroContent={heroContent}
        />
        <ServicesEntry
          entryTitle={"Grant Programs"}
          entry={grants}
          long={true}
        />
      </Layout>
    )
  }
}

export default ProgramsPage

export const ProgramsQuery = graphql`
  {
    heroImage: contentfulHeros(title: { eq: "Staircase" }) {
      id
      title
      imageTitle {
        file {
          url
        }
      }
    }
    heroOverlay: contentfulHeros(title: { eq: "GreyOverlay" }) {
      id
      title
      imageTitle {
        file {
          url
        }
      }
    }
    pointBottom: contentfulHeros(title: { eq: "Point Bottom" }) {
      id
      title
      imageTitle {
        file {
          url
        }
      }
    }
    whiteLogo: contentfulLogo(name: { eq: "white_text" }) {
      id
      name
      image {
        file {
          url
        }
      }
    }
    heroContent: contentfulPageContent(
      page: { eq: "Programs" }
      position: { eq: "Hero" }
    ) {
      id
      title
      shortDescript {
        shortDescript
      }
      longDescript {
        longDescript
      }
      cta
      ctaPage
      page
    }
    grants: allContentfulGrantPrograms(sort: { fields: sequence, order: ASC }) {
      edges {
        node {
          id
          blurbTitle
          shortBlurb
          slug
          type
        }
      }
    }
  }
`
