var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import ContentInputRow from '../input-row/content-input-row.component';

var ContentInputColumn = function ContentInputColumn(props) {
  return React.createElement(ContentInputRow, _extends({ asColumn: true }, props));
};
export default ContentInputColumn;