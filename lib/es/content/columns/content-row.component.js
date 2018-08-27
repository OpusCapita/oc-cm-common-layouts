var _this = this;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}'], ['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
      stretch = _ref.stretch,
      id = _ref.id,
      className = _ref.className;
  return React.createElement(
    Row,
    {
      topOffset: topOffset,
      stretch: stretch,
      className: classPrefix + '_row ' + className,
      innerRef: function innerRef(element) {
        _this.colContainer = element;
      },
      id: id
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
  );
};

ContentRow.defaultProps = {
  children: undefined,
  topOffset: 40,
  stretch: false,
  id: '',
  className: ''
};

export default ContentRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsImNsYXNzUHJlZml4IiwidGhlbWUiLCJnZXRUb3BPZmZzZXQiLCJvZmZzZXQiLCJjYWxjdWxhdGVIZWlnaHQiLCJwcm9wcyIsInN0cmV0Y2giLCJ0b3BPZmZzZXQiLCJndXR0ZXJXaWR0aCIsIlJvdyIsImRpdiIsImhhbGZHdXR0ZXJXaWR0aCIsIkNvbnRlbnRSb3ciLCJjaGlsZHJlbiIsImlkIiwiY2xhc3NOYW1lIiwiZWxlbWVudCIsImNvbENvbnRhaW5lciIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpIiwidHlwZSIsImNsb25lRWxlbWVudCIsInBhcmVudCIsImlzTGFzdEl0ZW0iLCJsZW5ndGgiLCJjb2x1bW5Db3VudCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjs7QUFFQTtBQUNBLFNBQVNDLFdBQVQsRUFBc0JDLEtBQXRCLFFBQW1DLGlCQUFuQzs7QUFFQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFXLE9BQU9DLE1BQVAsS0FBa0IsUUFBbEIsR0FBNkJBLE1BQTdCLEdBQXlDQSxNQUF6QyxPQUFYO0FBQUEsQ0FBckI7QUFDQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxNQUFJLENBQUNBLE1BQU1DLE9BQVgsRUFBb0IsT0FBTyxNQUFQO0FBQ3BCLDJCQUF1QkosYUFBYUcsTUFBTUUsU0FBbkIsQ0FBdkIsZ0JBQStETixNQUFNTyxXQUFyRTtBQUNELENBSEQ7O0FBS0EsSUFBTUMsTUFBTVYsT0FBT1csR0FBYixrQkFDTVQsTUFBTU8sV0FEWixFQUMyQlAsTUFBTVUsZUFEakMsRUFJTTtBQUFBLFNBQVNQLGdCQUFnQkMsS0FBaEIsQ0FBVDtBQUFBLENBSk4sQ0FBTjs7QUFPQSxJQUFNTyxhQUFhLFNBQWJBLFVBQWE7QUFBQSxNQUNqQkMsUUFEaUIsUUFDakJBLFFBRGlCO0FBQUEsTUFFakJOLFNBRmlCLFFBRWpCQSxTQUZpQjtBQUFBLE1BR2pCRCxPQUhpQixRQUdqQkEsT0FIaUI7QUFBQSxNQUlqQlEsRUFKaUIsUUFJakJBLEVBSmlCO0FBQUEsTUFLakJDLFNBTGlCLFFBS2pCQSxTQUxpQjtBQUFBLFNBT2pCO0FBQUMsT0FBRDtBQUFBO0FBQ0UsaUJBQVdSLFNBRGI7QUFFRSxlQUFTRCxPQUZYO0FBR0UsaUJBQWNOLFdBQWQsYUFBaUNlLFNBSG5DO0FBSUUsZ0JBQVUsa0JBQUNDLE9BQUQsRUFBYTtBQUNyQixjQUFLQyxZQUFMLEdBQW9CRCxPQUFwQjtBQUNELE9BTkg7QUFPRSxVQUFJRjtBQVBOO0FBU0dqQixVQUFNcUIsUUFBTixDQUFlQyxHQUFmLENBQW1CTixRQUFuQixFQUE2QixVQUFDTyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUMxQztBQUNBLFVBQUksT0FBT0QsTUFBTUUsSUFBYixLQUFzQixRQUExQixFQUFvQyxPQUFPRixLQUFQOztBQUVwQztBQUNBLGFBQU92QixNQUFNMEIsWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFDL0JJLGdCQUFRLE1BQUtQLFlBRGtCO0FBRS9CUSxvQkFBWUosTUFBTVIsU0FBU2EsTUFBVCxHQUFrQixDQUF4QixJQUE2QmIsU0FBU2EsTUFBVCxLQUFvQixDQUY5QjtBQUcvQkMscUJBQWFkLFNBQVNhO0FBSFMsT0FBMUIsQ0FBUDtBQUtELEtBVkE7QUFUSCxHQVBpQjtBQUFBLENBQW5COztBQXNDQWQsV0FBV2dCLFlBQVgsR0FBMEI7QUFDeEJmLFlBQVVnQixTQURjO0FBRXhCdEIsYUFBVyxFQUZhO0FBR3hCRCxXQUFTLEtBSGU7QUFJeEJRLE1BQUksRUFKb0I7QUFLeEJDLGFBQVc7QUFMYSxDQUExQjs7QUFRQSxlQUFlSCxVQUFmIiwiZmlsZSI6ImNvbnRlbnQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuLy8gQXBwIGltcG9ydHNcclxuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IGdldFRvcE9mZnNldCA9IG9mZnNldCA9PiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycgPyBvZmZzZXQgOiBgJHtvZmZzZXR9cHhgKTtcclxuY29uc3QgY2FsY3VsYXRlSGVpZ2h0ID0gKHByb3BzKSA9PiB7XHJcbiAgaWYgKCFwcm9wcy5zdHJldGNoKSByZXR1cm4gJ2F1dG8nO1xyXG4gIHJldHVybiBgY2FsYygxMDB2aCAtICR7Z2V0VG9wT2Zmc2V0KHByb3BzLnRvcE9mZnNldCl9IC0gKDIgKiAke3RoZW1lLmd1dHRlcldpZHRofSkpYDtcclxufTtcclxuXHJcbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAke3RoZW1lLmd1dHRlcldpZHRofSAke3RoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgaGVpZ2h0OiAke3Byb3BzID0+IGNhbGN1bGF0ZUhlaWdodChwcm9wcyl9O1xyXG59fWA7XHJcblxyXG5jb25zdCBDb250ZW50Um93ID0gKHtcclxuICBjaGlsZHJlbixcclxuICB0b3BPZmZzZXQsXHJcbiAgc3RyZXRjaCxcclxuICBpZCxcclxuICBjbGFzc05hbWUsXHJcbn0pID0+IChcclxuICA8Um93XHJcbiAgICB0b3BPZmZzZXQ9e3RvcE9mZnNldH1cclxuICAgIHN0cmV0Y2g9e3N0cmV0Y2h9XHJcbiAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9yb3cgJHtjbGFzc05hbWV9YH1cclxuICAgIGlubmVyUmVmPXsoZWxlbWVudCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbENvbnRhaW5lciA9IGVsZW1lbnQ7XHJcbiAgICB9fVxyXG4gICAgaWQ9e2lkfVxyXG4gID5cclxuICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4ge1xyXG4gICAgICAvLyBJZiBpdCdzIGEgcmVndWxhciBET00gbm9kZVxyXG4gICAgICBpZiAodHlwZW9mIGNoaWxkLnR5cGUgPT09ICdzdHJpbmcnKSByZXR1cm4gY2hpbGQ7XHJcblxyXG4gICAgICAvLyBJZiBpdCdzIGEgUmVhY3QgY29tcG9uZW50IChpbiBtb3N0IGNhc2VzIENvbnRlbnQuQ29sdW1uKVxyXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XHJcbiAgICAgICAgcGFyZW50OiB0aGlzLmNvbENvbnRhaW5lcixcclxuICAgICAgICBpc0xhc3RJdGVtOiBpID09PSBjaGlsZHJlbi5sZW5ndGggLSAxICYmIGNoaWxkcmVuLmxlbmd0aCAhPT0gMSxcclxuICAgICAgICBjb2x1bW5Db3VudDogY2hpbGRyZW4ubGVuZ3RoLFxyXG4gICAgICB9KTtcclxuICAgIH0pfVxyXG4gIDwvUm93PlxyXG4pO1xyXG5cclxuQ29udGVudFJvdy5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIHRvcE9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gIHN0cmV0Y2g6IFByb3BUeXBlcy5ib29sLFxyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbkNvbnRlbnRSb3cuZGVmYXVsdFByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXHJcbiAgdG9wT2Zmc2V0OiA0MCxcclxuICBzdHJldGNoOiBmYWxzZSxcclxuICBpZDogJycsXHJcbiAgY2xhc3NOYW1lOiAnJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRSb3c7XHJcbiJdfQ==