const http = require("http");
const express = require("./rest.js");

//Create http server
const server = http.createServer(express);

//Listen to calls from this port
server.listen(4200);
