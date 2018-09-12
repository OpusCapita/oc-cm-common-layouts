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
  return props.isLastItem ? 0 : _constants.theme.gutterWidth;
}, function (props) {
  return props.isLastItem ? '2 1 auto' : '0 0 auto';
}, function (props) {
  return props.height ? props.height : 'auto';
});

var CardContent = _styledComponents2.default.div(_templateObject2, _constants.theme.header.height, _constants.theme.header.height);

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
  id: '',
  className: '',
  isExpanded: undefined,
  isExpandable: false,
  onExpand: undefined
};

exports.default = ContentCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NhcmQvY29udGVudC1jYXJkLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUHJpbWl0aXZlIiwiQ2FyZCIsIkJsb2NrIiwiZXh0ZW5kIiwicHJvcHMiLCJpc0xhc3RJdGVtIiwidGhlbWUiLCJndXR0ZXJXaWR0aCIsImhlaWdodCIsIkNhcmRDb250ZW50Iiwic3R5bGVkIiwiZGl2IiwiaGVhZGVyIiwiQ29udGVudENhcmQiLCJvbkV4cGFuZENsaWNrIiwib25FeHBhbmQiLCJpZCIsInNldFN0YXRlIiwiaXNFeHBhbmRlZCIsInN0YXRlIiwiaXNFeHBhbmRhYmxlIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInJlbmRlciIsImNhcmRDbGFzc1ByZWZpeCIsImNsYXNzUHJlZml4IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImljb24iLCJvbkljb25DbGljayIsImNsYXNzTmFtZSIsInJlc29sdmVkT25JY29uQ2xpY2siLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOztJQUFZQSxTOzs7Ozs7Ozs7Ozs7O0FBSFo7OztBQUtBLElBQU1DLE9BQU9ELFVBQVVFLEtBQVYsQ0FBZ0JDLE1BQXZCLGtCQUVhO0FBQUEsU0FBVUMsTUFBTUMsVUFBTixHQUFtQixDQUFuQixHQUF1QkMsaUJBQU1DLFdBQXZDO0FBQUEsQ0FGYixFQUdJO0FBQUEsU0FBVUgsTUFBTUMsVUFBTixHQUFtQixVQUFuQixHQUFnQyxVQUExQztBQUFBLENBSEosRUFLTTtBQUFBLFNBQVVELE1BQU1JLE1BQU4sR0FBZUosTUFBTUksTUFBckIsR0FBOEIsTUFBeEM7QUFBQSxDQUxOLENBQU47O0FBU0EsSUFBTUMsY0FBY0MsMkJBQU9DLEdBQXJCLG1CQUNvQkwsaUJBQU1NLE1BQU4sQ0FBYUosTUFEakMsRUFFc0JGLGlCQUFNTSxNQUFOLENBQWFKLE1BRm5DLENBQU47O0lBT01LLFc7OztBQUNKLHVCQUFZVCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaURBQ2pCLGdDQUFNQSxLQUFOLENBRGlCOztBQUFBLFVBYW5CVSxhQWJtQixHQWFILFlBQU07QUFBQSx3QkFDSyxNQUFLVixLQURWO0FBQUEsVUFDWlcsUUFEWSxlQUNaQSxRQURZO0FBQUEsVUFDRkMsRUFERSxlQUNGQSxFQURFOztBQUVwQixZQUFLQyxRQUFMLENBQWMsRUFBRUMsWUFBWSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0QsVUFBMUIsRUFBZCxFQUFzRCxZQUFNO0FBQzFELFlBQUlILFFBQUosRUFBY0EsU0FBU0MsRUFBVCxFQUFhLE1BQUtHLEtBQUwsQ0FBV0QsVUFBeEI7QUFDZixPQUZEO0FBR0QsS0FsQmtCOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEQsa0JBQVksQ0FBQyxDQUFDZCxNQUFNYyxVQUFSLElBQXNCLENBQUMsQ0FBQ2QsTUFBTWdCO0FBRC9CLEtBQWI7QUFGaUI7QUFLbEI7O3dCQUVEQyx5QixzQ0FBMEJDLFMsRUFBVztBQUNuQyxRQUFJQSxVQUFVSixVQUFWLEtBQXlCLEtBQUtkLEtBQUwsQ0FBV2MsVUFBeEMsRUFBb0Q7QUFDbEQsV0FBS0QsUUFBTCxDQUFjLEVBQUVDLFlBQVlJLFVBQVVKLFVBQXhCLEVBQWQ7QUFDRDtBQUNGLEc7O3dCQVNESyxNLHFCQUFTO0FBQ1AsUUFBTUMsa0JBQXFCQyxzQkFBckIsVUFBTjtBQURPLGlCQUlILEtBQUtyQixLQUpGO0FBQUEsUUFHTHNCLFFBSEssVUFHTEEsUUFISztBQUFBLFFBR0tyQixVQUhMLFVBR0tBLFVBSEw7QUFBQSxRQUdpQnNCLEtBSGpCLFVBR2lCQSxLQUhqQjtBQUFBLFFBR3dCbkIsTUFIeEIsVUFHd0JBLE1BSHhCO0FBQUEsUUFHZ0NvQixJQUhoQyxVQUdnQ0EsSUFIaEM7QUFBQSxRQUdzQ0MsV0FIdEMsVUFHc0NBLFdBSHRDO0FBQUEsUUFHbURDLFNBSG5ELFVBR21EQSxTQUhuRDtBQUFBLFFBRzhEZCxFQUg5RCxVQUc4REEsRUFIOUQ7QUFBQSxRQUdrRUksWUFIbEUsVUFHa0VBLFlBSGxFOzs7QUFNUCxRQUFNVyxzQkFBc0JYLGVBQWUsS0FBS04sYUFBcEIsR0FBb0NlLFdBQWhFOztBQUVBLFdBQ0U7QUFBQyxVQUFEO0FBQUE7QUFDRSxnQkFBUXJCLE1BRFY7QUFFRSxtQkFBY2dCLGVBQWQsU0FBaUNNLFNBRm5DO0FBR0Usb0JBQVl6QixVQUhkO0FBSUUsWUFBSVc7QUFKTjtBQU1HVyxlQUNELDhCQUFDLDJCQUFEO0FBQ0UsZUFBT0EsS0FEVDtBQUVFLGNBQU1DLElBRlI7QUFHRSxxQkFBYUcsbUJBSGY7QUFJRSxvQkFBWSxLQUFLWixLQUFMLENBQVdELFVBSnpCO0FBS0Usc0JBQWNFO0FBTGhCLFFBUEY7QUFjRyxPQUFDLENBQUNBLFlBQUQsSUFBaUIsS0FBS0QsS0FBTCxDQUFXRCxVQUE3QixLQUNEO0FBQUMsbUJBQUQ7QUFBQSxVQUFhLFdBQWNNLGVBQWQsYUFBYjtBQUF1REU7QUFBdkQ7QUFmRixLQURGO0FBbUJELEc7OztFQWhEdUJNLGdCQUFNQyxhOztBQW1FaENwQixZQUFZcUIsWUFBWixHQUEyQjtBQUN6QlIsWUFBVVMsU0FEZTtBQUV6QjlCLGNBQVksS0FGYTtBQUd6QnNCLFNBQU9RLFNBSGtCO0FBSXpCM0IsVUFBUTJCLFNBSmlCO0FBS3pCUCxRQUFNTyxTQUxtQjtBQU16Qk4sZUFBYSxJQU5ZO0FBT3pCYixNQUFJLEVBUHFCO0FBUXpCYyxhQUFXLEVBUmM7QUFTekJaLGNBQVlpQixTQVRhO0FBVXpCZixnQkFBYyxLQVZXO0FBV3pCTCxZQUFVb0I7QUFYZSxDQUEzQjs7a0JBY2V0QixXIiwiZmlsZSI6ImNvbnRlbnQtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4LCB0aGVtZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICcuL2NvbnRlbnQtY2FyZC1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIFByaW1pdGl2ZSBmcm9tICcuLi8uLi9wcmltaXRpdmVzJztcblxuY29uc3QgQ2FyZCA9IFByaW1pdGl2ZS5CbG9jay5leHRlbmRgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLmlzTGFzdEl0ZW0gPyAwIDogdGhlbWUuZ3V0dGVyV2lkdGgpfTsgXG4gIGZsZXg6ICR7cHJvcHMgPT4gKHByb3BzLmlzTGFzdEl0ZW0gPyAnMiAxIGF1dG8nIDogJzAgMCBhdXRvJyl9O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5oZWlnaHQgPyBwcm9wcy5oZWlnaHQgOiAnYXV0bycpfTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYDtcblxuY29uc3QgQ2FyZENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxIDEgY2FsYygxMDAlIC0gJHt0aGVtZS5oZWFkZXIuaGVpZ2h0fSk7IFxuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAke3RoZW1lLmhlYWRlci5oZWlnaHR9KTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYDtcblxuY2xhc3MgQ29udGVudENhcmQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRXhwYW5kZWQ6ICEhcHJvcHMuaXNFeHBhbmRlZCAmJiAhIXByb3BzLmlzRXhwYW5kYWJsZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLmlzRXhwYW5kZWQgIT09IHRoaXMucHJvcHMuaXNFeHBhbmRlZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhwYW5kZWQ6IG5leHRQcm9wcy5pc0V4cGFuZGVkIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uRXhwYW5kQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkV4cGFuZCwgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhwYW5kZWQ6ICF0aGlzLnN0YXRlLmlzRXhwYW5kZWQgfSwgKCkgPT4ge1xuICAgICAgaWYgKG9uRXhwYW5kKSBvbkV4cGFuZChpZCwgdGhpcy5zdGF0ZS5pc0V4cGFuZGVkKTtcbiAgICB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2FyZENsYXNzUHJlZml4ID0gYCR7Y2xhc3NQcmVmaXh9X2NhcmRgO1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLCBpc0xhc3RJdGVtLCB0aXRsZSwgaGVpZ2h0LCBpY29uLCBvbkljb25DbGljaywgY2xhc3NOYW1lLCBpZCwgaXNFeHBhbmRhYmxlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgcmVzb2x2ZWRPbkljb25DbGljayA9IGlzRXhwYW5kYWJsZSA/IHRoaXMub25FeHBhbmRDbGljayA6IG9uSWNvbkNsaWNrO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDYXJkXG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICBjbGFzc05hbWU9e2Ake2NhcmRDbGFzc1ByZWZpeH0gJHtjbGFzc05hbWV9YH1cbiAgICAgICAgaXNMYXN0SXRlbT17aXNMYXN0SXRlbX1cbiAgICAgICAgaWQ9e2lkfVxuICAgICAgPlxuICAgICAgICB7dGl0bGUgJiZcbiAgICAgICAgPENhcmRIZWFkZXJcbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICBvbkljb25DbGljaz17cmVzb2x2ZWRPbkljb25DbGlja31cbiAgICAgICAgICBpc0V4cGFuZGVkPXt0aGlzLnN0YXRlLmlzRXhwYW5kZWR9XG4gICAgICAgICAgaXNFeHBhbmRhYmxlPXtpc0V4cGFuZGFibGV9XG4gICAgICAgIC8+fVxuICAgICAgICB7KCFpc0V4cGFuZGFibGUgfHwgdGhpcy5zdGF0ZS5pc0V4cGFuZGVkKSAmJlxuICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NQcmVmaXh9X2NvbnRlbnRgfT57Y2hpbGRyZW59PC9DYXJkQ29udGVudD59XG4gICAgICA8L0NhcmQ+XG4gICAgKTtcbiAgfVxufVxuXG5Db250ZW50Q2FyZC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgaXNMYXN0SXRlbTogUHJvcFR5cGVzLmJvb2wsXG4gIHRpdGxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5ub2RlLFxuICBdKSxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpY29uOiBQcm9wVHlwZXMubm9kZSxcbiAgb25JY29uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpc0V4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNFeHBhbmRhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25FeHBhbmQ6IFByb3BUeXBlcy5mdW5jLFxufTtcbkNvbnRlbnRDYXJkLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgaXNMYXN0SXRlbTogZmFsc2UsXG4gIHRpdGxlOiB1bmRlZmluZWQsXG4gIGhlaWdodDogdW5kZWZpbmVkLFxuICBpY29uOiB1bmRlZmluZWQsXG4gIG9uSWNvbkNsaWNrOiBudWxsLFxuICBpZDogJycsXG4gIGNsYXNzTmFtZTogJycsXG4gIGlzRXhwYW5kZWQ6IHVuZGVmaW5lZCxcbiAgaXNFeHBhbmRhYmxlOiBmYWxzZSxcbiAgb25FeHBhbmQ6IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRDYXJkO1xuIl19