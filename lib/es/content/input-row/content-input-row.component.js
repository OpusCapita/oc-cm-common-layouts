var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: ', ';\n  min-width: ', ';\n  color: ', ';\n  line-height: ', ';\n'], ['\n  width: ', ';\n  min-width: ', ';\n  color: ', ';\n  line-height: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n'], ['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n']),
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

var getContainerDirection = function getContainerDirection(isCol, theme) {
  return isCol ? theme.container.inputColumn : theme.container.inputRow;
};

var Container = styled.section(_templateObject, function (props) {
  return getContainerDirection(props.asColumn, props.theme);
}, function (props) {
  return props.theme.halfGutterWidth;
});

var getLabelContainerWidth = function getLabelContainerWidth(isCol, theme) {
  return isCol ? theme.inputColumn.labelWidth : theme.inputRow.labelWidth;
};

var getLabelContainerLineHeight = function getLabelContainerLineHeight(isCol, theme) {
  return isCol ? theme.inputColumn.labelContainerLineHeight : theme.inputRow.labelContainerLineHeight;
};

var LabelContainer = styled.div(_templateObject2, function (props) {
  return getLabelContainerWidth(props.asColumn, props.theme);
}, function (props) {
  return getLabelContainerWidth(props.asColumn, props.theme);
}, function (props) {
  return getErrorStyles(props.error, props.theme);
}, function (props) {
  return getLabelContainerLineHeight(props.asColumn, props.theme);
});

var ValueContainer = styled.div(_templateObject3, function (props) {
  return getErrorStyles(props.error, props.theme);
});

var getErrorContainerMinHeight = function getErrorContainerMinHeight(isCol, theme) {
  return isCol ? theme.inputColumn.errorContainer.height : theme.inputRow.errorContainer.height;
};

var getRequiredIndicatorFontSize = function getRequiredIndicatorFontSize(isCol, theme) {
  return isCol ? theme.inputColumn.requiredIndicator.fontSize : theme.inputRow.requiredIndicator.fontSize;
};

var getLabelRightMargin = function getLabelRightMargin(isCol, theme) {
  return isCol ? 0 : theme.gutterWidth;
};
var getLabelBottomMargin = function getLabelBottomMargin(isCol, theme) {
  return isCol ? theme.gutterWidth : 0;
};

var ErrorContainer = styled.div(_templateObject4, function (props) {
  return getErrorContainerMinHeight(props.asColumn, props.theme);
});

var ErrorMessage = styled.span(_templateObject5, function (props) {
  return props.theme.text.error.color;
}, function (props) {
  return props.theme.text.error.fontSize;
});

var RequiredIndicator = styled.span(_templateObject6, function (props) {
  return props.theme.halfGutterWidth;
}, function (props) {
  return getRequiredIndicatorFontSize(props.asColumn, props.theme);
});

var Label = styled.label(_templateObject7, function (props) {
  return getLabelRightMargin(props.asColumn, props.theme);
}, function (props) {
  return getLabelBottomMargin(props.asColumn, props.theme);
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
      asColumn = props.asColumn;


  return React.createElement(
    Container,
    { asColumn: asColumn, className: className, id: id },
    React.createElement(
      LabelContainer,
      { asColumn: asColumn, error: error },
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
      { error: error },
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
  asColumn: false
};

export default ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiZ2V0RXJyb3JTdHlsZXMiLCJlcnJvciIsInRoZW1lIiwidGV4dCIsImNvbG9yIiwiZ2V0Q29udGFpbmVyRGlyZWN0aW9uIiwiaXNDb2wiLCJjb250YWluZXIiLCJpbnB1dENvbHVtbiIsImlucHV0Um93IiwiQ29udGFpbmVyIiwic2VjdGlvbiIsInByb3BzIiwiYXNDb2x1bW4iLCJoYWxmR3V0dGVyV2lkdGgiLCJnZXRMYWJlbENvbnRhaW5lcldpZHRoIiwibGFiZWxXaWR0aCIsImdldExhYmVsQ29udGFpbmVyTGluZUhlaWdodCIsImxhYmVsQ29udGFpbmVyTGluZUhlaWdodCIsIkxhYmVsQ29udGFpbmVyIiwiZGl2IiwiVmFsdWVDb250YWluZXIiLCJnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodCIsImVycm9yQ29udGFpbmVyIiwiaGVpZ2h0IiwiZ2V0UmVxdWlyZWRJbmRpY2F0b3JGb250U2l6ZSIsInJlcXVpcmVkSW5kaWNhdG9yIiwiZm9udFNpemUiLCJnZXRMYWJlbFJpZ2h0TWFyZ2luIiwiZ3V0dGVyV2lkdGgiLCJnZXRMYWJlbEJvdHRvbU1hcmdpbiIsIkVycm9yQ29udGFpbmVyIiwiRXJyb3JNZXNzYWdlIiwic3BhbiIsIlJlcXVpcmVkSW5kaWNhdG9yIiwiTGFiZWwiLCJsYWJlbCIsIm1vZGlmeUNoaWxkcmVuIiwiY2hpbGQiLCJyZXF1aXJlZCIsImF1dG9Db21wbGV0ZSIsIm5ld0VsZW1lbnRQcm9wcyIsImNsYXNzTmFtZSIsImNsb25lRWxlbWVudCIsIkNvbnRlbnRJbnB1dFJvdyIsImNoaWxkcmVuIiwic2hvd0Vycm9yIiwiaWQiLCJDaGlsZHJlbiIsIm1hcCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9B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R1osaUJBQVM7QUFBQyxzQkFBRDtBQUFBO0FBQWVBO0FBQWY7QUFEWjtBQUhGO0FBUEYsR0FERjtBQWlCRCxDQXRCRDs7QUFtQ0EyQyxnQkFBZ0JNLFlBQWhCLEdBQStCO0FBQzdCZCxTQUFPLEVBRHNCO0FBRTdCRyxZQUFVLEtBRm1CO0FBRzdCTSxZQUFVLElBSG1CO0FBSTdCNUMsU0FBTyxFQUpzQjtBQUs3QjZDLGFBQVcsSUFMa0I7QUFNN0JKLGFBQVcsRUFOa0I7QUFPN0I3QixZQUFVO0FBUG1CLENBQS9COztBQVVBLGVBQWUrQixlQUFmIiwiZmlsZSI6ImNvbnRlbnQtaW5wdXQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IGdldEVycm9yU3R5bGVzID0gKGVycm9yLCB0aGVtZSkgPT4gKGVycm9yID8gdGhlbWUudGV4dC5lcnJvci5jb2xvciA6ICcnKTtcblxuY29uc3QgZ2V0Q29udGFpbmVyRGlyZWN0aW9uID0gKGlzQ29sLCB0aGVtZSkgPT5cbiAgKGlzQ29sID8gdGhlbWUuY29udGFpbmVyLmlucHV0Q29sdW1uIDogdGhlbWUuY29udGFpbmVyLmlucHV0Um93KTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IGdldENvbnRhaW5lckRpcmVjdGlvbihwcm9wcy5hc0NvbHVtbiwgcHJvcHMudGhlbWUpfTtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5gO1xuXG5jb25zdCBnZXRMYWJlbENvbnRhaW5lcldpZHRoID0gKGlzQ29sLCB0aGVtZSkgPT5cbiAgKGlzQ29sID8gdGhlbWUuaW5wdXRDb2x1bW4ubGFiZWxXaWR0aCA6IHRoZW1lLmlucHV0Um93LmxhYmVsV2lkdGgpO1xuXG5jb25zdCBnZXRMYWJlbENvbnRhaW5lckxpbmVIZWlnaHQgPSAoaXNDb2wsIHRoZW1lKSA9PlxuICAoaXNDb2wgPyB0aGVtZS5pbnB1dENvbHVtbi5sYWJlbENvbnRhaW5lckxpbmVIZWlnaHQgOiB0aGVtZS5pbnB1dFJvdy5sYWJlbENvbnRhaW5lckxpbmVIZWlnaHQpO1xuXG5jb25zdCBMYWJlbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAke3Byb3BzID0+IGdldExhYmVsQ29udGFpbmVyV2lkdGgocHJvcHMuYXNDb2x1bW4sIHByb3BzLnRoZW1lKX07XG4gIG1pbi13aWR0aDogJHtwcm9wcyA9PiBnZXRMYWJlbENvbnRhaW5lcldpZHRoKHByb3BzLmFzQ29sdW1uLCBwcm9wcy50aGVtZSl9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBnZXRFcnJvclN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMudGhlbWUpfTtcbiAgbGluZS1oZWlnaHQ6ICR7cHJvcHMgPT4gZ2V0TGFiZWxDb250YWluZXJMaW5lSGVpZ2h0KHByb3BzLmFzQ29sdW1uLCBwcm9wcy50aGVtZSl9O1xuYDtcblxuY29uc3QgVmFsdWVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICA+IGlucHV0LCA+IC5mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiBnZXRFcnJvclN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMudGhlbWUpfTtcbiAgfVxuICBmbGV4OiAxIDEgYXV0bztcbmA7XG5cbmNvbnN0IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0ID0gKGlzQ29sLCB0aGVtZSkgPT5cbiAgKGlzQ29sID8gdGhlbWUuaW5wdXRDb2x1bW4uZXJyb3JDb250YWluZXIuaGVpZ2h0IDogdGhlbWUuaW5wdXRSb3cuZXJyb3JDb250YWluZXIuaGVpZ2h0KTtcblxuY29uc3QgZ2V0UmVxdWlyZWRJbmRpY2F0b3JGb250U2l6ZSA9IChpc0NvbCwgdGhlbWUpID0+XG4gIChpc0NvbCA/XG4gICAgdGhlbWUuaW5wdXRDb2x1bW4ucmVxdWlyZWRJbmRpY2F0b3IuZm9udFNpemUgOiB0aGVtZS5pbnB1dFJvdy5yZXF1aXJlZEluZGljYXRvci5mb250U2l6ZSk7XG5cbmNvbnN0IGdldExhYmVsUmlnaHRNYXJnaW4gPSAoaXNDb2wsIHRoZW1lKSA9PiAoaXNDb2wgPyAwIDogdGhlbWUuZ3V0dGVyV2lkdGgpO1xuY29uc3QgZ2V0TGFiZWxCb3R0b21NYXJnaW4gPSAoaXNDb2wsIHRoZW1lKSA9PiAoaXNDb2wgPyB0aGVtZS5ndXR0ZXJXaWR0aCA6IDApO1xuXG5jb25zdCBFcnJvckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1pbi1oZWlnaHQ6ICR7cHJvcHMgPT4gZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQocHJvcHMuYXNDb2x1bW4sIHByb3BzLnRoZW1lKX07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dC5lcnJvci5jb2xvcn07XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0LmVycm9yLmZvbnRTaXplfTtcbmA7XG5cblxuY29uc3QgUmVxdWlyZWRJbmRpY2F0b3IgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IGdldFJlcXVpcmVkSW5kaWNhdG9yRm9udFNpemUocHJvcHMuYXNDb2x1bW4sIHByb3BzLnRoZW1lKX07XG5gO1xuXG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gZ2V0TGFiZWxSaWdodE1hcmdpbihwcm9wcy5hc0NvbHVtbiwgcHJvcHMudGhlbWUpfTtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiBnZXRMYWJlbEJvdHRvbU1hcmdpbihwcm9wcy5hc0NvbHVtbiwgcHJvcHMudGhlbWUpfTtcbmA7XG5cbi8qKlxuICogQXNzaWducyBnaXZlbiBwcm9wcyBkaXJlY3RseSB0byBpbnB1dCBlbGVtZW50XG4gKiBAcGFyYW0gY2hpbGRcbiAqIEBwYXJhbSBwcm9wc1xuICovXG5jb25zdCBtb2RpZnlDaGlsZHJlbiA9IChjaGlsZCwgcHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXF1aXJlZCwgYXV0b0NvbXBsZXRlIH0gPSBwcm9wcztcblxuICBjb25zdCBuZXdFbGVtZW50UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiBgJHtjaGlsZC5wcm9wcy5jbGFzc05hbWUgfHwgJyd9YCxcbiAgICByZXF1aXJlZCxcbiAgICBhdXRvQ29tcGxldGUsXG4gIH07XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgbmV3RWxlbWVudFByb3BzKTtcbn07XG5cbmNvbnN0IENvbnRlbnRJbnB1dFJvdyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sIGVycm9yLCBzaG93RXJyb3IsIGxhYmVsLCBjbGFzc05hbWUsIHJlcXVpcmVkLCBpZCwgYXNDb2x1bW4sXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgYXNDb2x1bW49e2FzQ29sdW1ufSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e2lkfT5cbiAgICAgIDxMYWJlbENvbnRhaW5lciBhc0NvbHVtbj17YXNDb2x1bW59IGVycm9yPXtlcnJvcn0+XG4gICAgICAgIHtsYWJlbCAmJlxuICAgICAgICA8TGFiZWwgYXNDb2x1bW49e2FzQ29sdW1ufT57bGFiZWx9XG4gICAgICAgICAge3JlcXVpcmVkICYmIDxSZXF1aXJlZEluZGljYXRvciBhc0NvbHVtbj17YXNDb2x1bW59Pio8L1JlcXVpcmVkSW5kaWNhdG9yPn1cbiAgICAgICAgPC9MYWJlbD59XG4gICAgICA8L0xhYmVsQ29udGFpbmVyPlxuICAgICAgPFZhbHVlQ29udGFpbmVyIGVycm9yPXtlcnJvcn0+XG4gICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IG1vZGlmeUNoaWxkcmVuKGNoaWxkLCBwcm9wcykpfVxuICAgICAgICB7c2hvd0Vycm9yICYmXG4gICAgICAgIDxFcnJvckNvbnRhaW5lciBhc0NvbHVtbj17YXNDb2x1bW59PlxuICAgICAgICAgIHtlcnJvciAmJiA8RXJyb3JNZXNzYWdlPntlcnJvcn08L0Vycm9yTWVzc2FnZT59XG4gICAgICAgIDwvRXJyb3JDb250YWluZXI+fVxuICAgICAgPC9WYWx1ZUNvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkNvbnRlbnRJbnB1dFJvdy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ib29sXSksXG4gIHNob3dFcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYXNDb2x1bW46IFByb3BUeXBlcy5ib29sLFxufTtcblxuQ29udGVudElucHV0Um93LmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFiZWw6ICcnLFxuICByZXF1aXJlZDogZmFsc2UsXG4gIGNoaWxkcmVuOiBudWxsLFxuICBlcnJvcjogJycsXG4gIHNob3dFcnJvcjogdHJ1ZSxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgYXNDb2x1bW46IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudElucHV0Um93O1xuIl19