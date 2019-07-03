import React from 'react';
import LogomarkStarburst from '../assets/graphics/LogomarkStarburst.png';
import { Icon } from 'semantic-ui-react'

export default class Destinations extends React.Component {
  render() {
    return (
      <div id="destinationsPage">
        <div className="hero">
          <h2>Interested in learning more?</h2>
          <p>Be sure to check out the following pages for more information on the trip and the fundraisers!</p>
        </div>
        <div className="scroll-link">
          <a href="#scroll-anchor">
            <Icon color='white' name='angle double down' size='big' />
          </a>
        </div>
        <div id="scroll-anchor">
        </div>
      </div>
    )
  }
}