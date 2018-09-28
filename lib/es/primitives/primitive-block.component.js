var _templateObject = _taggedTemplateLiteralLoose(['\n  background-color: ', ';\n  height: 100%;\n  width: 100%;\n  padding: ', ';\n'], ['\n  background-color: ', ';\n  height: 100%;\n  width: 100%;\n  padding: ', ';\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

var PrimitiveBlock = styled.div(_templateObject, function (props) {
  return props.theme.contentBackgroundColor;
}, function (props) {
  return props.theme.gutterWidth;
});
export default PrimitiveBlock;