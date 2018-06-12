'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  min-width: ', ';\n  color: ', ';\n'], ['\n  min-width: ', ';\n  color: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n'], ['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  display: flex;\n  align-items: center;\n'], ['\n  height: ', ';\n  display: flex;\n  align-items: center;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  color: ', ';\n'], ['\n  color: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n'], ['\n  margin-left: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  margin-right: ', ';\n'], ['\n  margin-right: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /* eslint-disable no-confusing-arrow */


// App imports


var getErrorStyles = function getErrorStyles(error) {
  return error ? _constants.theme.text.error.color : 'inherit';
};

var Container = _styledComponents2.default.section(_templateObject, _constants.theme.halfGutterWidth);

var LabelContainer = _styledComponents2.default.div(_templateObject2, _constants.theme.inputRow.labelWidth, function (props) {
  return getErrorStyles(props.error);
});

var ValueContainer = _styledComponents2.default.div(_templateObject3, function (props) {
  return getErrorStyles(props.error);
});

var ErrorContainer = _styledComponents2.default.div(_templateObject4, _constants.theme.inputRow.errorContainer.height);

var ErrorMessage = _styledComponents2.default.span(_templateObject5, _constants.theme.text.error.color);

var RequiredIndicator = _styledComponents2.default.span(_templateObject6, _constants.theme.halfGutterWidth);

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
      required = props.required;


  return _react2.default.createElement(
    Container,
    { className: className },
    _react2.default.createElement(
      LabelContainer,
      { error: error },
      label && _react2.default.createElement(
        Label,
        null,
        label
      ),
      required && _react2.default.createElement(
        RequiredIndicator,
        null,
        '*'
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
  className: null
};

exports.default = ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImdldEVycm9yU3R5bGVzIiwiZXJyb3IiLCJ0ZXh0IiwiY29sb3IiLCJDb250YWluZXIiLCJzZWN0aW9uIiwiaGFsZkd1dHRlcldpZHRoIiwiTGFiZWxDb250YWluZXIiLCJkaXYiLCJpbnB1dFJvdyIsImxhYmVsV2lkdGgiLCJwcm9wcyIsIlZhbHVlQ29udGFpbmVyIiwiRXJyb3JDb250YWluZXIiLCJlcnJvckNvbnRhaW5lciIsImhlaWdodCIsIkVycm9yTWVzc2FnZSIsInNwYW4iLCJSZXF1aXJlZEluZGljYXRvciIsIkxhYmVsIiwibGFiZWwiLCJndXR0ZXJXaWR0aCIsIm1vZGlmeUNoaWxkcmVuIiwiY2hpbGQiLCJyZXF1aXJlZCIsImF1dG9Db21wbGV0ZSIsIm5ld0VsZW1lbnRQcm9wcyIsImNsYXNzTmFtZSIsImNsb25lRWxlbWVudCIsIkNvbnRlbnRJbnB1dFJvdyIsImNoaWxkcmVuIiwic2hvd0Vycm9yIiwiQ2hpbGRyZW4iLCJtYXAiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7OzBGQU5BOzs7QUFLQTs7O0FBR0EsSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLFNBQVNDLFFBQVEsaUJBQU1DLElBQU4sQ0FBV0QsS0FBWCxDQUFpQkUsS0FBekIsR0FBaUMsU0FBMUM7QUFBQSxDQUF2Qjs7QUFFQSxJQUFNQyxZQUFZLDJCQUFPQyxPQUFuQixrQkFFYSxpQkFBTUMsZUFGbkIsQ0FBTjs7QUFRQSxJQUFNQyxpQkFBaUIsMkJBQU9DLEdBQXhCLG1CQUNTLGlCQUFNQyxRQUFOLENBQWVDLFVBRHhCLEVBRUs7QUFBQSxTQUFTVixlQUFlVyxNQUFNVixLQUFyQixDQUFUO0FBQUEsQ0FGTCxDQUFOOztBQUtBLElBQU1XLGlCQUFpQiwyQkFBT0osR0FBeEIsbUJBRWM7QUFBQSxTQUFTUixlQUFlVyxNQUFNVixLQUFyQixDQUFUO0FBQUEsQ0FGZCxDQUFOOztBQU9BLElBQU1ZLGlCQUFpQiwyQkFBT0wsR0FBeEIsbUJBQ00saUJBQU1DLFFBQU4sQ0FBZUssY0FBZixDQUE4QkMsTUFEcEMsQ0FBTjs7QUFNQSxJQUFNQyxlQUFlLDJCQUFPQyxJQUF0QixtQkFDSyxpQkFBTWYsSUFBTixDQUFXRCxLQUFYLENBQWlCRSxLQUR0QixDQUFOOztBQUlBLElBQU1lLG9CQUFvQiwyQkFBT0QsSUFBM0IsbUJBQ1csaUJBQU1YLGVBRGpCLENBQU47O0FBSUEsSUFBTWEsUUFBUSwyQkFBT0MsS0FBZixtQkFDWSxpQkFBTUMsV0FEbEIsQ0FBTjs7QUFJQTs7Ozs7QUFLQSxJQUFNQyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBUVosS0FBUixFQUFrQjtBQUFBLE1BQy9CYSxRQUQrQixHQUNKYixLQURJLENBQy9CYSxRQUQrQjtBQUFBLE1BQ3JCQyxZQURxQixHQUNKZCxLQURJLENBQ3JCYyxZQURxQjs7O0FBR3ZDLE1BQU1DLGtCQUFrQjtBQUN0QkMscUJBQWNKLE1BQU1aLEtBQU4sQ0FBWWdCLFNBQVosSUFBeUIsRUFBdkMsQ0FEc0I7QUFFdEJILHNCQUZzQjtBQUd0QkM7QUFIc0IsR0FBeEI7O0FBTUEsU0FBTyxnQkFBTUcsWUFBTixDQUFtQkwsS0FBbkIsRUFBMEJHLGVBQTFCLENBQVA7QUFDRCxDQVZEOztBQVlBLElBQU1HLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ2xCLEtBQUQsRUFBVztBQUFBLE1BRS9CbUIsUUFGK0IsR0FHN0JuQixLQUg2QixDQUUvQm1CLFFBRitCO0FBQUEsTUFFckI3QixLQUZxQixHQUc3QlUsS0FINkIsQ0FFckJWLEtBRnFCO0FBQUEsTUFFZDhCLFNBRmMsR0FHN0JwQixLQUg2QixDQUVkb0IsU0FGYztBQUFBLE1BRUhYLEtBRkcsR0FHN0JULEtBSDZCLENBRUhTLEtBRkc7QUFBQSxNQUVJTyxTQUZKLEdBRzdCaEIsS0FINkIsQ0FFSWdCLFNBRko7QUFBQSxNQUVlSCxRQUZmLEdBRzdCYixLQUg2QixDQUVlYSxRQUZmOzs7QUFLakMsU0FDRTtBQUFDLGFBQUQ7QUFBQSxNQUFXLFdBQVdHLFNBQXRCO0FBQ0U7QUFBQyxvQkFBRDtBQUFBLFFBQWdCLE9BQU8xQixLQUF2QjtBQUNHbUIsZUFBUztBQUFDLGFBQUQ7QUFBQTtBQUFRQTtBQUFSLE9BRFo7QUFFR0ksa0JBQ0Q7QUFBQyx5QkFBRDtBQUFBO0FBQUE7QUFBQTtBQUhGLEtBREY7QUFNRTtBQUFDLG9CQUFEO0FBQUEsUUFBZ0IsT0FBT3ZCLEtBQXZCO0FBQ0csc0JBQU0rQixRQUFOLENBQWVDLEdBQWYsQ0FBbUJILFFBQW5CLEVBQTZCO0FBQUEsZUFBU1IsZUFBZUMsS0FBZixFQUFzQlosS0FBdEIsQ0FBVDtBQUFBLE9BQTdCLENBREg7QUFFR29CLG1CQUNEO0FBQUMsc0JBQUQ7QUFBQTtBQUNHOUIsaUJBQVM7QUFBQyxzQkFBRDtBQUFBO0FBQWVBO0FBQWY7QUFEWjtBQUhGO0FBTkYsR0FERjtBQWdCRCxDQXJCRDs7QUFnQ0E0QixnQkFBZ0JLLFlBQWhCLEdBQStCO0FBQzdCZCxTQUFPLEVBRHNCO0FBRTdCSSxZQUFVLEtBRm1CO0FBRzdCTSxZQUFVLElBSG1CO0FBSTdCN0IsU0FBTyxFQUpzQjtBQUs3QjhCLGFBQVcsSUFMa0I7QUFNN0JKLGFBQVc7QUFOa0IsQ0FBL0I7O2tCQVNlRSxlIiwiZmlsZSI6ImNvbnRlbnQtaW5wdXQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmZ1c2luZy1hcnJvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgZ2V0RXJyb3JTdHlsZXMgPSBlcnJvciA9PiBlcnJvciA/IHRoZW1lLnRleHQuZXJyb3IuY29sb3IgOiAnaW5oZXJpdCc7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAke3RoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmNvbnN0IExhYmVsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWluLXdpZHRoOiAke3RoZW1lLmlucHV0Um93LmxhYmVsV2lkdGh9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBnZXRFcnJvclN0eWxlcyhwcm9wcy5lcnJvcil9O1xuYDtcblxuY29uc3QgVmFsdWVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICA+IGlucHV0LCA+IC5mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiBnZXRFcnJvclN0eWxlcyhwcm9wcy5lcnJvcil9O1xuICB9XG4gIGZsZXg6IDEgMSBhdXRvO1xuYDtcblxuY29uc3QgRXJyb3JDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6ICR7dGhlbWUuaW5wdXRSb3cuZXJyb3JDb250YWluZXIuaGVpZ2h0fTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHt0aGVtZS50ZXh0LmVycm9yLmNvbG9yfTtcbmA7XG5cbmNvbnN0IFJlcXVpcmVkSW5kaWNhdG9yID0gc3R5bGVkLnNwYW5gXG4gIG1hcmdpbi1sZWZ0OiAke3RoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG5gO1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgbWFyZ2luLXJpZ2h0OiAke3RoZW1lLmd1dHRlcldpZHRofTtcbmA7XG5cbi8qKlxuICogQXNzaWducyBnaXZlbiBwcm9wcyBkaXJlY3RseSB0byBpbnB1dCBlbGVtZW50XG4gKiBAcGFyYW0gY2hpbGRcbiAqIEBwYXJhbSBwcm9wc1xuICovXG5jb25zdCBtb2RpZnlDaGlsZHJlbiA9IChjaGlsZCwgcHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXF1aXJlZCwgYXV0b0NvbXBsZXRlIH0gPSBwcm9wcztcblxuICBjb25zdCBuZXdFbGVtZW50UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiBgJHtjaGlsZC5wcm9wcy5jbGFzc05hbWUgfHwgJyd9YCxcbiAgICByZXF1aXJlZCxcbiAgICBhdXRvQ29tcGxldGUsXG4gIH07XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgbmV3RWxlbWVudFByb3BzKTtcbn07XG5cbmNvbnN0IENvbnRlbnRJbnB1dFJvdyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sIGVycm9yLCBzaG93RXJyb3IsIGxhYmVsLCBjbGFzc05hbWUsIHJlcXVpcmVkLFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxMYWJlbENvbnRhaW5lciBlcnJvcj17ZXJyb3J9PlxuICAgICAgICB7bGFiZWwgJiYgPExhYmVsPntsYWJlbH08L0xhYmVsPn1cbiAgICAgICAge3JlcXVpcmVkICYmXG4gICAgICAgIDxSZXF1aXJlZEluZGljYXRvcj4qPC9SZXF1aXJlZEluZGljYXRvcj59XG4gICAgICA8L0xhYmVsQ29udGFpbmVyPlxuICAgICAgPFZhbHVlQ29udGFpbmVyIGVycm9yPXtlcnJvcn0+XG4gICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IG1vZGlmeUNoaWxkcmVuKGNoaWxkLCBwcm9wcykpfVxuICAgICAgICB7c2hvd0Vycm9yICYmXG4gICAgICAgIDxFcnJvckNvbnRhaW5lcj5cbiAgICAgICAgICB7ZXJyb3IgJiYgPEVycm9yTWVzc2FnZT57ZXJyb3J9PC9FcnJvck1lc3NhZ2U+fVxuICAgICAgICA8L0Vycm9yQ29udGFpbmVyPn1cbiAgICAgIDwvVmFsdWVDb250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5Db250ZW50SW5wdXRSb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYm9vbF0pLFxuICBzaG93RXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5Db250ZW50SW5wdXRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBsYWJlbDogJycsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbiAgY2hpbGRyZW46IG51bGwsXG4gIGVycm9yOiAnJyxcbiAgc2hvd0Vycm9yOiB0cnVlLFxuICBjbGFzc05hbWU6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50SW5wdXRSb3c7XG4iXX0=