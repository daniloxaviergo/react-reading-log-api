import React, { Component } from 'react'

class ItemStatus extends Component {
  getStatus() {
    switch(this.props.status) {
      case 'stopped':
        return <i className="fa fa-circle fa-md text-danger"></i>
      case 'sleeping':
        return <i className="fa fa-circle fa-md text-warning"></i>
      case 'unstarted':
        return <i className="fa fa-circle fa-md text-muted"></i>
      case 'running':
        return <i className="fa fa-circle fa-md text-primary"></i>
      case 'finished':
        return <i className="fa fa-circle fa-md text-success"></i>
      default:
        return <b>!Status</b>
    }
  }
  render() {
    return (
      <div className="pr-2">
        {this.getStatus()}
      </div>
    )
  }
}

export default ItemStatus