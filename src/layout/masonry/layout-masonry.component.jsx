/* eslint-disable no-confusing-arrow */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMasonry from 'react-masonry-component';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

// App imports
import { classPrefix, theme } from '../constants';

const getColumnWidth = columnCount => `calc((100% / ${columnCount}) - ${theme.gutterWidth})`;
const getTopOffset = offset => typeof offset === 'string' ? offset : `${offset}px`;
const calculateHeight = props => `calc(100vh - ${getTopOffset(props.topOffset)} - (3 * ${theme.gutterWidth}))`;

const Masonry = styled.div`
  width:100vw;    
  height: ${props => calculateHeight(props)};
  padding-right: ${theme.gutterWidth};
  padding-top: ${theme.gutterWidth};
`;

const MasonryTile = styled.div`
  margin-left: ${theme.gutterWidth};
  /* Small only */
  @media screen and (max-width: 39.9375em) { width: ${props => getColumnWidth(props.sm)}; }
  
  /* Medium and up */
  @media screen and (min-width: 40em)  { width: ${props => getColumnWidth(props.lg)}; }
  
  /* Medium only */
  @media screen and (min-width: 40em) and (max-width: 63.9375em) { width: ${props => getColumnWidth(props.md)}; }
  
  /* Large and up */
  @media screen and (min-width: 64em) { width: ${props => getColumnWidth(props.xl)}; }
  
  /* Large only */
  @media screen and (min-width: 64em) and (max-width: 74.9375em) { width: ${props => getColumnWidth(props.lg)}; }
`;

class LayoutMasonry extends React.PureComponent {
  render() {
    const {
      children, columnCountExtraLarge, columnCountLarge, columnCountMedium, columnCountSmall,
      topOffset,
    } = this.props;
    return (
      <PerfectScrollbar>
        <Masonry className={`${classPrefix}_masonry_wrapper`} topOffset={topOffset}>
          <ReactMasonry>
            {React.Children.map(children, (child, i) => (
              <MasonryTile
                xl={columnCountExtraLarge}
                lg={columnCountLarge}
                md={columnCountMedium}
                sm={columnCountSmall}
              >
                {React.cloneElement(child, {
                  parent: this.parent,
                  isLastItem: i === children.length - 1 || children.length === undefined,
                })}
              </MasonryTile>
            ))}
          </ReactMasonry>
        </Masonry>
      </PerfectScrollbar>
    );
  }
}

LayoutMasonry.propTypes = {
  children: PropTypes.node,
  columnCountExtraLarge: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  columnCountLarge: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  columnCountMedium: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  columnCountSmall: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  topOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
LayoutMasonry.defaultProps = {
  children: undefined,
  columnCountExtraLarge: 4,
  columnCountLarge: 3,
  columnCountMedium: 2,
  columnCountSmall: 1,
  topOffset: 40,
};

export default LayoutMasonry;
