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