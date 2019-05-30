import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

export default ({ content }) => (
  <Grid
    item
    container
    md={5}
    sm={8}
    direction="column"
    justify="flex-start"
    alignContent="flex-start"
    style={{
      backgroundColor: `rgba(255,255,255,0.9)`,
      color: `black`,
      padding: 20,
      borderTop: `5px solid #009688`,
    }}
  >
    <Typography
      variant="subtitle1"
      color="primary"
      style={{ marginBottom: 10 }}
    >
      {content.serviceType}
    </Typography>
    <Typography variant="h5" color="inherit" style={{ fontWeight: `bold` }}>
      {content.name}
    </Typography>
    <div
      style={{
        marginTop: 8,
        marginBottom: 20,
        width: 36,
        height: 5,
        backgroundColor: `#009688`,
      }}
    />
    <Typography variant="h6" color="inherit" style={{ fontWeight: `normal` }}>
      {content.shortDescript}
    </Typography>
  </Grid>
)
