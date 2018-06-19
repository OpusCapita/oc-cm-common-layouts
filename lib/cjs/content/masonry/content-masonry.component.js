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

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

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

var ContentMasonry = function (_React$PureComponent) {
  _inherits(ContentMasonry, _React$PureComponent);

  function ContentMasonry() {
    _classCallCheck(this, ContentMasonry);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  ContentMasonry.prototype.render = function render() {
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

  return ContentMasonry;
}(_react2.default.PureComponent);

ContentMasonry.defaultProps = {
  children: undefined,
  columnCountExtraLarge: 4,
  columnCountLarge: 3,
  columnCountMedium: 2,
  columnCountSmall: 1,
  topOffset: 40
};

exports.default = ContentMasonry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L21hc29ucnkvY29udGVudC1tYXNvbnJ5LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiZ2V0Q29sdW1uV2lkdGgiLCJjb2x1bW5Db3VudCIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJnZXRUb3BPZmZzZXQiLCJvZmZzZXQiLCJjYWxjdWxhdGVIZWlnaHQiLCJwcm9wcyIsInRvcE9mZnNldCIsIk1hc29ucnkiLCJzdHlsZWQiLCJkaXYiLCJNYXNvbnJ5VGlsZSIsInNtIiwibGciLCJtZCIsInhsIiwiQ29udGVudE1hc29ucnkiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNvbHVtbkNvdW50RXh0cmFMYXJnZSIsImNvbHVtbkNvdW50TGFyZ2UiLCJjb2x1bW5Db3VudE1lZGl1bSIsImNvbHVtbkNvdW50U21hbGwiLCJjbGFzc1ByZWZpeCIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImkiLCJjbG9uZUVsZW1lbnQiLCJwYXJlbnQiLCJpc0xhc3RJdGVtIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7Ozs7Ozs7Ozs7O0FBREE7OztBQUdBLElBQU1BLGlCQUFpQixTQUFqQkEsY0FBaUI7QUFBQSwyQkFBK0JDLFdBQS9CLFlBQWlEQyxpQkFBTUMsV0FBdkQ7QUFBQSxDQUF2QjtBQUNBLElBQU1DLGVBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQVcsT0FBT0MsTUFBUCxLQUFrQixRQUFsQixHQUE2QkEsTUFBN0IsR0FBeUNBLE1BQXpDLE9BQVg7QUFBQSxDQUFyQjtBQUNBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0I7QUFBQSwyQkFBeUJGLGFBQWFHLE1BQU1DLFNBQW5CLENBQXpCLGdCQUFpRU4saUJBQU1DLFdBQXZFO0FBQUEsQ0FBeEI7O0FBRUEsSUFBTU0sVUFBVUMsMkJBQU9DLEdBQWpCLGtCQUVNO0FBQUEsU0FBU0wsZ0JBQWdCQyxLQUFoQixDQUFUO0FBQUEsQ0FGTixFQUdhTCxpQkFBTUMsV0FIbkIsRUFJV0QsaUJBQU1DLFdBSmpCLENBQU47O0FBT0EsSUFBTVMsY0FBY0YsMkJBQU9DLEdBQXJCLG1CQUNXVCxpQkFBTUMsV0FEakIsRUFHZ0Q7QUFBQSxTQUFTSCxlQUFlTyxNQUFNTSxFQUFyQixDQUFUO0FBQUEsQ0FIaEQsRUFNNEM7QUFBQSxTQUFTYixlQUFlTyxNQUFNTyxFQUFyQixDQUFUO0FBQUEsQ0FONUMsRUFTc0U7QUFBQSxTQUFTZCxlQUFlTyxNQUFNUSxFQUFyQixDQUFUO0FBQUEsQ0FUdEUsRUFZMkM7QUFBQSxTQUFTZixlQUFlTyxNQUFNUyxFQUFyQixDQUFUO0FBQUEsQ0FaM0MsRUFlc0U7QUFBQSxTQUFTaEIsZUFBZU8sTUFBTU8sRUFBckIsQ0FBVDtBQUFBLENBZnRFLENBQU47O0lBa0JNRyxjOzs7Ozs7Ozs7MkJBQ0pDLE0scUJBQVM7QUFBQTs7QUFBQSxpQkFJSCxLQUFLWCxLQUpGO0FBQUEsUUFFTFksUUFGSyxVQUVMQSxRQUZLO0FBQUEsUUFFS0MscUJBRkwsVUFFS0EscUJBRkw7QUFBQSxRQUU0QkMsZ0JBRjVCLFVBRTRCQSxnQkFGNUI7QUFBQSxRQUU4Q0MsaUJBRjlDLFVBRThDQSxpQkFGOUM7QUFBQSxRQUVpRUMsZ0JBRmpFLFVBRWlFQSxnQkFGakU7QUFBQSxRQUdMZixTQUhLLFVBR0xBLFNBSEs7O0FBS1AsV0FDRTtBQUFDLHFDQUFEO0FBQUE7QUFDRTtBQUFDLGVBQUQ7QUFBQSxVQUFTLFdBQWNnQixzQkFBZCxxQkFBVCxFQUFzRCxXQUFXaEIsU0FBakU7QUFDRTtBQUFDLHlDQUFEO0FBQUE7QUFDR2lCLDBCQUFNQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJSLFFBQW5CLEVBQTZCLFVBQUNTLEtBQUQsRUFBUUMsQ0FBUjtBQUFBLG1CQUM1QjtBQUFDLHlCQUFEO0FBQUE7QUFDRSxvQkFBSVQscUJBRE47QUFFRSxvQkFBSUMsZ0JBRk47QUFHRSxvQkFBSUMsaUJBSE47QUFJRSxvQkFBSUM7QUFKTjtBQU1HRSw4QkFBTUssWUFBTixDQUFtQkYsS0FBbkIsRUFBMEI7QUFDekJHLHdCQUFRLE9BQUtBLE1BRFk7QUFFekJDLDRCQUFZSCxNQUFNVixTQUFTYyxNQUFULEdBQWtCLENBQXhCLElBQTZCZCxTQUFTYyxNQUFULEtBQW9CQztBQUZwQyxlQUExQjtBQU5ILGFBRDRCO0FBQUEsV0FBN0I7QUFESDtBQURGO0FBREYsS0FERjtBQXFCRCxHOzs7RUEzQjBCVCxnQkFBTVUsYTs7QUFzQ25DbEIsZUFBZW1CLFlBQWYsR0FBOEI7QUFDNUJqQixZQUFVZSxTQURrQjtBQUU1QmQseUJBQXVCLENBRks7QUFHNUJDLG9CQUFrQixDQUhVO0FBSTVCQyxxQkFBbUIsQ0FKUztBQUs1QkMsb0JBQWtCLENBTFU7QUFNNUJmLGFBQVc7QUFOaUIsQ0FBOUI7O2tCQVNlUyxjIiwiZmlsZSI6ImNvbnRlbnQtbWFzb25yeS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0TWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCc7XG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBnZXRDb2x1bW5XaWR0aCA9IGNvbHVtbkNvdW50ID0+IGBjYWxjKCgxMDAlIC8gJHtjb2x1bW5Db3VudH0pIC0gJHt0aGVtZS5ndXR0ZXJXaWR0aH0pYDtcbmNvbnN0IGdldFRvcE9mZnNldCA9IG9mZnNldCA9PiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycgPyBvZmZzZXQgOiBgJHtvZmZzZXR9cHhgKTtcbmNvbnN0IGNhbGN1bGF0ZUhlaWdodCA9IHByb3BzID0+IGBjYWxjKDEwMHZoIC0gJHtnZXRUb3BPZmZzZXQocHJvcHMudG9wT2Zmc2V0KX0gLSAoMyAqICR7dGhlbWUuZ3V0dGVyV2lkdGh9KSlgO1xuXG5jb25zdCBNYXNvbnJ5ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6MTAwdnc7ICAgIFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gY2FsY3VsYXRlSGVpZ2h0KHByb3BzKX07XG4gIHBhZGRpbmctcmlnaHQ6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBwYWRkaW5nLXRvcDogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG5gO1xuXG5jb25zdCBNYXNvbnJ5VGlsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgLyogU21hbGwgb25seSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOS45Mzc1ZW0pIHsgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0Q29sdW1uV2lkdGgocHJvcHMuc20pfTsgfVxuICBcbiAgLyogTWVkaXVtIGFuZCB1cCAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSAgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5sZyl9OyB9XG4gIFxuICAvKiBNZWRpdW0gb25seSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSBhbmQgKG1heC13aWR0aDogNjMuOTM3NWVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLm1kKX07IH1cbiAgXG4gIC8qIExhcmdlIGFuZCB1cCAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLnhsKX07IH1cbiAgXG4gIC8qIExhcmdlIG9ubHkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkgYW5kIChtYXgtd2lkdGg6IDc0LjkzNzVlbSkgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5sZyl9OyB9XG5gO1xuXG5jbGFzcyBDb250ZW50TWFzb25yeSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sIGNvbHVtbkNvdW50RXh0cmFMYXJnZSwgY29sdW1uQ291bnRMYXJnZSwgY29sdW1uQ291bnRNZWRpdW0sIGNvbHVtbkNvdW50U21hbGwsXG4gICAgICB0b3BPZmZzZXQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQZXJmZWN0U2Nyb2xsYmFyPlxuICAgICAgICA8TWFzb25yeSBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9tYXNvbnJ5X3dyYXBwZXJgfSB0b3BPZmZzZXQ9e3RvcE9mZnNldH0+XG4gICAgICAgICAgPFJlYWN0TWFzb25yeT5cbiAgICAgICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8TWFzb25yeVRpbGVcbiAgICAgICAgICAgICAgICB4bD17Y29sdW1uQ291bnRFeHRyYUxhcmdlfVxuICAgICAgICAgICAgICAgIGxnPXtjb2x1bW5Db3VudExhcmdlfVxuICAgICAgICAgICAgICAgIG1kPXtjb2x1bW5Db3VudE1lZGl1bX1cbiAgICAgICAgICAgICAgICBzbT17Y29sdW1uQ291bnRTbWFsbH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICAgICAgICAgICAgICBpc0xhc3RJdGVtOiBpID09PSBjaGlsZHJlbi5sZW5ndGggLSAxIHx8IGNoaWxkcmVuLmxlbmd0aCA9PT0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L01hc29ucnlUaWxlPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9SZWFjdE1hc29ucnk+XG4gICAgICAgIDwvTWFzb25yeT5cbiAgICAgIDwvUGVyZmVjdFNjcm9sbGJhcj5cbiAgICApO1xuICB9XG59XG5cbkNvbnRlbnRNYXNvbnJ5LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjb2x1bW5Db3VudEV4dHJhTGFyZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY29sdW1uQ291bnRMYXJnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjb2x1bW5Db3VudE1lZGl1bTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjb2x1bW5Db3VudFNtYWxsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIHRvcE9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxufTtcbkNvbnRlbnRNYXNvbnJ5LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgY29sdW1uQ291bnRFeHRyYUxhcmdlOiA0LFxuICBjb2x1bW5Db3VudExhcmdlOiAzLFxuICBjb2x1bW5Db3VudE1lZGl1bTogMixcbiAgY29sdW1uQ291bnRTbWFsbDogMSxcbiAgdG9wT2Zmc2V0OiA0MCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRNYXNvbnJ5O1xuIl19