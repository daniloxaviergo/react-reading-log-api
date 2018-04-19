import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'

import { Card, CardHeader, CardBody, Col } from 'reactstrap'

class FaultsWeekDay extends Component {
  constructor() {
    super()

    this.state = {
      unloaded: true,
      option: {}
    }
  }
  componentDidMount() {
    let api_root = process.env.REACT_APP_API_ROOT
    fetch(`${api_root}/v1/dashboard/echart/faults_week_day.json`, {
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
      <Col sm="12" lg="6" className="mt-3 mt-lg-0 pl-lg-2">
        <Card>
          <CardHeader>Faults by Week Day - Last 6 months</CardHeader>
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

export default FaultsWeekDay