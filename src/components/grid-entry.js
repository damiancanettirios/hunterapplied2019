import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

export default ({ entry }) => (
  <Grid item container direction="column" alignItems="center" md={6} sm={12}>
    <div
      style={{
        margin: 30,
        width: 400,
        padding: 20,
      }}
    >
      <Grid item container justify="center" alignItems="center">
        <img
          src={entry.image.file.url}
          alt={entry.image.description}
          style={{ width: 360, height: 290 }}
        />
      </Grid>
      <Grid item>
        <Typography
          variant="h5"
          align="center"
          style={{ marginTop: 20, fontWeight: `bold` }}
        >
          {entry.title}
        </Typography>
        <Typography variant="body1" align="center" style={{ marginTop: 20 }}>
          {entry.description.description}
        </Typography>
      </Grid>
    </div>
  </Grid>
)
