var _templateObject = _taggedTemplateLiteralLoose(['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ', ';\n    padding: 0 ', ';\n'], ['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ', ';\n    padding: 0 ', ';\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// App imports
import { classPrefix, theme } from '../../constants';

var Column = styled.div(_templateObject, function (props) {
  return props.grow;
}, theme.column.minWidth, theme.halfGutterWidth);

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

ContentColumn.defaultProps = {
  children: undefined,
  isLastItem: false,
  grow: 1,
  id: '',
  className: ''
};

export default ContentColumn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1jb2x1bW4uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsImNsYXNzUHJlZml4IiwidGhlbWUiLCJDb2x1bW4iLCJkaXYiLCJwcm9wcyIsImdyb3ciLCJjb2x1bW4iLCJtaW5XaWR0aCIsImhhbGZHdXR0ZXJXaWR0aCIsIkNvbnRlbnRDb2x1bW4iLCJyZW5kZXIiLCJjaGlsZHJlbiIsImlzTGFzdEl0ZW0iLCJpZCIsImNsYXNzTmFtZSIsImVsZW0iLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaSIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJwYXJlbnQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjs7QUFFQTtBQUNBLFNBQVNDLFdBQVQsRUFBc0JDLEtBQXRCLFFBQW1DLGlCQUFuQzs7QUFFQSxJQUFNQyxTQUFTSCxPQUFPSSxHQUFoQixrQkFDVztBQUFBLFNBQVNDLE1BQU1DLElBQWY7QUFBQSxDQURYLEVBT1dKLE1BQU1LLE1BQU4sQ0FBYUMsUUFQeEIsRUFRV04sTUFBTU8sZUFSakIsQ0FBTjs7SUFXTUMsYTs7Ozs7Ozs7OzBCQUNKQyxNLHFCQUFTO0FBQUE7O0FBQUEsaUJBT0gsS0FBS04sS0FQRjtBQUFBLFFBRUxPLFFBRkssVUFFTEEsUUFGSztBQUFBLFFBR0xDLFVBSEssVUFHTEEsVUFISztBQUFBLFFBSUxQLElBSkssVUFJTEEsSUFKSztBQUFBLFFBS0xRLEVBTEssVUFLTEEsRUFMSztBQUFBLFFBTUxDLFNBTkssVUFNTEEsU0FOSzs7QUFRUCxXQUNFO0FBQUMsWUFBRDtBQUFBO0FBQ0UsY0FBTVQsSUFEUjtBQUVFLG9CQUFZTyxVQUZkO0FBR0UsbUJBQWNaLFdBQWQsZ0JBQW9DYyxTQUh0QztBQUlFLGFBQUssYUFBQ0MsSUFBRCxFQUFVO0FBQ2IsaUJBQUtULE1BQUwsR0FBY1MsSUFBZDtBQUNELFNBTkg7QUFPRSxZQUFJRjtBQVBOO0FBU0doQixZQUFNbUIsUUFBTixDQUFlQyxHQUFmLENBQW1CTixRQUFuQixFQUE2QixVQUFDTyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUMxQztBQUNBLFlBQUksT0FBT0QsTUFBTUUsSUFBYixLQUFzQixRQUExQixFQUFvQyxPQUFPRixLQUFQOztBQUVwQztBQUNBLGVBQU9yQixNQUFNd0IsWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFDL0JJLGtCQUFRLE9BQUtoQixNQURrQjtBQUUvQk0sc0JBQVlPLE1BQU1SLFNBQVNZLE1BQVQsR0FBa0IsQ0FBeEIsSUFBNkJaLFNBQVNZLE1BQVQsS0FBb0JDO0FBRjlCLFNBQTFCLENBQVA7QUFJRCxPQVRBO0FBVEgsS0FERjtBQXNCRCxHOzs7RUEvQnlCM0IsTUFBTTRCLGE7O0FBMENsQ2hCLGNBQWNpQixZQUFkLEdBQTZCO0FBQzNCZixZQUFVYSxTQURpQjtBQUUzQlosY0FBWSxLQUZlO0FBRzNCUCxRQUFNLENBSHFCO0FBSTNCUSxNQUFJLEVBSnVCO0FBSzNCQyxhQUFXO0FBTGdCLENBQTdCOztBQVFBLGVBQWVMLGFBQWYiLCJmaWxlIjoiY29udGVudC1jb2x1bW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4LCB0aGVtZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IENvbHVtbiA9IHN0eWxlZC5kaXZgXG4gICAgZmxleC1ncm93OiAke3Byb3BzID0+IHByb3BzLmdyb3d9O1xuICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtaW4td2lkdGg6ICR7dGhlbWUuY29sdW1uLm1pbldpZHRofTtcbiAgICBwYWRkaW5nOiAwICR7dGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbmA7XG5cbmNsYXNzIENvbnRlbnRDb2x1bW4gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgaXNMYXN0SXRlbSxcbiAgICAgIGdyb3csXG4gICAgICBpZCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPENvbHVtblxuICAgICAgICBncm93PXtncm93fVxuICAgICAgICBpc0xhc3RJdGVtPXtpc0xhc3RJdGVtfVxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9jb2x1bW4gJHtjbGFzc05hbWV9YH1cbiAgICAgICAgcmVmPXsoZWxlbSkgPT4ge1xuICAgICAgICAgIHRoaXMuY29sdW1uID0gZWxlbTtcbiAgICAgICAgfX1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgPlxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgICAvLyBJZiBpdCdzIGEgcmVndWxhciBET00gbm9kZVxuICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ3N0cmluZycpIHJldHVybiBjaGlsZDtcblxuICAgICAgICAgIC8vIElmIGl0J3MgYSBSZWFjdCBjb21wb25lbnQgKGUuZy4gQ29udGVudC5DYXJkKVxuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgIHBhcmVudDogdGhpcy5jb2x1bW4sXG4gICAgICAgICAgICBpc0xhc3RJdGVtOiBpID09PSBjaGlsZHJlbi5sZW5ndGggLSAxIHx8IGNoaWxkcmVuLmxlbmd0aCA9PT0gdW5kZWZpbmVkLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KX1cbiAgICAgIDwvQ29sdW1uPlxuICAgICk7XG4gIH1cbn1cblxuQ29udGVudENvbHVtbi5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaXNMYXN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXG4gIGdyb3c6IFByb3BUeXBlcy5udW1iZXIsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5Db250ZW50Q29sdW1uLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgaXNMYXN0SXRlbTogZmFsc2UsXG4gIGdyb3c6IDEsXG4gIGlkOiAnJyxcbiAgY2xhc3NOYW1lOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRDb2x1bW47XG4iXX0=