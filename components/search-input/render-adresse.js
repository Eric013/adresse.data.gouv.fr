const featuresTypes = {
  housenumber: 'numéro',
  street: 'rue',
  locality: 'lieu-dit',
  hamlet: 'hameau',
  village: 'village',
  city: 'ville',
  commune: 'commune'
}

function RenderAdresse(item, isHighlighted) {
  const {id, label, context, type} = item.properties
  return (
    <div key={id} className={`item ${isHighlighted ? 'item-highlighted' : ''}`}>
      <div>
        <div className='label'>{label}</div>
        <div>{context}</div>
      </div>
      <div>{featuresTypes[type]}</div>
      <style jsx>{`
        @import 'theme';
        @import 'colors';

        .item {
          display: flex;
          flex-flow: row;
          justify-content: space-between;
          align-items: center;
          padding: 1em;
        }

        .item .label {
          font-weight: 600;
        }

        .item:hover {
          cursor: pointer;
        }

        .item-highlighted {
          background-color: $primary;
          color: $white;
        }
        `}</style>
    </div>
  )
}

export default RenderAdresse
