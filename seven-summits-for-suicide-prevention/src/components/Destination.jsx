import React from 'react'

import { fetchFundraiser } from '../services/fetchFundraiser'
import { fetchWeather } from '../services/fetchWeather'
// import { fetchPix } from '../services/fetchPix'

import { Progress, Icon, Button, Modal } from 'semantic-ui-react'

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
          <div className="blurbs-container">
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
          <h2>We're {fundraiser && fundraiser.name}!</h2>
          <h3>Want to lend us a hand?</h3>
          <p><em>Fundraiser Info Placeholder</em></p>
          <div className="fundraiser-progress">
            <h3>Fundraiser Progress:</h3>
            <Progress percent={Math.round((fundraiser.total / fundraiser.goal) * 100)} indicating inverted />
            <p>With an original goal of ${fundraiser && fundraiser.goal}, {fundraiser.name} has raised ${fundraiser.total}, nearly <b>{Math.round((fundraiser.total / fundraiser.goal) * 100)} percent</b>!</p>
            <Modal trigger={<Button>View Video</Button>} basic size='small'>
              <Modal.Content>
                <iframe id="video-modal" width="700" height="400" src="https://www.youtube.com/embed/qMkOxHhQhys" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Modal.Content>
            </Modal>
          </div>
          <div className="fundraiser-recipient">
            <h3>Fundraiser Recipient:</h3>
            <p>{this.props.summit.recipient}</p>
          </div>
          <div className="learn-more">
            <a href="https://www.fundraise.com/seven-summits-for-suicide-prevention/" target="_blank">Learn More About Our Fundraiser</a>
          </div>
        </div>
      </>
    )
  }
}