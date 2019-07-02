import React from 'react'

import { fetchFundraiser } from '../services/fetchFundraiser'
import { fetchWeather } from '../services/fetchWeather'
import { fetchPix } from '../services/fetchPix'

import { Progress, Icon } from 'semantic-ui-react'

export default class Destination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fundraiser: null,
      weather: null,
      pix: null,
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

  render() {
    return (
      <>
        <div className="destination">
          {/* <Hero pix={this.state.pix} /> */}
          {/* <div id="progressBar">
          <Progress percent={fundraiser.percent} indicating />
        </div> */}
          <p>The summit's elevation is {this.props.summit.altitude}.</p>
          <p>{this.state.weather.daily.summary}</p>
          {/* <p>The weather is {this.props.weather.daily.summary}.</p> */}
          <p>The fundraiser by {this.state.fundraiser.organization.name} has raised {this.state.fundraiser.total}.</p>
        </div>
      </>
    )
  }
}