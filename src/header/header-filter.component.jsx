import React from 'react';
import PropTypes from 'prop-types';
// App imports
import { classPrefix, theme } from '../constants';
import { PrimitiveHeader, PrimitiveHeaderTitle } from '../primitives';

const ProductTitle = PrimitiveHeaderTitle.extend`
  margin-right: ${theme.gutterWidth};
`;

const HeaderTabFilter = ({ title }) => ( // eslint-disable-line
  <PrimitiveHeader className={`${classPrefix}_filter-header`}>
    {title && <ProductTitle>{title}</ProductTitle>}
  </PrimitiveHeader>
);

HeaderTabFilter.propTypes = {
  title: PropTypes.string,
};

HeaderTabFilter.defaultProps = {
  title: null,
};

export default HeaderTabFilter;
