var _templateObject = _taggedTemplateLiteralLoose(['\n  margin-right: ', ';\n'], ['\n  margin-right: ', ';\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
// App imports
import { classPrefix, theme } from '../constants';
import { PrimitiveHeader, PrimitiveHeaderTitle } from '../primitives';

var ProductTitle = PrimitiveHeaderTitle.extend(_templateObject, theme.gutterWidth);

var HeaderTabFilter = function HeaderTabFilter(_ref) {
  var title = _ref.title;
  return (// eslint-disable-line
    React.createElement(
      PrimitiveHeader,
      { className: classPrefix + '_filter-header' },
      title && React.createElement(
        ProductTitle,
        null,
        title
      )
    )
  );
};

HeaderTabFilter.defaultProps = {
  title: null
};

export default HeaderTabFilter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLWZpbHRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NQcmVmaXgiLCJ0aGVtZSIsIlByaW1pdGl2ZUhlYWRlciIsIlByaW1pdGl2ZUhlYWRlclRpdGxlIiwiUHJvZHVjdFRpdGxlIiwiZXh0ZW5kIiwiZ3V0dGVyV2lkdGgiLCJIZWFkZXJUYWJGaWx0ZXIiLCJ0aXRsZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0E7QUFDQSxTQUFTQyxXQUFULEVBQXNCQyxLQUF0QixRQUFtQyxjQUFuQztBQUNBLFNBQVNDLGVBQVQsRUFBMEJDLG9CQUExQixRQUFzRCxlQUF0RDs7QUFFQSxJQUFNQyxlQUFlRCxxQkFBcUJFLE1BQXBDLGtCQUNZSixNQUFNSyxXQURsQixDQUFOOztBQUlBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFpQjtBQUN2QztBQUFDLHFCQUFEO0FBQUEsUUFBaUIsV0FBY1IsV0FBZCxtQkFBakI7QUFDR1EsZUFBUztBQUFDLG9CQUFEO0FBQUE7QUFBZUE7QUFBZjtBQURaO0FBRHNCO0FBQUEsQ0FBeEI7O0FBVUFELGdCQUFnQkUsWUFBaEIsR0FBK0I7QUFDN0JELFNBQU87QUFEc0IsQ0FBL0I7O0FBSUEsZUFBZUQsZUFBZiIsImZpbGUiOiJoZWFkZXItZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4LCB0aGVtZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBQcmltaXRpdmVIZWFkZXIsIFByaW1pdGl2ZUhlYWRlclRpdGxlIH0gZnJvbSAnLi4vcHJpbWl0aXZlcyc7XG5cbmNvbnN0IFByb2R1Y3RUaXRsZSA9IFByaW1pdGl2ZUhlYWRlclRpdGxlLmV4dGVuZGBcbiAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcbmA7XG5cbmNvbnN0IEhlYWRlclRhYkZpbHRlciA9ICh7IHRpdGxlIH0pID0+ICggLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICA8UHJpbWl0aXZlSGVhZGVyIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2ZpbHRlci1oZWFkZXJgfT5cbiAgICB7dGl0bGUgJiYgPFByb2R1Y3RUaXRsZT57dGl0bGV9PC9Qcm9kdWN0VGl0bGU+fVxuICA8L1ByaW1pdGl2ZUhlYWRlcj5cbik7XG5cbkhlYWRlclRhYkZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuSGVhZGVyVGFiRmlsdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJUYWJGaWx0ZXI7XG4iXX0=