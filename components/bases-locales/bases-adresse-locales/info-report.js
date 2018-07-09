import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import FaCheck from 'react-icons/lib/fa/check'
import FaClose from 'react-icons/lib/fa/close'

import Info from './info'

class InfoReport extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    status: PropTypes.oneOf([
      'ok',
      'malformed'
    ]).isRequired,
    error: PropTypes.string,
    valid: PropTypes.bool
  }

  render() {
    const {id, status, error, valid} = this.props

    return (
      <Info title='Conformité' type={valid ? 'valid' : 'invalid'}>
        {valid ? <FaCheck /> : <FaClose />}

        <div className='info-report'>
          {status === 'ok' ?
            <Link href={`/bases-locales/jeux-de-donnees/${id}/rapport`}>
              <a>Consulter le rapport</a>
            </Link> :
            <div className='error'>
              <div>Le fichier n’a pas pu être analysé car :</div>
              <div>{error}</div>
            </div>
          }
          <style jsx>{`
            @import 'theme';

            .info-report {
              margin-left: 0.2em;
            }

            .error {
              text-color: $errorBg;
            }
        `}</style>
        </div>
      </Info>
    )
  }
}

export default InfoReport
