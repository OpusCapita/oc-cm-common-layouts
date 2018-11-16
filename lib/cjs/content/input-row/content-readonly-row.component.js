'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _contentInputRow = require('./content-input-row.component');

var _contentInputRow2 = _interopRequireDefault(_contentInputRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ContentReadonlyRow = function ContentReadonlyRow(_ref) {
  var label = _ref.label,
      value = _ref.value,
      normalize = _ref.normalize,
      asColumn = _ref.asColumn,
      id = _ref.id,
      rest = _objectWithoutProperties(_ref, ['label', 'value', 'normalize', 'asColumn', 'id']);

  return _react2.default.createElement(
    _contentInputRow2.default,
    _extends({ id: id, asColumn: asColumn, label: label, showError: false }, rest),
    _react2.default.createElement(
      'span',
      null,
      normalize ? normalize(value) : value
    )
  );
};

ContentReadonlyRow.propTypes = {
  asColumn: _propTypes2.default.bool,
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]),
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.node, _propTypes2.default.bool]),
  normalize: _propTypes2.default.func,
  id: _propTypes2.default.string.isRequired
};

ContentReadonlyRow.defaultProps = {
  asColumn: false,
  label: '',
  value: null,
  normalize: null
};

exports.default = ContentReadonlyRow;