import React from 'react'
import { fetchWeather } from '../services/fetchWeather'
import { icon } from 'semantic-ui-react'

export default class Weather extends React.Component {
  render() {
    return (
      <div>
        <fetchWeather
          latitude={this.props.latitude}
          longitude={this.props.longitude}
        />
      </div>
    )
  }
}
