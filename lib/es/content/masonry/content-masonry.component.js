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

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMasonry from 'react-masonry-component';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar'; // App imports

import { classPrefix } from '../../constants';

var getColumnWidth = function getColumnWidth(columnCount, theme) {
  return "calc((100% / " + columnCount + ") - " + theme.gutterWidth + ")";
};

var getTopOffset = function getTopOffset(offset) {
  return typeof offset === 'string' ? offset : offset + "px";
};

var calculateHeight = function calculateHeight(props) {
  return "calc(100vh - " + getTopOffset(props.topOffset) + " - (3 * " + props.theme.gutterWidth + "))";
};

var Masonry = styled.div(_templateObject(), function (props) {
  return calculateHeight(props);
}, function (props) {
  return props.theme.gutterWidth;
}, function (props) {
  return props.theme.gutterWidth;
});
var MasonryTile = styled.div(_templateObject2(), function (props) {
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
    return React.createElement(PerfectScrollbar, null, React.createElement(Masonry, {
      className: classPrefix + "_masonry_wrapper " + className,
      topOffset: topOffset,
      id: id
    }, React.createElement(ReactMasonry, {
      ref: function ref(masonry) {
        _this2.masonry = masonry;
      }
    }, React.Children.map(children, function (child, i) {
      return React.createElement(MasonryTile, {
        xl: columnCountExtraLarge,
        lg: columnCountLarge,
        md: columnCountMedium,
        sm: columnCountSmall
      }, React.cloneElement(child, _this2.getChildProps(i)));
    }))));
  };

  return ContentMasonry;
}(React.PureComponent);

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
export default ContentMasonry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L21hc29ucnkvY29udGVudC1tYXNvbnJ5LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJSZWFjdE1hc29ucnkiLCJQZXJmZWN0U2Nyb2xsYmFyIiwiY2xhc3NQcmVmaXgiLCJnZXRDb2x1bW5XaWR0aCIsImNvbHVtbkNvdW50IiwidGhlbWUiLCJndXR0ZXJXaWR0aCIsImdldFRvcE9mZnNldCIsIm9mZnNldCIsImNhbGN1bGF0ZUhlaWdodCIsInByb3BzIiwidG9wT2Zmc2V0IiwiTWFzb25yeSIsImRpdiIsIk1hc29ucnlUaWxlIiwic2NyZWVuU2l6ZXMiLCJtZWRpdW0iLCJzbSIsImxnIiwibGFyZ2UiLCJtZCIsInhsIiwieExhcmdlIiwiQ29udGVudE1hc29ucnkiLCJjaGlsZEluZGV4IiwiY2hpbGRyZW4iLCJjaGlsZCIsInBhcmVudCIsImlzTGFzdEl0ZW0iLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ0eXBlIiwiZGlzcGxheU5hbWUiLCJvbkV4cGFuZCIsImV4dGVuZEZuIiwib3JpZ2luYWxDYiIsInVwZGF0ZUxheW91dCIsImFyZ3MiLCJhcHBseSIsIm1hc29ucnkiLCJpbml0aWFsaXplTWFzb25yeSIsImZvcmNlVXBkYXRlIiwicmVuZGVyIiwiY29sdW1uQ291bnRFeHRyYUxhcmdlIiwiY29sdW1uQ291bnRMYXJnZSIsImNvbHVtbkNvdW50TWVkaXVtIiwiY29sdW1uQ291bnRTbWFsbCIsImNsYXNzTmFtZSIsImlkIiwiQ2hpbGRyZW4iLCJtYXAiLCJpIiwiY2xvbmVFbGVtZW50IiwiZ2V0Q2hpbGRQcm9wcyIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9D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NUJDLEVBQUFBLGlCQUFpQixFQUFFLENBSlM7QUFLNUJDLEVBQUFBLGdCQUFnQixFQUFFLENBTFU7QUFNNUJuQyxFQUFBQSxTQUFTLEVBQUUsRUFOaUI7QUFPNUJxQyxFQUFBQSxFQUFFLEVBQUUsRUFQd0I7QUFRNUJELEVBQUFBLFNBQVMsRUFBRTtBQVJpQixDQUE5QjtBQVdBLGVBQWV4QixjQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdE1hc29ucnkgZnJvbSAncmVhY3QtbWFzb25yeS1jb21wb25lbnQnO1xuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4IH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgZ2V0Q29sdW1uV2lkdGggPSAoY29sdW1uQ291bnQsIHRoZW1lKSA9PiBgY2FsYygoMTAwJSAvICR7Y29sdW1uQ291bnR9KSAtICR7dGhlbWUuZ3V0dGVyV2lkdGh9KWA7XG5jb25zdCBnZXRUb3BPZmZzZXQgPSBvZmZzZXQgPT4gKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnID8gb2Zmc2V0IDogYCR7b2Zmc2V0fXB4YCk7XG5jb25zdCBjYWxjdWxhdGVIZWlnaHQgPSBwcm9wcyA9PiBgY2FsYygxMDB2aCAtICR7Z2V0VG9wT2Zmc2V0KHByb3BzLnRvcE9mZnNldCl9IC0gKDMgKiAke3Byb3BzLnRoZW1lLmd1dHRlcldpZHRofSkpYDtcblxuY29uc3QgTWFzb25yeSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOjEwMHZ3OyAgICBcbiAgaGVpZ2h0OiAke3Byb3BzID0+IGNhbGN1bGF0ZUhlaWdodChwcm9wcyl9O1xuICBwYWRkaW5nLXJpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmd1dHRlcldpZHRofTtcbiAgcGFkZGluZy10b3A6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGh9O1xuYDtcblxuY29uc3QgTWFzb25yeVRpbGUgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aH07XG4gIC8qIFNtYWxsIG9ubHkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zY3JlZW5TaXplcy5tZWRpdW19KSB7IFxuICAgIHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLnNtLCBwcm9wcy50aGVtZSl9O1xuICAgfVxuICBcbiAgLyogTWVkaXVtIGFuZCB1cCAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNjcmVlblNpemVzLm1lZGl1bX0pICB7IFxuICAgIHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLmxnLCBwcm9wcy50aGVtZSl9OyBcbiAgfVxuICBcbiAgLyogTWVkaXVtIG9ubHkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zY3JlZW5TaXplcy5tZWRpdW19KSBhbmQgKG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zY3JlZW5TaXplcy5sYXJnZX0pIHsgXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0Q29sdW1uV2lkdGgocHJvcHMubWQsIHByb3BzLnRoZW1lKX07IFxuICB9XG4gIFxuICAvKiBMYXJnZSBhbmQgdXAgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKCR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2NyZWVuU2l6ZXMubGFyZ2V9KSB7IFxuICAgIHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLnhsLCBwcm9wcy50aGVtZSl9OyBcbiAgfVxuICBcbiAgLyogTGFyZ2Ugb25seSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNjcmVlblNpemVzLmxhcmdlfSkgYW5kIChtYXgtd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2NyZWVuU2l6ZXMueExhcmdlfSkge1xuICAgIHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLmxnLCBwcm9wcy50aGVtZSl9O1xuICB9XG5gO1xuXG5jbGFzcyBDb250ZW50TWFzb25yeSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBnZXRDaGlsZFByb3BzID0gKGNoaWxkSW5kZXgpID0+IHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5bY2hpbGRJbmRleF07XG4gICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICBwYXJlbnQ6IHRoaXMucGFyZW50LFxuICAgICAgaXNMYXN0SXRlbTogY2hpbGRJbmRleCA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSB8fCBjaGlsZHJlbi5sZW5ndGggPT09IHVuZGVmaW5lZCxcbiAgICB9O1xuICAgIC8qICBJZiBjaGlsZCBpcyBhIENhcmQsIHdlIHdpbGwgZXh0ZW5kIGl0cyBvbkV4cGFuZCBjYWxsYmFjayAgKi9cbiAgICBpZiAoY2hpbGQgJiYgY2hpbGQudHlwZS5kaXNwbGF5TmFtZSA9PT0gJ0NvbnRlbnRDYXJkJykge1xuICAgICAgcHJvcHMub25FeHBhbmQgPSB0aGlzLmV4dGVuZEZuKGNoaWxkLnByb3BzLm9uRXhwYW5kKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBFeHRlbmRzIGFuIG9yaWdpbmFsIGNhbGxiYWNrIGZ1bmN0aW9uIGJ5IHVwZGF0aW5nIHRoZSBsYXlvdXQgZmlyc3RcbiAgICogQHBhcmFtIG9yaWdpbmFsQ2JcbiAgICogQHJldHVybnMge2Z1bmN0aW9uKC4uLlsqXT0pOiAqfVxuICAgKi9cbiAgZXh0ZW5kRm4gPSBvcmlnaW5hbENiID0+ICguLi5hcmdzKSA9PiB7XG4gICAgdGhpcy51cGRhdGVMYXlvdXQoKTtcbiAgICByZXR1cm4gb3JpZ2luYWxDYi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcblxuICB1cGRhdGVMYXlvdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5tYXNvbnJ5LmluaXRpYWxpemVNYXNvbnJ5KCk7XG4gICAgLy8gSSB0aGluayB1c2luZyBmb3JjZVVwZGF0ZSBpcyBqdXN0aWZpZWQgaGVyZVxuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sIGNvbHVtbkNvdW50RXh0cmFMYXJnZSwgY29sdW1uQ291bnRMYXJnZSwgY29sdW1uQ291bnRNZWRpdW0sIGNvbHVtbkNvdW50U21hbGwsXG4gICAgICB0b3BPZmZzZXQsIGNsYXNzTmFtZSwgaWQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFBlcmZlY3RTY3JvbGxiYXI+XG4gICAgICAgIDxNYXNvbnJ5XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fbWFzb25yeV93cmFwcGVyICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgICAgdG9wT2Zmc2V0PXt0b3BPZmZzZXR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICA+XG4gICAgICAgICAgPFJlYWN0TWFzb25yeSByZWY9eyhtYXNvbnJ5KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1hc29ucnkgPSBtYXNvbnJ5O1xuICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxNYXNvbnJ5VGlsZVxuICAgICAgICAgICAgICAgIHhsPXtjb2x1bW5Db3VudEV4dHJhTGFyZ2V9XG4gICAgICAgICAgICAgICAgbGc9e2NvbHVtbkNvdW50TGFyZ2V9XG4gICAgICAgICAgICAgICAgbWQ9e2NvbHVtbkNvdW50TWVkaXVtfVxuICAgICAgICAgICAgICAgIHNtPXtjb2x1bW5Db3VudFNtYWxsfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgdGhpcy5nZXRDaGlsZFByb3BzKGkpKX1cbiAgICAgICAgICAgICAgPC9NYXNvbnJ5VGlsZT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvUmVhY3RNYXNvbnJ5PlxuICAgICAgICA8L01hc29ucnk+XG4gICAgICA8L1BlcmZlY3RTY3JvbGxiYXI+XG4gICAgKTtcbiAgfVxufVxuXG5Db250ZW50TWFzb25yeS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY29sdW1uQ291bnRFeHRyYUxhcmdlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGNvbHVtbkNvdW50TGFyZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY29sdW1uQ291bnRNZWRpdW06IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY29sdW1uQ291bnRTbWFsbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB0b3BPZmZzZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5Db250ZW50TWFzb25yeS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGNvbHVtbkNvdW50RXh0cmFMYXJnZTogNCxcbiAgY29sdW1uQ291bnRMYXJnZTogMyxcbiAgY29sdW1uQ291bnRNZWRpdW06IDIsXG4gIGNvbHVtbkNvdW50U21hbGw6IDEsXG4gIHRvcE9mZnNldDogNDAsXG4gIGlkOiAnJyxcbiAgY2xhc3NOYW1lOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRNYXNvbnJ5O1xuIl19