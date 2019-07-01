import React from 'react';

import Header from './components/Header'
import Hero from './components/Hero'
import Fundraiser from './components/Fundraiser';
import Weather from './components/Weather'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

import { fetchFundraiser } from './services/fetchFundraiser';
import { fetchWeather } from './services/fetchWeather';

import './App.css';
import { Dimmer, Loader, Progress } from 'semantic-ui-react'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      fundraiser: null,
      weather: null,
      latitude: null,
      longitude: null,
    }
  }

  async componentDidMount() {
    const fundraiser = await fetchFundraiser();
    const weather = await fetchWeather();
    this.setState({
      fundraiser: fundraiser,
      weather: weather,
    })
  }

  render() {
    const { fundraiser } = this.state;
    const { weather } = this.state;
    return (
      <div className="App" >
        <div className="header">
          <Header />
        </div>
        <div className="destination">
          <Hero />
          <Fundraiser />
          <Weather
            latitude={this.state.latitude}
            longitude={this.state.longitude}
          />
          <h4>{fundraiser && fundraiser.name}</h4>
          <p>{weather && weather.daily.summary}</p>
        </div>
        <div className="footer">
          <CallToAction />
          <Footer />
        </div>
      </div>
    );
  }
}
