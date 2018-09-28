'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  color: ', '\n  background-color: ', '\n  border: 1px solid ', ';\n  display: inline-block;\n  margin-bottom: 0;\n  text-align: center;\n  white-space: nowrap;\n  padding: ', ' ', '\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  min-width: ', ';\n  &:hover:enabled {\n    background-color:', ';\n    border: 1px solid ', ';\n  }\n  \n  &:active {\n    background-color:', ';\n    border: 1px solid ', ';\n  }\n  \n  &&& {\n    outline: none;\n    box-shadow: none;\n  }\n  \n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.65;\n    filter: alpha(opacity=65);\n    box-shadow: none;\n  }\n  \n  ', ';\n'], ['\n  color: ', '\n  background-color: ', '\n  border: 1px solid ', ';\n  display: inline-block;\n  margin-bottom: 0;\n  text-align: center;\n  white-space: nowrap;\n  padding: ', ' ', '\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  min-width: ', ';\n  &:hover:enabled {\n    background-color:', ';\n    border: 1px solid ', ';\n  }\n  \n  &:active {\n    background-color:', ';\n    border: 1px solid ', ';\n  }\n  \n  &&& {\n    outline: none;\n    box-shadow: none;\n  }\n  \n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.65;\n    filter: alpha(opacity=65);\n    box-shadow: none;\n  }\n  \n  ', ';\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n    background-color: ', ';\n    border: 1px solid ', ';\n    &:hover:enabled {\n      background-color:', ';\n      border: 1px solid ', ';\n    }\n    &:active {\n      background-color:', ';\n      border: 1px solid ', ';\n    }\n  '], ['\n    background-color: ', ';\n    border: 1px solid ', ';\n    &:hover:enabled {\n      background-color:', ';\n      border: 1px solid ', ';\n    }\n    &:active {\n      background-color:', ';\n      border: 1px solid ', ';\n    }\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Button = _styledComponents2.default.button(_templateObject, function (props) {
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
  return props.primary && (0, _styledComponents.css)(_templateObject2, props.theme.formControls.button.primaryBackgroundColor, (0, _polished.darken)(0.05, props.theme.formControls.button.primaryBackgroundColor), (0, _polished.darken)(0.1, props.theme.formControls.button.primaryBackgroundColor), (0, _polished.darken)(0.15, props.theme.formControls.button.primaryBackgroundColor), (0, _polished.darken)(0.2, props.theme.formControls.button.primaryBackgroundColor), (0, _polished.darken)(0.25, props.theme.formControls.button.primaryBackgroundColor));
});

exports.default = Button;