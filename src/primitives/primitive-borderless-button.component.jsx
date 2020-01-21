import styled from 'styled-components';

const PrimitiveBorderlessButton = styled.button`
  background: transparent;
  border: none;
  padding: 0; 
  margin: 0;
  &&& {
    outline: none;
    box-shadow: none;
  }
`;
export default PrimitiveBorderlessButton;
