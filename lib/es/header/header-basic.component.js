function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  flex-basis: ", ";\n  flex-shrink: 1;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  flex-grow: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display:flex;\n  align-items: center;\n  height: ", ";\n  &.center {\n    justify-content: center;\n  }\n  &.right {\n    justify-content: flex-end;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types'; // App imports

import { classPrefix } from '../constants';
import { Primitive } from '../index';
var HeaderSection = styled.section(_templateObject(), function (props) {
  return props.theme.header.height;
});
var CenterSection = styled(HeaderSection)(_templateObject2());
var SideSection = styled(HeaderSection)(_templateObject3(), function (props) {
  return props.basis;
});

var HeaderBasic = function HeaderBasic(_ref) {
  var left = _ref.left,
      center = _ref.center,
      right = _ref.right,
      className = _ref.className,
      id = _ref.id,
      sideSectionBasis = _ref.sideSectionBasis;
  return React.createElement(Primitive.Header, {
    id: id,
    className: classPrefix + "_header " + className
  }, React.createElement(SideSection, {
    className: classPrefix + "_header_section left",
    basis: sideSectionBasis
  }, left), React.createElement(CenterSection, {
    className: classPrefix + "_header_section center"
  }, center), React.createElement(SideSection, {
    className: classPrefix + "_header_section right",
    basis: sideSectionBasis
  }, right));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLWJhc2ljLmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsic3R5bGVkIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJjbGFzc1ByZWZpeCIsIlByaW1pdGl2ZSIsIkhlYWRlclNlY3Rpb24iLCJzZWN0aW9uIiwicHJvcHMiLCJ0aGVtZSIsImhlYWRlciIsImhlaWdodCIsIkNlbnRlclNlY3Rpb24iLCJTaWRlU2VjdGlvbiIsImJhc2lzIiwiSGVhZGVyQmFzaWMiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJjbGFzc05hbWUiLCJpZCIsInNpZGVTZWN0aW9uQmFzaXMiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QixDLENBQ0E7O0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixjQUE1QjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsVUFBMUI7QUFFQSxJQUFNQyxhQUFhLEdBQUdMLE1BQU0sQ0FBQ00sT0FBVixvQkFHUCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE1BQXZCO0FBQUEsQ0FIRSxDQUFuQjtBQVlBLElBQU1DLGFBQWEsR0FBR1gsTUFBTSxDQUFDSyxhQUFELENBQVQsb0JBQW5CO0FBSUEsSUFBTU8sV0FBVyxHQUFHWixNQUFNLENBQUNLLGFBQUQsQ0FBVCxxQkFDRCxVQUFBRSxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDTSxLQUFWO0FBQUEsQ0FESixDQUFqQjs7QUFLQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLE1BQ2xCQyxJQURrQixRQUNsQkEsSUFEa0I7QUFBQSxNQUNaQyxNQURZLFFBQ1pBLE1BRFk7QUFBQSxNQUNKQyxLQURJLFFBQ0pBLEtBREk7QUFBQSxNQUNHQyxTQURILFFBQ0dBLFNBREg7QUFBQSxNQUNjQyxFQURkLFFBQ2NBLEVBRGQ7QUFBQSxNQUNrQkMsZ0JBRGxCLFFBQ2tCQSxnQkFEbEI7QUFBQSxTQUdsQixvQkFBQyxTQUFELENBQVcsTUFBWDtBQUFrQixJQUFBLEVBQUUsRUFBRUQsRUFBdEI7QUFBMEIsSUFBQSxTQUFTLEVBQUtoQixXQUFMLGdCQUEyQmU7QUFBOUQsS0FDRSxvQkFBQyxXQUFEO0FBQWEsSUFBQSxTQUFTLEVBQUtmLFdBQUwseUJBQXRCO0FBQThELElBQUEsS0FBSyxFQUFFaUI7QUFBckUsS0FBd0ZMLElBQXhGLENBREYsRUFFRSxvQkFBQyxhQUFEO0FBQWUsSUFBQSxTQUFTLEVBQUtaLFdBQUw7QUFBeEIsS0FBbUVhLE1BQW5FLENBRkYsRUFHRSxvQkFBQyxXQUFEO0FBQWEsSUFBQSxTQUFTLEVBQUtiLFdBQUwsMEJBQXRCO0FBQStELElBQUEsS0FBSyxFQUFFaUI7QUFBdEUsS0FBeUZILEtBQXpGLENBSEYsQ0FIa0I7QUFBQSxDQUFwQjs7QUFtQkFILFdBQVcsQ0FBQ08sWUFBWixHQUEyQjtBQUN6Qk4sRUFBQUEsSUFBSSxFQUFFTyxTQURtQjtBQUV6Qk4sRUFBQUEsTUFBTSxFQUFFTSxTQUZpQjtBQUd6QkwsRUFBQUEsS0FBSyxFQUFFSyxTQUhrQjtBQUl6QkosRUFBQUEsU0FBUyxFQUFFLEVBSmM7QUFLekJDLEVBQUFBLEVBQUUsRUFBRSxFQUxxQjtBQU16QkMsRUFBQUEsZ0JBQWdCLEVBQUU7QUFOTyxDQUEzQjtBQVNBLGVBQWVOLFdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4IH0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IFByaW1pdGl2ZSB9IGZyb20gJy4uL2luZGV4JztcblxuY29uc3QgSGVhZGVyU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OmZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuaGVpZ2h0fTtcbiAgJi5jZW50ZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gICYucmlnaHQge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cbmA7XG5cbmNvbnN0IENlbnRlclNlY3Rpb24gPSBzdHlsZWQoSGVhZGVyU2VjdGlvbilgXG4gIGZsZXgtZ3JvdzogMTtcbmA7XG5cbmNvbnN0IFNpZGVTZWN0aW9uID0gc3R5bGVkKEhlYWRlclNlY3Rpb24pYFxuICBmbGV4LWJhc2lzOiAke3Byb3BzID0+IHByb3BzLmJhc2lzfTtcbiAgZmxleC1zaHJpbms6IDE7XG5gO1xuXG5jb25zdCBIZWFkZXJCYXNpYyA9ICh7XG4gIGxlZnQsIGNlbnRlciwgcmlnaHQsIGNsYXNzTmFtZSwgaWQsIHNpZGVTZWN0aW9uQmFzaXMsXG59KSA9PiAoXG4gIDxQcmltaXRpdmUuSGVhZGVyIGlkPXtpZH0gY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1faGVhZGVyICR7Y2xhc3NOYW1lfWB9PlxuICAgIDxTaWRlU2VjdGlvbiBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9oZWFkZXJfc2VjdGlvbiBsZWZ0YH0gYmFzaXM9e3NpZGVTZWN0aW9uQmFzaXN9PntsZWZ0fTwvU2lkZVNlY3Rpb24+XG4gICAgPENlbnRlclNlY3Rpb24gY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1faGVhZGVyX3NlY3Rpb24gY2VudGVyYH0+e2NlbnRlcn08L0NlbnRlclNlY3Rpb24+XG4gICAgPFNpZGVTZWN0aW9uIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2hlYWRlcl9zZWN0aW9uIHJpZ2h0YH0gYmFzaXM9e3NpZGVTZWN0aW9uQmFzaXN9PntyaWdodH08L1NpZGVTZWN0aW9uPlxuICA8L1ByaW1pdGl2ZS5IZWFkZXI+XG4pO1xuXG5IZWFkZXJCYXNpYy5wcm9wVHlwZXMgPSB7XG4gIGxlZnQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGNlbnRlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgcmlnaHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNpZGVTZWN0aW9uQmFzaXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbn07XG5cbkhlYWRlckJhc2ljLmRlZmF1bHRQcm9wcyA9IHtcbiAgbGVmdDogdW5kZWZpbmVkLFxuICBjZW50ZXI6IHVuZGVmaW5lZCxcbiAgcmlnaHQ6IHVuZGVmaW5lZCxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgaWQ6ICcnLFxuICBzaWRlU2VjdGlvbkJhc2lzOiAnMjAwcHgnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQmFzaWM7XG4iXX0=