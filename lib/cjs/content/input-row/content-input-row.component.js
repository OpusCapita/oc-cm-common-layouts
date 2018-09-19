'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: ', ';\n  min-width: ', ';\n  color: ', ';\n  line-height: ', ';\n'], ['\n  width: ', ';\n  min-width: ', ';\n  color: ', ';\n  line-height: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n'], ['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n'], ['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  color: ', ';\n  font-size: ', ';\n'], ['\n  color: ', ';\n  font-size: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n  font-size: ', ';\n'], ['\n  margin-left: ', ';\n  font-size: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  margin-right: ', ';\n  margin-bottom: ', ';\n'], ['\n  margin-right: ', ';\n  margin-bottom: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var getErrorStyles = function getErrorStyles(error, theme) {
  return error ? theme.text.error.color : '';
};

var getContainerDirection = function getContainerDirection(isCol, theme) {
  return isCol ? theme.container.inputColumn : theme.container.inputRow;
};

var Container = _styledComponents2.default.section(_templateObject, function (props) {
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

var LabelContainer = _styledComponents2.default.div(_templateObject2, function (props) {
  return getLabelContainerWidth(props.asColumn, props.theme);
}, function (props) {
  return getLabelContainerWidth(props.asColumn, props.theme);
}, function (props) {
  return getErrorStyles(props.error, props.theme);
}, function (props) {
  return getLabelContainerLineHeight(props.asColumn, props.theme);
});

var ValueContainer = _styledComponents2.default.div(_templateObject3, function (props) {
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

var ErrorContainer = _styledComponents2.default.div(_templateObject4, function (props) {
  return getErrorContainerMinHeight(props.asColumn, props.theme);
});

var ErrorMessage = _styledComponents2.default.span(_templateObject5, function (props) {
  return props.theme.text.error.color;
}, function (props) {
  return props.theme.text.error.fontSize;
});

var RequiredIndicator = _styledComponents2.default.span(_templateObject6, function (props) {
  return props.theme.halfGutterWidth;
}, function (props) {
  return getRequiredIndicatorFontSize(props.asColumn, props.theme);
});

var Label = _styledComponents2.default.label(_templateObject7, function (props) {
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

  return _react2.default.cloneElement(child, newElementProps);
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


  return _react2.default.createElement(
    Container,
    { asColumn: asColumn, className: className, id: id },
    _react2.default.createElement(
      LabelContainer,
      { asColumn: asColumn, error: error },
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
      { error: error },
      _react2.default.Children.map(children, function (child) {
        return modifyChildren(child, props);
      }),
      showError && _react2.default.createElement(
        ErrorContainer,
        { asColumn: asColumn },
        error && _react2.default.createElement(
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

exports.default = ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImdldEVycm9yU3R5bGVzIiwiZXJyb3IiLCJ0aGVtZSIsInRleHQiLCJjb2xvciIsImdldENvbnRhaW5lckRpcmVjdGlvbiIsImlzQ29sIiwiY29udGFpbmVyIiwiaW5wdXRDb2x1bW4iLCJpbnB1dFJvdyIsIkNvbnRhaW5lciIsInN0eWxlZCIsInNlY3Rpb24iLCJwcm9wcyIsImFzQ29sdW1uIiwiaGFsZkd1dHRlcldpZHRoIiwiZ2V0TGFiZWxDb250YWluZXJXaWR0aCIsImxhYmVsV2lkdGgiLCJnZXRMYWJlbENvbnRhaW5lckxpbmVIZWlnaHQiLCJsYWJlbENvbnRhaW5lckxpbmVIZWlnaHQiLCJMYWJlbENvbnRhaW5lciIsImRpdiIsIlZhbHVlQ29udGFpbmVyIiwiZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQiLCJlcnJvckNvbnRhaW5lciIsImhlaWdodCIsImdldFJlcXVpcmVkSW5kaWNhdG9yRm9udFNpemUiLCJyZXF1aXJlZEluZGljYXRvciIsImZvbnRTaXplIiwiZ2V0TGFiZWxSaWdodE1hcmdpbiIsImd1dHRlcldpZHRoIiwiZ2V0TGFiZWxCb3R0b21NYXJnaW4iLCJFcnJvckNvbnRhaW5lciIsIkVycm9yTWVzc2FnZSIsInNwYW4iLCJSZXF1aXJlZEluZGljYXRvciIsIkxhYmVsIiwibGFiZWwiLCJtb2RpZnlDaGlsZHJlbiIsImNoaWxkIiwicmVxdWlyZWQiLCJhdXRvQ29tcGxldGUiLCJuZXdFbGVtZW50UHJvcHMiLCJjbGFzc05hbWUiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsIkNvbnRlbnRJbnB1dFJvdyIsImNoaWxkcmVuIiwic2hvd0Vycm9yIiwiaWQiLCJDaGlsZHJlbiIsIm1hcCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNB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dEJEOztBQW1DQTZDLGdCQUFnQk0sWUFBaEIsR0FBK0I7QUFDN0JmLFNBQU8sRUFEc0I7QUFFN0JHLFlBQVUsS0FGbUI7QUFHN0JPLFlBQVUsSUFIbUI7QUFJN0I5QyxTQUFPLEVBSnNCO0FBSzdCK0MsYUFBVyxJQUxrQjtBQU03QkwsYUFBVyxFQU5rQjtBQU83QjdCLFlBQVU7QUFQbUIsQ0FBL0I7O2tCQVVlZ0MsZSIsImZpbGUiOiJjb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBnZXRFcnJvclN0eWxlcyA9IChlcnJvciwgdGhlbWUpID0+IChlcnJvciA/IHRoZW1lLnRleHQuZXJyb3IuY29sb3IgOiAnJyk7XG5cbmNvbnN0IGdldENvbnRhaW5lckRpcmVjdGlvbiA9IChpc0NvbCwgdGhlbWUpID0+XG4gIChpc0NvbCA/IHRoZW1lLmNvbnRhaW5lci5pbnB1dENvbHVtbiA6IHRoZW1lLmNvbnRhaW5lci5pbnB1dFJvdyk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogJHtwcm9wcyA9PiBnZXRDb250YWluZXJEaXJlY3Rpb24ocHJvcHMuYXNDb2x1bW4sIHByb3BzLnRoZW1lKX07XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuY29uc3QgZ2V0TGFiZWxDb250YWluZXJXaWR0aCA9IChpc0NvbCwgdGhlbWUpID0+XG4gIChpc0NvbCA/IHRoZW1lLmlucHV0Q29sdW1uLmxhYmVsV2lkdGggOiB0aGVtZS5pbnB1dFJvdy5sYWJlbFdpZHRoKTtcblxuY29uc3QgZ2V0TGFiZWxDb250YWluZXJMaW5lSGVpZ2h0ID0gKGlzQ29sLCB0aGVtZSkgPT5cbiAgKGlzQ29sID8gdGhlbWUuaW5wdXRDb2x1bW4ubGFiZWxDb250YWluZXJMaW5lSGVpZ2h0IDogdGhlbWUuaW5wdXRSb3cubGFiZWxDb250YWluZXJMaW5lSGVpZ2h0KTtcblxuY29uc3QgTGFiZWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogJHtwcm9wcyA9PiBnZXRMYWJlbENvbnRhaW5lcldpZHRoKHByb3BzLmFzQ29sdW1uLCBwcm9wcy50aGVtZSl9O1xuICBtaW4td2lkdGg6ICR7cHJvcHMgPT4gZ2V0TGFiZWxDb250YWluZXJXaWR0aChwcm9wcy5hc0NvbHVtbiwgcHJvcHMudGhlbWUpfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gZ2V0RXJyb3JTdHlsZXMocHJvcHMuZXJyb3IsIHByb3BzLnRoZW1lKX07XG4gIGxpbmUtaGVpZ2h0OiAke3Byb3BzID0+IGdldExhYmVsQ29udGFpbmVyTGluZUhlaWdodChwcm9wcy5hc0NvbHVtbiwgcHJvcHMudGhlbWUpfTtcbmA7XG5cbmNvbnN0IFZhbHVlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgPiBpbnB1dCwgPiAuZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gZ2V0RXJyb3JTdHlsZXMocHJvcHMuZXJyb3IsIHByb3BzLnRoZW1lKX07XG4gIH1cbiAgZmxleDogMSAxIGF1dG87XG5gO1xuXG5jb25zdCBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodCA9IChpc0NvbCwgdGhlbWUpID0+XG4gIChpc0NvbCA/IHRoZW1lLmlucHV0Q29sdW1uLmVycm9yQ29udGFpbmVyLmhlaWdodCA6IHRoZW1lLmlucHV0Um93LmVycm9yQ29udGFpbmVyLmhlaWdodCk7XG5cbmNvbnN0IGdldFJlcXVpcmVkSW5kaWNhdG9yRm9udFNpemUgPSAoaXNDb2wsIHRoZW1lKSA9PlxuICAoaXNDb2wgP1xuICAgIHRoZW1lLmlucHV0Q29sdW1uLnJlcXVpcmVkSW5kaWNhdG9yLmZvbnRTaXplIDogdGhlbWUuaW5wdXRSb3cucmVxdWlyZWRJbmRpY2F0b3IuZm9udFNpemUpO1xuXG5jb25zdCBnZXRMYWJlbFJpZ2h0TWFyZ2luID0gKGlzQ29sLCB0aGVtZSkgPT4gKGlzQ29sID8gMCA6IHRoZW1lLmd1dHRlcldpZHRoKTtcbmNvbnN0IGdldExhYmVsQm90dG9tTWFyZ2luID0gKGlzQ29sLCB0aGVtZSkgPT4gKGlzQ29sID8gdGhlbWUuZ3V0dGVyV2lkdGggOiAwKTtcblxuY29uc3QgRXJyb3JDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4taGVpZ2h0OiAke3Byb3BzID0+IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0KHByb3BzLmFzQ29sdW1uLCBwcm9wcy50aGVtZSl9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuZXJyb3IuY29sb3J9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dC5lcnJvci5mb250U2l6ZX07XG5gO1xuXG5cbmNvbnN0IFJlcXVpcmVkSW5kaWNhdG9yID0gc3R5bGVkLnNwYW5gXG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBnZXRSZXF1aXJlZEluZGljYXRvckZvbnRTaXplKHByb3BzLmFzQ29sdW1uLCBwcm9wcy50aGVtZSl9O1xuYDtcblxuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+IGdldExhYmVsUmlnaHRNYXJnaW4ocHJvcHMuYXNDb2x1bW4sIHByb3BzLnRoZW1lKX07XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gZ2V0TGFiZWxCb3R0b21NYXJnaW4ocHJvcHMuYXNDb2x1bW4sIHByb3BzLnRoZW1lKX07XG5gO1xuXG4vKipcbiAqIEFzc2lnbnMgZ2l2ZW4gcHJvcHMgZGlyZWN0bHkgdG8gaW5wdXQgZWxlbWVudFxuICogQHBhcmFtIGNoaWxkXG4gKiBAcGFyYW0gcHJvcHNcbiAqL1xuY29uc3QgbW9kaWZ5Q2hpbGRyZW4gPSAoY2hpbGQsIHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVxdWlyZWQsIGF1dG9Db21wbGV0ZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgbmV3RWxlbWVudFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogYCR7Y2hpbGQucHJvcHMuY2xhc3NOYW1lIHx8ICcnfWAsXG4gICAgcmVxdWlyZWQsXG4gICAgYXV0b0NvbXBsZXRlLFxuICB9O1xuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld0VsZW1lbnRQcm9wcyk7XG59O1xuXG5jb25zdCBDb250ZW50SW5wdXRSb3cgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLCBlcnJvciwgc2hvd0Vycm9yLCBsYWJlbCwgY2xhc3NOYW1lLCByZXF1aXJlZCwgaWQsIGFzQ29sdW1uLFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGFzQ29sdW1uPXthc0NvbHVtbn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXtpZH0+XG4gICAgICA8TGFiZWxDb250YWluZXIgYXNDb2x1bW49e2FzQ29sdW1ufSBlcnJvcj17ZXJyb3J9PlxuICAgICAgICB7bGFiZWwgJiZcbiAgICAgICAgPExhYmVsIGFzQ29sdW1uPXthc0NvbHVtbn0+e2xhYmVsfVxuICAgICAgICAgIHtyZXF1aXJlZCAmJiA8UmVxdWlyZWRJbmRpY2F0b3IgYXNDb2x1bW49e2FzQ29sdW1ufT4qPC9SZXF1aXJlZEluZGljYXRvcj59XG4gICAgICAgIDwvTGFiZWw+fVxuICAgICAgPC9MYWJlbENvbnRhaW5lcj5cbiAgICAgIDxWYWx1ZUNvbnRhaW5lciBlcnJvcj17ZXJyb3J9PlxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiBtb2RpZnlDaGlsZHJlbihjaGlsZCwgcHJvcHMpKX1cbiAgICAgICAge3Nob3dFcnJvciAmJlxuICAgICAgICA8RXJyb3JDb250YWluZXIgYXNDb2x1bW49e2FzQ29sdW1ufT5cbiAgICAgICAgICB7ZXJyb3IgJiYgPEVycm9yTWVzc2FnZT57ZXJyb3J9PC9FcnJvck1lc3NhZ2U+fVxuICAgICAgICA8L0Vycm9yQ29udGFpbmVyPn1cbiAgICAgIDwvVmFsdWVDb250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5Db250ZW50SW5wdXRSb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYm9vbF0pLFxuICBzaG93RXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGFzQ29sdW1uOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkNvbnRlbnRJbnB1dFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGxhYmVsOiAnJyxcbiAgcmVxdWlyZWQ6IGZhbHNlLFxuICBjaGlsZHJlbjogbnVsbCxcbiAgZXJyb3I6ICcnLFxuICBzaG93RXJyb3I6IHRydWUsXG4gIGNsYXNzTmFtZTogJycsXG4gIGFzQ29sdW1uOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRJbnB1dFJvdztcbiJdfQ==