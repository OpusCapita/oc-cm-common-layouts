'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  width: ', ';\n  font-size: 16px;\n'], ['\n  height: ', ';\n  width: ', ';\n  font-size: 16px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactListItems = require('@opuscapita/react-list-items');

var _reactDropdown = require('@opuscapita/react-dropdown');

var _reactIcons = require('@opuscapita/react-icons');

var _constants = require('../constants');

var _headerBasic = require('./header-basic.component');

var _headerBasic2 = _interopRequireDefault(_headerBasic);

var _primitives = require('../primitives');

var Primitive = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// App imports


var BackButton = Primitive.BorderlessButton.extend(_templateObject, _constants.theme.header.button.height, _constants.theme.header.button.height);

var HeaderNavigation = function (_React$PureComponent) {
  _inherits(HeaderNavigation, _React$PureComponent);

  function HeaderNavigation() {
    var _temp, _this, _ret;

    _classCallCheck(this, HeaderNavigation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.getRightContent = function () {
      var menuItems = _this.props.menuItems;

      if (!menuItems.length) return null;

      return _react2.default.createElement(_reactDropdown.DropdownMenu, {
        id: _constants.classPrefix + '_navigation-header-menu',
        menuItems: menuItems
      });
    }, _this.renderLeftContent = function () {
      var _this$props = _this.props,
          onBackClick = _this$props.onBackClick,
          title = _this$props.title;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        typeof onBackClick === 'function' && _react2.default.createElement(
          BackButton,
          { onClick: onBackClick },
          _react2.default.createElement(_reactIcons.Icon, { type: 'indicator', name: 'arrowLeft' })
        ),
        title && _react2.default.createElement(
          Primitive.Title,
          null,
          title
        )
      );
    }, _this.renderCenterContent = function () {
      var _this$props2 = _this.props,
          itemIds = _this$props2.itemIds,
          goToItem = _this$props2.goToItem,
          itemId = _this$props2.itemId,
          itemSeparator = _this$props2.itemSeparator,
          listItemsDisabled = _this$props2.listItemsDisabled;


      if (!_this.props.itemIds.length) return null;
      return _react2.default.createElement(_reactListItems.ListItems, {
        id: _constants.classPrefix + '_navigation-header-items',
        itemIds: itemIds,
        goToItem: goToItem,
        itemId: itemId,
        itemElement: itemSeparator,
        disabled: listItemsDisabled
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  HeaderNavigation.prototype.render = function render() {
    return _react2.default.createElement(_headerBasic2.default, {
      className: _constants.classPrefix + '_navigation-header',
      left: this.renderLeftContent(),
      center: this.renderCenterContent(),
      right: this.getRightContent()
    });
  };

  return HeaderNavigation;
}(_react2.default.PureComponent);

HeaderNavigation.defaultProps = {
  title: null,
  onBackClick: null,
  itemIds: [],
  goToItem: null,
  itemId: null,
  itemSeparator: null,
  listItemsDisabled: false,
  menuItems: []
};

exports.default = HeaderNavigation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJQcmltaXRpdmUiLCJCYWNrQnV0dG9uIiwiQm9yZGVybGVzc0J1dHRvbiIsImV4dGVuZCIsImhlYWRlciIsImJ1dHRvbiIsImhlaWdodCIsIkhlYWRlck5hdmlnYXRpb24iLCJnZXRSaWdodENvbnRlbnQiLCJtZW51SXRlbXMiLCJwcm9wcyIsImxlbmd0aCIsInJlbmRlckxlZnRDb250ZW50Iiwib25CYWNrQ2xpY2siLCJ0aXRsZSIsInJlbmRlckNlbnRlckNvbnRlbnQiLCJpdGVtSWRzIiwiZ29Ub0l0ZW0iLCJpdGVtSWQiLCJpdGVtU2VwYXJhdG9yIiwibGlzdEl0ZW1zRGlzYWJsZWQiLCJyZW5kZXIiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsUzs7Ozs7Ozs7Ozs7OztBQUhaOzs7QUFLQSxJQUFNQyxhQUFhRCxVQUFVRSxnQkFBVixDQUEyQkMsTUFBeEMsa0JBQ00saUJBQU1DLE1BQU4sQ0FBYUMsTUFBYixDQUFvQkMsTUFEMUIsRUFFSyxpQkFBTUYsTUFBTixDQUFhQyxNQUFiLENBQW9CQyxNQUZ6QixDQUFOOztJQU1NQyxnQjs7Ozs7Ozs7Ozs7O2dLQUNKQyxlLEdBQWtCLFlBQU07QUFBQSxVQUNkQyxTQURjLEdBQ0EsTUFBS0MsS0FETCxDQUNkRCxTQURjOztBQUV0QixVQUFJLENBQUNBLFVBQVVFLE1BQWYsRUFBdUIsT0FBTyxJQUFQOztBQUV2QixhQUNFO0FBQ0UsOERBREY7QUFFRSxtQkFBV0Y7QUFGYixRQURGO0FBTUQsSyxRQUVERyxpQixHQUFvQixZQUFNO0FBQUEsd0JBQ08sTUFBS0YsS0FEWjtBQUFBLFVBQ2hCRyxXQURnQixlQUNoQkEsV0FEZ0I7QUFBQSxVQUNIQyxLQURHLGVBQ0hBLEtBREc7O0FBRXhCLGFBQ0U7QUFBQSx3QkFBTyxRQUFQO0FBQUE7QUFDRyxlQUFPRCxXQUFQLEtBQXVCLFVBQXZCLElBQ0Q7QUFBQyxvQkFBRDtBQUFBLFlBQVksU0FBU0EsV0FBckI7QUFBa0MsNERBQU0sTUFBSyxXQUFYLEVBQXVCLE1BQUssV0FBNUI7QUFBbEMsU0FGRjtBQUdHQyxpQkFBUztBQUFDLG1CQUFELENBQVcsS0FBWDtBQUFBO0FBQWtCQTtBQUFsQjtBQUhaLE9BREY7QUFPRCxLLFFBRURDLG1CLEdBQXNCLFlBQU07QUFBQSx5QkFHdEIsTUFBS0wsS0FIaUI7QUFBQSxVQUV4Qk0sT0FGd0IsZ0JBRXhCQSxPQUZ3QjtBQUFBLFVBRWZDLFFBRmUsZ0JBRWZBLFFBRmU7QUFBQSxVQUVMQyxNQUZLLGdCQUVMQSxNQUZLO0FBQUEsVUFFR0MsYUFGSCxnQkFFR0EsYUFGSDtBQUFBLFVBRWtCQyxpQkFGbEIsZ0JBRWtCQSxpQkFGbEI7OztBQUsxQixVQUFJLENBQUMsTUFBS1YsS0FBTCxDQUFXTSxPQUFYLENBQW1CTCxNQUF4QixFQUFnQyxPQUFPLElBQVA7QUFDaEMsYUFDRTtBQUNFLCtEQURGO0FBRUUsaUJBQVNLLE9BRlg7QUFHRSxrQkFBVUMsUUFIWjtBQUlFLGdCQUFRQyxNQUpWO0FBS0UscUJBQWFDLGFBTGY7QUFNRSxrQkFBVUM7QUFOWixRQURGO0FBVUQsSzs7OzZCQUVEQyxNLHFCQUFTO0FBQ1AsV0FDRTtBQUNFLDhEQURGO0FBRUUsWUFBTSxLQUFLVCxpQkFBTCxFQUZSO0FBR0UsY0FBUSxLQUFLRyxtQkFBTCxFQUhWO0FBSUUsYUFBTyxLQUFLUCxlQUFMO0FBSlQsTUFERjtBQVFELEc7OztFQW5ENEIsZ0JBQU1jLGE7O0FBMkVyQ2YsaUJBQWlCZ0IsWUFBakIsR0FBZ0M7QUFDOUJULFNBQU8sSUFEdUI7QUFFOUJELGVBQWEsSUFGaUI7QUFHOUJHLFdBQVMsRUFIcUI7QUFJOUJDLFlBQVUsSUFKb0I7QUFLOUJDLFVBQVEsSUFMc0I7QUFNOUJDLGlCQUFlLElBTmU7QUFPOUJDLHFCQUFtQixLQVBXO0FBUTlCWCxhQUFXO0FBUm1CLENBQWhDOztrQkFXZUYsZ0IiLCJmaWxlIjoiaGVhZGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaXN0SXRlbXMgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1saXN0LWl0ZW1zJztcbmltcG9ydCB7IERyb3Bkb3duTWVudSB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWRyb3Bkb3duJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1pY29ucyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBMYXlvdXRIZWFkZXIgZnJvbSAnLi9oZWFkZXItYmFzaWMuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIFByaW1pdGl2ZSBmcm9tICcuLi9wcmltaXRpdmVzJztcblxuY29uc3QgQmFja0J1dHRvbiA9IFByaW1pdGl2ZS5Cb3JkZXJsZXNzQnV0dG9uLmV4dGVuZGBcbiAgaGVpZ2h0OiAke3RoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgd2lkdGg6ICR7dGhlbWUuaGVhZGVyLmJ1dHRvbi5oZWlnaHR9O1xuICBmb250LXNpemU6IDE2cHg7XG5gO1xuXG5jbGFzcyBIZWFkZXJOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGdldFJpZ2h0Q29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG1lbnVJdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIW1lbnVJdGVtcy5sZW5ndGgpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wZG93bk1lbnVcbiAgICAgICAgaWQ9e2Ake2NsYXNzUHJlZml4fV9uYXZpZ2F0aW9uLWhlYWRlci1tZW51YH1cbiAgICAgICAgbWVudUl0ZW1zPXttZW51SXRlbXN9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyTGVmdENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkJhY2tDbGljaywgdGl0bGUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge3R5cGVvZiBvbkJhY2tDbGljayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICA8QmFja0J1dHRvbiBvbkNsaWNrPXtvbkJhY2tDbGlja30+PEljb24gdHlwZT1cImluZGljYXRvclwiIG5hbWU9XCJhcnJvd0xlZnRcIiAvPjwvQmFja0J1dHRvbj59XG4gICAgICAgIHt0aXRsZSAmJiA8UHJpbWl0aXZlLlRpdGxlPnt0aXRsZX08L1ByaW1pdGl2ZS5UaXRsZT59XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyQ2VudGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICBpdGVtSWRzLCBnb1RvSXRlbSwgaXRlbUlkLCBpdGVtU2VwYXJhdG9yLCBsaXN0SXRlbXNEaXNhYmxlZCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghdGhpcy5wcm9wcy5pdGVtSWRzLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0SXRlbXNcbiAgICAgICAgaWQ9e2Ake2NsYXNzUHJlZml4fV9uYXZpZ2F0aW9uLWhlYWRlci1pdGVtc2B9XG4gICAgICAgIGl0ZW1JZHM9e2l0ZW1JZHN9XG4gICAgICAgIGdvVG9JdGVtPXtnb1RvSXRlbX1cbiAgICAgICAgaXRlbUlkPXtpdGVtSWR9XG4gICAgICAgIGl0ZW1FbGVtZW50PXtpdGVtU2VwYXJhdG9yfVxuICAgICAgICBkaXNhYmxlZD17bGlzdEl0ZW1zRGlzYWJsZWR9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0SGVhZGVyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X25hdmlnYXRpb24taGVhZGVyYH1cbiAgICAgICAgbGVmdD17dGhpcy5yZW5kZXJMZWZ0Q29udGVudCgpfVxuICAgICAgICBjZW50ZXI9e3RoaXMucmVuZGVyQ2VudGVyQ29udGVudCgpfVxuICAgICAgICByaWdodD17dGhpcy5nZXRSaWdodENvbnRlbnQoKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5IZWFkZXJOYXZpZ2F0aW9uLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQmFja0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgaXRlbUlkczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSksXG4gIGdvVG9JdGVtOiBQcm9wVHlwZXMuZnVuYyxcbiAgaXRlbUlkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pLFxuICBpdGVtU2VwYXJhdG9yOiBQcm9wVHlwZXMubm9kZSxcbiAgbGlzdEl0ZW1zRGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBtZW51SXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgICBQcm9wVHlwZXMuc2hhcGUoe30pLFxuICBdKSksXG59O1xuXG5IZWFkZXJOYXZpZ2F0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IG51bGwsXG4gIG9uQmFja0NsaWNrOiBudWxsLFxuICBpdGVtSWRzOiBbXSxcbiAgZ29Ub0l0ZW06IG51bGwsXG4gIGl0ZW1JZDogbnVsbCxcbiAgaXRlbVNlcGFyYXRvcjogbnVsbCxcbiAgbGlzdEl0ZW1zRGlzYWJsZWQ6IGZhbHNlLFxuICBtZW51SXRlbXM6IFtdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyTmF2aWdhdGlvbjtcbiJdfQ==