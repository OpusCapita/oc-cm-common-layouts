'use strict';

exports.__esModule = true;

var _variables = require('@opuscapita/oc-cm-common-styles/styles/_variables.scss');

var _variables2 = _interopRequireDefault(_variables);

var _colors = require('@opuscapita/oc-cm-common-styles/styles/_colors.scss');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Keep this alphabetical order if possible
 */
// Certain variable values are temporarily imported from oc-cm-common-styles
exports.default = {
  colors: _colors2.default,
  column: {
    minWidth: '400px'
  },
  contentBackgroundColor: _variables2.default.colorContentBackground,
  formControls: {
    button: {
      backgroundColor: _colors2.default.colorButtonNormal,
      primaryBackgroundColor: _colors2.default.colorButtonPriorityNormal,
      textColor: _colors2.default.colorWhite,
      minWidth: '70px'
    },
    input: {
      borderColor: _colors2.default.colorGray,
      focusBorderColor: _colors2.default.colorYellow,
      height: '34px'
    }
  },
  halfGutterWidth: '0.5rem',
  header: {
    height: _variables2.default.heightNavbar,
    button: {
      height: '2rem'
    }
  },
  gutterWidth: '1rem',
  inputColumn: {
    flexDirection: 'column',
    labelWidth: '225px',
    labelContainerLineHeight: '1.5rem',
    errorContainer: {
      height: '1.5rem'
    },
    requiredIndicator: {
      fontSize: _variables2.default.fontSizeLarge
    }
  },
  inputRow: {
    flexDirection: 'row',
    labelWidth: '225px',
    errorContainer: {
      height: '1.5rem'
    },
    requiredIndicator: {
      fontSize: _variables2.default.fontSizeLarge
    }
  },
  screenSizes: {
    medium: '40rem',
    large: '64rem',
    xLarge: '75rem'
  },
  text: {
    title: {
      fontSize: _variables2.default.fontSizeMedium,
      fontWeight: _variables2.default.fontWeightBold
    },
    subTitle: {
      fontSize: _variables2.default.fontSizeMedium,
      fontWeight: _variables2.default.fontWeightNormal
    },
    error: {
      fontSize: _variables2.default.fontSizeSmall,
      color: _colors2.default.colorError
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aGVtZS5qcyJdLCJuYW1lcyI6WyJjb2xvcnMiLCJjb2x1bW4iLCJtaW5XaWR0aCIsImNvbnRlbnRCYWNrZ3JvdW5kQ29sb3IiLCJ2YXJzIiwiY29sb3JDb250ZW50QmFja2dyb3VuZCIsImZvcm1Db250cm9scyIsImJ1dHRvbiIsImJhY2tncm91bmRDb2xvciIsImNvbG9yQnV0dG9uTm9ybWFsIiwicHJpbWFyeUJhY2tncm91bmRDb2xvciIsImNvbG9yQnV0dG9uUHJpb3JpdHlOb3JtYWwiLCJ0ZXh0Q29sb3IiLCJjb2xvcldoaXRlIiwiaW5wdXQiLCJib3JkZXJDb2xvciIsImNvbG9yR3JheSIsImZvY3VzQm9yZGVyQ29sb3IiLCJjb2xvclllbGxvdyIsImhlaWdodCIsImhhbGZHdXR0ZXJXaWR0aCIsImhlYWRlciIsImhlaWdodE5hdmJhciIsImd1dHRlcldpZHRoIiwiaW5wdXRDb2x1bW4iLCJmbGV4RGlyZWN0aW9uIiwibGFiZWxXaWR0aCIsImxhYmVsQ29udGFpbmVyTGluZUhlaWdodCIsImVycm9yQ29udGFpbmVyIiwicmVxdWlyZWRJbmRpY2F0b3IiLCJmb250U2l6ZSIsImZvbnRTaXplTGFyZ2UiLCJpbnB1dFJvdyIsInNjcmVlblNpemVzIiwibWVkaXVtIiwibGFyZ2UiLCJ4TGFyZ2UiLCJ0ZXh0IiwidGl0bGUiLCJmb250U2l6ZU1lZGl1bSIsImZvbnRXZWlnaHQiLCJmb250V2VpZ2h0Qm9sZCIsInN1YlRpdGxlIiwiZm9udFdlaWdodE5vcm1hbCIsImVycm9yIiwiZm9udFNpemVTbWFsbCIsImNvbG9yIiwiY29sb3JFcnJvciJdLCJtYXBwaW5ncyI6Ijs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7QUFKQTtrQkFPZTtBQUNiQSwwQkFEYTtBQUViQyxVQUFRO0FBQ05DLGNBQVU7QUFESixHQUZLO0FBS2JDLDBCQUF3QkMsb0JBQUtDLHNCQUxoQjtBQU1iQyxnQkFBYztBQUNaQyxZQUFRO0FBQ05DLHVCQUFpQlIsaUJBQU9TLGlCQURsQjtBQUVOQyw4QkFBd0JWLGlCQUFPVyx5QkFGekI7QUFHTkMsaUJBQVdaLGlCQUFPYSxVQUhaO0FBSU5YLGdCQUFVO0FBSkosS0FESTtBQU9aWSxXQUFPO0FBQ0xDLG1CQUFhZixpQkFBT2dCLFNBRGY7QUFFTEMsd0JBQWtCakIsaUJBQU9rQixXQUZwQjtBQUdMQyxjQUFRO0FBSEg7QUFQSyxHQU5EO0FBbUJiQyxtQkFBaUIsUUFuQko7QUFvQmJDLFVBQVE7QUFDTkYsWUFBUWYsb0JBQUtrQixZQURQO0FBRU5mLFlBQVE7QUFDTlksY0FBUTtBQURGO0FBRkYsR0FwQks7QUEwQmJJLGVBQWEsTUExQkE7QUEyQmJDLGVBQWE7QUFDWEMsbUJBQWUsUUFESjtBQUVYQyxnQkFBWSxPQUZEO0FBR1hDLDhCQUEwQixRQUhmO0FBSVhDLG9CQUFnQjtBQUNkVCxjQUFRO0FBRE0sS0FKTDtBQU9YVSx1QkFBbUI7QUFDakJDLGdCQUFVMUIsb0JBQUsyQjtBQURFO0FBUFIsR0EzQkE7QUFzQ2JDLFlBQVU7QUFDUlAsbUJBQWUsS0FEUDtBQUVSQyxnQkFBWSxPQUZKO0FBR1JFLG9CQUFnQjtBQUNkVCxjQUFRO0FBRE0sS0FIUjtBQU1SVSx1QkFBbUI7QUFDakJDLGdCQUFVMUIsb0JBQUsyQjtBQURFO0FBTlgsR0F0Q0c7QUFnRGJFLGVBQWE7QUFDWEMsWUFBUSxPQURHO0FBRVhDLFdBQU8sT0FGSTtBQUdYQyxZQUFRO0FBSEcsR0FoREE7QUFxRGJDLFFBQU07QUFDSkMsV0FBTztBQUNMUixnQkFBVTFCLG9CQUFLbUMsY0FEVjtBQUVMQyxrQkFBWXBDLG9CQUFLcUM7QUFGWixLQURIO0FBS0pDLGNBQVU7QUFDUlosZ0JBQVUxQixvQkFBS21DLGNBRFA7QUFFUkMsa0JBQVlwQyxvQkFBS3VDO0FBRlQsS0FMTjtBQVNKQyxXQUFPO0FBQ0xkLGdCQUFVMUIsb0JBQUt5QyxhQURWO0FBRUxDLGFBQU85QyxpQkFBTytDO0FBRlQ7QUFUSDtBQXJETyxDIiwiZmlsZSI6InRoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2VydGFpbiB2YXJpYWJsZSB2YWx1ZXMgYXJlIHRlbXBvcmFyaWx5IGltcG9ydGVkIGZyb20gb2MtY20tY29tbW9uLXN0eWxlc1xuaW1wb3J0IHZhcnMgZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLXN0eWxlcy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzJztcbmltcG9ydCBjb2xvcnMgZnJvbSAnQG9wdXNjYXBpdGEvb2MtY20tY29tbW9uLXN0eWxlcy9zdHlsZXMvX2NvbG9ycy5zY3NzJztcblxuLyoqXG4gKiBLZWVwIHRoaXMgYWxwaGFiZXRpY2FsIG9yZGVyIGlmIHBvc3NpYmxlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29sb3JzLFxuICBjb2x1bW46IHtcbiAgICBtaW5XaWR0aDogJzQwMHB4JyxcbiAgfSxcbiAgY29udGVudEJhY2tncm91bmRDb2xvcjogdmFycy5jb2xvckNvbnRlbnRCYWNrZ3JvdW5kLFxuICBmb3JtQ29udHJvbHM6IHtcbiAgICBidXR0b246IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yQnV0dG9uTm9ybWFsLFxuICAgICAgcHJpbWFyeUJhY2tncm91bmRDb2xvcjogY29sb3JzLmNvbG9yQnV0dG9uUHJpb3JpdHlOb3JtYWwsXG4gICAgICB0ZXh0Q29sb3I6IGNvbG9ycy5jb2xvcldoaXRlLFxuICAgICAgbWluV2lkdGg6ICc3MHB4JyxcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICBib3JkZXJDb2xvcjogY29sb3JzLmNvbG9yR3JheSxcbiAgICAgIGZvY3VzQm9yZGVyQ29sb3I6IGNvbG9ycy5jb2xvclllbGxvdyxcbiAgICAgIGhlaWdodDogJzM0cHgnLFxuICAgIH0sXG4gIH0sXG4gIGhhbGZHdXR0ZXJXaWR0aDogJzAuNXJlbScsXG4gIGhlYWRlcjoge1xuICAgIGhlaWdodDogdmFycy5oZWlnaHROYXZiYXIsXG4gICAgYnV0dG9uOiB7XG4gICAgICBoZWlnaHQ6ICcycmVtJyxcbiAgICB9LFxuICB9LFxuICBndXR0ZXJXaWR0aDogJzFyZW0nLFxuICBpbnB1dENvbHVtbjoge1xuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGxhYmVsV2lkdGg6ICcyMjVweCcsXG4gICAgbGFiZWxDb250YWluZXJMaW5lSGVpZ2h0OiAnMS41cmVtJyxcbiAgICBlcnJvckNvbnRhaW5lcjoge1xuICAgICAgaGVpZ2h0OiAnMS41cmVtJyxcbiAgICB9LFxuICAgIHJlcXVpcmVkSW5kaWNhdG9yOiB7XG4gICAgICBmb250U2l6ZTogdmFycy5mb250U2l6ZUxhcmdlLFxuICAgIH0sXG4gIH0sXG4gIGlucHV0Um93OiB7XG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgbGFiZWxXaWR0aDogJzIyNXB4JyxcbiAgICBlcnJvckNvbnRhaW5lcjoge1xuICAgICAgaGVpZ2h0OiAnMS41cmVtJyxcbiAgICB9LFxuICAgIHJlcXVpcmVkSW5kaWNhdG9yOiB7XG4gICAgICBmb250U2l6ZTogdmFycy5mb250U2l6ZUxhcmdlLFxuICAgIH0sXG4gIH0sXG4gIHNjcmVlblNpemVzOiB7XG4gICAgbWVkaXVtOiAnNDByZW0nLFxuICAgIGxhcmdlOiAnNjRyZW0nLFxuICAgIHhMYXJnZTogJzc1cmVtJyxcbiAgfSxcbiAgdGV4dDoge1xuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogdmFycy5mb250U2l6ZU1lZGl1bSxcbiAgICAgIGZvbnRXZWlnaHQ6IHZhcnMuZm9udFdlaWdodEJvbGQsXG4gICAgfSxcbiAgICBzdWJUaXRsZToge1xuICAgICAgZm9udFNpemU6IHZhcnMuZm9udFNpemVNZWRpdW0sXG4gICAgICBmb250V2VpZ2h0OiB2YXJzLmZvbnRXZWlnaHROb3JtYWwsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgZm9udFNpemU6IHZhcnMuZm9udFNpemVTbWFsbCxcbiAgICAgIGNvbG9yOiBjb2xvcnMuY29sb3JFcnJvcixcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==