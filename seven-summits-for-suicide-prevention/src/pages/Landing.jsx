import React from 'react';
import LogomarkStarburst from '../assets/graphics/LogomarkStarburst.png';

export default class Landing extends React.Component {
  render() {
    return (
      <div id="landingPage">
        <div className="hero">
          <img src={LogomarkStarburst} alt="Starburst Logomark" />
          {/* <a href="#scroll-anchor">scroll down</a> */}
        </div>
        <div id="scroll-anchor">

        </div>
      </div>
    )
  }
}