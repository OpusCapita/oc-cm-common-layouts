import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getErrorStyles = (error, theme) => (error ? theme.text.error.color : '');

const getContainerDirection = props =>
  (props.asColumn ? props.theme.inputColumn.flexDirection : props.theme.inputRow.flexDirection);

const getErrorContainerMinHeight = props =>
  (props.asColumn ?
    props.theme.inputColumn.errorContainer.height : props.theme.inputRow.errorContainer.height);


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
  width: 100%;
  max-width: ${props => getLabelMaxWidth(props)};
  color: ${props => getErrorStyles(props.error, props.theme)};
  padding-bottom: ${props => (props.showError && !props.asColumn ? getErrorContainerMinHeight(props) : 0)};
  align-items: center;
  display: flex;
`;

const ValueContainer = styled.div`
  > input, > .form-control {
    border-color: ${props => getErrorStyles(props.error, props.theme)};
  }
  flex: 1 1 auto;
  max-width: ${props => props.width};
  width: 100%;
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

const RequiredIndicator = styled.span`
  margin-left: ${props => props.theme.halfGutterWidth};
  font-size: ${props => (props.asColumn ? props.theme.inputColumn.requiredIndicator.fontSize : props.theme.inputRow.requiredIndicator.fontSize)};
`;

const Label = styled.label`
  margin-right: ${props => (props.asColumn ? 0 : props.theme.gutterWidth)};
  margin-bottom: ${props => (props.asColumn ? props.theme.halfGutterWidth : 0)};
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
    children, error, showError, label, className, required, id, asColumn, labelWidth, valueWidth,
  } = props;

  return (
    <Container asColumn={asColumn} className={className} id={id}>
      <LabelContainer
        asColumn={asColumn}
        error={error}
        showError={showError}
        labelWidth={labelWidth}
      >
        {label &&
        <Label asColumn={asColumn}>{label}
          {required && <RequiredIndicator asColumn={asColumn}>*</RequiredIndicator>}
        </Label>}
      </LabelContainer>
      <ValueContainer width={valueWidth} error={error}>
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
  labelWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  valueWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
};

export default ContentInputRow;
