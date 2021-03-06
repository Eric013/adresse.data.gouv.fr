import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../../../../button'
import Notification from '../../../../../notification'
import Mapbox from '../../../../../mapbox'

import SinglePositionMap from './single-position-map'

class PositionForm extends React.Component {
  static propTypes = {
    position: PropTypes.object,
    handlePosition: PropTypes.func.isRequired,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
    error: PropTypes.instanceOf(Error)
  }

  static defaultProps = {
    position: null,
    onSave: null,
    onCancel: null,
    error: null
  }

  handleCoords = coords => {
    const {handlePosition} = this.props

    handlePosition({
      coords,
      dateMAJ: null,
      source: [],
      type: 'entrée'
    })
  }

  render() {
    const {position, onSave, onCancel, error} = this.props

    return (
      <div>
        <div className='map'>
          <Notification type='info'>
            Sélectionnez le marqueur puis déplacez-le à la position souhaitée.
          </Notification>

          <Mapbox ortho switchStyle>
            {map => (
              <SinglePositionMap
                map={map}
                coords={position.coords}
                handlePosition={this.handleCoords}
              />
            )}
          </Mapbox>
        </div>

        {error && (
          <Notification type='error'>
            {error.message}
          </Notification>
        )}

        <div className='buttons'>
          {onCancel && (
            <Button
              size='small'
              onClick={onCancel}
            >
              Annuler les changements
            </Button>
          )}

          {onSave && (
            <Button
              size='small'
              onClick={onSave}
            >
              Enregistrer la nouvelle position
            </Button>
          )}
        </div>

        <style jsx>{`
          .map {
            margin-bottom: 4em;
          }

          .buttons {
            display: flex;
            flex-flow: wrap;
            justify-content: space-between;
            align-items: center;
            margin: 1em;
          }
        `}</style>
      </div>
    )
  }
}

export default PositionForm
