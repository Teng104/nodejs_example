var server = require("./serverB");
var router = require("./routerB");
var requestHandlers = require("./requestHandlersB");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);
