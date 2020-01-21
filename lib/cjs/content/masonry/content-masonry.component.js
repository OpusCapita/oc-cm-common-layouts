"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactMasonryComponent = _interopRequireDefault(require("react-masonry-component"));

var _reactPerfectScrollbar = _interopRequireDefault(require("@opuscapita/react-perfect-scrollbar"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-left: ", ";\n  /* Small only */\n  @media screen and (max-width: ", ") { \n    width: ", ";\n   }\n  \n  /* Medium and up */\n  @media screen and (min-width: ", ")  { \n    width: ", "; \n  }\n  \n  /* Medium only */\n  @media screen and (min-width: ", ") and (max-width: ", ") { \n    width: ", "; \n  }\n  \n  /* Large and up */\n  @media screen and (", ") { \n    width: ", "; \n  }\n  \n  /* Large only */\n  @media screen and (min-width: ", ") and (max-width: ", ") {\n    width: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  width:100vw;    \n  height: ", ";\n  padding-right: ", ";\n  padding-top: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var getColumnWidth = function getColumnWidth(columnCount, theme) {
  return "calc((100% / " + columnCount + ") - " + theme.gutterWidth + ")";
};

var getTopOffset = function getTopOffset(offset) {
  return typeof offset === 'string' ? offset : offset + "px";
};

var calculateHeight = function calculateHeight(props) {
  return "calc(100vh - " + getTopOffset(props.topOffset) + " - (3 * " + props.theme.gutterWidth + "))";
};

var Masonry = _styledComponents["default"].div(_templateObject(), function (props) {
  return calculateHeight(props);
}, function (props) {
  return props.theme.gutterWidth;
}, function (props) {
  return props.theme.gutterWidth;
});

var MasonryTile = _styledComponents["default"].div(_templateObject2(), function (props) {
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

var ContentMasonry =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(ContentMasonry, _React$PureComponent);

  function ContentMasonry() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(_args)) || this;

    _defineProperty(_assertThisInitialized(_this), "getChildProps", function (childIndex) {
      var children = _this.props.children;
      var child = children[childIndex];
      var props = {
        parent: _this.parent,
        isLastItem: childIndex === children.length - 1 || children.length === undefined
      };
      /*  If child is a Card, we will extend its onExpand callback  */

      if (child && child.type.displayName === 'ContentCard') {
        props.onExpand = _this.extendFn(child.props.onExpand);
      }

      return props;
    });

    _defineProperty(_assertThisInitialized(_this), "extendFn", function (originalCb) {
      return function () {
        _this.updateLayout();

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return originalCb.apply(_assertThisInitialized(_this), args);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "updateLayout", function () {
      _this.masonry.initializeMasonry(); // I think using forceUpdate is justified here


      _this.forceUpdate();
    });

    return _this;
  }

  var _proto = ContentMasonry.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        children = _this$props.children,
        columnCountExtraLarge = _this$props.columnCountExtraLarge,
        columnCountLarge = _this$props.columnCountLarge,
        columnCountMedium = _this$props.columnCountMedium,
        columnCountSmall = _this$props.columnCountSmall,
        topOffset = _this$props.topOffset,
        className = _this$props.className,
        id = _this$props.id;
    return _react["default"].createElement(_reactPerfectScrollbar["default"], null, _react["default"].createElement(Masonry, {
      className: _constants.classPrefix + "_masonry_wrapper " + className,
      topOffset: topOffset,
      id: id
    }, _react["default"].createElement(_reactMasonryComponent["default"], {
      ref: function ref(masonry) {
        _this2.masonry = masonry;
      }
    }, _react["default"].Children.map(children, function (child, i) {
      return _react["default"].createElement(MasonryTile, {
        xl: columnCountExtraLarge,
        lg: columnCountLarge,
        md: columnCountMedium,
        sm: columnCountSmall
      }, _react["default"].cloneElement(child, _this2.getChildProps(i)));
    }))));
  };

  return ContentMasonry;
}(_react["default"].PureComponent);

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
var _default = ContentMasonry;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L21hc29ucnkvY29udGVudC1tYXNvbnJ5LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiZ2V0Q29sdW1uV2lkdGgiLCJjb2x1bW5Db3VudCIsInRoZW1lIiwiZ3V0dGVyV2lkdGgiLCJnZXRUb3BPZmZzZXQiLCJvZmZzZXQiLCJjYWxjdWxhdGVIZWlnaHQiLCJwcm9wcyIsInRvcE9mZnNldCIsIk1hc29ucnkiLCJzdHlsZWQiLCJkaXYiLCJNYXNvbnJ5VGlsZSIsInNjcmVlblNpemVzIiwibWVkaXVtIiwic20iLCJsZyIsImxhcmdlIiwibWQiLCJ4bCIsInhMYXJnZSIsIkNvbnRlbnRNYXNvbnJ5IiwiY2hpbGRJbmRleCIsImNoaWxkcmVuIiwiY2hpbGQiLCJwYXJlbnQiLCJpc0xhc3RJdGVtIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwidHlwZSIsImRpc3BsYXlOYW1lIiwib25FeHBhbmQiLCJleHRlbmRGbiIsIm9yaWdpbmFsQ2IiLCJ1cGRhdGVMYXlvdXQiLCJhcmdzIiwiYXBwbHkiLCJtYXNvbnJ5IiwiaW5pdGlhbGl6ZU1hc29ucnkiLCJmb3JjZVVwZGF0ZSIsInJlbmRlciIsImNvbHVtbkNvdW50RXh0cmFMYXJnZSIsImNvbHVtbkNvdW50TGFyZ2UiLCJjb2x1bW5Db3VudE1lZGl1bSIsImNvbHVtbkNvdW50U21hbGwiLCJjbGFzc05hbWUiLCJpZCIsImNsYXNzUHJlZml4IiwiUmVhY3QiLCJDaGlsZHJlbiIsIm1hcCIsImkiLCJjbG9uZUVsZW1lbnQiLCJnZXRDaGlsZFByb3BzIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLFdBQUQsRUFBY0MsS0FBZDtBQUFBLDJCQUF3Q0Qs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XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3RNYXNvbnJ5IGZyb20gJ3JlYWN0LW1hc29ucnktY29tcG9uZW50JztcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IGdldENvbHVtbldpZHRoID0gKGNvbHVtbkNvdW50LCB0aGVtZSkgPT4gYGNhbGMoKDEwMCUgLyAke2NvbHVtbkNvdW50fSkgLSAke3RoZW1lLmd1dHRlcldpZHRofSlgO1xuY29uc3QgZ2V0VG9wT2Zmc2V0ID0gb2Zmc2V0ID0+ICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJyA/IG9mZnNldCA6IGAke29mZnNldH1weGApO1xuY29uc3QgY2FsY3VsYXRlSGVpZ2h0ID0gcHJvcHMgPT4gYGNhbGMoMTAwdmggLSAke2dldFRvcE9mZnNldChwcm9wcy50b3BPZmZzZXQpfSAtICgzICogJHtwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aH0pKWA7XG5cbmNvbnN0IE1hc29ucnkgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDoxMDB2dzsgICAgXG4gIGhlaWdodDogJHtwcm9wcyA9PiBjYWxjdWxhdGVIZWlnaHQocHJvcHMpfTtcbiAgcGFkZGluZy1yaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aH07XG4gIHBhZGRpbmctdG9wOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmd1dHRlcldpZHRofTtcbmA7XG5cbmNvbnN0IE1hc29ucnlUaWxlID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGh9O1xuICAvKiBTbWFsbCBvbmx5ICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2NyZWVuU2l6ZXMubWVkaXVtfSkgeyBcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5zbSwgcHJvcHMudGhlbWUpfTtcbiAgIH1cbiAgXG4gIC8qIE1lZGl1bSBhbmQgdXAgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zY3JlZW5TaXplcy5tZWRpdW19KSAgeyBcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5sZywgcHJvcHMudGhlbWUpfTsgXG4gIH1cbiAgXG4gIC8qIE1lZGl1bSBvbmx5ICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2NyZWVuU2l6ZXMubWVkaXVtfSkgYW5kIChtYXgtd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2NyZWVuU2l6ZXMubGFyZ2V9KSB7IFxuICAgIHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLm1kLCBwcm9wcy50aGVtZSl9OyBcbiAgfVxuICBcbiAgLyogTGFyZ2UgYW5kIHVwICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kICgke3Byb3BzID0+IHByb3BzLnRoZW1lLnNjcmVlblNpemVzLmxhcmdlfSkgeyBcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy54bCwgcHJvcHMudGhlbWUpfTsgXG4gIH1cbiAgXG4gIC8qIExhcmdlIG9ubHkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zY3JlZW5TaXplcy5sYXJnZX0pIGFuZCAobWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNjcmVlblNpemVzLnhMYXJnZX0pIHtcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5sZywgcHJvcHMudGhlbWUpfTtcbiAgfVxuYDtcblxuY2xhc3MgQ29udGVudE1hc29ucnkgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgZ2V0Q2hpbGRQcm9wcyA9IChjaGlsZEluZGV4KSA9PiB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2NoaWxkSW5kZXhdO1xuICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGlzTGFzdEl0ZW06IGNoaWxkSW5kZXggPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEgfHwgY2hpbGRyZW4ubGVuZ3RoID09PSB1bmRlZmluZWQsXG4gICAgfTtcbiAgICAvKiAgSWYgY2hpbGQgaXMgYSBDYXJkLCB3ZSB3aWxsIGV4dGVuZCBpdHMgb25FeHBhbmQgY2FsbGJhY2sgICovXG4gICAgaWYgKGNoaWxkICYmIGNoaWxkLnR5cGUuZGlzcGxheU5hbWUgPT09ICdDb250ZW50Q2FyZCcpIHtcbiAgICAgIHByb3BzLm9uRXhwYW5kID0gdGhpcy5leHRlbmRGbihjaGlsZC5wcm9wcy5vbkV4cGFuZCk7XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbiAgfTtcblxuICAvKipcbiAgICogRXh0ZW5kcyBhbiBvcmlnaW5hbCBjYWxsYmFjayBmdW5jdGlvbiBieSB1cGRhdGluZyB0aGUgbGF5b3V0IGZpcnN0XG4gICAqIEBwYXJhbSBvcmlnaW5hbENiXG4gICAqIEByZXR1cm5zIHtmdW5jdGlvbiguLi5bKl09KTogKn1cbiAgICovXG4gIGV4dGVuZEZuID0gb3JpZ2luYWxDYiA9PiAoLi4uYXJncykgPT4ge1xuICAgIHRoaXMudXBkYXRlTGF5b3V0KCk7XG4gICAgcmV0dXJuIG9yaWdpbmFsQ2IuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG5cbiAgdXBkYXRlTGF5b3V0ID0gKCkgPT4ge1xuICAgIHRoaXMubWFzb25yeS5pbml0aWFsaXplTWFzb25yeSgpO1xuICAgIC8vIEkgdGhpbmsgdXNpbmcgZm9yY2VVcGRhdGUgaXMganVzdGlmaWVkIGhlcmVcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLCBjb2x1bW5Db3VudEV4dHJhTGFyZ2UsIGNvbHVtbkNvdW50TGFyZ2UsIGNvbHVtbkNvdW50TWVkaXVtLCBjb2x1bW5Db3VudFNtYWxsLFxuICAgICAgdG9wT2Zmc2V0LCBjbGFzc05hbWUsIGlkLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQZXJmZWN0U2Nyb2xsYmFyPlxuICAgICAgICA8TWFzb25yeVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X21hc29ucnlfd3JhcHBlciAke2NsYXNzTmFtZX1gfVxuICAgICAgICAgIHRvcE9mZnNldD17dG9wT2Zmc2V0fVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxSZWFjdE1hc29ucnkgcmVmPXsobWFzb25yeSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tYXNvbnJ5ID0gbWFzb25yeTtcbiAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8TWFzb25yeVRpbGVcbiAgICAgICAgICAgICAgICB4bD17Y29sdW1uQ291bnRFeHRyYUxhcmdlfVxuICAgICAgICAgICAgICAgIGxnPXtjb2x1bW5Db3VudExhcmdlfVxuICAgICAgICAgICAgICAgIG1kPXtjb2x1bW5Db3VudE1lZGl1bX1cbiAgICAgICAgICAgICAgICBzbT17Y29sdW1uQ291bnRTbWFsbH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHRoaXMuZ2V0Q2hpbGRQcm9wcyhpKSl9XG4gICAgICAgICAgICAgIDwvTWFzb25yeVRpbGU+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1JlYWN0TWFzb25yeT5cbiAgICAgICAgPC9NYXNvbnJ5PlxuICAgICAgPC9QZXJmZWN0U2Nyb2xsYmFyPlxuICAgICk7XG4gIH1cbn1cblxuQ29udGVudE1hc29ucnkucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNvbHVtbkNvdW50RXh0cmFMYXJnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjb2x1bW5Db3VudExhcmdlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGNvbHVtbkNvdW50TWVkaXVtOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGNvbHVtbkNvdW50U21hbGw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgdG9wT2Zmc2V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuQ29udGVudE1hc29ucnkuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBjb2x1bW5Db3VudEV4dHJhTGFyZ2U6IDQsXG4gIGNvbHVtbkNvdW50TGFyZ2U6IDMsXG4gIGNvbHVtbkNvdW50TWVkaXVtOiAyLFxuICBjb2x1bW5Db3VudFNtYWxsOiAxLFxuICB0b3BPZmZzZXQ6IDQwLFxuICBpZDogJycsXG4gIGNsYXNzTmFtZTogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50TWFzb25yeTtcbiJdfQ==