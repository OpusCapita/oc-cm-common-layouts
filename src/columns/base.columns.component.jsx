import React from 'react';
import { Map, List } from 'immutable';
import PropTypes from 'prop-types';
import PerfectScrollbar from '@opuscapita/react-perfect-scrollbar';

// at the moment this is the scss we follow:
import './columns_base.scss';

const ColumnConfigurationException = (message) => {
  this.message = message;
  this.name = 'BaseColumComponentException';
};

const LEFT_CHILD = 'left-child-component';
const MIDDLE_CHILD = 'middle-child-component';
const MIDDLE_LEFT_CHILD = 'middle-left-child-component';
const MIDDLE_RIGHT_CHILD = 'middle-right-child-component';
const RIGHT_CHILD = 'right-child-component';
const SINGLE_CHILD = 'single-child-component';

const COLUMN_IDS = Map({
  left: LEFT_CHILD,
  right: RIGHT_CHILD,
  middle: MIDDLE_CHILD,
  middleLeft: MIDDLE_LEFT_CHILD,
  middleRight: MIDDLE_RIGHT_CHILD,
  single: SINGLE_CHILD,
});

/**
 * @class: BaseColumnComponent
 * @description: Supports column layout up to 4 columns.
 * Each columns container gets its width based on the styles
 * of components inside.
 * @prop columns: Array of objects to define columns
 * @example: User wants to have two column layout:
 *
 */
class BaseColumComponent extends React.PureComponent {
  static propTypes = {
    columns: PropTypes.arrayOf(PropTypes.shape({
      elements: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.element,
        PropTypes.func,
      ]),
    })),
  };

  static defaultProps = {
    columns: List([
      { elements: {} },
    ]),
  };

  /**
   * @function resolveColumns
   * @param colIndx:    The order number of the columns.
   * @param totalSize:  Total size of columns List.
   * @returns String of alignment definition of the column.
   */
  resolveColums = (colIndx, totalSize) => {
    switch (totalSize) {
      case 2: {
        switch (colIndx) {
          case 0: return 'left';
          case 1: return 'right';
          default: throw new ColumnConfigurationException('Size does not match with given indx');
        }
      }
      case 3: {
        switch (colIndx) {
          case 0: return 'left';
          case 1: return 'middle';
          case 2: return 'right';
          default: throw new ColumnConfigurationException('Size does not match with given indx');
        }
      }
      case 4: {
        switch (colIndx) {
          case 0: return 'left';
          case 1: return 'middleLeft';
          case 2: return 'middleRight';
          case 3: return 'right';
          default: throw new ColumnConfigurationException('Size does not match with given indx');
        }
      }
      default: return 'single';
    }
  }

  renderContentFragments = (col, indx, totalSize) => {
    const alignment = this.resolveColums(indx, totalSize);
    return (
      <React.Fragment key={`column-${alignment}`}>
        <div id={`${COLUMN_IDS.get(alignment)}`}>
          { col.elements() }
        </div>
      </React.Fragment>
    );
  }


  render() {
    const totalSize = List(this.props.columns).size;
    return (
      <div id="base-column-component-container">
        <PerfectScrollbar>
          <div id="columns-container">
            {
              List(this.props.columns).map((column, indx) =>
                this.renderContentFragments(column, indx, totalSize))
            }
          </div>
        </PerfectScrollbar>
      </div>
    );
  }
}

export default BaseColumComponent;
