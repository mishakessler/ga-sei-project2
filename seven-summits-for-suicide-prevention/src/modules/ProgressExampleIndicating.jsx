import React from 'react'
import { Progress } from 'semantic-ui-react'

export default class ProgressExampleIndicating extends React.Component {
  state = { percent: 87 }

  render() {
    return (
      <div>
        <Progress percent={this.state.percent} indicating />
      </div>
    )
  }
}

//This is thanks to SemanticUI.