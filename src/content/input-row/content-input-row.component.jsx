import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import { theme } from '../../constants';

const getErrorStyles = error => (error ? theme.text.error.color : '');

const getContainerDirection = isCol =>
  (isCol ? theme.container.inputColumn : theme.container.inputRow);
const Container = styled.section`
  display: flex;
  flex-direction: ${props => getContainerDirection(props.asColumn)};
  margin-bottom: ${theme.halfGutterWidth};
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const getLabelContainerWidth = isCol =>
  (isCol ? theme.inputColumn.labelWidth : theme.inputRow.labelWidth);
const getLabelContainerLineHeight = isCol =>
  (isCol ? theme.inputColumn.labelContainerLineHeight : theme.inputRow.labelContainerLineHeight);

const LabelContainer = styled.div`
  width: ${props => getLabelContainerWidth(props.asColumn)};
  min-width: ${props => getLabelContainerWidth(props.asColumn)};
  color: ${props => getErrorStyles(props.error)};
  line-height: ${props => getLabelContainerLineHeight(props.asColumn)};
`;

const ValueContainer = styled.div`
  > input, > .form-control {
    border-color: ${props => getErrorStyles(props.error)};
  }
  flex: 1 1 auto;
`;

const getErrorContainerMinHeight = isCol =>
  (isCol ? theme.inputColumn.errorContainer.height : theme.inputRow.errorContainer.height);

const ErrorContainer = styled.div`
  min-height: ${props => getErrorContainerMinHeight(props.asColumn)};
  display: flex;
  align-items: center;
`;

const ErrorMessage = styled.span`
  color: ${theme.text.error.color};
  font-size: ${theme.text.error.fontSize};
`;

const getRequiredIndicatorFontSize = isCol =>
  (isCol ? theme.inputColumn.requiredIndicator.fontSize : theme.inputRow.requiredIndicator.fontSize);

const RequiredIndicator = styled.span`
  margin-left: ${theme.halfGutterWidth};
  font-size: ${props => getRequiredIndicatorFontSize(props.asColumn)};
`;

const getLabelRightMargin = isCol => (isCol ? 0 : theme.gutterWidth);
const getLabelBottomMargin = isCol => (isCol ? theme.gutterWidth : 0);

const Label = styled.label`
  margin-right: ${props => getLabelRightMargin(props.asColumn)};
  margin-bottom: ${props => getLabelBottomMargin(props.asColumn)};
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
      <LabelContainer asColumn={asColumn} error={error}>
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
  id: PropTypes.string,
  asColumn: PropTypes.bool,
};

ContentInputRow.defaultProps = {
  label: '',
  required: false,
  children: null,
  error: '',
  showError: true,
  className: '',
  id: '',
  asColumn: false,
};

export default ContentInputRow;
