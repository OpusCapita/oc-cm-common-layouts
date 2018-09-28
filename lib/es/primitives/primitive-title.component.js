var _templateObject = _taggedTemplateLiteralLoose(['\n  font-size: ', ';\n  font-weight: ', ';\n  margin: 0;\n'], ['\n  font-size: ', ';\n  font-weight: ', ';\n  margin: 0;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

var PrimitiveTitle = styled.h1(_templateObject, function (props) {
  return props.theme.text.title.fontSize;
}, function (props) {
  return props.theme.text.title.fontWeight;
});
export default PrimitiveTitle;