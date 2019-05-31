import React from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/styles"

import GridEntry from "./grid-entry"

const useStyles = makeStyles(theme => ({
  tagline: {
    marginTop: 30,
  },
  [theme.breakpoints.down("sm")]: {
    title: {
      fontSize: `180%`,
    },
    tagline: {
      fontSize: `150%`,
    },
  },
}))

const ValuePropDiv = ({ valueProp, valuePropStages }) => {
  const classes = useStyles()
  return (
    <Container>
      <Container maxWidth="md" style={{ paddingTop: 60, paddingBottom: 40 }}>
        <Typography variant="h4" align="center" className={classes.title}>
          {valueProp.title}
        </Typography>
        <Typography variant="h5" align="center" className={classes.tagline}>
          {valueProp.shortDescript.shortDescript}
        </Typography>
      </Container>
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
}

export default ValuePropDiv
