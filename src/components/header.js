import React from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import withWidth, { isWidthUp } from "@material-ui/core/withWidth"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "mdi-material-ui/Menu"
import Hidden from "@material-ui/core/Hidden"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { withStyles } from "@material-ui/core/styles"

function ListItemLink(props) {
  return <ListItem button component={Link} {...props} />
}

const styles = theme => ({
  page: {
    margin: `0 auto`,
    padding: 40,
  },
  [theme.breakpoints.down("sm")]: {
    page: {
      margin: `0 auto`,
      padding: 20,
    },
  },
})

class Header extends React.Component {
  state = {
    top: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  render() {
    const { classes, pageStyle } = this.props
    const fullList = (
      <div style={{ margin: `auto` }}>
        <List component="nav">
          {["approach", "programs", "about", "insights"].map((text, index) => (
            <ListItemLink key={text} to={`/${text}`}>
              <ListItemText
                primary={text}
                style={{ textTransform: `uppercase` }}
              />
            </ListItemLink>
          ))}
        </List>
      </div>
    )

    return (
      <header className={pageStyle}>
        <div className={classes.page}>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
            >
              <Grid item md={4} sm={8} xs={8}>
                <Link
                  to="/"
                  style={{
                    textDecoration: `none`,
                  }}
                />
              </Grid>
              {isWidthUp("md", this.props.width) ? (
                <Hidden smDown>
                  <Grid item container justify="flex-end" md={8} sm={4}>
                    <Button
                      component={Link}
                      to="/approach"
                      color="inherit"
                      style={{ marginRight: 18 }}
                    >
                      APPROACH
                    </Button>
                    <Button
                      component={Link}
                      to="/programs"
                      color="inherit"
                      style={{ marginRight: 18 }}
                    >
                      PROGRAMS
                    </Button>
                    <Button
                      component={Link}
                      to="/insights"
                      color="inherit"
                      style={{ marginRight: 18 }}
                    >
                      INSIGHTS
                    </Button>
                    <Button component={Link} to="/about" color="inherit">
                      ABOUT
                    </Button>
                  </Grid>
                </Hidden>
              ) : (
                <div>
                  <Grid item container md={8} sm={4} xs={4}>
                    <IconButton onClick={this.toggleDrawer("top", true)}>
                      <MenuIcon />
                    </IconButton>
                  </Grid>
                  <Drawer
                    anchor="top"
                    open={this.state.top}
                    onClose={this.toggleDrawer("top", false)}
                  >
                    <div
                      tabIndex={0}
                      role="button"
                      onClick={this.toggleDrawer("top", false)}
                      onKeyDown={this.toggleDrawer("top", false)}
                    >
                      {fullList}
                    </div>
                  </Drawer>
                </div>
              )}
            </Grid>
          </Toolbar>
        </div>
      </header>
    )
  }
}

export default withStyles(styles)(withWidth()(Header))
