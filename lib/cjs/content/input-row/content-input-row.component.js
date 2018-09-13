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

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
// App imports


var getErrorStyles = function getErrorStyles(error) {
  return error ? _constants.theme.text.error.color : '';
};

var getContainerDirection = function getContainerDirection(isCol) {
  return isCol ? _constants.theme.container.inputColumn : _constants.theme.container.inputRow;
};
var Container = _styledComponents2.default.section(_templateObject, function (props) {
  return getContainerDirection(props.asColumn);
}, _constants.theme.halfGutterWidth);

var getLabelContainerWidth = function getLabelContainerWidth(isCol) {
  return isCol ? _constants.theme.inputColumn.labelWidth : _constants.theme.inputRow.labelWidth;
};
var getLabelContainerLineHeight = function getLabelContainerLineHeight(isCol) {
  return isCol ? _constants.theme.inputColumn.labelContainerLineHeight : _constants.theme.inputRow.labelContainerLineHeight;
};

var LabelContainer = _styledComponents2.default.div(_templateObject2, function (props) {
  return getLabelContainerWidth(props.asColumn);
}, function (props) {
  return getLabelContainerWidth(props.asColumn);
}, function (props) {
  return getErrorStyles(props.error);
}, function (props) {
  return getLabelContainerLineHeight(props.asColumn);
});

var ValueContainer = _styledComponents2.default.div(_templateObject3, function (props) {
  return getErrorStyles(props.error);
});

var getErrorContainerMinHeight = function getErrorContainerMinHeight(isCol) {
  return isCol ? _constants.theme.inputColumn.errorContainer.height : _constants.theme.inputRow.errorContainer.height;
};

var ErrorContainer = _styledComponents2.default.div(_templateObject4, function (props) {
  return getErrorContainerMinHeight(props.asColumn);
});

var ErrorMessage = _styledComponents2.default.span(_templateObject5, _constants.theme.text.error.color, _constants.theme.text.error.fontSize);

var getRequiredIndicatorFontSize = function getRequiredIndicatorFontSize(isCol) {
  return isCol ? _constants.theme.inputColumn.requiredIndicator.fontSize : _constants.theme.inputRow.requiredIndicator.fontSize;
};

var RequiredIndicator = _styledComponents2.default.span(_templateObject6, _constants.theme.halfGutterWidth, function (props) {
  return getRequiredIndicatorFontSize(props.asColumn);
});

var getLabelRightMargin = function getLabelRightMargin(isCol) {
  return isCol ? 0 : _constants.theme.gutterWidth;
};
var getLabelBottomMargin = function getLabelBottomMargin(isCol) {
  return isCol ? _constants.theme.gutterWidth : 0;
};

var Label = _styledComponents2.default.label(_templateObject7, function (props) {
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
  id: '',
  asColumn: false
};

exports.default = ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImdldEVycm9yU3R5bGVzIiwiZXJyb3IiLCJ0aGVtZSIsInRleHQiLCJjb2xvciIsImdldENvbnRhaW5lckRpcmVjdGlvbiIsImlzQ29sIiwiY29udGFpbmVyIiwiaW5wdXRDb2x1bW4iLCJpbnB1dFJvdyIsIkNvbnRhaW5lciIsInN0eWxlZCIsInNlY3Rpb24iLCJwcm9wcyIsImFzQ29sdW1uIiwiaGFsZkd1dHRlcldpZHRoIiwiZ2V0TGFiZWxDb250YWluZXJXaWR0aCIsImxhYmVsV2lkdGgiLCJnZXRMYWJlbENvbnRhaW5lckxpbmVIZWlnaHQiLCJsYWJlbENvbnRhaW5lckxpbmVIZWlnaHQiLCJMYWJlbENvbnRhaW5lciIsImRpdiIsIlZhbHVlQ29udGFpbmVyIiwiZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQiLCJlcnJvckNvbnRhaW5lciIsImhlaWdodCIsIkVycm9yQ29udGFpbmVyIiwiRXJyb3JNZXNzYWdlIiwic3BhbiIsImZvbnRTaXplIiwiZ2V0UmVxdWlyZWRJbmRpY2F0b3JGb250U2l6ZSIsInJlcXVpcmVkSW5kaWNhdG9yIiwiUmVxdWlyZWRJbmRpY2F0b3IiLCJnZXRMYWJlbFJpZ2h0TWFyZ2luIiwiZ3V0dGVyV2lkdGgiLCJnZXRMYWJlbEJvdHRvbU1hcmdpbiIsIkxhYmVsIiwibGFiZWwiLCJtb2RpZnlDaGlsZHJlbiIsImNoaWxkIiwicmVxdWlyZWQiLCJhdXRvQ29tcGxldGUiLCJuZXdFbGVtZW50UHJvcHMiLCJjbGFzc05hbWUiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsIkNvbnRlbnRJbnB1dFJvdyIsImNoaWxkcmVuIiwic2hvd0Vycm9yIiwiaWQiLCJDaGlsZHJlbiIsIm1hcCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNB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UUFBZ0IsVUFBVW5DLFFBQTFCLEVBQW9DLE9BQU9iLEtBQTNDO0FBQ0dvQyxlQUNEO0FBQUMsYUFBRDtBQUFBLFVBQU8sVUFBVXZCLFFBQWpCO0FBQTRCdUIsYUFBNUI7QUFDR0csb0JBQVk7QUFBQywyQkFBRDtBQUFBLFlBQW1CLFVBQVUxQixRQUE3QjtBQUFBO0FBQUE7QUFEZjtBQUZGLEtBREY7QUFPRTtBQUFDLG9CQUFEO0FBQUEsUUFBZ0IsT0FBT2IsS0FBdkI7QUFDRzJDLHNCQUFNTSxRQUFOLENBQWVDLEdBQWYsQ0FBbUJKLFFBQW5CLEVBQTZCO0FBQUEsZUFBU1QsZUFBZUMsS0FBZixFQUFzQjFCLEtBQXRCLENBQVQ7QUFBQSxPQUE3QixDQURIO0FBRUdtQyxtQkFDRDtBQUFDLHNCQUFEO0FBQUEsVUFBZ0IsVUFBVWxDLFFBQTFCO0FBQ0diLGlCQUFTO0FBQUMsc0JBQUQ7QUFBQTtBQUFlQTtBQUFmO0FBRFo7QUFIRjtBQVBGLEdBREY7QUFpQkQsQ0F0QkQ7O0FBbUNBNkMsZ0JBQWdCTSxZQUFoQixHQUErQjtBQUM3QmYsU0FBTyxFQURzQjtBQUU3QkcsWUFBVSxLQUZtQjtBQUc3Qk8sWUFBVSxJQUhtQjtBQUk3QjlDLFNBQU8sRUFKc0I7QUFLN0IrQyxhQUFXLElBTGtCO0FBTTdCTCxhQUFXLEVBTmtCO0FBTzdCTSxNQUFJLEVBUHlCO0FBUTdCbkMsWUFBVTtBQVJtQixDQUEvQjs7a0JBV2VnQyxlIiwiZmlsZSI6ImNvbnRlbnQtaW5wdXQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBnZXRFcnJvclN0eWxlcyA9IGVycm9yID0+IChlcnJvciA/IHRoZW1lLnRleHQuZXJyb3IuY29sb3IgOiAnJyk7XG5cbmNvbnN0IGdldENvbnRhaW5lckRpcmVjdGlvbiA9IGlzQ29sID0+XG4gIChpc0NvbCA/IHRoZW1lLmNvbnRhaW5lci5pbnB1dENvbHVtbiA6IHRoZW1lLmNvbnRhaW5lci5pbnB1dFJvdyk7XG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMgPT4gZ2V0Q29udGFpbmVyRGlyZWN0aW9uKHByb3BzLmFzQ29sdW1uKX07XG4gIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuY29uc3QgZ2V0TGFiZWxDb250YWluZXJXaWR0aCA9IGlzQ29sID0+XG4gIChpc0NvbCA/IHRoZW1lLmlucHV0Q29sdW1uLmxhYmVsV2lkdGggOiB0aGVtZS5pbnB1dFJvdy5sYWJlbFdpZHRoKTtcbmNvbnN0IGdldExhYmVsQ29udGFpbmVyTGluZUhlaWdodCA9IGlzQ29sID0+XG4gIChpc0NvbCA/IHRoZW1lLmlucHV0Q29sdW1uLmxhYmVsQ29udGFpbmVyTGluZUhlaWdodCA6IHRoZW1lLmlucHV0Um93LmxhYmVsQ29udGFpbmVyTGluZUhlaWdodCk7XG5cbmNvbnN0IExhYmVsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0TGFiZWxDb250YWluZXJXaWR0aChwcm9wcy5hc0NvbHVtbil9O1xuICBtaW4td2lkdGg6ICR7cHJvcHMgPT4gZ2V0TGFiZWxDb250YWluZXJXaWR0aChwcm9wcy5hc0NvbHVtbil9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBnZXRFcnJvclN0eWxlcyhwcm9wcy5lcnJvcil9O1xuICBsaW5lLWhlaWdodDogJHtwcm9wcyA9PiBnZXRMYWJlbENvbnRhaW5lckxpbmVIZWlnaHQocHJvcHMuYXNDb2x1bW4pfTtcbmA7XG5cbmNvbnN0IFZhbHVlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgPiBpbnB1dCwgPiAuZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gZ2V0RXJyb3JTdHlsZXMocHJvcHMuZXJyb3IpfTtcbiAgfVxuICBmbGV4OiAxIDEgYXV0bztcbmA7XG5cbmNvbnN0IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0ID0gaXNDb2wgPT5cbiAgKGlzQ29sID8gdGhlbWUuaW5wdXRDb2x1bW4uZXJyb3JDb250YWluZXIuaGVpZ2h0IDogdGhlbWUuaW5wdXRSb3cuZXJyb3JDb250YWluZXIuaGVpZ2h0KTtcblxuY29uc3QgRXJyb3JDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4taGVpZ2h0OiAke3Byb3BzID0+IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0KHByb3BzLmFzQ29sdW1uKX07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICR7dGhlbWUudGV4dC5lcnJvci5jb2xvcn07XG4gIGZvbnQtc2l6ZTogJHt0aGVtZS50ZXh0LmVycm9yLmZvbnRTaXplfTtcbmA7XG5cbmNvbnN0IGdldFJlcXVpcmVkSW5kaWNhdG9yRm9udFNpemUgPSBpc0NvbCA9PlxuICAoaXNDb2wgP1xuICAgIHRoZW1lLmlucHV0Q29sdW1uLnJlcXVpcmVkSW5kaWNhdG9yLmZvbnRTaXplIDogdGhlbWUuaW5wdXRSb3cucmVxdWlyZWRJbmRpY2F0b3IuZm9udFNpemUpO1xuXG5jb25zdCBSZXF1aXJlZEluZGljYXRvciA9IHN0eWxlZC5zcGFuYFxuICBtYXJnaW4tbGVmdDogJHt0aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gZ2V0UmVxdWlyZWRJbmRpY2F0b3JGb250U2l6ZShwcm9wcy5hc0NvbHVtbil9O1xuYDtcblxuY29uc3QgZ2V0TGFiZWxSaWdodE1hcmdpbiA9IGlzQ29sID0+IChpc0NvbCA/IDAgOiB0aGVtZS5ndXR0ZXJXaWR0aCk7XG5jb25zdCBnZXRMYWJlbEJvdHRvbU1hcmdpbiA9IGlzQ29sID0+IChpc0NvbCA/IHRoZW1lLmd1dHRlcldpZHRoIDogMCk7XG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gZ2V0TGFiZWxSaWdodE1hcmdpbihwcm9wcy5hc0NvbHVtbil9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IGdldExhYmVsQm90dG9tTWFyZ2luKHByb3BzLmFzQ29sdW1uKX07XG5gO1xuXG4vKipcbiAqIEFzc2lnbnMgZ2l2ZW4gcHJvcHMgZGlyZWN0bHkgdG8gaW5wdXQgZWxlbWVudFxuICogQHBhcmFtIGNoaWxkXG4gKiBAcGFyYW0gcHJvcHNcbiAqL1xuY29uc3QgbW9kaWZ5Q2hpbGRyZW4gPSAoY2hpbGQsIHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVxdWlyZWQsIGF1dG9Db21wbGV0ZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgbmV3RWxlbWVudFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogYCR7Y2hpbGQucHJvcHMuY2xhc3NOYW1lIHx8ICcnfWAsXG4gICAgcmVxdWlyZWQsXG4gICAgYXV0b0NvbXBsZXRlLFxuICB9O1xuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld0VsZW1lbnRQcm9wcyk7XG59O1xuXG5jb25zdCBDb250ZW50SW5wdXRSb3cgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLCBlcnJvciwgc2hvd0Vycm9yLCBsYWJlbCwgY2xhc3NOYW1lLCByZXF1aXJlZCwgaWQsIGFzQ29sdW1uLFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGFzQ29sdW1uPXthc0NvbHVtbn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXtpZH0+XG4gICAgICA8TGFiZWxDb250YWluZXIgYXNDb2x1bW49e2FzQ29sdW1ufSBlcnJvcj17ZXJyb3J9PlxuICAgICAgICB7bGFiZWwgJiZcbiAgICAgICAgPExhYmVsIGFzQ29sdW1uPXthc0NvbHVtbn0+e2xhYmVsfVxuICAgICAgICAgIHtyZXF1aXJlZCAmJiA8UmVxdWlyZWRJbmRpY2F0b3IgYXNDb2x1bW49e2FzQ29sdW1ufT4qPC9SZXF1aXJlZEluZGljYXRvcj59XG4gICAgICAgIDwvTGFiZWw+fVxuICAgICAgPC9MYWJlbENvbnRhaW5lcj5cbiAgICAgIDxWYWx1ZUNvbnRhaW5lciBlcnJvcj17ZXJyb3J9PlxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiBtb2RpZnlDaGlsZHJlbihjaGlsZCwgcHJvcHMpKX1cbiAgICAgICAge3Nob3dFcnJvciAmJlxuICAgICAgICA8RXJyb3JDb250YWluZXIgYXNDb2x1bW49e2FzQ29sdW1ufT5cbiAgICAgICAgICB7ZXJyb3IgJiYgPEVycm9yTWVzc2FnZT57ZXJyb3J9PC9FcnJvck1lc3NhZ2U+fVxuICAgICAgICA8L0Vycm9yQ29udGFpbmVyPn1cbiAgICAgIDwvVmFsdWVDb250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5Db250ZW50SW5wdXRSb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYm9vbF0pLFxuICBzaG93RXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhc0NvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5Db250ZW50SW5wdXRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBsYWJlbDogJycsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbiAgY2hpbGRyZW46IG51bGwsXG4gIGVycm9yOiAnJyxcbiAgc2hvd0Vycm9yOiB0cnVlLFxuICBjbGFzc05hbWU6ICcnLFxuICBpZDogJycsXG4gIGFzQ29sdW1uOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRJbnB1dFJvdztcbiJdfQ==