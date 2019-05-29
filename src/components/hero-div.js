import React from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

import Navigation from "./navigation"

export default ({ logo, heroImage, heroOverlay, heroContent, heroDesign }) => (
  <React.Fragment>
    <div style={{ position: `absolute`, width: `100%` }}>
      <Navigation logo={logo} />
    </div>
    <Grid
      style={{
        backgroundImage: `url(${heroDesign.imageTitle.file.url}), 
          url(${heroOverlay.imageTitle.file.url}), 
          url(${heroImage.imageTitle.file.url})`,
        backgroundPosition: `bottom center, top left, bottom center`,
        backgroundAttachment: `scroll, scroll, fixed`,
        backgroundRepeat: `repeat-x, repeat, no-repeat`,
        backgroundSize: `3200px 460px, auto, cover`,
        height: 700,
        width: `100%`,
        padding: `10em 0 20em 0`,
        textAlign: `center`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          color: `white`,
          width: `70%`,
          paddingTop: 40,
          paddingBottom: 60,
        }}
      >
        <Typography
          variant="h2"
          style={{ marginBottom: 30, fontWeight: `bold` }}
          color="inherit"
          align="center"
        >
          {heroContent.title}
        </Typography>
        <Typography
          variant="h5"
          color="inherit"
          align="center"
          style={{ marginBottom: 40 }}
        >
          {heroContent.shortDescript.shortDescript}
        </Typography>
        {heroContent.page !== "Home" ? (
          <div />
        ) : (
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
      </div>
    </Grid>
    {heroContent.page !== "Home" ? (
      <div
        style={{
          width: `80%`,
          paddingTop: 60,
          paddingBottom: 60,
          margin: `0 auto`,
        }}
      >
        <Typography variant="h5" align="center">
          {heroContent.longDescript.longDescript}
        </Typography>
      </div>
    ) : (
      <div />
    )}
  </React.Fragment>
)
