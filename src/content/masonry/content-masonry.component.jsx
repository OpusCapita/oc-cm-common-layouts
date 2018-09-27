import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMasonry from 'react-masonry-component';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

// App imports
import { classPrefix } from '../../constants';

const getColumnWidth = (columnCount, theme) => `calc((100% / ${columnCount}) - ${theme.gutterWidth})`;
const getTopOffset = offset => (typeof offset === 'string' ? offset : `${offset}px`);
const calculateHeight = props => `calc(100vh - ${getTopOffset(props.topOffset)} - (3 * ${props.theme.gutterWidth}))`;

const Masonry = styled.div`
  width:100vw;    
  height: ${props => calculateHeight(props)};
  padding-right: ${props => props.theme.gutterWidth};
  padding-top: ${props => props.theme.gutterWidth};
`;

const MasonryTile = styled.div`
  margin-left: ${props => props.theme.gutterWidth};
  /* Small only */
  @media screen and (max-width: ${props => props.theme.screenSizes.medium}) { 
    width: ${props => getColumnWidth(props.sm, props.theme)};
   }
  
  /* Medium and up */
  @media screen and (min-width: ${props => props.theme.screenSizes.medium})  { 
    width: ${props => getColumnWidth(props.lg, props.theme)}; 
  }
  
  /* Medium only */
  @media screen and (min-width: ${props => props.theme.screenSizes.medium}) and (max-width: ${props => props.theme.screenSizes.large}) { 
    width: ${props => getColumnWidth(props.md, props.theme)}; 
  }
  
  /* Large and up */
  @media screen and (${props => props.theme.screenSizes.large}) { 
    width: ${props => getColumnWidth(props.xl, props.theme)}; 
  }
  
  /* Large only */
  @media screen and (min-width: ${props => props.theme.screenSizes.large}) and (max-width: ${props => props.theme.screenSizes.xLarge}) {
    width: ${props => getColumnWidth(props.lg, props.theme)};
  }
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
