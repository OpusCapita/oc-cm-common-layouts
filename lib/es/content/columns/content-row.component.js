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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsImNsYXNzUHJlZml4IiwidGhlbWUiLCJnZXRUb3BPZmZzZXQiLCJvZmZzZXQiLCJjYWxjdWxhdGVIZWlnaHQiLCJwcm9wcyIsInN0cmV0Y2giLCJ0b3BPZmZzZXQiLCJndXR0ZXJXaWR0aCIsIlJvdyIsImRpdiIsImhhbGZHdXR0ZXJXaWR0aCIsIkNvbnRlbnRSb3ciLCJjaGlsZHJlbiIsImlkIiwiY2xhc3NOYW1lIiwiZWxlbWVudCIsImNvbENvbnRhaW5lciIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpIiwidHlwZSIsImNsb25lRWxlbWVudCIsInBhcmVudCIsImlzTGFzdEl0ZW0iLCJsZW5ndGgiLCJjb2x1bW5Db3VudCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjs7QUFFQTtBQUNBLFNBQVNDLFdBQVQsRUFBc0JDLEtBQXRCLFFBQW1DLGlCQUFuQzs7QUFFQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFXLE9BQU9DLE1BQVAsS0FBa0IsUUFBbEIsR0FBNkJBLE1BQTdCLEdBQXlDQSxNQUF6QyxPQUFYO0FBQUEsQ0FBckI7QUFDQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxNQUFJLENBQUNBLE1BQU1DLE9BQVgsRUFBb0IsT0FBTyxNQUFQO0FBQ3BCLDJCQUF1QkosYUFBYUcsTUFBTUUsU0FBbkIsQ0FBdkIsZ0JBQStETixNQUFNTyxXQUFyRTtBQUNELENBSEQ7O0FBS0EsSUFBTUMsTUFBTVYsT0FBT1csR0FBYixrQkFDTVQsTUFBTU8sV0FEWixFQUMyQlAsTUFBTVUsZUFEakMsRUFJTTtBQUFBLFNBQVNQLGdCQUFnQkMsS0FBaEIsQ0FBVDtBQUFBLENBSk4sQ0FBTjs7QUFPQSxJQUFNTyxhQUFhLFNBQWJBLFVBQWE7QUFBQSxNQUNqQkMsUUFEaUIsUUFDakJBLFFBRGlCO0FBQUEsTUFFakJOLFNBRmlCLFFBRWpCQSxTQUZpQjtBQUFBLE1BR2pCRCxPQUhpQixRQUdqQkEsT0FIaUI7QUFBQSxNQUlqQlEsRUFKaUIsUUFJakJBLEVBSmlCO0FBQUEsTUFLakJDLFNBTGlCLFFBS2pCQSxTQUxpQjtBQUFBLFNBT2pCO0FBQUMsT0FBRDtBQUFBO0FBQ0UsaUJBQVdSLFNBRGI7QUFFRSxlQUFTRCxPQUZYO0FBR0UsaUJBQWNOLFdBQWQsYUFBaUNlLFNBSG5DO0FBSUUsZ0JBQVUsa0JBQUNDLE9BQUQsRUFBYTtBQUNyQixjQUFLQyxZQUFMLEdBQW9CRCxPQUFwQjtBQUNELE9BTkg7QUFPRSxVQUFJRjtBQVBOO0FBU0dqQixVQUFNcUIsUUFBTixDQUFlQyxHQUFmLENBQW1CTixRQUFuQixFQUE2QixVQUFDTyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUMxQztBQUNBLFVBQUksT0FBT0QsTUFBTUUsSUFBYixLQUFzQixRQUExQixFQUFvQyxPQUFPRixLQUFQOztBQUVwQztBQUNBLGFBQU92QixNQUFNMEIsWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFDL0JJLGdCQUFRLE1BQUtQLFlBRGtCO0FBRS9CUSxvQkFBWUosTUFBTVIsU0FBU2EsTUFBVCxHQUFrQixDQUF4QixJQUE2QmIsU0FBU2EsTUFBVCxLQUFvQixDQUY5QjtBQUcvQkMscUJBQWFkLFNBQVNhO0FBSFMsT0FBMUIsQ0FBUDtBQUtELEtBVkE7QUFUSCxHQVBpQjtBQUFBLENBQW5COztBQXNDQWQsV0FBV2dCLFlBQVgsR0FBMEI7QUFDeEJmLFlBQVVnQixTQURjO0FBRXhCdEIsYUFBVyxFQUZhO0FBR3hCRCxXQUFTLEtBSGU7QUFJeEJRLE1BQUksRUFKb0I7QUFLeEJDLGFBQVc7QUFMYSxDQUExQjs7QUFRQSxlQUFlSCxVQUFmIiwiZmlsZSI6ImNvbnRlbnQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBnZXRUb3BPZmZzZXQgPSBvZmZzZXQgPT4gKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnID8gb2Zmc2V0IDogYCR7b2Zmc2V0fXB4YCk7XG5jb25zdCBjYWxjdWxhdGVIZWlnaHQgPSAocHJvcHMpID0+IHtcbiAgaWYgKCFwcm9wcy5zdHJldGNoKSByZXR1cm4gJ2F1dG8nO1xuICByZXR1cm4gYGNhbGMoMTAwdmggLSAke2dldFRvcE9mZnNldChwcm9wcy50b3BPZmZzZXQpfSAtICgyICogJHt0aGVtZS5ndXR0ZXJXaWR0aH0pKWA7XG59O1xuXG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46ICR7dGhlbWUuZ3V0dGVyV2lkdGh9ICR7dGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gY2FsY3VsYXRlSGVpZ2h0KHByb3BzKX07XG59fWA7XG5cbmNvbnN0IENvbnRlbnRSb3cgPSAoe1xuICBjaGlsZHJlbixcbiAgdG9wT2Zmc2V0LFxuICBzdHJldGNoLFxuICBpZCxcbiAgY2xhc3NOYW1lLFxufSkgPT4gKFxuICA8Um93XG4gICAgdG9wT2Zmc2V0PXt0b3BPZmZzZXR9XG4gICAgc3RyZXRjaD17c3RyZXRjaH1cbiAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9yb3cgJHtjbGFzc05hbWV9YH1cbiAgICBpbm5lclJlZj17KGVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuY29sQ29udGFpbmVyID0gZWxlbWVudDtcbiAgICB9fVxuICAgIGlkPXtpZH1cbiAgPlxuICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4ge1xuICAgICAgLy8gSWYgaXQncyBhIHJlZ3VsYXIgRE9NIG5vZGVcbiAgICAgIGlmICh0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ3N0cmluZycpIHJldHVybiBjaGlsZDtcblxuICAgICAgLy8gSWYgaXQncyBhIFJlYWN0IGNvbXBvbmVudCAoaW4gbW9zdCBjYXNlcyBDb250ZW50LkNvbHVtbilcbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgcGFyZW50OiB0aGlzLmNvbENvbnRhaW5lcixcbiAgICAgICAgaXNMYXN0SXRlbTogaSA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSAmJiBjaGlsZHJlbi5sZW5ndGggIT09IDEsXG4gICAgICAgIGNvbHVtbkNvdW50OiBjaGlsZHJlbi5sZW5ndGgsXG4gICAgICB9KTtcbiAgICB9KX1cbiAgPC9Sb3c+XG4pO1xuXG5Db250ZW50Um93LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICB0b3BPZmZzZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgc3RyZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5Db250ZW50Um93LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgdG9wT2Zmc2V0OiA0MCxcbiAgc3RyZXRjaDogZmFsc2UsXG4gIGlkOiAnJyxcbiAgY2xhc3NOYW1lOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRSb3c7XG4iXX0=