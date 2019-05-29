import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"

import SEO from "../components/seo"
import Hero from "../components/hero-div"
import Team from "../components/team-div"
import Layout from "../components/layout"

class AboutPage extends React.Component {
  render() {
    const heroImage = get(this, "props.data.heroImage")
    const heroOverlay = get(this, "props.data.heroOverlay")
    const pointBottom = get(this, "props.data.pointBottom")
    const whiteLogo = get(this, "props.data.whiteLogo")
    const heroContent = get(this, "props.data.heroContent")
    const team = get(this, "props.data.team")
    const members = get(this, "props.data.members.edges")
    return (
      <Layout logo={whiteLogo}>
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
          heroOverlay={heroOverlay}
          heroDesign={pointBottom}
          logo={whiteLogo}
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
  }
`
