import PropTypes from 'prop-types'

const Loader = ({size}) => (
  <div className={`loader ${size}`}>
    <style jsx>{`
      @import 'theme';
      @import 'colors';

      .loader {
        margin-left: 20px;
        border-radius: 50%;
        animation: spin 2s linear infinite;
      }

      .small {
        border: 2px solid $white;
        border-top: 2px solid $primary;
        width: 20px;
        min-width: 20px;
        height: 20px;
      }

      .regular {
        border: 4px solid $white;
        border-top: 4px solid $primary;
        width: 40px;
        height: 40px;
      }


      .big {
        border: 5px solid $white;
        border-top: 5px solid $primary;
        width: 60px;
        height: 60px;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
)

Loader.propTypes = {
  size: PropTypes.oneOf([
    'small',
    'regular',
    'big'
  ])
}

Loader.defaultProps = {
  size: 'regular'
}

export default Loader
