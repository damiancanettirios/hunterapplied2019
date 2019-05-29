import React from "react"
import Grid from "@material-ui/core/Grid"

import Navigation from "./navigation"

export default ({ logo, heroImage, heroOverlay, heroDesign, children }) => (
  <React.Fragment>
    <div style={{ position: `absolute`, width: `100%` }}>
      <Navigation logo={logo} />
    </div>
    <div
      style={{
        backgroundImage: `url(${heroDesign}), 
          url(${heroOverlay}), 
          url(${heroImage})`,
        backgroundPosition: `bottom center, top left, bottom center`,
        backgroundAttachment: `scroll, scroll, fixed`,
        backgroundRepeat: `repeat-x, repeat, no-repeat`,
        backgroundSize: `auto, auto, cover`,
        height: 750,
        width: `100%`,
        padding: `10em 0 20em 0`,
      }}
    >
      <Grid
        container
        direction="column"
        style={{
          margin: `0 auto`,
          color: `white`,
          width: `80%`,
          paddingBottom: 20,
        }}
      >
        {children}
      </Grid>
    </div>
  </React.Fragment>
)
