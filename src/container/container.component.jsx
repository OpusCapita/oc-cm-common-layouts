import React from 'react';
import PropTypes from 'prop-types';
import './container.scss';

const defaultCls = 'oc-ui-container';

const Container = (props) => {
  const getContainerClass = () => props.containerCls ? `${props.containerCls}` : `${defaultCls}`;

  return (
    <div id={props.containerId} className={getContainerClass()}>
      { props.children }
    </div>
  );
};

Container.propTypes = {
  containerId: PropTypes.string.isRequired,
  containerCls: PropTypes.string,
  children: PropTypes.node,
};

Container.defaultProps = {
  containerId: 'exampleId',
  containerCls: '',
  children: [],
};

export default Container;
