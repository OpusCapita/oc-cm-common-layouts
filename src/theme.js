// Certain variable values are temporarily imported from oc-cm-common-styles
import vars from '@opuscapita/oc-cm-common-styles/styles/_variables.scss';
import colors from '@opuscapita/oc-cm-common-styles/styles/_colors.scss';

export default {
  gutterWidth: '1rem',
  halfGutterWidth: '0.5rem',
  contentBackgroundColor: vars.colorContentBackground,
  container: {
    inputRow: 'row',
    inputColumn: 'column',
  },
  header: {
    height: vars.heightNavbar,
    button: {
      height: '2rem',
    },
  },
  card: {
    spinner: {
      height: '2rem',
    },
  },
  column: {
    minWidth: '400px',
  },
  inputRow: {
    labelWidth: '225px',
    labelContainerLineHeight: '3rem',
    errorContainer: {
      height: '1.5rem',
    },
    requiredIndicator: {
      fontSize: vars.fontSizeLarge,
    },
  },
  inputColumn: {
    labelWidth: '225px',
    labelContainerLineHeight: '1.5rem',
    errorContainer: {
      height: '1.5rem',
    },
    requiredIndicator: {
      fontSize: vars.fontSizeLarge,
    },
  },
  text: {
    title: {
      fontSize: vars.fontSizeMedium,
      fontWeight: vars.fontWeightBold,
    },
    subTitle: {
      fontSize: vars.fontSizeMedium,
      fontWeight: vars.fontWeightNormal,
    },
    error: {
      fontSize: vars.fontSizeSmall,
      color: colors.colorError,
    },
  },
  formControls: {
    input: {
      borderColor: colors.colorGray,
      focusBorderColor: colors.colorYellow,
      height: '34px',
    },
    button: {
      backgroundColor: colors.colorButtonNormal,
      primaryBackgroundColor: colors.colorButtonPriorityNormal,
      textColor: colors.colorWhite,
      minWidth: '70px',
    },
  },
};
