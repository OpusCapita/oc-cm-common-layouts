'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n'], ['\n  width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  > div > input,\n  > div > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n  max-width: ', ';\n'], ['\n  > div > input,\n  > div > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n  max-width: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n'], ['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  color: ', ';\n  font-size: ', ';\n'], ['\n  color: ', ';\n  font-size: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n  font-size: ', ';\n'], ['\n  margin-left: ', ';\n  font-size: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  margin-right: ', ';\n  margin-bottom: ', ';\n'], ['\n  margin-right: ', ';\n  margin-bottom: ', ';\n']),
    _templateObject8 = _taggedTemplateLiteralLoose(['\n  display: ', ';\n  width: 100%;\n  align-items: center;\n'], ['\n  display: ', ';\n  width: 100%;\n  align-items: center;\n']),
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

var FieldContainer = _styledComponents2.default.div(_templateObject8, function (props) {
  return props.append ? 'flex' : 'block';
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImdldEVycm9yU3R5bGVzIiwiZXJyb3IiLCJ0aGVtZSIsInRleHQiLCJjb2xvciIsImdldENvbnRhaW5lckRpcmVjdGlvbiIsInByb3BzIiwiYXNDb2x1bW4iLCJpbnB1dENvbHVtbiIsImZsZXhEaXJlY3Rpb24iLCJpbnB1dFJvdyIsImdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0IiwiZXJyb3JDb250YWluZXIiLCJoZWlnaHQiLCJnZXRMYWJlbE1heFdpZHRoIiwibGFiZWxXaWR0aCIsInVuZGVmaW5lZCIsIkNvbnRhaW5lciIsInN0eWxlZCIsInNlY3Rpb24iLCJoYWxmR3V0dGVyV2lkdGgiLCJMYWJlbENvbnRhaW5lciIsImRpdiIsInNob3dFcnJvciIsIlZhbHVlQ29udGFpbmVyIiwid2lkdGgiLCJFcnJvckNvbnRhaW5lciIsIkVycm9yTWVzc2FnZSIsInNwYW4iLCJmb250U2l6ZSIsIlJlcXVpcmVkSW5kaWNhdG9yIiwicmVxdWlyZWRJbmRpY2F0b3IiLCJMYWJlbCIsImxhYmVsIiwiZ3V0dGVyV2lkdGgiLCJGaWVsZENvbnRhaW5lciIsImFwcGVuZCIsIkFwcGVuZCIsIm1vZGlmeUNoaWxkcmVuIiwiY2hpbGQiLCJyZXF1aXJlZCIsImF1dG9Db21wbGV0ZSIsIm5ld0VsZW1lbnRQcm9wcyIsImNsYXNzTmFtZSIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwiQ29udGVudElucHV0Um93IiwiY2hpbGRyZW4iLCJpZCIsInZhbHVlV2lkdGgiLCJDaGlsZHJlbiIsIm1hcCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxTQUFtQkQs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QTRCRCxDQTNDRDs7QUEyREE2QyxnQkFBZ0JNLFlBQWhCLEdBQStCO0FBQzdCbkIsU0FBTyxFQURzQjtBQUU3Qk8sWUFBVSxLQUZtQjtBQUc3Qk8sWUFBVSxJQUhtQjtBQUk3QjlDLFNBQU8sRUFKc0I7QUFLN0JzQixhQUFXLElBTGtCO0FBTTdCb0IsYUFBVyxFQU5rQjtBQU83QnBDLFlBQVUsS0FQbUI7QUFRN0JRLGNBQVlDLFNBUmlCO0FBUzdCaUMsY0FBWSxNQVRpQjtBQVU3QmIsVUFBUXBCO0FBVnFCLENBQS9COztrQkFhZThCLGUiLCJmaWxlIjoiY29udGVudC1pbnB1dC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgZ2V0RXJyb3JTdHlsZXMgPSAoZXJyb3IsIHRoZW1lKSA9PiAoZXJyb3IgPyB0aGVtZS50ZXh0LmVycm9yLmNvbG9yIDogJycpO1xuXG5jb25zdCBnZXRDb250YWluZXJEaXJlY3Rpb24gPSBwcm9wcyA9PlxuICAocHJvcHMuYXNDb2x1bW4gPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5mbGV4RGlyZWN0aW9uIDogcHJvcHMudGhlbWUuaW5wdXRSb3cuZmxleERpcmVjdGlvbik7XG5cbmNvbnN0IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0ID0gcHJvcHMgPT5cbiAgKHByb3BzLmFzQ29sdW1uXG4gICAgPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5lcnJvckNvbnRhaW5lci5oZWlnaHRcbiAgICA6IHByb3BzLnRoZW1lLmlucHV0Um93LmVycm9yQ29udGFpbmVyLmhlaWdodCk7XG5cbmNvbnN0IGdldExhYmVsTWF4V2lkdGggPSAocHJvcHMpID0+IHtcbiAgaWYgKHByb3BzLmFzQ29sdW1uKSByZXR1cm4gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4ubGFiZWxXaWR0aDtcbiAgcmV0dXJuIHByb3BzLmxhYmVsV2lkdGggIT09IHVuZGVmaW5lZCA/IHByb3BzLmxhYmVsV2lkdGggOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5sYWJlbFdpZHRoO1xufTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IGdldENvbnRhaW5lckRpcmVjdGlvbihwcm9wcyl9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmNvbnN0IExhYmVsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0TGFiZWxNYXhXaWR0aChwcm9wcyl9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBnZXRFcnJvclN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMudGhlbWUpfTtcbiAgcGFkZGluZy1ib3R0b206ICR7cHJvcHMgPT5cbiAgICAocHJvcHMuc2hvd0Vycm9yICYmICFwcm9wcy5hc0NvbHVtbiA/IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0KHByb3BzKSA6IDApfTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IFZhbHVlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgPiBkaXYgPiBpbnB1dCxcbiAgPiBkaXYgPiAuZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gZ2V0RXJyb3JTdHlsZXMocHJvcHMuZXJyb3IsIHByb3BzLnRoZW1lKX07XG4gIH1cbiAgZmxleDogMSAxIGF1dG87XG4gIG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XG5gO1xuXG5jb25zdCBFcnJvckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1pbi1oZWlnaHQ6ICR7cHJvcHMgPT4gZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQocHJvcHMpfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0LmVycm9yLmNvbG9yfTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuZXJyb3IuZm9udFNpemV9O1xuYDtcblxuY29uc3QgUmVxdWlyZWRJbmRpY2F0b3IgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+XG4gICAgKHByb3BzLmFzQ29sdW1uXG4gICAgICA/IHByb3BzLnRoZW1lLmlucHV0Q29sdW1uLnJlcXVpcmVkSW5kaWNhdG9yLmZvbnRTaXplXG4gICAgICA6IHByb3BzLnRoZW1lLmlucHV0Um93LnJlcXVpcmVkSW5kaWNhdG9yLmZvbnRTaXplKX07XG5gO1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5hc0NvbHVtbiA/IDAgOiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aCl9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IChwcm9wcy5hc0NvbHVtbiA/IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aCA6IDApfTtcbmA7XG5cbmNvbnN0IEZpZWxkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogJHtwcm9wcyA9PiAocHJvcHMuYXBwZW5kID8gJ2ZsZXgnIDogJ2Jsb2NrJyl9O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEFwcGVuZCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aH07XG4gIGZsZXg6IDEgMSAxMDAlO1xuYDtcblxuLyoqXG4gKiBBc3NpZ25zIGdpdmVuIHByb3BzIGRpcmVjdGx5IHRvIGlucHV0IGVsZW1lbnRcbiAqIEBwYXJhbSBjaGlsZFxuICogQHBhcmFtIHByb3BzXG4gKi9cbmNvbnN0IG1vZGlmeUNoaWxkcmVuID0gKGNoaWxkLCBwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlcXVpcmVkLCBhdXRvQ29tcGxldGUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG5ld0VsZW1lbnRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6IGAke2NoaWxkLnByb3BzLmNsYXNzTmFtZSB8fCAnJ31gLFxuICAgIHJlcXVpcmVkLFxuICAgIGF1dG9Db21wbGV0ZSxcbiAgfTtcblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBuZXdFbGVtZW50UHJvcHMpO1xufTtcblxuY29uc3QgQ29udGVudElucHV0Um93ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICBlcnJvcixcbiAgICBzaG93RXJyb3IsXG4gICAgbGFiZWwsXG4gICAgY2xhc3NOYW1lLFxuICAgIHJlcXVpcmVkLFxuICAgIGlkLFxuICAgIGFzQ29sdW1uLFxuICAgIGxhYmVsV2lkdGgsXG4gICAgdmFsdWVXaWR0aCxcbiAgICBhcHBlbmQsXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgYXNDb2x1bW49e2FzQ29sdW1ufSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e2lkfT5cbiAgICAgIDxMYWJlbENvbnRhaW5lclxuICAgICAgICBhc0NvbHVtbj17YXNDb2x1bW59XG4gICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgIGxhYmVsV2lkdGg9e2xhYmVsV2lkdGh9XG4gICAgICA+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPExhYmVsIGFzQ29sdW1uPXthc0NvbHVtbn0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICB7cmVxdWlyZWQgJiYgPFJlcXVpcmVkSW5kaWNhdG9yIGFzQ29sdW1uPXthc0NvbHVtbn0+KjwvUmVxdWlyZWRJbmRpY2F0b3I+fVxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICl9XG4gICAgICA8L0xhYmVsQ29udGFpbmVyPlxuICAgICAgPFZhbHVlQ29udGFpbmVyIHdpZHRoPXt2YWx1ZVdpZHRofSBlcnJvcj17ZXJyb3J9PlxuICAgICAgICA8RmllbGRDb250YWluZXIgYXBwZW5kPXthcHBlbmR9PlxuICAgICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IG1vZGlmeUNoaWxkcmVuKGNoaWxkLCBwcm9wcykpfVxuICAgICAgICAgIHthcHBlbmQgJiYgPEFwcGVuZD57YXBwZW5kfTwvQXBwZW5kPn1cbiAgICAgICAgPC9GaWVsZENvbnRhaW5lcj5cbiAgICAgICAge3Nob3dFcnJvciAmJiAoXG4gICAgICAgICAgPEVycm9yQ29udGFpbmVyIGFzQ29sdW1uPXthc0NvbHVtbn0+XG4gICAgICAgICAgICB7ZXJyb3IgJiYgPEVycm9yTWVzc2FnZT57ZXJyb3J9PC9FcnJvck1lc3NhZ2U+fVxuICAgICAgICAgIDwvRXJyb3JDb250YWluZXI+XG4gICAgICAgICl9XG4gICAgICA8L1ZhbHVlQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuQ29udGVudElucHV0Um93LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgc2hvd0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBhc0NvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG4gIGxhYmVsV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgdmFsdWVXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBhcHBlbmQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5lbGVtZW50XSksXG59O1xuXG5Db250ZW50SW5wdXRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBsYWJlbDogJycsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbiAgY2hpbGRyZW46IG51bGwsXG4gIGVycm9yOiAnJyxcbiAgc2hvd0Vycm9yOiB0cnVlLFxuICBjbGFzc05hbWU6ICcnLFxuICBhc0NvbHVtbjogZmFsc2UsXG4gIGxhYmVsV2lkdGg6IHVuZGVmaW5lZCxcbiAgdmFsdWVXaWR0aDogJ2F1dG8nLFxuICBhcHBlbmQ6IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRJbnB1dFJvdztcbiJdfQ==