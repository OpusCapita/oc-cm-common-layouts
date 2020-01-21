function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  height: ", ";\n  align-items: center;\n  display: flex;\n  margin-bottom: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  height: ", ";\n  width: ", ";\n  margin-right: 0;\n  margin-left: auto;\n  svg {\n    height: ", ";\n    width: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa'; // App imports

import { classPrefix } from '../../constants';
import * as Primitive from '../../primitives';
var CardIcon = styled(Primitive.BorderlessButton)(_templateObject(), function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.header.button.height;
}, function (props) {
  return props.theme.header.button.height;
});
var CardTitle = styled(Primitive.Subtitle)(_templateObject2());
var CardHeader = styled.header(_templateObject3(), function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.gutterWidth;
});

var ContentCardHeader =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(ContentCardHeader, _React$PureComponent);

  function ContentCardHeader() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "getExpandedIcon", function () {
      return _this.props.isExpanded ? React.createElement(FaMinus, null) : React.createElement(FaPlus, null);
    });

    return _this;
  }

  var _proto = ContentCardHeader.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        icon = _this$props.icon,
        title = _this$props.title,
        onIconClick = _this$props.onIconClick,
        isExpanded = _this$props.isExpanded,
        isExpandable = _this$props.isExpandable,
        loading = _this$props.loading;
    var cardClassPrefix = classPrefix + "_card";
    var resolvedIcon = isExpandable ? this.getExpandedIcon(isExpanded) : icon;
    return React.createElement(CardHeader, {
      className: cardClassPrefix + "_header"
    }, React.createElement(CardTitle, null, title), loading && React.createElement(Primitive.Spinner, null), resolvedIcon && React.createElement(CardIcon, {
      onClick: onIconClick,
      disabled: !onIconClick
    }, resolvedIcon));
  };

  return ContentCardHeader;
}(React.PureComponent);

ContentCardHeader.defaultProps = {
  title: undefined,
  icon: undefined,
  onIconClick: undefined,
  isExpandable: false,
  loading: false
};
export default ContentCardHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiRmFQbHVzIiwiRmFNaW51cyIsImNsYXNzUHJlZml4IiwiUHJpbWl0aXZlIiwiQ2FyZEljb24iLCJCb3JkZXJsZXNzQnV0dG9uIiwicHJvcHMiLCJ0aGVtZSIsImhlYWRlciIsImhlaWdodCIsImJ1dHRvbiIsIkNhcmRUaXRsZSIsIlN1YnRpdGxlIiwiQ2FyZEhlYWRlciIsImd1dHRlcldpZHRoIiwiQ29udGVudENhcmRIZWFkZXIiLCJpc0V4cGFuZGVkIiwicmVuZGVyIiwiaWNvbiIsInRpdGxlIiwib25JY29uQ2xpY2siLCJpc0V4cGFuZGFibGUiLCJsb2FkaW5nIiwiY2FyZENsYXNzUHJlZml4IiwicmVzb2x2ZWRJY29uIiwiZ2V0RXhwYW5kZWRJY29uIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsU0FBU0MsTUFBVCxFQUFpQkMsT0FBakIsUUFBZ0MsZ0JBQWhDLEMsQ0FFQTs7QUFDQSxTQUFTQyxXQUFULFFBQTRCLGlCQUE1QjtBQUNBLE9BQU8sS0FBS0MsU0FBWixNQUEyQixrQkFBM0I7QUFFQSxJQUFNQyxRQUFRLEdBQUdMLE1BQU0sQ0FBQ0ksU0FBUyxDQUFDRSxnQkFBWCxDQUFULG9CQUNGLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsTUFBdkI7QUFBQSxDQURILEVBRUgsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxNQUF2QjtBQUFBLENBRkYsRUFNQSxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJFLE1BQW5CLENBQTBCRCxNQUE5QjtBQUFBLENBTkwsRUFPRCxVQUFBSCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJFLE1BQW5CLENBQTBCRCxNQUE5QjtBQUFBLENBUEosQ0FBZDtBQVdBLElBQU1FLFNBQVMsR0FBR1osTUFBTSxDQUFDSSxTQUFTLENBQUNTLFFBQVgsQ0FBVCxvQkFBZjtBQUlBLElBQU1DLFVBQVUsR0FBR2QsTUFBTSxDQUFDUyxNQUFWLHFCQUNKLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsTUFBdkI7QUFBQSxDQURELEVBSUcsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTyxXQUFoQjtBQUFBLENBSlIsQ0FBaEI7O0lBUU1DLGlCOzs7Ozs7Ozs7Ozs7OztzRUFDYztBQUFBLGFBQVEsTUFBS1QsS0FBTCxDQUFXVSxVQUFYLEdBQXdCLG9CQUFDLE9BQUQsT0FBeEIsR0FBc0Msb0JBQUMsTUFBRCxPQUE5QztBQUFBLEs7Ozs7Ozs7U0FFbEJDLE0sR0FBQSxrQkFBUztBQUFBLHNCQUdILEtBQUtYLEtBSEY7QUFBQSxRQUVMWSxJQUZLLGVBRUxBLElBRks7QUFBQSxRQUVDQyxLQUZELGVBRUNBLEtBRkQ7QUFBQSxRQUVRQyxXQUZSLGVBRVFBLFdBRlI7QUFBQSxRQUVxQkosVUFGckIsZUFFcUJBLFVBRnJCO0FBQUEsUUFFaUNLLFlBRmpDLGVBRWlDQSxZQUZqQztBQUFBLFFBRStDQyxPQUYvQyxlQUUrQ0EsT0FGL0M7QUFJUCxRQUFNQyxlQUFlLEdBQU1yQixXQUFOLFVBQXJCO0FBQ0EsUUFBTXNCLFlBQVksR0FBR0gsWUFBWSxHQUFHLEtBQUtJLGVBQUwsQ0FBcUJULFVBQXJCLENBQUgsR0FBc0NFLElBQXZFO0FBRUEsV0FDRSxvQkFBQyxVQUFEO0FBQVksTUFBQSxTQUFTLEVBQUtLLGVBQUw7QUFBckIsT0FDRSxvQkFBQyxTQUFELFFBQVlKLEtBQVosQ0FERixFQUVHRyxPQUFPLElBQUksb0JBQUMsU0FBRCxDQUFXLE9BQVgsT0FGZCxFQUdHRSxZQUFZLElBQ1Ysb0JBQUMsUUFBRDtBQUFVLE1BQUEsT0FBTyxFQUFFSixXQUFuQjtBQUFnQyxNQUFBLFFBQVEsRUFBRSxDQUFDQTtBQUEzQyxPQUF5REksWUFBekQsQ0FKTCxDQURGO0FBUUQsRzs7O0VBbEI2QjNCLEtBQUssQ0FBQzZCLGE7O0FBOEJ0Q1gsaUJBQWlCLENBQUNZLFlBQWxCLEdBQWlDO0FBQy9CUixFQUFBQSxLQUFLLEVBQUVTLFNBRHdCO0FBRS9CVixFQUFBQSxJQUFJLEVBQUVVLFNBRnlCO0FBRy9CUixFQUFBQSxXQUFXLEVBQUVRLFNBSGtCO0FBSS9CUCxFQUFBQSxZQUFZLEVBQUUsS0FKaUI7QUFLL0JDLEVBQUFBLE9BQU8sRUFBRTtBQUxzQixDQUFqQztBQVFBLGVBQWVQLGlCQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IEZhUGx1cywgRmFNaW51cyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4IH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIFByaW1pdGl2ZSBmcm9tICcuLi8uLi9wcmltaXRpdmVzJztcblxuY29uc3QgQ2FyZEljb24gPSBzdHlsZWQoUHJpbWl0aXZlLkJvcmRlcmxlc3NCdXR0b24pYFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmhlaWdodH07XG4gIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5oZWlnaHR9O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBzdmcge1xuICAgIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmJ1dHRvbi5oZWlnaHR9O1xuICB9XG5gO1xuXG5jb25zdCBDYXJkVGl0bGUgPSBzdHlsZWQoUHJpbWl0aXZlLlN1YnRpdGxlKWBcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBDYXJkSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5oZWlnaHR9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmd1dHRlcldpZHRofTtcbmA7XG5cblxuY2xhc3MgQ29udGVudENhcmRIZWFkZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgZ2V0RXhwYW5kZWRJY29uID0gKCkgPT4gKCh0aGlzLnByb3BzLmlzRXhwYW5kZWQgPyA8RmFNaW51cyAvPiA6IDxGYVBsdXMgLz4pKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWNvbiwgdGl0bGUsIG9uSWNvbkNsaWNrLCBpc0V4cGFuZGVkLCBpc0V4cGFuZGFibGUsIGxvYWRpbmcsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2FyZENsYXNzUHJlZml4ID0gYCR7Y2xhc3NQcmVmaXh9X2NhcmRgO1xuICAgIGNvbnN0IHJlc29sdmVkSWNvbiA9IGlzRXhwYW5kYWJsZSA/IHRoaXMuZ2V0RXhwYW5kZWRJY29uKGlzRXhwYW5kZWQpIDogaWNvbjtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9e2Ake2NhcmRDbGFzc1ByZWZpeH1faGVhZGVyYH0+XG4gICAgICAgIDxDYXJkVGl0bGU+e3RpdGxlfTwvQ2FyZFRpdGxlPlxuICAgICAgICB7bG9hZGluZyAmJiA8UHJpbWl0aXZlLlNwaW5uZXIgLz59XG4gICAgICAgIHtyZXNvbHZlZEljb25cbiAgICAgICAgJiYgPENhcmRJY29uIG9uQ2xpY2s9e29uSWNvbkNsaWNrfSBkaXNhYmxlZD17IW9uSWNvbkNsaWNrfT57cmVzb2x2ZWRJY29ufTwvQ2FyZEljb24+fVxuICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICk7XG4gIH1cbn1cblxuQ29udGVudENhcmRIZWFkZXIucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gIG9uSWNvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgaXNFeHBhbmRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaXNFeHBhbmRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5Db250ZW50Q2FyZEhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiB1bmRlZmluZWQsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgb25JY29uQ2xpY2s6IHVuZGVmaW5lZCxcbiAgaXNFeHBhbmRhYmxlOiBmYWxzZSxcbiAgbG9hZGluZzogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50Q2FyZEhlYWRlcjtcbiJdfQ==