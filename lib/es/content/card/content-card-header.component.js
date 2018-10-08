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
import { classPrefix } from '../../constants';
import * as Primitive from '../../primitives';

var CardIcon = Primitive.BorderlessButton.extend(_templateObject, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.header.button.height;
}, function (props) {
  return props.theme.header.button.height;
});

var CardTitle = Primitive.Subtitle.extend(_templateObject2);

var CardHeader = styled.header(_templateObject3, function (props) {
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
  isExpandable: false
};

export default ContentCardHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiRmFQbHVzIiwiRmFNaW51cyIsImNsYXNzUHJlZml4IiwiUHJpbWl0aXZlIiwiQ2FyZEljb24iLCJCb3JkZXJsZXNzQnV0dG9uIiwiZXh0ZW5kIiwicHJvcHMiLCJ0aGVtZSIsImhlYWRlciIsImhlaWdodCIsImJ1dHRvbiIsIkNhcmRUaXRsZSIsIlN1YnRpdGxlIiwiQ2FyZEhlYWRlciIsImd1dHRlcldpZHRoIiwiQ29udGVudENhcmRIZWFkZXIiLCJnZXRFeHBhbmRlZEljb24iLCJpc0V4cGFuZGVkIiwicmVuZGVyIiwiaWNvbiIsInRpdGxlIiwib25JY29uQ2xpY2siLCJpc0V4cGFuZGFibGUiLCJjYXJkQ2xhc3NQcmVmaXgiLCJyZXNvbHZlZEljb24iLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQix5QkFBbkI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLDBCQUFwQjs7QUFFQTtBQUNBLFNBQVNDLFdBQVQsUUFBNEIsaUJBQTVCO0FBQ0EsT0FBTyxLQUFLQyxTQUFaLE1BQTJCLGtCQUEzQjs7QUFFQSxJQUFNQyxXQUFXRCxVQUFVRSxnQkFBVixDQUEyQkMsTUFBdEMsa0JBQ007QUFBQSxTQUFTQyxNQUFNQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE1BQTVCO0FBQUEsQ0FETixFQUVLO0FBQUEsU0FBU0gsTUFBTUMsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxNQUE1QjtBQUFBLENBRkwsRUFNUTtBQUFBLFNBQVNILE1BQU1DLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkUsTUFBbkIsQ0FBMEJELE1BQW5DO0FBQUEsQ0FOUixFQU9PO0FBQUEsU0FBU0gsTUFBTUMsS0FBTixDQUFZQyxNQUFaLENBQW1CRSxNQUFuQixDQUEwQkQsTUFBbkM7QUFBQSxDQVBQLENBQU47O0FBV0EsSUFBTUUsWUFBWVQsVUFBVVUsUUFBVixDQUFtQlAsTUFBL0Isa0JBQU47O0FBR0EsSUFBTVEsYUFBYWYsT0FBT1UsTUFBcEIsbUJBQ007QUFBQSxTQUFTRixNQUFNQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE1BQTVCO0FBQUEsQ0FETixFQUlhO0FBQUEsU0FBU0gsTUFBTUMsS0FBTixDQUFZTyxXQUFyQjtBQUFBLENBSmIsQ0FBTjs7SUFRTUMsaUI7Ozs7Ozs7Ozs7OztnS0FDSkMsZSxHQUFrQjtBQUFBLGFBQVEsTUFBS1YsS0FBTCxDQUFXVyxVQUFYLEdBQXdCLG9CQUFDLE9BQUQsT0FBeEIsR0FBc0Msb0JBQUMsTUFBRCxPQUE5QztBQUFBLEs7Ozs4QkFFbEJDLE0scUJBQVM7QUFBQSxpQkFHSCxLQUFLWixLQUhGO0FBQUEsUUFFTGEsSUFGSyxVQUVMQSxJQUZLO0FBQUEsUUFFQ0MsS0FGRCxVQUVDQSxLQUZEO0FBQUEsUUFFUUMsV0FGUixVQUVRQSxXQUZSO0FBQUEsUUFFcUJKLFVBRnJCLFVBRXFCQSxVQUZyQjtBQUFBLFFBRWlDSyxZQUZqQyxVQUVpQ0EsWUFGakM7O0FBSVAsUUFBTUMsa0JBQXFCdEIsV0FBckIsVUFBTjtBQUNBLFFBQU11QixlQUFlRixlQUFlLEtBQUtOLGVBQUwsQ0FBcUJDLFVBQXJCLENBQWYsR0FBa0RFLElBQXZFOztBQUVBLFdBQ0U7QUFBQyxnQkFBRDtBQUFBLFFBQVksV0FBY0ksZUFBZCxZQUFaO0FBQ0U7QUFBQyxpQkFBRDtBQUFBO0FBQVlIO0FBQVosT0FERjtBQUVHSSxzQkFDRDtBQUFDLGdCQUFEO0FBQUEsVUFBVSxTQUFTSCxXQUFuQixFQUFnQyxVQUFVLENBQUNBLFdBQTNDO0FBQXlERztBQUF6RDtBQUhGLEtBREY7QUFPRCxHOzs7RUFqQjZCNUIsTUFBTTZCLGE7O0FBNEJ0Q1Ysa0JBQWtCVyxZQUFsQixHQUFpQztBQUMvQk4sU0FBT08sU0FEd0I7QUFFL0JSLFFBQU1RLFNBRnlCO0FBRy9CTixlQUFhTSxTQUhrQjtBQUkvQkwsZ0JBQWM7QUFKaUIsQ0FBakM7O0FBT0EsZUFBZVAsaUJBQWYiLCJmaWxlIjoiY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZhUGx1cyBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvcGx1cyc7XG5pbXBvcnQgRmFNaW51cyBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvbWludXMnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0ICogYXMgUHJpbWl0aXZlIGZyb20gJy4uLy4uL3ByaW1pdGl2ZXMnO1xuXG5jb25zdCBDYXJkSWNvbiA9IFByaW1pdGl2ZS5Cb3JkZXJsZXNzQnV0dG9uLmV4dGVuZGBcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5oZWlnaHR9O1xuICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuaGVpZ2h0fTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgc3ZnIHtcbiAgICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmJ1dHRvbi5oZWlnaHR9O1xuICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgfVxuYDtcblxuY29uc3QgQ2FyZFRpdGxlID0gUHJpbWl0aXZlLlN1YnRpdGxlLmV4dGVuZGBcbmA7XG5cbmNvbnN0IENhcmRIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmhlaWdodH07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGh9O1xuYDtcblxuXG5jbGFzcyBDb250ZW50Q2FyZEhlYWRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBnZXRFeHBhbmRlZEljb24gPSAoKSA9PiAoKHRoaXMucHJvcHMuaXNFeHBhbmRlZCA/IDxGYU1pbnVzIC8+IDogPEZhUGx1cyAvPikpO1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBpY29uLCB0aXRsZSwgb25JY29uQ2xpY2ssIGlzRXhwYW5kZWQsIGlzRXhwYW5kYWJsZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjYXJkQ2xhc3NQcmVmaXggPSBgJHtjbGFzc1ByZWZpeH1fY2FyZGA7XG4gICAgY29uc3QgcmVzb2x2ZWRJY29uID0gaXNFeHBhbmRhYmxlID8gdGhpcy5nZXRFeHBhbmRlZEljb24oaXNFeHBhbmRlZCkgOiBpY29uO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkSGVhZGVyIGNsYXNzTmFtZT17YCR7Y2FyZENsYXNzUHJlZml4fV9oZWFkZXJgfT5cbiAgICAgICAgPENhcmRUaXRsZT57dGl0bGV9PC9DYXJkVGl0bGU+XG4gICAgICAgIHtyZXNvbHZlZEljb24gJiZcbiAgICAgICAgPENhcmRJY29uIG9uQ2xpY2s9e29uSWNvbkNsaWNrfSBkaXNhYmxlZD17IW9uSWNvbkNsaWNrfT57cmVzb2x2ZWRJY29ufTwvQ2FyZEljb24+fVxuICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICk7XG4gIH1cbn1cblxuQ29udGVudENhcmRIZWFkZXIucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm5vZGVdKSxcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gIG9uSWNvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgaXNFeHBhbmRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaXNFeHBhbmRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkNvbnRlbnRDYXJkSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICBvbkljb25DbGljazogdW5kZWZpbmVkLFxuICBpc0V4cGFuZGFibGU6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudENhcmRIZWFkZXI7XG4iXX0=