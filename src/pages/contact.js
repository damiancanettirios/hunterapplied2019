import React, { useState } from "react"
import { graphql } from "gatsby"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/styles"
import Box from "@material-ui/core/Box"

import Layout from "../components/layout"
import Hero from "../components/hero-div"
import useMainHeroImage from "../hooks/use-main-hero-image"

const useStyles = makeStyles({
  input: {
    width: 400,
    margin: `20px auto`,
  },
})

const ContactPage = ({ data }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [note, setNote] = useState("")
  const heroImage = data.heroImage
  const hero = useMainHeroImage()
  const heroContent = data.heroContent
  const classes = useStyles()

  return (
    <Layout logo={hero.whiteLogo}>
      <Hero
        heroImage={heroImage}
        heroOverlay={hero.heroOverlay}
        heroDesign={hero.heroDesign}
        logo={hero.whiteLogo}
        heroContent={heroContent}
      />
      <Container maxWidth="md">
        <form
          action="https://formspree.io/damian@hunterapplied.com"
          method="POST"
        >
          <Container>
            <Box>
              <TextField
                value={name}
                onChange={e => setName(e.target.value)}
                label="Your Name"
                variant="outlined"
                type="text"
                name="name"
                required
                className={classes.input}
              />
            </Box>
            <Box>
              <TextField
                value={email}
                onChange={e => setEmail(e.target.value)}
                label="Your Email"
                variant="outlined"
                type="email"
                name="email"
                required
                className={classes.input}
              />
            </Box>
            <Box>
              <TextField
                label="How Can We Help?"
                multiline
                value={note}
                onChange={e => setNote(e.target.value)}
                rowsMax="8"
                rows="4"
                variant="outlined"
                className={classes.input}
              />
            </Box>
            <Box>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                className={classes.input}
              >
                Submit
              </Button>
            </Box>
          </Container>
        </form>
      </Container>
    </Layout>
  )
}

export default ContactPage

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
      isLongDescript
    }
  }
`
