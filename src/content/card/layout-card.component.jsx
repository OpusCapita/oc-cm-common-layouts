/* eslint-disable no-confusing-arrow */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import { classPrefix, theme } from '../../constants';
import CardHeader from './layout-card-header.component';

const Card = styled.div`
  padding: ${theme.gutterWidth};
  background: ${theme.card.backgroundColor};
  margin-bottom: ${props => props.isLastItem ? 0 : theme.gutterWidth}; 
  flex: ${props => props.isLastItem ? '2 1 auto' : '0 0 auto'};
  width: 100%;
  height: ${props => props.height ? props.height : 'auto'};
  `;


const LayoutCard = ({ children, isLastItem, title, height, icon }) => {
  const cardClassPrefix = `${classPrefix}_card`;
  return (
    <Card
      height={height}
      className={`${cardClassPrefix}`}
      isLastItem={isLastItem}
    >
      {title && <CardHeader title={title} icon={icon} />}
      <div className={`${cardClassPrefix}_content`}>{children}</div>
    </Card>
  );
};

LayoutCard.propTypes = {
  children: PropTypes.node,
  isLastItem: PropTypes.bool,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  height: PropTypes.string,
  icon: PropTypes.node,
};
LayoutCard.defaultProps = {
  children: undefined,
  isLastItem: false,
  title: undefined,
  height: undefined,
  icon: undefined,
};

export default LayoutCard;
