var _templateObject = _taggedTemplateLiteralLoose(['\n  color: ', '\n  background-color: ', '\n  border: 1px solid ', ';\n  display: inline-block;\n  margin-bottom: 0;\n  text-align: center;\n  white-space: nowrap;\n  padding: ', ' ', '\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  min-width: ', ';\n  &:hover:enabled {\n    background-color:', ';\n    border: 1px solid ', ';\n  }\n  \n  &:active {\n    background-color:', ';\n    border: 1px solid ', ';\n  }\n  \n  &&& {\n    outline: none;\n    box-shadow: none;\n  }\n  \n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.65;\n    filter: alpha(opacity=65);\n    box-shadow: none;\n  }\n  \n  ', ';\n'], ['\n  color: ', '\n  background-color: ', '\n  border: 1px solid ', ';\n  display: inline-block;\n  margin-bottom: 0;\n  text-align: center;\n  white-space: nowrap;\n  padding: ', ' ', '\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  min-width: ', ';\n  &:hover:enabled {\n    background-color:', ';\n    border: 1px solid ', ';\n  }\n  \n  &:active {\n    background-color:', ';\n    border: 1px solid ', ';\n  }\n  \n  &&& {\n    outline: none;\n    box-shadow: none;\n  }\n  \n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.65;\n    filter: alpha(opacity=65);\n    box-shadow: none;\n  }\n  \n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n    background-color: ', ';\n    border: 1px solid ', ';\n    &:hover:enabled {\n      background-color:', ';\n      border: 1px solid ', ';\n    }\n    &:active {\n      background-color:', ';\n      border: 1px solid ', ';\n    }\n  '], ['\n    background-color: ', ';\n    border: 1px solid ', ';\n    &:hover:enabled {\n      background-color:', ';\n      border: 1px solid ', ';\n    }\n    &:active {\n      background-color:', ';\n      border: 1px solid ', ';\n    }\n  ']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { css } from 'styled-components';
import { darken } from 'polished';

var Button = styled.button(_templateObject, function (props) {
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
  return props.primary && css(_templateObject2, props.theme.formControls.button.primaryBackgroundColor, darken(0.05, props.theme.formControls.button.primaryBackgroundColor), darken(0.1, props.theme.formControls.button.primaryBackgroundColor), darken(0.15, props.theme.formControls.button.primaryBackgroundColor), darken(0.2, props.theme.formControls.button.primaryBackgroundColor), darken(0.25, props.theme.formControls.button.primaryBackgroundColor));
});

export default Button;