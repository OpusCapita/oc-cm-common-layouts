import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// App imports
import { classPrefix } from '../../constants';
import CardHeader from './content-card-header.component';
import * as Primitive from '../../primitives';

const Card = Primitive.Block.extend`
  display: flex;
  margin-bottom: ${props => (props.isLastItem ? 0 : props.theme.gutterWidth)}; 
  flex: ${props => (props.isLastItem ? '2 1 auto' : '0 0 auto')};
  width: 100%;
  height: ${props => (props.height ? props.height : 'auto')};
  flex-direction: column;
 `;

const CardContent = styled.div`
  flex: 1 1 calc(100% - ${props => props.theme.header.height}); 
  min-height: calc(100% - ${props => props.theme.header.height});
  display: flex;
  flex-direction: column;
 `;

class ContentCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: !!props.isExpanded && !!props.isExpandable,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isExpanded !== this.props.isExpanded) {
      this.setState({ isExpanded: nextProps.isExpanded });
    }
  }

  onExpandClick = () => {
    const { onExpand, id } = this.props;
    this.setState({ isExpanded: !this.state.isExpanded }, () => {
      if (onExpand) onExpand(id, this.state.isExpanded);
    });
  };

  render() {
    const cardClassPrefix = `${classPrefix}_card`;
    const {
      children, isLastItem, title, height, icon, onIconClick, className, id, isExpandable,
    } = this.props;

    const resolvedOnIconClick = isExpandable ? this.onExpandClick : onIconClick;

    return (
      <Card
        height={height}
        className={`${cardClassPrefix} ${className}`}
        isLastItem={isLastItem}
        id={id}
      >
        {title &&
        <CardHeader
          title={title}
          icon={icon}
          onIconClick={resolvedOnIconClick}
          isExpanded={this.state.isExpanded}
          isExpandable={isExpandable}
        />}
        {(!isExpandable || this.state.isExpanded) &&
        <CardContent className={`${cardClassPrefix}_content`}>{children}</CardContent>}
      </Card>
    );
  }
}

ContentCard.propTypes = {
  children: PropTypes.node,
  isLastItem: PropTypes.bool,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  height: PropTypes.string,
  icon: PropTypes.node,
  onIconClick: PropTypes.func,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  isExpanded: PropTypes.bool,
  isExpandable: PropTypes.bool,
  onExpand: PropTypes.func,
};
ContentCard.defaultProps = {
  children: undefined,
  isLastItem: false,
  title: undefined,
  height: undefined,
  icon: undefined,
  onIconClick: null,
  className: '',
  isExpanded: undefined,
  isExpandable: false,
  onExpand: undefined,
};

export default ContentCard;
