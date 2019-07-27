const 
express = require('express'),
next    = require('next'),
// routes = require('./routes'),
app     = next({ dev: 'production' !== process.env.NODE_ENV }), 
handle  = app.getRequestHandler()
// handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  // Create server.
  const server = express()
  // Use our handler for requests.
  // server.use(handler)
  // Don't remove. Important for the server to work. Default route.
  server.get('*', (req, res) => handle(req, res))
  // Get current port.
  const port = process.env.PORT || 8080
  // Error check.
  server.listen(port, err => {
    if ( err ) 
      throw err
    console.log(`> Ready on port ${port}...`)
  })
})