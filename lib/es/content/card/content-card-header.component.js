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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiRmFQbHVzIiwiRmFNaW51cyIsImNsYXNzUHJlZml4IiwidGhlbWUiLCJQcmltaXRpdmUiLCJDYXJkSWNvbiIsIkJvcmRlcmxlc3NCdXR0b24iLCJleHRlbmQiLCJoZWFkZXIiLCJoZWlnaHQiLCJidXR0b24iLCJDYXJkVGl0bGUiLCJTdWJ0aXRsZSIsIkNhcmRIZWFkZXIiLCJndXR0ZXJXaWR0aCIsIkNvbnRlbnRDYXJkSGVhZGVyIiwiZ2V0RXhwYW5kZWRJY29uIiwicHJvcHMiLCJpc0V4cGFuZGVkIiwicmVuZGVyIiwiaWNvbiIsInRpdGxlIiwib25JY29uQ2xpY2siLCJpc0V4cGFuZGFibGUiLCJjYXJkQ2xhc3NQcmVmaXgiLCJyZXNvbHZlZEljb24iLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQix5QkFBbkI7QUFDQSxPQUFPQyxPQUFQLE1BQW9CLDBCQUFwQjs7QUFFQTtBQUNBLFNBQVNDLFdBQVQsRUFBc0JDLEtBQXRCLFFBQW1DLGlCQUFuQztBQUNBLE9BQU8sS0FBS0MsU0FBWixNQUEyQixrQkFBM0I7O0FBRUEsSUFBTUMsV0FBV0QsVUFBVUUsZ0JBQVYsQ0FBMkJDLE1BQXRDLGtCQUNNSixNQUFNSyxNQUFOLENBQWFDLE1BRG5CLEVBRUtOLE1BQU1LLE1BQU4sQ0FBYUMsTUFGbEIsRUFNUU4sTUFBTUssTUFBTixDQUFhRSxNQUFiLENBQW9CRCxNQU41QixFQU9PTixNQUFNSyxNQUFOLENBQWFFLE1BQWIsQ0FBb0JELE1BUDNCLENBQU47O0FBV0EsSUFBTUUsWUFBWVAsVUFBVVEsUUFBVixDQUFtQkwsTUFBL0Isa0JBQU47O0FBR0EsSUFBTU0sYUFBYWQsT0FBT1MsTUFBcEIsbUJBQ01MLE1BQU1LLE1BQU4sQ0FBYUMsTUFEbkIsRUFJYU4sTUFBTVcsV0FKbkIsQ0FBTjs7SUFRTUMsaUI7Ozs7Ozs7Ozs7OztnS0FDSkMsZSxHQUFrQjtBQUFBLGFBQVEsTUFBS0MsS0FBTCxDQUFXQyxVQUFYLEdBQXdCLG9CQUFDLE9BQUQsT0FBeEIsR0FBc0Msb0JBQUMsTUFBRCxPQUE5QztBQUFBLEs7Ozs4QkFFbEJDLE0scUJBQVM7QUFBQSxpQkFHSCxLQUFLRixLQUhGO0FBQUEsUUFFTEcsSUFGSyxVQUVMQSxJQUZLO0FBQUEsUUFFQ0MsS0FGRCxVQUVDQSxLQUZEO0FBQUEsUUFFUUMsV0FGUixVQUVRQSxXQUZSO0FBQUEsUUFFcUJKLFVBRnJCLFVBRXFCQSxVQUZyQjtBQUFBLFFBRWlDSyxZQUZqQyxVQUVpQ0EsWUFGakM7O0FBSVAsUUFBTUMsa0JBQXFCdEIsV0FBckIsVUFBTjtBQUNBLFFBQU11QixlQUFlRixlQUFlLEtBQUtQLGVBQUwsQ0FBcUJFLFVBQXJCLENBQWYsR0FBa0RFLElBQXZFOztBQUVBLFdBQ0U7QUFBQyxnQkFBRDtBQUFBLFFBQVksV0FBY0ksZUFBZCxZQUFaO0FBQ0U7QUFBQyxpQkFBRDtBQUFBO0FBQVlIO0FBQVosT0FERjtBQUVHSSxzQkFDRDtBQUFDLGdCQUFEO0FBQUEsVUFBVSxTQUFTSCxXQUFuQixFQUFnQyxVQUFVLENBQUNBLFdBQTNDO0FBQXlERztBQUF6RDtBQUhGLEtBREY7QUFPRCxHOzs7RUFqQjZCNUIsTUFBTTZCLGE7O0FBNEJ0Q1gsa0JBQWtCWSxZQUFsQixHQUFpQztBQUMvQk4sU0FBT08sU0FEd0I7QUFFL0JSLFFBQU1RLFNBRnlCO0FBRy9CTixlQUFhTSxTQUhrQjtBQUkvQkwsZ0JBQWM7QUFKaUIsQ0FBakM7O0FBT0EsZUFBZVIsaUJBQWYiLCJmaWxlIjoiY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEZhUGx1cyBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvcGx1cyc7XG5pbXBvcnQgRmFNaW51cyBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvbWludXMnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIFByaW1pdGl2ZSBmcm9tICcuLi8uLi9wcmltaXRpdmVzJztcblxuY29uc3QgQ2FyZEljb24gPSBQcmltaXRpdmUuQm9yZGVybGVzc0J1dHRvbi5leHRlbmRgXG4gIGhlaWdodDogJHt0aGVtZS5oZWFkZXIuaGVpZ2h0fTtcbiAgd2lkdGg6ICR7dGhlbWUuaGVhZGVyLmhlaWdodH07XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHN2ZyB7XG4gICAgaGVpZ2h0OiAke3RoZW1lLmhlYWRlci5idXR0b24uaGVpZ2h0fTtcbiAgICB3aWR0aDogJHt0aGVtZS5oZWFkZXIuYnV0dG9uLmhlaWdodH07XG4gIH1cbmA7XG5cbmNvbnN0IENhcmRUaXRsZSA9IFByaW1pdGl2ZS5TdWJ0aXRsZS5leHRlbmRgXG5gO1xuXG5jb25zdCBDYXJkSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgaGVpZ2h0OiAke3RoZW1lLmhlYWRlci5oZWlnaHR9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLmd1dHRlcldpZHRofTtcbmA7XG5cblxuY2xhc3MgQ29udGVudENhcmRIZWFkZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgZ2V0RXhwYW5kZWRJY29uID0gKCkgPT4gKCh0aGlzLnByb3BzLmlzRXhwYW5kZWQgPyA8RmFNaW51cyAvPiA6IDxGYVBsdXMgLz4pKTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaWNvbiwgdGl0bGUsIG9uSWNvbkNsaWNrLCBpc0V4cGFuZGVkLCBpc0V4cGFuZGFibGUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2FyZENsYXNzUHJlZml4ID0gYCR7Y2xhc3NQcmVmaXh9X2NhcmRgO1xuICAgIGNvbnN0IHJlc29sdmVkSWNvbiA9IGlzRXhwYW5kYWJsZSA/IHRoaXMuZ2V0RXhwYW5kZWRJY29uKGlzRXhwYW5kZWQpIDogaWNvbjtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZEhlYWRlciBjbGFzc05hbWU9e2Ake2NhcmRDbGFzc1ByZWZpeH1faGVhZGVyYH0+XG4gICAgICAgIDxDYXJkVGl0bGU+e3RpdGxlfTwvQ2FyZFRpdGxlPlxuICAgICAgICB7cmVzb2x2ZWRJY29uICYmXG4gICAgICAgIDxDYXJkSWNvbiBvbkNsaWNrPXtvbkljb25DbGlja30gZGlzYWJsZWQ9eyFvbkljb25DbGlja30+e3Jlc29sdmVkSWNvbn08L0NhcmRJY29uPn1cbiAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICApO1xuICB9XG59XG5cbkNvbnRlbnRDYXJkSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ub2RlXSksXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuICBvbkljb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGlzRXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGlzRXhwYW5kYWJsZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5Db250ZW50Q2FyZEhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiB1bmRlZmluZWQsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgb25JY29uQ2xpY2s6IHVuZGVmaW5lZCxcbiAgaXNFeHBhbmRhYmxlOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRDYXJkSGVhZGVyO1xuIl19