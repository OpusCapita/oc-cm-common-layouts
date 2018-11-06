'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require('../constants');

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// App imports
var HeaderCustom = function HeaderCustom(_ref) {
  var children = _ref.children,
      id = _ref.id,
      className = _ref.className;
  return _react2.default.createElement(
    _.Primitive.Header,
    { className: _constants.classPrefix + '_header ' + className, id: id },
    children
  );
};

HeaderCustom.propTypes = {
  children: _propTypes2.default.node,
  id: _propTypes2.default.string,
  className: _propTypes2.default.string
};

HeaderCustom.defaultProps = {
  children: null,
  id: '',
  className: ''
};

exports.default = HeaderCustom;