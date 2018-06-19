import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

// App imports
import { classPrefix, theme } from '../../constants';

const getTopOffset = offset => (typeof offset === 'string' ? offset : `${offset}px`);
const calculateHeight = (props) => {
  if (!props.stretch) return 'auto';
  return `calc(100vh - ${getTopOffset(props.topOffset)} - (2 * ${theme.gutterWidth}))`;
};

const Row = styled.div`
  margin: ${theme.gutterWidth} ${theme.halfGutterWidth};
  display: flex;
  flex-wrap: wrap;
  height: ${props => calculateHeight(props)};
}}`;

const ContentRow = ({ children, topOffset, stretch }) => (
  <PerfectScrollbar>
    <Row
      topOffset={topOffset}
      stretch={stretch}
      className={`${classPrefix}_row`}
      innerRef={(element) => {
        this.colContainer = element;
      }}
    >
      {React.Children.map(children, (child, i) => {
        // If it's a regular DOM node
        if (typeof child.type === 'string') return child;

        // If it's a React component (in most cases Content.Column)
        return React.cloneElement(child, {
          parent: this.colContainer,
          isLastItem: i === children.length - 1 && children.length !== 1,
          columnCount: children.length,
        });
      })}
    </Row>
  </PerfectScrollbar>
);

ContentRow.propTypes = {
  children: PropTypes.node,
  topOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stretch: PropTypes.bool,
};

ContentRow.defaultProps = {
  children: undefined,
  topOffset: 40,
  stretch: false,
};

export default ContentRow;
