import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Select = styled.select`
  width:100%;
  padding:1rem;
`;

const SelectContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  margin-bottom:1rem;  
`;

const SelectLabel = styled.span`
  font-weight:bold;
  margin-bottom:0.5rem;
`;
const FixedColumnsSelect = ({
  onChange,
  value,
  options,
  name,
  label,
}) => (
  <SelectContainer>
    {label && <SelectLabel>{label}</SelectLabel>}
    <Select onChange={onChange} value={value} name={name}>
      {options.map(option =>
        <option key={option.value} value={option.value}>{option.label}</option>)}
    </Select>
  </SelectContainer>
);

export default FixedColumnsSelect;

FixedColumnsSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
};

FixedColumnsSelect.defaultProps = {
  name: undefined,
  label: undefined,
};
