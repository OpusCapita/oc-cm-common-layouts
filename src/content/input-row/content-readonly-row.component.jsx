/* eslint-disable no-confusing-arrow */
import React from 'react';
import PropTypes from 'prop-types';
import InputRow from './content-input-row.component';

const ContentReadonlyRow = ({ label, value }) => (
  <InputRow label={label} showError={false}>
    <span>{value}</span>
  </InputRow>
);

ContentReadonlyRow.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ContentReadonlyRow.defaultProps = {
  label: '',
  value: null,
};

export default ContentReadonlyRow;
