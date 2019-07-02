import React from 'react'
import Logomark from '../assets/graphics/Logomark.png'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={Logomark} alt="Seven Summits for Suicide Prevention Logomark" />
        <div className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/get-involved">Get Involved</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    )
  }
}