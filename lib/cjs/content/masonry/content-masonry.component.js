'use strict';

exports.__esModule = true;

var _class, _temp2, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  width:100vw;    \n  height: ', ';\n  padding-right: ', ';\n  padding-top: ', ';\n'], ['\n  width:100vw;    \n  height: ', ';\n  padding-right: ', ';\n  padding-top: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n  /* Small only */\n  @media screen and (max-width: ', ') { \n    width: ', ';\n   }\n  \n  /* Medium and up */\n  @media screen and (min-width: ', ')  { \n    width: ', '; \n  }\n  \n  /* Medium only */\n  @media screen and (min-width: ', ') and (max-width: ', ') { \n    width: ', '; \n  }\n  \n  /* Large and up */\n  @media screen and (', ') { \n    width: ', '; \n  }\n  \n  /* Large only */\n  @media screen and (min-width: ', ') and (max-width: ', ') {\n    width: ', ';\n  }\n'], ['\n  margin-left: ', ';\n  /* Small only */\n  @media screen and (max-width: ', ') { \n    width: ', ';\n   }\n  \n  /* Medium and up */\n  @media screen and (min-width: ', ')  { \n    width: ', '; \n  }\n  \n  /* Medium only */\n  @media screen and (min-width: ', ') and (max-width: ', ') { \n    width: ', '; \n  }\n  \n  /* Large and up */\n  @media screen and (', ') { \n    width: ', '; \n  }\n  \n  /* Large only */\n  @media screen and (min-width: ', ') and (max-width: ', ') {\n    width: ', ';\n  }\n']);

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
  return props.theme.screenSizes.medium;
}, function (props) {
  return getColumnWidth(props.sm, props.theme);
}, function (props) {
  return props.theme.screenSizes.medium;
}, function (props) {
  return getColumnWidth(props.lg, props.theme);
}, function (props) {
  return props.theme.screenSizes.medium;
}, function (props) {
  return props.theme.screenSizes.large;
}, function (props) {
  return getColumnWidth(props.md, props.theme);
}, function (props) {
  return props.theme.screenSizes.large;
}, function (props) {
  return getColumnWidth(props.xl, props.theme);
}, function (props) {
  return props.theme.screenSizes.large;
}, function (props) {
  return props.theme.screenSizes.xLarge;
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


ContentMasonry.propTypes = {
  children: _propTypes2.default.node,
  columnCountExtraLarge: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  columnCountLarge: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  columnCountMedium: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  columnCountSmall: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  topOffset: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  id: _propTypes2.default.string,
  className: _propTypes2.default.string
};
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