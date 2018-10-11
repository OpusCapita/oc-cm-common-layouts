var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  min-width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n'], ['\n  min-width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n']),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiZ2V0RXJyb3JTdHlsZXMiLCJlcnJvciIsInRoZW1lIiwidGV4dCIsImNvbG9yIiwiZ2V0Q29udGFpbmVyRGlyZWN0aW9uIiwicHJvcHMiLCJhc0NvbHVtbiIsImlucHV0Q29sdW1uIiwiZmxleERpcmVjdGlvbiIsImlucHV0Um93IiwiZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQiLCJlcnJvckNvbnRhaW5lciIsImhlaWdodCIsImdldExhYmVsTWF4V2lkdGgiLCJsYWJlbFdpZHRoIiwidW5kZWZpbmVkIiwiQ29udGFpbmVyIiwic2VjdGlvbiIsImhhbGZHdXR0ZXJXaWR0aCIsIkxhYmVsQ29udGFpbmVyIiwiZGl2Iiwic2hvd0Vycm9yIiwiVmFsdWVDb250YWluZXIiLCJ3aWR0aCIsIkVycm9yQ29udGFpbmVyIiwiRXJyb3JNZXNzYWdlIiwic3BhbiIsImZvbnRTaXplIiwiUmVxdWlyZWRJbmRpY2F0b3IiLCJyZXF1aXJlZEluZGljYXRvciIsIkxhYmVsIiwibGFiZWwiLCJndXR0ZXJXaWR0aCIsIm1vZGlmeUNoaWxkcmVuIiwiY2hpbGQiLCJyZXF1aXJlZCIsImF1dG9Db21wbGV0ZSIsIm5ld0VsZW1lbnRQcm9wcyIsImNsYXNzTmFtZSIsImNsb25lRWxlbWVudCIsIkNvbnRlbnRJbnB1dFJvdyIsImNoaWxkcmVuIiwiaWQiLCJ2YWx1ZVdpZHRoIiwiQ2hpbGRyZW4iLCJtYXAiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5COztBQUVBLElBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FB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UmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBnZXRFcnJvclN0eWxlcyA9IChlcnJvciwgdGhlbWUpID0+IChlcnJvciA/IHRoZW1lLnRleHQuZXJyb3IuY29sb3IgOiAnJyk7XG5cbmNvbnN0IGdldENvbnRhaW5lckRpcmVjdGlvbiA9IHByb3BzID0+XG4gIChwcm9wcy5hc0NvbHVtbiA/IHByb3BzLnRoZW1lLmlucHV0Q29sdW1uLmZsZXhEaXJlY3Rpb24gOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5mbGV4RGlyZWN0aW9uKTtcblxuY29uc3QgZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQgPSBwcm9wcyA9PlxuICAocHJvcHMuYXNDb2x1bW4gP1xuICAgIHByb3BzLnRoZW1lLmlucHV0Q29sdW1uLmVycm9yQ29udGFpbmVyLmhlaWdodCA6IHByb3BzLnRoZW1lLmlucHV0Um93LmVycm9yQ29udGFpbmVyLmhlaWdodCk7XG5cblxuY29uc3QgZ2V0TGFiZWxNYXhXaWR0aCA9IChwcm9wcykgPT4ge1xuICBpZiAocHJvcHMuYXNDb2x1bW4pIHJldHVybiBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5sYWJlbFdpZHRoO1xuICByZXR1cm4gcHJvcHMubGFiZWxXaWR0aCAhPT0gdW5kZWZpbmVkID8gcHJvcHMubGFiZWxXaWR0aCA6IHByb3BzLnRoZW1lLmlucHV0Um93LmxhYmVsV2lkdGg7XG59O1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMgPT4gZ2V0Q29udGFpbmVyRGlyZWN0aW9uKHByb3BzKX07XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuY29uc3QgTGFiZWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4td2lkdGg6ICR7cHJvcHMgPT4gZ2V0TGFiZWxNYXhXaWR0aChwcm9wcyl9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBnZXRFcnJvclN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMudGhlbWUpfTtcbiAgcGFkZGluZy1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLnNob3dFcnJvciAmJiAhcHJvcHMuYXNDb2x1bW4gPyBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodChwcm9wcykgOiAwKX07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBWYWx1ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gID4gaW5wdXQsID4gLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IGdldEVycm9yU3R5bGVzKHByb3BzLmVycm9yLCBwcm9wcy50aGVtZSl9O1xuICB9XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtYXgtd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEVycm9yQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogJHtwcm9wcyA9PiBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodChwcm9wcyl9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuZXJyb3IuY29sb3J9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dC5lcnJvci5mb250U2l6ZX07XG5gO1xuXG5jb25zdCBSZXF1aXJlZEluZGljYXRvciA9IHN0eWxlZC5zcGFuYFxuICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gKHByb3BzLmFzQ29sdW1uID8gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4ucmVxdWlyZWRJbmRpY2F0b3IuZm9udFNpemUgOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5yZXF1aXJlZEluZGljYXRvci5mb250U2l6ZSl9O1xuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PiAocHJvcHMuYXNDb2x1bW4gPyAwIDogcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGgpfTtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMuYXNDb2x1bW4gPyBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGggOiAwKX07XG5gO1xuXG4vKipcbiAqIEFzc2lnbnMgZ2l2ZW4gcHJvcHMgZGlyZWN0bHkgdG8gaW5wdXQgZWxlbWVudFxuICogQHBhcmFtIGNoaWxkXG4gKiBAcGFyYW0gcHJvcHNcbiAqL1xuY29uc3QgbW9kaWZ5Q2hpbGRyZW4gPSAoY2hpbGQsIHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVxdWlyZWQsIGF1dG9Db21wbGV0ZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgbmV3RWxlbWVudFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogYCR7Y2hpbGQucHJvcHMuY2xhc3NOYW1lIHx8ICcnfWAsXG4gICAgcmVxdWlyZWQsXG4gICAgYXV0b0NvbXBsZXRlLFxuICB9O1xuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld0VsZW1lbnRQcm9wcyk7XG59O1xuXG5jb25zdCBDb250ZW50SW5wdXRSb3cgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLCBlcnJvciwgc2hvd0Vycm9yLCBsYWJlbCwgY2xhc3NOYW1lLCByZXF1aXJlZCwgaWQsIGFzQ29sdW1uLCBsYWJlbFdpZHRoLCB2YWx1ZVdpZHRoLFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGFzQ29sdW1uPXthc0NvbHVtbn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXtpZH0+XG4gICAgICA8TGFiZWxDb250YWluZXJcbiAgICAgICAgYXNDb2x1bW49e2FzQ29sdW1ufVxuICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgICBsYWJlbFdpZHRoPXtsYWJlbFdpZHRofVxuICAgICAgPlxuICAgICAgICB7bGFiZWwgJiZcbiAgICAgICAgPExhYmVsIGFzQ29sdW1uPXthc0NvbHVtbn0+e2xhYmVsfVxuICAgICAgICAgIHtyZXF1aXJlZCAmJiA8UmVxdWlyZWRJbmRpY2F0b3IgYXNDb2x1bW49e2FzQ29sdW1ufT4qPC9SZXF1aXJlZEluZGljYXRvcj59XG4gICAgICAgIDwvTGFiZWw+fVxuICAgICAgPC9MYWJlbENvbnRhaW5lcj5cbiAgICAgIDxWYWx1ZUNvbnRhaW5lciB3aWR0aD17dmFsdWVXaWR0aH0gZXJyb3I9e2Vycm9yfT5cbiAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4gbW9kaWZ5Q2hpbGRyZW4oY2hpbGQsIHByb3BzKSl9XG4gICAgICAgIHtzaG93RXJyb3IgJiZcbiAgICAgICAgPEVycm9yQ29udGFpbmVyIGFzQ29sdW1uPXthc0NvbHVtbn0+XG4gICAgICAgICAge2Vycm9yICYmIDxFcnJvck1lc3NhZ2U+e2Vycm9yfTwvRXJyb3JNZXNzYWdlPn1cbiAgICAgICAgPC9FcnJvckNvbnRhaW5lcj59XG4gICAgICA8L1ZhbHVlQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuQ29udGVudElucHV0Um93LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgc2hvd0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBhc0NvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG4gIGxhYmVsV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgdmFsdWVXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxufTtcblxuQ29udGVudElucHV0Um93LmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFiZWw6ICcnLFxuICByZXF1aXJlZDogZmFsc2UsXG4gIGNoaWxkcmVuOiBudWxsLFxuICBlcnJvcjogJycsXG4gIHNob3dFcnJvcjogdHJ1ZSxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgYXNDb2x1bW46IGZhbHNlLFxuICBsYWJlbFdpZHRoOiB1bmRlZmluZWQsXG4gIHZhbHVlV2lkdGg6ICdhdXRvJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRJbnB1dFJvdztcbiJdfQ==