import { graphql, useStaticQuery } from "gatsby"

const useInsightsHeroImage = () => {
  const data = useStaticQuery(graphql`
    {
      heroOverlay: contentfulHeros(title: { eq: "GreyOverlay" }) {
        id
        title
        imageTitle {
          file {
            url
          }
        }
      }
      heroDesign: contentfulHeros(title: { eq: "Flat Bottom" }) {
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
    }
  `)
  return data
}

export default useInsightsHeroImage
