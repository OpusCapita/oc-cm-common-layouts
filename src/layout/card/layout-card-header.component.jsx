/* eslint-disable no-confusing-arrow */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import { classPrefix, theme } from '../constants';
import BorderlessButton from '../primitives/layout-primitive-borderless-button.component';

const CardHeader = styled.header`
  height: ${theme.card.headerHeight};
  align-items:center;
  display: flex;
`;

const CardIcon = BorderlessButton.extend`
  height: ${theme.card.headerHeight};
  margin-right: 0;
  margin-left: auto;
`;

const LayoutCardHeader = ({ title, icon, onIconClick }) => {
  const cardClassPrefix = `${classPrefix}_card`;
  return (
    <CardHeader className={`${cardClassPrefix}_header`}>
      <h4>{title}</h4>
      {icon && <CardIcon disabled={!onIconClick}>{icon}</CardIcon>}
    </CardHeader>
  );
};

LayoutCardHeader.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  onIconClick: PropTypes.func,
};
LayoutCardHeader.defaultProps = {
  title: undefined,
  icon: undefined,
  onIconClick: undefined,
};

export default LayoutCardHeader;
