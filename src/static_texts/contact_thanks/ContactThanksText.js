import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { HTMLContent } from '../../components/Content'

export default () => (
  <StaticQuery
    query={graphql`
      query ContactThanksQuery {
        markdownRemark(fileAbsolutePath: {regex: "/src/static_texts/contact_thanks/"}) {
          html
        }
      }
    `}
    render={data => (
      <HTMLContent content={data.markdownRemark.html} />
    )}
  />
)
