import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom'
import { Dimmer, Loader, Progress } from 'semantic-ui-react'

import Landing from './pages/Landing'
import GetInvolved from './pages/GetInvolved'
import Destinations from './pages/Destinations'
import Contact from './pages/Contact'

import Header from './components/Header'
import Destination from './components/Destination'
import CallToAction from './components/CallToAction';
import Footer from './components/Footer'

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      summits: {
        aconcagua: {
          name: 'Aconcagua',
          fundraiserID: 'climbing-aconcagua-for-suicide-prevention',
          latitude: '-32.6532',
          longitude: '-70.0109',
          altitude: '22,837 ft',
          information: "Aconcagua, with a summit elevation of 22,837 feet (6,960.8 metres), is the highest mountain in both the Southern and Western Hemispheres, as well as the tallest mountain outside of Asia.",
          recipient: "Want to nominate an organization for this Seven Summits for Suicide Prevention fundraiser? Let us know!",
          heroImage: "//imgur.com/9yPJ2PJ"
        },

        blanc: {
          name: 'Mont Blanc',
          fundraiserID: 'climbing-mt-blanc-for-suicide-prevention',
          latitude: '45.8326',
          longitude: '6.8652',
          altitude: '15,781 ft',
          information: "Mont Blanc, meaning White Mountain, is the highest mountain in the Alps and the highest in Europe west of the Caucasus peaks of Russia and Georgia. It rises 15,774 feet (4,808 meters) above sea level and is ranked 11th in the world in topographic prominence.",
          recipient: "Want to nominate an organization for this Seven Summits for Suicide Prevention fundraiser? Let us know!",
          heroImage: 'https://imgur.com/LxM91M1',
        },

        denali: {
          name: 'Mount Denali',
          fundraiserID: 'climbing-denali-for-suicide-prevention',
          latitude: '63.0692',
          longitude: '-151.0070',
          altitude: '20,310 ft',
          information: "Denali, also known as Mount McKinley, its former official name, is the highest mountain peak in North America, with a summit elevation of 20,310 feet (6,190 meters) above sea level. Denali is the third most prominent and third most isolated peak on Earth, after Mount Everest and Aconcagua.",
          recipient: "Want to nominate an organization for this Seven Summits for Suicide Prevention fundraiser? Let us know!",
          heroImage: 'https://imgur.com/hyfHglG',
        },

        elbrus: {
          name: 'Mount Elbrus',
          fundraiserID: 'climbing-elbrus-for-suicide-prevention',
          latitude: '43.3499',
          longitude: '42.4453',
          altitude: '18,510 ft',
          information: "Mount Elbrus is a dormant volcano in the Caucasus Mountains in Southern Russia, near the border with Georgia. It could be considered the highest mountain in Europe, notwithstanding that the Caucasus mountains are at the intersection of Europe and Asia, and it is the tenth most prominent peak in the world.",
          recipient: "Want to nominate an organization for this Seven Summits for Suicide Prevention fundraiser? Let us know!",
          heroImage: 'https://imgur.com/pFghSYW',
        },

        everest: {
          name: 'Mount Everest',
          fundraiserID: 'climbing-everest-for-suicide-prevention',
          latitude: '27.9881',
          longitude: '86.9250',
          altitude: '29,029 ft',
          information: "Mount Everest, known in Nepali as Sagarmatha (सगरमाथा) and in Tibetan as Chomolungma (ཇོ་མོ་གླང་མ), is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The current official elevation, recognized by China and Nepal, is 29,029 feet (8,848 meters).",
          recipient: "Want to nominate an organization for this Seven Summits for Suicide Prevention fundraiser? Let us know!",
          heroImage: 'https://imgur.com/ST4urOE',
        },

        everestbasecamp: {
          name: 'Mount Everest Base Camp',
          fundraiserID: 'climbing-everest-base-camp-for-suicide-prevention',
          latitude: '27.9861',
          longitude: '86.9226',
          altitude: '17,598 ft',
          information: "Everest Base Camp can refer to either of two base camps on opposite sides of Mount Everest. South Base Camp is in Nepal, at an altitude of 17,598 feet (5,364 metres), while North Base Camp is in Tibet at 16,900 feet (5,150 metres). These camps are rudimentary campsites that are used by mountain climbers as staging grounds during their ascent and descent. South Base Camp is used when climbing via the southeast ridge, while North Base Camp is used when climbing via the northeast ridge.",
          recipient: "Want to nominate an organization for this Seven Summits for Suicide Prevention fundraiser? Let us know!",
          heroImage: 'https://imgur.com/Lr9PKzq',
        },

        kilimanjaro: {
          name: 'Mount Kilimanjaro',
          fundraiserID: 'misha-kessler',
          latitude: '-3.0674',
          longitude: '37.3556',
          altitude: '19,341 ft',
          information: "Mount Kilimanjaro, with its three volcanic cones, Kibo, Mawenzi, and Shira, is a dormant volcano in Tanzania. It is the highest mountain in Africa, with its summit at 19,341 feet (5,895 metres) above sea level.",
          recipient: "Six Feet Over and Live Through This",
          heroImage: 'https://imgur.com/URUWYE8',
        },

        kosciuszko: {
          name: 'Mount Kosciuszko',
          fundraiserID: 'climbing-kosciuszko-for-suicide-prevention',
          latitude: '-36.4559',
          longitude: '148.2636',
          altitude: '7,310 ft',
          information: "Mount Kosciuszko is mainland Australia's highest mountain, at 7,310 feet (2,228 metres) above sea level. It is located on the Main Range of the Snowy Mountains in Kosciuszko National Park, part of the Australian Alps National Parks and Reserves, in New South Wales, Australia.",
          recipient: "Want to nominate an organization for this Seven Summits for Suicide Prevention fundraiser? Let us know!",
          heroImage: 'https://imgur.com/xxeafJF',
        },

        puncakjaya: {
          name: 'Puncak Jaya',
          fundraiserID: 'climbing-puncak-jaya-for-suicide-prevention',
          latitude: '-4.0846',
          longitude: '137.1866',
          altitude: '16,024 ft',
          information: "Puncak Jaya, or Carstensz Pyramid, is the highest summit of Mount Jayawijaya or Mount Carstensz in the the western central highlands of Papua Province, Indonesia. At 16,024 feet (4,884 metres) above sea level, Puncak Jaya is the highest mountain in Indonesia, on the island of New Guinea and in the greater Oceania, and the tallest island mountain on Earth.",
          recipient: "Want to nominate an organization for this Seven Summits for Suicide Prevention fundraiser? Let us know!",
          heroImage: 'https://imgur.com/MdiCMI3',
        },

        vinsonmassif: {
          name: 'Vinson Massif',
          fundraiserID: 'climbing-vinson-massif-for-suicide-prevention',
          latitude: '-78.6341',
          longitude: '-85.2135',
          altitude: '16,050 ft',
          information: "Vinson Massif is a large mountain massif in Antarctica that is located about 750 miles (1,200 kilometres) from the South Pole. Mount Vinson is the highest peak in Antarctica at 16,050 ft (4,892 metres). As of February 2010, only 1,400 climbers have attempted to reach the top of Mount Vinson.",
          recipient: "Want to nominate an organization for this Seven Summits for Suicide Prevention fundraiser? Let us know!",
          heroImage: 'https://imgur.com/tCszU2G',
        },
      }
    }
  }

  render() {
    return (
      <div className="App" >
        <div className="header">
          <Header />
        </div>
        <div className="displayArea">
          <Route path="/" exact render={() => <Landing />} />
          <Route
            path="/destinations" exact
            component={(props) => {
              const summit = props.match.params.summit;
              const summitData = this.state.summits[summit];
              return <Destinations summit={summitData} />
            }} />
          <Route
            path="/destinations/:summit"
            component={(props) => {
              const summit = props.match.params.summit;
              const summitData = this.state.summits[summit];
              return <Destination summit={summitData} />
            }}
          />
          <Route path="/get-involved" render={() => <GetInvolved />} />
          <Route path="/contact" render={() => <Contact />} />
        </div>
        <div className="footer">
          <CallToAction />
          <Footer />
        </div>
      </div>
    );
  }
}