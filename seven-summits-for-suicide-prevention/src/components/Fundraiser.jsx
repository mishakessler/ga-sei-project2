import React from 'react'
import { fetchFundraiser } from '../services/fetchFundraiser'
import ProgressExampleIndicating from '../ui-modules/ProgressExampleIndicating'

export default class Fundraiser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percent: 89,
    }
  }

  render() {
    return (
      <div>
        <ProgressExampleIndicating percent={this.state.percent} />
      </div>
    )
  }
}
