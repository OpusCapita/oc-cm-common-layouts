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

var _layoutBasicHeader = require('./layout-basic-header.component');

var _layoutBasicHeader2 = _interopRequireDefault(_layoutBasicHeader);

var _primitives = require('../primitives');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// App imports


var BackButton = _primitives.PrimitiveBorderlessButton.extend(_templateObject, _constants.theme.header.button.height, _constants.theme.header.button.height);

var LayoutNavigationHeader = function (_React$PureComponent) {
  _inherits(LayoutNavigationHeader, _React$PureComponent);

  function LayoutNavigationHeader() {
    var _temp, _this, _ret;

    _classCallCheck(this, LayoutNavigationHeader);

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
          _primitives.PrimitiveHeaderTitle,
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

  LayoutNavigationHeader.prototype.render = function render() {
    return _react2.default.createElement(_layoutBasicHeader2.default, {
      className: _constants.classPrefix + '_navigation-header',
      left: this.renderLeftContent(),
      center: this.renderCenterContent(),
      right: this.getRightContent()
    });
  };

  return LayoutNavigationHeader;
}(_react2.default.PureComponent);

LayoutNavigationHeader.defaultProps = {
  title: null,
  onBackClick: null,
  itemIds: [],
  goToItem: null,
  itemId: null,
  itemSeparator: null,
  listItemsDisabled: false,
  menuItems: []
};

exports.default = LayoutNavigationHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvbGF5b3V0LW5hdmlnYXRpb24taGVhZGVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiQmFja0J1dHRvbiIsImV4dGVuZCIsImhlYWRlciIsImJ1dHRvbiIsImhlaWdodCIsIkxheW91dE5hdmlnYXRpb25IZWFkZXIiLCJnZXRSaWdodENvbnRlbnQiLCJtZW51SXRlbXMiLCJwcm9wcyIsImxlbmd0aCIsInJlbmRlckxlZnRDb250ZW50Iiwib25CYWNrQ2xpY2siLCJ0aXRsZSIsInJlbmRlckNlbnRlckNvbnRlbnQiLCJpdGVtSWRzIiwiZ29Ub0l0ZW0iLCJpdGVtSWQiLCJpdGVtU2VwYXJhdG9yIiwibGlzdEl0ZW1zRGlzYWJsZWQiLCJyZW5kZXIiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFIQTs7O0FBS0EsSUFBTUEsYUFBYSxzQ0FBMEJDLE1BQXZDLGtCQUNNLGlCQUFNQyxNQUFOLENBQWFDLE1BQWIsQ0FBb0JDLE1BRDFCLEVBRUssaUJBQU1GLE1BQU4sQ0FBYUMsTUFBYixDQUFvQkMsTUFGekIsQ0FBTjs7SUFNTUMsc0I7Ozs7Ozs7Ozs7OztnS0FDSkMsZSxHQUFrQixZQUFNO0FBQUEsVUFDZEMsU0FEYyxHQUNBLE1BQUtDLEtBREwsQ0FDZEQsU0FEYzs7QUFFdEIsVUFBSSxDQUFDQSxVQUFVRSxNQUFmLEVBQXVCLE9BQU8sSUFBUDs7QUFFdkIsYUFDRTtBQUNFLDhEQURGO0FBRUUsbUJBQVdGO0FBRmIsUUFERjtBQU1ELEssUUFFREcsaUIsR0FBb0IsWUFBTTtBQUFBLHdCQUNPLE1BQUtGLEtBRFo7QUFBQSxVQUNoQkcsV0FEZ0IsZUFDaEJBLFdBRGdCO0FBQUEsVUFDSEMsS0FERyxlQUNIQSxLQURHOztBQUV4QixhQUNFO0FBQUEsd0JBQU8sUUFBUDtBQUFBO0FBQ0csZUFBT0QsV0FBUCxLQUF1QixVQUF2QixJQUNEO0FBQUMsb0JBQUQ7QUFBQSxZQUFZLFNBQVNBLFdBQXJCO0FBQWtDLDREQUFNLE1BQUssV0FBWCxFQUF1QixNQUFLLFdBQTVCO0FBQWxDLFNBRkY7QUFHR0MsaUJBQVM7QUFBQTtBQUFBO0FBQXVCQTtBQUF2QjtBQUhaLE9BREY7QUFPRCxLLFFBRURDLG1CLEdBQXNCLFlBQU07QUFBQSx5QkFHdEIsTUFBS0wsS0FIaUI7QUFBQSxVQUV4Qk0sT0FGd0IsZ0JBRXhCQSxPQUZ3QjtBQUFBLFVBRWZDLFFBRmUsZ0JBRWZBLFFBRmU7QUFBQSxVQUVMQyxNQUZLLGdCQUVMQSxNQUZLO0FBQUEsVUFFR0MsYUFGSCxnQkFFR0EsYUFGSDtBQUFBLFVBRWtCQyxpQkFGbEIsZ0JBRWtCQSxpQkFGbEI7OztBQUsxQixVQUFJLENBQUMsTUFBS1YsS0FBTCxDQUFXTSxPQUFYLENBQW1CTCxNQUF4QixFQUFnQyxPQUFPLElBQVA7QUFDaEMsYUFDRTtBQUNFLCtEQURGO0FBRUUsaUJBQVNLLE9BRlg7QUFHRSxrQkFBVUMsUUFIWjtBQUlFLGdCQUFRQyxNQUpWO0FBS0UscUJBQWFDLGFBTGY7QUFNRSxrQkFBVUM7QUFOWixRQURGO0FBVUQsSzs7O21DQUVEQyxNLHFCQUFTO0FBQ1AsV0FDRTtBQUNFLDhEQURGO0FBRUUsWUFBTSxLQUFLVCxpQkFBTCxFQUZSO0FBR0UsY0FBUSxLQUFLRyxtQkFBTCxFQUhWO0FBSUUsYUFBTyxLQUFLUCxlQUFMO0FBSlQsTUFERjtBQVFELEc7OztFQW5Ea0MsZ0JBQU1jLGE7O0FBMkUzQ2YsdUJBQXVCZ0IsWUFBdkIsR0FBc0M7QUFDcENULFNBQU8sSUFENkI7QUFFcENELGVBQWEsSUFGdUI7QUFHcENHLFdBQVMsRUFIMkI7QUFJcENDLFlBQVUsSUFKMEI7QUFLcENDLFVBQVEsSUFMNEI7QUFNcENDLGlCQUFlLElBTnFCO0FBT3BDQyxxQkFBbUIsS0FQaUI7QUFRcENYLGFBQVc7QUFSeUIsQ0FBdEM7O2tCQVdlRixzQiIsImZpbGUiOiJsYXlvdXQtbmF2aWdhdGlvbi1oZWFkZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaXN0SXRlbXMgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1saXN0LWl0ZW1zJztcbmltcG9ydCB7IERyb3Bkb3duTWVudSB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWRyb3Bkb3duJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1pY29ucyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBMYXlvdXRIZWFkZXIgZnJvbSAnLi9sYXlvdXQtYmFzaWMtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcmltaXRpdmVCb3JkZXJsZXNzQnV0dG9uLCBQcmltaXRpdmVIZWFkZXJUaXRsZSB9IGZyb20gJy4uL3ByaW1pdGl2ZXMnO1xuXG5jb25zdCBCYWNrQnV0dG9uID0gUHJpbWl0aXZlQm9yZGVybGVzc0J1dHRvbi5leHRlbmRgXG4gIGhlaWdodDogJHt0aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gIHdpZHRoOiAke3RoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgZm9udC1zaXplOiAxNnB4O1xuYDtcblxuY2xhc3MgTGF5b3V0TmF2aWdhdGlvbkhlYWRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBnZXRSaWdodENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBtZW51SXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFtZW51SXRlbXMubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8RHJvcGRvd25NZW51XG4gICAgICAgIGlkPXtgJHtjbGFzc1ByZWZpeH1fbmF2aWdhdGlvbi1oZWFkZXItbWVudWB9XG4gICAgICAgIG1lbnVJdGVtcz17bWVudUl0ZW1zfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckxlZnRDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25CYWNrQ2xpY2ssIHRpdGxlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0eXBlb2Ygb25CYWNrQ2xpY2sgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgPEJhY2tCdXR0b24gb25DbGljaz17b25CYWNrQ2xpY2t9PjxJY29uIHR5cGU9XCJpbmRpY2F0b3JcIiBuYW1lPVwiYXJyb3dMZWZ0XCIgLz48L0JhY2tCdXR0b24+fVxuICAgICAgICB7dGl0bGUgJiYgPFByaW1pdGl2ZUhlYWRlclRpdGxlPnt0aXRsZX08L1ByaW1pdGl2ZUhlYWRlclRpdGxlPn1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXJDZW50ZXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGl0ZW1JZHMsIGdvVG9JdGVtLCBpdGVtSWQsIGl0ZW1TZXBhcmF0b3IsIGxpc3RJdGVtc0Rpc2FibGVkLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCF0aGlzLnByb3BzLml0ZW1JZHMubGVuZ3RoKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gKFxuICAgICAgPExpc3RJdGVtc1xuICAgICAgICBpZD17YCR7Y2xhc3NQcmVmaXh9X25hdmlnYXRpb24taGVhZGVyLWl0ZW1zYH1cbiAgICAgICAgaXRlbUlkcz17aXRlbUlkc31cbiAgICAgICAgZ29Ub0l0ZW09e2dvVG9JdGVtfVxuICAgICAgICBpdGVtSWQ9e2l0ZW1JZH1cbiAgICAgICAgaXRlbUVsZW1lbnQ9e2l0ZW1TZXBhcmF0b3J9XG4gICAgICAgIGRpc2FibGVkPXtsaXN0SXRlbXNEaXNhYmxlZH1cbiAgICAgIC8+XG4gICAgKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXRIZWFkZXJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fbmF2aWdhdGlvbi1oZWFkZXJgfVxuICAgICAgICBsZWZ0PXt0aGlzLnJlbmRlckxlZnRDb250ZW50KCl9XG4gICAgICAgIGNlbnRlcj17dGhpcy5yZW5kZXJDZW50ZXJDb250ZW50KCl9XG4gICAgICAgIHJpZ2h0PXt0aGlzLmdldFJpZ2h0Q29udGVudCgpfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbkxheW91dE5hdmlnYXRpb25IZWFkZXIucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25CYWNrQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBpdGVtSWRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gIF0pKSxcbiAgZ29Ub0l0ZW06IFByb3BUeXBlcy5mdW5jLFxuICBpdGVtSWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSksXG4gIGl0ZW1TZXBhcmF0b3I6IFByb3BUeXBlcy5ub2RlLFxuICBsaXN0SXRlbXNEaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG1lbnVJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5zaGFwZSh7fSksXG4gIF0pKSxcbn07XG5cbkxheW91dE5hdmlnYXRpb25IZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogbnVsbCxcbiAgb25CYWNrQ2xpY2s6IG51bGwsXG4gIGl0ZW1JZHM6IFtdLFxuICBnb1RvSXRlbTogbnVsbCxcbiAgaXRlbUlkOiBudWxsLFxuICBpdGVtU2VwYXJhdG9yOiBudWxsLFxuICBsaXN0SXRlbXNEaXNhYmxlZDogZmFsc2UsXG4gIG1lbnVJdGVtczogW10sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXROYXZpZ2F0aW9uSGVhZGVyO1xuIl19