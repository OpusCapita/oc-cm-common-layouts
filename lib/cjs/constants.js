'use strict';

exports.__esModule = true;
var classPrefix = exports.classPrefix = 'oc-layout';

var theme = exports.theme = {
  gutterWidth: '1rem',
  halfGutterWidth: '0.5rem',
  contentBackgroundColor: '#fff',
  card: {
    backgroundColor: '#fff',
    headerHeight: '5rem'
  },
  header: {
    height: '4rem',
    button: {
      height: '4rem'
    }
  },
  column: {
    minWidth: '400px'
  },
  inputRow: {
    labelWidth: '250px',
    errorContainer: {
      height: '2.5rem'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiY2xhc3NQcmVmaXgiLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiaGFsZkd1dHRlcldpZHRoIiwiY29udGVudEJhY2tncm91bmRDb2xvciIsImNhcmQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWFkZXJIZWlnaHQiLCJoZWFkZXIiLCJoZWlnaHQiLCJidXR0b24iLCJjb2x1bW4iLCJtaW5XaWR0aCIsImlucHV0Um93IiwibGFiZWxXaWR0aCIsImVycm9yQ29udGFpbmVyIiwidGV4dCIsInRpdGxlIiwiZm9udFNpemUiLCJmb250V2VpZ2h0Iiwic3ViVGl0bGUiLCJlcnJvciIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7QUFBTyxJQUFNQSxvQ0FBYyxXQUFwQjs7QUFFQSxJQUFNQyx3QkFBUTtBQUNuQkMsZUFBYSxNQURNO0FBRW5CQyxtQkFBaUIsUUFGRTtBQUduQkMsMEJBQXdCLE1BSEw7QUFJbkJDLFFBQU07QUFDSkMscUJBQWlCLE1BRGI7QUFFSkMsa0JBQWM7QUFGVixHQUphO0FBUW5CQyxVQUFRO0FBQ05DLFlBQVEsTUFERjtBQUVOQyxZQUFRO0FBQ05ELGNBQVE7QUFERjtBQUZGLEdBUlc7QUFjbkJFLFVBQVE7QUFDTkMsY0FBVTtBQURKLEdBZFc7QUFpQm5CQyxZQUFVO0FBQ1JDLGdCQUFZLE9BREo7QUFFUkMsb0JBQWdCO0FBQ2ROLGNBQVE7QUFETTtBQUZSLEdBakJTO0FBdUJuQk8sUUFBTTtBQUNKQyxXQUFPO0FBQ0xDLGdCQUFVLE1BREw7QUFFTEMsa0JBQVk7QUFGUCxLQURIO0FBS0pDLGNBQVU7QUFDUkYsZ0JBQVUsTUFERjtBQUVSQyxrQkFBWTtBQUZKLEtBTE47QUFTSkUsV0FBTztBQUNMSCxnQkFBVSxNQURMO0FBRUxJLGFBQU87QUFGRjtBQVRIO0FBdkJhLENBQWQiLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNsYXNzUHJlZml4ID0gJ29jLWxheW91dCc7XG5cbmV4cG9ydCBjb25zdCB0aGVtZSA9IHtcbiAgZ3V0dGVyV2lkdGg6ICcxcmVtJyxcbiAgaGFsZkd1dHRlcldpZHRoOiAnMC41cmVtJyxcbiAgY29udGVudEJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICBjYXJkOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgaGVhZGVySGVpZ2h0OiAnNXJlbScsXG4gIH0sXG4gIGhlYWRlcjoge1xuICAgIGhlaWdodDogJzRyZW0nLFxuICAgIGJ1dHRvbjoge1xuICAgICAgaGVpZ2h0OiAnNHJlbScsXG4gICAgfSxcbiAgfSxcbiAgY29sdW1uOiB7XG4gICAgbWluV2lkdGg6ICc0MDBweCcsXG4gIH0sXG4gIGlucHV0Um93OiB7XG4gICAgbGFiZWxXaWR0aDogJzI1MHB4JyxcbiAgICBlcnJvckNvbnRhaW5lcjoge1xuICAgICAgaGVpZ2h0OiAnMi41cmVtJyxcbiAgICB9LFxuICB9LFxuICB0ZXh0OiB7XG4gICAgdGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgfSxcbiAgICBzdWJUaXRsZToge1xuICAgICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIH0sXG4gICAgZXJyb3I6IHtcbiAgICAgIGZvbnRTaXplOiAnMTBweCcsXG4gICAgICBjb2xvcjogJyNEODI1MTUnLFxuICAgIH0sXG4gIH0sXG59O1xuIl19