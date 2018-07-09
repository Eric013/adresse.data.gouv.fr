import React from 'react'

import Head from './head'
import Codes from './codes'
import Metrics from './metrics'
import Map from './map'

const Commune = props => (
  <div>
    <Head {...props} />

    <div className='head'>
      <Codes {...props} />
    </div>

    <div className='map'>
      <Metrics {...props} />
      <Map {...props} />
    </div>

    <style jsx>{`
      @import 'theme';
      @import 'colors';

      .head {
        background-color: $primary;
        color: $white;
      }

      .map {
        display: flex;
        flex-direction: row;
      }

      .map > div {
        width: 30%;
      }

      @media (max-width: 749px) {
        .map {
          display: flex;
          flex-direction: column;
        }
      }
      `}</style>
  </div>
)

export default Commune
