import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import { classPrefix } from '../constants';

const StyledWrapper = styled.div`
  width:100vw;
  height:100vh;
`;
const Wrapper = ({ children }) => (
  <StyledWrapper className={`${classPrefix}_wrapper`}>{children}</StyledWrapper>
);

Wrapper.propTypes = {
  children: PropTypes.node,
};
Wrapper.defaultProps = {
  children: undefined,
};

export default Wrapper;
