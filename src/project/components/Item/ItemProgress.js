import React, { Component } from 'react'

import { Progress } from 'reactstrap'

class ItemProgress extends Component {
  styleProgess() {
    return {
      height: '2px'
    }
  }
  render() {
    return (
      <div className="col-3 pt-2 px-2">
        <Progress value={this.props.progress} style={this.styleProgess()} />
        <div className="small d-flex flex-row justify-content-between row-hl text-muted align-top">
          <div className="item-hl text-center">
            {`${this.props.page}/${this.props.total_page}`}
          </div>
          <div className="item-hl text-right">
            {`${this.props.progress}%`}
          </div>
        </div>
      </div>
    )
  }
}

export default ItemProgress