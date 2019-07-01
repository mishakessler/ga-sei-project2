import React from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <div id="copyright">
          <p>Designed by Misha Kessler.</p>
        </div>
        <div id="credit">
          <p>Seven Summits for Suicide Prevention is powered by the <a href="#">Fundraise.com API</a>, the <a href="#">DarkSky API</a>, and the <a href="#">Pixabay API</a>, with UI modules from the <a href="#">Semantic React UI library</a>.</p>
        </div>
      </>
    )
  }
}