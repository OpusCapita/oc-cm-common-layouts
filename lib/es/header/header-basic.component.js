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
      right = _ref.right,
      className = _ref.className,
      id = _ref.id;
  return React.createElement(
    Primitive.Header,
    { id: id, className: classPrefix + '_header ' + className },
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
  right: undefined,
  className: '',
  id: ''
};

export default HeaderBasic;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLWJhc2ljLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsic3R5bGVkIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJjbGFzc1ByZWZpeCIsInRoZW1lIiwiUHJpbWl0aXZlIiwiSGVhZGVyU2VjdGlvbiIsInNlY3Rpb24iLCJoZWFkZXIiLCJoZWlnaHQiLCJIZWFkZXJCYXNpYyIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsImNsYXNzTmFtZSIsImlkIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBO0FBQ0EsU0FBU0MsV0FBVCxFQUFzQkMsS0FBdEIsUUFBbUMsY0FBbkM7QUFDQSxTQUFTQyxTQUFULFFBQTBCLEtBQTFCOztBQUVBLElBQU1DLGdCQUFnQk4sT0FBT08sT0FBdkIsa0JBSU1ILE1BQU1JLE1BQU4sQ0FBYUMsTUFKbkIsQ0FBTjtBQVlBLElBQU1DLGNBQWMsU0FBZEEsV0FBYztBQUFBLE1BQ2xCQyxJQURrQixRQUNsQkEsSUFEa0I7QUFBQSxNQUNaQyxNQURZLFFBQ1pBLE1BRFk7QUFBQSxNQUNKQyxLQURJLFFBQ0pBLEtBREk7QUFBQSxNQUNHQyxTQURILFFBQ0dBLFNBREg7QUFBQSxNQUNjQyxFQURkLFFBQ2NBLEVBRGQ7QUFBQSxTQUdsQjtBQUFDLGFBQUQsQ0FBVyxNQUFYO0FBQUEsTUFBa0IsSUFBSUEsRUFBdEIsRUFBMEIsV0FBY1osV0FBZCxnQkFBb0NXLFNBQTlEO0FBQ0U7QUFBQyxtQkFBRDtBQUFBLFFBQWUsV0FBY1gsV0FBZCx5QkFBZjtBQUFpRVE7QUFBakUsS0FERjtBQUVFO0FBQUMsbUJBQUQ7QUFBQSxRQUFlLFdBQWNSLFdBQWQsMkJBQWY7QUFBbUVTO0FBQW5FLEtBRkY7QUFHRTtBQUFDLG1CQUFEO0FBQUEsUUFBZSxXQUFjVCxXQUFkLDBCQUFmO0FBQWtFVTtBQUFsRTtBQUhGLEdBSGtCO0FBQUEsQ0FBcEI7O0FBa0JBSCxZQUFZTSxZQUFaLEdBQTJCO0FBQ3pCTCxRQUFNTSxTQURtQjtBQUV6QkwsVUFBUUssU0FGaUI7QUFHekJKLFNBQU9JLFNBSGtCO0FBSXpCSCxhQUFXLEVBSmM7QUFLekJDLE1BQUk7QUFMcUIsQ0FBM0I7O0FBUUEsZUFBZUwsV0FBZiIsImZpbGUiOiJoZWFkZXItYmFzaWMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgUHJpbWl0aXZlIH0gZnJvbSAnLi4vJztcblxuY29uc3QgSGVhZGVyU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxIDEgMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAke3RoZW1lLmhlYWRlci5oZWlnaHR9O1xuICAmLmNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgJi5yaWdodCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuYDtcbmNvbnN0IEhlYWRlckJhc2ljID0gKHtcbiAgbGVmdCwgY2VudGVyLCByaWdodCwgY2xhc3NOYW1lLCBpZCxcbn0pID0+IChcbiAgPFByaW1pdGl2ZS5IZWFkZXIgaWQ9e2lkfSBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9oZWFkZXIgJHtjbGFzc05hbWV9YH0+XG4gICAgPEhlYWRlclNlY3Rpb24gY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1faGVhZGVyX3NlY3Rpb24gbGVmdGB9PntsZWZ0fTwvSGVhZGVyU2VjdGlvbj5cbiAgICA8SGVhZGVyU2VjdGlvbiBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9oZWFkZXJfc2VjdGlvbiBjZW50ZXJgfT57Y2VudGVyfTwvSGVhZGVyU2VjdGlvbj5cbiAgICA8SGVhZGVyU2VjdGlvbiBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9oZWFkZXJfc2VjdGlvbiByaWdodGB9PntyaWdodH08L0hlYWRlclNlY3Rpb24+XG4gIDwvUHJpbWl0aXZlLkhlYWRlcj5cbik7XG5cbkhlYWRlckJhc2ljLnByb3BUeXBlcyA9IHtcbiAgbGVmdDogUHJvcFR5cGVzLm5vZGUsXG4gIGNlbnRlcjogUHJvcFR5cGVzLm5vZGUsXG4gIHJpZ2h0OiBQcm9wVHlwZXMubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkhlYWRlckJhc2ljLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGVmdDogdW5kZWZpbmVkLFxuICBjZW50ZXI6IHVuZGVmaW5lZCxcbiAgcmlnaHQ6IHVuZGVmaW5lZCxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgaWQ6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQmFzaWM7XG4iXX0=