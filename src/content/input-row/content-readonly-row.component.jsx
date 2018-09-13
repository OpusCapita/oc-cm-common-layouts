import React from 'react';
import PropTypes from 'prop-types';
import InputRow from './content-input-row.component';

const ContentReadonlyRow = ({
  label, value, normalize, asColumn,
}) => (
  <InputRow asColumn={asColumn} label={label} showError={false}>
    <span>
      {normalize ? normalize(value) : value}
    </span>
  </InputRow>
);

ContentReadonlyRow.propTypes = {
  asColumn: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node, PropTypes.bool]),
  normalize: PropTypes.func,
};

ContentReadonlyRow.defaultProps = {
  asColumn: false,
  label: '',
  value: null,
  normalize: null,
};

export default ContentReadonlyRow;
