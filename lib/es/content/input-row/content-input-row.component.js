var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  margin-bottom: ', ';\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n'], ['\n  width: ', ';\n  color: ', ';\n  padding-bottom: ', ';\n  align-items: center;\n  display: flex;\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  > div > input,\n  > div > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n  max-width: ', ';\n'], ['\n  > div > input,\n  > div > .form-control {\n    border-color: ', ';\n  }\n  flex: 1 1 auto;\n  max-width: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n'], ['\n  min-height: ', ';\n  display: flex;\n  align-items: center;\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  color: ', ';\n  font-size: ', ';\n'], ['\n  color: ', ';\n  font-size: ', ';\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  margin-left: ', ';\n  font-size: ', ';\n'], ['\n  margin-left: ', ';\n  font-size: ', ';\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  margin-right: ', ';\n  margin-bottom: ', ';\n'], ['\n  margin-right: ', ';\n  margin-bottom: ', ';\n']),
    _templateObject8 = _taggedTemplateLiteralLoose(['\n  display: ', ';\n  width: 100%;\n  align-items: center;\n'], ['\n  display: ', ';\n  width: 100%;\n  align-items: center;\n']),
    _templateObject9 = _taggedTemplateLiteralLoose(['\n  padding-left: ', ';\n  flex: 1 1 100%;\n'], ['\n  padding-left: ', ';\n  flex: 1 1 100%;\n']);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

var Container = styled.section(_templateObject, function (props) {
  return getContainerDirection(props);
}, function (props) {
  return props.theme.halfGutterWidth;
});

var LabelContainer = styled.div(_templateObject2, function (props) {
  return getLabelMaxWidth(props);
}, function (props) {
  return getErrorStyles(props.error, props.theme);
}, function (props) {
  return props.showError && !props.asColumn ? getErrorContainerMinHeight(props) : 0;
});

var ValueContainer = styled.div(_templateObject3, function (props) {
  return getErrorStyles(props.error, props.theme);
}, function (props) {
  return props.width;
});

var ErrorContainer = styled.div(_templateObject4, function (props) {
  return getErrorContainerMinHeight(props);
});

var ErrorMessage = styled.span(_templateObject5, function (props) {
  return props.theme.text.error.color;
}, function (props) {
  return props.theme.text.error.fontSize;
});

var RequiredIndicator = styled.span(_templateObject6, function (props) {
  return props.theme.halfGutterWidth;
}, function (props) {
  return props.asColumn ? props.theme.inputColumn.requiredIndicator.fontSize : props.theme.inputRow.requiredIndicator.fontSize;
});

var Label = styled.label(_templateObject7, function (props) {
  return props.asColumn ? 0 : props.theme.gutterWidth;
}, function (props) {
  return props.asColumn ? props.theme.halfGutterWidth : 0;
});

var FieldContainer = styled.div(_templateObject8, function (props) {
  return props.append ? 'flex' : 'block';
});

var Append = styled.div(_templateObject9, function (props) {
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
      asColumn = props.asColumn,
      labelWidth = props.labelWidth,
      valueWidth = props.valueWidth,
      append = props.append;


  return React.createElement(
    Container,
    { asColumn: asColumn, className: className, id: id },
    React.createElement(
      LabelContainer,
      {
        asColumn: asColumn,
        error: error,
        showError: showError,
        labelWidth: labelWidth
      },
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
      { width: valueWidth, error: error },
      React.createElement(
        FieldContainer,
        { append: append },
        React.Children.map(children, function (child) {
          return modifyChildren(child, props);
        }),
        append && React.createElement(
          Append,
          null,
          append
        )
      ),
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
  asColumn: false,
  labelWidth: undefined,
  valueWidth: 'auto',
  append: undefined
};

export default ContentInputRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2lucHV0LXJvdy9jb250ZW50LWlucHV0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwic3R5bGVkIiwiZ2V0RXJyb3JTdHlsZXMiLCJlcnJvciIsInRoZW1lIiwidGV4dCIsImNvbG9yIiwiZ2V0Q29udGFpbmVyRGlyZWN0aW9uIiwicHJvcHMiLCJhc0NvbHVtbiIsImlucHV0Q29sdW1uIiwiZmxleERpcmVjdGlvbiIsImlucHV0Um93IiwiZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQiLCJlcnJvckNvbnRhaW5lciIsImhlaWdodCIsImdldExhYmVsTWF4V2lkdGgiLCJsYWJlbFdpZHRoIiwidW5kZWZpbmVkIiwiQ29udGFpbmVyIiwic2VjdGlvbiIsImhhbGZHdXR0ZXJXaWR0aCIsIkxhYmVsQ29udGFpbmVyIiwiZGl2Iiwic2hvd0Vycm9yIiwiVmFsdWVDb250YWluZXIiLCJ3aWR0aCIsIkVycm9yQ29udGFpbmVyIiwiRXJyb3JNZXNzYWdlIiwic3BhbiIsImZvbnRTaXplIiwiUmVxdWlyZWRJbmRpY2F0b3IiLCJyZXF1aXJlZEluZGljYXRvciIsIkxhYmVsIiwibGFiZWwiLCJndXR0ZXJXaWR0aCIsIkZpZWxkQ29udGFpbmVyIiwiYXBwZW5kIiwiQXBwZW5kIiwibW9kaWZ5Q2hpbGRyZW4iLCJjaGlsZCIsInJlcXVpcmVkIiwiYXV0b0NvbXBsZXRlIiwibmV3RWxlbWVudFByb3BzIiwiY2xhc3NOYW1lIiwiY2xvbmVFbGVtZW50IiwiQ29udGVudElucHV0Um93IiwiY2hpbGRyZW4iLCJpZCIsInZhbHVlV2lkdGgiLCJDaGlsZHJlbiIsIm1hcCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLG1CQUFu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QixVQUFVZixRQUExQjtBQUNHTixpQkFBUztBQUFDLHNCQUFEO0FBQUE7QUFBZUE7QUFBZjtBQURaO0FBTko7QUFkRixHQURGO0FBNEJELENBM0NEOztBQTJEQTJDLGdCQUFnQk0sWUFBaEIsR0FBK0I7QUFDN0JsQixTQUFPLEVBRHNCO0FBRTdCTyxZQUFVLEtBRm1CO0FBRzdCTSxZQUFVLElBSG1CO0FBSTdCNUMsU0FBTyxFQUpzQjtBQUs3QnFCLGFBQVcsSUFMa0I7QUFNN0JvQixhQUFXLEVBTmtCO0FBTzdCbkMsWUFBVSxLQVBtQjtBQVE3QlEsY0FBWUMsU0FSaUI7QUFTN0IrQixjQUFZLE1BVGlCO0FBVTdCWixVQUFRbkI7QUFWcUIsQ0FBL0I7O0FBYUEsZUFBZTRCLGVBQWYiLCJmaWxlIjoiY29udGVudC1pbnB1dC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgZ2V0RXJyb3JTdHlsZXMgPSAoZXJyb3IsIHRoZW1lKSA9PiAoZXJyb3IgPyB0aGVtZS50ZXh0LmVycm9yLmNvbG9yIDogJycpO1xuXG5jb25zdCBnZXRDb250YWluZXJEaXJlY3Rpb24gPSBwcm9wcyA9PlxuICAocHJvcHMuYXNDb2x1bW4gPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5mbGV4RGlyZWN0aW9uIDogcHJvcHMudGhlbWUuaW5wdXRSb3cuZmxleERpcmVjdGlvbik7XG5cbmNvbnN0IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0ID0gcHJvcHMgPT5cbiAgKHByb3BzLmFzQ29sdW1uXG4gICAgPyBwcm9wcy50aGVtZS5pbnB1dENvbHVtbi5lcnJvckNvbnRhaW5lci5oZWlnaHRcbiAgICA6IHByb3BzLnRoZW1lLmlucHV0Um93LmVycm9yQ29udGFpbmVyLmhlaWdodCk7XG5cbmNvbnN0IGdldExhYmVsTWF4V2lkdGggPSAocHJvcHMpID0+IHtcbiAgaWYgKHByb3BzLmFzQ29sdW1uKSByZXR1cm4gcHJvcHMudGhlbWUuaW5wdXRDb2x1bW4ubGFiZWxXaWR0aDtcbiAgcmV0dXJuIHByb3BzLmxhYmVsV2lkdGggIT09IHVuZGVmaW5lZCA/IHByb3BzLmxhYmVsV2lkdGggOiBwcm9wcy50aGVtZS5pbnB1dFJvdy5sYWJlbFdpZHRoO1xufTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IGdldENvbnRhaW5lckRpcmVjdGlvbihwcm9wcyl9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmNvbnN0IExhYmVsQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gZ2V0TGFiZWxNYXhXaWR0aChwcm9wcyl9O1xuICBjb2xvcjogJHtwcm9wcyA9PiBnZXRFcnJvclN0eWxlcyhwcm9wcy5lcnJvciwgcHJvcHMudGhlbWUpfTtcbiAgcGFkZGluZy1ib3R0b206ICR7cHJvcHMgPT5cbiAgICAocHJvcHMuc2hvd0Vycm9yICYmICFwcm9wcy5hc0NvbHVtbiA/IGdldEVycm9yQ29udGFpbmVyTWluSGVpZ2h0KHByb3BzKSA6IDApfTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmNvbnN0IFZhbHVlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgPiBkaXYgPiBpbnB1dCxcbiAgPiBkaXYgPiAuZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gZ2V0RXJyb3JTdHlsZXMocHJvcHMuZXJyb3IsIHByb3BzLnRoZW1lKX07XG4gIH1cbiAgZmxleDogMSAxIGF1dG87XG4gIG1heC13aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XG5gO1xuXG5jb25zdCBFcnJvckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1pbi1oZWlnaHQ6ICR7cHJvcHMgPT4gZ2V0RXJyb3JDb250YWluZXJNaW5IZWlnaHQocHJvcHMpfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0LmVycm9yLmNvbG9yfTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRleHQuZXJyb3IuZm9udFNpemV9O1xuYDtcblxuY29uc3QgUmVxdWlyZWRJbmRpY2F0b3IgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgZm9udC1zaXplOiAke3Byb3BzID0+XG4gICAgKHByb3BzLmFzQ29sdW1uXG4gICAgICA/IHByb3BzLnRoZW1lLmlucHV0Q29sdW1uLnJlcXVpcmVkSW5kaWNhdG9yLmZvbnRTaXplXG4gICAgICA6IHByb3BzLnRoZW1lLmlucHV0Um93LnJlcXVpcmVkSW5kaWNhdG9yLmZvbnRTaXplKX07XG5gO1xuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5sYWJlbGBcbiAgbWFyZ2luLXJpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5hc0NvbHVtbiA/IDAgOiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aCl9O1xuICBtYXJnaW4tYm90dG9tOiAke3Byb3BzID0+IChwcm9wcy5hc0NvbHVtbiA/IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aCA6IDApfTtcbmA7XG5cbmNvbnN0IEZpZWxkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogJHtwcm9wcyA9PiAocHJvcHMuYXBwZW5kID8gJ2ZsZXgnIDogJ2Jsb2NrJyl9O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IEFwcGVuZCA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ndXR0ZXJXaWR0aH07XG4gIGZsZXg6IDEgMSAxMDAlO1xuYDtcblxuLyoqXG4gKiBBc3NpZ25zIGdpdmVuIHByb3BzIGRpcmVjdGx5IHRvIGlucHV0IGVsZW1lbnRcbiAqIEBwYXJhbSBjaGlsZFxuICogQHBhcmFtIHByb3BzXG4gKi9cbmNvbnN0IG1vZGlmeUNoaWxkcmVuID0gKGNoaWxkLCBwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlcXVpcmVkLCBhdXRvQ29tcGxldGUgfSA9IHByb3BzO1xuXG4gIGNvbnN0IG5ld0VsZW1lbnRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6IGAke2NoaWxkLnByb3BzLmNsYXNzTmFtZSB8fCAnJ31gLFxuICAgIHJlcXVpcmVkLFxuICAgIGF1dG9Db21wbGV0ZSxcbiAgfTtcblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBuZXdFbGVtZW50UHJvcHMpO1xufTtcblxuY29uc3QgQ29udGVudElucHV0Um93ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICBlcnJvcixcbiAgICBzaG93RXJyb3IsXG4gICAgbGFiZWwsXG4gICAgY2xhc3NOYW1lLFxuICAgIHJlcXVpcmVkLFxuICAgIGlkLFxuICAgIGFzQ29sdW1uLFxuICAgIGxhYmVsV2lkdGgsXG4gICAgdmFsdWVXaWR0aCxcbiAgICBhcHBlbmQsXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgYXNDb2x1bW49e2FzQ29sdW1ufSBjbGFzc05hbWU9e2NsYXNzTmFtZX0gaWQ9e2lkfT5cbiAgICAgIDxMYWJlbENvbnRhaW5lclxuICAgICAgICBhc0NvbHVtbj17YXNDb2x1bW59XG4gICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgc2hvd0Vycm9yPXtzaG93RXJyb3J9XG4gICAgICAgIGxhYmVsV2lkdGg9e2xhYmVsV2lkdGh9XG4gICAgICA+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPExhYmVsIGFzQ29sdW1uPXthc0NvbHVtbn0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICB7cmVxdWlyZWQgJiYgPFJlcXVpcmVkSW5kaWNhdG9yIGFzQ29sdW1uPXthc0NvbHVtbn0+KjwvUmVxdWlyZWRJbmRpY2F0b3I+fVxuICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICl9XG4gICAgICA8L0xhYmVsQ29udGFpbmVyPlxuICAgICAgPFZhbHVlQ29udGFpbmVyIHdpZHRoPXt2YWx1ZVdpZHRofSBlcnJvcj17ZXJyb3J9PlxuICAgICAgICA8RmllbGRDb250YWluZXIgYXBwZW5kPXthcHBlbmR9PlxuICAgICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IG1vZGlmeUNoaWxkcmVuKGNoaWxkLCBwcm9wcykpfVxuICAgICAgICAgIHthcHBlbmQgJiYgPEFwcGVuZD57YXBwZW5kfTwvQXBwZW5kPn1cbiAgICAgICAgPC9GaWVsZENvbnRhaW5lcj5cbiAgICAgICAge3Nob3dFcnJvciAmJiAoXG4gICAgICAgICAgPEVycm9yQ29udGFpbmVyIGFzQ29sdW1uPXthc0NvbHVtbn0+XG4gICAgICAgICAgICB7ZXJyb3IgJiYgPEVycm9yTWVzc2FnZT57ZXJyb3J9PC9FcnJvck1lc3NhZ2U+fVxuICAgICAgICAgIDwvRXJyb3JDb250YWluZXI+XG4gICAgICAgICl9XG4gICAgICA8L1ZhbHVlQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuQ29udGVudElucHV0Um93LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBsYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgc2hvd0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBhc0NvbHVtbjogUHJvcFR5cGVzLmJvb2wsXG4gIGxhYmVsV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgdmFsdWVXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBhcHBlbmQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5lbGVtZW50XSksXG59O1xuXG5Db250ZW50SW5wdXRSb3cuZGVmYXVsdFByb3BzID0ge1xuICBsYWJlbDogJycsXG4gIHJlcXVpcmVkOiBmYWxzZSxcbiAgY2hpbGRyZW46IG51bGwsXG4gIGVycm9yOiAnJyxcbiAgc2hvd0Vycm9yOiB0cnVlLFxuICBjbGFzc05hbWU6ICcnLFxuICBhc0NvbHVtbjogZmFsc2UsXG4gIGxhYmVsV2lkdGg6IHVuZGVmaW5lZCxcbiAgdmFsdWVXaWR0aDogJ2F1dG8nLFxuICBhcHBlbmQ6IHVuZGVmaW5lZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRJbnB1dFJvdztcbiJdfQ==