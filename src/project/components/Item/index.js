import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ListGroupItem, Collapse } from 'reactstrap'

import Name          from './ItemName'
import Status        from './ItemStatus'
import Progress      from './ItemProgress'
import DaysUnreading from './ItemDaysUnreading'

import Details from './Details'

class Item extends Component {
  constructor() {
    super()

    this.menuToggle = this.menuToggle.bind(this)
    this.accToggle  = this.accToggle.bind(this)
    this.onEntered  = this.onEntered.bind(this)
    this.state = {
      menuToggle: false,
      acc: false,
      details: {},
      loaded: false
    }
  }
  menuToggle() {
    this.setState({
      menuToggle: !this.state.menuToggle
    })
  }
  accToggle() {
    this.setState({
      acc: !this.state.acc
    })
  }
  stopPropagation(e) {
    e.stopPropagation();
  }
  onEntered() {
    if (!this.state.loaded) {
      let api_root = process.env.REACT_APP_API_ROOT
      fetch(`${api_root}/v1/projects/${this.props.project_id}.json`, {
        method: 'GET',
        mode: 'cors'
      }).then(response=> response.json())
        .then(json=> {
          this.setState({ loaded: true, details: json.data.attributes })
      })
    }
  }
  componentDidMount() {
    if(this.props.project.id === 1) {
      this.accToggle()
    }
  }
  render() {
    let project = this.props.project

    return (
      <ListGroupItem onClick={this.accToggle} className="p-0 border-0">
        <div className="p-2 bg-light border border-bottom-0 bg-light rounded-0 rounded-top rounded-right rounded-left">
          <div className="d-flex flex-row">
            <Status status={project['status']} />

            <Name name={project['name']} />
            <DaysUnreading daysUnreading={project['days-unreading']} />
            <Progress page={project['page']}
                      total_page={project['total-page']}
                      progress={project['progress']} />

            <div onClick={this.stopPropagation} className="ml-auto">
              <Dropdown isOpen={this.state.menuToggle} toggle={this.menuToggle} direction="left">
                <DropdownToggle tag="span">
                  <div className="btn btn-outline-secondary border-0 btn-sm">
                    <i className="fa fa-bars fa-lg"></i>
                  </div>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem className="pl-3">
                    <i className="fa fa-edit fa-sm pr-1"></i> Editar
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem className="pl-3">
                    <i className="fa fa-calendar-check-o fa-sm pr-1"></i> Nova Leitura
                  </DropdownItem>
                  <DropdownItem className="pl-3">
                    <i className="fa fa-line-chart fa-sm pr-1"></i> Visão Geral
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>

        <Collapse isOpen={this.state.acc} onClick={this.stopPropagation} onEntered={this.onEntered}>
          {
            this.state.loaded ?
              <Details project_id={this.props.project_id} details={this.state.details} />
            :
              <div className="border bg-light mb-3 p-2 rounded-bottom">
                <h5>Loading...</h5>
              </div>
          }
        </Collapse>
      </ListGroupItem>
    )
  }
}

function mapStateToProps(state) {
  return state
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ show }, dispatch)
// }

export default connect(mapStateToProps, null)(Item)
