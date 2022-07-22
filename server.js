var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: './project',            // required, the root of the server file tree
  port: 8000 
  // optional, will set "X-Powered-by" HTTP header


});
 
server.start(function () {
  console.log('Server listening to', server.port);
});