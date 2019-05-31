import React from "react"
import { Link } from "gatsby"

const InsightImage = ({ node }) => (
  <>
    <Link to={`/insights/${node.slug}`}>
      <img
        alt={node.imageTitle.title}
        src={node.imageTitle.file.url}
        style={{ margin: 0, borderRadius: `5px` }}
      />
    </Link>
  </>
)

export default InsightImage
