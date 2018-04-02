import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'

import { Card, CardHeader, CardBody } from 'reactstrap'

class SpeculateEfective extends Component {
  constructor() {
    super()

    this.state = {
      unloaded: true,
      option: {}
    }
  }
  componentDidMount() {
    let api_root = process.env.REACT_APP_API_ROOT
    fetch(`${api_root}/v1/dashboard/echart/speculate_actual.json`, {
      method: 'GET',
      mode: 'cors'
    }).then(response => response.json())
      .then(json => {
        this.setState({ unloaded: false, option: json.echart })
    })
    // let json = {"echart":{"tooltip":{"trigger":"axis"},"grid":{"left":"3%","right":"4%","bottom":"3%","containLabel":true},"yAxis":{"type":"value"},"xAxis":{"type":"category","boundaryGap":false,"data":["15-03 (Thu)","16-03 (Fri)","17-03 (Sat)","18-03 (Sun)","19-03 (Mon)","20-03 (Tue)","21-03 (Wed)","22-03 (Thu)","23-03 (Fri)","24-03 (Sat)","25-03 (Sun)","26-03 (Mon)","27-03 (Tue)","28-03 (Wed)","29-03 (Thu)"]},"series":[{"name":"Pages","type":"line","smooth":true,"itemStyle":{"normal":{"areaStyle":{"type":"default"}}},"data":[0,0,56.0,89.0,42.0,39.0,52.0,32.0,0,75.0,24.0,0,0,0,0],"markPoint":{"data":[{"type":"max","name":""},{"type":"min","name":""}]},"markLine":{"lineStyle":{"normal":{"color":"#333"}},"data":[{"name":"pages_per_day","yAxis":10}]}},{"name":"Mean","type":"line","smooth":true,"itemStyle":{"normal":{"areaStyle":{"type":"default"}}},"data":[36.374,35.934,55.741,56.196,41.034,36.133,33.717,36.347,35.153,56.31,55.562,40.162,35.364,33.0,35.574]}]}}
    // this.setState({ unloaded: false, option: json.echart })
  }
  render() {
    if(this.state.unloaded) {
      return <div></div>
    }

    return (
      <Card>
        <CardHeader>Speculate x Actual</CardHeader>
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

export default SpeculateEfective