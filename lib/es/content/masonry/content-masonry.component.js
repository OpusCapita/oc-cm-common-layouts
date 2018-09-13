var _class, _temp, _initialiseProps;

var _templateObject = _taggedTemplateLiteralLoose(['\n  width:100vw;    \n  height: ', ';\n  padding-right: ', ';\n  padding-top: ', ';\n'], ['\n  width:100vw;    \n  height: ', ';\n  padding-right: ', ';\n  padding-top: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n  /* Small only */\n  @media screen and (max-width: 39.9375em) { width: ', '; }\n  \n  /* Medium and up */\n  @media screen and (min-width: 40em)  { width: ', '; }\n  \n  /* Medium only */\n  @media screen and (min-width: 40em) and (max-width: 63.9375em) { width: ', '; }\n  \n  /* Large and up */\n  @media screen and (min-width: 64em) { width: ', '; }\n  \n  /* Large only */\n  @media screen and (min-width: 64em) and (max-width: 74.9375em) { width: ', '; }\n'], ['\n  margin-left: ', ';\n  /* Small only */\n  @media screen and (max-width: 39.9375em) { width: ', '; }\n  \n  /* Medium and up */\n  @media screen and (min-width: 40em)  { width: ', '; }\n  \n  /* Medium only */\n  @media screen and (min-width: 40em) and (max-width: 63.9375em) { width: ', '; }\n  \n  /* Large and up */\n  @media screen and (min-width: 64em) { width: ', '; }\n  \n  /* Large only */\n  @media screen and (min-width: 64em) and (max-width: 74.9375em) { width: ', '; }\n']);

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
import { classPrefix, theme } from '../../constants';

var getColumnWidth = function getColumnWidth(columnCount) {
  return 'calc((100% / ' + columnCount + ') - ' + theme.gutterWidth + ')';
};
var getTopOffset = function getTopOffset(offset) {
  return typeof offset === 'string' ? offset : offset + 'px';
};
var calculateHeight = function calculateHeight(props) {
  return 'calc(100vh - ' + getTopOffset(props.topOffset) + ' - (3 * ' + theme.gutterWidth + '))';
};

var Masonry = styled.div(_templateObject, function (props) {
  return calculateHeight(props);
}, theme.gutterWidth, theme.gutterWidth);

var MasonryTile = styled.div(_templateObject2, theme.gutterWidth, function (props) {
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
          null,
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

export default ContentMasonry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L21hc29ucnkvY29udGVudC1tYXNvbnJ5LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJSZWFjdE1hc29ucnkiLCJQZXJmZWN0U2Nyb2xsYmFyIiwiY2xhc3NQcmVmaXgiLCJ0aGVtZSIsImdldENvbHVtbldpZHRoIiwiY29sdW1uQ291bnQiLCJndXR0ZXJXaWR0aCIsImdldFRvcE9mZnNldCIsIm9mZnNldCIsImNhbGN1bGF0ZUhlaWdodCIsInByb3BzIiwidG9wT2Zmc2V0IiwiTWFzb25yeSIsImRpdiIsIk1hc29ucnlUaWxlIiwic20iLCJsZyIsIm1kIiwieGwiLCJDb250ZW50TWFzb25yeSIsImNoaWxkQ2FsbGJhY2tzIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJjb2x1bW5Db3VudEV4dHJhTGFyZ2UiLCJjb2x1bW5Db3VudExhcmdlIiwiY29sdW1uQ291bnRNZWRpdW0iLCJjb2x1bW5Db3VudFNtYWxsIiwiY2xhc3NOYW1lIiwiaWQiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaSIsImNsb25lRWxlbWVudCIsImdldENoaWxkUHJvcHMiLCJQdXJlQ29tcG9uZW50IiwiY2hpbGRJbmRleCIsInBhcmVudCIsImlzTGFzdEl0ZW0iLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJ0eXBlIiwiZGlzcGxheU5hbWUiLCJvbkV4cGFuZCIsInVwZGF0ZUxheW91dCIsImFyZ3MiLCJtYXNvbnJ5IiwiaW5pdGlhbGl6ZU1hc29ucnkiLCJmb3JjZVVwZGF0ZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLHlCQUF6QjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZC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QVNpQixNQUFULEdBQWtCLENBQWpDLElBQXNDakIsU0FBU2lCLE1BQVQsS0FBb0JDO0FBRjFELEtBQWQ7O0FBS0E7O0FBRUEsUUFBSVQsU0FBU0EsTUFBTVUsSUFBTixDQUFXQyxXQUFYLEtBQTJCLGFBQXhDLEVBQXVEO0FBQ3JEaEMsWUFBTWlDLFFBQU4sR0FBaUIsT0FBS0MsWUFBdEI7QUFDQSxhQUFLeEIsY0FBTCxDQUFvQlcsTUFBTXJCLEtBQU4sQ0FBWWtCLEVBQWhDLElBQXNDRyxNQUFNckIsS0FBTixDQUFZaUMsUUFBbEQ7QUFDRDtBQUNELFdBQU9qQyxLQUFQO0FBQ0QsRzs7T0FFRGtDLFksR0FBZSxZQUFhO0FBQUEsc0NBQVRDLElBQVM7QUFBVEEsVUFBUztBQUFBOztBQUMxQixXQUFLQyxPQUFMLENBQWFDLGlCQUFiO0FBQ0EsUUFBSUYsS0FBSyxDQUFMLEtBQVcsT0FBTyxPQUFLekIsY0FBTCxDQUFvQnlCLEtBQUssQ0FBTCxDQUFwQixDQUFQLEtBQXdDLFVBQXZELEVBQW1FLE9BQUt6QixjQUFMLENBQW9CeUIsS0FBSyxDQUFMLENBQXBCLEVBQTZCQSxJQUE3QjtBQUNuRTtBQUNBLFdBQUtHLFdBQUw7QUFDRCxHOzs7QUEyQ0g3QixlQUFlOEIsWUFBZixHQUE4QjtBQUM1QjNCLFlBQVVrQixTQURrQjtBQUU1QmpCLHlCQUF1QixDQUZLO0FBRzVCQyxvQkFBa0IsQ0FIVTtBQUk1QkMscUJBQW1CLENBSlM7QUFLNUJDLG9CQUFrQixDQUxVO0FBTTVCZixhQUFXLEVBTmlCO0FBTzVCaUIsTUFBSSxFQVB3QjtBQVE1QkQsYUFBVztBQVJpQixDQUE5Qjs7QUFXQSxlQUFlUixjQUFmIiwiZmlsZSI6ImNvbnRlbnQtbWFzb25yeS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0TWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCc7XG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBnZXRDb2x1bW5XaWR0aCA9IGNvbHVtbkNvdW50ID0+IGBjYWxjKCgxMDAlIC8gJHtjb2x1bW5Db3VudH0pIC0gJHt0aGVtZS5ndXR0ZXJXaWR0aH0pYDtcbmNvbnN0IGdldFRvcE9mZnNldCA9IG9mZnNldCA9PiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycgPyBvZmZzZXQgOiBgJHtvZmZzZXR9cHhgKTtcbmNvbnN0IGNhbGN1bGF0ZUhlaWdodCA9IHByb3BzID0+IGBjYWxjKDEwMHZoIC0gJHtnZXRUb3BPZmZzZXQocHJvcHMudG9wT2Zmc2V0KX0gLSAoMyAqICR7dGhlbWUuZ3V0dGVyV2lkdGh9KSlgO1xuXG5jb25zdCBNYXNvbnJ5ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6MTAwdnc7ICAgIFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gY2FsY3VsYXRlSGVpZ2h0KHByb3BzKX07XG4gIHBhZGRpbmctcmlnaHQ6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBwYWRkaW5nLXRvcDogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG5gO1xuXG5jb25zdCBNYXNvbnJ5VGlsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgLyogU21hbGwgb25seSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOS45Mzc1ZW0pIHsgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0Q29sdW1uV2lkdGgocHJvcHMuc20pfTsgfVxuICBcbiAgLyogTWVkaXVtIGFuZCB1cCAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSAgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5sZyl9OyB9XG4gIFxuICAvKiBNZWRpdW0gb25seSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSBhbmQgKG1heC13aWR0aDogNjMuOTM3NWVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLm1kKX07IH1cbiAgXG4gIC8qIExhcmdlIGFuZCB1cCAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLnhsKX07IH1cbiAgXG4gIC8qIExhcmdlIG9ubHkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkgYW5kIChtYXgtd2lkdGg6IDc0LjkzNzVlbSkgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5sZyl9OyB9XG5gO1xuXG5jbGFzcyBDb250ZW50TWFzb25yeSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvKiBJZiBjaGlsZCBpcyBhIENhcmQsIGl0cyBvbkV4cGFuZCBjYWxsYmFjayB3aWxsIGJlIHN0b3JlZCBoZXJlICovXG4gICAgdGhpcy5jaGlsZENhbGxiYWNrcyA9IHt9O1xuICB9XG5cbiAgZ2V0Q2hpbGRQcm9wcyA9IChjaGlsZEluZGV4KSA9PiB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2NoaWxkSW5kZXhdO1xuICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgIGlzTGFzdEl0ZW06IGNoaWxkSW5kZXggPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEgfHwgY2hpbGRyZW4ubGVuZ3RoID09PSB1bmRlZmluZWQsXG4gICAgfTtcblxuICAgIC8qICBJZiBjaGlsZCBpcyBhIENhcmQsIHdlIHdpbGwgcmVwbGFjZSBpdHMgb25FeHBhbmQgY2FsbGJhY2sgYW5kIHN0b3JlXG4gICAgIHRoZSBvcmlnaW5hbCBjYWxsYmFjayBmb3IgYSBsYXRlciB1c2UgKi9cbiAgICBpZiAoY2hpbGQgJiYgY2hpbGQudHlwZS5kaXNwbGF5TmFtZSA9PT0gJ0NvbnRlbnRDYXJkJykge1xuICAgICAgcHJvcHMub25FeHBhbmQgPSB0aGlzLnVwZGF0ZUxheW91dDtcbiAgICAgIHRoaXMuY2hpbGRDYWxsYmFja3NbY2hpbGQucHJvcHMuaWRdID0gY2hpbGQucHJvcHMub25FeHBhbmQ7XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbiAgfTtcblxuICB1cGRhdGVMYXlvdXQgPSAoLi4uYXJncykgPT4ge1xuICAgIHRoaXMubWFzb25yeS5pbml0aWFsaXplTWFzb25yeSgpO1xuICAgIGlmIChhcmdzWzBdICYmIHR5cGVvZiB0aGlzLmNoaWxkQ2FsbGJhY2tzW2FyZ3NbMF1dID09PSAnZnVuY3Rpb24nKSB0aGlzLmNoaWxkQ2FsbGJhY2tzW2FyZ3NbMF1dKGFyZ3MpO1xuICAgIC8vIEkgdGhpbmsgdXNpbmcgZm9yY2VVcGRhdGUgaXMganVzdGlmaWVkIGhlcmVcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLCBjb2x1bW5Db3VudEV4dHJhTGFyZ2UsIGNvbHVtbkNvdW50TGFyZ2UsIGNvbHVtbkNvdW50TWVkaXVtLCBjb2x1bW5Db3VudFNtYWxsLFxuICAgICAgdG9wT2Zmc2V0LCBjbGFzc05hbWUsIGlkLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQZXJmZWN0U2Nyb2xsYmFyPlxuICAgICAgICA8TWFzb25yeVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X21hc29ucnlfd3JhcHBlciAke2NsYXNzTmFtZX1gfVxuICAgICAgICAgIHRvcE9mZnNldD17dG9wT2Zmc2V0fVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxSZWFjdE1hc29ucnk+XG4gICAgICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IChcbiAgICAgICAgICAgICAgPE1hc29ucnlUaWxlXG4gICAgICAgICAgICAgICAgeGw9e2NvbHVtbkNvdW50RXh0cmFMYXJnZX1cbiAgICAgICAgICAgICAgICBsZz17Y29sdW1uQ291bnRMYXJnZX1cbiAgICAgICAgICAgICAgICBtZD17Y29sdW1uQ291bnRNZWRpdW19XG4gICAgICAgICAgICAgICAgc209e2NvbHVtbkNvdW50U21hbGx9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB0aGlzLmdldENoaWxkUHJvcHMoaSkpfVxuICAgICAgICAgICAgICA8L01hc29ucnlUaWxlPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9SZWFjdE1hc29ucnk+XG4gICAgICAgIDwvTWFzb25yeT5cbiAgICAgIDwvUGVyZmVjdFNjcm9sbGJhcj5cbiAgICApO1xuICB9XG59XG5cbkNvbnRlbnRNYXNvbnJ5LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjb2x1bW5Db3VudEV4dHJhTGFyZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY29sdW1uQ291bnRMYXJnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjb2x1bW5Db3VudE1lZGl1bTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjb2x1bW5Db3VudFNtYWxsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIHRvcE9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbkNvbnRlbnRNYXNvbnJ5LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgY29sdW1uQ291bnRFeHRyYUxhcmdlOiA0LFxuICBjb2x1bW5Db3VudExhcmdlOiAzLFxuICBjb2x1bW5Db3VudE1lZGl1bTogMixcbiAgY29sdW1uQ291bnRTbWFsbDogMSxcbiAgdG9wT2Zmc2V0OiA0MCxcbiAgaWQ6ICcnLFxuICBjbGFzc05hbWU6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudE1hc29ucnk7XG4iXX0=