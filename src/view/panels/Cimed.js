import React, { Component } from 'react'

export class Cimed extends Component {
  render() {
      return (
        <div className="panels">
          <iframe src="https://app.powerbi.com/view?r=eyJrIjoiMzZhZTNiZDEtMDdlOS00OTRjLWJlZjQtZjY0YmNhNmVlODdiIiwidCI6IjFlNTk2ZmJkLWUzNWQtNDQzNS05ZWI2LTU1NjkwYmNlZGUwNiJ9" 
          width={1345} height={631} frameborder={0} allowFullScreen={true}></iframe>
        </div>
      )
  }
}

export default Cimed
