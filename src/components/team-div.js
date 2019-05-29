import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import TitleBar from "./title-bar"
import SocialMedia from "./social-media"

export default ({ title, description, teamMembers }) => (
  <div style={{ width: `80%`, margin: `0 auto` }}>
    <TitleBar title={title} color="black" />
    <div>
      <Typography variant="h5" align="center" style={{ paddingBottom: 60 }}>
        {description}
      </Typography>
    </div>
    <Grid
      container
      direction="row"
      alignItems="flex-start"
      style={{ marginBottom: 60 }}
    >
      {teamMembers.map(({ node }) => (
        <Grid item sm={4} xs={12} key={node.name} style={{ padding: 0 }}>
          <div
            style={{
              border: `1px solid #E7ECEF`,
              width: `75%`,
              height: 290,
              margin: `0 auto`,
              marginBottom: 20,
            }}
          >
            <div style={{ width: 100, margin: `0 auto` }}>
              <img
                alt={node.name}
                src={node.image.file.url}
                style={{ margin: `20px 0px 10px 0px` }}
              />
            </div>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: `bold`, margin: 0 }}
                >
                  {node.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" style={{ margin: 0 }}>
                  {node.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" style={{ marginBottom: 10 }}>
                  {node.location}
                </Typography>
              </Grid>
              <SocialMedia email={node.email} linkedIn={node.linkedIn} />
            </Grid>
          </div>
        </Grid>
      ))}
    </Grid>
  </div>
)
