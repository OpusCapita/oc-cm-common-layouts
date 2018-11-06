var _templateObject = _taggedTemplateLiteralLoose(['\n  animation: spin 2s linear infinite;\n  font-size: 20px;\n  margin-right: 0;\n  margin-left: auto;\n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n   100% { transform: rotate(360deg); }\n  }\n'], ['\n  animation: spin 2s linear infinite;\n  font-size: 20px;\n  margin-right: 0;\n  margin-left: auto;\n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n   100% { transform: rotate(360deg); }\n  }\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';
import FaSpinner from 'react-icons/lib/fa/spinner';

var PrimitiveSpinner = styled(FaSpinner)(_templateObject);
export default PrimitiveSpinner;