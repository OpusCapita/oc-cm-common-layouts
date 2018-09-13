'use strict';

exports.__esModule = true;
var classPrefix = exports.classPrefix = 'oc-layout';

var theme = exports.theme = {
  gutterWidth: '1rem',
  halfGutterWidth: '0.5rem',
  contentBackgroundColor: '#fff',
  container: {
    inputRow: 'row',
    inputColumn: 'column'
  },
  header: {
    height: '4rem',
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
      fontSize: '18px'
    }
  },
  inputColumn: {
    labelWidth: '225px',
    labelContainerLineHeight: '1.5rem',
    errorContainer: {
      height: '1.5rem'
    },
    requiredIndicator: {
      fontSize: '18px'
    }
  },
  text: {
    title: {
      fontSize: '16px',
      fontWeight: 'bold'
    },
    subTitle: {
      fontSize: '18px',
      fontWeight: 'normal'
    },
    error: {
      fontSize: '10px',
      color: '#D82515'
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiY2xhc3NQcmVmaXgiLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiaGFsZkd1dHRlcldpZHRoIiwiY29udGVudEJhY2tncm91bmRDb2xvciIsImNvbnRhaW5lciIsImlucHV0Um93IiwiaW5wdXRDb2x1bW4iLCJoZWFkZXIiLCJoZWlnaHQiLCJidXR0b24iLCJjb2x1bW4iLCJtaW5XaWR0aCIsImxhYmVsV2lkdGgiLCJsYWJlbENvbnRhaW5lckxpbmVIZWlnaHQiLCJlcnJvckNvbnRhaW5lciIsInJlcXVpcmVkSW5kaWNhdG9yIiwiZm9udFNpemUiLCJ0ZXh0IiwidGl0bGUiLCJmb250V2VpZ2h0Iiwic3ViVGl0bGUiLCJlcnJvciIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7QUFBTyxJQUFNQSxvQ0FBYyxXQUFwQjs7QUFFQSxJQUFNQyx3QkFBUTtBQUNuQkMsZUFBYSxNQURNO0FBRW5CQyxtQkFBaUIsUUFGRTtBQUduQkMsMEJBQXdCLE1BSEw7QUFJbkJDLGFBQVc7QUFDVEMsY0FBVSxLQUREO0FBRVRDLGlCQUFhO0FBRkosR0FKUTtBQVFuQkMsVUFBUTtBQUNOQyxZQUFRLE1BREY7QUFFTkMsWUFBUTtBQUNORCxjQUFRO0FBREY7QUFGRixHQVJXO0FBY25CRSxVQUFRO0FBQ05DLGNBQVU7QUFESixHQWRXO0FBaUJuQk4sWUFBVTtBQUNSTyxnQkFBWSxPQURKO0FBRVJDLDhCQUEwQixNQUZsQjtBQUdSQyxvQkFBZ0I7QUFDZE4sY0FBUTtBQURNLEtBSFI7QUFNUk8sdUJBQW1CO0FBQ2pCQyxnQkFBVTtBQURPO0FBTlgsR0FqQlM7QUEyQm5CVixlQUFhO0FBQ1hNLGdCQUFZLE9BREQ7QUFFWEMsOEJBQTBCLFFBRmY7QUFHWEMsb0JBQWdCO0FBQ2ROLGNBQVE7QUFETSxLQUhMO0FBTVhPLHVCQUFtQjtBQUNqQkMsZ0JBQVU7QUFETztBQU5SLEdBM0JNO0FBcUNuQkMsUUFBTTtBQUNKQyxXQUFPO0FBQ0xGLGdCQUFVLE1BREw7QUFFTEcsa0JBQVk7QUFGUCxLQURIO0FBS0pDLGNBQVU7QUFDUkosZ0JBQVUsTUFERjtBQUVSRyxrQkFBWTtBQUZKLEtBTE47QUFTSkUsV0FBTztBQUNMTCxnQkFBVSxNQURMO0FBRUxNLGFBQU87QUFGRjtBQVRIO0FBckNhLENBQWQiLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNsYXNzUHJlZml4ID0gJ29jLWxheW91dCc7XG5cbmV4cG9ydCBjb25zdCB0aGVtZSA9IHtcbiAgZ3V0dGVyV2lkdGg6ICcxcmVtJyxcbiAgaGFsZkd1dHRlcldpZHRoOiAnMC41cmVtJyxcbiAgY29udGVudEJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBjb250YWluZXI6IHtcbiAgICBpbnB1dFJvdzogJ3JvdycsXG4gICAgaW5wdXRDb2x1bW46ICdjb2x1bW4nLFxuICB9LFxuICBoZWFkZXI6IHtcbiAgICBoZWlnaHQ6ICc0cmVtJyxcbiAgICBidXR0b246IHtcbiAgICAgIGhlaWdodDogJzJyZW0nLFxuICAgIH0sXG4gIH0sXG4gIGNvbHVtbjoge1xuICAgIG1pbldpZHRoOiAnNDAwcHgnLFxuICB9LFxuICBpbnB1dFJvdzoge1xuICAgIGxhYmVsV2lkdGg6ICcyMjVweCcsXG4gICAgbGFiZWxDb250YWluZXJMaW5lSGVpZ2h0OiAnM3JlbScsXG4gICAgZXJyb3JDb250YWluZXI6IHtcbiAgICAgIGhlaWdodDogJzEuNXJlbScsXG4gICAgfSxcbiAgICByZXF1aXJlZEluZGljYXRvcjoge1xuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICB9LFxuICB9LFxuICBpbnB1dENvbHVtbjoge1xuICAgIGxhYmVsV2lkdGg6ICcyMjVweCcsXG4gICAgbGFiZWxDb250YWluZXJMaW5lSGVpZ2h0OiAnMS41cmVtJyxcbiAgICBlcnJvckNvbnRhaW5lcjoge1xuICAgICAgaGVpZ2h0OiAnMS41cmVtJyxcbiAgICB9LFxuICAgIHJlcXVpcmVkSW5kaWNhdG9yOiB7XG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgIH0sXG4gIH0sXG4gIHRleHQ6IHtcbiAgICB0aXRsZToge1xuICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICB9LFxuICAgIHN1YlRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgfSxcbiAgICBlcnJvcjoge1xuICAgICAgZm9udFNpemU6ICcxMHB4JyxcbiAgICAgIGNvbG9yOiAnI0Q4MjUxNScsXG4gICAgfSxcbiAgfSxcbn07XG4iXX0=