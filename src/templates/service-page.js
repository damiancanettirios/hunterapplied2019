import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import Hero from "../components/hero-simple"
import HeroContent from "../components/hero-content"
import TitleBar from "../components/title-bar"
import ServicesEntry from "../components/services-entry"
import useInsightHeroImage from "../hooks/use-insights-hero-image"

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

const ServicePageTemplate = ({ data, classes }) => {
  const service = data.service
  const services = data.services.edges
  const siteTitle = data.site.siteMetadata.title
  const hero = useInsightHeroImage()
  return (
    <Layout logo={hero.whiteLogo}>
      <Helmet title={`${service.name} | ${siteTitle}`} />

      <Hero
        heroImage={service.image.file.url}
        heroOverlay={hero.heroOverlay.imageTitle.file.url}
        heroDesign={hero.heroDesign.imageTitle.file.url}
        logo={hero.whiteLogo}
      >
        <HeroContent content={service} />
      </Hero>
      <div className={classes.divStyle}>
        <div style={{ width: `75%`, margin: `0 auto` }}>
          <Typography variant="h6" style={{ fontWeight: `normal` }}>
            {service.longDescript.longDescript}
          </Typography>
        </div>
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
  }
`
