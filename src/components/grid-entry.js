import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"

export default ({ entry }) => (
  <Grid
    item
    container
    direction="column"
    alignItems="center"
    md={6}
    sm={12}
    style={{ marginBottom: 40 }}
  >
    <Grid item>
      <img
        src={entry.image.file.url}
        alt={entry.image.description}
        style={{ maxWidth: 300, height: 290 }}
      />
    </Grid>
    <Container>
      <Typography variant="h5" align="center" style={{ fontWeight: `bold` }}>
        {entry.title}
      </Typography>
      <Typography variant="body1" align="center" style={{ marginTop: 20 }}>
        {entry.description.description}
      </Typography>
    </Container>
  </Grid>
)
