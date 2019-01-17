// Certain variable values are temporarily imported from oc-cm-common-styles
import { colors } from './colors';
import { constants } from './constants';

/**
 * Keep this alphabetical order if possible
 */
export default {
  colors,
  column: {
    minWidth: '400px',
  },
  contentBackgroundColor: colors.white,
  formControls: {
    button: {
      backgroundColor: colors.grey10,
      primaryBackgroundColor: colors.orange2,
      textColor: colors.white,
      minWidth: '70px',
    },
    input: {
      borderColor: colors.grey7,
      focusBorderColor: colors.yellow,
      height: '34px',
    },
  },
  halfGutterWidth: '0.5rem',
  header: {
    height: constants.navBarHeight,
    button: {
      height: '2rem',
    },
  },
  gutterWidth: '1rem',
  inputColumn: {
    flexDirection: 'column',
    labelWidth: '225px',
    labelContainerLineHeight: '1.5rem',
    errorContainer: {
      height: '1.5rem',
    },
    requiredIndicator: {
      fontSize: constants.fontSize.h4,
    },
  },
  inputRow: {
    flexDirection: 'row',
    labelWidth: '225px',
    errorContainer: {
      height: '1.5rem',
    },
    requiredIndicator: {
      fontSize: constants.fontSize.h4,
    },
  },
  screenSizes: {
    medium: '40rem',
    large: '64rem',
    xLarge: '75rem',
  },
  text: {
    title: {
      fontSize: constants.fontSize.medium,
      fontWeight: constants.fontWeight.bold,
    },
    subTitle: {
      fontSize: constants.fontSize.medium,
      fontWeight: constants.fontWeight.normal,
    },
    error: {
      fontSize: constants.fontSize.small,
      color: colors.red,
    },
  },
};
