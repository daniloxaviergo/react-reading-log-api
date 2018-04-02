import React, { Component } from 'react'

import FinishedAt from './DetailsFinishedAt'
import StartedIn  from './DetailsStartedIn'
import MedianDay  from './DetailsMedianDay'
import LogList    from './DetailsLogList'

class Details extends Component {
  render() {
    let details    = this.props.details
    let project_id = this.props.project_id

    return (
      <div className="border bg-light mb-3 p-2 rounded-bottom">
        <div className="d-flex justify-content-between flex-wrap mb-2">
          <StartedIn startedIn={details['started-at']} />
          <MedianDay medianDay={details['median-day']} />          
          <FinishedAt finishedAt={details['finished-at']} />
        </div>

        <LogList project_id={project_id} details={details} />
      </div>
    )
  }
}

export default Details