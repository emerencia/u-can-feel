import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { HTMLContent } from '../../components/Content'

export default () => (
  <StaticQuery
    query={graphql`
      query ContactFormQuery {
        markdownRemark(fileAbsolutePath: {regex: "/src/static_texts/contact_form/"}) {
          html
        }
      }
    `}
    render={data => (
      <HTMLContent content={data.markdownRemark.html} className='margin-bottom' />
    )}
  />
)
