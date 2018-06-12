var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex: 1 1 100%;\n  align-items: center;\n  height: ', ';\n  &.center {\n    justify-content: center;\n  }\n  &.right {\n    justify-content: flex-end;\n  }\n'], ['\n  display: flex;\n  flex: 1 1 100%;\n  align-items: center;\n  height: ', ';\n  &.center {\n    justify-content: center;\n  }\n  &.right {\n    justify-content: flex-end;\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
// App imports
import { classPrefix, theme } from '../constants';
import { Primitive } from '../';

var HeaderSection = styled.section(_templateObject, theme.header.height);
var HeaderBasic = function HeaderBasic(_ref) {
  var left = _ref.left,
      center = _ref.center,
      right = _ref.right;
  return React.createElement(
    Primitive.Header,
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

HeaderBasic.defaultProps = {
  left: undefined,
  center: undefined,
  right: undefined
};

export default HeaderBasic;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLWJhc2ljLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsic3R5bGVkIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJjbGFzc1ByZWZpeCIsInRoZW1lIiwiUHJpbWl0aXZlIiwiSGVhZGVyU2VjdGlvbiIsInNlY3Rpb24iLCJoZWFkZXIiLCJoZWlnaHQiLCJIZWFkZXJCYXNpYyIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQTtBQUNBLFNBQVNDLFdBQVQsRUFBc0JDLEtBQXRCLFFBQW1DLGNBQW5DO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixLQUExQjs7QUFFQSxJQUFNQyxnQkFBZ0JOLE9BQU9PLE9BQXZCLGtCQUlNSCxNQUFNSSxNQUFOLENBQWFDLE1BSm5CLENBQU47QUFZQSxJQUFNQyxjQUFjLFNBQWRBLFdBQWM7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxNQUFTQyxNQUFULFFBQVNBLE1BQVQ7QUFBQSxNQUFpQkMsS0FBakIsUUFBaUJBLEtBQWpCO0FBQUEsU0FDbEI7QUFBQyxhQUFELENBQVcsTUFBWDtBQUFBLE1BQWtCLFdBQWNWLFdBQWQsWUFBbEI7QUFDRTtBQUFDLG1CQUFEO0FBQUEsUUFBZSxXQUFjQSxXQUFkLHlCQUFmO0FBQWlFUTtBQUFqRSxLQURGO0FBRUU7QUFBQyxtQkFBRDtBQUFBLFFBQWUsV0FBY1IsV0FBZCwyQkFBZjtBQUFtRVM7QUFBbkUsS0FGRjtBQUdFO0FBQUMsbUJBQUQ7QUFBQSxRQUFlLFdBQWNULFdBQWQsMEJBQWY7QUFBa0VVO0FBQWxFO0FBSEYsR0FEa0I7QUFBQSxDQUFwQjs7QUFjQUgsWUFBWUksWUFBWixHQUEyQjtBQUN6QkgsUUFBTUksU0FEbUI7QUFFekJILFVBQVFHLFNBRmlCO0FBR3pCRixTQUFPRTtBQUhrQixDQUEzQjs7QUFNQSxlQUFlTCxXQUFmIiwiZmlsZSI6ImhlYWRlci1iYXNpYy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4LCB0aGVtZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBQcmltaXRpdmUgfSBmcm9tICcuLi8nO1xuXG5jb25zdCBIZWFkZXJTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEgMSAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6ICR7dGhlbWUuaGVhZGVyLmhlaWdodH07XG4gICYuY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAmLnJpZ2h0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5gO1xuY29uc3QgSGVhZGVyQmFzaWMgPSAoeyBsZWZ0LCBjZW50ZXIsIHJpZ2h0IH0pID0+IChcbiAgPFByaW1pdGl2ZS5IZWFkZXIgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1faGVhZGVyYH0+XG4gICAgPEhlYWRlclNlY3Rpb24gY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1faGVhZGVyX3NlY3Rpb24gbGVmdGB9PntsZWZ0fTwvSGVhZGVyU2VjdGlvbj5cbiAgICA8SGVhZGVyU2VjdGlvbiBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9oZWFkZXJfc2VjdGlvbiBjZW50ZXJgfT57Y2VudGVyfTwvSGVhZGVyU2VjdGlvbj5cbiAgICA8SGVhZGVyU2VjdGlvbiBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9oZWFkZXJfc2VjdGlvbiByaWdodGB9PntyaWdodH08L0hlYWRlclNlY3Rpb24+XG4gIDwvUHJpbWl0aXZlLkhlYWRlcj5cbik7XG5cbkhlYWRlckJhc2ljLnByb3BUeXBlcyA9IHtcbiAgbGVmdDogUHJvcFR5cGVzLm5vZGUsXG4gIGNlbnRlcjogUHJvcFR5cGVzLm5vZGUsXG4gIHJpZ2h0OiBQcm9wVHlwZXMubm9kZSxcbn07XG5cbkhlYWRlckJhc2ljLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGVmdDogdW5kZWZpbmVkLFxuICBjZW50ZXI6IHVuZGVmaW5lZCxcbiAgcmlnaHQ6IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckJhc2ljO1xuIl19