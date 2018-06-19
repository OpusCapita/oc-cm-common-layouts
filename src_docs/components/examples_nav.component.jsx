import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { DefaultPage, LayoutItems } from './layout_nav_items';
import GithubLogo from '../images/logo-github.svg';

@withRouter
export default class Navigation extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired, // eslint-disable-line
  }

  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            {DefaultPage.get('navLabel')}
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {
              LayoutItems.map((layout) => {
                const navKey = layout.get('navKey');
                const navPath = layout.get('navPath');
                const navLabel = layout.get('navLabel');
                return (
                  <NavItem
                    key={navKey}
                    componentClass={Link}
                    eventKey={navKey}
                    href={navPath}
                    to={navPath}
                    active={this.props.location.pathname === navPath}
                  >
                    { navLabel }
                  </NavItem>
                );
              })
            }
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={100} href="https://github.com/OpusCapita/oc-cm-common-layouts">
              <GithubLogo />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
