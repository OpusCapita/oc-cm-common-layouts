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

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

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

var Container = styled.section(_templateObject, function (props) {
  return getContainerDirection(props);
}, function (props) {
  return props.theme.halfGutterWidth;
});

var LabelContainer = styled.div(_templateObject2, function (props) {
  return getLabelMaxWidth(props);
}, function (props) {
  return getLabelStyles(props.showErrorInLabel, props.error, props.warning, props.theme);
}, function (props) {
  return props.showError && !props.showErrorInPopup && !props.asColumn ? getErrorContainerMinHeight(props) : 0;
});

var ValueContainer = styled.div(_templateObject3, function (props) {
  return getStyles(props.error, props.warning, props.theme);
}, function (props) {
  return getBorderStyle(props.error, props.warning, props.theme);
}, function (props) {
  return props.width === 'auto' ? '100%' : props.width;
});

var ErrorContainer = styled.div(_templateObject4, function (props) {
  return getErrorContainerMinHeight(props);
});

var ErrorMessage = styled.span(_templateObject5, function (props) {
  return props.theme.text.error.color;
}, function (props) {
  return props.theme.text.error.fontSize;
});

var WarningMessage = styled.span(_templateObject5, function (props) {
  return props.theme.colors.yellow;
}, function (props) {
  return props.theme.text.error.fontSize;
});

var RequiredIndicator = styled.span(_templateObject6, function (props) {
  return props.theme.halfGutterWidth;
}, function (props) {
  return props.asColumn ? props.theme.inputColumn.requiredIndicator.fontSize : props.theme.inputRow.requiredIndicator.fontSize;
});

var Label = styled.label(_templateObject7, function (props) {
  return props.asColumn ? 0 : props.theme.gutterWidth;
}, function (props) {
  return props.asColumn ? props.theme.halfGutterWidth : 0;
});

var FieldContainer = styled.div(_templateObject8, function (props) {
  return props.append ? 'flex' : 'block';
});

var Append = styled.div(_templateObject9, function (props) {
  return props.theme.gutterWidth;
});

var ErrorPopup = styled.div(_templateObject10, function (props) {
  return getStyles(props.error, props.warning, props.theme);
}, function (props) {
  return props.theme.colors.white;
}, function (props) {
  return getStyles(props.error, props.warning, props.theme);
});

var ErrorPopupTrigger = styled.div(_templateObject11, function (props) {
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

  return React.createElement(
    Container,
    { asColumn: asColumn, className: className, id: id },
    React.createElement(
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
      label && React.createElement(
        Label,
        { asColumn: asColumn },
        label,
        required && React.createElement(
          RequiredIndicator,
          { asColumn: asColumn },
          '*'
        )
      )
    ),
    React.createElement(
      ValueContainer,
      {
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        width: valueWidth,
        error: error,
        warning: warning
      },
      showErrorInPopup && isHovered && (error || warning) && React.createElement(
        ErrorPopup,
        { error: error, warning: warning },
        error,
        warning
      ),
      React.createElement(
        FieldContainer,
        { append: append, hovered: isHovered },
        showErrorInPopup && (warning || error) && React.createElement(ErrorPopupTrigger, { error: error, warning: warning }),
        React.Children.map(children, function (child) {
          return modifyChildren(child, props);
        }),
        append && React.createElement(
          Append,
          null,
          append
        )
      ),
      showError && !showErrorInPopup && React.createElement(
        ErrorContainer,
        { asColumn: asColumn },
        error && React.createElement(
          ErrorMessage,
          null,
          error
        ),
        !error && warning && React.createElement(
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

export default ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJnZXRTdHlsZXMiLCJlcnJvciIsIndhcm5pbmciLCJ0aGVtZSIsInRleHQiLCJjb2xvciIsImNvbG9ycyIsInllbGxvdyIsImdldExhYmVsU3R5bGVzIiwic2hvd0Vycm9ySW5MYWJlbCIsImdldEJvcmRlclN0eWxlIiwiZ2V0Q29udGFpbmVyRGlyZWN0aW9uIiwicHJvcHMiLCJhc0NvbHVtbiIsImlucHV0Q29sdW1uIiwiZmxleERpcmVjdGlvbiIsImlucHV0Um93IiwiZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQiLCJlcnJvckNvbnRhaW5lciIsImhlaWdodCIsImdldExhYmVsTWF4V2lkdGgiLCJsYWJlbFdpZHRoIiwidW5kZWZpbmVkIiwiQ29udGFpbmVyIiwic2VjdGlvbiIsImhhbGZHdXR0ZXJXaWR0aCIsIkxhYmVsQ29udGFpbmVyIiwiZGl2Iiwic2hvd0Vycm9yIiwic2hvd0Vycm9ySW5Qb3B1cCIsIlZhbHVlQ29udGFpbmVyIiwid2lkdGgiLCJFcnJvckNvbnRhaW5lciIsIkVycm9yTWVzc2FnZSIsInNwYW4iLCJmb250U2l6ZSIsIldhcm5pbmdNZXNzYWdlIiwiUmVxdWlyZWRJbmRpY2F0b3IiLCJyZXF1aXJlZEluZGljYXRvciIsIkxhYmVsIiwibGFiZWwiLCJndXR0ZXJXaWR0aCIsIkZpZWxkQ29udGFpbmVyIiwiYXBwZW5kIiwiQXBwZW5kIiwiRXJyb3JQb3B1cCIsIndoaXRlIiwiRXJyb3JQb3B1cFRyaWdnZXIiLCJtb2RpZnlDaGlsZHJlbiIsImNoaWxkIiwicmVxdWlyZWQiLCJhdXRvQ29tcGxldGUiLCJuZXdFbGVtZW50UHJvcHMiLCJjbGFzc05hbWUiLCJjbG9uZUVsZW1lbnQiLCJDb250ZW50SW5wdXRSb3ciLCJjaGlsZHJlbiIsImlkIiwidmFsdWVXaWR0aCIsImlzSG92ZXJlZCIsInNldEhvdmVyZWQiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJDaGlsZHJlbiIsIm1hcCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxRQUFoQixRQUFnQyxPQUFoQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjs7QUFFQSxJQUFNQyxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQWlCQyxLQUFqQixFQUEyQjtBQUMzQyxNQUFJRixLQUFKLEVBQVcsT0FBT0UsTUFBTUMsSUFBTixDQUFXSCxLQUFYLENBQWlCSSxLQUF4QjtBQUNYLE1BQUlILE9BQUosRUFBYSxPQUFPQyxNQUFNRyxNQUFOLENBQWFDLE1BQXBCO0FBQ2IsU0FBTyxFQUFQO0FBQ0QsQ0FKRDs7QUFNQSxJQUFNQyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLGdCQUFELEVBQW1CUixLQUFuQixFQUEwQkMsT0FBMUIsRUFBbUNDLEtBQW5DLEVBQTZDO0FBQ2xFLE1BQUlNLGdCQUFKLEVBQXNCO0FBQ3BCLFdBQU9ULFVBQVVDLEtBQVYsRUFBaUJDLE9BQWpCLEVBQTBCQyxLQUExQixDQUFQO0FBQ0Q7QUFDRCxTQUFPLEVBQVA7QUFDRCxDQUxEOztBQU9BLElBQU1PLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ1QsS0FBRCxFQUFRQyxPQUFSLEVBQWlCQyxLQUFqQixFQUEyQjtBQUNoRCxNQUFJRixTQUFTQyxPQUFiLEVBQXNCLHNCQUFvQkYsVUFBVUMsS0FBVixFQUFpQkMsT0FBakIsRUFBMEJDLEtBQTFCLENBQXBCO0FBQ3RCLFNBQU8sT0FBUDtBQUNELENBSEQ7O0FBS0EsSUFBTVEsd0JBQXdCLFNBQXhCQSxxQkFBd0I7QUFBQSxTQUMzQkMsTUFBTUMsUUFBTixHQUFpQkQsTUFBTVQsS0FBTixDQUFZVyxX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aUI7QUFZN0JmLFVBQVFyQixTQVpxQjtBQWE3Qk8sb0JBQWtCO0FBYlcsQ0FBL0I7O0FBZ0JBLGVBQWUwQixlQUFmIiwiZmlsZSI6ImNvbnRlbnQtaW5wdXQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgZ2V0U3R5bGVzID0gKGVycm9yLCB3YXJuaW5nLCB0aGVtZSkgPT4ge1xuICBpZiAoZXJyb3IpIHJldHVybiB0aGVtZS50ZXh0LmVycm9yLmNvbG9yO1xuICBpZiAod2FybmluZykgcmV0dXJuIHRoZW1lLmNvbG9ycy55ZWxsb3c7XG4gIHJldHVybiAnJztcbn07XG5cbmNvbnN0IGdldExhYmVsU3R5bGVzID0gKHNob3dFcnJvckluTGFiZWwsIGVycm9yLCB3YXJuaW5nLCB0aGVtZSkgPT4ge1xuICBpZiAoc2hvd0Vycm9ySW5MYWJlbCkge1xuICAgIHJldHVybiBnZXRTdHlsZXMoZXJyb3IsIHdhcm5pbmcsIHRoZW1lKTtcbiAgfVxuICByZXR1cm4gJyc7XG59O1xuXG5jb25zdCBnZXRCb3JkZXJTdHlsZSA9IChlcnJvciwgd2FybmluZywgdGhlbWUpID0+IHtcbiAgaWYgKGVycm9yIHx8IHdhcm5pbmcpIHJldHVybiBgMXB4IHNvbGlkICR7Z2V0U3R5bGVzKGVycm9yLCB3YXJuaW5nLCB0aGVtZSl9YDtcbiAgcmV0dXJuICd1bnNldCc7XG59O1xuXG5jb25zdCBnZXRDb250YWluZXJEaXJlY3Rpb24gPSBwcm9wcyA9PlxuICAocHJvcHMuYXNDb2x1bW4gPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5mbGV4RGlyZWN0aW9uIDogcHJvcHMudGhlbWUuaW5wdXRSb3cuZmxleERpcmVjdGlvbik7XG5cbmNvbnN0IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0ID0gcHJvcHMgPT5cbiAgKHByb3BzLmFzQ29sdW1uXG4gICAgPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5lcnJvckNvbnRhaW5lci5oZWlnaHRcbiAgICA6IHByb3BzLnRoZW1lLmlucHV0Um93LmVycm9yQ29udGFpbmVyLmhlaWdodCk7XG5cbmNvbnN0IGdldExhYmVsTWF4V2lkdGggPSAocHJvcHMpID0+IHtcbiAgaWYgKHByb3BzLmFzQ29sdW1uKSByZXR1cm4gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4ubGFiZWxXaWR0aDtcbiAgcmV0dXJuIHByb3BzLmxhYmVsV2lkdGggIT09IHVuZGVmaW5lZCA/IHByb3BzLmxhYmVsV2lkdGggOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5sYWJlbFdpZHRoO1xufTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IGdldENvbnRhaW5lckRpcmVjdGlvbihwcm9wcyl9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmNvbnN0IExhYmVsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0TGFiZWxNYXhXaWR0aChwcm9wcyl9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBnZXRMYWJlbFN0eWxlcyhwcm9wcy5zaG93RXJyb3JJbkxhYmVsLCBwcm9wcy5lcnJvciwgcHJvcHMud2FybmluZywgcHJvcHMudGhlbWUpfTtcbiAgcGFkZGluZy1ib3R0b206ICR7cHJvcHMgPT5cbiAgICAocHJvcHMuc2hvd0Vycm9yICYmICFwcm9wcy5zaG93RXJyb3JJblBvcHVwICYmICFwcm9wcy5hc0NvbHVtbiA/IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0KHByb3BzKSA6IDApfTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IFZhbHVlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgPiBkaXYgPiBpbnB1dCxcbiAgPiBkaXYgPiAuZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gZ2V0U3R5bGVzKHByb3BzLmVycm9yLCBwcm9wcy53YXJuaW5nLCBwcm9wcy50aGVtZSl9O1xuICB9XG4gID4gZGl2ID4gLmlucHV0LXJvdy12YWxpZGF0aW9uLWVycm9yIHtcbiAgICBib3JkZXI6ICR7cHJvcHMgPT4gZ2V0Qm9yZGVyU3R5bGUocHJvcHMuZXJyb3IsIHByb3BzLndhcm5pbmcsIHByb3BzLnRoZW1lKX07XG4gIH1cbiAgZmxleDogMSAxIGF1dG87XG4gIG1pbi13aWR0aDogMCU7XG4gIG1heC13aWR0aDogJHtwcm9wcyA9PiAocHJvcHMud2lkdGggPT09ICdhdXRvJyA/ICcxMDAlJyA6IHByb3BzLndpZHRoKX07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmNvbnN0IEVycm9yQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogJHtwcm9wcyA9PiBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodChwcm9wcyl9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuZXJyb3IuY29sb3J9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dC5lcnJvci5mb250U2l6ZX07XG5gO1xuXG5jb25zdCBXYXJuaW5nTWVzc2FnZSA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMueWVsbG93fTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuZXJyb3IuZm9udFNpemV9O1xuYDtcblxuY29uc3QgUmVxdWlyZWRJbmRpY2F0b3IgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+XG4gICAgKHByb3BzLmFzQ29sdW1uXG4gICAgICA/IHByb3BzLnRoZW1lLmlucHV0Q29sdW1uLnJlcXVpcmVkSW5kaWNhdG9yLmZvbnRTaXplXG4gICAgICA6IHByb3BzLnRoZW1lLmlucHV0Um93LnJlcXVpcmVkSW5kaWNhdG9yLmZvbnRTaXplKX07XG5gO1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5hc0NvbHVtbiA/IDAgOiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aCl9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IChwcm9wcy5hc0NvbHVtbiA/IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aCA6IDApfTtcbmA7XG5cbmNvbnN0IEZpZWxkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogJHtwcm9wcyA9PiAocHJvcHMuYXBwZW5kID8gJ2ZsZXgnIDogJ2Jsb2NrJyl9O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEFwcGVuZCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aH07XG4gIGZsZXg6IDEgMSAxMDAlO1xuICBtaW4td2lkdGg6IDAlO1xuYDtcblxuY29uc3QgRXJyb3JQb3B1cCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6ZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyMDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IGdldFN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMud2FybmluZywgcHJvcHMudGhlbWUpfTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICByaWdodDogMDtcbiAgdG9wOiAtMzRweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcbiAgJjphZnRlciB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtNnB4O1xuICAgIHJpZ2h0OiAycHg7XG4gICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICR7cHJvcHMgPT4gZ2V0U3R5bGVzKHByb3BzLmVycm9yLCBwcm9wcy53YXJuaW5nLCBwcm9wcy50aGVtZSl9O1xuICB9XG5gO1xuXG5jb25zdCBFcnJvclBvcHVwVHJpZ2dlciA9IHN0eWxlZC5kaXZgXG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtaW4taGVpZ2h0OiAwJTtcbiAgbWluLXdpZHRoOiAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOmJlZm9yZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDdweDtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6ICR7cHJvcHMgPT4gZ2V0U3R5bGVzKHByb3BzLmVycm9yLCBwcm9wcy53YXJuaW5nLCBwcm9wcy50aGVtZSl9O1xuICAgIGJvcmRlci10b3AtY29sb3I6ICR7cHJvcHMgPT4gZ2V0U3R5bGVzKHByb3BzLmVycm9yLCBwcm9wcy53YXJuaW5nLCBwcm9wcy50aGVtZSl9O1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbmA7XG5cbi8qKlxuICogQXNzaWducyBnaXZlbiBwcm9wcyBkaXJlY3RseSB0byBpbnB1dCBlbGVtZW50XG4gKiBAcGFyYW0gY2hpbGRcbiAqIEBwYXJhbSBwcm9wc1xuICovXG5jb25zdCBtb2RpZnlDaGlsZHJlbiA9IChjaGlsZCwgcHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXF1aXJlZCwgYXV0b0NvbXBsZXRlIH0gPSBwcm9wcztcblxuICBjb25zdCBuZXdFbGVtZW50UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiBgJHtjaGlsZC5wcm9wcy5jbGFzc05hbWUgfHwgJyd9YCxcbiAgICByZXF1aXJlZCxcbiAgICBhdXRvQ29tcGxldGUsXG4gIH07XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgbmV3RWxlbWVudFByb3BzKTtcbn07XG5cbmNvbnN0IENvbnRlbnRJbnB1dFJvdyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sXG4gICAgZXJyb3IsXG4gICAgd2FybmluZyxcbiAgICBzaG93RXJyb3IsXG4gICAgc2hvd0Vycm9ySW5MYWJlbCxcbiAgICBsYWJlbCxcbiAgICBjbGFzc05hbWUsXG4gICAgcmVxdWlyZWQsXG4gICAgaWQsXG4gICAgYXNDb2x1bW4sXG4gICAgc2hvd0Vycm9ySW5Qb3B1cCxcbiAgICBsYWJlbFdpZHRoLFxuICAgIHZhbHVlV2lkdGgsXG4gICAgYXBwZW5kLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25Nb3VzZUVudGVyID0gKCkgPT4gc2V0SG92ZXJlZCh0cnVlKTtcblxuICBjb25zdCBvbk1vdXNlTGVhdmUgPSAoKSA9PiBzZXRIb3ZlcmVkKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgYXNDb2x1bW49e2FzQ29sdW1ufSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e2lkfT5cbiAgICAgIDxMYWJlbENvbnRhaW5lclxuICAgICAgICBhc0NvbHVtbj17YXNDb2x1bW59XG4gICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgd2FybmluZz17d2FybmluZ31cbiAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgIHNob3dFcnJvckluUG9wdXA9e3Nob3dFcnJvckluUG9wdXB9XG4gICAgICAgIGxhYmVsV2lkdGg9e2xhYmVsV2lkdGh9XG4gICAgICAgIHNob3dFcnJvckluTGFiZWw9e3Nob3dFcnJvckluTGFiZWx9XG4gICAgICA+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPExhYmVsIGFzQ29sdW1uPXthc0NvbHVtbn0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICB7cmVxdWlyZWQgJiYgPFJlcXVpcmVkSW5kaWNhdG9yIGFzQ29sdW1uPXthc0NvbHVtbn0+KjwvUmVxdWlyZWRJbmRpY2F0b3I+fVxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICl9XG4gICAgICA8L0xhYmVsQ29udGFpbmVyPlxuICAgICAgPFZhbHVlQ29udGFpbmVyXG4gICAgICAgIG9uTW91c2VFbnRlcj17b25Nb3VzZUVudGVyfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e29uTW91c2VMZWF2ZX1cbiAgICAgICAgd2lkdGg9e3ZhbHVlV2lkdGh9XG4gICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgd2FybmluZz17d2FybmluZ31cbiAgICAgID5cbiAgICAgICAge3Nob3dFcnJvckluUG9wdXAgJiYgaXNIb3ZlcmVkICYmIChlcnJvciB8fCB3YXJuaW5nKSAmJlxuICAgICAgICA8RXJyb3JQb3B1cCBlcnJvcj17ZXJyb3J9IHdhcm5pbmc9e3dhcm5pbmd9PntlcnJvcn17d2FybmluZ308L0Vycm9yUG9wdXA+fVxuICAgICAgICA8RmllbGRDb250YWluZXIgYXBwZW5kPXthcHBlbmR9IGhvdmVyZWQ9e2lzSG92ZXJlZH0+XG4gICAgICAgICAge3Nob3dFcnJvckluUG9wdXAgJiYgKHdhcm5pbmcgfHwgZXJyb3IpICYmXG4gICAgICAgICAgPEVycm9yUG9wdXBUcmlnZ2VyIGVycm9yPXtlcnJvcn0gd2FybmluZz17d2FybmluZ30gLz59XG5cbiAgICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiBtb2RpZnlDaGlsZHJlbihjaGlsZCwgcHJvcHMpKX1cblxuICAgICAgICAgIHthcHBlbmQgJiYgPEFwcGVuZD57YXBwZW5kfTwvQXBwZW5kPn1cbiAgICAgICAgPC9GaWVsZENvbnRhaW5lcj5cbiAgICAgICAge3Nob3dFcnJvciAmJiAhc2hvd0Vycm9ySW5Qb3B1cCAmJiAoXG4gICAgICAgICAgPEVycm9yQ29udGFpbmVyIGFzQ29sdW1uPXthc0NvbHVtbn0+XG4gICAgICAgICAgICB7ZXJyb3IgJiYgPEVycm9yTWVzc2FnZT57ZXJyb3J9PC9FcnJvck1lc3NhZ2U+fVxuICAgICAgICAgICAgeyFlcnJvciAmJiB3YXJuaW5nICYmIDxXYXJuaW5nTWVzc2FnZT57d2FybmluZ308L1dhcm5pbmdNZXNzYWdlPn1cbiAgICAgICAgICA8L0Vycm9yQ29udGFpbmVyPlxuICAgICAgICApfVxuICAgICAgPC9WYWx1ZUNvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkNvbnRlbnRJbnB1dFJvdy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ib29sXSksXG4gIHdhcm5pbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ib29sXSksXG4gIHNob3dFcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dFcnJvckluTGFiZWw6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGFzQ29sdW1uOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGFiZWxXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICB2YWx1ZVdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIGFwcGVuZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgc2hvd0Vycm9ySW5Qb3B1cDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5Db250ZW50SW5wdXRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBsYWJlbDogJycsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbiAgY2hpbGRyZW46IG51bGwsXG4gIGVycm9yOiAnJyxcbiAgd2FybmluZzogJycsXG4gIHNob3dFcnJvcjogdHJ1ZSxcbiAgc2hvd0Vycm9ySW5MYWJlbDogdHJ1ZSxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgYXNDb2x1bW46IGZhbHNlLFxuICBsYWJlbFdpZHRoOiB1bmRlZmluZWQsXG4gIHZhbHVlV2lkdGg6ICdhdXRvJyxcbiAgYXBwZW5kOiB1bmRlZmluZWQsXG4gIHNob3dFcnJvckluUG9wdXA6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudElucHV0Um93O1xuIl19