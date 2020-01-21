"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  background: ", ";\n  height: ", ";\n  display: flex;\n  padding: 0 ", ";\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var PrimitiveHeader = _styledComponents["default"].header(_templateObject(), function (props) {
  return props.theme.contentBackgroundColor;
}, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.gutterWidth;
});

var _default = PrimitiveHeader;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcmltaXRpdmVzL3ByaW1pdGl2ZS1oZWFkZXIuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJQcmltaXRpdmVIZWFkZXIiLCJzdHlsZWQiLCJoZWFkZXIiLCJwcm9wcyIsInRoZW1lIiwiY29udGVudEJhY2tncm91bmRDb2xvciIsImhlaWdodCIsImd1dHRlcldpZHRoIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZUFBZSxHQUFHQyw2QkFBT0MsTUFBVixvQkFDTCxVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLHNCQUFoQjtBQUFBLENBREEsRUFFVCxVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlGLE1BQVosQ0FBbUJJLE1BQXZCO0FBQUEsQ0FGSSxFQUlOLFVBQUFILEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsV0FBaEI7QUFBQSxDQUpDLENBQXJCOztlQU9lUCxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFByaW1pdGl2ZUhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29udGVudEJhY2tncm91bmRDb2xvcn07XG4gIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oZWFkZXIuaGVpZ2h0fTtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmd1dHRlcldpZHRofTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5leHBvcnQgZGVmYXVsdCBQcmltaXRpdmVIZWFkZXI7XG4iXX0=