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
                            <span>{node.frontmatter.content}</span>
                        </h3>
                        <div
                            className="blog-post-content"
                            dangerouslySetInnerHTML={{ __html: node.html }}
                        />
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
          html
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