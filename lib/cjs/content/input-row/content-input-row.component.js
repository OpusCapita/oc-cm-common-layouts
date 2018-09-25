'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: ', ';\n  min-width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n'], ['\n  width: ', ';\n  min-width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n']),
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
  return isCol ? theme.halfGutterWidth : 0;
};

var Container = _styledComponents2.default.section(_templateObject, function (props) {
  return getContainerDirection(props.asColumn, props.theme);
}, function (props) {
  return props.theme.halfGutterWidth;
});

var LabelContainer = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.asColumn ? props.theme.inputColumn.labelWidth : props.theme.inputRow.labelWidth;
}, function (props) {
  return props.asColumn ? props.theme.inputColumn.labelWidth : props.theme.inputRow.labelWidth;
}, function (props) {
  return getErrorStyles(props.error, props.theme);
}, function (props) {
  return props.showError && !props.asColumn ? getErrorContainerMinHeight(props.asColumn, props.theme) : 0;
});

var ValueContainer = _styledComponents2.default.div(_templateObject3, function (props) {
  return getErrorStyles(props.error, props.theme);
});

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
      { asColumn: asColumn, error: error, showError: showError },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImdldEVycm9yU3R5bGVzIiwiZXJyb3IiLCJ0aGVtZSIsInRleHQiLCJjb2xvciIsImdldENvbnRhaW5lckRpcmVjdGlvbiIsImlzQ29sIiwiY29udGFpbmVyIiwiaW5wdXRDb2x1bW4iLCJpbnB1dFJvdyIsImdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0IiwiZXJyb3JDb250YWluZXIiLCJoZWlnaHQiLCJnZXRSZXF1aXJlZEluZGljYXRvckZvbnRTaXplIiwicmVxdWlyZWRJbmRpY2F0b3IiLCJmb250U2l6ZSIsImdldExhYmVsUmlnaHRNYXJnaW4iLCJndXR0ZXJXaWR0aCIsImdldExhYmVsQm90dG9tTWFyZ2luIiwiaGFsZkd1dHRlcldpZHRoIiwiQ29udGFpbmVyIiwic3R5bGVkIiwic2VjdGlvbiIsInByb3BzIiwiYXNDb2x1bW4iLCJMYWJlbENvbnRhaW5lciIsImRpdiIsImxhYmVsV2lkdGgiLCJzaG93RXJyb3IiLCJWYWx1ZUNvbnRhaW5lciIsIkVycm9yQ29udGFpbmVyIiwiRXJyb3JNZXNzYWdlIiwic3BhbiIsIlJlcXVpcmVkSW5kaWNhdG9yIiwiTGFiZWwiLCJsYWJlbCIsIm1vZGlmeUNoaWxkcmVuIiwiY2hpbGQiLCJyZXF1aXJlZCIsImF1dG9Db21wbGV0ZSIsIm5ld0VsZW1lbnRQcm9wcyIsImNsYXNzTmFtZSIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwiQ29udGVudElucHV0Um93IiwiY2hpbGRyZW4iLCJpZCIsIkNoaWxkcmVuIiwibWFwIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxTQUFtQkQsUUFBUUMsTUFB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ZSI6ImNvbnRlbnQtaW5wdXQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IGdldEVycm9yU3R5bGVzID0gKGVycm9yLCB0aGVtZSkgPT4gKGVycm9yID8gdGhlbWUudGV4dC5lcnJvci5jb2xvciA6ICcnKTtcblxuY29uc3QgZ2V0Q29udGFpbmVyRGlyZWN0aW9uID0gKGlzQ29sLCB0aGVtZSkgPT5cbiAgKGlzQ29sID8gdGhlbWUuY29udGFpbmVyLmlucHV0Q29sdW1uIDogdGhlbWUuY29udGFpbmVyLmlucHV0Um93KTtcblxuY29uc3QgZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQgPSAoaXNDb2wsIHRoZW1lKSA9PlxuICAoaXNDb2wgPyB0aGVtZS5pbnB1dENvbHVtbi5lcnJvckNvbnRhaW5lci5oZWlnaHQgOiB0aGVtZS5pbnB1dFJvdy5lcnJvckNvbnRhaW5lci5oZWlnaHQpO1xuXG5jb25zdCBnZXRSZXF1aXJlZEluZGljYXRvckZvbnRTaXplID0gKGlzQ29sLCB0aGVtZSkgPT5cbiAgKGlzQ29sID9cbiAgICB0aGVtZS5pbnB1dENvbHVtbi5yZXF1aXJlZEluZGljYXRvci5mb250U2l6ZSA6IHRoZW1lLmlucHV0Um93LnJlcXVpcmVkSW5kaWNhdG9yLmZvbnRTaXplKTtcblxuY29uc3QgZ2V0TGFiZWxSaWdodE1hcmdpbiA9IChpc0NvbCwgdGhlbWUpID0+IChpc0NvbCA/IDAgOiB0aGVtZS5ndXR0ZXJXaWR0aCk7XG5jb25zdCBnZXRMYWJlbEJvdHRvbU1hcmdpbiA9IChpc0NvbCwgdGhlbWUpID0+IChpc0NvbCA/IHRoZW1lLmhhbGZHdXR0ZXJXaWR0aCA6IDApO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMgPT4gZ2V0Q29udGFpbmVyRGlyZWN0aW9uKHByb3BzLmFzQ29sdW1uLCBwcm9wcy50aGVtZSl9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmNvbnN0IExhYmVsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLmFzQ29sdW1uID8gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4ubGFiZWxXaWR0aCA6IHByb3BzLnRoZW1lLmlucHV0Um93LmxhYmVsV2lkdGgpfTtcbiAgbWluLXdpZHRoOiAke3Byb3BzID0+IChwcm9wcy5hc0NvbHVtbiA/IHByb3BzLnRoZW1lLmlucHV0Q29sdW1uLmxhYmVsV2lkdGggOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5sYWJlbFdpZHRoKX07XG4gIGNvbG9yOiAke3Byb3BzID0+IGdldEVycm9yU3R5bGVzKHByb3BzLmVycm9yLCBwcm9wcy50aGVtZSl9O1xuICBwYWRkaW5nLWJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMuc2hvd0Vycm9yICYmICFwcm9wcy5hc0NvbHVtbiA/IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0KHByb3BzLmFzQ29sdW1uLCBwcm9wcy50aGVtZSkgOiAwKX07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBWYWx1ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gID4gaW5wdXQsID4gLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IGdldEVycm9yU3R5bGVzKHByb3BzLmVycm9yLCBwcm9wcy50aGVtZSl9O1xuICB9XG4gIGZsZXg6IDEgMSBhdXRvO1xuYDtcblxuY29uc3QgRXJyb3JDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4taGVpZ2h0OiAke3Byb3BzID0+IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0KHByb3BzLmFzQ29sdW1uLCBwcm9wcy50aGVtZSl9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuZXJyb3IuY29sb3J9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dC5lcnJvci5mb250U2l6ZX07XG5gO1xuXG5jb25zdCBSZXF1aXJlZEluZGljYXRvciA9IHN0eWxlZC5zcGFuYFxuICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gZ2V0UmVxdWlyZWRJbmRpY2F0b3JGb250U2l6ZShwcm9wcy5hc0NvbHVtbiwgcHJvcHMudGhlbWUpfTtcbmA7XG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gZ2V0TGFiZWxSaWdodE1hcmdpbihwcm9wcy5hc0NvbHVtbiwgcHJvcHMudGhlbWUpfTtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiBnZXRMYWJlbEJvdHRvbU1hcmdpbihwcm9wcy5hc0NvbHVtbiwgcHJvcHMudGhlbWUpfTtcbmA7XG5cbi8qKlxuICogQXNzaWducyBnaXZlbiBwcm9wcyBkaXJlY3RseSB0byBpbnB1dCBlbGVtZW50XG4gKiBAcGFyYW0gY2hpbGRcbiAqIEBwYXJhbSBwcm9wc1xuICovXG5jb25zdCBtb2RpZnlDaGlsZHJlbiA9IChjaGlsZCwgcHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXF1aXJlZCwgYXV0b0NvbXBsZXRlIH0gPSBwcm9wcztcblxuICBjb25zdCBuZXdFbGVtZW50UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiBgJHtjaGlsZC5wcm9wcy5jbGFzc05hbWUgfHwgJyd9YCxcbiAgICByZXF1aXJlZCxcbiAgICBhdXRvQ29tcGxldGUsXG4gIH07XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgbmV3RWxlbWVudFByb3BzKTtcbn07XG5cbmNvbnN0IENvbnRlbnRJbnB1dFJvdyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sIGVycm9yLCBzaG93RXJyb3IsIGxhYmVsLCBjbGFzc05hbWUsIHJlcXVpcmVkLCBpZCwgYXNDb2x1bW4sXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgYXNDb2x1bW49e2FzQ29sdW1ufSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e2lkfT5cbiAgICAgIDxMYWJlbENvbnRhaW5lciBhc0NvbHVtbj17YXNDb2x1bW59IGVycm9yPXtlcnJvcn0gc2hvd0Vycm9yPXtzaG93RXJyb3J9PlxuICAgICAgICB7bGFiZWwgJiZcbiAgICAgICAgPExhYmVsIGFzQ29sdW1uPXthc0NvbHVtbn0+e2xhYmVsfVxuICAgICAgICAgIHtyZXF1aXJlZCAmJiA8UmVxdWlyZWRJbmRpY2F0b3IgYXNDb2x1bW49e2FzQ29sdW1ufT4qPC9SZXF1aXJlZEluZGljYXRvcj59XG4gICAgICAgIDwvTGFiZWw+fVxuICAgICAgPC9MYWJlbENvbnRhaW5lcj5cbiAgICAgIDxWYWx1ZUNvbnRhaW5lciBlcnJvcj17ZXJyb3J9PlxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiBtb2RpZnlDaGlsZHJlbihjaGlsZCwgcHJvcHMpKX1cbiAgICAgICAge3Nob3dFcnJvciAmJlxuICAgICAgICA8RXJyb3JDb250YWluZXIgYXNDb2x1bW49e2FzQ29sdW1ufT5cbiAgICAgICAgICB7ZXJyb3IgJiYgPEVycm9yTWVzc2FnZT57ZXJyb3J9PC9FcnJvck1lc3NhZ2U+fVxuICAgICAgICA8L0Vycm9yQ29udGFpbmVyPn1cbiAgICAgIDwvVmFsdWVDb250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5Db250ZW50SW5wdXRSb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYm9vbF0pLFxuICBzaG93RXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGFzQ29sdW1uOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkNvbnRlbnRJbnB1dFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGxhYmVsOiAnJyxcbiAgcmVxdWlyZWQ6IGZhbHNlLFxuICBjaGlsZHJlbjogbnVsbCxcbiAgZXJyb3I6ICcnLFxuICBzaG93RXJyb3I6IHRydWUsXG4gIGNsYXNzTmFtZTogJycsXG4gIGFzQ29sdW1uOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRJbnB1dFJvdztcbiJdfQ==