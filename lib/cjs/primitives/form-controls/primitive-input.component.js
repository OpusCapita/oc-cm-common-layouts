"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  height: ", ";\n  padding: ", " ", ";\n  border: 1px solid ", ";\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  \n  &:focus {\n    border-color: ", ";\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(254, 202, 29, 0.6);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Input = _styledComponents["default"].input(_templateObject(), function (props) {
  return props.theme.formControls.input.height;
}, function (props) {
  return props.theme.halfGutterWidth;
}, function (props) {
  return props.theme.gutterWidth;
}, function (props) {
  return props.theme.formControls.input.borderColor;
}, function (props) {
  return props.theme.formControls.input.focusBorderColor;
});

var _default = Input;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wcmltaXRpdmVzL2Zvcm0tY29udHJvbHMvcHJpbWl0aXZlLWlucHV0LmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiSW5wdXQiLCJzdHlsZWQiLCJpbnB1dCIsInByb3BzIiwidGhlbWUiLCJmb3JtQ29udHJvbHMiLCJoZWlnaHQiLCJoYWxmR3V0dGVyV2lkdGgiLCJndXR0ZXJXaWR0aCIsImJvcmRlckNvbG9yIiwiZm9jdXNCb3JkZXJDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLEtBQUssR0FBR0MsNkJBQU9DLEtBQVYsb0JBRUMsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUFaLENBQXlCSCxLQUF6QixDQUErQkksTUFBbkM7QUFBQSxDQUZOLEVBR0UsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxlQUFoQjtBQUFBLENBSFAsRUFHMEMsVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxXQUFoQjtBQUFBLENBSC9DLEVBSVcsVUFBQUwsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUFaLENBQXlCSCxLQUF6QixDQUErQk8sV0FBbkM7QUFBQSxDQUpoQixFQVNTLFVBQUFOLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFBWixDQUF5QkgsS0FBekIsQ0FBK0JRLGdCQUFuQztBQUFBLENBVGQsQ0FBWDs7ZUFlZVYsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5mb3JtQ29udHJvbHMuaW5wdXQuaGVpZ2h0fTtcbiAgcGFkZGluZzogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGh9ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBib3JkZXI6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvcm1Db250cm9scy5pbnB1dC5ib3JkZXJDb2xvcn07XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IDAuMTVzLCBib3gtc2hhZG93IGVhc2UtaW4tb3V0IDAuMTVzO1xuICBcbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvcm1Db250cm9scy5pbnB1dC5mb2N1c0JvcmRlckNvbG9yfTtcbiAgICBvdXRsaW5lOiAwO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDhweCByZ2JhKDI1NCwgMjAyLCAyOSwgMC42KTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG4iXX0=