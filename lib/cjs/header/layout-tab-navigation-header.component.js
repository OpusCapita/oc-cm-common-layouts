'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin-right: ', ';\n'], ['\n  margin-right: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactResponsiveNavbar = require('@opuscapita/react-responsive-navbar');

var _reactResponsiveNavbar2 = _interopRequireDefault(_reactResponsiveNavbar);

var _constants = require('../constants');

var _primitives = require('../primitives');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// App imports


var ProductTitle = _primitives.PrimitiveHeaderTitle.extend(_templateObject, _constants.theme.gutterWidth);

var LayoutTabNavigationHeader = function LayoutTabNavigationHeader(_ref) {
  var onSelect = _ref.onSelect,
      title = _ref.title,
      list = _ref.list,
      activeKey = _ref.activeKey,
      showNavItemBorder = _ref.showNavItemBorder,
      showNavItemTooltip = _ref.showNavItemTooltip;
  return (// eslint-disable-line
    _react2.default.createElement(
      _primitives.PrimitiveHeader,
      { className: _constants.classPrefix + '_product-header' },
      title && _react2.default.createElement(
        ProductTitle,
        null,
        title
      ),
      !!list.length && _react2.default.createElement(_reactResponsiveNavbar2.default, {
        activeKey: activeKey,
        list: list,
        showNavItemBorder: showNavItemBorder,
        showNavItemTooltip: showNavItemTooltip,
        onSelect: onSelect
      })
    )
  );
};

LayoutTabNavigationHeader.defaultProps = {
  title: null,
  activeKey: 0,
  list: [],
  showNavItemBorder: false,
  showNavItemTooltip: true,
  onSelect: null
};

exports.default = LayoutTabNavigationHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvbGF5b3V0LXRhYi1uYXZpZ2F0aW9uLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlByb2R1Y3RUaXRsZSIsImV4dGVuZCIsImd1dHRlcldpZHRoIiwiTGF5b3V0VGFiTmF2aWdhdGlvbkhlYWRlciIsIm9uU2VsZWN0IiwidGl0bGUiLCJsaXN0IiwiYWN0aXZlS2V5Iiwic2hvd05hdkl0ZW1Cb3JkZXIiLCJzaG93TmF2SXRlbVRvb2x0aXAiLCJsZW5ndGgiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7OztBQUZBOzs7QUFJQSxJQUFNQSxlQUFlLGlDQUFxQkMsTUFBcEMsa0JBQ1ksaUJBQU1DLFdBRGxCLENBQU47O0FBSUEsSUFBTUMsNEJBQTRCLFNBQTVCQSx5QkFBNEI7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxNQUFhQyxLQUFiLFFBQWFBLEtBQWI7QUFBQSxNQUFvQkMsSUFBcEIsUUFBb0JBLElBQXBCO0FBQUEsTUFBMEJDLFNBQTFCLFFBQTBCQSxTQUExQjtBQUFBLE1BQXFDQyxpQkFBckMsUUFBcUNBLGlCQUFyQztBQUFBLE1BQXdEQyxrQkFBeEQsUUFBd0RBLGtCQUF4RDtBQUFBLFNBQW1GO0FBQ25IO0FBQUE7QUFBQSxRQUFpQixxREFBakI7QUFDR0osZUFBUztBQUFDLG9CQUFEO0FBQUE7QUFBZUE7QUFBZixPQURaO0FBRUcsT0FBQyxDQUFDQyxLQUFLSSxNQUFQLElBQ0Q7QUFDRSxtQkFBV0gsU0FEYjtBQUVFLGNBQU1ELElBRlI7QUFHRSwyQkFBbUJFLGlCQUhyQjtBQUlFLDRCQUFvQkMsa0JBSnRCO0FBS0Usa0JBQVVMO0FBTFo7QUFIRjtBQURnQztBQUFBLENBQWxDOztBQXVCQUQsMEJBQTBCUSxZQUExQixHQUF5QztBQUN2Q04sU0FBTyxJQURnQztBQUV2Q0UsYUFBVyxDQUY0QjtBQUd2Q0QsUUFBTSxFQUhpQztBQUl2Q0UscUJBQW1CLEtBSm9CO0FBS3ZDQyxzQkFBb0IsSUFMbUI7QUFNdkNMLFlBQVU7QUFONkIsQ0FBekM7O2tCQVNlRCx5QiIsImZpbGUiOiJsYXlvdXQtdGFiLW5hdmlnYXRpb24taGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlc3BvbnNpdmVOYXZiYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtcmVzcG9uc2l2ZS1uYXZiYXInO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4LCB0aGVtZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBQcmltaXRpdmVIZWFkZXIsIFByaW1pdGl2ZUhlYWRlclRpdGxlIH0gZnJvbSAnLi4vcHJpbWl0aXZlcyc7XG5cbmNvbnN0IFByb2R1Y3RUaXRsZSA9IFByaW1pdGl2ZUhlYWRlclRpdGxlLmV4dGVuZGBcbiAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcbmA7XG5cbmNvbnN0IExheW91dFRhYk5hdmlnYXRpb25IZWFkZXIgPSAoeyBvblNlbGVjdCwgdGl0bGUsIGxpc3QsIGFjdGl2ZUtleSwgc2hvd05hdkl0ZW1Cb3JkZXIsIHNob3dOYXZJdGVtVG9vbHRpcCB9KSA9PiAoIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgPFByaW1pdGl2ZUhlYWRlciBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9wcm9kdWN0LWhlYWRlcmB9PlxuICAgIHt0aXRsZSAmJiA8UHJvZHVjdFRpdGxlPnt0aXRsZX08L1Byb2R1Y3RUaXRsZT59XG4gICAgeyEhbGlzdC5sZW5ndGggJiZcbiAgICA8UmVzcG9uc2l2ZU5hdmJhclxuICAgICAgYWN0aXZlS2V5PXthY3RpdmVLZXl9XG4gICAgICBsaXN0PXtsaXN0fVxuICAgICAgc2hvd05hdkl0ZW1Cb3JkZXI9e3Nob3dOYXZJdGVtQm9yZGVyfVxuICAgICAgc2hvd05hdkl0ZW1Ub29sdGlwPXtzaG93TmF2SXRlbVRvb2x0aXB9XG4gICAgICBvblNlbGVjdD17b25TZWxlY3R9XG4gICAgLz59XG4gIDwvUHJpbWl0aXZlSGVhZGVyPlxuKTtcblxuTGF5b3V0VGFiTmF2aWdhdGlvbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhY3RpdmVLZXk6IFByb3BUeXBlcy5udW1iZXIsXG4gIGxpc3Q6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLFxuICBzaG93TmF2SXRlbUJvcmRlcjogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dOYXZJdGVtVG9vbHRpcDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbkxheW91dFRhYk5hdmlnYXRpb25IZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogbnVsbCxcbiAgYWN0aXZlS2V5OiAwLFxuICBsaXN0OiBbXSxcbiAgc2hvd05hdkl0ZW1Cb3JkZXI6IGZhbHNlLFxuICBzaG93TmF2SXRlbVRvb2x0aXA6IHRydWUsXG4gIG9uU2VsZWN0OiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0VGFiTmF2aWdhdGlvbkhlYWRlcjtcbiJdfQ==