import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Head = ({commune, nomVoie}) => {
  const {nom, code, departement} = commune
  return (
    <div className='head'>
      <div>
        <Link href={`/explore/commune/${code}`}><a><h2>{nom} - {code}</h2></a></Link>
        <h4>{nomVoie}</h4>
      </div>
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

        h4 {
          marginTop: -0.8em;
        }
        `}</style>
    </div>
  )
}

Head.propTypes = {
  commune: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    departement: PropTypes.shape({
      nom: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired
    }).isRequired
  }),
  nomVoie: PropTypes.string.isRequired
}

export default Head
