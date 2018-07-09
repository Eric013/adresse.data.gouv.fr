import Section from '../section'

export default () => (
  <Section
    background='dark'>
    <div className='pitch'>
      <p>
        Pour que les <strong>services d’urgence</strong> arrivent au bon endroit, pour vous permettre de réaliser une analyse <strong>cartographique</strong> en quelques clics ou encore pour que les opérateurs <strong>publics et privés</strong> coordonnent mieux leurs chantiers, ce référentiel, véritable enjeu de <strong>souveraineté</strong> pour la France, est la première alliance entre l’État et la société civile.
      </p>
    </div>
    <style jsx>{`
      @import 'colors';

      .pitch {
        color: $grey;
        text-align: center;
        font-size: 1.2em;
        line-height: 1.2em;
      }
      .pitch strong {
        color: $white
      }
      .pitch a {
        color: $white;
        font-style: italic;
      }
      .pitch p {
          margin-left: auto;
          margin-right: auto;
          max-width: 1000px;
      }
      `}</style>
  </Section>
)
