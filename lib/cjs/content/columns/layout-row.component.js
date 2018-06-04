'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin: ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}'], ['\n  margin: ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}']);

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

var Row = _styledComponents2.default.div(_templateObject, _constants.theme.gutterWidth, function (props) {
  return calculateHeight(props);
});

var LayoutRow = function LayoutRow(_ref) {
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
        return _react2.default.cloneElement(child, {
          parent: undefined.colContainer,
          isLastItem: i === children.length - 1 && children.length !== 1,
          columnCount: children.length
        });
      })
    )
  );
};

LayoutRow.defaultProps = {
  children: undefined,
  topOffset: 40,
  stretch: false
};

exports.default = LayoutRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvbGF5b3V0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImdldFRvcE9mZnNldCIsIm9mZnNldCIsImNhbGN1bGF0ZUhlaWdodCIsInByb3BzIiwic3RyZXRjaCIsInRvcE9mZnNldCIsImd1dHRlcldpZHRoIiwiUm93IiwiZGl2IiwiTGF5b3V0Um93IiwiY2hpbGRyZW4iLCJlbGVtZW50IiwiY29sQ29udGFpbmVyIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImkiLCJjbG9uZUVsZW1lbnQiLCJwYXJlbnQiLCJpc0xhc3RJdGVtIiwibGVuZ3RoIiwiY29sdW1uQ291bnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7MEZBUkE7O0FBT0E7OztBQUdBLElBQU1BLGVBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQVUsT0FBT0MsTUFBUCxLQUFrQixRQUFsQixHQUE2QkEsTUFBN0IsR0FBeUNBLE1BQXpDLE9BQVY7QUFBQSxDQUFyQjtBQUNBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2pDLE1BQUksQ0FBQ0EsTUFBTUMsT0FBWCxFQUFvQixPQUFPLE1BQVA7QUFDcEIsMkJBQXVCSixhQUFhRyxNQUFNRSxTQUFuQixDQUF2QixnQkFBK0QsaUJBQU1DLFdBQXJFO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNQyxNQUFNLDJCQUFPQyxHQUFiLGtCQUNNLGlCQUFNRixXQURaLEVBSU07QUFBQSxTQUFTSixnQkFBZ0JDLEtBQWhCLENBQVQ7QUFBQSxDQUpOLENBQU47O0FBT0EsSUFBTU0sWUFBWSxTQUFaQSxTQUFZO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYUwsU0FBYixRQUFhQSxTQUFiO0FBQUEsTUFBd0JELE9BQXhCLFFBQXdCQSxPQUF4QjtBQUFBLFNBQ2hCO0FBQUE7QUFBQTtBQUNFO0FBQUMsU0FBRDtBQUFBO0FBQ0UsbUJBQVdDLFNBRGI7QUFFRSxpQkFBU0QsT0FGWDtBQUdFLGtEQUhGO0FBSUUsa0JBQVUsa0JBQUNPLE9BQUQsRUFBYTtBQUNyQixvQkFBS0MsWUFBTCxHQUFvQkQsT0FBcEI7QUFDRDtBQU5IO0FBUUcsc0JBQU1FLFFBQU4sQ0FBZUMsR0FBZixDQUFtQkosUUFBbkIsRUFBNkIsVUFBQ0ssS0FBRCxFQUFRQyxDQUFSO0FBQUEsZUFBYyxnQkFBTUMsWUFBTixDQUFtQkYsS0FBbkIsRUFBMEI7QUFDcEVHLGtCQUFRLFVBQUtOLFlBRHVEO0FBRXBFTyxzQkFBWUgsTUFBTU4sU0FBU1UsTUFBVCxHQUFrQixDQUF4QixJQUE2QlYsU0FBU1UsTUFBVCxLQUFvQixDQUZPO0FBR3BFQyx1QkFBYVgsU0FBU1U7QUFIOEMsU0FBMUIsQ0FBZDtBQUFBLE9BQTdCO0FBUkg7QUFERixHQURnQjtBQUFBLENBQWxCOztBQXlCQVgsVUFBVWEsWUFBVixHQUF5QjtBQUN2QlosWUFBVWEsU0FEYTtBQUV2QmxCLGFBQVcsRUFGWTtBQUd2QkQsV0FBUztBQUhjLENBQXpCOztrQkFNZUssUyIsImZpbGUiOiJsYXlvdXQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbmZ1c2luZy1hcnJvdyAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFBlcmZlY3RTY3JvbGxiYXIgZnJvbSAnQG9wdXNjYXBpdGEvcmVhY3QtcGVyZmVjdC1zY3JvbGxiYXInO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgZ2V0VG9wT2Zmc2V0ID0gb2Zmc2V0ID0+IHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnID8gb2Zmc2V0IDogYCR7b2Zmc2V0fXB4YDtcbmNvbnN0IGNhbGN1bGF0ZUhlaWdodCA9IChwcm9wcykgPT4ge1xuICBpZiAoIXByb3BzLnN0cmV0Y2gpIHJldHVybiAnYXV0byc7XG4gIHJldHVybiBgY2FsYygxMDB2aCAtICR7Z2V0VG9wT2Zmc2V0KHByb3BzLnRvcE9mZnNldCl9IC0gKDIgKiAke3RoZW1lLmd1dHRlcldpZHRofSkpYDtcbn07XG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogJHt0aGVtZS5ndXR0ZXJXaWR0aH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IGNhbGN1bGF0ZUhlaWdodChwcm9wcyl9O1xufX1gO1xuXG5jb25zdCBMYXlvdXRSb3cgPSAoeyBjaGlsZHJlbiwgdG9wT2Zmc2V0LCBzdHJldGNoIH0pID0+IChcbiAgPFBlcmZlY3RTY3JvbGxiYXI+XG4gICAgPFJvd1xuICAgICAgdG9wT2Zmc2V0PXt0b3BPZmZzZXR9XG4gICAgICBzdHJldGNoPXtzdHJldGNofVxuICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fcm93YH1cbiAgICAgIGlubmVyUmVmPXsoZWxlbWVudCkgPT4ge1xuICAgICAgICB0aGlzLmNvbENvbnRhaW5lciA9IGVsZW1lbnQ7XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIHBhcmVudDogdGhpcy5jb2xDb250YWluZXIsXG4gICAgICAgIGlzTGFzdEl0ZW06IGkgPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEgJiYgY2hpbGRyZW4ubGVuZ3RoICE9PSAxLFxuICAgICAgICBjb2x1bW5Db3VudDogY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgfSkpfVxuICAgIDwvUm93PlxuICA8L1BlcmZlY3RTY3JvbGxiYXI+XG4pO1xuXG5MYXlvdXRSb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHRvcE9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBzdHJldGNoOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkxheW91dFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIHRvcE9mZnNldDogNDAsXG4gIHN0cmV0Y2g6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Um93O1xuIl19