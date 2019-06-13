var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n'], ['\n  width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  > input,\n  > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n  max-width: ', ';\n  width: 100%;\n'], ['\n  > input,\n  > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n  max-width: ', ';\n  width: 100%;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n'], ['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  color: ', ';\n  font-size: ', ';\n'], ['\n  color: ', ';\n  font-size: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n  font-size: ', ';\n'], ['\n  margin-left: ', ';\n  font-size: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  margin-right: ', ';\n  margin-bottom: ', ';\n'], ['\n  margin-right: ', ';\n  margin-bottom: ', ';\n']),
    _templateObject8 = _taggedTemplateLiteralLoose(['\n  display: flex;\n  align-items: center;\n'], ['\n  display: flex;\n  align-items: center;\n']),
    _templateObject9 = _taggedTemplateLiteralLoose(['\n  padding-left: ', ';\n  flex: 1 1 100%;\n'], ['\n  padding-left: ', ';\n  flex: 1 1 100%;\n']);

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

var FieldContainer = styled.div(_templateObject8);

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
  valueWidth: 'auto',
  append: undefined
};

export default ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiZ2V0RXJyb3JTdHlsZXMiLCJlcnJvciIsInRoZW1lIiwidGV4dCIsImNvbG9yIiwiZ2V0Q29udGFpbmVyRGlyZWN0aW9uIiwicHJvcHMiLCJhc0NvbHVtbiIsImlucHV0Q29sdW1uIiwiZmxleERpcmVjdGlvbiIsImlucHV0Um93IiwiZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQiLCJlcnJvckNvbnRhaW5lciIsImhlaWdodCIsImdldExhYmVsTWF4V2lkdGgiLCJsYWJlbFdpZHRoIiwidW5kZWZpbmVkIiwiQ29udGFpbmVyIiwic2VjdGlvbiIsImhhbGZHdXR0ZXJXaWR0aCIsIkxhYmVsQ29udGFpbmVyIiwiZGl2Iiwic2hvd0Vycm9yIiwiVmFsdWVDb250YWluZXIiLCJ3aWR0aCIsIkVycm9yQ29udGFpbmVyIiwiRXJyb3JNZXNzYWdlIiwic3BhbiIsImZvbnRTaXplIiwiUmVxdWlyZWRJbmRpY2F0b3IiLCJyZXF1aXJlZEluZGljYXRvciIsIkxhYmVsIiwibGFiZWwiLCJndXR0ZXJXaWR0aCIsIkZpZWxkQ29udGFpbmVyIiwiQXBwZW5kIiwibW9kaWZ5Q2hpbGRyZW4iLCJjaGlsZCIsInJlcXVpcmVkIiwiYXV0b0NvbXBsZXRlIiwibmV3RWxlbWVudFByb3BzIiwiY2xhc3NOYW1lIiwiY2xvbmVFbGVtZW50IiwiQ29udGVudElucHV0Um93IiwiY2hpbGRyZW4iLCJpZCIsInZhbHVlV2lkdGgiLCJhcHBlbmQiLCJDaGlsZHJlbiIsIm1hcCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFu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QU5KO0FBZEYsR0FERjtBQTRCRCxDQTNDRDs7QUEyREEwQyxnQkFBZ0JPLFlBQWhCLEdBQStCO0FBQzdCbEIsU0FBTyxFQURzQjtBQUU3Qk0sWUFBVSxLQUZtQjtBQUc3Qk0sWUFBVSxJQUhtQjtBQUk3QjNDLFNBQU8sRUFKc0I7QUFLN0JxQixhQUFXLElBTGtCO0FBTTdCbUIsYUFBVyxFQU5rQjtBQU83QmxDLFlBQVUsS0FQbUI7QUFRN0JRLGNBQVlDLFNBUmlCO0FBUzdCOEIsY0FBWSxNQVRpQjtBQVU3QkMsVUFBUS9CO0FBVnFCLENBQS9COztBQWFBLGVBQWUyQixlQUFmIiwiZmlsZSI6ImNvbnRlbnQtaW5wdXQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IGdldEVycm9yU3R5bGVzID0gKGVycm9yLCB0aGVtZSkgPT4gKGVycm9yID8gdGhlbWUudGV4dC5lcnJvci5jb2xvciA6ICcnKTtcblxuY29uc3QgZ2V0Q29udGFpbmVyRGlyZWN0aW9uID0gcHJvcHMgPT5cbiAgKHByb3BzLmFzQ29sdW1uID8gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4uZmxleERpcmVjdGlvbiA6IHByb3BzLnRoZW1lLmlucHV0Um93LmZsZXhEaXJlY3Rpb24pO1xuXG5jb25zdCBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodCA9IHByb3BzID0+XG4gIChwcm9wcy5hc0NvbHVtblxuICAgID8gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4uZXJyb3JDb250YWluZXIuaGVpZ2h0XG4gICAgOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5lcnJvckNvbnRhaW5lci5oZWlnaHQpO1xuXG5jb25zdCBnZXRMYWJlbE1heFdpZHRoID0gKHByb3BzKSA9PiB7XG4gIGlmIChwcm9wcy5hc0NvbHVtbikgcmV0dXJuIHByb3BzLnRoZW1lLmlucHV0Q29sdW1uLmxhYmVsV2lkdGg7XG4gIHJldHVybiBwcm9wcy5sYWJlbFdpZHRoICE9PSB1bmRlZmluZWQgPyBwcm9wcy5sYWJlbFdpZHRoIDogcHJvcHMudGhlbWUuaW5wdXRSb3cubGFiZWxXaWR0aDtcbn07XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogJHtwcm9wcyA9PiBnZXRDb250YWluZXJEaXJlY3Rpb24ocHJvcHMpfTtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5gO1xuXG5jb25zdCBMYWJlbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAke3Byb3BzID0+IGdldExhYmVsTWF4V2lkdGgocHJvcHMpfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gZ2V0RXJyb3JTdHlsZXMocHJvcHMuZXJyb3IsIHByb3BzLnRoZW1lKX07XG4gIHBhZGRpbmctYm90dG9tOiAke3Byb3BzID0+XG4gICAgKHByb3BzLnNob3dFcnJvciAmJiAhcHJvcHMuYXNDb2x1bW4gPyBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodChwcm9wcykgOiAwKX07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBWYWx1ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gID4gaW5wdXQsXG4gID4gLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IGdldEVycm9yU3R5bGVzKHByb3BzLmVycm9yLCBwcm9wcy50aGVtZSl9O1xuICB9XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtYXgtd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEVycm9yQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogJHtwcm9wcyA9PiBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodChwcm9wcyl9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuZXJyb3IuY29sb3J9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dC5lcnJvci5mb250U2l6ZX07XG5gO1xuXG5jb25zdCBSZXF1aXJlZEluZGljYXRvciA9IHN0eWxlZC5zcGFuYFxuICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT5cbiAgICAocHJvcHMuYXNDb2x1bW5cbiAgICAgID8gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4ucmVxdWlyZWRJbmRpY2F0b3IuZm9udFNpemVcbiAgICAgIDogcHJvcHMudGhlbWUuaW5wdXRSb3cucmVxdWlyZWRJbmRpY2F0b3IuZm9udFNpemUpfTtcbmA7XG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmFzQ29sdW1uID8gMCA6IHByb3BzLnRoZW1lLmd1dHRlcldpZHRoKX07XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLmFzQ29sdW1uID8gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRoIDogMCl9O1xuYDtcblxuY29uc3QgRmllbGRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgQXBwZW5kID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZy1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmd1dHRlcldpZHRofTtcbiAgZmxleDogMSAxIDEwMCU7XG5gO1xuXG4vKipcbiAqIEFzc2lnbnMgZ2l2ZW4gcHJvcHMgZGlyZWN0bHkgdG8gaW5wdXQgZWxlbWVudFxuICogQHBhcmFtIGNoaWxkXG4gKiBAcGFyYW0gcHJvcHNcbiAqL1xuY29uc3QgbW9kaWZ5Q2hpbGRyZW4gPSAoY2hpbGQsIHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVxdWlyZWQsIGF1dG9Db21wbGV0ZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgbmV3RWxlbWVudFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogYCR7Y2hpbGQucHJvcHMuY2xhc3NOYW1lIHx8ICcnfWAsXG4gICAgcmVxdWlyZWQsXG4gICAgYXV0b0NvbXBsZXRlLFxuICB9O1xuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld0VsZW1lbnRQcm9wcyk7XG59O1xuXG5jb25zdCBDb250ZW50SW5wdXRSb3cgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIGVycm9yLFxuICAgIHNob3dFcnJvcixcbiAgICBsYWJlbCxcbiAgICBjbGFzc05hbWUsXG4gICAgcmVxdWlyZWQsXG4gICAgaWQsXG4gICAgYXNDb2x1bW4sXG4gICAgbGFiZWxXaWR0aCxcbiAgICB2YWx1ZVdpZHRoLFxuICAgIGFwcGVuZCxcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBhc0NvbHVtbj17YXNDb2x1bW59IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD17aWR9PlxuICAgICAgPExhYmVsQ29udGFpbmVyXG4gICAgICAgIGFzQ29sdW1uPXthc0NvbHVtbn1cbiAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgbGFiZWxXaWR0aD17bGFiZWxXaWR0aH1cbiAgICAgID5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8TGFiZWwgYXNDb2x1bW49e2FzQ29sdW1ufT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIHtyZXF1aXJlZCAmJiA8UmVxdWlyZWRJbmRpY2F0b3IgYXNDb2x1bW49e2FzQ29sdW1ufT4qPC9SZXF1aXJlZEluZGljYXRvcj59XG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgKX1cbiAgICAgIDwvTGFiZWxDb250YWluZXI+XG4gICAgICA8VmFsdWVDb250YWluZXIgd2lkdGg9e3ZhbHVlV2lkdGh9IGVycm9yPXtlcnJvcn0+XG4gICAgICAgIDxGaWVsZENvbnRhaW5lciBhcHBlbmQ9e2FwcGVuZH0+XG4gICAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4gbW9kaWZ5Q2hpbGRyZW4oY2hpbGQsIHByb3BzKSl9XG4gICAgICAgICAge2FwcGVuZCAmJiA8QXBwZW5kPnthcHBlbmR9PC9BcHBlbmQ+fVxuICAgICAgICA8L0ZpZWxkQ29udGFpbmVyPlxuICAgICAgICB7c2hvd0Vycm9yICYmIChcbiAgICAgICAgICA8RXJyb3JDb250YWluZXIgYXNDb2x1bW49e2FzQ29sdW1ufT5cbiAgICAgICAgICAgIHtlcnJvciAmJiA8RXJyb3JNZXNzYWdlPntlcnJvcn08L0Vycm9yTWVzc2FnZT59XG4gICAgICAgICAgPC9FcnJvckNvbnRhaW5lcj5cbiAgICAgICAgKX1cbiAgICAgIDwvVmFsdWVDb250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5Db250ZW50SW5wdXRSb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYm9vbF0pLFxuICBzaG93RXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGFzQ29sdW1uOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGFiZWxXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICB2YWx1ZVdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIGFwcGVuZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbn07XG5cbkNvbnRlbnRJbnB1dFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGxhYmVsOiAnJyxcbiAgcmVxdWlyZWQ6IGZhbHNlLFxuICBjaGlsZHJlbjogbnVsbCxcbiAgZXJyb3I6ICcnLFxuICBzaG93RXJyb3I6IHRydWUsXG4gIGNsYXNzTmFtZTogJycsXG4gIGFzQ29sdW1uOiBmYWxzZSxcbiAgbGFiZWxXaWR0aDogdW5kZWZpbmVkLFxuICB2YWx1ZVdpZHRoOiAnYXV0bycsXG4gIGFwcGVuZDogdW5kZWZpbmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudElucHV0Um93O1xuIl19