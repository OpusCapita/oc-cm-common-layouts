import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import { classPrefix, theme } from '../../constants';
import CardHeader from './content-card-header.component';
import * as Primitive from '../../primitives';

const Card = Primitive.Block.extend`
  display: flex;
  margin-bottom: ${props => (props.isLastItem ? 0 : theme.gutterWidth)}; 
  flex: ${props => (props.isLastItem ? '2 1 auto' : '0 0 auto')};
  width: 100%;
  height: ${props => (props.height ? props.height : 'auto')};
  flex-direction: column;
  `;

const CardContent = styled.div`
  flex: 1 1 calc(100% - ${theme.card.headerHeight}); 
  min-height: calc(100% - ${theme.card.headerHeight});
  display: flex;
  flex-direction: column;
  `;

const ContentCard = ({
  children,
  isLastItem,
  title,
  height,
  icon,
  iconClickCallback,
  className,
  id,
}) => {
  const cardClassPrefix = `${classPrefix}_card`;

  return (
    <Card
      height={height}
      className={`${cardClassPrefix} ${className}`}
      isLastItem={isLastItem}
      id={id}
    >
      {title && <CardHeader title={title} icon={icon} iconClickCallback={iconClickCallback} />}
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
  iconClickCallback: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.string,
};
ContentCard.defaultProps = {
  children: undefined,
  isLastItem: false,
  title: undefined,
  height: undefined,
  icon: undefined,
  iconClickCallback: null,
  id: '',
  className: '',
};

export default ContentCard;
