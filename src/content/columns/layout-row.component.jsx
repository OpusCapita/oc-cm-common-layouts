/* eslint-disable no-confusing-arrow */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

// App imports
import { classPrefix, theme } from '../../constants';

const getTopOffset = offset => typeof offset === 'string' ? offset : `${offset}px`;
const calculateHeight = (props) => {
  if (!props.stretch) return 'auto';
  return `calc(100vh - ${getTopOffset(props.topOffset)} - (2 * ${theme.gutterWidth}))`;
};

const Row = styled.div`
  margin: ${theme.gutterWidth};
  display: flex;
  flex-wrap: wrap;
  height: ${props => calculateHeight(props)};
}}`;

const LayoutRow = ({ children, topOffset, stretch }) => (
  <PerfectScrollbar>
    <Row
      topOffset={topOffset}
      stretch={stretch}
      className={`${classPrefix}_row`}
      innerRef={(element) => {
        this.colContainer = element;
      }}
    >
      {React.Children.map(children, (child, i) => React.cloneElement(child, {
        parent: this.colContainer,
        isLastItem: i === children.length - 1 && children.length !== 1,
      }))}
    </Row>
  </PerfectScrollbar>
);

LayoutRow.propTypes = {
  children: PropTypes.node,
  topOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stretch: PropTypes.bool,
};

LayoutRow.defaultProps = {
  children: undefined,
  topOffset: 40,
  stretch: false,
};

export default LayoutRow;