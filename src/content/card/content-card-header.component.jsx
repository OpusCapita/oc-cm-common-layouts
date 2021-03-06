import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaPlus, FaMinus } from 'react-icons/fa';

// App imports
import { classPrefix } from '../../constants';
import * as Primitive from '../../primitives';

const CardIcon = styled(Primitive.BorderlessButton)`
  height: ${props => props.theme.header.height};
  width: ${props => props.theme.header.height};
  margin-right: 0;
  margin-left: auto;
  svg {
    height: ${props => props.theme.header.button.height};
    width: ${props => props.theme.header.button.height};
  }
`;

const CardTitle = styled(Primitive.Subtitle)`
  width: 100%;
`;

const CardHeader = styled.header`
  height: ${props => props.theme.header.height};
  align-items: center;
  display: flex;
  margin-bottom: ${props => props.theme.gutterWidth};
`;


class ContentCardHeader extends React.PureComponent {
  getExpandedIcon = () => ((this.props.isExpanded ? <FaMinus /> : <FaPlus />));

  render() {
    const {
      icon, title, onIconClick, isExpanded, isExpandable, loading,
    } = this.props;
    const cardClassPrefix = `${classPrefix}_card`;
    const resolvedIcon = isExpandable ? this.getExpandedIcon(isExpanded) : icon;

    return (
      <CardHeader className={`${cardClassPrefix}_header`}>
        <CardTitle>{title}</CardTitle>
        {loading && <Primitive.Spinner />}
        {resolvedIcon
        && <CardIcon onClick={onIconClick} disabled={!onIconClick}>{resolvedIcon}</CardIcon>}
      </CardHeader>
    );
  }
}

ContentCardHeader.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  icon: PropTypes.node,
  onIconClick: PropTypes.func,
  isExpanded: PropTypes.bool.isRequired,
  isExpandable: PropTypes.bool,
  loading: PropTypes.bool,
};

ContentCardHeader.defaultProps = {
  title: undefined,
  icon: undefined,
  onIconClick: undefined,
  isExpandable: false,
  loading: false,
};

export default ContentCardHeader;
