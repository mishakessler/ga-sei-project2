import React from 'react';
import { Icon } from 'semantic-ui-react'

export default class Contact extends React.Component {
  render() {
    return (
      <div id="contactPage">
        <div className="hero" id="page-hero">
          <h2>Contact Us</h2>
        </div>
        <div className="scroll-link">
          <a href="#scroll-anchor">
            <Icon color='white' name='angle double down' size='big' />
          </a>
        </div>
        <div id="scroll-anchor">
        </div>
        <div className="summit-info" id="page-info">

        </div>
      </div>
    )
  }
}