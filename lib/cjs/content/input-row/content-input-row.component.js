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

var getStyles = function getStyles(error, warning, theme) {
  if (error) return theme.text.error.color;
  if (warning) return theme.colors.yellow;
  return '';
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
  return getStyles(props.error, props.warning, props.theme);
}, function (props) {
  return props.showError && !props.asColumn ? getErrorContainerMinHeight(props) : 0;
});

var ValueContainer = _styledComponents2.default.div(_templateObject3, function (props) {
  return getStyles(props.error, props.warning, props.theme);
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

var WarningMessage = _styledComponents2.default.span(_templateObject5, function (props) {
  return props.theme.colors.yellow;
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
      warning = props.warning,
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
        warning: warning,
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
      { width: valueWidth, error: error, warning: warning },
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
        ),
        !error && warning && _react2.default.createElement(
          WarningMessage,
          null,
          warning
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
  warning: '',
  showError: true,
  className: '',
  asColumn: false,
  labelWidth: undefined,
  valueWidth: 'auto',
  append: undefined
};

exports.default = ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImdldFN0eWxlcyIsImVycm9yIiwid2FybmluZyIsInRoZW1lIiwidGV4dCIsImNvbG9yIiwiY29sb3JzIiwieWVsbG93IiwiZ2V0Q29udGFpbmVyRGlyZWN0aW9uIiwicHJvcHMiLCJhc0NvbHVtbiIsImlucHV0Q29sdW1uIiwiZmxleERpcmVjdGlvbiIsImlucHV0Um93IiwiZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQiLCJlcnJvckNvbnRhaW5lciIsImhlaWdodCIsImdldExhYmVsTWF4V2lkdGgiLCJsYWJlbFdpZHRoIiwidW5kZWZpbmVkIiwiQ29udGFpbmVyIiwic3R5bGVkIiwic2VjdGlvbiIsImhhbGZHdXR0ZXJXaWR0aCIsIkxhYmVsQ29udGFpbmVyIiwiZGl2Iiwic2hvd0Vycm9yIiwiVmFsdWVDb250YWluZXIiLCJ3aWR0aCIsIkVycm9yQ29udGFpbmVyIiwiRXJyb3JNZXNzYWdlIiwic3BhbiIsImZvbnRTaXplIiwiV2FybmluZ01lc3NhZ2UiLCJSZXF1aXJlZEluZGljYXRvciIsInJlcXVpcmVkSW5kaWNhdG9yIiwiTGFiZWwiLCJsYWJlbCIsImd1dHRlcldpZHRoIiwiRmllbGRDb250YWluZXIiLCJhcHBlbmQiLCJBcHBlbmQiLCJtb2RpZnlDaGlsZHJlbiIsImNoaWxkIiwicmVxdWlyZWQiLCJhdXRvQ29tcGxldGUiLCJuZXdFbGVtZW50UHJvcHMiLCJjbGFzc05hbWUiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsIkNvbnRlbnRJbnB1dFJvdyIsImNoaWxkcmVuIiwiaWQiLCJ2YWx1ZVdpZHRoIiwiQ2hpbGRyZW4iLCJtYXAiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFlBQVksU0FBWkEsU0FB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QyxRQUE3QjtBQUFBO0FBQUE7QUFGZjtBQVJKLEtBREY7QUFlRTtBQUFDLG9CQUFEO0FBQUEsUUFBZ0IsT0FBTzJDLFVBQXZCLEVBQW1DLE9BQU9wRCxLQUExQyxFQUFpRCxTQUFTQyxPQUExRDtBQUNFO0FBQUMsc0JBQUQ7QUFBQSxVQUFnQixRQUFRc0MsTUFBeEI7QUFDR1Esd0JBQU1NLFFBQU4sQ0FBZUMsR0FBZixDQUFtQkosUUFBbkIsRUFBNkI7QUFBQSxpQkFBU1QsZUFBZUMsS0FBZixFQUFzQmxDLEtBQXRCLENBQVQ7QUFBQSxTQUE3QixDQURIO0FBRUcrQixrQkFBVTtBQUFDLGdCQUFEO0FBQUE7QUFBU0E7QUFBVDtBQUZiLE9BREY7QUFLR2QsbUJBQ0M7QUFBQyxzQkFBRDtBQUFBLFVBQWdCLFVBQVVoQixRQUExQjtBQUNHVCxpQkFBUztBQUFDLHNCQUFEO0FBQUE7QUFBZUE7QUFBZixTQURaO0FBRUcsU0FBQ0EsS0FBRCxJQUFVQyxPQUFWLElBQXFCO0FBQUMsd0JBQUQ7QUFBQTtBQUFpQkE7QUFBakI7QUFGeEI7QUFOSjtBQWZGLEdBREY7QUE4QkQsQ0E5Q0Q7O0FBK0RBZ0QsZ0JBQWdCTSxZQUFoQixHQUErQjtBQUM3Qm5CLFNBQU8sRUFEc0I7QUFFN0JPLFlBQVUsS0FGbUI7QUFHN0JPLFlBQVUsSUFIbUI7QUFJN0JsRCxTQUFPLEVBSnNCO0FBSzdCQyxXQUFTLEVBTG9CO0FBTTdCd0IsYUFBVyxJQU5rQjtBQU83QnFCLGFBQVcsRUFQa0I7QUFRN0JyQyxZQUFVLEtBUm1CO0FBUzdCUSxjQUFZQyxTQVRpQjtBQVU3QmtDLGNBQVksTUFWaUI7QUFXN0JiLFVBQVFyQjtBQVhxQixDQUEvQjs7a0JBY2UrQixlIiwiZmlsZSI6ImNvbnRlbnQtaW5wdXQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IGdldFN0eWxlcyA9IChlcnJvciwgd2FybmluZywgdGhlbWUpID0+IHtcbiAgaWYgKGVycm9yKSByZXR1cm4gdGhlbWUudGV4dC5lcnJvci5jb2xvcjtcbiAgaWYgKHdhcm5pbmcpIHJldHVybiB0aGVtZS5jb2xvcnMueWVsbG93O1xuICByZXR1cm4gJyc7XG59O1xuXG5jb25zdCBnZXRDb250YWluZXJEaXJlY3Rpb24gPSBwcm9wcyA9PlxuICAocHJvcHMuYXNDb2x1bW4gPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5mbGV4RGlyZWN0aW9uIDogcHJvcHMudGhlbWUuaW5wdXRSb3cuZmxleERpcmVjdGlvbik7XG5cbmNvbnN0IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0ID0gcHJvcHMgPT5cbiAgKHByb3BzLmFzQ29sdW1uXG4gICAgPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5lcnJvckNvbnRhaW5lci5oZWlnaHRcbiAgICA6IHByb3BzLnRoZW1lLmlucHV0Um93LmVycm9yQ29udGFpbmVyLmhlaWdodCk7XG5cbmNvbnN0IGdldExhYmVsTWF4V2lkdGggPSAocHJvcHMpID0+IHtcbiAgaWYgKHByb3BzLmFzQ29sdW1uKSByZXR1cm4gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4ubGFiZWxXaWR0aDtcbiAgcmV0dXJuIHByb3BzLmxhYmVsV2lkdGggIT09IHVuZGVmaW5lZCA/IHByb3BzLmxhYmVsV2lkdGggOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5sYWJlbFdpZHRoO1xufTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IGdldENvbnRhaW5lckRpcmVjdGlvbihwcm9wcyl9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmNvbnN0IExhYmVsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0TGFiZWxNYXhXaWR0aChwcm9wcyl9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBnZXRTdHlsZXMocHJvcHMuZXJyb3IsIHByb3BzLndhcm5pbmcsIHByb3BzLnRoZW1lKX07XG4gIHBhZGRpbmctYm90dG9tOiAke3Byb3BzID0+XG4gICAgKHByb3BzLnNob3dFcnJvciAmJiAhcHJvcHMuYXNDb2x1bW4gPyBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodChwcm9wcykgOiAwKX07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBWYWx1ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gID4gZGl2ID4gaW5wdXQsXG4gID4gZGl2ID4gLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IGdldFN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMud2FybmluZywgcHJvcHMudGhlbWUpfTtcbiAgfVxuICBmbGV4OiAxIDEgYXV0bztcbiAgbWF4LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcbmA7XG5cbmNvbnN0IEVycm9yQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWluLWhlaWdodDogJHtwcm9wcyA9PiBnZXRFcnJvckNvbnRhaW5lck1pbkhlaWdodChwcm9wcyl9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuZXJyb3IuY29sb3J9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dC5lcnJvci5mb250U2l6ZX07XG5gO1xuXG5jb25zdCBXYXJuaW5nTWVzc2FnZSA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMueWVsbG93fTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuZXJyb3IuZm9udFNpemV9O1xuYDtcblxuY29uc3QgUmVxdWlyZWRJbmRpY2F0b3IgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+XG4gICAgKHByb3BzLmFzQ29sdW1uXG4gICAgICA/IHByb3BzLnRoZW1lLmlucHV0Q29sdW1uLnJlcXVpcmVkSW5kaWNhdG9yLmZvbnRTaXplXG4gICAgICA6IHByb3BzLnRoZW1lLmlucHV0Um93LnJlcXVpcmVkSW5kaWNhdG9yLmZvbnRTaXplKX07XG5gO1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5hc0NvbHVtbiA/IDAgOiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aCl9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IChwcm9wcy5hc0NvbHVtbiA/IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aCA6IDApfTtcbmA7XG5cbmNvbnN0IEZpZWxkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogJHtwcm9wcyA9PiAocHJvcHMuYXBwZW5kID8gJ2ZsZXgnIDogJ2Jsb2NrJyl9O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEFwcGVuZCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aH07XG4gIGZsZXg6IDEgMSAxMDAlO1xuYDtcblxuLyoqXG4gKiBBc3NpZ25zIGdpdmVuIHByb3BzIGRpcmVjdGx5IHRvIGlucHV0IGVsZW1lbnRcbiAqIEBwYXJhbSBjaGlsZFxuICogQHBhcmFtIHByb3BzXG4gKi9cbmNvbnN0IG1vZGlmeUNoaWxkcmVuID0gKGNoaWxkLCBwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlcXVpcmVkLCBhdXRvQ29tcGxldGUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG5ld0VsZW1lbnRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6IGAke2NoaWxkLnByb3BzLmNsYXNzTmFtZSB8fCAnJ31gLFxuICAgIHJlcXVpcmVkLFxuICAgIGF1dG9Db21wbGV0ZSxcbiAgfTtcblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBuZXdFbGVtZW50UHJvcHMpO1xufTtcblxuY29uc3QgQ29udGVudElucHV0Um93ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICBlcnJvcixcbiAgICB3YXJuaW5nLFxuICAgIHNob3dFcnJvcixcbiAgICBsYWJlbCxcbiAgICBjbGFzc05hbWUsXG4gICAgcmVxdWlyZWQsXG4gICAgaWQsXG4gICAgYXNDb2x1bW4sXG4gICAgbGFiZWxXaWR0aCxcbiAgICB2YWx1ZVdpZHRoLFxuICAgIGFwcGVuZCxcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBhc0NvbHVtbj17YXNDb2x1bW59IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBpZD17aWR9PlxuICAgICAgPExhYmVsQ29udGFpbmVyXG4gICAgICAgIGFzQ29sdW1uPXthc0NvbHVtbn1cbiAgICAgICAgZXJyb3I9e2Vycm9yfVxuICAgICAgICB3YXJuaW5nPXt3YXJuaW5nfVxuICAgICAgICBzaG93RXJyb3I9e3Nob3dFcnJvcn1cbiAgICAgICAgbGFiZWxXaWR0aD17bGFiZWxXaWR0aH1cbiAgICAgID5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8TGFiZWwgYXNDb2x1bW49e2FzQ29sdW1ufT5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIHtyZXF1aXJlZCAmJiA8UmVxdWlyZWRJbmRpY2F0b3IgYXNDb2x1bW49e2FzQ29sdW1ufT4qPC9SZXF1aXJlZEluZGljYXRvcj59XG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgKX1cbiAgICAgIDwvTGFiZWxDb250YWluZXI+XG4gICAgICA8VmFsdWVDb250YWluZXIgd2lkdGg9e3ZhbHVlV2lkdGh9IGVycm9yPXtlcnJvcn0gd2FybmluZz17d2FybmluZ30+XG4gICAgICAgIDxGaWVsZENvbnRhaW5lciBhcHBlbmQ9e2FwcGVuZH0+XG4gICAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4gbW9kaWZ5Q2hpbGRyZW4oY2hpbGQsIHByb3BzKSl9XG4gICAgICAgICAge2FwcGVuZCAmJiA8QXBwZW5kPnthcHBlbmR9PC9BcHBlbmQ+fVxuICAgICAgICA8L0ZpZWxkQ29udGFpbmVyPlxuICAgICAgICB7c2hvd0Vycm9yICYmIChcbiAgICAgICAgICA8RXJyb3JDb250YWluZXIgYXNDb2x1bW49e2FzQ29sdW1ufT5cbiAgICAgICAgICAgIHtlcnJvciAmJiA8RXJyb3JNZXNzYWdlPntlcnJvcn08L0Vycm9yTWVzc2FnZT59XG4gICAgICAgICAgICB7IWVycm9yICYmIHdhcm5pbmcgJiYgPFdhcm5pbmdNZXNzYWdlPnt3YXJuaW5nfTwvV2FybmluZ01lc3NhZ2U+fVxuICAgICAgICAgIDwvRXJyb3JDb250YWluZXI+XG4gICAgICAgICl9XG4gICAgICA8L1ZhbHVlQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuQ29udGVudElucHV0Um93LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgd2FybmluZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgc2hvd0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBhc0NvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG4gIGxhYmVsV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgdmFsdWVXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBhcHBlbmQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5lbGVtZW50XSksXG59O1xuXG5Db250ZW50SW5wdXRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBsYWJlbDogJycsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbiAgY2hpbGRyZW46IG51bGwsXG4gIGVycm9yOiAnJyxcbiAgd2FybmluZzogJycsXG4gIHNob3dFcnJvcjogdHJ1ZSxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgYXNDb2x1bW46IGZhbHNlLFxuICBsYWJlbFdpZHRoOiB1bmRlZmluZWQsXG4gIHZhbHVlV2lkdGg6ICdhdXRvJyxcbiAgYXBwZW5kOiB1bmRlZmluZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50SW5wdXRSb3c7XG4iXX0=