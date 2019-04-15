'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n'], ['\n  width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n']),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImdldEVycm9yU3R5bGVzIiwiZXJyb3IiLCJ0aGVtZSIsInRleHQiLCJjb2xvciIsImdldENvbnRhaW5lckRpcmVjdGlvbiIsInByb3BzIiwiYXNDb2x1bW4iLCJpbnB1dENvbHVtbiIsImZsZXhEaXJlY3Rpb24iLCJpbnB1dFJvdyIsImdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0IiwiZXJyb3JDb250YWluZXIiLCJoZWlnaHQiLCJnZXRMYWJlbE1heFdpZHRoIiwibGFiZWxXaWR0aCIsInVuZGVmaW5lZCIsIkNvbnRhaW5lciIsInN0eWxlZCIsInNlY3Rpb24iLCJoYWxmR3V0dGVyV2lkdGgiLCJMYWJlbENvbnRhaW5lciIsImRpdiIsInNob3dFcnJvciIsIlZhbHVlQ29udGFpbmVyIiwid2lkdGgiLCJFcnJvckNvbnRhaW5lciIsIkVycm9yTWVzc2FnZSIsInNwYW4iLCJmb250U2l6ZSIsIlJlcXVpcmVkSW5kaWNhdG9yIiwicmVxdWlyZWRJbmRpY2F0b3IiLCJMYWJlbCIsImxhYmVsIiwiZ3V0dGVyV2lkdGgiLCJtb2RpZnlDaGlsZHJlbiIsImNoaWxkIiwicmVxdWlyZWQiLCJhdXRvQ29tcGxldGUiLCJuZXdFbGVtZW50UHJvcHMiLCJjbGFzc05hbWUiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsIkNvbnRlbnRJbnB1dFJvdyIsImNoaWxkcmVuIiwiaWQiLCJ2YWx1ZVdpZHRoIiwiQ2hpbGRyZW4iLCJtYXAiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLFNBQW1CRCxRQUFRQyxNQUFNQyxJQUFOLENBQVdGLEtBQVgsQ0FBaUJHLEtB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LFdBQVdpQyxTQUExQyxFQUFxRCxJQUFJSyxFQUF6RDtBQUNFO0FBQUMsb0JBQUQ7QUFBQTtBQUNFLGtCQUFVdEMsUUFEWjtBQUVFLGVBQU9OLEtBRlQ7QUFHRSxtQkFBV3NCLFNBSGI7QUFJRSxvQkFBWVI7QUFKZDtBQU1Ha0IsZUFFQztBQUFDLGFBQUQ7QUFBQSxVQUFPLFVBQVUxQixRQUFqQjtBQUNHMEIsYUFESDtBQUVHSSxvQkFBWTtBQUFDLDJCQUFEO0FBQUEsWUFBbUIsVUFBVTlCLFFBQTdCO0FBQUE7QUFBQTtBQUZmO0FBUkosS0FERjtBQWVFO0FBQUMsb0JBQUQ7QUFBQSxRQUFnQixPQUFPdUMsVUFBdkIsRUFBbUMsT0FBTzdDLEtBQTFDO0FBQ0d3QyxzQkFBTU0sUUFBTixDQUFlQyxHQUFmLENBQW1CSixRQUFuQixFQUE2QjtBQUFBLGVBQVNULGVBQWVDLEtBQWYsRUFBc0I5QixLQUF0QixDQUFUO0FBQUEsT0FBN0IsQ0FESDtBQUVHaUIsbUJBRUM7QUFBQyxzQkFBRDtBQUFBLFVBQWdCLFVBQVVoQixRQUExQjtBQUNHTixpQkFBUztBQUFDLHNCQUFEO0FBQUE7QUFBZUE7QUFBZjtBQURaO0FBSko7QUFmRixHQURGO0FBMkJELENBaENEOztBQStDQTBDLGdCQUFnQk0sWUFBaEIsR0FBK0I7QUFDN0JoQixTQUFPLEVBRHNCO0FBRTdCSSxZQUFVLEtBRm1CO0FBRzdCTyxZQUFVLElBSG1CO0FBSTdCM0MsU0FBTyxFQUpzQjtBQUs3QnNCLGFBQVcsSUFMa0I7QUFNN0JpQixhQUFXLEVBTmtCO0FBTzdCakMsWUFBVSxLQVBtQjtBQVE3QlEsY0FBWUMsU0FSaUI7QUFTN0I4QixjQUFZO0FBVGlCLENBQS9COztrQkFZZUgsZSIsImZpbGUiOiJjb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBnZXRFcnJvclN0eWxlcyA9IChlcnJvciwgdGhlbWUpID0+IChlcnJvciA/IHRoZW1lLnRleHQuZXJyb3IuY29sb3IgOiAnJyk7XG5cbmNvbnN0IGdldENvbnRhaW5lckRpcmVjdGlvbiA9IHByb3BzID0+XG4gIChwcm9wcy5hc0NvbHVtbiA/IHByb3BzLnRoZW1lLmlucHV0Q29sdW1uLmZsZXhEaXJlY3Rpb24gOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5mbGV4RGlyZWN0aW9uKTtcblxuY29uc3QgZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQgPSBwcm9wcyA9PiAocHJvcHMuYXNDb2x1bW5cbiAgPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5lcnJvckNvbnRhaW5lci5oZWlnaHQgOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5lcnJvckNvbnRhaW5lci5oZWlnaHQpO1xuXG5cbmNvbnN0IGdldExhYmVsTWF4V2lkdGggPSAocHJvcHMpID0+IHtcbiAgaWYgKHByb3BzLmFzQ29sdW1uKSByZXR1cm4gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4ubGFiZWxXaWR0aDtcbiAgcmV0dXJuIHByb3BzLmxhYmVsV2lkdGggIT09IHVuZGVmaW5lZCA/IHByb3BzLmxhYmVsV2lkdGggOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5sYWJlbFdpZHRoO1xufTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IGdldENvbnRhaW5lckRpcmVjdGlvbihwcm9wcyl9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmNvbnN0IExhYmVsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0TGFiZWxNYXhXaWR0aChwcm9wcyl9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBnZXRFcnJvclN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMudGhlbWUpfTtcbiAgcGFkZGluZy1ib3R0b206ICR7cHJvcHMgPT4gKHByb3BzLnNob3dFcnJvciAmJiAhcHJvcHMuYXNDb2x1bW4gPyBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodChwcm9wcykgOiAwKX07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBWYWx1ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gID4gaW5wdXQsID4gLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IGdldEVycm9yU3R5bGVzKHByb3BzLmVycm9yLCBwcm9wcy50aGVtZSl9O1xuICB9XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBtYXgtd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMud2lkdGh9O1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEVycm9yQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogJHtwcm9wcyA9PiBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodChwcm9wcyl9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuZXJyb3IuY29sb3J9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dC5lcnJvci5mb250U2l6ZX07XG5gO1xuXG5jb25zdCBSZXF1aXJlZEluZGljYXRvciA9IHN0eWxlZC5zcGFuYFxuICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gKHByb3BzLmFzQ29sdW1uID8gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4ucmVxdWlyZWRJbmRpY2F0b3IuZm9udFNpemUgOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5yZXF1aXJlZEluZGljYXRvci5mb250U2l6ZSl9O1xuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PiAocHJvcHMuYXNDb2x1bW4gPyAwIDogcHJvcHMudGhlbWUuZ3V0dGVyV2lkdGgpfTtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMuYXNDb2x1bW4gPyBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGggOiAwKX07XG5gO1xuXG4vKipcbiAqIEFzc2lnbnMgZ2l2ZW4gcHJvcHMgZGlyZWN0bHkgdG8gaW5wdXQgZWxlbWVudFxuICogQHBhcmFtIGNoaWxkXG4gKiBAcGFyYW0gcHJvcHNcbiAqL1xuY29uc3QgbW9kaWZ5Q2hpbGRyZW4gPSAoY2hpbGQsIHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVxdWlyZWQsIGF1dG9Db21wbGV0ZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgbmV3RWxlbWVudFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogYCR7Y2hpbGQucHJvcHMuY2xhc3NOYW1lIHx8ICcnfWAsXG4gICAgcmVxdWlyZWQsXG4gICAgYXV0b0NvbXBsZXRlLFxuICB9O1xuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld0VsZW1lbnRQcm9wcyk7XG59O1xuXG5jb25zdCBDb250ZW50SW5wdXRSb3cgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLCBlcnJvciwgc2hvd0Vycm9yLCBsYWJlbCwgY2xhc3NOYW1lLCByZXF1aXJlZCwgaWQsIGFzQ29sdW1uLCBsYWJlbFdpZHRoLCB2YWx1ZVdpZHRoLFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGFzQ29sdW1uPXthc0NvbHVtbn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9IGlkPXtpZH0+XG4gICAgICA8TGFiZWxDb250YWluZXJcbiAgICAgICAgYXNDb2x1bW49e2FzQ29sdW1ufVxuICAgICAgICBlcnJvcj17ZXJyb3J9XG4gICAgICAgIHNob3dFcnJvcj17c2hvd0Vycm9yfVxuICAgICAgICBsYWJlbFdpZHRoPXtsYWJlbFdpZHRofVxuICAgICAgPlxuICAgICAgICB7bGFiZWxcbiAgICAgICAgJiYgKFxuICAgICAgICAgIDxMYWJlbCBhc0NvbHVtbj17YXNDb2x1bW59PlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAge3JlcXVpcmVkICYmIDxSZXF1aXJlZEluZGljYXRvciBhc0NvbHVtbj17YXNDb2x1bW59Pio8L1JlcXVpcmVkSW5kaWNhdG9yPn1cbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICApfVxuICAgICAgPC9MYWJlbENvbnRhaW5lcj5cbiAgICAgIDxWYWx1ZUNvbnRhaW5lciB3aWR0aD17dmFsdWVXaWR0aH0gZXJyb3I9e2Vycm9yfT5cbiAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4gbW9kaWZ5Q2hpbGRyZW4oY2hpbGQsIHByb3BzKSl9XG4gICAgICAgIHtzaG93RXJyb3JcbiAgICAgICAgJiYgKFxuICAgICAgICAgIDxFcnJvckNvbnRhaW5lciBhc0NvbHVtbj17YXNDb2x1bW59PlxuICAgICAgICAgICAge2Vycm9yICYmIDxFcnJvck1lc3NhZ2U+e2Vycm9yfTwvRXJyb3JNZXNzYWdlPn1cbiAgICAgICAgICA8L0Vycm9yQ29udGFpbmVyPlxuICAgICAgICApfVxuICAgICAgPC9WYWx1ZUNvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkNvbnRlbnRJbnB1dFJvdy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ib29sXSksXG4gIHNob3dFcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYXNDb2x1bW46IFByb3BUeXBlcy5ib29sLFxuICBsYWJlbFdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG4gIHZhbHVlV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbn07XG5cbkNvbnRlbnRJbnB1dFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGxhYmVsOiAnJyxcbiAgcmVxdWlyZWQ6IGZhbHNlLFxuICBjaGlsZHJlbjogbnVsbCxcbiAgZXJyb3I6ICcnLFxuICBzaG93RXJyb3I6IHRydWUsXG4gIGNsYXNzTmFtZTogJycsXG4gIGFzQ29sdW1uOiBmYWxzZSxcbiAgbGFiZWxXaWR0aDogdW5kZWZpbmVkLFxuICB2YWx1ZVdpZHRoOiAnYXV0bycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50SW5wdXRSb3c7XG4iXX0=