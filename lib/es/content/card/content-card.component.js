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
        loading = _props.loading;


    var resolvedOnIconClick = isExpandable ? this.onExpandClick : onIconClick;

    return React.createElement(
      Card,
      {
        height: height,
        className: cardClassPrefix + ' ' + className,
        isLastItem: isLastItem,
        id: id
      },
      title && React.createElement(CardHeader, {
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
  loading: false
};

export default ContentCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJjbGFzc1ByZWZpeCIsIkNhcmRIZWFkZXIiLCJQcmltaXRpdmUiLCJDYXJkIiwiQmxvY2siLCJleHRlbmQiLCJwcm9wcyIsImlzTGFzdEl0ZW0iLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiaGVpZ2h0IiwiQ2FyZENvbnRlbnQiLCJkaXYiLCJoZWFkZXIiLCJDb250ZW50Q2FyZCIsIm9uRXhwYW5kQ2xpY2siLCJvbkV4cGFuZCIsImlkIiwic2V0U3RhdGUiLCJpc0V4cGFuZGVkIiwic3RhdGUiLCJpc0V4cGFuZGFibGUiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwicmVuZGVyIiwiY2FyZENsYXNzUHJlZml4IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImljb24iLCJvbkljb25DbGljayIsImNsYXNzTmFtZSIsImxvYWRpbmciLCJyZXNvbHZlZE9uSWNvbkNsaWNrIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0E7QUFDQSxTQUFTQyxXQUFULFFBQTRCLGlCQUE1QjtBQUNBLE9BQU9DLFVBQVAsTUFBdUIsaUNBQXZCO0FBQ0EsT0FBTyxLQUFLQyxTQUFaLE1BQTJCLGtCQUEzQjs7QUFFQSxJQUFNQyxPQUFPRCxVQUFVRSxLQUFWLENBQWdCQyxNQUF2QixrQkFFYTtBQUFBLFNBQVVDLE1BQU1DLFVBQU4sR0FBbUIsQ0FBbkIsR0FBdUJELE1BQU1FLEtBQU4sQ0FBWUMsV0FBN0M7QUFBQSxDQUZiLEVBR0k7QUFBQSxTQUFVSCxNQUFN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LFNBTG1CO0FBTXpCTixlQUFhLElBTlk7QUFPekJDLGFBQVcsRUFQYztBQVF6QlgsY0FBWWdCLFNBUmE7QUFTekJkLGdCQUFjLEtBVFc7QUFVekJMLFlBQVVtQixTQVZlO0FBV3pCSixXQUFTO0FBWGdCLENBQTNCOztBQWNBLGVBQWVqQixXQUFmIiwiZmlsZSI6ImNvbnRlbnQtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4IH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJy4vY29udGVudC1jYXJkLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0ICogYXMgUHJpbWl0aXZlIGZyb20gJy4uLy4uL3ByaW1pdGl2ZXMnO1xuXG5jb25zdCBDYXJkID0gUHJpbWl0aXZlLkJsb2NrLmV4dGVuZGBcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMuaXNMYXN0SXRlbSA/IDAgOiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aCl9OyBcbiAgZmxleDogJHtwcm9wcyA9PiAocHJvcHMuaXNMYXN0SXRlbSA/ICcyIDEgYXV0bycgOiAnMCAwIGF1dG8nKX07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmhlaWdodCA/IHByb3BzLmhlaWdodCA6ICdhdXRvJyl9O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuIGA7XG5cbmNvbnN0IENhcmRDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMSAxIGNhbGMoMTAwJSAtICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmhlaWdodH0pOyBcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuaGVpZ2h0fSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gYDtcblxuY2xhc3MgQ29udGVudENhcmQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRXhwYW5kZWQ6ICEhcHJvcHMuaXNFeHBhbmRlZCAmJiAhIXByb3BzLmlzRXhwYW5kYWJsZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmlzRXhwYW5kZWQgIT09IHRoaXMucHJvcHMuaXNFeHBhbmRlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhwYW5kZWQ6IG5leHRQcm9wcy5pc0V4cGFuZGVkIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uRXhwYW5kQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkV4cGFuZCwgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhwYW5kZWQ6ICF0aGlzLnN0YXRlLmlzRXhwYW5kZWQgfSwgKCkgPT4ge1xuICAgICAgaWYgKG9uRXhwYW5kKSBvbkV4cGFuZChpZCwgdGhpcy5zdGF0ZS5pc0V4cGFuZGVkKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2FyZENsYXNzUHJlZml4ID0gYCR7Y2xhc3NQcmVmaXh9X2NhcmRgO1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLCBpc0xhc3RJdGVtLCB0aXRsZSwgaGVpZ2h0LCBpY29uLCBvbkljb25DbGljaywgY2xhc3NOYW1lLCBpZCwgaXNFeHBhbmRhYmxlLFxuICAgICAgbG9hZGluZyxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHJlc29sdmVkT25JY29uQ2xpY2sgPSBpc0V4cGFuZGFibGUgPyB0aGlzLm9uRXhwYW5kQ2xpY2sgOiBvbkljb25DbGljaztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZFxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NQcmVmaXh9ICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIGlzTGFzdEl0ZW09e2lzTGFzdEl0ZW19XG4gICAgICAgIGlkPXtpZH1cbiAgICAgID5cbiAgICAgICAge3RpdGxlICYmXG4gICAgICAgIDxDYXJkSGVhZGVyXG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgb25JY29uQ2xpY2s9e3Jlc29sdmVkT25JY29uQ2xpY2t9XG4gICAgICAgICAgaXNFeHBhbmRlZD17dGhpcy5zdGF0ZS5pc0V4cGFuZGVkfVxuICAgICAgICAgIGlzRXhwYW5kYWJsZT17aXNFeHBhbmRhYmxlfVxuICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgIC8+fVxuICAgICAgICB7KCFpc0V4cGFuZGFibGUgfHwgdGhpcy5zdGF0ZS5pc0V4cGFuZGVkKSAmJlxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NQcmVmaXh9X2NvbnRlbnRgfT57Y2hpbGRyZW59PC9DYXJkQ29udGVudD59XG4gICAgICA8L0NhcmQ+XG4gICAgKTtcbiAgfVxufVxuXG5Db250ZW50Q2FyZC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaXNMYXN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlLFxuICBdKSxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMubm9kZSxcbiAgb25JY29uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlzRXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLFxuICBpc0V4cGFuZGFibGU6IFByb3BUeXBlcy5ib29sLFxuICBvbkV4cGFuZDogUHJvcFR5cGVzLmZ1bmMsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxufTtcbkNvbnRlbnRDYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgaXNMYXN0SXRlbTogZmFsc2UsXG4gIHRpdGxlOiB1bmRlZmluZWQsXG4gIGhlaWdodDogdW5kZWZpbmVkLFxuICBpY29uOiB1bmRlZmluZWQsXG4gIG9uSWNvbkNsaWNrOiBudWxsLFxuICBjbGFzc05hbWU6ICcnLFxuICBpc0V4cGFuZGVkOiB1bmRlZmluZWQsXG4gIGlzRXhwYW5kYWJsZTogZmFsc2UsXG4gIG9uRXhwYW5kOiB1bmRlZmluZWQsXG4gIGxvYWRpbmc6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudENhcmQ7XG4iXX0=