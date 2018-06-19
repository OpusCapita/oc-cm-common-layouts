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
    min-width: ${theme.column.minWidth};
    padding: 0 ${theme.halfGutterWidth};
`;

const ContentColumn = ({ children, isLastItem, grow }) => (
  <Column
    grow={grow}
    isLastItem={isLastItem}
    className={`${classPrefix}_column`}
    ref={(elem) => {
      this.column = elem;
    }}
  >
    {React.Children.map(children, (child, i) => {
      // If it's a regular DOM node
      if (typeof child.type === 'string') return child;

      // If it's a React component (e.g. Content.Card)
      return React.cloneElement(child, {
        parent: this.column,
        isLastItem: i === children.length - 1 || children.length === undefined,
      });
    })}
  </Column>
);

ContentColumn.propTypes = {
  children: PropTypes.node,
  isLastItem: PropTypes.bool,
  grow: PropTypes.number,
};

ContentColumn.defaultProps = {
  children: undefined,
  isLastItem: false,
  grow: 1,
};

export default ContentColumn;