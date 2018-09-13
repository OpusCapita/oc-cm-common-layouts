var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  flex-direction: column;\n  '], ['\n  display: flex;\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  flex-direction: column;\n  ']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  flex: 1 1 calc(100% - ', '); \n  min-height: calc(100% - ', ');\n  display: flex;\n  flex-direction: column;\n  '], ['\n  flex: 1 1 calc(100% - ', '); \n  min-height: calc(100% - ', ');\n  display: flex;\n  flex-direction: column;\n  ']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import { classPrefix, theme } from '../../constants';
import CardHeader from './content-card-header.component';
import * as Primitive from '../../primitives';

var Card = Primitive.Block.extend(_templateObject, function (props) {
  return props.isLastItem ? 0 : theme.gutterWidth;
}, function (props) {
  return props.isLastItem ? '2 1 auto' : '0 0 auto';
}, function (props) {
  return props.height ? props.height : 'auto';
});

var CardContent = styled.div(_templateObject2, theme.header.height, theme.header.height);

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
        isExpandable = _props.isExpandable;


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
        isExpandable: isExpandable
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
  onExpand: undefined
};

export default ContentCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJjbGFzc1ByZWZpeCIsInRoZW1lIiwiQ2FyZEhlYWRlciIsIlByaW1pdGl2ZSIsIkNhcmQiLCJCbG9jayIsImV4dGVuZCIsInByb3BzIiwiaXNMYXN0SXRlbSIsImd1dHRlcldpZHRoIiwiaGVpZ2h0IiwiQ2FyZENvbnRlbnQiLCJkaXYiLCJoZWFkZXIiLCJDb250ZW50Q2FyZCIsIm9uRXhwYW5kQ2xpY2siLCJvbkV4cGFuZCIsImlkIiwic2V0U3RhdGUiLCJpc0V4cGFuZGVkIiwic3RhdGUiLCJpc0V4cGFuZGFibGUiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwicmVuZGVyIiwiY2FyZENsYXNzUHJlZml4IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImljb24iLCJvbkljb25DbGljayIsImNsYXNzTmFtZSIsInJlc29sdmVkT25JY29uQ2xpY2siLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQTtBQUNBLFNBQVNDLFdBQVQsRUFBc0JDLEtBQXRCLFFBQW1DLGlCQUFuQztBQUNBLE9BQU9DLFVBQVAsTUFBdUIsaUNBQXZCO0FBQ0EsT0FBTyxLQUFLQyxTQUFaLE1BQTJCLGtCQUEzQjs7QUFFQSxJQUFNQyxPQUFPRCxVQUFVRSxLQUFWLENBQWdCQyxNQUF2QixrQkFFYTtBQUFBLFNBQVVDLE1BQU1DLFVBQU4sR0FBbUIsQ0FBbkIsR0FBdUJQLE1BQU1RLFdBQXZDO0FBQUEsQ0FGYixFQUdJO0FBQUEsU0FBVUYsTUFBTUMsVUFBTixH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IiwiZmlsZSI6ImNvbnRlbnQtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4LCB0aGVtZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICcuL2NvbnRlbnQtY2FyZC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIFByaW1pdGl2ZSBmcm9tICcuLi8uLi9wcmltaXRpdmVzJztcblxuY29uc3QgQ2FyZCA9IFByaW1pdGl2ZS5CbG9jay5leHRlbmRgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLmlzTGFzdEl0ZW0gPyAwIDogdGhlbWUuZ3V0dGVyV2lkdGgpfTsgXG4gIGZsZXg6ICR7cHJvcHMgPT4gKHByb3BzLmlzTGFzdEl0ZW0gPyAnMiAxIGF1dG8nIDogJzAgMCBhdXRvJyl9O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5oZWlnaHQgPyBwcm9wcy5oZWlnaHQgOiAnYXV0bycpfTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYDtcblxuY29uc3QgQ2FyZENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxIDEgY2FsYygxMDAlIC0gJHt0aGVtZS5oZWFkZXIuaGVpZ2h0fSk7IFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAke3RoZW1lLmhlYWRlci5oZWlnaHR9KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYDtcblxuY2xhc3MgQ29udGVudENhcmQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRXhwYW5kZWQ6ICEhcHJvcHMuaXNFeHBhbmRlZCAmJiAhIXByb3BzLmlzRXhwYW5kYWJsZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmlzRXhwYW5kZWQgIT09IHRoaXMucHJvcHMuaXNFeHBhbmRlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhwYW5kZWQ6IG5leHRQcm9wcy5pc0V4cGFuZGVkIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uRXhwYW5kQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkV4cGFuZCwgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhwYW5kZWQ6ICF0aGlzLnN0YXRlLmlzRXhwYW5kZWQgfSwgKCkgPT4ge1xuICAgICAgaWYgKG9uRXhwYW5kKSBvbkV4cGFuZChpZCwgdGhpcy5zdGF0ZS5pc0V4cGFuZGVkKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2FyZENsYXNzUHJlZml4ID0gYCR7Y2xhc3NQcmVmaXh9X2NhcmRgO1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLCBpc0xhc3RJdGVtLCB0aXRsZSwgaGVpZ2h0LCBpY29uLCBvbkljb25DbGljaywgY2xhc3NOYW1lLCBpZCwgaXNFeHBhbmRhYmxlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgcmVzb2x2ZWRPbkljb25DbGljayA9IGlzRXhwYW5kYWJsZSA/IHRoaXMub25FeHBhbmRDbGljayA6IG9uSWNvbkNsaWNrO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkXG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICBjbGFzc05hbWU9e2Ake2NhcmRDbGFzc1ByZWZpeH0gJHtjbGFzc05hbWV9YH1cbiAgICAgICAgaXNMYXN0SXRlbT17aXNMYXN0SXRlbX1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgPlxuICAgICAgICB7dGl0bGUgJiZcbiAgICAgICAgPENhcmRIZWFkZXJcbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICBvbkljb25DbGljaz17cmVzb2x2ZWRPbkljb25DbGlja31cbiAgICAgICAgICBpc0V4cGFuZGVkPXt0aGlzLnN0YXRlLmlzRXhwYW5kZWR9XG4gICAgICAgICAgaXNFeHBhbmRhYmxlPXtpc0V4cGFuZGFibGV9XG4gICAgICAgIC8+fVxuICAgICAgICB7KCFpc0V4cGFuZGFibGUgfHwgdGhpcy5zdGF0ZS5pc0V4cGFuZGVkKSAmJlxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NQcmVmaXh9X2NvbnRlbnRgfT57Y2hpbGRyZW59PC9DYXJkQ29udGVudD59XG4gICAgICA8L0NhcmQ+XG4gICAgKTtcbiAgfVxufVxuXG5Db250ZW50Q2FyZC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaXNMYXN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlLFxuICBdKSxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMubm9kZSxcbiAgb25JY29uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlzRXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLFxuICBpc0V4cGFuZGFibGU6IFByb3BUeXBlcy5ib29sLFxuICBvbkV4cGFuZDogUHJvcFR5cGVzLmZ1bmMsXG59O1xuQ29udGVudENhcmQuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBpc0xhc3RJdGVtOiBmYWxzZSxcbiAgdGl0bGU6IHVuZGVmaW5lZCxcbiAgaGVpZ2h0OiB1bmRlZmluZWQsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgb25JY29uQ2xpY2s6IG51bGwsXG4gIGNsYXNzTmFtZTogJycsXG4gIGlzRXhwYW5kZWQ6IHVuZGVmaW5lZCxcbiAgaXNFeHBhbmRhYmxlOiBmYWxzZSxcbiAgb25FeHBhbmQ6IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRDYXJkO1xuIl19