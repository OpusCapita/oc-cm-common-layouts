var _this = this;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin: ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}'], ['\n  margin: ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}']);

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

var Row = styled.div(_templateObject, theme.gutterWidth, function (props) {
  return calculateHeight(props);
});

var LayoutRow = function LayoutRow(_ref) {
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
        return React.cloneElement(child, {
          parent: _this.colContainer,
          isLastItem: i === children.length - 1 && children.length !== 1,
          columnCount: children.length
        });
      })
    )
  );
};

LayoutRow.defaultProps = {
  children: undefined,
  topOffset: 40,
  stretch: false
};

export default LayoutRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvbGF5b3V0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiUGVyZmVjdFNjcm9sbGJhciIsImNsYXNzUHJlZml4IiwidGhlbWUiLCJnZXRUb3BPZmZzZXQiLCJvZmZzZXQiLCJjYWxjdWxhdGVIZWlnaHQiLCJwcm9wcyIsInN0cmV0Y2giLCJ0b3BPZmZzZXQiLCJndXR0ZXJXaWR0aCIsIlJvdyIsImRpdiIsIkxheW91dFJvdyIsImNoaWxkcmVuIiwiZWxlbWVudCIsImNvbENvbnRhaW5lciIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpIiwiY2xvbmVFbGVtZW50IiwicGFyZW50IiwiaXNMYXN0SXRlbSIsImxlbmd0aCIsImNvbHVtbkNvdW50IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIscUNBQTdCOztBQUVBO0FBQ0EsU0FBU0MsV0FBVCxFQUFzQkMsS0FBdEIsUUFBbUMsaUJBQW5DOztBQUVBLElBQU1DLGVBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQVUsT0FBT0MsTUFBUCxLQUFrQixRQUFsQixHQUE2QkEsTUFBN0IsR0FBeUNBLE1BQXpDLE9BQVY7QUFBQSxDQUFyQjtBQUNBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLE1BQUksQ0FBQ0EsTUFBTUMsT0FBWCxFQUFvQixPQUFPLE1BQVA7QUFDcEIsMkJBQXVCSixhQUFhRyxNQUFNRSxTQUFuQixDQUF2QixnQkFBK0ROLE1BQU1PLFdBQXJFO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNQyxNQUFNWCxPQUFPWSxHQUFiLGtCQUNNVCxNQUFNTyxXQURaLEVBSU07QUFBQSxTQUFTSixnQkFBZ0JDLEtBQWhCLENBQVQ7QUFBQSxDQUpOLENBQU47O0FBT0EsSUFBTU0sWUFBWSxTQUFaQSxTQUFZO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYUwsU0FBYixRQUFhQSxTQUFiO0FBQUEsTUFBd0JELE9BQXhCLFFBQXdCQSxPQUF4QjtBQUFBLFNBQ2hCO0FBQUMsb0JBQUQ7QUFBQTtBQUNFO0FBQUMsU0FBRDtBQUFBO0FBQ0UsbUJBQVdDLFNBRGI7QUFFRSxpQkFBU0QsT0FGWDtBQUdFLG1CQUFjTixXQUFkLFNBSEY7QUFJRSxrQkFBVSxrQkFBQ2EsT0FBRCxFQUFhO0FBQ3JCLGdCQUFLQyxZQUFMLEdBQW9CRCxPQUFwQjtBQUNEO0FBTkg7QUFRR2pCLFlBQU1tQixRQUFOLENBQWVDLEdBQWYsQ0FBbUJKLFFBQW5CLEVBQTZCLFVBQUNLLEtBQUQsRUFBUUMsQ0FBUjtBQUFBLGVBQWN0QixNQUFNdUIsWUFBTixDQUFtQkYsS0FBbkIsRUFBMEI7QUFDcEVHLGtCQUFRLE1BQUtOLFlBRHVEO0FBRXBFTyxzQkFBWUgsTUFBTU4sU0FBU1UsTUFBVCxHQUFrQixDQUF4QixJQUE2QlYsU0FBU1UsTUFBVCxLQUFvQixDQUZPO0FBR3BFQyx1QkFBYVgsU0FBU1U7QUFIOEMsU0FBMUIsQ0FBZDtBQUFBLE9BQTdCO0FBUkg7QUFERixHQURnQjtBQUFBLENBQWxCOztBQXlCQVgsVUFBVWEsWUFBVixHQUF5QjtBQUN2QlosWUFBVWEsU0FEYTtBQUV2QmxCLGFBQVcsRUFGWTtBQUd2QkQsV0FBUztBQUhjLENBQXpCOztBQU1BLGVBQWVLLFNBQWYiLCJmaWxlIjoibGF5b3V0LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25mdXNpbmctYXJyb3cgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ0BvcHVzY2FwaXRhL3JlYWN0LXBlcmZlY3Qtc2Nyb2xsYmFyJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4LCB0aGVtZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IGdldFRvcE9mZnNldCA9IG9mZnNldCA9PiB0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJyA/IG9mZnNldCA6IGAke29mZnNldH1weGA7XG5jb25zdCBjYWxjdWxhdGVIZWlnaHQgPSAocHJvcHMpID0+IHtcbiAgaWYgKCFwcm9wcy5zdHJldGNoKSByZXR1cm4gJ2F1dG8nO1xuICByZXR1cm4gYGNhbGMoMTAwdmggLSAke2dldFRvcE9mZnNldChwcm9wcy50b3BPZmZzZXQpfSAtICgyICogJHt0aGVtZS5ndXR0ZXJXaWR0aH0pKWA7XG59O1xuXG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBjYWxjdWxhdGVIZWlnaHQocHJvcHMpfTtcbn19YDtcblxuY29uc3QgTGF5b3V0Um93ID0gKHsgY2hpbGRyZW4sIHRvcE9mZnNldCwgc3RyZXRjaCB9KSA9PiAoXG4gIDxQZXJmZWN0U2Nyb2xsYmFyPlxuICAgIDxSb3dcbiAgICAgIHRvcE9mZnNldD17dG9wT2Zmc2V0fVxuICAgICAgc3RyZXRjaD17c3RyZXRjaH1cbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X3Jvd2B9XG4gICAgICBpbm5lclJlZj17KGVsZW1lbnQpID0+IHtcbiAgICAgICAgdGhpcy5jb2xDb250YWluZXIgPSBlbGVtZW50O1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBwYXJlbnQ6IHRoaXMuY29sQ29udGFpbmVyLFxuICAgICAgICBpc0xhc3RJdGVtOiBpID09PSBjaGlsZHJlbi5sZW5ndGggLSAxICYmIGNoaWxkcmVuLmxlbmd0aCAhPT0gMSxcbiAgICAgICAgY29sdW1uQ291bnQ6IGNoaWxkcmVuLmxlbmd0aCxcbiAgICAgIH0pKX1cbiAgICA8L1Jvdz5cbiAgPC9QZXJmZWN0U2Nyb2xsYmFyPlxuKTtcblxuTGF5b3V0Um93LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICB0b3BPZmZzZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgc3RyZXRjaDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5MYXlvdXRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICB0b3BPZmZzZXQ6IDQwLFxuICBzdHJldGNoOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFJvdztcbiJdfQ==