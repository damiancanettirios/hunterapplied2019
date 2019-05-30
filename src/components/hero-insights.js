import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

export default ({ heroContent }) => (
  <React.Fragment>
    <Grid item>
      <Typography
        variant="h3"
        style={{ marginBottom: 20, fontWeight: `bold` }}
        color="inherit"
        align="center"
      >
        {heroContent.title}
      </Typography>
    </Grid>
    <Grid item style={{ width: 100, marginTop: 20, margin: `0 auto` }}>
      <img
        alt={heroContent.author.image.title}
        src={heroContent.author.image.file.url}
        style={{
          margin: 0,
          border: `1px solid white`,
          borderRadius: `50%`,
        }}
      />
    </Grid>
    <Grid item style={{ marginBottom: 20 }}>
      <Typography variant="h6" align="center" style={{ marginTop: 10 }}>
        <a
          href={`mailto:${heroContent.author.email}`}
          style={{ color: `white` }}
        >
          {heroContent.author.name}
        </a>
      </Typography>
    </Grid>
    <Grid item>
      <Typography
        variant="h6"
        color="inherit"
        align="center"
        style={{ marginTop: 5 }}
      >
        {heroContent.publishDate}
      </Typography>
    </Grid>
  </React.Fragment>
)
