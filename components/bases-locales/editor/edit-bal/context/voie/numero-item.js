import React from 'react'
import PropTypes from 'prop-types'

import getStatus from '../../../../../../lib/bal/item'

import NumeroForm from './numero-form'
import EditNumero from './edit-numero'

class NumeroItem extends React.Component {
  state = {
    editing: false
  }

  static propTypes = {
    codeCommune: PropTypes.string.isRequired,
    codeVoie: PropTypes.string.isRequired,
    numero: PropTypes.shape({
      numeroComplet: PropTypes.string.isRequired,
      modified: PropTypes.object
    }).isRequired,
    bounds: PropTypes.object,
    actions: PropTypes.shape({
      select: PropTypes.func.isRequired
    }).isRequired
  }

  static defaultProps = {
    bounds: null
  }

  toggleEdit = () => {
    this.setState(state => {
      return {
        editing: !state.editing
      }
    })
  }

  render() {
    const {editing} = this.state
    const {codeCommune, codeVoie, numero, bounds, actions} = this.props
    const positions = numero.edited ? numero.modified.positions : numero.positions
    const item = {
      name: numero.numeroComplet,
      status: getStatus(numero),
      warning: positions.length === 0 ? 'Ce numréro n’a pas de position' : null,
      handleClick: () => actions.select(codeCommune, codeVoie, numero.numeroComplet)
    }

    return (
      <EditNumero item={item} toggleForm={this.toggleEdit}>
        {editing && (
          <NumeroForm
            numero={numero}
            bounds={bounds}
            actions={actions}
          />
        )}
      </EditNumero>
    )
  }
}

export default NumeroItem
