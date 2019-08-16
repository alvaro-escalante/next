if(process.env.NODE_ENV === 'production') {
  module.exports = ctx => {
    const plugins = {
      autoprefixer: {
        ...ctx.options.autoprefixer,
        flexbox: 'no-2009'
      },
      cssnano: { preset: 'default' }
    }
    return { plugins } 
  }
}