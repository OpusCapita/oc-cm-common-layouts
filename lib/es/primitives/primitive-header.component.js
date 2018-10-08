var _templateObject = _taggedTemplateLiteralLoose(['\n  background: ', ';\n  height: ', ';\n  display: flex;\n  padding: 0 ', ';\n  align-items: center;\n'], ['\n  background: ', ';\n  height: ', ';\n  display: flex;\n  padding: 0 ', ';\n  align-items: center;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

var PrimitiveHeader = styled.header(_templateObject, function (props) {
  return props.theme.contentBackgroundColor;
}, function (props) {
  return props.theme.header.height;
}, function (props) {
  return props.theme.gutterWidth;
});
export default PrimitiveHeader;