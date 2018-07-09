function RenderCommune(item, isHighlighted) {
  const description = item.departement ? `${item.departement.nom} - ${item.departement.code}` : 'Collectivité d’outre-mer'

  return (
    <div key={item.code} className={`item ${isHighlighted ? 'item-highlighted' : ''}`}>
      <div>
        <div className='label'>{item.nom}</div>
      </div>
      <div>{description}</div>
      <style jsx>{`
        @import 'theme';
        @import 'colors';

        .item {
          display: flex;
          flex-flow: row;
          justify-content: space-between;
          align-items: center;
          padding: 1em;
          border-bottom: 1px solid whitesmoke;
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

export default RenderCommune
