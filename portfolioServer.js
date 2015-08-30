var connect = require("connect");
var serveStatic = require("serve-static");
var port = 5075;
connect().use(serveStatic(".")).listen(port);
console.log("Listening on port " + port + "...");

