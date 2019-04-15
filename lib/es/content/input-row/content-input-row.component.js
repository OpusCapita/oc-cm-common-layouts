var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n'], ['\n  width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n  max-width: ', ';\n  width: 100%;\n'], ['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n  max-width: ', ';\n  width: 100%;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n'], ['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  color: ', ';\n  font-size: ', ';\n'], ['\n  color: ', ';\n  font-size: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n  font-size: ', ';\n'], ['\n  margin-left: ', ';\n  font-size: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  margin-right: ', ';\n  margin-bottom: ', ';\n'], ['\n  margin-right: ', ';\n  margin-bottom: ', ';\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

var getErrorStyles = function getErrorStyles(error, theme) {
  return error ? theme.text.error.color : '';
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
  return getErrorStyles(props.error, props.theme);
}, function (props) {
  return props.showError && !props.asColumn ? getErrorContainerMinHeight(props) : 0;
});

var ValueContainer = styled.div(_templateObject3, function (props) {
  return getErrorStyles(props.error, props.theme);
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
      id = props.id,
      asColumn = props.asColumn,
      labelWidth = props.labelWidth,
      valueWidth = props.valueWidth;


  return React.createElement(
    Container,
    { asColumn: asColumn, className: className, id: id },
    React.createElement(
      LabelContainer,
      {
        asColumn: asColumn,
        error: error,
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
      { width: valueWidth, error: error },
      React.Children.map(children, function (child) {
        return modifyChildren(child, props);
      }),
      showError && React.createElement(
        ErrorContainer,
        { asColumn: asColumn },
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
  asColumn: false,
  labelWidth: undefined,
  valueWidth: 'auto'
};

export default ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiZ2V0RXJyb3JTdHlsZXMiLCJlcnJvciIsInRoZW1lIiwidGV4dCIsImNvbG9yIiwiZ2V0Q29udGFpbmVyRGlyZWN0aW9uIiwicHJvcHMiLCJhc0NvbHVtbiIsImlucHV0Q29sdW1uIiwiZmxleERpcmVjdGlvbiIsImlucHV0Um93IiwiZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQiLCJlcnJvckNvbnRhaW5lciIsImhlaWdodCIsImdldExhYmVsTWF4V2lkdGgiLCJsYWJlbFdpZHRoIiwidW5kZWZpbmVkIiwiQ29udGFpbmVyIiwic2VjdGlvbiIsImhhbGZHdXR0ZXJXaWR0aCIsIkxhYmVsQ29udGFpbmVyIiwiZGl2Iiwic2hvd0Vycm9yIiwiVmFsdWVDb250YWluZXIiLCJ3aWR0aCIsIkVycm9yQ29udGFpbmVyIiwiRXJyb3JNZXNzYWdlIiwic3BhbiIsImZvbnRTaXplIiwiUmVxdWlyZWRJbmRpY2F0b3IiLCJyZXF1aXJlZEluZGljYXRvciIsIkxhYmVsIiwibGFiZWwiLCJndXR0ZXJXaWR0aCIsIm1vZGlmeUNoaWxkcmVuIiwiY2hpbGQiLCJyZXF1aXJlZCIsImF1dG9Db21wbGV0ZSIsIm5ld0VsZW1lbnRQcm9wcyIsImNsYXNzTmFtZSIsImNsb25lRWxlbWVudCIsIkNvbnRlbnRJbnB1dFJvdyIsImNoaWxkcmVuIiwiaWQiLCJ2YWx1ZVdpZHRoIiwiQ2hpbGRyZW4iLCJtYXAiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5COztBQUVBLElBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FB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N0J0QyxLQUg2QixDQUVtRHNDLFVBRm5EOzs7QUFLakMsU0FDRTtBQUFDLGFBQUQ7QUFBQSxNQUFXLFVBQVVyQyxRQUFyQixFQUErQixXQUFXZ0MsU0FBMUMsRUFBcUQsSUFBSUksRUFBekQ7QUFDRTtBQUFDLG9CQUFEO0FBQUE7QUFDRSxrQkFBVXBDLFFBRFo7QUFFRSxlQUFPTixLQUZUO0FBR0UsbUJBQVdxQixTQUhiO0FBSUUsb0JBQVlQO0FBSmQ7QUFNR2lCLGVBRUM7QUFBQyxhQUFEO0FBQUEsVUFBTyxVQUFVekIsUUFBakI7QUFDR3lCLGFBREg7QUFFR0ksb0JBQVk7QUFBQywyQkFBRDtBQUFBLFlBQW1CLFVBQVU3QixRQUE3QjtBQUFBO0FBQUE7QUFGZjtBQVJKLEtBREY7QUFlRTtBQUFDLG9CQUFEO0FBQUEsUUFBZ0IsT0FBT3FDLFVBQXZCLEVBQW1DLE9BQU8zQyxLQUExQztBQUNHSixZQUFNZ0QsUUFBTixDQUFlQyxHQUFmLENBQW1CSixRQUFuQixFQUE2QjtBQUFBLGVBQVNSLGVBQWVDLEtBQWYsRUFBc0I3QixLQUF0QixDQUFUO0FBQUEsT0FBN0IsQ0FESDtBQUVHZ0IsbUJBRUM7QUFBQyxzQkFBRDtBQUFBLFVBQWdCLFVBQVVmLFFBQTFCO0FBQ0dOLGlCQUFTO0FBQUMsc0JBQUQ7QUFBQTtBQUFlQTtBQUFmO0FBRFo7QUFKSjtBQWZGLEdBREY7QUEyQkQsQ0FoQ0Q7O0FBK0NBd0MsZ0JBQWdCTSxZQUFoQixHQUErQjtBQUM3QmYsU0FBTyxFQURzQjtBQUU3QkksWUFBVSxLQUZtQjtBQUc3Qk0sWUFBVSxJQUhtQjtBQUk3QnpDLFNBQU8sRUFKc0I7QUFLN0JxQixhQUFXLElBTGtCO0FBTTdCaUIsYUFBVyxFQU5rQjtBQU83QmhDLFlBQVUsS0FQbUI7QUFRN0JRLGNBQVlDLFNBUmlCO0FBUzdCNEIsY0FBWTtBQVRpQixDQUEvQjs7QUFZQSxlQUFlSCxlQUFmIiwiZmlsZSI6ImNvbnRlbnQtaW5wdXQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IGdldEVycm9yU3R5bGVzID0gKGVycm9yLCB0aGVtZSkgPT4gKGVycm9yID8gdGhlbWUudGV4dC5lcnJvci5jb2xvciA6ICcnKTtcblxuY29uc3QgZ2V0Q29udGFpbmVyRGlyZWN0aW9uID0gcHJvcHMgPT5cbiAgKHByb3BzLmFzQ29sdW1uID8gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4uZmxleERpcmVjdGlvbiA6IHByb3BzLnRoZW1lLmlucHV0Um93LmZsZXhEaXJlY3Rpb24pO1xuXG5jb25zdCBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodCA9IHByb3BzID0+IChwcm9wcy5hc0NvbHVtblxuICA/IHByb3BzLnRoZW1lLmlucHV0Q29sdW1uLmVycm9yQ29udGFpbmVyLmhlaWdodCA6IHByb3BzLnRoZW1lLmlucHV0Um93LmVycm9yQ29udGFpbmVyLmhlaWdodCk7XG5cblxuY29uc3QgZ2V0TGFiZWxNYXhXaWR0aCA9IChwcm9wcykgPT4ge1xuICBpZiAocHJvcHMuYXNDb2x1bW4pIHJldHVybiBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5sYWJlbFdpZHRoO1xuICByZXR1cm4gcHJvcHMubGFiZWxXaWR0aCAhPT0gdW5kZWZpbmVkID8gcHJvcHMubGFiZWxXaWR0aCA6IHByb3BzLnRoZW1lLmlucHV0Um93LmxhYmVsV2lkdGg7XG59O1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMgPT4gZ2V0Q29udGFpbmVyRGlyZWN0aW9uKHByb3BzKX07XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuY29uc3QgTGFiZWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogJHtwcm9wcyA9PiBnZXRMYWJlbE1heFdpZHRoKHByb3BzKX07XG4gIGNvbG9yOiAke3Byb3BzID0+IGdldEVycm9yU3R5bGVzKHByb3BzLmVycm9yLCBwcm9wcy50aGVtZSl9O1xuICBwYWRkaW5nLWJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMuc2hvd0Vycm9yICYmICFwcm9wcy5hc0NvbHVtbiA/IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0KHByb3BzKSA6IDApfTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IFZhbHVlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgPiBpbnB1dCwgPiAuZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gZ2V0RXJyb3JTdHlsZXMocHJvcHMuZXJyb3IsIHByb3BzLnRoZW1lKX07XG4gIH1cbiAgZmxleDogMSAxIGF1dG87XG4gIG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuY29uc3QgRXJyb3JDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4taGVpZ2h0OiAke3Byb3BzID0+IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0KHByb3BzKX07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dC5lcnJvci5jb2xvcn07XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0LmVycm9yLmZvbnRTaXplfTtcbmA7XG5cbmNvbnN0IFJlcXVpcmVkSW5kaWNhdG9yID0gc3R5bGVkLnNwYW5gXG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiAocHJvcHMuYXNDb2x1bW4gPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5yZXF1aXJlZEluZGljYXRvci5mb250U2l6ZSA6IHByb3BzLnRoZW1lLmlucHV0Um93LnJlcXVpcmVkSW5kaWNhdG9yLmZvbnRTaXplKX07XG5gO1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5hc0NvbHVtbiA/IDAgOiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aCl9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IChwcm9wcy5hc0NvbHVtbiA/IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aCA6IDApfTtcbmA7XG5cbi8qKlxuICogQXNzaWducyBnaXZlbiBwcm9wcyBkaXJlY3RseSB0byBpbnB1dCBlbGVtZW50XG4gKiBAcGFyYW0gY2hpbGRcbiAqIEBwYXJhbSBwcm9wc1xuICovXG5jb25zdCBtb2RpZnlDaGlsZHJlbiA9IChjaGlsZCwgcHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXF1aXJlZCwgYXV0b0NvbXBsZXRlIH0gPSBwcm9wcztcblxuICBjb25zdCBuZXdFbGVtZW50UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiBgJHtjaGlsZC5wcm9wcy5jbGFzc05hbWUgfHwgJyd9YCxcbiAgICByZXF1aXJlZCxcbiAgICBhdXRvQ29tcGxldGUsXG4gIH07XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgbmV3RWxlbWVudFByb3BzKTtcbn07XG5cbmNvbnN0IENvbnRlbnRJbnB1dFJvdyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sIGVycm9yLCBzaG93RXJyb3IsIGxhYmVsLCBjbGFzc05hbWUsIHJlcXVpcmVkLCBpZCwgYXNDb2x1bW4sIGxhYmVsV2lkdGgsIHZhbHVlV2lkdGgsXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgYXNDb2x1bW49e2FzQ29sdW1ufSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e2lkfT5cbiAgICAgIDxMYWJlbENvbnRhaW5lclxuICAgICAgICBhc0NvbHVtbj17YXNDb2x1bW59XG4gICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgIGxhYmVsV2lkdGg9e2xhYmVsV2lkdGh9XG4gICAgICA+XG4gICAgICAgIHtsYWJlbFxuICAgICAgICAmJiAoXG4gICAgICAgICAgPExhYmVsIGFzQ29sdW1uPXthc0NvbHVtbn0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICB7cmVxdWlyZWQgJiYgPFJlcXVpcmVkSW5kaWNhdG9yIGFzQ29sdW1uPXthc0NvbHVtbn0+KjwvUmVxdWlyZWRJbmRpY2F0b3I+fVxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICl9XG4gICAgICA8L0xhYmVsQ29udGFpbmVyPlxuICAgICAgPFZhbHVlQ29udGFpbmVyIHdpZHRoPXt2YWx1ZVdpZHRofSBlcnJvcj17ZXJyb3J9PlxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiBtb2RpZnlDaGlsZHJlbihjaGlsZCwgcHJvcHMpKX1cbiAgICAgICAge3Nob3dFcnJvclxuICAgICAgICAmJiAoXG4gICAgICAgICAgPEVycm9yQ29udGFpbmVyIGFzQ29sdW1uPXthc0NvbHVtbn0+XG4gICAgICAgICAgICB7ZXJyb3IgJiYgPEVycm9yTWVzc2FnZT57ZXJyb3J9PC9FcnJvck1lc3NhZ2U+fVxuICAgICAgICAgIDwvRXJyb3JDb250YWluZXI+XG4gICAgICAgICl9XG4gICAgICA8L1ZhbHVlQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuQ29udGVudElucHV0Um93LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgc2hvd0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBhc0NvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG4gIGxhYmVsV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgdmFsdWVXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxufTtcblxuQ29udGVudElucHV0Um93LmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFiZWw6ICcnLFxuICByZXF1aXJlZDogZmFsc2UsXG4gIGNoaWxkcmVuOiBudWxsLFxuICBlcnJvcjogJycsXG4gIHNob3dFcnJvcjogdHJ1ZSxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgYXNDb2x1bW46IGZhbHNlLFxuICBsYWJlbFdpZHRoOiB1bmRlZmluZWQsXG4gIHZhbHVlV2lkdGg6ICdhdXRvJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRJbnB1dFJvdztcbiJdfQ==