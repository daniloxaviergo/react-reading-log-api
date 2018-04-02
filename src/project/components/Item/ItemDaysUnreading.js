import React, { Component } from 'react'
import { Badge } from 'reactstrap';

class ItemDaysUnreading extends Component {
  render() {
    return (
      <div className="col-1 p-0 mr-1 align-self-center" style={{maxWidth: '1.9em'}}>
        <Badge color="light" className="float-right">
          {this.props.daysUnreading}
        </Badge>
      </div>
    )
  }
}

export default ItemDaysUnreading