var _templateObject = _taggedTemplateLiteralLoose(['\n  animation: spin 2s linear infinite;\n  font-size: 20px;\n  margin-right: 0;\n  margin-left: auto;\n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n   100% { transform: rotate(360deg); }\n  }\n'], ['\n  animation: spin 2s linear infinite;\n  font-size: 20px;\n  margin-right: 0;\n  margin-left: auto;\n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n   100% { transform: rotate(360deg); }\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  width: ', ';\n  margin-right: 0;\n  margin-left: auto;\n  svg {\n    height: ', ';\n    width: ', ';\n  }\n'], ['\n  height: ', ';\n  width: ', ';\n  margin-right: 0;\n  margin-left: auto;\n  svg {\n    height: ', ';\n    width: ', ';\n  }\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  width: 100%;\n'], ['\n  width: 100%;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  align-items: center;\n  display: flex;\n  margin-bottom: ', ';\n'], ['\n  height: ', ';\n  align-items: center;\n  display: flex;\n  margin-bottom: ', ';\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FaPlus from 'react-icons/lib/fa/plus';
import FaMinus from 'react-icons/lib/fa/minus';
import FaSpinner from 'react-icons/lib/fa/spinner';

// App imports
import { classPrefix } from '../../constants';
import * as Primitive from '../../primitives';

var Spinner = styled(FaSpinner)(_templateObject);
var CardIcon = styled(Primitive.BorderlessButton)(_templateObject2, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.header.button.height;
}, function (props) {
  return props.theme.header.button.height;
});

var CardTitle = styled(Primitive.Subtitle)(_templateObject3);

var CardHeader = styled.header(_templateObject4, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.gutterWidth;
});

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
        isExpandable = _props.isExpandable,
        loading = _props.loading;

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
      loading && React.createElement(Spinner, null),
      resolvedIcon && React.createElement(
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
  isExpandable: false,
  loading: false
};

export default ContentCardHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiRmFQbHVzIiwiRmFNaW51cyIsIkZhU3Bpbm5lciIsImNsYXNzUHJlZml4IiwiUHJpbWl0aXZlIiwiU3Bpbm5lciIsIkNhcmRJY29uIiwiQm9yZGVybGVzc0J1dHRvbiIsInByb3BzIiwidGhlbWUiLCJoZWFkZXIiLCJoZWlnaHQiLCJidXR0b24iLCJDYXJkVGl0bGUiLCJTdWJ0aXRsZSIsIkNhcmRIZWFkZXIiLCJndXR0ZXJXaWR0aCIsIkNvbnRlbnRDYXJkSGVhZGVyIiwiZ2V0RXhwYW5kZWRJY29uIiwiaXNFeHBhbmRlZCIsInJlbmRlciIsImljb24iLCJ0aXRsZSIsIm9uSWNvbkNsaWNrIiwiaXNFeHBhbmRhYmxlIiwibG9hZGluZyIsImNhcmRDbGFzc1ByZWZpeCIsInJlc29sdmVkSWNvbiIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQix5QkFBbkI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLDBCQUFwQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsNEJBQXRCOztBQUVBO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixpQkFBNUI7QUFDQSxPQUFPLEtBQUtDLFNBQVosTUFBMkIsa0JBQTNCOztBQUVBLElBQU1DLFVBQVVOLE9BQU9HLFNBQVAsQ0FBVixpQkFBTjtBQVVBLElBQU1JLFdBQVdQLE9BQU9LLFVBQVVHLGdCQUFqQixDQUFYLG1CQUNNO0FBQUEsU0FBU0MsTUFBTUMsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxNQUE1QjtBQUFBLENBRE4sRUFFSztBQUFBLFNBQVNILE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsTUFBNUI7QUFBQSxDQUZMLEVBTVE7QUFBQSxTQUFTSCxNQUFNQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJFLE1BQW5CLENBQTBCRCxNQUFuQztBQUFBLENBTlIsRUFPTztBQUFBLFNBQVNILE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkUsTUFBbkIsQ0FBMEJELE1BQW5DO0FBQUEsQ0FQUCxDQUFOOztBQVdBLElBQU1FLFlBQVlkLE9BQU9LLFVBQVVVLFFBQWpCLENBQVosa0JBQU47O0FBSUEsSUFBTUMsYUFBYWhCLE9BQU9XLE1BQXBCLG1CQUNNO0FBQUEsU0FBU0YsTUFBTUMsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxNQUE1QjtBQUFBLENBRE4sRUFJYTtBQUFBLFNBQVNILE1BQU1DLEtBQU4sQ0FBWU8sV0FBckI7QUFBQSxDQUpiLENBQU47O0lBUU1DLGlCOzs7Ozs7Ozs7Ozs7Z0tBQ0pDLGUsR0FBa0I7QUFBQSxhQUFRLE1BQUtWLEtBQUwsQ0FBV1csVUFBWCxHQUF3QixvQkFBQyxPQUFELE9BQXhCLEdBQXNDLG9CQUFDLE1BQUQsT0FBOUM7QUFBQSxLOzs7OEJBRWxCQyxNLHFCQUFTO0FBQUEsaUJBR0gsS0FBS1osS0FIRjtBQUFBLFFBRUxhLElBRkssVUFFTEEsSUFGSztBQUFBLFFBRUNDLEtBRkQsVUFFQ0EsS0FGRDtBQUFBLFFBRVFDLFdBRlIsVUFFUUEsV0FGUjtBQUFBLFFBRXFCSixVQUZyQixVQUVxQkEsVUFGckI7QUFBQSxRQUVpQ0ssWUFGakMsVUFFaUNBLFlBRmpDO0FBQUEsUUFFK0NDLE9BRi9DLFVBRStDQSxPQUYvQzs7QUFJUCxRQUFNQyxrQkFBcUJ2QixXQUFyQixVQUFOO0FBQ0EsUUFBTXdCLGVBQWVILGVBQWUsS0FBS04sZUFBTCxDQUFxQkMsVUFBckIsQ0FBZixHQUFrREUsSUFBdkU7O0FBRUEsV0FDRTtBQUFDLGdCQUFEO0FBQUEsUUFBWSxXQUFjSyxlQUFkLFlBQVo7QUFDRTtBQUFDLGlCQUFEO0FBQUE7QUFBWUo7QUFBWixPQURGO0FBRUdHLGlCQUFXLG9CQUFDLE9BQUQsT0FGZDtBQUdHRSxzQkFDRDtBQUFDLGdCQUFEO0FBQUEsVUFBVSxTQUFTSixXQUFuQixFQUFnQyxVQUFVLENBQUNBLFdBQTNDO0FBQXlESTtBQUF6RDtBQUpGLEtBREY7QUFRRCxHOzs7RUFsQjZCOUIsTUFBTStCLGE7O0FBOEJ0Q1gsa0JBQWtCWSxZQUFsQixHQUFpQztBQUMvQlAsU0FBT1EsU0FEd0I7QUFFL0JULFFBQU1TLFNBRnlCO0FBRy9CUCxlQUFhTyxTQUhrQjtBQUkvQk4sZ0JBQWMsS0FKaUI7QUFLL0JDLFdBQVM7QUFMc0IsQ0FBakM7O0FBUUEsZUFBZVIsaUJBQWYiLCJmaWxlIjoiY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZhUGx1cyBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvcGx1cyc7XG5pbXBvcnQgRmFNaW51cyBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvbWludXMnO1xuaW1wb3J0IEZhU3Bpbm5lciBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvc3Bpbm5lcic7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBQcmltaXRpdmUgZnJvbSAnLi4vLi4vcHJpbWl0aXZlcyc7XG5cbmNvbnN0IFNwaW5uZXIgPSBzdHlsZWQoRmFTcGlubmVyKWBcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gIH1cbmA7XG5jb25zdCBDYXJkSWNvbiA9IHN0eWxlZChQcmltaXRpdmUuQm9yZGVybGVzc0J1dHRvbilgXG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuaGVpZ2h0fTtcbiAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmhlaWdodH07XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHN2ZyB7XG4gICAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gIH1cbmA7XG5cbmNvbnN0IENhcmRUaXRsZSA9IHN0eWxlZChQcmltaXRpdmUuU3VidGl0bGUpYFxuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IENhcmRIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmhlaWdodH07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGh9O1xuYDtcblxuXG5jbGFzcyBDb250ZW50Q2FyZEhlYWRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBnZXRFeHBhbmRlZEljb24gPSAoKSA9PiAoKHRoaXMucHJvcHMuaXNFeHBhbmRlZCA/IDxGYU1pbnVzIC8+IDogPEZhUGx1cyAvPikpO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpY29uLCB0aXRsZSwgb25JY29uQ2xpY2ssIGlzRXhwYW5kZWQsIGlzRXhwYW5kYWJsZSwgbG9hZGluZyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjYXJkQ2xhc3NQcmVmaXggPSBgJHtjbGFzc1ByZWZpeH1fY2FyZGA7XG4gICAgY29uc3QgcmVzb2x2ZWRJY29uID0gaXNFeHBhbmRhYmxlID8gdGhpcy5nZXRFeHBhbmRlZEljb24oaXNFeHBhbmRlZCkgOiBpY29uO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT17YCR7Y2FyZENsYXNzUHJlZml4fV9oZWFkZXJgfT5cbiAgICAgICAgPENhcmRUaXRsZT57dGl0bGV9PC9DYXJkVGl0bGU+XG4gICAgICAgIHtsb2FkaW5nICYmIDxTcGlubmVyIC8+fVxuICAgICAgICB7cmVzb2x2ZWRJY29uICYmXG4gICAgICAgIDxDYXJkSWNvbiBvbkNsaWNrPXtvbkljb25DbGlja30gZGlzYWJsZWQ9eyFvbkljb25DbGlja30+e3Jlc29sdmVkSWNvbn08L0NhcmRJY29uPn1cbiAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICApO1xuICB9XG59XG5cbkNvbnRlbnRDYXJkSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuICBvbkljb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGlzRXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGlzRXhwYW5kYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxufTtcblxuQ29udGVudENhcmRIZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogdW5kZWZpbmVkLFxuICBpY29uOiB1bmRlZmluZWQsXG4gIG9uSWNvbkNsaWNrOiB1bmRlZmluZWQsXG4gIGlzRXhwYW5kYWJsZTogZmFsc2UsXG4gIGxvYWRpbmc6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudENhcmRIZWFkZXI7XG4iXX0=