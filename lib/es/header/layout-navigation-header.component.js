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
import LayoutHeader from './layout-basic-header.component';
import { PrimitiveBorderlessButton, PrimitiveHeaderTitle } from '../primitives';

var BackButton = PrimitiveBorderlessButton.extend(_templateObject, theme.header.button.height, theme.header.button.height);

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
          PrimitiveHeaderTitle,
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

  LayoutNavigationHeader.prototype.render = function render() {
    return React.createElement(LayoutHeader, {
      className: classPrefix + '_navigation-header',
      left: this.renderLeftContent(),
      center: this.renderCenterContent(),
      right: this.getRightContent()
    });
  };

  return LayoutNavigationHeader;
}(React.PureComponent);

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

export default LayoutNavigationHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvbGF5b3V0LW5hdmlnYXRpb24taGVhZGVyLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJMaXN0SXRlbXMiLCJEcm9wZG93bk1lbnUiLCJJY29uIiwiY2xhc3NQcmVmaXgiLCJ0aGVtZSIsIkxheW91dEhlYWRlciIsIlByaW1pdGl2ZUJvcmRlcmxlc3NCdXR0b24iLCJQcmltaXRpdmVIZWFkZXJUaXRsZSIsIkJhY2tCdXR0b24iLCJleHRlbmQiLCJoZWFkZXIiLCJidXR0b24iLCJoZWlnaHQiLCJMYXlvdXROYXZpZ2F0aW9uSGVhZGVyIiwiZ2V0UmlnaHRDb250ZW50IiwibWVudUl0ZW1zIiwicHJvcHMiLCJsZW5ndGgiLCJyZW5kZXJMZWZ0Q29udGVudCIsIm9uQmFja0NsaWNrIiwidGl0bGUiLCJyZW5kZXJDZW50ZXJDb250ZW50IiwiaXRlbUlkcyIsImdvVG9JdGVtIiwiaXRlbUlkIiwiaXRlbVNlcGFyYXRvciIsImxpc3RJdGVtc0Rpc2FibGVkIiwicmVuZGVyIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQiw4QkFBMUI7QUFDQSxTQUFTQyxZQUFULFFBQTZCLDRCQUE3QjtBQUNBLFNBQVNDLElBQVQsUUFBcUIseUJBQXJCO0FBQ0E7QUFDQSxTQUFTQyxXQUFULEVBQXNCQyxLQUF0QixRQUFtQyxjQUFuQztBQUNBLE9BQU9DLFlBQVAsTUFBeUIsaUNBQXpCO0FBQ0EsU0FBU0MseUJBQVQsRUFBb0NDLG9CQUFwQyxRQUFnRSxlQUFoRTs7QUFFQSxJQUFNQyxhQUFhRiwwQkFBMEJHLE1BQXZDLGtCQUNNTCxNQUFNTSxNQUFOLENBQWFDLE1BQWIsQ0FBb0JDLE1BRDFCLEVBRUtSLE1BQU1NLE1BQU4sQ0FBYUMsTUFBYixDQUFvQkMsTUFGekIsQ0FBTjs7SUFNTUMsc0I7Ozs7Ozs7Ozs7OztnS0FDSkMsZSxHQUFrQixZQUFNO0FBQUEsVUFDZEMsU0FEYyxHQUNBLE1BQUtDLEtBREwsQ0FDZEQsU0FEYzs7QUFFdEIsVUFBSSxDQUFDQSxVQUFVRSxNQUFmLEVBQXVCLE9BQU8sSUFBUDs7QUFFdkIsYUFDRSxvQkFBQyxZQUFEO0FBQ0UsWUFBT2QsV0FBUCw0QkFERjtBQUVFLG1CQUFXWTtBQUZiLFFBREY7QUFNRCxLLFFBRURHLGlCLEdBQW9CLFlBQU07QUFBQSx3QkFDTyxNQUFLRixLQURaO0FBQUEsVUFDaEJHLFdBRGdCLGVBQ2hCQSxXQURnQjtBQUFBLFVBQ0hDLEtBREcsZUFDSEEsS0FERzs7QUFFeEIsYUFDRTtBQUFDLGFBQUQsQ0FBTyxRQUFQO0FBQUE7QUFDRyxlQUFPRCxXQUFQLEtBQXVCLFVBQXZCLElBQ0Q7QUFBQyxvQkFBRDtBQUFBLFlBQVksU0FBU0EsV0FBckI7QUFBa0MsOEJBQUMsSUFBRCxJQUFNLE1BQUssV0FBWCxFQUF1QixNQUFLLFdBQTVCO0FBQWxDLFNBRkY7QUFHR0MsaUJBQVM7QUFBQyw4QkFBRDtBQUFBO0FBQXVCQTtBQUF2QjtBQUhaLE9BREY7QUFPRCxLLFFBRURDLG1CLEdBQXNCLFlBQU07QUFBQSx5QkFHdEIsTUFBS0wsS0FIaUI7QUFBQSxVQUV4Qk0sT0FGd0IsZ0JBRXhCQSxPQUZ3QjtBQUFBLFVBRWZDLFFBRmUsZ0JBRWZBLFFBRmU7QUFBQSxVQUVMQyxNQUZLLGdCQUVMQSxNQUZLO0FBQUEsVUFFR0MsYUFGSCxnQkFFR0EsYUFGSDtBQUFBLFVBRWtCQyxpQkFGbEIsZ0JBRWtCQSxpQkFGbEI7OztBQUsxQixVQUFJLENBQUMsTUFBS1YsS0FBTCxDQUFXTSxPQUFYLENBQW1CTCxNQUF4QixFQUFnQyxPQUFPLElBQVA7QUFDaEMsYUFDRSxvQkFBQyxTQUFEO0FBQ0UsWUFBT2QsV0FBUCw2QkFERjtBQUVFLGlCQUFTbUIsT0FGWDtBQUdFLGtCQUFVQyxRQUhaO0FBSUUsZ0JBQVFDLE1BSlY7QUFLRSxxQkFBYUMsYUFMZjtBQU1FLGtCQUFVQztBQU5aLFFBREY7QUFVRCxLOzs7bUNBRURDLE0scUJBQVM7QUFDUCxXQUNFLG9CQUFDLFlBQUQ7QUFDRSxpQkFBY3hCLFdBQWQsdUJBREY7QUFFRSxZQUFNLEtBQUtlLGlCQUFMLEVBRlI7QUFHRSxjQUFRLEtBQUtHLG1CQUFMLEVBSFY7QUFJRSxhQUFPLEtBQUtQLGVBQUw7QUFKVCxNQURGO0FBUUQsRzs7O0VBbkRrQ2hCLE1BQU04QixhOztBQTJFM0NmLHVCQUF1QmdCLFlBQXZCLEdBQXNDO0FBQ3BDVCxTQUFPLElBRDZCO0FBRXBDRCxlQUFhLElBRnVCO0FBR3BDRyxXQUFTLEVBSDJCO0FBSXBDQyxZQUFVLElBSjBCO0FBS3BDQyxVQUFRLElBTDRCO0FBTXBDQyxpQkFBZSxJQU5xQjtBQU9wQ0MscUJBQW1CLEtBUGlCO0FBUXBDWCxhQUFXO0FBUnlCLENBQXRDOztBQVdBLGVBQWVGLHNCQUFmIiwiZmlsZSI6ImxheW91dC1uYXZpZ2F0aW9uLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpc3RJdGVtcyB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWxpc3QtaXRlbXMnO1xuaW1wb3J0IHsgRHJvcGRvd25NZW51IH0gZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtZHJvcGRvd24nO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LWljb25zJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IExheW91dEhlYWRlciBmcm9tICcuL2xheW91dC1iYXNpYy1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFByaW1pdGl2ZUJvcmRlcmxlc3NCdXR0b24sIFByaW1pdGl2ZUhlYWRlclRpdGxlIH0gZnJvbSAnLi4vcHJpbWl0aXZlcyc7XG5cbmNvbnN0IEJhY2tCdXR0b24gPSBQcmltaXRpdmVCb3JkZXJsZXNzQnV0dG9uLmV4dGVuZGBcbiAgaGVpZ2h0OiAke3RoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgd2lkdGg6ICR7dGhlbWUuaGVhZGVyLmJ1dHRvbi5oZWlnaHR9O1xuICBmb250LXNpemU6IDE2cHg7XG5gO1xuXG5jbGFzcyBMYXlvdXROYXZpZ2F0aW9uSGVhZGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGdldFJpZ2h0Q29udGVudCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG1lbnVJdGVtcyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIW1lbnVJdGVtcy5sZW5ndGgpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wZG93bk1lbnVcbiAgICAgICAgaWQ9e2Ake2NsYXNzUHJlZml4fV9uYXZpZ2F0aW9uLWhlYWRlci1tZW51YH1cbiAgICAgICAgbWVudUl0ZW1zPXttZW51SXRlbXN9XG4gICAgICAvPlxuICAgICk7XG4gIH07XG5cbiAgcmVuZGVyTGVmdENvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkJhY2tDbGljaywgdGl0bGUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge3R5cGVvZiBvbkJhY2tDbGljayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgICA8QmFja0J1dHRvbiBvbkNsaWNrPXtvbkJhY2tDbGlja30+PEljb24gdHlwZT1cImluZGljYXRvclwiIG5hbWU9XCJhcnJvd0xlZnRcIiAvPjwvQmFja0J1dHRvbj59XG4gICAgICAgIHt0aXRsZSAmJiA8UHJpbWl0aXZlSGVhZGVyVGl0bGU+e3RpdGxlfTwvUHJpbWl0aXZlSGVhZGVyVGl0bGU+fVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlckNlbnRlckNvbnRlbnQgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgaXRlbUlkcywgZ29Ub0l0ZW0sIGl0ZW1JZCwgaXRlbVNlcGFyYXRvciwgbGlzdEl0ZW1zRGlzYWJsZWQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIXRoaXMucHJvcHMuaXRlbUlkcy5sZW5ndGgpIHJldHVybiBudWxsO1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdEl0ZW1zXG4gICAgICAgIGlkPXtgJHtjbGFzc1ByZWZpeH1fbmF2aWdhdGlvbi1oZWFkZXItaXRlbXNgfVxuICAgICAgICBpdGVtSWRzPXtpdGVtSWRzfVxuICAgICAgICBnb1RvSXRlbT17Z29Ub0l0ZW19XG4gICAgICAgIGl0ZW1JZD17aXRlbUlkfVxuICAgICAgICBpdGVtRWxlbWVudD17aXRlbVNlcGFyYXRvcn1cbiAgICAgICAgZGlzYWJsZWQ9e2xpc3RJdGVtc0Rpc2FibGVkfVxuICAgICAgLz5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dEhlYWRlclxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9uYXZpZ2F0aW9uLWhlYWRlcmB9XG4gICAgICAgIGxlZnQ9e3RoaXMucmVuZGVyTGVmdENvbnRlbnQoKX1cbiAgICAgICAgY2VudGVyPXt0aGlzLnJlbmRlckNlbnRlckNvbnRlbnQoKX1cbiAgICAgICAgcmlnaHQ9e3RoaXMuZ2V0UmlnaHRDb250ZW50KCl9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuTGF5b3V0TmF2aWdhdGlvbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkJhY2tDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGl0ZW1JZHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLm51bWJlcixcbiAgXSkpLFxuICBnb1RvSXRlbTogUHJvcFR5cGVzLmZ1bmMsXG4gIGl0ZW1JZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICBdKSxcbiAgaXRlbVNlcGFyYXRvcjogUHJvcFR5cGVzLm5vZGUsXG4gIGxpc3RJdGVtc0Rpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgbWVudUl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5udW1iZXIsXG4gICAgUHJvcFR5cGVzLnNoYXBlKHt9KSxcbiAgXSkpLFxufTtcblxuTGF5b3V0TmF2aWdhdGlvbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiBudWxsLFxuICBvbkJhY2tDbGljazogbnVsbCxcbiAgaXRlbUlkczogW10sXG4gIGdvVG9JdGVtOiBudWxsLFxuICBpdGVtSWQ6IG51bGwsXG4gIGl0ZW1TZXBhcmF0b3I6IG51bGwsXG4gIGxpc3RJdGVtc0Rpc2FibGVkOiBmYWxzZSxcbiAgbWVudUl0ZW1zOiBbXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dE5hdmlnYXRpb25IZWFkZXI7XG4iXX0=