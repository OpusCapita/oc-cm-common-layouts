var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: ', ';\n  min-width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n'], ['\n  width: ', ';\n  min-width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n'], ['\n  > input, > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n'], ['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  color: ', ';\n  font-size: ', ';\n'], ['\n  color: ', ';\n  font-size: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n  font-size: ', ';\n'], ['\n  margin-left: ', ';\n  font-size: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  margin-right: ', ';\n  margin-bottom: ', ';\n'], ['\n  margin-right: ', ';\n  margin-bottom: ', ';\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

var getErrorStyles = function getErrorStyles(error, theme) {
  return error ? theme.text.error.color : '';
};

var getContainerDirection = function getContainerDirection(isCol, theme) {
  return isCol ? theme.container.inputColumn : theme.container.inputRow;
};

var getErrorContainerMinHeight = function getErrorContainerMinHeight(isCol, theme) {
  return isCol ? theme.inputColumn.errorContainer.height : theme.inputRow.errorContainer.height;
};

var getRequiredIndicatorFontSize = function getRequiredIndicatorFontSize(isCol, theme) {
  return isCol ? theme.inputColumn.requiredIndicator.fontSize : theme.inputRow.requiredIndicator.fontSize;
};

var getLabelRightMargin = function getLabelRightMargin(isCol, theme) {
  return isCol ? 0 : theme.gutterWidth;
};
var getLabelBottomMargin = function getLabelBottomMargin(isCol, theme) {
  return isCol ? theme.halfGutterWidth : 0;
};

var Container = styled.section(_templateObject, function (props) {
  return getContainerDirection(props.asColumn, props.theme);
}, function (props) {
  return props.theme.halfGutterWidth;
});

var LabelContainer = styled.div(_templateObject2, function (props) {
  return props.asColumn ? props.theme.inputColumn.labelWidth : props.theme.inputRow.labelWidth;
}, function (props) {
  return props.asColumn ? props.theme.inputColumn.labelWidth : props.theme.inputRow.labelWidth;
}, function (props) {
  return getErrorStyles(props.error, props.theme);
}, function (props) {
  return props.showError && !props.asColumn ? getErrorContainerMinHeight(props.asColumn, props.theme) : 0;
});

var ValueContainer = styled.div(_templateObject3, function (props) {
  return getErrorStyles(props.error, props.theme);
});

var ErrorContainer = styled.div(_templateObject4, function (props) {
  return getErrorContainerMinHeight(props.asColumn, props.theme);
});

var ErrorMessage = styled.span(_templateObject5, function (props) {
  return props.theme.text.error.color;
}, function (props) {
  return props.theme.text.error.fontSize;
});

var RequiredIndicator = styled.span(_templateObject6, function (props) {
  return props.theme.halfGutterWidth;
}, function (props) {
  return getRequiredIndicatorFontSize(props.asColumn, props.theme);
});

var Label = styled.label(_templateObject7, function (props) {
  return getLabelRightMargin(props.asColumn, props.theme);
}, function (props) {
  return getLabelBottomMargin(props.asColumn, props.theme);
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

  return React.cloneElement(child, newElementProps);
};

var ContentInputRow = function ContentInputRow(props) {
  var children = props.children,
      error = props.error,
      showError = props.showError,
      label = props.label,
      className = props.className,
      required = props.required,
      id = props.id,
      asColumn = props.asColumn;


  return React.createElement(
    Container,
    { asColumn: asColumn, className: className, id: id },
    React.createElement(
      LabelContainer,
      { asColumn: asColumn, error: error, showError: showError },
      label && React.createElement(
        Label,
        { asColumn: asColumn },
        label,
        required && React.createElement(
          RequiredIndicator,
          { asColumn: asColumn },
          '*'
        )
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
        { asColumn: asColumn },
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
  className: '',
  asColumn: false
};

export default ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiZ2V0RXJyb3JTdHlsZXMiLCJlcnJvciIsInRoZW1lIiwidGV4dCIsImNvbG9yIiwiZ2V0Q29udGFpbmVyRGlyZWN0aW9uIiwiaXNDb2wiLCJjb250YWluZXIiLCJpbnB1dENvbHVtbiIsImlucHV0Um93IiwiZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQiLCJlcnJvckNvbnRhaW5lciIsImhlaWdodCIsImdldFJlcXVpcmVkSW5kaWNhdG9yRm9udFNpemUiLCJyZXF1aXJlZEluZGljYXRvciIsImZvbnRTaXplIiwiZ2V0TGFiZWxSaWdodE1hcmdpbiIsImd1dHRlcldpZHRoIiwiZ2V0TGFiZWxCb3R0b21NYXJnaW4iLCJoYWxmR3V0dGVyV2lkdGgiLCJDb250YWluZXIiLCJzZWN0aW9uIiwicHJvcHMiLCJhc0NvbHVtbiIsIkxhYmVsQ29udGFpbmVyIiwiZGl2IiwibGFiZWxXaWR0aCIsInNob3dFcnJvciIsIlZhbHVlQ29udGFpbmVyIiwiRXJyb3JDb250YWluZXIiLCJFcnJvck1lc3NhZ2UiLCJzcGFuIiwiUmVxdWlyZWRJbmRpY2F0b3IiLCJMYWJlbCIsImxhYmVsIiwibW9kaWZ5Q2hpbGRyZW4iLCJjaGlsZCIsInJlcXVpcmVkIiwiYXV0b0NvbXBsZXRlIiwibmV3RWxlbWVudFByb3BzIiwiY2xhc3NOYW1lIiwiY2xvbmVFbGVtZW50IiwiQ29udGVudElucHV0Um93IiwiY2hpbGRyZW4iLCJpZCIsIkNoaWxkcmVuIiwibWFwIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFuQjs7QUFFQSxJQUFNQyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLFNBQW1CRCxRQUFRQyxNQUFNQyxJQUFOLENBQVdGLEtBQVgsQ0FBaUJHLEtBQXpCLEdBQWlDLEVBQXBEO0FBQUEsQ0FBdkI7O0FBRUEsSUFBTUMsd0JBQXdCLFNBQXhCQSxxQkFBd0IsQ0FBQ0MsS0FBRCxFQUFRSixLQUFSO0FBQUEsU0FDM0JJLFFBQVFKLE1BQU1LLFNBQU4sQ0FBZ0JDLFdBQXhCLEdBQXNDTixNQUFNSyxTQUFOLENBQWdCRSxRQUQzQjtBQUFBLENBQTlCOztBQUdBLElBQU1DLDZCQUE2QixTQUE3QkEsMEJBQTZCLENBQUNKLEtBQUQsRUFBUUosS0FBUjtBQUFBLFNBQ2hDSSxRQUFRSixNQUFNTSxXQUFOLENBQWtCRyxjQUFsQixDQUFpQ0MsTUFBekMsR0FBa0RWLE1BQU1PLFFBQU4sQ0FBZUUsY0FBZixDQUE4QkMsTUFEaEQ7QUFBQSxDQUFuQzs7QUFHQSxJQUFNQywrQkFBK0IsU0FBL0JBLDRCQUErQixDQUFDUCxLQUFELEVBQVFKLEtBQVI7QUFBQSxTQUNsQ0ksUUFDQ0osTUFBTU0sV0FBTixDQUFrQk0saUJBQWxCLENBQW9DQyxRQURyQyxHQUNnRGIsTUFBTU8sUUFBTixDQUFlSyxpQkFBZixDQUFpQ0MsUUFGL0M7QUFBQSxDQUFyQzs7QUFJQSxJQUFNQyxzQkFBc0IsU0FBdEJBLG1CQUFzQixDQUFDVixLQUFELEVBQVFKLEtBQVI7QUFBQSxTQUFtQkksUUFBUSxDQUFSLEdBQVlKLE1BQU1lLFdBQXJDO0FBQUEsQ0FBNUI7QUFDQSxJQUFNQyx1QkFBdUIsU0FBdkJBLG9CQUF1QixDQUFDWixLQUFELEVBQVFKLEtBQVI7QUFBQSxTQUFtQkksUUFBUUosTUFBTWlCLGVBQWQsR0FBZ0MsQ0FBbkQ7QUFBQSxDQUE3Qjs7QUFFQSxJQUFNQyxZQUFZckIsT0FBT3NCLE9BQW5CLGtCQUVjO0FBQUEsU0FBU2hCLHNCQUFzQmlCLE1BQU1DLFFBQTVCLEVBQXNDRCxNQUFNcEIsS0FBNUMsQ0FBVDtBQUFBLENBRmQsRUFHYTtBQUFBLFNBQVNvQixNQUFNcEIsS0FBTixDQUFZaUIsZUFBckI7QUFBQSxDQUhiLENBQU47O0FBU0EsSUFBTUssaUJBQWlCekIsT0FBTzBCLEdBQXhCLG1CQUNLO0FBQUEsU0FBVUgsTUFBTUMsUUFBTixHQUFpQkQsTUFBTXBCLEtBQU4sQ0FBWU0sV0FBWixDQUF3QmtCLFVBQXpDLEdBQXNESixNQUFNcEIsS0FBTixDQUFZTyxRQUFaLENBQXFCaUIsVUFBckY7QUFBQSxDQURMLEVBRVM7QUFBQSxTQUFVSixNQUFNQyxRQUFOLEdBQWlCRCxNQUFNcEIsS0FBTixDQUFZTSxXQUFaLENBQXdCa0IsVUFBekMsR0FBc0RKLE1BQU1wQixLQUFOLENBQVlPLFFBQVosQ0FBcUJpQixVQUFyRjtBQUFBLENBRlQsRUFHSztBQUFBLFNBQVMxQixlQUFlc0IsTUFBTXJCLEtBQXJCLEVBQTRCcUIsTUFBTXBCLEtBQWxDLENBQVQ7QUFBQSxDQUhMLEVBSWM7QUFBQSxTQUFVb0IsTUFBTUssU0FBTixJQUFtQixDQUFDTCxNQUFNQyxRQUExQixHQUFxQ2IsMkJBQTJCWSxNQUFNQyxRQUFqQyxFQUEyQ0QsTUFBTXBCLEtBQWpELENBQXJDLEdBQStGLENBQXpHO0FBQUEsQ0FKZCxDQUFOOztBQVNBLElBQU0wQixpQkFBaUI3QixPQUFPMEIsR0FBeEIsbUJBRWM7QUFBQSxTQUFTekIsZUFBZXNCLE1BQU1yQixLQUFyQixFQUE0QnFCLE1BQU1wQixLQUFsQyxDQUFUO0FBQUEsQ0FGZCxDQUFOOztBQU9BLElBQU0yQixpQkFBaUI5QixPQUFPMEIsR0FBeEIsbUJBQ1U7QUFBQSxTQUFTZiwyQkFBMkJZLE1BQU1DLFFBQWpDLEVBQTJDRCxNQUFNcEIsS0FBakQsQ0FBVDtBQUFBLENBRFYsQ0FBTjs7QUFNQSxJQUFNNEIsZUFBZS9CLE9BQU9nQyxJQUF0QixtQkFDSztBQUFBLFNBQVNULE1BQU1wQixLQUFOLENBQVlDLElBQVosQ0FBaUJGLEtBQWpCLENBQXVCRyxLQUFoQztBQUFBLENBREwsRUFFUztBQUFBLFNBQVNrQixNQUFNcEIsS0FBTixDQUFZQyxJQUFaLENBQWlCRixLQUFqQixDQUF1QmMsUUFBaEM7QUFBQSxDQUZULENBQU47O0FBS0EsSUFBTWlCLG9CQUFvQmpDLE9BQU9nQyxJQUEzQixtQkFDVztBQUFBLFNBQVNULE1BQU1wQixLQUFOLENBQVlpQixlQUFyQjtBQUFBLENBRFgsRUFFUztBQUFBLFNBQVNOLDZCQUE2QlMsTUFBTUMsUUFBbkMsRUFBNkNELE1BQU1wQixLQUFuRCxDQUFUO0FBQUEsQ0FGVCxDQUFOOztBQUtBLElBQU0rQixRQUFRbEMsT0FBT21DLEtBQWYsbUJBQ1k7QUFBQSxTQUFTbEIsb0JBQW9CTSxNQUFNQyxRQUExQixFQUFvQ0QsTUFBTXBCLEtBQTFDLENBQVQ7QUFBQSxDQURaLEVBRWE7QUFBQSxTQUFTZ0IscUJBQXFCSSxNQUFNQyxRQUEzQixFQUFxQ0QsTUFBTXBCLEtBQTNDLENBQVQ7QUFBQSxDQUZiLENBQU47O0FBS0E7Ozs7O0FBS0EsSUFBTWlDLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRCxFQUFRZCxLQUFSLEVBQWtCO0FBQUEsTUFDL0JlLFFBRCtCLEdBQ0pmLEtBREksQ0FDL0JlLFFBRCtCO0FBQUEsTUFDckJDLFlBRHFCLEdBQ0poQixLQURJLENBQ3JCZ0IsWUFEcUI7OztBQUd2QyxNQUFNQyxrQkFBa0I7QUFDdEJDLHFCQUFjSixNQUFNZCxLQUFOLENBQVlrQixTQUFaLElBQXlCLEVBQXZDLENBRHNCO0FBRXRCSCxzQkFGc0I7QUFHdEJDO0FBSHNCLEdBQXhCOztBQU1BLFNBQU96QyxNQUFNNEMsWUFBTixDQUFtQkwsS0FBbkIsRUFBMEJHLGVBQTFCLENBQVA7QUFDRCxDQVZEOztBQVlBLElBQU1HLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ3BCLEtBQUQsRUFBVztBQUFBLE1BRS9CcUIsUUFGK0IsR0FHN0JyQixLQUg2QixDQUUvQnFCLFFBRitCO0FBQUEsTUFFckIxQyxLQUZxQixHQUc3QnFCLEtBSDZCLENBRXJCckIsS0FGcUI7QUFBQSxNQUVkMEIsU0FGYyxHQUc3QkwsS0FINkIsQ0FFZEssU0FGYztBQUFBLE1BRUhPLEtBRkcsR0FHN0JaLEtBSDZCLENBRUhZLEtBRkc7QUFBQSxNQUVJTSxTQUZKLEdBRzdCbEIsS0FINkIsQ0FFSWtCLFNBRko7QUFBQSxNQUVlSCxRQUZmLEdBRzdCZixLQUg2QixDQUVlZSxRQUZmO0FBQUEsTUFFeUJPLEVBRnpCLEdBRzdCdEIsS0FINkIsQ0FFeUJzQixFQUZ6QjtBQUFBLE1BRTZCckIsUUFGN0IsR0FHN0JELEtBSDZCLENBRTZCQyxRQUY3Qjs7O0FBS2pDLFNBQ0U7QUFBQyxhQUFEO0FBQUEsTUFBVyxVQUFVQSxRQUFyQixFQUErQixXQUFXaUIsU0FBMUMsRUFBcUQsSUFBSUksRUFBekQ7QUFDRTtBQUFDLG9CQUFEO0FBQUEsUUFBZ0IsVUFBVXJCLFFBQTFCLEVBQW9DLE9BQU90QixLQUEzQyxFQUFrRCxXQUFXMEIsU0FBN0Q7QUFDR08sZUFDRDtBQUFDLGFBQUQ7QUFBQSxVQUFPLFVBQVVYLFFBQWpCO0FBQTRCVyxhQUE1QjtBQUNHRyxvQkFBWTtBQUFDLDJCQUFEO0FBQUEsWUFBbUIsVUFBVWQsUUFBN0I7QUFBQTtBQUFBO0FBRGY7QUFGRixLQURGO0FBT0U7QUFBQyxvQkFBRDtBQUFBLFFBQWdCLE9BQU90QixLQUF2QjtBQUNHSixZQUFNZ0QsUUFBTixDQUFlQyxHQUFmLENBQW1CSCxRQUFuQixFQUE2QjtBQUFBLGVBQVNSLGVBQWVDLEtBQWYsRUFBc0JkLEtBQXRCLENBQVQ7QUFBQSxPQUE3QixDQURIO0FBRUdLLG1CQUNEO0FBQUMsc0JBQUQ7QUFBQSxVQUFnQixVQUFVSixRQUExQjtBQUNHdEIsaUJBQVM7QUFBQyxzQkFBRDtBQUFBO0FBQWVBO0FBQWY7QUFEWjtBQUhGO0FBUEYsR0FERjtBQWlCRCxDQXRCRDs7QUFtQ0F5QyxnQkFBZ0JLLFlBQWhCLEdBQStCO0FBQzdCYixTQUFPLEVBRHNCO0FBRTdCRyxZQUFVLEtBRm1CO0FBRzdCTSxZQUFVLElBSG1CO0FBSTdCMUMsU0FBTyxFQUpzQjtBQUs3QjBCLGFBQVcsSUFMa0I7QUFNN0JhLGFBQVcsRUFOa0I7QUFPN0JqQixZQUFVO0FBUG1CLENBQS9COztBQVVBLGVBQWVtQixlQUFmIiwiZmlsZSI6ImNvbnRlbnQtaW5wdXQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IGdldEVycm9yU3R5bGVzID0gKGVycm9yLCB0aGVtZSkgPT4gKGVycm9yID8gdGhlbWUudGV4dC5lcnJvci5jb2xvciA6ICcnKTtcblxuY29uc3QgZ2V0Q29udGFpbmVyRGlyZWN0aW9uID0gKGlzQ29sLCB0aGVtZSkgPT5cbiAgKGlzQ29sID8gdGhlbWUuY29udGFpbmVyLmlucHV0Q29sdW1uIDogdGhlbWUuY29udGFpbmVyLmlucHV0Um93KTtcblxuY29uc3QgZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQgPSAoaXNDb2wsIHRoZW1lKSA9PlxuICAoaXNDb2wgPyB0aGVtZS5pbnB1dENvbHVtbi5lcnJvckNvbnRhaW5lci5oZWlnaHQgOiB0aGVtZS5pbnB1dFJvdy5lcnJvckNvbnRhaW5lci5oZWlnaHQpO1xuXG5jb25zdCBnZXRSZXF1aXJlZEluZGljYXRvckZvbnRTaXplID0gKGlzQ29sLCB0aGVtZSkgPT5cbiAgKGlzQ29sID9cbiAgICB0aGVtZS5pbnB1dENvbHVtbi5yZXF1aXJlZEluZGljYXRvci5mb250U2l6ZSA6IHRoZW1lLmlucHV0Um93LnJlcXVpcmVkSW5kaWNhdG9yLmZvbnRTaXplKTtcblxuY29uc3QgZ2V0TGFiZWxSaWdodE1hcmdpbiA9IChpc0NvbCwgdGhlbWUpID0+IChpc0NvbCA/IDAgOiB0aGVtZS5ndXR0ZXJXaWR0aCk7XG5jb25zdCBnZXRMYWJlbEJvdHRvbU1hcmdpbiA9IChpc0NvbCwgdGhlbWUpID0+IChpc0NvbCA/IHRoZW1lLmhhbGZHdXR0ZXJXaWR0aCA6IDApO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246ICR7cHJvcHMgPT4gZ2V0Q29udGFpbmVyRGlyZWN0aW9uKHByb3BzLmFzQ29sdW1uLCBwcm9wcy50aGVtZSl9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmNvbnN0IExhYmVsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLmFzQ29sdW1uID8gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4ubGFiZWxXaWR0aCA6IHByb3BzLnRoZW1lLmlucHV0Um93LmxhYmVsV2lkdGgpfTtcbiAgbWluLXdpZHRoOiAke3Byb3BzID0+IChwcm9wcy5hc0NvbHVtbiA/IHByb3BzLnRoZW1lLmlucHV0Q29sdW1uLmxhYmVsV2lkdGggOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5sYWJlbFdpZHRoKX07XG4gIGNvbG9yOiAke3Byb3BzID0+IGdldEVycm9yU3R5bGVzKHByb3BzLmVycm9yLCBwcm9wcy50aGVtZSl9O1xuICBwYWRkaW5nLWJvdHRvbTogJHtwcm9wcyA9PiAocHJvcHMuc2hvd0Vycm9yICYmICFwcm9wcy5hc0NvbHVtbiA/IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0KHByb3BzLmFzQ29sdW1uLCBwcm9wcy50aGVtZSkgOiAwKX07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5jb25zdCBWYWx1ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gID4gaW5wdXQsID4gLmZvcm0tY29udHJvbCB7XG4gICAgYm9yZGVyLWNvbG9yOiAke3Byb3BzID0+IGdldEVycm9yU3R5bGVzKHByb3BzLmVycm9yLCBwcm9wcy50aGVtZSl9O1xuICB9XG4gIGZsZXg6IDEgMSBhdXRvO1xuYDtcblxuY29uc3QgRXJyb3JDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtaW4taGVpZ2h0OiAke3Byb3BzID0+IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0KHByb3BzLmFzQ29sdW1uLCBwcm9wcy50aGVtZSl9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLnNwYW5gXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuZXJyb3IuY29sb3J9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGV4dC5lcnJvci5mb250U2l6ZX07XG5gO1xuXG5jb25zdCBSZXF1aXJlZEluZGljYXRvciA9IHN0eWxlZC5zcGFuYFxuICBtYXJnaW4tbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBmb250LXNpemU6ICR7cHJvcHMgPT4gZ2V0UmVxdWlyZWRJbmRpY2F0b3JGb250U2l6ZShwcm9wcy5hc0NvbHVtbiwgcHJvcHMudGhlbWUpfTtcbmA7XG5cbmNvbnN0IExhYmVsID0gc3R5bGVkLmxhYmVsYFxuICBtYXJnaW4tcmlnaHQ6ICR7cHJvcHMgPT4gZ2V0TGFiZWxSaWdodE1hcmdpbihwcm9wcy5hc0NvbHVtbiwgcHJvcHMudGhlbWUpfTtcbiAgbWFyZ2luLWJvdHRvbTogJHtwcm9wcyA9PiBnZXRMYWJlbEJvdHRvbU1hcmdpbihwcm9wcy5hc0NvbHVtbiwgcHJvcHMudGhlbWUpfTtcbmA7XG5cbi8qKlxuICogQXNzaWducyBnaXZlbiBwcm9wcyBkaXJlY3RseSB0byBpbnB1dCBlbGVtZW50XG4gKiBAcGFyYW0gY2hpbGRcbiAqIEBwYXJhbSBwcm9wc1xuICovXG5jb25zdCBtb2RpZnlDaGlsZHJlbiA9IChjaGlsZCwgcHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXF1aXJlZCwgYXV0b0NvbXBsZXRlIH0gPSBwcm9wcztcblxuICBjb25zdCBuZXdFbGVtZW50UHJvcHMgPSB7XG4gICAgY2xhc3NOYW1lOiBgJHtjaGlsZC5wcm9wcy5jbGFzc05hbWUgfHwgJyd9YCxcbiAgICByZXF1aXJlZCxcbiAgICBhdXRvQ29tcGxldGUsXG4gIH07XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgbmV3RWxlbWVudFByb3BzKTtcbn07XG5cbmNvbnN0IENvbnRlbnRJbnB1dFJvdyA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sIGVycm9yLCBzaG93RXJyb3IsIGxhYmVsLCBjbGFzc05hbWUsIHJlcXVpcmVkLCBpZCwgYXNDb2x1bW4sXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgYXNDb2x1bW49e2FzQ29sdW1ufSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e2lkfT5cbiAgICAgIDxMYWJlbENvbnRhaW5lciBhc0NvbHVtbj17YXNDb2x1bW59IGVycm9yPXtlcnJvcn0gc2hvd0Vycm9yPXtzaG93RXJyb3J9PlxuICAgICAgICB7bGFiZWwgJiZcbiAgICAgICAgPExhYmVsIGFzQ29sdW1uPXthc0NvbHVtbn0+e2xhYmVsfVxuICAgICAgICAgIHtyZXF1aXJlZCAmJiA8UmVxdWlyZWRJbmRpY2F0b3IgYXNDb2x1bW49e2FzQ29sdW1ufT4qPC9SZXF1aXJlZEluZGljYXRvcj59XG4gICAgICAgIDwvTGFiZWw+fVxuICAgICAgPC9MYWJlbENvbnRhaW5lcj5cbiAgICAgIDxWYWx1ZUNvbnRhaW5lciBlcnJvcj17ZXJyb3J9PlxuICAgICAgICB7UmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiBtb2RpZnlDaGlsZHJlbihjaGlsZCwgcHJvcHMpKX1cbiAgICAgICAge3Nob3dFcnJvciAmJlxuICAgICAgICA8RXJyb3JDb250YWluZXIgYXNDb2x1bW49e2FzQ29sdW1ufT5cbiAgICAgICAgICB7ZXJyb3IgJiYgPEVycm9yTWVzc2FnZT57ZXJyb3J9PC9FcnJvck1lc3NhZ2U+fVxuICAgICAgICA8L0Vycm9yQ29udGFpbmVyPn1cbiAgICAgIDwvVmFsdWVDb250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5Db250ZW50SW5wdXRSb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZWxlbWVudF0pLFxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYm9vbF0pLFxuICBzaG93RXJyb3I6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGFzQ29sdW1uOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkNvbnRlbnRJbnB1dFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGxhYmVsOiAnJyxcbiAgcmVxdWlyZWQ6IGZhbHNlLFxuICBjaGlsZHJlbjogbnVsbCxcbiAgZXJyb3I6ICcnLFxuICBzaG93RXJyb3I6IHRydWUsXG4gIGNsYXNzTmFtZTogJycsXG4gIGFzQ29sdW1uOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRJbnB1dFJvdztcbiJdfQ==