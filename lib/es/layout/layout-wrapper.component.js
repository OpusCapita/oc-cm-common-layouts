function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  height:100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; // App imports

import { classPrefix } from '../constants';
var StyledWrapper = styled.div(_templateObject());

var Wrapper = function Wrapper(_ref) {
  var children = _ref.children,
      id = _ref.id,
      className = _ref.className;
  return React.createElement(StyledWrapper, {
    className: classPrefix + "_wrapper " + className,
    id: id
  }, children);
};

Wrapper.defaultProps = {
  children: undefined,
  id: '',
  className: ''
};
export default Wrapper;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9sYXlvdXQvbGF5b3V0LXdyYXBwZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsImNsYXNzUHJlZml4IiwiU3R5bGVkV3JhcHBlciIsImRpdiIsIldyYXBwZXIiLCJjaGlsZHJlbiIsImlkIiwiY2xhc3NOYW1lIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5CLEMsQ0FDQTs7QUFDQSxTQUFTQyxXQUFULFFBQTRCLGNBQTVCO0FBRUEsSUFBTUMsYUFBYSxHQUFHRixNQUFNLENBQUNHLEdBQVYsbUJBQW5COztBQUdBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYUMsRUFBYixRQUFhQSxFQUFiO0FBQUEsTUFBaUJDLFNBQWpCLFFBQWlCQSxTQUFqQjtBQUFBLFNBQ2Qsb0JBQUMsYUFBRDtBQUNFLElBQUEsU0FBUyxFQUFLTixXQUFMLGlCQUE0Qk0sU0FEdkM7QUFFRSxJQUFBLEVBQUUsRUFBRUQ7QUFGTixLQUlHRCxRQUpILENBRGM7QUFBQSxDQUFoQjs7QUFjQUQsT0FBTyxDQUFDSSxZQUFSLEdBQXVCO0FBQ3JCSCxFQUFBQSxRQUFRLEVBQUVJLFNBRFc7QUFFckJILEVBQUFBLEVBQUUsRUFBRSxFQUZpQjtBQUdyQkMsRUFBQUEsU0FBUyxFQUFFO0FBSFUsQ0FBdkI7QUFNQSxlQUFlSCxPQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCB9IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IFN0eWxlZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6MTAwdmg7XG5gO1xuY29uc3QgV3JhcHBlciA9ICh7IGNoaWxkcmVuLCBpZCwgY2xhc3NOYW1lIH0pID0+IChcbiAgPFN0eWxlZFdyYXBwZXJcbiAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV93cmFwcGVyICR7Y2xhc3NOYW1lfWB9XG4gICAgaWQ9e2lkfVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L1N0eWxlZFdyYXBwZXI+XG4pO1xuXG5XcmFwcGVyLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbldyYXBwZXIuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBpZDogJycsXG4gIGNsYXNzTmFtZTogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyO1xuIl19