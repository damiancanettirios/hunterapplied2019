import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

export default ({ node }) => (
  <div style={{ margin: `0 auto`, marginBottom: 30 }}>
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="flex-start"
    >
      <Grid
        key={node.id}
        item
        container
        direction="row"
        alignItems="flex-start"
        spacing={40}
      >
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          md={3}
          sm={12}
          xs={12}
        >
          <div>
            <img src={node.image.file.url} alt={node.image.description} />
          </div>
        </Grid>
        <Grid item md={9} sm={12} xs={12}>
          <Typography variant="h6">{node.title}</Typography>
          <Typography
            variant="h6"
            style={{ fontWeight: `normal`, marginTop: 20 }}
          >
            {node.description.description}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </div>
)
