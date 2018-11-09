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

var CenterSection = styled(HeaderSection)(_templateObject2);

var SideSection = styled(HeaderSection)(_templateObject3, function (props) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLWJhc2ljLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsic3R5bGVkIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJjbGFzc1ByZWZpeCIsIlByaW1pdGl2ZSIsIkhlYWRlclNlY3Rpb24iLCJzZWN0aW9uIiwicHJvcHMiLCJ0aGVtZSIsImhlYWRlciIsImhlaWdodCIsIkNlbnRlclNlY3Rpb24iLCJTaWRlU2VjdGlvbiIsImJhc2lzIiwiSGVhZGVyQmFzaWMiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJjbGFzc05hbWUiLCJpZCIsInNpZGVTZWN0aW9uQmFzaXMiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU9BLE1BQVAsTUFBbUIsbUJBQW5CO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQTtBQUNBLFNBQVNDLFdBQVQsUUFBNEIsY0FBNUI7QUFDQSxTQUFTQyxTQUFULFFBQTBCLEtBQTFCOztBQUVBLElBQU1DLGdCQUFnQkwsT0FBT00sT0FBdkIsa0JBR007QUFBQSxTQUFTQyxNQUFNQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE1BQTVCO0FBQUEsQ0FITixDQUFOOztBQVlBLElBQU1DLGdCQUFnQlgsT0FBT0ssYUFBUCxDQUFoQixrQkFBTjs7QUFJQSxJQUFNTyxjQUFjWixPQUFPSyxhQUFQLENBQWQsbUJBQ1U7QUFBQSxTQUFTRSxNQUFNTSxLQUFmO0FBQUEsQ0FEVixDQUFOOztBQUtBLElBQU1DLGNBQWMsU0FBZEEsV0FBYztBQUFBLE1BQ2xCQyxJQURrQixRQUNsQkEsSUFEa0I7QUFBQSxNQUNaQyxNQURZLFFBQ1pBLE1BRFk7QUFBQSxNQUNKQyxLQURJLFFBQ0pBLEtBREk7QUFBQSxNQUNHQyxTQURILFFBQ0dBLFNBREg7QUFBQSxNQUNjQyxFQURkLFFBQ2NBLEVBRGQ7QUFBQSxNQUNrQkMsZ0JBRGxCLFFBQ2tCQSxnQkFEbEI7QUFBQSxTQUdsQjtBQUFDLGFBQUQsQ0FBVyxNQUFYO0FBQUEsTUFBa0IsSUFBSUQsRUFBdEIsRUFBMEIsV0FBY2hCLFdBQWQsZ0JBQW9DZSxTQUE5RDtBQUNFO0FBQUMsaUJBQUQ7QUFBQSxRQUFhLFdBQWNmLFdBQWQseUJBQWIsRUFBOEQsT0FBT2lCLGdCQUFyRTtBQUF3Rkw7QUFBeEYsS0FERjtBQUVFO0FBQUMsbUJBQUQ7QUFBQSxRQUFlLFdBQWNaLFdBQWQsMkJBQWY7QUFBbUVhO0FBQW5FLEtBRkY7QUFHRTtBQUFDLGlCQUFEO0FBQUEsUUFBYSxXQUFjYixXQUFkLDBCQUFiLEVBQStELE9BQU9pQixnQkFBdEU7QUFBeUZIO0FBQXpGO0FBSEYsR0FIa0I7QUFBQSxDQUFwQjs7QUFtQkFILFlBQVlPLFlBQVosR0FBMkI7QUFDekJOLFFBQU1PLFNBRG1CO0FBRXpCTixVQUFRTSxTQUZpQjtBQUd6QkwsU0FBT0ssU0FIa0I7QUFJekJKLGFBQVcsRUFKYztBQUt6QkMsTUFBSSxFQUxxQjtBQU16QkMsb0JBQWtCO0FBTk8sQ0FBM0I7O0FBU0EsZUFBZU4sV0FBZiIsImZpbGUiOiJoZWFkZXItYmFzaWMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBQcmltaXRpdmUgfSBmcm9tICcuLi8nO1xuXG5jb25zdCBIZWFkZXJTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhlYWRlci5oZWlnaHR9O1xuICAmLmNlbnRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgJi5yaWdodCB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuYDtcblxuY29uc3QgQ2VudGVyU2VjdGlvbiA9IHN0eWxlZChIZWFkZXJTZWN0aW9uKWBcbiAgZmxleC1ncm93OiAxO1xuYDtcblxuY29uc3QgU2lkZVNlY3Rpb24gPSBzdHlsZWQoSGVhZGVyU2VjdGlvbilgXG4gIGZsZXgtYmFzaXM6ICR7cHJvcHMgPT4gcHJvcHMuYmFzaXN9O1xuICBmbGV4LXNocmluazogMTtcbmA7XG5cbmNvbnN0IEhlYWRlckJhc2ljID0gKHtcbiAgbGVmdCwgY2VudGVyLCByaWdodCwgY2xhc3NOYW1lLCBpZCwgc2lkZVNlY3Rpb25CYXNpcyxcbn0pID0+IChcbiAgPFByaW1pdGl2ZS5IZWFkZXIgaWQ9e2lkfSBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9oZWFkZXIgJHtjbGFzc05hbWV9YH0+XG4gICAgPFNpZGVTZWN0aW9uIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2hlYWRlcl9zZWN0aW9uIGxlZnRgfSBiYXNpcz17c2lkZVNlY3Rpb25CYXNpc30+e2xlZnR9PC9TaWRlU2VjdGlvbj5cbiAgICA8Q2VudGVyU2VjdGlvbiBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9oZWFkZXJfc2VjdGlvbiBjZW50ZXJgfT57Y2VudGVyfTwvQ2VudGVyU2VjdGlvbj5cbiAgICA8U2lkZVNlY3Rpb24gY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1faGVhZGVyX3NlY3Rpb24gcmlnaHRgfSBiYXNpcz17c2lkZVNlY3Rpb25CYXNpc30+e3JpZ2h0fTwvU2lkZVNlY3Rpb24+XG4gIDwvUHJpbWl0aXZlLkhlYWRlcj5cbik7XG5cbkhlYWRlckJhc2ljLnByb3BUeXBlcyA9IHtcbiAgbGVmdDogUHJvcFR5cGVzLm5vZGUsXG4gIGNlbnRlcjogUHJvcFR5cGVzLm5vZGUsXG4gIHJpZ2h0OiBQcm9wVHlwZXMubm9kZSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2lkZVNlY3Rpb25CYXNpczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxufTtcblxuSGVhZGVyQmFzaWMuZGVmYXVsdFByb3BzID0ge1xuICBsZWZ0OiB1bmRlZmluZWQsXG4gIGNlbnRlcjogdW5kZWZpbmVkLFxuICByaWdodDogdW5kZWZpbmVkLFxuICBjbGFzc05hbWU6ICcnLFxuICBpZDogJycsXG4gIHNpZGVTZWN0aW9uQmFzaXM6ICcyMDBweCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJCYXNpYztcbiJdfQ==