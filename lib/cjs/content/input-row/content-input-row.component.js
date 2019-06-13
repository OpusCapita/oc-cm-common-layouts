'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n'], ['\n  width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  > input,\n  > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n  max-width: ', ';\n  width: 100%;\n'], ['\n  > input,\n  > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n  max-width: ', ';\n  width: 100%;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n'], ['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  color: ', ';\n  font-size: ', ';\n'], ['\n  color: ', ';\n  font-size: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n  font-size: ', ';\n'], ['\n  margin-left: ', ';\n  font-size: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  margin-right: ', ';\n  margin-bottom: ', ';\n'], ['\n  margin-right: ', ';\n  margin-bottom: ', ';\n']),
    _templateObject8 = _taggedTemplateLiteralLoose(['\n  display: flex;\n  align-items: center;\n'], ['\n  display: flex;\n  align-items: center;\n']),
    _templateObject9 = _taggedTemplateLiteralLoose(['\n  padding-left: ', ';\n  flex: 1 1 100%;\n'], ['\n  padding-left: ', ';\n  flex: 1 1 100%;\n']);

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

var Container = _styledComponents2.default.section(_templateObject, function (props) {
  return getContainerDirection(props);
}, function (props) {
  return props.theme.halfGutterWidth;
});

var LabelContainer = _styledComponents2.default.div(_templateObject2, function (props) {
  return getLabelMaxWidth(props);
}, function (props) {
  return getErrorStyles(props.error, props.theme);
}, function (props) {
  return props.showError && !props.asColumn ? getErrorContainerMinHeight(props) : 0;
});

var ValueContainer = _styledComponents2.default.div(_templateObject3, function (props) {
  return getErrorStyles(props.error, props.theme);
}, function (props) {
  return props.width;
});

var ErrorContainer = _styledComponents2.default.div(_templateObject4, function (props) {
  return getErrorContainerMinHeight(props);
});

var ErrorMessage = _styledComponents2.default.span(_templateObject5, function (props) {
  return props.theme.text.error.color;
}, function (props) {
  return props.theme.text.error.fontSize;
});

var RequiredIndicator = _styledComponents2.default.span(_templateObject6, function (props) {
  return props.theme.halfGutterWidth;
}, function (props) {
  return props.asColumn ? props.theme.inputColumn.requiredIndicator.fontSize : props.theme.inputRow.requiredIndicator.fontSize;
});

var Label = _styledComponents2.default.label(_templateObject7, function (props) {
  return props.asColumn ? 0 : props.theme.gutterWidth;
}, function (props) {
  return props.asColumn ? props.theme.halfGutterWidth : 0;
});

var FieldContainer = _styledComponents2.default.div(_templateObject8);

var Append = _styledComponents2.default.div(_templateObject9, function (props) {
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
      asColumn = props.asColumn,
      labelWidth = props.labelWidth,
      valueWidth = props.valueWidth,
      append = props.append;


  return _react2.default.createElement(
    Container,
    { asColumn: asColumn, className: className, id: id },
    _react2.default.createElement(
      LabelContainer,
      {
        asColumn: asColumn,
        error: error,
        showError: showError,
        labelWidth: labelWidth
      },
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
      { width: valueWidth, error: error },
      _react2.default.createElement(
        FieldContainer,
        { append: append },
        _react2.default.Children.map(children, function (child) {
          return modifyChildren(child, props);
        }),
        append && _react2.default.createElement(
          Append,
          null,
          append
        )
      ),
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
  asColumn: false,
  labelWidth: undefined,
  valueWidth: 'auto',
  append: undefined
};

exports.default = ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImdldEVycm9yU3R5bGVzIiwiZXJyb3IiLCJ0aGVtZSIsInRleHQiLCJjb2xvciIsImdldENvbnRhaW5lckRpcmVjdGlvbiIsInByb3BzIiwiYXNDb2x1bW4iLCJpbnB1dENvbHVtbiIsImZsZXhEaXJlY3Rpb24iLCJpbnB1dFJvdyIsImdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0IiwiZXJyb3JDb250YWluZXIiLCJoZWlnaHQiLCJnZXRMYWJlbE1heFdpZHRoIiwibGFiZWxXaWR0aCIsInVuZGVmaW5lZCIsIkNvbnRhaW5lciIsInN0eWxlZCIsInNlY3Rpb24iLCJoYWxmR3V0dGVyV2lkdGgiLCJMYWJlbENvbnRhaW5lciIsImRpdiIsInNob3dFcnJvciIsIlZhbHVlQ29udGFpbmVyIiwid2lkdGgiLCJFcnJvckNvbnRhaW5lciIsIkVycm9yTWVzc2FnZSIsInNwYW4iLCJmb250U2l6ZSIsIlJlcXVpcmVkSW5kaWNhdG9yIiwicmVxdWlyZWRJbmRpY2F0b3IiLCJMYWJlbCIsImxhYmVsIiwiZ3V0dGVyV2lkdGgiLCJGaWVsZENvbnRhaW5lciIsIkFwcGVuZCIsIm1vZGlmeUNoaWxkcmVuIiwiY2hpbGQiLCJyZXF1aXJlZCIsImF1dG9Db21wbGV0ZSIsIm5ld0VsZW1lbnRQcm9wcyIsImNsYXNzTmFtZSIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwiQ29udGVudElucHV0Um93IiwiY2hpbGRyZW4iLCJpZCIsInZhbHVlV2lkdGgiLCJhcHBlbmQiLCJDaGlsZHJlbiIsIm1hcCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxTQUFtQkQs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QUU3Qk0sWUFBVSxLQUZtQjtBQUc3Qk8sWUFBVSxJQUhtQjtBQUk3QjdDLFNBQU8sRUFKc0I7QUFLN0JzQixhQUFXLElBTGtCO0FBTTdCbUIsYUFBVyxFQU5rQjtBQU83Qm5DLFlBQVUsS0FQbUI7QUFRN0JRLGNBQVlDLFNBUmlCO0FBUzdCZ0MsY0FBWSxNQVRpQjtBQVU3QkMsVUFBUWpDO0FBVnFCLENBQS9COztrQkFhZTZCLGUiLCJmaWxlIjoiY29udGVudC1pbnB1dC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgZ2V0RXJyb3JTdHlsZXMgPSAoZXJyb3IsIHRoZW1lKSA9PiAoZXJyb3IgPyB0aGVtZS50ZXh0LmVycm9yLmNvbG9yIDogJycpO1xuXG5jb25zdCBnZXRDb250YWluZXJEaXJlY3Rpb24gPSBwcm9wcyA9PlxuICAocHJvcHMuYXNDb2x1bW4gPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5mbGV4RGlyZWN0aW9uIDogcHJvcHMudGhlbWUuaW5wdXRSb3cuZmxleERpcmVjdGlvbik7XG5cbmNvbnN0IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0ID0gcHJvcHMgPT5cbiAgKHByb3BzLmFzQ29sdW1uXG4gICAgPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5lcnJvckNvbnRhaW5lci5oZWlnaHRcbiAgICA6IHByb3BzLnRoZW1lLmlucHV0Um93LmVycm9yQ29udGFpbmVyLmhlaWdodCk7XG5cbmNvbnN0IGdldExhYmVsTWF4V2lkdGggPSAocHJvcHMpID0+IHtcbiAgaWYgKHByb3BzLmFzQ29sdW1uKSByZXR1cm4gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4ubGFiZWxXaWR0aDtcbiAgcmV0dXJuIHByb3BzLmxhYmVsV2lkdGggIT09IHVuZGVmaW5lZCA/IHByb3BzLmxhYmVsV2lkdGggOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5sYWJlbFdpZHRoO1xufTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IGdldENvbnRhaW5lckRpcmVjdGlvbihwcm9wcyl9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmNvbnN0IExhYmVsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0TGFiZWxNYXhXaWR0aChwcm9wcyl9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBnZXRFcnJvclN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMudGhlbWUpfTtcbiAgcGFkZGluZy1ib3R0b206ICR7cHJvcHMgPT5cbiAgICAocHJvcHMuc2hvd0Vycm9yICYmICFwcm9wcy5hc0NvbHVtbiA/IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0KHByb3BzKSA6IDApfTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IFZhbHVlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgPiBpbnB1dCxcbiAgPiAuZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gZ2V0RXJyb3JTdHlsZXMocHJvcHMuZXJyb3IsIHByb3BzLnRoZW1lKX07XG4gIH1cbiAgZmxleDogMSAxIGF1dG87XG4gIG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuY29uc3QgRXJyb3JDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4taGVpZ2h0OiAke3Byb3BzID0+IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0KHByb3BzKX07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dC5lcnJvci5jb2xvcn07XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0LmVycm9yLmZvbnRTaXplfTtcbmA7XG5cbmNvbnN0IFJlcXVpcmVkSW5kaWNhdG9yID0gc3R5bGVkLnNwYW5gXG4gIG1hcmdpbi1sZWZ0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIGZvbnQtc2l6ZTogJHtwcm9wcyA9PlxuICAgIChwcm9wcy5hc0NvbHVtblxuICAgICAgPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5yZXF1aXJlZEluZGljYXRvci5mb250U2l6ZVxuICAgICAgOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5yZXF1aXJlZEluZGljYXRvci5mb250U2l6ZSl9O1xuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PiAocHJvcHMuYXNDb2x1bW4gPyAwIDogcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGgpfTtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMuYXNDb2x1bW4gPyBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGggOiAwKX07XG5gO1xuXG5jb25zdCBGaWVsZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBBcHBlbmQgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBmbGV4OiAxIDEgMTAwJTtcbmA7XG5cbi8qKlxuICogQXNzaWducyBnaXZlbiBwcm9wcyBkaXJlY3RseSB0byBpbnB1dCBlbGVtZW50XG4gKiBAcGFyYW0gY2hpbGRcbiAqIEBwYXJhbSBwcm9wc1xuICovXG5jb25zdCBtb2RpZnlDaGlsZHJlbiA9IChjaGlsZCwgcHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXF1aXJlZCwgYXV0b0NvbXBsZXRlIH0gPSBwcm9wcztcblxuICBjb25zdCBuZXdFbGVtZW50UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiBgJHtjaGlsZC5wcm9wcy5jbGFzc05hbWUgfHwgJyd9YCxcbiAgICByZXF1aXJlZCxcbiAgICBhdXRvQ29tcGxldGUsXG4gIH07XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgbmV3RWxlbWVudFByb3BzKTtcbn07XG5cbmNvbnN0IENvbnRlbnRJbnB1dFJvdyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sXG4gICAgZXJyb3IsXG4gICAgc2hvd0Vycm9yLFxuICAgIGxhYmVsLFxuICAgIGNsYXNzTmFtZSxcbiAgICByZXF1aXJlZCxcbiAgICBpZCxcbiAgICBhc0NvbHVtbixcbiAgICBsYWJlbFdpZHRoLFxuICAgIHZhbHVlV2lkdGgsXG4gICAgYXBwZW5kLFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGFzQ29sdW1uPXthc0NvbHVtbn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXtpZH0+XG4gICAgICA8TGFiZWxDb250YWluZXJcbiAgICAgICAgYXNDb2x1bW49e2FzQ29sdW1ufVxuICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgICBsYWJlbFdpZHRoPXtsYWJlbFdpZHRofVxuICAgICAgPlxuICAgICAgICB7bGFiZWwgJiYgKFxuICAgICAgICAgIDxMYWJlbCBhc0NvbHVtbj17YXNDb2x1bW59PlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAge3JlcXVpcmVkICYmIDxSZXF1aXJlZEluZGljYXRvciBhc0NvbHVtbj17YXNDb2x1bW59Pio8L1JlcXVpcmVkSW5kaWNhdG9yPn1cbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICApfVxuICAgICAgPC9MYWJlbENvbnRhaW5lcj5cbiAgICAgIDxWYWx1ZUNvbnRhaW5lciB3aWR0aD17dmFsdWVXaWR0aH0gZXJyb3I9e2Vycm9yfT5cbiAgICAgICAgPEZpZWxkQ29udGFpbmVyIGFwcGVuZD17YXBwZW5kfT5cbiAgICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiBtb2RpZnlDaGlsZHJlbihjaGlsZCwgcHJvcHMpKX1cbiAgICAgICAgICB7YXBwZW5kICYmIDxBcHBlbmQ+e2FwcGVuZH08L0FwcGVuZD59XG4gICAgICAgIDwvRmllbGRDb250YWluZXI+XG4gICAgICAgIHtzaG93RXJyb3IgJiYgKFxuICAgICAgICAgIDxFcnJvckNvbnRhaW5lciBhc0NvbHVtbj17YXNDb2x1bW59PlxuICAgICAgICAgICAge2Vycm9yICYmIDxFcnJvck1lc3NhZ2U+e2Vycm9yfTwvRXJyb3JNZXNzYWdlPn1cbiAgICAgICAgICA8L0Vycm9yQ29udGFpbmVyPlxuICAgICAgICApfVxuICAgICAgPC9WYWx1ZUNvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkNvbnRlbnRJbnB1dFJvdy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ib29sXSksXG4gIHNob3dFcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYXNDb2x1bW46IFByb3BUeXBlcy5ib29sLFxuICBsYWJlbFdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIHZhbHVlV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgYXBwZW5kOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxufTtcblxuQ29udGVudElucHV0Um93LmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFiZWw6ICcnLFxuICByZXF1aXJlZDogZmFsc2UsXG4gIGNoaWxkcmVuOiBudWxsLFxuICBlcnJvcjogJycsXG4gIHNob3dFcnJvcjogdHJ1ZSxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgYXNDb2x1bW46IGZhbHNlLFxuICBsYWJlbFdpZHRoOiB1bmRlZmluZWQsXG4gIHZhbHVlV2lkdGg6ICdhdXRvJyxcbiAgYXBwZW5kOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50SW5wdXRSb3c7XG4iXX0=