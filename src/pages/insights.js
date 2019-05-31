import React from "react"
import { graphql } from "gatsby"
import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/styles"
import Container from "@material-ui/core/Container"

import SEO from "../components/seo"
import Hero from "../components/hero-div"
import Layout from "../components/layout"
import useMainHeroImage from "../hooks/use-main-hero-image"
import InsightContent from "../components/insight-content"
import InsightImage from "../components/insight-image"
import InsightAuthor from "../components/insight-author"
import TitleBar from "../components/title-bar"

const useStyles = makeStyles({
  headerhero: {
    backgroundColor: `#E7ECEF`,
    background: `#E7ECEF`,
  },
})

const InsightsPage = ({ data }) => {
  const posts = data.allContentfulBlogPost.edges
  const heroImage = data.heroImage
  const hero = useMainHeroImage()
  const heroContent = data.heroContent
  const classes = useStyles()
  return (
    <Layout logo={hero.whiteLogo}>
      <SEO
        title="Insights | Hunter Applied Research"
        keywords={[
          `government grants`,
          `government incentives`,
          `hunter applied research`,
          `research & development tax incentive`,
          `rdti`,
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
      <Container>
        <TitleBar title="Articles to explore" color="black" />
        <Grid
          container
          direction="row"
          spacing={2}
          style={{ marginBottom: 60 }}
        >
          {posts.map(({ node }) => (
            <Grid key={node.id} item container md={4} sm={12} xs={12}>
              <Card style={{ borderTop: `3px solid #009688` }}>
                <Container style={{ padding: 20 }}>
                  <InsightImage node={node} />
                  <InsightContent node={node} classes={classes} />
                  <InsightAuthor node={node} />
                </Container>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

export default InsightsPage

export const insightsQuery = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          publishDate(formatString: "MMMM Do, YYYY")
          slug
          description {
            description
          }
          author {
            name
            email
            shortBio {
              shortBio
            }
            image {
              file {
                url
              }
              title
            }
          }
          imageTitle {
            file {
              url
            }
            title
          }
        }
      }
    }
    heroImage: contentfulHeros(page: { eq: "Insights" }) {
      title
      imageTitle {
        file {
          url
        }
      }
    }
    heroContent: contentfulPageContent(
      page: { eq: "Insights" }
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
      page
    }
  }
`
