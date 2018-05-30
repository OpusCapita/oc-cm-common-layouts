/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';
import { theme } from '../constants';

const PrimitiveHeader = styled.header`
  background: ${theme.contentBackgroundColor};
  height: ${theme.header.height};
  display: flex;
  padding: 0 ${theme.gutterWidth};
  align-items: center;
`;
export default PrimitiveHeader;
