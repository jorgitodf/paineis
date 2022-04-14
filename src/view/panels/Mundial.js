import React, { Component } from 'react'

export class Mundial extends Component {
  render() {
      return (
        <div className="mt-2 mt-md-2">
          <iframe src="https://app.powerbi.com/view?r=eyJrIjoiYTBjYjQ0ZGUtYzk5YS00YzA5LWFhYmMtMDViZTQxYzhhNGY2IiwidCI6IjFlNTk2ZmJkLWUzNWQtNDQzNS05ZWI2LTU1NjkwYmNlZGUwNiJ9" 
          width={1360} height={640} frameborder={0} allowFullScreen={true}></iframe>
        </div>
      )
  }
}

export default Mundial
