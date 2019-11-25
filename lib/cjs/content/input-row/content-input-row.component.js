'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n'], ['\n  width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  > div > input,\n  > div > .form-control {\n    border-color: ', ';\n  }\n  > div > .input-row-validation-error {\n    border: ', ';\n  }\n  flex: 1 1 auto;\n  min-width: 0%;\n  max-width: ', ';\n  position: relative;\n'], ['\n  > div > input,\n  > div > .form-control {\n    border-color: ', ';\n  }\n  > div > .input-row-validation-error {\n    border: ', ';\n  }\n  flex: 1 1 auto;\n  min-width: 0%;\n  max-width: ', ';\n  position: relative;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n'], ['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  color: ', ';\n  font-size: ', ';\n'], ['\n  color: ', ';\n  font-size: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n  font-size: ', ';\n'], ['\n  margin-left: ', ';\n  font-size: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  margin-right: ', ';\n  margin-bottom: ', ';\n'], ['\n  margin-right: ', ';\n  margin-bottom: ', ';\n']),
    _templateObject8 = _taggedTemplateLiteralLoose(['\n  display: ', ';\n  width: 100%;\n  align-items: center;\n'], ['\n  display: ', ';\n  width: 100%;\n  align-items: center;\n']),
    _templateObject9 = _taggedTemplateLiteralLoose(['\n  padding-left: ', ';\n  flex: 1 1 100%;\n  min-width: 0%;\n'], ['\n  padding-left: ', ';\n  flex: 1 1 100%;\n  min-width: 0%;\n']),
    _templateObject10 = _taggedTemplateLiteralLoose(['\n  display:flex;\n  align-items: center;\n  position: absolute;\n  z-index: 20;\n  height: 28px;\n  background: ', ';\n  padding: 0 10px;\n  right: 0;\n  top: -34px;\n  color: ', ';\n  &:after {\n    width: 0;\n    height: 0;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    content: "";\n    display: block;\n    position: absolute;\n    bottom: -6px;\n    right: 2px;\n    border-top: 6px solid ', ';\n  }\n'], ['\n  display:flex;\n  align-items: center;\n  position: absolute;\n  z-index: 20;\n  height: 28px;\n  background: ', ';\n  padding: 0 10px;\n  right: 0;\n  top: -34px;\n  color: ', ';\n  &:after {\n    width: 0;\n    height: 0;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    content: "";\n    display: block;\n    position: absolute;\n    bottom: -6px;\n    right: 2px;\n    border-top: 6px solid ', ';\n  }\n']),
    _templateObject11 = _taggedTemplateLiteralLoose(['\n  flex: 1 1 auto;\n  min-height: 0%;\n  min-width: 0%;\n  position: relative;\n  &:before {\n    display: block;\n    content: "";\n    position: absolute;\n    right: 0;\n    top: 0;\n    border-color: transparent;\n    border-style: solid;\n    border-width: 7px;\n    border-right-color: ', ';\n    border-top-color: ', ';\n    z-index: 1;\n  }\n'], ['\n  flex: 1 1 auto;\n  min-height: 0%;\n  min-width: 0%;\n  position: relative;\n  &:before {\n    display: block;\n    content: "";\n    position: absolute;\n    right: 0;\n    top: 0;\n    border-color: transparent;\n    border-style: solid;\n    border-width: 7px;\n    border-right-color: ', ';\n    border-top-color: ', ';\n    z-index: 1;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

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
  if (error || warning) return '1px solid ' + getStyles(error, warning, theme);
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

var Container = _styledComponents2.default.section(_templateObject, function (props) {
  return getContainerDirection(props);
}, function (props) {
  return props.theme.halfGutterWidth;
});

var LabelContainer = _styledComponents2.default.div(_templateObject2, function (props) {
  return getLabelMaxWidth(props);
}, function (props) {
  return getLabelStyles(props.showErrorInLabel, props.error, props.warning, props.theme);
}, function (props) {
  return props.showError && !props.showErrorInPopup && !props.asColumn ? getErrorContainerMinHeight(props) : 0;
});

var ValueContainer = _styledComponents2.default.div(_templateObject3, function (props) {
  return getStyles(props.error, props.warning, props.theme);
}, function (props) {
  return getBorderStyle(props.error, props.warning, props.theme);
}, function (props) {
  return props.width === 'auto' ? '100%' : props.width;
});

var ErrorContainer = _styledComponents2.default.div(_templateObject4, function (props) {
  return getErrorContainerMinHeight(props);
});

var ErrorMessage = _styledComponents2.default.span(_templateObject5, function (props) {
  return props.theme.text.error.color;
}, function (props) {
  return props.theme.text.error.fontSize;
});

var WarningMessage = _styledComponents2.default.span(_templateObject5, function (props) {
  return props.theme.colors.yellow;
}, function (props) {
  return props.theme.text.error.fontSize;
});

var RequiredIndicator = _styledComponents2.default.span(_templateObject6, function (props) {
  return props.theme.halfGutterWidth;
}, function (props) {
  return props.asColumn ? props.theme.inputColumn.requiredIndicator.fontSize : props.theme.inputRow.requiredIndicator.fontSize;
});

var Label = _styledComponents2.default.label(_templateObject7, function (props) {
  return props.asColumn ? 0 : props.theme.gutterWidth;
}, function (props) {
  return props.asColumn ? props.theme.halfGutterWidth : 0;
});

var FieldContainer = _styledComponents2.default.div(_templateObject8, function (props) {
  return props.append ? 'flex' : 'block';
});

var Append = _styledComponents2.default.div(_templateObject9, function (props) {
  return props.theme.gutterWidth;
});

var ErrorPopup = _styledComponents2.default.div(_templateObject10, function (props) {
  return getStyles(props.error, props.warning, props.theme);
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return getStyles(props.error, props.warning, props.theme);
});

var ErrorPopupTrigger = _styledComponents2.default.div(_templateObject11, function (props) {
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
    className: '' + (child.props.className || ''),
    required: required,
    autoComplete: autoComplete
  };

  return _react2.default.cloneElement(child, newElementProps);
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

  return _react2.default.createElement(
    Container,
    { asColumn: asColumn, className: className, id: id },
    _react2.default.createElement(
      LabelContainer,
      {
        asColumn: asColumn,
        error: error,
        warning: warning,
        showError: showError,
        showErrorInPopup: showErrorInPopup,
        labelWidth: labelWidth,
        showErrorInLabel: showErrorInLabel
      },
      label && _react2.default.createElement(
        Label,
        { asColumn: asColumn },
        label,
        required && _react2.default.createElement(
          RequiredIndicator,
          { asColumn: asColumn },
          '*'
        )
      )
    ),
    _react2.default.createElement(
      ValueContainer,
      {
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        width: valueWidth,
        error: error,
        warning: warning
      },
      showErrorInPopup && isHovered && (error || warning) && _react2.default.createElement(
        ErrorPopup,
        { error: error, warning: warning },
        error,
        warning
      ),
      _react2.default.createElement(
        FieldContainer,
        { append: append, hovered: isHovered },
        showErrorInPopup && (warning || error) && _react2.default.createElement(ErrorPopupTrigger, { error: error, warning: warning }),
        _react2.default.Children.map(children, function (child) {
          return modifyChildren(child, props);
        }),
        append && _react2.default.createElement(
          Append,
          null,
          append
        )
      ),
      showError && !showErrorInPopup && _react2.default.createElement(
        ErrorContainer,
        { asColumn: asColumn },
        error && _react2.default.createElement(
          ErrorMessage,
          null,
          error
        ),
        !error && warning && _react2.default.createElement(
          WarningMessage,
          null,
          warning
        )
      )
    )
  );
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

exports.default = ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImdldFN0eWxlcyIsImVycm9yIiwid2FybmluZyIsInRoZW1lIiwidGV4dCIsImNvbG9yIiwiY29sb3JzIiwieWVsbG93IiwiZ2V0TGFiZWxTdHlsZXMiLCJzaG93RXJyb3JJbkxhYmVsIiwiZ2V0Qm9yZGVyU3R5bGUiLCJnZXRDb250YWluZXJEaXJlY3Rpb24iLCJwcm9wcyIsImFzQ29sdW1uIiwiaW5wdXRDb2x1bW4iLCJmbGV4RGlyZWN0aW9uIiwiaW5wdXRSb3ciLCJnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodCIsImVycm9yQ29udGFpbmVyIiwiaGVpZ2h0IiwiZ2V0TGFiZWxNYXhXaWR0aCIsImxhYmVsV2lkdGgiLCJ1bmRlZmluZWQiLCJDb250YWluZXIiLCJzdHlsZWQiLCJzZWN0aW9uIiwiaGFsZkd1dHRlcldpZHRoIiwiTGFiZWxDb250YWluZXIiLCJkaXYiLCJzaG93RXJyb3IiLCJzaG93RXJyb3JJblBvcHVwIiwiVmFsdWVDb250YWluZXIiLCJ3aWR0aCIsIkVycm9yQ29udGFpbmVyIiwiRXJyb3JNZXNzYWdlIiwic3BhbiIsImZvbnRTaXplIiwiV2FybmluZ01lc3NhZ2UiLCJSZXF1aXJlZEluZGljYXRvciIsInJlcXVpcmVkSW5kaWNhdG9yIiwiTGFiZWwiLCJsYWJlbCIsImd1dHRlcldpZHRoIiwiRmllbGRDb250YWluZXIiLCJhcHBlbmQiLCJBcHBlbmQiLCJFcnJvclBvcHVwIiwid2hpdGUiLCJFcnJvclBvcHVwVHJpZ2dlciIsIm1vZGlmeUNoaWxkcmVuIiwiY2hpbGQiLCJyZXF1aXJlZCIsImF1dG9Db21wbGV0ZSIsIm5ld0VsZW1lbnRQcm9wcyIsImNsYXNzTmFtZSIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwiQ29udGVudElucHV0Um93IiwiY2hpbGRyZW4iLCJpZCIsInZhbHVlV2lkdGgiLCJpc0hvdmVyZWQiLCJzZXRIb3ZlcmVkIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiQ2hpbGRyZW4iLCJtYXAiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxTQUFaQSxTQUFZLENBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFpQkMsS0FBakIsRUFBMkI7QUFDM0MsTUFBSUYsS0FBSixFQUFXLE9BQU9FLE1BQU1DLElBQU4sQ0FBV0gsS0FBWCxDQUFpQkksS0FBeEI7QUFDWCxNQUFJSCxPQUFKLEVBQWEsT0FBT0MsTUFBTUcsTUFBTixDQUFhQyxNQUFwQjtBQUNiLFNBQU8sRUFBUDtBQUNELENBSkQ7O0FBTUEsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxnQkFBRCxFQUFtQlIsS0FBbkIsRUFBMEJDLE9BQTFCLEVBQW1DQyxLQUFuQyxFQUE2QztBQUNsRSxNQUFJTSxnQkFBSixFQUFzQjtBQUNwQixXQUFPVCxVQUFVQyxLQUFWLEVBQWlCQyxPQUFqQixFQUEwQkMsS0FBMUIsQ0FBUDtBQUNEO0FBQ0QsU0FBTyxFQUFQO0FBQ0QsQ0FMRDs7QUFPQSxJQUFNTyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNULEtBQUQsRUFBUUMsT0FBUixFQUFpQkMsS0FBakIsRUFBMkI7QUFDaEQsTUFBSUYsU0FBU0MsT0FBYixFQUFzQixzQkFBb0JGLFVBQVVDLEtBQVYsRUFBaUJDLE9BQWpCLEVBQTBCQyxLQUExQixDQUFwQjtBQUN0QixTQUFPLE9BQVA7QUFDRCxDQUhEOztBQUtBLElBQU1RLHdCQUF3QixTQUF4QkEscUJBQXdCO0FBQUEsU0FDM0JDLE1BQU1DLFFBQU4sR0FBaUJELE1BQU1ULEtBQU4sQ0FBWVcsV0FBWixDQUF3QkMsYUFBekMsR0FBeURILE1BQU1ULEtBQU4sQ0FBWWEsUUFBWixDQUFxQkQsYUFEbkQ7QUFBQSxDQUE5Qjs7QUFHQSxJQUFNRSw2QkFBNkIsU0FB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dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgZ2V0U3R5bGVzID0gKGVycm9yLCB3YXJuaW5nLCB0aGVtZSkgPT4ge1xuICBpZiAoZXJyb3IpIHJldHVybiB0aGVtZS50ZXh0LmVycm9yLmNvbG9yO1xuICBpZiAod2FybmluZykgcmV0dXJuIHRoZW1lLmNvbG9ycy55ZWxsb3c7XG4gIHJldHVybiAnJztcbn07XG5cbmNvbnN0IGdldExhYmVsU3R5bGVzID0gKHNob3dFcnJvckluTGFiZWwsIGVycm9yLCB3YXJuaW5nLCB0aGVtZSkgPT4ge1xuICBpZiAoc2hvd0Vycm9ySW5MYWJlbCkge1xuICAgIHJldHVybiBnZXRTdHlsZXMoZXJyb3IsIHdhcm5pbmcsIHRoZW1lKTtcbiAgfVxuICByZXR1cm4gJyc7XG59O1xuXG5jb25zdCBnZXRCb3JkZXJTdHlsZSA9IChlcnJvciwgd2FybmluZywgdGhlbWUpID0+IHtcbiAgaWYgKGVycm9yIHx8IHdhcm5pbmcpIHJldHVybiBgMXB4IHNvbGlkICR7Z2V0U3R5bGVzKGVycm9yLCB3YXJuaW5nLCB0aGVtZSl9YDtcbiAgcmV0dXJuICd1bnNldCc7XG59O1xuXG5jb25zdCBnZXRDb250YWluZXJEaXJlY3Rpb24gPSBwcm9wcyA9PlxuICAocHJvcHMuYXNDb2x1bW4gPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5mbGV4RGlyZWN0aW9uIDogcHJvcHMudGhlbWUuaW5wdXRSb3cuZmxleERpcmVjdGlvbik7XG5cbmNvbnN0IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0ID0gcHJvcHMgPT5cbiAgKHByb3BzLmFzQ29sdW1uXG4gICAgPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5lcnJvckNvbnRhaW5lci5oZWlnaHRcbiAgICA6IHByb3BzLnRoZW1lLmlucHV0Um93LmVycm9yQ29udGFpbmVyLmhlaWdodCk7XG5cbmNvbnN0IGdldExhYmVsTWF4V2lkdGggPSAocHJvcHMpID0+IHtcbiAgaWYgKHByb3BzLmFzQ29sdW1uKSByZXR1cm4gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4ubGFiZWxXaWR0aDtcbiAgcmV0dXJuIHByb3BzLmxhYmVsV2lkdGggIT09IHVuZGVmaW5lZCA/IHByb3BzLmxhYmVsV2lkdGggOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5sYWJlbFdpZHRoO1xufTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IGdldENvbnRhaW5lckRpcmVjdGlvbihwcm9wcyl9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmNvbnN0IExhYmVsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0TGFiZWxNYXhXaWR0aChwcm9wcyl9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBnZXRMYWJlbFN0eWxlcyhwcm9wcy5zaG93RXJyb3JJbkxhYmVsLCBwcm9wcy5lcnJvciwgcHJvcHMud2FybmluZywgcHJvcHMudGhlbWUpfTtcbiAgcGFkZGluZy1ib3R0b206ICR7cHJvcHMgPT5cbiAgICAocHJvcHMuc2hvd0Vycm9yICYmICFwcm9wcy5zaG93RXJyb3JJblBvcHVwICYmICFwcm9wcy5hc0NvbHVtbiA/IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0KHByb3BzKSA6IDApfTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IFZhbHVlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgPiBkaXYgPiBpbnB1dCxcbiAgPiBkaXYgPiAuZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gZ2V0U3R5bGVzKHByb3BzLmVycm9yLCBwcm9wcy53YXJuaW5nLCBwcm9wcy50aGVtZSl9O1xuICB9XG4gID4gZGl2ID4gLmlucHV0LXJvdy12YWxpZGF0aW9uLWVycm9yIHtcbiAgICBib3JkZXI6ICR7cHJvcHMgPT4gZ2V0Qm9yZGVyU3R5bGUocHJvcHMuZXJyb3IsIHByb3BzLndhcm5pbmcsIHByb3BzLnRoZW1lKX07XG4gIH1cbiAgZmxleDogMSAxIGF1dG87XG4gIG1pbi13aWR0aDogMCU7XG4gIG1heC13aWR0aDogJHtwcm9wcyA9PiAocHJvcHMud2lkdGggPT09ICdhdXRvJyA/ICcxMDAlJyA6IHByb3BzLndpZHRoKX07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmNvbnN0IEVycm9yQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogJHtwcm9wcyA9PiBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodChwcm9wcyl9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuZXJyb3IuY29sb3J9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dC5lcnJvci5mb250U2l6ZX07XG5gO1xuXG5jb25zdCBXYXJuaW5nTWVzc2FnZSA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMueWVsbG93fTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuZXJyb3IuZm9udFNpemV9O1xuYDtcblxuY29uc3QgUmVxdWlyZWRJbmRpY2F0b3IgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+XG4gICAgKHByb3BzLmFzQ29sdW1uXG4gICAgICA/IHByb3BzLnRoZW1lLmlucHV0Q29sdW1uLnJlcXVpcmVkSW5kaWNhdG9yLmZvbnRTaXplXG4gICAgICA6IHByb3BzLnRoZW1lLmlucHV0Um93LnJlcXVpcmVkSW5kaWNhdG9yLmZvbnRTaXplKX07XG5gO1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5hc0NvbHVtbiA/IDAgOiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aCl9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IChwcm9wcy5hc0NvbHVtbiA/IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aCA6IDApfTtcbmA7XG5cbmNvbnN0IEZpZWxkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogJHtwcm9wcyA9PiAocHJvcHMuYXBwZW5kID8gJ2ZsZXgnIDogJ2Jsb2NrJyl9O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEFwcGVuZCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aH07XG4gIGZsZXg6IDEgMSAxMDAlO1xuICBtaW4td2lkdGg6IDAlO1xuYDtcblxuY29uc3QgRXJyb3JQb3B1cCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyMDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IGdldFN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMud2FybmluZywgcHJvcHMudGhlbWUpfTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICByaWdodDogMDtcbiAgdG9wOiAtMzRweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcbiAgJjphZnRlciB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtNnB4O1xuICAgIHJpZ2h0OiAycHg7XG4gICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICR7cHJvcHMgPT4gZ2V0U3R5bGVzKHByb3BzLmVycm9yLCBwcm9wcy53YXJuaW5nLCBwcm9wcy50aGVtZSl9O1xuICB9XG5gO1xuXG5jb25zdCBFcnJvclBvcHVwVHJpZ2dlciA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtaW4taGVpZ2h0OiAwJTtcbiAgbWluLXdpZHRoOiAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOmJlZm9yZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDdweDtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICR7cHJvcHMgPT4gZ2V0U3R5bGVzKHByb3BzLmVycm9yLCBwcm9wcy53YXJuaW5nLCBwcm9wcy50aGVtZSl9O1xuICAgIGJvcmRlci10b3AtY29sb3I6ICR7cHJvcHMgPT4gZ2V0U3R5bGVzKHByb3BzLmVycm9yLCBwcm9wcy53YXJuaW5nLCBwcm9wcy50aGVtZSl9O1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbmA7XG5cbi8qKlxuICogQXNzaWducyBnaXZlbiBwcm9wcyBkaXJlY3RseSB0byBpbnB1dCBlbGVtZW50XG4gKiBAcGFyYW0gY2hpbGRcbiAqIEBwYXJhbSBwcm9wc1xuICovXG5jb25zdCBtb2RpZnlDaGlsZHJlbiA9IChjaGlsZCwgcHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXF1aXJlZCwgYXV0b0NvbXBsZXRlIH0gPSBwcm9wcztcblxuICBjb25zdCBuZXdFbGVtZW50UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiBgJHtjaGlsZC5wcm9wcy5jbGFzc05hbWUgfHwgJyd9YCxcbiAgICByZXF1aXJlZCxcbiAgICBhdXRvQ29tcGxldGUsXG4gIH07XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgbmV3RWxlbWVudFByb3BzKTtcbn07XG5cbmNvbnN0IENvbnRlbnRJbnB1dFJvdyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sXG4gICAgZXJyb3IsXG4gICAgd2FybmluZyxcbiAgICBzaG93RXJyb3IsXG4gICAgc2hvd0Vycm9ySW5MYWJlbCxcbiAgICBsYWJlbCxcbiAgICBjbGFzc05hbWUsXG4gICAgcmVxdWlyZWQsXG4gICAgaWQsXG4gICAgYXNDb2x1bW4sXG4gICAgc2hvd0Vycm9ySW5Qb3B1cCxcbiAgICBsYWJlbFdpZHRoLFxuICAgIHZhbHVlV2lkdGgsXG4gICAgYXBwZW5kLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25Nb3VzZUVudGVyID0gKCkgPT4gc2V0SG92ZXJlZCh0cnVlKTtcblxuICBjb25zdCBvbk1vdXNlTGVhdmUgPSAoKSA9PiBzZXRIb3ZlcmVkKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgYXNDb2x1bW49e2FzQ29sdW1ufSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e2lkfT5cbiAgICAgIDxMYWJlbENvbnRhaW5lclxuICAgICAgICBhc0NvbHVtbj17YXNDb2x1bW59XG4gICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgd2FybmluZz17d2FybmluZ31cbiAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgIHNob3dFcnJvckluUG9wdXA9e3Nob3dFcnJvckluUG9wdXB9XG4gICAgICAgIGxhYmVsV2lkdGg9e2xhYmVsV2lkdGh9XG4gICAgICAgIHNob3dFcnJvckluTGFiZWw9e3Nob3dFcnJvckluTGFiZWx9XG4gICAgICA+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPExhYmVsIGFzQ29sdW1uPXthc0NvbHVtbn0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICB7cmVxdWlyZWQgJiYgPFJlcXVpcmVkSW5kaWNhdG9yIGFzQ29sdW1uPXthc0NvbHVtbn0+KjwvUmVxdWlyZWRJbmRpY2F0b3I+fVxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICl9XG4gICAgICA8L0xhYmVsQ29udGFpbmVyPlxuICAgICAgPFZhbHVlQ29udGFpbmVyXG4gICAgICAgIG9uTW91c2VFbnRlcj17b25Nb3VzZUVudGVyfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX1cbiAgICAgICAgd2lkdGg9e3ZhbHVlV2lkdGh9XG4gICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgd2FybmluZz17d2FybmluZ31cbiAgICAgID5cbiAgICAgICAge3Nob3dFcnJvckluUG9wdXAgJiYgaXNIb3ZlcmVkICYmIChlcnJvciB8fCB3YXJuaW5nKSAmJlxuICAgICAgICA8RXJyb3JQb3B1cCBlcnJvcj17ZXJyb3J9IHdhcm5pbmc9e3dhcm5pbmd9PntlcnJvcn17d2FybmluZ308L0Vycm9yUG9wdXA+fVxuICAgICAgICA8RmllbGRDb250YWluZXIgYXBwZW5kPXthcHBlbmR9IGhvdmVyZWQ9e2lzSG92ZXJlZH0+XG4gICAgICAgICAge3Nob3dFcnJvckluUG9wdXAgJiYgKHdhcm5pbmcgfHwgZXJyb3IpICYmXG4gICAgICAgICAgPEVycm9yUG9wdXBUcmlnZ2VyIGVycm9yPXtlcnJvcn0gd2FybmluZz17d2FybmluZ30gLz59XG5cbiAgICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiBtb2RpZnlDaGlsZHJlbihjaGlsZCwgcHJvcHMpKX1cblxuICAgICAgICAgIHthcHBlbmQgJiYgPEFwcGVuZD57YXBwZW5kfTwvQXBwZW5kPn1cbiAgICAgICAgPC9GaWVsZENvbnRhaW5lcj5cbiAgICAgICAge3Nob3dFcnJvciAmJiAhc2hvd0Vycm9ySW5Qb3B1cCAmJiAoXG4gICAgICAgICAgPEVycm9yQ29udGFpbmVyIGFzQ29sdW1uPXthc0NvbHVtbn0+XG4gICAgICAgICAgICB7ZXJyb3IgJiYgPEVycm9yTWVzc2FnZT57ZXJyb3J9PC9FcnJvck1lc3NhZ2U+fVxuICAgICAgICAgICAgeyFlcnJvciAmJiB3YXJuaW5nICYmIDxXYXJuaW5nTWVzc2FnZT57d2FybmluZ308L1dhcm5pbmdNZXNzYWdlPn1cbiAgICAgICAgICA8L0Vycm9yQ29udGFpbmVyPlxuICAgICAgICApfVxuICAgICAgPC9WYWx1ZUNvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkNvbnRlbnRJbnB1dFJvdy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ib29sXSksXG4gIHdhcm5pbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ib29sXSksXG4gIHNob3dFcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dFcnJvckluTGFiZWw6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGFzQ29sdW1uOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGFiZWxXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICB2YWx1ZVdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIGFwcGVuZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgc2hvd0Vycm9ySW5Qb3B1cDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5Db250ZW50SW5wdXRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBsYWJlbDogJycsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbiAgY2hpbGRyZW46IG51bGwsXG4gIGVycm9yOiAnJyxcbiAgd2FybmluZzogJycsXG4gIHNob3dFcnJvcjogdHJ1ZSxcbiAgc2hvd0Vycm9ySW5MYWJlbDogdHJ1ZSxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgYXNDb2x1bW46IGZhbHNlLFxuICBsYWJlbFdpZHRoOiB1bmRlZmluZWQsXG4gIHZhbHVlV2lkdGg6ICdhdXRvJyxcbiAgYXBwZW5kOiB1bmRlZmluZWQsXG4gIHNob3dFcnJvckluUG9wdXA6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudElucHV0Um93O1xuIl19