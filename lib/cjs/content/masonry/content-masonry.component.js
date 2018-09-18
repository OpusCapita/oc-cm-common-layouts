'use strict';

exports.__esModule = true;

var _class, _temp2, _initialiseProps;

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

var ContentMasonry = (_temp2 = _class = function (_React$PureComponent) {
  _inherits(ContentMasonry, _React$PureComponent);

  function ContentMasonry() {
    var _temp, _this, _ret;

    _classCallCheck(this, ContentMasonry);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  /**
   * Extends an original callback function by updating the layout first
   * @param originalCb
   * @returns {function(...[*]=): *}
   */


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
          { ref: function ref(masonry) {
              _this2.masonry = masonry;
            }
          },
          _react2.default.Children.map(children, function (child, i) {
            return _react2.default.createElement(
              MasonryTile,
              {
                xl: columnCountExtraLarge,
                lg: columnCountLarge,
                md: columnCountMedium,
                sm: columnCountSmall
              },
              _react2.default.cloneElement(child, _this2.getChildProps(i))
            );
          })
        )
      )
    );
  };

  return ContentMasonry;
}(_react2.default.PureComponent), _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.getChildProps = function (childIndex) {
    var children = _this3.props.children;

    var child = children[childIndex];
    var props = {
      parent: _this3.parent,
      isLastItem: childIndex === children.length - 1 || children.length === undefined
    };
    /*  If child is a Card, we will extend its onExpand callback  */
    if (child && child.type.displayName === 'ContentCard') {
      props.onExpand = _this3.extendFn(child.props.onExpand);
    }
    return props;
  };

  this.extendFn = function (originalCb) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _this3.updateLayout();
      return originalCb.apply(_this3, args);
    };
  };

  this.updateLayout = function () {
    _this3.masonry.initializeMasonry();
    // I think using forceUpdate is justified here
    _this3.forceUpdate();
  };
}, _temp2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L21hc29ucnkvY29udGVudC1tYXNvbnJ5LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiZ2V0Q29sdW1uV2lkdGgiLCJjb2x1bW5Db3VudCIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJnZXRUb3BPZmZzZXQiLCJvZmZzZXQiLCJjYWxjdWxhdGVIZWlnaHQiLCJwcm9wcyIsInRvcE9mZnNldCIsIk1hc29ucnkiLCJzdHlsZWQiLCJkaXYiLCJNYXNvbnJ5VGlsZSIsInNtIiwibGciLCJtZCIsInhsIiwiQ29udGVudE1hc29ucnkiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNvbHVtbkNvdW50RXh0cmFMYXJnZSIsImNvbHVtbkNvdW50TGFyZ2UiLCJjb2x1bW5Db3VudE1lZGl1bSIsImNvbHVtbkNvdW50U21hbGwiLCJjbGFzc05hbWUiLCJpZCIsImNsYXNzUHJlZml4IiwibWFzb25yeSIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImkiLCJjbG9uZUVsZW1lbnQiLCJnZXRDaGlsZFByb3BzIiwiUHVyZUNvbXBvbmVudCIsImNoaWxkSW5kZXgiLCJwYXJlbnQiLCJpc0xhc3RJdGVtIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwidHlwZSIsImRpc3BsYXlOYW1lIiwib25FeHBhbmQiLCJleHRlbmRGbiIsImFyZ3MiLCJ1cGRhdGVMYXlvdXQiLCJvcmlnaW5hbENiIiwiYXBwbHkiLCJpbml0aWFsaXplTWFzb25yeSIsImZvcmNlVXBkYXRlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7Ozs7Ozs7OztBQURBOzs7QUFHQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCO0FBQUEsMkJBQStCQyxXQUEvQixZQUFpREMsaUJBQU1DLFdBQXZEO0FBQUEsQ0FBdkI7QUFDQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7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MUIsQ0FBakI7QUFDRDtBQUNELFdBQU9wQyxLQUFQO0FBQ0QsRzs7T0FPRHFDLFEsR0FBVztBQUFBLFdBQWMsWUFBYTtBQUFBLHlDQUFUQyxJQUFTO0FBQVRBLFlBQVM7QUFBQTs7QUFDcEMsYUFBS0MsWUFBTDtBQUNBLGFBQU9DLFdBQVdDLEtBQVgsQ0FBaUIsTUFBakIsRUFBdUJILElBQXZCLENBQVA7QUFDRCxLQUhVO0FBQUEsRzs7T0FLWEMsWSxHQUFlLFlBQU07QUFDbkIsV0FBS25CLE9BQUwsQ0FBYXNCLGlCQUFiO0FBQ0E7QUFDQSxXQUFLQyxXQUFMO0FBQ0QsRzs7O0FBOENIakMsZUFBZWtDLFlBQWYsR0FBOEI7QUFDNUJoQyxZQUFVcUIsU0FEa0I7QUFFNUJwQix5QkFBdUIsQ0FGSztBQUc1QkMsb0JBQWtCLENBSFU7QUFJNUJDLHFCQUFtQixDQUpTO0FBSzVCQyxvQkFBa0IsQ0FMVTtBQU01QmYsYUFBVyxFQU5pQjtBQU81QmlCLE1BQUksRUFQd0I7QUFRNUJELGFBQVc7QUFSaUIsQ0FBOUI7O2tCQVdlUCxjIiwiZmlsZSI6ImNvbnRlbnQtbWFzb25yeS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0TWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCc7XG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBnZXRDb2x1bW5XaWR0aCA9IGNvbHVtbkNvdW50ID0+IGBjYWxjKCgxMDAlIC8gJHtjb2x1bW5Db3VudH0pIC0gJHt0aGVtZS5ndXR0ZXJXaWR0aH0pYDtcbmNvbnN0IGdldFRvcE9mZnNldCA9IG9mZnNldCA9PiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycgPyBvZmZzZXQgOiBgJHtvZmZzZXR9cHhgKTtcbmNvbnN0IGNhbGN1bGF0ZUhlaWdodCA9IHByb3BzID0+IGBjYWxjKDEwMHZoIC0gJHtnZXRUb3BPZmZzZXQocHJvcHMudG9wT2Zmc2V0KX0gLSAoMyAqICR7dGhlbWUuZ3V0dGVyV2lkdGh9KSlgO1xuXG5jb25zdCBNYXNvbnJ5ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6MTAwdnc7ICAgIFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gY2FsY3VsYXRlSGVpZ2h0KHByb3BzKX07XG4gIHBhZGRpbmctcmlnaHQ6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBwYWRkaW5nLXRvcDogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG5gO1xuXG5jb25zdCBNYXNvbnJ5VGlsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgLyogU21hbGwgb25seSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOS45Mzc1ZW0pIHsgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0Q29sdW1uV2lkdGgocHJvcHMuc20pfTsgfVxuICBcbiAgLyogTWVkaXVtIGFuZCB1cCAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSAgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5sZyl9OyB9XG4gIFxuICAvKiBNZWRpdW0gb25seSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSBhbmQgKG1heC13aWR0aDogNjMuOTM3NWVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLm1kKX07IH1cbiAgXG4gIC8qIExhcmdlIGFuZCB1cCAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLnhsKX07IH1cbiAgXG4gIC8qIExhcmdlIG9ubHkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkgYW5kIChtYXgtd2lkdGg6IDc0LjkzNzVlbSkgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5sZyl9OyB9XG5gO1xuXG5jbGFzcyBDb250ZW50TWFzb25yeSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBnZXRDaGlsZFByb3BzID0gKGNoaWxkSW5kZXgpID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5bY2hpbGRJbmRleF07XG4gICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgaXNMYXN0SXRlbTogY2hpbGRJbmRleCA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSB8fCBjaGlsZHJlbi5sZW5ndGggPT09IHVuZGVmaW5lZCxcbiAgICB9O1xuICAgIC8qICBJZiBjaGlsZCBpcyBhIENhcmQsIHdlIHdpbGwgZXh0ZW5kIGl0cyBvbkV4cGFuZCBjYWxsYmFjayAgKi9cbiAgICBpZiAoY2hpbGQgJiYgY2hpbGQudHlwZS5kaXNwbGF5TmFtZSA9PT0gJ0NvbnRlbnRDYXJkJykge1xuICAgICAgcHJvcHMub25FeHBhbmQgPSB0aGlzLmV4dGVuZEZuKGNoaWxkLnByb3BzLm9uRXhwYW5kKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFeHRlbmRzIGFuIG9yaWdpbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIGJ5IHVwZGF0aW5nIHRoZSBsYXlvdXQgZmlyc3RcbiAgICogQHBhcmFtIG9yaWdpbmFsQ2JcbiAgICogQHJldHVybnMge2Z1bmN0aW9uKC4uLlsqXT0pOiAqfVxuICAgKi9cbiAgZXh0ZW5kRm4gPSBvcmlnaW5hbENiID0+ICguLi5hcmdzKSA9PiB7XG4gICAgdGhpcy51cGRhdGVMYXlvdXQoKTtcbiAgICByZXR1cm4gb3JpZ2luYWxDYi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcblxuICB1cGRhdGVMYXlvdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5tYXNvbnJ5LmluaXRpYWxpemVNYXNvbnJ5KCk7XG4gICAgLy8gSSB0aGluayB1c2luZyBmb3JjZVVwZGF0ZSBpcyBqdXN0aWZpZWQgaGVyZVxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sIGNvbHVtbkNvdW50RXh0cmFMYXJnZSwgY29sdW1uQ291bnRMYXJnZSwgY29sdW1uQ291bnRNZWRpdW0sIGNvbHVtbkNvdW50U21hbGwsXG4gICAgICB0b3BPZmZzZXQsIGNsYXNzTmFtZSwgaWQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBlcmZlY3RTY3JvbGxiYXI+XG4gICAgICAgIDxNYXNvbnJ5XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fbWFzb25yeV93cmFwcGVyICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgICAgdG9wT2Zmc2V0PXt0b3BPZmZzZXR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICA+XG4gICAgICAgICAgPFJlYWN0TWFzb25yeSByZWY9eyhtYXNvbnJ5KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1hc29ucnkgPSBtYXNvbnJ5O1xuICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxNYXNvbnJ5VGlsZVxuICAgICAgICAgICAgICAgIHhsPXtjb2x1bW5Db3VudEV4dHJhTGFyZ2V9XG4gICAgICAgICAgICAgICAgbGc9e2NvbHVtbkNvdW50TGFyZ2V9XG4gICAgICAgICAgICAgICAgbWQ9e2NvbHVtbkNvdW50TWVkaXVtfVxuICAgICAgICAgICAgICAgIHNtPXtjb2x1bW5Db3VudFNtYWxsfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgdGhpcy5nZXRDaGlsZFByb3BzKGkpKX1cbiAgICAgICAgICAgICAgPC9NYXNvbnJ5VGlsZT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvUmVhY3RNYXNvbnJ5PlxuICAgICAgICA8L01hc29ucnk+XG4gICAgICA8L1BlcmZlY3RTY3JvbGxiYXI+XG4gICAgKTtcbiAgfVxufVxuXG5Db250ZW50TWFzb25yeS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY29sdW1uQ291bnRFeHRyYUxhcmdlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGNvbHVtbkNvdW50TGFyZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY29sdW1uQ291bnRNZWRpdW06IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY29sdW1uQ291bnRTbWFsbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB0b3BPZmZzZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5Db250ZW50TWFzb25yeS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGNvbHVtbkNvdW50RXh0cmFMYXJnZTogNCxcbiAgY29sdW1uQ291bnRMYXJnZTogMyxcbiAgY29sdW1uQ291bnRNZWRpdW06IDIsXG4gIGNvbHVtbkNvdW50U21hbGw6IDEsXG4gIHRvcE9mZnNldDogNDAsXG4gIGlkOiAnJyxcbiAgY2xhc3NOYW1lOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRNYXNvbnJ5O1xuIl19