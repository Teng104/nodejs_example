var server = require("./serverY");
var router = require("./routerY");
var requestHandlers = require("./requestHandlersY");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);
