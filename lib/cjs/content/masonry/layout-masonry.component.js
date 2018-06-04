'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  width:100vw;    \n  height: ', ';\n  padding-right: ', ';\n  padding-top: ', ';\n'], ['\n  width:100vw;    \n  height: ', ';\n  padding-right: ', ';\n  padding-top: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n  /* Small only */\n  @media screen and (max-width: 39.9375em) { width: ', '; }\n  \n  /* Medium and up */\n  @media screen and (min-width: 40em)  { width: ', '; }\n  \n  /* Medium only */\n  @media screen and (min-width: 40em) and (max-width: 63.9375em) { width: ', '; }\n  \n  /* Large and up */\n  @media screen and (min-width: 64em) { width: ', '; }\n  \n  /* Large only */\n  @media screen and (min-width: 64em) and (max-width: 74.9375em) { width: ', '; }\n'], ['\n  margin-left: ', ';\n  /* Small only */\n  @media screen and (max-width: 39.9375em) { width: ', '; }\n  \n  /* Medium and up */\n  @media screen and (min-width: 40em)  { width: ', '; }\n  \n  /* Medium only */\n  @media screen and (min-width: 40em) and (max-width: 63.9375em) { width: ', '; }\n  \n  /* Large and up */\n  @media screen and (min-width: 64em) { width: ', '; }\n  \n  /* Large only */\n  @media screen and (min-width: 64em) and (max-width: 74.9375em) { width: ', '; }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactMasonryComponent = require('react-masonry-component');

var _reactMasonryComponent2 = _interopRequireDefault(_reactMasonryComponent);

var _reactPerfectScrollbar = require('@opuscapita/react-perfect-scrollbar');

var _reactPerfectScrollbar2 = _interopRequireDefault(_reactPerfectScrollbar);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /* eslint-disable no-confusing-arrow */

// App imports


var getColumnWidth = function getColumnWidth(columnCount) {
  return 'calc((100% / ' + columnCount + ') - ' + _constants.theme.gutterWidth + ')';
};
var getTopOffset = function getTopOffset(offset) {
  return typeof offset === 'string' ? offset : offset + 'px';
};
var calculateHeight = function calculateHeight(props) {
  return 'calc(100vh - ' + getTopOffset(props.topOffset) + ' - (3 * ' + _constants.theme.gutterWidth + '))';
};

var Masonry = _styledComponents2.default.div(_templateObject, function (props) {
  return calculateHeight(props);
}, _constants.theme.gutterWidth, _constants.theme.gutterWidth);

var MasonryTile = _styledComponents2.default.div(_templateObject2, _constants.theme.gutterWidth, function (props) {
  return getColumnWidth(props.sm);
}, function (props) {
  return getColumnWidth(props.lg);
}, function (props) {
  return getColumnWidth(props.md);
}, function (props) {
  return getColumnWidth(props.xl);
}, function (props) {
  return getColumnWidth(props.lg);
});

var LayoutMasonry = function (_React$PureComponent) {
  _inherits(LayoutMasonry, _React$PureComponent);

  function LayoutMasonry() {
    _classCallCheck(this, LayoutMasonry);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  LayoutMasonry.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        columnCountExtraLarge = _props.columnCountExtraLarge,
        columnCountLarge = _props.columnCountLarge,
        columnCountMedium = _props.columnCountMedium,
        columnCountSmall = _props.columnCountSmall,
        topOffset = _props.topOffset;

    return _react2.default.createElement(
      _reactPerfectScrollbar2.default,
      null,
      _react2.default.createElement(
        Masonry,
        { className: _constants.classPrefix + '_masonry_wrapper', topOffset: topOffset },
        _react2.default.createElement(
          _reactMasonryComponent2.default,
          null,
          _react2.default.Children.map(children, function (child, i) {
            return _react2.default.createElement(
              MasonryTile,
              {
                xl: columnCountExtraLarge,
                lg: columnCountLarge,
                md: columnCountMedium,
                sm: columnCountSmall
              },
              _react2.default.cloneElement(child, {
                parent: _this2.parent,
                isLastItem: i === children.length - 1 || children.length === undefined
              })
            );
          })
        )
      )
    );
  };

  return LayoutMasonry;
}(_react2.default.PureComponent);

LayoutMasonry.defaultProps = {
  children: undefined,
  columnCountExtraLarge: 4,
  columnCountLarge: 3,
  columnCountMedium: 2,
  columnCountSmall: 1,
  topOffset: 40
};

exports.default = LayoutMasonry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L21hc29ucnkvbGF5b3V0LW1hc29ucnkuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJnZXRDb2x1bW5XaWR0aCIsImNvbHVtbkNvdW50IiwiZ3V0dGVyV2lkdGgiLCJnZXRUb3BPZmZzZXQiLCJvZmZzZXQiLCJjYWxjdWxhdGVIZWlnaHQiLCJwcm9wcyIsInRvcE9mZnNldCIsIk1hc29ucnkiLCJkaXYiLCJNYXNvbnJ5VGlsZSIsInNtIiwibGciLCJtZCIsInhsIiwiTGF5b3V0TWFzb25yeSIsInJlbmRlciIsImNoaWxkcmVuIiwiY29sdW1uQ291bnRFeHRyYUxhcmdlIiwiY29sdW1uQ291bnRMYXJnZSIsImNvbHVtbkNvdW50TWVkaXVtIiwiY29sdW1uQ291bnRTbWFsbCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpIiwiY2xvbmVFbGVtZW50IiwicGFyZW50IiwiaXNMYXN0SXRlbSIsImxlbmd0aCIsInVuZGVmaW5lZCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7Ozs7Ozs7MEZBVEE7O0FBUUE7OztBQUdBLElBQU1BLGlCQUFpQixTQUFqQkEsY0FBaUI7QUFBQSwyQkFBK0JDLFdBQS9CLFlBQWlELGlCQUFNQyxXQUF2RDtBQUFBLENBQXZCO0FBQ0EsSUFBTUMsZUFBZSxTQUFmQSxZQUFlO0FBQUEsU0FBVSxPQUFPQyxNQUFQLEtBQWtCLFFBQWxCLEdBQTZCQSxNQUE3QixHQUF5Q0EsTUFBekMsT0FBVjtBQUFBLENBQXJCO0FBQ0EsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLDJCQUF5QkYsYUFBYUcsTUFBTUMsU0FBbkIsQ0FBekIsZ0JBQWlFLGlCQUFNTCxXQUF2RTtBQUFBLENBQXhCOztBQUVBLElBQU1NLFVBQVUsMkJBQU9DLEdBQWpCLGtCQUVNO0FBQUEsU0FBU0osZ0JBQWdCQyxLQUFoQixDQUFUO0FBQUEsQ0FGTixFQUdhLGlCQUFNSixXQUhuQixFQUlXLGlCQUFNQSxXQUpqQixDQUFOOztBQU9BLElBQU1RLGNBQWMsMkJBQU9ELEdBQXJCLG1CQUNXLGlCQUFNUCxXQURqQixFQUdnRDtBQUFBLFNBQVNGLGVBQWVNLE1BQU1LLEVBQXJCLENBQVQ7QUFBQSxDQUhoRCxFQU00QztBQUFBLFNBQVNYLGVBQWVNLE1BQU1NLEVBQXJCLENBQVQ7QUFBQSxDQU41QyxFQVNzRTtBQUFBLFNBQVNaLGVBQWVNLE1BQU1PLEVBQXJCLENBQVQ7QUFBQSxDQVR0RSxFQVkyQztBQUFBLFNBQVNiLGVBQWVNLE1BQU1RLEVBQXJCLENBQVQ7QUFBQSxDQVozQyxFQWVzRTtBQUFBLFNBQVNkLGVBQWVNLE1BQU1NLEVBQXJCLENBQVQ7QUFBQSxDQWZ0RSxDQUFOOztJQWtCTUcsYTs7Ozs7Ozs7OzBCQUNKQyxNLHFCQUFTO0FBQUE7O0FBQUEsaUJBSUgsS0FBS1YsS0FKRjtBQUFBLFFBRUxXLFFBRkssVUFFTEEsUUFGSztBQUFBLFFBRUtDLHFCQUZMLFVBRUtBLHFCQUZMO0FBQUEsUUFFNEJDLGdCQUY1QixVQUU0QkEsZ0JBRjVCO0FBQUEsUUFFOENDLGlCQUY5QyxVQUU4Q0EsaUJBRjlDO0FBQUEsUUFFaUVDLGdCQUZqRSxVQUVpRUEsZ0JBRmpFO0FBQUEsUUFHTGQsU0FISyxVQUdMQSxTQUhLOztBQUtQLFdBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQyxlQUFEO0FBQUEsVUFBUyxzREFBVCxFQUFzRCxXQUFXQSxTQUFqRTtBQUNFO0FBQUE7QUFBQTtBQUNHLDBCQUFNZSxRQUFOLENBQWVDLEdBQWYsQ0FBbUJOLFFBQW5CLEVBQTZCLFVBQUNPLEtBQUQsRUFBUUMsQ0FBUjtBQUFBLG1CQUM1QjtBQUFDLHlCQUFEO0FBQUE7QUFDRSxvQkFBSVAscUJBRE47QUFFRSxvQkFBSUMsZ0JBRk47QUFHRSxvQkFBSUMsaUJBSE47QUFJRSxvQkFBSUM7QUFKTjtBQU1HLDhCQUFNSyxZQUFOLENBQW1CRixLQUFuQixFQUEwQjtBQUN6Qkcsd0JBQVEsT0FBS0EsTUFEWTtBQUV6QkMsNEJBQVlILE1BQU1SLFNBQVNZLE1BQVQsR0FBa0IsQ0FBeEIsSUFBNkJaLFNBQVNZLE1BQVQsS0FBb0JDO0FBRnBDLGVBQTFCO0FBTkgsYUFENEI7QUFBQSxXQUE3QjtBQURIO0FBREY7QUFERixLQURGO0FBcUJELEc7OztFQTNCeUIsZ0JBQU1DLGE7O0FBc0NsQ2hCLGNBQWNpQixZQUFkLEdBQTZCO0FBQzNCZixZQUFVYSxTQURpQjtBQUUzQloseUJBQXVCLENBRkk7QUFHM0JDLG9CQUFrQixDQUhTO0FBSTNCQyxxQkFBbUIsQ0FKUTtBQUszQkMsb0JBQWtCLENBTFM7QUFNM0JkLGFBQVc7QUFOZ0IsQ0FBN0I7O2tCQVNlUSxhIiwiZmlsZSI6ImxheW91dC1tYXNvbnJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmZ1c2luZy1hcnJvdyAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0TWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCc7XG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBnZXRDb2x1bW5XaWR0aCA9IGNvbHVtbkNvdW50ID0+IGBjYWxjKCgxMDAlIC8gJHtjb2x1bW5Db3VudH0pIC0gJHt0aGVtZS5ndXR0ZXJXaWR0aH0pYDtcbmNvbnN0IGdldFRvcE9mZnNldCA9IG9mZnNldCA9PiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJyA/IG9mZnNldCA6IGAke29mZnNldH1weGA7XG5jb25zdCBjYWxjdWxhdGVIZWlnaHQgPSBwcm9wcyA9PiBgY2FsYygxMDB2aCAtICR7Z2V0VG9wT2Zmc2V0KHByb3BzLnRvcE9mZnNldCl9IC0gKDMgKiAke3RoZW1lLmd1dHRlcldpZHRofSkpYDtcblxuY29uc3QgTWFzb25yeSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOjEwMHZ3OyAgICBcbiAgaGVpZ2h0OiAke3Byb3BzID0+IGNhbGN1bGF0ZUhlaWdodChwcm9wcyl9O1xuICBwYWRkaW5nLXJpZ2h0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgcGFkZGluZy10b3A6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuYDtcblxuY29uc3QgTWFzb25yeVRpbGUgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG4gIC8qIFNtYWxsIG9ubHkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkuOTM3NWVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLnNtKX07IH1cbiAgXG4gIC8qIE1lZGl1bSBhbmQgdXAgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkgIHsgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0Q29sdW1uV2lkdGgocHJvcHMubGcpfTsgfVxuICBcbiAgLyogTWVkaXVtIG9ubHkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkgYW5kIChtYXgtd2lkdGg6IDYzLjkzNzVlbSkgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5tZCl9OyB9XG4gIFxuICAvKiBMYXJnZSBhbmQgdXAgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy54bCl9OyB9XG4gIFxuICAvKiBMYXJnZSBvbmx5ICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pIGFuZCAobWF4LXdpZHRoOiA3NC45Mzc1ZW0pIHsgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0Q29sdW1uV2lkdGgocHJvcHMubGcpfTsgfVxuYDtcblxuY2xhc3MgTGF5b3V0TWFzb25yeSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sIGNvbHVtbkNvdW50RXh0cmFMYXJnZSwgY29sdW1uQ291bnRMYXJnZSwgY29sdW1uQ291bnRNZWRpdW0sIGNvbHVtbkNvdW50U21hbGwsXG4gICAgICB0b3BPZmZzZXQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQZXJmZWN0U2Nyb2xsYmFyPlxuICAgICAgICA8TWFzb25yeSBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9tYXNvbnJ5X3dyYXBwZXJgfSB0b3BPZmZzZXQ9e3RvcE9mZnNldH0+XG4gICAgICAgICAgPFJlYWN0TWFzb25yeT5cbiAgICAgICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8TWFzb25yeVRpbGVcbiAgICAgICAgICAgICAgICB4bD17Y29sdW1uQ291bnRFeHRyYUxhcmdlfVxuICAgICAgICAgICAgICAgIGxnPXtjb2x1bW5Db3VudExhcmdlfVxuICAgICAgICAgICAgICAgIG1kPXtjb2x1bW5Db3VudE1lZGl1bX1cbiAgICAgICAgICAgICAgICBzbT17Y29sdW1uQ291bnRTbWFsbH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICAgICAgICAgICAgICBpc0xhc3RJdGVtOiBpID09PSBjaGlsZHJlbi5sZW5ndGggLSAxIHx8IGNoaWxkcmVuLmxlbmd0aCA9PT0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L01hc29ucnlUaWxlPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9SZWFjdE1hc29ucnk+XG4gICAgICAgIDwvTWFzb25yeT5cbiAgICAgIDwvUGVyZmVjdFNjcm9sbGJhcj5cbiAgICApO1xuICB9XG59XG5cbkxheW91dE1hc29ucnkucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNvbHVtbkNvdW50RXh0cmFMYXJnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjb2x1bW5Db3VudExhcmdlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGNvbHVtbkNvdW50TWVkaXVtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGNvbHVtbkNvdW50U21hbGw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgdG9wT2Zmc2V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG59O1xuTGF5b3V0TWFzb25yeS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGNvbHVtbkNvdW50RXh0cmFMYXJnZTogNCxcbiAgY29sdW1uQ291bnRMYXJnZTogMyxcbiAgY29sdW1uQ291bnRNZWRpdW06IDIsXG4gIGNvbHVtbkNvdW50U21hbGw6IDEsXG4gIHRvcE9mZnNldDogNDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRNYXNvbnJ5O1xuIl19