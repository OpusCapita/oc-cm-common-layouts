var _templateObject = _taggedTemplateLiteralLoose(['\n  font-size: ', ';\n  font-weight: ', ';\n  margin: 0;\n'], ['\n  font-size: ', ';\n  font-weight: ', ';\n  margin: 0;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled from 'styled-components';

var PrimitiveSubtitle = styled.h2(_templateObject, function (props) {
  return props.theme.text.subTitle.fontSize;
}, function (props) {
  return props.theme.text.subTitle.fontWeight;
});
export default PrimitiveSubtitle;