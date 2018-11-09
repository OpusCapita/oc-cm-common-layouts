import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// App imports
import { classPrefix } from '../../constants';

const Row = styled.div`
  margin: ${props => props.theme.gutterWidth} ${props => props.theme.halfGutterWidth};
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}}`;

class ContentRow extends React.PureComponent {
  render() {
    const {
      children,
      stretch,
      id,
      className,
    } = this.props;
    return (
      <Row
        stretch={stretch}
        className={`${classPrefix}_row ${className}`}
        ref={(element) => {
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
  stretch: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
};

ContentRow.defaultProps = {
  children: undefined,
  stretch: false,
  id: '',
  className: '',
};

export default ContentRow;
