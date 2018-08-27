'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ', ';\n    padding: 0 ', ';\n'], ['\n    flex-grow: ', ';\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ', ';\n    padding: 0 ', ';\n']);

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


var Column = _styledComponents2.default.div(_templateObject, function (props) {
  return props.grow;
}, _constants.theme.column.minWidth, _constants.theme.halfGutterWidth);

var ContentColumn = function ContentColumn(_ref) {
  var children = _ref.children,
      isLastItem = _ref.isLastItem,
      grow = _ref.grow,
      id = _ref.id,
      className = _ref.className;
  return _react2.default.createElement(
    Column,
    {
      grow: grow,
      isLastItem: isLastItem,
      className: _constants.classPrefix + '_column ' + className,
      ref: function ref(elem) {
        undefined.column = elem;
      },
      id: id
    },
    _react2.default.Children.map(children, function (child, i) {
      // If it's a regular DOM node
      if (typeof child.type === 'string') return child;

      // If it's a React component (e.g. Content.Card)
      return _react2.default.cloneElement(child, {
        parent: undefined.column,
        isLastItem: i === children.length - 1 || children.length === undefined
      });
    })
  );
};

ContentColumn.defaultProps = {
  children: undefined,
  isLastItem: false,
  grow: 1,
  id: '',
  className: ''
};

exports.default = ContentColumn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1jb2x1bW4uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJDb2x1bW4iLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImdyb3ciLCJ0aGVtZSIsImNvbHVtbiIsIm1pbldpZHRoIiwiaGFsZkd1dHRlcldpZHRoIiwiQ29udGVudENvbHVtbiIsImNoaWxkcmVuIiwiaXNMYXN0SXRlbSIsImlkIiwiY2xhc3NOYW1lIiwiY2xhc3NQcmVmaXgiLCJlbGVtIiwiUmVhY3QiLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaSIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJwYXJlbnQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7Ozs7QUFEQTs7O0FBR0EsSUFBTUEsU0FBU0MsMkJBQU9DLEdBQWhCLGtCQUNXO0FBQUEsU0FBU0MsTUFBTUMsSUFBZjtBQUFBLENBRFgsRUFPV0MsaUJBQU1DLE1BQU4sQ0FBYUMsUUFQeEIsRUFRV0YsaUJBQU1HLGVBUmpCLENBQU47O0FBV0EsSUFBTUMsZ0JBQWdCLFNBQWhCQSxhQUFnQjtBQUFBLE1BQ3BCQyxRQURvQixRQUNwQkEsUUFEb0I7QUFBQSxNQUVwQkMsVUFGb0IsUUFFcEJBLFVBRm9CO0FBQUEsTUFHcEJQLElBSG9CLFFBR3BCQSxJQUhvQjtBQUFBLE1BSXBCUSxFQUpvQixRQUlwQkEsRUFKb0I7QUFBQSxNQUtwQkMsU0FMb0IsUUFLcEJBLFNBTG9CO0FBQUEsU0FPcEI7QUFBQyxVQUFEO0FBQUE7QUFDRSxZQUFNVCxJQURSO0FBRUUsa0JBQVlPLFVBRmQ7QUFHRSxpQkFBY0csc0JBQWQsZ0JBQW9DRCxTQUh0QztBQUlFLFdBQUssYUFBQ0UsSUFBRCxFQUFVO0FBQ2Isa0JBQUtULE1BQUwsR0FBY1MsSUFBZDtBQUNELE9BTkg7QUFPRSxVQUFJSDtBQVBOO0FBU0dJLG9CQUFNQyxRQUFOLENBQWVDLEdBQWYsQ0FBbUJSLFFBQW5CLEVBQTZCLFVBQUNTLEtBQUQsRUFBUUMsQ0FBUixFQUFjO0FBQzFDO0FBQ0EsVUFBSSxPQUFPRCxNQUFNRSxJQUFiLEtBQXNCLFFBQTFCLEVBQW9DLE9BQU9GLEtBQVA7O0FBRXBDO0FBQ0EsYUFBT0gsZ0JBQU1NLFlBQU4sQ0FBbUJILEtBQW5CLEVBQTBCO0FBQy9CSSxnQkFBUSxVQUFLakIsTUFEa0I7QUFFL0JLLG9CQUFZUyxNQUFNVixTQUFTYyxNQUFULEdBQWtCLENBQXhCLElBQTZCZCxTQUFTYyxNQUFULEtBQW9CQztBQUY5QixPQUExQixDQUFQO0FBSUQsS0FUQTtBQVRILEdBUG9CO0FBQUEsQ0FBdEI7O0FBcUNBaEIsY0FBY2lCLFlBQWQsR0FBNkI7QUFDM0JoQixZQUFVZSxTQURpQjtBQUUzQmQsY0FBWSxLQUZlO0FBRzNCUCxRQUFNLENBSHFCO0FBSTNCUSxNQUFJLEVBSnVCO0FBSzNCQyxhQUFXO0FBTGdCLENBQTdCOztrQkFRZUosYSIsImZpbGUiOiJjb250ZW50LWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXgsIHRoZW1lIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuY29uc3QgQ29sdW1uID0gc3R5bGVkLmRpdmBcbiAgICBmbGV4LWdyb3c6ICR7cHJvcHMgPT4gcHJvcHMuZ3Jvd307XG4gICAgZmxleC1zaHJpbms6IDE7XG4gICAgZmxleC1iYXNpczogMDtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi13aWR0aDogJHt0aGVtZS5jb2x1bW4ubWluV2lkdGh9O1xuICAgIHBhZGRpbmc6IDAgJHt0aGVtZS5oYWxmR3V0dGVyV2lkdGh9O1xuYDtcblxuY29uc3QgQ29udGVudENvbHVtbiA9ICh7XG4gIGNoaWxkcmVuLFxuICBpc0xhc3RJdGVtLFxuICBncm93LFxuICBpZCxcbiAgY2xhc3NOYW1lLFxufSkgPT4gKFxuICA8Q29sdW1uXG4gICAgZ3Jvdz17Z3Jvd31cbiAgICBpc0xhc3RJdGVtPXtpc0xhc3RJdGVtfVxuICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NQcmVmaXh9X2NvbHVtbiAke2NsYXNzTmFtZX1gfVxuICAgIHJlZj17KGVsZW0pID0+IHtcbiAgICAgIHRoaXMuY29sdW1uID0gZWxlbTtcbiAgICB9fVxuICAgIGlkPXtpZH1cbiAgPlxuICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4ge1xuICAgICAgLy8gSWYgaXQncyBhIHJlZ3VsYXIgRE9NIG5vZGVcbiAgICAgIGlmICh0eXBlb2YgY2hpbGQudHlwZSA9PT0gJ3N0cmluZycpIHJldHVybiBjaGlsZDtcblxuICAgICAgLy8gSWYgaXQncyBhIFJlYWN0IGNvbXBvbmVudCAoZS5nLiBDb250ZW50LkNhcmQpXG4gICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgIHBhcmVudDogdGhpcy5jb2x1bW4sXG4gICAgICAgIGlzTGFzdEl0ZW06IGkgPT09IGNoaWxkcmVuLmxlbmd0aCAtIDEgfHwgY2hpbGRyZW4ubGVuZ3RoID09PSB1bmRlZmluZWQsXG4gICAgICB9KTtcbiAgICB9KX1cbiAgPC9Db2x1bW4+XG4pO1xuXG5Db250ZW50Q29sdW1uLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICBpc0xhc3RJdGVtOiBQcm9wVHlwZXMuYm9vbCxcbiAgZ3JvdzogUHJvcFR5cGVzLm51bWJlcixcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkNvbnRlbnRDb2x1bW4uZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICBpc0xhc3RJdGVtOiBmYWxzZSxcbiAgZ3JvdzogMSxcbiAgaWQ6ICcnLFxuICBjbGFzc05hbWU6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudENvbHVtbjtcbiJdfQ==