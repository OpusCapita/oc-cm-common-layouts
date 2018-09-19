import styled from 'styled-components';

const PrimitiveHeader = styled.header`
  background: ${props => props.theme.contentBackgroundColor};
  height: ${props => props.theme.header.height};
  display: flex;
  padding: 0 ${props => props.theme.gutterWidth};
  align-items: center;
`;
export default PrimitiveHeader;
