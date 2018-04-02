import React, { Component } from 'react'

import { CardFooter, ListGroup, ListGroupItem, Badge } from 'reactstrap'

class List extends Component {
  constructor() {
    super()

    this.state = {
      unloaded: true,
      list: []
    }
  }
  componentDidMount() {
    let { type } = this.props
    let api_root = process.env.REACT_APP_API_ROOT
    fetch(`${api_root}/v1/dashboard/last_days.json?type=${type}`, {
      method: 'GET',
      mode: 'cors'
    }).then(response => response.json())
      .then(json => {
        this.setState({ unloaded: false, logs: json.logs, stats: json.stats })

        if(this.props.parent) {
          this.props.parent.setState({ style: { display: 'block' } })
        }
    })
    // let json = {"logs":[{"project_name":"A história das origens do governo representativo","project_id":61,"read_pages":48.0},{"project_name":"Sobrados e Mucambos","project_id":28,"read_pages":12.0},{"project_name":"Intimidade Divina","project_id":34,"read_pages":11.0},{"project_name":"A Divina Eucaristia Tomo.4","project_id":63,"read_pages":38.0},{"project_name":"O jogo das contas de vidro","project_id":59,"read_pages":22.0}],"stats":{"count_pages":131.0,"speculate_pages":50}}
    // this.setState({ unloaded: false, logs: json.logs, stats: json.stats })
  }
  render() {
    if(this.state.unloaded) { return(<div>Loading...</div>) }

    return(
      <div>
        <ListGroup>
          {
            this.state.logs.map((log,idx)=>{
              return(
                <ListGroupItem key={idx} className="d-flex border-0">
                  <span>{log.project_name}</span>
                  <Badge color="light" pill className="ml-auto align-self-center">
                    {log.read_pages}
                  </Badge>
                </ListGroupItem>
              )
            })
          }
        </ListGroup>
        <CardFooter className="d-flex" style={{fontSize: '0.8rem'}}>
          <span className="text-muted ml-auto align-self-center">
            {`${this.state.stats.speculate_pages} `} - <b>{this.state.stats.count_pages}</b>
          </span>
        </CardFooter>
      </div>
    )
  }
}

export default List