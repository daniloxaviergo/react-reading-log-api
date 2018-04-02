import React, { Component } from 'react'

class ItemName extends Component {
  render() {
    return (
      <div className="col p-0">
        {this.props.name}
      </div>
    )
  }
}

export default ItemName