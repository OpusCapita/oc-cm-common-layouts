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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L21hc29ucnkvY29udGVudC1tYXNvbnJ5LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiZ2V0Q29sdW1uV2lkdGgiLCJjb2x1bW5Db3VudCIsImd1dHRlcldpZHRoIiwiZ2V0VG9wT2Zmc2V0Iiwib2Zmc2V0IiwiY2FsY3VsYXRlSGVpZ2h0IiwicHJvcHMiLCJ0b3BPZmZzZXQiLCJNYXNvbnJ5IiwiZGl2IiwiTWFzb25yeVRpbGUiLCJzbSIsImxnIiwibWQiLCJ4bCIsIkNvbnRlbnRNYXNvbnJ5IiwicmVuZGVyIiwiY2hpbGRyZW4iLCJjb2x1bW5Db3VudEV4dHJhTGFyZ2UiLCJjb2x1bW5Db3VudExhcmdlIiwiY29sdW1uQ291bnRNZWRpdW0iLCJjb2x1bW5Db3VudFNtYWxsIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImkiLCJjbG9uZUVsZW1lbnQiLCJwYXJlbnQiLCJpc0xhc3RJdGVtIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7Ozs7Ozs7OzswRkFUQTs7QUFRQTs7O0FBR0EsSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLDJCQUErQkMsV0FBL0IsWUFBaUQsaUJBQU1DLFdBQXZEO0FBQUEsQ0FBdkI7QUFDQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFVLE9BQU9DLE1BQVAsS0FBa0IsUUFBbEIsR0FBNkJBLE1BQTdCLEdBQXlDQSxNQUF6QyxPQUFWO0FBQUEsQ0FBckI7QUFDQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCO0FBQUEsMkJBQXlCRixhQUFhRyxNQUFNQyxTQUFuQixDQUF6QixnQkFBaUUsaUJBQU1MLFdBQXZFO0FBQUEsQ0FBeEI7O0FBRUEsSUFBTU0sVUFBVSwyQkFBT0MsR0FBakIsa0JBRU07QUFBQSxTQUFTSixnQkFBZ0JDLEtBQWhCLENBQVQ7QUFBQSxDQUZOLEVBR2EsaUJBQU1KLFdBSG5CLEVBSVcsaUJBQU1BLFdBSmpCLENBQU47O0FBT0EsSUFBTVEsY0FBYywyQkFBT0QsR0FBckIsbUJBQ1csaUJBQU1QLFdBRGpCLEVBR2dEO0FBQUEsU0FBU0YsZUFBZU0sTUFBTUssRUFBckIsQ0FBVDtBQUFBLENBSGhELEVBTTRDO0FBQUEsU0FBU1gsZUFBZU0sTUFBTU0sRUFBckIsQ0FBVDtBQUFBLENBTjVDLEVBU3NFO0FBQUEsU0FBU1osZUFBZU0sTUFBTU8sRUFBckIsQ0FBVDtBQUFBLENBVHRFLEVBWTJDO0FBQUEsU0FBU2IsZUFBZU0sTUFBTVEsRUFBckIsQ0FBVDtBQUFBLENBWjNDLEVBZXNFO0FBQUEsU0FBU2QsZUFBZU0sTUFBTU0sRUFBckIsQ0FBVDtBQUFBLENBZnRFLENBQU47O0lBa0JNRyxjOzs7Ozs7Ozs7MkJBQ0pDLE0scUJBQVM7QUFBQTs7QUFBQSxpQkFJSCxLQUFLVixLQUpGO0FBQUEsUUFFTFcsUUFGSyxVQUVMQSxRQUZLO0FBQUEsUUFFS0MscUJBRkwsVUFFS0EscUJBRkw7QUFBQSxRQUU0QkMsZ0JBRjVCLFVBRTRCQSxnQkFGNUI7QUFBQSxRQUU4Q0MsaUJBRjlDLFVBRThDQSxpQkFGOUM7QUFBQSxRQUVpRUMsZ0JBRmpFLFVBRWlFQSxnQkFGakU7QUFBQSxRQUdMZCxTQUhLLFVBR0xBLFNBSEs7O0FBS1AsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFDLGVBQUQ7QUFBQSxVQUFTLHNEQUFULEVBQXNELFdBQVdBLFNBQWpFO0FBQ0U7QUFBQTtBQUFBO0FBQ0csMEJBQU1lLFFBQU4sQ0FBZUMsR0FBZixDQUFtQk4sUUFBbkIsRUFBNkIsVUFBQ08sS0FBRCxFQUFRQyxDQUFSO0FBQUEsbUJBQzVCO0FBQUMseUJBQUQ7QUFBQTtBQUNFLG9CQUFJUCxxQkFETjtBQUVFLG9CQUFJQyxnQkFGTjtBQUdFLG9CQUFJQyxpQkFITjtBQUlFLG9CQUFJQztBQUpOO0FBTUcsOEJBQU1LLFlBQU4sQ0FBbUJGLEtBQW5CLEVBQTBCO0FBQ3pCRyx3QkFBUSxPQUFLQSxNQURZO0FBRXpCQyw0QkFBWUgsTUFBTVIsU0FBU1ksTUFBVCxHQUFrQixDQUF4QixJQUE2QlosU0FBU1ksTUFBVCxLQUFvQkM7QUFGcEMsZUFBMUI7QUFOSCxhQUQ0QjtBQUFBLFdBQTdCO0FBREg7QUFERjtBQURGLEtBREY7QUFxQkQsRzs7O0VBM0IwQixnQkFBTUMsYTs7QUFzQ25DaEIsZUFBZWlCLFlBQWYsR0FBOEI7QUFDNUJmLFlBQVVhLFNBRGtCO0FBRTVCWix5QkFBdUIsQ0FGSztBQUc1QkMsb0JBQWtCLENBSFU7QUFJNUJDLHFCQUFtQixDQUpTO0FBSzVCQyxvQkFBa0IsQ0FMVTtBQU01QmQsYUFBVztBQU5pQixDQUE5Qjs7a0JBU2VRLGMiLCJmaWxlIjoiY29udGVudC1tYXNvbnJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmZ1c2luZy1hcnJvdyAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0TWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCc7XG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBnZXRDb2x1bW5XaWR0aCA9IGNvbHVtbkNvdW50ID0+IGBjYWxjKCgxMDAlIC8gJHtjb2x1bW5Db3VudH0pIC0gJHt0aGVtZS5ndXR0ZXJXaWR0aH0pYDtcbmNvbnN0IGdldFRvcE9mZnNldCA9IG9mZnNldCA9PiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJyA/IG9mZnNldCA6IGAke29mZnNldH1weGA7XG5jb25zdCBjYWxjdWxhdGVIZWlnaHQgPSBwcm9wcyA9PiBgY2FsYygxMDB2aCAtICR7Z2V0VG9wT2Zmc2V0KHByb3BzLnRvcE9mZnNldCl9IC0gKDMgKiAke3RoZW1lLmd1dHRlcldpZHRofSkpYDtcblxuY29uc3QgTWFzb25yeSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOjEwMHZ3OyAgICBcbiAgaGVpZ2h0OiAke3Byb3BzID0+IGNhbGN1bGF0ZUhlaWdodChwcm9wcyl9O1xuICBwYWRkaW5nLXJpZ2h0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgcGFkZGluZy10b3A6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuYDtcblxuY29uc3QgTWFzb25yeVRpbGUgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG4gIC8qIFNtYWxsIG9ubHkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkuOTM3NWVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLnNtKX07IH1cbiAgXG4gIC8qIE1lZGl1bSBhbmQgdXAgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkgIHsgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0Q29sdW1uV2lkdGgocHJvcHMubGcpfTsgfVxuICBcbiAgLyogTWVkaXVtIG9ubHkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkgYW5kIChtYXgtd2lkdGg6IDYzLjkzNzVlbSkgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5tZCl9OyB9XG4gIFxuICAvKiBMYXJnZSBhbmQgdXAgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy54bCl9OyB9XG4gIFxuICAvKiBMYXJnZSBvbmx5ICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pIGFuZCAobWF4LXdpZHRoOiA3NC45Mzc1ZW0pIHsgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0Q29sdW1uV2lkdGgocHJvcHMubGcpfTsgfVxuYDtcblxuY2xhc3MgQ29udGVudE1hc29ucnkgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLCBjb2x1bW5Db3VudEV4dHJhTGFyZ2UsIGNvbHVtbkNvdW50TGFyZ2UsIGNvbHVtbkNvdW50TWVkaXVtLCBjb2x1bW5Db3VudFNtYWxsLFxuICAgICAgdG9wT2Zmc2V0LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UGVyZmVjdFNjcm9sbGJhcj5cbiAgICAgICAgPE1hc29ucnkgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fbWFzb25yeV93cmFwcGVyYH0gdG9wT2Zmc2V0PXt0b3BPZmZzZXR9PlxuICAgICAgICAgIDxSZWFjdE1hc29ucnk+XG4gICAgICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IChcbiAgICAgICAgICAgICAgPE1hc29ucnlUaWxlXG4gICAgICAgICAgICAgICAgeGw9e2NvbHVtbkNvdW50RXh0cmFMYXJnZX1cbiAgICAgICAgICAgICAgICBsZz17Y29sdW1uQ291bnRMYXJnZX1cbiAgICAgICAgICAgICAgICBtZD17Y29sdW1uQ291bnRNZWRpdW19XG4gICAgICAgICAgICAgICAgc209e2NvbHVtbkNvdW50U21hbGx9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICAgICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgICAgICAgICAgICAgaXNMYXN0SXRlbTogaSA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSB8fCBjaGlsZHJlbi5sZW5ndGggPT09IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9NYXNvbnJ5VGlsZT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvUmVhY3RNYXNvbnJ5PlxuICAgICAgICA8L01hc29ucnk+XG4gICAgICA8L1BlcmZlY3RTY3JvbGxiYXI+XG4gICAgKTtcbiAgfVxufVxuXG5Db250ZW50TWFzb25yeS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY29sdW1uQ291bnRFeHRyYUxhcmdlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGNvbHVtbkNvdW50TGFyZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY29sdW1uQ291bnRNZWRpdW06IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY29sdW1uQ291bnRTbWFsbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB0b3BPZmZzZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbn07XG5Db250ZW50TWFzb25yeS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGNvbHVtbkNvdW50RXh0cmFMYXJnZTogNCxcbiAgY29sdW1uQ291bnRMYXJnZTogMyxcbiAgY29sdW1uQ291bnRNZWRpdW06IDIsXG4gIGNvbHVtbkNvdW50U21hbGw6IDEsXG4gIHRvcE9mZnNldDogNDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50TWFzb25yeTtcbiJdfQ==