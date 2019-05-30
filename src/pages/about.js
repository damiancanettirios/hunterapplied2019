import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Hero from "../components/hero-div"
import Team from "../components/team-div"
import Layout from "../components/layout"
import useMainHeroImage from "../hooks/use-main-hero-image"

const AboutPage = ({ data }) => {
  const heroImage = data.heroImage
  const hero = useMainHeroImage()
  const heroContent = data.heroContent
  const team = data.team
  const members = data.members.edges
  return (
    <Layout logo={hero.whiteLogo}>
      <SEO
        title="About | Hunter Applied Research"
        keywords={[
          `government grants`,
          `government incentives`,
          `hunter applied research`,
          `hunter & briels`,
          `research & development tax incentive`,
          `rdti`,
          `australia government grants`,
          `accelerating commercialisation`,
        ]}
      />
      <Hero
        heroImage={heroImage}
        heroOverlay={hero.heroOverlay}
        heroDesign={hero.heroDesign}
        logo={hero.whiteLogo}
        heroContent={heroContent}
      />
      <Team
        title={team.title}
        description={team.shortDescript.shortDescript}
        teamMembers={members}
      />
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    team: contentfulPageContent(title: { eq: "Our Team" }) {
      id
      title
      shortDescript {
        shortDescript
      }
    }
    members: allContentfulPerson(sort: { fields: [sequence], order: ASC }) {
      edges {
        node {
          id
          name
          title
          location
          email
          linkedIn
          image {
            file {
              url
            }
          }
          longBio {
            id
            longBio
          }
        }
      }
    }
    heroContent: contentfulPageContent(
      page: { eq: "About" }
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
    heroImage: contentfulHeros(title: { eq: "SydneyOperaHouse" }) {
      id
      title
      imageTitle {
        file {
          url
        }
      }
    }
  }
`
