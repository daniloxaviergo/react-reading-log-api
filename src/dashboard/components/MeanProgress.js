import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'

import { Card, CardHeader, CardBody } from 'reactstrap'

class MeanProgress extends Component {
  constructor() {
    super()

    this.state = {
      unloaded: true,
      option: {}
    }
  }
  componentDidMount() {
    let api_root = process.env.REACT_APP_API_ROOT
    fetch(`${api_root}/v1/dashboard/echart/mean_progress.json`, {
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
      <Card>
        <CardHeader>Mean Progress - 30 days</CardHeader>
        <CardBody className="p-0">
          <ReactEcharts
            option={this.state.option}
            style={{height: '450px', width: '100%'}}
            theme="" />
        </CardBody>
      </Card>
    )
  }
}

export default MeanProgress