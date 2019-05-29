import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  title: {
    marginTop: 60,
    marginBottom: 60,
  },
})

const TitleBar = ({ classes, title, color }) => (
  <div className={classes.title}>
    <Grid container direction="row" justify="center" alignItems="center">
      <Hidden smDown>
        <Grid item container md={3} direction="column">
          <Grid item style={{ height: 21 }} />
          <Grid item container direction="row" justify="flex-end">
            <hr
              style={{
                width: 350,
                margin: 0,
                color: `${color}`,
                backgroundColor: `${color}`,
              }}
            />
          </Grid>
          <Grid item style={{ height: 21 }} />
        </Grid>
      </Hidden>
      <Grid
        item
        container
        md={6}
        sm={12}
        direction="row"
        justify="center"
        style={{ color: `${color}` }}
      >
        <Typography variant="h4" color="inherit">
          {title}
        </Typography>
      </Grid>
      <Hidden smDown>
        <Grid item container md={3} direction="column">
          <Grid item style={{ height: 21 }} />
          <Grid item container direction="row" justify="flex-start">
            <hr
              style={{
                width: 350,
                margin: 0,
                color: `${color}`,
                backgroundColor: `${color}`,
              }}
            />
          </Grid>
          <Grid item style={{ height: 21 }} />
        </Grid>
      </Hidden>
    </Grid>
  </div>
)

export default withStyles(styles)(TitleBar)
