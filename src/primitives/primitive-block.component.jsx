import styled from 'styled-components';

const PrimitiveBlock = styled.div`
  background-color: ${props => props.theme.contentBackgroundColor};
  height: 100%;
  width: 100%;
  padding: ${props => props.theme.gutterWidth};
`;
export default PrimitiveBlock;
