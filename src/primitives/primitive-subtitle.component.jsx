import styled from 'styled-components';

const PrimitiveSubtitle = styled.h2`
  font-size: ${props => props.theme.text.subTitle.fontSize};
  font-weight: ${props => props.theme.text.subTitle.fontWeight};
  margin: 0;
`;
export default PrimitiveSubtitle;
