// module.exports = { plugins: [ 
//   require('postcss-easy-import')({prefix: '_'}), 
//   require('autoprefixer')({}), 
//   require('postcss-flexbugs-fixes')] 
// }

module.exports = (ctx) => {
  const plugins = {
    autoprefixer: {
      ...ctx.options.autoprefixer,
      flexbox: 'no-2009',
    },
  };

  return { plugins };
};