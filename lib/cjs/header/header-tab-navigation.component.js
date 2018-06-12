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

var Primitive = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// App imports


var ProductTitle = Primitive.Title.extend(_templateObject, _constants.theme.gutterWidth);

var HeaderNavigation = function HeaderNavigation(_ref) {
  var onSelect = _ref.onSelect,
      title = _ref.title,
      list = _ref.list,
      activeKey = _ref.activeKey,
      showNavItemBorder = _ref.showNavItemBorder,
      showNavItemTooltip = _ref.showNavItemTooltip;
  return (// eslint-disable-line
    _react2.default.createElement(
      Primitive.Header,
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

HeaderNavigation.defaultProps = {
  title: null,
  activeKey: 0,
  list: [],
  showNavItemBorder: false,
  showNavItemTooltip: true,
  onSelect: null
};

exports.default = HeaderNavigation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLXRhYi1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUHJpbWl0aXZlIiwiUHJvZHVjdFRpdGxlIiwiVGl0bGUiLCJleHRlbmQiLCJndXR0ZXJXaWR0aCIsIkhlYWRlck5hdmlnYXRpb24iLCJvblNlbGVjdCIsInRpdGxlIiwibGlzdCIsImFjdGl2ZUtleSIsInNob3dOYXZJdGVtQm9yZGVyIiwic2hvd05hdkl0ZW1Ub29sdGlwIiwibGVuZ3RoIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7SUFBWUEsUzs7Ozs7OztBQUZaOzs7QUFJQSxJQUFNQyxlQUFlRCxVQUFVRSxLQUFWLENBQWdCQyxNQUEvQixrQkFDWSxpQkFBTUMsV0FEbEIsQ0FBTjs7QUFJQSxJQUFNQyxtQkFBbUIsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFDLEtBQWIsUUFBYUEsS0FBYjtBQUFBLE1BQW9CQyxJQUFwQixRQUFvQkEsSUFBcEI7QUFBQSxNQUEwQkMsU0FBMUIsUUFBMEJBLFNBQTFCO0FBQUEsTUFBcUNDLGlCQUFyQyxRQUFxQ0EsaUJBQXJDO0FBQUEsTUFBd0RDLGtCQUF4RCxRQUF3REEsa0JBQXhEO0FBQUEsU0FBbUY7QUFDMUc7QUFBQyxlQUFELENBQVcsTUFBWDtBQUFBLFFBQWtCLHFEQUFsQjtBQUNHSixlQUFTO0FBQUMsb0JBQUQ7QUFBQTtBQUFlQTtBQUFmLE9BRFo7QUFFRyxPQUFDLENBQUNDLEtBQUtJLE1BQVAsSUFDRDtBQUNFLG1CQUFXSCxTQURiO0FBRUUsY0FBTUQsSUFGUjtBQUdFLDJCQUFtQkUsaUJBSHJCO0FBSUUsNEJBQW9CQyxrQkFKdEI7QUFLRSxrQkFBVUw7QUFMWjtBQUhGO0FBRHVCO0FBQUEsQ0FBekI7O0FBdUJBRCxpQkFBaUJRLFlBQWpCLEdBQWdDO0FBQzlCTixTQUFPLElBRHVCO0FBRTlCRSxhQUFXLENBRm1CO0FBRzlCRCxRQUFNLEVBSHdCO0FBSTlCRSxxQkFBbUIsS0FKVztBQUs5QkMsc0JBQW9CLElBTFU7QUFNOUJMLFlBQVU7QUFOb0IsQ0FBaEM7O2tCQVNlRCxnQiIsImZpbGUiOiJoZWFkZXItdGFiLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVzcG9uc2l2ZU5hdmJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1yZXNwb25zaXZlLW5hdmJhcic7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIFByaW1pdGl2ZSBmcm9tICcuLi9wcmltaXRpdmVzJztcblxuY29uc3QgUHJvZHVjdFRpdGxlID0gUHJpbWl0aXZlLlRpdGxlLmV4dGVuZGBcbiAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcbmA7XG5cbmNvbnN0IEhlYWRlck5hdmlnYXRpb24gPSAoeyBvblNlbGVjdCwgdGl0bGUsIGxpc3QsIGFjdGl2ZUtleSwgc2hvd05hdkl0ZW1Cb3JkZXIsIHNob3dOYXZJdGVtVG9vbHRpcCB9KSA9PiAoIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgPFByaW1pdGl2ZS5IZWFkZXIgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fcHJvZHVjdC1oZWFkZXJgfT5cbiAgICB7dGl0bGUgJiYgPFByb2R1Y3RUaXRsZT57dGl0bGV9PC9Qcm9kdWN0VGl0bGU+fVxuICAgIHshIWxpc3QubGVuZ3RoICYmXG4gICAgPFJlc3BvbnNpdmVOYXZiYXJcbiAgICAgIGFjdGl2ZUtleT17YWN0aXZlS2V5fVxuICAgICAgbGlzdD17bGlzdH1cbiAgICAgIHNob3dOYXZJdGVtQm9yZGVyPXtzaG93TmF2SXRlbUJvcmRlcn1cbiAgICAgIHNob3dOYXZJdGVtVG9vbHRpcD17c2hvd05hdkl0ZW1Ub29sdGlwfVxuICAgICAgb25TZWxlY3Q9e29uU2VsZWN0fVxuICAgIC8+fVxuICA8L1ByaW1pdGl2ZS5IZWFkZXI+XG4pO1xuXG5IZWFkZXJOYXZpZ2F0aW9uLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFjdGl2ZUtleTogUHJvcFR5cGVzLm51bWJlcixcbiAgbGlzdDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHt9KSksXG4gIHNob3dOYXZJdGVtQm9yZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd05hdkl0ZW1Ub29sdGlwOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuSGVhZGVyTmF2aWdhdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiBudWxsLFxuICBhY3RpdmVLZXk6IDAsXG4gIGxpc3Q6IFtdLFxuICBzaG93TmF2SXRlbUJvcmRlcjogZmFsc2UsXG4gIHNob3dOYXZJdGVtVG9vbHRpcDogdHJ1ZSxcbiAgb25TZWxlY3Q6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJOYXZpZ2F0aW9uO1xuIl19