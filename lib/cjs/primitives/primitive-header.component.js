'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  background: ', ';\n  height: ', ';\n  display: flex;\n  padding: 0 ', ';\n  align-items: center;\n'], ['\n  background: ', ';\n  height: ', ';\n  display: flex;\n  padding: 0 ', ';\n  align-items: center;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PrimitiveHeader = _styledComponents2.default.header(_templateObject, function (props) {
  return props.theme.contentBackgroundColor;
}, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.gutterWidth;
});
exports.default = PrimitiveHeader;