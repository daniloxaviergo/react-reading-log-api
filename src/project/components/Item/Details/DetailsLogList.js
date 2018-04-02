import React, { Component } from 'react'
import { Badge, Button, Collapse } from 'reactstrap'

import LogItem from './DetailsLogItem'

class DetailsLogList extends Component {
  constructor() {
    super()

    this.menuToggle = this.logToggle.bind(this)
    this.state = {
      loaded: false,
      logToggle: false
    }
  }
  logToggle() {
    if(!this.state.loaded) {
      return this.getLogs()
    }
    this.setState({
      logToggle: !this.state.logToggle
    })
  }
  getLogs() {
    let api_root = process.env.REACT_APP_API_ROOT
    fetch(`${api_root}/v1/projects/${this.props.project_id}/logs.json`, {
      method: 'GET',
      mode: 'cors'
    }).then(response=> response.json())
      .then(json=> {
        this.setState({ loaded: true, logs: json.data })
        this.logToggle()
    })
  }
  render() {
    return (
      <div>
        <Button onClick={()=>this.logToggle()} color="primary" outline>
          Timeline <Badge color="primary">{this.props.details['logs-count']}</Badge>
        </Button>

        <Collapse isOpen={this.state.logToggle} className="container">
          {
            (this.state.loaded) ?
              this.state.logs.map((log, idx) => {
                let isLast = idx === (this.state.logs.length - 1)
                let bold   = idx % 2

                return(
                  <LogItem log={log.attributes} bold={bold} key={log.id} isLast={isLast} />
                )
              })
            :
              <div></div>
          }
        </Collapse>
      </div>
    )
  }
}

export default DetailsLogList