import React, { Component } from 'react'

import { Card, CardHeader, CardFooter, CardBody } from 'reactstrap'

import { Col, Table } from 'reactstrap'
import { Progress } from 'reactstrap'


class BookStatus extends Component {
  constructor() {
    super()
    this.state = {
      unloaded: true
    }
  }
  getStatus(status) {
    switch(status) {
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
  styleProgess() {
    return {
      height: '2px'
    }
  }
  componentDidMount() {
    let api_root = process.env.REACT_APP_API_ROOT
    fetch(`${api_root}/v1/dashboard/projects.json`, {
      method: 'GET',
      mode: 'cors'
    }).then(response => response.json())
      .then(json => {
        this.setState({ unloaded: false, projects: json.data, stats: json.stats })
    })
    // let json = {"data":[{"id":"4","type":"projects","attributes":{"name":"La Vida Intelectual","started-at":"2017-04-15","progress":97.8,"total-page":227,"page":222,"status":"stopped","logs-count":25,"days-unreading":124}},{"id":"28","type":"projects","attributes":{"name":"Sobrados e Mucambos","started-at":"2017-09-28","progress":89.94,"total-page":815,"page":733,"status":"stopped","logs-count":47,"days-unreading":89}},{"id":"61","type":"projects","attributes":{"name":"A história das origens do governo representativo","started-at":"2018-02-11","progress":73.07,"total-page":802,"page":586,"status":"running","logs-count":31,"days-unreading":6}},{"id":"34","type":"projects","attributes":{"name":"Intimidade Divina","started-at":"2017-10-29","progress":66.41,"total-page":774,"page":514,"status":"stopped","logs-count":74,"days-unreading":32}},{"id":"59","type":"projects","attributes":{"name":"O jogo das contas de vidro","started-at":"2018-02-15","progress":65.35,"total-page":482,"page":315,"status":"stopped","logs-count":25,"days-unreading":43}},{"id":"1","type":"projects","attributes":{"name":"Filocalia","started-at":"2017-02-04","progress":47.91,"total-page":1267,"page":607,"status":"stopped","logs-count":38,"days-unreading":100}},{"id":"14","type":"projects","attributes":{"name":"The Devils Delusion","started-at":"2017-06-03","progress":28.13,"total-page":256,"page":72,"status":"stopped","logs-count":8,"days-unreading":262}},{"id":"2","type":"projects","attributes":{"name":"Sermões Pe. Antônio Vieira","started-at":"2017-01-14","progress":20.0,"total-page":2000,"page":400,"status":"stopped","logs-count":13,"days-unreading":327}},{"id":"63","type":"projects","attributes":{"name":"A Divina Eucaristia Tomo.4","started-at":"2018-03-18","progress":18.51,"total-page":443,"page":82,"status":"sleeping","logs-count":5,"days-unreading":11}},{"id":"11","type":"projects","attributes":{"name":"Destruction of the Christian Tradition","started-at":"2016-05-01","progress":15.47,"total-page":459,"page":71,"status":"stopped","logs-count":3,"days-unreading":300}},{"id":"15","type":"projects","attributes":{"name":"Doutor Fausto","started-at":"2017-07-15","progress":13.55,"total-page":487,"page":66,"status":"stopped","logs-count":6,"days-unreading":258}},{"id":"58","type":"projects","attributes":{"name":"Progresso na vida espiritual","started-at":"2018-02-01","progress":13.06,"total-page":444,"page":58,"status":"stopped","logs-count":5,"days-unreading":21}},{"id":"39","type":"projects","attributes":{"name":"El Último Papa","started-at":"2017-11-29","progress":11.84,"total-page":752,"page":89,"status":"stopped","logs-count":14,"days-unreading":118}},{"id":"51","type":"projects","attributes":{"name":"A vida como ela é","started-at":"2018-01-03","progress":7.46,"total-page":979,"page":73,"status":"stopped","logs-count":4,"days-unreading":68}},{"id":"47","type":"projects","attributes":{"name":"El hombre que amaba a los perros","started-at":"2017-12-29","progress":4.39,"total-page":592,"page":26,"status":"stopped","logs-count":2,"days-unreading":86}},{"id":"9","type":"projects","attributes":{"name":"La Visión normal del arte","started-at":"2017-05-01","progress":0.0,"total-page":26,"page":0,"status":"unstarted","logs-count":0,"days-unreading":333}}],"stats":{"progress_geral":36.224,"total_pages":10805.0,"pages":3914.0}}
    // this.setState({ unloaded: false, projects: json.data, stats: json.stats })
  }
  render() {
    if(this.state.unloaded) { return(<div></div>) }

    return (
      <Col sm="12" lg="6" className="mt-3 mt-lg-0 pl-lg-2">
        <Card>
          <CardHeader className="border-bottom-0"> Status Geral </CardHeader>
          <CardBody className="p-0 pt-0">
            <Table className="mb-0">
              <tbody>
                {
                  this.state.projects.map((project,idx)=> {
                    let pj = project.attributes
                    return(
                      <tr key={idx}>
                        <td className="w-50">
                          {this.getStatus(pj.status)} {pj.name}
                        </td>
                        <td className="pb-1 w-50">
                          <Progress value={pj.progress} style={this.styleProgess()} />
                          <div className="small d-flex flex-row justify-content-between row-hl text-muted align-top">
                            <div className="item-hl text-center">
                              {`${pj.page}/${pj['total-page']}`}
                            </div>
                            <div className="item-hl text-right">
                              {`${pj.progress}%`}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </CardBody>
          <CardFooter>
            <Progress value={this.state.stats.progress_geral}>
              {this.state.stats.progress_geral}
            </Progress>
          </CardFooter>
        </Card>
      </Col>
    )
  }
}

export default BookStatus