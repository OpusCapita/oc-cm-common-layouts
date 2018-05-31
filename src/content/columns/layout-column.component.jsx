/* eslint-disable no-confusing-arrow */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// App imports
import { classPrefix, theme } from '../../constants';

const Column = styled.div`
    flex: 1 1;
    width: 50%;
    max-height: 100%;
    flex-wrap: wrap;
    display: flex;
    margin-right: ${props => props.isLastItem ? 0 : theme.gutterWidth} 
`;

const LayoutColumn = ({ children, isLastItem }) => (
  <Column
    theme={theme}
    isLastItem={isLastItem}
    className={`${classPrefix}_column`}
    ref={(elem) => {
      this.parent = elem;
    }}
  >
    {!!children.length && React.Children.map(children, (child, i) => (
      React.cloneElement(child, {
        parent: this.parent,
        isLastItem: i === children.length - 1 || children.length === undefined,
      })
    ))}
  </Column>
);


LayoutColumn.propTypes = {
  children: PropTypes.node,
  isLastItem: PropTypes.bool,
};
LayoutColumn.defaultProps = {
  children: undefined,
  isLastItem: false,
};

export default LayoutColumn;
