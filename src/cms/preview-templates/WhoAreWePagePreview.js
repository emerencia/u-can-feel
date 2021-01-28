import React from 'react'
import PropTypes from 'prop-types'
import { WhoAreWePageTemplate } from '../../templates/who-are-we-page'

const WhoAreWePagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  return (
    <WhoAreWePageTemplate
      title={entry.getIn(['data', 'title'])}
      heading={widgetFor('heading')}
      content={widgetFor('body')}
      team={data.team || { members: [] }}
      schools={data.schools || { members: [] }}
    />
  )
}

WhoAreWePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default WhoAreWePagePreview
