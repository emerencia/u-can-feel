import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const TeamMemberGrid = ({ team }) => (
  <div className='content team-members'>
    <h2>{team.heading}</h2>
    <p>{team.description}</p>
    <div className='columns is-multiline'>
      {team.members.map(teamMember => (
        <div key={teamMember.name} className='column is-4'>
          <section className='section'>
            <a href={teamMember.link} target='_blank' rel='noopener noreferrer'>
              <div className='has-text-centered'>
                <div
                  style={{
                    width: '200px',
                    display: 'inline-block'
                  }}
                >
                  <PreviewCompatibleImage imageInfo={teamMember} />
                </div>
                <div className='member-name'>{teamMember.name}</div>
                {teamMember.title && teamMember.title.length > 0 && <div className='member-title'>{teamMember.title}</div>}
                {teamMember.description && teamMember.description.length > 0 && <div className='member-description'>{teamMember.description}</div>}
              </div>
            </a>
          </section>
        </div>
      ))}
    </div>
  </div>
)

TeamMemberGrid.propTypes = {
  team: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    members: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.string.isRequired
      })
    )
  })
}

export default TeamMemberGrid
