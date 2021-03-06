import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import FaCheck from 'react-icons/lib/fa/check'
import FaClose from 'react-icons/lib/fa/close'

import Info from './info'

class InfoReport extends React.Component {
  static propTypes = {
    dataset: PropTypes.object.isRequired
  }

  render() {
    const {id, isValid} = this.props.dataset

    return (
      <Info title='Conformité' type={isValid ? 'valid' : 'not-valid'}>
        {isValid ? <FaCheck /> : <FaClose />}

        <div className='info-report'>
          <Link href={`/bases-locales/jeux-de-donnees/${id}/rapport`}>
            <a>Consulter le rapport</a>
          </Link>
          <style jsx>{`
            .info-report {
              margin-left: 0.2em;
            }
        `}</style>
        </div>
      </Info>
    )
  }
}

export default InfoReport
