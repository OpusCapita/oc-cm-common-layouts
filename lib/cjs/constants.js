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
    labelWidth: '225px',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiY2xhc3NQcmVmaXgiLCJ0aGVtZSIsImd1dHRlcldpZHRoIiwiaGFsZkd1dHRlcldpZHRoIiwiY29udGVudEJhY2tncm91bmRDb2xvciIsImNhcmQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWFkZXJIZWlnaHQiLCJoZWFkZXIiLCJoZWlnaHQiLCJidXR0b24iLCJjb2x1bW4iLCJtaW5XaWR0aCIsImlucHV0Um93IiwibGFiZWxXaWR0aCIsImVycm9yQ29udGFpbmVyIiwicmVxdWlyZWRJbmRpY2F0b3IiLCJmb250U2l6ZSIsInRleHQiLCJ0aXRsZSIsImZvbnRXZWlnaHQiLCJzdWJUaXRsZSIsImVycm9yIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7OztBQUFPLElBQU1BLG9DQUFjLFdBQXBCOztBQUVBLElBQU1DLHdCQUFRO0FBQ25CQyxlQUFhLE1BRE07QUFFbkJDLG1CQUFpQixRQUZFO0FBR25CQywwQkFBd0IsTUFITDtBQUluQkMsUUFBTTtBQUNKQyxxQkFBaUIsTUFEYjtBQUVKQyxrQkFBYztBQUZWLEdBSmE7QUFRbkJDLFVBQVE7QUFDTkMsWUFBUSxNQURGO0FBRU5DLFlBQVE7QUFDTkQsY0FBUTtBQURGO0FBRkYsR0FSVztBQWNuQkUsVUFBUTtBQUNOQyxjQUFVO0FBREosR0FkVztBQWlCbkJDLFlBQVU7QUFDUkMsZ0JBQVksT0FESjtBQUVSQyxvQkFBZ0I7QUFDZE4sY0FBUTtBQURNLEtBRlI7QUFLUk8sdUJBQW1CO0FBQ2pCQyxnQkFBVTtBQURPO0FBTFgsR0FqQlM7QUEwQm5CQyxRQUFNO0FBQ0pDLFdBQU87QUFDTEYsZ0JBQVUsTUFETDtBQUVMRyxrQkFBWTtBQUZQLEtBREg7QUFLSkMsY0FBVTtBQUNSSixnQkFBVSxNQURGO0FBRVJHLGtCQUFZO0FBRkosS0FMTjtBQVNKRSxXQUFPO0FBQ0xMLGdCQUFVLE1BREw7QUFFTE0sYUFBTztBQUZGO0FBVEg7QUExQmEsQ0FBZCIsImZpbGUiOiJjb25zdGFudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY2xhc3NQcmVmaXggPSAnb2MtbGF5b3V0JztcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0ge1xuICBndXR0ZXJXaWR0aDogJzFyZW0nLFxuICBoYWxmR3V0dGVyV2lkdGg6ICcwLjVyZW0nLFxuICBjb250ZW50QmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gIGNhcmQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICBoZWFkZXJIZWlnaHQ6ICc1cmVtJyxcbiAgfSxcbiAgaGVhZGVyOiB7XG4gICAgaGVpZ2h0OiAnNHJlbScsXG4gICAgYnV0dG9uOiB7XG4gICAgICBoZWlnaHQ6ICc0cmVtJyxcbiAgICB9LFxuICB9LFxuICBjb2x1bW46IHtcbiAgICBtaW5XaWR0aDogJzQwMHB4JyxcbiAgfSxcbiAgaW5wdXRSb3c6IHtcbiAgICBsYWJlbFdpZHRoOiAnMjI1cHgnLFxuICAgIGVycm9yQ29udGFpbmVyOiB7XG4gICAgICBoZWlnaHQ6ICcxLjVyZW0nLFxuICAgIH0sXG4gICAgcmVxdWlyZWRJbmRpY2F0b3I6IHtcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgfSxcbiAgfSxcbiAgdGV4dDoge1xuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIH0sXG4gICAgc3ViVGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICB9LFxuICAgIGVycm9yOiB7XG4gICAgICBmb250U2l6ZTogJzEwcHgnLFxuICAgICAgY29sb3I6ICcjRDgyNTE1JyxcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==