var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  min-width: ', ';\n  color: ', ';\n'], ['\n  min-width: ', ';\n  color: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n'], ['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  display: flex;\n  align-items: center;\n'], ['\n  height: ', ';\n  display: flex;\n  align-items: center;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  color: ', ';\n'], ['\n  color: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n'], ['\n  margin-left: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  margin-right: ', ';\n'], ['\n  margin-right: ', ';\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// App imports
import { theme } from '../../constants';

var getErrorStyles = function getErrorStyles(error) {
  return error ? theme.text.error.color : 'inherit';
};

var Container = styled.section(_templateObject, theme.halfGutterWidth);

var LabelContainer = styled.div(_templateObject2, theme.inputRow.labelWidth, function (props) {
  return getErrorStyles(props.error);
});

var ValueContainer = styled.div(_templateObject3, function (props) {
  return getErrorStyles(props.error);
});

var ErrorContainer = styled.div(_templateObject4, theme.inputRow.errorContainer.height);

var ErrorMessage = styled.span(_templateObject5, theme.text.error.color);

var RequiredIndicator = styled.span(_templateObject6, theme.halfGutterWidth);

var Label = styled.label(_templateObject7, theme.gutterWidth);

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

  return React.cloneElement(child, newElementProps);
};

var ContentInputRow = function ContentInputRow(props) {
  var children = props.children,
      error = props.error,
      showError = props.showError,
      label = props.label,
      className = props.className,
      required = props.required;


  return React.createElement(
    Container,
    { className: className },
    React.createElement(
      LabelContainer,
      { error: error },
      label && React.createElement(
        Label,
        null,
        label
      ),
      required && React.createElement(
        RequiredIndicator,
        null,
        '*'
      )
    ),
    React.createElement(
      ValueContainer,
      { error: error },
      React.Children.map(children, function (child) {
        return modifyChildren(child, props);
      }),
      showError && React.createElement(
        ErrorContainer,
        null,
        error && React.createElement(
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

export default ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwidGhlbWUiLCJnZXRFcnJvclN0eWxlcyIsImVycm9yIiwidGV4dCIsImNvbG9yIiwiQ29udGFpbmVyIiwic2VjdGlvbiIsImhhbGZHdXR0ZXJXaWR0aCIsIkxhYmVsQ29udGFpbmVyIiwiZGl2IiwiaW5wdXRSb3ciLCJsYWJlbFdpZHRoIiwicHJvcHMiLCJWYWx1ZUNvbnRhaW5lciIsIkVycm9yQ29udGFpbmVyIiwiZXJyb3JDb250YWluZXIiLCJoZWlnaHQiLCJFcnJvck1lc3NhZ2UiLCJzcGFuIiwiUmVxdWlyZWRJbmRpY2F0b3IiLCJMYWJlbCIsImxhYmVsIiwiZ3V0dGVyV2lkdGgiLCJtb2RpZnlDaGlsZHJlbiIsImNoaWxkIiwicmVxdWlyZWQiLCJhdXRvQ29tcGxldGUiLCJuZXdFbGVtZW50UHJvcHMiLCJjbGFzc05hbWUiLCJjbG9uZUVsZW1lbnQiLCJDb250ZW50SW5wdXRSb3ciLCJjaGlsZHJlbiIsInNob3dFcnJvciIsIkNoaWxkcmVuIiwibWFwIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjs7QUFFQTtBQUNBLFNBQVNDLEtBQVQsUUFBc0IsaUJBQXRCOztBQUVBLElBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUI7QUFBQSxTQUFVQyxRQUFRRixNQUFNRyxJQUFOLENBQVdELEtBQVgsQ0FBaUJFLEtBQXpCLEdBQWlDLFNBQTNDO0FBQUEsQ0FBdkI7O0FBRUEsSUFBTUMsWUFBWU4sT0FBT08sT0FBbkIsa0JBRWFOLE1BQU1PLGVBRm5CLENBQU47O0FBUUEsSUFBTUMsaUJBQWlCVCxPQUFPVSxHQUF4QixtQkFDU1QsTUFBTVUsUUFBTixDQUFlQyxVQUR4QixFQUVLO0FBQUEsU0FBU1YsZUFBZVcsTUFBTVYsS0FBckIsQ0FBVDtBQUFBLENBRkwsQ0FBTjs7QUFLQSxJQUFNVyxpQkFBaUJkLE9BQU9VLEdBQXhCLG1CQUVjO0FBQUEsU0FBU1IsZUFBZVcsTUFBTVYsS0FBckIsQ0FBVDtBQUFBLENBRmQsQ0FBTjs7QUFPQSxJQUFNWSxpQkFBaUJmLE9BQU9VLEdBQXhCLG1CQUNNVCxNQUFNVSxRQUFOLENBQWVLLGNBQWYsQ0FBOEJDLE1BRHBDLENBQU47O0FBTUEsSUFBTUMsZUFBZWxCLE9BQU9tQixJQUF0QixtQkFDS2xCLE1BQU1HLElBQU4sQ0FBV0QsS0FBWCxDQUFpQkUsS0FEdEIsQ0FBTjs7QUFJQSxJQUFNZSxvQkFBb0JwQixPQUFPbUIsSUFBM0IsbUJBQ1dsQixNQUFNTyxlQURqQixDQUFOOztBQUlBLElBQU1hLFFBQVFyQixPQUFPc0IsS0FBZixtQkFDWXJCLE1BQU1zQixXQURsQixDQUFOOztBQUlBOzs7OztBQUtBLElBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFRWixLQUFSLEVBQWtCO0FBQUEsTUFDL0JhLFFBRCtCLEdBQ0piLEtBREksQ0FDL0JhLFFBRCtCO0FBQUEsTUFDckJDLFlBRHFCLEdBQ0pkLEtBREksQ0FDckJjLFlBRHFCOzs7QUFHdkMsTUFBTUMsa0JBQWtCO0FBQ3RCQyxxQkFBY0osTUFBTVosS0FBTixDQUFZZ0IsU0FBWixJQUF5QixFQUF2QyxDQURzQjtBQUV0Qkgsc0JBRnNCO0FBR3RCQztBQUhzQixHQUF4Qjs7QUFNQSxTQUFPN0IsTUFBTWdDLFlBQU4sQ0FBbUJMLEtBQW5CLEVBQTBCRyxlQUExQixDQUFQO0FBQ0QsQ0FWRDs7QUFZQSxJQUFNRyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNsQixLQUFELEVBQVc7QUFBQSxNQUUvQm1CLFFBRitCLEdBRzdCbkIsS0FINkIsQ0FFL0JtQixRQUYrQjtBQUFBLE1BRXJCN0IsS0FGcUIsR0FHN0JVLEtBSDZCLENBRXJCVixLQUZxQjtBQUFBLE1BRWQ4QixTQUZjLEdBRzdCcEIsS0FINkIsQ0FFZG9CLFNBRmM7QUFBQSxNQUVIWCxLQUZHLEdBRzdCVCxLQUg2QixDQUVIUyxLQUZHO0FBQUEsTUFFSU8sU0FGSixHQUc3QmhCLEtBSDZCLENBRUlnQixTQUZKO0FBQUEsTUFFZUgsUUFGZixHQUc3QmIsS0FINkIsQ0FFZWEsUUFGZjs7O0FBS2pDLFNBQ0U7QUFBQyxhQUFEO0FBQUEsTUFBVyxXQUFXRyxTQUF0QjtBQUNFO0FBQUMsb0JBQUQ7QUFBQSxRQUFnQixPQUFPMUIsS0FBdkI7QUFDR21CLGVBQVM7QUFBQyxhQUFEO0FBQUE7QUFBUUE7QUFBUixPQURaO0FBRUdJLGtCQUNEO0FBQUMseUJBQUQ7QUFBQTtBQUFBO0FBQUE7QUFIRixLQURGO0FBTUU7QUFBQyxvQkFBRDtBQUFBLFFBQWdCLE9BQU92QixLQUF2QjtBQUNHTCxZQUFNb0MsUUFBTixDQUFlQyxHQUFmLENBQW1CSCxRQUFuQixFQUE2QjtBQUFBLGVBQVNSLGVBQWVDLEtBQWYsRUFBc0JaLEtBQXRCLENBQVQ7QUFBQSxPQUE3QixDQURIO0FBRUdvQixtQkFDRDtBQUFDLHNCQUFEO0FBQUE7QUFDRzlCLGlCQUFTO0FBQUMsc0JBQUQ7QUFBQTtBQUFlQTtBQUFmO0FBRFo7QUFIRjtBQU5GLEdBREY7QUFnQkQsQ0FyQkQ7O0FBZ0NBNEIsZ0JBQWdCSyxZQUFoQixHQUErQjtBQUM3QmQsU0FBTyxFQURzQjtBQUU3QkksWUFBVSxLQUZtQjtBQUc3Qk0sWUFBVSxJQUhtQjtBQUk3QjdCLFNBQU8sRUFKc0I7QUFLN0I4QixhQUFXLElBTGtCO0FBTTdCSixhQUFXO0FBTmtCLENBQS9COztBQVNBLGVBQWVFLGVBQWYiLCJmaWxlIjoiY29udGVudC1pbnB1dC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuLy8gQXBwIGltcG9ydHNcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgZ2V0RXJyb3JTdHlsZXMgPSBlcnJvciA9PiAoZXJyb3IgPyB0aGVtZS50ZXh0LmVycm9yLmNvbG9yIDogJ2luaGVyaXQnKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206ICR7dGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuY29uc3QgTGFiZWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4td2lkdGg6ICR7dGhlbWUuaW5wdXRSb3cubGFiZWxXaWR0aH07XG4gIGNvbG9yOiAke3Byb3BzID0+IGdldEVycm9yU3R5bGVzKHByb3BzLmVycm9yKX07XG5gO1xuXG5jb25zdCBWYWx1ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gID4gaW5wdXQsID4gLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IGdldEVycm9yU3R5bGVzKHByb3BzLmVycm9yKX07XG4gIH1cbiAgZmxleDogMSAxIGF1dG87XG5gO1xuXG5jb25zdCBFcnJvckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogJHt0aGVtZS5pbnB1dFJvdy5lcnJvckNvbnRhaW5lci5oZWlnaHR9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3RoZW1lLnRleHQuZXJyb3IuY29sb3J9O1xuYDtcblxuY29uc3QgUmVxdWlyZWRJbmRpY2F0b3IgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luLWxlZnQ6ICR7dGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbmA7XG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBtYXJnaW4tcmlnaHQ6ICR7dGhlbWUuZ3V0dGVyV2lkdGh9O1xuYDtcblxuLyoqXG4gKiBBc3NpZ25zIGdpdmVuIHByb3BzIGRpcmVjdGx5IHRvIGlucHV0IGVsZW1lbnRcbiAqIEBwYXJhbSBjaGlsZFxuICogQHBhcmFtIHByb3BzXG4gKi9cbmNvbnN0IG1vZGlmeUNoaWxkcmVuID0gKGNoaWxkLCBwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlcXVpcmVkLCBhdXRvQ29tcGxldGUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG5ld0VsZW1lbnRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6IGAke2NoaWxkLnByb3BzLmNsYXNzTmFtZSB8fCAnJ31gLFxuICAgIHJlcXVpcmVkLFxuICAgIGF1dG9Db21wbGV0ZSxcbiAgfTtcblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBuZXdFbGVtZW50UHJvcHMpO1xufTtcblxuY29uc3QgQ29udGVudElucHV0Um93ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbiwgZXJyb3IsIHNob3dFcnJvciwgbGFiZWwsIGNsYXNzTmFtZSwgcmVxdWlyZWQsXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPExhYmVsQ29udGFpbmVyIGVycm9yPXtlcnJvcn0+XG4gICAgICAgIHtsYWJlbCAmJiA8TGFiZWw+e2xhYmVsfTwvTGFiZWw+fVxuICAgICAgICB7cmVxdWlyZWQgJiZcbiAgICAgICAgPFJlcXVpcmVkSW5kaWNhdG9yPio8L1JlcXVpcmVkSW5kaWNhdG9yPn1cbiAgICAgIDwvTGFiZWxDb250YWluZXI+XG4gICAgICA8VmFsdWVDb250YWluZXIgZXJyb3I9e2Vycm9yfT5cbiAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgY2hpbGQgPT4gbW9kaWZ5Q2hpbGRyZW4oY2hpbGQsIHByb3BzKSl9XG4gICAgICAgIHtzaG93RXJyb3IgJiZcbiAgICAgICAgPEVycm9yQ29udGFpbmVyPlxuICAgICAgICAgIHtlcnJvciAmJiA8RXJyb3JNZXNzYWdlPntlcnJvcn08L0Vycm9yTWVzc2FnZT59XG4gICAgICAgIDwvRXJyb3JDb250YWluZXI+fVxuICAgICAgPC9WYWx1ZUNvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkNvbnRlbnRJbnB1dFJvdy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgbGFiZWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ib29sXSksXG4gIHNob3dFcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkNvbnRlbnRJbnB1dFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGxhYmVsOiAnJyxcbiAgcmVxdWlyZWQ6IGZhbHNlLFxuICBjaGlsZHJlbjogbnVsbCxcbiAgZXJyb3I6ICcnLFxuICBzaG93RXJyb3I6IHRydWUsXG4gIGNsYXNzTmFtZTogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRJbnB1dFJvdztcbiJdfQ==