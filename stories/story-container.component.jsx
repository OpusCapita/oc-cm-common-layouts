import React from 'react';
import theme from '@opuscapita/oc-cm-theme';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

// Application
import { Block } from '../src/primitives';


const Content = styled(Block)`
  margin: ${props => props.theme.gutterWidth};
  width: auto;
`;

const Container = props => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      {props.block &&
      <Content>
        {props.children}
      </Content>}
      {!props.block && <div>{props.children}</div>}
    </React.Fragment>
  </ThemeProvider>
);

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  block: PropTypes.bool,
};

Container.defaultProps = {
  block: true,
};

export default Container;

