import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

import Layout from "../components/layout"
import Hero from "../components/hero-div"
import withRoot from "../utils/withRoot"

class ContactPage extends React.Component {
  state = {
    name: "",
    email: "",
    note: "",
  }

  render() {
    const heroImage = get(this, "props.data.heroImage")
    const heroOverlay = get(this, "props.data.heroOverlay")
    const pointBottom = get(this, "props.data.pointBottom")
    const whiteLogo = get(this, "props.data.whiteLogo")
    const heroContent = get(this, "props.data.heroContent")

    return (
      <Layout logo={whiteLogo}>
        <Hero
          heroImage={heroImage}
          heroOverlay={heroOverlay}
          heroDesign={pointBottom}
          logo={whiteLogo}
          heroContent={heroContent}
        />
        <div style={{ marginBottom: 60 }}>
          <form
            action="https://formspree.io/damian@hunterapplied.com"
            method="POST"
            style={{ margin: `0 auto` }}
          >
            <Grid
              container
              spacing={40}
              direction="column"
              alignItems="center"
              justify="flex-start"
            >
              <Grid item>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  type="text"
                  name="name"
                  value={this.state.name}
                  style={{ width: 400 }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Your Email"
                  variant="outlined"
                  type="email"
                  name="email"
                  value={this.state.email}
                  style={{ width: 400 }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="How Can We Help?"
                  multiline
                  rowsMax="8"
                  rows="4"
                  value={this.state.note}
                  variant="outlined"
                  style={{ width: 400 }}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  size="large"
                  style={{ width: 400 }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Layout>
    )
  }
}

export default withRoot(ContactPage)

export const ContactQuery = graphql`
  {
    heroImage: contentfulHeros(title: { eq: "Telephones" }) {
      id
      title
      imageTitle {
        file {
          url
        }
      }
    }
    heroOverlay: contentfulHeros(title: { eq: "GreyOverlay" }) {
      id
      title
      imageTitle {
        file {
          url
        }
      }
    }
    pointBottom: contentfulHeros(title: { eq: "Point Bottom" }) {
      id
      title
      imageTitle {
        file {
          url
        }
      }
    }
    whiteLogo: contentfulLogo(name: { eq: "white_text" }) {
      id
      name
      image {
        file {
          url
        }
      }
    }
    heroContent: contentfulPageContent(
      page: { eq: "Contact" }
      position: { eq: "Hero" }
    ) {
      id
      title
      shortDescript {
        shortDescript
      }
      longDescript {
        longDescript
      }
      cta
      ctaPage
      page
    }
  }
`
