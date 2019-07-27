const routes = require('next-routes')
// Setup router.
module.exports = routes()
  .add( 'index', '/')
  .add( 'what')
  .add( 'why')
  .add( 'background')
  .add( 'resources')
  .add( 'bultivisible')