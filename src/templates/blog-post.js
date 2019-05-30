import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"

import Layout from "../components/layout"
import Hero from "../components/hero-simple"
import HeroContent from "../components/hero-insights"
import useInsightsHeroImage from "../hooks/use-insights-hero-image"

const styles = theme => ({
  divStyle: {
    paddingTop: 60,
    paddingBottom: 60,
    maxWidth: `960px`,
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

const BlogPostTemplate = ({ data, classes }) => {
  const post = data.contentfulBlogPost
  const hero = useInsightsHeroImage()
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout logo={hero.whiteLogo}>
      <Helmet title={`${post.title} | ${siteTitle}`} />
      <Hero
        heroImage={post.imageTitle.file.url}
        heroOverlay={hero.heroOverlay.imageTitle.file.url}
        heroDesign={hero.heroDesign.imageTitle.file.url}
        logo={hero.whiteLogo}
      >
        <HeroContent heroContent={post} />
      </Hero>
      <div className={classes.divStyle}>
        <div
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html,
          }}
        />
        <Divider style={{ marginTop: 10, marginBottom: 30 }} />
        <div className={classes.authorBox}>
          <Typography variant="body1">
            {post.author.shortBio.shortBio}
          </Typography>
        </div>
      </div>
    </Layout>
  )
}

export default withStyles(styles)(BlogPostTemplate)

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      imageTitle {
        file {
          url
        }
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
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
