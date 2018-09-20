import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getErrorStyles = (error, theme) => (error ? theme.text.error.color : '');

const getContainerDirection = (isCol, theme) =>
  (isCol ? theme.container.inputColumn : theme.container.inputRow);

const getErrorContainerMinHeight = (isCol, theme) =>
  (isCol ? theme.inputColumn.errorContainer.height : theme.inputRow.errorContainer.height);

const getRequiredIndicatorFontSize = (isCol, theme) =>
  (isCol ?
    theme.inputColumn.requiredIndicator.fontSize : theme.inputRow.requiredIndicator.fontSize);

const getLabelRightMargin = (isCol, theme) => (isCol ? 0 : theme.gutterWidth);
const getLabelBottomMargin = (isCol, theme) => (isCol ? theme.halfGutterWidth : 0);

const Container = styled.section`
  display: flex;
  flex-direction: ${props => getContainerDirection(props.asColumn, props.theme)};
  margin-bottom: ${props => props.theme.halfGutterWidth};
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const LabelContainer = styled.div`
  width: ${props => (props.asColumn ? props.theme.inputColumn.labelWidth : props.theme.inputRow.labelWidth)};
  min-width: ${props => (props.asColumn ? props.theme.inputColumn.labelWidth : props.theme.inputRow.labelWidth)};
  color: ${props => getErrorStyles(props.error, props.theme)};
  padding-bottom: ${props => (props.showError && !props.asColumn ? getErrorContainerMinHeight(props.asColumn, props.theme) : 0)};
  align-items: center;
  display: flex;
`;

const ValueContainer = styled.div`
  > input, > .form-control {
    border-color: ${props => getErrorStyles(props.error, props.theme)};
  }
  flex: 1 1 auto;
`;

const ErrorContainer = styled.div`
  min-height: ${props => getErrorContainerMinHeight(props.asColumn, props.theme)};
  display: flex;
  align-items: center;
`;

const ErrorMessage = styled.span`
  color: ${props => props.theme.text.error.color};
  font-size: ${props => props.theme.text.error.fontSize};
`;

const RequiredIndicator = styled.span`
  margin-left: ${props => props.theme.halfGutterWidth};
  font-size: ${props => getRequiredIndicatorFontSize(props.asColumn, props.theme)};
`;

const Label = styled.label`
  margin-right: ${props => getLabelRightMargin(props.asColumn, props.theme)};
  margin-bottom: ${props => getLabelBottomMargin(props.asColumn, props.theme)};
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
    children, error, showError, label, className, required, id, asColumn,
  } = props;

  return (
    <Container asColumn={asColumn} className={className} id={id}>
      <LabelContainer asColumn={asColumn} error={error} showError={showError}>
        {label &&
        <Label asColumn={asColumn}>{label}
          {required && <RequiredIndicator asColumn={asColumn}>*</RequiredIndicator>}
        </Label>}
      </LabelContainer>
      <ValueContainer error={error}>
        {React.Children.map(children, child => modifyChildren(child, props))}
        {showError &&
        <ErrorContainer asColumn={asColumn}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </ErrorContainer>}
      </ValueContainer>
    </Container>
  );
};

ContentInputRow.propTypes = {
  children: PropTypes.node,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  required: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  showError: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  asColumn: PropTypes.bool,
};

ContentInputRow.defaultProps = {
  label: '',
  required: false,
  children: null,
  error: '',
  showError: true,
  className: '',
  asColumn: false,
};

export default ContentInputRow;
