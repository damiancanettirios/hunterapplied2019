import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero-div"
import ValuePropDiv from "../components/value-prop-div"
import LatestInsights from "../components/latest-insights"

class HomePage extends React.Component {
  render() {
    const heroImage = get(this, "props.data.heroImage")
    const heroOverlay = get(this, "props.data.heroOverlay")
    const pointBottom = get(this, "props.data.pointBottom")
    const whiteLogo = get(this, "props.data.whiteLogo")
    const heroContent = get(this, "props.data.heroContent")
    const valueProp = get(this, "props.data.valueProp")
    const valuePropStages = get(this, "props.data.valuePropStages.edges")
    const insights = get(this, "props.data.insights")
    const topInsights = get(this, "props.data.topInsights.edges")
    return (
      <Layout logo={whiteLogo}>
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
          heroOverlay={heroOverlay}
          heroDesign={pointBottom}
          logo={whiteLogo}
          heroContent={heroContent}
        />
        <ValuePropDiv valueProp={valueProp} valuePropStages={valuePropStages} />
        <LatestInsights insights={insights} topInsights={topInsights} />
      </Layout>
    )
  }
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
