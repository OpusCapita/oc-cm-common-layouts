import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
// App imports
import { classPrefix, theme } from '../constants';
import { PrimitiveHeader } from '../primitives';


const HeaderSection = styled.section`
  display: flex;
  flex: 1 1 100%;
  align-items: center;
  height: ${theme.header.height};
  &.center {
    justify-content: center;
  }
  &.right {
    justify-content: flex-end;
  }
`;
const LayoutBasicHeader = ({ left, center, right }) => (
  <PrimitiveHeader className={`${classPrefix}_header`}>
    <HeaderSection className={`${classPrefix}_header_section left`}>{left}</HeaderSection>
    <HeaderSection className={`${classPrefix}_header_section center`}>{center}</HeaderSection>
    <HeaderSection className={`${classPrefix}_header_section right`}>{right}</HeaderSection>
  </PrimitiveHeader>
);

LayoutBasicHeader.propTypes = {
  left: PropTypes.node,
  center: PropTypes.node,
  right: PropTypes.node,
};

LayoutBasicHeader.defaultProps = {
  left: undefined,
  center: undefined,
  right: undefined,
};

export default LayoutBasicHeader;
