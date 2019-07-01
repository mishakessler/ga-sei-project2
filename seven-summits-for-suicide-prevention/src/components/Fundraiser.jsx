import React from 'react'
import { fetchFundraiser } from '../services/fetchFundraiser'
import ProgressExampleIndicating from '../ui-modules/ProgressExampleIndicating'

export default class Fundraiser extends React.Component {
  render() {
    return (
      <div>
        <ProgressExampleIndicating percent={this.props.percent} />
        <p>The fundraiser is at nearly {this.props.percent}% of its original goal!</p>
      </div>
    )
  }
}
