import React from 'react'
import PropTypes from 'prop-types'

import {getType} from '../lib/types'

const Tag = ({type, style}) => {
  const tag = getType(type)
  return (
    <div className={`tag ${type}`} style={style}>
      {type}
      <style jsx>{`
        .tag {
          margin: 2px;
          color: ${tag.color};
          background-color: ${tag.background};
          padding: 2px 4px;
          border-radius: 2px;
        }

        @media (min-width: 460px) {
          font-size: 12px;
        }

        @media (max-width: 460px) {
          font-size: x-small;
        }
        `}</style>
    </div>
  )
}

Tag.propTypes = {
  type: PropTypes.string.isRequired,
  style: PropTypes.object
}

Tag.defaultProps = {
  style: null
}

export default Tag
