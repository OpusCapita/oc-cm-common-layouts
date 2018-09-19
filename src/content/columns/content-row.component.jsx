import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// App imports
import { classPrefix } from '../../constants';

const getTopOffset = offset => (typeof offset === 'string' ? offset : `${offset}px`);
const calculateHeight = (props) => {
  if (!props.stretch) return 'auto';
  return `calc(100vh - ${getTopOffset(props.topOffset)} - (2 * ${props.theme.gutterWidth}))`;
};

const Row = styled.div`
  margin: ${props => props.theme.gutterWidth} ${props => props.theme.halfGutterWidth};
  display: flex;
  flex-wrap: wrap;
  height: ${props => calculateHeight(props)};
}}`;

class ContentRow extends React.PureComponent {
  render() {
    const {
      children,
      topOffset,
      stretch,
      id,
      className,
    } = this.props;
    return (
      <Row
        topOffset={topOffset}
        stretch={stretch}
        className={`${classPrefix}_row ${className}`}
        innerRef={(element) => {
          this.colContainer = element;
        }}
        id={id}
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
    );
  }
}

ContentRow.propTypes = {
  children: PropTypes.node,
  topOffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stretch: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
};

ContentRow.defaultProps = {
  children: undefined,
  topOffset: 40,
  stretch: false,
  id: '',
  className: '',
};

export default ContentRow;
