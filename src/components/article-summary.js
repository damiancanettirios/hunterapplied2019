import React from "react"
import { Link } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  linkTitle: {
    textDecoration: `none`,
    "& :hover": {
      textDecoration: "underline",
      color: `#009688`,
    },
  },
  linkImg: {
    marginBottom: 10,
  },
})

class ArticleSummary extends React.Component {
  render() {
    const { article, classes } = this.props
    return (
      <Grid item container justify="center" md={6} sm={12}>
        <div
          style={{
            border: `1px solid #E7ECEF`,
            width: `90%`,
            margin: `0 auto`,
            marginBottom: 20,
          }}
        >
          <Link to={`/Blog/${article.slug}`}>
            <img
              alt={article.imageTitle.file.fileName}
              src={article.imageTitle.file.url}
              className={classes.linkImg}
            />
          </Link>
          <div style={{ padding: 10 }}>
            <Link
              to={`/insights/${article.slug}`}
              className={classes.linkTitle}
            >
              <Typography variant="h5" style={{ fontWeight: `bold` }}>
                {article.title}
              </Typography>
            </Link>
            <Typography variant="body1">
              {article.description.description}
            </Typography>
          </div>
        </div>
      </Grid>
    )
  }
}

export default withStyles(styles)(ArticleSummary)
