import React from 'react'

import Hero from '../components/Hero'
import Fundraiser from '../components/Fundraiser'
import Weather from '../components/Weather'
import { fetchFundraiser } from '../services/fetchFundraiser'
import { fetchWeather } from '../services/fetchWeather'
import { fetchPix } from '../services/fetchPix'

export default class Destination extends React.Component {

  async componentDidMount() {
    const fundraiserID = this.props.summit.fundraiserID;
    const fundraiser = await fetchFundraiser(fundraiserID);

    const weatherLocation = `${this.props.summit.latitude},${this.props.summit.longitude}`;
    const weather = await fetchWeather(weatherLocation);

    const pixQuery = this.props.summit.name;
    const pix = await fetchPix(pixQuery);

    this.setState({
      fundraiser: fundraiser,
      weather: weather,
      pix: pix,
    })
  }

  render() {
    return (
      <div className="destination">
        <Hero />
        <Fundraiser />
        <Weather />
      </div>
    )
  }
}