import styled from 'styled-components';
import { theme } from '../../constants';

const Input = styled.input`
  width: 100%;
  height: ${theme.formControls.input.height};
  padding: ${theme.halfGutterWidth} ${theme.gutterWidth};
  border: 1px solid ${theme.formControls.input.borderColor};
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  
  &:focus {
    border-color: ${theme.formControls.input.focusBorderColor};
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(254, 202, 29, 0.6);
  }
`;

export default Input;
