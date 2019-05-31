import React from "react"
import { graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"

import Hero from "../components/hero-div"
import TitleBar from "../components/title-bar"
import SmallValuePropDiv from "../components/small-value-prop-div"
import SEO from "../components/seo"
import Layout from "../components/layout"
import useMainHeroImage from "../hooks/use-main-hero-image"

const useStyles = makeStyles({
  page: {
    width: `80%`,
    margin: `0 auto`,
  },
  paper: {
    padding: 20,
    textAlign: `center`,
    backgroundColor: `rgba(255, 255, 255, .95)`,
    maxWidth: `960px`,
    margin: `0 auto`,
  },
  overview: {
    fontWeight: `normal`,
  },
  approachDiv: {
    backgroundColor: `rgba(255,255,255,.75)`,
    margin: `0 auto`,
    minHeight: 270,
    padding: 20,
  },
})

const ApproachPage = ({ data }) => {
  const heroImage = data.heroImage
  const hero = useMainHeroImage()
  const heroContent = data.heroContent
  const serviceModel = data.serviceModelImage
  const steps = data.blurbs.edges
  const model = data.model.edges
  const classes = useStyles()
  return (
    <Layout logo={hero.whiteLogo}>
      <SEO title="Approach" />
      <Hero
        heroImage={heroImage}
        heroOverlay={hero.heroOverlay}
        heroDesign={hero.heroDesign}
        logo={hero.whiteLogo}
        heroContent={heroContent}
      />
      <div className={classes.page}>
        <TitleBar title="How We Work" color="black" />
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="flex-start"
          spacing={24}
          style={{ marginBottom: 60 }}
        >
          {steps.map(({ node }) => (
            <SmallValuePropDiv key={node.id} node={node} />
          ))}
        </Grid>
      </div>
      <div
        style={{
          backgroundImage: `url(${hero.heroOverlay.imageTitle.file.url}), 
                    url(${serviceModel.image.file.url})`,
          backgroundPosition: `top left, bottom center`,
          backgroundAttachment: `scroll, fixed`,
          backgroundRepeat: `repeat, no-repeat`,
          backgroundSize: `auto, cover`,
        }}
      >
        <div
          style={{
            paddingTop: 40,
            paddingBottom: 80,
            width: `80%`,
            margin: `0 auto`,
          }}
        >
          <TitleBar title={"Our Service Model"} color="white" />
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="flex-start"
            spacing={40}
          >
            {model.map(({ node }) => (
              <Grid key={node.id} item container sm={6} xs={12}>
                <div className={classes.approachDiv}>
                  <Typography variant="h6">{node.title}</Typography>
                  <Typography variant="h6" style={{ fontWeight: `normal` }}>
                    {node.description.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </Layout>
  )
}

export default ApproachPage

export const pageQuery = graphql`
  query {
    blurbs: allContentfulBlurbs(
      filter: { pageContent: { title: { eq: "Our Approach" } } }
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
    model: allContentfulBlurbs(
      filter: { pageContent: { title: { eq: "Our Service Model" } } }
      sort: { fields: [sequence], order: ASC }
    ) {
      edges {
        node {
          id
          title
          description {
            description
          }
        }
      }
    }
    heroImage: contentfulHeros(page: { eq: "Approach" }) {
      id
      title
      imageTitle {
        file {
          url
        }
      }
    }
    heroContent: contentfulPageContent(
      page: { eq: "Approach" }
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
    serviceModelImage: contentfulLogo(name: { eq: "Hiking" }) {
      name
      image {
        file {
          url
        }
      }
    }
  }
`
