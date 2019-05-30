import React from "react"
import Grid from "@material-ui/core/Grid"
import LinkedInIcon from "mdi-material-ui/Linkedin"
import EmailIcon from "mdi-material-ui/At"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  socialIcons: {
    color: `grey`,
    "&:hover": {
      color: `#009688`,
    },
  },
})

const SocialMedia = ({ email, linkedIn, classes }) => (
  <React.Fragment>
    <Grid
      container
      direction="row"
      spacing={8}
      justify="center"
      alignItems="center"
    >
      {linkedIn != null ? (
        <Grid item style={{ width: 40 }}>
          <a href={`${linkedIn}`}>
            <LinkedInIcon className={classes.socialIcons} />
          </a>
        </Grid>
      ) : (
        <div />
      )}
      {email != null ? (
        <Grid item style={{ width: 40 }}>
          <a href={`mailto:${email}`}>
            <EmailIcon className={classes.socialIcons} />
          </a>
        </Grid>
      ) : (
        <div />
      )}
    </Grid>
  </React.Fragment>
)

export default withStyles(styles)(SocialMedia)
