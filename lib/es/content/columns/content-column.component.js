var _templateObject = _taggedTemplateLiteralLoose(['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ', ';\n    padding: 0 ', ';\n'], ['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ', ';\n    padding: 0 ', ';\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// App imports
import { classPrefix } from '../../constants';

var Column = styled.div(_templateObject, function (props) {
  return props.grow;
}, function (props) {
  return props.theme.column.minWidth;
}, function (props) {
  return props.theme.halfGutterWidth;
});

var ContentColumn = function (_React$PureComponent) {
  _inherits(ContentColumn, _React$PureComponent);

  function ContentColumn() {
    _classCallCheck(this, ContentColumn);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  ContentColumn.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        isLastItem = _props.isLastItem,
        grow = _props.grow,
        id = _props.id,
        className = _props.className;

    return React.createElement(
      Column,
      {
        grow: grow,
        isLastItem: isLastItem,
        className: classPrefix + '_column ' + className,
        ref: function ref(elem) {
          _this2.column = elem;
        },
        id: id
      },
      React.Children.map(children, function (child, i) {
        // If it's a regular DOM node
        if (typeof child.type === 'string') return child;

        // If it's a React component (e.g. Content.Card)
        return React.cloneElement(child, {
          parent: _this2.column,
          isLastItem: i === children.length - 1 || children.length === undefined
        });
      })
    );
  };

  return ContentColumn;
}(React.PureComponent);

ContentColumn.propTypes = {
  children: PropTypes.node,
  isLastItem: PropTypes.bool,
  grow: PropTypes.number,
  id: PropTypes.string,
  className: PropTypes.string
};

ContentColumn.defaultProps = {
  children: undefined,
  isLastItem: false,
  grow: 1,
  id: '',
  className: ''
};

export default ContentColumn;