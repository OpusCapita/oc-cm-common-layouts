'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}'], ['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactPerfectScrollbar = require('@opuscapita/react-perfect-scrollbar');

var _reactPerfectScrollbar2 = _interopRequireDefault(_reactPerfectScrollbar);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } /* eslint-disable no-confusing-arrow */

// App imports


var getTopOffset = function getTopOffset(offset) {
  return typeof offset === 'string' ? offset : offset + 'px';
};
var calculateHeight = function calculateHeight(props) {
  if (!props.stretch) return 'auto';
  return 'calc(100vh - ' + getTopOffset(props.topOffset) + ' - (2 * ' + _constants.theme.gutterWidth + '))';
};

var Row = _styledComponents2.default.div(_templateObject, _constants.theme.gutterWidth, _constants.theme.halfGutterWidth, function (props) {
  return calculateHeight(props);
});

var ContentRow = function ContentRow(_ref) {
  var children = _ref.children,
      topOffset = _ref.topOffset,
      stretch = _ref.stretch;
  return _react2.default.createElement(
    _reactPerfectScrollbar2.default,
    null,
    _react2.default.createElement(
      Row,
      {
        topOffset: topOffset,
        stretch: stretch,
        className: _constants.classPrefix + '_row',
        innerRef: function innerRef(element) {
          undefined.colContainer = element;
        }
      },
      _react2.default.Children.map(children, function (child, i) {
        // If it's a regular DOM node
        if (typeof child.type === 'string') return child;

        // If it's a React component (in most cases Content.Column)
        return _react2.default.cloneElement(child, {
          parent: undefined.colContainer,
          isLastItem: i === children.length - 1 && children.length !== 1,
          columnCount: children.length
        });
      })
    )
  );
};

ContentRow.defaultProps = {
  children: undefined,
  topOffset: 40,
  stretch: false
};

exports.default = ContentRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJnZXRUb3BPZmZzZXQiLCJvZmZzZXQiLCJjYWxjdWxhdGVIZWlnaHQiLCJwcm9wcyIsInN0cmV0Y2giLCJ0b3BPZmZzZXQiLCJndXR0ZXJXaWR0aCIsIlJvdyIsImRpdiIsImhhbGZHdXR0ZXJXaWR0aCIsIkNvbnRlbnRSb3ciLCJjaGlsZHJlbiIsImVsZW1lbnQiLCJjb2xDb250YWluZXIiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaSIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJwYXJlbnQiLCJpc0xhc3RJdGVtIiwibGVuZ3RoIiwiY29sdW1uQ291bnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7MEZBUkE7O0FBT0E7OztBQUdBLElBQU1BLGVBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQVUsT0FBT0MsTUFBUCxLQUFrQixRQUFsQixHQUE2QkEsTUFBN0IsR0FBeUNBLE1BQXpDLE9BQVY7QUFBQSxDQUFyQjtBQUNBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLE1BQUksQ0FBQ0EsTUFBTUMsT0FBWCxFQUFvQixPQUFPLE1BQVA7QUFDcEIsMkJBQXVCSixhQUFhRyxNQUFNRSxTQUFuQixDQUF2QixnQkFBK0QsaUJBQU1DLFdBQXJFO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNQyxNQUFNLDJCQUFPQyxHQUFiLGtCQUNNLGlCQUFNRixXQURaLEVBQzJCLGlCQUFNRyxlQURqQyxFQUlNO0FBQUEsU0FBU1AsZ0JBQWdCQyxLQUFoQixDQUFUO0FBQUEsQ0FKTixDQUFOOztBQU9BLElBQU1PLGFBQWEsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFOLFNBQWIsUUFBYUEsU0FBYjtBQUFBLE1BQXdCRCxPQUF4QixRQUF3QkEsT0FBeEI7QUFBQSxTQUNqQjtBQUFBO0FBQUE7QUFDRTtBQUFDLFNBQUQ7QUFBQTtBQUNFLG1CQUFXQyxTQURiO0FBRUUsaUJBQVNELE9BRlg7QUFHRSxrREFIRjtBQUlFLGtCQUFVLGtCQUFDUSxPQUFELEVBQWE7QUFDckIsb0JBQUtDLFlBQUwsR0FBb0JELE9BQXBCO0FBQ0Q7QUFOSDtBQVFHLHNCQUFNRSxRQUFOLENBQWVDLEdBQWYsQ0FBbUJKLFFBQW5CLEVBQTZCLFVBQUNLLEtBQUQsRUFBUUMsQ0FBUixFQUFjO0FBQzFDO0FBQ0EsWUFBSSxPQUFPRCxNQUFNRSxJQUFiLEtBQXNCLFFBQTFCLEVBQW9DLE9BQU9GLEtBQVA7O0FBRXBDO0FBQ0EsZUFBTyxnQkFBTUcsWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFDL0JJLGtCQUFRLFVBQUtQLFlBRGtCO0FBRS9CUSxzQkFBWUosTUFBTU4sU0FBU1csTUFBVCxHQUFrQixDQUF4QixJQUE2QlgsU0FBU1csTUFBVCxLQUFvQixDQUY5QjtBQUcvQkMsdUJBQWFaLFNBQVNXO0FBSFMsU0FBMUIsQ0FBUDtBQUtELE9BVkE7QUFSSDtBQURGLEdBRGlCO0FBQUEsQ0FBbkI7O0FBK0JBWixXQUFXYyxZQUFYLEdBQTBCO0FBQ3hCYixZQUFVYyxTQURjO0FBRXhCcEIsYUFBVyxFQUZhO0FBR3hCRCxXQUFTO0FBSGUsQ0FBMUI7O2tCQU1lTSxVIiwiZmlsZSI6ImNvbnRlbnQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmZ1c2luZy1hcnJvdyAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgZ2V0VG9wT2Zmc2V0ID0gb2Zmc2V0ID0+IHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnID8gb2Zmc2V0IDogYCR7b2Zmc2V0fXB4YDtcbmNvbnN0IGNhbGN1bGF0ZUhlaWdodCA9IChwcm9wcykgPT4ge1xuICBpZiAoIXByb3BzLnN0cmV0Y2gpIHJldHVybiAnYXV0byc7XG4gIHJldHVybiBgY2FsYygxMDB2aCAtICR7Z2V0VG9wT2Zmc2V0KHByb3BzLnRvcE9mZnNldCl9IC0gKDIgKiAke3RoZW1lLmd1dHRlcldpZHRofSkpYDtcbn07XG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogJHt0aGVtZS5ndXR0ZXJXaWR0aH0gJHt0aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGhlaWdodDogJHtwcm9wcyA9PiBjYWxjdWxhdGVIZWlnaHQocHJvcHMpfTtcbn19YDtcblxuY29uc3QgQ29udGVudFJvdyA9ICh7IGNoaWxkcmVuLCB0b3BPZmZzZXQsIHN0cmV0Y2ggfSkgPT4gKFxuICA8UGVyZmVjdFNjcm9sbGJhcj5cbiAgICA8Um93XG4gICAgICB0b3BPZmZzZXQ9e3RvcE9mZnNldH1cbiAgICAgIHN0cmV0Y2g9e3N0cmV0Y2h9XG4gICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9yb3dgfVxuICAgICAgaW5uZXJSZWY9eyhlbGVtZW50KSA9PiB7XG4gICAgICAgIHRoaXMuY29sQ29udGFpbmVyID0gZWxlbWVudDtcbiAgICAgIH19XG4gICAgPlxuICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiB7XG4gICAgICAgIC8vIElmIGl0J3MgYSByZWd1bGFyIERPTSBub2RlXG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ3N0cmluZycpIHJldHVybiBjaGlsZDtcblxuICAgICAgICAvLyBJZiBpdCdzIGEgUmVhY3QgY29tcG9uZW50IChpbiBtb3N0IGNhc2VzIENvbnRlbnQuQ29sdW1uKVxuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgcGFyZW50OiB0aGlzLmNvbENvbnRhaW5lcixcbiAgICAgICAgICBpc0xhc3RJdGVtOiBpID09PSBjaGlsZHJlbi5sZW5ndGggLSAxICYmIGNoaWxkcmVuLmxlbmd0aCAhPT0gMSxcbiAgICAgICAgICBjb2x1bW5Db3VudDogY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgICB9KTtcbiAgICAgIH0pfVxuICAgIDwvUm93PlxuICA8L1BlcmZlY3RTY3JvbGxiYXI+XG4pO1xuXG5Db250ZW50Um93LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICB0b3BPZmZzZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgc3RyZXRjaDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5Db250ZW50Um93LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgdG9wT2Zmc2V0OiA0MCxcbiAgc3RyZXRjaDogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50Um93O1xuIl19