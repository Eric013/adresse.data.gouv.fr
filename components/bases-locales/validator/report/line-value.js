import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

class LineValue extends React.Component {
  constructor(props) {
    super(props)
    const errors = props.value.errors || []
    this.state = {error: errors.length > 0}
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
  }

  handleMouseOver() {
    const {value, handleHover} = this.props
    handleHover(value)
  }

  handleMouseOut() {
    const {handleHover} = this.props
    handleHover(null)
  }

  render() {
    const {error} = this.state
    const {value} = this.props

    return (
      <Fragment key={value.rawValue}>
        {error ?
          <td
            className='error'
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}>{value.rawValue}</td> :
          <td className='valid'>{value.rawValue}</td>
        }
        <style jsx>{`
          @import 'theme';

          td {
            padding: 0.5em;
          }

          td.error {
            background: $errorBg;
          }

          td.error:hover {
            cursor: pointer;
            background: $errorBorder;
            color: $white;
          }

          td.valid {
            background: $successBg;
          }
          `}</style>
      </Fragment>
    )
  }
}

LineValue.propTypes = {
  value: PropTypes.object.isRequired,
  handleHover: PropTypes.func.isRequired
}

export default LineValue
