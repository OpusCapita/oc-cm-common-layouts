import styled from 'styled-components';
import { theme } from '../constants';

const PrimitiveBlock = styled.div`
  background-color: ${theme.card.backgroundColor};
  height: 100%;
  width: 100%;
  padding: ${theme.gutterWidth};
`;
export default PrimitiveBlock;
