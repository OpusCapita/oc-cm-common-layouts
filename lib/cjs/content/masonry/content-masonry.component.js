'use strict';

exports.__esModule = true;

var _class, _temp, _initialiseProps;

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

var ContentMasonry = (_temp = _class = function (_React$PureComponent) {
  _inherits(ContentMasonry, _React$PureComponent);

  function ContentMasonry(props) {
    _classCallCheck(this, ContentMasonry);

    /* If child is a Card, its onExpand callback will be stored here */
    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _initialiseProps.call(_this);

    _this.childCallbacks = {};
    return _this;
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

    /*  If child is a Card, we will replace its onExpand callback and store
     the original callback for a later use */
    if (child && child.type.displayName === 'ContentCard') {
      props.onExpand = _this3.updateLayout;
      _this3.childCallbacks[child.props.id] = child.props.onExpand;
    }
    return props;
  };

  this.updateLayout = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this3.masonry.initializeMasonry();
    if (args[0] && typeof _this3.childCallbacks[args[0]] === 'function') _this3.childCallbacks[args[0]](args);
    // I think using forceUpdate is justified here
    _this3.forceUpdate();
  };
}, _temp);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L21hc29ucnkvY29udGVudC1tYXNvbnJ5LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiZ2V0Q29sdW1uV2lkdGgiLCJjb2x1bW5Db3VudCIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJnZXRUb3BPZmZzZXQiLCJvZmZzZXQiLCJjYWxjdWxhdGVIZWlnaHQiLCJwcm9wcyIsInRvcE9mZnNldCIsIk1hc29ucnkiLCJzdHlsZWQiLCJkaXYiLCJNYXNvbnJ5VGlsZSIsInNtIiwibGciLCJtZCIsInhsIiwiQ29udGVudE1hc29ucnkiLCJjaGlsZENhbGxiYWNrcyIsInJlbmRlciIsImNoaWxkcmVuIiwiY29sdW1uQ291bnRFeHRyYUxhcmdlIiwiY29sdW1uQ291bnRMYXJnZSIsImNvbHVtbkNvdW50TWVkaXVtIiwiY29sdW1uQ291bnRTbWFsbCIsImNsYXNzTmFtZSIsImlkIiwiY2xhc3NQcmVmaXgiLCJtYXNvbnJ5IiwiUmVhY3QiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaSIsImNsb25lRWxlbWVudCIsImdldENoaWxkUHJvcHMiLCJQdXJlQ29tcG9uZW50IiwiY2hpbGRJbmRleCIsInBhcmVudCIsImlzTGFzdEl0ZW0iLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ0eXBlIiwiZGlzcGxheU5hbWUiLCJvbkV4cGFuZCIsInVwZGF0ZUxheW91dCIsImFyZ3MiLCJpbml0aWFsaXplTWFzb25yeSIsImZvcmNlVXBkYXRlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7Ozs7Ozs7OztBQURBOzs7QUFHQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCO0FBQUEsMkJBQStCQyxXQUEvQixZQUFpREMsaUJBQU1DLFdBQXZEO0FBQUEsQ0FBdkI7QUFDQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFXLE9BQU9D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MkIsYUFBeEMsRUFBdUQ7QUFDckRwQyxZQUFNcUMsUUFBTixHQUFpQixPQUFLQyxZQUF0QjtBQUNBLGFBQUszQixjQUFMLENBQW9CYyxNQUFNekIsS0FBTixDQUFZbUIsRUFBaEMsSUFBc0NNLE1BQU16QixLQUFOLENBQVlxQyxRQUFsRDtBQUNEO0FBQ0QsV0FBT3JDLEtBQVA7QUFDRCxHOztPQUVEc0MsWSxHQUFlLFlBQWE7QUFBQSxzQ0FBVEMsSUFBUztBQUFUQSxVQUFTO0FBQUE7O0FBQzFCLFdBQUtsQixPQUFMLENBQWFtQixpQkFBYjtBQUNBLFFBQUlELEtBQUssQ0FBTCxLQUFXLE9BQU8sT0FBSzVCLGNBQUwsQ0FBb0I0QixLQUFLLENBQUwsQ0FBcEIsQ0FBUCxLQUF3QyxVQUF2RCxFQUFtRSxPQUFLNUIsY0FBTCxDQUFvQjRCLEtBQUssQ0FBTCxDQUFwQixFQUE2QkEsSUFBN0I7QUFDbkU7QUFDQSxXQUFLRSxXQUFMO0FBQ0QsRzs7O0FBOENIL0IsZUFBZWdDLFlBQWYsR0FBOEI7QUFDNUI3QixZQUFVcUIsU0FEa0I7QUFFNUJwQix5QkFBdUIsQ0FGSztBQUc1QkMsb0JBQWtCLENBSFU7QUFJNUJDLHFCQUFtQixDQUpTO0FBSzVCQyxvQkFBa0IsQ0FMVTtBQU01QmhCLGFBQVcsRUFOaUI7QUFPNUJrQixNQUFJLEVBUHdCO0FBUTVCRCxhQUFXO0FBUmlCLENBQTlCOztrQkFXZVIsYyIsImZpbGUiOiJjb250ZW50LW1hc29ucnkuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdE1hc29ucnkgZnJvbSAncmVhY3QtbWFzb25yeS1jb21wb25lbnQnO1xuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgZ2V0Q29sdW1uV2lkdGggPSBjb2x1bW5Db3VudCA9PiBgY2FsYygoMTAwJSAvICR7Y29sdW1uQ291bnR9KSAtICR7dGhlbWUuZ3V0dGVyV2lkdGh9KWA7XG5jb25zdCBnZXRUb3BPZmZzZXQgPSBvZmZzZXQgPT4gKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnID8gb2Zmc2V0IDogYCR7b2Zmc2V0fXB4YCk7XG5jb25zdCBjYWxjdWxhdGVIZWlnaHQgPSBwcm9wcyA9PiBgY2FsYygxMDB2aCAtICR7Z2V0VG9wT2Zmc2V0KHByb3BzLnRvcE9mZnNldCl9IC0gKDMgKiAke3RoZW1lLmd1dHRlcldpZHRofSkpYDtcblxuY29uc3QgTWFzb25yeSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOjEwMHZ3OyAgICBcbiAgaGVpZ2h0OiAke3Byb3BzID0+IGNhbGN1bGF0ZUhlaWdodChwcm9wcyl9O1xuICBwYWRkaW5nLXJpZ2h0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgcGFkZGluZy10b3A6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuYDtcblxuY29uc3QgTWFzb25yeVRpbGUgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG4gIC8qIFNtYWxsIG9ubHkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkuOTM3NWVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLnNtKX07IH1cbiAgXG4gIC8qIE1lZGl1bSBhbmQgdXAgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkgIHsgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0Q29sdW1uV2lkdGgocHJvcHMubGcpfTsgfVxuICBcbiAgLyogTWVkaXVtIG9ubHkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkgYW5kIChtYXgtd2lkdGg6IDYzLjkzNzVlbSkgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5tZCl9OyB9XG4gIFxuICAvKiBMYXJnZSBhbmQgdXAgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy54bCl9OyB9XG4gIFxuICAvKiBMYXJnZSBvbmx5ICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pIGFuZCAobWF4LXdpZHRoOiA3NC45Mzc1ZW0pIHsgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0Q29sdW1uV2lkdGgocHJvcHMubGcpfTsgfVxuYDtcblxuY2xhc3MgQ29udGVudE1hc29ucnkgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLyogSWYgY2hpbGQgaXMgYSBDYXJkLCBpdHMgb25FeHBhbmQgY2FsbGJhY2sgd2lsbCBiZSBzdG9yZWQgaGVyZSAqL1xuICAgIHRoaXMuY2hpbGRDYWxsYmFja3MgPSB7fTtcbiAgfVxuXG4gIGdldENoaWxkUHJvcHMgPSAoY2hpbGRJbmRleCkgPT4ge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltjaGlsZEluZGV4XTtcbiAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBpc0xhc3RJdGVtOiBjaGlsZEluZGV4ID09PSBjaGlsZHJlbi5sZW5ndGggLSAxIHx8IGNoaWxkcmVuLmxlbmd0aCA9PT0gdW5kZWZpbmVkLFxuICAgIH07XG5cbiAgICAvKiAgSWYgY2hpbGQgaXMgYSBDYXJkLCB3ZSB3aWxsIHJlcGxhY2UgaXRzIG9uRXhwYW5kIGNhbGxiYWNrIGFuZCBzdG9yZVxuICAgICB0aGUgb3JpZ2luYWwgY2FsbGJhY2sgZm9yIGEgbGF0ZXIgdXNlICovXG4gICAgaWYgKGNoaWxkICYmIGNoaWxkLnR5cGUuZGlzcGxheU5hbWUgPT09ICdDb250ZW50Q2FyZCcpIHtcbiAgICAgIHByb3BzLm9uRXhwYW5kID0gdGhpcy51cGRhdGVMYXlvdXQ7XG4gICAgICB0aGlzLmNoaWxkQ2FsbGJhY2tzW2NoaWxkLnByb3BzLmlkXSA9IGNoaWxkLnByb3BzLm9uRXhwYW5kO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcHM7XG4gIH07XG5cbiAgdXBkYXRlTGF5b3V0ID0gKC4uLmFyZ3MpID0+IHtcbiAgICB0aGlzLm1hc29ucnkuaW5pdGlhbGl6ZU1hc29ucnkoKTtcbiAgICBpZiAoYXJnc1swXSAmJiB0eXBlb2YgdGhpcy5jaGlsZENhbGxiYWNrc1thcmdzWzBdXSA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5jaGlsZENhbGxiYWNrc1thcmdzWzBdXShhcmdzKTtcbiAgICAvLyBJIHRoaW5rIHVzaW5nIGZvcmNlVXBkYXRlIGlzIGp1c3RpZmllZCBoZXJlXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbiwgY29sdW1uQ291bnRFeHRyYUxhcmdlLCBjb2x1bW5Db3VudExhcmdlLCBjb2x1bW5Db3VudE1lZGl1bSwgY29sdW1uQ291bnRTbWFsbCxcbiAgICAgIHRvcE9mZnNldCwgY2xhc3NOYW1lLCBpZCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UGVyZmVjdFNjcm9sbGJhcj5cbiAgICAgICAgPE1hc29ucnlcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9tYXNvbnJ5X3dyYXBwZXIgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgICB0b3BPZmZzZXQ9e3RvcE9mZnNldH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgID5cbiAgICAgICAgICA8UmVhY3RNYXNvbnJ5IHJlZj17KG1hc29ucnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWFzb25yeSA9IG1hc29ucnk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IChcbiAgICAgICAgICAgICAgPE1hc29ucnlUaWxlXG4gICAgICAgICAgICAgICAgeGw9e2NvbHVtbkNvdW50RXh0cmFMYXJnZX1cbiAgICAgICAgICAgICAgICBsZz17Y29sdW1uQ291bnRMYXJnZX1cbiAgICAgICAgICAgICAgICBtZD17Y29sdW1uQ291bnRNZWRpdW19XG4gICAgICAgICAgICAgICAgc209e2NvbHVtbkNvdW50U21hbGx9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB0aGlzLmdldENoaWxkUHJvcHMoaSkpfVxuICAgICAgICAgICAgICA8L01hc29ucnlUaWxlPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9SZWFjdE1hc29ucnk+XG4gICAgICAgIDwvTWFzb25yeT5cbiAgICAgIDwvUGVyZmVjdFNjcm9sbGJhcj5cbiAgICApO1xuICB9XG59XG5cbkNvbnRlbnRNYXNvbnJ5LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjb2x1bW5Db3VudEV4dHJhTGFyZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY29sdW1uQ291bnRMYXJnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjb2x1bW5Db3VudE1lZGl1bTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjb2x1bW5Db3VudFNtYWxsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIHRvcE9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbkNvbnRlbnRNYXNvbnJ5LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgY29sdW1uQ291bnRFeHRyYUxhcmdlOiA0LFxuICBjb2x1bW5Db3VudExhcmdlOiAzLFxuICBjb2x1bW5Db3VudE1lZGl1bTogMixcbiAgY29sdW1uQ291bnRTbWFsbDogMSxcbiAgdG9wT2Zmc2V0OiA0MCxcbiAgaWQ6ICcnLFxuICBjbGFzc05hbWU6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudE1hc29ucnk7XG4iXX0=