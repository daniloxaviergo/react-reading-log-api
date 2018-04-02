import React, { Component } from 'react'

class DetailsLogItem extends Component {
  render() {
    let log    = this.props.log
    let isLast = this.props.isLast
    let bold   = this.props.bold

    let date = new Date(log.data)
    let day  = ("0" + date.getDate()).slice(-2)

    const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return (
      <div className="row">
        <div className={ `col-11 p-0 ${isLast ? '': 'border-bottom'}` }>
          <div className="m-2 p-2 border bg-white rounded">
            <p className="mb-0" style={{minHeight: '24px'}}>
              { log['note'] }
            </p>
            <div className="d-flex">
              {
                bold ?
                  <small className="text-muted">{log['start-page']} - <b>{log['end-page']}</b></small>
                :
                  <small className="text-muted"><b>{log['start-page']}</b> - {log['end-page']}</small>
              }
              
              <small className="ml-auto text-right text-muted">{date.toTimeString().split(' ')[0]}</small>
            </div>
          </div>
        </div>
        <div className={ `p-0 col ${isLast ? '': 'border-bottom'}` }>
          <div className="d-flex mt-1 p-2 flex-column" style={{borderRadius: '2em'}}>
            <span className="align-self-center font-weight-bold" style={{fontSize: '1.3em'}}>
              { day }
            </span>
            <span className="align-self-center text-muted" style={{fontSize: '0.8em'}}>
              { MONTH_NAMES[date.getMonth()] }
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailsLogItem