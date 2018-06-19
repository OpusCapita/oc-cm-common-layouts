var _this = this;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}'], ['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsIlBlcmZlY3RTY3JvbGxiYXIiLCJjbGFzc1ByZWZpeCIsInRoZW1lIiwiZ2V0VG9wT2Zmc2V0Iiwib2Zmc2V0IiwiY2FsY3VsYXRlSGVpZ2h0IiwicHJvcHMiLCJzdHJldGNoIiwidG9wT2Zmc2V0IiwiZ3V0dGVyV2lkdGgiLCJSb3ciLCJkaXYiLCJoYWxmR3V0dGVyV2lkdGgiLCJDb250ZW50Um93IiwiY2hpbGRyZW4iLCJlbGVtZW50IiwiY29sQ29udGFpbmVyIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImkiLCJ0eXBlIiwiY2xvbmVFbGVtZW50IiwicGFyZW50IiwiaXNMYXN0SXRlbSIsImxlbmd0aCIsImNvbHVtbkNvdW50IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIscUNBQTdCOztBQUVBO0FBQ0EsU0FBU0MsV0FBVCxFQUFzQkMsS0FBdEIsUUFBbUMsaUJBQW5DOztBQUVBLElBQU1DLGVBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQVcsT0FBT0MsTUFBUCxLQUFrQixRQUFsQixHQUE2QkEsTUFBN0IsR0FBeUNBLE1BQXpDLE9BQVg7QUFBQSxDQUFyQjtBQUNBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLE1BQUksQ0FBQ0EsTUFBTUMsT0FBWCxFQUFvQixPQUFPLE1BQVA7QUFDcEIsMkJBQXVCSixhQUFhRyxNQUFNRSxTQUFuQixDQUF2QixnQkFBK0ROLE1BQU1PLFdBQXJFO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNQyxNQUFNWCxPQUFPWSxHQUFiLGtCQUNNVCxNQUFNTyxXQURaLEVBQzJCUCxNQUFNVSxlQURqQyxFQUlNO0FBQUEsU0FBU1AsZ0JBQWdCQyxLQUFoQixDQUFUO0FBQUEsQ0FKTixDQUFOOztBQU9BLElBQU1PLGFBQWEsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFOLFNBQWIsUUFBYUEsU0FBYjtBQUFBLE1BQXdCRCxPQUF4QixRQUF3QkEsT0FBeEI7QUFBQSxTQUNqQjtBQUFDLG9CQUFEO0FBQUE7QUFDRTtBQUFDLFNBQUQ7QUFBQTtBQUNFLG1CQUFXQyxTQURiO0FBRUUsaUJBQVNELE9BRlg7QUFHRSxtQkFBY04sV0FBZCxTQUhGO0FBSUUsa0JBQVUsa0JBQUNjLE9BQUQsRUFBYTtBQUNyQixnQkFBS0MsWUFBTCxHQUFvQkQsT0FBcEI7QUFDRDtBQU5IO0FBUUdsQixZQUFNb0IsUUFBTixDQUFlQyxHQUFmLENBQW1CSixRQUFuQixFQUE2QixVQUFDSyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUMxQztBQUNBLFlBQUksT0FBT0QsTUFBTUUsSUFBYixLQUFzQixRQUExQixFQUFvQyxPQUFPRixLQUFQOztBQUVwQztBQUNBLGVBQU90QixNQUFNeUIsWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFDL0JJLGtCQUFRLE1BQUtQLFlBRGtCO0FBRS9CUSxzQkFBWUosTUFBTU4sU0FBU1csTUFBVCxHQUFrQixDQUF4QixJQUE2QlgsU0FBU1csTUFBVCxLQUFvQixDQUY5QjtBQUcvQkMsdUJBQWFaLFNBQVNXO0FBSFMsU0FBMUIsQ0FBUDtBQUtELE9BVkE7QUFSSDtBQURGLEdBRGlCO0FBQUEsQ0FBbkI7O0FBK0JBWixXQUFXYyxZQUFYLEdBQTBCO0FBQ3hCYixZQUFVYyxTQURjO0FBRXhCcEIsYUFBVyxFQUZhO0FBR3hCRCxXQUFTO0FBSGUsQ0FBMUI7O0FBTUEsZUFBZU0sVUFBZiIsImZpbGUiOiJjb250ZW50LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgZ2V0VG9wT2Zmc2V0ID0gb2Zmc2V0ID0+ICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJyA/IG9mZnNldCA6IGAke29mZnNldH1weGApO1xuY29uc3QgY2FsY3VsYXRlSGVpZ2h0ID0gKHByb3BzKSA9PiB7XG4gIGlmICghcHJvcHMuc3RyZXRjaCkgcmV0dXJuICdhdXRvJztcbiAgcmV0dXJuIGBjYWxjKDEwMHZoIC0gJHtnZXRUb3BPZmZzZXQocHJvcHMudG9wT2Zmc2V0KX0gLSAoMiAqICR7dGhlbWUuZ3V0dGVyV2lkdGh9KSlgO1xufTtcblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAke3RoZW1lLmd1dHRlcldpZHRofSAke3RoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IGNhbGN1bGF0ZUhlaWdodChwcm9wcyl9O1xufX1gO1xuXG5jb25zdCBDb250ZW50Um93ID0gKHsgY2hpbGRyZW4sIHRvcE9mZnNldCwgc3RyZXRjaCB9KSA9PiAoXG4gIDxQZXJmZWN0U2Nyb2xsYmFyPlxuICAgIDxSb3dcbiAgICAgIHRvcE9mZnNldD17dG9wT2Zmc2V0fVxuICAgICAgc3RyZXRjaD17c3RyZXRjaH1cbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X3Jvd2B9XG4gICAgICBpbm5lclJlZj17KGVsZW1lbnQpID0+IHtcbiAgICAgICAgdGhpcy5jb2xDb250YWluZXIgPSBlbGVtZW50O1xuICAgICAgfX1cbiAgICA+XG4gICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgLy8gSWYgaXQncyBhIHJlZ3VsYXIgRE9NIG5vZGVcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC50eXBlID09PSAnc3RyaW5nJykgcmV0dXJuIGNoaWxkO1xuXG4gICAgICAgIC8vIElmIGl0J3MgYSBSZWFjdCBjb21wb25lbnQgKGluIG1vc3QgY2FzZXMgQ29udGVudC5Db2x1bW4pXG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICBwYXJlbnQ6IHRoaXMuY29sQ29udGFpbmVyLFxuICAgICAgICAgIGlzTGFzdEl0ZW06IGkgPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEgJiYgY2hpbGRyZW4ubGVuZ3RoICE9PSAxLFxuICAgICAgICAgIGNvbHVtbkNvdW50OiBjaGlsZHJlbi5sZW5ndGgsXG4gICAgICAgIH0pO1xuICAgICAgfSl9XG4gICAgPC9Sb3c+XG4gIDwvUGVyZmVjdFNjcm9sbGJhcj5cbik7XG5cbkNvbnRlbnRSb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHRvcE9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBzdHJldGNoOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkNvbnRlbnRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICB0b3BPZmZzZXQ6IDQwLFxuICBzdHJldGNoOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRSb3c7XG4iXX0=