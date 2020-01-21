"use strict";

exports.__esModule = true;
exports.Layout = exports.Header = exports.Content = exports.Primitive = void 0;

var _Primitive = _interopRequireWildcard(require("./primitives"));

exports.Primitive = _Primitive;

var _Content = _interopRequireWildcard(require("./content"));

exports.Content = _Content;

var _Header = _interopRequireWildcard(require("./header"));

exports.Header = _Header;

var _Layout = _interopRequireWildcard(require("./layout"));

exports.Layout = _Layout;

var _ocCmTheme = _interopRequireDefault(require("@opuscapita/oc-cm-theme"));

exports.theme = _ocCmTheme["default"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbXX0=