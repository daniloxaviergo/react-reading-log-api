import React, { Component } from 'react'

class DetailsStartedIn extends Component {
  constructor() {
    super()
    this.style = {
      fontSize: '2em'
    }
  }
  render() {
    return (
      <div className="d-flex border bg-white rounded p-3 px-0 mt-1 mr-1 col-md-3 col-sm-12 align-items-end">
        <div className="col-3 pl-0 mb-2">
          <i className="fa fa-birthday-cake fa-lg pt-2 text-secondary" style={this.style}></i>
        </div>
        <div className="col px-0 text-right">
          <span className="d-block">{this.props.startedIn}</span>
          <small className="text-muted">Started In</small>
        </div>
      </div>
    )
  }
}

export default DetailsStartedIn