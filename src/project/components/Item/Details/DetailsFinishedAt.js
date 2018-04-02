import React, { Component } from 'react'

class DetailsFinishedAt extends Component {
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
          <i className="fa fa-archive fa-lg pt-2 text-secondary" style={this.style}></i>
        </div>
        <div className="col px-0 text-right">
          <span className="d-block">{this.props.finishedAt}</span>
          <small className="text-muted">Finished At</small>
        </div>
      </div>
    )
  }
}

export default DetailsFinishedAt