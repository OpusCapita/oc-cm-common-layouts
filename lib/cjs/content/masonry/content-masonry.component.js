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


var getColumnWidth = function getColumnWidth(columnCount, theme) {
  return 'calc((100% / ' + columnCount + ') - ' + theme.gutterWidth + ')';
};
var getTopOffset = function getTopOffset(offset) {
  return typeof offset === 'string' ? offset : offset + 'px';
};
var calculateHeight = function calculateHeight(props) {
  return 'calc(100vh - ' + getTopOffset(props.topOffset) + ' - (3 * ' + props.theme.gutterWidth + '))';
};

var Masonry = _styledComponents2.default.div(_templateObject, function (props) {
  return calculateHeight(props);
}, function (props) {
  return props.theme.gutterWidth;
}, function (props) {
  return props.theme.gutterWidth;
});

var MasonryTile = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.gutterWidth;
}, function (props) {
  return getColumnWidth(props.sm, props.theme);
}, function (props) {
  return getColumnWidth(props.lg, props.theme);
}, function (props) {
  return getColumnWidth(props.md, props.theme);
}, function (props) {
  return getColumnWidth(props.xl, props.theme);
}, function (props) {
  return getColumnWidth(props.lg, props.theme);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L21hc29ucnkvY29udGVudC1tYXNvbnJ5LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiZ2V0Q29sdW1uV2lkdGgiLCJjb2x1bW5Db3VudCIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJnZXRUb3BPZmZzZXQiLCJvZmZzZXQiLCJjYWxjdWxhdGVIZWlnaHQiLCJwcm9wcyIsInRvcE9mZnNldCIsIk1hc29ucnkiLCJzdHlsZWQiLCJkaXYiLCJNYXNvbnJ5VGlsZSIsInNtIiwibGciLCJtZCIsInhsIiwiQ29udGVudE1hc29ucnkiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNvbHVtbkNvdW50RXh0cmFMYXJnZSIsImNvbHVtbkNvdW50TGFyZ2UiLCJjb2x1bW5Db3VudE1lZGl1bSIsImNvbHVtbkNvdW50U21hbGwiLCJjbGFzc05hbWUiLCJpZCIsImNsYXNzUHJlZml4IiwibWFzb25yeSIsIlJlYWN0IiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImkiLCJjbG9uZUVsZW1lbnQiLCJnZXRDaGlsZFByb3BzIiwiUHVyZUNvbXBvbmVudCIsImNoaWxkSW5kZXgiLCJwYXJlbnQiLCJpc0xhc3RJdGVtIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwidHlwZSIsImRpc3BsYXlOYW1lIiwib25FeHBhbmQiLCJleHRlbmRGbiIsImFyZ3MiLCJ1cGRhdGVMYXlvdXQiLCJvcmlnaW5hbENiIiwiYXBwbHkiLCJpbml0aWFsaXplTWFzb25yeSIsImZvcmNlVXBkYXRlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7Ozs7Ozs7OztBQURBOzs7QUFHQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLFdBQUQsRUFBY0MsS0FBZDtBQUFBLDJCQUF3Q0QsV0FBeEMsWUFBMERDLE1BQU1DLFdBQWhFO0FBQUEsQ0FBdkI7QUFDQSxJ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LE1BREQ7QUFFWkMsa0JBQVlGLGVBQWVqQixTQUFTb0IsTUFBVCxHQUFrQixDQUFqQyxJQUFzQ3BCLFNBQVNvQixNQUFULEtBQW9CQztBQUYxRCxLQUFkO0FBSUE7QUFDQSxRQUFJVCxTQUFTQSxNQUFNVSxJQUFOLENBQVdDLFdBQVgsS0FBMkIsYUFBeEMsRUFBdUQ7QUFDckRuQyxZQUFNb0MsUUFBTixHQUFpQixPQUFLQyxRQUFMLENBQWNiLE1BQU14QixLQUFOLENBQVlvQyxRQUExQixDQUFqQjtBQUNEO0FBQ0QsV0FBT3BDLEtBQVA7QUFDRCxHOztPQU9EcUMsUSxHQUFXO0FBQUEsV0FBYyxZQUFhO0FBQUEseUNBQVRDLElBQVM7QUFBVEEsWUFBUztBQUFBOztBQUNwQyxhQUFLQyxZQUFMO0FBQ0EsYUFBT0MsV0FBV0MsS0FBWCxDQUFpQixNQUFqQixFQUF1QkgsSUFBdkIsQ0FBUDtBQUNELEtBSFU7QUFBQSxHOztPQUtYQyxZLEdBQWUsWUFBTTtBQUNuQixXQUFLbkIsT0FBTCxDQUFhc0IsaUJBQWI7QUFDQTtBQUNBLFdBQUtDLFdBQUw7QUFDRCxHOzs7QUE4Q0hqQyxlQUFla0MsWUFBZixHQUE4QjtBQUM1QmhDLFlBQVVxQixTQURrQjtBQUU1QnBCLHlCQUF1QixDQUZLO0FBRzVCQyxvQkFBa0IsQ0FIVTtBQUk1QkMscUJBQW1CLENBSlM7QUFLNUJDLG9CQUFrQixDQUxVO0FBTTVCZixhQUFXLEVBTmlCO0FBTzVCaUIsTUFBSSxFQVB3QjtBQVE1QkQsYUFBVztBQVJpQixDQUE5Qjs7a0JBV2VQLGMiLCJmaWxlIjoiY29udGVudC1tYXNvbnJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3RNYXNvbnJ5IGZyb20gJ3JlYWN0LW1hc29ucnktY29tcG9uZW50JztcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4IH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgZ2V0Q29sdW1uV2lkdGggPSAoY29sdW1uQ291bnQsIHRoZW1lKSA9PiBgY2FsYygoMTAwJSAvICR7Y29sdW1uQ291bnR9KSAtICR7dGhlbWUuZ3V0dGVyV2lkdGh9KWA7XG5jb25zdCBnZXRUb3BPZmZzZXQgPSBvZmZzZXQgPT4gKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnID8gb2Zmc2V0IDogYCR7b2Zmc2V0fXB4YCk7XG5jb25zdCBjYWxjdWxhdGVIZWlnaHQgPSBwcm9wcyA9PiBgY2FsYygxMDB2aCAtICR7Z2V0VG9wT2Zmc2V0KHByb3BzLnRvcE9mZnNldCl9IC0gKDMgKiAke3Byb3BzLnRoZW1lLmd1dHRlcldpZHRofSkpYDtcblxuY29uc3QgTWFzb25yeSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOjEwMHZ3OyAgICBcbiAgaGVpZ2h0OiAke3Byb3BzID0+IGNhbGN1bGF0ZUhlaWdodChwcm9wcyl9O1xuICBwYWRkaW5nLXJpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmd1dHRlcldpZHRofTtcbiAgcGFkZGluZy10b3A6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGh9O1xuYDtcblxuY29uc3QgTWFzb25yeVRpbGUgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aH07XG4gIC8qIFNtYWxsIG9ubHkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkuOTM3NWVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLnNtLCBwcm9wcy50aGVtZSl9OyB9XG4gIFxuICAvKiBNZWRpdW0gYW5kIHVwICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pICB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLmxnLCBwcm9wcy50aGVtZSl9OyB9XG4gIFxuICAvKiBNZWRpdW0gb25seSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSBhbmQgKG1heC13aWR0aDogNjMuOTM3NWVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLm1kLCBwcm9wcy50aGVtZSl9OyB9XG4gIFxuICAvKiBMYXJnZSBhbmQgdXAgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy54bCwgcHJvcHMudGhlbWUpfTsgfVxuICBcbiAgLyogTGFyZ2Ugb25seSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSBhbmQgKG1heC13aWR0aDogNzQuOTM3NWVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLmxnLCBwcm9wcy50aGVtZSl9OyB9XG5gO1xuXG5jbGFzcyBDb250ZW50TWFzb25yeSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBnZXRDaGlsZFByb3BzID0gKGNoaWxkSW5kZXgpID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5bY2hpbGRJbmRleF07XG4gICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgaXNMYXN0SXRlbTogY2hpbGRJbmRleCA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSB8fCBjaGlsZHJlbi5sZW5ndGggPT09IHVuZGVmaW5lZCxcbiAgICB9O1xuICAgIC8qICBJZiBjaGlsZCBpcyBhIENhcmQsIHdlIHdpbGwgZXh0ZW5kIGl0cyBvbkV4cGFuZCBjYWxsYmFjayAgKi9cbiAgICBpZiAoY2hpbGQgJiYgY2hpbGQudHlwZS5kaXNwbGF5TmFtZSA9PT0gJ0NvbnRlbnRDYXJkJykge1xuICAgICAgcHJvcHMub25FeHBhbmQgPSB0aGlzLmV4dGVuZEZuKGNoaWxkLnByb3BzLm9uRXhwYW5kKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFeHRlbmRzIGFuIG9yaWdpbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIGJ5IHVwZGF0aW5nIHRoZSBsYXlvdXQgZmlyc3RcbiAgICogQHBhcmFtIG9yaWdpbmFsQ2JcbiAgICogQHJldHVybnMge2Z1bmN0aW9uKC4uLlsqXT0pOiAqfVxuICAgKi9cbiAgZXh0ZW5kRm4gPSBvcmlnaW5hbENiID0+ICguLi5hcmdzKSA9PiB7XG4gICAgdGhpcy51cGRhdGVMYXlvdXQoKTtcbiAgICByZXR1cm4gb3JpZ2luYWxDYi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcblxuICB1cGRhdGVMYXlvdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5tYXNvbnJ5LmluaXRpYWxpemVNYXNvbnJ5KCk7XG4gICAgLy8gSSB0aGluayB1c2luZyBmb3JjZVVwZGF0ZSBpcyBqdXN0aWZpZWQgaGVyZVxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sIGNvbHVtbkNvdW50RXh0cmFMYXJnZSwgY29sdW1uQ291bnRMYXJnZSwgY29sdW1uQ291bnRNZWRpdW0sIGNvbHVtbkNvdW50U21hbGwsXG4gICAgICB0b3BPZmZzZXQsIGNsYXNzTmFtZSwgaWQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBlcmZlY3RTY3JvbGxiYXI+XG4gICAgICAgIDxNYXNvbnJ5XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fbWFzb25yeV93cmFwcGVyICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgICAgdG9wT2Zmc2V0PXt0b3BPZmZzZXR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICA+XG4gICAgICAgICAgPFJlYWN0TWFzb25yeSByZWY9eyhtYXNvbnJ5KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1hc29ucnkgPSBtYXNvbnJ5O1xuICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxNYXNvbnJ5VGlsZVxuICAgICAgICAgICAgICAgIHhsPXtjb2x1bW5Db3VudEV4dHJhTGFyZ2V9XG4gICAgICAgICAgICAgICAgbGc9e2NvbHVtbkNvdW50TGFyZ2V9XG4gICAgICAgICAgICAgICAgbWQ9e2NvbHVtbkNvdW50TWVkaXVtfVxuICAgICAgICAgICAgICAgIHNtPXtjb2x1bW5Db3VudFNtYWxsfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgdGhpcy5nZXRDaGlsZFByb3BzKGkpKX1cbiAgICAgICAgICAgICAgPC9NYXNvbnJ5VGlsZT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvUmVhY3RNYXNvbnJ5PlxuICAgICAgICA8L01hc29ucnk+XG4gICAgICA8L1BlcmZlY3RTY3JvbGxiYXI+XG4gICAgKTtcbiAgfVxufVxuXG5Db250ZW50TWFzb25yeS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY29sdW1uQ291bnRFeHRyYUxhcmdlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGNvbHVtbkNvdW50TGFyZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY29sdW1uQ291bnRNZWRpdW06IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY29sdW1uQ291bnRTbWFsbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB0b3BPZmZzZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5Db250ZW50TWFzb25yeS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGNvbHVtbkNvdW50RXh0cmFMYXJnZTogNCxcbiAgY29sdW1uQ291bnRMYXJnZTogMyxcbiAgY29sdW1uQ291bnRNZWRpdW06IDIsXG4gIGNvbHVtbkNvdW50U21hbGw6IDEsXG4gIHRvcE9mZnNldDogNDAsXG4gIGlkOiAnJyxcbiAgY2xhc3NOYW1lOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRNYXNvbnJ5O1xuIl19