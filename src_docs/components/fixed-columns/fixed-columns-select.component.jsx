import React from 'react';
import PropTypes from 'prop-types';

const FixedColumnsSelect = ({ onChange, value, options }) => (
  <select onChange={onChange} value={value}>
    {options.map(option =>
      <option key={option.value} value={option.value}>{option.label}</option>)}
  </select>
);

export default FixedColumnsSelect;

FixedColumnsSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
