import styled from 'styled-components';
import FaSpinner from 'react-icons/lib/fa/spinner';

const PrimitiveSpinner = styled(FaSpinner)`
  animation: spin 2s linear infinite;
  font-size: 20px;
  margin-right: 0;
  margin-left: auto;
  @keyframes spin {
    0% { transform: rotate(0deg); }
   100% { transform: rotate(360deg); }
  }
`;
export default PrimitiveSpinner;
