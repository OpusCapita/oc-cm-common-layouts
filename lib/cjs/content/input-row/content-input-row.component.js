'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  min-width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n'], ['\n  min-width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n  max-width: ', ';\n  width: 100%;\n'], ['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n  max-width: ', ';\n  width: 100%;\n']),
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
      valueWidth = props.valueWidth;


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
  asColumn: false,
  labelWidth: undefined,
  valueWidth: 'auto'
};

exports.default = ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImdldEVycm9yU3R5bGVzIiwiZXJyb3IiLCJ0aGVtZSIsInRleHQiLCJjb2xvciIsImdldENvbnRhaW5lckRpcmVjdGlvbiIsInByb3BzIiwiYXNDb2x1bW4iLCJpbnB1dENvbHVtbiIsImZsZXhEaXJlY3Rpb24iLCJpbnB1dFJvdyIsImdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0IiwiZXJyb3JDb250YWluZXIiLCJoZWlnaHQiLCJnZXRMYWJlbE1heFdpZHRoIiwibGFiZWxXaWR0aCIsInVuZGVmaW5lZCIsIkNvbnRhaW5lciIsInN0eWxlZCIsInNlY3Rpb24iLCJoYWxmR3V0dGVyV2lkdGgiLCJMYWJlbENvbnRhaW5lciIsImRpdiIsInNob3dFcnJvciIsIlZhbHVlQ29udGFpbmVyIiwid2lkdGgiLCJFcnJvckNvbnRhaW5lciIsIkVycm9yTWVzc2FnZSIsInNwYW4iLCJmb250U2l6ZSIsIlJlcXVpcmVkSW5kaWNhdG9yIiwicmVxdWlyZWRJbmRpY2F0b3IiLCJMYWJlbCIsImxhYmVsIiwiZ3V0dGVyV2lkdGgiLCJtb2RpZnlDaGlsZHJlbiIsImNoaWxkIiwicmVxdWlyZWQiLCJhdXRvQ29tcGxldGUiLCJuZXdFbGVtZW50UHJvcHMiLCJjbGFzc05hbWUiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsIkNvbnRlbnRJbnB1dFJvdyIsImNoaWxkcmVuIiwiaWQiLCJ2YWx1ZVdpZHRoIiwiQ2hpbGRyZW4iLCJtYXAiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLFNBQW1CRCxRQUFRQyxNQUFNQyxJQUFOLENBQVdGLEtBQVgsQ0FBaUJHLEtB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K0IsV0FBV2lDLFNBQTFDLEVBQXFELElBQUlLLEVBQXpEO0FBQ0U7QUFBQyxvQkFBRDtBQUFBO0FBQ0Usa0JBQVV0QyxRQURaO0FBRUUsZUFBT04sS0FGVDtBQUdFLG1CQUFXc0IsU0FIYjtBQUlFLG9CQUFZUjtBQUpkO0FBTUdrQixlQUNEO0FBQUMsYUFBRDtBQUFBLFVBQU8sVUFBVTFCLFFBQWpCO0FBQTRCMEIsYUFBNUI7QUFDR0ksb0JBQVk7QUFBQywyQkFBRDtBQUFBLFlBQW1CLFVBQVU5QixRQUE3QjtBQUFBO0FBQUE7QUFEZjtBQVBGLEtBREY7QUFZRTtBQUFDLG9CQUFEO0FBQUEsUUFBZ0IsT0FBT3VDLFVBQXZCLEVBQW1DLE9BQU83QyxLQUExQztBQUNHd0Msc0JBQU1NLFFBQU4sQ0FBZUMsR0FBZixDQUFtQkosUUFBbkIsRUFBNkI7QUFBQSxlQUFTVCxlQUFlQyxLQUFmLEVBQXNCOUIsS0FBdEIsQ0FBVDtBQUFBLE9BQTdCLENBREg7QUFFR2lCLG1CQUNEO0FBQUMsc0JBQUQ7QUFBQSxVQUFnQixVQUFVaEIsUUFBMUI7QUFDR04saUJBQVM7QUFBQyxzQkFBRDtBQUFBO0FBQWVBO0FBQWY7QUFEWjtBQUhGO0FBWkYsR0FERjtBQXNCRCxDQTNCRDs7QUEwQ0EwQyxnQkFBZ0JNLFlBQWhCLEdBQStCO0FBQzdCaEIsU0FBTyxFQURzQjtBQUU3QkksWUFBVSxLQUZtQjtBQUc3Qk8sWUFBVSxJQUhtQjtBQUk3QjNDLFNBQU8sRUFKc0I7QUFLN0JzQixhQUFXLElBTGtCO0FBTTdCaUIsYUFBVyxFQU5rQjtBQU83QmpDLFlBQVUsS0FQbUI7QUFRN0JRLGNBQVlDLFNBUmlCO0FBUzdCOEIsY0FBWTtBQVRpQixDQUEvQjs7a0JBWWVILGUiLCJmaWxlIjoiY29udGVudC1pbnB1dC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgZ2V0RXJyb3JTdHlsZXMgPSAoZXJyb3IsIHRoZW1lKSA9PiAoZXJyb3IgPyB0aGVtZS50ZXh0LmVycm9yLmNvbG9yIDogJycpO1xuXG5jb25zdCBnZXRDb250YWluZXJEaXJlY3Rpb24gPSBwcm9wcyA9PlxuICAocHJvcHMuYXNDb2x1bW4gPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5mbGV4RGlyZWN0aW9uIDogcHJvcHMudGhlbWUuaW5wdXRSb3cuZmxleERpcmVjdGlvbik7XG5cbmNvbnN0IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0ID0gcHJvcHMgPT5cbiAgKHByb3BzLmFzQ29sdW1uID9cbiAgICBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5lcnJvckNvbnRhaW5lci5oZWlnaHQgOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5lcnJvckNvbnRhaW5lci5oZWlnaHQpO1xuXG5cbmNvbnN0IGdldExhYmVsTWF4V2lkdGggPSAocHJvcHMpID0+IHtcbiAgaWYgKHByb3BzLmFzQ29sdW1uKSByZXR1cm4gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4ubGFiZWxXaWR0aDtcbiAgcmV0dXJuIHByb3BzLmxhYmVsV2lkdGggIT09IHVuZGVmaW5lZCA/IHByb3BzLmxhYmVsV2lkdGggOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5sYWJlbFdpZHRoO1xufTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IGdldENvbnRhaW5lckRpcmVjdGlvbihwcm9wcyl9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmNvbnN0IExhYmVsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWluLXdpZHRoOiAke3Byb3BzID0+IGdldExhYmVsTWF4V2lkdGgocHJvcHMpfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gZ2V0RXJyb3JTdHlsZXMocHJvcHMuZXJyb3IsIHByb3BzLnRoZW1lKX07XG4gIHBhZGRpbmctYm90dG9tOiAke3Byb3BzID0+IChwcm9wcy5zaG93RXJyb3IgJiYgIXByb3BzLmFzQ29sdW1uID8gZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQocHJvcHMpIDogMCl9O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuY29uc3QgVmFsdWVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICA+IGlucHV0LCA+IC5mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiBnZXRFcnJvclN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMudGhlbWUpfTtcbiAgfVxuICBmbGV4OiAxIDEgYXV0bztcbiAgbWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBFcnJvckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1pbi1oZWlnaHQ6ICR7cHJvcHMgPT4gZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQocHJvcHMpfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0LmVycm9yLmNvbG9yfTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuZXJyb3IuZm9udFNpemV9O1xuYDtcblxuY29uc3QgUmVxdWlyZWRJbmRpY2F0b3IgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IChwcm9wcy5hc0NvbHVtbiA/IHByb3BzLnRoZW1lLmlucHV0Q29sdW1uLnJlcXVpcmVkSW5kaWNhdG9yLmZvbnRTaXplIDogcHJvcHMudGhlbWUuaW5wdXRSb3cucmVxdWlyZWRJbmRpY2F0b3IuZm9udFNpemUpfTtcbmA7XG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLmFzQ29sdW1uID8gMCA6IHByb3BzLnRoZW1lLmd1dHRlcldpZHRoKX07XG4gIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLmFzQ29sdW1uID8gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRoIDogMCl9O1xuYDtcblxuLyoqXG4gKiBBc3NpZ25zIGdpdmVuIHByb3BzIGRpcmVjdGx5IHRvIGlucHV0IGVsZW1lbnRcbiAqIEBwYXJhbSBjaGlsZFxuICogQHBhcmFtIHByb3BzXG4gKi9cbmNvbnN0IG1vZGlmeUNoaWxkcmVuID0gKGNoaWxkLCBwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlcXVpcmVkLCBhdXRvQ29tcGxldGUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG5ld0VsZW1lbnRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6IGAke2NoaWxkLnByb3BzLmNsYXNzTmFtZSB8fCAnJ31gLFxuICAgIHJlcXVpcmVkLFxuICAgIGF1dG9Db21wbGV0ZSxcbiAgfTtcblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBuZXdFbGVtZW50UHJvcHMpO1xufTtcblxuY29uc3QgQ29udGVudElucHV0Um93ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbiwgZXJyb3IsIHNob3dFcnJvciwgbGFiZWwsIGNsYXNzTmFtZSwgcmVxdWlyZWQsIGlkLCBhc0NvbHVtbiwgbGFiZWxXaWR0aCwgdmFsdWVXaWR0aCxcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBhc0NvbHVtbj17YXNDb2x1bW59IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD17aWR9PlxuICAgICAgPExhYmVsQ29udGFpbmVyXG4gICAgICAgIGFzQ29sdW1uPXthc0NvbHVtbn1cbiAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgbGFiZWxXaWR0aD17bGFiZWxXaWR0aH1cbiAgICAgID5cbiAgICAgICAge2xhYmVsICYmXG4gICAgICAgIDxMYWJlbCBhc0NvbHVtbj17YXNDb2x1bW59PntsYWJlbH1cbiAgICAgICAgICB7cmVxdWlyZWQgJiYgPFJlcXVpcmVkSW5kaWNhdG9yIGFzQ29sdW1uPXthc0NvbHVtbn0+KjwvUmVxdWlyZWRJbmRpY2F0b3I+fVxuICAgICAgICA8L0xhYmVsPn1cbiAgICAgIDwvTGFiZWxDb250YWluZXI+XG4gICAgICA8VmFsdWVDb250YWluZXIgd2lkdGg9e3ZhbHVlV2lkdGh9IGVycm9yPXtlcnJvcn0+XG4gICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IG1vZGlmeUNoaWxkcmVuKGNoaWxkLCBwcm9wcykpfVxuICAgICAgICB7c2hvd0Vycm9yICYmXG4gICAgICAgIDxFcnJvckNvbnRhaW5lciBhc0NvbHVtbj17YXNDb2x1bW59PlxuICAgICAgICAgIHtlcnJvciAmJiA8RXJyb3JNZXNzYWdlPntlcnJvcn08L0Vycm9yTWVzc2FnZT59XG4gICAgICAgIDwvRXJyb3JDb250YWluZXI+fVxuICAgICAgPC9WYWx1ZUNvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkNvbnRlbnRJbnB1dFJvdy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ib29sXSksXG4gIHNob3dFcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYXNDb2x1bW46IFByb3BUeXBlcy5ib29sLFxuICBsYWJlbFdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIHZhbHVlV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbn07XG5cbkNvbnRlbnRJbnB1dFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGxhYmVsOiAnJyxcbiAgcmVxdWlyZWQ6IGZhbHNlLFxuICBjaGlsZHJlbjogbnVsbCxcbiAgZXJyb3I6ICcnLFxuICBzaG93RXJyb3I6IHRydWUsXG4gIGNsYXNzTmFtZTogJycsXG4gIGFzQ29sdW1uOiBmYWxzZSxcbiAgbGFiZWxXaWR0aDogdW5kZWZpbmVkLFxuICB2YWx1ZVdpZHRoOiAnYXV0bycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50SW5wdXRSb3c7XG4iXX0=