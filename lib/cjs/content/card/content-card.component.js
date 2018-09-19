'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  flex-direction: column;\n  '], ['\n  display: flex;\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  flex-direction: column;\n  ']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  flex: 1 1 calc(100% - ', '); \n  min-height: calc(100% - ', ');\n  display: flex;\n  flex-direction: column;\n  '], ['\n  flex: 1 1 calc(100% - ', '); \n  min-height: calc(100% - ', ');\n  display: flex;\n  flex-direction: column;\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('../../constants');

var _contentCardHeader = require('./content-card-header.component');

var _contentCardHeader2 = _interopRequireDefault(_contentCardHeader);

var _primitives = require('../../primitives');

var Primitive = _interopRequireWildcard(_primitives);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// App imports


var Card = Primitive.Block.extend(_templateObject, function (props) {
  return props.isLastItem ? 0 : props.theme.gutterWidth;
}, function (props) {
  return props.isLastItem ? '2 1 auto' : '0 0 auto';
}, function (props) {
  return props.height ? props.height : 'auto';
});

var CardContent = _styledComponents2.default.div(_templateObject2, function (props) {
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
    var cardClassPrefix = _constants.classPrefix + '_card';
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

    return _react2.default.createElement(
      Card,
      {
        height: height,
        className: cardClassPrefix + ' ' + className,
        isLastItem: isLastItem,
        id: id
      },
      title && _react2.default.createElement(_contentCardHeader2.default, {
        title: title,
        icon: icon,
        onIconClick: resolvedOnIconClick,
        isExpanded: this.state.isExpanded,
        isExpandable: isExpandable
      }),
      (!isExpandable || this.state.isExpanded) && _react2.default.createElement(
        CardContent,
        { className: cardClassPrefix + '_content' },
        children
      )
    );
  };

  return ContentCard;
}(_react2.default.PureComponent);

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

exports.default = ContentCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUHJpbWl0aXZlIiwiQ2FyZCIsIkJsb2NrIiwiZXh0ZW5kIiwicHJvcHMiLCJpc0xhc3RJdGVtIiwidGhlbWUiLCJndXR0ZXJXaWR0aCIsImhlaWdodCIsIkNhcmRDb250ZW50Iiwic3R5bGVkIiwiZGl2IiwiaGVhZGVyIiwiQ29udGVudENhcmQiLCJvbkV4cGFuZENsaWNrIiwib25FeHBhbmQiLCJpZCIsInNldFN0YXRlIiwiaXNFeHBhbmRlZCIsInN0YXRlIiwiaXNFeHBhbmRhYmxlIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInJlbmRlciIsImNhcmRDbGFzc1ByZWZpeCIsImNsYXNzUHJlZml4IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImljb24iLCJvbkljb25DbGljayIsImNsYXNzTmFtZSIsInJlc29sdmVkT25JY29uQ2xpY2siLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOztJQUFZQSxTOzs7Ozs7Ozs7Ozs7O0FBSFo7OztBQUtBLElBQU1DLE9BQU9ELFVBQVVFLEtBQVYsQ0FBZ0JDLE1BQXZCLGtCQUVhO0FBQUEsU0FBVUMsTUFBTUMsVUFBTixHQUFtQixDQUFuQixHQUF1QkQsTUFBTUUsS0FBTixDQUFZQyxXQUE3QztBQUFBLENBRmIsRUFHSTtBQUFBLFNBQVVILE1BQU1DLFVBQU4sR0FBbUIsVUFBbkIsR0FBZ0MsVUFBMUM7QUFBQSxDQUhKLEVBS007QUFBQSxTQUFVRCxNQUFNSSxNQUFOLEdBQWVKLE1BQU1JLE1BQXJCLEdBQThCLE1BQXhDO0FBQUEsQ0FMTixDQUFOOztBQVNBLElBQU1DLGNBQWNDLDJCQUFPQyxHQUFyQixtQkFDb0I7QUFBQSxTQUFTUCxNQUFNRSxLQUFOLENBQVlNLE1BQVosQ0FBbUJKLE1BQTVCO0FBQUEsQ0FEcEIsRUFFc0I7QUFBQSxTQUFTSixNQUFNRSxLQUFOLENBQVlNLE1BQVosQ0FBbUJKLE1BQTVCO0FBQUEsQ0FGdEIsQ0FBTjs7SUFPTUssVzs7O0FBQ0osdUJBQVlULEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpREFDakIsZ0NBQU1BLEtBQU4sQ0FEaUI7O0FBQUEsVUFhbkJVLGFBYm1CLEdBYUgsWUFBTTtBQUFBLHdCQUNLLE1BQUtWLEtBRFY7QUFBQSxVQUNaVyxRQURZLGVBQ1pBLFFBRFk7QUFBQSxVQUNGQyxFQURFLGVBQ0ZBLEVBREU7O0FBRXBCLFlBQUtDLFFBQUwsQ0FBYyxFQUFFQyxZQUFZLENBQUMsTUFBS0MsS0FBTCxDQUFXRCxVQUExQixFQUFkLEVBQXNELFlBQU07QUFDMUQsWUFBSUgsUUFBSixFQUFjQSxTQUFTQyxFQUFULEVBQWEsTUFBS0csS0FBTCxDQUFXRCxVQUF4QjtBQUNmLE9BRkQ7QUFHRCxLQWxCa0I7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYRCxrQkFBWSxDQUFDLENBQUNkLE1BQU1jLFVBQVIsSUFBc0IsQ0FBQyxDQUFDZCxNQUFNZ0I7QUFEL0IsS0FBYjtBQUZpQjtBQUtsQjs7d0JBRURDLHlCLHNDQUEwQkMsUyxFQUFXO0FBQ25DLFFBQUlBLFVBQVVKLFVBQVYsS0FBeUIsS0FBS2QsS0FBTCxDQUFXYyxVQUF4QyxFQUFvRDtBQUNsRCxXQUFLRCxRQUFMLENBQWMsRUFBRUMsWUFBWUksVUFBVUosVUFBeEIsRUFBZDtBQUNEO0FBQ0YsRzs7d0JBU0RLLE0scUJBQVM7QUFDUCxRQUFNQyxrQkFBcUJDLHNCQUFyQixVQUFOO0FBRE8saUJBSUgsS0FBS3JCLEtBSkY7QUFBQSxRQUdMc0IsUUFISyxVQUdMQSxRQUhLO0FBQUEsUUFHS3JCLFVBSEwsVUFHS0EsVUFITDtBQUFBLFFBR2lCc0IsS0FIakIsVUFHaUJBLEtBSGpCO0FBQUEsUUFHd0JuQixNQUh4QixVQUd3QkEsTUFIeEI7QUFBQSxRQUdnQ29CLElBSGhDLFVBR2dDQSxJQUhoQztBQUFBLFFBR3NDQyxXQUh0QyxVQUdzQ0EsV0FIdEM7QUFBQSxRQUdtREMsU0FIbkQsVUFHbURBLFNBSG5EO0FBQUEsUUFHOERkLEVBSDlELFVBRzhEQSxFQUg5RDtBQUFBLFFBR2tFSSxZQUhsRSxVQUdrRUEsWUFIbEU7OztBQU1QLFFBQU1XLHNCQUFzQlgsZUFBZSxLQUFLTixhQUFwQixHQUFvQ2UsV0FBaEU7O0FBRUEsV0FDRTtBQUFDLFVBQUQ7QUFBQTtBQUNFLGdCQUFRckIsTUFEVjtBQUVFLG1CQUFjZ0IsZUFBZCxTQUFpQ00sU0FGbkM7QUFHRSxvQkFBWXpCLFVBSGQ7QUFJRSxZQUFJVztBQUpOO0FBTUdXLGVBQ0QsOEJBQUMsMkJBQUQ7QUFDRSxlQUFPQSxLQURUO0FBRUUsY0FBTUMsSUFGUjtBQUdFLHFCQUFhRyxtQkFIZjtBQUlFLG9CQUFZLEtBQUtaLEtBQUwsQ0FBV0QsVUFKekI7QUFLRSxzQkFBY0U7QUFMaEIsUUFQRjtBQWNHLE9BQUMsQ0FBQ0EsWUFBRCxJQUFpQixLQUFLRCxLQUFMLENBQVdELFVBQTdCLEtBQ0Q7QUFBQyxtQkFBRDtBQUFBLFVBQWEsV0FBY00sZUFBZCxhQUFiO0FBQXVERTtBQUF2RDtBQWZGLEtBREY7QUFtQkQsRzs7O0VBaER1Qk0sZ0JBQU1DLGE7O0FBbUVoQ3BCLFlBQVlxQixZQUFaLEdBQTJCO0FBQ3pCUixZQUFVUyxTQURlO0FBRXpCOUIsY0FBWSxLQUZhO0FBR3pCc0IsU0FBT1EsU0FIa0I7QUFJekIzQixVQUFRMkIsU0FKaUI7QUFLekJQLFFBQU1PLFNBTG1CO0FBTXpCTixlQUFhLElBTlk7QUFPekJDLGFBQVcsRUFQYztBQVF6QlosY0FBWWlCLFNBUmE7QUFTekJmLGdCQUFjLEtBVFc7QUFVekJMLFlBQVVvQjtBQVZlLENBQTNCOztrQkFhZXRCLFciLCJmaWxlIjoiY29udGVudC1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSAnLi9jb250ZW50LWNhcmQtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBQcmltaXRpdmUgZnJvbSAnLi4vLi4vcHJpbWl0aXZlcyc7XG5cbmNvbnN0IENhcmQgPSBQcmltaXRpdmUuQmxvY2suZXh0ZW5kYFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IChwcm9wcy5pc0xhc3RJdGVtID8gMCA6IHByb3BzLnRoZW1lLmd1dHRlcldpZHRoKX07IFxuICBmbGV4OiAke3Byb3BzID0+IChwcm9wcy5pc0xhc3RJdGVtID8gJzIgMSBhdXRvJyA6ICcwIDAgYXV0bycpfTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogJHtwcm9wcyA9PiAocHJvcHMuaGVpZ2h0ID8gcHJvcHMuaGVpZ2h0IDogJ2F1dG8nKX07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGA7XG5cbmNvbnN0IENhcmRDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMSAxIGNhbGMoMTAwJSAtICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmhlaWdodH0pOyBcbiAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuaGVpZ2h0fSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGA7XG5cbmNsYXNzIENvbnRlbnRDYXJkIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0V4cGFuZGVkOiAhIXByb3BzLmlzRXhwYW5kZWQgJiYgISFwcm9wcy5pc0V4cGFuZGFibGUsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5pc0V4cGFuZGVkICE9PSB0aGlzLnByb3BzLmlzRXhwYW5kZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4cGFuZGVkOiBuZXh0UHJvcHMuaXNFeHBhbmRlZCB9KTtcbiAgICB9XG4gIH1cblxuICBvbkV4cGFuZENsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25FeHBhbmQsIGlkIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4cGFuZGVkOiAhdGhpcy5zdGF0ZS5pc0V4cGFuZGVkIH0sICgpID0+IHtcbiAgICAgIGlmIChvbkV4cGFuZCkgb25FeHBhbmQoaWQsIHRoaXMuc3RhdGUuaXNFeHBhbmRlZCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNhcmRDbGFzc1ByZWZpeCA9IGAke2NsYXNzUHJlZml4fV9jYXJkYDtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbiwgaXNMYXN0SXRlbSwgdGl0bGUsIGhlaWdodCwgaWNvbiwgb25JY29uQ2xpY2ssIGNsYXNzTmFtZSwgaWQsIGlzRXhwYW5kYWJsZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHJlc29sdmVkT25JY29uQ2xpY2sgPSBpc0V4cGFuZGFibGUgPyB0aGlzLm9uRXhwYW5kQ2xpY2sgOiBvbkljb25DbGljaztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZFxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NQcmVmaXh9ICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIGlzTGFzdEl0ZW09e2lzTGFzdEl0ZW19XG4gICAgICAgIGlkPXtpZH1cbiAgICAgID5cbiAgICAgICAge3RpdGxlICYmXG4gICAgICAgIDxDYXJkSGVhZGVyXG4gICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgb25JY29uQ2xpY2s9e3Jlc29sdmVkT25JY29uQ2xpY2t9XG4gICAgICAgICAgaXNFeHBhbmRlZD17dGhpcy5zdGF0ZS5pc0V4cGFuZGVkfVxuICAgICAgICAgIGlzRXhwYW5kYWJsZT17aXNFeHBhbmRhYmxlfVxuICAgICAgICAvPn1cbiAgICAgICAgeyghaXNFeHBhbmRhYmxlIHx8IHRoaXMuc3RhdGUuaXNFeHBhbmRlZCkgJiZcbiAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17YCR7Y2FyZENsYXNzUHJlZml4fV9jb250ZW50YH0+e2NoaWxkcmVufTwvQ2FyZENvbnRlbnQ+fVxuICAgICAgPC9DYXJkPlxuICAgICk7XG4gIH1cbn1cblxuQ29udGVudENhcmQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGlzTGFzdEl0ZW06IFByb3BUeXBlcy5ib29sLFxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgXSksXG4gIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gIG9uSWNvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpc0V4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNFeHBhbmRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25FeHBhbmQ6IFByb3BUeXBlcy5mdW5jLFxufTtcbkNvbnRlbnRDYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgaXNMYXN0SXRlbTogZmFsc2UsXG4gIHRpdGxlOiB1bmRlZmluZWQsXG4gIGhlaWdodDogdW5kZWZpbmVkLFxuICBpY29uOiB1bmRlZmluZWQsXG4gIG9uSWNvbkNsaWNrOiBudWxsLFxuICBjbGFzc05hbWU6ICcnLFxuICBpc0V4cGFuZGVkOiB1bmRlZmluZWQsXG4gIGlzRXhwYW5kYWJsZTogZmFsc2UsXG4gIG9uRXhwYW5kOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50Q2FyZDtcbiJdfQ==