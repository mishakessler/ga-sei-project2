import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom'
import { Dimmer, Loader, Progress } from 'semantic-ui-react'

import Landing from './pages/Landing'
import GetInvolved from './pages/GetInvolved'
import Destinations from './pages/Destinations'
import Contact from './pages/Contact'

import Header from './components/Header'
import Hero from './components/Hero'
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
          fundraiserID: 'aconcagua',
          latitude: '-32.6532',
          longitude: '-70.0109',
          altitude: '22,837 ft',
          information: "",
        },

        blanc: {
          name: 'Mount Blanc',
          fundraiserID: 'mt-blanc',
          latitude: '45.8326',
          longitude: '6.8652',
          altitude: '15,781 ft',
          information: "",
        },

        denali: {
          name: 'Mount Denali',
          fundraiserID: 'denali',
          latitude: '63.0692',
          longitude: '-151.0070',
          altitude: '20,310 ft',
          information: "",
        },

        elbrus: {
          name: 'Mount Elbrus',
          fundraiserID: 'elbrus',
          latitude: '43.3499',
          longitude: '42.4453',
          altitude: '18,510 ft',
          information: "",
        },

        everest: {
          name: 'Mount Everest',
          fundraiserID: 'everest',
          latitude: '27.9881',
          longitude: '86.9250',
          altitude: '29,029 ft',
          information: "",
        },

        everestbasecamp: {
          name: 'Mount Everest Base Camp',
          fundraiserID: 'everest-base-camp',
          latitude: '27.9861',
          longitude: '86.9226',
          altitude: '17,600 ft',
          information: "",
        },

        kilimanjaro: {
          name: 'Mount Kilimanjaro',
          fundraiserID: 'kilimanjaro',
          latitude: '-3.0674',
          longitude: '37.3556',
          altitude: '19,341 ft',
          information: "",
        },

        kosciuszko: {
          name: 'Mount Kosciuszko',
          fundraiserID: 'kosciuszko',
          latitude: '-36.4559',
          longitude: '148.2636',
          altitude: '7,310 ft',
          information: "",
        },

        puncakjaya: {
          name: 'Puncak Jaya',
          fundraiserID: 'puncak-jaya',
          latitude: '-4.0846',
          longitude: '137.1866',
          altitude: '16,024 ft',
          information: "",
        },

        vinsonmassif: {
          name: 'Vinson Massif',
          fundraiserID: 'vinson-massif',
          latitude: '-78.6341',
          longitude: '-85.2135',
          altitude: '15,781 ft',
          information: "",
        },
      }
    }
  }

  render() {
    return (
      <div className="App" >
        <div className="header">
          <Header />
          <Hero />
        </div>
        <div className="displayArea">
          <Route exact path="/" render={() => <Landing />} />
          <Route path="/destinations" render={() => <Destinations />} />
          <Route
            path="/destinations/:summit"
            render={(props) => {
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