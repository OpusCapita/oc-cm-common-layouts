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

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

var Container = styled.section(_templateObject(), function (props) {
  return getContainerDirection(props);
}, function (props) {
  return props.theme.halfGutterWidth;
});
var LabelContainer = styled.div(_templateObject2(), function (props) {
  return getLabelMaxWidth(props);
}, function (props) {
  return getLabelStyles(props.showErrorInLabel, props.error, props.warning, props.theme);
}, function (props) {
  return props.showError && !props.showErrorInPopup && !props.asColumn ? getErrorContainerMinHeight(props) : 0;
});
var ValueContainer = styled.div(_templateObject3(), function (props) {
  return getStyles(props.error, props.warning, props.theme);
}, function (props) {
  return getBorderStyle(props.error, props.warning, props.theme);
}, function (props) {
  return props.width === 'auto' ? '100%' : props.width;
});
var ErrorContainer = styled.div(_templateObject4(), function (props) {
  return getErrorContainerMinHeight(props);
});
var ErrorMessage = styled.span(_templateObject5(), function (props) {
  return props.theme.text.error.color;
}, function (props) {
  return props.theme.text.error.fontSize;
});
var WarningMessage = styled.span(_templateObject6(), function (props) {
  return props.theme.colors.yellow;
}, function (props) {
  return props.theme.text.error.fontSize;
});
var RequiredIndicator = styled.span(_templateObject7(), function (props) {
  return props.theme.halfGutterWidth;
}, function (props) {
  return props.asColumn ? props.theme.inputColumn.requiredIndicator.fontSize : props.theme.inputRow.requiredIndicator.fontSize;
});
var Label = styled.label(_templateObject8(), function (props) {
  return props.asColumn ? 0 : props.theme.gutterWidth;
}, function (props) {
  return props.asColumn ? props.theme.halfGutterWidth : 0;
});
var FieldContainer = styled.div(_templateObject9(), function (props) {
  return props.append ? 'flex' : 'block';
});
var Append = styled.div(_templateObject10(), function (props) {
  return props.theme.gutterWidth;
});
var ErrorPopup = styled.div(_templateObject11(), function (props) {
  return getStyles(props.error, props.warning, props.theme);
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return getStyles(props.error, props.warning, props.theme);
});
var ErrorPopupTrigger = styled.div(_templateObject12(), function (props) {
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
  return React.cloneElement(child, newElementProps);
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

  var _useState = useState(false),
      isHovered = _useState[0],
      setHovered = _useState[1];

  var onMouseEnter = function onMouseEnter() {
    return setHovered(true);
  };

  var onMouseLeave = function onMouseLeave() {
    return setHovered(false);
  };

  return React.createElement(Container, {
    asColumn: asColumn,
    className: className,
    id: id
  }, React.createElement(LabelContainer, {
    asColumn: asColumn,
    error: error,
    warning: warning,
    showError: showError,
    showErrorInPopup: showErrorInPopup,
    labelWidth: labelWidth,
    showErrorInLabel: showErrorInLabel
  }, label && React.createElement(Label, {
    asColumn: asColumn
  }, label, required && React.createElement(RequiredIndicator, {
    asColumn: asColumn
  }, "*"))), React.createElement(ValueContainer, {
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    width: valueWidth,
    error: error,
    warning: warning
  }, showErrorInPopup && isHovered && (error || warning) && React.createElement(ErrorPopup, {
    error: error,
    warning: warning
  }, error, warning), React.createElement(FieldContainer, {
    append: append,
    hovered: isHovered
  }, showErrorInPopup && (warning || error) && React.createElement(ErrorPopupTrigger, {
    error: error,
    warning: warning
  }), React.Children.map(children, function (child) {
    return modifyChildren(child, props);
  }), append && React.createElement(Append, null, append)), showError && !showErrorInPopup && React.createElement(ErrorContainer, {
    asColumn: asColumn
  }, error && React.createElement(ErrorMessage, null, error), !error && warning && React.createElement(WarningMessage, null, warning))));
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
export default ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJnZXRTdHlsZXMiLCJlcnJvciIsIndhcm5pbmciLCJ0aGVtZSIsInRleHQiLCJjb2xvciIsImNvbG9ycyIsInllbGxvdyIsImdldExhYmVsU3R5bGVzIiwic2hvd0Vycm9ySW5MYWJlbCIsImdldEJvcmRlclN0eWxlIiwiZ2V0Q29udGFpbmVyRGlyZWN0aW9uIiwicHJvcHMiLCJhc0NvbHVtbiIsImlucHV0Q29sdW1uIiwiZmxleERpcmVjdGlvbiIsImlucHV0Um93IiwiZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQiLCJlcnJvckNvbnRhaW5lciIsImhlaWdodCIsImdldExhYmVsTWF4V2lkdGgiLCJsYWJlbFdpZHRoIiwidW5kZWZpbmVkIiwiQ29udGFpbmVyIiwic2VjdGlvbiIsImhhbGZHdXR0ZXJXaWR0aCIsIkxhYmVsQ29udGFpbmVyIiwiZGl2Iiwic2hvd0Vycm9yIiwic2hvd0Vycm9ySW5Qb3B1cCIsIlZhbHVlQ29udGFpbmVyIiwid2lkdGgiLCJFcnJvckNvbnRhaW5lciIsIkVycm9yTWVzc2FnZSIsInNwYW4iLCJmb250U2l6ZSIsIldhcm5pbmdNZXNzYWdlIiwiUmVxdWlyZWRJbmRpY2F0b3IiLCJyZXF1aXJlZEluZGljYXRvciIsIkxhYmVsIiwibGFiZWwiLCJndXR0ZXJXaWR0aCIsIkZpZWxkQ29udGFpbmVyIiwiYXBwZW5kIiwiQXBwZW5kIiwiRXJyb3JQb3B1cCIsIndoaXRlIiwiRXJyb3JQb3B1cFRyaWdnZXIiLCJtb2RpZnlDaGlsZHJlbiIsImNoaWxkIiwicmVxdWlyZWQiLCJhdXRvQ29tcGxldGUiLCJuZXdFbGVtZW50UHJvcHMiLCJjbGFzc05hbWUiLCJjbG9uZUVsZW1lbnQiLCJDb250ZW50SW5wdXRSb3ciLCJjaGlsZHJlbiIsImlkIiwidmFsdWVXaWR0aCIsImlzSG92ZXJlZCIsInNldEhvdmVyZWQiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJDaGlsZHJlbiIsIm1hcCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxRQUFoQixRQUFnQyxPQUFoQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBaUJDLEtBQWpCLEVBQTJCO0FBQzNDLE1BQUlGLEtBQUosRUFBVyxPQUFPRSxLQUFLLENBQUNDLElBQU4sQ0FBV0gsS0FBWCxDQUFpQkksS0FBeEI7QUFDWCxNQUFJSCxPQUFKLEVBQWEsT0FBT0MsS0FBSyxDQUFDRyxNQUFOLENBQWFDLE1BQXBCO0FBQ2IsU0FBTyxFQUFQO0FBQ0QsQ0FKRDs7QUFNQSxJQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLGdCQUFELEVBQW1CUixLQUFuQixFQUEwQkMsT0FBMUIsRUFBbUNDLEtBQW5DLEVBQTZDO0FBQ2xFLE1BQUlNLGdCQUFKLEVBQXNCO0FBQ3BCLFdBQU9ULFNBQVMsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQWlCQyxLQUFqQixDQUFoQjtBQUNEOztBQUNELFNBQU8sRUFBUDtBQUNELENBTEQ7O0FBT0EsSUFBTU8sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDVCxLQUFELEVBQVFDLE9BQVIsRUFBaUJDLEtBQWpCLEVBQTJCO0FBQ2hELE1BQUlGLEtBQUssSUFBSUMsT0FBYixFQUFzQixzQkFBb0JGLFNBQVMsQ0FBQ0Ms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Q0FGeEIsQ0FsQkosQ0FqQkYsQ0FERjtBQTRDRCxDQXBFRDs7QUF1RkFxRCxlQUFlLENBQUNVLFlBQWhCLEdBQStCO0FBQzdCekIsRUFBQUEsS0FBSyxFQUFFLEVBRHNCO0FBRTdCVSxFQUFBQSxRQUFRLEVBQUUsS0FGbUI7QUFHN0JNLEVBQUFBLFFBQVEsRUFBRSxJQUhtQjtBQUk3QnZELEVBQUFBLEtBQUssRUFBRSxFQUpzQjtBQUs3QkMsRUFBQUEsT0FBTyxFQUFFLEVBTG9CO0FBTTdCMEIsRUFBQUEsU0FBUyxFQUFFLElBTmtCO0FBTzdCbkIsRUFBQUEsZ0JBQWdCLEVBQUUsSUFQVztBQVE3QjRDLEVBQUFBLFNBQVMsRUFBRSxFQVJrQjtBQVM3QnhDLEVBQUFBLFFBQVEsRUFBRSxLQVRtQjtBQVU3QlEsRUFBQUEsVUFBVSxFQUFFQyxTQVZpQjtBQVc3Qm9DLEVBQUFBLFVBQVUsRUFBRSxNQVhpQjtBQVk3QmYsRUFBQUEsTUFBTSxFQUFFckIsU0FacUI7QUFhN0JPLEVBQUFBLGdCQUFnQixFQUFFO0FBYlcsQ0FBL0I7QUFnQkEsZUFBZTBCLGVBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IGdldFN0eWxlcyA9IChlcnJvciwgd2FybmluZywgdGhlbWUpID0+IHtcbiAgaWYgKGVycm9yKSByZXR1cm4gdGhlbWUudGV4dC5lcnJvci5jb2xvcjtcbiAgaWYgKHdhcm5pbmcpIHJldHVybiB0aGVtZS5jb2xvcnMueWVsbG93O1xuICByZXR1cm4gJyc7XG59O1xuXG5jb25zdCBnZXRMYWJlbFN0eWxlcyA9IChzaG93RXJyb3JJbkxhYmVsLCBlcnJvciwgd2FybmluZywgdGhlbWUpID0+IHtcbiAgaWYgKHNob3dFcnJvckluTGFiZWwpIHtcbiAgICByZXR1cm4gZ2V0U3R5bGVzKGVycm9yLCB3YXJuaW5nLCB0aGVtZSk7XG4gIH1cbiAgcmV0dXJuICcnO1xufTtcblxuY29uc3QgZ2V0Qm9yZGVyU3R5bGUgPSAoZXJyb3IsIHdhcm5pbmcsIHRoZW1lKSA9PiB7XG4gIGlmIChlcnJvciB8fCB3YXJuaW5nKSByZXR1cm4gYDFweCBzb2xpZCAke2dldFN0eWxlcyhlcnJvciwgd2FybmluZywgdGhlbWUpfWA7XG4gIHJldHVybiAndW5zZXQnO1xufTtcblxuY29uc3QgZ2V0Q29udGFpbmVyRGlyZWN0aW9uID0gcHJvcHMgPT5cbiAgKHByb3BzLmFzQ29sdW1uID8gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4uZmxleERpcmVjdGlvbiA6IHByb3BzLnRoZW1lLmlucHV0Um93LmZsZXhEaXJlY3Rpb24pO1xuXG5jb25zdCBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodCA9IHByb3BzID0+XG4gIChwcm9wcy5hc0NvbHVtblxuICAgID8gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4uZXJyb3JDb250YWluZXIuaGVpZ2h0XG4gICAgOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5lcnJvckNvbnRhaW5lci5oZWlnaHQpO1xuXG5jb25zdCBnZXRMYWJlbE1heFdpZHRoID0gKHByb3BzKSA9PiB7XG4gIGlmIChwcm9wcy5hc0NvbHVtbikgcmV0dXJuIHByb3BzLnRoZW1lLmlucHV0Q29sdW1uLmxhYmVsV2lkdGg7XG4gIHJldHVybiBwcm9wcy5sYWJlbFdpZHRoICE9PSB1bmRlZmluZWQgPyBwcm9wcy5sYWJlbFdpZHRoIDogcHJvcHMudGhlbWUuaW5wdXRSb3cubGFiZWxXaWR0aDtcbn07XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogJHtwcm9wcyA9PiBnZXRDb250YWluZXJEaXJlY3Rpb24ocHJvcHMpfTtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5gO1xuXG5jb25zdCBMYWJlbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAke3Byb3BzID0+IGdldExhYmVsTWF4V2lkdGgocHJvcHMpfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gZ2V0TGFiZWxTdHlsZXMocHJvcHMuc2hvd0Vycm9ySW5MYWJlbCwgcHJvcHMuZXJyb3IsIHByb3BzLndhcm5pbmcsIHByb3BzLnRoZW1lKX07XG4gIHBhZGRpbmctYm90dG9tOiAke3Byb3BzID0+XG4gICAgKHByb3BzLnNob3dFcnJvciAmJiAhcHJvcHMuc2hvd0Vycm9ySW5Qb3B1cCAmJiAhcHJvcHMuYXNDb2x1bW4gPyBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodChwcm9wcykgOiAwKX07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBWYWx1ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gID4gZGl2ID4gaW5wdXQsXG4gID4gZGl2ID4gLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IGdldFN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMud2FybmluZywgcHJvcHMudGhlbWUpfTtcbiAgfVxuICA+IGRpdiA+IC5pbnB1dC1yb3ctdmFsaWRhdGlvbi1lcnJvciB7XG4gICAgYm9yZGVyOiAke3Byb3BzID0+IGdldEJvcmRlclN0eWxlKHByb3BzLmVycm9yLCBwcm9wcy53YXJuaW5nLCBwcm9wcy50aGVtZSl9O1xuICB9XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtaW4td2lkdGg6IDAlO1xuICBtYXgtd2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLndpZHRoID09PSAnYXV0bycgPyAnMTAwJScgOiBwcm9wcy53aWR0aCl9O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBFcnJvckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1pbi1oZWlnaHQ6ICR7cHJvcHMgPT4gZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQocHJvcHMpfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0LmVycm9yLmNvbG9yfTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuZXJyb3IuZm9udFNpemV9O1xuYDtcblxuY29uc3QgV2FybmluZ01lc3NhZ2UgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnllbGxvd307XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0LmVycm9yLmZvbnRTaXplfTtcbmA7XG5cbmNvbnN0IFJlcXVpcmVkSW5kaWNhdG9yID0gc3R5bGVkLnNwYW5gXG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PlxuICAgIChwcm9wcy5hc0NvbHVtblxuICAgICAgPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5yZXF1aXJlZEluZGljYXRvci5mb250U2l6ZVxuICAgICAgOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5yZXF1aXJlZEluZGljYXRvci5mb250U2l6ZSl9O1xuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PiAocHJvcHMuYXNDb2x1bW4gPyAwIDogcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGgpfTtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMuYXNDb2x1bW4gPyBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGggOiAwKX07XG5gO1xuXG5jb25zdCBGaWVsZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6ICR7cHJvcHMgPT4gKHByb3BzLmFwcGVuZCA/ICdmbGV4JyA6ICdibG9jaycpfTtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBBcHBlbmQgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBmbGV4OiAxIDEgMTAwJTtcbiAgbWluLXdpZHRoOiAwJTtcbmA7XG5cbmNvbnN0IEVycm9yUG9wdXAgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OmZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjA7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBnZXRTdHlsZXMocHJvcHMuZXJyb3IsIHByb3BzLndhcm5pbmcsIHByb3BzLnRoZW1lKX07XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogLTM0cHg7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG4gICY6YWZ0ZXIge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTZweDtcbiAgICByaWdodDogMnB4O1xuICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCAke3Byb3BzID0+IGdldFN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMud2FybmluZywgcHJvcHMudGhlbWUpfTtcbiAgfVxuYDtcblxuY29uc3QgRXJyb3JQb3B1cFRyaWdnZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4OiAxIDEgYXV0bztcbiAgbWluLWhlaWdodDogMCU7XG4gIG1pbi13aWR0aDogMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiA3cHg7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAke3Byb3BzID0+IGdldFN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMud2FybmluZywgcHJvcHMudGhlbWUpfTtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAke3Byb3BzID0+IGdldFN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMud2FybmluZywgcHJvcHMudGhlbWUpfTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5gO1xuXG4vKipcbiAqIEFzc2lnbnMgZ2l2ZW4gcHJvcHMgZGlyZWN0bHkgdG8gaW5wdXQgZWxlbWVudFxuICogQHBhcmFtIGNoaWxkXG4gKiBAcGFyYW0gcHJvcHNcbiAqL1xuY29uc3QgbW9kaWZ5Q2hpbGRyZW4gPSAoY2hpbGQsIHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVxdWlyZWQsIGF1dG9Db21wbGV0ZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgbmV3RWxlbWVudFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogYCR7Y2hpbGQucHJvcHMuY2xhc3NOYW1lIHx8ICcnfWAsXG4gICAgcmVxdWlyZWQsXG4gICAgYXV0b0NvbXBsZXRlLFxuICB9O1xuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld0VsZW1lbnRQcm9wcyk7XG59O1xuXG5jb25zdCBDb250ZW50SW5wdXRSb3cgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIGVycm9yLFxuICAgIHdhcm5pbmcsXG4gICAgc2hvd0Vycm9yLFxuICAgIHNob3dFcnJvckluTGFiZWwsXG4gICAgbGFiZWwsXG4gICAgY2xhc3NOYW1lLFxuICAgIHJlcXVpcmVkLFxuICAgIGlkLFxuICAgIGFzQ29sdW1uLFxuICAgIHNob3dFcnJvckluUG9wdXAsXG4gICAgbGFiZWxXaWR0aCxcbiAgICB2YWx1ZVdpZHRoLFxuICAgIGFwcGVuZCxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IFtpc0hvdmVyZWQsIHNldEhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uTW91c2VFbnRlciA9ICgpID0+IHNldEhvdmVyZWQodHJ1ZSk7XG5cbiAgY29uc3Qgb25Nb3VzZUxlYXZlID0gKCkgPT4gc2V0SG92ZXJlZChmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGFzQ29sdW1uPXthc0NvbHVtbn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXtpZH0+XG4gICAgICA8TGFiZWxDb250YWluZXJcbiAgICAgICAgYXNDb2x1bW49e2FzQ29sdW1ufVxuICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgIHdhcm5pbmc9e3dhcm5pbmd9XG4gICAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgICBzaG93RXJyb3JJblBvcHVwPXtzaG93RXJyb3JJblBvcHVwfVxuICAgICAgICBsYWJlbFdpZHRoPXtsYWJlbFdpZHRofVxuICAgICAgICBzaG93RXJyb3JJbkxhYmVsPXtzaG93RXJyb3JJbkxhYmVsfVxuICAgICAgPlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxMYWJlbCBhc0NvbHVtbj17YXNDb2x1bW59PlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAge3JlcXVpcmVkICYmIDxSZXF1aXJlZEluZGljYXRvciBhc0NvbHVtbj17YXNDb2x1bW59Pio8L1JlcXVpcmVkSW5kaWNhdG9yPn1cbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICApfVxuICAgICAgPC9MYWJlbENvbnRhaW5lcj5cbiAgICAgIDxWYWx1ZUNvbnRhaW5lclxuICAgICAgICBvbk1vdXNlRW50ZXI9e29uTW91c2VFbnRlcn1cbiAgICAgICAgb25Nb3VzZUxlYXZlPXtvbk1vdXNlTGVhdmV9XG4gICAgICAgIHdpZHRoPXt2YWx1ZVdpZHRofVxuICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgIHdhcm5pbmc9e3dhcm5pbmd9XG4gICAgICA+XG4gICAgICAgIHtzaG93RXJyb3JJblBvcHVwICYmIGlzSG92ZXJlZCAmJiAoZXJyb3IgfHwgd2FybmluZykgJiZcbiAgICAgICAgPEVycm9yUG9wdXAgZXJyb3I9e2Vycm9yfSB3YXJuaW5nPXt3YXJuaW5nfT57ZXJyb3J9e3dhcm5pbmd9PC9FcnJvclBvcHVwPn1cbiAgICAgICAgPEZpZWxkQ29udGFpbmVyIGFwcGVuZD17YXBwZW5kfSBob3ZlcmVkPXtpc0hvdmVyZWR9PlxuICAgICAgICAgIHtzaG93RXJyb3JJblBvcHVwICYmICh3YXJuaW5nIHx8IGVycm9yKSAmJlxuICAgICAgICAgIDxFcnJvclBvcHVwVHJpZ2dlciBlcnJvcj17ZXJyb3J9IHdhcm5pbmc9e3dhcm5pbmd9IC8+fVxuXG4gICAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4gbW9kaWZ5Q2hpbGRyZW4oY2hpbGQsIHByb3BzKSl9XG5cbiAgICAgICAgICB7YXBwZW5kICYmIDxBcHBlbmQ+e2FwcGVuZH08L0FwcGVuZD59XG4gICAgICAgIDwvRmllbGRDb250YWluZXI+XG4gICAgICAgIHtzaG93RXJyb3IgJiYgIXNob3dFcnJvckluUG9wdXAgJiYgKFxuICAgICAgICAgIDxFcnJvckNvbnRhaW5lciBhc0NvbHVtbj17YXNDb2x1bW59PlxuICAgICAgICAgICAge2Vycm9yICYmIDxFcnJvck1lc3NhZ2U+e2Vycm9yfTwvRXJyb3JNZXNzYWdlPn1cbiAgICAgICAgICAgIHshZXJyb3IgJiYgd2FybmluZyAmJiA8V2FybmluZ01lc3NhZ2U+e3dhcm5pbmd9PC9XYXJuaW5nTWVzc2FnZT59XG4gICAgICAgICAgPC9FcnJvckNvbnRhaW5lcj5cbiAgICAgICAgKX1cbiAgICAgIDwvVmFsdWVDb250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5Db250ZW50SW5wdXRSb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYm9vbF0pLFxuICB3YXJuaW5nOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYm9vbF0pLFxuICBzaG93RXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBzaG93RXJyb3JJbkxhYmVsOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBhc0NvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG4gIGxhYmVsV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgdmFsdWVXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBhcHBlbmQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIHNob3dFcnJvckluUG9wdXA6IFByb3BUeXBlcy5ib29sLFxufTtcblxuQ29udGVudElucHV0Um93LmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFiZWw6ICcnLFxuICByZXF1aXJlZDogZmFsc2UsXG4gIGNoaWxkcmVuOiBudWxsLFxuICBlcnJvcjogJycsXG4gIHdhcm5pbmc6ICcnLFxuICBzaG93RXJyb3I6IHRydWUsXG4gIHNob3dFcnJvckluTGFiZWw6IHRydWUsXG4gIGNsYXNzTmFtZTogJycsXG4gIGFzQ29sdW1uOiBmYWxzZSxcbiAgbGFiZWxXaWR0aDogdW5kZWZpbmVkLFxuICB2YWx1ZVdpZHRoOiAnYXV0bycsXG4gIGFwcGVuZDogdW5kZWZpbmVkLFxuICBzaG93RXJyb3JJblBvcHVwOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRJbnB1dFJvdztcbiJdfQ==