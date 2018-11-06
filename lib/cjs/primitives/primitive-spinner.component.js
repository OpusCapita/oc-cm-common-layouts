'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  animation: spin 2s linear infinite;\n  font-size: 20px;\n  margin-right: 0;\n  margin-left: auto;\n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n   100% { transform: rotate(360deg); }\n  }\n'], ['\n  animation: spin 2s linear infinite;\n  font-size: 20px;\n  margin-right: 0;\n  margin-left: auto;\n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n   100% { transform: rotate(360deg); }\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _spinner = require('react-icons/lib/fa/spinner');

var _spinner2 = _interopRequireDefault(_spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var PrimitiveSpinner = (0, _styledComponents2.default)(_spinner2.default)(_templateObject);
exports.default = PrimitiveSpinner;