import React from 'react'
import PropTypes from 'prop-types'
import Router, {withRouter} from 'next/router'

import Section from '../../section'

import Head from './head'
import Infos from './infos'
import MapContainer from './map-container'
import AddressesTable from './addresses-table'

class Voie extends React.Component {
  static propTypes = {
    voie: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      idVoie: PropTypes.string.isRequired,
      codeVoie: PropTypes.string.isRequired,
      nomVoie: PropTypes.string.isRequired,
      codeCommune: PropTypes.string.isRequired,
      nomCommune: PropTypes.string.isRequired,
      sources: PropTypes.array.isRequired,
      entries: PropTypes.array.isRequired,
      destination: PropTypes.array.isRequired,
      active: PropTypes.bool.isRequired,
      numeros: PropTypes.array.isRequired
    }),
    selected: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      numero: PropTypes.string.isRequired,
      idVoie: PropTypes.string.isRequired,
      codePostal: PropTypes.string.isRequired,
      position: PropTypes.object.isRequired,
      pseudoNumero: PropTypes.bool,
      destination: PropTypes.array,
      parcelles: PropTypes.array,
      active: PropTypes.bool.isRequired,
      sources: PropTypes.array.isRequired,
      entries: PropTypes.array.isRequired,
      libelleAcheminement: PropTypes.string,
      distanceMaxPositions: PropTypes.number,
      centrePositions: PropTypes.object
    }),
    router: PropTypes.shape({
      push: PropTypes.func.isRequired,
      query: PropTypes.object.isRequired
    }).isRequired
  }

  static defaultProps = {
    voie: null,
    selected: null
  }

  handleSelect = address => {
    const {router} = this.props
    const {codeCommune, codeVoie} = router.query
    const addressNb = address ? address.numero : null

    Router.push(
      `/explore/commune/voie?codeCommune=${codeCommune}&codeVoie=${codeVoie}${addressNb ? `&numero=${addressNb}` : ''}`,
      `/explore/commune/${codeCommune}/voie/${codeVoie}${addressNb ? `/numero/${addressNb}` : ''}`
    )
  }

  render() {
    const {voie, selected} = this.props
    const commune = {
      nom: voie.nomCommune,
      code: voie.codeCommune,
      departement: {
        code: voie.codeDepartement,
        nom: voie.nomDepartement
      }
    }

    return (
      <Section>
        <Head commune={commune} nomVoie={voie.nomVoie} />
        <Infos voie={voie} />
        <MapContainer
          voie={voie}
          addresses={voie.numeros}
          selected={selected}
          onSelect={this.handleSelect} />
        <AddressesTable
          addresses={voie.numeros}
          selected={selected}
          onSelect={this.handleSelect} />
      </Section>
    )
  }
}

export default (withRouter(Voie))
