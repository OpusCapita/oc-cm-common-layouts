var _templateObject = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  width: ', ';\n  margin-right: 0;\n  margin-left: auto;\n  svg {\n    height: ', ';\n    width: ', ';\n  }\n'], ['\n  height: ', ';\n  width: ', ';\n  margin-right: 0;\n  margin-left: auto;\n  svg {\n    height: ', ';\n    width: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n'], ['\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  align-items: center;\n  display: flex;\n  margin-bottom: ', ';\n'], ['\n  height: ', ';\n  align-items: center;\n  display: flex;\n  margin-bottom: ', ';\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FaPlus from 'react-icons/lib/fa/plus';
import FaMinus from 'react-icons/lib/fa/minus';

// App imports
import { classPrefix, theme } from '../../constants';
import * as Primitive from '../../primitives';

var CardIcon = Primitive.BorderlessButton.extend(_templateObject, theme.header.height, theme.header.height, theme.header.button.height, theme.header.button.height);

var CardTitle = Primitive.Subtitle.extend(_templateObject2);

var CardHeader = styled.header(_templateObject3, theme.header.height, theme.gutterWidth);

var ContentCardHeader = function (_React$PureComponent) {
  _inherits(ContentCardHeader, _React$PureComponent);

  function ContentCardHeader() {
    var _temp, _this, _ret;

    _classCallCheck(this, ContentCardHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.getExpandedIcon = function () {
      return _this.props.isExpanded ? React.createElement(FaMinus, null) : React.createElement(FaPlus, null);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ContentCardHeader.prototype.render = function render() {
    var _props = this.props,
        icon = _props.icon,
        title = _props.title,
        onIconClick = _props.onIconClick,
        isExpanded = _props.isExpanded,
        isExpandable = _props.isExpandable;

    var cardClassPrefix = classPrefix + '_card';
    var resolvedIcon = isExpandable ? this.getExpandedIcon(isExpanded) : icon;

    return React.createElement(
      CardHeader,
      { className: cardClassPrefix + '_header' },
      React.createElement(
        CardTitle,
        null,
        title
      ),
      icon && React.createElement(
        CardIcon,
        { onClick: onIconClick, disabled: !onIconClick },
        resolvedIcon
      )
    );
  };

  return ContentCardHeader;
}(React.PureComponent);

ContentCardHeader.defaultProps = {
  title: undefined,
  icon: undefined,
  onIconClick: undefined,
  isExpandable: false
};

export default ContentCardHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiRmFQbHVzIiwiRmFNaW51cyIsImNsYXNzUHJlZml4IiwidGhlbWUiLCJQcmltaXRpdmUiLCJDYXJkSWNvbiIsIkJvcmRlcmxlc3NCdXR0b24iLCJleHRlbmQiLCJoZWFkZXIiLCJoZWlnaHQiLCJidXR0b24iLCJDYXJkVGl0bGUiLCJTdWJ0aXRsZSIsIkNhcmRIZWFkZXIiLCJndXR0ZXJXaWR0aCIsIkNvbnRlbnRDYXJkSGVhZGVyIiwiZ2V0RXhwYW5kZWRJY29uIiwicHJvcHMiLCJpc0V4cGFuZGVkIiwicmVuZGVyIiwiaWNvbiIsInRpdGxlIiwib25JY29uQ2xpY2siLCJpc0V4cGFuZGFibGUiLCJjYXJkQ2xhc3NQcmVmaXgiLCJyZXNvbHZlZEljb24iLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQix5QkFBbkI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLDBCQUFwQjs7QUFFQTtBQUNBLFNBQVNDLFdBQVQsRUFBc0JDLEtBQXRCLFFBQW1DLGlCQUFuQztBQUNBLE9BQU8sS0FBS0MsU0FBWixNQUEyQixrQkFBM0I7O0FBRUEsSUFBTUMsV0FBV0QsVUFBVUUsZ0JBQVYsQ0FBMkJDLE1BQXRDLGtCQUNNSixNQUFNSyxNQUFOLENBQWFDLE1BRG5CLEVBRUtOLE1BQU1LLE1BQU4sQ0FBYUMsTUFGbEIsRUFNUU4sTUFBTUssTUFBTixDQUFhRSxNQUFiLENBQW9CRCxNQU41QixFQU9PTixNQUFNSyxNQUFOLENBQWFFLE1BQWIsQ0FBb0JELE1BUDNCLENBQU47O0FBV0EsSUFBTUUsWUFBWVAsVUFBVVEsUUFBVixDQUFtQkwsTUFBL0Isa0JBQU47O0FBR0EsSUFBTU0sYUFBYWQsT0FBT1MsTUFBcEIsbUJBQ01MLE1BQU1LLE1BQU4sQ0FBYUMsTUFEbkIsRUFJYU4sTUFBTVcsV0FKbkIsQ0FBTjs7SUFRTUMsaUI7Ozs7Ozs7Ozs7OztnS0FDSkMsZSxHQUFrQjtBQUFBLGFBQVEsTUFBS0MsS0FBTCxDQUFXQyxVQUFYLEdBQXdCLG9CQUFDLE9BQUQsT0FBeEIsR0FBc0Msb0JBQUMsTUFBRCxPQUE5QztBQUFBLEs7Ozs4QkFFbEJDLE0scUJBQVM7QUFBQSxpQkFHSCxLQUFLRixLQUhGO0FBQUEsUUFFTEcsSUFGSyxVQUVMQSxJQUZLO0FBQUEsUUFFQ0MsS0FGRCxVQUVDQSxLQUZEO0FBQUEsUUFFUUMsV0FGUixVQUVRQSxXQUZSO0FBQUEsUUFFcUJKLFVBRnJCLFVBRXFCQSxVQUZyQjtBQUFBLFFBRWlDSyxZQUZqQyxVQUVpQ0EsWUFGakM7O0FBSVAsUUFBTUMsa0JBQXFCdEIsV0FBckIsVUFBTjtBQUNBLFFBQU11QixlQUFlRixlQUFlLEtBQUtQLGVBQUwsQ0FBcUJFLFVBQXJCLENBQWYsR0FBa0RFLElBQXZFOztBQUVBLFdBQ0U7QUFBQyxnQkFBRDtBQUFBLFFBQVksV0FBY0ksZUFBZCxZQUFaO0FBQ0U7QUFBQyxpQkFBRDtBQUFBO0FBQVlIO0FBQVosT0FERjtBQUVHRCxjQUNEO0FBQUMsZ0JBQUQ7QUFBQSxVQUFVLFNBQVNFLFdBQW5CLEVBQWdDLFVBQVUsQ0FBQ0EsV0FBM0M7QUFBeURHO0FBQXpEO0FBSEYsS0FERjtBQU9ELEc7OztFQWpCNkI1QixNQUFNNkIsYTs7QUE0QnRDWCxrQkFBa0JZLFlBQWxCLEdBQWlDO0FBQy9CTixTQUFPTyxTQUR3QjtBQUUvQlIsUUFBTVEsU0FGeUI7QUFHL0JOLGVBQWFNLFNBSGtCO0FBSS9CTCxnQkFBYztBQUppQixDQUFqQzs7QUFPQSxlQUFlUixpQkFBZiIsImZpbGUiOiJjb250ZW50LWNhcmQtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRmFQbHVzIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9wbHVzJztcbmltcG9ydCBGYU1pbnVzIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9taW51cyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgUHJpbWl0aXZlIGZyb20gJy4uLy4uL3ByaW1pdGl2ZXMnO1xuXG5jb25zdCBDYXJkSWNvbiA9IFByaW1pdGl2ZS5Cb3JkZXJsZXNzQnV0dG9uLmV4dGVuZGBcbiAgaGVpZ2h0OiAke3RoZW1lLmhlYWRlci5oZWlnaHR9O1xuICB3aWR0aDogJHt0aGVtZS5oZWFkZXIuaGVpZ2h0fTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgc3ZnIHtcbiAgICBoZWlnaHQ6ICR7dGhlbWUuaGVhZGVyLmJ1dHRvbi5oZWlnaHR9O1xuICAgIHdpZHRoOiAke3RoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgfVxuYDtcblxuY29uc3QgQ2FyZFRpdGxlID0gUHJpbWl0aXZlLlN1YnRpdGxlLmV4dGVuZGBcbmA7XG5cbmNvbnN0IENhcmRIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBoZWlnaHQ6ICR7dGhlbWUuaGVhZGVyLmhlaWdodH07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuYDtcblxuXG5jbGFzcyBDb250ZW50Q2FyZEhlYWRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBnZXRFeHBhbmRlZEljb24gPSAoKSA9PiAoKHRoaXMucHJvcHMuaXNFeHBhbmRlZCA/IDxGYU1pbnVzIC8+IDogPEZhUGx1cyAvPikpO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpY29uLCB0aXRsZSwgb25JY29uQ2xpY2ssIGlzRXhwYW5kZWQsIGlzRXhwYW5kYWJsZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjYXJkQ2xhc3NQcmVmaXggPSBgJHtjbGFzc1ByZWZpeH1fY2FyZGA7XG4gICAgY29uc3QgcmVzb2x2ZWRJY29uID0gaXNFeHBhbmRhYmxlID8gdGhpcy5nZXRFeHBhbmRlZEljb24oaXNFeHBhbmRlZCkgOiBpY29uO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT17YCR7Y2FyZENsYXNzUHJlZml4fV9oZWFkZXJgfT5cbiAgICAgICAgPENhcmRUaXRsZT57dGl0bGV9PC9DYXJkVGl0bGU+XG4gICAgICAgIHtpY29uICYmXG4gICAgICAgIDxDYXJkSWNvbiBvbkNsaWNrPXtvbkljb25DbGlja30gZGlzYWJsZWQ9eyFvbkljb25DbGlja30+e3Jlc29sdmVkSWNvbn08L0NhcmRJY29uPn1cbiAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICApO1xuICB9XG59XG5cbkNvbnRlbnRDYXJkSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuICBvbkljb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGlzRXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGlzRXhwYW5kYWJsZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5Db250ZW50Q2FyZEhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiB1bmRlZmluZWQsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgb25JY29uQ2xpY2s6IHVuZGVmaW5lZCxcbiAgaXNFeHBhbmRhYmxlOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRDYXJkSGVhZGVyO1xuIl19