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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJjbGFzc1ByZWZpeCIsIkNhcmRIZWFkZXIiLCJQcmltaXRpdmUiLCJDYXJkIiwiQmxvY2siLCJleHRlbmQiLCJwcm9wcyIsImlzTGFzdEl0ZW0iLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiaGVpZ2h0IiwiQ2FyZENvbnRlbnQiLCJkaXYiLCJoZWFkZXIiLCJDb250ZW50Q2FyZCIsIm9uRXhwYW5kQ2xpY2siLCJvbkV4cGFuZCIsImlkIiwic2V0U3RhdGUiLCJpc0V4cGFuZGVkIiwic3RhdGUiLCJpc0V4cGFuZGFibGUiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV4dFByb3BzIiwicmVuZGVyIiwiY2FyZENsYXNzUHJlZml4IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImljb24iLCJvbkljb25DbGljayIsImNsYXNzTmFtZSIsInJlc29sdmVkT25JY29uQ2xpY2siLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQTtBQUNBLFNBQVNDLFdBQVQsUUFBNEIsaUJBQTVCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixpQ0FBdkI7QUFDQSxPQUFPLEtBQUtDLFNBQVosTUFBMkIsa0JBQTNCOztBQUVBLElBQU1DLE9BQU9ELFVBQVVFLEtBQVYsQ0FBZ0JDLE1BQXZCLGtCQUVhO0FBQUEsU0FBVUMsTUFBTUMsVUFBTixHQUFtQixDQUFuQixHQUF1QkQsTUFBTUUsS0FBTixDQUFZQyxXQUE3QztBQUFBLENBRmIsRUFHSTtBQUFBLFNBQVVILE1BQU1DLFVBQU4sR0FB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QVJhO0FBU3pCYixnQkFBYyxLQVRXO0FBVXpCTCxZQUFVa0I7QUFWZSxDQUEzQjs7QUFhQSxlQUFlcEIsV0FBZiIsImZpbGUiOiJjb250ZW50LWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICcuL2NvbnRlbnQtY2FyZC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIFByaW1pdGl2ZSBmcm9tICcuLi8uLi9wcmltaXRpdmVzJztcblxuY29uc3QgQ2FyZCA9IFByaW1pdGl2ZS5CbG9jay5leHRlbmRgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLmlzTGFzdEl0ZW0gPyAwIDogcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGgpfTsgXG4gIGZsZXg6ICR7cHJvcHMgPT4gKHByb3BzLmlzTGFzdEl0ZW0gPyAnMiAxIGF1dG8nIDogJzAgMCBhdXRvJyl9O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5oZWlnaHQgPyBwcm9wcy5oZWlnaHQgOiAnYXV0bycpfTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYDtcblxuY29uc3QgQ2FyZENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxIDEgY2FsYygxMDAlIC0gJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuaGVpZ2h0fSk7IFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5oZWlnaHR9KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYDtcblxuY2xhc3MgQ29udGVudENhcmQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRXhwYW5kZWQ6ICEhcHJvcHMuaXNFeHBhbmRlZCAmJiAhIXByb3BzLmlzRXhwYW5kYWJsZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmlzRXhwYW5kZWQgIT09IHRoaXMucHJvcHMuaXNFeHBhbmRlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhwYW5kZWQ6IG5leHRQcm9wcy5pc0V4cGFuZGVkIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uRXhwYW5kQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkV4cGFuZCwgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhwYW5kZWQ6ICF0aGlzLnN0YXRlLmlzRXhwYW5kZWQgfSwgKCkgPT4ge1xuICAgICAgaWYgKG9uRXhwYW5kKSBvbkV4cGFuZChpZCwgdGhpcy5zdGF0ZS5pc0V4cGFuZGVkKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2FyZENsYXNzUHJlZml4ID0gYCR7Y2xhc3NQcmVmaXh9X2NhcmRgO1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLCBpc0xhc3RJdGVtLCB0aXRsZSwgaGVpZ2h0LCBpY29uLCBvbkljb25DbGljaywgY2xhc3NOYW1lLCBpZCwgaXNFeHBhbmRhYmxlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgcmVzb2x2ZWRPbkljb25DbGljayA9IGlzRXhwYW5kYWJsZSA/IHRoaXMub25FeHBhbmRDbGljayA6IG9uSWNvbkNsaWNrO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkXG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICBjbGFzc05hbWU9e2Ake2NhcmRDbGFzc1ByZWZpeH0gJHtjbGFzc05hbWV9YH1cbiAgICAgICAgaXNMYXN0SXRlbT17aXNMYXN0SXRlbX1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgPlxuICAgICAgICB7dGl0bGUgJiZcbiAgICAgICAgPENhcmRIZWFkZXJcbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICBvbkljb25DbGljaz17cmVzb2x2ZWRPbkljb25DbGlja31cbiAgICAgICAgICBpc0V4cGFuZGVkPXt0aGlzLnN0YXRlLmlzRXhwYW5kZWR9XG4gICAgICAgICAgaXNFeHBhbmRhYmxlPXtpc0V4cGFuZGFibGV9XG4gICAgICAgIC8+fVxuICAgICAgICB7KCFpc0V4cGFuZGFibGUgfHwgdGhpcy5zdGF0ZS5pc0V4cGFuZGVkKSAmJlxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NQcmVmaXh9X2NvbnRlbnRgfT57Y2hpbGRyZW59PC9DYXJkQ29udGVudD59XG4gICAgICA8L0NhcmQ+XG4gICAgKTtcbiAgfVxufVxuXG5Db250ZW50Q2FyZC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaXNMYXN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlLFxuICBdKSxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMubm9kZSxcbiAgb25JY29uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlzRXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLFxuICBpc0V4cGFuZGFibGU6IFByb3BUeXBlcy5ib29sLFxuICBvbkV4cGFuZDogUHJvcFR5cGVzLmZ1bmMsXG59O1xuQ29udGVudENhcmQuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBpc0xhc3RJdGVtOiBmYWxzZSxcbiAgdGl0bGU6IHVuZGVmaW5lZCxcbiAgaGVpZ2h0OiB1bmRlZmluZWQsXG4gIGljb246IHVuZGVmaW5lZCxcbiAgb25JY29uQ2xpY2s6IG51bGwsXG4gIGNsYXNzTmFtZTogJycsXG4gIGlzRXhwYW5kZWQ6IHVuZGVmaW5lZCxcbiAgaXNFeHBhbmRhYmxlOiBmYWxzZSxcbiAgb25FeHBhbmQ6IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRDYXJkO1xuIl19