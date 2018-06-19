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

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJnZXRUb3BPZmZzZXQiLCJvZmZzZXQiLCJjYWxjdWxhdGVIZWlnaHQiLCJwcm9wcyIsInN0cmV0Y2giLCJ0b3BPZmZzZXQiLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiUm93Iiwic3R5bGVkIiwiZGl2IiwiaGFsZkd1dHRlcldpZHRoIiwiQ29udGVudFJvdyIsImNoaWxkcmVuIiwiY2xhc3NQcmVmaXgiLCJlbGVtZW50IiwiY29sQ29udGFpbmVyIiwiUmVhY3QiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaSIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJwYXJlbnQiLCJpc0xhc3RJdGVtIiwibGVuZ3RoIiwiY29sdW1uQ291bnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7OztBQURBOzs7QUFHQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFXLE9BQU9DLE1BQVAsS0FBa0IsUUFBbEIsR0FBNkJBLE1BQTdCLEdBQXlDQSxNQUF6QyxPQUFYO0FBQUEsQ0FBckI7QUFDQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxNQUFJLENBQUNBLE1BQU1DLE9BQVgsRUFBb0IsT0FBTyxNQUFQO0FBQ3BCLDJCQUF1QkosYUFBYUcsTUFBTUUsU0FBbkIsQ0FBdkIsZ0JBQStEQyxpQkFBTUMsV0FBckU7QUFDRCxDQUhEOztBQUtBLElBQU1DLE1BQU1DLDJCQUFPQyxHQUFiLGtCQUNNSixpQkFBTUMsV0FEWixFQUMyQkQsaUJBQU1LLGVBRGpDLEVBSU07QUFBQSxTQUFTVCxnQkFBZ0JDLEtBQWhCLENBQVQ7QUFBQSxDQUpOLENBQU47O0FBT0EsSUFBTVMsYUFBYSxTQUFiQSxVQUFhO0FBQUEsTUFBR0MsUUFBSCxRQUFHQSxRQUFIO0FBQUEsTUFBYVIsU0FBYixRQUFhQSxTQUFiO0FBQUEsTUFBd0JELE9BQXhCLFFBQXdCQSxPQUF4QjtBQUFBLFNBQ2pCO0FBQUMsbUNBQUQ7QUFBQTtBQUNFO0FBQUMsU0FBRDtBQUFBO0FBQ0UsbUJBQVdDLFNBRGI7QUFFRSxpQkFBU0QsT0FGWDtBQUdFLG1CQUFjVSxzQkFBZCxTQUhGO0FBSUUsa0JBQVUsa0JBQUNDLE9BQUQsRUFBYTtBQUNyQixvQkFBS0MsWUFBTCxHQUFvQkQsT0FBcEI7QUFDRDtBQU5IO0FBUUdFLHNCQUFNQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJOLFFBQW5CLEVBQTZCLFVBQUNPLEtBQUQsRUFBUUMsQ0FBUixFQUFjO0FBQzFDO0FBQ0EsWUFBSSxPQUFPRCxNQUFNRSxJQUFiLEtBQXNCLFFBQTFCLEVBQW9DLE9BQU9GLEtBQVA7O0FBRXBDO0FBQ0EsZUFBT0gsZ0JBQU1NLFlBQU4sQ0FBbUJILEtBQW5CLEVBQTBCO0FBQy9CSSxrQkFBUSxVQUFLUixZQURrQjtBQUUvQlMsc0JBQVlKLE1BQU1SLFNBQVNhLE1BQVQsR0FBa0IsQ0FBeEIsSUFBNkJiLFNBQVNhLE1BQVQsS0FBb0IsQ0FGOUI7QUFHL0JDLHVCQUFhZCxTQUFTYTtBQUhTLFNBQTFCLENBQVA7QUFLRCxPQVZBO0FBUkg7QUFERixHQURpQjtBQUFBLENBQW5COztBQStCQWQsV0FBV2dCLFlBQVgsR0FBMEI7QUFDeEJmLFlBQVVnQixTQURjO0FBRXhCeEIsYUFBVyxFQUZhO0FBR3hCRCxXQUFTO0FBSGUsQ0FBMUI7O2tCQU1lUSxVIiwiZmlsZSI6ImNvbnRlbnQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBnZXRUb3BPZmZzZXQgPSBvZmZzZXQgPT4gKHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnID8gb2Zmc2V0IDogYCR7b2Zmc2V0fXB4YCk7XG5jb25zdCBjYWxjdWxhdGVIZWlnaHQgPSAocHJvcHMpID0+IHtcbiAgaWYgKCFwcm9wcy5zdHJldGNoKSByZXR1cm4gJ2F1dG8nO1xuICByZXR1cm4gYGNhbGMoMTAwdmggLSAke2dldFRvcE9mZnNldChwcm9wcy50b3BPZmZzZXQpfSAtICgyICogJHt0aGVtZS5ndXR0ZXJXaWR0aH0pKWA7XG59O1xuXG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46ICR7dGhlbWUuZ3V0dGVyV2lkdGh9ICR7dGhlbWUuaGFsZkd1dHRlcldpZHRofTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gY2FsY3VsYXRlSGVpZ2h0KHByb3BzKX07XG59fWA7XG5cbmNvbnN0IENvbnRlbnRSb3cgPSAoeyBjaGlsZHJlbiwgdG9wT2Zmc2V0LCBzdHJldGNoIH0pID0+IChcbiAgPFBlcmZlY3RTY3JvbGxiYXI+XG4gICAgPFJvd1xuICAgICAgdG9wT2Zmc2V0PXt0b3BPZmZzZXR9XG4gICAgICBzdHJldGNoPXtzdHJldGNofVxuICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fcm93YH1cbiAgICAgIGlubmVyUmVmPXsoZWxlbWVudCkgPT4ge1xuICAgICAgICB0aGlzLmNvbENvbnRhaW5lciA9IGVsZW1lbnQ7XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4ge1xuICAgICAgICAvLyBJZiBpdCdzIGEgcmVndWxhciBET00gbm9kZVxuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnR5cGUgPT09ICdzdHJpbmcnKSByZXR1cm4gY2hpbGQ7XG5cbiAgICAgICAgLy8gSWYgaXQncyBhIFJlYWN0IGNvbXBvbmVudCAoaW4gbW9zdCBjYXNlcyBDb250ZW50LkNvbHVtbilcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgIHBhcmVudDogdGhpcy5jb2xDb250YWluZXIsXG4gICAgICAgICAgaXNMYXN0SXRlbTogaSA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSAmJiBjaGlsZHJlbi5sZW5ndGggIT09IDEsXG4gICAgICAgICAgY29sdW1uQ291bnQ6IGNoaWxkcmVuLmxlbmd0aCxcbiAgICAgICAgfSk7XG4gICAgICB9KX1cbiAgICA8L1Jvdz5cbiAgPC9QZXJmZWN0U2Nyb2xsYmFyPlxuKTtcblxuQ29udGVudFJvdy5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgdG9wT2Zmc2V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIHN0cmV0Y2g6IFByb3BUeXBlcy5ib29sLFxufTtcblxuQ29udGVudFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIHRvcE9mZnNldDogNDAsXG4gIHN0cmV0Y2g6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudFJvdztcbiJdfQ==