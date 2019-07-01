import React from 'react'
import Logomark from '../assets/graphics/Logomark.png'
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <img src={Logomark} />
        <div className="footer-nav">
          <Link to="/destinations/aconcagua">Aconcagua</Link>
          <Link to="/destinations/blanc">Mt. Blanc</Link>
          <Link to="/destinations/denali">Denali</Link>
          <Link to="/destinations/elbrus">Mt. Elbrus</Link>
          <Link to="/destinations/everest">Everest</Link>
          <Link to="/destinations/everestbasecamp">Everest Base Camp</Link>
          <Link to="/destinations/kilimanjaro">Kilimanjaro</Link>
          <Link to="/destinations/kosciuscko">Mt. Kosciuscko</Link>
          <Link to="/destinations/puncakjaya">Puncak Jaya</Link>
          <Link to="/destinations/vinsonmassif">Vinson Massif</Link>
        </div>
        <div id="copyright">
          <p>Designed by Misha Kessler.</p>
        </div>
        <div id="credit">
          <p>Seven Summits for Suicide Prevention is powered by the <a href="#">Fundraise.com API</a>, the <a href="#">DarkSky API</a>, and the <a href="#">Pixabay API</a>, with UI modules from the <a href="#">Semantic React UI library</a>.</p>
        </div>
      </>
    )
  }
}