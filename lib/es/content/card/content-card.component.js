var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  flex-direction: column;\n '], ['\n  display: flex;\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  flex-direction: column;\n ']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  flex: 1 1 calc(100% - ', '); \n  min-height: calc(100% - ', ');\n  display: flex;\n  flex-direction: column;\n '], ['\n  flex: 1 1 calc(100% - ', '); \n  min-height: calc(100% - ', ');\n  display: flex;\n  flex-direction: column;\n ']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import { classPrefix } from '../../constants';
import CardHeader from './content-card-header.component';
import * as Primitive from '../../primitives';

var Card = Primitive.Block.extend(_templateObject, function (props) {
  return props.isLastItem ? 0 : props.theme.gutterWidth;
}, function (props) {
  return props.isLastItem ? '2 1 auto' : '0 0 auto';
}, function (props) {
  return props.height ? props.height : 'auto';
});

var CardContent = styled.div(_templateObject2, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.header.height;
});

var ContentCard = function (_React$PureComponent) {
  _inherits(ContentCard, _React$PureComponent);

  function ContentCard(props) {
    _classCallCheck(this, ContentCard);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.onExpandClick = function () {
      var _this$props = _this.props,
          onExpand = _this$props.onExpand,
          id = _this$props.id;

      _this.setState({ isExpanded: !_this.state.isExpanded }, function () {
        if (onExpand) onExpand(id, _this.state.isExpanded);
      });
    };

    _this.state = {
      isExpanded: !!props.isExpanded && !!props.isExpandable
    };
    return _this;
  }

  ContentCard.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.isExpanded !== this.props.isExpanded) {
      this.setState({ isExpanded: nextProps.isExpanded });
    }
  };

  ContentCard.prototype.render = function render() {
    var cardClassPrefix = classPrefix + '_card';
    var _props = this.props,
        children = _props.children,
        isLastItem = _props.isLastItem,
        title = _props.title,
        height = _props.height,
        icon = _props.icon,
        onIconClick = _props.onIconClick,
        className = _props.className,
        id = _props.id,
        isExpandable = _props.isExpandable,
        loading = _props.loading,
        header = _props.header;


    var resolvedOnIconClick = isExpandable ? this.onExpandClick : onIconClick;

    return React.createElement(
      Card,
      {
        height: height,
        className: cardClassPrefix + ' ' + className,
        isLastItem: isLastItem,
        id: id
      },
      header && header,
      title && !header && React.createElement(CardHeader, {
        title: title,
        icon: icon,
        onIconClick: resolvedOnIconClick,
        isExpanded: this.state.isExpanded,
        isExpandable: isExpandable,
        loading: loading
      }),
      (!isExpandable || this.state.isExpanded) && React.createElement(
        CardContent,
        { className: cardClassPrefix + '_content' },
        children
      )
    );
  };

  return ContentCard;
}(React.PureComponent);

ContentCard.defaultProps = {
  children: undefined,
  isLastItem: false,
  title: undefined,
  height: undefined,
  icon: undefined,
  onIconClick: null,
  className: '',
  isExpanded: undefined,
  isExpandable: false,
  onExpand: undefined,
  loading: false,
  header: undefined
};

export default ContentCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJjbGFzc1ByZWZpeCIsIkNhcmRIZWFkZXIiLCJQcmltaXRpdmUiLCJDYXJkIiwiQmxvY2siLCJleHRlbmQiLCJwcm9wcyIsImlzTGFzdEl0ZW0iLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiaGVpZ2h0IiwiQ2FyZENvbnRlbnQiLCJkaXYiLCJoZWFkZXIiLCJDb250ZW50Q2FyZCIsIm9uRXhwYW5kQ2xpY2siLCJvbkV4cGFuZCIsImlkIiwic2V0U3RhdGUiLCJpc0V4cGFuZGVkIiwic3RhdGUiLCJpc0V4cGFuZGFibGUiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwicmVuZGVyIiwiY2FyZENsYXNzUHJlZml4IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImljb24iLCJvbkljb25DbGljayIsImNsYXNzTmFtZSIsImxvYWRpbmciLCJyZXNvbHZlZE9uSWNvbkNsaWNrIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0E7QUFDQSxTQUFTQyxXQUFULFFBQTRCLGlCQUE1QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsaUNBQXZCO0FBQ0EsT0FBTyxLQUFLQyxTQUFaLE1BQTJCLGtCQUEzQjs7QUFFQSxJQUFNQyxPQUFPRCxVQUFVRSxLQUFWLENBQWdCQyxNQUF2QixrQkFFYTtBQUFBLFNBQVVDLE1BQU1DLFVBQU4sR0FBbUIsQ0FBbkIsR0FBdUJELE1BQU1FLEtBQU4sQ0FBWUMsV0FBN0M7QUFBQSxDQUZiLEVBR0k7QUFBQSxTQUFVSCxNQUFN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LGNBQVksS0FGYTtBQUd6Qm9CLFNBQU9RLFNBSGtCO0FBSXpCekIsVUFBUXlCLFNBSmlCO0FBS3pCUCxRQUFNTyxTQUxtQjtBQU16Qk4sZUFBYSxJQU5ZO0FBT3pCQyxhQUFXLEVBUGM7QUFRekJYLGNBQVlnQixTQVJhO0FBU3pCZCxnQkFBYyxLQVRXO0FBVXpCTCxZQUFVbUIsU0FWZTtBQVd6QkosV0FBUyxLQVhnQjtBQVl6QmxCLFVBQVFzQjtBQVppQixDQUEzQjs7QUFlQSxlQUFlckIsV0FBZiIsImZpbGUiOiJjb250ZW50LWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICcuL2NvbnRlbnQtY2FyZC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIFByaW1pdGl2ZSBmcm9tICcuLi8uLi9wcmltaXRpdmVzJztcblxuY29uc3QgQ2FyZCA9IFByaW1pdGl2ZS5CbG9jay5leHRlbmRgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLmlzTGFzdEl0ZW0gPyAwIDogcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGgpfTsgXG4gIGZsZXg6ICR7cHJvcHMgPT4gKHByb3BzLmlzTGFzdEl0ZW0gPyAnMiAxIGF1dG8nIDogJzAgMCBhdXRvJyl9O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5oZWlnaHQgPyBwcm9wcy5oZWlnaHQgOiAnYXV0bycpfTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiBgO1xuXG5jb25zdCBDYXJkQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDEgMSBjYWxjKDEwMCUgLSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5oZWlnaHR9KTsgXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmhlaWdodH0pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuIGA7XG5cbmNsYXNzIENvbnRlbnRDYXJkIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0V4cGFuZGVkOiAhIXByb3BzLmlzRXhwYW5kZWQgJiYgISFwcm9wcy5pc0V4cGFuZGFibGUsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5pc0V4cGFuZGVkICE9PSB0aGlzLnByb3BzLmlzRXhwYW5kZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4cGFuZGVkOiBuZXh0UHJvcHMuaXNFeHBhbmRlZCB9KTtcbiAgICB9XG4gIH1cblxuICBvbkV4cGFuZENsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25FeHBhbmQsIGlkIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4cGFuZGVkOiAhdGhpcy5zdGF0ZS5pc0V4cGFuZGVkIH0sICgpID0+IHtcbiAgICAgIGlmIChvbkV4cGFuZCkgb25FeHBhbmQoaWQsIHRoaXMuc3RhdGUuaXNFeHBhbmRlZCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNhcmRDbGFzc1ByZWZpeCA9IGAke2NsYXNzUHJlZml4fV9jYXJkYDtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbiwgaXNMYXN0SXRlbSwgdGl0bGUsIGhlaWdodCwgaWNvbiwgb25JY29uQ2xpY2ssIGNsYXNzTmFtZSwgaWQsIGlzRXhwYW5kYWJsZSxcbiAgICAgIGxvYWRpbmcsIGhlYWRlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHJlc29sdmVkT25JY29uQ2xpY2sgPSBpc0V4cGFuZGFibGUgPyB0aGlzLm9uRXhwYW5kQ2xpY2sgOiBvbkljb25DbGljaztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZFxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NQcmVmaXh9ICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIGlzTGFzdEl0ZW09e2lzTGFzdEl0ZW19XG4gICAgICAgIGlkPXtpZH1cbiAgICAgID5cbiAgICAgICAge2hlYWRlciAmJiBoZWFkZXJ9XG4gICAgICAgIHt0aXRsZSAmJiAhaGVhZGVyICYmXG4gICAgICAgIDxDYXJkSGVhZGVyXG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgb25JY29uQ2xpY2s9e3Jlc29sdmVkT25JY29uQ2xpY2t9XG4gICAgICAgICAgaXNFeHBhbmRlZD17dGhpcy5zdGF0ZS5pc0V4cGFuZGVkfVxuICAgICAgICAgIGlzRXhwYW5kYWJsZT17aXNFeHBhbmRhYmxlfVxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgIC8+fVxuICAgICAgICB7KCFpc0V4cGFuZGFibGUgfHwgdGhpcy5zdGF0ZS5pc0V4cGFuZGVkKSAmJlxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NQcmVmaXh9X2NvbnRlbnRgfT57Y2hpbGRyZW59PC9DYXJkQ29udGVudD59XG4gICAgICA8L0NhcmQ+XG4gICAgKTtcbiAgfVxufVxuXG5Db250ZW50Q2FyZC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaXNMYXN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlLFxuICBdKSxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMubm9kZSxcbiAgb25JY29uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlzRXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLFxuICBpc0V4cGFuZGFibGU6IFByb3BUeXBlcy5ib29sLFxuICBvbkV4cGFuZDogUHJvcFR5cGVzLmZ1bmMsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICBoZWFkZXI6IFByb3BUeXBlcy5ub2RlLFxufTtcbkNvbnRlbnRDYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgaXNMYXN0SXRlbTogZmFsc2UsXG4gIHRpdGxlOiB1bmRlZmluZWQsXG4gIGhlaWdodDogdW5kZWZpbmVkLFxuICBpY29uOiB1bmRlZmluZWQsXG4gIG9uSWNvbkNsaWNrOiBudWxsLFxuICBjbGFzc05hbWU6ICcnLFxuICBpc0V4cGFuZGVkOiB1bmRlZmluZWQsXG4gIGlzRXhwYW5kYWJsZTogZmFsc2UsXG4gIG9uRXhwYW5kOiB1bmRlZmluZWQsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBoZWFkZXI6IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRDYXJkO1xuIl19