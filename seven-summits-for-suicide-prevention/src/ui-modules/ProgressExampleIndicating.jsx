import React from 'react'
import { Progress } from 'semantic-ui-react'

export default class ProgressExampleIndicating extends React.Component {
  render() {
    return (
      <div>
        <Progress percent={this.props.percent} indicating />
      </div>
    )
  }
}

//This is thanks to SemanticUI.