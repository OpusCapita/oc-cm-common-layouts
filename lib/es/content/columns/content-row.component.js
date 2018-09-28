var _templateObject = _taggedTemplateLiteralLoose(['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}'], ['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// App imports
import { classPrefix } from '../../constants';

var getTopOffset = function getTopOffset(offset) {
  return typeof offset === 'string' ? offset : offset + 'px';
};
var calculateHeight = function calculateHeight(props) {
  if (!props.stretch) return 'auto';
  return 'calc(100vh - ' + getTopOffset(props.topOffset) + ' - (2 * ' + props.theme.gutterWidth + '))';
};

var Row = styled.div(_templateObject, function (props) {
  return props.theme.gutterWidth;
}, function (props) {
  return props.theme.halfGutterWidth;
}, function (props) {
  return calculateHeight(props);
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
        topOffset = _props.topOffset,
        stretch = _props.stretch,
        id = _props.id,
        className = _props.className;

    return React.createElement(
      Row,
      {
        topOffset: topOffset,
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
  topOffset: 40,
  stretch: false,
  id: '',
  className: ''
};

export default ContentRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsImNsYXNzUHJlZml4IiwiZ2V0VG9wT2Zmc2V0Iiwib2Zmc2V0IiwiY2FsY3VsYXRlSGVpZ2h0IiwicHJvcHMiLCJzdHJldGNoIiwidG9wT2Zmc2V0IiwidGhlbWUiLCJndXR0ZXJXaWR0aCIsIlJvdyIsImRpdiIsImhhbGZHdXR0ZXJXaWR0aCIsIkNvbnRlbnRSb3ciLCJyZW5kZXIiLCJjaGlsZHJlbiIsImlkIiwiY2xhc3NOYW1lIiwiZWxlbWVudCIsImNvbENvbnRhaW5lciIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpIiwidHlwZSIsImNsb25lRWxlbWVudCIsInBhcmVudCIsImlzTGFzdEl0ZW0iLCJsZW5ndGgiLCJjb2x1bW5Db3VudCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5COztBQUVBO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixpQkFBNUI7O0FBRUEsSUFBTUMsZUFBZSxTQUFmQSxZQUFlO0FBQUEsU0FBVyxPQUFPQyxNQUFQLEtBQWtCLFFBQWxCLEdBQTZCQSxNQUE3QixHQUF5Q0EsTUFBekMsT0FBWDtBQUFBLENBQXJCO0FBQ0EsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsTUFBSSxDQUFDQSxNQUFNQyxPQUFYLEVBQW9CLE9BQU8sTUFBUDtBQUNwQiwyQkFBdUJKLGFBQWFHLE1BQU1FLFNBQW5CLENBQXZCLGdCQUErREYsTUFBTUcsS0FBTixDQUFZQyxXQUEzRTtBQUNELENBSEQ7O0FBS0EsSUFBTUMsTUFBTVYsT0FBT1csR0FBYixrQkFDTTtBQUFBLFNBQVNOLE1BQU1HLEtBQU4sQ0FBWUMsV0FBckI7QUFBQSxDQUROLEVBQzBDO0FBQUEsU0FBU0osTUFBTUcsS0FBTixDQUFZSSxlQUFyQjtBQUFBLENBRDFDLEVBSU07QUFBQSxTQUFTUixnQkFBZ0JDLEtBQWhCLENBQVQ7QUFBQSxDQUpOLENBQU47O0lBT01RLFU7Ozs7Ozs7Ozt1QkFDSkMsTSxxQkFBUztBQUFBOztBQUFBLGlCQU9ILEtBQUtULEtBUEY7QUFBQSxRQUVMVSxRQUZLLFVBRUxBLFFBRks7QUFBQSxRQUdMUixTQUhLLFVBR0xBLFNBSEs7QUFBQSxRQUlMRCxPQUpLLFVBSUxBLE9BSks7QUFBQSxRQUtMVSxFQUxLLFVBS0xBLEVBTEs7QUFBQSxRQU1MQyxTQU5LLFVBTUxBLFNBTks7O0FBUVAsV0FDRTtBQUFDLFNBQUQ7QUFBQTtBQUNFLG1CQUFXVixTQURiO0FBRUUsaUJBQVNELE9BRlg7QUFHRSxtQkFBY0wsV0FBZCxhQUFpQ2dCLFNBSG5DO0FBSUUsa0JBQVUsa0JBQUNDLE9BQUQsRUFBYTtBQUNyQixpQkFBS0MsWUFBTCxHQUFvQkQsT0FBcEI7QUFDRCxTQU5IO0FBT0UsWUFBSUY7QUFQTjtBQVNHbEIsWUFBTXNCLFFBQU4sQ0FBZUMsR0FBZixDQUFtQk4sUUFBbkIsRUFBNkIsVUFBQ08sS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDMUM7QUFDQSxZQUFJLE9BQU9ELE1BQU1FLElBQWIsS0FBc0IsUUFBMUIsRUFBb0MsT0FBT0YsS0FBUDs7QUFFcEM7QUFDQSxlQUFPeEIsTUFBTTJCLFlBQU4sQ0FBbUJILEtBQW5CLEVBQTBCO0FBQy9CSSxrQkFBUSxPQUFLUCxZQURrQjtBQUUvQlEsc0JBQVlKLE1BQU1SLFNBQVNhLE1BQVQsR0FBa0IsQ0FBeEIsSUFBNkJiLFNBQVNhLE1BQVQsS0FBb0IsQ0FGOUI7QUFHL0JDLHVCQUFhZCxTQUFTYTtBQUhTLFNBQTFCLENBQVA7QUFLRCxPQVZBO0FBVEgsS0FERjtBQXVCRCxHOzs7RUFoQ3NCOUIsTUFBTWdDLGE7O0FBMkMvQmpCLFdBQVdrQixZQUFYLEdBQTBCO0FBQ3hCaEIsWUFBVWlCLFNBRGM7QUFFeEJ6QixhQUFXLEVBRmE7QUFHeEJELFdBQVMsS0FIZTtBQUl4QlUsTUFBSSxFQUpvQjtBQUt4QkMsYUFBVztBQUxhLENBQTFCOztBQVFBLGVBQWVKLFVBQWYiLCJmaWxlIjoiY29udGVudC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4IH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgZ2V0VG9wT2Zmc2V0ID0gb2Zmc2V0ID0+ICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJyA/IG9mZnNldCA6IGAke29mZnNldH1weGApO1xuY29uc3QgY2FsY3VsYXRlSGVpZ2h0ID0gKHByb3BzKSA9PiB7XG4gIGlmICghcHJvcHMuc3RyZXRjaCkgcmV0dXJuICdhdXRvJztcbiAgcmV0dXJuIGBjYWxjKDEwMHZoIC0gJHtnZXRUb3BPZmZzZXQocHJvcHMudG9wT2Zmc2V0KX0gLSAoMiAqICR7cHJvcHMudGhlbWUuZ3V0dGVyV2lkdGh9KSlgO1xufTtcblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmd1dHRlcldpZHRofSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IGNhbGN1bGF0ZUhlaWdodChwcm9wcyl9O1xufX1gO1xuXG5jbGFzcyBDb250ZW50Um93IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIHRvcE9mZnNldCxcbiAgICAgIHN0cmV0Y2gsXG4gICAgICBpZCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJvd1xuICAgICAgICB0b3BPZmZzZXQ9e3RvcE9mZnNldH1cbiAgICAgICAgc3RyZXRjaD17c3RyZXRjaH1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fcm93ICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIGlubmVyUmVmPXsoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuY29sQ29udGFpbmVyID0gZWxlbWVudDtcbiAgICAgICAgfX1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgPlxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgICAvLyBJZiBpdCdzIGEgcmVndWxhciBET00gbm9kZVxuICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ3N0cmluZycpIHJldHVybiBjaGlsZDtcblxuICAgICAgICAgIC8vIElmIGl0J3MgYSBSZWFjdCBjb21wb25lbnQgKGluIG1vc3QgY2FzZXMgQ29udGVudC5Db2x1bW4pXG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgcGFyZW50OiB0aGlzLmNvbENvbnRhaW5lcixcbiAgICAgICAgICAgIGlzTGFzdEl0ZW06IGkgPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEgJiYgY2hpbGRyZW4ubGVuZ3RoICE9PSAxLFxuICAgICAgICAgICAgY29sdW1uQ291bnQ6IGNoaWxkcmVuLmxlbmd0aCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSl9XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9XG59XG5cbkNvbnRlbnRSb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHRvcE9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBzdHJldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkNvbnRlbnRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICB0b3BPZmZzZXQ6IDQwLFxuICBzdHJldGNoOiBmYWxzZSxcbiAgaWQ6ICcnLFxuICBjbGFzc05hbWU6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFJvdztcbiJdfQ==