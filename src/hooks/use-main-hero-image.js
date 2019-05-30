import { graphql, useStaticQuery } from "gatsby"

const useMainHeroImage = () => {
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
      heroDesign: contentfulHeros(title: { eq: "Point Bottom" }) {
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

export default useMainHeroImage
