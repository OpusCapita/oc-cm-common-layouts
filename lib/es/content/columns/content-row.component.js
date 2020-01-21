function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: ", " ", ";\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; // App imports

import { classPrefix } from '../../constants';
var Row = styled.div(_templateObject(), function (props) {
  return props.theme.gutterWidth;
}, function (props) {
  return props.theme.halfGutterWidth;
});

var ContentRow =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(ContentRow, _React$PureComponent);

  function ContentRow() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = ContentRow.prototype;

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        children = _this$props.children,
        stretch = _this$props.stretch,
        id = _this$props.id,
        className = _this$props.className;
    return React.createElement(Row, {
      stretch: stretch,
      className: classPrefix + "_row " + className,
      ref: function ref(element) {
        _this.colContainer = element;
      },
      id: id
    }, React.Children.map(children, function (child, i) {
      // eslint-disable-line consistent-return
      // Child may be null
      if (child) {
        // If it's a regular DOM node
        if (typeof child.type === 'string') return child; // If it's a React component (in most cases Content.Column)

        return React.cloneElement(child, {
          parent: _this.colContainer,
          isLastItem: i === children.length - 1 && children.length !== 1,
          columnCount: children.length
        });
      }
    }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsImNsYXNzUHJlZml4IiwiUm93IiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiaGFsZkd1dHRlcldpZHRoIiwiQ29udGVudFJvdyIsInJlbmRlciIsImNoaWxkcmVuIiwic3RyZXRjaCIsImlkIiwiY2xhc3NOYW1lIiwiZWxlbWVudCIsImNvbENvbnRhaW5lciIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpIiwidHlwZSIsImNsb25lRWxlbWVudCIsInBhcmVudCIsImlzTGFzdEl0ZW0iLCJsZW5ndGgiLCJjb2x1bW5Db3VudCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQixDLENBRUE7O0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixpQkFBNUI7QUFFQSxJQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csR0FBVixvQkFDRyxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQWhCO0FBQUEsQ0FEUixFQUN1QyxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLGVBQWhCO0FBQUEsQ0FENUMsQ0FBVDs7SUFPTUMsVTs7Ozs7Ozs7Ozs7U0FDSkMsTSxHQUFBLGtCQUFTO0FBQUE7O0FBQUEsc0JBTUgsS0FBS0wsS0FORjtBQUFBLFFBRUxNLFFBRkssZUFFTEEsUUFGSztBQUFBLFFBR0xDLE9BSEssZUFHTEEsT0FISztBQUFBLFFBSUxDLEVBSkssZUFJTEEsRUFKSztBQUFBLFFBS0xDLFNBTEssZUFLTEEsU0FMSztBQU9QLFdBQ0Usb0JBQUMsR0FBRDtBQUNFLE1BQUEsT0FBTyxFQUFFRixPQURYO0FBRUUsTUFBQSxTQUFTLEVBQUtWLFdBQUwsYUFBd0JZLFNBRm5DO0FBR0UsTUFBQSxHQUFHLEVBQUUsYUFBQ0MsT0FBRCxFQUFhO0FBQ2hCLFFBQUEsS0FBSSxDQUFDQyxZQUFMLEdBQW9CRCxPQUFwQjtBQUNELE9BTEg7QUFNRSxNQUFBLEVBQUUsRUFBRUY7QUFOTixPQVFHZCxLQUFLLENBQUNrQixRQUFOLENBQWVDLEdBQWYsQ0FBbUJQLFFBQW5CLEVBQTZCLFVBQUNRLEtBQUQsRUFBUUMsQ0FBUixFQUFjO0FBQUU7QUFDNUM7QUFDQSxVQUFJRCxLQUFKLEVBQVc7QUFDVDtBQUNBLFlBQUksT0FBT0EsS0FBSyxDQUFDRSxJQUFiLEtBQXNCLFFBQTFCLEVBQW9DLE9BQU9GLEtBQVAsQ0FGM0IsQ0FJVDs7QUFDQSxlQUFPcEIsS0FBSyxDQUFDdUIsWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFDL0JJLFVBQUFBLE1BQU0sRUFBRSxLQUFJLENBQUNQLFlBRGtCO0FBRS9CUSxVQUFBQSxVQUFVLEVBQUVKLENBQUMsS0FBS1QsUUFBUSxDQUFDYyxNQUFULEdBQWtCLENBQXhCLElBQTZCZCxRQUFRLENBQUNjLE1BQVQsS0FBb0IsQ0FGOUI7QUFHL0JDLFVBQUFBLFdBQVcsRUFBRWYsUUFBUSxDQUFDYztBQUhTLFNBQTFCLENBQVA7QUFLRDtBQUNGLEtBYkEsQ0FSSCxDQURGO0FBeUJELEc7OztFQWpDc0IxQixLQUFLLENBQUM0QixhOztBQTJDL0JsQixVQUFVLENBQUNtQixZQUFYLEdBQTBCO0FBQ3hCakIsRUFBQUEsUUFBUSxFQUFFa0IsU0FEYztBQUV4QmpCLEVBQUFBLE9BQU8sRUFBRSxLQUZlO0FBR3hCQyxFQUFBQSxFQUFFLEVBQUUsRUFIb0I7QUFJeEJDLEVBQUFBLFNBQVMsRUFBRTtBQUphLENBQTFCO0FBT0EsZUFBZUwsVUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aH0gJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufX1gO1xuXG5jbGFzcyBDb250ZW50Um93IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIHN0cmV0Y2gsXG4gICAgICBpZCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJvd1xuICAgICAgICBzdHJldGNoPXtzdHJldGNofVxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9yb3cgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgcmVmPXsoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuY29sQ29udGFpbmVyID0gZWxlbWVudDtcbiAgICAgICAgfX1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgPlxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICAgICAgICAgIC8vIENoaWxkIG1heSBiZSBudWxsXG4gICAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgICAvLyBJZiBpdCdzIGEgcmVndWxhciBET00gbm9kZVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC50eXBlID09PSAnc3RyaW5nJykgcmV0dXJuIGNoaWxkO1xuXG4gICAgICAgICAgICAvLyBJZiBpdCdzIGEgUmVhY3QgY29tcG9uZW50IChpbiBtb3N0IGNhc2VzIENvbnRlbnQuQ29sdW1uKVxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICBwYXJlbnQ6IHRoaXMuY29sQ29udGFpbmVyLFxuICAgICAgICAgICAgICBpc0xhc3RJdGVtOiBpID09PSBjaGlsZHJlbi5sZW5ndGggLSAxICYmIGNoaWxkcmVuLmxlbmd0aCAhPT0gMSxcbiAgICAgICAgICAgICAgY29sdW1uQ291bnQ6IGNoaWxkcmVuLmxlbmd0aCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9XG59XG5cbkNvbnRlbnRSb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHN0cmV0Y2g6IFByb3BUeXBlcy5ib29sLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuQ29udGVudFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIHN0cmV0Y2g6IGZhbHNlLFxuICBpZDogJycsXG4gIGNsYXNzTmFtZTogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50Um93O1xuIl19