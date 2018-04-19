import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'

import { Card, CardHeader, CardBody, Col } from 'reactstrap'

class Faults extends Component {
  constructor() {
    super()

    this.state = {
      unloaded: true,
      option: {}
    }
  }
  componentDidMount() {
    let api_root = process.env.REACT_APP_API_ROOT
    fetch(`${api_root}/v1/dashboard/echart/faults.json`, {
      method: 'GET',
      mode: 'cors'
    }).then(response => response.json())
      .then(json => {
        this.setState({ unloaded: false, option: json.echart })
    })
  }
  render() {
    if(this.state.unloaded) {
      return <div></div>
    }

    return (
      <Col sm="12" lg="6" className="m-0 pr-lg-2">
        <Card>
          <CardHeader>Faults</CardHeader>
          <CardBody className="p-0">
            <ReactEcharts
              option={this.state.option}
              style={{height: '450px', width: '100%'}}
              theme="" />
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default Faults