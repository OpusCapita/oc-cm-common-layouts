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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L21hc29ucnkvY29udGVudC1tYXNvbnJ5LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiZ2V0Q29sdW1uV2lkdGgiLCJjb2x1bW5Db3VudCIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJnZXRUb3BPZmZzZXQiLCJvZmZzZXQiLCJjYWxjdWxhdGVIZWlnaHQiLCJwcm9wcyIsInRvcE9mZnNldCIsIk1hc29ucnkiLCJzdHlsZWQiLCJkaXYiLCJNYXNvbnJ5VGlsZSIsInNtIiwibGciLCJtZCIsInhsIiwiQ29udGVudE1hc29ucnkiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNvbHVtbkNvdW50RXh0cmFMYXJnZSIsImNvbHVtbkNvdW50TGFyZ2UiLCJjb2x1bW5Db3VudE1lZGl1bSIsImNvbHVtbkNvdW50U21hbGwiLCJjbGFzc05hbWUiLCJpZCIsImNsYXNzUHJlZml4IiwiUmVhY3QiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaSIsImNsb25lRWxlbWVudCIsInBhcmVudCIsImlzTGFzdEl0ZW0iLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUFEQTs7O0FBR0EsSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLDJCQUErQkMsV0FBL0IsWUFBaURDLGlCQUFNQyxXQUF2RDtBQUFBLENBQXZCO0FBQ0EsSUFBTUMsZUFBZSxTQUFmQSxZQUFlO0FBQUEsU0FBVyxPQUFPQyxNQUFQLEtBQWtCLFFBQWxCLEdBQTZCQSxNQUE3QixHQUF5Q0EsTUFBekMsT0FBWDtBQUFBLENBQXJCO0FBQ0EsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLDJCQUF5QkYsYUFBYUcsTUFBTUMsU0FBbkIsQ0FBekIsZ0JBQWlFTixpQkFBTUMsV0FBdkU7QUFBQSxDQUF4Qjs7QUFFQSxJQUFNTSxVQUFVQywyQkFBT0MsR0FBakIsa0JBRU07QUFBQSxTQUFTTCxnQkFBZ0JDLEtBQWhCLENBQVQ7QUFBQSxDQUZOLEVBR2FMLGlCQUFNQyxXQUhuQixFQUlXRCxpQkFBTUMsV0FKakIsQ0FBTjs7QUFPQSxJQUFNUyxjQUFjRiwyQkFBT0MsR0FBckIsbUJBQ1dULGlCQUFNQyxXQURqQixFQUdnRDtBQUFBLFNBQVNILGVBQWVPLE1BQU1NLEVBQXJCLENBQVQ7QUFBQSxDQUhoRCxFQU00QztBQUFBLFNBQVNiLGVBQWVPLE1BQU1PLEVBQXJCLENBQVQ7QUFBQSxDQU41QyxFQVNzRTtBQUFBLFNBQVNkLGVBQWVPLE1BQU1RLEVBQXJCLENBQVQ7QUFBQSxDQVR0RSxFQVkyQztBQUFBLFNBQVNmLGVBQWVPLE1BQU1TLEVBQXJCLENBQVQ7QUFBQSxDQVozQyxFQWVzRTtBQUFBLFNBQVNoQixlQUFlTyxNQUFNTyxFQUFyQixDQUFUO0FBQUEsQ0FmdEUsQ0FBTjs7SUFrQk1HLGM7Ozs7Ozs7OzsyQkFDSkMsTSxxQkFBUztBQUFBOztBQUFBLGlCQU1ILEtBQUtYLEtBTkY7QUFBQSxRQUVMWSxRQUZLLFVBRUxBLFFBRks7QUFBQSxRQUVLQyxxQkFGTCxVQUVLQSxxQkFGTDtBQUFBLFFBRTRCQyxnQkFGNUIsVUFFNEJBLGdCQUY1QjtBQUFBLFFBRThDQyxpQkFGOUMsVUFFOENBLGlCQUY5QztBQUFBLFFBRWlFQyxnQkFGakUsVUFFaUVBLGdCQUZqRTtBQUFBLFFBR0xmLFNBSEssVUFHTEEsU0FISztBQUFBLFFBSUxnQixTQUpLLFVBSUxBLFNBSks7QUFBQSxRQUtMQyxFQUxLLFVBS0xBLEVBTEs7O0FBT1AsV0FDRTtBQUFDLHFDQUFEO0FBQUE7QUFDRTtBQUFDLGVBQUQ7QUFBQTtBQUNFLHFCQUFjQyxzQkFBZCx5QkFBNkNGLFNBRC9DO0FBRUUscUJBQVdoQixTQUZiO0FBR0UsY0FBSWlCO0FBSE47QUFLRTtBQUFDLHlDQUFEO0FBQUE7QUFDR0UsMEJBQU1DLFFBQU4sQ0FBZUMsR0FBZixDQUFtQlYsUUFBbkIsRUFBNkIsVUFBQ1csS0FBRCxFQUFRQyxDQUFSO0FBQUEsbUJBQzVCO0FBQUMseUJBQUQ7QUFBQTtBQUNFLG9CQUFJWCxxQkFETjtBQUVFLG9CQUFJQyxnQkFGTjtBQUdFLG9CQUFJQyxpQkFITjtBQUlFLG9CQUFJQztBQUpOO0FBTUdJLDhCQUFNSyxZQUFOLENBQW1CRixLQUFuQixFQUEwQjtBQUN6Qkcsd0JBQVEsT0FBS0EsTUFEWTtBQUV6QkMsNEJBQVlILE1BQU1aLFNBQVNnQixNQUFULEdBQWtCLENBQXhCLElBQTZCaEIsU0FBU2dCLE1BQVQsS0FBb0JDO0FBRnBDLGVBQTFCO0FBTkgsYUFENEI7QUFBQSxXQUE3QjtBQURIO0FBTEY7QUFERixLQURGO0FBeUJELEc7OztFQWpDMEJULGdCQUFNVSxhOztBQThDbkNwQixlQUFlcUIsWUFBZixHQUE4QjtBQUM1Qm5CLFlBQVVpQixTQURrQjtBQUU1QmhCLHlCQUF1QixDQUZLO0FBRzVCQyxvQkFBa0IsQ0FIVTtBQUk1QkMscUJBQW1CLENBSlM7QUFLNUJDLG9CQUFrQixDQUxVO0FBTTVCZixhQUFXLEVBTmlCO0FBTzVCaUIsTUFBSSxFQVB3QjtBQVE1QkQsYUFBVztBQVJpQixDQUE5Qjs7a0JBV2VQLGMiLCJmaWxlIjoiY29udGVudC1tYXNvbnJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3RNYXNvbnJ5IGZyb20gJ3JlYWN0LW1hc29ucnktY29tcG9uZW50JztcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4LCB0aGVtZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IGdldENvbHVtbldpZHRoID0gY29sdW1uQ291bnQgPT4gYGNhbGMoKDEwMCUgLyAke2NvbHVtbkNvdW50fSkgLSAke3RoZW1lLmd1dHRlcldpZHRofSlgO1xuY29uc3QgZ2V0VG9wT2Zmc2V0ID0gb2Zmc2V0ID0+ICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJyA/IG9mZnNldCA6IGAke29mZnNldH1weGApO1xuY29uc3QgY2FsY3VsYXRlSGVpZ2h0ID0gcHJvcHMgPT4gYGNhbGMoMTAwdmggLSAke2dldFRvcE9mZnNldChwcm9wcy50b3BPZmZzZXQpfSAtICgzICogJHt0aGVtZS5ndXR0ZXJXaWR0aH0pKWA7XG5cbmNvbnN0IE1hc29ucnkgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDoxMDB2dzsgICAgXG4gIGhlaWdodDogJHtwcm9wcyA9PiBjYWxjdWxhdGVIZWlnaHQocHJvcHMpfTtcbiAgcGFkZGluZy1yaWdodDogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG4gIHBhZGRpbmctdG9wOiAke3RoZW1lLmd1dHRlcldpZHRofTtcbmA7XG5cbmNvbnN0IE1hc29ucnlUaWxlID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuICAvKiBTbWFsbCBvbmx5ICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5LjkzNzVlbSkgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5zbSl9OyB9XG4gIFxuICAvKiBNZWRpdW0gYW5kIHVwICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pICB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLmxnKX07IH1cbiAgXG4gIC8qIE1lZGl1bSBvbmx5ICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pIGFuZCAobWF4LXdpZHRoOiA2My45Mzc1ZW0pIHsgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0Q29sdW1uV2lkdGgocHJvcHMubWQpfTsgfVxuICBcbiAgLyogTGFyZ2UgYW5kIHVwICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pIHsgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0Q29sdW1uV2lkdGgocHJvcHMueGwpfTsgfVxuICBcbiAgLyogTGFyZ2Ugb25seSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSBhbmQgKG1heC13aWR0aDogNzQuOTM3NWVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLmxnKX07IH1cbmA7XG5cbmNsYXNzIENvbnRlbnRNYXNvbnJ5IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbiwgY29sdW1uQ291bnRFeHRyYUxhcmdlLCBjb2x1bW5Db3VudExhcmdlLCBjb2x1bW5Db3VudE1lZGl1bSwgY29sdW1uQ291bnRTbWFsbCxcbiAgICAgIHRvcE9mZnNldCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIGlkLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UGVyZmVjdFNjcm9sbGJhcj5cbiAgICAgICAgPE1hc29ucnlcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9tYXNvbnJ5X3dyYXBwZXIgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgICB0b3BPZmZzZXQ9e3RvcE9mZnNldH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgID5cbiAgICAgICAgICA8UmVhY3RNYXNvbnJ5PlxuICAgICAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxNYXNvbnJ5VGlsZVxuICAgICAgICAgICAgICAgIHhsPXtjb2x1bW5Db3VudEV4dHJhTGFyZ2V9XG4gICAgICAgICAgICAgICAgbGc9e2NvbHVtbkNvdW50TGFyZ2V9XG4gICAgICAgICAgICAgICAgbWQ9e2NvbHVtbkNvdW50TWVkaXVtfVxuICAgICAgICAgICAgICAgIHNtPXtjb2x1bW5Db3VudFNtYWxsfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgICAgICAgICAgICAgIGlzTGFzdEl0ZW06IGkgPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEgfHwgY2hpbGRyZW4ubGVuZ3RoID09PSB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvTWFzb25yeVRpbGU+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1JlYWN0TWFzb25yeT5cbiAgICAgICAgPC9NYXNvbnJ5PlxuICAgICAgPC9QZXJmZWN0U2Nyb2xsYmFyPlxuICAgICk7XG4gIH1cbn1cblxuQ29udGVudE1hc29ucnkucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNvbHVtbkNvdW50RXh0cmFMYXJnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjb2x1bW5Db3VudExhcmdlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGNvbHVtbkNvdW50TWVkaXVtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGNvbHVtbkNvdW50U21hbGw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgdG9wT2Zmc2V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuQ29udGVudE1hc29ucnkuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBjb2x1bW5Db3VudEV4dHJhTGFyZ2U6IDQsXG4gIGNvbHVtbkNvdW50TGFyZ2U6IDMsXG4gIGNvbHVtbkNvdW50TWVkaXVtOiAyLFxuICBjb2x1bW5Db3VudFNtYWxsOiAxLFxuICB0b3BPZmZzZXQ6IDQwLFxuICBpZDogJycsXG4gIGNsYXNzTmFtZTogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50TWFzb25yeTtcbiJdfQ==