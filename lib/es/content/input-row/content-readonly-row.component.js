var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import InputRow from './content-input-row.component';

var ContentReadonlyRow = function ContentReadonlyRow(_ref) {
  var label = _ref.label,
      value = _ref.value,
      normalize = _ref.normalize,
      asColumn = _ref.asColumn,
      id = _ref.id,
      rest = _objectWithoutProperties(_ref, ['label', 'value', 'normalize', 'asColumn', 'id']);

  return React.createElement(
    InputRow,
    _extends({ id: id, asColumn: asColumn, label: label, showError: false }, rest),
    React.createElement(
      'span',
      null,
      normalize ? normalize(value) : value
    )
  );
};

ContentReadonlyRow.propTypes = {
  asColumn: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node, PropTypes.bool]),
  normalize: PropTypes.func,
  id: PropTypes.string.isRequired
};

ContentReadonlyRow.defaultProps = {
  asColumn: false,
  label: '',
  value: null,
  normalize: null
};

export default ContentReadonlyRow;