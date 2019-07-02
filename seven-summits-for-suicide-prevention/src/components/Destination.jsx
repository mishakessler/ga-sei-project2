import React from 'react'

import { fetchFundraiser } from '../services/fetchFundraiser'
import { fetchWeather } from '../services/fetchWeather'
import { fetchPix } from '../services/fetchPix'

import { Progress, Icon } from 'semantic-ui-react'

export default class Destination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fundraiser: {},
      weather: {},
      pix: {},
    }
  }

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

  async componentDidUpdate(prevProps) {
    if (prevProps.summit !== this.props.summit) {
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
  }

  render() {
    const { fundraiser } = this.state;
    const { weather } = this.state;
    const { pix } = this.state;

    return (
      <>
        <div className="hero">

        </div>
        <div className="summit-info">
          {this.props.summit.altitude}
        </div>
        <div className="fundraiser-info">
          <Progress percent={fundraiser.percent} indicating />
          <p>With an original goal of ${fundraiser && fundraiser.goal}, {fundraiser.name} has raised ${fundraiser.total}!</p>
        </div>
        <div className="learn-more">
          <p>The weather is {weather.daily && weather.daily.summary}.</p>
        </div>
      </>
    )
  }
}