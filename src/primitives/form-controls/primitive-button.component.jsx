import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { theme } from '../../constants';

const Button = styled.button`
  color: ${theme.formControls.button.textColor}
  background-color: ${theme.formControls.button.backgroundColor}
  border: 1px solid ${darken(0.02, theme.formControls.button.backgroundColor)};
  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  white-space: nowrap;
  padding: ${theme.halfGutterWidth} ${theme.gutterWidth}
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  &:hover:enabled {
    background-color:${darken(0.1, theme.formControls.button.backgroundColor)};
    border: 1px solid ${darken(0.05, theme.formControls.button.backgroundColor)};
  }
  
  &:active {
    background-color:${darken(0.2, theme.formControls.button.backgroundColor)};
    border: 1px solid ${darken(0.25, theme.formControls.button.backgroundColor)};
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
    background-color: ${theme.formControls.button.primaryBackgroundColor};
    border: 1px solid ${darken(0.05, theme.formControls.button.primaryBackgroundColor)};
    &:hover:enabled {
      background-color:${darken(0.1, theme.formControls.button.primaryBackgroundColor)};
      border: 1px solid ${darken(0.15, theme.formControls.button.primaryBackgroundColor)};
    }
    &:active {
      background-color:${darken(0.2, theme.formControls.button.primaryBackgroundColor)};
      border: 1px solid ${darken(0.25, theme.formControls.button.primaryBackgroundColor)};
    }
  `};
`;

export default Button;
