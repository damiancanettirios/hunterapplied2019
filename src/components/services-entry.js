import React from "react"
import { Link } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import ChevronRightIcon from "mdi-material-ui/ChevronRight"

import TitleBar from "../components/title-bar"

const Entry = ({ entryTitle, entry, long }) => (
  <React.Fragment>
    <div
      style={{
        width: `90%`,
        margin: `0 auto`,
        marginBottom: 60,
      }}
    >
      <TitleBar title={entryTitle} color="black" />
      <ul style={{ listStyle: `none`, width: `100%`, margin: `0 auto` }}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          style={{ height: `100%` }}
        >
          {entry.map(({ node }) => (
            <Grid item key={node.id} md={4} sm={6} xs={12}>
              <Link
                to={`/${node.type}/${node.slug}`}
                style={{ textDecoration: `none` }}
              >
                <li
                  key={node.id}
                  style={{ display: `list-item`, paddingRight: 20 }}
                >
                  {long ? (
                    <Grid
                      container
                      direction="column"
                      alignItems="flex-start"
                      style={{
                        borderBottom: `1px solid #636363`,
                        minHeight: `15rem`,
                      }}
                    >
                      <Grid
                        item
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                      >
                        <Grid item xs={10}>
                          <Typography variant="h6">
                            {node.blurbTitle}
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <IconButton>
                            <ChevronRightIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                      <Grid item style={{ color: `#636363`, paddingTop: 10 }}>
                        <Typography variant="subtitle1" color="inherit">
                          {node.shortBlurb}
                        </Typography>
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid
                      container
                      direction="column"
                      alignItems="flex-start"
                      style={{
                        borderBottom: `1px solid #636363`,
                        minHeight: `7rem`,
                      }}
                    >
                      <Grid
                        item
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                      >
                        <Grid item xs={10}>
                          <Typography variant="h6">
                            {node.blurbTitle}
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <IconButton>
                            <ChevronRightIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  )}
                </li>
              </Link>
            </Grid>
          ))}
        </Grid>
      </ul>
    </div>
  </React.Fragment>
)

export default Entry
