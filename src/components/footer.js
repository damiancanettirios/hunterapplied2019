import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import { Link } from "gatsby"
import LinkedInIcon from "mdi-material-ui/LinkedIn"
import TwitterIcon from "mdi-material-ui/Twitter"
import MediumIcon from "mdi-material-ui/Medium"

import Contact from "./contact-div"
import withRoot from "../withRoot"

const styles = theme => ({
  footer: {
    color: "#fff",
  },
  footerLinks: {
    color: "#fff",
    "&:hover": {
      color: `#009688`,
    },
  },
  socialIcons: {
    color: "#fff",
    "&:hover": {
      color: `#009688`,
    },
  },
  [theme.breakpoints.down("sm")]: {
    footerCenter: {
      textAlign: "center",
    },
  },
})

const Footer = ({ classes, logo }) => (
  <React.Fragment>
    <footer>
      <Contact />
      <div style={{ background: "#272932" }}>
        <Grid
          container
          spacing={24}
          align-items="flex-start"
          style={{ padding: 30, minHeight: 100 }}
        >
          <Grid item md={3} sm={12} xs={12} className={classes.footerCenter}>
            <Link to="/">
              <img
                src={logo.image.file.url}
                alt={logo.name}
                style={{ margin: 0, width: 150, paddingTop: 3 }}
              />
            </Link>
          </Grid>
          <Grid item md={3} sm={12} xs={12} className={classes.footerCenter}>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Typography variant="subtitle2" className={classes.footerLinks}>
                <b>COMPANY</b>
              </Typography>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Typography variant="subtitle2" className={classes.footerLinks}>
                About
              </Typography>
            </Link>
            <Link to="/approach" style={{ textDecoration: "none" }}>
              <Typography variant="subtitle2" className={classes.footerLinks}>
                Approach
              </Typography>
            </Link>
            <Link to="/insights" style={{ textDecoration: "none" }}>
              <Typography variant="subtitle2" className={classes.footerLinks}>
                Insights
              </Typography>
            </Link>
            <Link to="/programs" style={{ textDecoration: "none" }}>
              <Typography variant="subtitle2" className={classes.footerLinks}>
                Grant Programs
              </Typography>
            </Link>
          </Grid>
          <Grid item md={3} sm={12} xs={12} className={classes.footerCenter}>
            <Link to="/services" style={{ textDecoration: "none" }}>
              <Typography variant="subtitle2" className={classes.footerLinks}>
                <b>SERVICES</b>
              </Typography>
            </Link>
            <Link to="/services/grants-mgmt" style={{ textDecoration: "none" }}>
              <Typography variant="subtitle2" className={classes.footerLinks}>
                Grants Management
              </Typography>
            </Link>
            <Link to="/services/rdti-review" style={{ textDecoration: "none" }}>
              <Typography variant="subtitle2" className={classes.footerLinks}>
                R&D Tax Incentive
              </Typography>
            </Link>
            <Link
              to="/services/research-mgmt"
              style={{ textDecoration: "none" }}
            >
              <Typography variant="subtitle2" className={classes.footerLinks}>
                Research Management
              </Typography>
            </Link>
            <Link
              to="/services/commercialisation-mgmt"
              style={{ textDecoration: "none" }}
            >
              <Typography variant="subtitle2" className={classes.footerLinks}>
                Commercialisation Management
              </Typography>
            </Link>
            <Link
              to="/services/grants-reporting"
              style={{ textDecoration: "none" }}
            >
              <Typography variant="subtitle2" className={classes.footerLinks}>
                Grants Reporting & Accounting
              </Typography>
            </Link>
          </Grid>
          <Grid item md={3} sm={12} xs={12}>
            <Grid
              item
              container
              spacing={24}
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Grid item />
              <Grid item>
                <a href="https://twitter.com/hunterapplied">
                  <TwitterIcon className={classes.socialIcons} />
                </a>
              </Grid>
              <Grid item>
                <a href="https://www.linkedin.com/company/hunter-applied/">
                  <LinkedInIcon className={classes.socialIcons} />
                </a>
              </Grid>
              <Grid item>
                <a href="https://medium.com/@HunterApplied">
                  <MediumIcon className={classes.socialIcons} />
                </a>
              </Grid>
              <Grid item />
            </Grid>
            <Grid item container justify="center">
              <Typography
                variant="body1"
                style={{ margin: 8 }}
                className={classes.footer}
              >
                Imaging credit{" "}
                <a
                  href="https://undraw.co/illustrations"
                  style={{ color: "white" }}
                >
                  UnDraw
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid
          container
          spacing={24}
          direction="row"
          justify="center"
          style={{ padding: 20 }}
        >
          <Typography
            variant="body1"
            style={{ margin: 8 }}
            className={classes.footer}
          >
            Hunter Applied Research Pty Ltd
          </Typography>
          <Typography
            variant="body1"
            style={{ margin: 8 }}
            className={classes.footer}
          >
            ABN 71 616 755 161
          </Typography>
        </Grid>
      </div>
    </footer>
  </React.Fragment>
)

export default withRoot(withStyles(styles)(Footer))
