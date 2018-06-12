var _templateObject = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  width: ', ';\n  font-size: 16px;\n'], ['\n  height: ', ';\n  width: ', ';\n  font-size: 16px;\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import { ListItems } from '@opuscapita/react-list-items';
import { DropdownMenu } from '@opuscapita/react-dropdown';
import { Icon } from '@opuscapita/react-icons';
// App imports
import { classPrefix, theme } from '../constants';
import LayoutHeader from './header-basic.component';
import * as Primitive from '../primitives';

var BackButton = Primitive.BorderlessButton.extend(_templateObject, theme.header.button.height, theme.header.button.height);

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

      return React.createElement(DropdownMenu, {
        id: classPrefix + '_navigation-header-menu',
        menuItems: menuItems
      });
    }, _this.renderLeftContent = function () {
      var _this$props = _this.props,
          onBackClick = _this$props.onBackClick,
          title = _this$props.title;

      return React.createElement(
        React.Fragment,
        null,
        typeof onBackClick === 'function' && React.createElement(
          BackButton,
          { onClick: onBackClick },
          React.createElement(Icon, { type: 'indicator', name: 'arrowLeft' })
        ),
        title && React.createElement(
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
      return React.createElement(ListItems, {
        id: classPrefix + '_navigation-header-items',
        itemIds: itemIds,
        goToItem: goToItem,
        itemId: itemId,
        itemElement: itemSeparator,
        disabled: listItemsDisabled
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  HeaderNavigation.prototype.render = function render() {
    return React.createElement(LayoutHeader, {
      className: classPrefix + '_navigation-header',
      left: this.renderLeftContent(),
      center: this.renderCenterContent(),
      right: this.getRightContent()
    });
  };

  return HeaderNavigation;
}(React.PureComponent);

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

export default HeaderNavigation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkxpc3RJdGVtcyIsIkRyb3Bkb3duTWVudSIsIkljb24iLCJjbGFzc1ByZWZpeCIsInRoZW1lIiwiTGF5b3V0SGVhZGVyIiwiUHJpbWl0aXZlIiwiQmFja0J1dHRvbiIsIkJvcmRlcmxlc3NCdXR0b24iLCJleHRlbmQiLCJoZWFkZXIiLCJidXR0b24iLCJoZWlnaHQiLCJIZWFkZXJOYXZpZ2F0aW9uIiwiZ2V0UmlnaHRDb250ZW50IiwibWVudUl0ZW1zIiwicHJvcHMiLCJsZW5ndGgiLCJyZW5kZXJMZWZ0Q29udGVudCIsIm9uQmFja0NsaWNrIiwidGl0bGUiLCJyZW5kZXJDZW50ZXJDb250ZW50IiwiaXRlbUlkcyIsImdvVG9JdGVtIiwiaXRlbUlkIiwiaXRlbVNlcGFyYXRvciIsImxpc3RJdGVtc0Rpc2FibGVkIiwicmVuZGVyIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQiw4QkFBMUI7QUFDQSxTQUFTQyxZQUFULFFBQTZCLDRCQUE3QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIseUJBQXJCO0FBQ0E7QUFDQSxTQUFTQyxXQUFULEVBQXNCQyxLQUF0QixRQUFtQyxjQUFuQztBQUNBLE9BQU9DLFlBQVAsTUFBeUIsMEJBQXpCO0FBQ0EsT0FBTyxLQUFLQyxTQUFaLE1BQTJCLGVBQTNCOztBQUVBLElBQU1DLGFBQWFELFVBQVVFLGdCQUFWLENBQTJCQyxNQUF4QyxrQkFDTUwsTUFBTU0sTUFBTixDQUFhQyxNQUFiLENBQW9CQyxNQUQxQixFQUVLUixNQUFNTSxNQUFOLENBQWFDLE1BQWIsQ0FBb0JDLE1BRnpCLENBQU47O0lBTU1DLGdCOzs7Ozs7Ozs7Ozs7Z0tBQ0pDLGUsR0FBa0IsWUFBTTtBQUFBLFVBQ2RDLFNBRGMsR0FDQSxNQUFLQyxLQURMLENBQ2RELFNBRGM7O0FBRXRCLFVBQUksQ0FBQ0EsVUFBVUUsTUFBZixFQUF1QixPQUFPLElBQVA7O0FBRXZCLGFBQ0Usb0JBQUMsWUFBRDtBQUNFLFlBQU9kLFdBQVAsNEJBREY7QUFFRSxtQkFBV1k7QUFGYixRQURGO0FBTUQsSyxRQUVERyxpQixHQUFvQixZQUFNO0FBQUEsd0JBQ08sTUFBS0YsS0FEWjtBQUFBLFVBQ2hCRyxXQURnQixlQUNoQkEsV0FEZ0I7QUFBQSxVQUNIQyxLQURHLGVBQ0hBLEtBREc7O0FBRXhCLGFBQ0U7QUFBQyxhQUFELENBQU8sUUFBUDtBQUFBO0FBQ0csZUFBT0QsV0FBUCxLQUF1QixVQUF2QixJQUNEO0FBQUMsb0JBQUQ7QUFBQSxZQUFZLFNBQVNBLFdBQXJCO0FBQWtDLDhCQUFDLElBQUQsSUFBTSxNQUFLLFdBQVgsRUFBdUIsTUFBSyxXQUE1QjtBQUFsQyxTQUZGO0FBR0dDLGlCQUFTO0FBQUMsbUJBQUQsQ0FBVyxLQUFYO0FBQUE7QUFBa0JBO0FBQWxCO0FBSFosT0FERjtBQU9ELEssUUFFREMsbUIsR0FBc0IsWUFBTTtBQUFBLHlCQUd0QixNQUFLTCxLQUhpQjtBQUFBLFVBRXhCTSxPQUZ3QixnQkFFeEJBLE9BRndCO0FBQUEsVUFFZkMsUUFGZSxnQkFFZkEsUUFGZTtBQUFBLFVBRUxDLE1BRkssZ0JBRUxBLE1BRks7QUFBQSxVQUVHQyxhQUZILGdCQUVHQSxhQUZIO0FBQUEsVUFFa0JDLGlCQUZsQixnQkFFa0JBLGlCQUZsQjs7O0FBSzFCLFVBQUksQ0FBQyxNQUFLVixLQUFMLENBQVdNLE9BQVgsQ0FBbUJMLE1BQXhCLEVBQWdDLE9BQU8sSUFBUDtBQUNoQyxhQUNFLG9CQUFDLFNBQUQ7QUFDRSxZQUFPZCxXQUFQLDZCQURGO0FBRUUsaUJBQVNtQixPQUZYO0FBR0Usa0JBQVVDLFFBSFo7QUFJRSxnQkFBUUMsTUFKVjtBQUtFLHFCQUFhQyxhQUxmO0FBTUUsa0JBQVVDO0FBTlosUUFERjtBQVVELEs7Ozs2QkFFREMsTSxxQkFBUztBQUNQLFdBQ0Usb0JBQUMsWUFBRDtBQUNFLGlCQUFjeEIsV0FBZCx1QkFERjtBQUVFLFlBQU0sS0FBS2UsaUJBQUwsRUFGUjtBQUdFLGNBQVEsS0FBS0csbUJBQUwsRUFIVjtBQUlFLGFBQU8sS0FBS1AsZUFBTDtBQUpULE1BREY7QUFRRCxHOzs7RUFuRDRCaEIsTUFBTThCLGE7O0FBMkVyQ2YsaUJBQWlCZ0IsWUFBakIsR0FBZ0M7QUFDOUJULFNBQU8sSUFEdUI7QUFFOUJELGVBQWEsSUFGaUI7QUFHOUJHLFdBQVMsRUFIcUI7QUFJOUJDLFlBQVUsSUFKb0I7QUFLOUJDLFVBQVEsSUFMc0I7QUFNOUJDLGlCQUFlLElBTmU7QUFPOUJDLHFCQUFtQixLQVBXO0FBUTlCWCxhQUFXO0FBUm1CLENBQWhDOztBQVdBLGVBQWVGLGdCQUFmIiwiZmlsZSI6ImhlYWRlci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGlzdEl0ZW1zIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtbGlzdC1pdGVtcyc7XG5pbXBvcnQgeyBEcm9wZG93bk1lbnUgfSBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1kcm9wZG93bic7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtaWNvbnMnO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4LCB0aGVtZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgTGF5b3V0SGVhZGVyIGZyb20gJy4vaGVhZGVyLWJhc2ljLmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBQcmltaXRpdmUgZnJvbSAnLi4vcHJpbWl0aXZlcyc7XG5cbmNvbnN0IEJhY2tCdXR0b24gPSBQcmltaXRpdmUuQm9yZGVybGVzc0J1dHRvbi5leHRlbmRgXG4gIGhlaWdodDogJHt0aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gIHdpZHRoOiAke3RoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgZm9udC1zaXplOiAxNnB4O1xuYDtcblxuY2xhc3MgSGVhZGVyTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBnZXRSaWdodENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBtZW51SXRlbXMgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFtZW51SXRlbXMubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8RHJvcGRvd25NZW51XG4gICAgICAgIGlkPXtgJHtjbGFzc1ByZWZpeH1fbmF2aWdhdGlvbi1oZWFkZXItbWVudWB9XG4gICAgICAgIG1lbnVJdGVtcz17bWVudUl0ZW1zfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckxlZnRDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25CYWNrQ2xpY2ssIHRpdGxlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHt0eXBlb2Ygb25CYWNrQ2xpY2sgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgPEJhY2tCdXR0b24gb25DbGljaz17b25CYWNrQ2xpY2t9PjxJY29uIHR5cGU9XCJpbmRpY2F0b3JcIiBuYW1lPVwiYXJyb3dMZWZ0XCIgLz48L0JhY2tCdXR0b24+fVxuICAgICAgICB7dGl0bGUgJiYgPFByaW1pdGl2ZS5UaXRsZT57dGl0bGV9PC9QcmltaXRpdmUuVGl0bGU+fVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckNlbnRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXRlbUlkcywgZ29Ub0l0ZW0sIGl0ZW1JZCwgaXRlbVNlcGFyYXRvciwgbGlzdEl0ZW1zRGlzYWJsZWQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXRoaXMucHJvcHMuaXRlbUlkcy5sZW5ndGgpIHJldHVybiBudWxsO1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdEl0ZW1zXG4gICAgICAgIGlkPXtgJHtjbGFzc1ByZWZpeH1fbmF2aWdhdGlvbi1oZWFkZXItaXRlbXNgfVxuICAgICAgICBpdGVtSWRzPXtpdGVtSWRzfVxuICAgICAgICBnb1RvSXRlbT17Z29Ub0l0ZW19XG4gICAgICAgIGl0ZW1JZD17aXRlbUlkfVxuICAgICAgICBpdGVtRWxlbWVudD17aXRlbVNlcGFyYXRvcn1cbiAgICAgICAgZGlzYWJsZWQ9e2xpc3RJdGVtc0Rpc2FibGVkfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dEhlYWRlclxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9uYXZpZ2F0aW9uLWhlYWRlcmB9XG4gICAgICAgIGxlZnQ9e3RoaXMucmVuZGVyTGVmdENvbnRlbnQoKX1cbiAgICAgICAgY2VudGVyPXt0aGlzLnJlbmRlckNlbnRlckNvbnRlbnQoKX1cbiAgICAgICAgcmlnaHQ9e3RoaXMuZ2V0UmlnaHRDb250ZW50KCl9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuSGVhZGVyTmF2aWdhdGlvbi5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkJhY2tDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGl0ZW1JZHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSkpLFxuICBnb1RvSXRlbTogUHJvcFR5cGVzLmZ1bmMsXG4gIGl0ZW1JZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbiAgaXRlbVNlcGFyYXRvcjogUHJvcFR5cGVzLm5vZGUsXG4gIGxpc3RJdGVtc0Rpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWVudUl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgXSkpLFxufTtcblxuSGVhZGVyTmF2aWdhdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiBudWxsLFxuICBvbkJhY2tDbGljazogbnVsbCxcbiAgaXRlbUlkczogW10sXG4gIGdvVG9JdGVtOiBudWxsLFxuICBpdGVtSWQ6IG51bGwsXG4gIGl0ZW1TZXBhcmF0b3I6IG51bGwsXG4gIGxpc3RJdGVtc0Rpc2FibGVkOiBmYWxzZSxcbiAgbWVudUl0ZW1zOiBbXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlck5hdmlnYXRpb247XG4iXX0=