var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  min-width: ', ';\n  color: ', ';\n'], ['\n  min-width: ', ';\n  color: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n'], ['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  height: ', ';\n  display: flex;\n  align-items: center;\n'], ['\n  height: ', ';\n  display: flex;\n  align-items: center;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  color: ', ';\n'], ['\n  color: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n'], ['\n  margin-left: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  margin-right: ', ';\n'], ['\n  margin-right: ', ';\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

/* eslint-disable no-confusing-arrow */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwidGhlbWUiLCJnZXRFcnJvclN0eWxlcyIsImVycm9yIiwidGV4dCIsImNvbG9yIiwiQ29udGFpbmVyIiwic2VjdGlvbiIsImhhbGZHdXR0ZXJXaWR0aCIsIkxhYmVsQ29udGFpbmVyIiwiZGl2IiwiaW5wdXRSb3ciLCJsYWJlbFdpZHRoIiwicHJvcHMiLCJWYWx1ZUNvbnRhaW5lciIsIkVycm9yQ29udGFpbmVyIiwiZXJyb3JDb250YWluZXIiLCJoZWlnaHQiLCJFcnJvck1lc3NhZ2UiLCJzcGFuIiwiUmVxdWlyZWRJbmRpY2F0b3IiLCJMYWJlbCIsImxhYmVsIiwiZ3V0dGVyV2lkdGgiLCJtb2RpZnlDaGlsZHJlbiIsImNoaWxkIiwicmVxdWlyZWQiLCJhdXRvQ29tcGxldGUiLCJuZXdFbGVtZW50UHJvcHMiLCJjbGFzc05hbWUiLCJjbG9uZUVsZW1lbnQiLCJDb250ZW50SW5wdXRSb3ciLCJjaGlsZHJlbiIsInNob3dFcnJvciIsIkNoaWxkcmVuIiwibWFwIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsbUJBQW5COztBQUVBO0FBQ0EsU0FBU0MsS0FBVCxRQUFzQixpQkFBdEI7O0FBRUEsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLFNBQVNDLFFBQVFGLE1BQU1HLElBQU4sQ0FBV0QsS0FBWCxDQUFpQkUsS0FBekIsR0FBaUMsU0FBMUM7QUFBQSxDQUF2Qjs7QUFFQSxJQUFNQyxZQUFZTixPQUFPTyxPQUFuQixrQkFFYU4sTUFBTU8sZUFGbkIsQ0FBTjs7QUFRQSxJQUFNQyxpQkFBaUJULE9BQU9VLEdBQXhCLG1CQUNTVCxNQUFNVSxRQUFOLENBQWVDLFVBRHhCLEVBRUs7QUFBQSxTQUFTVixlQUFlVyxNQUFNVixLQUFyQixDQUFUO0FBQUEsQ0FGTCxDQUFOOztBQUtBLElBQU1XLGlCQUFpQmQsT0FBT1UsR0FBeEIsbUJBRWM7QUFBQSxTQUFTUixlQUFlVyxNQUFNVixLQUFyQixDQUFUO0FBQUEsQ0FGZCxDQUFOOztBQU9BLElBQU1ZLGlCQUFpQmYsT0FBT1UsR0FBeEIsbUJBQ01ULE1BQU1VLFFBQU4sQ0FBZUssY0FBZixDQUE4QkMsTUFEcEMsQ0FBTjs7QUFNQSxJQUFNQyxlQUFlbEIsT0FBT21CLElBQXRCLG1CQUNLbEIsTUFBTUcsSUFBTixDQUFXRCxLQUFYLENBQWlCRSxLQUR0QixDQUFOOztBQUlBLElBQU1lLG9CQUFvQnBCLE9BQU9tQixJQUEzQixtQkFDV2xCLE1BQU1PLGVBRGpCLENBQU47O0FBSUEsSUFBTWEsUUFBUXJCLE9BQU9zQixLQUFmLG1CQUNZckIsTUFBTXNCLFdBRGxCLENBQU47O0FBSUE7Ozs7O0FBS0EsSUFBTUMsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVFaLEtBQVIsRUFBa0I7QUFBQSxNQUMvQmEsUUFEK0IsR0FDSmIsS0FESSxDQUMvQmEsUUFEK0I7QUFBQSxNQUNyQkMsWUFEcUIsR0FDSmQsS0FESSxDQUNyQmMsWUFEcUI7OztBQUd2QyxNQUFNQyxrQkFBa0I7QUFDdEJDLHFCQUFjSixNQUFNWixLQUFOLENBQVlnQixTQUFaLElBQXlCLEVBQXZDLENBRHNCO0FBRXRCSCxzQkFGc0I7QUFHdEJDO0FBSHNCLEdBQXhCOztBQU1BLFNBQU83QixNQUFNZ0MsWUFBTixDQUFtQkwsS0FBbkIsRUFBMEJHLGVBQTFCLENBQVA7QUFDRCxDQVZEOztBQVlBLElBQU1HLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ2xCLEtBQUQsRUFBVztBQUFBLE1BRS9CbUIsUUFGK0IsR0FHN0JuQixLQUg2QixDQUUvQm1CLFFBRitCO0FBQUEsTUFFckI3QixLQUZxQixHQUc3QlUsS0FINkIsQ0FFckJWLEtBRnFCO0FBQUEsTUFFZDhCLFNBRmMsR0FHN0JwQixLQUg2QixDQUVkb0IsU0FGYztBQUFBLE1BRUhYLEtBRkcsR0FHN0JULEtBSDZCLENBRUhTLEtBRkc7QUFBQSxNQUVJTyxTQUZKLEdBRzdCaEIsS0FINkIsQ0FFSWdCLFNBRko7QUFBQSxNQUVlSCxRQUZmLEdBRzdCYixLQUg2QixDQUVlYSxRQUZmOzs7QUFLakMsU0FDRTtBQUFDLGFBQUQ7QUFBQSxNQUFXLFdBQVdHLFNBQXRCO0FBQ0U7QUFBQyxvQkFBRDtBQUFBLFFBQWdCLE9BQU8xQixLQUF2QjtBQUNHbUIsZUFBUztBQUFDLGFBQUQ7QUFBQTtBQUFRQTtBQUFSLE9BRFo7QUFFR0ksa0JBQ0Q7QUFBQyx5QkFBRDtBQUFBO0FBQUE7QUFBQTtBQUhGLEtBREY7QUFNRTtBQUFDLG9CQUFEO0FBQUEsUUFBZ0IsT0FBT3ZCLEtBQXZCO0FBQ0dMLFlBQU1vQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJILFFBQW5CLEVBQTZCO0FBQUEsZUFBU1IsZUFBZUMsS0FBZixFQUFzQlosS0FBdEIsQ0FBVDtBQUFBLE9BQTdCLENBREg7QUFFR29CLG1CQUNEO0FBQUMsc0JBQUQ7QUFBQTtBQUNHOUIsaUJBQVM7QUFBQyxzQkFBRDtBQUFBO0FBQWVBO0FBQWY7QUFEWjtBQUhGO0FBTkYsR0FERjtBQWdCRCxDQXJCRDs7QUFnQ0E0QixnQkFBZ0JLLFlBQWhCLEdBQStCO0FBQzdCZCxTQUFPLEVBRHNCO0FBRTdCSSxZQUFVLEtBRm1CO0FBRzdCTSxZQUFVLElBSG1CO0FBSTdCN0IsU0FBTyxFQUpzQjtBQUs3QjhCLGFBQVcsSUFMa0I7QUFNN0JKLGFBQVc7QUFOa0IsQ0FBL0I7O0FBU0EsZUFBZUUsZUFBZiIsImZpbGUiOiJjb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25mdXNpbmctYXJyb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IGdldEVycm9yU3R5bGVzID0gZXJyb3IgPT4gZXJyb3IgPyB0aGVtZS50ZXh0LmVycm9yLmNvbG9yIDogJ2luaGVyaXQnO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogJHt0aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBAbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5gO1xuXG5jb25zdCBMYWJlbENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1pbi13aWR0aDogJHt0aGVtZS5pbnB1dFJvdy5sYWJlbFdpZHRofTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gZ2V0RXJyb3JTdHlsZXMocHJvcHMuZXJyb3IpfTtcbmA7XG5cbmNvbnN0IFZhbHVlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgPiBpbnB1dCwgPiAuZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gZ2V0RXJyb3JTdHlsZXMocHJvcHMuZXJyb3IpfTtcbiAgfVxuICBmbGV4OiAxIDEgYXV0bztcbmA7XG5cbmNvbnN0IEVycm9yQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAke3RoZW1lLmlucHV0Um93LmVycm9yQ29udGFpbmVyLmhlaWdodH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbmBcbiAgY29sb3I6ICR7dGhlbWUudGV4dC5lcnJvci5jb2xvcn07XG5gO1xuXG5jb25zdCBSZXF1aXJlZEluZGljYXRvciA9IHN0eWxlZC5zcGFuYFxuICBtYXJnaW4tbGVmdDogJHt0aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuYDtcblxuY29uc3QgTGFiZWwgPSBzdHlsZWQubGFiZWxgXG4gIG1hcmdpbi1yaWdodDogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG5gO1xuXG4vKipcbiAqIEFzc2lnbnMgZ2l2ZW4gcHJvcHMgZGlyZWN0bHkgdG8gaW5wdXQgZWxlbWVudFxuICogQHBhcmFtIGNoaWxkXG4gKiBAcGFyYW0gcHJvcHNcbiAqL1xuY29uc3QgbW9kaWZ5Q2hpbGRyZW4gPSAoY2hpbGQsIHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVxdWlyZWQsIGF1dG9Db21wbGV0ZSB9ID0gcHJvcHM7XG5cbiAgY29uc3QgbmV3RWxlbWVudFByb3BzID0ge1xuICAgIGNsYXNzTmFtZTogYCR7Y2hpbGQucHJvcHMuY2xhc3NOYW1lIHx8ICcnfWAsXG4gICAgcmVxdWlyZWQsXG4gICAgYXV0b0NvbXBsZXRlLFxuICB9O1xuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIG5ld0VsZW1lbnRQcm9wcyk7XG59O1xuXG5jb25zdCBDb250ZW50SW5wdXRSb3cgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLCBlcnJvciwgc2hvd0Vycm9yLCBsYWJlbCwgY2xhc3NOYW1lLCByZXF1aXJlZCxcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8TGFiZWxDb250YWluZXIgZXJyb3I9e2Vycm9yfT5cbiAgICAgICAge2xhYmVsICYmIDxMYWJlbD57bGFiZWx9PC9MYWJlbD59XG4gICAgICAgIHtyZXF1aXJlZCAmJlxuICAgICAgICA8UmVxdWlyZWRJbmRpY2F0b3I+KjwvUmVxdWlyZWRJbmRpY2F0b3I+fVxuICAgICAgPC9MYWJlbENvbnRhaW5lcj5cbiAgICAgIDxWYWx1ZUNvbnRhaW5lciBlcnJvcj17ZXJyb3J9PlxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiBtb2RpZnlDaGlsZHJlbihjaGlsZCwgcHJvcHMpKX1cbiAgICAgICAge3Nob3dFcnJvciAmJlxuICAgICAgICA8RXJyb3JDb250YWluZXI+XG4gICAgICAgICAge2Vycm9yICYmIDxFcnJvck1lc3NhZ2U+e2Vycm9yfTwvRXJyb3JNZXNzYWdlPn1cbiAgICAgICAgPC9FcnJvckNvbnRhaW5lcj59XG4gICAgICA8L1ZhbHVlQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuQ29udGVudElucHV0Um93LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgc2hvd0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuQ29udGVudElucHV0Um93LmRlZmF1bHRQcm9wcyA9IHtcbiAgbGFiZWw6ICcnLFxuICByZXF1aXJlZDogZmFsc2UsXG4gIGNoaWxkcmVuOiBudWxsLFxuICBlcnJvcjogJycsXG4gIHNob3dFcnJvcjogdHJ1ZSxcbiAgY2xhc3NOYW1lOiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudElucHV0Um93O1xuIl19