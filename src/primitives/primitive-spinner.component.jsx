import styled from 'styled-components';
import Spinner from 'react-icons/lib/fa/spinner';

const PrimitiveSpinner = styled(Spinner)`
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  height: ${props => props.theme.card.spinner.height};
  width: ${props => props.theme.card.spinner.height};

  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;
`;
export default PrimitiveSpinner;
