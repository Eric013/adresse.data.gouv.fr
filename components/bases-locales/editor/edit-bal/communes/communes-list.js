import React from 'react'
import PropTypes from 'prop-types'

import theme from '../../../../../styles/theme'

import CreateItemWrapper from '../create-item-wrapper'

import CreateCommune from '../create-commune'

import CommuneItem from './commune-item'

class CommunesList extends React.Component {
  state = {
    displayForm: false
  }

  static propTypes = {
    communes: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  toggleForm = () => {
    this.setState(state => {
      return {
        displayForm: !state.displayForm
      }
    })
  }

  handleSubmit = async commune => {
    const {actions} = this.props
    const {addItem} = actions
    let error = null

    try {
      await addItem(commune)
    } catch (err) {
      error = err
    }

    this.setState({
      displayForm: Boolean(error),
      error
    })
  }

  render() {
    const {displayForm, error} = this.state
    const {communes, actions} = this.props

    return (
      <div className='communes-list'>
        <div className='title'>
          <h3>Liste des voies</h3>
        </div>

        <div className='divider' />

        <CreateItemWrapper
          title='Création d’une commune'
          buttonText='Ajouter une commune'
          displayForm={displayForm}
          toggleForm={this.toggleForm}
        >
          <CreateCommune
            submit={this.handleSubmit}
            error={error}
          />
        </CreateItemWrapper>

        <div className='list'>
          {Object.keys(communes).map(commune => (
            <CommuneItem
              key={communes[commune].code}
              commune={communes[commune]}
              actions={actions}
            />
          ))}
        </div>

        <style jsx>{`
          .title {
            display: flex;
            align-items: center;
          }

          .divider {
            width: 100%;
            border-bottom: 1px solid ${theme.border};
            padding-bottom: 0.5em;
            margin-bottom: 0.5em;
          }

          .communes-list {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: content;
          }

          .list {
            margin: 0.5em 0;
          }
        `}</style>
      </div>
    )
  }
}

export default CommunesList
