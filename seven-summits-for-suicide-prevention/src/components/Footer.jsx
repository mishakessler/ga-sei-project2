import React from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-nav">
          <ul>
            <li><Link to="/destinations/aconcagua">Aconcagua</Link></li>
            <li><Link to="/destinations/blanc">Mt. Blanc</Link></li>
            <li><Link to="/destinations/denali">Denali</Link></li>
            <li><Link to="/destinations/elbrus">Mt. Elbrus</Link></li>
            <li><Link to="/destinations/everest">Everest</Link></li>
            <li><Link to="/destinations/everestbasecamp">Everest Base Camp</Link></li>
            <li><Link to="/destinations/kilimanjaro">Kilimanjaro</Link></li>
            <li><Link to="/destinations/kosciuszko">Mt. Kosciuszko</Link></li>
            <li><Link to="/destinations/puncakjaya">Puncak Jaya</Link></li>
            <li><Link to="/destinations/vinsonmassif">Vinson Massif</Link></li>
          </ul>
        </div>
        <div id="copyright">
          <p>Designed by Misha Kessler.</p>
        </div>
        <div id="credit">
          <p>Seven Summits for Suicide Prevention is powered by the <a href="https://www.fundraise.com/doc/api" target="_blank" rel="noopener noreferrer">Fundraise.com API</a>, the <a href="https://darksky.net/dev" target="_blank" rel="noopener noreferrer">DarkSky API</a>, and the <a href="https://pixabay.com/api/docs/" target="_blank" rel="noopener noreferrer">Pixabay API</a>, with UI modules from the <a href="https://react.semantic-ui.com/" target="_blank" rel="noopener noreferrer">Semantic React UI library</a>.</p>
        </div>
      </div>
    )
  }
}