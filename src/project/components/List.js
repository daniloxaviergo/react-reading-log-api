import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { ListGroup } from 'reactstrap'
import { index } from '../actions'

import Item from './Item'

class List extends Component {
  componentDidMount() {
    let api_root = process.env.REACT_APP_API_ROOT
    fetch(`${api_root}/v1/projects.json`, {
      method: 'GET',
      mode: 'cors'
    }).then(response=> response.json())
      .then(json=> {
        this.props.index(json)
    })
  }
  render() {
    return (
      <div className="container mt-2">
        <ListGroup>
          {
            this.props.projects.map(project => {
              return(
                <Item project={project.attributes} key={project.id} project_id={project.id} />
              )
            })
          }
        </ListGroup>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ index }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(List)