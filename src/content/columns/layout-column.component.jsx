/* eslint-disable no-confusing-arrow */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// App imports
import { classPrefix, theme } from '../../constants';

const Column = styled.div`
    flex-grow: ${props => props.grow};
    flex-shrink: 1;
    flex-basis: 0;
    max-height: 100%;
    flex-wrap: wrap;
    display: flex;
    margin-right: ${props => props.isLastItem ? 0 : theme.gutterWidth} 
`;

const LayoutColumn = ({ children, isLastItem, grow }) => (
  <Column
    grow={grow}
    isLastItem={isLastItem}
    className={`${classPrefix}_column`}
    ref={(elem) => {
      this.column = elem;
    }}
  >
    {!!children.length && React.Children.map(children, (child, i) => (
      React.cloneElement(child, {
        parent: this.column,
        isLastItem: i === children.length - 1 || children.length === undefined,
      })
    ))}
  </Column>
);

LayoutColumn.propTypes = {
  children: PropTypes.node,
  isLastItem: PropTypes.bool,
  grow: PropTypes.number,
};

LayoutColumn.defaultProps = {
  children: undefined,
  isLastItem: false,
  grow: 1,
};

export default LayoutColumn;
