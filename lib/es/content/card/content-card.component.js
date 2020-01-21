function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1 1 calc(100% - ", "); \n  min-height: calc(100% - ", ");\n  display: flex;\n  flex-direction: column;\n "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  margin-bottom: ", "; \n  flex: ", ";\n  width: 100%;\n  height: ", ";\n  flex-direction: column;\n "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; // App imports

import { classPrefix } from '../../constants';
import CardHeader from './content-card-header.component';
import * as Primitive from '../../primitives';
var Card = styled(Primitive.Block)(_templateObject(), function (props) {
  return props.isLastItem ? 0 : props.theme.gutterWidth;
}, function (props) {
  return props.isLastItem ? '2 1 auto' : '0 0 auto';
}, function (props) {
  return props.height ? props.height : 'auto';
});
var CardContent = styled.div(_templateObject2(), function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.header.height;
});

var ContentCard =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(ContentCard, _React$PureComponent);

  function ContentCard(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "onExpandClick", function () {
      var _this$props = _this.props,
          onExpand = _this$props.onExpand,
          id = _this$props.id;

      _this.setState({
        isExpanded: !_this.state.isExpanded
      }, function () {
        if (onExpand) onExpand(id, _this.state.isExpanded);
      });
    });

    _this.state = {
      isExpanded: !!props.isExpanded && !!props.isExpandable
    };
    return _this;
  }

  var _proto = ContentCard.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.isExpanded !== this.props.isExpanded) {
      this.setState({
        isExpanded: nextProps.isExpanded
      });
    }
  };

  _proto.render = function render() {
    var cardClassPrefix = classPrefix + "_card";
    var _this$props2 = this.props,
        children = _this$props2.children,
        isLastItem = _this$props2.isLastItem,
        title = _this$props2.title,
        height = _this$props2.height,
        icon = _this$props2.icon,
        onIconClick = _this$props2.onIconClick,
        className = _this$props2.className,
        id = _this$props2.id,
        isExpandable = _this$props2.isExpandable,
        loading = _this$props2.loading,
        header = _this$props2.header;
    var resolvedOnIconClick = isExpandable ? this.onExpandClick : onIconClick;
    return React.createElement(Card, {
      height: height,
      className: cardClassPrefix + " " + className,
      isLastItem: isLastItem,
      id: id
    }, header && header, title && !header && React.createElement(CardHeader, {
      title: title,
      icon: icon,
      onIconClick: resolvedOnIconClick,
      isExpanded: this.state.isExpanded,
      isExpandable: isExpandable,
      loading: loading
    }), (!isExpandable || this.state.isExpanded) && React.createElement(CardContent, {
      className: cardClassPrefix + "_content"
    }, children));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJjbGFzc1ByZWZpeCIsIkNhcmRIZWFkZXIiLCJQcmltaXRpdmUiLCJDYXJkIiwiQmxvY2siLCJwcm9wcyIsImlzTGFzdEl0ZW0iLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiaGVpZ2h0IiwiQ2FyZENvbnRlbnQiLCJkaXYiLCJoZWFkZXIiLCJDb250ZW50Q2FyZCIsIm9uRXhwYW5kIiwiaWQiLCJzZXRTdGF0ZSIsImlzRXhwYW5kZWQiLCJzdGF0ZSIsImlzRXhwYW5kYWJsZSIsImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMiLCJuZXh0UHJvcHMiLCJyZW5kZXIiLCJjYXJkQ2xhc3NQcmVmaXgiLCJjaGlsZHJlbiIsInRpdGxlIiwiaWNvbiIsIm9uSWNvbkNsaWNrIiwiY2xhc3NOYW1lIiwibG9hZGluZyIsInJlc29sdmVkT25JY29uQ2xpY2siLCJvbkV4cGFuZENsaWNrIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkIsQyxDQUVBOztBQUNBLFNBQVNDLFdBQVQsUUFBNEIsaUJBQTVCO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixpQ0FBdkI7QUFDQSxPQUFPLEtBQUtDLFNBQVosTUFBMkIsa0JBQTNCO0FBRUEsSUFBTUMsSUFBSSxHQUFHSixNQUFNLENBQUNHLFNBQVMsQ0FBQ0UsS0FBWCxDQUFULG9CQUVTLFVBQUFDLEtBQUs7QUFBQSxTQUFLQSxLQUFLLENBQUNDLFVBQU4sR0FBbUIsQ0FBbkIsR0FBdUJELEtBQUssQ0FBQ0UsS0FB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QUFBLFVBQVUsRUFBRSxLQUFLWixLQUFMLENBQVdELFVBSnpCO0FBS0UsTUFBQSxZQUFZLEVBQUVFLFlBTGhCO0FBTUUsTUFBQSxPQUFPLEVBQUVVO0FBTlgsTUFUSixFQWtCRyxDQUFDLENBQUNWLFlBQUQsSUFBaUIsS0FBS0QsS0FBTCxDQUFXRCxVQUE3QixLQUNFLG9CQUFDLFdBQUQ7QUFBYSxNQUFBLFNBQVMsRUFBS00sZUFBTDtBQUF0QixPQUF1REMsUUFBdkQsQ0FuQkwsQ0FERjtBQXVCRCxHOzs7RUFyRHVCM0IsS0FBSyxDQUFDbUMsYTs7QUEwRWhDbkIsV0FBVyxDQUFDb0IsWUFBWixHQUEyQjtBQUN6QlQsRUFBQUEsUUFBUSxFQUFFVSxTQURlO0FBRXpCNUIsRUFBQUEsVUFBVSxFQUFFLEtBRmE7QUFHekJtQixFQUFBQSxLQUFLLEVBQUVTLFNBSGtCO0FBSXpCekIsRUFBQUEsTUFBTSxFQUFFeUIsU0FKaUI7QUFLekJSLEVBQUFBLElBQUksRUFBRVEsU0FMbUI7QUFNekJQLEVBQUFBLFdBQVcsRUFBRSxJQU5ZO0FBT3pCQyxFQUFBQSxTQUFTLEVBQUUsRUFQYztBQVF6QlgsRUFBQUEsVUFBVSxFQUFFaUIsU0FSYTtBQVN6QmYsRUFBQUEsWUFBWSxFQUFFLEtBVFc7QUFVekJMLEVBQUFBLFFBQVEsRUFBRW9CLFNBVmU7QUFXekJMLEVBQUFBLE9BQU8sRUFBRSxLQVhnQjtBQVl6QmpCLEVBQUFBLE1BQU0sRUFBRXNCO0FBWmlCLENBQTNCO0FBZUEsZUFBZXJCLFdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSAnLi9jb250ZW50LWNhcmQtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBQcmltaXRpdmUgZnJvbSAnLi4vLi4vcHJpbWl0aXZlcyc7XG5cbmNvbnN0IENhcmQgPSBzdHlsZWQoUHJpbWl0aXZlLkJsb2NrKWBcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMuaXNMYXN0SXRlbSA/IDAgOiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aCl9OyBcbiAgZmxleDogJHtwcm9wcyA9PiAocHJvcHMuaXNMYXN0SXRlbSA/ICcyIDEgYXV0bycgOiAnMCAwIGF1dG8nKX07XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmhlaWdodCA/IHByb3BzLmhlaWdodCA6ICdhdXRvJyl9O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuIGA7XG5cbmNvbnN0IENhcmRDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMSAxIGNhbGMoMTAwJSAtICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmhlaWdodH0pOyBcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuaGVpZ2h0fSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gYDtcblxuY2xhc3MgQ29udGVudENhcmQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRXhwYW5kZWQ6ICEhcHJvcHMuaXNFeHBhbmRlZCAmJiAhIXByb3BzLmlzRXhwYW5kYWJsZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmlzRXhwYW5kZWQgIT09IHRoaXMucHJvcHMuaXNFeHBhbmRlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhwYW5kZWQ6IG5leHRQcm9wcy5pc0V4cGFuZGVkIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uRXhwYW5kQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkV4cGFuZCwgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhwYW5kZWQ6ICF0aGlzLnN0YXRlLmlzRXhwYW5kZWQgfSwgKCkgPT4ge1xuICAgICAgaWYgKG9uRXhwYW5kKSBvbkV4cGFuZChpZCwgdGhpcy5zdGF0ZS5pc0V4cGFuZGVkKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2FyZENsYXNzUHJlZml4ID0gYCR7Y2xhc3NQcmVmaXh9X2NhcmRgO1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLCBpc0xhc3RJdGVtLCB0aXRsZSwgaGVpZ2h0LCBpY29uLCBvbkljb25DbGljaywgY2xhc3NOYW1lLCBpZCwgaXNFeHBhbmRhYmxlLFxuICAgICAgbG9hZGluZywgaGVhZGVyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgcmVzb2x2ZWRPbkljb25DbGljayA9IGlzRXhwYW5kYWJsZSA/IHRoaXMub25FeHBhbmRDbGljayA6IG9uSWNvbkNsaWNrO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkXG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICBjbGFzc05hbWU9e2Ake2NhcmRDbGFzc1ByZWZpeH0gJHtjbGFzc05hbWV9YH1cbiAgICAgICAgaXNMYXN0SXRlbT17aXNMYXN0SXRlbX1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgPlxuICAgICAgICB7aGVhZGVyICYmIGhlYWRlcn1cbiAgICAgICAge3RpdGxlICYmICFoZWFkZXJcbiAgICAgICAgJiYgKFxuICAgICAgICAgIDxDYXJkSGVhZGVyXG4gICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgb25JY29uQ2xpY2s9e3Jlc29sdmVkT25JY29uQ2xpY2t9XG4gICAgICAgICAgICBpc0V4cGFuZGVkPXt0aGlzLnN0YXRlLmlzRXhwYW5kZWR9XG4gICAgICAgICAgICBpc0V4cGFuZGFibGU9e2lzRXhwYW5kYWJsZX1cbiAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAgeyghaXNFeHBhbmRhYmxlIHx8IHRoaXMuc3RhdGUuaXNFeHBhbmRlZClcbiAgICAgICAgJiYgPENhcmRDb250ZW50IGNsYXNzTmFtZT17YCR7Y2FyZENsYXNzUHJlZml4fV9jb250ZW50YH0+e2NoaWxkcmVufTwvQ2FyZENvbnRlbnQ+fVxuICAgICAgPC9DYXJkPlxuICAgICk7XG4gIH1cbn1cblxuQ29udGVudENhcmQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGlzTGFzdEl0ZW06IFByb3BUeXBlcy5ib29sLFxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgXSksXG4gIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gIG9uSWNvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpc0V4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNFeHBhbmRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25FeHBhbmQ6IFByb3BUeXBlcy5mdW5jLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGVhZGVyOiBQcm9wVHlwZXMubm9kZSxcbn07XG5Db250ZW50Q2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGlzTGFzdEl0ZW06IGZhbHNlLFxuICB0aXRsZTogdW5kZWZpbmVkLFxuICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICBvbkljb25DbGljazogbnVsbCxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgaXNFeHBhbmRlZDogdW5kZWZpbmVkLFxuICBpc0V4cGFuZGFibGU6IGZhbHNlLFxuICBvbkV4cGFuZDogdW5kZWZpbmVkLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgaGVhZGVyOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50Q2FyZDtcbiJdfQ==