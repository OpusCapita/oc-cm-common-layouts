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

var ContentMasonry = function (_React$PureComponent) {
  _inherits(ContentMasonry, _React$PureComponent);

  function ContentMasonry() {
    _classCallCheck(this, ContentMasonry);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  ContentMasonry.prototype.render = function render() {
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

  return ContentMasonry;
}(React.PureComponent);

ContentMasonry.defaultProps = {
  children: undefined,
  columnCountExtraLarge: 4,
  columnCountLarge: 3,
  columnCountMedium: 2,
  columnCountSmall: 1,
  topOffset: 40
};

export default ContentMasonry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L21hc29ucnkvY29udGVudC1tYXNvbnJ5LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJSZWFjdE1hc29ucnkiLCJQZXJmZWN0U2Nyb2xsYmFyIiwiY2xhc3NQcmVmaXgiLCJ0aGVtZSIsImdldENvbHVtbldpZHRoIiwiY29sdW1uQ291bnQiLCJndXR0ZXJXaWR0aCIsImdldFRvcE9mZnNldCIsIm9mZnNldCIsImNhbGN1bGF0ZUhlaWdodCIsInByb3BzIiwidG9wT2Zmc2V0IiwiTWFzb25yeSIsImRpdiIsIk1hc29ucnlUaWxlIiwic20iLCJsZyIsIm1kIiwieGwiLCJDb250ZW50TWFzb25yeSIsInJlbmRlciIsImNoaWxkcmVuIiwiY29sdW1uQ291bnRFeHRyYUxhcmdlIiwiY29sdW1uQ291bnRMYXJnZSIsImNvbHVtbkNvdW50TWVkaXVtIiwiY29sdW1uQ291bnRTbWFsbCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpIiwiY2xvbmVFbGVtZW50IiwicGFyZW50IiwiaXNMYXN0SXRlbSIsImxlbmd0aCIsInVuZGVmaW5lZCIsIlB1cmVDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIseUJBQXpCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIscUNBQTdCOztBQUVBO0FBQ0EsU0FBU0MsV0FBVCxFQUFzQkMsS0FBdEIsUUFBbUMsaUJBQW5DOztBQUVBLElBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUI7QUFBQSwyQkFBK0JDLFdBQS9CLFlBQWlERixNQUFNRyxXQUF2RDtBQUFBLENBQXZCO0FBQ0EsSUFBTUMsZUFBZSxTQUFmQSxZQUFlO0FBQUEsU0FBVSxPQUFPQyxNQUFQLEtBQWtCLFFBQWxCLEdBQTZCQSxNQUE3QixHQUF5Q0EsTUFBekMsT0FBVjtBQUFBLENBQXJCO0FBQ0EsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLDJCQUF5QkYsYUFBYUcsTUFBTUMsU0FBbkIsQ0FBekIsZ0JBQWlFUixNQUFNRyxXQUF2RTtBQUFBLENBQXhCOztBQUVBLElBQU1NLFVBQVViLE9BQU9jLEdBQWpCLGtCQUVNO0FBQUEsU0FBU0osZ0JBQWdCQyxLQUFoQixDQUFUO0FBQUEsQ0FGTixFQUdhUCxNQUFNRyxXQUhuQixFQUlXSCxNQUFNRyxXQUpqQixDQUFOOztBQU9BLElBQU1RLGNBQWNmLE9BQU9jLEdBQXJCLG1CQUNXVixNQUFNRyxXQURqQixFQUdnRDtBQUFBLFNBQVNGLGVBQWVNLE1BQU1LLEVBQXJCLENBQVQ7QUFBQSxDQUhoRCxFQU00QztBQUFBLFNBQVNYLGVBQWVNLE1BQU1NLEVBQXJCLENBQVQ7QUFBQSxDQU41QyxFQVNzRTtBQUFBLFNBQVNaLGVBQWVNLE1BQU1PLEVBQXJCLENBQVQ7QUFBQSxDQVR0RSxFQVkyQztBQUFBLFNBQVNiLGVBQWVNLE1BQU1RLEVBQXJCLENBQVQ7QUFBQSxDQVozQyxFQWVzRTtBQUFBLFNBQVNkLGVBQWVNLE1BQU1NLEVBQXJCLENBQVQ7QUFBQSxDQWZ0RSxDQUFOOztJQWtCTUcsYzs7Ozs7Ozs7OzJCQUNKQyxNLHFCQUFTO0FBQUE7O0FBQUEsaUJBSUgsS0FBS1YsS0FKRjtBQUFBLFFBRUxXLFFBRkssVUFFTEEsUUFGSztBQUFBLFFBRUtDLHFCQUZMLFVBRUtBLHFCQUZMO0FBQUEsUUFFNEJDLGdCQUY1QixVQUU0QkEsZ0JBRjVCO0FBQUEsUUFFOENDLGlCQUY5QyxVQUU4Q0EsaUJBRjlDO0FBQUEsUUFFaUVDLGdCQUZqRSxVQUVpRUEsZ0JBRmpFO0FBQUEsUUFHTGQsU0FISyxVQUdMQSxTQUhLOztBQUtQLFdBQ0U7QUFBQyxzQkFBRDtBQUFBO0FBQ0U7QUFBQyxlQUFEO0FBQUEsVUFBUyxXQUFjVCxXQUFkLHFCQUFULEVBQXNELFdBQVdTLFNBQWpFO0FBQ0U7QUFBQyxzQkFBRDtBQUFBO0FBQ0dkLGdCQUFNNkIsUUFBTixDQUFlQyxHQUFmLENBQW1CTixRQUFuQixFQUE2QixVQUFDTyxLQUFELEVBQVFDLENBQVI7QUFBQSxtQkFDNUI7QUFBQyx5QkFBRDtBQUFBO0FBQ0Usb0JBQUlQLHFCQUROO0FBRUUsb0JBQUlDLGdCQUZOO0FBR0Usb0JBQUlDLGlCQUhOO0FBSUUsb0JBQUlDO0FBSk47QUFNRzVCLG9CQUFNaUMsWUFBTixDQUFtQkYsS0FBbkIsRUFBMEI7QUFDekJHLHdCQUFRLE9BQUtBLE1BRFk7QUFFekJDLDRCQUFZSCxNQUFNUixTQUFTWSxNQUFULEdBQWtCLENBQXhCLElBQTZCWixTQUFTWSxNQUFULEtBQW9CQztBQUZwQyxlQUExQjtBQU5ILGFBRDRCO0FBQUEsV0FBN0I7QUFESDtBQURGO0FBREYsS0FERjtBQXFCRCxHOzs7RUEzQjBCckMsTUFBTXNDLGE7O0FBc0NuQ2hCLGVBQWVpQixZQUFmLEdBQThCO0FBQzVCZixZQUFVYSxTQURrQjtBQUU1QloseUJBQXVCLENBRks7QUFHNUJDLG9CQUFrQixDQUhVO0FBSTVCQyxxQkFBbUIsQ0FKUztBQUs1QkMsb0JBQWtCLENBTFU7QUFNNUJkLGFBQVc7QUFOaUIsQ0FBOUI7O0FBU0EsZUFBZVEsY0FBZiIsImZpbGUiOiJjb250ZW50LW1hc29ucnkuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uZnVzaW5nLWFycm93ICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3RNYXNvbnJ5IGZyb20gJ3JlYWN0LW1hc29ucnktY29tcG9uZW50JztcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4LCB0aGVtZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IGdldENvbHVtbldpZHRoID0gY29sdW1uQ291bnQgPT4gYGNhbGMoKDEwMCUgLyAke2NvbHVtbkNvdW50fSkgLSAke3RoZW1lLmd1dHRlcldpZHRofSlgO1xuY29uc3QgZ2V0VG9wT2Zmc2V0ID0gb2Zmc2V0ID0+IHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnID8gb2Zmc2V0IDogYCR7b2Zmc2V0fXB4YDtcbmNvbnN0IGNhbGN1bGF0ZUhlaWdodCA9IHByb3BzID0+IGBjYWxjKDEwMHZoIC0gJHtnZXRUb3BPZmZzZXQocHJvcHMudG9wT2Zmc2V0KX0gLSAoMyAqICR7dGhlbWUuZ3V0dGVyV2lkdGh9KSlgO1xuXG5jb25zdCBNYXNvbnJ5ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6MTAwdnc7ICAgIFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gY2FsY3VsYXRlSGVpZ2h0KHByb3BzKX07XG4gIHBhZGRpbmctcmlnaHQ6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBwYWRkaW5nLXRvcDogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG5gO1xuXG5jb25zdCBNYXNvbnJ5VGlsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgLyogU21hbGwgb25seSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOS45Mzc1ZW0pIHsgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0Q29sdW1uV2lkdGgocHJvcHMuc20pfTsgfVxuICBcbiAgLyogTWVkaXVtIGFuZCB1cCAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSAgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5sZyl9OyB9XG4gIFxuICAvKiBNZWRpdW0gb25seSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSBhbmQgKG1heC13aWR0aDogNjMuOTM3NWVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLm1kKX07IH1cbiAgXG4gIC8qIExhcmdlIGFuZCB1cCAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLnhsKX07IH1cbiAgXG4gIC8qIExhcmdlIG9ubHkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkgYW5kIChtYXgtd2lkdGg6IDc0LjkzNzVlbSkgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5sZyl9OyB9XG5gO1xuXG5jbGFzcyBDb250ZW50TWFzb25yeSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sIGNvbHVtbkNvdW50RXh0cmFMYXJnZSwgY29sdW1uQ291bnRMYXJnZSwgY29sdW1uQ291bnRNZWRpdW0sIGNvbHVtbkNvdW50U21hbGwsXG4gICAgICB0b3BPZmZzZXQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQZXJmZWN0U2Nyb2xsYmFyPlxuICAgICAgICA8TWFzb25yeSBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9tYXNvbnJ5X3dyYXBwZXJgfSB0b3BPZmZzZXQ9e3RvcE9mZnNldH0+XG4gICAgICAgICAgPFJlYWN0TWFzb25yeT5cbiAgICAgICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8TWFzb25yeVRpbGVcbiAgICAgICAgICAgICAgICB4bD17Y29sdW1uQ291bnRFeHRyYUxhcmdlfVxuICAgICAgICAgICAgICAgIGxnPXtjb2x1bW5Db3VudExhcmdlfVxuICAgICAgICAgICAgICAgIG1kPXtjb2x1bW5Db3VudE1lZGl1bX1cbiAgICAgICAgICAgICAgICBzbT17Y29sdW1uQ291bnRTbWFsbH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICAgICAgICAgICAgICBpc0xhc3RJdGVtOiBpID09PSBjaGlsZHJlbi5sZW5ndGggLSAxIHx8IGNoaWxkcmVuLmxlbmd0aCA9PT0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L01hc29ucnlUaWxlPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9SZWFjdE1hc29ucnk+XG4gICAgICAgIDwvTWFzb25yeT5cbiAgICAgIDwvUGVyZmVjdFNjcm9sbGJhcj5cbiAgICApO1xuICB9XG59XG5cbkNvbnRlbnRNYXNvbnJ5LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjb2x1bW5Db3VudEV4dHJhTGFyZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY29sdW1uQ291bnRMYXJnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjb2x1bW5Db3VudE1lZGl1bTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjb2x1bW5Db3VudFNtYWxsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIHRvcE9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxufTtcbkNvbnRlbnRNYXNvbnJ5LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgY29sdW1uQ291bnRFeHRyYUxhcmdlOiA0LFxuICBjb2x1bW5Db3VudExhcmdlOiAzLFxuICBjb2x1bW5Db3VudE1lZGl1bTogMixcbiAgY29sdW1uQ291bnRTbWFsbDogMSxcbiAgdG9wT2Zmc2V0OiA0MCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRNYXNvbnJ5O1xuIl19