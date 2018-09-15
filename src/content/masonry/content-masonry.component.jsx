import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMasonry from 'react-masonry-component';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

// App imports
import { classPrefix, theme } from '../../constants';

const getColumnWidth = columnCount => `calc((100% / ${columnCount}) - ${theme.gutterWidth})`;
const getTopOffset = offset => (typeof offset === 'string' ? offset : `${offset}px`);
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

class ContentMasonry extends React.PureComponent {
  getChildProps = (childIndex) => {
    const { children } = this.props;
    const child = children[childIndex];
    const props = {
      parent: this.parent,
      isLastItem: childIndex === children.length - 1 || children.length === undefined,
    };
    /*  If child is a Card, we will extend its onExpand callback  */
    if (child && child.type.displayName === 'ContentCard') {
      props.onExpand = this.extendFn(child.props.onExpand);
    }
    return props;
  };

  /**
   * Extends an original callback function by updating the layout first
   * @param originalCb
   * @returns {function(...[*]=): *}
   */
  extendFn = originalCb => (...args) => {
    this.updateLayout();
    return originalCb.apply(this, args);
  };

  updateLayout = () => {
    this.masonry.initializeMasonry();
    // I think using forceUpdate is justified here
    this.forceUpdate();
  };

  render() {
    const {
      children, columnCountExtraLarge, columnCountLarge, columnCountMedium, columnCountSmall,
      topOffset, className, id,
    } = this.props;

    return (
      <PerfectScrollbar>
        <Masonry
          className={`${classPrefix}_masonry_wrapper ${className}`}
          topOffset={topOffset}
          id={id}
        >
          <ReactMasonry ref={(masonry) => {
            this.masonry = masonry;
          }}
          >
            {React.Children.map(children, (child, i) => (
              <MasonryTile
                xl={columnCountExtraLarge}
                lg={columnCountLarge}
                md={columnCountMedium}
                sm={columnCountSmall}
              >
                {React.cloneElement(child, this.getChildProps(i))}
              </MasonryTile>
            ))}
          </ReactMasonry>
        </Masonry>
      </PerfectScrollbar>
    );
  }
}

ContentMasonry.propTypes = {
  children: PropTypes.node,
  columnCountExtraLarge: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  columnCountLarge: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  columnCountMedium: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  columnCountSmall: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  topOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  id: PropTypes.string,
  className: PropTypes.string,
};
ContentMasonry.defaultProps = {
  children: undefined,
  columnCountExtraLarge: 4,
  columnCountLarge: 3,
  columnCountMedium: 2,
  columnCountSmall: 1,
  topOffset: 40,
  id: '',
  className: '',
};

export default ContentMasonry;
