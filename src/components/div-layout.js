import React from "react"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  divStyles: {
    margin: `0 auto`,
    maxWidth: `960px`,
    paddingTop: 0,
  },
  [theme.breakpoints.down("sm")]: {
    divStyles: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: `0 auto`,
    },
  },
})

const DivLayout = ({ backgroundColor, children, classes }) => (
  <div style={{ backgroundColor: backgroundColor }}>
    <div className={classes.divStyle}>
      <main>{children}</main>
    </div>
  </div>
)

export default withStyles(styles)(DivLayout)
