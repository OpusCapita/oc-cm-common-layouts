// Certain variable values are temporarily imported from oc-cm-common-styles
import vars from '@opuscapita/oc-cm-common-styles/styles/_variables.scss';
import colors from '@opuscapita/oc-cm-common-styles/styles/_colors.scss';

/**
 * Keep this alphabetical order if possible
 */
export default {
  colors: colors,
  column: {
    minWidth: '400px'
  },
  contentBackgroundColor: vars.colorContentBackground,
  formControls: {
    button: {
      backgroundColor: colors.colorButtonNormal,
      primaryBackgroundColor: colors.colorButtonPriorityNormal,
      textColor: colors.colorWhite,
      minWidth: '70px'
    },
    input: {
      borderColor: colors.colorGray,
      focusBorderColor: colors.colorYellow,
      height: '34px'
    }
  },
  halfGutterWidth: '0.5rem',
  header: {
    height: vars.heightNavbar,
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
      fontSize: vars.fontSizeLarge
    }
  },
  inputRow: {
    flexDirection: 'row',
    labelWidth: '225px',
    errorContainer: {
      height: '1.5rem'
    },
    requiredIndicator: {
      fontSize: vars.fontSizeLarge
    }
  },
  screenSizes: {
    medium: '40rem',
    large: '64rem',
    xLarge: '75rem'
  },
  text: {
    title: {
      fontSize: vars.fontSizeMedium,
      fontWeight: vars.fontWeightBold
    },
    subTitle: {
      fontSize: vars.fontSizeMedium,
      fontWeight: vars.fontWeightNormal
    },
    error: {
      fontSize: vars.fontSizeSmall,
      color: colors.colorError
    }
  }
};