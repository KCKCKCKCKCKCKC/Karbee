module.exports = {
    plugins: {
      'postcss-preset-mantine': {},
      'postcss-simple-vars': {
        variables: {
          'mantine-breakpoint-xs': '36em',
          'mantine-breakpoint-sm': '48em',
          'mantine-breakpoint-md': '62em',
          'mantine-breakpoint-lg': '75em',
          'mantine-breakpoint-xl': '88em',
        },
      },
    },
  };

/* need to import its CSS or set up PostCSS to handle it.
 This is where you specify any additional CSS files or
  configurations required for Mantine UI to work properly. */
  
/*postcss-preset-mantine provides several CSS functions 
and mixins to help you write styles. It is not required 
to use it, but highly recommended. All demos that feature 
styles assume that you have this preset installed. */