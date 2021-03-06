import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { DefaultPage, LayoutItems } from './layout_nav_items';
import GithubLogo from '../images/logo-github.svg';
import { Header, Primitive } from '../../src';

const NavItem = styled(Link)`
  margin: 0 ${props => props.theme.gutterWidth};
`;

const Title = styled(Primitive.Title)`
  white-space: nowrap;
`;

export default
@withRouter
class Navigation extends React.Component {
  static propTypes = {
    location: PropTypes.object.isRequired, // eslint-disable-line
  };

  getNav = () => LayoutItems.map((layout) => {
    const navKey = layout.get('navKey');
    const navPath = layout.get('navPath');
    const navLabel = layout.get('navLabel');
    return (
      <NavItem
        key={navKey}
        href={navPath}
        to={navPath}
      >
        {navLabel}
      </NavItem>
    );
  });

  render() {
    return (
      <Header.Basic
        left={<Title>{DefaultPage.get('navLabel')}</Title>}
        center={this.getNav()}
        right={<GithubLogo />}
      />
    );
  }
}
