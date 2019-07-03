import React from 'react'

import { fetchFundraiser } from '../services/fetchFundraiser'
import { fetchWeather } from '../services/fetchWeather'
// import { fetchPix } from '../services/fetchPix'

import LoaderInlineCentered from '../ui-modules/LoaderInlineCentered'

import { Progress, Icon } from 'semantic-ui-react'

export default class Destination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fundraiser: {},
      weather: {},
      // pix: {},
    }
  }

  async componentDidMount() {
    const fundraiserID = this.props.summit.fundraiserID;
    const fundraiser = await fetchFundraiser(fundraiserID);

    const weatherLocation = `${this.props.summit.latitude},${this.props.summit.longitude}`;
    const weather = await fetchWeather(weatherLocation);

    // const pixQuery = this.props.summit.name;
    // const pix = await fetchPix(pixQuery);

    this.setState({
      fundraiser: fundraiser,
      weather: weather,
      // pix: pix,
    })
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.summit !== this.props.summit) {
      const fundraiserID = this.props.summit.fundraiserID;
      const fundraiser = await fetchFundraiser(fundraiserID);

      const weatherLocation = `${this.props.summit.latitude},${this.props.summit.longitude}`;
      const weather = await fetchWeather(weatherLocation);

      const pixQuery = this.props.summit.name;
      // const pix = await fetchPix(pixQuery);

      this.setState({
        fundraiser: fundraiser,
        weather: weather,
        // pix: pix,
      })
    }
  }

  render() {
    const { fundraiser } = this.state;
    const { weather } = this.state;
    // const { pix } = this.state;

    return (
      <>
        <div className="hero">
          <img src={this.props.summit.heroImage} alt="Destination Image" />
          <p>{this.props.summit.information}</p>
        </div>
        <div className="summit-info">
          <h3><em>Did you know?</em></h3>
          <div>
            <div className="blurb-column">
              <Icon name="cloud" size="huge" /><br></br>
              <p>The summit rises to <span>{this.props.summit.altitude}</span> feet above sea level.</p>
            </div>
            <div className="blurb-column">
              <Icon name="sun" size="huge" /><br></br>
              <p>Right now on the summit, it's <span>{weather.currently && weather.currently.apparentTemperature}</span> degrees.</p>
            </div>
            <div className="blurb-column">
              <Icon name="tint" size="huge" /><br></br>
              <p>Current wind gusts are reaching <span>{weather.currently && weather.currently.windGust}</span> miles per hour.</p>
            </div>
          </div >
        </div >
        <div className="fundraiser-info">
          <Progress percent={fundraiser.percent} indicating />
          <p>With an original goal of ${fundraiser && fundraiser.goal}, {fundraiser.name} has raised ${fundraiser.total}!</p>
        </div>
        <div className="learn-more">
        </div>
      </>
    )
  }
}