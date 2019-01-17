export const classPrefix = 'oc-layout';

export const constants = {
  // Currently we do not use roundings, but the variables have been added for
  // Bootstrap compatibility
  borderRadius: {
    base: 0,
    large: 0,
    small: 0,
  },
  navBarHeight: '40px',
  fontWeight: {
    light: 300,
    normal: 400,
    bold: 700,
  },
  // Bootstrap 3 sets html font-size to 62.5% i.e. 10px with Browser's default size being 16px.
  // Bootstrap 4 uses different base font-size and hence these values need to be changed.
  fontSize: {
    h1: '3.6rem', // 36px
    h2: '3rem', // 30px
    h3: '2.4rem', // 24px
    h4: '1.8rem', // 18px

    large: '1.8rem',
    medium: '1.6rem',
    normal: '1.4rem', // default text
    small: '1.2rem',
  },
};
