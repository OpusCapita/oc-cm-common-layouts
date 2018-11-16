'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  background: transparent;\n  border: none;\n  padding:0; \n  margin:0;\n  &&& {\n    outline: none;\n    box-shadow: none;\n  }\n'], ['\n  background: transparent;\n  border: none;\n  padding:0; \n  margin:0;\n  &&& {\n    outline: none;\n    box-shadow: none;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PrimitiveBorderlessButton = _styledComponents2.default.button(_templateObject);
exports.default = PrimitiveBorderlessButton;