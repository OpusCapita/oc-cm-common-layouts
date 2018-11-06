var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import ReadonlyRow from '../input-row/content-readonly-row.component';

var ContentReadonlyColumn = function ContentReadonlyColumn(props) {
  return React.createElement(ReadonlyRow, _extends({ asColumn: true }, props));
};
export default ContentReadonlyColumn;