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
  topOffset: 40,
  id: '',
  className: ''
};

export default ContentMasonry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L21hc29ucnkvY29udGVudC1tYXNvbnJ5LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJSZWFjdE1hc29ucnkiLCJQZXJmZWN0U2Nyb2xsYmFyIiwiY2xhc3NQcmVmaXgiLCJ0aGVtZSIsImdldENvbHVtbldpZHRoIiwiY29sdW1uQ291bnQiLCJndXR0ZXJXaWR0aCIsImdldFRvcE9mZnNldCIsIm9mZnNldCIsImNhbGN1bGF0ZUhlaWdodCIsInByb3BzIiwidG9wT2Zmc2V0IiwiTWFzb25yeSIsImRpdiIsIk1hc29ucnlUaWxlIiwic20iLCJsZyIsIm1kIiwieGwiLCJDb250ZW50TWFzb25yeSIsInJlbmRlciIsImNoaWxkcmVuIiwiY29sdW1uQ291bnRFeHRyYUxhcmdlIiwiY29sdW1uQ291bnRMYXJnZSIsImNvbHVtbkNvdW50TWVkaXVtIiwiY29sdW1uQ291bnRTbWFsbCIsImNsYXNzTmFtZSIsImlkIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImkiLCJjbG9uZUVsZW1lbnQiLCJwYXJlbnQiLCJpc0xhc3RJdGVtIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiUHVyZUNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsWUFBUCxNQUF5Qix5QkFBekI7QUFDQSxPQUFPQyxnQkFBUCxNQUE2QixxQ0FBN0I7O0FBRUE7QUFDQSxTQUFTQyxXQUFULEVBQXNCQyxLQUF0QixRQUFtQyxpQkFBbkM7O0FBRUEsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLDJCQUErQkMsV0FBL0IsWUFBaURGLE1BQU1HLFdBQXZEO0FBQUEsQ0FBdkI7QUFDQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFXLE9BQU9DLE1BQVAsS0FBa0IsUUFBbEIsR0FBNkJBLE1BQTdCLEdBQXlDQSxNQUF6QyxPQUFYO0FBQUEsQ0FBckI7QUFDQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCO0FBQUEsMkJBQXlCRixhQUFhRyxNQUFNQyxTQUFuQixDQUF6QixnQkFBaUVSLE1BQU1HLFdBQXZFO0FBQUEsQ0FBeEI7O0FBRUEsSUFBTU0sVUFBVWIsT0FBT2MsR0FBakIsa0JBRU07QUFBQSxTQUFTSixnQkFBZ0JDLEtBQWhCLENBQVQ7QUFBQSxDQUZOLEVBR2FQLE1BQU1HLFdBSG5CLEVBSVdILE1BQU1HLFdBSmpCLENBQU47O0FBT0EsSUFBTVEsY0FBY2YsT0FBT2MsR0FBckIsbUJBQ1dWLE1BQU1HLFdBRGpCLEVBR2dEO0FBQUEsU0FBU0YsZUFBZU0sTUFBTUssRUFBckIsQ0FBVDtBQUFBLENBSGhELEVBTTRDO0FBQUEsU0FBU1gsZUFBZU0sTUFBTU0sRUFBckIsQ0FBVDtBQUFBLENBTjVDLEVBU3NFO0FBQUEsU0FBU1osZUFBZU0sTUFBTU8sRUFBckIsQ0FBVDtBQUFBLENBVHRFLEVBWTJDO0FBQUEsU0FBU2IsZUFBZU0sTUFBTVEsRUFBckIsQ0FBVDtBQUFBLENBWjNDLEVBZXNFO0FBQUEsU0FBU2QsZUFBZU0sTUFBTU0sRUFBckIsQ0FBVDtBQUFBLENBZnRFLENBQU47O0lBa0JNRyxjOzs7Ozs7Ozs7MkJBQ0pDLE0scUJBQVM7QUFBQTs7QUFBQSxpQkFNSCxLQUFLVixLQU5GO0FBQUEsUUFFTFcsUUFGSyxVQUVMQSxRQUZLO0FBQUEsUUFFS0MscUJBRkwsVUFFS0EscUJBRkw7QUFBQSxRQUU0QkMsZ0JBRjVCLFVBRTRCQSxnQkFGNUI7QUFBQSxRQUU4Q0MsaUJBRjlDLFVBRThDQSxpQkFGOUM7QUFBQSxRQUVpRUMsZ0JBRmpFLFVBRWlFQSxnQkFGakU7QUFBQSxRQUdMZCxTQUhLLFVBR0xBLFNBSEs7QUFBQSxRQUlMZSxTQUpLLFVBSUxBLFNBSks7QUFBQSxRQUtMQyxFQUxLLFVBS0xBLEVBTEs7O0FBT1AsV0FDRTtBQUFDLHNCQUFEO0FBQUE7QUFDRTtBQUFDLGVBQUQ7QUFBQTtBQUNFLHFCQUFjekIsV0FBZCx5QkFBNkN3QixTQUQvQztBQUVFLHFCQUFXZixTQUZiO0FBR0UsY0FBSWdCO0FBSE47QUFLRTtBQUFDLHNCQUFEO0FBQUE7QUFDRzlCLGdCQUFNK0IsUUFBTixDQUFlQyxHQUFmLENBQW1CUixRQUFuQixFQUE2QixVQUFDUyxLQUFELEVBQVFDLENBQVI7QUFBQSxtQkFDNUI7QUFBQyx5QkFBRDtBQUFBO0FBQ0Usb0JBQUlULHFCQUROO0FBRUUsb0JBQUlDLGdCQUZOO0FBR0Usb0JBQUlDLGlCQUhOO0FBSUUsb0JBQUlDO0FBSk47QUFNRzVCLG9CQUFNbUMsWUFBTixDQUFtQkYsS0FBbkIsRUFBMEI7QUFDekJHLHdCQUFRLE9BQUtBLE1BRFk7QUFFekJDLDRCQUFZSCxNQUFNVixTQUFTYyxNQUFULEdBQWtCLENBQXhCLElBQTZCZCxTQUFTYyxNQUFULEtBQW9CQztBQUZwQyxlQUExQjtBQU5ILGFBRDRCO0FBQUEsV0FBN0I7QUFESDtBQUxGO0FBREYsS0FERjtBQXlCRCxHOzs7RUFqQzBCdkMsTUFBTXdDLGE7O0FBOENuQ2xCLGVBQWVtQixZQUFmLEdBQThCO0FBQzVCakIsWUFBVWUsU0FEa0I7QUFFNUJkLHlCQUF1QixDQUZLO0FBRzVCQyxvQkFBa0IsQ0FIVTtBQUk1QkMscUJBQW1CLENBSlM7QUFLNUJDLG9CQUFrQixDQUxVO0FBTTVCZCxhQUFXLEVBTmlCO0FBTzVCZ0IsTUFBSSxFQVB3QjtBQVE1QkQsYUFBVztBQVJpQixDQUE5Qjs7QUFXQSxlQUFlUCxjQUFmIiwiZmlsZSI6ImNvbnRlbnQtbWFzb25yeS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0TWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCc7XG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBnZXRDb2x1bW5XaWR0aCA9IGNvbHVtbkNvdW50ID0+IGBjYWxjKCgxMDAlIC8gJHtjb2x1bW5Db3VudH0pIC0gJHt0aGVtZS5ndXR0ZXJXaWR0aH0pYDtcbmNvbnN0IGdldFRvcE9mZnNldCA9IG9mZnNldCA9PiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycgPyBvZmZzZXQgOiBgJHtvZmZzZXR9cHhgKTtcbmNvbnN0IGNhbGN1bGF0ZUhlaWdodCA9IHByb3BzID0+IGBjYWxjKDEwMHZoIC0gJHtnZXRUb3BPZmZzZXQocHJvcHMudG9wT2Zmc2V0KX0gLSAoMyAqICR7dGhlbWUuZ3V0dGVyV2lkdGh9KSlgO1xuXG5jb25zdCBNYXNvbnJ5ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6MTAwdnc7ICAgIFxuICBoZWlnaHQ6ICR7cHJvcHMgPT4gY2FsY3VsYXRlSGVpZ2h0KHByb3BzKX07XG4gIHBhZGRpbmctcmlnaHQ6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBwYWRkaW5nLXRvcDogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG5gO1xuXG5jb25zdCBNYXNvbnJ5VGlsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgLyogU21hbGwgb25seSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOS45Mzc1ZW0pIHsgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0Q29sdW1uV2lkdGgocHJvcHMuc20pfTsgfVxuICBcbiAgLyogTWVkaXVtIGFuZCB1cCAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSAgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5sZyl9OyB9XG4gIFxuICAvKiBNZWRpdW0gb25seSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSBhbmQgKG1heC13aWR0aDogNjMuOTM3NWVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLm1kKX07IH1cbiAgXG4gIC8qIExhcmdlIGFuZCB1cCAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSB7IHdpZHRoOiAke3Byb3BzID0+IGdldENvbHVtbldpZHRoKHByb3BzLnhsKX07IH1cbiAgXG4gIC8qIExhcmdlIG9ubHkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkgYW5kIChtYXgtd2lkdGg6IDc0LjkzNzVlbSkgeyB3aWR0aDogJHtwcm9wcyA9PiBnZXRDb2x1bW5XaWR0aChwcm9wcy5sZyl9OyB9XG5gO1xuXG5jbGFzcyBDb250ZW50TWFzb25yeSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sIGNvbHVtbkNvdW50RXh0cmFMYXJnZSwgY29sdW1uQ291bnRMYXJnZSwgY29sdW1uQ291bnRNZWRpdW0sIGNvbHVtbkNvdW50U21hbGwsXG4gICAgICB0b3BPZmZzZXQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBpZCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPFBlcmZlY3RTY3JvbGxiYXI+XG4gICAgICAgIDxNYXNvbnJ5XG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fbWFzb25yeV93cmFwcGVyICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgICAgdG9wT2Zmc2V0PXt0b3BPZmZzZXR9XG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICA+XG4gICAgICAgICAgPFJlYWN0TWFzb25yeT5cbiAgICAgICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4gKFxuICAgICAgICAgICAgICA8TWFzb25yeVRpbGVcbiAgICAgICAgICAgICAgICB4bD17Y29sdW1uQ291bnRFeHRyYUxhcmdlfVxuICAgICAgICAgICAgICAgIGxnPXtjb2x1bW5Db3VudExhcmdlfVxuICAgICAgICAgICAgICAgIG1kPXtjb2x1bW5Db3VudE1lZGl1bX1cbiAgICAgICAgICAgICAgICBzbT17Y29sdW1uQ291bnRTbWFsbH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgICAgIHBhcmVudDogdGhpcy5wYXJlbnQsXG4gICAgICAgICAgICAgICAgICBpc0xhc3RJdGVtOiBpID09PSBjaGlsZHJlbi5sZW5ndGggLSAxIHx8IGNoaWxkcmVuLmxlbmd0aCA9PT0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L01hc29ucnlUaWxlPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9SZWFjdE1hc29ucnk+XG4gICAgICAgIDwvTWFzb25yeT5cbiAgICAgIDwvUGVyZmVjdFNjcm9sbGJhcj5cbiAgICApO1xuICB9XG59XG5cbkNvbnRlbnRNYXNvbnJ5LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBjb2x1bW5Db3VudEV4dHJhTGFyZ2U6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgY29sdW1uQ291bnRMYXJnZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjb2x1bW5Db3VudE1lZGl1bTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBjb2x1bW5Db3VudFNtYWxsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIHRvcE9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbkNvbnRlbnRNYXNvbnJ5LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgY29sdW1uQ291bnRFeHRyYUxhcmdlOiA0LFxuICBjb2x1bW5Db3VudExhcmdlOiAzLFxuICBjb2x1bW5Db3VudE1lZGl1bTogMixcbiAgY29sdW1uQ291bnRTbWFsbDogMSxcbiAgdG9wT2Zmc2V0OiA0MCxcbiAgaWQ6ICcnLFxuICBjbGFzc05hbWU6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudE1hc29ucnk7XG4iXX0=