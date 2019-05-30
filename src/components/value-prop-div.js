import React from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"

import GridEntry from "./grid-entry"

export default ({ valueProp, valuePropStages }) => (
  <Container>
    <Grid
      container
      direction="column"
      justify="center"
      style={{ paddingTop: 60, paddingBottom: 40 }}
    >
      <Typography variant="h4" align="center">
        {valueProp.title}
      </Typography>
      <Typography variant="h5" align="center" style={{ marginTop: 30 }}>
        {valueProp.shortDescript.shortDescript}
      </Typography>
    </Grid>
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
    >
      {valuePropStages.map(({ node }) => (
        <GridEntry key={node.id} entry={node} />
      ))}
    </Grid>
    <Grid
      container
      justify="center"
      style={{ marginTop: 80, marginBottom: 60 }}
    >
      <Button
        variant="outlined"
        color="primary"
        size="large"
        component={Link}
        to={`/${valueProp.ctaPage}`}
      >
        {valueProp.cta}
      </Button>
    </Grid>
  </Container>
)
