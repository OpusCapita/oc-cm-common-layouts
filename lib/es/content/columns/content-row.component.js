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
      stretch = _ref.stretch;
  return React.createElement(
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
  );
};

ContentRow.defaultProps = {
  children: undefined,
  topOffset: 40,
  stretch: false
};

export default ContentRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsImNsYXNzUHJlZml4IiwidGhlbWUiLCJnZXRUb3BPZmZzZXQiLCJvZmZzZXQiLCJjYWxjdWxhdGVIZWlnaHQiLCJwcm9wcyIsInN0cmV0Y2giLCJ0b3BPZmZzZXQiLCJndXR0ZXJXaWR0aCIsIlJvdyIsImRpdiIsImhhbGZHdXR0ZXJXaWR0aCIsIkNvbnRlbnRSb3ciLCJjaGlsZHJlbiIsImVsZW1lbnQiLCJjb2xDb250YWluZXIiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaSIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJwYXJlbnQiLCJpc0xhc3RJdGVtIiwibGVuZ3RoIiwiY29sdW1uQ291bnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkI7O0FBRUE7QUFDQSxTQUFTQyxXQUFULEVBQXNCQyxLQUF0QixRQUFtQyxpQkFBbkM7O0FBRUEsSUFBTUMsZUFBZSxTQUFmQSxZQUFlO0FBQUEsU0FBVyxPQUFPQyxNQUFQLEtBQWtCLFFBQWxCLEdBQTZCQSxNQUE3QixHQUF5Q0EsTUFBekMsT0FBWDtBQUFBLENBQXJCO0FBQ0EsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsTUFBSSxDQUFDQSxNQUFNQyxPQUFYLEVBQW9CLE9BQU8sTUFBUDtBQUNwQiwyQkFBdUJKLGFBQWFHLE1BQU1FLFNBQW5CLENBQXZCLGdCQUErRE4sTUFBTU8sV0FBckU7QUFDRCxDQUhEOztBQUtBLElBQU1DLE1BQU1WLE9BQU9XLEdBQWIsa0JBQ01ULE1BQU1PLFdBRFosRUFDMkJQLE1BQU1VLGVBRGpDLEVBSU07QUFBQSxTQUFTUCxnQkFBZ0JDLEtBQWhCLENBQVQ7QUFBQSxDQUpOLENBQU47O0FBT0EsSUFBTU8sYUFBYSxTQUFiQSxVQUFhO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYU4sU0FBYixRQUFhQSxTQUFiO0FBQUEsTUFBd0JELE9BQXhCLFFBQXdCQSxPQUF4QjtBQUFBLFNBQ2pCO0FBQUMsT0FBRDtBQUFBO0FBQ0UsaUJBQVdDLFNBRGI7QUFFRSxlQUFTRCxPQUZYO0FBR0UsaUJBQWNOLFdBQWQsU0FIRjtBQUlFLGdCQUFVLGtCQUFDYyxPQUFELEVBQWE7QUFDckIsY0FBS0MsWUFBTCxHQUFvQkQsT0FBcEI7QUFDRDtBQU5IO0FBUUdqQixVQUFNbUIsUUFBTixDQUFlQyxHQUFmLENBQW1CSixRQUFuQixFQUE2QixVQUFDSyxLQUFELEVBQVFDLENBQVIsRUFBYztBQUMxQztBQUNBLFVBQUksT0FBT0QsTUFBTUUsSUFBYixLQUFzQixRQUExQixFQUFvQyxPQUFPRixLQUFQOztBQUVwQztBQUNBLGFBQU9yQixNQUFNd0IsWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFDL0JJLGdCQUFRLE1BQUtQLFlBRGtCO0FBRS9CUSxvQkFBWUosTUFBTU4sU0FBU1csTUFBVCxHQUFrQixDQUF4QixJQUE2QlgsU0FBU1csTUFBVCxLQUFvQixDQUY5QjtBQUcvQkMscUJBQWFaLFNBQVNXO0FBSFMsT0FBMUIsQ0FBUDtBQUtELEtBVkE7QUFSSCxHQURpQjtBQUFBLENBQW5COztBQTZCQVosV0FBV2MsWUFBWCxHQUEwQjtBQUN4QmIsWUFBVWMsU0FEYztBQUV4QnBCLGFBQVcsRUFGYTtBQUd4QkQsV0FBUztBQUhlLENBQTFCOztBQU1BLGVBQWVNLFVBQWYiLCJmaWxlIjoiY29udGVudC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4LCB0aGVtZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IGdldFRvcE9mZnNldCA9IG9mZnNldCA9PiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycgPyBvZmZzZXQgOiBgJHtvZmZzZXR9cHhgKTtcbmNvbnN0IGNhbGN1bGF0ZUhlaWdodCA9IChwcm9wcykgPT4ge1xuICBpZiAoIXByb3BzLnN0cmV0Y2gpIHJldHVybiAnYXV0byc7XG4gIHJldHVybiBgY2FsYygxMDB2aCAtICR7Z2V0VG9wT2Zmc2V0KHByb3BzLnRvcE9mZnNldCl9IC0gKDIgKiAke3RoZW1lLmd1dHRlcldpZHRofSkpYDtcbn07XG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogJHt0aGVtZS5ndXR0ZXJXaWR0aH0gJHt0aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBjYWxjdWxhdGVIZWlnaHQocHJvcHMpfTtcbn19YDtcblxuY29uc3QgQ29udGVudFJvdyA9ICh7IGNoaWxkcmVuLCB0b3BPZmZzZXQsIHN0cmV0Y2ggfSkgPT4gKFxuICA8Um93XG4gICAgdG9wT2Zmc2V0PXt0b3BPZmZzZXR9XG4gICAgc3RyZXRjaD17c3RyZXRjaH1cbiAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9yb3dgfVxuICAgIGlubmVyUmVmPXsoZWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5jb2xDb250YWluZXIgPSBlbGVtZW50O1xuICAgIH19XG4gID5cbiAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IHtcbiAgICAgIC8vIElmIGl0J3MgYSByZWd1bGFyIERPTSBub2RlXG4gICAgICBpZiAodHlwZW9mIGNoaWxkLnR5cGUgPT09ICdzdHJpbmcnKSByZXR1cm4gY2hpbGQ7XG5cbiAgICAgIC8vIElmIGl0J3MgYSBSZWFjdCBjb21wb25lbnQgKGluIG1vc3QgY2FzZXMgQ29udGVudC5Db2x1bW4pXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIHBhcmVudDogdGhpcy5jb2xDb250YWluZXIsXG4gICAgICAgIGlzTGFzdEl0ZW06IGkgPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEgJiYgY2hpbGRyZW4ubGVuZ3RoICE9PSAxLFxuICAgICAgICBjb2x1bW5Db3VudDogY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgfSk7XG4gICAgfSl9XG4gIDwvUm93PlxuKTtcblxuQ29udGVudFJvdy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgdG9wT2Zmc2V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIHN0cmV0Y2g6IFByb3BUeXBlcy5ib29sLFxufTtcblxuQ29udGVudFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIHRvcE9mZnNldDogNDAsXG4gIHN0cmV0Y2g6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFJvdztcbiJdfQ==