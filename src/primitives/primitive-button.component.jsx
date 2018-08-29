import styled from 'styled-components';
import { Button as BootstrapButton } from 'react-bootstrap';

const Button = styled(BootstrapButton)`
  &&& {
    outline: none;
    box-shadow: none;
  }
`;
export default Button;
