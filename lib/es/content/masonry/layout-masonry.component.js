var _templateObject = _taggedTemplateLiteralLoose(['\n  width:100vw;    \n  height: ', ';\n  padding-right: ', ';\n  padding-top: ', ';\n'], ['\n  width:100vw;    \n  height: ', ';\n  padding-right: ', ';\n  padding-top: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n  /* Small only */\n  @media screen and (max-width: 39.9375em) { width: ', '; }\n  \n  /* Medium and up */\n  @media screen and (min-width: 40em)  { width: ', '; }\n  \n  /* Medium only */\n  @media screen and (min-width: 40em) and (max-width: 63.9375em) { width: ', '; }\n  \n  /* Large and up */\n  @media screen and (min-width: 64em) { width: ', '; }\n  \n  /* Large only */\n  @media screen and (min-width: 64em) and (max-width: 74.9375em) { width: ', '; }\n'], ['\n  margin-left: ', ';\n  /* Small only */\n  @media screen and (max-width: 39.9375em) { width: ', '; }\n  \n  /* Medium and up */\n  @media screen and (min-width: 40em)  { width: ', '; }\n  \n  /* Medium only */\n  @media screen and (min-width: 40em) and (max-width: 63.9375em) { width: ', '; }\n  \n  /* Large and up */\n  @media screen and (min-width: 64em) { width: ', '; }\n  \n  /* Large only */\n  @media screen and (min-width: 64em) and (max-width: 74.9375em) { width: ', '; }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/* eslint-disable no-confusing-arrow */

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

var LayoutMasonry = function (_React$PureComponent) {
  _inherits(LayoutMasonry, _React$PureComponent);

  function LayoutMasonry() {
    _classCallCheck(this, LayoutMasonry);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  LayoutMasonry.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        columnCountExtraLarge = _props.columnCountExtraLarge,
        columnCountLarge = _props.columnCountLarge,
        columnCountMedium = _props.columnCountMedium,
        columnCountSmall = _props.columnCountSmall,
        topOffset = _props.topOffset;

    return React.createElement(
      PerfectScrollbar,
      null,
      React.createElement(
        Masonry,
        { className: classPrefix + '_masonry_wrapper', topOffset: topOffset },
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
              React.cloneElement(child, {
                parent: _this2.parent,
                isLastItem: i === children.length - 1 || children.length === undefined
              })
            );
          })
        )
      )
    );
  };

  return LayoutMasonry;
}(React.PureComponent);

LayoutMasonry.defaultProps = {
  children: undefined,
  columnCountExtraLarge: 4,
  columnCountLarge: 3,
  columnCountMedium: 2,
  columnCountSmall: 1,
  topOffset: 40
};

export default LayoutMasonry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L21hc29ucnkvbGF5b3V0LW1hc29ucnkuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsIlJlYWN0TWFzb25yeSIsIlBlcmZlY3RTY3JvbGxiYXIiLCJjbGFzc1ByZWZpeCIsInRoZW1lIiwiZ2V0Q29sdW1uV2lkdGgiLCJjb2x1bW5Db3VudCIsImd1dHRlcldpZHRoIiwiZ2V0VG9wT2Zmc2V0Iiwib2Zmc2V0IiwiY2FsY3VsYXRlSGVpZ2h0IiwicHJvcHMiLCJ0b3BPZmZzZXQiLCJNYXNvbnJ5IiwiZGl2IiwiTWFzb25yeVRpbGUiLCJzbSIsImxnIiwibWQiLCJ4bCIsIkxheW91dE1hc29ucnkiLCJyZW5kZXIiLCJjaGlsZHJlbiIsImNvbHVtbkNvdW50RXh0cmFMYXJnZSIsImNvbHVtbkNvdW50TGFyZ2UiLCJjb2x1bW5Db3VudE1lZGl1bSIsImNvbHVtbkNvdW50U21hbGwiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaSIsImNsb25lRWxlbWVudCIsInBhcmVudCIsImlzTGFzdEl0ZW0iLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUVBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLHlCQUF6QjtBQUNBLE9BQU9DLGdCQUFQLE1BQTZCLHFDQUE3Qjs7QUFFQTtBQUNBLFNBQVNDLFdBQVQsRUFBc0JDLEtBQXRCLFFBQW1DLGlCQUFuQzs7QUFFQSxJQUFNQyxpQkFBaUIsU0FBakJBLGNBQWlCO0FBQUEsMkJBQStCQyxXQUEvQixZQUFpREYsTUFBTUcsV0FBdkQ7QUFBQSxDQUF2QjtBQUNBLElBQU1DLGVBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQVUsT0FBT0MsTUFBUCxLQUFrQixRQUFsQixHQUE2QkEsTUFBN0IsR0FBeUNBLE1BQXpDLE9BQVY7QUFBQSxDQUFyQjtBQUNBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0I7QUFBQSwyQkFBeUJGLGFBQWFHLE1BQU1DLFNBQW5CLENBQXpCLGdCQUFpRVIsTUFBTUcsV0FBdkU7QUFBQSxDQUF4Qjs7QUFFQSxJQUFNTSxVQUFVYixPQUFPYyxHQUFqQixrQkFFTTtBQUFBLFNBQVNKLGdCQUFnQkMsS0FBaEIsQ0FBVDtBQUFBLENBRk4sRUFHYVAsTUFBTUcsV0FIbkIsRUFJV0gsTUFBTUcsV0FKakIsQ0FBTjs7QUFPQSxJQUFNUSxjQUFjZixPQUFPYyxHQUFyQixtQkFDV1YsTUFBTUcsV0FEakIsRUFHZ0Q7QUFBQSxTQUFTRixlQUFlTSxNQUFNSyxFQUFyQixDQUFUO0FBQUEsQ0FIaEQsRUFNNEM7QUFBQSxTQUFTWCxlQUFlTSxNQUFNTSxFQUFyQixDQUFUO0FBQUEsQ0FONUMsRUFTc0U7QUFBQSxTQUFTWixlQUFlTSxNQUFNTyxFQUFyQixDQUFUO0FBQUEsQ0FUdEUsRUFZMkM7QUFBQSxTQUFTYixlQUFlTSxNQUFNUSxFQUFyQixDQUFUO0FBQUEsQ0FaM0MsRUFlc0U7QUFBQSxTQUFTZCxlQUFlTSxNQUFNTSxFQUFyQixDQUFUO0FBQUEsQ0FmdEUsQ0FBTjs7SUFrQk1HLGE7Ozs7Ozs7OzswQkFDSkMsTSxxQkFBUztBQUFBOztBQUFBLGlCQUlILEtBQUtWLEtBSkY7QUFBQSxRQUVMVyxRQUZLLFVBRUxBLFFBRks7QUFBQSxRQUVLQyxxQkFGTCxVQUVLQSxxQkFGTDtBQUFBLFFBRTRCQyxnQkFGNUIsVUFFNEJBLGdCQUY1QjtBQUFBLFFBRThDQyxpQkFGOUMsVUFFOENBLGlCQUY5QztBQUFBLFFBRWlFQyxnQkFGakUsVUFFaUVBLGdCQUZqRTtBQUFBLFFBR0xkLFNBSEssVUFHTEEsU0FISzs7QUFLUCxXQUNFO0FBQUMsc0JBQUQ7QUFBQTtBQUNFO0FBQUMsZUFBRDtBQUFBLFVBQVMsV0FBY1QsV0FBZCxxQkFBVCxFQUFzRCxXQUFXUyxTQUFqRTtBQUNFO0FBQUMsc0JBQUQ7QUFBQTtBQUNHZCxnQkFBTTZCLFFBQU4sQ0FBZUMsR0FBZixDQUFtQk4sUUFBbkIsRUFBNkIsVUFBQ08sS0FBRCxFQUFRQyxDQUFSO0FBQUEsbUJBQzVCO0FBQUMseUJBQUQ7QUFBQTtBQUNFLG9CQUFJUCxxQkFETjtBQUVFLG9CQUFJQyxnQkFGTjtBQUdFLG9CQUFJQyxpQkFITjtBQUlFLG9CQUFJQztBQUpOO0FBTUc1QixvQkFBTWlDLFlBQU4sQ0FBbUJGLEtBQW5CLEVBQTBCO0FBQ3pCRyx3QkFBUSxPQUFLQSxNQURZO0FBRXpCQyw0QkFBWUgsTUFBTVIsU0FBU1ksTUFBVCxHQUFrQixDQUF4QixJQUE2QlosU0FBU1ksTUFBVCxLQUFvQkM7QUFGcEMsZUFBMUI7QUFOSCxhQUQ0QjtBQUFBLFdBQTdCO0FBREg7QUFERjtBQURGLEtBREY7QUFxQkQsRzs7O0VBM0J5QnJDLE1BQU1zQyxhOztBQXNDbENoQixjQUFjaUIsWUFBZCxHQUE2QjtBQUMzQmYsWUFBVWEsU0FEaUI7QUFFM0JaLHlCQUF1QixDQUZJO0FBRzNCQyxvQkFBa0IsQ0FIUztBQUkzQkMscUJBQW1CLENBSlE7QUFLM0JDLG9CQUFrQixDQUxTO0FBTTNCZCxhQUFXO0FBTmdCLENBQTdCOztBQVNBLGVBQWVRLGFBQWYiLCJmaWxlIjoibGF5b3V0LW1hc29ucnkuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uZnVzaW5nLWFycm93ICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3RNYXNvbnJ5IGZyb20gJ3JlYWN0LW1hc29ucnktY29tcG9uZW50JztcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4LCB0aGVtZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IGdldENvbHVtbldpZHRoID0gY29sdW1uQ291bnQgPT4gYGNhbGMoKDEwMCUgLyAke2NvbHVtbkNvdW50fSkgLSAke3RoZW1lLmd1dHRlcldpZHRofSlgO1xuY29uc3QgZ2V0VG9wT2Zmc2V0ID0gb2Zmc2V0ID0+IHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnID8gb2Zmc2V0IDogYCR7b2Zmc2V0fXB4YDtcbmNvbnN0IGNhbGN1bGF0ZUhlaWdodCA9IHByb3BzID0+IGBjYWxjKDEwMHZoIC0gJHtnZXRUb3BPZmZzZXQocHJvcHMudG9wT2Zmc2V0KX0gLSAoMyAqICR7dGhlbWUuZ3V0dGVyV2lkdGh9KSlgO1xuXG5jb25zdCBNYXNvbnJ5ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6MTAwdnc7ICAgIFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gY2FsY3VsYXRlSGVpZ2h0KHByb3BzKX07XG4gIHBhZGRpbmctcmlnaHQ6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBwYWRkaW5nLXRvcDogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG5gO1xuXG5jb25zdCBNYXNvbnJ5VGlsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgLyogU21hbGwgb25seSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOS45Mzc1ZW0pIHsgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0Q29sdW1uV2lkdGgocHJvcHMuc20pfTsgfVxuICBcbiAgLyogTWVkaXVtIGFuZCB1cCAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSAgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5sZyl9OyB9XG4gIFxuICAvKiBNZWRpdW0gb25seSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSBhbmQgKG1heC13aWR0aDogNjMuOTM3NWVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLm1kKX07IH1cbiAgXG4gIC8qIExhcmdlIGFuZCB1cCAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLnhsKX07IH1cbiAgXG4gIC8qIExhcmdlIG9ubHkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkgYW5kIChtYXgtd2lkdGg6IDc0LjkzNzVlbSkgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5sZyl9OyB9XG5gO1xuXG5jbGFzcyBMYXlvdXRNYXNvbnJ5IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbiwgY29sdW1uQ291bnRFeHRyYUxhcmdlLCBjb2x1bW5Db3VudExhcmdlLCBjb2x1bW5Db3VudE1lZGl1bSwgY29sdW1uQ291bnRTbWFsbCxcbiAgICAgIHRvcE9mZnNldCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFBlcmZlY3RTY3JvbGxiYXI+XG4gICAgICAgIDxNYXNvbnJ5IGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X21hc29ucnlfd3JhcHBlcmB9IHRvcE9mZnNldD17dG9wT2Zmc2V0fT5cbiAgICAgICAgICA8UmVhY3RNYXNvbnJ5PlxuICAgICAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxNYXNvbnJ5VGlsZVxuICAgICAgICAgICAgICAgIHhsPXtjb2x1bW5Db3VudEV4dHJhTGFyZ2V9XG4gICAgICAgICAgICAgICAgbGc9e2NvbHVtbkNvdW50TGFyZ2V9XG4gICAgICAgICAgICAgICAgbWQ9e2NvbHVtbkNvdW50TWVkaXVtfVxuICAgICAgICAgICAgICAgIHNtPXtjb2x1bW5Db3VudFNtYWxsfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICAgICAgcGFyZW50OiB0aGlzLnBhcmVudCxcbiAgICAgICAgICAgICAgICAgIGlzTGFzdEl0ZW06IGkgPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEgfHwgY2hpbGRyZW4ubGVuZ3RoID09PSB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvTWFzb25yeVRpbGU+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1JlYWN0TWFzb25yeT5cbiAgICAgICAgPC9NYXNvbnJ5PlxuICAgICAgPC9QZXJmZWN0U2Nyb2xsYmFyPlxuICAgICk7XG4gIH1cbn1cblxuTGF5b3V0TWFzb25yeS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY29sdW1uQ291bnRFeHRyYUxhcmdlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGNvbHVtbkNvdW50TGFyZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY29sdW1uQ291bnRNZWRpdW06IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY29sdW1uQ291bnRTbWFsbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB0b3BPZmZzZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbn07XG5MYXlvdXRNYXNvbnJ5LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgY29sdW1uQ291bnRFeHRyYUxhcmdlOiA0LFxuICBjb2x1bW5Db3VudExhcmdlOiAzLFxuICBjb2x1bW5Db3VudE1lZGl1bTogMixcbiAgY29sdW1uQ291bnRTbWFsbDogMSxcbiAgdG9wT2Zmc2V0OiA0MCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dE1hc29ucnk7XG4iXX0=