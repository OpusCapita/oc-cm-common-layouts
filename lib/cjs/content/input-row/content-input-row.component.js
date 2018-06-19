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

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImdldEVycm9yU3R5bGVzIiwiZXJyb3IiLCJ0aGVtZSIsInRleHQiLCJjb2xvciIsIkNvbnRhaW5lciIsInN0eWxlZCIsInNlY3Rpb24iLCJoYWxmR3V0dGVyV2lkdGgiLCJMYWJlbENvbnRhaW5lciIsImRpdiIsImlucHV0Um93IiwibGFiZWxXaWR0aCIsInByb3BzIiwiVmFsdWVDb250YWluZXIiLCJFcnJvckNvbnRhaW5lciIsImVycm9yQ29udGFpbmVyIiwiaGVpZ2h0IiwiRXJyb3JNZXNzYWdlIiwic3BhbiIsIlJlcXVpcmVkSW5kaWNhdG9yIiwiTGFiZWwiLCJsYWJlbCIsImd1dHRlcldpZHRoIiwibW9kaWZ5Q2hpbGRyZW4iLCJjaGlsZCIsInJlcXVpcmVkIiwiYXV0b0NvbXBsZXRlIiwibmV3RWxlbWVudFByb3BzIiwiY2xhc3NOYW1lIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJDb250ZW50SW5wdXRSb3ciLCJjaGlsZHJlbiIsInNob3dFcnJvciIsIkNoaWxkcmVuIiwibWFwIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7Ozs7O0FBREE7OztBQUdBLElBQU1BLGlCQUFpQixTQUFqQkEsY0FBaUI7QUFBQSxTQUFVQyxRQUFRQyxpQkFBTUMsSUFBTixDQUFXRixLQUFYLENBQWlCRyxLQUF6QixHQUFpQyxTQUEzQztBQUFBLENBQXZCOztBQUVBLElBQU1DLFlBQVlDLDJCQUFPQyxPQUFuQixrQkFFYUwsaUJBQU1NLGVBRm5CLENBQU47O0FBUUEsSUFBTUMsaUJBQWlCSCwyQkFBT0ksR0FBeEIsbUJBQ1NSLGlCQUFNUyxRQUFOLENBQWVDLFVBRHhCLEVBRUs7QUFBQSxTQUFTWixlQUFlYSxNQUFNWixLQUFyQixDQUFUO0FBQUEsQ0FGTCxDQUFOOztBQUtBLElBQU1hLGlCQUFpQlIsMkJBQU9JLEdBQXhCLG1CQUVjO0FBQUEsU0FBU1YsZUFBZWEsTUFBTVosS0FBckIsQ0FBVDtBQUFBLENBRmQsQ0FBTjs7QUFPQSxJQUFNYyxpQkFBaUJULDJCQUFPSSxHQUF4QixtQkFDTVIsaUJBQU1TLFFBQU4sQ0FBZUssY0FBZixDQUE4QkMsTUFEcEMsQ0FBTjs7QUFNQSxJQUFNQyxlQUFlWiwyQkFBT2EsSUFBdEIsbUJBQ0tqQixpQkFBTUMsSUFBTixDQUFXRixLQUFYLENBQWlCRyxLQUR0QixDQUFOOztBQUlBLElBQU1nQixvQkFBb0JkLDJCQUFPYSxJQUEzQixtQkFDV2pCLGlCQUFNTSxlQURqQixDQUFOOztBQUlBLElBQU1hLFFBQVFmLDJCQUFPZ0IsS0FBZixtQkFDWXBCLGlCQUFNcUIsV0FEbEIsQ0FBTjs7QUFJQTs7Ozs7QUFLQSxJQUFNQyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBUVosS0FBUixFQUFrQjtBQUFBLE1BQy9CYSxRQUQrQixHQUNKYixLQURJLENBQy9CYSxRQUQrQjtBQUFBLE1BQ3JCQyxZQURxQixHQUNKZCxLQURJLENBQ3JCYyxZQURxQjs7O0FBR3ZDLE1BQU1DLGtCQUFrQjtBQUN0QkMscUJBQWNKLE1BQU1aLEtBQU4sQ0FBWWdCLFNBQVosSUFBeUIsRUFBdkMsQ0FEc0I7QUFFdEJILHNCQUZzQjtBQUd0QkM7QUFIc0IsR0FBeEI7O0FBTUEsU0FBT0csZ0JBQU1DLFlBQU4sQ0FBbUJOLEtBQW5CLEVBQTBCRyxlQUExQixDQUFQO0FBQ0QsQ0FWRDs7QUFZQSxJQUFNSSxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNuQixLQUFELEVBQVc7QUFBQSxNQUUvQm9CLFFBRitCLEdBRzdCcEIsS0FINkIsQ0FFL0JvQixRQUYrQjtBQUFBLE1BRXJCaEMsS0FGcUIsR0FHN0JZLEtBSDZCLENBRXJCWixLQUZxQjtBQUFBLE1BRWRpQyxTQUZjLEdBRzdCckIsS0FINkIsQ0FFZHFCLFNBRmM7QUFBQSxNQUVIWixLQUZHLEdBRzdCVCxLQUg2QixDQUVIUyxLQUZHO0FBQUEsTUFFSU8sU0FGSixHQUc3QmhCLEtBSDZCLENBRUlnQixTQUZKO0FBQUEsTUFFZUgsUUFGZixHQUc3QmIsS0FINkIsQ0FFZWEsUUFGZjs7O0FBS2pDLFNBQ0U7QUFBQyxhQUFEO0FBQUEsTUFBVyxXQUFXRyxTQUF0QjtBQUNFO0FBQUMsb0JBQUQ7QUFBQSxRQUFnQixPQUFPNUIsS0FBdkI7QUFDR3FCLGVBQVM7QUFBQyxhQUFEO0FBQUE7QUFBUUE7QUFBUixPQURaO0FBRUdJLGtCQUNEO0FBQUMseUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFIRixLQURGO0FBTUU7QUFBQyxvQkFBRDtBQUFBLFFBQWdCLE9BQU96QixLQUF2QjtBQUNHNkIsc0JBQU1LLFFBQU4sQ0FBZUMsR0FBZixDQUFtQkgsUUFBbkIsRUFBNkI7QUFBQSxlQUFTVCxlQUFlQyxLQUFmLEVBQXNCWixLQUF0QixDQUFUO0FBQUEsT0FBN0IsQ0FESDtBQUVHcUIsbUJBQ0Q7QUFBQyxzQkFBRDtBQUFBO0FBQ0dqQyxpQkFBUztBQUFDLHNCQUFEO0FBQUE7QUFBZUE7QUFBZjtBQURaO0FBSEY7QUFORixHQURGO0FBZ0JELENBckJEOztBQWdDQStCLGdCQUFnQkssWUFBaEIsR0FBK0I7QUFDN0JmLFNBQU8sRUFEc0I7QUFFN0JJLFlBQVUsS0FGbUI7QUFHN0JPLFlBQVUsSUFIbUI7QUFJN0JoQyxTQUFPLEVBSnNCO0FBSzdCaUMsYUFBVyxJQUxrQjtBQU03QkwsYUFBVztBQU5rQixDQUEvQjs7a0JBU2VHLGUiLCJmaWxlIjoiY29udGVudC1pbnB1dC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgZ2V0RXJyb3JTdHlsZXMgPSBlcnJvciA9PiAoZXJyb3IgPyB0aGVtZS50ZXh0LmVycm9yLmNvbG9yIDogJ2luaGVyaXQnKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuY29uc3QgTGFiZWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4td2lkdGg6ICR7dGhlbWUuaW5wdXRSb3cubGFiZWxXaWR0aH07XG4gIGNvbG9yOiAke3Byb3BzID0+IGdldEVycm9yU3R5bGVzKHByb3BzLmVycm9yKX07XG5gO1xuXG5jb25zdCBWYWx1ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gID4gaW5wdXQsID4gLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IGdldEVycm9yU3R5bGVzKHByb3BzLmVycm9yKX07XG4gIH1cbiAgZmxleDogMSAxIGF1dG87XG5gO1xuXG5jb25zdCBFcnJvckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogJHt0aGVtZS5pbnB1dFJvdy5lcnJvckNvbnRhaW5lci5oZWlnaHR9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3RoZW1lLnRleHQuZXJyb3IuY29sb3J9O1xuYDtcblxuY29uc3QgUmVxdWlyZWRJbmRpY2F0b3IgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbmA7XG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuYDtcblxuLyoqXG4gKiBBc3NpZ25zIGdpdmVuIHByb3BzIGRpcmVjdGx5IHRvIGlucHV0IGVsZW1lbnRcbiAqIEBwYXJhbSBjaGlsZFxuICogQHBhcmFtIHByb3BzXG4gKi9cbmNvbnN0IG1vZGlmeUNoaWxkcmVuID0gKGNoaWxkLCBwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlcXVpcmVkLCBhdXRvQ29tcGxldGUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG5ld0VsZW1lbnRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6IGAke2NoaWxkLnByb3BzLmNsYXNzTmFtZSB8fCAnJ31gLFxuICAgIHJlcXVpcmVkLFxuICAgIGF1dG9Db21wbGV0ZSxcbiAgfTtcblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBuZXdFbGVtZW50UHJvcHMpO1xufTtcblxuY29uc3QgQ29udGVudElucHV0Um93ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbiwgZXJyb3IsIHNob3dFcnJvciwgbGFiZWwsIGNsYXNzTmFtZSwgcmVxdWlyZWQsXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPExhYmVsQ29udGFpbmVyIGVycm9yPXtlcnJvcn0+XG4gICAgICAgIHtsYWJlbCAmJiA8TGFiZWw+e2xhYmVsfTwvTGFiZWw+fVxuICAgICAgICB7cmVxdWlyZWQgJiZcbiAgICAgICAgPFJlcXVpcmVkSW5kaWNhdG9yPio8L1JlcXVpcmVkSW5kaWNhdG9yPn1cbiAgICAgIDwvTGFiZWxDb250YWluZXI+XG4gICAgICA8VmFsdWVDb250YWluZXIgZXJyb3I9e2Vycm9yfT5cbiAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4gbW9kaWZ5Q2hpbGRyZW4oY2hpbGQsIHByb3BzKSl9XG4gICAgICAgIHtzaG93RXJyb3IgJiZcbiAgICAgICAgPEVycm9yQ29udGFpbmVyPlxuICAgICAgICAgIHtlcnJvciAmJiA8RXJyb3JNZXNzYWdlPntlcnJvcn08L0Vycm9yTWVzc2FnZT59XG4gICAgICAgIDwvRXJyb3JDb250YWluZXI+fVxuICAgICAgPC9WYWx1ZUNvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkNvbnRlbnRJbnB1dFJvdy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ib29sXSksXG4gIHNob3dFcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkNvbnRlbnRJbnB1dFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGxhYmVsOiAnJyxcbiAgcmVxdWlyZWQ6IGZhbHNlLFxuICBjaGlsZHJlbjogbnVsbCxcbiAgZXJyb3I6ICcnLFxuICBzaG93RXJyb3I6IHRydWUsXG4gIGNsYXNzTmFtZTogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRJbnB1dFJvdztcbiJdfQ==