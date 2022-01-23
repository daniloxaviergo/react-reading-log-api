import React, { Component } from 'react'

import { Card, CardHeader, Fade, TabContent, TabPane,
         Nav, NavItem, NavLink, Col } from 'reactstrap'
import classnames from 'classnames'

import List from './List'

class LastDays extends Component {
  constructor() {
    super()
    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: '1',
      style: {
        display: 'none'
      }
    }
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <Col sm="12" lg="6" className="m-0 pr-lg-2">
        <Card style={this.state.style}>
          <CardHeader>
            <Nav tabs className="card-header-tabs">
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '5' })}
                  onClick={() => { this.toggle('5'); }}>
                  1 day
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggle('1'); }}>
                  7 days
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggle('2'); }}>
                  15 days
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggle('3'); }}>
                  30 days
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '4' })}
                  onClick={() => { this.toggle('4'); }}>
                  90 days
                </NavLink>
              </NavItem>
            </Nav>
          </CardHeader>

          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="5">
              <Fade in={this.state.activeTab === '5'}>
                <List type={'5'} parent={this}/>
              </Fade>
            </TabPane>
            <TabPane tabId="1">
              <Fade in={this.state.activeTab === '1'}>
                <List type={'1'} parent={this}/>
              </Fade>
            </TabPane>
            <TabPane tabId="2">
              <Fade in={this.state.activeTab === '2'}>
                <List type={'2'} />
              </Fade>
            </TabPane>
            <TabPane tabId="3">
              <Fade in={this.state.activeTab === '3'}>
                <List type={'3'} />
              </Fade>
            </TabPane>
            <TabPane tabId="4">
              <Fade in={this.state.activeTab === '4'}>
                <List type={'4'} />
              </Fade>
            </TabPane>
          </TabContent>
        </Card>
      </Col>
    )
  }
}

export default LastDays