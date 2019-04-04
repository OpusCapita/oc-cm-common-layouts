import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
// App imports
import { classPrefix } from '../constants';
import { Primitive } from '../index';

const HeaderSection = styled.section`
  display:flex;
  align-items: center;
  height: ${props => props.theme.header.height};
  &.center {
    justify-content: center;
  }
  &.right {
    justify-content: flex-end;
  }
`;

const CenterSection = styled(HeaderSection)`
  flex-grow: 1;
`;

const SideSection = styled(HeaderSection)`
  flex-basis: ${props => props.basis};
  flex-shrink: 1;
`;

const HeaderBasic = ({
  left, center, right, className, id, sideSectionBasis,
}) => (
  <Primitive.Header id={id} className={`${classPrefix}_header ${className}`}>
    <SideSection className={`${classPrefix}_header_section left`} basis={sideSectionBasis}>{left}</SideSection>
    <CenterSection className={`${classPrefix}_header_section center`}>{center}</CenterSection>
    <SideSection className={`${classPrefix}_header_section right`} basis={sideSectionBasis}>{right}</SideSection>
  </Primitive.Header>
);

HeaderBasic.propTypes = {
  left: PropTypes.node,
  center: PropTypes.node,
  right: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  sideSectionBasis: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

HeaderBasic.defaultProps = {
  left: undefined,
  center: undefined,
  right: undefined,
  className: '',
  id: '',
  sideSectionBasis: '200px',
};

export default HeaderBasic;
