import styled, { css } from 'styled-components';
import { darken } from 'polished';

const Button = styled.button`
  color: ${props => props.theme.formControls.button.textColor}
  background-color: ${props => props.theme.formControls.button.backgroundColor}
  border: 1px solid ${props => darken(0.02, props.theme.formControls.button.backgroundColor)};
  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  white-space: nowrap;
  padding: ${props => props.theme.halfGutterWidth} ${props => props.theme.gutterWidth}
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  min-width: ${props => props.theme.formControls.button.minWidth};
  &:hover:enabled {
    background-color:${props => darken(0.1, props.theme.formControls.button.backgroundColor)};
    border: 1px solid ${props => darken(0.05, props.theme.formControls.button.backgroundColor)};
  }
  
  &:active {
    background-color:${props => darken(0.2, props.theme.formControls.button.backgroundColor)};
    border: 1px solid ${props => darken(0.25, props.theme.formControls.button.backgroundColor)};
  }
  
  &&& {
    outline: none;
    box-shadow: none;
  }
  
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.65;
    filter: alpha(opacity=65);
    box-shadow: none;
  }
  
  ${props => props.primary && css`
    background-color: ${props.theme.formControls.button.primaryBackgroundColor};
    border: 1px solid ${darken(0.05, props.theme.formControls.button.primaryBackgroundColor)};
    &:hover:enabled {
      background-color:${darken(0.1, props.theme.formControls.button.primaryBackgroundColor)};
      border: 1px solid ${darken(0.15, props.theme.formControls.button.primaryBackgroundColor)};
    }
    &:active {
      background-color:${darken(0.2, props.theme.formControls.button.primaryBackgroundColor)};
      border: 1px solid ${darken(0.25, props.theme.formControls.button.primaryBackgroundColor)};
    }
  `};
`;

export default Button;
