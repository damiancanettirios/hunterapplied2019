import React from "react"
import { Link } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"

import TitleBar from "./title-bar"
import ArticleSummary from "./article-summary"
import Container from "@material-ui/core/Container"

export default ({ insights, topInsights }) => (
  <Container>
    <TitleBar title={insights.title} color="black" />
    <Grid
      container
      direction="row"
      justify="flex-start"
      style={{ minHeight: 300 }}
    >
      {topInsights.map(({ node }) => (
        <ArticleSummary key={node.slug} article={node} />
      ))}
    </Grid>
    <Grid
      container
      justify="center"
      style={{ marginTop: 40, marginBottom: 80 }}
    >
      <Button
        variant="contained"
        color="primary"
        size="large"
        component={Link}
        to={`/${insights.ctaPage}`}
      >
        {insights.cta}
      </Button>
    </Grid>
  </Container>
)
