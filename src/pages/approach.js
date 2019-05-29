import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import Hero from "../components/hero-div"
import TitleBar from "../components/title-bar"
import SmallValuePropDiv from "../components/small-value-prop-div"
import SEO from "../components/seo"
import Layout from "../components/layout"

const styles = theme => ({
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

class ApproachPage extends React.Component {
  render() {
    const { classes } = this.props
    const heroImage = get(this, "props.data.heroImage")
    const heroOverlay = get(this, "props.data.heroOverlay")
    const pointBottom = get(this, "props.data.pointBottom")
    const whiteLogo = get(this, "props.data.whiteLogo")
    const heroContent = get(this, "props.data.heroContent")
    const serviceModel = get(this, "props.data.serviceModelImage")
    const steps = get(this, "props.data.blurbs.edges")
    const model = get(this, "props.data.model.edges")
    return (
      <Layout logo={whiteLogo}>
        <SEO title="Approach" />
        <Hero
          heroImage={heroImage}
          heroOverlay={heroOverlay}
          heroDesign={pointBottom}
          logo={whiteLogo}
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
            backgroundImage: `url(${heroOverlay.imageTitle.file.url}), 
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
}

export default withStyles(styles)(ApproachPage)

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
