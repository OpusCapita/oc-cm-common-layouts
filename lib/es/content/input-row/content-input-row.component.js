var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: ', ';\n  min-width: ', ';\n  color: ', ';\n'], ['\n  width: ', ';\n  min-width: ', ';\n  color: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n'], ['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n'], ['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  color: ', ';\n  font-size: ', ';\n'], ['\n  color: ', ';\n  font-size: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n  font-size: ', ';\n'], ['\n  margin-left: ', ';\n  font-size: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  margin-right: ', ';\n  margin-bottom: 0;\n'], ['\n  margin-right: ', ';\n  margin-bottom: 0;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import { theme } from '../../constants';

var getErrorStyles = function getErrorStyles(error) {
  return error ? theme.text.error.color : '';
};

var Container = styled.section(_templateObject, theme.halfGutterWidth);

var LabelContainer = styled.div(_templateObject2, theme.inputRow.labelWidth, theme.inputRow.labelWidth, function (props) {
  return getErrorStyles(props.error);
});

var ValueContainer = styled.div(_templateObject3, function (props) {
  return getErrorStyles(props.error);
});

var ErrorContainer = styled.div(_templateObject4, theme.inputRow.errorContainer.height);

var ErrorMessage = styled.span(_templateObject5, theme.text.error.color, theme.text.error.fontSize);

var RequiredIndicator = styled.span(_templateObject6, theme.halfGutterWidth, theme.inputRow.requiredIndicator.fontSize);

var Label = styled.label(_templateObject7, theme.gutterWidth);

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
      showError = props.showError,
      label = props.label,
      className = props.className,
      required = props.required,
      id = props.id;


  return React.createElement(
    Container,
    { className: className, id: id },
    React.createElement(
      LabelContainer,
      { error: error },
      label && React.createElement(
        Label,
        null,
        label,
        required && React.createElement(
          RequiredIndicator,
          null,
          '*'
        )
      )
    ),
    React.createElement(
      ValueContainer,
      { error: error },
      React.Children.map(children, function (child) {
        return modifyChildren(child, props);
      }),
      showError && React.createElement(
        ErrorContainer,
        null,
        error && React.createElement(
          ErrorMessage,
          null,
          error
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
  showError: true,
  className: '',
  id: ''
};

export default ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwidGhlbWUiLCJnZXRFcnJvclN0eWxlcyIsImVycm9yIiwidGV4dCIsImNvbG9yIiwiQ29udGFpbmVyIiwic2VjdGlvbiIsImhhbGZHdXR0ZXJXaWR0aCIsIkxhYmVsQ29udGFpbmVyIiwiZGl2IiwiaW5wdXRSb3ciLCJsYWJlbFdpZHRoIiwicHJvcHMiLCJWYWx1ZUNvbnRhaW5lciIsIkVycm9yQ29udGFpbmVyIiwiZXJyb3JDb250YWluZXIiLCJoZWlnaHQiLCJFcnJvck1lc3NhZ2UiLCJzcGFuIiwiZm9udFNpemUiLCJSZXF1aXJlZEluZGljYXRvciIsInJlcXVpcmVkSW5kaWNhdG9yIiwiTGFiZWwiLCJsYWJlbCIsImd1dHRlcldpZHRoIiwibW9kaWZ5Q2hpbGRyZW4iLCJjaGlsZCIsInJlcXVpcmVkIiwiYXV0b0NvbXBsZXRlIiwibmV3RWxlbWVudFByb3BzIiwiY2xhc3NOYW1lIiwiY2xvbmVFbGVtZW50IiwiQ29udGVudElucHV0Um93IiwiY2hpbGRyZW4iLCJzaG93RXJyb3IiLCJpZCIsIkNoaWxkcmVuIiwibWFwIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjtBQUNBO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixpQkFBdEI7O0FBRUEsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLFNBQVVDLFFBQVFGLE1BQU1HLElBQU4sQ0FBV0QsS0FBWCxDQUFpQkUsS0FBekIsR0FBaUMsRUFBM0M7QUFBQSxDQUF2Qjs7QUFFQSxJQUFNQyxZQUFZTixPQUFPTyxPQUFuQixrQkFFYU4sTUFB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QVUsSUFIbUI7QUFJN0IvQixTQUFPLEVBSnNCO0FBSzdCZ0MsYUFBVyxJQUxrQjtBQU03QkosYUFBVyxFQU5rQjtBQU83QkssTUFBSTtBQVB5QixDQUEvQjs7QUFVQSxlQUFlSCxlQUFmIiwiZmlsZSI6ImNvbnRlbnQtaW5wdXQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBnZXRFcnJvclN0eWxlcyA9IGVycm9yID0+IChlcnJvciA/IHRoZW1lLnRleHQuZXJyb3IuY29sb3IgOiAnJyk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmNvbnN0IExhYmVsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7dGhlbWUuaW5wdXRSb3cubGFiZWxXaWR0aH07XG4gIG1pbi13aWR0aDogJHt0aGVtZS5pbnB1dFJvdy5sYWJlbFdpZHRofTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gZ2V0RXJyb3JTdHlsZXMocHJvcHMuZXJyb3IpfTtcbmA7XG5cbmNvbnN0IFZhbHVlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgPiBpbnB1dCwgPiAuZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gZ2V0RXJyb3JTdHlsZXMocHJvcHMuZXJyb3IpfTtcbiAgfVxuICBmbGV4OiAxIDEgYXV0bztcbmA7XG5cbmNvbnN0IEVycm9yQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogJHt0aGVtZS5pbnB1dFJvdy5lcnJvckNvbnRhaW5lci5oZWlnaHR9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3RoZW1lLnRleHQuZXJyb3IuY29sb3J9O1xuICBmb250LXNpemU6ICR7dGhlbWUudGV4dC5lcnJvci5mb250U2l6ZX07XG5gO1xuXG5jb25zdCBSZXF1aXJlZEluZGljYXRvciA9IHN0eWxlZC5zcGFuYFxuICBtYXJnaW4tbGVmdDogJHt0aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBmb250LXNpemU6ICR7dGhlbWUuaW5wdXRSb3cucmVxdWlyZWRJbmRpY2F0b3IuZm9udFNpemV9O1xuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIG1hcmdpbi1yaWdodDogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG4gIG1hcmdpbi1ib3R0b206IDA7XG5gO1xuXG4vKipcbiAqIEFzc2lnbnMgZ2l2ZW4gcHJvcHMgZGlyZWN0bHkgdG8gaW5wdXQgZWxlbWVudFxuICogQHBhcmFtIGNoaWxkXG4gKiBAcGFyYW0gcHJvcHNcbiAqL1xuY29uc3QgbW9kaWZ5Q2hpbGRyZW4gPSAoY2hpbGQsIHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVxdWlyZWQsIGF1dG9Db21wbGV0ZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgbmV3RWxlbWVudFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogYCR7Y2hpbGQucHJvcHMuY2xhc3NOYW1lIHx8ICcnfWAsXG4gICAgcmVxdWlyZWQsXG4gICAgYXV0b0NvbXBsZXRlLFxuICB9O1xuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld0VsZW1lbnRQcm9wcyk7XG59O1xuXG5jb25zdCBDb250ZW50SW5wdXRSb3cgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLCBlcnJvciwgc2hvd0Vycm9yLCBsYWJlbCwgY2xhc3NOYW1lLCByZXF1aXJlZCwgaWQsXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXtpZH0+XG4gICAgICA8TGFiZWxDb250YWluZXIgZXJyb3I9e2Vycm9yfT5cbiAgICAgICAge2xhYmVsICYmXG4gICAgICAgIDxMYWJlbD57bGFiZWx9XG4gICAgICAgICAge3JlcXVpcmVkICYmIDxSZXF1aXJlZEluZGljYXRvcj4qPC9SZXF1aXJlZEluZGljYXRvcj59XG4gICAgICAgIDwvTGFiZWw+fVxuICAgICAgPC9MYWJlbENvbnRhaW5lcj5cbiAgICAgIDxWYWx1ZUNvbnRhaW5lciBlcnJvcj17ZXJyb3J9PlxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiBtb2RpZnlDaGlsZHJlbihjaGlsZCwgcHJvcHMpKX1cbiAgICAgICAge3Nob3dFcnJvciAmJlxuICAgICAgICA8RXJyb3JDb250YWluZXI+XG4gICAgICAgICAge2Vycm9yICYmIDxFcnJvck1lc3NhZ2U+e2Vycm9yfTwvRXJyb3JNZXNzYWdlPn1cbiAgICAgICAgPC9FcnJvckNvbnRhaW5lcj59XG4gICAgICA8L1ZhbHVlQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuQ29udGVudElucHV0Um93LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgc2hvd0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkNvbnRlbnRJbnB1dFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGxhYmVsOiAnJyxcbiAgcmVxdWlyZWQ6IGZhbHNlLFxuICBjaGlsZHJlbjogbnVsbCxcbiAgZXJyb3I6ICcnLFxuICBzaG93RXJyb3I6IHRydWUsXG4gIGNsYXNzTmFtZTogJycsXG4gIGlkOiAnJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRJbnB1dFJvdztcbiJdfQ==