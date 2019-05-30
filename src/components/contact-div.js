import React from "react"
import { makeStyles } from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Hidden from "@material-ui/core/Hidden"
import { Link } from "gatsby"

import Layout from "./div-layout"

const useStyles = makeStyles(theme => ({
  layout: {
    width: "auto",
    padding: 80,
    color: "#272932",
  },
  message: {
    alignContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    layout: {
      padding: 40,
    },
  },
}))

const ContactDiv = () => {
  const classes = useStyles()
  return (
    <Layout backgroundColor="#E7ECEF">
      <div className={classes.layout}>
        <Grid container spacing={4} alignItems="center">
          <Grid
            item
            container
            md={5}
            sm={12}
            direction="column"
            alignItems="center"
            className={classes.message}
          >
            <Grid item>
              <Typography variant="h4" align="center">
                How can we help build your business?
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                component={Link}
                to="/contact"
                style={{ marginBottom: 50, marginTop: 30 }}
              >
                LET'S WORK TOGETHER
              </Button>
            </Grid>
          </Grid>
          <Hidden smDown>
            <Grid container item md={2} justify="center">
              <hr style={{ width: 1, height: 200, display: "inline-block" }} />
            </Grid>
          </Hidden>
          <Grid
            item
            container
            md={5}
            sm={12}
            direction="column"
            alignItems="center"
            className={classes.message}
          >
            <Grid item>
              <Typography variant="h4" align="center">
                What programs can help you grow?
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                component={Link}
                to="/programs"
                style={{ marginBottom: 50, marginTop: 30 }}
              >
                FIND GRANT PROGRAMS
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default ContactDiv
