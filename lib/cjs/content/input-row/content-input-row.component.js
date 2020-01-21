"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject12() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1 1 auto;\n  min-height: 0%;\n  min-width: 0%;\n  position: relative;\n  &:before {\n    display: block;\n    content: \"\";\n    position: absolute;\n    right: 0;\n    top: 0;\n    border-color: transparent;\n    border-style: solid;\n    border-width: 7px;\n    border-right-color: ", ";\n    border-top-color: ", ";\n    z-index: 1;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteralLoose(["\n  display:flex;\n  align-items: center;\n  position: absolute;\n  z-index: 20;\n  height: 28px;\n  background: ", ";\n  padding: 0 10px;\n  right: 0;\n  top: -34px;\n  color: ", ";\n  &:after {\n    width: 0;\n    height: 0;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    content: \"\";\n    display: block;\n    position: absolute;\n    bottom: -6px;\n    right: 2px;\n    border-top: 6px solid ", ";\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteralLoose(["\n  padding-left: ", ";\n  flex: 1 1 100%;\n  min-width: 0%;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteralLoose(["\n  display: ", ";\n  width: 100%;\n  align-items: center;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-right: ", ";\n  margin-bottom: ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-left: ", ";\n  font-size: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-size: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-size: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  min-height: ", ";\n  display: flex;\n  align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  > div > input,\n  > div > .form-control {\n    border-color: ", ";\n  }\n  > div > .input-row-validation-error {\n    border: ", ";\n  }\n  flex: 1 1 auto;\n  min-width: 0%;\n  max-width: ", ";\n  position: relative;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  width: ", ";\n  color: ", ";\n  padding-bottom: ", ";\n  align-items: center;\n  display: flex;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: ", ";\n  margin-bottom: ", ";\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var getStyles = function getStyles(error, warning, theme) {
  if (error) return theme.text.error.color;
  if (warning) return theme.colors.yellow;
  return '';
};

var getLabelStyles = function getLabelStyles(showErrorInLabel, error, warning, theme) {
  if (showErrorInLabel) {
    return getStyles(error, warning, theme);
  }

  return '';
};

var getBorderStyle = function getBorderStyle(error, warning, theme) {
  if (error || warning) return "1px solid " + getStyles(error, warning, theme);
  return 'unset';
};

var getContainerDirection = function getContainerDirection(props) {
  return props.asColumn ? props.theme.inputColumn.flexDirection : props.theme.inputRow.flexDirection;
};

var getErrorContainerMinHeight = function getErrorContainerMinHeight(props) {
  return props.asColumn ? props.theme.inputColumn.errorContainer.height : props.theme.inputRow.errorContainer.height;
};

var getLabelMaxWidth = function getLabelMaxWidth(props) {
  if (props.asColumn) return props.theme.inputColumn.labelWidth;
  return props.labelWidth !== undefined ? props.labelWidth : props.theme.inputRow.labelWidth;
};

var Container = _styledComponents["default"].section(_templateObject(), function (props) {
  return getContainerDirection(props);
}, function (props) {
  return props.theme.halfGutterWidth;
});

var LabelContainer = _styledComponents["default"].div(_templateObject2(), function (props) {
  return getLabelMaxWidth(props);
}, function (props) {
  return getLabelStyles(props.showErrorInLabel, props.error, props.warning, props.theme);
}, function (props) {
  return props.showError && !props.showErrorInPopup && !props.asColumn ? getErrorContainerMinHeight(props) : 0;
});

var ValueContainer = _styledComponents["default"].div(_templateObject3(), function (props) {
  return getStyles(props.error, props.warning, props.theme);
}, function (props) {
  return getBorderStyle(props.error, props.warning, props.theme);
}, function (props) {
  return props.width === 'auto' ? '100%' : props.width;
});

var ErrorContainer = _styledComponents["default"].div(_templateObject4(), function (props) {
  return getErrorContainerMinHeight(props);
});

var ErrorMessage = _styledComponents["default"].span(_templateObject5(), function (props) {
  return props.theme.text.error.color;
}, function (props) {
  return props.theme.text.error.fontSize;
});

var WarningMessage = _styledComponents["default"].span(_templateObject6(), function (props) {
  return props.theme.colors.yellow;
}, function (props) {
  return props.theme.text.error.fontSize;
});

var RequiredIndicator = _styledComponents["default"].span(_templateObject7(), function (props) {
  return props.theme.halfGutterWidth;
}, function (props) {
  return props.asColumn ? props.theme.inputColumn.requiredIndicator.fontSize : props.theme.inputRow.requiredIndicator.fontSize;
});

var Label = _styledComponents["default"].label(_templateObject8(), function (props) {
  return props.asColumn ? 0 : props.theme.gutterWidth;
}, function (props) {
  return props.asColumn ? props.theme.halfGutterWidth : 0;
});

var FieldContainer = _styledComponents["default"].div(_templateObject9(), function (props) {
  return props.append ? 'flex' : 'block';
});

var Append = _styledComponents["default"].div(_templateObject10(), function (props) {
  return props.theme.gutterWidth;
});

var ErrorPopup = _styledComponents["default"].div(_templateObject11(), function (props) {
  return getStyles(props.error, props.warning, props.theme);
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return getStyles(props.error, props.warning, props.theme);
});

var ErrorPopupTrigger = _styledComponents["default"].div(_templateObject12(), function (props) {
  return getStyles(props.error, props.warning, props.theme);
}, function (props) {
  return getStyles(props.error, props.warning, props.theme);
});
/**
 * Assigns given props directly to input element
 * @param child
 * @param props
 */


var modifyChildren = function modifyChildren(child, props) {
  var required = props.required,
      autoComplete = props.autoComplete;
  var newElementProps = {
    className: "" + (child.props.className || ''),
    required: required,
    autoComplete: autoComplete
  };
  return _react["default"].cloneElement(child, newElementProps);
};

var ContentInputRow = function ContentInputRow(props) {
  var children = props.children,
      error = props.error,
      warning = props.warning,
      showError = props.showError,
      showErrorInLabel = props.showErrorInLabel,
      label = props.label,
      className = props.className,
      required = props.required,
      id = props.id,
      asColumn = props.asColumn,
      showErrorInPopup = props.showErrorInPopup,
      labelWidth = props.labelWidth,
      valueWidth = props.valueWidth,
      append = props.append;

  var _useState = (0, _react.useState)(false),
      isHovered = _useState[0],
      setHovered = _useState[1];

  var onMouseEnter = function onMouseEnter() {
    return setHovered(true);
  };

  var onMouseLeave = function onMouseLeave() {
    return setHovered(false);
  };

  return _react["default"].createElement(Container, {
    asColumn: asColumn,
    className: className,
    id: id
  }, _react["default"].createElement(LabelContainer, {
    asColumn: asColumn,
    error: error,
    warning: warning,
    showError: showError,
    showErrorInPopup: showErrorInPopup,
    labelWidth: labelWidth,
    showErrorInLabel: showErrorInLabel
  }, label && _react["default"].createElement(Label, {
    asColumn: asColumn
  }, label, required && _react["default"].createElement(RequiredIndicator, {
    asColumn: asColumn
  }, "*"))), _react["default"].createElement(ValueContainer, {
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    width: valueWidth,
    error: error,
    warning: warning
  }, showErrorInPopup && isHovered && (error || warning) && _react["default"].createElement(ErrorPopup, {
    error: error,
    warning: warning
  }, error, warning), _react["default"].createElement(FieldContainer, {
    append: append,
    hovered: isHovered
  }, showErrorInPopup && (warning || error) && _react["default"].createElement(ErrorPopupTrigger, {
    error: error,
    warning: warning
  }), _react["default"].Children.map(children, function (child) {
    return modifyChildren(child, props);
  }), append && _react["default"].createElement(Append, null, append)), showError && !showErrorInPopup && _react["default"].createElement(ErrorContainer, {
    asColumn: asColumn
  }, error && _react["default"].createElement(ErrorMessage, null, error), !error && warning && _react["default"].createElement(WarningMessage, null, warning))));
};

ContentInputRow.defaultProps = {
  label: '',
  required: false,
  children: null,
  error: '',
  warning: '',
  showError: true,
  showErrorInLabel: true,
  className: '',
  asColumn: false,
  labelWidth: undefined,
  valueWidth: 'auto',
  append: undefined,
  showErrorInPopup: false
};
var _default = ContentInputRow;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImdldFN0eWxlcyIsImVycm9yIiwid2FybmluZyIsInRoZW1lIiwidGV4dCIsImNvbG9yIiwiY29sb3JzIiwieWVsbG93IiwiZ2V0TGFiZWxTdHlsZXMiLCJzaG93RXJyb3JJbkxhYmVsIiwiZ2V0Qm9yZGVyU3R5bGUiLCJnZXRDb250YWluZXJEaXJlY3Rpb24iLCJwcm9wcyIsImFzQ29sdW1uIiwiaW5wdXRDb2x1bW4iLCJmbGV4RGlyZWN0aW9uIiwiaW5wdXRSb3ciLCJnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodCIsImVycm9yQ29udGFpbmVyIiwiaGVpZ2h0IiwiZ2V0TGFiZWxNYXhXaWR0aCIsImxhYmVsV2lkdGgiLCJ1bmRlZmluZWQiLCJDb250YWluZXIiLCJzdHlsZWQiLCJzZWN0aW9uIiwiaGFsZkd1dHRlcldpZHRoIiwiTGFiZWxDb250YWluZXIiLCJkaXYiLCJzaG93RXJyb3IiLCJzaG93RXJyb3JJblBvcHVwIiwiVmFsdWVDb250YWluZXIiLCJ3aWR0aCIsIkVycm9yQ29udGFpbmVyIiwiRXJyb3JNZXNzYWdlIiwic3BhbiIsImZvbnRTaXplIiwiV2FybmluZ01lc3NhZ2UiLCJSZXF1aXJlZEluZGljYXRvciIsInJlcXVpcmVkSW5kaWNhdG9yIiwiTGFiZWwiLCJsYWJlbCIsImd1dHRlcldpZHRoIiwiRmllbGRDb250YWluZXIiLCJhcHBlbmQiLCJBcHBlbmQiLCJFcnJvclBvcHVwIiwid2hpdGUiLCJFcnJvclBvcHVwVHJpZ2dlciIsIm1vZGlmeUNoaWxkcmVuIiwiY2hpbGQiLCJyZXF1aXJlZCIsImF1dG9Db21wbGV0ZSIsIm5ld0VsZW1lbnRQcm9wcyIsImNsYXNzTmFtZSIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwiQ29udGVudElucHV0Um93IiwiY2hpbGRyZW4iLCJpZCIsInZhbHVlV2lkdGgiLCJpc0hvdmVyZWQiLCJzZXRIb3ZlcmVkIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiQ2hpbGRyZW4iLCJtYXAiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBaUJDLEtBQWpCLEVBQTJCO0FBQzNDLE1BQUlGLEtBQUosRUFBVyxPQUFPRSxLQUFLLENBQUNDLElBQU4sQ0FBV0gsS0FBWCxDQUFpQkksS0FBeEI7QUFDWCxNQUFJSCxPQUFKLEVBQWEsT0FBT0MsS0FBSyxDQUFDRyxNQUFOLENBQWFDLE1BQXBCO0FBQ2IsU0FBTyxFQUFQO0FBQ0QsQ0FKRDs7QUFNQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLGdCQUFELEVBQW1CUixLQUFuQixFQUEwQkMsT0FBMUIsRUFBbUNDLEtBQW5DLEVBQTZDO0FBQ2xFLE1BQUlNLGdCQUFKLEVBQXNCO0FBQ3BCLFdBQU9ULFNBQVMsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQWlCQyxLQUFqQixDQUFoQjtBQUNEOztBQUNELFNBQU8sRUFBUDtBQUNELENBTEQ7O0FBT0EsSUFBTU8sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDVCxLQUFELEVBQVFDLE9BQVIsRUFBaUJDLEtBQWpCLEVBQTJCO0FBQ2hELE1BQUlGLEtBQUssSUFBSUMsT0FBYixFQUFzQixzQkFBb0JGLFNBQVMsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQWlCQyxLQUFqQixDQUE3QjtBQUN0QixTQUFPLE9BQVA7QUFDRCxDQUhEOztBQUtBLElBQU1RLHFCQUFxQixHQUFHLFNBQXhCQSxx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QUFJN0J6RCxFQUFBQSxLQUFLLEVBQUUsRUFKc0I7QUFLN0JDLEVBQUFBLE9BQU8sRUFBRSxFQUxvQjtBQU03QjJCLEVBQUFBLFNBQVMsRUFBRSxJQU5rQjtBQU83QnBCLEVBQUFBLGdCQUFnQixFQUFFLElBUFc7QUFRN0I2QyxFQUFBQSxTQUFTLEVBQUUsRUFSa0I7QUFTN0J6QyxFQUFBQSxRQUFRLEVBQUUsS0FUbUI7QUFVN0JRLEVBQUFBLFVBQVUsRUFBRUMsU0FWaUI7QUFXN0JzQyxFQUFBQSxVQUFVLEVBQUUsTUFYaUI7QUFZN0JoQixFQUFBQSxNQUFNLEVBQUV0QixTQVpxQjtBQWE3QlEsRUFBQUEsZ0JBQWdCLEVBQUU7QUFiVyxDQUEvQjtlQWdCZTJCLGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IGdldFN0eWxlcyA9IChlcnJvciwgd2FybmluZywgdGhlbWUpID0+IHtcbiAgaWYgKGVycm9yKSByZXR1cm4gdGhlbWUudGV4dC5lcnJvci5jb2xvcjtcbiAgaWYgKHdhcm5pbmcpIHJldHVybiB0aGVtZS5jb2xvcnMueWVsbG93O1xuICByZXR1cm4gJyc7XG59O1xuXG5jb25zdCBnZXRMYWJlbFN0eWxlcyA9IChzaG93RXJyb3JJbkxhYmVsLCBlcnJvciwgd2FybmluZywgdGhlbWUpID0+IHtcbiAgaWYgKHNob3dFcnJvckluTGFiZWwpIHtcbiAgICByZXR1cm4gZ2V0U3R5bGVzKGVycm9yLCB3YXJuaW5nLCB0aGVtZSk7XG4gIH1cbiAgcmV0dXJuICcnO1xufTtcblxuY29uc3QgZ2V0Qm9yZGVyU3R5bGUgPSAoZXJyb3IsIHdhcm5pbmcsIHRoZW1lKSA9PiB7XG4gIGlmIChlcnJvciB8fCB3YXJuaW5nKSByZXR1cm4gYDFweCBzb2xpZCAke2dldFN0eWxlcyhlcnJvciwgd2FybmluZywgdGhlbWUpfWA7XG4gIHJldHVybiAndW5zZXQnO1xufTtcblxuY29uc3QgZ2V0Q29udGFpbmVyRGlyZWN0aW9uID0gcHJvcHMgPT5cbiAgKHByb3BzLmFzQ29sdW1uID8gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4uZmxleERpcmVjdGlvbiA6IHByb3BzLnRoZW1lLmlucHV0Um93LmZsZXhEaXJlY3Rpb24pO1xuXG5jb25zdCBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodCA9IHByb3BzID0+XG4gIChwcm9wcy5hc0NvbHVtblxuICAgID8gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4uZXJyb3JDb250YWluZXIuaGVpZ2h0XG4gICAgOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5lcnJvckNvbnRhaW5lci5oZWlnaHQpO1xuXG5jb25zdCBnZXRMYWJlbE1heFdpZHRoID0gKHByb3BzKSA9PiB7XG4gIGlmIChwcm9wcy5hc0NvbHVtbikgcmV0dXJuIHByb3BzLnRoZW1lLmlucHV0Q29sdW1uLmxhYmVsV2lkdGg7XG4gIHJldHVybiBwcm9wcy5sYWJlbFdpZHRoICE9PSB1bmRlZmluZWQgPyBwcm9wcy5sYWJlbFdpZHRoIDogcHJvcHMudGhlbWUuaW5wdXRSb3cubGFiZWxXaWR0aDtcbn07XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogJHtwcm9wcyA9PiBnZXRDb250YWluZXJEaXJlY3Rpb24ocHJvcHMpfTtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5gO1xuXG5jb25zdCBMYWJlbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAke3Byb3BzID0+IGdldExhYmVsTWF4V2lkdGgocHJvcHMpfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gZ2V0TGFiZWxTdHlsZXMocHJvcHMuc2hvd0Vycm9ySW5MYWJlbCwgcHJvcHMuZXJyb3IsIHByb3BzLndhcm5pbmcsIHByb3BzLnRoZW1lKX07XG4gIHBhZGRpbmctYm90dG9tOiAke3Byb3BzID0+XG4gICAgKHByb3BzLnNob3dFcnJvciAmJiAhcHJvcHMuc2hvd0Vycm9ySW5Qb3B1cCAmJiAhcHJvcHMuYXNDb2x1bW4gPyBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodChwcm9wcykgOiAwKX07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBWYWx1ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gID4gZGl2ID4gaW5wdXQsXG4gID4gZGl2ID4gLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IGdldFN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMud2FybmluZywgcHJvcHMudGhlbWUpfTtcbiAgfVxuICA+IGRpdiA+IC5pbnB1dC1yb3ctdmFsaWRhdGlvbi1lcnJvciB7XG4gICAgYm9yZGVyOiAke3Byb3BzID0+IGdldEJvcmRlclN0eWxlKHByb3BzLmVycm9yLCBwcm9wcy53YXJuaW5nLCBwcm9wcy50aGVtZSl9O1xuICB9XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtaW4td2lkdGg6IDAlO1xuICBtYXgtd2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLndpZHRoID09PSAnYXV0bycgPyAnMTAwJScgOiBwcm9wcy53aWR0aCl9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBFcnJvckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1pbi1oZWlnaHQ6ICR7cHJvcHMgPT4gZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQocHJvcHMpfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0LmVycm9yLmNvbG9yfTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuZXJyb3IuZm9udFNpemV9O1xuYDtcblxuY29uc3QgV2FybmluZ01lc3NhZ2UgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnllbGxvd307XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0LmVycm9yLmZvbnRTaXplfTtcbmA7XG5cbmNvbnN0IFJlcXVpcmVkSW5kaWNhdG9yID0gc3R5bGVkLnNwYW5gXG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PlxuICAgIChwcm9wcy5hc0NvbHVtblxuICAgICAgPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5yZXF1aXJlZEluZGljYXRvci5mb250U2l6ZVxuICAgICAgOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5yZXF1aXJlZEluZGljYXRvci5mb250U2l6ZSl9O1xuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PiAocHJvcHMuYXNDb2x1bW4gPyAwIDogcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGgpfTtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMuYXNDb2x1bW4gPyBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGggOiAwKX07XG5gO1xuXG5jb25zdCBGaWVsZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6ICR7cHJvcHMgPT4gKHByb3BzLmFwcGVuZCA/ICdmbGV4JyA6ICdibG9jaycpfTtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBBcHBlbmQgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBmbGV4OiAxIDEgMTAwJTtcbiAgbWluLXdpZHRoOiAwJTtcbmA7XG5cbmNvbnN0IEVycm9yUG9wdXAgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OmZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjA7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBnZXRTdHlsZXMocHJvcHMuZXJyb3IsIHByb3BzLndhcm5pbmcsIHByb3BzLnRoZW1lKX07XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogLTM0cHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG4gICY6YWZ0ZXIge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTZweDtcbiAgICByaWdodDogMnB4O1xuICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCAke3Byb3BzID0+IGdldFN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMud2FybmluZywgcHJvcHMudGhlbWUpfTtcbiAgfVxuYDtcblxuY29uc3QgRXJyb3JQb3B1cFRyaWdnZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxIDEgYXV0bztcbiAgbWluLWhlaWdodDogMCU7XG4gIG1pbi13aWR0aDogMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiA3cHg7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke3Byb3BzID0+IGdldFN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMud2FybmluZywgcHJvcHMudGhlbWUpfTtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAke3Byb3BzID0+IGdldFN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMud2FybmluZywgcHJvcHMudGhlbWUpfTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5gO1xuXG4vKipcbiAqIEFzc2lnbnMgZ2l2ZW4gcHJvcHMgZGlyZWN0bHkgdG8gaW5wdXQgZWxlbWVudFxuICogQHBhcmFtIGNoaWxkXG4gKiBAcGFyYW0gcHJvcHNcbiAqL1xuY29uc3QgbW9kaWZ5Q2hpbGRyZW4gPSAoY2hpbGQsIHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVxdWlyZWQsIGF1dG9Db21wbGV0ZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgbmV3RWxlbWVudFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogYCR7Y2hpbGQucHJvcHMuY2xhc3NOYW1lIHx8ICcnfWAsXG4gICAgcmVxdWlyZWQsXG4gICAgYXV0b0NvbXBsZXRlLFxuICB9O1xuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld0VsZW1lbnRQcm9wcyk7XG59O1xuXG5jb25zdCBDb250ZW50SW5wdXRSb3cgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIGVycm9yLFxuICAgIHdhcm5pbmcsXG4gICAgc2hvd0Vycm9yLFxuICAgIHNob3dFcnJvckluTGFiZWwsXG4gICAgbGFiZWwsXG4gICAgY2xhc3NOYW1lLFxuICAgIHJlcXVpcmVkLFxuICAgIGlkLFxuICAgIGFzQ29sdW1uLFxuICAgIHNob3dFcnJvckluUG9wdXAsXG4gICAgbGFiZWxXaWR0aCxcbiAgICB2YWx1ZVdpZHRoLFxuICAgIGFwcGVuZCxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtpc0hvdmVyZWQsIHNldEhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uTW91c2VFbnRlciA9ICgpID0+IHNldEhvdmVyZWQodHJ1ZSk7XG5cbiAgY29uc3Qgb25Nb3VzZUxlYXZlID0gKCkgPT4gc2V0SG92ZXJlZChmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGFzQ29sdW1uPXthc0NvbHVtbn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXtpZH0+XG4gICAgICA8TGFiZWxDb250YWluZXJcbiAgICAgICAgYXNDb2x1bW49e2FzQ29sdW1ufVxuICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgIHdhcm5pbmc9e3dhcm5pbmd9XG4gICAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgICBzaG93RXJyb3JJblBvcHVwPXtzaG93RXJyb3JJblBvcHVwfVxuICAgICAgICBsYWJlbFdpZHRoPXtsYWJlbFdpZHRofVxuICAgICAgICBzaG93RXJyb3JJbkxhYmVsPXtzaG93RXJyb3JJbkxhYmVsfVxuICAgICAgPlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxMYWJlbCBhc0NvbHVtbj17YXNDb2x1bW59PlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAge3JlcXVpcmVkICYmIDxSZXF1aXJlZEluZGljYXRvciBhc0NvbHVtbj17YXNDb2x1bW59Pio8L1JlcXVpcmVkSW5kaWNhdG9yPn1cbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICApfVxuICAgICAgPC9MYWJlbENvbnRhaW5lcj5cbiAgICAgIDxWYWx1ZUNvbnRhaW5lclxuICAgICAgICBvbk1vdXNlRW50ZXI9e29uTW91c2VFbnRlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9XG4gICAgICAgIHdpZHRoPXt2YWx1ZVdpZHRofVxuICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgIHdhcm5pbmc9e3dhcm5pbmd9XG4gICAgICA+XG4gICAgICAgIHtzaG93RXJyb3JJblBvcHVwICYmIGlzSG92ZXJlZCAmJiAoZXJyb3IgfHwgd2FybmluZykgJiZcbiAgICAgICAgPEVycm9yUG9wdXAgZXJyb3I9e2Vycm9yfSB3YXJuaW5nPXt3YXJuaW5nfT57ZXJyb3J9e3dhcm5pbmd9PC9FcnJvclBvcHVwPn1cbiAgICAgICAgPEZpZWxkQ29udGFpbmVyIGFwcGVuZD17YXBwZW5kfSBob3ZlcmVkPXtpc0hvdmVyZWR9PlxuICAgICAgICAgIHtzaG93RXJyb3JJblBvcHVwICYmICh3YXJuaW5nIHx8IGVycm9yKSAmJlxuICAgICAgICAgIDxFcnJvclBvcHVwVHJpZ2dlciBlcnJvcj17ZXJyb3J9IHdhcm5pbmc9e3dhcm5pbmd9IC8+fVxuXG4gICAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4gbW9kaWZ5Q2hpbGRyZW4oY2hpbGQsIHByb3BzKSl9XG5cbiAgICAgICAgICB7YXBwZW5kICYmIDxBcHBlbmQ+e2FwcGVuZH08L0FwcGVuZD59XG4gICAgICAgIDwvRmllbGRDb250YWluZXI+XG4gICAgICAgIHtzaG93RXJyb3IgJiYgIXNob3dFcnJvckluUG9wdXAgJiYgKFxuICAgICAgICAgIDxFcnJvckNvbnRhaW5lciBhc0NvbHVtbj17YXNDb2x1bW59PlxuICAgICAgICAgICAge2Vycm9yICYmIDxFcnJvck1lc3NhZ2U+e2Vycm9yfTwvRXJyb3JNZXNzYWdlPn1cbiAgICAgICAgICAgIHshZXJyb3IgJiYgd2FybmluZyAmJiA8V2FybmluZ01lc3NhZ2U+e3dhcm5pbmd9PC9XYXJuaW5nTWVzc2FnZT59XG4gICAgICAgICAgPC9FcnJvckNvbnRhaW5lcj5cbiAgICAgICAgKX1cbiAgICAgIDwvVmFsdWVDb250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5Db250ZW50SW5wdXRSb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYm9vbF0pLFxuICB3YXJuaW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYm9vbF0pLFxuICBzaG93RXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBzaG93RXJyb3JJbkxhYmVsOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBhc0NvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG4gIGxhYmVsV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgdmFsdWVXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBhcHBlbmQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIHNob3dFcnJvckluUG9wdXA6IFByb3BUeXBlcy5ib29sLFxufTtcblxuQ29udGVudElucHV0Um93LmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFiZWw6ICcnLFxuICByZXF1aXJlZDogZmFsc2UsXG4gIGNoaWxkcmVuOiBudWxsLFxuICBlcnJvcjogJycsXG4gIHdhcm5pbmc6ICcnLFxuICBzaG93RXJyb3I6IHRydWUsXG4gIHNob3dFcnJvckluTGFiZWw6IHRydWUsXG4gIGNsYXNzTmFtZTogJycsXG4gIGFzQ29sdW1uOiBmYWxzZSxcbiAgbGFiZWxXaWR0aDogdW5kZWZpbmVkLFxuICB2YWx1ZVdpZHRoOiAnYXV0bycsXG4gIGFwcGVuZDogdW5kZWZpbmVkLFxuICBzaG93RXJyb3JJblBvcHVwOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRJbnB1dFJvdztcbiJdfQ==