import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
// App imports
import { classPrefix } from '../constants';
import HeaderPrimitive from '../primitives/layout-primitive-header.component';

const Header = HeaderPrimitive.extend`
  flex: 1;
`;


const HeaderSection = styled.section`
color:red;
`;
const LayoutHeader = ({ left, center, right }) => (
  <Header className={`${classPrefix}_header`}>
    <HeaderSection className={`${classPrefix}_header_section left`}>{left}</HeaderSection>
    <HeaderSection className={`${classPrefix}_header_section center`}>{center}</HeaderSection>
    <HeaderSection className={`${classPrefix}_header_section right`}>{right}</HeaderSection>
  </Header>
);

LayoutHeader.propTypes = {
  left: PropTypes.node,
  center: PropTypes.node,
  right: PropTypes.node,
};

LayoutHeader.defaultProps = {
  left: undefined,
  center: undefined,
  right: undefined,
};

export default LayoutHeader;
