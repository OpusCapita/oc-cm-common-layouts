var _templateObject = _taggedTemplateLiteralLoose(['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}}'], ['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}}']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// App imports
import { classPrefix } from '../../constants';

var Row = styled.div(_templateObject, function (props) {
  return props.theme.gutterWidth;
}, function (props) {
  return props.theme.halfGutterWidth;
});

var ContentRow = function (_React$PureComponent) {
  _inherits(ContentRow, _React$PureComponent);

  function ContentRow() {
    _classCallCheck(this, ContentRow);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  ContentRow.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        stretch = _props.stretch,
        id = _props.id,
        className = _props.className;

    return React.createElement(
      Row,
      {
        stretch: stretch,
        className: classPrefix + '_row ' + className,
        ref: function ref(element) {
          _this2.colContainer = element;
        },
        id: id
      },
      React.Children.map(children, function (child, i) {
        // If it's a regular DOM node
        if (typeof child.type === 'string') return child;

        // If it's a React component (in most cases Content.Column)
        return React.cloneElement(child, {
          parent: _this2.colContainer,
          isLastItem: i === children.length - 1 && children.length !== 1,
          columnCount: children.length
        });
      })
    );
  };

  return ContentRow;
}(React.PureComponent);

ContentRow.defaultProps = {
  children: undefined,
  stretch: false,
  id: '',
  className: ''
};

export default ContentRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsImNsYXNzUHJlZml4IiwiUm93IiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiaGFsZkd1dHRlcldpZHRoIiwiQ29udGVudFJvdyIsInJlbmRlciIsImNoaWxkcmVuIiwic3RyZXRjaCIsImlkIiwiY2xhc3NOYW1lIiwiZWxlbWVudCIsImNvbENvbnRhaW5lciIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpIiwidHlwZSIsImNsb25lRWxlbWVudCIsInBhcmVudCIsImlzTGFzdEl0ZW0iLCJsZW5ndGgiLCJjb2x1bW5Db3VudCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5COztBQUVBO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixpQkFBNUI7O0FBRUEsSUFBTUMsTUFBTUYsT0FBT0csR0FBYixrQkFDTTtBQUFBLFNBQVNDLE1BQU1DLEtBQU4sQ0FBWUMsV0FBckI7QUFBQSxDQUROLEVBQzBDO0FBQUEsU0FBU0YsTUFBTUMsS0FBTixDQUFZRSxlQUFyQjtBQUFBLENBRDFDLENBQU47O0lBT01DLFU7Ozs7Ozs7Ozt1QkFDSkMsTSxxQkFBUztBQUFBOztBQUFBLGlCQU1ILEtBQUtMLEtBTkY7QUFBQSxRQUVMTSxRQUZLLFVBRUxBLFFBRks7QUFBQSxRQUdMQyxPQUhLLFVBR0xBLE9BSEs7QUFBQSxRQUlMQyxFQUpLLFVBSUxBLEVBSks7QUFBQSxRQUtMQyxTQUxLLFVBS0xBLFNBTEs7O0FBT1AsV0FDRTtBQUFDLFNBQUQ7QUFBQTtBQUNFLGlCQUFTRixPQURYO0FBRUUsbUJBQWNWLFdBQWQsYUFBaUNZLFNBRm5DO0FBR0UsYUFBSyxhQUFDQyxPQUFELEVBQWE7QUFDaEIsaUJBQUtDLFlBQUwsR0FBb0JELE9BQXBCO0FBQ0QsU0FMSDtBQU1FLFlBQUlGO0FBTk47QUFRR2QsWUFBTWtCLFFBQU4sQ0FBZUMsR0FBZixDQUFtQlAsUUFBbkIsRUFBNkIsVUFBQ1EsS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDMUM7QUFDQSxZQUFJLE9BQU9ELE1BQU1FLElBQWIsS0FBc0IsUUFBMUIsRUFBb0MsT0FBT0YsS0FBUDs7QUFFcEM7QUFDQSxlQUFPcEIsTUFBTXVCLFlBQU4sQ0FBbUJILEtBQW5CLEVBQTBCO0FBQy9CSSxrQkFBUSxPQUFLUCxZQURrQjtBQUUvQlEsc0JBQVlKLE1BQU1ULFNBQVNjLE1BQVQsR0FBa0IsQ0FBeEIsSUFBNkJkLFNBQVNjLE1BQVQsS0FBb0IsQ0FGOUI7QUFHL0JDLHVCQUFhZixTQUFTYztBQUhTLFNBQTFCLENBQVA7QUFLRCxPQVZBO0FBUkgsS0FERjtBQXNCRCxHOzs7RUE5QnNCMUIsTUFBTTRCLGE7O0FBd0MvQmxCLFdBQVdtQixZQUFYLEdBQTBCO0FBQ3hCakIsWUFBVWtCLFNBRGM7QUFFeEJqQixXQUFTLEtBRmU7QUFHeEJDLE1BQUksRUFIb0I7QUFJeEJDLGFBQVc7QUFKYSxDQUExQjs7QUFPQSxlQUFlTCxVQUFmIiwiZmlsZSI6ImNvbnRlbnQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aH0gJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufX1gO1xuXG5jbGFzcyBDb250ZW50Um93IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIHN0cmV0Y2gsXG4gICAgICBpZCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJvd1xuICAgICAgICBzdHJldGNoPXtzdHJldGNofVxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9yb3cgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgcmVmPXsoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuY29sQ29udGFpbmVyID0gZWxlbWVudDtcbiAgICAgICAgfX1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgPlxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgICAvLyBJZiBpdCdzIGEgcmVndWxhciBET00gbm9kZVxuICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ3N0cmluZycpIHJldHVybiBjaGlsZDtcblxuICAgICAgICAgIC8vIElmIGl0J3MgYSBSZWFjdCBjb21wb25lbnQgKGluIG1vc3QgY2FzZXMgQ29udGVudC5Db2x1bW4pXG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgcGFyZW50OiB0aGlzLmNvbENvbnRhaW5lcixcbiAgICAgICAgICAgIGlzTGFzdEl0ZW06IGkgPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEgJiYgY2hpbGRyZW4ubGVuZ3RoICE9PSAxLFxuICAgICAgICAgICAgY29sdW1uQ291bnQ6IGNoaWxkcmVuLmxlbmd0aCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSl9XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9XG59XG5cbkNvbnRlbnRSb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHN0cmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuQ29udGVudFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIHN0cmV0Y2g6IGZhbHNlLFxuICBpZDogJycsXG4gIGNsYXNzTmFtZTogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50Um93O1xuIl19