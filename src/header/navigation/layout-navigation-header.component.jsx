import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import BackButton from './layout-navigation-header-back.component';
// App imports
import { classPrefix } from '../../constants';
import LayoutHeader from '../layout-header.component';


class LayoutNavigationHeader extends React.PureComponent {


  getRightContent = () => {
    return <div />
  };
  getCenterContent = () => {
    return <div />

  };

  getLeftContent = () => {

  };

  render() {
    const { showBack, backUrl } = this.props;
    return (
      <LayoutHeader
        className={`${classPrefix}_navigation-header`}
        left={showBack ? <BackButton backUrl={backUrl} /> : null}
        center={this.getCenterContent()}
        right={this.getRightContent()}
      />
    );
  }
}

LayoutNavigationHeader.propTypes = {
  showBack: PropTypes.bool,
  backUrl: PropTypes.string,
};

LayoutNavigationHeader.defaultProps = {
  showBack: true,
  backUrl: null,
};

export default LayoutNavigationHeader;
