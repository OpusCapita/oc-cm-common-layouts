var _templateObject = _taggedTemplateLiteralLoose(['\n  display:flex;\n  align-items: center;\n  height: ', ';\n  &.center {\n    justify-content: center;\n  }\n  &.right {\n    justify-content: flex-end;\n  }\n'], ['\n  display:flex;\n  align-items: center;\n  height: ', ';\n  &.center {\n    justify-content: center;\n  }\n  &.right {\n    justify-content: flex-end;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  flex-grow: 1;\n'], ['\n  flex-grow: 1;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  flex-basis: ', ';\n  flex-shrink: 1;\n'], ['\n  flex-basis: ', ';\n  flex-shrink: 1;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
// App imports
import { classPrefix } from '../constants';
import { Primitive } from '../';

var HeaderSection = styled.section(_templateObject, function (props) {
  return props.theme.header.height;
});

var CenterSection = HeaderSection.extend(_templateObject2);

var SideSection = HeaderSection.extend(_templateObject3, function (props) {
  return props.basis;
});

var HeaderBasic = function HeaderBasic(_ref) {
  var left = _ref.left,
      center = _ref.center,
      right = _ref.right,
      className = _ref.className,
      id = _ref.id,
      sideSectionBasis = _ref.sideSectionBasis;
  return React.createElement(
    Primitive.Header,
    { id: id, className: classPrefix + '_header ' + className },
    React.createElement(
      SideSection,
      { className: classPrefix + '_header_section left', basis: sideSectionBasis },
      left
    ),
    React.createElement(
      CenterSection,
      { className: classPrefix + '_header_section center' },
      center
    ),
    React.createElement(
      SideSection,
      { className: classPrefix + '_header_section right', basis: sideSectionBasis },
      right
    )
  );
};

HeaderBasic.defaultProps = {
  left: undefined,
  center: undefined,
  right: undefined,
  className: '',
  id: '',
  sideSectionBasis: '200px'
};

export default HeaderBasic;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLWJhc2ljLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsic3R5bGVkIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJjbGFzc1ByZWZpeCIsIlByaW1pdGl2ZSIsIkhlYWRlclNlY3Rpb24iLCJzZWN0aW9uIiwicHJvcHMiLCJ0aGVtZSIsImhlYWRlciIsImhlaWdodCIsIkNlbnRlclNlY3Rpb24iLCJleHRlbmQiLCJTaWRlU2VjdGlvbiIsImJhc2lzIiwiSGVhZGVyQmFzaWMiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJjbGFzc05hbWUiLCJpZCIsInNpZGVTZWN0aW9uQmFzaXMiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQTtBQUNBLFNBQVNDLFdBQVQsUUFBNEIsY0FBNUI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLEtBQTFCOztBQUVBLElBQU1DLGdCQUFnQkwsT0FBT00sT0FBdkIsa0JBR007QUFBQSxTQUFTQyxNQUFNQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE1BQTVCO0FBQUEsQ0FITixDQUFOOztBQVlBLElBQU1DLGdCQUFnQk4sY0FBY08sTUFBOUIsa0JBQU47O0FBSUEsSUFBTUMsY0FBY1IsY0FBY08sTUFBNUIsbUJBQ1U7QUFBQSxTQUFTTCxNQUFNTyxLQUFmO0FBQUEsQ0FEVixDQUFOOztBQUtBLElBQU1DLGNBQWMsU0FBZEEsV0FBYztBQUFBLE1BQ2xCQyxJQURrQixRQUNsQkEsSUFEa0I7QUFBQSxNQUNaQyxNQURZLFFBQ1pBLE1BRFk7QUFBQSxNQUNKQyxLQURJLFFBQ0pBLEtBREk7QUFBQSxNQUNHQyxTQURILFFBQ0dBLFNBREg7QUFBQSxNQUNjQyxFQURkLFFBQ2NBLEVBRGQ7QUFBQSxNQUNrQkMsZ0JBRGxCLFFBQ2tCQSxnQkFEbEI7QUFBQSxTQUdsQjtBQUFDLGFBQUQsQ0FBVyxNQUFYO0FBQUEsTUFBa0IsSUFBSUQsRUFBdEIsRUFBMEIsV0FBY2pCLFdBQWQsZ0JBQW9DZ0IsU0FBOUQ7QUFDRTtBQUFDLGlCQUFEO0FBQUEsUUFBYSxXQUFjaEIsV0FBZCx5QkFBYixFQUE4RCxPQUFPa0IsZ0JBQXJFO0FBQXdGTDtBQUF4RixLQURGO0FBRUU7QUFBQyxtQkFBRDtBQUFBLFFBQWUsV0FBY2IsV0FBZCwyQkFBZjtBQUFtRWM7QUFBbkUsS0FGRjtBQUdFO0FBQUMsaUJBQUQ7QUFBQSxRQUFhLFdBQWNkLFdBQWQsMEJBQWIsRUFBK0QsT0FBT2tCLGdCQUF0RTtBQUF5Rkg7QUFBekY7QUFIRixHQUhrQjtBQUFBLENBQXBCOztBQW1CQUgsWUFBWU8sWUFBWixHQUEyQjtBQUN6Qk4sUUFBTU8sU0FEbUI7QUFFekJOLFVBQVFNLFNBRmlCO0FBR3pCTCxTQUFPSyxTQUhrQjtBQUl6QkosYUFBVyxFQUpjO0FBS3pCQyxNQUFJLEVBTHFCO0FBTXpCQyxvQkFBa0I7QUFOTyxDQUEzQjs7QUFTQSxlQUFlTixXQUFmIiwiZmlsZSI6ImhlYWRlci1iYXNpYy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4IH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IFByaW1pdGl2ZSB9IGZyb20gJy4uLyc7XG5cbmNvbnN0IEhlYWRlclNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTpmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGVhZGVyLmhlaWdodH07XG4gICYuY2VudGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAmLnJpZ2h0IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG5gO1xuXG5jb25zdCBDZW50ZXJTZWN0aW9uID0gSGVhZGVyU2VjdGlvbi5leHRlbmRgXG4gIGZsZXgtZ3JvdzogMTtcbmA7XG5cbmNvbnN0IFNpZGVTZWN0aW9uID0gSGVhZGVyU2VjdGlvbi5leHRlbmRgXG4gIGZsZXgtYmFzaXM6ICR7cHJvcHMgPT4gcHJvcHMuYmFzaXN9O1xuICBmbGV4LXNocmluazogMTtcbmA7XG5cbmNvbnN0IEhlYWRlckJhc2ljID0gKHtcbiAgbGVmdCwgY2VudGVyLCByaWdodCwgY2xhc3NOYW1lLCBpZCwgc2lkZVNlY3Rpb25CYXNpcyxcbn0pID0+IChcbiAgPFByaW1pdGl2ZS5IZWFkZXIgaWQ9e2lkfSBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9oZWFkZXIgJHtjbGFzc05hbWV9YH0+XG4gICAgPFNpZGVTZWN0aW9uIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2hlYWRlcl9zZWN0aW9uIGxlZnRgfSBiYXNpcz17c2lkZVNlY3Rpb25CYXNpc30+e2xlZnR9PC9TaWRlU2VjdGlvbj5cbiAgICA8Q2VudGVyU2VjdGlvbiBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9oZWFkZXJfc2VjdGlvbiBjZW50ZXJgfT57Y2VudGVyfTwvQ2VudGVyU2VjdGlvbj5cbiAgICA8U2lkZVNlY3Rpb24gY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1faGVhZGVyX3NlY3Rpb24gcmlnaHRgfSBiYXNpcz17c2lkZVNlY3Rpb25CYXNpc30+e3JpZ2h0fTwvU2lkZVNlY3Rpb24+XG4gIDwvUHJpbWl0aXZlLkhlYWRlcj5cbik7XG5cbkhlYWRlckJhc2ljLnByb3BUeXBlcyA9IHtcbiAgbGVmdDogUHJvcFR5cGVzLm5vZGUsXG4gIGNlbnRlcjogUHJvcFR5cGVzLm5vZGUsXG4gIHJpZ2h0OiBQcm9wVHlwZXMubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2lkZVNlY3Rpb25CYXNpczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxufTtcblxuSGVhZGVyQmFzaWMuZGVmYXVsdFByb3BzID0ge1xuICBsZWZ0OiB1bmRlZmluZWQsXG4gIGNlbnRlcjogdW5kZWZpbmVkLFxuICByaWdodDogdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6ICcnLFxuICBpZDogJycsXG4gIHNpZGVTZWN0aW9uQmFzaXM6ICcyMDBweCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJCYXNpYztcbiJdfQ==