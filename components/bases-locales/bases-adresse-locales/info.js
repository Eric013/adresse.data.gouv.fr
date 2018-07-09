import React from 'react'
import PropTypes from 'prop-types'

class Info extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf([
      'valid', 'invalid'
    ])
  }

  static defaultProps = {
    type: null
  }

  render() {
    const {title, type, children} = this.props

    return (
      <div className='info'>
        <b>{title} : </b>
        <span className={type}>{children}</span>
        <style jsx>{`
          @import 'theme';

          span {
            display: inline-flex;
            border-radius: 3.75em;
            background-color: $infoBg;
            color: $infoBorder;
            font-size: .75em;
            line-height: 1;
            padding: .4em 1.2em;
            margin: .1em .5em
          }

          span.valid {
            padding: .4em .5em;
            background-color: $successBg;
            color: $successBorder;
          }

          span.invalid {
            padding: .4em .5em;
            background-color: $errorBg;
            color: $errorBorder;
          }
          `}</style>
      </div>

    )
  }
}

export default Info
