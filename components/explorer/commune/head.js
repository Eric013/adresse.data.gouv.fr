import React from 'react'
import PropTypes from 'prop-types'

const Head = ({nom, code, departement}) => (
  <div className='head'>
    <h2>{nom} - {code}</h2>
    <h4>{departement.nom} ({departement.code})</h4>
    <style jsx>{`
      @import 'colors';

      .head {
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
        align-items: center;
        border-bottom: 2px solid $black;
        margin: 2em 0;
      }
      `}</style>
  </div>
)

Head.propTypes = {
  nom: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  departement: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired
  }).isRequired
}

export default Head
