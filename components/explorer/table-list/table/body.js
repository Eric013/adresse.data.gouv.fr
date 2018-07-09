import React from 'react'
import PropTypes from 'prop-types'

function fadeOut(wrapped, idx) {
  return wrapped && idx === 8 ? 'fade-out' : ''
}

function isSelected(selected, item) {
  return selected && selected.id === item.key ? 'isSelected' : ''
}

const Body = ({items, wrapped, selected, handleSelect}) => (
  <tbody>
    {items.map((item, idx) => (
      <tr
        key={item.key}
        className={`${fadeOut(wrapped, idx)} ${isSelected(selected, item)}`}
        onClick={() => handleSelect(item)}>
        {item.values.map((value, idx) =>
          <td key={idx}>{value}</td> // eslint-disable-line react/no-array-index-key
        )}
      </tr>
    ))}
    <style jsx>{`
      @import 'theme';
      @import 'colors';

      td {
        border: 1px solid $border;
        padding: 8px;
      }

      tr:nth-child(even) {
        background-color: $backgroundGrey;
      }

      tr:hover {
        cursor: pointer;
        background-color: $lightGrey;
      }

      tr.fade-out {
        opacity: 0.6;
      }

      tr.fade-out td {
        border: 1px dotted $border;
      }

      tr.isSelected {
        background-color: $primaryDark;
        color: $white;
      }
      `}</style>
  </tbody>
)

Body.propTypes = {
  items: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
  selected: PropTypes.shape({
    id: PropTypes.string.isRequired
  }),
  wrapped: PropTypes.bool
}

Body.defaultProps = {
  selected: null,
  wrapped: false
}

export default Body
