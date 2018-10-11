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
        loading = _props.loading;


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
  loading: false
};

exports.default = ContentCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUHJpbWl0aXZlIiwiQ2FyZCIsIkJsb2NrIiwiZXh0ZW5kIiwicHJvcHMiLCJpc0xhc3RJdGVtIiwidGhlbWUiLCJndXR0ZXJXaWR0aCIsImhlaWdodCIsIkNhcmRDb250ZW50Iiwic3R5bGVkIiwiZGl2IiwiaGVhZGVyIiwiQ29udGVudENhcmQiLCJvbkV4cGFuZENsaWNrIiwib25FeHBhbmQiLCJpZCIsInNldFN0YXRlIiwiaXNFeHBhbmRlZCIsInN0YXRlIiwiaXNFeHBhbmRhYmxlIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInJlbmRlciIsImNhcmRDbGFzc1ByZWZpeCIsImNsYXNzUHJlZml4IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImljb24iLCJvbkljb25DbGljayIsImNsYXNzTmFtZSIsImxvYWRpbmciLCJyZXNvbHZlZE9uSWNvbkNsaWNrIiwiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsUzs7Ozs7Ozs7Ozs7OztBQUhaOzs7QUFLQSxJQUFNQyxPQUFPRCxVQUFVRSxLQUFWLENBQWdCQyxNQUF2QixrQkFFYTtBQUFBLFNBQVVDLE1BQU1DLFVBQU4sR0FBbUIsQ0FBbkIsR0FBdUJELE1BQU1FLEtBQU4sQ0FBWUMsV0FBN0M7QUFBQSxDQUZiLEVBR0k7QUFBQSxTQUFVSCxNQUFNQyxVQUFOLEdBQW1CLFVBQW5CLEdBQWdDLFVBQTFDO0FBQUEsQ0FISixFQUtNO0FBQUEsU0FBVUQsTUFBTUksTUFBTixHQUFlSixNQUFNSSxNQUFyQixHQUE4QixNQUF4QztBQUFBLENBTE4sQ0FBTjs7QUFTQSxJQUFNQyxjQUFjQywyQkFBT0MsR0FB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bGUiOiJjb250ZW50LWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICcuL2NvbnRlbnQtY2FyZC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIFByaW1pdGl2ZSBmcm9tICcuLi8uLi9wcmltaXRpdmVzJztcblxuY29uc3QgQ2FyZCA9IFByaW1pdGl2ZS5CbG9jay5leHRlbmRgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLmlzTGFzdEl0ZW0gPyAwIDogcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGgpfTsgXG4gIGZsZXg6ICR7cHJvcHMgPT4gKHByb3BzLmlzTGFzdEl0ZW0gPyAnMiAxIGF1dG8nIDogJzAgMCBhdXRvJyl9O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5oZWlnaHQgPyBwcm9wcy5oZWlnaHQgOiAnYXV0bycpfTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiBgO1xuXG5jb25zdCBDYXJkQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDEgMSBjYWxjKDEwMCUgLSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5oZWlnaHR9KTsgXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmhlaWdodH0pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuIGA7XG5cbmNsYXNzIENvbnRlbnRDYXJkIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0V4cGFuZGVkOiAhIXByb3BzLmlzRXhwYW5kZWQgJiYgISFwcm9wcy5pc0V4cGFuZGFibGUsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5pc0V4cGFuZGVkICE9PSB0aGlzLnByb3BzLmlzRXhwYW5kZWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4cGFuZGVkOiBuZXh0UHJvcHMuaXNFeHBhbmRlZCB9KTtcbiAgICB9XG4gIH1cblxuICBvbkV4cGFuZENsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgb25FeHBhbmQsIGlkIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4cGFuZGVkOiAhdGhpcy5zdGF0ZS5pc0V4cGFuZGVkIH0sICgpID0+IHtcbiAgICAgIGlmIChvbkV4cGFuZCkgb25FeHBhbmQoaWQsIHRoaXMuc3RhdGUuaXNFeHBhbmRlZCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNhcmRDbGFzc1ByZWZpeCA9IGAke2NsYXNzUHJlZml4fV9jYXJkYDtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbiwgaXNMYXN0SXRlbSwgdGl0bGUsIGhlaWdodCwgaWNvbiwgb25JY29uQ2xpY2ssIGNsYXNzTmFtZSwgaWQsIGlzRXhwYW5kYWJsZSxcbiAgICAgIGxvYWRpbmcsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCByZXNvbHZlZE9uSWNvbkNsaWNrID0gaXNFeHBhbmRhYmxlID8gdGhpcy5vbkV4cGFuZENsaWNrIDogb25JY29uQ2xpY2s7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENhcmRcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2FyZENsYXNzUHJlZml4fSAke2NsYXNzTmFtZX1gfVxuICAgICAgICBpc0xhc3RJdGVtPXtpc0xhc3RJdGVtfVxuICAgICAgICBpZD17aWR9XG4gICAgICA+XG4gICAgICAgIHt0aXRsZSAmJlxuICAgICAgICA8Q2FyZEhlYWRlclxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgIG9uSWNvbkNsaWNrPXtyZXNvbHZlZE9uSWNvbkNsaWNrfVxuICAgICAgICAgIGlzRXhwYW5kZWQ9e3RoaXMuc3RhdGUuaXNFeHBhbmRlZH1cbiAgICAgICAgICBpc0V4cGFuZGFibGU9e2lzRXhwYW5kYWJsZX1cbiAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAvPn1cbiAgICAgICAgeyghaXNFeHBhbmRhYmxlIHx8IHRoaXMuc3RhdGUuaXNFeHBhbmRlZCkgJiZcbiAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17YCR7Y2FyZENsYXNzUHJlZml4fV9jb250ZW50YH0+e2NoaWxkcmVufTwvQ2FyZENvbnRlbnQ+fVxuICAgICAgPC9DYXJkPlxuICAgICk7XG4gIH1cbn1cblxuQ29udGVudENhcmQucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGlzTGFzdEl0ZW06IFByb3BUeXBlcy5ib29sLFxuICB0aXRsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMubm9kZSxcbiAgXSksXG4gIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG4gIG9uSWNvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpc0V4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNFeHBhbmRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25FeHBhbmQ6IFByb3BUeXBlcy5mdW5jLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5Db250ZW50Q2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGlzTGFzdEl0ZW06IGZhbHNlLFxuICB0aXRsZTogdW5kZWZpbmVkLFxuICBoZWlnaHQ6IHVuZGVmaW5lZCxcbiAgaWNvbjogdW5kZWZpbmVkLFxuICBvbkljb25DbGljazogbnVsbCxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgaXNFeHBhbmRlZDogdW5kZWZpbmVkLFxuICBpc0V4cGFuZGFibGU6IGZhbHNlLFxuICBvbkV4cGFuZDogdW5kZWZpbmVkLFxuICBsb2FkaW5nOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRDYXJkO1xuIl19