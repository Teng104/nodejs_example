var server = require("./serverC");
var router = require("./routerC");
var requestHandlers = require("./requestHandlersC");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);
