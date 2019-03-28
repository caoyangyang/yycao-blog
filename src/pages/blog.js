import React from "react"
import { graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"

export default ({ data }) => {
    return (
        <Layout>
            <div>
                <h1 css={{display: `inline-block`,borderBottom: `1px solid`}}>
                    Amazing Pandas Eating Things
                </h1>
                <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id}>
                        <h3 css={{ marginBottom: `${rhythm(1 / 4)}`}}>
                            {node.frontmatter.title}{" "}
                            <span css={{ color:  `#bbb`}}>— {node.frontmatter.date}</span>
                        </h3>
                        <p>{node.excerpt}</p>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`