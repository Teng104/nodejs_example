var server = require("./serverX");
var router = require("./routerX");
var requestHandlers = require("./requestHandlersX");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);
