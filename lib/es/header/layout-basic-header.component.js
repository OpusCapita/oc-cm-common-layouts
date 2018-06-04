var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex: 1 1 100%;\n  align-items: center;\n  height: ', ';\n  &.center {\n    justify-content: center;\n  }\n  &.right {\n    justify-content: flex-end;\n  }\n'], ['\n  display: flex;\n  flex: 1 1 100%;\n  align-items: center;\n  height: ', ';\n  &.center {\n    justify-content: center;\n  }\n  &.right {\n    justify-content: flex-end;\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
// App imports
import { classPrefix, theme } from '../constants';
import { PrimitiveHeader } from '../primitives';

var HeaderSection = styled.section(_templateObject, theme.header.height);
var LayoutBasicHeader = function LayoutBasicHeader(_ref) {
  var left = _ref.left,
      center = _ref.center,
      right = _ref.right;
  return React.createElement(
    PrimitiveHeader,
    { className: classPrefix + '_header' },
    React.createElement(
      HeaderSection,
      { className: classPrefix + '_header_section left' },
      left
    ),
    React.createElement(
      HeaderSection,
      { className: classPrefix + '_header_section center' },
      center
    ),
    React.createElement(
      HeaderSection,
      { className: classPrefix + '_header_section right' },
      right
    )
  );
};

LayoutBasicHeader.defaultProps = {
  left: undefined,
  center: undefined,
  right: undefined
};

export default LayoutBasicHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvbGF5b3V0LWJhc2ljLWhlYWRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NQcmVmaXgiLCJ0aGVtZSIsIlByaW1pdGl2ZUhlYWRlciIsIkhlYWRlclNlY3Rpb24iLCJzZWN0aW9uIiwiaGVhZGVyIiwiaGVpZ2h0IiwiTGF5b3V0QmFzaWNIZWFkZXIiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBLE9BQU9DLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0E7QUFDQSxTQUFTQyxXQUFULEVBQXNCQyxLQUF0QixRQUFtQyxjQUFuQztBQUNBLFNBQVNDLGVBQVQsUUFBZ0MsZUFBaEM7O0FBR0EsSUFBTUMsZ0JBQWdCTixPQUFPTyxPQUF2QixrQkFJTUgsTUFBTUksTUFBTixDQUFhQyxNQUpuQixDQUFOO0FBWUEsSUFBTUMsb0JBQW9CLFNBQXBCQSxpQkFBb0I7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxNQUFTQyxNQUFULFFBQVNBLE1BQVQ7QUFBQSxNQUFpQkMsS0FBakIsUUFBaUJBLEtBQWpCO0FBQUEsU0FDeEI7QUFBQyxtQkFBRDtBQUFBLE1BQWlCLFdBQWNWLFdBQWQsWUFBakI7QUFDRTtBQUFDLG1CQUFEO0FBQUEsUUFBZSxXQUFjQSxXQUFkLHlCQUFmO0FBQWlFUTtBQUFqRSxLQURGO0FBRUU7QUFBQyxtQkFBRDtBQUFBLFFBQWUsV0FBY1IsV0FBZCwyQkFBZjtBQUFtRVM7QUFBbkUsS0FGRjtBQUdFO0FBQUMsbUJBQUQ7QUFBQSxRQUFlLFdBQWNULFdBQWQsMEJBQWY7QUFBa0VVO0FBQWxFO0FBSEYsR0FEd0I7QUFBQSxDQUExQjs7QUFjQUgsa0JBQWtCSSxZQUFsQixHQUFpQztBQUMvQkgsUUFBTUksU0FEeUI7QUFFL0JILFVBQVFHLFNBRnVCO0FBRy9CRixTQUFPRTtBQUh3QixDQUFqQzs7QUFNQSxlQUFlTCxpQkFBZiIsImZpbGUiOiJsYXlvdXQtYmFzaWMtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IFByaW1pdGl2ZUhlYWRlciB9IGZyb20gJy4uL3ByaW1pdGl2ZXMnO1xuXG5cbmNvbnN0IEhlYWRlclNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMSAxIDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogJHt0aGVtZS5oZWFkZXIuaGVpZ2h0fTtcbiAgJi5jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gICYucmlnaHQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbmA7XG5jb25zdCBMYXlvdXRCYXNpY0hlYWRlciA9ICh7IGxlZnQsIGNlbnRlciwgcmlnaHQgfSkgPT4gKFxuICA8UHJpbWl0aXZlSGVhZGVyIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2hlYWRlcmB9PlxuICAgIDxIZWFkZXJTZWN0aW9uIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2hlYWRlcl9zZWN0aW9uIGxlZnRgfT57bGVmdH08L0hlYWRlclNlY3Rpb24+XG4gICAgPEhlYWRlclNlY3Rpb24gY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1faGVhZGVyX3NlY3Rpb24gY2VudGVyYH0+e2NlbnRlcn08L0hlYWRlclNlY3Rpb24+XG4gICAgPEhlYWRlclNlY3Rpb24gY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1faGVhZGVyX3NlY3Rpb24gcmlnaHRgfT57cmlnaHR9PC9IZWFkZXJTZWN0aW9uPlxuICA8L1ByaW1pdGl2ZUhlYWRlcj5cbik7XG5cbkxheW91dEJhc2ljSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgbGVmdDogUHJvcFR5cGVzLm5vZGUsXG4gIGNlbnRlcjogUHJvcFR5cGVzLm5vZGUsXG4gIHJpZ2h0OiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbkxheW91dEJhc2ljSGVhZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGVmdDogdW5kZWZpbmVkLFxuICBjZW50ZXI6IHVuZGVmaW5lZCxcbiAgcmlnaHQ6IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dEJhc2ljSGVhZGVyO1xuIl19