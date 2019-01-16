// Certain variable values are temporarily imported from oc-cm-common-styles
import { colors } from './colors';

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
    height: '40px',
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
      fontSize: '1.8rem',
    },
  },
  inputRow: {
    flexDirection: 'row',
    labelWidth: '225px',
    errorContainer: {
      height: '1.5rem',
    },
    requiredIndicator: {
      fontSize: '1.8rem',
    },
  },
  screenSizes: {
    medium: '40rem',
    large: '64rem',
    xLarge: '75rem',
  },
  text: {
    title: {
      fontSize: '1.6rem',
      fontWeight: 700,
    },
    subTitle: {
      fontSize: '1.6rem',
      fontWeight: 400,
    },
    error: {
      fontSize: '1.2rem',
      color: colors.red,
    },
  },
};
