import React from 'react'
import ReactDom from 'react-dom'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import DashboardMain from './dashboard/components/Main'
import ProjectMain from './project/components/Main'

// bootstrap
import './assets/bootstrap/dist/css/bootstrap.css'
import './assets/font-awesome/css/font-awesome.css'

ReactDom.render(
  <BrowserRouter>
    <Switch>
      <Route exact={true} path='/' component={DashboardMain} />
      <Route path='/projects' component={ProjectMain} />
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
)
