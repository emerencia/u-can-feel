import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import TeamMembers from '../components/TeamMembers'

export const WhoAreWePageTemplate = ({ title, heading, content, contentComponent, team, schools }) => {
  const PageContent = contentComponent || Content

  return (
    <section className='section section--gradient'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <div className='section'>
              <h2 className='title is-size-3 has-text-weight-bold is-bold-light'>
                {title}
              </h2>
              <div className='content'>
                <p>{heading}</p>
              </div>
              <TeamMembers team={team} />
              <TeamMembers team={schools} />
              <PageContent className='content' content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

WhoAreWePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  team: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    members: PropTypes.array
  }),
  schools: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    members: PropTypes.array
  })
}

const WhoAreWePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WhoAreWePageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        heading={post.frontmatter.heading}
        content={post.html}
        team={post.frontmatter.team}
        schools={post.frontmatter.schools}
      />
    </Layout>
  )
}

WhoAreWePage.propTypes = {
  data: PropTypes.object.isRequired
}

export default WhoAreWePage

export const whoAreWePageQuery = graphql`
  query WhoAreWePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "who-are-we-page" } }) {
      html
      frontmatter {
        title
        heading
        team {
          members {
            image {
              childImageSharp {
                fluid(maxWidth: 200, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            title
            description
            link
          }
          heading
          description
        }
        schools {
          members {
            image {
              childImageSharp {
                fluid(maxWidth: 200, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            title
            description
            link
          }
          heading
          description
        }
      }
    }
  }
`
