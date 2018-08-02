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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWFkZXIvaGVhZGVyLWZpbHRlci5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiY2xhc3NQcmVmaXgiLCJ0aGVtZSIsIlByaW1pdGl2ZUhlYWRlciIsIlByaW1pdGl2ZUhlYWRlclRpdGxlIiwiUHJvZHVjdFRpdGxlIiwiZXh0ZW5kIiwiZ3V0dGVyV2lkdGgiLCJIZWFkZXJUYWJGaWx0ZXIiLCJ0aXRsZSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0E7QUFDQSxTQUFTQyxXQUFULEVBQXNCQyxLQUF0QixRQUFtQyxjQUFuQztBQUNBLFNBQVNDLGVBQVQsRUFBMEJDLG9CQUExQixRQUFzRCxlQUF0RDs7QUFFQSxJQUFNQyxlQUFlRCxxQkFBcUJFLE1BQXBDLGtCQUNZSixNQUFNSyxXQURsQixDQUFOOztBQUlBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0I7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUFpQjtBQUN2QztBQUFDLHFCQUFEO0FBQUEsUUFBaUIsV0FBY1IsV0FBZCxtQkFBakI7QUFDR1EsZUFBUztBQUFDLG9CQUFEO0FBQUE7QUFBZUE7QUFBZjtBQURaO0FBRHNCO0FBQUEsQ0FBeEI7O0FBVUFELGdCQUFnQkUsWUFBaEIsR0FBK0I7QUFDN0JELFNBQU87QUFEc0IsQ0FBL0I7O0FBSUEsZUFBZUQsZUFBZiIsImZpbGUiOiJoZWFkZXItZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IGNsYXNzUHJlZml4LCB0aGVtZSB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBQcmltaXRpdmVIZWFkZXIsIFByaW1pdGl2ZUhlYWRlclRpdGxlIH0gZnJvbSAnLi4vcHJpbWl0aXZlcyc7XG5cbmNvbnN0IFByb2R1Y3RUaXRsZSA9IFByaW1pdGl2ZUhlYWRlclRpdGxlLmV4dGVuZGBcbiAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcbmA7XG5cbmNvbnN0IEhlYWRlclRhYkZpbHRlciA9ICh7IHRpdGxlIH0pID0+ICggLy8gZXNsaW50LWRpc2FibGUtbGluZVxyXG4gIDxQcmltaXRpdmVIZWFkZXIgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fZmlsdGVyLWhlYWRlcmB9PlxuICAgIHt0aXRsZSAmJiA8UHJvZHVjdFRpdGxlPnt0aXRsZX08L1Byb2R1Y3RUaXRsZT59XG4gIDwvUHJpbWl0aXZlSGVhZGVyPlxuKTtcblxuSGVhZGVyVGFiRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5IZWFkZXJUYWJGaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclRhYkZpbHRlcjtcbiJdfQ==