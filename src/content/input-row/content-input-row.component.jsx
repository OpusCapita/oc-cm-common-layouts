import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import { theme } from '../../constants';

const getErrorStyles = error => (error ? theme.text.error.color : '');

const Container = styled.section`
  display: flex;
  margin-bottom: ${theme.halfGutterWidth};
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const LabelContainer = styled.div`
  width: ${theme.inputRow.labelWidth};
  min-width: ${theme.inputRow.labelWidth};
  color: ${props => getErrorStyles(props.error)};
`;

const ValueContainer = styled.div`
  > input, > .form-control {
    border-color: ${props => getErrorStyles(props.error)};
  }
  flex: 1 1 auto;
`;

const ErrorContainer = styled.div`
  min-height: ${theme.inputRow.errorContainer.height};
  display: flex;
  align-items: center;
`;

const ErrorMessage = styled.span`
  color: ${theme.text.error.color};
  font-size: ${theme.text.error.fontSize};
`;

const RequiredIndicator = styled.span`
  margin-left: ${theme.halfGutterWidth};
  font-size: ${theme.inputRow.requiredIndicator.fontSize};
`;

const Label = styled.label`
  margin-right: ${theme.gutterWidth};
  margin-bottom: 0;
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
    children, error, showError, label, className, required, id,
  } = props;

  return (
    <Container className={className} id={id}>
      <LabelContainer error={error}>
        {label &&
        <Label>{label}
          {required && <RequiredIndicator>*</RequiredIndicator>}
        </Label>}
      </LabelContainer>
      <ValueContainer error={error}>
        {React.Children.map(children, child => modifyChildren(child, props))}
        {showError &&
        <ErrorContainer>
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
};

ContentInputRow.defaultProps = {
  label: '',
  required: false,
  children: null,
  error: '',
  showError: true,
  className: '',
  id: '',
};

export default ContentInputRow;
