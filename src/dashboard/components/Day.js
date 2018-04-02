import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { dayIndex } from '../actions'

class Day extends Component {
  constructor() {
    super()
    this.styleCard = {
      borderWidth: '0.2em'
    }

    this.mutedStyle = {
      fontSize: '0.75em'
    }

    this.styleSpan = {
      fontSize: '1.25rem'
    }

    this.state = {
      unloaded: true
    }
  }
  componentDidMount() {
    let api_root = process.env.REACT_APP_API_ROOT
    fetch(`${api_root}/v1/dashboard/day.json`, {
      method: 'GET',
      mode: 'cors'
    }).then(response=> response.json())
      .then(json=> {
        this.props.dayIndex(json)
        this.setState({ unloaded: false })
    })
    // let json = {"stats":{"previous_week_pages":310.0,"last_week_pages":131.0,"per_pages":0.423,"max_day":121.0,"mean_day":33.043,"mean_geral":38.423,"per_mean_day":0.977,"spec_mean_day":36.347,"per_spec_mean_day":1.075}}
    // this.props.dayIndex(json)
    // this.setState({ unloaded: false })
  }
  percentage_thumb_mean(per_pages) {
    let thumb_week = <p></p>
    let percentage = ((per_pages - 1) * 100).toFixed(3) || 0

    if(per_pages > 1) {
      thumb_week = <p className="text-success ml-2 mb-0 mt-1" style={this.mutedStyle}>
        <i className="fa fa-thumbs-up fa-lg"></i> {percentage}%
      </p>
    } else {
      thumb_week = <p className="text-danger ml-2 mb-0 mt-1" style={this.mutedStyle}>
        <i className="fa fa-thumbs-down fa-lg"></i> {percentage}%
      </p>
    }

    return thumb_week
  }
  render() {
    if(this.state.unloaded) {
      return <div>Loading...</div>
    }

    let day        = this.props.day
    let thumb_week = this.percentage_thumb_mean(day.per_pages)
    let thumb_mean = this.percentage_thumb_mean(day.per_mean_day)
    let thumb_spec_mean = this.percentage_thumb_mean(day.per_spec_mean_day)

    return (
      <div className="card-deck mb-3 mt-3">
        <div className="card border-top-0 border-bottom-0 border-right-0 border-gray rounded-0" style={this.styleCard}>
          <div className="card-body p-1">
            <p className="text-muted mb-0" style={this.mutedStyle}>Page Week</p>
            <h3 className="d-inline">
              {day.last_week_pages}
              <span style={this.styleSpan} className="d-inline text-muted">
                / {day.previous_week_pages}
              </span>
            </h3>
            {thumb_week}
          </div>
        </div>

        <div className="card border-top-0 border-bottom-0 border-right-0 border-gray rounded-0" style={this.styleCard}>
          <div className="card-body p-1">
            <p className="text-muted mb-0" style={this.mutedStyle}>Day Mean</p>
            <h3 className="d-inline">
              {day.mean_day}
            </h3>
            {thumb_mean}
          </div>
        </div>

        <div className="card border-top-0 border-bottom-0 border-right-0 border-gray rounded-0" style={this.styleCard}>
          <div className="card-body p-1">
            <p className="text-muted mb-0" style={this.mutedStyle}>Speculate Mean</p>
            <h3 className="d-inline">
              {day.spec_mean_day}
            </h3>
            {thumb_spec_mean}
          </div>
        </div>

        <div className="card border-top-0 border-bottom-0 border-right-0 border-gray rounded-0" style={this.styleCard}>
          <div className="card-body p-1">
            <p className="text-muted mb-0" style={this.mutedStyle}>Mean</p>
            <h3>
              {day.mean_geral}
            </h3>
          </div>
        </div>

        <div className="card border-top-0 border-bottom-0 border-right-0 border-gray rounded-0" style={this.styleCard}>
          <div className="card-body p-1">
            <p className="text-muted mb-0" style={this.mutedStyle}>Max Day</p>
            <h3>
              {day.max_day}
            </h3>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ dayIndex }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Day)