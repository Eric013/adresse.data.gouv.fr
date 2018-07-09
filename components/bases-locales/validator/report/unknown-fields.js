import PropTypes from 'prop-types'

import FaQuestion from 'react-icons/lib/fa/question'

const UnknownFields = ({fields}) => (
  <div className='container'>
    {fields.length > 0 &&
      <table>
        <tbody>
          <tr>
            <th>Champs non reconnus</th>
          </tr>
          {fields.map(field => (
            <tr key={field}>
              <td>{field}</td>
              <td className='unknown'><FaQuestion /></td>
            </tr>)
          )}
        </tbody>
      </table>}
    <style jsx>{`
      @import 'theme';

      .unknown {
        color: $darkerGrey;
      }

      th, td {
        padding: 0.5em;
      }

      tr:nth-child(2n) {
        background-color: $backgroundGrey;
      }

      td:nth-child(2n) {
        text-align: center;
      }
      `}</style>
  </div>
)

UnknownFields.propTypes = {
  fields: PropTypes.array
}

UnknownFields.defaultProps = {
  fields: []
}

export default UnknownFields
