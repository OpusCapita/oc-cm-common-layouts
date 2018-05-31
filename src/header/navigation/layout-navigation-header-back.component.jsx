import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import BackArrow from 'react-icons/lib/fa/arrow-left';
import { Link } from 'react-router-dom';
// App imports
import { classPrefix, theme } from '../../constants';
import BorderlessButton from '../../primitives/layout-primitive-borderless-button.component';

const BackButton = BorderlessButton.extend`
  height: ${theme.header.button.height};
  width: ${theme.header.button.height};
`;

class NavigationBackButton extends React.PureComponent {
  onBackClickDefault = () => {
    window.history.back();
  };

  render() {
    const { backUrl } = this.props;
    const Button = () => (
      // If backUrl is defined, we don't need a click handler, instead we wrap
      // it in <Link />
      <BackButton onClick={backUrl ? null : this.onBackClickDefault}>
        <BackArrow />
      </BackButton>
    );
    if (backUrl) return <Link to={backUrl}><Button /></Link>; // eslint-disable-line
    return <Button />;
  }
}

NavigationBackButton.propTypes = {
  backUrl: PropTypes.string,
};

NavigationBackButton.defaultProps = {
  backUrl: null,
};

export default NavigationBackButton;
