import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import BackArrow from 'react-icons/lib/fa/arrow-left';
// App imports
import { classPrefix, theme } from '../constants';
import BorderlessButton from '../primitives/layout-primitive-borderless-button.component';
import LayoutHeader from './layout-header.component';

const BackButton = BorderlessButton.extend`
  height: ${theme.header.button.height};
  width: ${theme.header.button.height};
`;

const onBackButtonClick = () => {

};

const getLeftContent = (showBack, backUrl) => {
  if (!showBack) return null;
  return (
    <BackButton>
      <BackArrow />
    </BackButton>
  );
};

const LayoutNavigationHeader = ({ showBack, backUrl }) => {
  const contentCenter = null;
  const contentRight = null;

  return (
    <LayoutHeader
      className={`${classPrefix}_navigation-header`}
      left={getLeftContent(showBack, backUrl)}
      center={contentCenter}
      right={contentRight}
    />
  );
};

LayoutNavigationHeader.propTypes = {
  showBack: PropTypes.bool,
  backUrl: PropTypes.string,
};

LayoutNavigationHeader.defaultProps = {
  showBack: true,
  backUrl: null,
};

export default LayoutNavigationHeader;
