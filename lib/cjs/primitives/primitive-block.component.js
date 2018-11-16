'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  background-color: ', ';\n  height: 100%;\n  width: 100%;\n  padding: ', ';\n'], ['\n  background-color: ', ';\n  height: 100%;\n  width: 100%;\n  padding: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PrimitiveBlock = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.contentBackgroundColor;
}, function (props) {
  return props.theme.gutterWidth;
});
exports.default = PrimitiveBlock;