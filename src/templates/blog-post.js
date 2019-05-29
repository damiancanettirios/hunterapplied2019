import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"

import Layout from "../components/layout"
import Hero from "../components/hero-simple"
import HeroContent from "../components/hero-insights"

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

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, "data.contentfulBlogPost")
    const heroOverlay = get(this.props, "data.heroOverlay")
    const heroDesign = get(this.props, "data.heroDesign")
    const whiteLogo = get(this, "props.data.whiteLogo")
    const siteTitle = get(this.props, "data.site.siteMetadata.title")
    const { classes } = this.props
    return (
      <Layout logo={whiteLogo}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <Hero
          heroImage={post.imageTitle.file.url}
          heroOverlay={heroOverlay.imageTitle.file.url}
          heroDesign={heroDesign.imageTitle.file.url}
          logo={whiteLogo}
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
