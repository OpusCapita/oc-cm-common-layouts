import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import { classPrefix } from '../constants';

const StyledWrapper = styled.div`
  height:100vh;
`;
const Wrapper = ({ children, id, className }) => (
  <StyledWrapper
    className={`${classPrefix}_wrapper ${className}`}
    id={id}
  >
    {children}
  </StyledWrapper>
);

Wrapper.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
};
Wrapper.defaultProps = {
  children: undefined,
  id: '',
  className: '',
};

export default Wrapper;
