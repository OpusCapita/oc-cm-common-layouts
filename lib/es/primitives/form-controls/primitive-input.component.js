var _templateObject = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  height: ', ';\n  padding: ', ' ', ';\n  border: 1px solid ', ';\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  \n  &:focus {\n    border-color: ', ';\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(254, 202, 29, 0.6);\n  }\n'], ['\n  width: 100%;\n  height: ', ';\n  padding: ', ' ', ';\n  border: 1px solid ', ';\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  \n  &:focus {\n    border-color: ', ';\n    outline: 0;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(254, 202, 29, 0.6);\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

var Input = styled.input(_templateObject, function (props) {
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

export default Input;