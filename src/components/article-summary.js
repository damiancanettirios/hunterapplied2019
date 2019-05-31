import React from "react"
import { Link } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/styles"
import Container from "@material-ui/core/Container"

const useStyles = makeStyles({
  linkTitle: {
    textDecoration: `none`,
    color: `black`,
    "& :hover": {
      textDecoration: "underline",
      color: `#009688`,
    },
  },
  linkImg: {
    marginBottom: 10,
  },
})

const ArticleSummary = ({ article }) => {
  const classes = useStyles()
  return (
    <Grid item container justify="center" md={6} sm={12}>
      <Container
        style={{
          border: `1px solid #E7ECEF`,
          marginBottom: 20,
          padding: 0,
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
          <Link to={`/insights/${article.slug}`} className={classes.linkTitle}>
            <Typography variant="h5" style={{ fontWeight: `bold` }}>
              {article.title}
            </Typography>
          </Link>
          <Typography variant="body1">
            {article.description.description}
          </Typography>
        </div>
      </Container>
    </Grid>
  )
}

export default ArticleSummary
