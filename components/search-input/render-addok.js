const featuresTypes = {
  housenumber: 'Numéro',
  street: 'Rue',
  locality: 'Lieu-dit',
  hamlet: 'Hameau',
  village: 'Village',
  city: 'Ville',
  municipality: 'Commune'
}

function renderHeader(header) {
  return (
    <div>
      <div key={header} className='header'>{featuresTypes[header]}</div>
      <style jsx>{`
        @import 'colors';

        .header {
          background-color: $grey;
          color: $white;
          padding: 0.2em;
        }
        `}
      </style>
    </div>
  )
}

function renderItem(item, isHighlighted) {
  const {name, context, city, type, postcode} = item.properties

  return (
    <div>
      <div key={`${name}-${postcode}`} className={`item ${isHighlighted ? 'item-highlighted' : ''}`}>
        <div>
          <div className='label'>{name}</div>
        </div>
        {type === 'municipality' ?
          <div>{context}</div> :
          <div>{city} - {postcode}</div>
        }
      </div>
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

function RenderAddok(item, isHighlighted) {
  return item.header ? renderHeader(item.header) : renderItem(item, isHighlighted)
}

export default RenderAddok
