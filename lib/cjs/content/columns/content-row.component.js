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
      stretch = _ref.stretch;
  return _react2.default.createElement(
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
  );
};

ContentRow.defaultProps = {
  children: undefined,
  topOffset: 40,
  stretch: false
};

exports.default = ContentRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1yb3cuY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJnZXRUb3BPZmZzZXQiLCJvZmZzZXQiLCJjYWxjdWxhdGVIZWlnaHQiLCJwcm9wcyIsInN0cmV0Y2giLCJ0b3BPZmZzZXQiLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiUm93Iiwic3R5bGVkIiwiZGl2IiwiaGFsZkd1dHRlcldpZHRoIiwiQ29udGVudFJvdyIsImNoaWxkcmVuIiwiY2xhc3NQcmVmaXgiLCJlbGVtZW50IiwiY29sQ29udGFpbmVyIiwiUmVhY3QiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaSIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJwYXJlbnQiLCJpc0xhc3RJdGVtIiwibGVuZ3RoIiwiY29sdW1uQ291bnQiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7QUFEQTs7O0FBR0EsSUFBTUEsZUFBZSxTQUFmQSxZQUFlO0FBQUEsU0FBVyxPQUFPQyxNQUFQLEtBQWtCLFFBQWxCLEdBQTZCQSxNQUE3QixHQUF5Q0EsTUFBekMsT0FBWDtBQUFBLENBQXJCO0FBQ0EsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVc7QUFDakMsTUFBSSxDQUFDQSxNQUFNQyxPQUFYLEVBQW9CLE9BQU8sTUFBUDtBQUNwQiwyQkFBdUJKLGFBQWFHLE1BQU1FLFNBQW5CLENBQXZCLGdCQUErREMsaUJBQU1DLFdBQXJFO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNQyxNQUFNQywyQkFBT0MsR0FBYixrQkFDTUosaUJBQU1DLFdBRFosRUFDMkJELGlCQUFNSyxlQURqQyxFQUlNO0FBQUEsU0FBU1QsZ0JBQWdCQyxLQUFoQixDQUFUO0FBQUEsQ0FKTixDQUFOOztBQU9BLElBQU1TLGFBQWEsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLE1BQWFSLFNBQWIsUUFBYUEsU0FBYjtBQUFBLE1BQXdCRCxPQUF4QixRQUF3QkEsT0FBeEI7QUFBQSxTQUNqQjtBQUFDLE9BQUQ7QUFBQTtBQUNFLGlCQUFXQyxTQURiO0FBRUUsZUFBU0QsT0FGWDtBQUdFLGlCQUFjVSxzQkFBZCxTQUhGO0FBSUUsZ0JBQVUsa0JBQUNDLE9BQUQsRUFBYTtBQUNyQixrQkFBS0MsWUFBTCxHQUFvQkQsT0FBcEI7QUFDRDtBQU5IO0FBUUdFLG9CQUFNQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJOLFFBQW5CLEVBQTZCLFVBQUNPLEtBQUQsRUFBUUMsQ0FBUixFQUFjO0FBQzFDO0FBQ0EsVUFBSSxPQUFPRCxNQUFNRSxJQUFiLEtBQXNCLFFBQTFCLEVBQW9DLE9BQU9GLEtBQVA7O0FBRXBDO0FBQ0EsYUFBT0gsZ0JBQU1NLFlBQU4sQ0FBbUJILEtBQW5CLEVBQTBCO0FBQy9CSSxnQkFBUSxVQUFLUixZQURrQjtBQUUvQlMsb0JBQVlKLE1BQU1SLFNBQVNhLE1BQVQsR0FBa0IsQ0FBeEIsSUFBNkJiLFNBQVNhLE1BQVQsS0FBb0IsQ0FGOUI7QUFHL0JDLHFCQUFhZCxTQUFTYTtBQUhTLE9BQTFCLENBQVA7QUFLRCxLQVZBO0FBUkgsR0FEaUI7QUFBQSxDQUFuQjs7QUE2QkFkLFdBQVdnQixZQUFYLEdBQTBCO0FBQ3hCZixZQUFVZ0IsU0FEYztBQUV4QnhCLGFBQVcsRUFGYTtBQUd4QkQsV0FBUztBQUhlLENBQTFCOztrQkFNZVEsVSIsImZpbGUiOiJjb250ZW50LXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgZ2V0VG9wT2Zmc2V0ID0gb2Zmc2V0ID0+ICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJyA/IG9mZnNldCA6IGAke29mZnNldH1weGApO1xuY29uc3QgY2FsY3VsYXRlSGVpZ2h0ID0gKHByb3BzKSA9PiB7XG4gIGlmICghcHJvcHMuc3RyZXRjaCkgcmV0dXJuICdhdXRvJztcbiAgcmV0dXJuIGBjYWxjKDEwMHZoIC0gJHtnZXRUb3BPZmZzZXQocHJvcHMudG9wT2Zmc2V0KX0gLSAoMiAqICR7dGhlbWUuZ3V0dGVyV2lkdGh9KSlgO1xufTtcblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAke3RoZW1lLmd1dHRlcldpZHRofSAke3RoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IGNhbGN1bGF0ZUhlaWdodChwcm9wcyl9O1xufX1gO1xuXG5jb25zdCBDb250ZW50Um93ID0gKHsgY2hpbGRyZW4sIHRvcE9mZnNldCwgc3RyZXRjaCB9KSA9PiAoXG4gIDxSb3dcbiAgICB0b3BPZmZzZXQ9e3RvcE9mZnNldH1cbiAgICBzdHJldGNoPXtzdHJldGNofVxuICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X3Jvd2B9XG4gICAgaW5uZXJSZWY9eyhlbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLmNvbENvbnRhaW5lciA9IGVsZW1lbnQ7XG4gICAgfX1cbiAgPlxuICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4ge1xuICAgICAgLy8gSWYgaXQncyBhIHJlZ3VsYXIgRE9NIG5vZGVcbiAgICAgIGlmICh0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ3N0cmluZycpIHJldHVybiBjaGlsZDtcblxuICAgICAgLy8gSWYgaXQncyBhIFJlYWN0IGNvbXBvbmVudCAoaW4gbW9zdCBjYXNlcyBDb250ZW50LkNvbHVtbilcbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgcGFyZW50OiB0aGlzLmNvbENvbnRhaW5lcixcbiAgICAgICAgaXNMYXN0SXRlbTogaSA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSAmJiBjaGlsZHJlbi5sZW5ndGggIT09IDEsXG4gICAgICAgIGNvbHVtbkNvdW50OiBjaGlsZHJlbi5sZW5ndGgsXG4gICAgICB9KTtcbiAgICB9KX1cbiAgPC9Sb3c+XG4pO1xuXG5Db250ZW50Um93LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICB0b3BPZmZzZXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgc3RyZXRjaDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5Db250ZW50Um93LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IHVuZGVmaW5lZCxcbiAgdG9wT2Zmc2V0OiA0MCxcbiAgc3RyZXRjaDogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50Um93O1xuIl19