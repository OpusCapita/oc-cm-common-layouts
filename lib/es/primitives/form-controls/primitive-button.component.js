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

import styled, { css } from 'styled-components';
import { darken } from 'polished';
var Button = styled.button(_templateObject(), function (props) {
  return props.theme.formControls.button.textColor;
}, function (props) {
  return props.theme.formControls.button.backgroundColor;
}, function (props) {
  return darken(0.02, props.theme.formControls.button.backgroundColor);
}, function (props) {
  return props.theme.halfGutterWidth;
}, function (props) {
  return props.theme.gutterWidth;
}, function (props) {
  return props.theme.formControls.button.minWidth;
}, function (props) {
  return darken(0.1, props.theme.formControls.button.backgroundColor);
}, function (props) {
  return darken(0.05, props.theme.formControls.button.backgroundColor);
}, function (props) {
  return darken(0.2, props.theme.formControls.button.backgroundColor);
}, function (props) {
  return darken(0.25, props.theme.formControls.button.backgroundColor);
}, function (props) {
  return props.primary && css(_templateObject2(), props.theme.formControls.button.primaryBackgroundColor, darken(0.05, props.theme.formControls.button.primaryBackgroundColor), darken(0.1, props.theme.formControls.button.primaryBackgroundColor), darken(0.15, props.theme.formControls.button.primaryBackgroundColor), darken(0.2, props.theme.formControls.button.primaryBackgroundColor), darken(0.25, props.theme.formControls.button.primaryBackgroundColor));
});
export default Button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wcmltaXRpdmVzL2Zvcm0tY29udHJvbHMvcHJpbWl0aXZlLWJ1dHRvbi5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsImNzcyIsImRhcmtlbiIsIkJ1dHRvbiIsImJ1dHRvbiIsInByb3BzIiwidGhlbWUiLCJmb3JtQ29udHJvbHMiLCJ0ZXh0Q29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoYWxmR3V0dGVyV2lkdGgiLCJndXR0ZXJXaWR0aCIsIm1pbldpZHRoIiwicHJpbWFyeSIsInByaW1hcnlCYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxNQUFQLElBQWlCQyxHQUFqQixRQUE0QixtQkFBNUI7QUFDQSxTQUFTQyxNQUFULFFBQXVCLFVBQXZCO0FBRUEsSUFBTUMsTUFBTSxHQUFHSCxNQUFNLENBQUNJLE1BQVYsb0JBQ0QsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUFaLENBQXlCSCxNQUF6QixDQUFnQ0ksU0FBcEM7QUFBQSxDQURKLEVBRVUsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUFaLENBQXlCSCxNQUF6QixDQUFnQ0ssZUFBcEM7QUFBQSxDQUZmLEVBR1UsVUFBQUosS0FBSztBQUFBLFNBQUlILE1BQU0sQ0FBQyxJQUFELEVBQU9HLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUFaLENBQXlCSCxNQUF6QixDQUFnQ0ssZUFBdkMsQ0FBVjtBQUFBLENBSGYsRUFRQyxVQUFBSixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlJLGVBQWhCO0FBQUEsQ0FSTixFQVF5QyxVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlLLFdBQWhCO0FBQUEsQ0FSOUMsRUFhRyxVQUFBTixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFlBQVosQ0FBeUJILE1BQXpCLENBQWdDUSxRQUFwQztBQUFBLENBYlIsRUFlVyxVQUFBUCxLQUFLO0FBQUEsU0FBSUgsTUFBTSxDQUFDLEdBQUQsRUFBTUcsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFlBQVosQ0FBeUJILE1BQXpCLENBQWdDSyxlQUF0QyxDQUFWO0FBQUEsQ0FmaEIsRUFnQlksVUFBQUosS0FBSztBQUFBLFNBQUlILE1BQU0sQ0FBQyxJQUFELEVBQU9HLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUFaLENBQXlCSCxNQUF6QixDQUFnQ0ssZUFBdkMsQ0FBVjtBQUFBLENBaEJqQixFQW9CVyxVQUFBSixLQUFLO0FBQUEsU0FBSUgsTUFBTSxDQUFDLEdBQUQsRUFBTUcsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFlBQVosQ0FBeUJILE1BQXpCLENBQWdDSyxlQUF0QyxDQUFWO0FBQUEsQ0FwQmhCLEVBcUJZLFVBQUFKLEtBQUs7QUFBQSxTQUFJSCxNQUFNLENBQUMsSUFBRCxFQUFPRyxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFBWixDQUF5QkgsTUFBekIsQ0FBZ0NLLGVBQXZDLENBQVY7QUFBQSxDQXJCakIsRUFvQ1IsVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ1EsT0FBTixJQUFpQlosR0FBakIscUJBQ1dJLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUFaLENBQXlCSCxNQUF6QixDQUFnQ1Usc0JBRDNDLEVBRVdaLE1BQU0sQ0FBQyxJQUFELEVBQU9HLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUFaLENBQXlCSCxNQUF6QixDQUFnQ1Usc0JBQXZDLENBRmpCLEVBSVlaLE1BQU0sQ0FBQyxHQUFELEVBQU1HLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUFaLENBQXlCSCxNQUF6QixDQUFnQ1Usc0JBQXRDLENBSmxCLEVBS2FaLE1BQU0sQ0FBQyxJQUFELEVBQU9HLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUFaLENBQXlCSCxNQUF6QixDQUFnQ1Usc0JBQXZDLENBTG5CLEVBUVlaLE1BQU0sQ0FBQyxHQUFELEVBQU1HLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUFaLENBQXlCSCxNQUF6QixDQUFnQ1Usc0JBQXRDLENBUmxCLEVBU2FaLE1BQU0sQ0FBQyxJQUFELEVBQU9HLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUFaLENBQXlCSCxNQUF6QixDQUFnQ1Usc0JBQXZDLENBVG5CLENBQUo7QUFBQSxDQXBDRyxDQUFaO0FBa0RBLGVBQWVYLE1BQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGRhcmtlbiB9IGZyb20gJ3BvbGlzaGVkJztcblxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZm9ybUNvbnRyb2xzLmJ1dHRvbi50ZXh0Q29sb3J9O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvcm1Db250cm9scy5idXR0b24uYmFja2dyb3VuZENvbG9yfTtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBkYXJrZW4oMC4wMiwgcHJvcHMudGhlbWUuZm9ybUNvbnRyb2xzLmJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3IpfTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRofSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmd1dHRlcldpZHRofTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbWluLXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmZvcm1Db250cm9scy5idXR0b24ubWluV2lkdGh9O1xuICAmOmhvdmVyOmVuYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6JHtwcm9wcyA9PiBkYXJrZW4oMC4xLCBwcm9wcy50aGVtZS5mb3JtQ29udHJvbHMuYnV0dG9uLmJhY2tncm91bmRDb2xvcil9O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gZGFya2VuKDAuMDUsIHByb3BzLnRoZW1lLmZvcm1Db250cm9scy5idXR0b24uYmFja2dyb3VuZENvbG9yKX07XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjoke3Byb3BzID0+IGRhcmtlbigwLjIsIHByb3BzLnRoZW1lLmZvcm1Db250cm9scy5idXR0b24uYmFja2dyb3VuZENvbG9yKX07XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBkYXJrZW4oMC4yNSwgcHJvcHMudGhlbWUuZm9ybUNvbnRyb2xzLmJ1dHRvbi5iYWNrZ3JvdW5kQ29sb3IpfTtcbiAgfVxuXG4gICYmJiB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgJltkaXNhYmxlZF0ge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogMC42NTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NjUpO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAke3Byb3BzID0+IHByb3BzLnByaW1hcnkgJiYgY3NzYFxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMudGhlbWUuZm9ybUNvbnRyb2xzLmJ1dHRvbi5wcmltYXJ5QmFja2dyb3VuZENvbG9yfTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke2RhcmtlbigwLjA1LCBwcm9wcy50aGVtZS5mb3JtQ29udHJvbHMuYnV0dG9uLnByaW1hcnlCYWNrZ3JvdW5kQ29sb3IpfTtcbiAgICAmOmhvdmVyOmVuYWJsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjoke2RhcmtlbigwLjEsIHByb3BzLnRoZW1lLmZvcm1Db250cm9scy5idXR0b24ucHJpbWFyeUJhY2tncm91bmRDb2xvcil9O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtkYXJrZW4oMC4xNSwgcHJvcHMudGhlbWUuZm9ybUNvbnRyb2xzLmJ1dHRvbi5wcmltYXJ5QmFja2dyb3VuZENvbG9yKX07XG4gICAgfVxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6JHtkYXJrZW4oMC4yLCBwcm9wcy50aGVtZS5mb3JtQ29udHJvbHMuYnV0dG9uLnByaW1hcnlCYWNrZ3JvdW5kQ29sb3IpfTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7ZGFya2VuKDAuMjUsIHByb3BzLnRoZW1lLmZvcm1Db250cm9scy5idXR0b24ucHJpbWFyeUJhY2tncm91bmRDb2xvcil9O1xuICAgIH1cbiAgYH07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXX0=