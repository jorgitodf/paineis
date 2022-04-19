import React, { Component } from 'react'

export class Golden extends Component {
  render() {
      return (
        <div className="mt-2 mt-md-2">
          <iframe src="https://app.powerbi.com/view?r=eyJrIjoiMGYwYWY0ZmMtYmRhMC00MjlhLWFjYmQtMTNjNmVmZWFjMDVjIiwidCI6IjFlNTk2ZmJkLWUzNWQtNDQzNS05ZWI2LTU1NjkwYmNlZGUwNiJ9" 
          width={1360} height={640} frameborder={0} allowFullScreen={true}></iframe>
        </div>
      )
  }
}

export default Golden
