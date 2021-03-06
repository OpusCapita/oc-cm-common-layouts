import React from 'react';
import PropTypes from 'prop-types';
import InputRow from './content-input-row.component';

const ContentReadonlyRow = ({
  label, value, normalize, asColumn, id, ...rest
}) => (
  <InputRow
    id={`${id}-readonly-row`}
    asColumn={asColumn}
    label={label}
    showError={false}
    {...rest}
  >
    <span id={id}>
      {normalize ? normalize(value) : value}
    </span>
  </InputRow>
);

ContentReadonlyRow.propTypes = {
  asColumn: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node, PropTypes.bool]),
  normalize: PropTypes.func,
  id: PropTypes.string.isRequired,
};

ContentReadonlyRow.defaultProps = {
  asColumn: false,
  label: '',
  value: null,
  normalize: null,
};

export default ContentReadonlyRow;
