import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div className="sticky-top">
        <Navbar className="navbar-expand-sm navbar-dark bg-dark mb-0">
          <NavbarBrand href="/" className="mr-auto">Bookmarks</NavbarBrand>

          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar className="justify-content-end">
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects">Projects</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu