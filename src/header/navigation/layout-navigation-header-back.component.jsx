import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@opuscapita/react-icons';
import { Link } from 'react-router-dom';
// App imports
import { theme } from '../../constants';
import BorderlessButton from '../../primitives/layout-primitive-borderless-button.component';

const BackButton = BorderlessButton.extend`
  height: ${theme.header.button.height};
  width: ${theme.header.button.height};
  font-size: 16px;
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
        <Icon type="indicator" name="arrowLeft" />
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
