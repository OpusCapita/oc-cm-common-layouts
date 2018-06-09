/* eslint-disable no-confusing-arrow */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import { classPrefix, theme } from '../../constants';
import * as Primitive from '../../primitives';

const CardIcon = Primitive.BorderlessButton.extend`
  height: ${theme.card.headerHeight};
  margin-right: 0;
  margin-left: auto;
`;

const CardTitle = Primitive.Subtitle.extend`
  margin-bottom: ${theme.gutterWidth};
`;

const CardHeader = styled.header`
  height: ${theme.card.headerHeight};
  align-items: center;
  display: flex;
`;

const ContentCardHeader = ({ title, icon, onIconClick }) => {
  const cardClassPrefix = `${classPrefix}_card`;
  return (
    <CardHeader className={`${cardClassPrefix}_header`}>
      <CardTitle>{title}</CardTitle>
      {icon && <CardIcon disabled={!onIconClick}>{icon}</CardIcon>}
    </CardHeader>
  );
};

ContentCardHeader.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  onIconClick: PropTypes.func,
};
ContentCardHeader.defaultProps = {
  title: undefined,
  icon: undefined,
  onIconClick: undefined,
};

export default ContentCardHeader;
