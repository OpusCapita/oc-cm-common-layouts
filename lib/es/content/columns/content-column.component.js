function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n    flex-grow: ", ";\n    flex-shrink: 1;\n    flex-basis: 0;\n    max-height: 100%;\n    flex-wrap: wrap;\n    display: flex;\n    min-width: ", ";\n    padding: 0 ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'; // App imports

import { classPrefix } from '../../constants';
var Column = styled.div(_templateObject(), function (props) {
  return props.grow;
}, function (props) {
  return props.theme.column.minWidth;
}, function (props) {
  return props.theme.halfGutterWidth;
});

var ContentColumn =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(ContentColumn, _React$PureComponent);

  function ContentColumn() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = ContentColumn.prototype;

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        children = _this$props.children,
        isLastItem = _this$props.isLastItem,
        grow = _this$props.grow,
        id = _this$props.id,
        className = _this$props.className;
    return React.createElement(Column, {
      grow: grow,
      isLastItem: isLastItem,
      className: classPrefix + "_column " + className,
      ref: function ref(elem) {
        _this.column = elem;
      },
      id: id
    }, React.Children.map(children, function (child, i) {
      // If it's a regular DOM node
      if (typeof child.type === 'string') return child; // If it's a React component (e.g. Content.Card)

      return React.cloneElement(child, {
        parent: _this.column,
        isLastItem: i === children.length - 1 || children.length === undefined
      });
    }));
  };

  return ContentColumn;
}(React.PureComponent);

ContentColumn.defaultProps = {
  children: undefined,
  isLastItem: false,
  grow: 1,
  id: '',
  className: ''
};
export default ContentColumn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb250ZW50L2NvbHVtbnMvY29udGVudC1jb2x1bW4uY29tcG9uZW50LmpzeCJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsInN0eWxlZCIsImNsYXNzUHJlZml4IiwiQ29sdW1uIiwiZGl2IiwicHJvcHMiLCJncm93IiwidGhlbWUiLCJjb2x1bW4iLCJtaW5XaWR0aCIsImhhbGZHdXR0ZXJXaWR0aCIsIkNvbnRlbnRDb2x1bW4iLCJyZW5kZXIiLCJjaGlsZHJlbiIsImlzTGFzdEl0ZW0iLCJpZCIsImNsYXNzTmFtZSIsImVsZW0iLCJDaGlsZHJlbiIsIm1hcCIsImNoaWxkIiwiaSIsInR5cGUiLCJjbG9uZUVsZW1lbnQiLCJwYXJlbnQiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJQdXJlQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixtQkFBbkIsQyxDQUVBOztBQUNBLFNBQVNDLFdBQVQsUUFBNEIsaUJBQTVCO0FBRUEsSUFBTUMsTUFBTSxHQUFHRixNQUFNLENBQUNHLEdBQVYsb0JBQ0ssVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsSUFBVjtBQUFBLENBRFYsRUFPSyxVQUFBRCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDRSxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLFFBQXZCO0FBQUEsQ0FQVixFQVFLLFVBQUFKLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUcsZUFBaEI7QUFBQSxDQVJWLENBQVo7O0lBV01DLGE7Ozs7Ozs7Ozs7O1NBQ0pDLE0sR0FBQSxrQkFBUztBQUFBOztBQUFBLHNCQU9ILEtBQUtQLEtBUEY7QUFBQSxRQUVMUSxRQUZLLGVBRUxBLFFBRks7QUFBQSxRQUdMQyxVQUhLLGVBR0xBLFVBSEs7QUFBQSxRQUlMUixJQUpLLGVBSUxBLElBSks7QUFBQSxRQUtMUyxFQUxLLGVBS0xBLEVBTEs7QUFBQSxRQU1MQyxTQU5LLGVBTUxBLFNBTks7QUFRUCxXQUNFLG9CQUFDLE1BQUQ7QUFDRSxNQUFBLElBQUksRUFBRVYsSUFEUjtBQUVFLE1BQUEsVUFBVSxFQUFFUSxVQUZkO0FBR0UsTUFBQSxTQUFTLEVBQUtaLFdBQUwsZ0JBQTJCYyxTQUh0QztBQUlFLE1BQUEsR0FBRyxFQUFFLGFBQUNDLElBQUQsRUFBVTtBQUNiLFFBQUEsS0FBSSxDQUFDVCxNQUFMLEdBQWNTLElBQWQ7QUFDRCxPQU5IO0FBT0UsTUFBQSxFQUFFLEVBQUVGO0FBUE4sT0FTR2hCLEtBQUssQ0FBQ21CLFFBQU4sQ0FBZUMsR0FBZixDQUFtQk4sUUFBbkIsRUFBNkIsVUFBQ08sS0FBRCxFQUFRQyxDQUFSLEVBQWM7QUFDMUM7QUFDQSxVQUFJLE9BQU9ELEtBQUssQ0FBQ0UsSUFBYixLQUFzQixRQUExQixFQUFvQyxPQUFPRixLQUFQLENBRk0sQ0FJMUM7O0FBQ0EsYUFBT3JCLEtBQUssQ0FBQ3dCLFlBQU4sQ0FBbUJILEtBQW5CLEVBQTBCO0FBQy9CSSxRQUFBQSxNQUFNLEVBQUUsS0FBSSxDQUFDaEIsTUFEa0I7QUFFL0JNLFFBQUFBLFVBQVUsRUFBRU8sQ0FBQyxLQUFLUixRQUFRLENBQUNZLE1BQVQsR0FBa0IsQ0FBeEIsSUFBNkJaLFFBQVEsQ0FBQ1ksTUFBVCxLQUFvQkM7QUFGOUIsT0FBMUIsQ0FBUDtBQUlELEtBVEEsQ0FUSCxDQURGO0FBc0JELEc7OztFQS9CeUIzQixLQUFLLENBQUM0QixhOztBQTBDbENoQixhQUFhLENBQUNpQixZQUFkLEdBQTZCO0FBQzNCZixFQUFBQSxRQUFRLEVBQUVhLFNBRGlCO0FBRTNCWixFQUFBQSxVQUFVLEVBQUUsS0FGZTtBQUczQlIsRUFBQUEsSUFBSSxFQUFFLENBSHFCO0FBSTNCUyxFQUFBQSxFQUFFLEVBQUUsRUFKdUI7QUFLM0JDLEVBQUFBLFNBQVMsRUFBRTtBQUxnQixDQUE3QjtBQVFBLGVBQWVMLGFBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG4vLyBBcHAgaW1wb3J0c1xuaW1wb3J0IHsgY2xhc3NQcmVmaXggfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xuXG5jb25zdCBDb2x1bW4gPSBzdHlsZWQuZGl2YFxuICAgIGZsZXgtZ3JvdzogJHtwcm9wcyA9PiBwcm9wcy5ncm93fTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWluLXdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbHVtbi5taW5XaWR0aH07XG4gICAgcGFkZGluZzogMCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmhhbGZHdXR0ZXJXaWR0aH07XG5gO1xuXG5jbGFzcyBDb250ZW50Q29sdW1uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGlzTGFzdEl0ZW0sXG4gICAgICBncm93LFxuICAgICAgaWQsXG4gICAgICBjbGFzc05hbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2x1bW5cbiAgICAgICAgZ3Jvdz17Z3Jvd31cbiAgICAgICAgaXNMYXN0SXRlbT17aXNMYXN0SXRlbX1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc1ByZWZpeH1fY29sdW1uICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgIHJlZj17KGVsZW0pID0+IHtcbiAgICAgICAgICB0aGlzLmNvbHVtbiA9IGVsZW07XG4gICAgICAgIH19XG4gICAgICAgIGlkPXtpZH1cbiAgICAgID5cbiAgICAgICAge1JlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiB7XG4gICAgICAgICAgLy8gSWYgaXQncyBhIHJlZ3VsYXIgRE9NIG5vZGVcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnR5cGUgPT09ICdzdHJpbmcnKSByZXR1cm4gY2hpbGQ7XG5cbiAgICAgICAgICAvLyBJZiBpdCdzIGEgUmVhY3QgY29tcG9uZW50IChlLmcuIENvbnRlbnQuQ2FyZClcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICBwYXJlbnQ6IHRoaXMuY29sdW1uLFxuICAgICAgICAgICAgaXNMYXN0SXRlbTogaSA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSB8fCBjaGlsZHJlbi5sZW5ndGggPT09IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSl9XG4gICAgICA8L0NvbHVtbj5cbiAgICApO1xuICB9XG59XG5cbkNvbnRlbnRDb2x1bW4ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGlzTGFzdEl0ZW06IFByb3BUeXBlcy5ib29sLFxuICBncm93OiBQcm9wVHlwZXMubnVtYmVyLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuQ29udGVudENvbHVtbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoaWxkcmVuOiB1bmRlZmluZWQsXG4gIGlzTGFzdEl0ZW06IGZhbHNlLFxuICBncm93OiAxLFxuICBpZDogJycsXG4gIGNsYXNzTmFtZTogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50Q29sdW1uO1xuIl19