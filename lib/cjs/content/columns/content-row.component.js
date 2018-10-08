'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}}'], ['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n}}']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// App imports


var Row = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.gutterWidth;
}, function (props) {
  return props.theme.halfGutterWidth;
});

var ContentRow = function (_React$PureComponent) {
  _inherits(ContentRow, _React$PureComponent);

  function ContentRow() {
    _classCallCheck(this, ContentRow);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  ContentRow.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        stretch = _props.stretch,
        id = _props.id,
        className = _props.className;

    return _react2.default.createElement(
      Row,
      {
        stretch: stretch,
        className: _constants.classPrefix + '_row ' + className,
        innerRef: function innerRef(element) {
          _this2.colContainer = element;
        },
        id: id
      },
      _react2.default.Children.map(children, function (child, i) {
        // If it's a regular DOM node
        if (typeof child.type === 'string') return child;

        // If it's a React component (in most cases Content.Column)
        return _react2.default.cloneElement(child, {
          parent: _this2.colContainer,
          isLastItem: i === children.length - 1 && children.length !== 1,
          columnCount: children.length
        });
      })
    );
  };

  return ContentRow;
}(_react2.default.PureComponent);

ContentRow.defaultProps = {
  children: undefined,
  stretch: false,
  id: '',
  className: ''
};

exports.default = ContentRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSb3ciLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJoYWxmR3V0dGVyV2lkdGgiLCJDb250ZW50Um93IiwicmVuZGVyIiwiY2hpbGRyZW4iLCJzdHJldGNoIiwiaWQiLCJjbGFzc05hbWUiLCJjbGFzc1ByZWZpeCIsImVsZW1lbnQiLCJjb2xDb250YWluZXIiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpIiwidHlwZSIsImNsb25lRWxlbWVudCIsInBhcmVudCIsImlzTGFzdEl0ZW0iLCJsZW5ndGgiLCJjb2x1bW5Db3VudCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUFEQTs7O0FBR0EsSUFBTUEsTUFBTUMsMkJBQU9DLEdBQWIsa0JBQ007QUFBQSxTQUFTQyxNQUFNQyxLQUFOLENBQVlDLFdBQXJCO0FBQUEsQ0FETixFQUMwQztBQUFBLFNBQVNGLE1BQU1DLEtBQU4sQ0FBWUUsZUFBckI7QUFBQSxDQUQxQyxDQUFOOztJQU9NQyxVOzs7Ozs7Ozs7dUJBQ0pDLE0scUJBQVM7QUFBQTs7QUFBQSxpQkFNSCxLQUFLTCxLQU5GO0FBQUEsUUFFTE0sUUFGSyxVQUVMQSxRQUZLO0FBQUEsUUFHTEMsT0FISyxVQUdMQSxPQUhLO0FBQUEsUUFJTEMsRUFKSyxVQUlMQSxFQUpLO0FBQUEsUUFLTEMsU0FMSyxVQUtMQSxTQUxLOztBQU9QLFdBQ0U7QUFBQyxTQUFEO0FBQUE7QUFDRSxpQkFBU0YsT0FEWDtBQUVFLG1CQUFjRyxzQkFBZCxhQUFpQ0QsU0FGbkM7QUFHRSxrQkFBVSxrQkFBQ0UsT0FBRCxFQUFhO0FBQ3JCLGlCQUFLQyxZQUFMLEdBQW9CRCxPQUFwQjtBQUNELFNBTEg7QUFNRSxZQUFJSDtBQU5OO0FBUUdLLHNCQUFNQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJULFFBQW5CLEVBQTZCLFVBQUNVLEtBQUQsRUFBUUMsQ0FBUixFQUFjO0FBQzFDO0FBQ0EsWUFBSSxPQUFPRCxNQUFNRSxJQUFiLEtBQXNCLFFBQTFCLEVBQW9DLE9BQU9GLEtBQVA7O0FBRXBDO0FBQ0EsZUFBT0gsZ0JBQU1NLFlBQU4sQ0FBbUJILEtBQW5CLEVBQTBCO0FBQy9CSSxrQkFBUSxPQUFLUixZQURrQjtBQUUvQlMsc0JBQVlKLE1BQU1YLFNBQVNnQixNQUFULEdBQWtCLENBQXhCLElBQTZCaEIsU0FBU2dCLE1BQVQsS0FBb0IsQ0FGOUI7QUFHL0JDLHVCQUFhakIsU0FBU2dCO0FBSFMsU0FBMUIsQ0FBUDtBQUtELE9BVkE7QUFSSCxLQURGO0FBc0JELEc7OztFQTlCc0JULGdCQUFNVyxhOztBQXdDL0JwQixXQUFXcUIsWUFBWCxHQUEwQjtBQUN4Qm5CLFlBQVVvQixTQURjO0FBRXhCbkIsV0FBUyxLQUZlO0FBR3hCQyxNQUFJLEVBSG9CO0FBSXhCQyxhQUFXO0FBSmEsQ0FBMUI7O2tCQU9lTCxVIiwiZmlsZSI6ImNvbnRlbnQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aH0gJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufX1gO1xuXG5jbGFzcyBDb250ZW50Um93IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIHN0cmV0Y2gsXG4gICAgICBpZCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFJvd1xuICAgICAgICBzdHJldGNoPXtzdHJldGNofVxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9yb3cgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgaW5uZXJSZWY9eyhlbGVtZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5jb2xDb250YWluZXIgPSBlbGVtZW50O1xuICAgICAgICB9fVxuICAgICAgICBpZD17aWR9XG4gICAgICA+XG4gICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4ge1xuICAgICAgICAgIC8vIElmIGl0J3MgYSByZWd1bGFyIERPTSBub2RlXG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC50eXBlID09PSAnc3RyaW5nJykgcmV0dXJuIGNoaWxkO1xuXG4gICAgICAgICAgLy8gSWYgaXQncyBhIFJlYWN0IGNvbXBvbmVudCAoaW4gbW9zdCBjYXNlcyBDb250ZW50LkNvbHVtbilcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICBwYXJlbnQ6IHRoaXMuY29sQ29udGFpbmVyLFxuICAgICAgICAgICAgaXNMYXN0SXRlbTogaSA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSAmJiBjaGlsZHJlbi5sZW5ndGggIT09IDEsXG4gICAgICAgICAgICBjb2x1bW5Db3VudDogY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KX1cbiAgICAgIDwvUm93PlxuICAgICk7XG4gIH1cbn1cblxuQ29udGVudFJvdy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgc3RyZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5Db250ZW50Um93LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgc3RyZXRjaDogZmFsc2UsXG4gIGlkOiAnJyxcbiAgY2xhc3NOYW1lOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRSb3c7XG4iXX0=