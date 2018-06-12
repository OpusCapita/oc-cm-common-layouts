var _this = this;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}'], ['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/* eslint-disable no-confusing-arrow */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

// App imports
import { classPrefix, theme } from '../../constants';

var getTopOffset = function getTopOffset(offset) {
  return typeof offset === 'string' ? offset : offset + 'px';
};
var calculateHeight = function calculateHeight(props) {
  if (!props.stretch) return 'auto';
  return 'calc(100vh - ' + getTopOffset(props.topOffset) + ' - (2 * ' + theme.gutterWidth + '))';
};

var Row = styled.div(_templateObject, theme.gutterWidth, theme.halfGutterWidth, function (props) {
  return calculateHeight(props);
});

var ContentRow = function ContentRow(_ref) {
  var children = _ref.children,
      topOffset = _ref.topOffset,
      stretch = _ref.stretch;
  return React.createElement(
    PerfectScrollbar,
    null,
    React.createElement(
      Row,
      {
        topOffset: topOffset,
        stretch: stretch,
        className: classPrefix + '_row',
        innerRef: function innerRef(element) {
          _this.colContainer = element;
        }
      },
      React.Children.map(children, function (child, i) {
        // If it's a regular DOM node
        if (typeof child.type === 'string') return child;

        // If it's a React component (in most cases Content.Column)
        return React.cloneElement(child, {
          parent: _this.colContainer,
          isLastItem: i === children.length - 1 && children.length !== 1,
          columnCount: children.length
        });
      })
    )
  );
};

ContentRow.defaultProps = {
  children: undefined,
  topOffset: 40,
  stretch: false
};

export default ContentRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsIlBlcmZlY3RTY3JvbGxiYXIiLCJjbGFzc1ByZWZpeCIsInRoZW1lIiwiZ2V0VG9wT2Zmc2V0Iiwib2Zmc2V0IiwiY2FsY3VsYXRlSGVpZ2h0IiwicHJvcHMiLCJzdHJldGNoIiwidG9wT2Zmc2V0IiwiZ3V0dGVyV2lkdGgiLCJSb3ciLCJkaXYiLCJoYWxmR3V0dGVyV2lkdGgiLCJDb250ZW50Um93IiwiY2hpbGRyZW4iLCJlbGVtZW50IiwiY29sQ29udGFpbmVyIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImkiLCJ0eXBlIiwiY2xvbmVFbGVtZW50IiwicGFyZW50IiwiaXNMYXN0SXRlbSIsImxlbmd0aCIsImNvbHVtbkNvdW50IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIscUNBQTdCOztBQUVBO0FBQ0EsU0FBU0MsV0FBVCxFQUFzQkMsS0FBdEIsUUFBbUMsaUJBQW5DOztBQUVBLElBQU1DLGVBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQVUsT0FBT0MsTUFBUCxLQUFrQixRQUFsQixHQUE2QkEsTUFBN0IsR0FBeUNBLE1BQXpDLE9BQVY7QUFBQSxDQUFyQjtBQUNBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLE1BQUksQ0FBQ0EsTUFBTUMsT0FBWCxFQUFvQixPQUFPLE1BQVA7QUFDcEIsMkJBQXVCSixhQUFhRyxNQUFNRSxTQUFuQixDQUF2QixnQkFBK0ROLE1BQU1PLFdBQXJFO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNQyxNQUFNWCxPQUFPWSxHQUFiLGtCQUNNVCxNQUFNTyxXQURaLEVBQzJCUCxNQUFNVSxlQURqQyxFQUlNO0FBQUEsU0FBU1AsZ0JBQWdCQyxLQUFoQixDQUFUO0FBQUEsQ0FKTixDQUFOOztBQU9BLElBQU1PLGFBQWEsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFOLFNBQWIsUUFBYUEsU0FBYjtBQUFBLE1BQXdCRCxPQUF4QixRQUF3QkEsT0FBeEI7QUFBQSxTQUNqQjtBQUFDLG9CQUFEO0FBQUE7QUFDRTtBQUFDLFNBQUQ7QUFBQTtBQUNFLG1CQUFXQyxTQURiO0FBRUUsaUJBQVNELE9BRlg7QUFHRSxtQkFBY04sV0FBZCxTQUhGO0FBSUUsa0JBQVUsa0JBQUNjLE9BQUQsRUFBYTtBQUNyQixnQkFBS0MsWUFBTCxHQUFvQkQsT0FBcEI7QUFDRDtBQU5IO0FBUUdsQixZQUFNb0IsUUFBTixDQUFlQyxHQUFmLENBQW1CSixRQUFuQixFQUE2QixVQUFDSyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUMxQztBQUNBLFlBQUksT0FBT0QsTUFBTUUsSUFBYixLQUFzQixRQUExQixFQUFvQyxPQUFPRixLQUFQOztBQUVwQztBQUNBLGVBQU90QixNQUFNeUIsWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFDL0JJLGtCQUFRLE1BQUtQLFlBRGtCO0FBRS9CUSxzQkFBWUosTUFBTU4sU0FBU1csTUFBVCxHQUFrQixDQUF4QixJQUE2QlgsU0FBU1csTUFBVCxLQUFvQixDQUY5QjtBQUcvQkMsdUJBQWFaLFNBQVNXO0FBSFMsU0FBMUIsQ0FBUDtBQUtELE9BVkE7QUFSSDtBQURGLEdBRGlCO0FBQUEsQ0FBbkI7O0FBK0JBWixXQUFXYyxZQUFYLEdBQTBCO0FBQ3hCYixZQUFVYyxTQURjO0FBRXhCcEIsYUFBVyxFQUZhO0FBR3hCRCxXQUFTO0FBSGUsQ0FBMUI7O0FBTUEsZUFBZU0sVUFBZiIsImZpbGUiOiJjb250ZW50LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25mdXNpbmctYXJyb3cgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4LCB0aGVtZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IGdldFRvcE9mZnNldCA9IG9mZnNldCA9PiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJyA/IG9mZnNldCA6IGAke29mZnNldH1weGA7XG5jb25zdCBjYWxjdWxhdGVIZWlnaHQgPSAocHJvcHMpID0+IHtcbiAgaWYgKCFwcm9wcy5zdHJldGNoKSByZXR1cm4gJ2F1dG8nO1xuICByZXR1cm4gYGNhbGMoMTAwdmggLSAke2dldFRvcE9mZnNldChwcm9wcy50b3BPZmZzZXQpfSAtICgyICogJHt0aGVtZS5ndXR0ZXJXaWR0aH0pKWA7XG59O1xuXG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46ICR7dGhlbWUuZ3V0dGVyV2lkdGh9ICR7dGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gY2FsY3VsYXRlSGVpZ2h0KHByb3BzKX07XG59fWA7XG5cbmNvbnN0IENvbnRlbnRSb3cgPSAoeyBjaGlsZHJlbiwgdG9wT2Zmc2V0LCBzdHJldGNoIH0pID0+IChcbiAgPFBlcmZlY3RTY3JvbGxiYXI+XG4gICAgPFJvd1xuICAgICAgdG9wT2Zmc2V0PXt0b3BPZmZzZXR9XG4gICAgICBzdHJldGNoPXtzdHJldGNofVxuICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fcm93YH1cbiAgICAgIGlubmVyUmVmPXsoZWxlbWVudCkgPT4ge1xuICAgICAgICB0aGlzLmNvbENvbnRhaW5lciA9IGVsZW1lbnQ7XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4ge1xuICAgICAgICAvLyBJZiBpdCdzIGEgcmVndWxhciBET00gbm9kZVxuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnR5cGUgPT09ICdzdHJpbmcnKSByZXR1cm4gY2hpbGQ7XG5cbiAgICAgICAgLy8gSWYgaXQncyBhIFJlYWN0IGNvbXBvbmVudCAoaW4gbW9zdCBjYXNlcyBDb250ZW50LkNvbHVtbilcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgIHBhcmVudDogdGhpcy5jb2xDb250YWluZXIsXG4gICAgICAgICAgaXNMYXN0SXRlbTogaSA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSAmJiBjaGlsZHJlbi5sZW5ndGggIT09IDEsXG4gICAgICAgICAgY29sdW1uQ291bnQ6IGNoaWxkcmVuLmxlbmd0aCxcbiAgICAgICAgfSk7XG4gICAgICB9KX1cbiAgICA8L1Jvdz5cbiAgPC9QZXJmZWN0U2Nyb2xsYmFyPlxuKTtcblxuQ29udGVudFJvdy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgdG9wT2Zmc2V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIHN0cmV0Y2g6IFByb3BUeXBlcy5ib29sLFxufTtcblxuQ29udGVudFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIHRvcE9mZnNldDogNDAsXG4gIHN0cmV0Y2g6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFJvdztcbiJdfQ==