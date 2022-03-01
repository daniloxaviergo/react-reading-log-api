import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react'

import { Card, CardHeader, CardBody } from 'reactstrap'

class TotalWeek extends Component {
  constructor() {
    super()

    this.state = {
      unloaded: true,
      option: {}
    }
  }
  componentDidMount() {
    let api_root = process.env.REACT_APP_API_ROOT
    fetch(`${api_root}/v1/dashboard/echart/last_year_total.json`, {
      method: 'GET',
      mode: 'cors'
    }).then(response => response.json())
      .then(json => {
        this.setState({ unloaded: false, option: json.echart })
    })
    // let json = {"echart":{"tooltip":{"trigger":"axis"},"legend":{"data":[]},"grid":{"left":"3%","right":"4%","bottom":"3%","containLabel":true},"yAxis":{"type":"value"},"xAxis":{"type":"category","boundaryGap":false,"data":["01/07-May-17","08/14-May-17","15/21-May-17","22/28-May-17","29/04-Jun-17","05/11-Jun-17","12/18-Jun-17","19/25-Jun-17","26/02-Jul-17","03/09-Jul-17","10/16-Jul-17","17/23-Jul-17","24/30-Jul-17","31/06-Aug-17","07/13-Aug-17","14/20-Aug-17","21/27-Aug-17","28/03-Sep-17","04/10-Sep-17","11/17-Sep-17","18/24-Sep-17","25/01-Oct-17","02/08-Oct-17","09/15-Oct-17","16/22-Oct-17","23/29-Oct-17","30/05-Nov-17","06/12-Nov-17","13/19-Nov-17","20/26-Nov-17","27/03-Dec-17","04/10-Dec-17","11/17-Dec-17","18/24-Dec-17","25/31-Dec-17","01/07-Jan-18","08/14-Jan-18","15/21-Jan-18","22/28-Jan-18","29/04-Feb-18","05/11-Feb-18","12/18-Feb-18","19/25-Feb-18","26/04-Mar-18","05/11-Mar-18","12/18-Mar-18","19/25-Mar-18","26/01-Apr-18","02/08-Apr-18"]},"series":[{"name":"Total","type":"line","itemStyle":{"normal":{"opacity":0.3}},"markLine":{"data":[{"type":"average","name":""}]},"areaStyle":{"normal":{"opacity":0.3}},"smooth":true,"data":[88.0,116.0,95.0,242.0,149.0,93.0,239.0,243.0,169.0,126.0,183.0,145.0,303.0,263.0,361.0,226.0,222.0,177.0,318.0,249.0,247.0,232.0,289.0,359.0,288.0,353.0,259.0,190.0,184.0,246.0,160.0,252.0,230.0,363.0,425.0,591.0,461.0,462.0,300.0,404.0,438.0,318.0,268.0,267.0,286.0,264.0,264.0,333.0,0]}]}}
    // this.setState({ unloaded: false, option: json.echart })
  }
  render() {
    if(this.state.unloaded) {
      return <div></div>
    }

    return (
      <Card>
        <CardHeader>Last Year Total by Week</CardHeader>
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

export default TotalWeek