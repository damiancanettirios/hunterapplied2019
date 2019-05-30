import React from "react"
import { graphql } from "gatsby"

import Hero from "../components/hero-div"
import ServicesEntry from "../components/services-entry"
import Layout from "../components/layout"
import useMainHeroImage from "../hooks/use-main-hero-image"

const ProgramsPage = ({ data }) => {
  const heroImage = data.heroImage
  const hero = useMainHeroImage()
  const heroContent = data.heroContent
  const grants = data.grants.edges

  return (
    <Layout logo={hero.whiteLogo}>
      <Hero
        heroImage={heroImage}
        heroOverlay={hero.heroOverlay}
        heroDesign={hero.heroDesign}
        logo={hero.whiteLogo}
        heroContent={heroContent}
      />
      <ServicesEntry entryTitle={"Grant Programs"} entry={grants} long={true} />
    </Layout>
  )
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
