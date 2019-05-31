import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero-div"
import ValuePropDiv from "../components/value-prop-div"
import LatestInsights from "../components/latest-insights"
import useMainHeroImage from "../hooks/use-main-hero-image"

const HomePage = ({ data }) => {
  const heroImage = data.heroImage
  const heroContent = data.heroContent
  const valueProp = data.valueProp
  const valuePropStages = data.valuePropStages.edges
  const insights = data.insights
  const topInsights = data.topInsights.edges
  const hero = useMainHeroImage()
  return (
    <Layout logo={hero.whiteLogo}>
      <SEO
        title="Government Grants and Incentives | Hunter Applied Research"
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
      <ValuePropDiv valueProp={valueProp} valuePropStages={valuePropStages} />
      <LatestInsights insights={insights} topInsights={topInsights} />
    </Layout>
  )
}

export default HomePage

export const HomeQuery = graphql`
  {
    heroImage: contentfulHeros(title: { eq: "Driver" }) {
      id
      title
      imageTitle {
        file {
          url
        }
      }
    }
    heroContent: contentfulPageContent(
      page: { eq: "Home" }
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
      isLongDescript
    }
    valueProp: contentfulPageContent(
      page: { eq: "Home" }
      position: { eq: "Value Prop" }
    ) {
      id
      title
      shortDescript {
        shortDescript
      }
      cta
      ctaPage
    }
    valuePropStages: allContentfulBlurbs(
      filter: { pageContent: { page: { eq: "Home" } } }
      sort: { fields: [sequence], order: ASC }
    ) {
      edges {
        node {
          id
          title
          description {
            description
          }
          image {
            id
            description
            file {
              url
            }
          }
        }
      }
    }
    topInsights: allContentfulBlogPost(limit: 2) {
      edges {
        node {
          id
          title
          slug
          description {
            description
          }
          imageTitle {
            file {
              url
              fileName
            }
          }
        }
      }
    }
    insights: contentfulPageContent(
      page: { eq: "Home" }
      position: { eq: "Insights" }
    ) {
      id
      title
      cta
      ctaPage
    }
  }
`
