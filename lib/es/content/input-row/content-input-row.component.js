var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n'], ['\n  width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  > div > input,\n  > div > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n  min-width: 0%;\n  max-width: ', ';\n  position: relative;\n'], ['\n  > div > input,\n  > div > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n  min-width: 0%;\n  max-width: ', ';\n  position: relative;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n'], ['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  color: ', ';\n  font-size: ', ';\n'], ['\n  color: ', ';\n  font-size: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n  font-size: ', ';\n'], ['\n  margin-left: ', ';\n  font-size: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  margin-right: ', ';\n  margin-bottom: ', ';\n'], ['\n  margin-right: ', ';\n  margin-bottom: ', ';\n']),
    _templateObject8 = _taggedTemplateLiteralLoose(['\n  display: ', ';\n  width: 100%;\n  align-items: center;\n'], ['\n  display: ', ';\n  width: 100%;\n  align-items: center;\n']),
    _templateObject9 = _taggedTemplateLiteralLoose(['\n  padding-left: ', ';\n  flex: 1 1 100%;\n  min-width: 0%;\n'], ['\n  padding-left: ', ';\n  flex: 1 1 100%;\n  min-width: 0%;\n']),
    _templateObject10 = _taggedTemplateLiteralLoose(['\n  display:flex;\n  align-items: center;\n  position: absolute;\n  z-index: 20;\n  height: 28px; \n  background: ', ';\n  padding: 0 10px;\n  right: 0;\n  top: -34px;\n  color: ', ';\n  &:after {\n    width: 0; \n    height: 0; \n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    content: "";\n    display: block;\n    position: absolute;\n    bottom: -6px;\n    right: 2px;\n    border-top: 6px solid ', ';\n  }\n'], ['\n  display:flex;\n  align-items: center;\n  position: absolute;\n  z-index: 20;\n  height: 28px; \n  background: ', ';\n  padding: 0 10px;\n  right: 0;\n  top: -34px;\n  color: ', ';\n  &:after {\n    width: 0; \n    height: 0; \n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    content: "";\n    display: block;\n    position: absolute;\n    bottom: -6px;\n    right: 2px;\n    border-top: 6px solid ', ';\n  }\n']),
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
  return getStyles(props.error, props.warning, props.theme);
}, function (props) {
  return props.showError && !props.asColumn ? getErrorContainerMinHeight(props) : 0;
});

var ValueContainer = styled.div(_templateObject3, function (props) {
  return getStyles(props.error, props.warning, props.theme);
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
      label = props.label,
      className = props.className,
      required = props.required,
      id = props.id,
      asColumn = props.asColumn,
      errorAsPopup = props.errorAsPopup,
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
        labelWidth: labelWidth
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
      errorAsPopup && isHovered && (error || warning) && React.createElement(
        ErrorPopup,
        { error: error, warning: warning },
        error,
        warning
      ),
      React.createElement(
        FieldContainer,
        { append: append, hovered: isHovered },
        errorAsPopup && (warning || error) && React.createElement(ErrorPopupTrigger, { error: error, warning: warning }),
        React.Children.map(children, function (child) {
          return modifyChildren(child, props);
        }),
        append && React.createElement(
          Append,
          null,
          append
        )
      ),
      showError && !errorAsPopup && React.createElement(
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
  className: '',
  asColumn: false,
  labelWidth: undefined,
  valueWidth: 'auto',
  append: undefined,
  errorAsPopup: false
};

export default ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcm9wVHlwZXMiLCJzdHlsZWQiLCJnZXRTdHlsZXMiLCJlcnJvciIsIndhcm5pbmciLCJ0aGVtZSIsInRleHQiLCJjb2xvciIsImNvbG9ycyIsInllbGxvdyIsImdldENvbnRhaW5lckRpcmVjdGlvbiIsInByb3BzIiwiYXNDb2x1bW4iLCJpbnB1dENvbHVtbiIsImZsZXhEaXJlY3Rpb24iLCJpbnB1dFJvdyIsImdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0IiwiZXJyb3JDb250YWluZXIiLCJoZWlnaHQiLCJnZXRMYWJlbE1heFdpZHRoIiwibGFiZWxXaWR0aCIsInVuZGVmaW5lZCIsIkNvbnRhaW5lciIsInNlY3Rpb24iLCJoYWxmR3V0dGVyV2lkdGgiLCJMYWJlbENvbnRhaW5lciIsImRpdiIsInNob3dFcnJvciIsIlZhbHVlQ29udGFpbmVyIiwid2lkdGgiLCJFcnJvckNvbnRhaW5lciIsIkVycm9yTWVzc2FnZSIsInNwYW4iLCJmb250U2l6ZSIsIldhcm5pbmdNZXNzYWdlIiwiUmVxdWlyZWRJbmRpY2F0b3IiLCJyZXF1aXJlZEluZGljYXRvciIsIkxhYmVsIiwibGFiZWwiLCJndXR0ZXJXaWR0aCIsIkZpZWxkQ29udGFpbmVyIiwiYXBwZW5kIiwiQXBwZW5kIiwiRXJyb3JQb3B1cCIsIndoaXRlIiwiRXJyb3JQb3B1cFRyaWdnZXIiLCJtb2RpZnlDaGlsZHJlbiIsImNoaWxkIiwicmVxdWlyZWQiLCJhdXRvQ29tcGxldGUiLCJuZXdFbGVtZW50UHJvcHMiLCJjbGFzc05hbWUiLCJjbG9uZUVsZW1lbnQiLCJDb250ZW50SW5wdXRSb3ciLCJjaGlsZHJlbiIsImlkIiwiZXJyb3JBc1BvcHVwIiwidmFsdWVXaWR0aCIsImlzSG92ZXJlZCIsInNldEhvdmVyZWQiLCJvbk1vdXNl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QWhCLEdBQStCO0FBQzdCMUIsU0FBTyxFQURzQjtBQUU3QlUsWUFBVSxLQUZtQjtBQUc3Qk0sWUFBVSxJQUhtQjtBQUk3Qm5ELFNBQU8sRUFKc0I7QUFLN0JDLFdBQVMsRUFMb0I7QUFNN0J1QixhQUFXLElBTmtCO0FBTzdCd0IsYUFBVyxFQVBrQjtBQVE3QnZDLFlBQVUsS0FSbUI7QUFTN0JRLGNBQVlDLFNBVGlCO0FBVTdCb0MsY0FBWSxNQVZpQjtBQVc3QmhCLFVBQVFwQixTQVhxQjtBQVk3Qm1DLGdCQUFjO0FBWmUsQ0FBL0I7O0FBZUEsZUFBZUgsZUFBZiIsImZpbGUiOiJjb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IGdldFN0eWxlcyA9IChlcnJvciwgd2FybmluZywgdGhlbWUpID0+IHtcbiAgaWYgKGVycm9yKSByZXR1cm4gdGhlbWUudGV4dC5lcnJvci5jb2xvcjtcbiAgaWYgKHdhcm5pbmcpIHJldHVybiB0aGVtZS5jb2xvcnMueWVsbG93O1xuICByZXR1cm4gJyc7XG59O1xuXG5jb25zdCBnZXRDb250YWluZXJEaXJlY3Rpb24gPSBwcm9wcyA9PlxuICAocHJvcHMuYXNDb2x1bW4gPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5mbGV4RGlyZWN0aW9uIDogcHJvcHMudGhlbWUuaW5wdXRSb3cuZmxleERpcmVjdGlvbik7XG5cbmNvbnN0IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0ID0gcHJvcHMgPT5cbiAgKHByb3BzLmFzQ29sdW1uXG4gICAgPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5lcnJvckNvbnRhaW5lci5oZWlnaHRcbiAgICA6IHByb3BzLnRoZW1lLmlucHV0Um93LmVycm9yQ29udGFpbmVyLmhlaWdodCk7XG5cbmNvbnN0IGdldExhYmVsTWF4V2lkdGggPSAocHJvcHMpID0+IHtcbiAgaWYgKHByb3BzLmFzQ29sdW1uKSByZXR1cm4gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4ubGFiZWxXaWR0aDtcbiAgcmV0dXJuIHByb3BzLmxhYmVsV2lkdGggIT09IHVuZGVmaW5lZCA/IHByb3BzLmxhYmVsV2lkdGggOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5sYWJlbFdpZHRoO1xufTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IGdldENvbnRhaW5lckRpcmVjdGlvbihwcm9wcyl9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmNvbnN0IExhYmVsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0TGFiZWxNYXhXaWR0aChwcm9wcyl9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBnZXRTdHlsZXMocHJvcHMuZXJyb3IsIHByb3BzLndhcm5pbmcsIHByb3BzLnRoZW1lKX07XG4gIHBhZGRpbmctYm90dG9tOiAke3Byb3BzID0+XG4gICAgKHByb3BzLnNob3dFcnJvciAmJiAhcHJvcHMuYXNDb2x1bW4gPyBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodChwcm9wcykgOiAwKX07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBWYWx1ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gID4gZGl2ID4gaW5wdXQsXG4gID4gZGl2ID4gLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IGdldFN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMud2FybmluZywgcHJvcHMudGhlbWUpfTtcbiAgfVxuICBmbGV4OiAxIDEgYXV0bztcbiAgbWluLXdpZHRoOiAwJTtcbiAgbWF4LXdpZHRoOiAke3Byb3BzID0+IChwcm9wcy53aWR0aCA9PT0gJ2F1dG8nID8gJzEwMCUnIDogcHJvcHMud2lkdGgpfTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgRXJyb3JDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4taGVpZ2h0OiAke3Byb3BzID0+IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0KHByb3BzKX07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dC5lcnJvci5jb2xvcn07XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0LmVycm9yLmZvbnRTaXplfTtcbmA7XG5cbmNvbnN0IFdhcm5pbmdNZXNzYWdlID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy55ZWxsb3d9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dC5lcnJvci5mb250U2l6ZX07XG5gO1xuXG5jb25zdCBSZXF1aXJlZEluZGljYXRvciA9IHN0eWxlZC5zcGFuYFxuICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT5cbiAgICAocHJvcHMuYXNDb2x1bW5cbiAgICAgID8gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4ucmVxdWlyZWRJbmRpY2F0b3IuZm9udFNpemVcbiAgICAgIDogcHJvcHMudGhlbWUuaW5wdXRSb3cucmVxdWlyZWRJbmRpY2F0b3IuZm9udFNpemUpfTtcbmA7XG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmFzQ29sdW1uID8gMCA6IHByb3BzLnRoZW1lLmd1dHRlcldpZHRoKX07XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLmFzQ29sdW1uID8gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRoIDogMCl9O1xuYDtcblxuY29uc3QgRmllbGRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiAke3Byb3BzID0+IChwcm9wcy5hcHBlbmQgPyAnZmxleCcgOiAnYmxvY2snKX07XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgQXBwZW5kID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmd1dHRlcldpZHRofTtcbiAgZmxleDogMSAxIDEwMCU7XG4gIG1pbi13aWR0aDogMCU7XG5gO1xuXG5jb25zdCBFcnJvclBvcHVwID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTpmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDIwO1xuICBoZWlnaHQ6IDI4cHg7IFxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IGdldFN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMud2FybmluZywgcHJvcHMudGhlbWUpfTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICByaWdodDogMDtcbiAgdG9wOiAtMzRweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcbiAgJjphZnRlciB7XG4gICAgd2lkdGg6IDA7IFxuICAgIGhlaWdodDogMDsgXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC02cHg7XG4gICAgcmlnaHQ6IDJweDtcbiAgICBib3JkZXItdG9wOiA2cHggc29saWQgJHtwcm9wcyA9PiBnZXRTdHlsZXMocHJvcHMuZXJyb3IsIHByb3BzLndhcm5pbmcsIHByb3BzLnRoZW1lKX07XG4gIH1cbmA7XG5cbmNvbnN0IEVycm9yUG9wdXBUcmlnZ2VyID0gc3R5bGVkLmRpdmBcbiAgZmxleDogMSAxIGF1dG87XG4gIG1pbi1oZWlnaHQ6IDAlO1xuICBtaW4td2lkdGg6IDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogN3B4O1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHtwcm9wcyA9PiBnZXRTdHlsZXMocHJvcHMuZXJyb3IsIHByb3BzLndhcm5pbmcsIHByb3BzLnRoZW1lKX07XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogJHtwcm9wcyA9PiBnZXRTdHlsZXMocHJvcHMuZXJyb3IsIHByb3BzLndhcm5pbmcsIHByb3BzLnRoZW1lKX07XG4gICAgei1pbmRleDogMTtcbiAgfVxuYDtcblxuLyoqXG4gKiBBc3NpZ25zIGdpdmVuIHByb3BzIGRpcmVjdGx5IHRvIGlucHV0IGVsZW1lbnRcbiAqIEBwYXJhbSBjaGlsZFxuICogQHBhcmFtIHByb3BzXG4gKi9cbmNvbnN0IG1vZGlmeUNoaWxkcmVuID0gKGNoaWxkLCBwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlcXVpcmVkLCBhdXRvQ29tcGxldGUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG5ld0VsZW1lbnRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6IGAke2NoaWxkLnByb3BzLmNsYXNzTmFtZSB8fCAnJ31gLFxuICAgIHJlcXVpcmVkLFxuICAgIGF1dG9Db21wbGV0ZSxcbiAgfTtcblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBuZXdFbGVtZW50UHJvcHMpO1xufTtcblxuY29uc3QgQ29udGVudElucHV0Um93ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICBlcnJvcixcbiAgICB3YXJuaW5nLFxuICAgIHNob3dFcnJvcixcbiAgICBsYWJlbCxcbiAgICBjbGFzc05hbWUsXG4gICAgcmVxdWlyZWQsXG4gICAgaWQsXG4gICAgYXNDb2x1bW4sXG4gICAgZXJyb3JBc1BvcHVwLFxuICAgIGxhYmVsV2lkdGgsXG4gICAgdmFsdWVXaWR0aCxcbiAgICBhcHBlbmQsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbaXNIb3ZlcmVkLCBzZXRIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbk1vdXNlRW50ZXIgPSAoKSA9PiBzZXRIb3ZlcmVkKHRydWUpO1xuXG4gIGNvbnN0IG9uTW91c2VMZWF2ZSA9ICgpID0+IHNldEhvdmVyZWQoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBhc0NvbHVtbj17YXNDb2x1bW59IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD17aWR9PlxuICAgICAgPExhYmVsQ29udGFpbmVyXG4gICAgICAgIGFzQ29sdW1uPXthc0NvbHVtbn1cbiAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICB3YXJuaW5nPXt3YXJuaW5nfVxuICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgbGFiZWxXaWR0aD17bGFiZWxXaWR0aH1cbiAgICAgID5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8TGFiZWwgYXNDb2x1bW49e2FzQ29sdW1ufT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIHtyZXF1aXJlZCAmJiA8UmVxdWlyZWRJbmRpY2F0b3IgYXNDb2x1bW49e2FzQ29sdW1ufT4qPC9SZXF1aXJlZEluZGljYXRvcj59XG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgKX1cbiAgICAgIDwvTGFiZWxDb250YWluZXI+XG4gICAgICA8VmFsdWVDb250YWluZXJcbiAgICAgICAgb25Nb3VzZUVudGVyPXtvbk1vdXNlRW50ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17b25Nb3VzZUxlYXZlfVxuICAgICAgICB3aWR0aD17dmFsdWVXaWR0aH1cbiAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICB3YXJuaW5nPXt3YXJuaW5nfVxuICAgICAgPlxuICAgICAgICB7ZXJyb3JBc1BvcHVwICYmIGlzSG92ZXJlZCAmJiAoZXJyb3IgfHwgd2FybmluZykgJiZcbiAgICAgICAgPEVycm9yUG9wdXAgZXJyb3I9e2Vycm9yfSB3YXJuaW5nPXt3YXJuaW5nfT57ZXJyb3J9e3dhcm5pbmd9PC9FcnJvclBvcHVwPn1cbiAgICAgICAgPEZpZWxkQ29udGFpbmVyIGFwcGVuZD17YXBwZW5kfSBob3ZlcmVkPXtpc0hvdmVyZWR9PlxuICAgICAgICAgIHtlcnJvckFzUG9wdXAgJiYgKHdhcm5pbmcgfHwgZXJyb3IpICYmXG4gICAgICAgICAgPEVycm9yUG9wdXBUcmlnZ2VyIGVycm9yPXtlcnJvcn0gd2FybmluZz17d2FybmluZ30gLz59XG5cbiAgICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiBtb2RpZnlDaGlsZHJlbihjaGlsZCwgcHJvcHMpKX1cblxuICAgICAgICAgIHthcHBlbmQgJiYgPEFwcGVuZD57YXBwZW5kfTwvQXBwZW5kPn1cbiAgICAgICAgPC9GaWVsZENvbnRhaW5lcj5cbiAgICAgICAge3Nob3dFcnJvciAmJiAhZXJyb3JBc1BvcHVwICYmIChcbiAgICAgICAgICA8RXJyb3JDb250YWluZXIgYXNDb2x1bW49e2FzQ29sdW1ufT5cbiAgICAgICAgICAgIHtlcnJvciAmJiA8RXJyb3JNZXNzYWdlPntlcnJvcn08L0Vycm9yTWVzc2FnZT59XG4gICAgICAgICAgICB7IWVycm9yICYmIHdhcm5pbmcgJiYgPFdhcm5pbmdNZXNzYWdlPnt3YXJuaW5nfTwvV2FybmluZ01lc3NhZ2U+fVxuICAgICAgICAgIDwvRXJyb3JDb250YWluZXI+XG4gICAgICAgICl9XG4gICAgICA8L1ZhbHVlQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuQ29udGVudElucHV0Um93LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgd2FybmluZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgc2hvd0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBhc0NvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG4gIGxhYmVsV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgdmFsdWVXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBhcHBlbmQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIGVycm9yQXNQb3B1cDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5Db250ZW50SW5wdXRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBsYWJlbDogJycsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbiAgY2hpbGRyZW46IG51bGwsXG4gIGVycm9yOiAnJyxcbiAgd2FybmluZzogJycsXG4gIHNob3dFcnJvcjogdHJ1ZSxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgYXNDb2x1bW46IGZhbHNlLFxuICBsYWJlbFdpZHRoOiB1bmRlZmluZWQsXG4gIHZhbHVlV2lkdGg6ICdhdXRvJyxcbiAgYXBwZW5kOiB1bmRlZmluZWQsXG4gIGVycm9yQXNQb3B1cDogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50SW5wdXRSb3c7XG4iXX0=