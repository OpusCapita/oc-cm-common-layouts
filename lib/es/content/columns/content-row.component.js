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
        innerRef: function innerRef(element) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsImNsYXNzUHJlZml4IiwiUm93IiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiaGFsZkd1dHRlcldpZHRoIiwiQ29udGVudFJvdyIsInJlbmRlciIsImNoaWxkcmVuIiwic3RyZXRjaCIsImlkIiwiY2xhc3NOYW1lIiwiZWxlbWVudCIsImNvbENvbnRhaW5lciIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpIiwidHlwZSIsImNsb25lRWxlbWVudCIsInBhcmVudCIsImlzTGFzdEl0ZW0iLCJsZW5ndGgiLCJjb2x1bW5Db3VudCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5COztBQUVBO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixpQkFBNUI7O0FBRUEsSUFBTUMsTUFBTUYsT0FBT0csR0FBYixrQkFDTTtBQUFBLFNBQVNDLE1BQU1DLEtBQU4sQ0FBWUMsV0FBckI7QUFBQSxDQUROLEVBQzBDO0FBQUEsU0FBU0YsTUFBTUMsS0FBTixDQUFZRSxlQUFyQjtBQUFBLENBRDFDLENBQU47O0lBT01DLFU7Ozs7Ozs7Ozt1QkFDSkMsTSxxQkFBUztBQUFBOztBQUFBLGlCQU1ILEtBQUtMLEtBTkY7QUFBQSxRQUVMTSxRQUZLLFVBRUxBLFFBRks7QUFBQSxRQUdMQyxPQUhLLFVBR0xBLE9BSEs7QUFBQSxRQUlMQyxFQUpLLFVBSUxBLEVBSks7QUFBQSxRQUtMQyxTQUxLLFVBS0xBLFNBTEs7O0FBT1AsV0FDRTtBQUFDLFNBQUQ7QUFBQTtBQUNFLGlCQUFTRixPQURYO0FBRUUsbUJBQWNWLFdBQWQsYUFBaUNZLFNBRm5DO0FBR0Usa0JBQVUsa0JBQUNDLE9BQUQsRUFBYTtBQUNyQixpQkFBS0MsWUFBTCxHQUFvQkQsT0FBcEI7QUFDRCxTQUxIO0FBTUUsWUFBSUY7QUFOTjtBQVFHZCxZQUFNa0IsUUFBTixDQUFlQyxHQUFmLENBQW1CUCxRQUFuQixFQUE2QixVQUFDUSxLQUFELEVBQVFDLENBQVIsRUFBYztBQUMxQztBQUNBLFlBQUksT0FBT0QsTUFBTUUsSUFBYixLQUFzQixRQUExQixFQUFvQyxPQUFPRixLQUFQOztBQUVwQztBQUNBLGVBQU9wQixNQUFNdUIsWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFDL0JJLGtCQUFRLE9BQUtQLFlBRGtCO0FBRS9CUSxzQkFBWUosTUFBTVQsU0FBU2MsTUFBVCxHQUFrQixDQUF4QixJQUE2QmQsU0FBU2MsTUFBVCxLQUFvQixDQUY5QjtBQUcvQkMsdUJBQWFmLFNBQVNjO0FBSFMsU0FBMUIsQ0FBUDtBQUtELE9BVkE7QUFSSCxLQURGO0FBc0JELEc7OztFQTlCc0IxQixNQUFNNEIsYTs7QUF3Qy9CbEIsV0FBV21CLFlBQVgsR0FBMEI7QUFDeEJqQixZQUFVa0IsU0FEYztBQUV4QmpCLFdBQVMsS0FGZTtBQUd4QkMsTUFBSSxFQUhvQjtBQUl4QkMsYUFBVztBQUphLENBQTFCOztBQU9BLGVBQWVMLFVBQWYiLCJmaWxlIjoiY29udGVudC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4IH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmd1dHRlcldpZHRofSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59fWA7XG5cbmNsYXNzIENvbnRlbnRSb3cgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgc3RyZXRjaCxcbiAgICAgIGlkLFxuICAgICAgY2xhc3NOYW1lLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8Um93XG4gICAgICAgIHN0cmV0Y2g9e3N0cmV0Y2h9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X3JvdyAke2NsYXNzTmFtZX1gfVxuICAgICAgICBpbm5lclJlZj17KGVsZW1lbnQpID0+IHtcbiAgICAgICAgICB0aGlzLmNvbENvbnRhaW5lciA9IGVsZW1lbnQ7XG4gICAgICAgIH19XG4gICAgICAgIGlkPXtpZH1cbiAgICAgID5cbiAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiB7XG4gICAgICAgICAgLy8gSWYgaXQncyBhIHJlZ3VsYXIgRE9NIG5vZGVcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnR5cGUgPT09ICdzdHJpbmcnKSByZXR1cm4gY2hpbGQ7XG5cbiAgICAgICAgICAvLyBJZiBpdCdzIGEgUmVhY3QgY29tcG9uZW50IChpbiBtb3N0IGNhc2VzIENvbnRlbnQuQ29sdW1uKVxuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgIHBhcmVudDogdGhpcy5jb2xDb250YWluZXIsXG4gICAgICAgICAgICBpc0xhc3RJdGVtOiBpID09PSBjaGlsZHJlbi5sZW5ndGggLSAxICYmIGNoaWxkcmVuLmxlbmd0aCAhPT0gMSxcbiAgICAgICAgICAgIGNvbHVtbkNvdW50OiBjaGlsZHJlbi5sZW5ndGgsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pfVxuICAgICAgPC9Sb3c+XG4gICAgKTtcbiAgfVxufVxuXG5Db250ZW50Um93LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBzdHJldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkNvbnRlbnRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBzdHJldGNoOiBmYWxzZSxcbiAgaWQ6ICcnLFxuICBjbGFzc05hbWU6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFJvdztcbiJdfQ==