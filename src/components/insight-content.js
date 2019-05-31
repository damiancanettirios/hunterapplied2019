import React from "react"
import { Link } from "gatsby"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  activeLink: {
    textDecoration: `none`,
    color: `black`,
    "& :hover": {
      textDecoration: "underline",
      color: `#009688`,
    },
  },
  textLink: {
    paddingTop: 10,
    fontWeight: `bold`,
    fontSize: `120%`,
  },
})

const InsightContent = ({ node }) => {
  const classes = useStyles()
  return (
    <Box>
      <Link to={`/insights/${node.slug}`} className={classes.activeLink}>
        <Typography
          variant="body2"
          color="inherit"
          className={classes.textLink}
        >
          {node.title}
        </Typography>
      </Link>
      <Typography variant="body2">{node.description.description}</Typography>
    </Box>
  )
}

export default InsightContent
