import React from 'react';
import { Link } from 'react-router-dom'

import Aconcagua from '../assets/graphics/Aconcagua.png'
import Denali from '../assets/graphics/Denali.png'
import Elbrus from '../assets/graphics/Elbrus.png'
import Everest from '../assets/graphics/Everest.png'
import EverestBaseCamp from '../assets/graphics/EverestBaseCamp.png'
import Kilimanjaro from '../assets/graphics/Kilimanjaro.png'
import Kosciuszko from '../assets/graphics/Kosciuszko.png'
import MontBlanc from '../assets/graphics/MontBlanc.png'
import PuncakJaya from '../assets/graphics/PuncakJaya.png'
import VinsonMassif from '../assets/graphics/VinsonMassif.png'

export default class Destinations extends React.Component {
  render() {
    return (
      <div id="destinationsPage">
        <div className="hero">
          <h2>Interested in learning more?</h2>
          <p>Be sure to check out the following pages for more information on the trip and the fundraisers!</p>
          <div id="scroll-anchor"></div>
          <div id="destination-grid">
            <Link to="/destinations/aconcagua" className="menu-button">
              <h2>Aconcagua</h2>
              <img src={Aconcagua} alt="Destination Image" />
            </Link>
            <Link to="/destinations/blanc" className="menu-button">
              <h2>Mont Blanc</h2>
              <img src={MontBlanc} alt="Destination Image" />
            </Link>
            <Link to="/destinations/denali" className="menu-button">
              <h2>Denali</h2>
              <img src={Denali} alt="Destination Image" />
            </Link>
            <Link to="/destinations/elbrus" className="menu-button">
              <h2>Elbrus</h2>
              <img src={Elbrus} alt="Destination Image" />
            </Link>
            <Link to="/destinations/everest" className="menu-button">
              <h2>Everest</h2>
              <img src={Everest} alt="Destination Image" />
            </Link>
            <Link to="/destinations/everestbasecamp" className="menu-button">
              <h2>Everest Base Camp</h2>
              <img src={EverestBaseCamp} alt="Destination Image" />
            </Link>
            <Link to="/destinations/kilimanjaro" className="menu-button">
              <h2>Kilimanjaro</h2>
              <img src={Kilimanjaro} alt="Destination Image" />
            </Link>
            <Link to="/destinations/kosciuszko" className="menu-button">
              <h2>Kosciuszko</h2>
              <img src={Kosciuszko} alt="Destination Image" />
            </Link>
            <Link to="/destinations/puncakjaya" className="menu-button">
              <h2>Puncak Jaya</h2>
              <img src={PuncakJaya} alt="Destination Image" />
            </Link>
            <Link to="/destinations/vinsonmassif" className="menu-button">
              <h2>Vinson Massif</h2>
              <img src={VinsonMassif} alt="Destination Image" />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
