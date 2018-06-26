import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import { classPrefix, theme } from '../../constants';
import CardHeader from './content-card-header.component';

const Card = styled.div`
  display: flex;
  padding: ${theme.gutterWidth};
  background: ${theme.card.backgroundColor};
  margin-bottom: ${props => (props.isLastItem ? 0 : theme.gutterWidth)}; 
  flex: ${props => (props.isLastItem ? '2 1 auto' : '0 0 auto')};
  width: 100%;
  height: ${props => (props.height ? props.height : 'auto')};
  flex-direction: column;
  `;

const CardContent = styled.div`
  flex: 1 1 auto;
  `;

const ContentCard = ({
  children,
  isLastItem,
  title,
  height,
  icon,
}) => {
  const cardClassPrefix = `${classPrefix}_card`;
  return (
    <Card
      height={height}
      className={`${cardClassPrefix}`}
      isLastItem={isLastItem}
    >
      {title && <CardHeader title={title} icon={icon} />}
      <CardContent className={`${cardClassPrefix}_content`}>{children}</CardContent>
    </Card>
  );
};

ContentCard.propTypes = {
  children: PropTypes.node,
  isLastItem: PropTypes.bool,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  height: PropTypes.string,
  icon: PropTypes.node,
};
ContentCard.defaultProps = {
  children: undefined,
  isLastItem: false,
  title: undefined,
  height: undefined,
  icon: undefined,
};

export default ContentCard;
