import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getStyles = (error, warning, theme) => {
  if (error) return theme.text.error.color;
  if (warning) return theme.colors.yellow;
  return '';
};

const getContainerDirection = props =>
  (props.asColumn ? props.theme.inputColumn.flexDirection : props.theme.inputRow.flexDirection);

const getErrorContainerMinHeight = props =>
  (props.asColumn
    ? props.theme.inputColumn.errorContainer.height
    : props.theme.inputRow.errorContainer.height);

const getLabelMaxWidth = (props) => {
  if (props.asColumn) return props.theme.inputColumn.labelWidth;
  return props.labelWidth !== undefined ? props.labelWidth : props.theme.inputRow.labelWidth;
};

const Container = styled.section`
  display: flex;
  flex-direction: ${props => getContainerDirection(props)};
  margin-bottom: ${props => props.theme.halfGutterWidth};
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const LabelContainer = styled.div`
  width: ${props => getLabelMaxWidth(props)};
  color: ${props => getStyles(props.error, props.warning, props.theme)};
  padding-bottom: ${props =>
    (props.showError && !props.asColumn ? getErrorContainerMinHeight(props) : 0)};
  align-items: center;
  display: flex;
`;

const ValueContainer = styled.div`
  > div > input,
  > div > .form-control {
    border-color: ${props => getStyles(props.error, props.warning, props.theme)};
  }
  flex: 1 1 auto;
  min-width: 0%;
  max-width: ${props => (props.width === 'auto' ? '100%' : props.width)};
`;

const ErrorContainer = styled.div`
  min-height: ${props => getErrorContainerMinHeight(props)};
  display: flex;
  align-items: center;
`;

const ErrorMessage = styled.span`
  color: ${props => props.theme.text.error.color};
  font-size: ${props => props.theme.text.error.fontSize};
`;

const WarningMessage = styled.span`
  color: ${props => props.theme.colors.yellow};
  font-size: ${props => props.theme.text.error.fontSize};
`;

const RequiredIndicator = styled.span`
  margin-left: ${props => props.theme.halfGutterWidth};
  font-size: ${props =>
    (props.asColumn
      ? props.theme.inputColumn.requiredIndicator.fontSize
      : props.theme.inputRow.requiredIndicator.fontSize)};
`;

const Label = styled.label`
  margin-right: ${props => (props.asColumn ? 0 : props.theme.gutterWidth)};
  margin-bottom: ${props => (props.asColumn ? props.theme.halfGutterWidth : 0)};
`;

const FieldContainer = styled.div`
  display: ${props => (props.append ? 'flex' : 'block')};
  width: 100%;
  align-items: center;
`;

const Append = styled.div`
  padding-left: ${props => props.theme.gutterWidth};
  flex: 1 1 100%;
  min-width: 0%;
`;

/**
 * Assigns given props directly to input element
 * @param child
 * @param props
 */
const modifyChildren = (child, props) => {
  const { required, autoComplete } = props;

  const newElementProps = {
    className: `${child.props.className || ''}`,
    required,
    autoComplete,
  };

  return React.cloneElement(child, newElementProps);
};

const ContentInputRow = (props) => {
  const {
    children,
    error,
    warning,
    showError,
    label,
    className,
    required,
    id,
    asColumn,
    labelWidth,
    valueWidth,
    append,
  } = props;

  return (
    <Container asColumn={asColumn} className={className} id={id}>
      <LabelContainer
        asColumn={asColumn}
        error={error}
        warning={warning}
        showError={showError}
        labelWidth={labelWidth}
      >
        {label && (
          <Label asColumn={asColumn}>
            {label}
            {required && <RequiredIndicator asColumn={asColumn}>*</RequiredIndicator>}
          </Label>
        )}
      </LabelContainer>
      <ValueContainer width={valueWidth} error={error} warning={warning}>
        <FieldContainer append={append}>
          {React.Children.map(children, child => modifyChildren(child, props))}
          {append && <Append>{append}</Append>}
        </FieldContainer>
        {showError && (
          <ErrorContainer asColumn={asColumn}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {!error && warning && <WarningMessage>{warning}</WarningMessage>}
          </ErrorContainer>
        )}
      </ValueContainer>
    </Container>
  );
};

ContentInputRow.propTypes = {
  children: PropTypes.node,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  required: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  warning: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  showError: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  asColumn: PropTypes.bool,
  labelWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  valueWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  append: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
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
  append: undefined,
};

export default ContentInputRow;
