var server = require("./serverA");
var router = require("./routerA");
var requestHandlers = require("./requestHandlersA");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);
