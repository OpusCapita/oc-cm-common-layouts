'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}'], ['\n  margin: ', ' ', ';\n  display: flex;\n  flex-wrap: wrap;\n  height: ', ';\n}}']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

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
      stretch = _ref.stretch,
      id = _ref.id,
      className = _ref.className;
  return _react2.default.createElement(
    Row,
    {
      topOffset: topOffset,
      stretch: stretch,
      className: _constants.classPrefix + '_row ' + className,
      innerRef: function innerRef(element) {
        undefined.colContainer = element;
      },
      id: id
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
  );
};

ContentRow.defaultProps = {
  children: undefined,
  topOffset: 40,
  stretch: false,
  id: '',
  className: ''
};

exports.default = ContentRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJnZXRUb3BPZmZzZXQiLCJvZmZzZXQiLCJjYWxjdWxhdGVIZWlnaHQiLCJwcm9wcyIsInN0cmV0Y2giLCJ0b3BPZmZzZXQiLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiUm93Iiwic3R5bGVkIiwiZGl2IiwiaGFsZkd1dHRlcldpZHRoIiwiQ29udGVudFJvdyIsImNoaWxkcmVuIiwiaWQiLCJjbGFzc05hbWUiLCJjbGFzc1ByZWZpeCIsImVsZW1lbnQiLCJjb2xDb250YWluZXIiLCJSZWFjdCIsIkNoaWxkcmVuIiwibWFwIiwiY2hpbGQiLCJpIiwidHlwZSIsImNsb25lRWxlbWVudCIsInBhcmVudCIsImlzTGFzdEl0ZW0iLCJsZW5ndGgiLCJjb2x1bW5Db3VudCIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7OztBQURBOzs7QUFHQSxJQUFNQSxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFXLE9BQU9DLE1BQVAsS0FBa0IsUUFBbEIsR0FBNkJBLE1BQTdCLEdBQXlDQSxNQUF6QyxPQUFYO0FBQUEsQ0FBckI7QUFDQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUNqQyxNQUFJLENBQUNBLE1BQU1DLE9BQVgsRUFBb0IsT0FBTyxNQUFQO0FBQ3BCLDJCQUF1QkosYUFBYUcsTUFBTUUsU0FBbkIsQ0FBdkIsZ0JBQStEQyxpQkFBTUMsV0FBckU7QUFDRCxDQUhEOztBQUtBLElBQU1DLE1BQU1DLDJCQUFPQyxHQUFiLGtCQUNNSixpQkFBTUMsV0FEWixFQUMyQkQsaUJBQU1LLGVBRGpDLEVBSU07QUFBQSxTQUFTVCxnQkFBZ0JDLEtBQWhCLENBQVQ7QUFBQSxDQUpOLENBQU47O0FBT0EsSUFBTVMsYUFBYSxTQUFiQSxVQUFhO0FBQUEsTUFDakJDLFFBRGlCLFFBQ2pCQSxRQURpQjtBQUFBLE1BRWpCUixTQUZpQixRQUVqQkEsU0FGaUI7QUFBQSxNQUdqQkQsT0FIaUIsUUFHakJBLE9BSGlCO0FBQUEsTUFJakJVLEVBSmlCLFFBSWpCQSxFQUppQjtBQUFBLE1BS2pCQyxTQUxpQixRQUtqQkEsU0FMaUI7QUFBQSxTQU9qQjtBQUFDLE9BQUQ7QUFBQTtBQUNFLGlCQUFXVixTQURiO0FBRUUsZUFBU0QsT0FGWDtBQUdFLGlCQUFjWSxzQkFBZCxhQUFpQ0QsU0FIbkM7QUFJRSxnQkFBVSxrQkFBQ0UsT0FBRCxFQUFhO0FBQ3JCLGtCQUFLQyxZQUFMLEdBQW9CRCxPQUFwQjtBQUNELE9BTkg7QUFPRSxVQUFJSDtBQVBOO0FBU0dLLG9CQUFNQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJSLFFBQW5CLEVBQTZCLFVBQUNTLEtBQUQsRUFBUUMsQ0FBUixFQUFjO0FBQzFDO0FBQ0EsVUFBSSxPQUFPRCxNQUFNRSxJQUFiLEtBQXNCLFFBQTFCLEVBQW9DLE9BQU9GLEtBQVA7O0FBRXBDO0FBQ0EsYUFBT0gsZ0JBQU1NLFlBQU4sQ0FBbUJILEtBQW5CLEVBQTBCO0FBQy9CSSxnQkFBUSxVQUFLUixZQURrQjtBQUUvQlMsb0JBQVlKLE1BQU1WLFNBQVNlLE1BQVQsR0FBa0IsQ0FBeEIsSUFBNkJmLFNBQVNlLE1BQVQsS0FBb0IsQ0FGOUI7QUFHL0JDLHFCQUFhaEIsU0FBU2U7QUFIUyxPQUExQixDQUFQO0FBS0QsS0FWQTtBQVRILEdBUGlCO0FBQUEsQ0FBbkI7O0FBc0NBaEIsV0FBV2tCLFlBQVgsR0FBMEI7QUFDeEJqQixZQUFVa0IsU0FEYztBQUV4QjFCLGFBQVcsRUFGYTtBQUd4QkQsV0FBUyxLQUhlO0FBSXhCVSxNQUFJLEVBSm9CO0FBS3hCQyxhQUFXO0FBTGEsQ0FBMUI7O2tCQVFlSCxVIiwiZmlsZSI6ImNvbnRlbnQtcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuLy8gQXBwIGltcG9ydHNcclxuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IGdldFRvcE9mZnNldCA9IG9mZnNldCA9PiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycgPyBvZmZzZXQgOiBgJHtvZmZzZXR9cHhgKTtcclxuY29uc3QgY2FsY3VsYXRlSGVpZ2h0ID0gKHByb3BzKSA9PiB7XHJcbiAgaWYgKCFwcm9wcy5zdHJldGNoKSByZXR1cm4gJ2F1dG8nO1xyXG4gIHJldHVybiBgY2FsYygxMDB2aCAtICR7Z2V0VG9wT2Zmc2V0KHByb3BzLnRvcE9mZnNldCl9IC0gKDIgKiAke3RoZW1lLmd1dHRlcldpZHRofSkpYDtcclxufTtcclxuXHJcbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAke3RoZW1lLmd1dHRlcldpZHRofSAke3RoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgaGVpZ2h0OiAke3Byb3BzID0+IGNhbGN1bGF0ZUhlaWdodChwcm9wcyl9O1xyXG59fWA7XHJcblxyXG5jb25zdCBDb250ZW50Um93ID0gKHtcclxuICBjaGlsZHJlbixcclxuICB0b3BPZmZzZXQsXHJcbiAgc3RyZXRjaCxcclxuICBpZCxcclxuICBjbGFzc05hbWUsXHJcbn0pID0+IChcclxuICA8Um93XHJcbiAgICB0b3BPZmZzZXQ9e3RvcE9mZnNldH1cclxuICAgIHN0cmV0Y2g9e3N0cmV0Y2h9XHJcbiAgICBjbGFzc05hbWU9e2Ake2NsYXNzUHJlZml4fV9yb3cgJHtjbGFzc05hbWV9YH1cclxuICAgIGlubmVyUmVmPXsoZWxlbWVudCkgPT4ge1xyXG4gICAgICB0aGlzLmNvbENvbnRhaW5lciA9IGVsZW1lbnQ7XHJcbiAgICB9fVxyXG4gICAgaWQ9e2lkfVxyXG4gID5cclxuICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4ge1xyXG4gICAgICAvLyBJZiBpdCdzIGEgcmVndWxhciBET00gbm9kZVxyXG4gICAgICBpZiAodHlwZW9mIGNoaWxkLnR5cGUgPT09ICdzdHJpbmcnKSByZXR1cm4gY2hpbGQ7XHJcblxyXG4gICAgICAvLyBJZiBpdCdzIGEgUmVhY3QgY29tcG9uZW50IChpbiBtb3N0IGNhc2VzIENvbnRlbnQuQ29sdW1uKVxyXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XHJcbiAgICAgICAgcGFyZW50OiB0aGlzLmNvbENvbnRhaW5lcixcclxuICAgICAgICBpc0xhc3RJdGVtOiBpID09PSBjaGlsZHJlbi5sZW5ndGggLSAxICYmIGNoaWxkcmVuLmxlbmd0aCAhPT0gMSxcclxuICAgICAgICBjb2x1bW5Db3VudDogY2hpbGRyZW4ubGVuZ3RoLFxyXG4gICAgICB9KTtcclxuICAgIH0pfVxyXG4gIDwvUm93PlxyXG4pO1xyXG5cclxuQ29udGVudFJvdy5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG4gIHRvcE9mZnNldDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxyXG4gIHN0cmV0Y2g6IFByb3BUeXBlcy5ib29sLFxyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuXHJcbkNvbnRlbnRSb3cuZGVmYXVsdFByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXHJcbiAgdG9wT2Zmc2V0OiA0MCxcclxuICBzdHJldGNoOiBmYWxzZSxcclxuICBpZDogJycsXHJcbiAgY2xhc3NOYW1lOiAnJyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRSb3c7XHJcbiJdfQ==