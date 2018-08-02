'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: ', ';\n  min-width: ', ';\n  color: ', ';\n'], ['\n  width: ', ';\n  min-width: ', ';\n  color: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n'], ['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n'], ['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  color: ', ';\n  font-size: ', ';\n'], ['\n  color: ', ';\n  font-size: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n  font-size: ', ';\n'], ['\n  margin-left: ', ';\n  font-size: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  margin-right: ', ';\n  margin-bottom: 0;\n'], ['\n  margin-right: ', ';\n  margin-bottom: 0;\n']);

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

var Container = _styledComponents2.default.section(_templateObject, _constants.theme.halfGutterWidth);

var LabelContainer = _styledComponents2.default.div(_templateObject2, _constants.theme.inputRow.labelWidth, _constants.theme.inputRow.labelWidth, function (props) {
  return getErrorStyles(props.error);
});

var ValueContainer = _styledComponents2.default.div(_templateObject3, function (props) {
  return getErrorStyles(props.error);
});

var ErrorContainer = _styledComponents2.default.div(_templateObject4, _constants.theme.inputRow.errorContainer.height);

var ErrorMessage = _styledComponents2.default.span(_templateObject5, _constants.theme.text.error.color, _constants.theme.text.error.fontSize);

var RequiredIndicator = _styledComponents2.default.span(_templateObject6, _constants.theme.halfGutterWidth, _constants.theme.inputRow.requiredIndicator.fontSize);

var Label = _styledComponents2.default.label(_templateObject7, _constants.theme.gutterWidth);

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
      id = props.id;


  return _react2.default.createElement(
    Container,
    { className: className, id: id },
    _react2.default.createElement(
      LabelContainer,
      { error: error },
      label && _react2.default.createElement(
        Label,
        null,
        label,
        required && _react2.default.createElement(
          RequiredIndicator,
          null,
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
        null,
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
  id: ''
};

exports.default = ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImdldEVycm9yU3R5bGVzIiwiZXJyb3IiLCJ0aGVtZSIsInRleHQiLCJjb2xvciIsIkNvbnRhaW5lciIsInN0eWxlZCIsInNlY3Rpb24iLCJoYWxmR3V0dGVyV2lkdGgiLCJMYWJlbENvbnRhaW5lciIsImRpdiIsImlucHV0Um93IiwibGFiZWxXaWR0aCIsInByb3BzIiwiVmFsdWVDb250YWluZXIiLCJFcnJvckNvbnRhaW5lciIsImVycm9yQ29udGFpbmVyIiwiaGVpZ2h0IiwiRXJyb3JNZXNzYWdlIiwic3BhbiIsImZvbnRTaXplIiwiUmVxdWlyZWRJbmRpY2F0b3IiLCJyZXF1aXJlZEluZGljYXRvciIsIkxhYmVsIiwibGFiZWwiLCJndXR0ZXJXaWR0aCIsIm1vZGlmeUNoaWxkcmVuIiwiY2hpbGQiLCJyZXF1aXJlZCIsImF1dG9Db21wbGV0ZSIsIm5ld0VsZW1lbnRQcm9wcyIsImNsYXNzTmFtZSIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwiQ29udGVudElucHV0Um93IiwiY2hpbGRyZW4iLCJzaG93RXJyb3IiLCJpZCIsIkNoaWxkcmVuIiwibWFwIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7QUFEQTs7O0FBR0EsSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLFNBQVVDLFFBQVFDLGlCQUFNQyxJQUFOLENBQVdGLEtBQVgsQ0FBaUJHLEtBQXpCLEdBQWlDLEVBQTNDO0FBQUEsQ0FBdkI7O0FBRUEsSUFBTUMsWUFBWUMsMkJBQU9DLE9BQW5CLGtCQUVhTCxpQkFBTU0sZUFGbkIsQ0FBTjs7QUFRQSxJQUFNQyxpQkFBaUJILDJCQUFPSSxHQUF4QixtQkFDS1IsaUJBQU1TLFFBQU4sQ0FBZUMsVUFEcEIsRUFFU1YsaUJB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O0FBUHlCLENBQS9COztrQkFVZUgsZSIsImZpbGUiOiJjb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgZ2V0RXJyb3JTdHlsZXMgPSBlcnJvciA9PiAoZXJyb3IgPyB0aGVtZS50ZXh0LmVycm9yLmNvbG9yIDogJycpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5gO1xuXG5jb25zdCBMYWJlbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAke3RoZW1lLmlucHV0Um93LmxhYmVsV2lkdGh9O1xuICBtaW4td2lkdGg6ICR7dGhlbWUuaW5wdXRSb3cubGFiZWxXaWR0aH07XG4gIGNvbG9yOiAke3Byb3BzID0+IGdldEVycm9yU3R5bGVzKHByb3BzLmVycm9yKX07XG5gO1xuXG5jb25zdCBWYWx1ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gID4gaW5wdXQsID4gLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IGdldEVycm9yU3R5bGVzKHByb3BzLmVycm9yKX07XG4gIH1cbiAgZmxleDogMSAxIGF1dG87XG5gO1xuXG5jb25zdCBFcnJvckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1pbi1oZWlnaHQ6ICR7dGhlbWUuaW5wdXRSb3cuZXJyb3JDb250YWluZXIuaGVpZ2h0fTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHt0aGVtZS50ZXh0LmVycm9yLmNvbG9yfTtcbiAgZm9udC1zaXplOiAke3RoZW1lLnRleHQuZXJyb3IuZm9udFNpemV9O1xuYDtcblxuY29uc3QgUmVxdWlyZWRJbmRpY2F0b3IgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgZm9udC1zaXplOiAke3RoZW1lLmlucHV0Um93LnJlcXVpcmVkSW5kaWNhdG9yLmZvbnRTaXplfTtcbmA7XG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuYDtcblxuLyoqXG4gKiBBc3NpZ25zIGdpdmVuIHByb3BzIGRpcmVjdGx5IHRvIGlucHV0IGVsZW1lbnRcbiAqIEBwYXJhbSBjaGlsZFxuICogQHBhcmFtIHByb3BzXG4gKi9cbmNvbnN0IG1vZGlmeUNoaWxkcmVuID0gKGNoaWxkLCBwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlcXVpcmVkLCBhdXRvQ29tcGxldGUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG5ld0VsZW1lbnRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6IGAke2NoaWxkLnByb3BzLmNsYXNzTmFtZSB8fCAnJ31gLFxuICAgIHJlcXVpcmVkLFxuICAgIGF1dG9Db21wbGV0ZSxcbiAgfTtcblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBuZXdFbGVtZW50UHJvcHMpO1xufTtcblxuY29uc3QgQ29udGVudElucHV0Um93ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbiwgZXJyb3IsIHNob3dFcnJvciwgbGFiZWwsIGNsYXNzTmFtZSwgcmVxdWlyZWQsIGlkLFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD17aWR9PlxuICAgICAgPExhYmVsQ29udGFpbmVyIGVycm9yPXtlcnJvcn0+XG4gICAgICAgIHtsYWJlbCAmJlxuICAgICAgICA8TGFiZWw+e2xhYmVsfVxuICAgICAgICAgIHtyZXF1aXJlZCAmJiA8UmVxdWlyZWRJbmRpY2F0b3I+KjwvUmVxdWlyZWRJbmRpY2F0b3I+fVxuICAgICAgICA8L0xhYmVsPn1cbiAgICAgIDwvTGFiZWxDb250YWluZXI+XG4gICAgICA8VmFsdWVDb250YWluZXIgZXJyb3I9e2Vycm9yfT5cbiAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4gbW9kaWZ5Q2hpbGRyZW4oY2hpbGQsIHByb3BzKSl9XG4gICAgICAgIHtzaG93RXJyb3IgJiZcbiAgICAgICAgPEVycm9yQ29udGFpbmVyPlxuICAgICAgICAgIHtlcnJvciAmJiA8RXJyb3JNZXNzYWdlPntlcnJvcn08L0Vycm9yTWVzc2FnZT59XG4gICAgICAgIDwvRXJyb3JDb250YWluZXI+fVxuICAgICAgPC9WYWx1ZUNvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkNvbnRlbnRJbnB1dFJvdy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ib29sXSksXG4gIHNob3dFcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5Db250ZW50SW5wdXRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBsYWJlbDogJycsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbiAgY2hpbGRyZW46IG51bGwsXG4gIGVycm9yOiAnJyxcbiAgc2hvd0Vycm9yOiB0cnVlLFxuICBjbGFzc05hbWU6ICcnLFxuICBpZDogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50SW5wdXRSb3c7XG4iXX0=