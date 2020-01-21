"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n    background-color: ", ";\n    border: 1px solid ", ";\n    &:hover:enabled {\n      background-color:", ";\n      border: 1px solid ", ";\n    }\n    &:active {\n      background-color:", ";\n      border: 1px solid ", ";\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  background-color: ", ";\n  border: 1px solid ", ";\n  display: inline-block;\n  margin-bottom: 0;\n  text-align: center;\n  white-space: nowrap;\n  padding: ", " ", ";\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  min-width: ", ";\n  &:hover:enabled {\n    background-color:", ";\n    border: 1px solid ", ";\n  }\n\n  &:active {\n    background-color:", ";\n    border: 1px solid ", ";\n  }\n\n  &&& {\n    outline: none;\n    box-shadow: none;\n  }\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.65;\n    filter: alpha(opacity=65);\n    box-shadow: none;\n  }\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Button = _styledComponents["default"].button(_templateObject(), function (props) {
  return props.theme.formControls.button.textColor;
}, function (props) {
  return props.theme.formControls.button.backgroundColor;
}, function (props) {
  return (0, _polished.darken)(0.02, props.theme.formControls.button.backgroundColor);
}, function (props) {
  return props.theme.halfGutterWidth;
}, function (props) {
  return props.theme.gutterWidth;
}, function (props) {
  return props.theme.formControls.button.minWidth;
}, function (props) {
  return (0, _polished.darken)(0.1, props.theme.formControls.button.backgroundColor);
}, function (props) {
  return (0, _polished.darken)(0.05, props.theme.formControls.button.backgroundColor);
}, function (props) {
  return (0, _polished.darken)(0.2, props.theme.formControls.button.backgroundColor);
}, function (props) {
  return (0, _polished.darken)(0.25, props.theme.formControls.button.backgroundColor);
}, function (props) {
  return props.primary && (0, _styledComponents.css)(_templateObject2(), props.theme.formControls.button.primaryBackgroundColor, (0, _polished.darken)(0.05, props.theme.formControls.button.primaryBackgroundColor), (0, _polished.darken)(0.1, props.theme.formControls.button.primaryBackgroundColor), (0, _polished.darken)(0.15, props.theme.formControls.button.primaryBackgroundColor), (0, _polished.darken)(0.2, props.theme.formControls.button.primaryBackgroundColor), (0, _polished.darken)(0.25, props.theme.formControls.button.primaryBackgroundColor));
});

var _default = Button;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wcmltaXRpdmVzL2Zvcm0tY29udHJvbHMvcHJpbWl0aXZlLWJ1dHRvbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIkJ1dHRvbiIsInN0eWxlZCIsImJ1dHRvbiIsInByb3BzIiwidGhlbWUiLCJmb3JtQ29udHJvbHMiLCJ0ZXh0Q29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoYWxmR3V0dGVyV2lkdGgiLCJndXR0ZXJXaWR0aCIsIm1pbldpZHRoIiwicHJpbWFyeSIsImNzcyIsInByaW1hcnlCYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLDZCQUFPQyxNQUFWLG9CQUNELFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFBWixDQUF5QkgsTUFBekIsQ0FBZ0NJLFNBQXBDO0FBQUEsQ0FESixFQUVVLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFBWixDQUF5QkgsTUFBekIsQ0FBZ0NLLGVBQXBDO0FBQUEsQ0FGZixFQUdVLFVBQUFKLEtBQUs7QUFBQSxTQUFJLHNCQUFPLElBQVAsRUFBYUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFlBQVosQ0FBeUJILE1BQXpCLENBQWdDSyxlQUE3QyxDQUFKO0FBQUEsQ0FIZixFQVFDLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUksZUFBaEI7QUFBQSxDQVJOLEVBUXlDLFVBQUFMLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUssV0FBaEI7QUFBQSxDQVI5QyxFQWFHLFVBQUFOLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFBWixDQUF5QkgsTUFBekIsQ0FBZ0NRLFFBQXBDO0FBQUEsQ0FiUixFQWVXLFVBQUFQLEtBQUs7QUFBQSxTQUFJLHNCQUFPLEdBQVAsRUFBWUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFlBQVosQ0FBeUJILE1BQXpCLENBQWdDSyxlQUE1QyxDQUFKO0FBQUEsQ0FmaEIsRUFnQlksVUFBQUosS0FBSztBQUFBLFNBQUksc0JBQU8sSUFBUCxFQUFhQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFBWixDQUF5QkgsTUFBekIsQ0FBZ0NLLGVBQTdDLENBQUo7QUFBQSxDQWhCakIsRUFvQlcsVUFBQUosS0FBSztBQUFBLFNBQUksc0JBQU8sR0FBUCxFQUFZQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFBWixDQUF5QkgsTUFBekIsQ0FBZ0NLLGVBQTVDLENBQUo7QUFBQSxDQXBCaEIsRUFxQlksVUFBQUosS0FBSztBQUFBLFNBQUksc0JBQU8sSUFBUCxFQUFhQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFBWixDQUF5QkgsTUFBekIsQ0FBZ0NLLGVBQTdDLENBQUo7QUFBQSxDQXJCakIsRUFvQ1IsVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ1EsT0FBTixRQUFpQkMscUJBQWpCLHNCQUNXVCxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFBWixDQUF5QkgsTUFBekIsQ0FBZ0NXLHNCQUQzQyxFQUVXLHNCQUFPLElBQVAsRUFBYVYsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFlBQVosQ0FBeUJILE1BQXpCLENBQWdDVyxzQkFBN0MsQ0FGWCxFQUlZLHNCQUFPLEdBQVAsRUFBWVYsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFlBQVosQ0FBeUJILE1BQXpCLENBQWdDVyxzQkFBNUMsQ0FKWixFQUthLHNCQUFPLElBQVAsRUFBYVYsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFlBQVosQ0FBeUJILE1BQXpCLENBQWdDVyxzQkFBN0MsQ0FMYixFQVFZLHNCQUFPLEdBQVAsRUFBWVYsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFlBQVosQ0FBeUJILE1BQXpCLENBQWdDVyxzQkFBNUMsQ0FSWixFQVNhLHNCQUFPLElBQVAsRUFBYVYsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFlBQVosQ0FBeUJILE1BQXpCLENBQWdDVyxzQkFBN0MsQ0FUYixDQUFKO0FBQUEsQ0FwQ0csQ0FBWjs7ZUFrRGViLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGRhcmtlbiB9IGZyb20gJ3BvbGlzaGVkJztcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9ybUNvbnRyb2xzLmJ1dHRvbi50ZXh0Q29sb3J9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvcm1Db250cm9scy5idXR0b24uYmFja2dyb3VuZENvbG9yfTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBkYXJrZW4oMC4wMiwgcHJvcHMudGhlbWUuZm9ybUNvbnRyb2xzLmJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3IpfTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRofSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmd1dHRlcldpZHRofTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbWluLXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvcm1Db250cm9scy5idXR0b24ubWluV2lkdGh9O1xuICAmOmhvdmVyOmVuYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6JHtwcm9wcyA9PiBkYXJrZW4oMC4xLCBwcm9wcy50aGVtZS5mb3JtQ29udHJvbHMuYnV0dG9uLmJhY2tncm91bmRDb2xvcil9O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gZGFya2VuKDAuMDUsIHByb3BzLnRoZW1lLmZvcm1Db250cm9scy5idXR0b24uYmFja2dyb3VuZENvbG9yKX07XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjoke3Byb3BzID0+IGRhcmtlbigwLjIsIHByb3BzLnRoZW1lLmZvcm1Db250cm9scy5idXR0b24uYmFja2dyb3VuZENvbG9yKX07XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBkYXJrZW4oMC4yNSwgcHJvcHMudGhlbWUuZm9ybUNvbnRyb2xzLmJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3IpfTtcbiAgfVxuXG4gICYmJiB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgJltkaXNhYmxlZF0ge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogMC42NTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NjUpO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAke3Byb3BzID0+IHByb3BzLnByaW1hcnkgJiYgY3NzYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMudGhlbWUuZm9ybUNvbnRyb2xzLmJ1dHRvbi5wcmltYXJ5QmFja2dyb3VuZENvbG9yfTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke2RhcmtlbigwLjA1LCBwcm9wcy50aGVtZS5mb3JtQ29udHJvbHMuYnV0dG9uLnByaW1hcnlCYWNrZ3JvdW5kQ29sb3IpfTtcbiAgICAmOmhvdmVyOmVuYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjoke2RhcmtlbigwLjEsIHByb3BzLnRoZW1lLmZvcm1Db250cm9scy5idXR0b24ucHJpbWFyeUJhY2tncm91bmRDb2xvcil9O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtkYXJrZW4oMC4xNSwgcHJvcHMudGhlbWUuZm9ybUNvbnRyb2xzLmJ1dHRvbi5wcmltYXJ5QmFja2dyb3VuZENvbG9yKX07XG4gICAgfVxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6JHtkYXJrZW4oMC4yLCBwcm9wcy50aGVtZS5mb3JtQ29udHJvbHMuYnV0dG9uLnByaW1hcnlCYWNrZ3JvdW5kQ29sb3IpfTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7ZGFya2VuKDAuMjUsIHByb3BzLnRoZW1lLmZvcm1Db250cm9scy5idXR0b24ucHJpbWFyeUJhY2tncm91bmRDb2xvcil9O1xuICAgIH1cbiAgYH07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXX0=