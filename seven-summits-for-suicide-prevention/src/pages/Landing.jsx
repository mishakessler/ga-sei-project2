import React from 'react';
import LogomarkStarburst from '../assets/graphics/LogomarkStarburst.png';
import { Icon } from 'semantic-ui-react'

export default class Landing extends React.Component {
  render() {
    return (
      <div id="landingPage">
        <div className="hero" id="home-hero">
          <h2>Welcome To</h2>
          <img src={LogomarkStarburst} alt="Starburst Logomark" />
        </div>
        <div className="scroll-link">
          <a href="#scroll-anchor">
            <Icon color='white' name='angle double down' size='big' />
          </a>
        </div>
        <div id="scroll-anchor">
        </div>
        <div className="summit-info" id="page-info">

        </div>
      </div>
    )
  }
}