'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  font-size: ', ';\n  font-weight: ', ';\n  margin: 0;\n'], ['\n  font-size: ', ';\n  font-weight: ', ';\n  margin: 0;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PrimitiveTitle = _styledComponents2.default.h1(_templateObject, function (props) {
  return props.theme.text.title.fontSize;
}, function (props) {
  return props.theme.text.title.fontWeight;
});
exports.default = PrimitiveTitle;