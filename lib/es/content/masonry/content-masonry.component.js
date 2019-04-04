var _class, _temp2, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  width:100vw;    \n  height: ', ';\n  padding-right: ', ';\n  padding-top: ', ';\n'], ['\n  width:100vw;    \n  height: ', ';\n  padding-right: ', ';\n  padding-top: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n  /* Small only */\n  @media screen and (max-width: ', ') { \n    width: ', ';\n   }\n  \n  /* Medium and up */\n  @media screen and (min-width: ', ')  { \n    width: ', '; \n  }\n  \n  /* Medium only */\n  @media screen and (min-width: ', ') and (max-width: ', ') { \n    width: ', '; \n  }\n  \n  /* Large and up */\n  @media screen and (', ') { \n    width: ', '; \n  }\n  \n  /* Large only */\n  @media screen and (min-width: ', ') and (max-width: ', ') {\n    width: ', ';\n  }\n'], ['\n  margin-left: ', ';\n  /* Small only */\n  @media screen and (max-width: ', ') { \n    width: ', ';\n   }\n  \n  /* Medium and up */\n  @media screen and (min-width: ', ')  { \n    width: ', '; \n  }\n  \n  /* Medium only */\n  @media screen and (min-width: ', ') and (max-width: ', ') { \n    width: ', '; \n  }\n  \n  /* Large and up */\n  @media screen and (', ') { \n    width: ', '; \n  }\n  \n  /* Large only */\n  @media screen and (min-width: ', ') and (max-width: ', ') {\n    width: ', ';\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactMasonry from 'react-masonry-component';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';
// App imports
import { classPrefix } from '../../constants';

var getColumnWidth = function getColumnWidth(columnCount, theme) {
  return 'calc((100% / ' + columnCount + ') - ' + theme.gutterWidth + ')';
};
var getTopOffset = function getTopOffset(offset) {
  return typeof offset === 'string' ? offset : offset + 'px';
};
var calculateHeight = function calculateHeight(props) {
  return 'calc(100vh - ' + getTopOffset(props.topOffset) + ' - (3 * ' + props.theme.gutterWidth + '))';
};

var Masonry = styled.div(_templateObject, function (props) {
  return calculateHeight(props);
}, function (props) {
  return props.theme.gutterWidth;
}, function (props) {
  return props.theme.gutterWidth;
});

var MasonryTile = styled.div(_templateObject2, function (props) {
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


    return React.createElement(
      PerfectScrollbar,
      null,
      React.createElement(
        Masonry,
        {
          className: classPrefix + '_masonry_wrapper ' + className,
          topOffset: topOffset,
          id: id
        },
        React.createElement(
          ReactMasonry,
          { ref: function ref(masonry) {
              _this2.masonry = masonry;
            }
          },
          React.Children.map(children, function (child, i) {
            return React.createElement(
              MasonryTile,
              {
                xl: columnCountExtraLarge,
                lg: columnCountLarge,
                md: columnCountMedium,
                sm: columnCountSmall
              },
              React.cloneElement(child, _this2.getChildProps(i))
            );
          })
        )
      )
    );
  };

  return ContentMasonry;
}(React.PureComponent), _initialiseProps = function _initialiseProps() {
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

export default ContentMasonry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L21hc29ucnkvY29udGVudC1tYXNvbnJ5LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJSZWFjdE1hc29ucnkiLCJQZXJmZWN0U2Nyb2xsYmFyIiwiY2xhc3NQcmVmaXgiLCJnZXRDb2x1bW5XaWR0aCIsImNvbHVtbkNvdW50IiwidGhlbWUiLCJndXR0ZXJXaWR0aCIsImdldFRvcE9mZnNldCIsIm9mZnNldCIsImNhbGN1bGF0ZUhlaWdodCIsInByb3BzIiwidG9wT2Zmc2V0IiwiTWFzb25yeSIsImRpdiIsIk1hc29ucnlUaWxlIiwic2NyZWVuU2l6ZXMiLCJtZWRpdW0iLCJzbSIsImxnIiwibGFyZ2UiLCJtZCIsInhsIiwieExhcmdlIiwiQ29udGVudE1hc29ucnkiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNvbHVtbkNvdW50RXh0cmFMYXJnZSIsImNvbHVtbkNvdW50TGFyZ2UiLCJjb2x1bW5Db3VudE1lZGl1bSIsImNvbHVtbkNvdW50U21hbGwiLCJjbGFzc05hbWUiLCJpZCIsIm1hc29ucnkiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaSIsImNsb25lRWxlbWVudCIsImdldENoaWxkUHJvcHMiLCJQdXJlQ29tcG9uZW50IiwiY2hpbGRJbmRleCIsInBhcmVudCIsImlzTGFzdEl0ZW0iLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ0eXBlIiwiZGlzcGxheU5hbWUiLCJvbkV4cGFuZCIsImV4dGVuZEZuIiwiYXJncyIsInVwZGF0ZUxheW91dCIsIm9yaWdpbmFsQ2IiLCJhcHBseSIsImluaXRpYWxpemVNYXNvbnJ5IiwiZm9yY2VVcGRhdGUiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJB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QUNELEc7O09BT0RzQyxRLEdBQVc7QUFBQSxXQUFjLFlBQWE7QUFBQSx5Q0FBVEMsSUFBUztBQUFUQSxZQUFTO0FBQUE7O0FBQ3BDLGFBQUtDLFlBQUw7QUFDQSxhQUFPQyxXQUFXQyxLQUFYLENBQWlCLE1BQWpCLEVBQXVCSCxJQUF2QixDQUFQO0FBQ0QsS0FIVTtBQUFBLEc7O09BS1hDLFksR0FBZSxZQUFNO0FBQ25CLFdBQUtsQixPQUFMLENBQWFxQixpQkFBYjtBQUNBO0FBQ0EsV0FBS0MsV0FBTDtBQUNELEc7OztBQThDSC9CLGVBQWVnQyxZQUFmLEdBQThCO0FBQzVCOUIsWUFBVW1CLFNBRGtCO0FBRTVCbEIseUJBQXVCLENBRks7QUFHNUJDLG9CQUFrQixDQUhVO0FBSTVCQyxxQkFBbUIsQ0FKUztBQUs1QkMsb0JBQWtCLENBTFU7QUFNNUJsQixhQUFXLEVBTmlCO0FBTzVCb0IsTUFBSSxFQVB3QjtBQVE1QkQsYUFBVztBQVJpQixDQUE5Qjs7QUFXQSxlQUFlUCxjQUFmIiwiZmlsZSI6ImNvbnRlbnQtbWFzb25yeS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0TWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCc7XG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBnZXRDb2x1bW5XaWR0aCA9IChjb2x1bW5Db3VudCwgdGhlbWUpID0+IGBjYWxjKCgxMDAlIC8gJHtjb2x1bW5Db3VudH0pIC0gJHt0aGVtZS5ndXR0ZXJXaWR0aH0pYDtcbmNvbnN0IGdldFRvcE9mZnNldCA9IG9mZnNldCA9PiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycgPyBvZmZzZXQgOiBgJHtvZmZzZXR9cHhgKTtcbmNvbnN0IGNhbGN1bGF0ZUhlaWdodCA9IHByb3BzID0+IGBjYWxjKDEwMHZoIC0gJHtnZXRUb3BPZmZzZXQocHJvcHMudG9wT2Zmc2V0KX0gLSAoMyAqICR7cHJvcHMudGhlbWUuZ3V0dGVyV2lkdGh9KSlgO1xuXG5jb25zdCBNYXNvbnJ5ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6MTAwdnc7ICAgIFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gY2FsY3VsYXRlSGVpZ2h0KHByb3BzKX07XG4gIHBhZGRpbmctcmlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBwYWRkaW5nLXRvcDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aH07XG5gO1xuXG5jb25zdCBNYXNvbnJ5VGlsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmd1dHRlcldpZHRofTtcbiAgLyogU21hbGwgb25seSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNjcmVlblNpemVzLm1lZGl1bX0pIHsgXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0Q29sdW1uV2lkdGgocHJvcHMuc20sIHByb3BzLnRoZW1lKX07XG4gICB9XG4gIFxuICAvKiBNZWRpdW0gYW5kIHVwICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2NyZWVuU2l6ZXMubWVkaXVtfSkgIHsgXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0Q29sdW1uV2lkdGgocHJvcHMubGcsIHByb3BzLnRoZW1lKX07IFxuICB9XG4gIFxuICAvKiBNZWRpdW0gb25seSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNjcmVlblNpemVzLm1lZGl1bX0pIGFuZCAobWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNjcmVlblNpemVzLmxhcmdlfSkgeyBcbiAgICB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5tZCwgcHJvcHMudGhlbWUpfTsgXG4gIH1cbiAgXG4gIC8qIExhcmdlIGFuZCB1cCAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAoJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zY3JlZW5TaXplcy5sYXJnZX0pIHsgXG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0Q29sdW1uV2lkdGgocHJvcHMueGwsIHByb3BzLnRoZW1lKX07IFxuICB9XG4gIFxuICAvKiBMYXJnZSBvbmx5ICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2NyZWVuU2l6ZXMubGFyZ2V9KSBhbmQgKG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zY3JlZW5TaXplcy54TGFyZ2V9KSB7XG4gICAgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0Q29sdW1uV2lkdGgocHJvcHMubGcsIHByb3BzLnRoZW1lKX07XG4gIH1cbmA7XG5cbmNsYXNzIENvbnRlbnRNYXNvbnJ5IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGdldENoaWxkUHJvcHMgPSAoY2hpbGRJbmRleCkgPT4ge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltjaGlsZEluZGV4XTtcbiAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICBpc0xhc3RJdGVtOiBjaGlsZEluZGV4ID09PSBjaGlsZHJlbi5sZW5ndGggLSAxIHx8IGNoaWxkcmVuLmxlbmd0aCA9PT0gdW5kZWZpbmVkLFxuICAgIH07XG4gICAgLyogIElmIGNoaWxkIGlzIGEgQ2FyZCwgd2Ugd2lsbCBleHRlbmQgaXRzIG9uRXhwYW5kIGNhbGxiYWNrICAqL1xuICAgIGlmIChjaGlsZCAmJiBjaGlsZC50eXBlLmRpc3BsYXlOYW1lID09PSAnQ29udGVudENhcmQnKSB7XG4gICAgICBwcm9wcy5vbkV4cGFuZCA9IHRoaXMuZXh0ZW5kRm4oY2hpbGQucHJvcHMub25FeHBhbmQpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcHM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEV4dGVuZHMgYW4gb3JpZ2luYWwgY2FsbGJhY2sgZnVuY3Rpb24gYnkgdXBkYXRpbmcgdGhlIGxheW91dCBmaXJzdFxuICAgKiBAcGFyYW0gb3JpZ2luYWxDYlxuICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24oLi4uWypdPSk6ICp9XG4gICAqL1xuICBleHRlbmRGbiA9IG9yaWdpbmFsQ2IgPT4gKC4uLmFyZ3MpID0+IHtcbiAgICB0aGlzLnVwZGF0ZUxheW91dCgpO1xuICAgIHJldHVybiBvcmlnaW5hbENiLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuXG4gIHVwZGF0ZUxheW91dCA9ICgpID0+IHtcbiAgICB0aGlzLm1hc29ucnkuaW5pdGlhbGl6ZU1hc29ucnkoKTtcbiAgICAvLyBJIHRoaW5rIHVzaW5nIGZvcmNlVXBkYXRlIGlzIGp1c3RpZmllZCBoZXJlXG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbiwgY29sdW1uQ291bnRFeHRyYUxhcmdlLCBjb2x1bW5Db3VudExhcmdlLCBjb2x1bW5Db3VudE1lZGl1bSwgY29sdW1uQ291bnRTbWFsbCxcbiAgICAgIHRvcE9mZnNldCwgY2xhc3NOYW1lLCBpZCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8UGVyZmVjdFNjcm9sbGJhcj5cbiAgICAgICAgPE1hc29ucnlcbiAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9tYXNvbnJ5X3dyYXBwZXIgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgICB0b3BPZmZzZXQ9e3RvcE9mZnNldH1cbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgID5cbiAgICAgICAgICA8UmVhY3RNYXNvbnJ5IHJlZj17KG1hc29ucnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWFzb25yeSA9IG1hc29ucnk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IChcbiAgICAgICAgICAgICAgPE1hc29ucnlUaWxlXG4gICAgICAgICAgICAgICAgeGw9e2NvbHVtbkNvdW50RXh0cmFMYXJnZX1cbiAgICAgICAgICAgICAgICBsZz17Y29sdW1uQ291bnRMYXJnZX1cbiAgICAgICAgICAgICAgICBtZD17Y29sdW1uQ291bnRNZWRpdW19XG4gICAgICAgICAgICAgICAgc209e2NvbHVtbkNvdW50U21hbGx9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB0aGlzLmdldENoaWxkUHJvcHMoaSkpfVxuICAgICAgICAgICAgICA8L01hc29ucnlUaWxlPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9SZWFjdE1hc29ucnk+XG4gICAgICAgIDwvTWFzb25yeT5cbiAgICAgIDwvUGVyZmVjdFNjcm9sbGJhcj5cbiAgICApO1xuICB9XG59XG5cbkNvbnRlbnRNYXNvbnJ5LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjb2x1bW5Db3VudEV4dHJhTGFyZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY29sdW1uQ291bnRMYXJnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjb2x1bW5Db3VudE1lZGl1bTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjb2x1bW5Db3VudFNtYWxsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIHRvcE9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbkNvbnRlbnRNYXNvbnJ5LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgY29sdW1uQ291bnRFeHRyYUxhcmdlOiA0LFxuICBjb2x1bW5Db3VudExhcmdlOiAzLFxuICBjb2x1bW5Db3VudE1lZGl1bTogMixcbiAgY29sdW1uQ291bnRTbWFsbDogMSxcbiAgdG9wT2Zmc2V0OiA0MCxcbiAgaWQ6ICcnLFxuICBjbGFzc05hbWU6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudE1hc29ucnk7XG4iXX0=