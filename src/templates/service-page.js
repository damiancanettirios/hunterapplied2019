import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import Hero from "../components/hero-simple"
import HeroContent from "../components/hero-content"
import TitleBar from "../components/title-bar"
import ServicesEntry from "../components/services-entry"

const styles = theme => ({
  divStyle: {
    paddingTop: 60,
    paddingBottom: 60,
    width: `90%`,
    margin: `0 auto`,
  },
  authorBox: {
    paddingRight: 30,
  },
  [theme.breakpoints.down("sm")]: {
    divStyle: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    authorBox: {
      padding: `0px 30px 30px 30px`,
      textAlign: `center`,
    },
  },
})

class ServicePageTemplate extends React.Component {
  render() {
    const whiteLogo = get(this, "props.data.whiteLogo")
    const service = get(this, "props.data.service")
    const services = get(this, "props.data.services.edges")
    const siteTitle = get(this.props, "data.site.siteMetadata.title")
    const heroOverlay = get(this.props, "data.heroOverlay")
    const heroDesign = get(this.props, "data.heroDesign")
    const { classes } = this.props
    return (
      <Layout logo={whiteLogo}>
        <Helmet title={`${service.name} | ${siteTitle}`} />

        <Hero
          heroImage={service.image.file.url}
          heroOverlay={heroOverlay.imageTitle.file.url}
          heroDesign={heroDesign.imageTitle.file.url}
          logo={whiteLogo}
        >
          <HeroContent content={service} />
        </Hero>
        <div className={classes.divStyle}>
          <Typography variant="h6" style={{ fontWeight: `normal` }}>
            {service.longDescript.longDescript}
          </Typography>
          <TitleBar color="black" title="Our Approach" />
          <div />
        </div>
        <ServicesEntry
          entryTitle={"Consulting Services"}
          entry={services}
          long={false}
        />
      </Layout>
    )
  }
}

export default withStyles(styles)(ServicePageTemplate)

export const servicePageQuery = graphql`
  query ServiceBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    service: contentfulServices(slug: { eq: $slug }) {
      name
      slug
      image {
        file {
          url
        }
      }
      serviceType
      shortDescript
      longDescript {
        longDescript
      }
    }
    services: allContentfulServices {
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
    whiteLogo: contentfulLogo(name: { eq: "white_text" }) {
      id
      name
      image {
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
    heroDesign: contentfulHeros(title: { eq: "Flat Bottom" }) {
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
