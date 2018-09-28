'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}'], ['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}']);

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


var getTopOffset = function getTopOffset(offset) {
  return typeof offset === 'string' ? offset : offset + 'px';
};
var calculateHeight = function calculateHeight(props) {
  if (!props.stretch) return 'auto';
  return 'calc(100vh - ' + getTopOffset(props.topOffset) + ' - (2 * ' + props.theme.gutterWidth + '))';
};

var Row = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.gutterWidth;
}, function (props) {
  return props.theme.halfGutterWidth;
}, function (props) {
  return calculateHeight(props);
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
        topOffset = _props.topOffset,
        stretch = _props.stretch,
        id = _props.id,
        className = _props.className;

    return _react2.default.createElement(
      Row,
      {
        topOffset: topOffset,
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
  topOffset: 40,
  stretch: false,
  id: '',
  className: ''
};

exports.default = ContentRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJnZXRUb3BPZmZzZXQiLCJvZmZzZXQiLCJjYWxjdWxhdGVIZWlnaHQiLCJwcm9wcyIsInN0cmV0Y2giLCJ0b3BPZmZzZXQiLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiUm93Iiwic3R5bGVkIiwiZGl2IiwiaGFsZkd1dHRlcldpZHRoIiwiQ29udGVudFJvdyIsInJlbmRlciIsImNoaWxkcmVuIiwiaWQiLCJjbGFzc05hbWUiLCJjbGFzc1ByZWZpeCIsImVsZW1lbnQiLCJjb2xDb250YWluZXIiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpIiwidHlwZSIsImNsb25lRWxlbWVudCIsInBhcmVudCIsImlzTGFzdEl0ZW0iLCJsZW5ndGgiLCJjb2x1bW5Db3VudCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUFEQTs7O0FBR0EsSUFBTUEsZUFBZSxTQUFmQSxZQUFlO0FBQUEsU0FBVyxPQUFPQyxNQUFQLEtBQWtCLFFBQWxCLEdBQTZCQSxNQUE3QixHQUF5Q0EsTUFBekMsT0FBWDtBQUFBLENBQXJCO0FBQ0EsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsTUFBSSxDQUFDQSxNQUFNQyxPQUFYLEVBQW9CLE9BQU8sTUFBUDtBQUNwQiwyQkFBdUJKLGFBQWFHLE1BQU1FLFNBQW5CLENBQXZCLGdCQUErREYsTUFBTUcsS0FBTixDQUFZQyxXQUEzRTtBQUNELENBSEQ7O0FBS0EsSUFBTUMsTUFBTUMsMkJBQU9DLEdBQWIsa0JBQ007QUFBQSxTQUFTUCxNQUFNRyxLQUFOLENBQVlDLFdBQXJCO0FBQUEsQ0FETixFQUMwQztBQUFBLFNBQVNKLE1BQU1HLEtBQU4sQ0FBWUssZUFBckI7QUFBQSxDQUQxQyxFQUlNO0FBQUEsU0FBU1QsZ0JBQWdCQyxLQUFoQixDQUFUO0FBQUEsQ0FKTixDQUFOOztJQU9NUyxVOzs7Ozs7Ozs7dUJBQ0pDLE0scUJBQVM7QUFBQTs7QUFBQSxpQkFPSCxLQUFLVixLQVBGO0FBQUEsUUFFTFcsUUFGSyxVQUVMQSxRQUZLO0FBQUEsUUFHTFQsU0FISyxVQUdMQSxTQUhLO0FBQUEsUUFJTEQsT0FKSyxVQUlMQSxPQUpLO0FBQUEsUUFLTFcsRUFMSyxVQUtMQSxFQUxLO0FBQUEsUUFNTEMsU0FOSyxVQU1MQSxTQU5LOztBQVFQLFdBQ0U7QUFBQyxTQUFEO0FBQUE7QUFDRSxtQkFBV1gsU0FEYjtBQUVFLGlCQUFTRCxPQUZYO0FBR0UsbUJBQWNhLHNCQUFkLGFBQWlDRCxTQUhuQztBQUlFLGtCQUFVLGtCQUFDRSxPQUFELEVBQWE7QUFDckIsaUJBQUtDLFlBQUwsR0FBb0JELE9BQXBCO0FBQ0QsU0FOSDtBQU9FLFlBQUlIO0FBUE47QUFTR0ssc0JBQU1DLFFBQU4sQ0FBZUMsR0FBZixDQUFtQlIsUUFBbkIsRUFBNkIsVUFBQ1MsS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDMUM7QUFDQSxZQUFJLE9BQU9ELE1BQU1FLElBQWIsS0FBc0IsUUFBMUIsRUFBb0MsT0FBT0YsS0FBUDs7QUFFcEM7QUFDQSxlQUFPSCxnQkFBTU0sWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFDL0JJLGtCQUFRLE9BQUtSLFlBRGtCO0FBRS9CUyxzQkFBWUosTUFBTVYsU0FBU2UsTUFBVCxHQUFrQixDQUF4QixJQUE2QmYsU0FBU2UsTUFBVCxLQUFvQixDQUY5QjtBQUcvQkMsdUJBQWFoQixTQUFTZTtBQUhTLFNBQTFCLENBQVA7QUFLRCxPQVZBO0FBVEgsS0FERjtBQXVCRCxHOzs7RUFoQ3NCVCxnQkFBTVcsYTs7QUEyQy9CbkIsV0FBV29CLFlBQVgsR0FBMEI7QUFDeEJsQixZQUFVbUIsU0FEYztBQUV4QjVCLGFBQVcsRUFGYTtBQUd4QkQsV0FBUyxLQUhlO0FBSXhCVyxNQUFJLEVBSm9CO0FBS3hCQyxhQUFXO0FBTGEsQ0FBMUI7O2tCQVFlSixVIiwiZmlsZSI6ImNvbnRlbnQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IGdldFRvcE9mZnNldCA9IG9mZnNldCA9PiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycgPyBvZmZzZXQgOiBgJHtvZmZzZXR9cHhgKTtcbmNvbnN0IGNhbGN1bGF0ZUhlaWdodCA9IChwcm9wcykgPT4ge1xuICBpZiAoIXByb3BzLnN0cmV0Y2gpIHJldHVybiAnYXV0byc7XG4gIHJldHVybiBgY2FsYygxMDB2aCAtICR7Z2V0VG9wT2Zmc2V0KHByb3BzLnRvcE9mZnNldCl9IC0gKDIgKiAke3Byb3BzLnRoZW1lLmd1dHRlcldpZHRofSkpYDtcbn07XG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aH0gJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBjYWxjdWxhdGVIZWlnaHQocHJvcHMpfTtcbn19YDtcblxuY2xhc3MgQ29udGVudFJvdyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICB0b3BPZmZzZXQsXG4gICAgICBzdHJldGNoLFxuICAgICAgaWQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3dcbiAgICAgICAgdG9wT2Zmc2V0PXt0b3BPZmZzZXR9XG4gICAgICAgIHN0cmV0Y2g9e3N0cmV0Y2h9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X3JvdyAke2NsYXNzTmFtZX1gfVxuICAgICAgICBpbm5lclJlZj17KGVsZW1lbnQpID0+IHtcbiAgICAgICAgICB0aGlzLmNvbENvbnRhaW5lciA9IGVsZW1lbnQ7XG4gICAgICAgIH19XG4gICAgICAgIGlkPXtpZH1cbiAgICAgID5cbiAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiB7XG4gICAgICAgICAgLy8gSWYgaXQncyBhIHJlZ3VsYXIgRE9NIG5vZGVcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnR5cGUgPT09ICdzdHJpbmcnKSByZXR1cm4gY2hpbGQ7XG5cbiAgICAgICAgICAvLyBJZiBpdCdzIGEgUmVhY3QgY29tcG9uZW50IChpbiBtb3N0IGNhc2VzIENvbnRlbnQuQ29sdW1uKVxuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgIHBhcmVudDogdGhpcy5jb2xDb250YWluZXIsXG4gICAgICAgICAgICBpc0xhc3RJdGVtOiBpID09PSBjaGlsZHJlbi5sZW5ndGggLSAxICYmIGNoaWxkcmVuLmxlbmd0aCAhPT0gMSxcbiAgICAgICAgICAgIGNvbHVtbkNvdW50OiBjaGlsZHJlbi5sZW5ndGgsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pfVxuICAgICAgPC9Sb3c+XG4gICAgKTtcbiAgfVxufVxuXG5Db250ZW50Um93LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICB0b3BPZmZzZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgc3RyZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5Db250ZW50Um93LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgdG9wT2Zmc2V0OiA0MCxcbiAgc3RyZXRjaDogZmFsc2UsXG4gIGlkOiAnJyxcbiAgY2xhc3NOYW1lOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRSb3c7XG4iXX0=