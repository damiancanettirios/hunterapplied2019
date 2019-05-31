import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

const InsightAuthor = ({ node }) => (
  <Box>
    <Grid
      container
      direction="row"
      alignItems="center"
      style={{ margin: `20px 0 0 0` }}
    >
      <Grid item>
        <img
          alt={node.author.name}
          src={node.author.image.file.url}
          style={{ height: 50, margin: `0px 10px 0px 0px` }}
        />
      </Grid>
      <Grid item>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{ fontWeight: `bold` }}
        >
          {node.author.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {node.publishDate}
        </Typography>
      </Grid>
    </Grid>
  </Box>
)

export default InsightAuthor
