import React from "react"
import { Link } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/styles"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"

import Navigation from "./navigation"

const useStyles = makeStyles(theme => ({
  image: {
    height: 700,
    width: `100%`,
    padding: `10em 0 20em 0`,
    textAlign: `center`,
  },
  page: {
    color: `white`,
    paddingTop: 40,
    paddingBottom: 60,
  },
  title: {
    fontWeight: `bold`,
    marginBottom: 30,
  },
  tagline: {
    marginBottom: 30,
  },
  [theme.breakpoints.down("sm")]: {
    image: {
      maxHeight: 650,
      padding: `10em 0 10em 0`,
    },
    page: {
      margin: `0 auto`,
      padding: 20,
    },
    title: {
      fontSize: `280%`,
    },
    tagline: {
      fontSize: `150%`,
    },
  },
}))

const HeroDiv = ({ logo, heroImage, heroOverlay, heroContent, heroDesign }) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div style={{ position: `absolute`, width: `100%` }}>
        <Navigation logo={logo} />
      </div>
      <Box
        className={classes.image}
        style={{
          backgroundImage: `url(${heroDesign.imageTitle.file.url}), 
          url(${heroOverlay.imageTitle.file.url}), 
          url(${heroImage.imageTitle.file.url})`,
          backgroundPosition: `bottom center, top left, bottom center`,
          backgroundAttachment: `scroll, scroll, fixed`,
          backgroundRepeat: `repeat-x, repeat, no-repeat`,
          backgroundSize: `3200px 460px, auto, cover`,
        }}
      >
        <Container maxWidth="md" className={classes.page}>
          <Typography
            variant="h2"
            className={classes.title}
            color="inherit"
            align="center"
          >
            {heroContent.title}
          </Typography>
          <Typography
            variant="h5"
            color="inherit"
            align="center"
            className={classes.tagline}
          >
            {heroContent.shortDescript.shortDescript}
          </Typography>
          {heroContent.page !== "Home" ? null : (
            <Button
              variant="outlined"
              color="inherit"
              style={{ marginRight: 10, marginBottom: 50 }}
              component={Link}
              to={`/${heroContent.ctaPage}`}
              size="large"
            >
              {heroContent.cta}
            </Button>
          )}
        </Container>
      </Box>
      {heroContent.isLongDescript ? (
        <Container
          maxWidth="md"
          style={{
            paddingTop: 60,
            paddingBottom: 60,
          }}
        >
          <Typography variant="h5" align="center" className={classes.tagline}>
            {heroContent.longDescript.longDescript}
          </Typography>
        </Container>
      ) : null}
    </React.Fragment>
  )
}

export default HeroDiv
