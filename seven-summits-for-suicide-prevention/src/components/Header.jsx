import React from 'react'
import Logomark from '../assets/graphics/LogomarkMini.png'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <img src={Logomark} alt="Seven Summits for Suicide Prevention Logomark" />
        </div>
        <div className="header-nav">
          <ul>
            <li><Link to="/" className="menu-button">Home</Link></li>
            <li><Link to="/destinations" className="menu-button">Destinations</Link></li>
            <li><Link to="/get-involved" className="menu-button">Get Involved</Link></li>
            <li><Link to="/contact" className="menu-button">Contact</Link></li>
            <li><Link to="https://www.fundraise.com" id="sponsor-button">Sponsor Our Charity</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}