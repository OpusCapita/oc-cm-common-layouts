'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  flex-direction: column;\n '], ['\n  display: flex;\n  margin-bottom: ', '; \n  flex: ', ';\n  width: 100%;\n  height: ', ';\n  flex-direction: column;\n ']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  flex: 1 1 calc(100% - ', '); \n  min-height: calc(100% - ', ');\n  display: flex;\n  flex-direction: column;\n '], ['\n  flex: 1 1 calc(100% - ', '); \n  min-height: calc(100% - ', ');\n  display: flex;\n  flex-direction: column;\n ']);

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
        isExpandable = _props.isExpandable,
        loading = _props.loading,
        header = _props.header;


    var resolvedOnIconClick = isExpandable ? this.onExpandClick : onIconClick;

    return _react2.default.createElement(
      Card,
      {
        height: height,
        className: cardClassPrefix + ' ' + className,
        isLastItem: isLastItem,
        id: id
      },
      header && header,
      title && !header && _react2.default.createElement(_contentCardHeader2.default, {
        title: title,
        icon: icon,
        onIconClick: resolvedOnIconClick,
        isExpanded: this.state.isExpanded,
        isExpandable: isExpandable,
        loading: loading
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
  onExpand: undefined,
  loading: false,
  header: undefined
};

exports.default = ContentCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUHJpbWl0aXZlIiwiQ2FyZCIsIkJsb2NrIiwiZXh0ZW5kIiwicHJvcHMiLCJpc0xhc3RJdGVtIiwidGhlbWUiLCJndXR0ZXJXaWR0aCIsImhlaWdodCIsIkNhcmRDb250ZW50Iiwic3R5bGVkIiwiZGl2IiwiaGVhZGVyIiwiQ29udGVudENhcmQiLCJvbkV4cGFuZENsaWNrIiwib25FeHBhbmQiLCJpZCIsInNldFN0YXRlIiwiaXNFeHBhbmRlZCIsInN0YXRlIiwiaXNFeHBhbmRhYmxlIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInJlbmRlciIsImNhcmRDbGFzc1ByZWZpeCIsImNsYXNzUHJlZml4IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImljb24iLCJvbkljb25DbGljayIsImNsYXNzTmFtZSIsImxvYWRpbmciLCJyZXNvbHZlZE9uSWNvbkNsaWNrIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsUzs7Ozs7Ozs7Ozs7OztBQUhaOzs7QUFLQSxJQUFNQyxPQUFPRCxVQUFVRSxLQUFWLENBQWdCQyxNQUF2QixrQkFFYTtBQUFBLFNBQVVDLE1BQU1DLFVBQU4sR0FBbUIsQ0FBbkIsR0FBdUJELE1BQU1FLEtBQU4sQ0FBWUMsV0FBN0M7QUFBQSxDQUZiLEVBR0k7QUFBQSxTQUFVSCxNQUFNQyxVQUFOLEdBQW1CLFVBQW5CLEdBQWdDLFVBQTFDO0FBQUEsQ0FISixFQUtNO0FBQUEsU0FBVUQsTUFBTUksTUFBTixHQUFlSixNQUFNSSxNQUFyQixHQUE4QixNQUF4QztBQUFBLENBTE4sQ0FBTjs7QUFTQSxJQUFNQyxjQUFjQywyQkFBT0MsR0FB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LEtBVFc7QUFVekJMLFlBQVVxQixTQVZlO0FBV3pCTCxXQUFTLEtBWGdCO0FBWXpCbkIsVUFBUXdCO0FBWmlCLENBQTNCOztrQkFlZXZCLFciLCJmaWxlIjoiY29udGVudC1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuaW1wb3J0IENhcmRIZWFkZXIgZnJvbSAnLi9jb250ZW50LWNhcmQtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBQcmltaXRpdmUgZnJvbSAnLi4vLi4vcHJpbWl0aXZlcyc7XG5cbmNvbnN0IENhcmQgPSBQcmltaXRpdmUuQmxvY2suZXh0ZW5kYFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IChwcm9wcy5pc0xhc3RJdGVtID8gMCA6IHByb3BzLnRoZW1lLmd1dHRlcldpZHRoKX07IFxuICBmbGV4OiAke3Byb3BzID0+IChwcm9wcy5pc0xhc3RJdGVtID8gJzIgMSBhdXRvJyA6ICcwIDAgYXV0bycpfTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogJHtwcm9wcyA9PiAocHJvcHMuaGVpZ2h0ID8gcHJvcHMuaGVpZ2h0IDogJ2F1dG8nKX07XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gYDtcblxuY29uc3QgQ2FyZENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxIDEgY2FsYygxMDAlIC0gJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuaGVpZ2h0fSk7IFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5oZWlnaHR9KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiBgO1xuXG5jbGFzcyBDb250ZW50Q2FyZCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNFeHBhbmRlZDogISFwcm9wcy5pc0V4cGFuZGVkICYmICEhcHJvcHMuaXNFeHBhbmRhYmxlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmIChuZXh0UHJvcHMuaXNFeHBhbmRlZCAhPT0gdGhpcy5wcm9wcy5pc0V4cGFuZGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNFeHBhbmRlZDogbmV4dFByb3BzLmlzRXhwYW5kZWQgfSk7XG4gICAgfVxuICB9XG5cbiAgb25FeHBhbmRDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uRXhwYW5kLCBpZCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNFeHBhbmRlZDogIXRoaXMuc3RhdGUuaXNFeHBhbmRlZCB9LCAoKSA9PiB7XG4gICAgICBpZiAob25FeHBhbmQpIG9uRXhwYW5kKGlkLCB0aGlzLnN0YXRlLmlzRXhwYW5kZWQpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjYXJkQ2xhc3NQcmVmaXggPSBgJHtjbGFzc1ByZWZpeH1fY2FyZGA7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sIGlzTGFzdEl0ZW0sIHRpdGxlLCBoZWlnaHQsIGljb24sIG9uSWNvbkNsaWNrLCBjbGFzc05hbWUsIGlkLCBpc0V4cGFuZGFibGUsXG4gICAgICBsb2FkaW5nLCBoZWFkZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCByZXNvbHZlZE9uSWNvbkNsaWNrID0gaXNFeHBhbmRhYmxlID8gdGhpcy5vbkV4cGFuZENsaWNrIDogb25JY29uQ2xpY2s7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENhcmRcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2FyZENsYXNzUHJlZml4fSAke2NsYXNzTmFtZX1gfVxuICAgICAgICBpc0xhc3RJdGVtPXtpc0xhc3RJdGVtfVxuICAgICAgICBpZD17aWR9XG4gICAgICA+XG4gICAgICAgIHtoZWFkZXIgJiYgaGVhZGVyfVxuICAgICAgICB7dGl0bGUgJiYgIWhlYWRlciAmJlxuICAgICAgICA8Q2FyZEhlYWRlclxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIG9uSWNvbkNsaWNrPXtyZXNvbHZlZE9uSWNvbkNsaWNrfVxuICAgICAgICAgIGlzRXhwYW5kZWQ9e3RoaXMuc3RhdGUuaXNFeHBhbmRlZH1cbiAgICAgICAgICBpc0V4cGFuZGFibGU9e2lzRXhwYW5kYWJsZX1cbiAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAvPn1cbiAgICAgICAgeyghaXNFeHBhbmRhYmxlIHx8IHRoaXMuc3RhdGUuaXNFeHBhbmRlZCkgJiZcbiAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17YCR7Y2FyZENsYXNzUHJlZml4fV9jb250ZW50YH0+e2NoaWxkcmVufTwvQ2FyZENvbnRlbnQ+fVxuICAgICAgPC9DYXJkPlxuICAgICk7XG4gIH1cbn1cblxuQ29udGVudENhcmQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGlzTGFzdEl0ZW06IFByb3BUeXBlcy5ib29sLFxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgXSksXG4gIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gIG9uSWNvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpc0V4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNFeHBhbmRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25FeHBhbmQ6IFByb3BUeXBlcy5mdW5jLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGVhZGVyOiBQcm9wVHlwZXMubm9kZSxcbn07XG5Db250ZW50Q2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGlzTGFzdEl0ZW06IGZhbHNlLFxuICB0aXRsZTogdW5kZWZpbmVkLFxuICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICBvbkljb25DbGljazogbnVsbCxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgaXNFeHBhbmRlZDogdW5kZWZpbmVkLFxuICBpc0V4cGFuZGFibGU6IGZhbHNlLFxuICBvbkV4cGFuZDogdW5kZWZpbmVkLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgaGVhZGVyOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50Q2FyZDtcbiJdfQ==