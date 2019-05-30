import React from "react"
import { Link, graphql } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"

import SEO from "../components/seo"
import Hero from "../components/hero-div"
import Layout from "../components/layout"
import useMainHeroImage from "../hooks/use-main-hero-image"

const styles = theme => ({
  headerhero: {
    backgroundColor: `#E7ECEF`,
    background: `#E7ECEF`,
  },
  page: {
    maxWidth: `90%`,
    margin: `0 auto`,
  },
  activeLink: {
    textDecoration: `none`,
    color: `black`,
    "& :hover": {
      textDecoration: "underline",
      color: `#009688`,
    },
  },
  textLink: {
    paddingTop: 10,
    fontWeight: `bold`,
  },
  [theme.breakpoints.down("sm")]: {
    page: {
      margin: `0 auto`,
      padding: 20,
      textAlign: `center`,
    },
  },
})

const InsightAuthor = ({ node }) => (
  <React.Fragment>
    <Grid item style={{ paddingBottom: 0 }}>
      <img
        alt={node.author.name}
        src={node.author.image.file.url}
        style={{ height: 50, margin: `0px 10px 0px 0px` }}
      />
    </Grid>
    <Grid item style={{ paddingBottom: 0 }}>
      <Typography
        variant="body2"
        color="textSecondary"
        style={{ fontWeight: `bold` }}
      >
        {node.author.name}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {node.publishDate}
      </Typography>
    </Grid>
  </React.Fragment>
)

const InsightImage = ({ node }) => (
  <React.Fragment>
    <Grid item container justify="center">
      <Link to={`/insights/${node.slug}`}>
        <img
          alt={node.imageTitle.title}
          src={node.imageTitle.file.url}
          style={{
            margin: 0,
            maxHeight: 250,
            borderRadius: `5px`,
          }}
        />
      </Link>
    </Grid>
  </React.Fragment>
)

const InsightContent = ({ node, classes }) => (
  <React.Fragment>
    <Grid item style={{ width: `95%`, margin: `0 auto` }}>
      <Link to={`/insights/${node.slug}`} className={classes.activeLink}>
        <Typography
          variant="body1"
          color="inherit"
          className={classes.textLink}
        >
          {node.title}
        </Typography>
      </Link>
      <Typography variant="body1">{node.description.description}</Typography>
    </Grid>
  </React.Fragment>
)

const InsightsPage = ({ data, classes }) => {
  const posts = data.allContentfulBlogPost.edges
  const heroImage = data.heroImage
  const hero = useMainHeroImage()
  const heroContent = data.heroContent
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
      <div className={classes.page}>
        <Grid
          container
          direction="row"
          spacing={24}
          style={{ marginBottom: 60 }}
        >
          {posts.map(({ node }) => (
            <Grid key={node.id} item container md={4} sm={12} xs={12}>
              <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="center"
                spacing={8}
                style={{
                  border: `1px solid #E7ECEF`,
                  borderTop: `3px solid #009688`,
                }}
              >
                <Grid item container direction="column">
                  <InsightImage node={node} />
                  <InsightContent node={node} classes={classes} />
                </Grid>
                <Grid
                  item
                  container
                  direction="row"
                  style={{
                    paddingBottom: 0,
                    width: `95%`,
                    margin: `0 auto`,
                  }}
                >
                  <InsightAuthor node={node} />
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  )
}

export default withStyles(styles)(InsightsPage)

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
