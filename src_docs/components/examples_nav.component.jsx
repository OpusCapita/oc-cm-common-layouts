import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { DefaultPage, LayoutItems } from './layout_nav_items';
import GithubLogo from '../images/logo-github.svg';

export default class Navigation extends React.PureComponent {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href={DefaultPage.get('navPath')}> {DefaultPage.get('navLabel')}</a>
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
                  <NavItem key={`${navKey}_${navLabel}`} eventKey={navKey} href={navPath}>
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
