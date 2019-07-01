import React from 'react';

import './App.css';
import { Dimmer, Loader, Progress } from 'semantic-ui-react'

// import Header from './components/Header'
// import Hero from './components/Hero'
// import Footer from './components/Footer'
import Fundraiser from './components/Fundraiser';
// import Weather from './components/Weather'

import { fetchFundraiser } from './services/fetchFundraiser';
import { fetchWeather } from './services/fetchWeather';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      fundraiser: null,
      weather: null,
    }
  }

  async componentDidMount() {
    const fundraiser = await fetchFundraiser();
    const weather = await fetchWeather();
    this.setState({
      fundraiser: fundraiser,
      weather: weather
    })
  }

  render() {
    const { fundraiser } = this.state;
    const { weather } = this.state;
    return (
      <div className="App" >
        <h1>Seven Summits for Suicide Prevention</h1>
        <h3>{fundraiser && fundraiser.name}</h3>
        <p>{weather && weather.daily.summary}</p>
        <Fundraiser />
      </div>
    );
  }
}
