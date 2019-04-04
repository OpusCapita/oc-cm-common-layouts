'use strict';

exports.__esModule = true;
exports.theme = exports.Layout = exports.Header = exports.Content = exports.Primitive = undefined;

var _primitives = require('./primitives');

var _Primitive = _interopRequireWildcard(_primitives);

var _content = require('./content');

var _Content = _interopRequireWildcard(_content);

var _header = require('./header');

var _Header = _interopRequireWildcard(_header);

var _layout = require('./layout');

var _Layout = _interopRequireWildcard(_layout);

var _ocCmTheme = require('@opuscapita/oc-cm-theme');

var _ocCmTheme2 = _interopRequireDefault(_ocCmTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.Primitive = _Primitive; /* eslint-disable import/prefer-default-export */

exports.Content = _Content;
exports.Header = _Header;
exports.Layout = _Layout;

// exporting theme for the sake of backwards compatibility

exports.theme = _ocCmTheme2.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcmltaXRpdmUiLCJDb250ZW50IiwiSGVhZGVyIiwiTGF5b3V0IiwidGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBQ1lBLFMsZUFEWjs7UUFFWUMsTztRQUNBQyxNO1FBQ0FDLE07O0FBRVo7O1FBQ09DLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5leHBvcnQgKiBhcyBQcmltaXRpdmUgZnJvbSAnLi9wcmltaXRpdmVzJztcbmV4cG9ydCAqIGFzIENvbnRlbnQgZnJvbSAnLi9jb250ZW50JztcbmV4cG9ydCAqIGFzIEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5leHBvcnQgKiBhcyBMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xuXG4vLyBleHBvcnRpbmcgdGhlbWUgZm9yIHRoZSBzYWtlIG9mIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5leHBvcnQgdGhlbWUgZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tdGhlbWUnO1xuIl19