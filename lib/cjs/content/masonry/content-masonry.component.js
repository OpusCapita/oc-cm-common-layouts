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
        topOffset = _props.topOffset,
        className = _props.className,
        id = _props.id;

    return _react2.default.createElement(
      _reactPerfectScrollbar2.default,
      null,
      _react2.default.createElement(
        Masonry,
        {
          className: _constants.classPrefix + '_masonry_wrapper ' + className,
          topOffset: topOffset,
          id: id
        },
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
  topOffset: 40,
  id: '',
  className: ''
};

exports.default = ContentMasonry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L21hc29ucnkvY29udGVudC1tYXNvbnJ5LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiZ2V0Q29sdW1uV2lkdGgiLCJjb2x1bW5Db3VudCIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJnZXRUb3BPZmZzZXQiLCJvZmZzZXQiLCJjYWxjdWxhdGVIZWlnaHQiLCJwcm9wcyIsInRvcE9mZnNldCIsIk1hc29ucnkiLCJzdHlsZWQiLCJkaXYiLCJNYXNvbnJ5VGlsZSIsInNtIiwibGciLCJtZCIsInhsIiwiQ29udGVudE1hc29ucnkiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNvbHVtbkNvdW50RXh0cmFMYXJnZSIsImNvbHVtbkNvdW50TGFyZ2UiLCJjb2x1bW5Db3VudE1lZGl1bSIsImNvbHVtbkNvdW50U21hbGwiLCJjbGFzc05hbWUiLCJpZCIsImNsYXNzUHJlZml4IiwiUmVhY3QiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaSIsImNsb25lRWxlbWVudCIsInBhcmVudCIsImlzTGFzdEl0ZW0iLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUFEQTs7O0FBR0EsSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLDJCQUErQkMsV0FBL0IsWUFBaURDLGlCQUFNQyxXQUF2RDtBQUFBLENBQXZCO0FBQ0EsSUFBTUMsZUFBZSxTQUFmQSxZQUFlO0FBQUEsU0FBVyxPQUFPQyxNQUFQLEtBQWtCLFFBQWxCLEdBQTZCQSxNQUE3QixHQUF5Q0EsTUFBekMsT0FBWDtBQUFBLENBQXJCO0FBQ0EsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLDJCQUF5QkYsYUFBYUcsTUFBTUMsU0FBbkIsQ0FBekIsZ0JBQWlFTixpQkFBTUMsV0FBdkU7QUFBQSxDQUF4Qjs7QUFFQSxJQUFNTSxVQUFVQywyQkFBT0MsR0FBakIsa0JBRU07QUFBQSxTQUFTTCxnQkFBZ0JDLEtBQWhCLENBQVQ7QUFBQSxDQUZOLEVBR2FMLGlCQUFNQyxXQUhuQixFQUlXRCxpQkFBTUMsV0FKakIsQ0FBTjs7QUFPQSxJQUFNUyxjQUFjRiwyQkFBT0MsR0FBckIsbUJBQ1dULGlCQUFNQyxXQURqQixFQUdnRDtBQUFBLFNBQVNILGVBQWVPLE1BQU1NLEVBQXJCLENBQVQ7QUFBQSxDQUhoRCxFQU00QztBQUFBLFNBQVNiLGVBQWVPLE1BQU1PLEVBQXJCLENBQVQ7QUFBQSxDQU41QyxFQVNzRTtBQUFBLFNBQVNkLGVBQWVPLE1BQU1RLEVBQXJCLENBQVQ7QUFBQSxDQVR0RSxFQVkyQztBQUFBLFNBQVNmLGVBQWVPLE1BQU1TLEVBQXJCLENBQVQ7QUFBQSxDQVozQyxFQWVzRTtBQUFBLFNBQVNoQixlQUFlTyxNQUFNTyxFQUFyQixDQUFUO0FBQUEsQ0FmdEUsQ0FBTjs7SUFrQk1HLGM7Ozs7Ozs7OzsyQkFDSkMsTSxxQkFBUztBQUFBOztBQUFBLGlCQU1ILEtBQUtYLEtBTkY7QUFBQSxRQUVMWSxRQUZLLFVBRUxBLFFBRks7QUFBQSxRQUVLQyxxQkFGTCxVQUVLQSxxQkFGTDtBQUFBLFFBRTRCQyxnQkFGNUIsVUFFNEJBLGdCQUY1QjtBQUFBLFFBRThDQyxpQkFGOUMsVUFFOENBLGlCQUY5QztBQUFBLFFBRWlFQyxnQkFGakUsVUFFaUVBLGdCQUZqRTtBQUFBLFFBR0xmLFNBSEssVUFHTEEsU0FISztBQUFBLFFBSUxnQixTQUpLLFVBSUxBLFNBSks7QUFBQSxRQUtMQyxFQUxLLFVBS0xBLEVBTEs7O0FBT1AsV0FDRTtBQUFDLHFDQUFEO0FBQUE7QUFDRTtBQUFDLGVBQUQ7QUFBQTtBQUNFLHFCQUFjQyxzQkFBZCx5QkFBNkNGLFNBRC9DO0FBRUUscUJBQVdoQixTQUZiO0FBR0UsY0FBSWlCO0FBSE47QUFLRTtBQUFDLHlDQUFEO0FBQUE7QUFDR0UsMEJBQU1DLFFBQU4sQ0FBZUMsR0FBZixDQUFtQlYsUUFBbkIsRUFBNkIsVUFBQ1csS0FBRCxFQUFRQyxDQUFSO0FBQUEsbUJBQzVCO0FBQUMseUJBQUQ7QUFBQTtBQUNFLG9CQUFJWCxxQkFETjtBQUVFLG9CQUFJQyxnQkFGTjtBQUdFLG9CQUFJQyxpQkFITjtBQUlFLG9CQUFJQztBQUpOO0FBTUdJLDhCQUFNSyxZQUFOLENBQW1CRixLQUFuQixFQUEwQjtBQUN6Qkcsd0JBQVEsT0FBS0EsTUFEWTtBQUV6QkMsNEJBQVlILE1BQU1aLFNBQVNnQixNQUFULEdBQWtCLENBQXhCLElBQTZCaEIsU0FBU2dCLE1BQVQsS0FBb0JDO0FBRnBDLGVBQTFCO0FBTkgsYUFENEI7QUFBQSxXQUE3QjtBQURIO0FBTEY7QUFERixLQURGO0FBeUJELEc7OztFQWpDMEJULGdCQUFNVSxhOztBQThDbkNwQixlQUFlcUIsWUFBZixHQUE4QjtBQUM1Qm5CLFlBQVVpQixTQURrQjtBQUU1QmhCLHlCQUF1QixDQUZLO0FBRzVCQyxvQkFBa0IsQ0FIVTtBQUk1QkMscUJBQW1CLENBSlM7QUFLNUJDLG9CQUFrQixDQUxVO0FBTTVCZixhQUFXLEVBTmlCO0FBTzVCaUIsTUFBSSxFQVB3QjtBQVE1QkQsYUFBVztBQVJpQixDQUE5Qjs7a0JBV2VQLGMiLCJmaWxlIjoiY29udGVudC1tYXNvbnJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUmVhY3RNYXNvbnJ5IGZyb20gJ3JlYWN0LW1hc29ucnktY29tcG9uZW50JztcclxuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xyXG5cclxuLy8gQXBwIGltcG9ydHNcclxuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IGdldENvbHVtbldpZHRoID0gY29sdW1uQ291bnQgPT4gYGNhbGMoKDEwMCUgLyAke2NvbHVtbkNvdW50fSkgLSAke3RoZW1lLmd1dHRlcldpZHRofSlgO1xyXG5jb25zdCBnZXRUb3BPZmZzZXQgPSBvZmZzZXQgPT4gKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnID8gb2Zmc2V0IDogYCR7b2Zmc2V0fXB4YCk7XHJcbmNvbnN0IGNhbGN1bGF0ZUhlaWdodCA9IHByb3BzID0+IGBjYWxjKDEwMHZoIC0gJHtnZXRUb3BPZmZzZXQocHJvcHMudG9wT2Zmc2V0KX0gLSAoMyAqICR7dGhlbWUuZ3V0dGVyV2lkdGh9KSlgO1xyXG5cclxuY29uc3QgTWFzb25yeSA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6MTAwdnc7ICAgIFxyXG4gIGhlaWdodDogJHtwcm9wcyA9PiBjYWxjdWxhdGVIZWlnaHQocHJvcHMpfTtcclxuICBwYWRkaW5nLXJpZ2h0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcclxuICBwYWRkaW5nLXRvcDogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XHJcbmA7XHJcblxyXG5jb25zdCBNYXNvbnJ5VGlsZSA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xyXG4gIC8qIFNtYWxsIG9ubHkgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOS45Mzc1ZW0pIHsgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0Q29sdW1uV2lkdGgocHJvcHMuc20pfTsgfVxyXG4gIFxyXG4gIC8qIE1lZGl1bSBhbmQgdXAgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSAgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5sZyl9OyB9XHJcbiAgXHJcbiAgLyogTWVkaXVtIG9ubHkgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSBhbmQgKG1heC13aWR0aDogNjMuOTM3NWVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLm1kKX07IH1cclxuICBcclxuICAvKiBMYXJnZSBhbmQgdXAgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLnhsKX07IH1cclxuICBcclxuICAvKiBMYXJnZSBvbmx5ICovXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkgYW5kIChtYXgtd2lkdGg6IDc0LjkzNzVlbSkgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5sZyl9OyB9XHJcbmA7XHJcblxyXG5jbGFzcyBDb250ZW50TWFzb25yeSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgY2hpbGRyZW4sIGNvbHVtbkNvdW50RXh0cmFMYXJnZSwgY29sdW1uQ291bnRMYXJnZSwgY29sdW1uQ291bnRNZWRpdW0sIGNvbHVtbkNvdW50U21hbGwsXHJcbiAgICAgIHRvcE9mZnNldCxcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICBpZCxcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFBlcmZlY3RTY3JvbGxiYXI+XHJcbiAgICAgICAgPE1hc29ucnlcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X21hc29ucnlfd3JhcHBlciAke2NsYXNzTmFtZX1gfVxyXG4gICAgICAgICAgdG9wT2Zmc2V0PXt0b3BPZmZzZXR9XHJcbiAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFJlYWN0TWFzb25yeT5cclxuICAgICAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1hc29ucnlUaWxlXHJcbiAgICAgICAgICAgICAgICB4bD17Y29sdW1uQ291bnRFeHRyYUxhcmdlfVxyXG4gICAgICAgICAgICAgICAgbGc9e2NvbHVtbkNvdW50TGFyZ2V9XHJcbiAgICAgICAgICAgICAgICBtZD17Y29sdW1uQ291bnRNZWRpdW19XHJcbiAgICAgICAgICAgICAgICBzbT17Y29sdW1uQ291bnRTbWFsbH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XHJcbiAgICAgICAgICAgICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXHJcbiAgICAgICAgICAgICAgICAgIGlzTGFzdEl0ZW06IGkgPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEgfHwgY2hpbGRyZW4ubGVuZ3RoID09PSB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L01hc29ucnlUaWxlPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvUmVhY3RNYXNvbnJ5PlxyXG4gICAgICAgIDwvTWFzb25yeT5cclxuICAgICAgPC9QZXJmZWN0U2Nyb2xsYmFyPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkNvbnRlbnRNYXNvbnJ5LnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgY29sdW1uQ291bnRFeHRyYUxhcmdlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgY29sdW1uQ291bnRMYXJnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gIGNvbHVtbkNvdW50TWVkaXVtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgY29sdW1uQ291bnRTbWFsbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gIHRvcE9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuQ29udGVudE1hc29ucnkuZGVmYXVsdFByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXHJcbiAgY29sdW1uQ291bnRFeHRyYUxhcmdlOiA0LFxyXG4gIGNvbHVtbkNvdW50TGFyZ2U6IDMsXHJcbiAgY29sdW1uQ291bnRNZWRpdW06IDIsXHJcbiAgY29sdW1uQ291bnRTbWFsbDogMSxcclxuICB0b3BPZmZzZXQ6IDQwLFxyXG4gIGlkOiAnJyxcclxuICBjbGFzc05hbWU6ICcnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudE1hc29ucnk7XHJcbiJdfQ==