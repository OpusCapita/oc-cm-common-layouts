var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n'], ['\n  width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  > div > input,\n  > div > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n  max-width: ', ';\n'], ['\n  > div > input,\n  > div > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n  max-width: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n'], ['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  color: ', ';\n  font-size: ', ';\n'], ['\n  color: ', ';\n  font-size: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n  font-size: ', ';\n'], ['\n  margin-left: ', ';\n  font-size: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  margin-right: ', ';\n  margin-bottom: ', ';\n'], ['\n  margin-right: ', ';\n  margin-bottom: ', ';\n']),
    _templateObject8 = _taggedTemplateLiteralLoose(['\n  display: ', ';\n  width: 100%;\n  align-items: center;\n'], ['\n  display: ', ';\n  width: 100%;\n  align-items: center;\n']),
    _templateObject9 = _taggedTemplateLiteralLoose(['\n  padding-left: ', ';\n  flex: 1 1 100%;\n'], ['\n  padding-left: ', ';\n  flex: 1 1 100%;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
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
  return props.width;
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
      labelWidth = props.labelWidth,
      valueWidth = props.valueWidth,
      append = props.append;


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
      { width: valueWidth, error: error, warning: warning },
      React.createElement(
        FieldContainer,
        { append: append },
        React.Children.map(children, function (child) {
          return modifyChildren(child, props);
        }),
        append && React.createElement(
          Append,
          null,
          append
        )
      ),
      showError && React.createElement(
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
  append: undefined
};

export default ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiZ2V0U3R5bGVzIiwiZXJyb3IiLCJ3YXJuaW5nIiwidGhlbWUiLCJ0ZXh0IiwiY29sb3IiLCJjb2xvcnMiLCJ5ZWxsb3ciLCJnZXRDb250YWluZXJEaXJlY3Rpb24iLCJwcm9wcyIsImFzQ29sdW1uIiwiaW5wdXRDb2x1bW4iLCJmbGV4RGlyZWN0aW9uIiwiaW5wdXRSb3ciLCJnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodCIsImVycm9yQ29udGFpbmVyIiwiaGVpZ2h0IiwiZ2V0TGFiZWxNYXhXaWR0aCIsImxhYmVsV2lkdGgiLCJ1bmRlZmluZWQiLCJDb250YWluZXIiLCJzZWN0aW9uIiwiaGFsZkd1dHRlcldpZHRoIiwiTGFiZWxDb250YWluZXIiLCJkaXYiLCJzaG93RXJyb3IiLCJWYWx1ZUNvbnRhaW5lciIsIndpZHRoIiwiRXJyb3JDb250YWluZXIiLCJFcnJvck1lc3NhZ2UiLCJzcGFuIiwiZm9udFNpemUiLCJXYXJuaW5nTWVzc2FnZSIsIlJlcXVpcmVkSW5kaWNhdG9yIiwicmVxdWlyZWRJbmRpY2F0b3IiLCJMYWJlbCIsImxhYmVsIiwiZ3V0dGVyV2lkdGgiLCJGaWVsZENvbnRhaW5lciIsImFwcGVuZCIsIkFwcGVuZCIsIm1vZGlmeUNoaWxkcmVuIiwiY2hpbGQiLCJyZXF1aXJlZCIsImF1dG9Db21wbGV0ZSIsIm5ld0VsZW1lbnRQcm9wcyIsImNsYXNzTmFtZSIsImNsb25lRWxlbWVudCIsIkNvbnRlbnRJbnB1dFJvdyIsImNoaWxkcmVuIiwiaWQiLCJ2YWx1ZVdpZHRoIiwiQ2hpbGRyZW4iLCJtYXAiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQ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QUFBQSxVQUFPLFVBQVUxQixRQUFqQjtBQUNHMEIsYUFESDtBQUVHTyxvQkFBWTtBQUFDLDJCQUFEO0FBQUEsWUFBbUIsVUFBVWpDLFFBQTdCO0FBQUE7QUFBQTtBQUZmO0FBUkosS0FERjtBQWVFO0FBQUMsb0JBQUQ7QUFBQSxRQUFnQixPQUFPeUMsVUFBdkIsRUFBbUMsT0FBT2xELEtBQTFDLEVBQWlELFNBQVNDLE9BQTFEO0FBQ0U7QUFBQyxzQkFBRDtBQUFBLFVBQWdCLFFBQVFxQyxNQUF4QjtBQUNHMUMsY0FBTXVELFFBQU4sQ0FBZUMsR0FBZixDQUFtQkosUUFBbkIsRUFBNkI7QUFBQSxpQkFBU1IsZUFBZUMsS0FBZixFQUFzQmpDLEtBQXRCLENBQVQ7QUFBQSxTQUE3QixDQURIO0FBRUc4QixrQkFBVTtBQUFDLGdCQUFEO0FBQUE7QUFBU0E7QUFBVDtBQUZiLE9BREY7QUFLR2QsbUJBQ0M7QUFBQyxzQkFBRDtBQUFBLFVBQWdCLFVBQVVmLFFBQTFCO0FBQ0dULGlCQUFTO0FBQUMsc0JBQUQ7QUFBQTtBQUFlQTtBQUFmLFNBRFo7QUFFRyxTQUFDQSxLQUFELElBQVVDLE9BQVYsSUFBcUI7QUFBQyx3QkFBRDtBQUFBO0FBQWlCQTtBQUFqQjtBQUZ4QjtBQU5KO0FBZkYsR0FERjtBQThCRCxDQTlDRDs7QUErREE4QyxnQkFBZ0JNLFlBQWhCLEdBQStCO0FBQzdCbEIsU0FBTyxFQURzQjtBQUU3Qk8sWUFBVSxLQUZtQjtBQUc3Qk0sWUFBVSxJQUhtQjtBQUk3QmhELFNBQU8sRUFKc0I7QUFLN0JDLFdBQVMsRUFMb0I7QUFNN0J1QixhQUFXLElBTmtCO0FBTzdCcUIsYUFBVyxFQVBrQjtBQVE3QnBDLFlBQVUsS0FSbUI7QUFTN0JRLGNBQVlDLFNBVGlCO0FBVTdCZ0MsY0FBWSxNQVZpQjtBQVc3QlosVUFBUXBCO0FBWHFCLENBQS9COztBQWNBLGVBQWU2QixlQUFmIiwiZmlsZSI6ImNvbnRlbnQtaW5wdXQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IGdldFN0eWxlcyA9IChlcnJvciwgd2FybmluZywgdGhlbWUpID0+IHtcbiAgaWYgKGVycm9yKSByZXR1cm4gdGhlbWUudGV4dC5lcnJvci5jb2xvcjtcbiAgaWYgKHdhcm5pbmcpIHJldHVybiB0aGVtZS5jb2xvcnMueWVsbG93O1xuICByZXR1cm4gJyc7XG59O1xuXG5jb25zdCBnZXRDb250YWluZXJEaXJlY3Rpb24gPSBwcm9wcyA9PlxuICAocHJvcHMuYXNDb2x1bW4gPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5mbGV4RGlyZWN0aW9uIDogcHJvcHMudGhlbWUuaW5wdXRSb3cuZmxleERpcmVjdGlvbik7XG5cbmNvbnN0IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0ID0gcHJvcHMgPT5cbiAgKHByb3BzLmFzQ29sdW1uXG4gICAgPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5lcnJvckNvbnRhaW5lci5oZWlnaHRcbiAgICA6IHByb3BzLnRoZW1lLmlucHV0Um93LmVycm9yQ29udGFpbmVyLmhlaWdodCk7XG5cbmNvbnN0IGdldExhYmVsTWF4V2lkdGggPSAocHJvcHMpID0+IHtcbiAgaWYgKHByb3BzLmFzQ29sdW1uKSByZXR1cm4gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4ubGFiZWxXaWR0aDtcbiAgcmV0dXJuIHByb3BzLmxhYmVsV2lkdGggIT09IHVuZGVmaW5lZCA/IHByb3BzLmxhYmVsV2lkdGggOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5sYWJlbFdpZHRoO1xufTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IGdldENvbnRhaW5lckRpcmVjdGlvbihwcm9wcyl9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmNvbnN0IExhYmVsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0TGFiZWxNYXhXaWR0aChwcm9wcyl9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBnZXRTdHlsZXMocHJvcHMuZXJyb3IsIHByb3BzLndhcm5pbmcsIHByb3BzLnRoZW1lKX07XG4gIHBhZGRpbmctYm90dG9tOiAke3Byb3BzID0+XG4gICAgKHByb3BzLnNob3dFcnJvciAmJiAhcHJvcHMuYXNDb2x1bW4gPyBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodChwcm9wcykgOiAwKX07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBWYWx1ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gID4gZGl2ID4gaW5wdXQsXG4gID4gZGl2ID4gLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IGdldFN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMud2FybmluZywgcHJvcHMudGhlbWUpfTtcbiAgfVxuICBmbGV4OiAxIDEgYXV0bztcbiAgbWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcbmA7XG5cbmNvbnN0IEVycm9yQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogJHtwcm9wcyA9PiBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodChwcm9wcyl9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuZXJyb3IuY29sb3J9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dC5lcnJvci5mb250U2l6ZX07XG5gO1xuXG5jb25zdCBXYXJuaW5nTWVzc2FnZSA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMueWVsbG93fTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuZXJyb3IuZm9udFNpemV9O1xuYDtcblxuY29uc3QgUmVxdWlyZWRJbmRpY2F0b3IgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+XG4gICAgKHByb3BzLmFzQ29sdW1uXG4gICAgICA/IHByb3BzLnRoZW1lLmlucHV0Q29sdW1uLnJlcXVpcmVkSW5kaWNhdG9yLmZvbnRTaXplXG4gICAgICA6IHByb3BzLnRoZW1lLmlucHV0Um93LnJlcXVpcmVkSW5kaWNhdG9yLmZvbnRTaXplKX07XG5gO1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5hc0NvbHVtbiA/IDAgOiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aCl9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IChwcm9wcy5hc0NvbHVtbiA/IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aCA6IDApfTtcbmA7XG5cbmNvbnN0IEZpZWxkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogJHtwcm9wcyA9PiAocHJvcHMuYXBwZW5kID8gJ2ZsZXgnIDogJ2Jsb2NrJyl9O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEFwcGVuZCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aH07XG4gIGZsZXg6IDEgMSAxMDAlO1xuYDtcblxuLyoqXG4gKiBBc3NpZ25zIGdpdmVuIHByb3BzIGRpcmVjdGx5IHRvIGlucHV0IGVsZW1lbnRcbiAqIEBwYXJhbSBjaGlsZFxuICogQHBhcmFtIHByb3BzXG4gKi9cbmNvbnN0IG1vZGlmeUNoaWxkcmVuID0gKGNoaWxkLCBwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlcXVpcmVkLCBhdXRvQ29tcGxldGUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG5ld0VsZW1lbnRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6IGAke2NoaWxkLnByb3BzLmNsYXNzTmFtZSB8fCAnJ31gLFxuICAgIHJlcXVpcmVkLFxuICAgIGF1dG9Db21wbGV0ZSxcbiAgfTtcblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBuZXdFbGVtZW50UHJvcHMpO1xufTtcblxuY29uc3QgQ29udGVudElucHV0Um93ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICBlcnJvcixcbiAgICB3YXJuaW5nLFxuICAgIHNob3dFcnJvcixcbiAgICBsYWJlbCxcbiAgICBjbGFzc05hbWUsXG4gICAgcmVxdWlyZWQsXG4gICAgaWQsXG4gICAgYXNDb2x1bW4sXG4gICAgbGFiZWxXaWR0aCxcbiAgICB2YWx1ZVdpZHRoLFxuICAgIGFwcGVuZCxcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBhc0NvbHVtbj17YXNDb2x1bW59IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD17aWR9PlxuICAgICAgPExhYmVsQ29udGFpbmVyXG4gICAgICAgIGFzQ29sdW1uPXthc0NvbHVtbn1cbiAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICB3YXJuaW5nPXt3YXJuaW5nfVxuICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgbGFiZWxXaWR0aD17bGFiZWxXaWR0aH1cbiAgICAgID5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8TGFiZWwgYXNDb2x1bW49e2FzQ29sdW1ufT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIHtyZXF1aXJlZCAmJiA8UmVxdWlyZWRJbmRpY2F0b3IgYXNDb2x1bW49e2FzQ29sdW1ufT4qPC9SZXF1aXJlZEluZGljYXRvcj59XG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgKX1cbiAgICAgIDwvTGFiZWxDb250YWluZXI+XG4gICAgICA8VmFsdWVDb250YWluZXIgd2lkdGg9e3ZhbHVlV2lkdGh9IGVycm9yPXtlcnJvcn0gd2FybmluZz17d2FybmluZ30+XG4gICAgICAgIDxGaWVsZENvbnRhaW5lciBhcHBlbmQ9e2FwcGVuZH0+XG4gICAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4gbW9kaWZ5Q2hpbGRyZW4oY2hpbGQsIHByb3BzKSl9XG4gICAgICAgICAge2FwcGVuZCAmJiA8QXBwZW5kPnthcHBlbmR9PC9BcHBlbmQ+fVxuICAgICAgICA8L0ZpZWxkQ29udGFpbmVyPlxuICAgICAgICB7c2hvd0Vycm9yICYmIChcbiAgICAgICAgICA8RXJyb3JDb250YWluZXIgYXNDb2x1bW49e2FzQ29sdW1ufT5cbiAgICAgICAgICAgIHtlcnJvciAmJiA8RXJyb3JNZXNzYWdlPntlcnJvcn08L0Vycm9yTWVzc2FnZT59XG4gICAgICAgICAgICB7IWVycm9yICYmIHdhcm5pbmcgJiYgPFdhcm5pbmdNZXNzYWdlPnt3YXJuaW5nfTwvV2FybmluZ01lc3NhZ2U+fVxuICAgICAgICAgIDwvRXJyb3JDb250YWluZXI+XG4gICAgICAgICl9XG4gICAgICA8L1ZhbHVlQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuQ29udGVudElucHV0Um93LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgd2FybmluZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgc2hvd0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBhc0NvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG4gIGxhYmVsV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgdmFsdWVXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBhcHBlbmQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5lbGVtZW50XSksXG59O1xuXG5Db250ZW50SW5wdXRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBsYWJlbDogJycsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbiAgY2hpbGRyZW46IG51bGwsXG4gIGVycm9yOiAnJyxcbiAgd2FybmluZzogJycsXG4gIHNob3dFcnJvcjogdHJ1ZSxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgYXNDb2x1bW46IGZhbHNlLFxuICBsYWJlbFdpZHRoOiB1bmRlZmluZWQsXG4gIHZhbHVlV2lkdGg6ICdhdXRvJyxcbiAgYXBwZW5kOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50SW5wdXRSb3c7XG4iXX0=