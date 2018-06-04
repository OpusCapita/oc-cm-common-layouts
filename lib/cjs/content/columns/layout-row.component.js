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

LayoutRow.defaultProps = {
  children: undefined,
  topOffset: 40,
  stretch: false
};

exports.default = LayoutRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvbGF5b3V0LXJvdy5jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbImdldFRvcE9mZnNldCIsIm9mZnNldCIsImNhbGN1bGF0ZUhlaWdodCIsInByb3BzIiwic3RyZXRjaCIsInRvcE9mZnNldCIsImd1dHRlcldpZHRoIiwiUm93IiwiZGl2IiwiTGF5b3V0Um93IiwiY2hpbGRyZW4iLCJlbGVtZW50IiwiY29sQ29udGFpbmVyIiwiQ2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsImkiLCJ0eXBlIiwiY2xvbmVFbGVtZW50IiwicGFyZW50IiwiaXNMYXN0SXRlbSIsImxlbmd0aCIsImNvbHVtbkNvdW50IiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7OzBGQVJBOztBQU9BOzs7QUFHQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFVLE9BQU9DLE1BQVAsS0FBa0IsUUFBbEIsR0FBNkJBLE1BQTdCLEdBQXlDQSxNQUF6QyxPQUFWO0FBQUEsQ0FBckI7QUFDQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxNQUFJLENBQUNBLE1BQU1DLE9BQVgsRUFBb0IsT0FBTyxNQUFQO0FBQ3BCLDJCQUF1QkosYUFBYUcsTUFBTUUsU0FBbkIsQ0FBdkIsZ0JBQStELGlCQUFNQyxXQUFyRTtBQUNELENBSEQ7O0FBS0EsSUFBTUMsTUFBTSwyQkFBT0MsR0FBYixrQkFDTSxpQkFBTUYsV0FEWixFQUlNO0FBQUEsU0FBU0osZ0JBQWdCQyxLQUFoQixDQUFUO0FBQUEsQ0FKTixDQUFOOztBQU9BLElBQU1NLFlBQVksU0FBWkEsU0FBWTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFMLFNBQWIsUUFBYUEsU0FBYjtBQUFBLE1BQXdCRCxPQUF4QixRQUF3QkEsT0FBeEI7QUFBQSxTQUNoQjtBQUFBO0FBQUE7QUFDRTtBQUFDLFNBQUQ7QUFBQTtBQUNFLG1CQUFXQyxTQURiO0FBRUUsaUJBQVNELE9BRlg7QUFHRSxrREFIRjtBQUlFLGtCQUFVLGtCQUFDTyxPQUFELEVBQWE7QUFDckIsb0JBQUtDLFlBQUwsR0FBb0JELE9BQXBCO0FBQ0Q7QUFOSDtBQVFHLHNCQUFNRSxRQUFOLENBQWVDLEdBQWYsQ0FBbUJKLFFBQW5CLEVBQTZCLFVBQUNLLEtBQUQsRUFBUUMsQ0FBUixFQUFjO0FBQzFDO0FBQ0EsWUFBSSxPQUFPRCxNQUFNRSxJQUFiLEtBQXNCLFFBQTFCLEVBQW9DLE9BQU9GLEtBQVA7O0FBRXBDO0FBQ0EsZUFBTyxnQkFBTUcsWUFBTixDQUFtQkgsS0FBbkIsRUFBMEI7QUFDL0JJLGtCQUFRLFVBQUtQLFlBRGtCO0FBRS9CUSxzQkFBWUosTUFBTU4sU0FBU1csTUFBVCxHQUFrQixDQUF4QixJQUE2QlgsU0FBU1csTUFBVCxLQUFvQixDQUY5QjtBQUcvQkMsdUJBQWFaLFNBQVNXO0FBSFMsU0FBMUIsQ0FBUDtBQUtELE9BVkE7QUFSSDtBQURGLEdBRGdCO0FBQUEsQ0FBbEI7O0FBK0JBWixVQUFVYyxZQUFWLEdBQXlCO0FBQ3ZCYixZQUFVYyxTQURhO0FBRXZCbkIsYUFBVyxFQUZZO0FBR3ZCRCxXQUFTO0FBSGMsQ0FBekI7O2tCQU1lSyxTIiwiZmlsZSI6ImxheW91dC1yb3cuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tY29uZnVzaW5nLWFycm93ICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgUGVyZmVjdFNjcm9sbGJhciBmcm9tICdAb3B1c2NhcGl0YS9yZWFjdC1wZXJmZWN0LXNjcm9sbGJhcic7XG5cbi8vIEFwcCBpbXBvcnRzXG5pbXBvcnQgeyBjbGFzc1ByZWZpeCwgdGhlbWUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBnZXRUb3BPZmZzZXQgPSBvZmZzZXQgPT4gdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycgPyBvZmZzZXQgOiBgJHtvZmZzZXR9cHhgO1xuY29uc3QgY2FsY3VsYXRlSGVpZ2h0ID0gKHByb3BzKSA9PiB7XG4gIGlmICghcHJvcHMuc3RyZXRjaCkgcmV0dXJuICdhdXRvJztcbiAgcmV0dXJuIGBjYWxjKDEwMHZoIC0gJHtnZXRUb3BPZmZzZXQocHJvcHMudG9wT2Zmc2V0KX0gLSAoMiAqICR7dGhlbWUuZ3V0dGVyV2lkdGh9KSlgO1xufTtcblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAke3RoZW1lLmd1dHRlcldpZHRofTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gY2FsY3VsYXRlSGVpZ2h0KHByb3BzKX07XG59fWA7XG5cbmNvbnN0IExheW91dFJvdyA9ICh7IGNoaWxkcmVuLCB0b3BPZmZzZXQsIHN0cmV0Y2ggfSkgPT4gKFxuICA8UGVyZmVjdFNjcm9sbGJhcj5cbiAgICA8Um93XG4gICAgICB0b3BPZmZzZXQ9e3RvcE9mZnNldH1cbiAgICAgIHN0cmV0Y2g9e3N0cmV0Y2h9XG4gICAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9yb3dgfVxuICAgICAgaW5uZXJSZWY9eyhlbGVtZW50KSA9PiB7XG4gICAgICAgIHRoaXMuY29sQ29udGFpbmVyID0gZWxlbWVudDtcbiAgICAgIH19XG4gICAgPlxuICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiB7XG4gICAgICAgIC8vIElmIGl0J3MgYSByZWd1bGFyIERPTSBub2RlXG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ3N0cmluZycpIHJldHVybiBjaGlsZDtcblxuICAgICAgICAvLyBJZiBpdCdzIGEgUmVhY3QgY29tcG9uZW50IChpbiBtb3N0IGNhc2VzIENvbnRlbnQuQ29sdW1uKVxuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgcGFyZW50OiB0aGlzLmNvbENvbnRhaW5lcixcbiAgICAgICAgICBpc0xhc3RJdGVtOiBpID09PSBjaGlsZHJlbi5sZW5ndGggLSAxICYmIGNoaWxkcmVuLmxlbmd0aCAhPT0gMSxcbiAgICAgICAgICBjb2x1bW5Db3VudDogY2hpbGRyZW4ubGVuZ3RoLFxuICAgICAgICB9KTtcbiAgICAgIH0pfVxuICAgIDwvUm93PlxuICA8L1BlcmZlY3RTY3JvbGxiYXI+XG4pO1xuXG5MYXlvdXRSb3cucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHRvcE9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBzdHJldGNoOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkxheW91dFJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIHRvcE9mZnNldDogNDAsXG4gIHN0cmV0Y2g6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Um93O1xuIl19