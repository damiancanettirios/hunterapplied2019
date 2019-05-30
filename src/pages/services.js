import React from "react"
import { graphql } from "gatsby"

import Hero from "../components/hero-div"
import ServicesEntry from "../components/services-entry"
import Layout from "../components/layout"
import useMainHeroImage from "../hooks/use-main-hero-image"

const ServicesPage = ({ data }) => {
  const heroImage = data.heroImage
  const hero = useMainHeroImage()
  const heroContent = data.heroContent
  const services = data.services.edges

  return (
    <Layout logo={hero.whiteLogo}>
      <Hero
        heroImage={heroImage}
        heroOverlay={hero.heroOverlay}
        heroDesign={hero.heroDesign}
        logo={hero.whiteLogo}
        heroContent={heroContent}
      />
      <ServicesEntry
        entryTitle={"Consulting Services"}
        entry={services}
        long={true}
      />
    </Layout>
  )
}

export default ServicesPage

export const ServiceQuery = graphql`
  {
    heroImage: contentfulHeros(title: { eq: "Sailing" }) {
      id
      title
      imageTitle {
        file {
          url
        }
      }
    }
    heroContent: contentfulPageContent(
      page: { eq: "Services" }
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
    services: allContentfulServices(sort: { fields: sequence, order: ASC }) {
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
