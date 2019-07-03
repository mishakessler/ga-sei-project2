import React from 'react'
import { Link } from 'react-router-dom'
import hipsterpanda from '../assets/images/hipsterpanda.png'

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-nav">
          <ul>
            <li><Link to="/destinations/aconcagua" className="menu-button">Aconcagua</Link></li>
            <li><Link to="/destinations/blanc" className="menu-button">Mt. Blanc</Link></li>
            <li><Link to="/destinations/denali" className="menu-button">Denali</Link></li>
            <li><Link to="/destinations/elbrus" className="menu-button">Mt. Elbrus</Link></li>
            <li><Link to="/destinations/everest" className="menu-button">Everest</Link></li>
            <li><Link to="/destinations/everestbasecamp" className="menu-button">Everest Base Camp</Link></li>
            <li><Link to="/destinations/kilimanjaro" className="menu-button">Kilimanjaro</Link></li>
            <li><Link to="/destinations/kosciuszko" className="menu-button">Mt. Kosciuszko</Link></li>
            <li><Link to="/destinations/puncakjaya" className="menu-button">Puncak Jaya</Link></li>
            <li><Link to="/destinations/vinsonmassif" className="menu-button">Vinson Massif</Link></li>
          </ul>
        </div>
        <div id="copyright">
          <div id="copyright-shadow">
            <img src={hipsterpanda} alt="Hipster Panda" />
            <p>Designed by <a href="https://www.mishakessler.com">Misha Kessler</a>.</p>

          </div>
        </div>
        <div id="credit">
          <p><em>Seven Summits for Suicide Prevention is powered by the <a href="https://www.fundraise.com/doc/api" target="_blank" rel="noopener noreferrer">Fundraise.com API</a>, the <a href="https://darksky.net/dev" target="_blank" rel="noopener noreferrer">DarkSky API</a>, and the <a href="https://pixabay.com/api/docs/" target="_blank" rel="noopener noreferrer">Pixabay API</a>, with UI modules from the <a href="https://react.semantic-ui.com/" target="_blank" rel="noopener noreferrer">Semantic React UI library</a>.</em></p>
        </div>
      </div>
    )
  }
}