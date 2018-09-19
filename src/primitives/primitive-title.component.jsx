import styled from 'styled-components';

const PrimitiveTitle = styled.h1`
  font-size: ${props => props.theme.text.title.fontSize};
  font-weight: ${props => props.theme.text.title.fontWeight};
  margin: 0;
`;
export default PrimitiveTitle;
