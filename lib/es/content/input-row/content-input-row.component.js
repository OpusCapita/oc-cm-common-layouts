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
// App imports
import { theme } from '../../constants';

var getErrorStyles = function getErrorStyles(error) {
  return error ? theme.text.error.color : '';
};

var getContainerDirection = function getContainerDirection(isCol) {
  return isCol ? theme.container.inputColumn : theme.container.inputRow;
};
var Container = styled.section(_templateObject, function (props) {
  return getContainerDirection(props.asColumn);
}, theme.halfGutterWidth);

var getLabelContainerWidth = function getLabelContainerWidth(isCol) {
  return isCol ? theme.inputColumn.labelWidth : theme.inputRow.labelWidth;
};
var getLabelContainerLineHeight = function getLabelContainerLineHeight(isCol) {
  return isCol ? theme.inputColumn.labelContainerLineHeight : theme.inputRow.labelContainerLineHeight;
};

var LabelContainer = styled.div(_templateObject2, function (props) {
  return getLabelContainerWidth(props.asColumn);
}, function (props) {
  return getLabelContainerWidth(props.asColumn);
}, function (props) {
  return getErrorStyles(props.error);
}, function (props) {
  return getLabelContainerLineHeight(props.asColumn);
});

var ValueContainer = styled.div(_templateObject3, function (props) {
  return getErrorStyles(props.error);
});

var getErrorContainerMinHeight = function getErrorContainerMinHeight(isCol) {
  return isCol ? theme.inputColumn.errorContainer.height : theme.inputRow.errorContainer.height;
};

var ErrorContainer = styled.div(_templateObject4, function (props) {
  return getErrorContainerMinHeight(props.asColumn);
});

var ErrorMessage = styled.span(_templateObject5, theme.text.error.color, theme.text.error.fontSize);

var getRequiredIndicatorFontSize = function getRequiredIndicatorFontSize(isCol) {
  return isCol ? theme.inputColumn.requiredIndicator.fontSize : theme.inputRow.requiredIndicator.fontSize;
};

var RequiredIndicator = styled.span(_templateObject6, theme.halfGutterWidth, function (props) {
  return getRequiredIndicatorFontSize(props.asColumn);
});

var getLabelRightMargin = function getLabelRightMargin(isCol) {
  return isCol ? 0 : theme.gutterWidth;
};
var getLabelBottomMargin = function getLabelBottomMargin(isCol) {
  return isCol ? theme.gutterWidth : 0;
};

var Label = styled.label(_templateObject7, function (props) {
  return getLabelRightMargin(props.asColumn);
}, function (props) {
  return getLabelBottomMargin(props.asColumn);
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
  id: '',
  asColumn: false
};

export default ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwidGhlbWUiLCJnZXRFcnJvclN0eWxlcyIsImVycm9yIiwidGV4dCIsImNvbG9yIiwiZ2V0Q29udGFpbmVyRGlyZWN0aW9uIiwiaXNDb2wiLCJjb250YWluZXIiLCJpbnB1dENvbHVtbiIsImlucHV0Um93IiwiQ29udGFpbmVyIiwic2VjdGlvbiIsInByb3BzIiwiYXNDb2x1bW4iLCJoYWxmR3V0dGVyV2lkdGgiLCJnZXRMYWJlbENvbnRhaW5lcldpZHRoIiwibGFiZWxXaWR0aCIsImdldExhYmVsQ29udGFpbmVyTGluZUhlaWdodCIsImxhYmVsQ29udGFpbmVyTGluZUhlaWdodCIsIkxhYmVsQ29udGFpbmVyIiwiZGl2IiwiVmFsdWVDb250YWluZXIiLCJnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodCIsImVycm9yQ29udGFpbmVyIiwiaGVpZ2h0IiwiRXJyb3JDb250YWluZXIiLCJFcnJvck1lc3NhZ2UiLCJzcGFuIiwiZm9udFNpemUiLCJnZXRSZXF1aXJlZEluZGljYXRvckZvbnRTaXplIiwicmVxdWlyZWRJbmRpY2F0b3IiLCJSZXF1aXJlZEluZGljYXRvciIsImdldExhYmVsUmlnaHRNYXJnaW4iLCJndXR0ZXJXaWR0aCIsImdldExhYmVsQm90dG9tTWFyZ2luIiwiTGFiZWwiLCJsYWJlbCIsIm1vZGlmeUNoaWxkcmVuIiwiY2hpbGQiLCJyZXF1aXJlZCIsImF1dG9Db21wbGV0ZSIsIm5ld0VsZW1lbnRQcm9wcyIsImNsYXNzTmFtZSIsImNsb25lRWxlbWVudCIsIkNvbnRlbnRJbnB1dFJvdyIsImNoaWxkcmVuIiwic2hvd0Vycm9yIiwiaWQiLCJDaGlsZHJlbiIsIm1hcCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9B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VyxVQUFVQSxRQUFyQixFQUErQixXQUFXNkIsU0FBMUMsRUFBcUQsSUFBSUssRUFBekQ7QUFDRTtBQUFDLG9CQUFEO0FBQUEsUUFBZ0IsVUFBVWxDLFFBQTFCLEVBQW9DLE9BQU9YLEtBQTNDO0FBQ0drQyxlQUNEO0FBQUMsYUFBRDtBQUFBLFVBQU8sVUFBVXZCLFFBQWpCO0FBQTRCdUIsYUFBNUI7QUFDR0csb0JBQVk7QUFBQywyQkFBRDtBQUFBLFlBQW1CLFVBQVUxQixRQUE3QjtBQUFBO0FBQUE7QUFEZjtBQUZGLEtBREY7QUFPRTtBQUFDLG9CQUFEO0FBQUEsUUFBZ0IsT0FBT1gsS0FBdkI7QUFDR0wsWUFBTW1ELFFBQU4sQ0FBZUMsR0FBZixDQUFtQkosUUFBbkIsRUFBNkI7QUFBQSxlQUFTUixlQUFlQyxLQUFmLEVBQXNCMUIsS0FBdEIsQ0FBVDtBQUFBLE9BQTdCLENBREg7QUFFR2tDLG1CQUNEO0FBQUMsc0JBQUQ7QUFBQSxVQUFnQixVQUFVakMsUUFBMUI7QUFDR1gsaUJBQVM7QUFBQyxzQkFBRDtBQUFBO0FBQWVBO0FBQWY7QUFEWjtBQUhGO0FBUEYsR0FERjtBQWlCRCxDQXRCRDs7QUFtQ0EwQyxnQkFBZ0JNLFlBQWhCLEdBQStCO0FBQzdCZCxTQUFPLEVBRHNCO0FBRTdCRyxZQUFVLEtBRm1CO0FBRzdCTSxZQUFVLElBSG1CO0FBSTdCM0MsU0FBTyxFQUpzQjtBQUs3QjRDLGFBQVcsSUFMa0I7QUFNN0JKLGFBQVcsRUFOa0I7QUFPN0JLLE1BQUksRUFQeUI7QUFRN0JsQyxZQUFVO0FBUm1CLENBQS9COztBQVdBLGVBQWUrQixlQUFmIiwiZmlsZSI6ImNvbnRlbnQtaW5wdXQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBnZXRFcnJvclN0eWxlcyA9IGVycm9yID0+IChlcnJvciA/IHRoZW1lLnRleHQuZXJyb3IuY29sb3IgOiAnJyk7XG5cbmNvbnN0IGdldENvbnRhaW5lckRpcmVjdGlvbiA9IGlzQ29sID0+XG4gIChpc0NvbCA/IHRoZW1lLmNvbnRhaW5lci5pbnB1dENvbHVtbiA6IHRoZW1lLmNvbnRhaW5lci5pbnB1dFJvdyk7XG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMgPT4gZ2V0Q29udGFpbmVyRGlyZWN0aW9uKHByb3BzLmFzQ29sdW1uKX07XG4gIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuY29uc3QgZ2V0TGFiZWxDb250YWluZXJXaWR0aCA9IGlzQ29sID0+XG4gIChpc0NvbCA/IHRoZW1lLmlucHV0Q29sdW1uLmxhYmVsV2lkdGggOiB0aGVtZS5pbnB1dFJvdy5sYWJlbFdpZHRoKTtcbmNvbnN0IGdldExhYmVsQ29udGFpbmVyTGluZUhlaWdodCA9IGlzQ29sID0+XG4gIChpc0NvbCA/IHRoZW1lLmlucHV0Q29sdW1uLmxhYmVsQ29udGFpbmVyTGluZUhlaWdodCA6IHRoZW1lLmlucHV0Um93LmxhYmVsQ29udGFpbmVyTGluZUhlaWdodCk7XG5cbmNvbnN0IExhYmVsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0TGFiZWxDb250YWluZXJXaWR0aChwcm9wcy5hc0NvbHVtbil9O1xuICBtaW4td2lkdGg6ICR7cHJvcHMgPT4gZ2V0TGFiZWxDb250YWluZXJXaWR0aChwcm9wcy5hc0NvbHVtbil9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBnZXRFcnJvclN0eWxlcyhwcm9wcy5lcnJvcil9O1xuICBsaW5lLWhlaWdodDogJHtwcm9wcyA9PiBnZXRMYWJlbENvbnRhaW5lckxpbmVIZWlnaHQocHJvcHMuYXNDb2x1bW4pfTtcbmA7XG5cbmNvbnN0IFZhbHVlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgPiBpbnB1dCwgPiAuZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gZ2V0RXJyb3JTdHlsZXMocHJvcHMuZXJyb3IpfTtcbiAgfVxuICBmbGV4OiAxIDEgYXV0bztcbmA7XG5cbmNvbnN0IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0ID0gaXNDb2wgPT5cbiAgKGlzQ29sID8gdGhlbWUuaW5wdXRDb2x1bW4uZXJyb3JDb250YWluZXIuaGVpZ2h0IDogdGhlbWUuaW5wdXRSb3cuZXJyb3JDb250YWluZXIuaGVpZ2h0KTtcblxuY29uc3QgRXJyb3JDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4taGVpZ2h0OiAke3Byb3BzID0+IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0KHByb3BzLmFzQ29sdW1uKX07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICR7dGhlbWUudGV4dC5lcnJvci5jb2xvcn07XG4gIGZvbnQtc2l6ZTogJHt0aGVtZS50ZXh0LmVycm9yLmZvbnRTaXplfTtcbmA7XG5cbmNvbnN0IGdldFJlcXVpcmVkSW5kaWNhdG9yRm9udFNpemUgPSBpc0NvbCA9PlxuICAoaXNDb2wgP1xuICAgIHRoZW1lLmlucHV0Q29sdW1uLnJlcXVpcmVkSW5kaWNhdG9yLmZvbnRTaXplIDogdGhlbWUuaW5wdXRSb3cucmVxdWlyZWRJbmRpY2F0b3IuZm9udFNpemUpO1xuXG5jb25zdCBSZXF1aXJlZEluZGljYXRvciA9IHN0eWxlZC5zcGFuYFxuICBtYXJnaW4tbGVmdDogJHt0aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gZ2V0UmVxdWlyZWRJbmRpY2F0b3JGb250U2l6ZShwcm9wcy5hc0NvbHVtbil9O1xuYDtcblxuY29uc3QgZ2V0TGFiZWxSaWdodE1hcmdpbiA9IGlzQ29sID0+IChpc0NvbCA/IDAgOiB0aGVtZS5ndXR0ZXJXaWR0aCk7XG5jb25zdCBnZXRMYWJlbEJvdHRvbU1hcmdpbiA9IGlzQ29sID0+IChpc0NvbCA/IHRoZW1lLmd1dHRlcldpZHRoIDogMCk7XG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gZ2V0TGFiZWxSaWdodE1hcmdpbihwcm9wcy5hc0NvbHVtbil9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IGdldExhYmVsQm90dG9tTWFyZ2luKHByb3BzLmFzQ29sdW1uKX07XG5gO1xuXG4vKipcbiAqIEFzc2lnbnMgZ2l2ZW4gcHJvcHMgZGlyZWN0bHkgdG8gaW5wdXQgZWxlbWVudFxuICogQHBhcmFtIGNoaWxkXG4gKiBAcGFyYW0gcHJvcHNcbiAqL1xuY29uc3QgbW9kaWZ5Q2hpbGRyZW4gPSAoY2hpbGQsIHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVxdWlyZWQsIGF1dG9Db21wbGV0ZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgbmV3RWxlbWVudFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogYCR7Y2hpbGQucHJvcHMuY2xhc3NOYW1lIHx8ICcnfWAsXG4gICAgcmVxdWlyZWQsXG4gICAgYXV0b0NvbXBsZXRlLFxuICB9O1xuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld0VsZW1lbnRQcm9wcyk7XG59O1xuXG5jb25zdCBDb250ZW50SW5wdXRSb3cgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLCBlcnJvciwgc2hvd0Vycm9yLCBsYWJlbCwgY2xhc3NOYW1lLCByZXF1aXJlZCwgaWQsIGFzQ29sdW1uLFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGFzQ29sdW1uPXthc0NvbHVtbn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXtpZH0+XG4gICAgICA8TGFiZWxDb250YWluZXIgYXNDb2x1bW49e2FzQ29sdW1ufSBlcnJvcj17ZXJyb3J9PlxuICAgICAgICB7bGFiZWwgJiZcbiAgICAgICAgPExhYmVsIGFzQ29sdW1uPXthc0NvbHVtbn0+e2xhYmVsfVxuICAgICAgICAgIHtyZXF1aXJlZCAmJiA8UmVxdWlyZWRJbmRpY2F0b3IgYXNDb2x1bW49e2FzQ29sdW1ufT4qPC9SZXF1aXJlZEluZGljYXRvcj59XG4gICAgICAgIDwvTGFiZWw+fVxuICAgICAgPC9MYWJlbENvbnRhaW5lcj5cbiAgICAgIDxWYWx1ZUNvbnRhaW5lciBlcnJvcj17ZXJyb3J9PlxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiBtb2RpZnlDaGlsZHJlbihjaGlsZCwgcHJvcHMpKX1cbiAgICAgICAge3Nob3dFcnJvciAmJlxuICAgICAgICA8RXJyb3JDb250YWluZXIgYXNDb2x1bW49e2FzQ29sdW1ufT5cbiAgICAgICAgICB7ZXJyb3IgJiYgPEVycm9yTWVzc2FnZT57ZXJyb3J9PC9FcnJvck1lc3NhZ2U+fVxuICAgICAgICA8L0Vycm9yQ29udGFpbmVyPn1cbiAgICAgIDwvVmFsdWVDb250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5Db250ZW50SW5wdXRSb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYm9vbF0pLFxuICBzaG93RXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhc0NvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5Db250ZW50SW5wdXRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBsYWJlbDogJycsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbiAgY2hpbGRyZW46IG51bGwsXG4gIGVycm9yOiAnJyxcbiAgc2hvd0Vycm9yOiB0cnVlLFxuICBjbGFzc05hbWU6ICcnLFxuICBpZDogJycsXG4gIGFzQ29sdW1uOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRJbnB1dFJvdztcbiJdfQ==