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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L21hc29ucnkvY29udGVudC1tYXNvbnJ5LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiZ2V0Q29sdW1uV2lkdGgiLCJjb2x1bW5Db3VudCIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJnZXRUb3BPZmZzZXQiLCJvZmZzZXQiLCJjYWxjdWxhdGVIZWlnaHQiLCJwcm9wcyIsInRvcE9mZnNldCIsIk1hc29ucnkiLCJzdHlsZWQiLCJkaXYiLCJNYXNvbnJ5VGlsZSIsInNtIiwibGciLCJtZCIsInhsIiwiQ29udGVudE1hc29ucnkiLCJjaGlsZENhbGxiYWNrcyIsInJlbmRlciIsImNoaWxkcmVuIiwiY29sdW1uQ291bnRFeHRyYUxhcmdlIiwiY29sdW1uQ291bnRMYXJnZSIsImNvbHVtbkNvdW50TWVkaXVtIiwiY29sdW1uQ291bnRTbWFsbCIsImNsYXNzTmFtZSIsImlkIiwiY2xhc3NQcmVmaXgiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpIiwiY2xvbmVFbGVtZW50IiwiZ2V0Q2hpbGRQcm9wcyIsIlB1cmVDb21wb25lbnQiLCJjaGlsZEluZGV4IiwicGFyZW50IiwiaXNMYXN0SXRlbSIsImxlbmd0aCIsInVuZGVmaW5lZCIsInR5cGUiLCJkaXNwbGF5TmFtZSIsIm9uRXhwYW5kIiwidXBkYXRlTGF5b3V0IiwiYXJncyIsIm1hc29ucnkiLCJpbml0aWFsaXplTWFzb25yeSIsImZvcmNlVXBkYXRlIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7Ozs7Ozs7OztBQURBOzs7QUFHQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCO0FBQUEsMkJBQStCQyxXQUEvQixZQUFpREMsaUJBQU1DLFdBQXZEO0FBQUEsQ0FBdkI7QUFDQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFXLE9BQU9D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Y0FBTCxDQUFvQmEsTUFBTXhCLEtBQU4sQ0FBWW1CLEVBQWhDLElBQXNDSyxNQUFNeEIsS0FBTixDQUFZb0MsUUFBbEQ7QUFDRDtBQUNELFdBQU9wQyxLQUFQO0FBQ0QsRzs7T0FFRHFDLFksR0FBZSxZQUFhO0FBQUEsc0NBQVRDLElBQVM7QUFBVEEsVUFBUztBQUFBOztBQUMxQixXQUFLQyxPQUFMLENBQWFDLGlCQUFiO0FBQ0EsUUFBSUYsS0FBSyxDQUFMLEtBQVcsT0FBTyxPQUFLM0IsY0FBTCxDQUFvQjJCLEtBQUssQ0FBTCxDQUFwQixDQUFQLEtBQXdDLFVBQXZELEVBQW1FLE9BQUszQixjQUFMLENBQW9CMkIsS0FBSyxDQUFMLENBQXBCLEVBQTZCQSxJQUE3QjtBQUNuRTtBQUNBLFdBQUtHLFdBQUw7QUFDRCxHOzs7QUEyQ0gvQixlQUFlZ0MsWUFBZixHQUE4QjtBQUM1QjdCLFlBQVVvQixTQURrQjtBQUU1Qm5CLHlCQUF1QixDQUZLO0FBRzVCQyxvQkFBa0IsQ0FIVTtBQUk1QkMscUJBQW1CLENBSlM7QUFLNUJDLG9CQUFrQixDQUxVO0FBTTVCaEIsYUFBVyxFQU5pQjtBQU81QmtCLE1BQUksRUFQd0I7QUFRNUJELGFBQVc7QUFSaUIsQ0FBOUI7O2tCQVdlUixjIiwiZmlsZSI6ImNvbnRlbnQtbWFzb25yeS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0TWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCc7XG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBnZXRDb2x1bW5XaWR0aCA9IGNvbHVtbkNvdW50ID0+IGBjYWxjKCgxMDAlIC8gJHtjb2x1bW5Db3VudH0pIC0gJHt0aGVtZS5ndXR0ZXJXaWR0aH0pYDtcbmNvbnN0IGdldFRvcE9mZnNldCA9IG9mZnNldCA9PiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycgPyBvZmZzZXQgOiBgJHtvZmZzZXR9cHhgKTtcbmNvbnN0IGNhbGN1bGF0ZUhlaWdodCA9IHByb3BzID0+IGBjYWxjKDEwMHZoIC0gJHtnZXRUb3BPZmZzZXQocHJvcHMudG9wT2Zmc2V0KX0gLSAoMyAqICR7dGhlbWUuZ3V0dGVyV2lkdGh9KSlgO1xuXG5jb25zdCBNYXNvbnJ5ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6MTAwdnc7ICAgIFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gY2FsY3VsYXRlSGVpZ2h0KHByb3BzKX07XG4gIHBhZGRpbmctcmlnaHQ6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBwYWRkaW5nLXRvcDogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG5gO1xuXG5jb25zdCBNYXNvbnJ5VGlsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgLyogU21hbGwgb25seSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOS45Mzc1ZW0pIHsgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0Q29sdW1uV2lkdGgocHJvcHMuc20pfTsgfVxuICBcbiAgLyogTWVkaXVtIGFuZCB1cCAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSAgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5sZyl9OyB9XG4gIFxuICAvKiBNZWRpdW0gb25seSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSBhbmQgKG1heC13aWR0aDogNjMuOTM3NWVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLm1kKX07IH1cbiAgXG4gIC8qIExhcmdlIGFuZCB1cCAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLnhsKX07IH1cbiAgXG4gIC8qIExhcmdlIG9ubHkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkgYW5kIChtYXgtd2lkdGg6IDc0LjkzNzVlbSkgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5sZyl9OyB9XG5gO1xuXG5jbGFzcyBDb250ZW50TWFzb25yeSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvKiBJZiBjaGlsZCBpcyBhIENhcmQsIGl0cyBvbkV4cGFuZCBjYWxsYmFjayB3aWxsIGJlIHN0b3JlZCBoZXJlICovXG4gICAgdGhpcy5jaGlsZENhbGxiYWNrcyA9IHt9O1xuICB9XG5cbiAgZ2V0Q2hpbGRQcm9wcyA9IChjaGlsZEluZGV4KSA9PiB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2NoaWxkSW5kZXhdO1xuICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGlzTGFzdEl0ZW06IGNoaWxkSW5kZXggPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEgfHwgY2hpbGRyZW4ubGVuZ3RoID09PSB1bmRlZmluZWQsXG4gICAgfTtcblxuICAgIC8qICBJZiBjaGlsZCBpcyBhIENhcmQsIHdlIHdpbGwgcmVwbGFjZSBpdHMgb25FeHBhbmQgY2FsbGJhY2sgYW5kIHN0b3JlXG4gICAgIHRoZSBvcmlnaW5hbCBjYWxsYmFjayBmb3IgYSBsYXRlciB1c2UgKi9cbiAgICBpZiAoY2hpbGQgJiYgY2hpbGQudHlwZS5kaXNwbGF5TmFtZSA9PT0gJ0NvbnRlbnRDYXJkJykge1xuICAgICAgcHJvcHMub25FeHBhbmQgPSB0aGlzLnVwZGF0ZUxheW91dDtcbiAgICAgIHRoaXMuY2hpbGRDYWxsYmFja3NbY2hpbGQucHJvcHMuaWRdID0gY2hpbGQucHJvcHMub25FeHBhbmQ7XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbiAgfTtcblxuICB1cGRhdGVMYXlvdXQgPSAoLi4uYXJncykgPT4ge1xuICAgIHRoaXMubWFzb25yeS5pbml0aWFsaXplTWFzb25yeSgpO1xuICAgIGlmIChhcmdzWzBdICYmIHR5cGVvZiB0aGlzLmNoaWxkQ2FsbGJhY2tzW2FyZ3NbMF1dID09PSAnZnVuY3Rpb24nKSB0aGlzLmNoaWxkQ2FsbGJhY2tzW2FyZ3NbMF1dKGFyZ3MpO1xuICAgIC8vIEkgdGhpbmsgdXNpbmcgZm9yY2VVcGRhdGUgaXMganVzdGlmaWVkIGhlcmVcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLCBjb2x1bW5Db3VudEV4dHJhTGFyZ2UsIGNvbHVtbkNvdW50TGFyZ2UsIGNvbHVtbkNvdW50TWVkaXVtLCBjb2x1bW5Db3VudFNtYWxsLFxuICAgICAgdG9wT2Zmc2V0LCBjbGFzc05hbWUsIGlkLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQZXJmZWN0U2Nyb2xsYmFyPlxuICAgICAgICA8TWFzb25yeVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X21hc29ucnlfd3JhcHBlciAke2NsYXNzTmFtZX1gfVxuICAgICAgICAgIHRvcE9mZnNldD17dG9wT2Zmc2V0fVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxSZWFjdE1hc29ucnk+XG4gICAgICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IChcbiAgICAgICAgICAgICAgPE1hc29ucnlUaWxlXG4gICAgICAgICAgICAgICAgeGw9e2NvbHVtbkNvdW50RXh0cmFMYXJnZX1cbiAgICAgICAgICAgICAgICBsZz17Y29sdW1uQ291bnRMYXJnZX1cbiAgICAgICAgICAgICAgICBtZD17Y29sdW1uQ291bnRNZWRpdW19XG4gICAgICAgICAgICAgICAgc209e2NvbHVtbkNvdW50U21hbGx9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB0aGlzLmdldENoaWxkUHJvcHMoaSkpfVxuICAgICAgICAgICAgICA8L01hc29ucnlUaWxlPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9SZWFjdE1hc29ucnk+XG4gICAgICAgIDwvTWFzb25yeT5cbiAgICAgIDwvUGVyZmVjdFNjcm9sbGJhcj5cbiAgICApO1xuICB9XG59XG5cbkNvbnRlbnRNYXNvbnJ5LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjb2x1bW5Db3VudEV4dHJhTGFyZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY29sdW1uQ291bnRMYXJnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjb2x1bW5Db3VudE1lZGl1bTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjb2x1bW5Db3VudFNtYWxsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIHRvcE9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbkNvbnRlbnRNYXNvbnJ5LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgY29sdW1uQ291bnRFeHRyYUxhcmdlOiA0LFxuICBjb2x1bW5Db3VudExhcmdlOiAzLFxuICBjb2x1bW5Db3VudE1lZGl1bTogMixcbiAgY29sdW1uQ291bnRTbWFsbDogMSxcbiAgdG9wT2Zmc2V0OiA0MCxcbiAgaWQ6ICcnLFxuICBjbGFzc05hbWU6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudE1hc29ucnk7XG4iXX0=