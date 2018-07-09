import PropTypes from 'prop-types'
import FaCheck from 'react-icons/lib/fa/check'
import FaClose from 'react-icons/lib/fa/close'

const CsvMeta = ({name, value, isValid}) => {
  return (
    <div>
      <div className='item'>
        <div><b>{name}</b></div>
        {isValid ? <div className='check'><FaCheck /></div> : <div className='error'><FaClose /></div>}
      </div>
      <div>{value}</div>
      <style jsx>{`
        @import 'colors';

        .item {
          display: flex;
        }

        .check {
          margin-left: 1em;
          color: $green;
        }

        .error {
          margin-left: 1em;
          color: $red;
        }
        `}</style>
    </div>
  )
}

CsvMeta.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isValid: PropTypes.bool.isRequired
}

export default CsvMeta
