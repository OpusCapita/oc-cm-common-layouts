'use strict';

exports.__esModule = true;

var _variables = require('@opuscapita/oc-cm-common-styles/styles/_variables.scss');

var _variables2 = _interopRequireDefault(_variables);

var _colors = require('@opuscapita/oc-cm-common-styles/styles/_colors.scss');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Certain variable values are temporarily imported from oc-cm-common-styles
exports.default = {
  gutterWidth: '1rem',
  halfGutterWidth: '0.5rem',
  contentBackgroundColor: _variables2.default.colorContentBackground,
  container: {
    inputRow: 'row',
    inputColumn: 'column'
  },
  header: {
    height: _variables2.default.heightNavbar,
    button: {
      height: '2rem'
    }
  },
  column: {
    minWidth: '400px'
  },
  inputRow: {
    labelWidth: '225px',
    labelContainerLineHeight: '3rem',
    errorContainer: {
      height: '1.5rem'
    },
    requiredIndicator: {
      fontSize: _variables2.default.fontSizeLarge
    }
  },
  inputColumn: {
    labelWidth: '225px',
    labelContainerLineHeight: '1.5rem',
    errorContainer: {
      height: '1.5rem'
    },
    requiredIndicator: {
      fontSize: _variables2.default.fontSizeLarge
    }
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
  },
  formControls: {
    input: {
      borderColor: _colors2.default.colorGray,
      focusBorderColor: _colors2.default.colorYellow,
      height: '34px'
    },
    button: {
      backgroundColor: _colors2.default.colorButtonNormal,
      primaryBackgroundColor: _colors2.default.colorButtonPriorityNormal,
      textColor: _colors2.default.colorWhite,
      minWidth: '70px'
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90aGVtZS5qcyJdLCJuYW1lcyI6WyJndXR0ZXJXaWR0aCIsImhhbGZHdXR0ZXJXaWR0aCIsImNvbnRlbnRCYWNrZ3JvdW5kQ29sb3IiLCJ2YXJzIiwiY29sb3JDb250ZW50QmFja2dyb3VuZCIsImNvbnRhaW5lciIsImlucHV0Um93IiwiaW5wdXRDb2x1bW4iLCJoZWFkZXIiLCJoZWlnaHQiLCJoZWlnaHROYXZiYXIiLCJidXR0b24iLCJjb2x1bW4iLCJtaW5XaWR0aCIsImxhYmVsV2lkdGgiLCJsYWJlbENvbnRhaW5lckxpbmVIZWlnaHQiLCJlcnJvckNvbnRhaW5lciIsInJlcXVpcmVkSW5kaWNhdG9yIiwiZm9udFNpemUiLCJmb250U2l6ZUxhcmdlIiwidGV4dCIsInRpdGxlIiwiZm9udFNpemVNZWRpdW0iLCJmb250V2VpZ2h0IiwiZm9udFdlaWdodEJvbGQiLCJzdWJUaXRsZSIsImZvbnRXZWlnaHROb3JtYWwiLCJlcnJvciIsImZvbnRTaXplU21hbGwiLCJjb2xvciIsImNvbG9ycyIsImNvbG9yRXJyb3IiLCJmb3JtQ29udHJvbHMiLCJpbnB1dCIsImJvcmRlckNvbG9yIiwiY29sb3JHcmF5IiwiZm9jdXNCb3JkZXJDb2xvciIsImNvbG9yWWVsbG93IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3JCdXR0b25Ob3JtYWwiLCJwcmltYXJ5QmFja2dyb3VuZENvbG9yIiwiY29sb3JCdXR0b25Qcmlvcml0eU5vcm1hbCIsInRleHRDb2xvciIsImNvbG9yV2hpdGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFGQTtrQkFJZTtBQUNiQSxlQUFhLE1BREE7QUFFYkMsbUJBQWlCLFFBRko7QUFHYkMsMEJBQXdCQyxvQkFBS0Msc0JBSGhCO0FBSWJDLGFBQVc7QUFDVEMsY0FBVSxLQUREO0FBRVRDLGlCQUFhO0FBRkosR0FKRTtBQVFiQyxVQUFRO0FBQ05DLFlBQVFOLG9CQUFLTyxZQURQO0FBRU5DLFlBQVE7QUFDTkYsY0FBUTtBQURGO0FBRkYsR0FSSztBQWNiRyxVQUFRO0FBQ05DLGNBQVU7QUFESixHQWRLO0FBaUJiUCxZQUFVO0FBQ1JRLGdCQUFZLE9BREo7QUFFUkMsOEJBQTBCLE1BRmxCO0FBR1JDLG9CQUFnQjtBQUNkUCxjQUFRO0FBRE0sS0FIUjtBQU1SUSx1QkFBbUI7QUFDakJDLGdCQUFVZixvQkFBS2dCO0FBREU7QUFOWCxHQWpCRztBQTJCYlosZUFBYTtBQUNYTyxnQkFBWSxPQUREO0FBRVhDLDhCQUEwQixRQUZmO0FBR1hDLG9CQUFnQjtBQUNkUCxjQUFRO0FBRE0sS0FITDtBQU1YUSx1QkFBbUI7QUFDakJDLGdCQUFVZixvQkFBS2dCO0FBREU7QUFOUixHQTNCQTtBQXFDYkMsUUFBTTtBQUNKQyxXQUFPO0FBQ0xILGdCQUFVZixvQkFBS21CLGNBRFY7QUFFTEMsa0JBQVlwQixvQkFBS3FCO0FBRlosS0FESDtBQUtKQyxjQUFVO0FBQ1JQLGdCQUFVZixvQkFBS21CLGNBRFA7QUFFUkMsa0JBQVlwQixvQkFBS3VCO0FBRlQsS0FMTjtBQVNKQyxXQUFPO0FBQ0xULGdCQUFVZixvQkFBS3lCLGFBRFY7QUFFTEMsYUFBT0MsaUJBQU9DO0FBRlQ7QUFUSCxHQXJDTztBQW1EYkMsZ0JBQWM7QUFDWkMsV0FBTztBQUNMQyxtQkFBYUosaUJBQU9LLFNBRGY7QUFFTEMsd0JBQWtCTixpQkFBT08sV0FGcEI7QUFHTDVCLGNBQVE7QUFISCxLQURLO0FBTVpFLFlBQVE7QUFDTjJCLHVCQUFpQlIsaUJBQU9TLGlCQURsQjtBQUVOQyw4QkFBd0JWLGlCQUFPVyx5QkFGekI7QUFHTkMsaUJBQVdaLGlCQUFPYSxVQUhaO0FBSU45QixnQkFBVTtBQUpKO0FBTkk7QUFuREQsQyIsImZpbGUiOiJ0aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENlcnRhaW4gdmFyaWFibGUgdmFsdWVzIGFyZSB0ZW1wb3JhcmlseSBpbXBvcnRlZCBmcm9tIG9jLWNtLWNvbW1vbi1zdHlsZXNcbmltcG9ydCB2YXJzIGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1zdHlsZXMvc3R5bGVzL192YXJpYWJsZXMuc2Nzcyc7XG5pbXBvcnQgY29sb3JzIGZyb20gJ0BvcHVzY2FwaXRhL29jLWNtLWNvbW1vbi1zdHlsZXMvc3R5bGVzL19jb2xvcnMuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ3V0dGVyV2lkdGg6ICcxcmVtJyxcbiAgaGFsZkd1dHRlcldpZHRoOiAnMC41cmVtJyxcbiAgY29udGVudEJhY2tncm91bmRDb2xvcjogdmFycy5jb2xvckNvbnRlbnRCYWNrZ3JvdW5kLFxuICBjb250YWluZXI6IHtcbiAgICBpbnB1dFJvdzogJ3JvdycsXG4gICAgaW5wdXRDb2x1bW46ICdjb2x1bW4nLFxuICB9LFxuICBoZWFkZXI6IHtcbiAgICBoZWlnaHQ6IHZhcnMuaGVpZ2h0TmF2YmFyLFxuICAgIGJ1dHRvbjoge1xuICAgICAgaGVpZ2h0OiAnMnJlbScsXG4gICAgfSxcbiAgfSxcbiAgY29sdW1uOiB7XG4gICAgbWluV2lkdGg6ICc0MDBweCcsXG4gIH0sXG4gIGlucHV0Um93OiB7XG4gICAgbGFiZWxXaWR0aDogJzIyNXB4JyxcbiAgICBsYWJlbENvbnRhaW5lckxpbmVIZWlnaHQ6ICczcmVtJyxcbiAgICBlcnJvckNvbnRhaW5lcjoge1xuICAgICAgaGVpZ2h0OiAnMS41cmVtJyxcbiAgICB9LFxuICAgIHJlcXVpcmVkSW5kaWNhdG9yOiB7XG4gICAgICBmb250U2l6ZTogdmFycy5mb250U2l6ZUxhcmdlLFxuICAgIH0sXG4gIH0sXG4gIGlucHV0Q29sdW1uOiB7XG4gICAgbGFiZWxXaWR0aDogJzIyNXB4JyxcbiAgICBsYWJlbENvbnRhaW5lckxpbmVIZWlnaHQ6ICcxLjVyZW0nLFxuICAgIGVycm9yQ29udGFpbmVyOiB7XG4gICAgICBoZWlnaHQ6ICcxLjVyZW0nLFxuICAgIH0sXG4gICAgcmVxdWlyZWRJbmRpY2F0b3I6IHtcbiAgICAgIGZvbnRTaXplOiB2YXJzLmZvbnRTaXplTGFyZ2UsXG4gICAgfSxcbiAgfSxcbiAgdGV4dDoge1xuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogdmFycy5mb250U2l6ZU1lZGl1bSxcbiAgICAgIGZvbnRXZWlnaHQ6IHZhcnMuZm9udFdlaWdodEJvbGQsXG4gICAgfSxcbiAgICBzdWJUaXRsZToge1xuICAgICAgZm9udFNpemU6IHZhcnMuZm9udFNpemVNZWRpdW0sXG4gICAgICBmb250V2VpZ2h0OiB2YXJzLmZvbnRXZWlnaHROb3JtYWwsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgZm9udFNpemU6IHZhcnMuZm9udFNpemVTbWFsbCxcbiAgICAgIGNvbG9yOiBjb2xvcnMuY29sb3JFcnJvcixcbiAgICB9LFxuICB9LFxuICBmb3JtQ29udHJvbHM6IHtcbiAgICBpbnB1dDoge1xuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9ycy5jb2xvckdyYXksXG4gICAgICBmb2N1c0JvcmRlckNvbG9yOiBjb2xvcnMuY29sb3JZZWxsb3csXG4gICAgICBoZWlnaHQ6ICczNHB4JyxcbiAgICB9LFxuICAgIGJ1dHRvbjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JCdXR0b25Ob3JtYWwsXG4gICAgICBwcmltYXJ5QmFja2dyb3VuZENvbG9yOiBjb2xvcnMuY29sb3JCdXR0b25Qcmlvcml0eU5vcm1hbCxcbiAgICAgIHRleHRDb2xvcjogY29sb3JzLmNvbG9yV2hpdGUsXG4gICAgICBtaW5XaWR0aDogJzcwcHgnLFxuICAgIH0sXG4gIH0sXG59O1xuIl19